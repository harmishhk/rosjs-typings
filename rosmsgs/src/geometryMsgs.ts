namespace GeometryMsgs {
  export class Accel extends ROSLIB.Message {
    // This expresses acceleration in free space broken into its linear and angular parts
    linear: GeometryMsgs.Vector3;
    angular: GeometryMsgs.Vector3;

    constructor(values: {
      linear: GeometryMsgs.Vector3;
      angular: GeometryMsgs.Vector3;
    }) { super(values) }
  }

  export class AccelStamped extends ROSLIB.Message {
    // An accel with reference coordinate frame and timestamp
    header: StdMsgs.Header;
    accel: GeometryMsgs.Accel;

    constructor(values: {
      header: StdMsgs.Header;
      accel: GeometryMsgs.Accel;
    }) { super(values) }
  }

  export class AccelWithCovariance extends ROSLIB.Message {
    // This expresses acceleration in free space with uncertainty
    accel: GeometryMsgs.Accel;
    // Row-major representation of the 6x6 covariance matrix
    // The orientation parameters use a fixed-axis representatio
    // In order, the parameters are:
    // (x, y, z, rotation about X axis, rotation about Y axis, rotation about Z axis)
    covariance: number[];

    constructor(values: {
      accel: GeometryMsgs.Accel;
      covariance: number[];
    }) { super(values) }
  }

  export class AccelWithCovarianceStamped extends ROSLIB.Message {
    // This represents an estimated accel with reference coordinate frame and timestamp
    header: StdMsgs.Header;
    accel: AccelWithCovariance;

    constructor(values: {
      header: StdMsgs.Header;
      accel: AccelWithCovariance;
    }) { super(values) }
  }

  export class Inertia extends ROSLIB.Message {
    // Mass [kg]
    m: number;

    // Center of mass [m]
    com: GeometryMsgs.Vector3;

    // Inertia Tensor [kg-m^2]
    //     | ixx ixy ixz |
    // I = | ixy iyy iyz |
    //     | ixz iyz izz |
    ixx: number;
    ixy: number;
    ixz: number;
    iyy: number;
    iyz: number;
    izz: number;

    constructor(values: {
      m: number;
      com: GeometryMsgs.Vector3;
      ixx: number;
      ixy: number;
      ixz: number;
      iyy: number;
      iyz: number;
      izz: number;
    }) { super(values) }
  }

  export class InertiaStamped extends ROSLIB.Message {
    header: StdMsgs.Header;
    inertia: Inertia;

    constructor(values: {
      header: StdMsgs.Header;
      inertia: Inertia;
    }) { super(values) }
  }

  export class Point extends ROSLIB.Message {
    // This contains the position of a point in free space
    x: number;
    y: number;
    z: number;

    constructor(values: {
      x: number;
      y: number;
      z: number;
    }) { super(values) }
  }

  export class Point32 extends Point { }

  export class PointStamped extends ROSLIB.Message {
    // This represents a Point with reference coordinate frame and timestamp
    header: StdMsgs.Header;
    point: Point;

    constructor(values: {
      header: StdMsgs.Header;
      point: Point;
    }) { super(values) }
  }

  export class Polygon extends ROSLIB.Message {
    // A  specification of a polygon where the first and last points are assumed to be connected
    points: Point32[];

    constructor(values: {
      points: Point32[];
    }) { super(values) }
  }

  export class PolygonStamped extends ROSLIB.Message {
    // This represents a Polygon with reference coordinate frame and timestamp
    header: StdMsgs.Header;
    polygon: Polygon;

    constructor(values: {
      header: StdMsgs.Header;
      polygon: Polygon;
    }) { super(values) }
  }

  export class Pose extends ROSLIB.Message {
    // A representation of pose in free space, composed of postion and orientation
    position: GeometryMsgs.Point;
    orientation: GeometryMsgs.Quaternion;

    constructor(values: {
      position: GeometryMsgs.Point;
      orientation: GeometryMsgs.Quaternion;
    }) { super(values) }
  }

  export class Pose2D extends ROSLIB.Message {
    // This expresses a position and orientation on a 2D manifold
    x: number;
    y: number;
    theta: number;

    constructor(values: {
      x: number;
      y: number;
      theta: number;
    }) { super(values) }
  }

  export class PoseArray extends ROSLIB.Message {
    // An array of poses with a header for global reference
    header: StdMsgs.Header;
    poses: Pose[];

    constructor(values: {
      header: StdMsgs.Header;
      poses: Pose[];
    }) { super(values) }
  }

  export class PoseStamped extends ROSLIB.Message {
    // A Pose with reference coordinate frame and timestamp
    header: StdMsgs.Header;
    pose: GeometryMsgs.Pose;

    constructor(values: {
      header: StdMsgs.Header;
      pose: GeometryMsgs.Pose;
    }) { super(values) }
  }

  export class PoseWithCovariance extends ROSLIB.Message {
    // This represents a pose in free space with uncertainty
    pose: Pose;
    // Row-major representation of the 6x6 covariance matrix
    // The orientation parameters use a fixed-axis representatio
    // In order, the parameters are:
    // (x, y, z, rotation about X axis, rotation about Y axis, rotation about Z axis)
    covariance: number[];

    constructor(values: {
      pose: Pose;
      covariance: number[];
    }) { super(values) }
  }

  export class PoseWithCovarianceStamped extends ROSLIB.Message {
    // This expresses an estimated pose with a reference coordinate frame and timestamp
    header: StdMsgs.Header;
    pose: PoseWithCovariance;

    constructor(values: {
      header: StdMsgs.Header;
      pose: PoseWithCovariance;
    }) { super(values) }
  }

  export class Quaternion extends ROSLIB.Message {
    // This represents an orientation in free space in quaternion form
    x: number;
    y: number;
    z: number;
    w: number;

    constructor(values: {
      x: number;
      y: number;
      z: number;
      w: number;
    }) { super(values) }
  }

  export class QuaternionStamped extends ROSLIB.Message {
    // This represents an orientation with reference coordinate frame and timestamp
    header: StdMsgs.Header;
    quaternion: Quaternion;

    constructor(values: {
      header: StdMsgs.Header;
      quaternion: Quaternion;
    }) { super(values) }
  }

  export class Transform extends ROSLIB.Message {
    // This represents the transform between two coordinate frames in free space
    translation: Vector3;
    rotation: Quaternion;

    constructor(values: {
      translation: Vector3;
      rotation: Quaternion;
    }) { super(values) }
  }

  export class TransformStamped extends ROSLIB.Message {
    //This expresses a transform from coordinate frame header.frame_id
    // to the coordinate frame child_frame_id
    // This message is mostly used by the
    // <a href="http://www.ros.org/wiki/tf">tf</a> package
    // See its documentation for more information
    header: StdMsgs.Header;
    child_frame_id: string; // the frame id of the child frame
    transform: ROSLIB.Transform;

    constructor(values: {
      header: StdMsgs.Header;
      child_frame_id: string;
      transform: ROSLIB.Transform;
    }) { super(values) }
  }

  export class Twist extends ROSLIB.Message {
    // This expresses velocity in free space broken into its linear and angular parts
    linear: Vector3;
    angular: Vector3;

    constructor(values: {
      linear: Vector3;
      angular: Vector3;
    }) { super(values) }
  }

  export class TwistStamped extends ROSLIB.Message {
    // A twist with reference coordinate frame and timestamp
    header: StdMsgs.Header;
    twist: Twist;

    constructor(values: {
      header: StdMsgs.Header;
      twist: Twist;
    }) { super(values) }
  }

  export class TwistWithCovariance extends ROSLIB.Message {
    // This expresses velocity in free space with uncertainty
    twist: Twist;
    // Row-major representation of the 6x6 covariance matrix
    // The orientation parameters use a fixed-axis representatio
    // In order, the parameters are:
    // (x, y, z, rotation about X axis, rotation about Y axis, rotation about Z axis)
    covariance: number[];

    constructor(values: {
      twist: Twist;
      covariance: number[];
    }) { super(values) }
  }

  export class TwistWithCovarianceStamped extends ROSLIB.Message {
    // This represents an estimated twist with reference coordinate frame and timestamp
    header: StdMsgs.Header;
    twist: TwistWithCovariance;

    constructor(values: {
      header: StdMsgs.Header;
      twist: TwistWithCovariance;
    }) { super(values) }
  }

  export class Vector3 extends Point {
    // This represents a vector in free space
    // It is only meant to represent a direction
    // Therefore, it does not make sense to apply a translation to it (e.g., when applying a
    //   generic rigid transformation to a Vector3, tf2 will only apply the rotation)
    // If you want your data to be translatable too, use the geometry_msgs/Point message instead
  }

  export class Vector3Stamped extends ROSLIB.Message {
    // This represents a Vector3 with reference coordinate frame and timestamp
    header: StdMsgs.Header;
    vector: Vector3;

    constructor(values: {
      header: StdMsgs.Header;
      vector: Vector3;
    }) { super(values) }
  }

  export class Wrench extends ROSLIB.Message {
    // This represents force in free space, separated into its linear and angular parts
    force: Vector3;
    torque: Vector3;

    constructor(values: {
      force: Vector3;
      torque: Vector3;
    }) { super(values) }
  }

  export class WrenchStamped extends ROSLIB.Message {
    // A wrench with reference coordinate frame and timestamp
    header: StdMsgs.Header;
    wrench: Wrench;

    constructor(values: {
      header: StdMsgs.Header;
      wrench: Wrench;
    }) { super(values) }
  }
}

declare module 'GeometryMsgs' {
  export = GeometryMsgs;
}
