import urlHelper from 'helpers/urlHelper';

function sendRequest(headers, url) {
    return fetch(url, headers)
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

const getRequestWithBodyHeaders = (method, data) => {
    return (
        {
            method,
            headers: {
                'Content-Type': 'application/json'
            },
            mode: 'cors',
            accept: 'application/json',
            body: JSON.stringify(data)
        }
    );
};

function get(url, parameter) {
    const headers = {
        method: 'GET',
        mode: 'cors'
    };
    let fullUrl;

    if (parameter) {
        fullUrl = urlHelper.getUrlWithUriParameter(url, parameter);
    } else {
        fullUrl = url;
    }

    return sendRequest(headers, fullUrl);
}

async function post(url, data) {
    const headers = getRequestWithBodyHeaders('POST', data);
    return sendRequest(headers, url);
}

async function put(url, data) {
    const headers = getRequestWithBodyHeaders('PUT', data);
    return sendRequest(headers, url);
}

export default { get, post, put };
