import heights from "@/json/2k25/height.json";
//Helpers
import { generateHeightOptions } from "@/helpers/generateHeightOptions";
//Types
import { MinMax } from "@/types/Builder";

export const get2k25Heights = (selectedPosition: string): string[] => {
  if (selectedPosition && heights && heights[selectedPosition]) {
    const positionHeights: MinMax = heights[selectedPosition];
    return generateHeightOptions(positionHeights.min, positionHeights.max);
  } else {
    return [];
  }
};
