function getUrlWithParameter(url, pattern, parameter) {
    return url.replace(pattern, parameter);
}

function getUrlWithQueryParameters(url, parameters) {
    url += '?';
    Object.keys(parameters).forEach((key) => {
        url += `${key}=${parameters[key]}&`;
    });
    return url;
}

export default { getUrlWithParameter, getUrlWithQueryParameters };
