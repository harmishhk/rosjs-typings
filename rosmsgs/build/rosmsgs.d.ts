declare namespace ActionLibMsgs {
    enum GoalStatusType {
    }
    const PENDING: GoalStatusType;
    const ACTIVE: GoalStatusType;
    const PREEMPTED: GoalStatusType;
    const SUCCEEDED: GoalStatusType;
    const ABORTED: GoalStatusType;
    const REJECTED: GoalStatusType;
    const PREEMPTING: GoalStatusType;
    const RECALLING: GoalStatusType;
    const RECALLED: GoalStatusType;
    const LOST: GoalStatusType;
    class GoalStatus extends ROSLIB.Message {
        goal_id: ActionLibMsgs.GoalID;
        status: number;
        text: string;
        constructor(values: {
            goal_id: ActionLibMsgs.GoalID;
            status: number;
            text: string;
        });
    }
    class GoalStatusArray extends ROSLIB.Message {
        header: StdMsgs.Header;
        status_list: ActionLibMsgs.GoalStatus[];
        constructor(values: {
            header: StdMsgs.Header;
            status_list: ActionLibMsgs.GoalStatus[];
        });
    }
    class GoalID extends ROSLIB.Message {
        stamp: {
            secs: number;
            nsecs: number;
        };
        id: string;
        constructor(values: {
            stamp: {
                secs: number;
                nsecs: number;
            };
            id: string;
        });
    }
}
declare namespace DynamicReconfigure {
    class BoolParameter extends ROSLIB.Message {
        name: string;
        value: boolean;
        constructor(values: {
            name: string;
            value: boolean;
        });
    }
    class Config extends ROSLIB.Message {
        bools: BoolParameter[];
        ints: IntParameter[];
        strs: StrParameter[];
        doubles: DoubleParameter[];
        groups: GroupState[];
        constructor(values: {
            bools?: BoolParameter[];
            ints?: IntParameter[];
            strs?: StrParameter[];
            doubles?: DoubleParameter[];
            groups?: GroupState[];
        });
    }
    class ConfigDescription extends ROSLIB.Message {
        groups: Group[];
        max: Config;
        min: Config;
        dflt: Config;
        constructor(values: {
            groups: Group[];
            max: Config;
            min: Config;
            dflt: Config;
        });
    }
    class DoubleParameter extends ROSLIB.Message {
        name: string;
        value: number;
        constructor(values: {
            name: string;
            value: number;
        });
    }
    class Group extends ROSLIB.Message {
        name: string;
        type: string;
        parameters: ParamDescription[];
        parent: number;
        id: number;
        constructor(values: {
            name: string;
            type: string;
            parameters: ParamDescription[];
            parent: number;
            id: number;
        });
    }
    class GroupState extends ROSLIB.Message {
        name: string;
        state: boolean;
        id: number;
        parent: number;
        constructor(values: {
            name: string;
            state: boolean;
            id: number;
            parent: number;
        });
    }
    class IntParameter extends ROSLIB.Message {
        name: string;
        value: number;
        constructor(values: {
            name: string;
            value: number;
        });
    }
    class ParamDescription extends ROSLIB.Message {
        name: string;
        type: string;
        level: number;
        description: string;
        edit_method: string;
        constructor(values: {
            name: string;
            type: string;
            level: number;
            description: string;
            edit_method: string;
        });
    }
    class StrParameter extends ROSLIB.Message {
        name: string;
        value: string;
        constructor(values: {
            name: string;
            value: string;
        });
    }
    class ReconfigureRequest extends ROSLIB.ServiceRequest {
        config: Config;
        constructor(values: {
            config: Config;
        });
    }
    class ReconfigureResponse extends ROSLIB.ServiceRequest {
        config: Config;
        constructor(values: {
            config: Config;
        });
    }
}
declare module 'DynamicReconfigure' {
    export = DynamicReconfigure;
}
declare namespace GeometryMsgs {
    class Accel extends ROSLIB.Message {
        linear: GeometryMsgs.Vector3;
        angular: GeometryMsgs.Vector3;
        constructor(values: {
            linear: GeometryMsgs.Vector3;
            angular: GeometryMsgs.Vector3;
        });
    }
    class AccelStamped extends ROSLIB.Message {
        header: StdMsgs.Header;
        accel: GeometryMsgs.Accel;
        constructor(values: {
            header: StdMsgs.Header;
            accel: GeometryMsgs.Accel;
        });
    }
    class AccelWithCovariance extends ROSLIB.Message {
        accel: GeometryMsgs.Accel;
        covariance: number[];
        constructor(values: {
            accel: GeometryMsgs.Accel;
            covariance: number[];
        });
    }
    class AccelWithCovarianceStamped extends ROSLIB.Message {
        header: StdMsgs.Header;
        accel: AccelWithCovariance;
        constructor(values: {
            header: StdMsgs.Header;
            accel: AccelWithCovariance;
        });
    }
    class Inertia extends ROSLIB.Message {
        m: number;
        com: GeometryMsgs.Vector3;
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
        });
    }
    class InertiaStamped extends ROSLIB.Message {
        header: StdMsgs.Header;
        inertia: Inertia;
        constructor(values: {
            header: StdMsgs.Header;
            inertia: Inertia;
        });
    }
    class Point extends ROSLIB.Message {
        x: number;
        y: number;
        z: number;
        constructor(values: {
            x: number;
            y: number;
            z: number;
        });
    }
    class Point32 extends Point {
    }
    class PointStamped extends ROSLIB.Message {
        header: StdMsgs.Header;
        point: Point;
        constructor(values: {
            header: StdMsgs.Header;
            point: Point;
        });
    }
    class Polygon extends ROSLIB.Message {
        points: Point32[];
        constructor(values: {
            points: Point32[];
        });
    }
    class PolygonStamped extends ROSLIB.Message {
        header: StdMsgs.Header;
        polygon: Polygon;
        constructor(values: {
            header: StdMsgs.Header;
            polygon: Polygon;
        });
    }
    class Pose extends ROSLIB.Message {
        position: GeometryMsgs.Point;
        orientation: GeometryMsgs.Quaternion;
        constructor(values: {
            position: GeometryMsgs.Point;
            orientation: GeometryMsgs.Quaternion;
        });
    }
    class Pose2D extends ROSLIB.Message {
        x: number;
        y: number;
        theta: number;
        constructor(values: {
            x: number;
            y: number;
            theta: number;
        });
    }
    class PoseArray extends ROSLIB.Message {
        header: StdMsgs.Header;
        poses: Pose[];
        constructor(values: {
            header: StdMsgs.Header;
            poses: Pose[];
        });
    }
    class PoseStamped extends ROSLIB.Message {
        header: StdMsgs.Header;
        pose: GeometryMsgs.Pose;
        constructor(values: {
            header: StdMsgs.Header;
            pose: GeometryMsgs.Pose;
        });
    }
    class PoseWithCovariance extends ROSLIB.Message {
        pose: Pose;
        covariance: number[];
        constructor(values: {
            pose: Pose;
            covariance: number[];
        });
    }
    class PoseWithCovarianceStamped extends ROSLIB.Message {
        header: StdMsgs.Header;
        pose: PoseWithCovariance;
        constructor(values: {
            header: StdMsgs.Header;
            pose: PoseWithCovariance;
        });
    }
    class Quaternion extends ROSLIB.Message {
        x: number;
        y: number;
        z: number;
        w: number;
        constructor(values: {
            x: number;
            y: number;
            z: number;
            w: number;
        });
    }
    class QuaternionStamped extends ROSLIB.Message {
        header: StdMsgs.Header;
        quaternion: Quaternion;
        constructor(values: {
            header: StdMsgs.Header;
            quaternion: Quaternion;
        });
    }
    class Transform extends ROSLIB.Message {
        translation: Vector3;
        rotation: Quaternion;
        constructor(values: {
            translation: Vector3;
            rotation: Quaternion;
        });
    }
    class TransformStamped extends ROSLIB.Message {
        header: StdMsgs.Header;
        child_frame_id: string;
        transform: ROSLIB.Transform;
        constructor(values: {
            header: StdMsgs.Header;
            child_frame_id: string;
            transform: ROSLIB.Transform;
        });
    }
    class Twist extends ROSLIB.Message {
        linear: Vector3;
        angular: Vector3;
        constructor(values: {
            linear: Vector3;
            angular: Vector3;
        });
    }
    class TwistStamped extends ROSLIB.Message {
        header: StdMsgs.Header;
        twist: Twist;
        constructor(values: {
            header: StdMsgs.Header;
            twist: Twist;
        });
    }
    class TwistWithCovariance extends ROSLIB.Message {
        twist: Twist;
        covariance: number[];
        constructor(values: {
            twist: Twist;
            covariance: number[];
        });
    }
    class TwistWithCovarianceStamped extends ROSLIB.Message {
        header: StdMsgs.Header;
        twist: TwistWithCovariance;
        constructor(values: {
            header: StdMsgs.Header;
            twist: TwistWithCovariance;
        });
    }
    class Vector3 extends Point {
    }
    class Vector3Stamped extends ROSLIB.Message {
        header: StdMsgs.Header;
        vector: Vector3;
        constructor(values: {
            header: StdMsgs.Header;
            vector: Vector3;
        });
    }
    class Wrench extends ROSLIB.Message {
        force: Vector3;
        torque: Vector3;
        constructor(values: {
            force: Vector3;
            torque: Vector3;
        });
    }
    class WrenchStamped extends ROSLIB.Message {
        header: StdMsgs.Header;
        wrench: Wrench;
        constructor(values: {
            header: StdMsgs.Header;
            wrench: Wrench;
        });
    }
}
declare module 'GeometryMsgs' {
    export = GeometryMsgs;
}
declare namespace HANPMsgs {
    class HumanPath extends ROSLIB.Message {
        header: StdMsgs.Header;
        id: number;
        path: NavMsgs.Path;
        constructor(values: {
            header: StdMsgs.Header;
            id: number;
            path: NavMsgs.Path;
        });
    }
    class HumanPathArray extends ROSLIB.Message {
        header: StdMsgs.Header;
        paths: HANPMsgs.HumanPath[];
        constructor(values: {
            header: StdMsgs.Header;
            paths: HANPMsgs.HumanPath[];
        });
    }
    class HumanTrajectory extends ROSLIB.Message {
        header: StdMsgs.Header;
        id: number;
        trajectory: HANPMsgs.Trajectory;
        constructor(values: {
            header: StdMsgs.Header;
            id: number;
            trajectory: HANPMsgs.Trajectory;
        });
    }
    class HumanTrajectoryArray extends ROSLIB.Message {
        header: StdMsgs.Header;
        trajectories: HANPMsgs.HumanTrajectory[];
        constructor(values: {
            header: StdMsgs.Header;
            trajectories: HANPMsgs.HumanTrajectory[];
        });
    }
    class TrackedHuman extends ROSLIB.Message {
        track_id: number;
        segments: TrackedSegment[];
        constructor(values: {
            track_id: number;
            segments: TrackedSegment[];
        });
    }
    class TrackedHumans extends ROSLIB.Message {
        header: StdMsgs.Header;
        humans: TrackedHuman[];
        constructor(values: {
            header: StdMsgs.Header;
            humans: TrackedHuman[];
        });
    }
    class TrackedSegment extends ROSLIB.Message {
        type: TrackedSegmentType;
        pose: GeometryMsgs.PoseWithCovariance;
        twist: GeometryMsgs.TwistWithCovariance;
        accel: GeometryMsgs.AccelWithCovariance;
        constructor(values: {
            type: TrackedSegmentType;
            pose: GeometryMsgs.PoseWithCovariance;
            twist: GeometryMsgs.TwistWithCovariance;
            accel: GeometryMsgs.AccelWithCovariance;
        });
    }
    enum TrackedSegmentType {
    }
    const HEAD: TrackedSegmentType;
    const TORSO: TrackedSegmentType;
    const RIGHT_SHOULDER: TrackedSegmentType;
    const RIGHT_ELBOW: TrackedSegmentType;
    const RIGHT_WRIST: TrackedSegmentType;
    const RIGHT_HIP: TrackedSegmentType;
    const RIGHT_KNEE: TrackedSegmentType;
    const RIGHT_ANKLE: TrackedSegmentType;
    const LEFT_SHOULDER: TrackedSegmentType;
    const LEFT_ELBOW: TrackedSegmentType;
    const LEFT_WRIST: TrackedSegmentType;
    const LEFT_HIP: TrackedSegmentType;
    const LEFT_KNEE: TrackedSegmentType;
    const LEFT_ANKLE: TrackedSegmentType;
    class Trajectory extends ROSLIB.Message {
        header: StdMsgs.Header;
        points: HANPMsgs.TrajectoryPoint[];
        constructor(values: {
            header: StdMsgs.Header;
            points: HANPMsgs.TrajectoryPoint[];
        });
    }
    class TrajectoryArray extends ROSLIB.Message {
        header: StdMsgs.Header;
        trajectories: HANPMsgs.Trajectory[];
        constructor(values: {
            header: StdMsgs.Header;
            trajectories: HANPMsgs.Trajectory[];
        });
    }
    class TrajectoryPoint extends ROSLIB.Message {
        transform: GeometryMsgs.Transform;
        velocity: GeometryMsgs.Twist;
        acceleration: GeometryMsgs.Twist;
        time_from_start: {
            secs: number;
            nsecs: number;
        };
        constructor(values: {
            transform: GeometryMsgs.Transform;
            velocity: GeometryMsgs.Twist;
            acceleration: GeometryMsgs.Twist;
            time_from_start: {
                secs: number;
                nsecs: number;
            };
        });
    }
}
declare module 'HANPMsgs' {
    export = HANPMsgs;
}
declare namespace MoveBaseMsgs {
    class MoveBaseActionFeedback extends ROSLIB.Message {
        header: StdMsgs.Header;
        status: ActionLibMsgs.GoalStatus;
        feedback: MoveBaseFeedback;
        constructor(values: {
            header: StdMsgs.Header;
            status: ActionLibMsgs.GoalStatus;
            feedback: MoveBaseFeedback;
        });
    }
    class MoveBaseActionGoal extends ROSLIB.Message {
        header: StdMsgs.Header;
        goal_id: ActionLibMsgs.GoalID;
        goal: MoveBaseGoal;
        constructor(values: {
            header: StdMsgs.Header;
            goal_id: ActionLibMsgs.GoalID;
            goal: MoveBaseGoal;
        });
    }
    class MoveBaseAction extends ROSLIB.Message {
        action_goal: MoveBaseActionGoal;
        action_result: MoveBaseActionResult;
        action_feedback: MoveBaseActionFeedback;
        constructor(values: {
            action_goal: MoveBaseActionGoal;
            action_result: MoveBaseActionResult;
            action_feedback: MoveBaseActionFeedback;
        });
    }
    class MoveBaseActionResult extends ROSLIB.Message {
        header: StdMsgs.Header;
        status: ActionLibMsgs.GoalStatus;
        result: MoveBaseResult;
        constructor(values: {
            header: StdMsgs.Header;
            status: ActionLibMsgs.GoalStatus;
            result: MoveBaseResult;
        });
    }
    class MoveBaseFeedback extends ROSLIB.Message {
        base_position: GeometryMsgs.PoseStamped;
        constructor(values: {
            base_position: GeometryMsgs.PoseStamped;
        });
    }
    class MoveBaseGoal extends ROSLIB.Message {
        target_pose: GeometryMsgs.PoseStamped;
        constructor(values: {
            target_pose: GeometryMsgs.PoseStamped;
        });
    }
    class MoveBaseResult extends ROSLIB.Message {
    }
}
declare namespace NavMsgs {
    class GridCells extends ROSLIB.Message {
        header: StdMsgs.Header;
        cell_width: number;
        cell_height: number;
        cells: GeometryMsgs.Point[];
        constructor(values: {
            header: StdMsgs.Header;
            cell_width: number;
            cell_height: number;
            cells: GeometryMsgs.Point[];
        });
    }
    class MapMetaData extends ROSLIB.Message {
        map_load_time: {
            sec: number;
            nsec: number;
        };
        resolution: number;
        width: number;
        height: number;
        origin: GeometryMsgs.Pose;
        constructor(values: {
            map_load_time: {
                sec: number;
                nsec: number;
            };
            resolution: number;
            width: number;
            height: number;
            origin: GeometryMsgs.Pose;
        });
    }
    class OccupancyGrid extends ROSLIB.Message {
        header: StdMsgs.Header;
        info: MapMetaData;
        data: number[];
        constructor(values: {
            header: StdMsgs.Header;
            info: MapMetaData;
            data: number[];
        });
    }
    class Odometry extends ROSLIB.Message {
        header: StdMsgs.Header;
        child_frame_id: string;
        pose: GeometryMsgs.PoseWithCovariance;
        twist: GeometryMsgs.TwistWithCovariance;
        constructor(values: {
            header: StdMsgs.Header;
            child_frame_id: string;
            pose: GeometryMsgs.PoseWithCovariance;
            twist: GeometryMsgs.TwistWithCovariance;
        });
    }
    class Path extends ROSLIB.Message {
        header: StdMsgs.Header;
        poses: GeometryMsgs.PoseStamped[];
        constructor(values: {
            header: StdMsgs.Header;
            poses: GeometryMsgs.PoseStamped[];
        });
    }
    class GetMapRequest extends ROSLIB.ServiceRequest {
        constructor(values: {});
    }
    class GetMapResponse extends ROSLIB.ServiceResponse {
        map: NavMsgs.OccupancyGrid;
        constructor(values: {
            map: NavMsgs.OccupancyGrid;
        });
    }
    class GetPlanRequest extends ROSLIB.ServiceRequest {
        start: GeometryMsgs.PoseStamped;
        goal: GeometryMsgs.PoseStamped;
        tolerance: number;
        constructor(values: {
            start: GeometryMsgs.PoseStamped;
            goal: GeometryMsgs.PoseStamped;
            tolerance: number;
        });
    }
    class GetPlanResponse extends ROSLIB.ServiceResponse {
        plan: NavMsgs.Path;
        constructor(values: {
            plan: NavMsgs.Path;
        });
    }
    class SetMapRequest extends ROSLIB.ServiceRequest {
        map: NavMsgs.OccupancyGrid;
        initial_pose: GeometryMsgs.PoseWithCovarianceStamped;
        constructor(values: {
            map: NavMsgs.OccupancyGrid;
            initial_pose: GeometryMsgs.PoseWithCovarianceStamped;
        });
    }
    class SetMapResponse extends ROSLIB.ServiceResponse {
        success: boolean;
        constructor(values: {
            success: boolean;
        });
    }
}
declare module 'NavMsgs' {
    export = NavMsgs;
}
declare namespace StdMsgs {
    class Bool extends ROSLIB.Message {
        data: boolean;
        constructor(values: {
            data: boolean;
        });
    }
    class Byte extends ROSLIB.Message {
        data: number;
        constructor(values: {
            data: number;
        });
    }
    class ByteMultiArray extends ROSLIB.Message {
        layout: MultiArrayLayout;
        data: number[];
        constructor(values: {
            layout: MultiArrayLayout;
            data: number[];
        });
    }
    class Char extends Byte {
    }
    class ColorRGBA extends ROSLIB.Message {
        r: number;
        g: number;
        b: number;
        a: number;
        constructor(values: {
            r: number;
            g: number;
            b: number;
            a: number;
        });
    }
    class Duration extends ROSLIB.Message {
        data: {
            sec: number;
            nsec: number;
        };
        constructor(values: {
            data: {
                sec: number;
                nsec: number;
            };
        });
    }
    class Empty extends ROSLIB.Message {
        constructor(values: {});
    }
    class Float32 extends Byte {
    }
    class Float32MultiArray extends ByteMultiArray {
    }
    class Float64 extends Byte {
    }
    class Float64MultiArray extends ByteMultiArray {
    }
    class Header extends ROSLIB.Message {
        seq: number;
        stamp: {
            secs: number;
            nsecs: number;
        };
        frame_id: string;
        constructor(values: {
            seq: number;
            stamp: {
                secs: number;
                nsecs: number;
            };
            frame_id: string;
        });
    }
    class Int16 extends Byte {
    }
    class Int16MultiArray extends ByteMultiArray {
    }
    class Int32 extends Byte {
    }
    class Int32MultiArray extends ByteMultiArray {
    }
    class Int64 extends Byte {
    }
    class Int64MultiArray extends ByteMultiArray {
    }
    class Int8 extends Byte {
    }
    class Int8MultiArray extends ByteMultiArray {
    }
    class MultiArrayDimension extends ROSLIB.Message {
        label: string;
        size: number;
        stride: number;
        constructor(values: {
            label: string;
            size: number;
            stride: number;
        });
    }
    class MultiArrayLayout extends ROSLIB.Message {
        dim: MultiArrayDimension[];
        data_offset: number;
        constructor(values: {
            dim: MultiArrayDimension[];
            data_offset: number;
        });
    }
    class String extends ROSLIB.Message {
        data: string;
        constructor(values: {
            data: string;
        });
    }
    class Time extends ROSLIB.Message {
        data: {
            sec: number;
            nsec: number;
        };
        constructor(values: {
            data: {
                sec: number;
                nsec: number;
            };
        });
    }
    class UInt16 extends Byte {
    }
    class UInt16MultiArray extends ByteMultiArray {
    }
    class UInt32 extends Byte {
    }
    class UInt32MultiArray extends ByteMultiArray {
    }
    class UInt64 extends Byte {
    }
    class UInt64MultiArray extends ByteMultiArray {
    }
    class UInt8 extends Byte {
    }
    class UInt8MultiArray extends ByteMultiArray {
    }
}
declare module 'StdMsgs' {
    export = StdMsgs;
}
declare namespace StdSrvs {
    class EmptyRequest extends ROSLIB.ServiceRequest {
        constructor(values: {});
    }
    class EmptyResponse extends ROSLIB.ServiceResponse {
        constructor(values: {});
    }
    class SetBoolRequest extends ROSLIB.ServiceRequest {
        data: boolean;
        constructor(values: {
            data: boolean;
        });
    }
    class SetBoolResponse extends ROSLIB.ServiceResponse {
        success: boolean;
        message: string;
        constructor(values: {
            success: boolean;
            message: string;
        });
    }
    class TriggerRequest extends ROSLIB.ServiceRequest {
        constructor(values: {});
    }
    class TriggerResponse extends ROSLIB.ServiceResponse {
        success: boolean;
        message: string;
        constructor(values: {
            success: boolean;
            message: string;
        });
    }
}
declare module 'StdSrvs' {
    export = StdSrvs;
}
