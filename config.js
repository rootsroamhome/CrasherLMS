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
  Science:         { bg: '#1F8E9B', accent: '#1F8E9B', tile: '#A3DFE6', label: '#FBF7EC' },
  Math:            { bg: '#E8503A', accent: '#E8503A', tile: '#F6A490', label: '#1A1A1A' },
  ELA:             { bg: '#C6871B', accent: '#C6871B', tile: '#F5D982', label: '#1A1A1A' },
  'Humanities':    { bg: '#C1682E', accent: '#C1682E', tile: '#F0C4A0', label: '#1A1A1A' },
  'Self-Study':    { bg: '#6F6F45', accent: '#6F6F45', tile: '#DAD2AC', label: '#FBF7EC' },
  'Rabbit Hole':   { bg: '#8B4FA6', accent: '#8B4FA6', tile: '#DDC1EE', label: '#FBF7EC' },
  'Social Science':{ bg: '#C1682E', accent: '#C1682E', tile: '#F0C4A0', label: '#1A1A1A' },
  Health:          { bg: '#C64B7A', accent: '#C64B7A', tile: '#F6B8CE', label: '#1A1A1A' },
};
