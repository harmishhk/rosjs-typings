// Type definitions for various ros messages
// Project: http://wiki.ros.org
// Definitions by: Harmish Khambhaita <https://github.com/harmishhk>

declare namespace GeometryMsgs {
  export interface Point extends ROSLIB.Message {
    x: number;
    y: number;
    z: number;
  }

  export interface Pose extends ROSLIB.Message {
    position: GeometryMsgs.Point;
    orientation: GeometryMsgs.Quaternion;
  }

  export interface PoseStamped extends ROSLIB.Message {
    header: StdMsgs.Header;
    pose: GeometryMsgs.Pose;
  }

  export interface Quaternion extends ROSLIB.Message {
    x: number;
    y: number;
    z: number;
    w: number;
  }

  export interface TransformStamped extends ROSLIB.Message {
    header: StdMsgs.Header;
    child_frame_id: string;
    transform: ROSLIB.Transform;
  }
}

declare namespace NavMsgs {
  export interface Path extends ROSLIB.Message {
    header: StdMsgs.Header;
    poses: GeometryMsgs.PoseStamped[];
  }
}

declare namespace StdMsgs {
  export interface Header extends ROSLIB.Message {
    seq: number;
    stamp: { secs: number, nsecs: number };
    frame_id: string;
  }
}

declare namespace TFWebRepublisher {
  export interface TFArray extends ROSLIB.Message {
    transforms: GeometryMsgs.TransformStamped[];
  }
}
