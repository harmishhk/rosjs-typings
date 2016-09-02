namespace NavMsgs {
  export class GridCells extends ROSLIB.Message {
    // An array of cells in a 2D grid
    header: StdMsgs.Header;
    cell_width: number;
    cell_height: number;
    cells: GeometryMsgs.Point[];

    constructor(values: {
      header: StdMsgs.Header;
      cell_width: number;
      cell_height: number;
      cells: GeometryMsgs.Point[];
    }) { super(values) }
  }

  export class MapMetaData extends ROSLIB.Message {
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

    constructor(values: {
      map_load_time: { sec: number, nsec: number };
      resolution: number;
      width: number;
      height: number;
      origin: GeometryMsgs.Pose;
    }) { super(values) }
  }

  export class OccupancyGrid extends ROSLIB.Message {
    // This represents a 2-D grid map, in which each cell represents the probability of occupancy
    header: StdMsgs.Header;
    // MetaData for the map
    info: MapMetaData;
    // The map data, in row-major order, starting with (0,0)
    // Occupancy probabilities are in the range [0,100].  Unknown is -1
    data: number[];

    constructor(values: {
      header: StdMsgs.Header;
      info: MapMetaData;
      data: number[];
    }) { super(values) }
  }

  export class Odometry extends ROSLIB.Message {
    //This represents an estimate of a position and velocity in free space.
    //The pose in this message should be specified in the coordinate frame given by header.frame_id.
    //The twist in this message should be specified in the coordinate frame given by the child_frame_id
    header: StdMsgs.Header;
    child_frame_id: string;
    pose: GeometryMsgs.PoseWithCovariance;
    twist: GeometryMsgs.TwistWithCovariance;

    constructor(values: {
      header: StdMsgs.Header;
      child_frame_id: string;
      pose: GeometryMsgs.PoseWithCovariance;
      twist: GeometryMsgs.TwistWithCovariance;
    }) { super(values) }
  }

  export class Path extends ROSLIB.Message {
    // An array of poses that represents a Path for a robot to follow
    header: StdMsgs.Header;
    poses: GeometryMsgs.PoseStamped[];

    constructor(values: {
      header: StdMsgs.Header;
      poses: GeometryMsgs.PoseStamped[];
    }) { super(values) }
  }

  export class GetMapRequest extends ROSLIB.ServiceRequest {
    // Get the map as a nav_msgs/OccupancyGrid
    constructor(values: {}) { super(values) }
  }

  export class GetMapResponse extends ROSLIB.ServiceResponse {
    map: NavMsgs.OccupancyGrid;

    constructor(values: {
      map: NavMsgs.OccupancyGrid;
    }) { super(values) }
  }

  export class GetPlanRequest extends ROSLIB.ServiceRequest {
    //Get a plan from the current position to the goal Pose

    //The start pose for the plan
    start: GeometryMsgs.PoseStamped;

    // The final pose of the goal position
    goal: GeometryMsgs.PoseStamped;

    // If the goal is obstructed, how many meters the planner can
    // relax the constraint in x and y before failing.
    tolerance: number;

    constructor(values: {
      start: GeometryMsgs.PoseStamped;
      goal: GeometryMsgs.PoseStamped;
      tolerance: number;
    }) { super(values) }
  }

  export class GetPlanResponse extends ROSLIB.ServiceResponse {
    plan: NavMsgs.Path;

    constructor(values: {
      plan: NavMsgs.Path;
    }) { super(values) }
  }

  export class SetMapRequest extends ROSLIB.ServiceRequest {
    // Set a new map together with an initial pose
    map: NavMsgs.OccupancyGrid;
    initial_pose: GeometryMsgs.PoseWithCovarianceStamped;

    constructor(values: {
      map: NavMsgs.OccupancyGrid;
      initial_pose: GeometryMsgs.PoseWithCovarianceStamped;
    }) { super(values) }
  }

  export class SetMapResponse extends ROSLIB.ServiceResponse {
    success: boolean;

    constructor(values: {
      success: boolean;
    }) { super(values) }
  }
}

declare module 'NavMsgs' {
  export = NavMsgs;
}
