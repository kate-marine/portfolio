/* =============================================================================
   Project case studies
   -----------------------------------------------------------------------------
   Each object is one featured project. All content below is placeholder — swap
   in your own writing, numbers, figures, and repository links.

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
    slug: 'local-voter-turnout',
    title: 'Predicting Turnout in Local Elections',
    summary:
      'Built a precinct-level model that identifies which registered voters are least likely to vote in municipal elections, to help a nonpartisan turnout campaign target outreach.',
    year: '2025',
    role: 'Solo project (course capstone)',
    tools: ['Python', 'pandas', 'scikit-learn', 'GeoPandas'],
    repo: 'https://github.com/kate-marine/local-voter-turnout',
    question: [
      'Municipal elections in the United States often see turnout below 20 percent, and the people who vote are systematically older, wealthier, and longer-tenured residents than the population as a whole. A local get-out-the-vote organization wanted to focus its limited volunteer hours on registered voters who were unlikely to vote on their own but could plausibly be moved by a knock or a call.',
      'The analytical question was: using only information available before an election, how accurately can we rank registered voters by their probability of voting, and which factors drive that probability?',
    ],
    data: [
      'The public voter file for a mid-sized New England county (roughly 240,000 registered voters), joined to precinct-level results from the past six years of municipal and general elections.',
      'Features included individual vote history (which of the past elections each person voted in), age, years registered, party registration, method of voting in prior elections, and precinct-level context such as median household income and share of renters from the American Community Survey.',
      'The outcome was whether each person voted in the most recent municipal election. Records with incomplete history were dropped, leaving about 210,000 rows. Because the voter file only records whether someone voted, not how, there is no vote-choice information involved.',
    ],
    methodology: [
      'I framed the task as binary classification and compared three models: penalized logistic regression, a random forest, and gradient-boosted trees. Continuous features were standardized; categorical features were one-hot encoded.',
      'Evaluation used 5-fold cross-validation, with folds drawn at the precinct level so that no precinct appeared in both training and validation. This mimics the real use case of scoring a new election and avoids leakage from geographically clustered behavior.',
      'I selected the model on cross-validated ROC AUC and then checked calibration, since the campaign needed probabilities they could threshold, not just a ranking. Gradient boosting won narrowly and was well calibrated after isotonic adjustment.',
    ],
    findings: [
      'The final model reached a cross-validated ROC AUC of 0.86 and identified a decile of "low-propensity but reachable" voters where predicted turnout was 12 percent against an overall rate of 31 percent.',
      'Prior vote history dominated: whether someone voted in the last comparable municipal election was worth more than all demographic features combined.',
      'After controlling for vote history, precinct share of renters and years-since-registration were the strongest remaining predictors, consistent with residential stability driving local participation.',
      'Targeting the model\'s bottom three deciles would let the campaign reach about 70 percent of eventual non-voters while contacting only 30 percent of the file.',
    ],
    figures: [
      {
        src: '/images/projects/turnout-feature-importance.svg',
        alt: 'Horizontal bar chart of permutation feature importances, with prior municipal vote history far ahead of other features.',
        caption:
          'Permutation importance for the final model. Prior vote history is the dominant signal; demographic and precinct features add smaller, incremental predictive value.',
      },
      {
        src: '/images/projects/turnout-calibration.svg',
        alt: 'Calibration curve showing predicted probability against observed turnout, close to the diagonal after isotonic calibration.',
        caption:
          'Calibration on held-out precincts after isotonic adjustment. Predicted probabilities can be read directly as expected turnout rates.',
      },
    ],
    significance: [
      'The campaign used the bottom-decile list to allocate roughly 400 volunteer shifts for a spring election, concentrating on voters the model flagged as reachable rather than on the high-propensity voters who typically get contacted.',
      'More broadly, the project is a concrete example of a pattern that recurs in analytics work: a simple, well-validated model plus a clear targeting rule is more useful to a decision-maker than a marginal gain in raw accuracy.',
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
