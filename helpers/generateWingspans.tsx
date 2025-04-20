export const generateWingspans = (height: string): string[] => {
    // Convert height from feet and inches to inches
    const [feet, inches] = height.split("'").map(Number);
    const totalInches = (feet * 12) + inches;

    // Determine the increment based on height
    const increment = totalInches <= 74 ? 7 : totalInches >= 85 ? 9 : 8;

    // Calculate wingspans in inches
    const wingspansInInches: number[] = [];
    for (let i = totalInches; i <= totalInches + increment; i++) {
        wingspansInInches.push(i);
    }

    // Convert wingspans from inches back to feet and inches
    const wingspans = wingspansInInches.map(inches => {
        const feet = Math.floor(inches / 12);
        const remainingInches = inches % 12;
        return `${feet}'${remainingInches}`;
    });

    return wingspans;
};