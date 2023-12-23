export function truncateString(str) {
    if (!str) {
        return "";
    }
    else if (str.length > 30) {
        return str.substring(0, 30) + '...';
    } else {
        return str;
    }
}

export const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
};