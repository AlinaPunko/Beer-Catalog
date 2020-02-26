async function callService(service, data, errorRef) {
    const result = await service(data);
    if (result instanceof Error) {
        if (typeof result.message === 'object') {
            errorRef.current.innerHTML = '';
            result.message.array.forEach((element) => {
                errorRef.current.innerHTML += `${element}</br>`;
            });
        } else {
            errorRef.current.innerHTML = result.message.message;
        }
        return;
    }
    return result;
}

export default { callService };
