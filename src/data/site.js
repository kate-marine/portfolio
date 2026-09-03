/* =============================================================================
   Site-wide content
   -----------------------------------------------------------------------------
   Text content for the About, Resume, and Home pages. Keeping copy here (rather
   than inside components) makes it easy to update the site without touching
   layout code.
   ========================================================================== */

export const site = {
  name: 'Kate Marine',
  // A short, factual line — not a marketing tagline.
  headline: 'Quantitative Social Science · Dartmouth College',

  // 1–2 sentences. Say what you do and what kind of work you want.
  intro:
    'I am a current junior studying Quantitative Social Science, and I enjoy building statistical and machine-learning models to answer applied questions in sports, economics, and human behavior.',

  location: 'Hanover, New Hampshire',
  email: 'katherine.a.marine.28@dartmouth.edu',

  // Portrait shown on the About page. Swap the file at public/images/headshot.jpg.
  photo: '/images/headshot.jpg',

  links: {
    github: 'https://github.com/kate-marine',
    // Replace with your real LinkedIn URL.
    linkedin: 'www.linkedin.com/in/kate-marine-b6b9502a7',
  },

  // The file lives at public/resume.pdf.
  resumePdf: '/resume.pdf',
}

export const about = {
  paragraphs: [
    'I study Quantitative Social Science at Dartmouth, a major that combines statistics, computer science, and social science research design. Most of my coursework and project work is applied: causal inference, regression modeling, machine learning, and data visualization, worked out on real, messy datasets rather than clean textbook examples.',
    'A lot of my hands-on experience has been in sports analytics and product analytics. I analyze athlete-tracking data for Dartmouth Athletics, build engagement and A/B-testing analyses for a student-founded mental health product, and did a data science internship for a health nonprofit where I built SQL pipelines and ran the analysis behind a shift in their content strategy. I also do pro-bono technical consulting for early-stage startups through a campus consulting group.',
    'I try to be rigorous about methodology while keeping the final takeaway understandable to someone who is not a statistician. I am looking for internships in data science, analytics, and consulting.',
  ],
  focusAreas: [
    'Sports and performance analytics',
    'Product and user-engagement analytics',
    'Experiment design and A/B testing',
    'Data visualization and communication',
  ],
}

/* Grouped as plain text lists — no badge grid. */
export const skills = [
  {
    label: 'Languages',
    items: ['Python', 'R', 'SQL', 'Java'],
  },
  {
    label: 'Tools & libraries',
    items: [
      'PyTorch',
      'pandas',
      'NumPy',
      'scikit-learn',
      'Tableau',
      'Git',
      'Excel',
    ],
  },
  {
    label: 'Methods',
    items: [
      'Exploratory data analysis',
      'A/B testing & experimentation',
      'Statistical modeling in R',
      'Natural language processing',
      'Data pipelines & reporting',
    ],
  },
]

export const education = {
  school: 'Dartmouth College',
  degree: 'B.A. in Quantitative Social Science (intended), minor in Economics',
  period: 'Expected June 2028',
  details: [
    'Citations for Academic Excellence: Math 50, Cognitive Science 01.',
    'Relevant coursework: Computational Models of Behavior, Mathematical Linear Models, Data Visualization, Machine Learning and Models of Language, Modern Statistical Computing.',
    'GPA: 3.90 / 4.0.',
  ],
}

export const experience = [
  {
    role: 'Data Analytics Intern',
    org: 'Dartmouth Athletics',
    period: 'Jan 2026 – Present',
    points: [
      'Analyze athlete-tracking data from Catapult wearable devices across two Division I teams to evaluate performance metrics and inform coaching decisions.',
      'Build R-based statistical models comparing GPS and inertial-movement (IMA) acceleration data to identify which indoor metrics are reliable substitutes for GPS, and deliver recommendations for the department\'s tracking strategy.',
      'Present findings and visual reports to coaches on trends in athlete workload and performance, with actionable insights to reduce injury risk and optimize preparedness.',
    ],
  },
  {
    role: 'AI Product & Content Developer',
    org: 'Dartmouth Evergreen AI',
    period: 'May 2025 – Present',
    points: [
      'Joined a Dartmouth-sponsored student mental health initiative as one of the first hires, contributing across engineering and content as the project scaled from prototype to functional product.',
      'Develop conversation logic trees in Dialogflow for a model agent that guides students through supportive, rule-based conversations with intent recognition, grounded in behavioral science.',
      'Designed and analyzed A/B tests on app and dialogue variations, using engagement data and user response to inform content and product decisions.',
    ],
  },
  {
    role: 'Executive Developer & Treasurer',
    org: 'Dartmouth Tech Consulting Group',
    period: 'Jan 2025 – Present',
    points: [
      'Provide pro-bono technical consulting in software engineering and data science to early-stage startups.',
      'Partnered with an independent basketball trainer to scope and build a customer-facing booking platform: designed the backend database and built the front end in HTML/JavaScript for client booking and lead capture.',
      'As Treasurer, manage budgeting and resource allocation for the organization across four concurrent client engagements.',
    ],
  },
  {
    role: 'Data Science & Product Intern',
    org: 'My Cancer Family',
    period: 'May 2025 – Sep 2025',
    points: [
      'Ran exploratory analysis of user-engagement data for a nonprofit supporting families affected by cancer, identifying the highest-retention content types; recommendations shifted the marketing strategy to a weekly newsletter and drove a 35% increase in repeat visitors over the next quarter.',
      'Built SQL pipeline queries to clean and join 12 months of engagement data from multiple sources into a single reporting view, replacing manual data pulls.',
      'Co-led a rebuild of the organization\'s web and mobile platforms, migrating off WordPress to a more scalable stack and enabling cleaner downstream analytics.',
    ],
  },
]

export const activities = [
  {
    role: 'Vice President',
    org: 'Dartmouth Sports Analytics Club',
    period: 'Dec 2025 – Present',
    points: [
      'Selected for the Syracuse University Football Analytics Blitz; led a quantitative analysis of NFL two-high safety coverage trends and delivered a data-driven offensive game plan with route concepts tailored to the Buffalo Bills.',
      'Mentor 30+ club members in data cleaning, modeling, and visualization with Python and R on real-world sports data.',
      'Oversee student-led projects spanning machine learning, network analysis, and statistical inference.',
    ],
  },
  {
    role: 'Member',
    org: 'Dartmouth Women in Business',
    period: 'Oct 2024 – Present',
    points: [
      'Participate in panels and case competitions on business analytics, financial modeling, and strategic decision-making.',
      'Analyze business case studies with peers to identify key performance indicators and build actionable recommendations, culminating in pitch-style presentations.',
    ],
  },
]
