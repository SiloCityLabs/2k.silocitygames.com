export const generateWeightOptions = (min: number, max: number): number[] => {
    const options: number[] = [];
    for (let i = min; i <= max; i++) {
        options.push(i);
    }
    return options;
};