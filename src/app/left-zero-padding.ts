export function leftZeroPadding(value: string, times?: number): string {
    if (times !== undefined) {
        return '0'.repeat(times) + value;
    }
    return '000' + value;
}