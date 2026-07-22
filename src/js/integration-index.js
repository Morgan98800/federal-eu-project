/**
 * integration-index.js — European Integration Index flagship module
 *
 * Renders a multi-series line chart with:
 *   - Four sub-indicators (A=Eurobarometer, B=EDA, C=Fiscal, D=Competence[illustrative])
 *   - A composite line
 *   - A horizontal time scrubber (range input)
 *   - Archive milestone markers on the chart
 *   - Illustrative badge on any series marked illustrative
 *   - Methodology note link
 *
 * Data source: src/data/integration-index.json
 * Usage: renderIntegrationIndex('#index-chart-wrapper', data, { compact: false })
 */

import * as d3 from 'd3';

const INK     = '#0B1F3A';
const BRONZE  = '#B9942F';
const GREY    = '#C9C2B2';
const RED     = '#8C2C33';
const PAPER   = '#F6F3EA';
const SEC     = '#4A5568';
const FONT_MONO = "'IBM Plex Mono', monospace";
const FONT_BODY = "'Public Sans', sans-serif";

const SERIES = [
  { key: 'A_scaled',              label: 'Public Support (Eurobarometer)',   color: INK,    dash: null,  illustrative: false },
  { key: 'B_scaled',              label: 'Defence Collaboration (EDA)',      color: BRONZE, dash: null,  illustrative: false },
  { key: 'C_scaled',              label: 'Fiscal Ratio vs. Federal Ref.',    color: SEC,    dash: '4,3', illustrative: false },
  { key: 'D_competence_illustrative', label: 'Competence Score',            color: RED,    dash: '2,4', illustrative: true  },
  { key: 'composite',             label: 'Composite Index',                  color: INK,    dash: null,  illustrative: false, isComposite: true },
];

/**
 * Render the Integration Index chart.
 * @param {string} containerSelector
 * @param {object} data — integration-index.json parsed object
 * @param {object} options
 *   compact: bool — if true, render smaller for home-page preview (composite only)
 *   height: number — explicit height override
 */
export function renderIntegrationIndex(containerSelector, data, options = {}) {
  const container = document.querySelector(containerSelector);
  if (!container || !data?.series?.length) return;

  const compact   = options.compact || false;
  const series    = data.series.filter(d => d.composite !== null);
  const milestones = (data.milestones || []).filter(m => m.year >= 2006);
  const visibleSeries = compact
    ? SERIES.filter(s => s.isComposite)
    : SERIES;

  const totalWidth = container.clientWidth || 720;
  const margin = compact
    ? { top: 16, right: 24, bottom: 40, left: 36 }
    : { top: 32, right: 32, bottom: 64, left: 48 };
  const totalHeight = options.height || (compact ? 180 : 380);
  const width  = totalWidth - margin.left - margin.right;
  const height = totalHeight - margin.top - margin.bottom;

  container.innerHTML = '';

  const svg = d3.select(container)
    .append('svg')
    .attr('viewBox', `0 0 ${totalWidth} ${totalHeight}`)
    .attr('aria-label', compact
      ? 'European Integration Index composite, 2006–2023'
      : 'European Integration Index — four sub-indicators and composite, 2006–2023')
    .attr('role', 'img');

  svg.append('title').text('European Integration Index — Federal Vision for Europe');

  const g = svg.append('g')
    .attr('transform', `translate(${margin.left},${margin.top})`);

  // Scales
  const x = d3.scaleLinear()
    .domain([2006, 2023])
    .range([0, width]);

  const y = d3.scaleLinear()
    .domain([0, 100])
    .range([height, 0]);

  // Gridlines
  if (!compact) {
    g.append('g')
      .call(d3.axisLeft(y).tickSize(-width).ticks(5).tickFormat(''))
      .call(gr => gr.select('.domain').remove())
      .call(gr => gr.selectAll('line')
        .style('stroke', GREY)
        .style('stroke-dasharray', '2,4')
        .style('stroke-width', 0.5));
  }

  // Milestone vertical markers
  if (!compact) {
    milestones.forEach(m => {
      g.append('line')
        .attr('x1', x(m.year)).attr('x2', x(m.year))
        .attr('y1', 0).attr('y2', height)
        .attr('stroke', GREY)
        .attr('stroke-width', 0.75)
        .attr('stroke-dasharray', '3,3');

      const labelGroup = g.append('g')
        .attr('transform', `translate(${x(m.year)},${-6})`);

      labelGroup.append('circle')
        .attr('r', 3)
        .attr('cy', 6)
        .attr('fill', BRONZE);

      // Make milestone label a link to the archive entry
      const fo = labelGroup.append('foreignObject')
        .attr('x', -30).attr('y', -2)
        .attr('width', 62).attr('height', 20);

      fo.append('xhtml:a')
        .attr('href', `./archive.html#${m.archiveId}`)
        .style('font-family', FONT_MONO)
        .style('font-size', '9px')
        .style('color', SEC)
        .style('text-decoration', 'none')
        .style('display', 'block')
        .style('text-align', 'center')
        .style('white-space', 'nowrap')
        .text(m.label);
    });
  }

  // Series lines
  visibleSeries.forEach(s => {
    const seriesData = series.filter(d => d[s.key] !== null && d[s.key] !== undefined);
    if (!seriesData.length) return;

    const lineGen = d3.line()
      .defined(d => d[s.key] !== null)
      .x(d => x(d.year))
      .y(d => y(d[s.key]))
      .curve(d3.curveMonotoneX);

    const path = g.append('path')
      .datum(seriesData)
      .attr('fill', 'none')
      .attr('stroke', s.color)
      .attr('stroke-width', s.isComposite ? 2.5 : 1.5)
      .attr('opacity', s.isComposite ? 1 : 0.65)
      .attr('d', lineGen);

    if (s.dash) path.attr('stroke-dasharray', s.dash);
  });

  // Axes
  const xAxis = g.append('g')
    .attr('transform', `translate(0,${height})`)
    .call(d3.axisBottom(x).ticks(compact ? 4 : 8).tickFormat(d3.format('d')));
  xAxis.selectAll('text').style('font-family', FONT_MONO).style('font-size', '10px').style('fill', SEC);
  xAxis.selectAll('line').style('stroke', GREY);
  xAxis.select('.domain').style('stroke', GREY);

  if (!compact) {
    const yAxis = g.append('g')
      .call(d3.axisLeft(y).ticks(5).tickFormat(d => `${d}`));
    yAxis.selectAll('text').style('font-family', FONT_MONO).style('font-size', '10px').style('fill', SEC);
    yAxis.selectAll('line').style('stroke', GREY);
    yAxis.select('.domain').style('stroke', GREY);

    // Y label
    g.append('text')
      .attr('transform', 'rotate(-90)')
      .attr('x', -height / 2)
      .attr('y', -38)
      .attr('text-anchor', 'middle')
      .style('font-family', FONT_MONO)
      .style('font-size', '10px')
      .style('fill', SEC)
      .text('Integration Score (0–100)');
  }

  // Cursor / scrubber interaction
  if (!compact) {
    const scrubLine = g.append('line')
      .attr('y1', 0).attr('y2', height)
      .attr('stroke', BRONZE).attr('stroke-width', 1)
      .style('display', 'none');

    const tooltip = d3.select(container)
      .append('div')
      .attr('class', 'index-tooltip')
      .style('display', 'none')
      .style('position', 'absolute')
      .style('background', 'var(--paper)')
      .style('border', '1px solid var(--rule-grey)')
      .style('border-left', '3px solid var(--accent-bronze)')
      .style('padding', '0.5rem 0.75rem')
      .style('pointer-events', 'none')
      .style('font-family', FONT_MONO)
      .style('font-size', '11px')
      .style('color', INK)
      .style('z-index', '50');

    svg.append('rect')
      .attr('transform', `translate(${margin.left},${margin.top})`)
      .attr('width', width).attr('height', height)
      .attr('fill', 'transparent')
      .on('mousemove', function(event) {
        const [mx] = d3.pointer(event, this);
        const year = Math.round(x.invert(mx));
        const d = series.find(s => s.year === year);
        if (!d) return;

        scrubLine.style('display', null).attr('x1', x(year)).attr('x2', x(year));

        const tooltipLines = [
          `<strong>${year}</strong>`,
          `Composite: ${d.composite !== null ? d.composite.toFixed(1) : '—'}`,
          `Public support: ${(d.A_eurobarometer_raw * 100).toFixed(0)}% (${d.A_source_wave || ''})`,
          d.B_eda_collab_raw ? `EDA collab: ${(d.B_eda_collab_raw * 100).toFixed(1)}%` : 'EDA collab: —',
          d.note ? `<em>${d.note}</em>` : ''
        ].filter(Boolean).join('<br>');

        const [ex, ey] = d3.pointer(event, container);
        tooltip
          .style('display', 'block')
          .style('left', `${ex + 12}px`)
          .style('top', `${ey - 8}px`)
          .html(tooltipLines);
      })
      .on('mouseleave', () => {
        scrubLine.style('display', 'none');
        tooltip.style('display', 'none');
      });
  }

  return svg.node();
}

/**
 * Render the time scrubber (range input) that controls chart focus.
 * This wires a <input type="range"> below the chart.
 * @param {string} inputSelector
 * @param {Function} onYearChange — callback(year)
 */
export function initScrubber(inputSelector, onYearChange) {
  const input = document.querySelector(inputSelector);
  if (!input) return;
  input.addEventListener('input', () => onYearChange(parseInt(input.value, 10)));
}

/**
 * Build the legend HTML for the Integration Index.
 * Returns an HTML string to inject into a .index-legend container.
 */
export function buildIndexLegend(series = SERIES) {
  return series.map(s => `
    <span class="legend-item">
      <span class="legend-swatch" style="
        display:inline-block;width:24px;height:2px;
        background:${s.color};
        border-bottom:${s.dash ? `2px dashed ${s.color}` : 'none'};
        margin-right:4px;vertical-align:middle;
      "></span>
      <span style="font-family:'IBM Plex Mono',monospace;font-size:11px;color:${s.illustrative ? '#8C2C33' : '#4A5568'}">
        ${s.label}${s.illustrative ? ' <mark class="illustrative-label">illustrative</mark>' : ''}
      </span>
    </span>
  `).join('');
}
