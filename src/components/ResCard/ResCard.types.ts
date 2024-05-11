import { feedback } from "../../../data";

export interface ResCardProps{
resid:number;
resimg:string,
resname:string,
resdesc:string,
feedback?:feedback[]
onClick:(page:string)=>void
}