//Helpers
import { generateWingspans } from "@/helpers/generateWingspans";

export const get2k25Wingspans = (selectedHeight: string): string[] => {
  if (selectedHeight) {
    return generateWingspans(selectedHeight);
  } else {
    return [];
  }
};
