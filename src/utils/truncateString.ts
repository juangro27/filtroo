function truncateString(str: string): string {
    if (str.length > 20) {
        return str.slice(0, 20) + "...";
    } else {
        return str;
    }
}
export { truncateString };
