function buildUrl(url, options = {}) {
    const baseUrl = determineBaseUrl(url, options);

    const path = buildPath(options.path);
    const queryParams = buildQueryParams(options.queryParams);
    const hash = buildHash(options.hash);

    return `${baseUrl}${path}${queryParams}${hash}`;
}

function determineBaseUrl(url, options) {
    if (url === null || typeof url === 'object') {
        return '';
    }
    return url;
}

function buildPath(path) {
    if (!path) return '';
    return `/${path}`;
}

function buildQueryParams(queryParams) {
    if (!queryParams || typeof queryParams !== 'object') return '';
    const queryString = Object.entries(queryParams)
        .map(([key, value]) => `${encodeURIComponent(key)}=${encodeURIComponent(value)}`)
        .join('&');
    return queryString ? `?${queryString}` : '';
}

function buildHash(hash) {
    if (!hash) return '';
    return `#${encodeURIComponent(hash)}`;
}
