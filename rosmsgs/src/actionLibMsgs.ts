namespace ActionLibMsgs {
  export enum GoalStatusType { }
  export const PENDING: GoalStatusType = 0;
  export const ACTIVE: GoalStatusType = 1;
  export const PREEMPTED: GoalStatusType = 2;
  export const SUCCEEDED: GoalStatusType = 3;
  export const ABORTED: GoalStatusType = 4;
  export const REJECTED: GoalStatusType = 5;
  export const PREEMPTING: GoalStatusType = 6;
  export const RECALLING: GoalStatusType = 7;
  export const RECALLED: GoalStatusType = 8;
  export const LOST: GoalStatusType = 9;

  export class GoalStatus extends ROSLIB.Message {
    goal_id: ActionLibMsgs.GoalID;
    status: number;
    text: string;

    constructor(values: {
      goal_id: ActionLibMsgs.GoalID;
      status: number;
      text: string;
    }) { super(values) }
  }

  export class GoalStatusArray extends ROSLIB.Message {
    header: StdMsgs.Header;
    status_list: ActionLibMsgs.GoalStatus[];

    constructor(values: {
      header: StdMsgs.Header;
      status_list: ActionLibMsgs.GoalStatus[];
    }) { super(values) }
  }

  export class GoalID extends ROSLIB.Message {
    stamp: { secs: number, nsecs: number };
    id: string;

    constructor(values: {
      stamp: { secs: number, nsecs: number };
      id: string;
    }) { super(values) }
  }
}
