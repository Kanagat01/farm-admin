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