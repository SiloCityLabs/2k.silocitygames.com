//Helpers
import { generateWeightOptions } from "@/helpers/generateWeightOptions";
import { getWeightList } from "@/helpers/getWeightList";
//Types
import { MinMax } from "@/types/Builder";

export const get2k25Weights = (
  selectedPosition: string,
  selectedHeight: string
): number[] => {
  if (selectedPosition && selectedHeight) {
    const positionWeights: MinMax = getWeightList(selectedPosition);
    if (positionWeights) {
      const heightKey = selectedHeight.replace(/['"]/g, ""); // Remove quotes
      const weightRange = positionWeights[heightKey];
      const minWeight = weightRange?.min;
      const maxWeight = weightRange?.max;

      if (minWeight && maxWeight) {
        return generateWeightOptions(minWeight, maxWeight); // Return the array
      }
    }
  }
  return []; // Return empty array if conditions not met
};
