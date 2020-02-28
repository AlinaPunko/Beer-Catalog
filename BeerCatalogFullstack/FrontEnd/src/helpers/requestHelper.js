function get(url) {
    return fetch(url)
        .then(async (response) => {
            if (response.status !== 200) {
                const error = new Error(response.statusText);
                error.code = response.status;
                error.message = await response.json();
                return error;
            }
            const contentType = response.headers.get('content-type');
            if (contentType && contentType.includes('application/json')) {
                return response.json();
            }
            return response.text();
        })
        .catch((error) => new Error(`Network Error!${error}`));
}

function post(url, data) {
    return fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        mode: 'cors',
        accept: 'application/json',
        body: JSON.stringify(data)
    })
        .then(async (response) => {
            if (response.status !== 200) {
                const error = new Error(response.statusText);
                error.code = response.status;
                error.message = await response.json();
                return error;
            }
            const contentType = response.headers.get('content-type');
            if (contentType && contentType.includes('application/json')) {
                return response.json();
            }
            return response.text();
        })
        .catch((error) => new Error(`Network Error!${error}`));
}

function put(url, data) {
    return fetch(url, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        mode: 'cors',
        accept: 'application/json',
        body: JSON.stringify(data)
    })
        .then(async (response) => {
            if (response.status !== 200) {
                const error = new Error(response.statusText);
                error.code = response.status;
                error.message = await response.json();
                return error;
            }
            const contentType = response.headers.get('content-type');
            if (contentType && contentType.includes('application/json')) {
                return response.json();
            }
            return response.text();
        })
        .catch((error) => new Error(`Network Error!${error}`));
}

export default { get, post, put };
