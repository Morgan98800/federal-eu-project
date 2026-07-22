/**
 * scenario-slider.js — Scenario Slider module
 *
 * Two range inputs update adjacent comparison stats live.
 * All illustrative output clearly labeled. Starting point = real sourced figures.
 * Formula shown in expandable Disclosure note (reuses accordion.js).
 *
 * Data source: src/data/scenario-slider.json
 *
 * Usage:
 *   import { initScenarioSlider } from './scenario-slider.js';
 *   initScenarioSlider('#slider-section', data);
 */

const FONT_MONO = "'IBM Plex Mono', monospace";
const INK       = '#0B1F3A';
const BRONZE    = '#B9942F';
const SEC       = '#4A5568';
const RED       = '#8C2C33';

/**
 * @param {string} containerSelector — wraps both sliders + stats
 * @param {object} data — scenario-slider.json parsed object
 */
export function initScenarioSlider(containerSelector, data) {
  const container = document.querySelector(containerSelector);
  if (!container || !data?.sliders) return;

  const { baselines, sliders } = data;
  const { defence_pooling, fiscal_transfer } = sliders;

  container.innerHTML = `
    <div class="scenario-grid">

      <!-- ===== SLIDER 1: Defence Pooling ===== -->
      <div class="scenario-panel" id="panel-defence">
        <div class="scenario-panel__header">
          <span class="section-label">Scenario A</span>
          <h3 class="scenario-panel__title">${defence_pooling.label}</h3>
          <p class="scenario-panel__baseline" style="font-family:${FONT_MONO};font-size:11px;color:${SEC};">
            Baseline (${data.year}):
            <strong>${defence_pooling.default}%</strong>
            — ${defence_pooling.default_label}
          </p>
        </div>

        <div class="scenario-slider-row">
          <span class="slider-bound" style="font-family:${FONT_MONO};font-size:10px;color:${SEC};">0%</span>
          <div class="slider-track">
            <input type="range"
                   id="${defence_pooling.id}"
                   min="${defence_pooling.min}"
                   max="${defence_pooling.max}"
                   step="${defence_pooling.step}"
                   value="${defence_pooling.default}"
                   aria-label="${defence_pooling.label}"
                   aria-valuetext="${defence_pooling.default}%">
          </div>
          <span class="slider-bound" style="font-family:${FONT_MONO};font-size:10px;color:${SEC};">100%</span>
        </div>

        <div class="scenario-stat-block" id="stat-defence">
          <!-- updated by JS -->
        </div>

        <!-- Formula disclosure -->
        <details class="accordion-item formula-disclosure" style="margin-top:0.75rem;">
          <summary class="accordion-item__trigger" style="font-size:0.875rem;">
            Show formula &amp; methodology
          </summary>
          <div class="accordion-item__body formula-body">
            <p style="font-family:${FONT_MONO};font-size:11px;color:${SEC};line-height:1.6;">
              <strong>Formula:</strong><br>
              Pooled budget = (slider / 100) × EU27 defence spend<br>
              EU27 defence spend = <strong>€${baselines.eu27_defence_spend_bn_eur.value} bn</strong>
              (${baselines.eu27_defence_spend_bn_eur.source})<br><br>
              The slider's starting value (${defence_pooling.default}%) reflects the
              current level of EDA collaborative procurement
              (${baselines.eda_collab_pct.source}).<br><br>
              Any value above ${defence_pooling.default}% is a user-adjustable
              <mark class="illustrative-label">illustrative</mark> projection —
              not a policy proposal or forecast.
              Reference: US DoD budget ≈ ${defence_pooling.reference.label}
              (${defence_pooling.reference.source}).
            </p>
          </div>
        </details>
      </div>

      <!-- ===== SLIDER 2: Fiscal Transfer ===== -->
      <div class="scenario-panel" id="panel-fiscal">
        <div class="scenario-panel__header">
          <span class="section-label">Scenario B</span>
          <h3 class="scenario-panel__title">${fiscal_transfer.label}</h3>
          <p class="scenario-panel__baseline" style="font-family:${FONT_MONO};font-size:11px;color:${SEC};">
            Baseline (${data.year}):
            <strong>${fiscal_transfer.default}% of GDP</strong>
            — ${fiscal_transfer.default_label}
          </p>
        </div>

        <div class="scenario-slider-row">
          <span class="slider-bound" style="font-family:${FONT_MONO};font-size:10px;color:${SEC};">0%</span>
          <div class="slider-track">
            <input type="range"
                   id="${fiscal_transfer.id}"
                   min="${fiscal_transfer.min}"
                   max="${fiscal_transfer.max}"
                   step="${fiscal_transfer.step}"
                   value="${fiscal_transfer.default}"
                   aria-label="${fiscal_transfer.label}"
                   aria-valuetext="${fiscal_transfer.default}% of GDP">
          </div>
          <span class="slider-bound" style="font-family:${FONT_MONO};font-size:10px;color:${SEC};">25%</span>
        </div>

        <div class="scenario-stat-block" id="stat-fiscal">
          <!-- updated by JS -->
        </div>

        <!-- Formula disclosure -->
        <details class="accordion-item formula-disclosure" style="margin-top:0.75rem;">
          <summary class="accordion-item__trigger" style="font-size:0.875rem;">
            Show formula &amp; methodology
          </summary>
          <div class="accordion-item__body formula-body">
            <p style="font-family:${FONT_MONO};font-size:11px;color:${SEC};line-height:1.6;">
              <strong>Formula:</strong><br>
              EU fiscal capacity = (slider / 100) × EU27 GDP<br>
              EU27 GDP = <strong>€${baselines.eu27_gdp_bn_eur.value.toLocaleString()} bn</strong>
              (${baselines.eu27_gdp_bn_eur.source})<br><br>
              Current EU budget = <strong>€${baselines.eu_budget_bn_eur.value} bn</strong>
              (${baselines.eu_budget_bn_eur.source}) — the slider starts here.<br><br>
              Any value above ${fiscal_transfer.default}% of GDP is
              <mark class="illustrative-label">illustrative</mark>.
              Federal reference: US federal budget =
              <strong>${baselines.us_federal_budget_pct_gdp.value}% of GDP</strong>
              (${baselines.us_federal_budget_pct_gdp.source}).
            </p>
          </div>
        </details>
      </div>

    </div>
  `;

  // Update functions
  function updateDefenceStat(val) {
    const pooled   = ((val / 100) * baselines.eu27_defence_spend_bn_eur.value).toFixed(0);
    const national = (baselines.eu27_defence_spend_bn_eur.value - pooled).toFixed(0);
    const isIllustrative = parseFloat(val) > parseFloat(defence_pooling.default);
    const refVal = defence_pooling.reference.value_bn_eur;

    document.querySelector('#stat-defence').innerHTML = `
      <div class="scenario-stat">
        <span class="scenario-stat__num">€${Number(pooled).toLocaleString()} bn</span>
        <span class="scenario-stat__label">
          ${defence_pooling.output_label}
          ${isIllustrative ? '<mark class="illustrative-label">illustrative</mark>' : ''}
        </span>
        <span class="scenario-stat__sub" style="font-family:${FONT_MONO};font-size:10px;color:${SEC};">
          vs. ${defence_pooling.reference.label}: €${refVal.toLocaleString()} bn
          &nbsp;|&nbsp;
          Remaining national: €${Number(national).toLocaleString()} bn
        </span>
      </div>
    `;
  }

  function updateFiscalStat(val) {
    const capacity = ((parseFloat(val) / 100) * baselines.eu27_gdp_bn_eur.value).toFixed(0);
    const isIllustrative = parseFloat(val) > parseFloat(fiscal_transfer.default);
    const refPct = fiscal_transfer.reference.value_pct;
    const refBn  = ((refPct / 100) * baselines.eu27_gdp_bn_eur.value).toFixed(0);

    document.querySelector('#stat-fiscal').innerHTML = `
      <div class="scenario-stat">
        <span class="scenario-stat__num">€${Number(capacity).toLocaleString()} bn</span>
        <span class="scenario-stat__label">
          ${fiscal_transfer.output_label}
          ${isIllustrative ? '<mark class="illustrative-label">illustrative</mark>' : ''}
        </span>
        <span class="scenario-stat__sub" style="font-family:${FONT_MONO};font-size:10px;color:${SEC};">
          vs. US federal equivalent at ${refPct}% of EU27 GDP: €${Number(refBn).toLocaleString()} bn
        </span>
      </div>
    `;
  }

  // Wire sliders
  const defSlider = document.querySelector(`#${defence_pooling.id}`);
  const fisSlider = document.querySelector(`#${fiscal_transfer.id}`);

  defSlider.addEventListener('input', e => {
    updateDefenceStat(e.target.value);
    e.target.setAttribute('aria-valuetext', `${e.target.value}%`);
  });

  fisSlider.addEventListener('input', e => {
    updateFiscalStat(e.target.value);
    e.target.setAttribute('aria-valuetext', `${e.target.value}% of GDP`);
  });

  // Initial render
  updateDefenceStat(defence_pooling.default);
  updateFiscalStat(fiscal_transfer.default);
}
