function isAuthenticUser(email, password) {
    const user = {
        email: 'ruegen@example.com',
        password: 'password123'
    }

    // FIXME: use mongoose to verify user
    // FIXME: use bcrypt to hash password
    if(email === user.email && password === user.password) {
        return true   
    }
    return false
}

module.exports = {
    isAuthenticUser
}