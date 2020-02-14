function get(url) {
    return fetch(url)
        .then((response) => {
            if (response.status !== 200) {
                const error = new Error(response.statusText);
                error.code = response.status;
                return error;
            }
            return response.json();
        })
        .catch((error) => new Error(`Network Error!${error}`));
}

export default { get };
