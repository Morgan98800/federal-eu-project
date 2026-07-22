/**
 * charts.js — D3 charts for the Data Room
 *
 * All charts are styled exclusively via CSS tokens — no D3 default colours,
 * no drop shadows, no chart-library themes. Every chart has a <figcaption>
 * with full dataset citation.
 *
 * Charts:
 *   1. renderEurobarometerChart — EU support over time (line chart)
 *   2. renderGDPChart           — Member-state GDP shares (horizontal bar)
 *   3. renderDefenceChart       — Defence spending % of GDP (dot plot)
 */

import * as d3 from 'd3';

// Token colours (must match CSS custom properties in tokens.css)
const INK   = '#0B1F3A';
const BRONZE = '#B9942F';
const GREY  = '#C9C2B2';
const SECONDARY = '#4A5568';

const FONT_MONO = "'IBM Plex Mono', monospace";
const FONT_BODY = "'IBM Plex Sans', sans-serif";

/** Shared axis styling helper */
function styleAxis(axisGroup, options = {}) {
  axisGroup.selectAll('text')
    .style('font-family', FONT_MONO)
    .style('font-size', options.fontSize || '11px')
    .style('fill', SECONDARY);
  axisGroup.selectAll('line').style('stroke', GREY);
  axisGroup.select('.domain').style('stroke', GREY);
}

// ============================================================
// 1. EUROBAROMETER LINE CHART
// ============================================================

/**
 * @param {string} containerSelector — wraps the SVG
 * @param {object} data — the eurobarometer.json object
 */
export function renderEurobarometerChart(containerSelector, data) {
  const container = document.querySelector(containerSelector);
  if (!container || !data?.series?.length) return;

  const margin = { top: 24, right: 32, bottom: 48, left: 48 };
  const totalWidth = container.clientWidth || 720;
  const totalHeight = Math.min(380, totalWidth * 0.55);
  const width  = totalWidth - margin.left - margin.right;
  const height = totalHeight - margin.top - margin.bottom;

  container.innerHTML = '';

  const svg = d3.select(container)
    .append('svg')
    .attr('viewBox', `0 0 ${totalWidth} ${totalHeight}`)
    .attr('aria-label', 'Line chart: EU membership support over time, Eurobarometer 1997–2024')
    .attr('role', 'img');

  svg.append('title').text('EU membership support over time — Eurobarometer 1997–2024');

  const g = svg.append('g')
    .attr('transform', `translate(${margin.left},${margin.top})`);

  const series = data.series;

  const x = d3.scaleLinear()
    .domain(d3.extent(series, d => d.year))
    .range([0, width]);

  const y = d3.scaleLinear()
    .domain([0.35, 0.75])
    .range([height, 0]);

  // Gridlines
  g.append('g')
    .attr('class', 'grid')
    .call(d3.axisLeft(y)
      .tickSize(-width)
      .ticks(5)
      .tickFormat(''))
    .call(gr => gr.select('.domain').remove())
    .call(gr => gr.selectAll('line')
      .style('stroke', GREY)
      .style('stroke-dasharray', '2,4')
      .style('stroke-width', '0.5'));

  // Axes
  const xAxis = g.append('g')
    .attr('transform', `translate(0,${height})`)
    .call(d3.axisBottom(x)
      .ticks(8)
      .tickFormat(d3.format('d')));
  styleAxis(xAxis);

  const yAxis = g.append('g')
    .call(d3.axisLeft(y)
      .ticks(5)
      .tickFormat(d => `${Math.round(d * 100)}%`));
  styleAxis(yAxis);

  // Line — favourable
  const line = d3.line()
    .x(d => x(d.year))
    .y(d => y(d.euFavourable))
    .curve(d3.curveMonotoneX);

  g.append('path')
    .datum(series)
    .attr('fill', 'none')
    .attr('stroke', INK)
    .attr('stroke-width', 1.5)
    .attr('d', line);

  // Data points
  g.selectAll('.dot')
    .data(series)
    .join('circle')
    .attr('class', 'dot')
    .attr('cx', d => x(d.year))
    .attr('cy', d => y(d.euFavourable))
    .attr('r', 2.5)
    .attr('fill', INK)
    .attr('stroke', 'none');

  // Accent: bronze dot on the most recent data point
  const latest = series[series.length - 1];
  g.append('circle')
    .attr('cx', x(latest.year))
    .attr('cy', y(latest.euFavourable))
    .attr('r', 4)
    .attr('fill', BRONZE);

  // Label the latest value
  g.append('text')
    .attr('x', x(latest.year) + 8)
    .attr('y', y(latest.euFavourable) + 4)
    .style('font-family', FONT_MONO)
    .style('font-size', '11px')
    .style('fill', BRONZE)
    .text(`${Math.round(latest.euFavourable * 100)}% (${latest.year})`);

  // Y-axis label
  g.append('text')
    .attr('transform', 'rotate(-90)')
    .attr('x', -height / 2)
    .attr('y', -40)
    .attr('text-anchor', 'middle')
    .style('font-family', FONT_MONO)
    .style('font-size', '10px')
    .style('fill', SECONDARY)
    .text('Share responding "Favourable"');
}

// ============================================================
// 2. GDP SHARE HORIZONTAL BAR CHART
// ============================================================

/**
 * @param {string} containerSelector
 * @param {object} data — the gdp.json object
 */
export function renderGDPChart(containerSelector, data) {
  const container = document.querySelector(containerSelector);
  if (!container || !data?.members?.length) return;

  // Show top 10 by GDP share
  const members = [...data.members]
    .sort((a, b) => b.gdpBn - a.gdpBn)
    .slice(0, 10)
    .map(d => ({
      ...d,
      sharePct: (d.gdpBn / data.euTotal * 100).toFixed(1)
    }));

  const margin = { top: 16, right: 80, bottom: 48, left: 80 };
  const totalWidth = container.clientWidth || 720;
  const barHeight = 28;
  const totalHeight = members.length * barHeight + margin.top + margin.bottom;
  const width  = totalWidth - margin.left - margin.right;
  const height = totalHeight - margin.top - margin.bottom;

  container.innerHTML = '';

  const svg = d3.select(container)
    .append('svg')
    .attr('viewBox', `0 0 ${totalWidth} ${totalHeight}`)
    .attr('aria-label', 'Bar chart: EU member state GDP share, 2022')
    .attr('role', 'img');

  svg.append('title').text('EU member state GDP share — Eurostat, 2022');

  const g = svg.append('g')
    .attr('transform', `translate(${margin.left},${margin.top})`);

  const x = d3.scaleLinear()
    .domain([0, d3.max(members, d => +d.sharePct)])
    .range([0, width]);

  const y = d3.scaleBand()
    .domain(members.map(d => d.name))
    .range([0, height])
    .padding(0.25);

  // X axis
  const xAxis = g.append('g')
    .attr('transform', `translate(0,${height})`)
    .call(d3.axisBottom(x)
      .ticks(5)
      .tickFormat(d => `${d}%`));
  styleAxis(xAxis);

  // Y axis
  const yAxis = g.append('g')
    .call(d3.axisLeft(y).tickSize(0));
  styleAxis(yAxis, { fontSize: '11px' });
  yAxis.select('.domain').remove();

  // Bars
  g.selectAll('.bar')
    .data(members)
    .join('rect')
    .attr('class', 'bar')
    .attr('x', 0)
    .attr('y', d => y(d.name))
    .attr('width', d => x(+d.sharePct))
    .attr('height', y.bandwidth())
    .attr('fill', (d, i) => i === 0 ? BRONZE : INK)
    .attr('opacity', (d, i) => 0.5 + (0.5 * (members.length - i) / members.length));

  // Value labels
  g.selectAll('.bar-label')
    .data(members)
    .join('text')
    .attr('class', 'bar-label')
    .attr('x', d => x(+d.sharePct) + 6)
    .attr('y', d => y(d.name) + y.bandwidth() / 2 + 4)
    .style('font-family', FONT_MONO)
    .style('font-size', '11px')
    .style('fill', SECONDARY)
    .text(d => `${d.sharePct}%`);
}

// ============================================================
// 3. DEFENCE SPENDING DOT PLOT
// ============================================================

/**
 * @param {string} containerSelector
 * @param {object} data — the gdp.json object (includes defenceGdpPct)
 * @param {number} natoTarget — NATO 2% target line
 */
export function renderDefenceChart(containerSelector, data, natoTarget = 2.0) {
  const container = document.querySelector(containerSelector);
  if (!container || !data?.members?.length) return;

  const members = [...data.members].sort((a, b) => b.defenceGdpPct - a.defenceGdpPct);

  const margin = { top: 32, right: 32, bottom: 48, left: 110 };
  const totalWidth = container.clientWidth || 720;
  const dotHeight = 22;
  const totalHeight = members.length * dotHeight + margin.top + margin.bottom;
  const width  = totalWidth - margin.left - margin.right;
  const height = totalHeight - margin.top - margin.bottom;

  container.innerHTML = '';

  const svg = d3.select(container)
    .append('svg')
    .attr('viewBox', `0 0 ${totalWidth} ${totalHeight}`)
    .attr('aria-label', 'Dot plot: EU member state defence spending as % of GDP, 2022')
    .attr('role', 'img');

  svg.append('title').text('EU member state defence spending (% of GDP) — SIPRI / Eurostat, 2022');

  const g = svg.append('g')
    .attr('transform', `translate(${margin.left},${margin.top})`);

  const x = d3.scaleLinear()
    .domain([0, 3.0])
    .range([0, width]);

  const y = d3.scaleBand()
    .domain(members.map(d => d.name))
    .range([0, height])
    .padding(0.3);

  // NATO 2% target line
  g.append('line')
    .attr('x1', x(natoTarget))
    .attr('x2', x(natoTarget))
    .attr('y1', -16)
    .attr('y2', height)
    .attr('stroke', BRONZE)
    .attr('stroke-width', 1)
    .attr('stroke-dasharray', '3,3');

  g.append('text')
    .attr('x', x(natoTarget) + 4)
    .attr('y', -4)
    .style('font-family', FONT_MONO)
    .style('font-size', '9px')
    .style('fill', BRONZE)
    .text('NATO 2% target');

  // X axis
  const xAxis = g.append('g')
    .attr('transform', `translate(0,${height})`)
    .call(d3.axisBottom(x)
      .ticks(6)
      .tickFormat(d => `${d}%`));
  styleAxis(xAxis);

  // Y axis
  const yAxis = g.append('g')
    .call(d3.axisLeft(y).tickSize(0));
  styleAxis(yAxis, { fontSize: '10px' });
  yAxis.select('.domain').remove();

  // Connector lines
  g.selectAll('.connector')
    .data(members)
    .join('line')
    .attr('class', 'connector')
    .attr('x1', 0)
    .attr('x2', d => x(d.defenceGdpPct))
    .attr('y1', d => y(d.name) + y.bandwidth() / 2)
    .attr('y2', d => y(d.name) + y.bandwidth() / 2)
    .attr('stroke', GREY)
    .attr('stroke-width', 0.75);

  // Dots
  g.selectAll('.dot')
    .data(members)
    .join('circle')
    .attr('class', 'dot')
    .attr('cx', d => x(d.defenceGdpPct))
    .attr('cy', d => y(d.name) + y.bandwidth() / 2)
    .attr('r', 5)
    .attr('fill', d => d.defenceGdpPct >= natoTarget ? BRONZE : INK)
    .attr('opacity', 0.85);

  // Value labels
  g.selectAll('.dot-label')
    .data(members)
    .join('text')
    .attr('class', 'dot-label')
    .attr('x', d => x(d.defenceGdpPct) + 8)
    .attr('y', d => y(d.name) + y.bandwidth() / 2 + 4)
    .style('font-family', FONT_MONO)
    .style('font-size', '9px')
    .style('fill', SECONDARY)
    .text(d => `${d.defenceGdpPct}%`);
}
