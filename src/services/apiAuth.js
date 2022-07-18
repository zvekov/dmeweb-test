const apiClientKey = import.meta.env.VITE_API_CLIENT_KEY;
const apiClientSecret = import.meta.env.VITE_API_CLIENT_SECRET;

function basicAuth(key, secret) {
    const hash = btoa(key + ':' + secret);
    return "Basic " + hash;
}

export const apiAuth = basicAuth(apiClientKey, apiClientSecret);
export const apiUrl = import.meta.env.VITE_API_URL;
