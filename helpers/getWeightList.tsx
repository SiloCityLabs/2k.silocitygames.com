import PG from "@/json/2k25/weight/PG.json";
import SG from "@/json/2k25/weight/SG.json";
import SF from "@/json/2k25/weight/SF.json";
import PF from "@/json/2k25/weight/PF.json";
import C from "@/json/2k25/weight/C.json";

const weightsList: Record<string, any> = {
    PG,
    SG,
    SF,
    PF,
    C
};

export function getWeightList(position: string): any {
    return weightsList[position];
}
