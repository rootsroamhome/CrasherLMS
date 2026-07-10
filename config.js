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
const SUBJECT_COLORS = {
  Science:         { bg: '#2E9AA6', accent: '#2E9AA6', label: '#FBF7EC' },
  Math:            { bg: '#E8503A', accent: '#E8503A', label: '#FBF7EC' },
  ELA:             { bg: '#D99A2B', accent: '#C6871B', label: '#1A1A1A' },
  'Self-Study':    { bg: '#7C7C57', accent: '#7C7C57', label: '#FBF7EC' },
  'Rabbit Hole':   { bg: '#8B5C9E', accent: '#8B5C9E', label: '#FBF7EC' },
  'Social Science':{ bg: '#7C7C57', accent: '#7C7C57', label: '#FBF7EC' },
  Health:          { bg: '#C64B7A', accent: '#C64B7A', label: '#FBF7EC' },
};
