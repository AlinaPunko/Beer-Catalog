function isEmailValid(email) {
    var pattern = /\S+@\S+\.\S+/;
    return pattern.test(pattern);
}

export default { isEmailValid };