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
     paper         (optional) path to a PDF write-up in /public, e.g. '/paper.pdf'
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
    // Optional: a PDF of the full write-up, served from /public.
    paper: '/wc_prediction_markets_paper.pdf',
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
    slug: 'fitbit-activity-memory',
    title: 'Fitbit Activity Dynamics and Memory Performance',
    summary:
      'Tested whether the day-to-day pattern of a person\'s Fitbit activity predicts memory-task performance beyond their average activity level as studied in Manning et al. (2022, Scientific Reports).',
    year: '2026',
    role: 'Solo research project',
    tools: ['Python', 'pandas', 'scikit-learn', 'SHAP', 'matplotlib'],
    repo: 'https://github.com/kate-marine/wearable-dynamics-data-model',
    question: [
      'A wearable tracker captures more than a person\'s average activity level. It captures how the activity varies day to day, trends over a year, and correlates with itself over time. I asked whether this temporal structure predicts memory-task performance beyond what a simple average already explains.',
      'Using a dataset from a previous Dartmouth studyof Fitbit logs and memory-task scores for 113 participants, I built a baseline model on mean activity alone and an augmented model that adds temporal features, then tested whether the temporal features add value out of sample.',
    ],
    data: [
      'The public dataset from Manning et al. (2022, Scientific Reports): raw Fitbit logs for 113 participants in long format (datetime, variable, value), roughly a year per person — 803,767 rows across 130 variables in total.',
      'Paired with memory outcomes (8 summary scores plus 54 fine-grained task metrics including free recall, foreign-language flashcards, primacy/recency, semantic clustering, error-distance measures) and survey responses covering demographics, stress, and exercise habits.',
      'I rebuilt the panel from the raw long-format logs rather than starting from a pre-collapsed summary, reindexing each participant over their full daily date range so missing days showed up as actual gaps instead of being dropped, since temporal features needed an accurate time axis to measure trend and autocorrelation against.',
    ],
    methodology: [
      'Signal selection: of 130 raw variables, kept only daily wearable signals passing a coverage gate (≥300 median valid days across participants, present for ≥60 participants), leaving 14 signals — steps, floors, active minutes, calories, body composition, and similar.',
      'Feature engineering: a 113×14 means-only matrix (one mean per participant per signal) as the baseline, and a 110×149 augmented matrix adding per-series descriptors — spread, OLS trend and its R², autocorrelation at 1 and 7 days, coefficient of variation, and data coverage — concatenated into a 113×163 matrix. With 163 predictors and 113 participants, this is a p > n problem by construction.',
      'Modeling: every model runs through the same median-impute → standardize → regress pipeline, fit inside each training fold only, evaluated with shuffled 5-fold cross-validation. Ridge (α = 1.0) on the means-only baseline versus Ridge (α = 100.0, heavier shrinkage for the higher dimensionality) on the augmented features, compared by R² lift (augmented − baseline).',
      'Robustness battery: the same comparison repeated on 40 fine-grained outcomes instead of 4 summary scores, on three additional model classes (Elastic Net, Random Forest on means, Random Forest on augmented features), and as a univariate Spearman screen across all 560 feature–outcome pairs.',
      'Validation of the null itself: a synthetic-signal test pushes a target with a known injected effect through the identical pipeline to confirm it can recover a real signal, and a power analysis (Fisher\'s z-transformation) quantifies the smallest correlation the sample could reliably detect.',
    ],
    findings: [
      'Every comparison pointed the same way: R² lift was negative for 34 of 40 outcomes, and the baseline itself barely predicted memory scores (cross-validated R² from −0.22 to −1.28 on the four summary outcomes) — adding temporal dynamics made out-of-sample prediction worse, not better.',
      'The pattern held across every robustness check: switching to Elastic Net or Random Forest, expanding to 40 fine-grained outcomes, and a 560-pair univariate Spearman screen where the strongest correlate (r ≈ 0.55) didn\'t cohere with any related outcome — consistent with multiple-comparison noise rather than a real effect.',
      'The synthetic-signal test recovered R² ≈ 0.95 on a target with a known injected effect, confirming the null on real data isn\'t a broken pipeline.',
      'A power analysis showed the study could only reliably detect |r| ≳ 0.26 at n = 113; the actual fold-wise correlations (|r| ≈ 0.07–0.19) fall below that floor, so the honest conclusion is "no reliable evidence of an effect at this sample size," not "no effect exists."',
    ],
    figures: [
      {
        src: '/images/projects/fitbit-r2-comparison.png',
        alt: 'Line chart comparing cross-validated R² for the baseline and augmented models across four memory outcomes; the augmented model sits at or far below the baseline on every outcome.',
        caption:
          'Cross-validated R² for the mean-activity baseline versus the temporal-augmented model, across the four summary memory outcomes. The augmented model never beats the baseline, and is dramatically worse on two of the four.',
      },
      {
        src: '/images/projects/fitbit-r2-lift-histogram.png',
        alt: 'Histogram of R² lift across 40 fine-grained outcomes, almost entirely at or below zero with a long left tail extending past -7000.',
        caption:
          'Distribution of R² lift (augmented minus baseline) across all 40 fine-grained outcomes. Nearly every outcome clusters at or below zero, with a long negative tail.',
      },
      {
        src: '/images/projects/fitbit-top-correlations.png',
        alt: 'Horizontal bar chart of the five strongest feature-target Spearman correlations, led by mean floors, mean weight, mean calories, mean BMR calories, and mean steps.',
        caption:
          'The strongest single feature–outcome Spearman correlations are all mean-activity features, not any of the 149 temporal descriptors — even the univariate screen turns up nothing dynamic.',
      },
    ],
    significance: [
      'This is a calibrated null, not an absence of effort: the same negative finding survived a synthetic-signal sanity check, four model classes, 40 outcomes instead of 4, and a 560-pair correlation screen — and the writeup is explicit that a small, underpowered sample (n = 113) can\'t distinguish "no effect" from "an effect too small to detect here."',
      'Methodologically it\'s the project I\'d point to for rigor over a positive headline: leakage-safe cross-validation, a p > n feature set handled with real caution about overfitting, and a power analysis that turns "we found nothing" into a specific, falsifiable claim about what the data could and couldn\'t have shown.',
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
