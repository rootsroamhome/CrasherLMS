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

// Subject color map — used by all pages
const SUBJECT_COLORS = {
  Math:            { bg: '#1e3a5f', accent: '#3B82F6', label: '#FFFFFF' },
  Science:         { bg: '#14391f', accent: '#22C55E', label: '#FFFFFF' },
  'Social Science':{ bg: '#431407', accent: '#F97316', label: '#FFFFFF' },
  ELA:             { bg: '#2e1065', accent: '#A855F7', label: '#FFFFFF' },
  Health:          { bg: '#500724', accent: '#EC4899', label: '#FFFFFF' },
  'Rabbit Hole':   { bg: '#0d3330', accent: '#14B8A6', label: '#FFFFFF' },
};
