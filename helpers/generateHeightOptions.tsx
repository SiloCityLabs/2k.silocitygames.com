export const generateHeightOptions = (min: string, max: string): string[] => {
    const [minFeet, minInches] = min.split("'").map(Number);
    const [maxFeet, maxInches] = max.split("'").map(Number);

    const options: string[] = [];
    for (let ft = minFeet; ft <= maxFeet; ft++) {
        let startInch = ft === minFeet ? minInches : 0;
        let endInch = ft === maxFeet ? maxInches : 11;

        for (let in_ = startInch; in_ <= endInch; in_++) {
            options.push(`${ft}'${in_}`);
        }
    }
    return options;
};