import { pantryItems } from "./pantryItems";
import { steps } from "./steps";

export class recipes{
    rid:number|undefined;
    rName:string|undefined;
    rImage:string|undefined;
    rSteps:string|undefined;
    pantryItems:pantryItems[]| undefined;
    steps:steps[]|undefined;
}