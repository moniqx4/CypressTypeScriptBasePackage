import { PunchMethods } from "./PunchMethods";
import { PunchTypes } from "./PunchTypes";

export interface Punch {
  punchType: PunchTypes;
  punchMethod: PunchMethods;
  note?: string;
  costCenterDisplay?: string;
  branch?: string;
  division?: string;
  department?: string;
}