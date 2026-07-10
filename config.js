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
  Science:         { bg: '#2E9AA6', accent: '#2E9AA6', tile: '#C7E6EA', label: '#FBF7EC' },
  Math:            { bg: '#E8503A', accent: '#E8503A', tile: '#F8D5CC', label: '#FBF7EC' },
  ELA:             { bg: '#C6871B', accent: '#C6871B', tile: '#F4E4BD', label: '#1A1A1A' },
  'Humanities':    { bg: '#C6871B', accent: '#C6871B', tile: '#F4E4BD', label: '#1A1A1A' },
  'Self-Study':    { bg: '#7C7C57', accent: '#7C7C57', tile: '#E4E1D2', label: '#FBF7EC' },
  'Rabbit Hole':   { bg: '#8B5C9E', accent: '#8B5C9E', tile: '#E7DDEE', label: '#FBF7EC' },
  'Social Science':{ bg: '#7C7C57', accent: '#7C7C57', tile: '#E0DACB', label: '#FBF7EC' },
  Health:          { bg: '#C64B7A', accent: '#C64B7A', tile: '#F6D6E0', label: '#FBF7EC' },
};
