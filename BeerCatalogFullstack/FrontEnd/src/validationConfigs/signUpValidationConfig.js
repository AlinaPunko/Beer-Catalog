export default {
    email: {
        fieldName: 'Email',
        rule: 'required|email'
    },
    name: {
        fieldName: 'Name',
        rule: 'required'
    },
    password: {
        fieldName: 'Password',
        rule: 'required|min:6'
    },
    confirmedPassword: {
        fieldName: 'Confirmed password',
        rule: (password) => { return `required|in:${password}`; }
    }
};
