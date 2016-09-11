namespace HANPMsgs {
  export class PathArray extends ROSLIB.Message {
    header: StdMsgs.Header;
    ids: number[];
    paths: NavMsgs.Path[];

    constructor(values: {
      header: StdMsgs.Header;
      ids: number[];
      paths: NavMsgs.Path[];
    }) { super(values) }
  }

  export class TrackedHuman extends ROSLIB.Message {
    track_id: number;
    segments: TrackedSegment[];

    constructor(values: {
      track_id: number;
      segments: TrackedSegment[];
    }) { super(values) }
  }

  export class TrackedHumans extends ROSLIB.Message {
    header: StdMsgs.Header;
    humans: TrackedHuman[];

    constructor(values: {
      header: StdMsgs.Header;
      humans: TrackedHuman[];
    }) { super(values) }
  }

  export class TrackedSegment extends ROSLIB.Message {
    type: TrackedSegmentType;
    pose: GeometryMsgs.PoseWithCovariance;
    twist: GeometryMsgs.TwistWithCovariance;
    accel: GeometryMsgs.AccelWithCovariance;

    constructor(values: {
      type: TrackedSegmentType;
      pose: GeometryMsgs.PoseWithCovariance;
      twist: GeometryMsgs.TwistWithCovariance;
      accel: GeometryMsgs.AccelWithCovariance;
    }) { super(values) }
  }

  export class TrajectoryPoint extends ROSLIB.Message {
    transform: GeometryMsgs.Transform;
    velocity: GeometryMsgs.Twist;
    acceleration: GeometryMsgs.Twist;
    time_from_start: StdMsgs.Duration;

    constructor(values: {
      transform: GeometryMsgs.Transform;
      velocity: GeometryMsgs.Twist;
      acceleration: GeometryMsgs.Twist;
      time_from_start: StdMsgs.Duration;
    }) { super(values) }
  }

  export class Trajectory extends ROSLIB.Message {
    header: StdMsgs.Header;
    points: HANPMsgs.TrajectoryPoint[];

    constructor(values: {
      header: StdMsgs.Header;
      points: HANPMsgs.TrajectoryPoint[];
    }) { super(values) }
  }

  export class TrajectoryArray extends ROSLIB.Message {
    header: StdMsgs.Header;
    ids: number[];
    trajectories: HANPMsgs.Trajectory[];

    constructor(values: {
      header: StdMsgs.Header;
      ids: number[];
      trajectories: HANPMsgs.Trajectory[];
    }) { super(values) }
  }

  export enum TrackedSegmentType { }
  export const HEAD: TrackedSegmentType = 0;
  export const TORSO: TrackedSegmentType = 1;
  export const RIGHT_SHOULDER: TrackedSegmentType = 2;
  export const RIGHT_ELBOW: TrackedSegmentType = 3;
  export const RIGHT_WRIST: TrackedSegmentType = 4;
  export const RIGHT_HIP: TrackedSegmentType = 5;
  export const RIGHT_KNEE: TrackedSegmentType = 6;
  export const RIGHT_ANKLE: TrackedSegmentType = 7;
  export const LEFT_SHOULDER: TrackedSegmentType = 8;
  export const LEFT_ELBOW: TrackedSegmentType = 9;
  export const LEFT_WRIST: TrackedSegmentType = 10;
  export const LEFT_HIP: TrackedSegmentType = 11;
  export const LEFT_KNEE: TrackedSegmentType = 12;
  export const LEFT_ANKLE: TrackedSegmentType = 13;
}

declare module 'HANPMsgs' {
  export = HANPMsgs;
}
