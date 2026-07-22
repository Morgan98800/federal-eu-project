/**
 * map.js — Europe SVG map using D3-geo
 *
 * Renders a static SVG map of Europe using Natural Earth boundaries
 * in an approximation of ETRS89-LAEA (EPSG:3035) — the equal-area
 * projection standard in European statistical cartography.
 *
 * EU member states are highlighted in a muted blue-grey tone.
 * Attribution: Natural Earth (naturalearthdata.com) — Public Domain.
 *
 * Usage:
 *   import { renderEuropeMap } from './map.js';
 *   renderEuropeMap('#map-container', { width: 700 });
 */

import * as d3 from 'd3';

// EU-27 member state ISO 3166-1 alpha-2 codes
const EU_MEMBERS = new Set([
  'AT','BE','BG','CY','CZ','DE','DK','EE','ES','FI',
  'FR','GR','HR','HU','IE','IT','LT','LU','LV','MT',
  'NL','PL','PT','RO','SE','SI','SK'
]);

/**
 * Render a static SVG map of Europe centred on the continent.
 *
 * @param {string} containerSelector — CSS selector of the wrapper element
 * @param {object} options
 *   @param {number} options.width     — SVG width in px (default 720)
 *   @param {string} options.highlight — ISO code to highlight in accent-bronze (optional)
 */
export async function renderEuropeMap(containerSelector, options = {}) {
  const container = document.querySelector(containerSelector);
  if (!container) return;

  const width = options.width || container.clientWidth || 720;
  const height = Math.round(width * 0.65);

  // D3 Azimuthal Equal Area is a close approximation of LAEA for Europe
  // Centred on ~15°E, 52°N (central Europe)
  const projection = d3.geoAzimuthalEqualArea()
    .rotate([-15, -52, 0])      // Rotate globe so Europe is centred
    .scale(width * 1.05)
    .translate([width / 2, height / 2])
    .clipAngle(180 - 0.001)
    .precision(0.1);

  const pathGen = d3.geoPath(projection);

  const svg = d3.select(container)
    .append('svg')
    .attr('viewBox', `0 0 ${width} ${height}`)
    .attr('aria-label', 'Map of Europe showing EU member states')
    .attr('role', 'img');

  // Add title for accessibility
  svg.append('title').text('Map of Europe — EU member states highlighted');

  // Fetch Natural Earth country data (110m resolution, good for continent view)
  // Using the cdn.jsdelivr.net hosted topojson from the world-atlas package
  const topoUrl = 'https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json';

  let world;
  try {
    world = await d3.json(topoUrl);
  } catch (err) {
    console.warn('Map: failed to load geodata.', err);
    container.innerHTML = `<p class="needs-source">Map geodata could not be loaded. Ensure network access or bundle the Natural Earth data locally.</p>`;
    return;
  }

  const { feature } = await import('topojson-client');
  const countries = feature(world, world.objects.countries);

  // ISO numeric → alpha-2 mapping for the countries we need
  // (Natural Earth 110m uses ISO numeric codes)
  const numericToAlpha2 = {
    '040': 'AT', '056': 'BE', '100': 'BG', '196': 'CY', '203': 'CZ',
    '276': 'DE', '208': 'DK', '233': 'EE', '724': 'ES', '246': 'FI',
    '250': 'FR', '300': 'GR', '191': 'HR', '348': 'HU', '372': 'IE',
    '380': 'IT', '440': 'LT', '442': 'LU', '428': 'LV', '470': 'MT',
    '528': 'NL', '616': 'PL', '620': 'PT', '642': 'RO', '752': 'SE',
    '705': 'SI', '703': 'SK',
    // Non-EU but geographically Europe
    '008': 'AL', '070': 'BA', '807': 'MK', '499': 'ME', '688': 'RS',
    '756': 'CH', '578': 'NO', '804': 'UA', '643': 'RU', '792': 'TR',
    '826': 'GB', '492': 'MC', '008': 'AL',
  };

  // Draw each country
  svg.selectAll('path')
    .data(countries.features)
    .join('path')
    .attr('d', d => pathGen(d) || '')
    .attr('class', d => {
      const numeric = String(d.id).padStart(3, '0');
      const alpha2 = numericToAlpha2[numeric];
      const isEU = alpha2 && EU_MEMBERS.has(alpha2);
      const isHighlighted = alpha2 && alpha2 === options.highlight;
      if (isHighlighted) return 'highlighted';
      if (isEU) return 'eu-member';
      return '';
    })
    .attr('data-iso', d => {
      const numeric = String(d.id).padStart(3, '0');
      return numericToAlpha2[numeric] || '';
    });

  // Clip to Europe view (exclude distant territories)
  // We rely on the projection's clipAngle to handle this naturally

  return svg.node();
}

/**
 * Render a simplified interactive map for the Data Room.
 * Adds tooltips on hover showing country name and a datum value.
 *
 * @param {string} containerSelector
 * @param {Array}  data — [{ code, name, value, unit }, ...]
 * @param {object} options
 */
export async function renderDataMap(containerSelector, data, options = {}) {
  // For the Data Room, we allow hover interactivity but no pan/zoom
  // (per the brief: "reserve interactive pan/zoom for the Data Room only")
  const container = document.querySelector(containerSelector);
  if (!container) return;

  const width = options.width || container.clientWidth || 720;
  const height = Math.round(width * 0.65);

  const projection = d3.geoAzimuthalEqualArea()
    .rotate([-15, -52, 0])
    .scale(width * 1.05)
    .translate([width / 2, height / 2])
    .clipAngle(180 - 0.001)
    .precision(0.1);

  const pathGen = d3.geoPath(projection);

  // Build data lookup
  const dataMap = new Map(data.map(d => [d.code, d]));

  // Colour scale — muted sequential, using CSS variables
  const values = data.map(d => d.value).filter(v => v != null);
  const colorScale = d3.scaleSequential()
    .domain(d3.extent(values))
    .interpolator(d3.interpolate('#C9C2B2', '#0B1F3A'));

  const svg = d3.select(container)
    .append('svg')
    .attr('viewBox', `0 0 ${width} ${height}`)
    .attr('aria-label', options.ariaLabel || 'Data map of Europe')
    .attr('role', 'img');

  svg.append('title').text(options.title || 'Data map of Europe');

  // Tooltip
  const tooltip = d3.select(container)
    .append('div')
    .attr('class', 'map-tooltip')
    .style('display', 'none')
    .style('position', 'absolute')
    .style('pointer-events', 'none')
    .style('background', 'var(--paper)')
    .style('border', '1px solid var(--rule-grey)')
    .style('padding', '0.5rem 0.75rem')
    .style('font-family', 'var(--font-mono)')
    .style('font-size', '0.75rem')
    .style('color', 'var(--ink-navy)');

  let world;
  try {
    world = await d3.json('https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json');
  } catch (err) {
    console.warn('Data map: failed to load geodata.', err);
    return;
  }

  const { feature } = await import('topojson-client');
  const countries = feature(world, world.objects.countries);

  const numericToAlpha2 = {
    '040': 'AT', '056': 'BE', '100': 'BG', '196': 'CY', '203': 'CZ',
    '276': 'DE', '208': 'DK', '233': 'EE', '724': 'ES', '246': 'FI',
    '250': 'FR', '300': 'GR', '191': 'HR', '348': 'HU', '372': 'IE',
    '380': 'IT', '440': 'LT', '442': 'LU', '428': 'LV', '470': 'MT',
    '528': 'NL', '616': 'PL', '620': 'PT', '642': 'RO', '752': 'SE',
    '705': 'SI', '703': 'SK',
  };

  svg.selectAll('path')
    .data(countries.features)
    .join('path')
    .attr('d', d => pathGen(d) || '')
    .attr('fill', d => {
      const numeric = String(d.id).padStart(3, '0');
      const alpha2 = numericToAlpha2[numeric];
      const datum = alpha2 ? dataMap.get(alpha2) : null;
      if (datum) return colorScale(datum.value);
      return '#C9C2B2';
    })
    .attr('stroke', 'var(--paper)')
    .attr('stroke-width', 0.5)
    .on('mousemove', function (event, d) {
      const numeric = String(d.id).padStart(3, '0');
      const alpha2 = numericToAlpha2[numeric];
      const datum = alpha2 ? dataMap.get(alpha2) : null;
      if (!datum) {
        tooltip.style('display', 'none');
        return;
      }
      tooltip
        .style('display', 'block')
        .style('left', (event.offsetX + 12) + 'px')
        .style('top', (event.offsetY - 8) + 'px')
        .html(`<strong>${datum.name}</strong><br>${datum.value}${datum.unit || ''}`);
    })
    .on('mouseleave', () => tooltip.style('display', 'none'));

  return svg.node();
}
