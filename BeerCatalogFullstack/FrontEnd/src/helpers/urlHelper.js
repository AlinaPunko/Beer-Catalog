function getUrlWithParameter(url, pattern, parameter) {
    return url.replace(pattern, parameter);
}

function getUrlWithUriParameter(url, parameter) {
    return `${url}/${parameter}`;
}

export default { getUrlWithParameter, getUrlWithUriParameter };
