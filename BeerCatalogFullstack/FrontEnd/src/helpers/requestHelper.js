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

function post(url, data) {
    return fetch(url,{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        accept: 'application/json',
        body: JSON.stringify(data)
    })
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

function put(url, data) {
    return fetch(url,{
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        accept: 'application/json',
        body: JSON.stringify(data)
    })
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

export default { get, post, put };
