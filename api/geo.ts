/**
 * GET /api/geo → { country: "ZA" }
 *
 * Returns the visitor's country from Vercel's edge geolocation header so the
 * site can decide whether a cookie choice is required (UK / EEA / Switzerland).
 * The IP address itself is never read, returned or stored.
 */
export function GET(request: Request) {
  const country = request.headers.get('x-vercel-ip-country');
  return new Response(JSON.stringify({ country: country ? country.toUpperCase() : null }), {
    headers: {
      'content-type': 'application/json; charset=utf-8',
      'cache-control': 'private, no-store',
    },
  });
}
