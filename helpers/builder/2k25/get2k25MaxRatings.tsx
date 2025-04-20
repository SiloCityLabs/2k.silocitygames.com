import { Attributes2k25 } from "@/types/Builder";
//json
import pgSixThreeBase from "@/json/2k25/max-ratings/pg/63/_base.json";
import pgSixThree170 from "@/json/2k25/max-ratings/pg/63/170.json";
import pgSixThree171 from "@/json/2k25/max-ratings/pg/63/171.json";
import pgSixThree172 from "@/json/2k25/max-ratings/pg/63/172.json";
import pgSixThree173 from "@/json/2k25/max-ratings/pg/63/173.json";
import pgSixThree174 from "@/json/2k25/max-ratings/pg/63/174.json";
import pgSixThree175 from "@/json/2k25/max-ratings/pg/63/175.json";
import pgSixThree176 from "@/json/2k25/max-ratings/pg/63/176.json";
import pgSixThree177 from "@/json/2k25/max-ratings/pg/63/177.json";
import pgSixThree178 from "@/json/2k25/max-ratings/pg/63/178.json";
import pgSixThree179 from "@/json/2k25/max-ratings/pg/63/179.json";
import pgSixThree180 from "@/json/2k25/max-ratings/pg/63/180.json";
import pgSixThree181 from "@/json/2k25/max-ratings/pg/63/181.json";
import pgSixThree182 from "@/json/2k25/max-ratings/pg/63/182.json";
import pgSixThree183 from "@/json/2k25/max-ratings/pg/63/183.json";
import pgSixThree184 from "@/json/2k25/max-ratings/pg/63/184.json";
import pgSixThree185 from "@/json/2k25/max-ratings/pg/63/185.json";
import pgSixThree186 from "@/json/2k25/max-ratings/pg/63/186.json";
import pgSixThree187 from "@/json/2k25/max-ratings/pg/63/187.json";
import pgSixThree188 from "@/json/2k25/max-ratings/pg/63/188.json";
import pgSixThree189 from "@/json/2k25/max-ratings/pg/63/189.json";
import pgSixThree190 from "@/json/2k25/max-ratings/pg/63/190.json";
import pgSixThree191 from "@/json/2k25/max-ratings/pg/63/191.json";
import pgSixThree192 from "@/json/2k25/max-ratings/pg/63/192.json";
import pgSixThree193 from "@/json/2k25/max-ratings/pg/63/193.json";
import pgSixThree194 from "@/json/2k25/max-ratings/pg/63/194.json";
import pgSixThree195 from "@/json/2k25/max-ratings/pg/63/195.json";
import pgSixThree196 from "@/json/2k25/max-ratings/pg/63/196.json";
import pgSixThree197 from "@/json/2k25/max-ratings/pg/63/197.json";
import pgSixThree198 from "@/json/2k25/max-ratings/pg/63/198.json";
import pgSixThree199 from "@/json/2k25/max-ratings/pg/63/199.json";
import pgSixThree200 from "@/json/2k25/max-ratings/pg/63/200.json";
import pgSixThree201 from "@/json/2k25/max-ratings/pg/63/201.json";

const ratings: Record<string, any> = {
  "pg-63": pgSixThreeBase,
  "pg-63-170": pgSixThree170,
  "pg-63-171": pgSixThree171,
  "pg-63-172": pgSixThree172,
  "pg-63-173": pgSixThree173,
  "pg-63-174": pgSixThree174,
  "pg-63-175": pgSixThree175,
  "pg-63-176": pgSixThree176,
  "pg-63-177": pgSixThree177,
  "pg-63-178": pgSixThree178,
  "pg-63-179": pgSixThree179,
  "pg-63-180": pgSixThree180,
  "pg-63-181": pgSixThree181,
  "pg-63-182": pgSixThree182,
  "pg-63-183": pgSixThree183,
  "pg-63-184": pgSixThree184,
  "pg-63-185": pgSixThree185,
  "pg-63-186": pgSixThree186,
  "pg-63-187": pgSixThree187,
  "pg-63-188": pgSixThree188,
  "pg-63-189": pgSixThree189,
  "pg-63-190": pgSixThree190,
  "pg-63-191": pgSixThree191,
  "pg-63-192": pgSixThree192,
  "pg-63-193": pgSixThree193,
  "pg-63-194": pgSixThree194,
  "pg-63-195": pgSixThree195,
  "pg-63-196": pgSixThree196,
  "pg-63-197": pgSixThree197,
  "pg-63-198": pgSixThree198,
  "pg-63-199": pgSixThree199,
  "pg-63-200": pgSixThree200,
  "pg-63-201": pgSixThree201,
};

export const get2k25MaxRatings = (
  position: string,
  height: string,
  weight: string,
  wingspan: string
): { baseRatings: Attributes2k25; maxRatings: Attributes2k25 } => {
  let maxRatings: Attributes2k25;
  const base_key = `${position.toLowerCase()}-${height.replace("'", "")}`;
  const rating_key = `${base_key}-${weight}`;
  maxRatings = structuredClone(pgSixThreeBase);
  if (!ratings[rating_key] || Object.keys(ratings[rating_key]).length <= 0) {
    return {
      baseRatings: {} as Attributes2k25,
      maxRatings: {} as Attributes2k25,
    };
  }
  const mergedRatings = deepMerge(maxRatings, ratings[rating_key][wingspan]);

  console.log("get2k25MaxRatings", {
    base_key: base_key,
    rating_key: rating_key,
    position: position,
    height: height,
    weight: weight,
    wingspan: wingspan,
    changes: ratings[rating_key][wingspan],
    mergedRatings: mergedRatings,
  });

  return {
    baseRatings: pgSixThreeBase,
    maxRatings: mergedRatings,
  };
};

function deepMerge(target, source) {
  for (const key in source) {
    if (
      typeof source[key] === "object" &&
      source[key] !== null &&
      typeof target[key] === "object" &&
      target[key] !== null
    ) {
      deepMerge(target[key], source[key]); // Recursive call for nested objects
    } else {
      target[key] = source[key]; // Overwrite or add property
    }
  }
  return target;
}
