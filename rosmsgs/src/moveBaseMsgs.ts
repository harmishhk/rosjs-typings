namespace MoveBaseMsgs {
  export class MoveBaseActionFeedback extends ROSLIB.Message {
    header: StdMsgs.Header;
    status: ActionLibMsgs.GoalStatus;
    feedback: MoveBaseFeedback;

    constructor(values: {
      header: StdMsgs.Header;
      status: ActionLibMsgs.GoalStatus;
      feedback: MoveBaseFeedback;
    }) { super(values) }
  }

  export class MoveBaseActionGoal extends ROSLIB.Message {
    header: StdMsgs.Header;
    goal_id: ActionLibMsgs.GoalID;
    goal: MoveBaseGoal;

    constructor(values: {
      header: StdMsgs.Header;
      goal_id: ActionLibMsgs.GoalID;
      goal: MoveBaseGoal;
    }) { super(values) }
  }

  export class MoveBaseAction extends ROSLIB.Message {
    action_goal: MoveBaseActionGoal;
    action_result: MoveBaseActionResult
    action_feedback: MoveBaseActionFeedback;

    constructor(values: {
      action_goal: MoveBaseActionGoal;
      action_result: MoveBaseActionResult
      action_feedback: MoveBaseActionFeedback;
    }) { super(values) }
  }

  export class MoveBaseActionResult extends ROSLIB.Message {
    header: StdMsgs.Header;
    status: ActionLibMsgs.GoalStatus;
    result: MoveBaseResult;

    constructor(values: {
      header: StdMsgs.Header;
      status: ActionLibMsgs.GoalStatus;
      result: MoveBaseResult;
    }) { super(values) }
  }

  export class MoveBaseFeedback extends ROSLIB.Message {
    base_position: GeometryMsgs.PoseStamped;

    constructor(values: {
      base_position: GeometryMsgs.PoseStamped;
    }) { super(values) }
  }

  export class MoveBaseGoal extends ROSLIB.Message {
    target_pose: GeometryMsgs.PoseStamped;

    constructor(values: {
      target_pose: GeometryMsgs.PoseStamped;
    }) { super(values) }
  }

  export class MoveBaseResult extends ROSLIB.Message {
  }
}
