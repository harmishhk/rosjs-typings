// Type definitions for various ros messages
// Project: http://wiki.ros.org
// Definitions by: Harmish Khambhaita <https://github.com/harmishhk>

declare namespace GeometryMsgs {
  export interface Accel extends ROSLIB.Message {
    // This expresses acceleration in free space broken into its linear and angular parts
    linear: GeometryMsgs.Vector3;
    angular: GeometryMsgs.Vector3;
  }

  export interface AccelStamped extends ROSLIB.Message {
    // An accel with reference coordinate frame and timestamp
    header: StdMsgs.Header;
    accel: GeometryMsgs.Accel;
  }

  export interface AccelWithCovariance extends ROSLIB.Message {
    // This expresses acceleration in free space with uncertainty
    accel: GeometryMsgs.Accel;
    // Row-major representation of the 6x6 covariance matrix
    // The orientation parameters use a fixed-axis representatio
    // In order, the parameters are:
    // (x, y, z, rotation about X axis, rotation about Y axis, rotation about Z axis)
    covariance: number[];
  }

  export interface AccelWithCovarianceStamped extends ROSLIB.Message {
    // This represents an estimated accel with reference coordinate frame and timestamp
    header: StdMsgs.Header;
    accel: AccelWithCovariance;
  }

  export interface Inertia extends ROSLIB.Message {
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
  }

  export interface InertiaStamped extends ROSLIB.Message {
    header: StdMsgs.Header;
    inertia: Inertia;
  }

  export interface Point extends ROSLIB.Message {
    // This contains the position of a point in free space
    x: number;
    y: number;
    z: number;
  }
  export interface Point32 extends Point { }

  export interface PointStamped extends ROSLIB.Message {
    // This represents a Point with reference coordinate frame and timestamp
    header: StdMsgs.Header;
    point: Point;
  }

  export interface Polygon extends ROSLIB.Message {
    // A  specification of a polygon where the first and last points are assumed to be connected
    points: Point32[];
  }

  export interface PolygonStamped extends ROSLIB.Message {
    // This represents a Polygon with reference coordinate frame and timestamp
    header: StdMsgs.Header;
    polygon: Polygon;
  }

  export interface Pose extends ROSLIB.Message {
    // A representation of pose in free space, composed of postion and orientation
    position: GeometryMsgs.Point;
    orientation: GeometryMsgs.Quaternion;
  }

  export interface Pose2D extends ROSLIB.Message {
    // This expresses a position and orientation on a 2D manifold
    x: number;
    y: number;
    theta: number;
  }

  export interface PoseArray extends ROSLIB.Message {
    // An array of poses with a header for global reference
    header: StdMsgs.Header;
    poses: Pose[];
  }

  export interface PoseStamped extends ROSLIB.Message {
    // A Pose with reference coordinate frame and timestamp
    header: StdMsgs.Header;
    pose: GeometryMsgs.Pose;
  }

  export interface PoseWithCovariance extends ROSLIB.Message {
    // This represents a pose in free space with uncertainty
    pose: Pose;
    // Row-major representation of the 6x6 covariance matrix
    // The orientation parameters use a fixed-axis representatio
    // In order, the parameters are:
    // (x, y, z, rotation about X axis, rotation about Y axis, rotation about Z axis)
    covariance: number[];
  }

  export interface PoseWithCovarianceStamped extends ROSLIB.Message {
    // This expresses an estimated pose with a reference coordinate frame and timestamp
    header: StdMsgs.Header;
    pose: PoseWithCovariance;
  }

  export interface Quaternion extends ROSLIB.Message {
    // This represents an orientation in free space in quaternion form
    x: number;
    y: number;
    z: number;
    w: number;
  }

  export interface QuaternionStamped extends ROSLIB.Message {
    // This represents an orientation with reference coordinate frame and timestamp
    header: StdMsgs.Header;
    quaternion: Quaternion;
  }

  export interface Transform extends ROSLIB.Message {
    // This represents the transform between two coordinate frames in free space
    translation: Vector3;
    rotation: Quaternion;
  }

  export interface TransformStamped extends ROSLIB.Message {
    //This expresses a transform from coordinate frame header.frame_id
    // to the coordinate frame child_frame_id
    // This message is mostly used by the
    // <a href="http://www.ros.org/wiki/tf">tf</a> package
    // See its documentation for more information
    header: StdMsgs.Header;
    child_frame_id: string; // the frame id of the child frame
    transform: ROSLIB.Transform;
  }

  export interface Twist extends ROSLIB.Message {
    // This expresses velocity in free space broken into its linear and angular parts
    linear: Vector3;
    angular: Vector3;
  }

  export interface TwistStamped extends ROSLIB.Message {
    // A twist with reference coordinate frame and timestamp
    header: StdMsgs.Header;
    twist: Twist;
  }

  export interface TwistWithCovariance extends ROSLIB.Message {
    // This expresses velocity in free space with uncertainty
    twist: Twist;
    // Row-major representation of the 6x6 covariance matrix
    // The orientation parameters use a fixed-axis representatio
    // In order, the parameters are:
    // (x, y, z, rotation about X axis, rotation about Y axis, rotation about Z axis)
    covariance: number[];
  }

  export interface TwistWithCovarianceStamped extends ROSLIB.Message {
    // This represents an estimated twist with reference coordinate frame and timestamp
    header: StdMsgs.Header;
    twist: TwistWithCovariance;
  }

  export interface Vector3 extends Point {
    // This represents a vector in free space
    // It is only meant to represent a direction
    // Therefore, it does not make sense to apply a translation to it (e.g., when applying a
    //   generic rigid transformation to a Vector3, tf2 will only apply the rotation)
    // If you want your data to be translatable too, use the geometry_msgs/Point message instead
  }

  export interface Vector3Stamped extends ROSLIB.Message {
    // This represents a Vector3 with reference coordinate frame and timestamp
    header: StdMsgs.Header;
    vector: Vector3;
  }

  export interface Wrench extends ROSLIB.Message {
    // This represents force in free space, separated into its linear and angular parts
    force: Vector3;
    torque: Vector3;
  }

  export interface Wrench extends ROSLIB.Message {
    // A wrench with reference coordinate frame and timestamp
    header: StdMsgs.Header;
    wrench: Wrench;
  }
}

declare namespace HANPMsgs {
  export interface PathArray extends ROSLIB.Message {
    header: StdMsgs.Header;
    ids: number[];
    paths: NavMsgs.Path[];
  }

  export interface TrackedHuman extends ROSLIB.Message {
    track_id: number;
    segments: TrackedSegment[];
  }

  export interface TrackedHumans extends ROSLIB.Message {
    header: StdMsgs.Header;
    humans: TrackedHuman[];
  }

  export interface TrackedSegment extends ROSLIB.Message {
    type: TrackedSegmentType;
    pose: GeometryMsgs.PoseWithCovariance;
    twist: GeometryMsgs.TwistWithCovariance;
    accel: GeometryMsgs.AccelWithCovariance;
  }

  export enum TrackedSegmentType { }
  export const HEAD: TrackedSegmentType;
  export const TORSO: TrackedSegmentType;
  export const RIGHT_SHOULDER: TrackedSegmentType;
  export const RIGHT_ELBOW: TrackedSegmentType;
  export const RIGHT_WRIST: TrackedSegmentType;
  export const RIGHT_HIP: TrackedSegmentType;
  export const RIGHT_KNEE: TrackedSegmentType;
  export const RIGHT_ANKLE: TrackedSegmentType;
  export const LEFT_SHOULDER: TrackedSegmentType;
  export const LEFT_ELBOW: TrackedSegmentType;
  export const LEFT_WRIST: TrackedSegmentType;
  export const LEFT_HIP: TrackedSegmentType;
  export const LEFT_KNEE: TrackedSegmentType;
  export const LEFT_ANKLE: TrackedSegmentType;
}

declare namespace NavMsgs {
  export interface GridCells extends ROSLIB.Message {
    // An array of cells in a 2D grid
    header: StdMsgs.Header;
    cell_width: number;
    cell_height: number;
    cells: GeometryMsgs.Point[];
  }

  export interface MapMetaData extends ROSLIB.Message {
    // This hold basic information about the characterists of the OccupancyGrid

    // The time at which the map was loaded
    map_load_time: { sec: number, nsec: number };
    // The map resolution [m/cell]
    resolution: number;
    // Map width [cells]
    width: number;
    // Map height [cells]
    height: number;
    // The origin of the map [m, m, rad]
    // This is the real-world pose of the cell (0,0) in the map.
    origin: GeometryMsgs.Pose;
  }

  export interface OccupancyGrid extends ROSLIB.Message {
    // This represents a 2-D grid map, in which each cell represents the probability of occupancy
    header: StdMsgs.Header;
    // MetaData for the map
    info: MapMetaData;
    // The map data, in row-major order, starting with (0,0)
    // Occupancy probabilities are in the range [0,100].  Unknown is -1
    data: number[];
  }

  export interface MapMetaData extends ROSLIB.Message {
    //This represents an estimate of a position and velocity in free space.
    //The pose in this message should be specified in the coordinate frame given by header.frame_id.
    //The twist in this message should be specified in the coordinate frame given by the child_frame_id
    header: StdMsgs.Header;
    child_frame_id: string;
    pose: GeometryMsgs.PoseWithCovariance;
    twist: GeometryMsgs.TwistWithCovariance;
  }

  export interface Path extends ROSLIB.Message {
    // An array of poses that represents a Path for a robot to follow
    header: StdMsgs.Header;
    poses: GeometryMsgs.PoseStamped[];
  }
}

declare namespace StdMsgs {
  export interface Bool extends ROSLIB.Message {
    data: boolean;
  }

  export interface Byte extends ROSLIB.Message {
    data: number;
  }

  export interface ByteMultiArray extends ROSLIB.Message {
    // Please look at the MultiArrayLayout message definition for
    // documentation on all multiarrays
    layout: MultiArrayLayout  // specification of data layout
    data: number[];           // array of data
  }

  export interface Char extends Byte { }

  export interface ColorRGBA extends ROSLIB.Message {
    r: number;
    g: number;
    b: number;
    a: number;
  }

  export interface Duration extends ROSLIB.Message {
    data: { sec: number, nsec: number };
  }

  export interface Empty extends ROSLIB.Message { }

  export interface Float32 extends Byte { }

  export interface Float32MultiArray extends ByteMultiArray { }

  export interface Float64 extends Byte { }

  export interface Float64MultiArray extends ByteMultiArray { }

  export interface Header extends ROSLIB.Message {
    // Standard metadata for higher-level stamped data types
    // This is generally used to communicate timestamped data in a particular coordinate frame.
    //
    // sequence ID: consecutively increasing ID
    seq: number;
    // Two-integer timestamp that is expressed as:
    //  * stamp.sec: seconds (stamp_secs) since epoch
    //  * stamp.nsec: nanoseconds since stamp_secs
    //  time-handling sugar is provided by the client library
    stamp: { sec: number, nsec: number };
    // Frame this data is associated with
    //  0: no frame
    //  1: global frame
    frame_id: string;
  }

  export interface Int16 extends Byte { }

  export interface Int16MultiArray extends ByteMultiArray { }

  export interface Int32 extends Byte { }

  export interface Int32MultiArray extends ByteMultiArray { }

  export interface Int64 extends Byte { }

  export interface Int64MultiArray extends ByteMultiArray { }

  export interface Int8 extends Byte { }

  export interface Int8MultiArray extends ByteMultiArray { }

  export interface MultiArrayDimension extends ROSLIB.Message {
    label: string;  // label of given dimension
    size: number;   // size of given dimension (in type units)
    stride: number; // stride of given dimension
  }

  export interface MultiArrayLayout extends ROSLIB.Message {
    // The multiarray declares a generic multi-dimensional array of a particular data type.
    // Dimensions are ordered from outer most to inner most

    dim: MultiArrayDimension[];
    data_offset: number;

    /* Accessors should ALWAYS be written in terms of dimension stride
     * and specified outer-most dimension first
     *
     * // multiarray(i,j,k) = data[data_offset + dim_stride[1]*i + dim_stride[2]*j + k]
     * A standard, 3-channel 640x480 image with interleaved color channels
     * // would be specified as:
     * dim[0].label  = "height"
     * dim[0].size   = 480
     * dim[0].stride = 3*640*480 = 921600  (note dim[0] stride is just size of image)
     * dim[1].label  = "width"
     * dim[1].size   = 640
     * dim[1].stride = 3*640 = 1920
     * dim[2].label  = "channel"
     * dim[2].size   = 3
     * // dim[2].stride = 3
     * multiarray(i,j,k) refers to the ith row, jth column, and kth channel
     */
  }

  export interface String extends ROSLIB.Message {
    data: string;
  }

  export interface Time extends ROSLIB.Message {
    data: { sec: number, nsec: number };
  }

  export interface UInt16 extends Byte { }

  export interface UInt16MultiArray extends ByteMultiArray { }

  export interface UInt32 extends Byte { }

  export interface UInt32MultiArray extends ByteMultiArray { }

  export interface UInt64 extends Byte { }

  export interface UInt64MultiArray extends ByteMultiArray { }

  export interface UInt8 extends Byte { }

  export interface UInt8MultiArray extends ByteMultiArray { }
}

declare namespace TFWebRepublisher {
  export interface TFArray extends ROSLIB.Message {
    transforms: GeometryMsgs.TransformStamped[];
  }
}
