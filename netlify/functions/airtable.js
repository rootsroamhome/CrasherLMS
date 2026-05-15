/**
 * Netlify serverless function: Airtable proxy
 *
 * All Airtable API calls from the browser go through here.
 * The API key lives in Netlify environment variables — never in client code.
 *
 * Set these in Netlify → Site settings → Environment variables:
 *   AIRTABLE_API_KEY  = your Airtable personal access token
 *   AIRTABLE_BASE_ID  = your Airtable base ID (appXXXXXXXX)
 */

exports.handler = async (event) => {
  const API_KEY = process.env.AIRTABLE_API_KEY;
  const BASE_ID = process.env.AIRTABLE_BASE_ID;

  if (!API_KEY || !BASE_ID) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Missing AIRTABLE_API_KEY or AIRTABLE_BASE_ID environment variables.' }),
    };
  }

  // Strip the function path prefix to get the table/record path
  // e.g. /.netlify/functions/airtable/To-Do%20Items  →  /To-Do%20Items
  const subPath = event.path.replace('/.netlify/functions/airtable', '') || '/';
  const query   = event.rawQuery ? `?${event.rawQuery}` : '';
  const url     = `https://api.airtable.com/v0/${BASE_ID}${subPath}${query}`;

  const options = {
    method: event.httpMethod,
    headers: {
      Authorization: `Bearer ${API_KEY}`,
      'Content-Type': 'application/json',
    },
  };

  if (event.body) options.body = event.body;

  const res  = await fetch(url, options);
  const text = await res.text();

  return {
    statusCode: res.status,
    headers: { 'Content-Type': 'application/json' },
    body: text,
  };
};
