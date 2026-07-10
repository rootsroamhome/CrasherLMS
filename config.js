/**
 * CrasherLMS — Configuration
 *
 * The Airtable API key is NOT stored here.
 * It lives as an environment variable on Netlify (AIRTABLE_API_KEY).
 * All browser API calls go through the serverless proxy at /api/airtable/.
 *
 * To add the environment variable in Netlify:
 *   Site settings → Environment variables → Add variable
 *   Key: AIRTABLE_API_KEY   Value: your Airtable personal access token
 *   Key: AIRTABLE_BASE_ID   Value: appIDb3twC9mJj4jO
 */
const CONFIG = {
  apiBase: '/.netlify/functions/airtable',
};

// Table names — change here if you rename them in Airtable
const TABLES = {
  todos:     'To-Do Items',
  standards: 'Standards',
  schedule:  'Schedule',
};

// Subject color map — used by all pages. Bold editorial palette on cream.
//   bg     — saturated (badge / vertical label / arrow accents)
//   accent — same saturated tone for --card-accent
//   tile   — soft color-fill for the whole tile background (dark text reads on it)
//   label  — text color used on the saturated bg
const SUBJECT_COLORS = {
  Science:         { bg: '#17A0AE', accent: '#17A0AE', tile: '#8FD6E1', label: '#1A1A1A' },
  Math:            { bg: '#F0533F', accent: '#F0533F', tile: '#F79E8C', label: '#1A1A1A' },
  ELA:             { bg: '#D19A1F', accent: '#D19A1F', tile: '#F4CE5E', label: '#1A1A1A' },
  'Humanities':    { bg: '#E07A3E', accent: '#E07A3E', tile: '#F0B98C', label: '#1A1A1A' },
  'Self-Study':    { bg: '#7C8A4E', accent: '#7C8A4E', tile: '#CFD39A', label: '#1A1A1A' },
  'Rabbit Hole':   { bg: '#B657A0', accent: '#B657A0', tile: '#EBB7DE', label: '#1A1A1A' },
  'Social Science':{ bg: '#E07A3E', accent: '#E07A3E', tile: '#F0B98C', label: '#1A1A1A' },
  Health:          { bg: '#D65784', accent: '#D65784', tile: '#F4AEC2', label: '#1A1A1A' },
};
