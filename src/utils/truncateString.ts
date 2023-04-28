function truncateString(str: string, max: number): string {
    if (str.length > max) {
        return str.slice(0, max) + "...";
    } else {
        return str;
    }
}
export { truncateString };
