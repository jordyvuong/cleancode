function buildUrl(url, options = {}) {
    let baseUrl = typeof url === 'object' || url === null ? '' : url;

    if (typeof url === 'object') {
        options = url;
    }

    if (options.path) {
        baseUrl = `${baseUrl}/${options.path}`;
    }

    if (options.queryParams && typeof options.queryParams === 'object') {
        const queryString = Object.entries(options.queryParams)
            .map(([key, value]) => `${encodeURIComponent(key)}=${encodeURIComponent(value)}`)
            .join('&');

        if (queryString) {
            baseUrl = `${baseUrl}?${queryString}`;
        }
    }

    if (options.hash) {
        baseUrl = `${baseUrl}#${encodeURIComponent(options.hash)}`;
    }

    return baseUrl;
}
