/* =============================================================================
   Project case studies
   -----------------------------------------------------------------------------
   Each object is one featured project. Fill in your own writing, numbers,
   figures, and repository links.

   Field guide:
     slug          URL segment, e.g. /projects/<slug>  (keep it lowercase-dashed)
     title         Project name
     summary       One sentence: what you did and what came of it
     year          Shown in listings and on the detail page
     role          "Solo project", "Team of 3", "Research assistant", ...
     tools         Short list, rendered as plain text (not badges)
     repo          Link to the separate GitHub repository
     question      string[]  — the problem / research question (paragraphs)
     data          string[]  — datasets, size, source, caveats
     methodology   string[]  — approach, models, validation
     findings      string[]  — key results, rendered as a list
     figures       { src, alt, caption }[]  — images live in /public/images/projects
     significance  string[]  — why it matters / what a decision-maker should take away
   ========================================================================== */

export const projects = [
  {
    slug: 'world-cup-prediction-markets',
    title: 'Efficiency and Attention in World Cup Prediction Markets',
    summary:
      'Analyzed minute-level Kalshi prices for all 104 matches of the 2026 World Cup against independent performance data, and found the market was unbiased and well calibrated overall but priced its highest-attention matches the least accurately.',
    year: '2026',
    role: 'Solo research project',
    tools: ['Python', 'pandas', 'statsmodels', 'Selenium', 'matplotlib'],
    repo: 'https://github.com/kate-marine/wc26-prediction-markets',
    question: [
      'Prediction markets are increasingly treated as real-time forecasts, on the assumption that more trading and more money produce more accurate prices. World Cup matches are well suited to studying this question because each event has a clear outcome and can be compared against detailed, independent performance data.',
      'Using minute-level Kalshi prices for every match, I looked at three things. First, whether prices react to the final result of a match or to how well a team actually played. Second, whether the market shows behavioral biases, specifially over or underreacting to new information. Third, and least studied, whether pricing accuracy is uniform across matches or varies with how much public attention a match gets.',
    ],
    data: [
      'Kalshi provides two market datasets: minute-level prices, volume, and open interest for the three-way match-outcome contracts (104 matches × 3 outcomes = 312 markets), and hourly tournament-winner futures for each team, used to track title odds across the tournament.',
      'Performance data comes from FBref / Opta (shooting, cards, fouls, lineups) and SofaScore (expected goals, team-level statistics, and minute-stamped match events).',
      'The sources share no common match identifier, so every join is mediated by a team-name crosswalk (Türkiye vs. Turkey, Cabo Verde vs. Cape Verde, and others), validated against a zero unmatched rows check. SofaScore\'s event timestamps use the nominal match clock rather than real elapsed time, so analyses that need minute-level alignment with the price candles are restricted to first-half events; the calibration work instead anchors everything to each contract\'s own settlement time.',
    ],
    methodology: [
      'Result vs. performance: for each match-outcome market I measured the total in-play price range, the price movement during the match, and the jump at settlement, then regressed all three jointly on standardized goal margin and standardized expected-goals margin so their effects could be compared while holding the other fixed.',
      'Overreaction / underreaction: I split each price response to new information into an immediate jump and a later drift (drift against the jump is overreaction, drift in the same direction is underreaction) and applied this to individual first-half goals (sign test, n = 84), to match wins in the title-odds futures (n = 208 team-matches), and to a direct test of whether a team\'s performance vs result gap predicts later title-odds drift.',
      'Calibration: across all 312 finalized match markets I sampled the last traded price at eight checkpoints from 180 down to 5 minutes before each market\'s close, paired it with the outcome, and computed Brier scores and reliability diagrams with 95% Wilson intervals.',
      'Efficiency across matches: I ran a joint OLS of squared pricing error on standardized log volume and standardized log open interest, including checkpoint fixed effects and tournament-stage controls.',
    ],
    // notes: 'This and every other result are associations on observational data, not causal estimates. Volume, open interest, and stage are all products of traders\' own choices.',
    
    findings: [
      'Prices tracked match results significantly more than performance. Goal margin strongly predicted total price movement (β = −0.185, p < 0.001); expected-goals margin did not (β = +0.003, p = 0.88), even though the two are correlated. A dominant xG performance that did not produce goals moved the price only marginally.',
      'No behavioral bias at any timescale. Across four independent tests there was no systematic overreaction or underreaction; among first-half goals with a real price reaction, only 27.6% drifted back against the initial move, versus 50% under a no-reversion null (binomial p < 0.001).',
      'Calibration improved toward settlement with no directional bias. The Brier score fell from 0.166 three hours out to 0.026 five minutes before close, beating a base-rate benchmark (0.222) at every checkpoint.',
      'Interestingly, I found that efficiency was not uniform across matches. Tournament stage made no difference (Brier 0.128 vs. 0.131, p = 0.76), but matches with higher trading volume (proxy for overall attention) were priced markedly worse than the lower ones (Brier 0.151 vs. 0.103), at every one of the eight checkpoints. In a joint model, volume independently predicted worse calibration and open interest independently predicted better calibration (both p < 0.001); controlling for tournament stage only strengthened the volume effect instead of undermining it',
    ],
    figures: [
      {
        src: '/images/projects/wc26-calibration.png',
        alt: 'Two panels: Brier score falling sharply as markets approach close and staying below the base-rate line, and reliability diagrams tracking the 45-degree line at four pre-close checkpoints.',
        caption:
          'Match-market calibration across all 312 contracts. Left: Brier score (lower is better) by minutes before the market closes, against the base-rate benchmark. Right: reliability diagrams at four checkpoints — quoted price versus the observed frequency of the outcome, with 95% Wilson intervals.',
      },
      {
        src: '/images/projects/wc26-regression_coefficients.png',
        alt: 'Coefficient plot with three panels (price range, in-match movement, settlement jump); goal-margin coefficients sit well left of zero while expected-goals, possession, and shot margins overlap zero.',
        caption:
          'Standardized regression coefficients (95% CI) for goal margin and expected-goals margin on three components of price movement. Intervals crossing zero (red) are unreliable predictors once the other variable is held fixed. Goal margin dominates the total range and the settlement jump; xG margin has only a weak independent link to movement during play.',
      },
      {
        src: '/images/projects/wc26-heterogeneity_analysis.png',
        alt: 'Three panels: Brier score by tournament half (overlapping), by trading-volume tercile (high volume clearly worse at every checkpoint), and the independent effects of log volume and log open interest on squared error.',
        caption:
          'Where pricing is better or worse. Left: Brier score by tournament half (no significant difference). Middle: by match-level trading-volume tercile. High-volume matches are worse calibrated at every checkpoint. Right: independent effects of log volume and log open interest on squared error, controlling for checkpoint and each other.',
      },
    ],
    significance: [
      'The headline finding is counterintuitive and matters for anyone treating these markets as real forecasts. The matches that drew the most money and attention, in other words the ones a forecast is most likely to be read from, were actually the least accurately priced, even though the market showed no conventional inefficiency and got sharper as each match ended.',
      'The volume vs open-interest split also suggests that rapid trading churn seems to add noise, while committed, standing capital is associated with better prices. Of course this only an observational association, especially as the analysis is limited to one tournament, 104 matches, and three non-independent contracts per match.',
    ],
  },

  {
    slug: 'financial-aid-outreach',
    title: 'Did a Financial-Aid Outreach Campaign Work?',
    summary:
      'Evaluated whether a text-message campaign encouraging students to complete financial-aid renewal actually increased completion, using a difference-in-differences design.',
    year: '2024',
    role: 'Research assistant, team of 2',
    tools: ['R', 'tidyverse', 'fixest', 'ggplot2'],
    repo: 'https://github.com/kate-marine/financial-aid-outreach',
    question: [
      'Every year a share of returning college students fail to re-file the FAFSA on time and lose aid they are eligible for. A university system piloted a series of reminder texts to students at some campuses and wanted to know whether it moved on-time renewal, and by how much.',
      'The campaign was not randomly assigned, so the question was really two questions: did renewal rise at treated campuses relative to untreated ones, and is a causal reading of that difference credible?',
    ],
    data: [
      'De-identified administrative records for about 31,000 aid-eligible returning students across nine campuses over four academic years, with the reminder campaign rolled out at four campuses in the final year.',
      'Each record included the campus, the academic year, whether the student renewed aid on time, and background variables: prior-year aid amount, class standing, first-generation status, and prior-year GPA band.',
      'Two campuses had incomplete renewal-date data in the first year and were excluded from the main specification, then added back as a robustness check.',
    ],
    methodology: [
      'The core design is difference-in-differences: compare the change in on-time renewal at treated campuses before and after the campaign to the same change at untreated campuses over the same period.',
      'I estimated a two-way fixed-effects linear probability model with campus and year fixed effects, clustering standard errors by campus, and re-ran it as a logit for a robustness check.',
      'The identifying assumption is parallel trends. I tested it by plotting campus-level renewal rates for the three pre-campaign years and by running an event-study specification with leads and lags; pre-period coefficients were small and statistically indistinguishable from zero.',
    ],
    findings: [
      'On-time renewal at treated campuses rose 4.6 percentage points relative to untreated campuses (95% CI: 2.1 to 7.1), against a pre-campaign baseline of about 78 percent.',
      'The effect was roughly twice as large for first-generation students and for students in the lowest prior-aid quartile.',
      'The event-study showed no differential pre-trend and a sharp jump in the treatment year, supporting a causal reading.',
      'A back-of-envelope cost comparison put the campaign at under $10 per additional on-time renewal, small next to the average aid package preserved.',
    ],
    figures: [
      {
        src: '/images/projects/aid-did.svg',
        alt: 'Line chart of on-time renewal rates for treated and untreated campuses across four years, diverging only in the final year.',
        caption:
          'On-time renewal by campus group. Trends track closely in the three pre-campaign years and separate sharply in the treatment year (dashed line).',
      },
    ],
    significance: [
      'The result gave the university system a defensible estimate to justify scaling the campaign to all campuses, with a specific recommendation to prioritize first-generation and low-aid students where the effect concentrated.',
      'The project also documents the diagnostic work that separates a real causal claim from a suggestive correlation — the parallel-trends checks were as important to the client as the headline number.',
    ],
  },

  {
    slug: 'food-access-new-england',
    title: 'Mapping Food Access and Grocery Prices in New England',
    summary:
      'Combined store-location, census, and price data to describe where fresh-food access is thinnest in northern New England and how it relates to price and income.',
    year: '2024',
    role: 'Solo project',
    tools: ['Python', 'GeoPandas', 'pandas', 'matplotlib'],
    repo: 'https://github.com/kate-marine/food-access-new-england',
    question: [
      '"Food deserts" are usually defined by distance to a supermarket, but distance alone misses whether the food that is nearby is affordable. I wanted a descriptive picture of northern New England that looked at access and price together, at the census-tract level.',
      'The guiding questions: which tracts combine long travel distance to a full-service grocery store with lower income, and within reachable stores, how much does a fixed basket of staples vary in price across the region?',
    ],
    data: [
      'Supermarket and supercenter locations from the USDA and OpenStreetMap for Vermont, New Hampshire, and Maine (about 1,100 stores after de-duplication).',
      'Census-tract demographics and vehicle-access rates from the American Community Survey, and tract boundaries from the Census TIGER files.',
      'A hand-collected price sample: the cost of a standardized 12-item staple basket at 90 stores, gathered from public online pricing and store circulars over two weeks. This sample is small and non-random, and the writeup is explicit about that limitation.',
    ],
    methodology: [
      'For each populated tract I computed road-network distance from the population-weighted centroid to the nearest full-service grocery store using OpenStreetMap routing.',
      'I flagged "low access" tracts as those beyond 10 miles by road (a threshold suited to rural areas, unlike the USDA\'s 1-mile urban standard) and cross-tabulated access against tract median income and vehicle-access rate.',
      'For price, I modeled basket cost as a function of store type, county, and distance to the nearest competing store using ordinary least squares, mostly as a descriptive summary rather than a causal estimate.',
    ],
    findings: [
      'About 14 percent of tracts in the three states, holding roughly 8 percent of the population, are more than 10 miles by road from a full-service grocery store.',
      'Low-access tracts have median household income about $11,000 below the regional median and noticeably lower vehicle-access rates — the combination that makes distance most binding.',
      'The staple basket ranged from about $38 to $61 across sampled stores; independent stores in low-access counties were roughly 15 percent more expensive than supercenters, even after accounting for county.',
      'Distance to the nearest competing store was associated with higher basket prices, consistent with less local competition in remote areas.',
    ],
    figures: [
      {
        src: '/images/projects/food-access-scatter.svg',
        alt: 'Scatter plot of tract median income against road distance to the nearest grocery store, with low-income low-access tracts highlighted.',
        caption:
          'Each point is a census tract. Tracts in the lower-right — low income and far from a store — are where limited access is most likely to translate into hardship.',
      },
      {
        src: '/images/projects/food-access-by-state.svg',
        alt: 'Bar chart of the share of low-access census tracts by state, highest in Maine, then Vermont, then New Hampshire.',
        caption:
          'Share of tracts more than 10 road miles from a full-service grocery store, by state.',
      },
    ],
    significance: [
      'The tract-level list and maps were shared with a regional food-security coalition to help site a mobile-market pilot, pointing it toward tracts that are both remote and lower-income rather than remote alone.',
      'For me the project was practice at the unglamorous core of analytics: assembling several imperfect public datasets into one coherent unit of analysis, and being honest in the writeup about what the weakest piece of data can and cannot support.',
    ],
  },
]

/** Look up a single project by its slug. Returns undefined if not found. */
export function getProject(slug) {
  return projects.find((project) => project.slug === slug)
}
