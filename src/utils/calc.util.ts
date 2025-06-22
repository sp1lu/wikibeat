export const reduceNumber = (num: number): number => {
    const array: number[] = Array.from(num.toString()).map(Number);
    const result: number = array.reduce((acc: number, curr: number) => {
        return acc + curr;
    }, 0);
    return (result < 10) ? result : reduceNumber(result);
}