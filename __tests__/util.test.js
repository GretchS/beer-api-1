const auth = require('../auth/util')

describe('authenticate user func', () => {

    test('authenticates valid user', () => {
        const email = 'ruegen@example.com'
        const password = 'password123'

        const result = auth.isAuthenticUser(email, password)
        expect(result).toBe(true)
    })
    test('passes on wrong email', () => {
        const email = 'bob@example.com'
        const password = 'password123'
        const result = auth.isAuthenticUser(email, password)
        expect(result).toBe(false)
    })
    
    test('passes on correct email but incorrect password', ()=> {
        const email = 'ruegen@example.com'
        const password = 'password12'

        const result = auth.isAuthenticUser(email, password)
        expect(result).toBe(false)
    })

    test('passes on incorrect email but correct password', ()=> {
        const email = 'ruege@example.com'
        const password = 'password123'

        const result = auth.isAuthenticUser(email, password)
        expect(result).toBe(false)
    })

    test('passes undefined email and correct password', () => {
        const email = undefined;
        const password = 'password123'

        const result = auth.isAuthenticUser(email, password)
        expect(result).toBe(false)
    })

    test('passes correct email and undefined password', () => {
        const email = 'ruegen@example.com'
        const password = undefined;

        const result = auth.isAuthenticUser(email, password)
        expect(result).toBe(false)
    })

    test('passes correct email and empty string password', () => {
        const email = 'ruegen@example.com'
        const password = ' ';

        const result = auth.isAuthenticUser(email, password)
        expect(result).toBe(false)
    })

})