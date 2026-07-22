/**
 * toggle-map.js — "27 States" vs. "Federal Bloc" layer-switch map
 *
 * One base map, one data-layer toggle. No animation beyond opacity crossfade.
 *
 * Layer A ("Fragmented"): choropleth per member state
 *   — three data options via segmented control: GDP, defence spend, population
 * Layer B ("Federal"):    single EU-wide polygon, one aggregate number
 *   — labeled "EU aggregate" — real arithmetic on Eurostat/SIPRI figures
 *
 * Projection: D3 Azimuthal Equal Area (≈ EPSG:3035)
 * Boundaries: Natural Earth 110m, public domain
 *
 * Usage:
 *   import { renderToggleMap } from './toggle-map.js';
 *   renderToggleMap('#toggle-map-container', gdpData, defenceData, popData);
 */

import * as d3 from 'd3';

const EU_MEMBERS = new Set([
  'AT','BE','BG','CY','CZ','DE','DK','EE','ES','FI',
  'FR','GR','HR','HU','IE','IT','LT','LU','LV','MT',
  'NL','PL','PT','RO','SE','SI','SK'
]);

const NUMERIC_TO_ALPHA2 = {
  '040':'AT','056':'BE','100':'BG','196':'CY','203':'CZ',
  '276':'DE','208':'DK','233':'EE','724':'ES','246':'FI',
  '250':'FR','300':'GR','191':'HR','348':'HU','372':'IE',
  '380':'IT','440':'LT','442':'LU','428':'LV','470':'MT',
  '528':'NL','616':'PL','620':'PT','642':'RO','752':'SE',
  '705':'SI','703':'SK',
  '578':'NO','756':'CH','826':'GB','804':'UA','792':'TR',
  '643':'RU','008':'AL','070':'BA','688':'RS','499':'ME','807':'MK'
};

const INK   = '#0B1F3A';
const BRONZE = '#B9942F';
const GREY  = '#C9C2B2';
const PAPER = '#F6F3EA';
const SEC   = '#4A5568';
const FONT_MONO = "'IBM Plex Mono', monospace";

/**
 * @param {string} containerSelector
 * @param {object} gdpData       — src/data/gdp.json
 */
export async function renderToggleMap(containerSelector, gdpData) {
  const container = document.querySelector(containerSelector);
  if (!container) return;

  // Build data lookup tables
  const GDP_MAP     = new Map(gdpData.members.map(d => [d.code, { value: d.gdpBn,          unit: 'bn EUR',  label: 'GDP' }]));
  const DEFENCE_MAP = new Map(gdpData.members.map(d => [d.code, { value: d.defenceGdpPct * d.gdpBn / 100, unit: 'bn EUR', label: 'Defence spend' }]));
  const POP_MAP     = new Map(); // placeholder — [NEEDS SOURCE: Eurostat population data]

  // EU aggregates (real arithmetic on Eurostat/SIPRI figures)
  const EU_GDP_AGG      = gdpData.euTotal; // €14,491 bn
  const EU_DEFENCE_AGG  = gdpData.members.reduce((s, d) => s + (d.defenceGdpPct * d.gdpBn / 100), 0).toFixed(0);
  const EU_POP_AGG      = '[NEEDS SOURCE]';

  const LAYERS = {
    gdp:     { map: GDP_MAP,     label: 'GDP',             unit: 'bn EUR', aggregate: EU_GDP_AGG,     aggregateLabel: `€${EU_GDP_AGG.toLocaleString()} bn` },
    defence: { map: DEFENCE_MAP, label: 'Defence spend',   unit: 'bn EUR', aggregate: EU_DEFENCE_AGG, aggregateLabel: `€${EU_DEFENCE_AGG} bn` },
    pop:     { map: POP_MAP,     label: 'Population',      unit: 'm',      aggregate: EU_POP_AGG,     aggregateLabel: EU_POP_AGG },
  };

  let currentLayer = 'gdp';
  let currentView  = 'fragmented'; // or 'federal'

  // Layout
  const totalWidth = container.clientWidth || 720;
  const height     = Math.round(totalWidth * 0.62);

  const projection = d3.geoAzimuthalEqualArea()
    .rotate([-15, -52, 0])
    .scale(totalWidth * 1.05)
    .translate([totalWidth / 2, height / 2])
    .clipAngle(180 - 0.001)
    .precision(0.1);

  const pathGen = d3.geoPath(projection);

  // Build DOM: controls + SVG
  container.innerHTML = `
    <div class="toggle-map__controls">
      <div class="toggle-map__view-switch" role="group" aria-label="Map view">
        <button class="view-btn active" data-view="fragmented" id="btn-fragmented">
          27 Member States
        </button>
        <button class="view-btn" data-view="federal" id="btn-federal">
          EU as Federal Bloc
        </button>
      </div>
      <div class="toggle-map__layer-switch" role="group" aria-label="Data layer">
        <button class="layer-btn active" data-layer="gdp">GDP</button>
        <button class="layer-btn" data-layer="defence">Defence</button>
        <button class="layer-btn" data-layer="pop">Population</button>
      </div>
    </div>
    <div class="toggle-map__svg-wrapper" id="toggle-svg-wrapper" style="position:relative;">
      <!-- SVG rendered here -->
      <div class="toggle-map__federal-overlay" id="federal-overlay"
           style="display:none;position:absolute;inset:0;display:none;
                  align-items:center;justify-content:center;flex-direction:column;
                  background:rgba(246,243,234,0.0);">
        <div id="federal-stat" class="federal-stat"></div>
        <p class="federal-label" style="font-family:${FONT_MONO};font-size:11px;color:${SEC};margin:0;">
          EU aggregate — real arithmetic on Eurostat / SIPRI figures
        </p>
      </div>
    </div>
    <div class="toggle-map__tooltip" id="map-tooltip"
         style="display:none;position:absolute;pointer-events:none;
                background:var(--paper);border:1px solid var(--rule-grey);
                border-left:3px solid var(--accent-bronze);
                padding:0.4rem 0.6rem;font-family:${FONT_MONO};font-size:11px;color:${INK};">
    </div>
  `;

  const svgWrapper  = container.querySelector('#toggle-svg-wrapper');
  const tooltip     = container.querySelector('#map-tooltip');

  // Load geodata
  let world;
  try {
    world = await d3.json('https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json');
  } catch {
    svgWrapper.innerHTML = '<p class="needs-source">Map geodata could not be loaded.</p>';
    return;
  }
  const { feature } = await import('topojson-client');
  const countries = feature(world, world.objects.countries);

  // Render SVG
  const svg = d3.select(svgWrapper)
    .insert('svg', ':first-child')
    .attr('viewBox', `0 0 ${totalWidth} ${height}`)
    .attr('role', 'img')
    .attr('aria-label', 'Toggle map: EU member states vs. EU as a federal bloc');

  svg.append('title').text('Toggle map — 27 member states vs. EU as a federal bloc');

  const pathsGroup = svg.append('g').attr('class', 'countries');

  function getColor(code) {
    if (!EU_MEMBERS.has(code)) return GREY;
    const layer = LAYERS[currentLayer];
    const d = layer.map.get(code);
    if (!d || !d.value) return '#B0B8C4';
    const vals = Array.from(layer.map.values()).map(v => v.value).filter(Boolean);
    const scale = d3.scaleSequential()
      .domain(d3.extent(vals))
      .interpolator(d3.interpolate('#C4D0DC', INK));
    return scale(d.value);
  }

  function renderFragmented() {
    pathsGroup.selectAll('path')
      .data(countries.features)
      .join('path')
      .attr('d', d => pathGen(d) || '')
      .attr('fill', d => {
        const code = NUMERIC_TO_ALPHA2[String(d.id).padStart(3,'0')];
        return getColor(code);
      })
      .attr('stroke', PAPER)
      .attr('stroke-width', 0.5)
      .on('mousemove', function(event, d) {
        const code = NUMERIC_TO_ALPHA2[String(d.id).padStart(3,'0')];
        if (!code || !EU_MEMBERS.has(code)) { tooltip.style.display = 'none'; return; }
        const layer = LAYERS[currentLayer];
        const datum = layer.map.get(code);
        if (!datum) { tooltip.style.display = 'none'; return; }
        const [ex, ey] = d3.pointer(event, container);
        tooltip.style.display = 'block';
        tooltip.style.left = `${ex + 12}px`;
        tooltip.style.top  = `${ey - 8}px`;
        tooltip.innerHTML  = `<strong>${datum.label ? `${code}` : code}</strong><br>${datum.value ? datum.value.toLocaleString() : '—'} ${layer.unit}`;
      })
      .on('mouseleave', () => { tooltip.style.display = 'none'; });
  }

  function renderFederal() {
    // Draw all EU members as one colour, non-EU greyed out
    pathsGroup.selectAll('path')
      .data(countries.features)
      .join('path')
      .attr('d', d => pathGen(d) || '')
      .attr('fill', d => {
        const code = NUMERIC_TO_ALPHA2[String(d.id).padStart(3,'0')];
        return EU_MEMBERS.has(code) ? BRONZE : GREY;
      })
      .attr('stroke', PAPER)
      .attr('stroke-width', 0.5)
      .on('mousemove', null)
      .on('mouseleave', null);

    tooltip.style.display = 'none';

    // Show aggregate overlay
    const overlay   = container.querySelector('#federal-overlay');
    const statEl    = container.querySelector('#federal-stat');
    const layer     = LAYERS[currentLayer];
    overlay.style.display = 'flex';
    statEl.innerHTML = `
      <span style="font-family:'Source Serif 4',serif;font-size:clamp(1.5rem,4vw,2.5rem);font-weight:700;color:${INK};display:block;text-align:center;">
        ${layer.aggregateLabel !== '[NEEDS SOURCE]' ? layer.aggregateLabel : '[NEEDS SOURCE]'}
      </span>
      <span style="font-family:${FONT_MONO};font-size:11px;color:${SEC};display:block;text-align:center;margin-top:0.25rem;">
        EU aggregate ${layer.label}
        <mark class="illustrative-label" title="Real arithmetic on Eurostat/SIPRI figures — not an existing EU institutional budget">EU aggregate</mark>
      </span>
    `;
  }

  function update() {
    const overlay = container.querySelector('#federal-overlay');
    if (currentView === 'fragmented') {
      overlay.style.display = 'none';
      renderFragmented();
    } else {
      renderFederal();
    }
  }

  // Wire controls
  container.querySelectorAll('.view-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      container.querySelectorAll('.view-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentView = btn.dataset.view;
      update();
    });
  });

  container.querySelectorAll('.layer-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      container.querySelectorAll('.layer-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentLayer = btn.dataset.layer;
      update();
    });
  });

  update();
}
