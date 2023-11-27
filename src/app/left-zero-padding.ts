export function leftZeroPadding(value: string, times?: number): string {
    if(times) {
        return '0'.repeat(times) + value;
    }
    return '000' + value;
}