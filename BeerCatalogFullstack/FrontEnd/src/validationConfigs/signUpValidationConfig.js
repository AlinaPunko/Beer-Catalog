export default {
    email: {
        rule: 'required|email'
    },
    name: {
        rule: 'required'
    },
    password: {
        rule: 'required|min:6'
    },
    confirmPassword: {
        rule: (password) => { return `required|in:${password}`; }
    }
};
