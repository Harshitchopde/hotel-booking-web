import { MILLIES_PER_DAY } from "./constants";

export function dayDifference(date1,date2){
    const diff = Math.abs(date1?.getTime()-date2?.getTime());
    const diffDay = Math.ceil(diff/MILLIES_PER_DAY);
    return diffDay+1
}