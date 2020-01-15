function get(url) {
    return fetch(url)
        .then((response) => response.json())
        .catch((error) => new Error(`Network Error!${error}`));
}

export default { get };
