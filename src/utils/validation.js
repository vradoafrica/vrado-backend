function isValidEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return typeof email === 'string' && regex.test(email.trim());
 
}

export {isValidEmail}