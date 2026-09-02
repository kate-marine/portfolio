/* =============================================================================
   Site-wide content
   -----------------------------------------------------------------------------
   Everything here is placeholder text — replace it with your own details.
   Keeping copy in this file (rather than inside components) makes it easy to
   update the site without touching layout code.
   ========================================================================== */

export const site = {
  name: 'Kate Marine',
  // A short, factual line — not a marketing tagline.
  headline: 'Quantitative Social Science · Dartmouth College',

  // 1–2 sentences. Say what you do and what kind of work you want.
  intro:
    'I am a junior studying Quantitative Social Science. I build statistical and machine-learning models to answer applied questions in politics, education, and consumer behavior, and I care about turning analysis into clear recommendations.',

  location: 'Hanover, New Hampshire',
  email: 'katherine.a.marine.28@dartmouth.edu',

  links: {
    github: 'https://github.com/kate-marine',
    // Replace with your real LinkedIn URL.
    linkedin: 'https://www.linkedin.com/in/kate-marine',
  },

  // Put a PDF at /public/resume.pdf for this link to work.
  resumePdf: '/resume.pdf',
}

export const about = {
  paragraphs: [
    'I study Quantitative Social Science at Dartmouth, a major that combines statistics, computer science, and social science research design. My coursework centers on causal inference, regression modeling, and data visualization, and I spend most of my time working with real, messy datasets rather than clean textbook examples.',
    'I am drawn to problems where a careful analysis changes a decision: which voters an organization should contact, whether a program is actually working, or how a business should price a product. I try to be rigorous about methodology while keeping the final takeaway understandable to someone who is not a statistician.',
    'Outside of coursework I work as a research assistant, analyzing survey and administrative data, and I lead data workshops for other students. I am looking for internships in data science, business analytics, consulting, and applied research.',
  ],
  focusAreas: [
    'Causal inference and program evaluation',
    'Predictive modeling and classification',
    'Survey and administrative data analysis',
    'Data visualization and communication',
  ],
}

/* Grouped as plain text lists — no badge grid. */
export const skills = [
  {
    label: 'Languages',
    items: ['Python', 'R', 'SQL'],
  },
  {
    label: 'Tools & libraries',
    items: [
      'pandas',
      'scikit-learn',
      'statsmodels',
      'tidyverse',
      'ggplot2',
      'Jupyter',
      'Git',
    ],
  },
  {
    label: 'Methods',
    items: [
      'Linear & logistic regression',
      'Causal inference (DiD, matching, IV)',
      'Experiment design & A/B testing',
      'Classification & model evaluation',
      'Geospatial analysis',
    ],
  },
]

export const education = {
  school: 'Dartmouth College',
  degree: 'B.A. in Quantitative Social Science, minor in Economics',
  period: 'Expected 2027',
  details: [
    'Relevant coursework: Causal Inference, Applied Regression, Machine Learning for Social Science, Data Visualization, Probability.',
    'GPA: 3.9 / 4.0 (placeholder).',
  ],
}

export const experience = [
  {
    role: 'Research Assistant',
    org: 'Dartmouth Department of Government',
    period: 'Sep 2024 – Present',
    points: [
      'Clean and analyze survey and administrative datasets (50k+ records) in R for a faculty project on local political participation.',
      'Built a reproducible pipeline that cut a recurring data-preparation task from several hours to a single script.',
      'Produced figures and tables for a working paper currently under review.',
    ],
  },
  {
    role: 'Data Analytics Intern',
    org: 'Placeholder Company',
    period: 'Jun 2025 – Aug 2025',
    points: [
      'Analyzed customer transaction data in SQL and Python to identify segments with high churn risk.',
      'Designed and evaluated an A/B test for a retention email, and presented results to the marketing team.',
      'Built a Streamlit dashboard used weekly by the analytics team.',
    ],
  },
  {
    role: 'Peer Data Consultant',
    org: 'Dartmouth Library Research Data Services',
    period: 'Jan 2024 – Present',
    points: [
      'Run workshops on R, data cleaning, and reproducible research for undergraduates.',
      'Hold weekly office hours helping students debug analysis code and structure projects.',
    ],
  },
]
