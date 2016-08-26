// Type definitions for roslib.js
// Project: http://wiki.ros.org/roslibjs
// Definitions by: Harmish Khambhaita <https://github.com/harmishhk>

declare namespace ROS3D {
  // Marker types
  export enum MarkerType { }
  export const MARKER_ARROW: MarkerType;
  export const MARKER_CUBE: MarkerType;
  export const MARKER_SPHERE: MarkerType;
  export const MARKER_CYLINDER: MarkerType;
  export const MARKER_LINE_STRIP: MarkerType;
  export const MARKER_LINE_LIST: MarkerType;
  export const MARKER_CUBE_LIST: MarkerType;
  export const MARKER_SPHERE_LIST: MarkerType;
  export const MARKER_POINTS: MarkerType;
  export const MARKER_TEXT_VIEW_FACING: MarkerType;
  export const MARKER_MESH_RESOURCE: MarkerType;
  export const MARKER_TRIANGLE_LIST: MarkerType;

  // Interactive marker feedback types
  export enum InteractiveMarkerFeedbackType { }
  export const INTERACTIVE_MARKER_KEEP_ALIVE: InteractiveMarkerFeedbackType;
  export const INTERACTIVE_MARKER_POSE_UPDATE: InteractiveMarkerFeedbackType;
  export const INTERACTIVE_MARKER_MENU_SELECT: InteractiveMarkerFeedbackType;
  export const INTERACTIVE_MARKER_BUTTON_CLICK: InteractiveMarkerFeedbackType;
  export const INTERACTIVE_MARKER_MOUSE_DOWN: InteractiveMarkerFeedbackType;
  export const INTERACTIVE_MARKER_MOUSE_UP: InteractiveMarkerFeedbackType;

  // Interactive marker control types
  export enum InteractiveMarkerControlType { }
  export const INTERACTIVE_MARKER_NONE: InteractiveMarkerControlType;
  export const INTERACTIVE_MARKER_MENU: InteractiveMarkerControlType;
  export const INTERACTIVE_MARKER_BUTTON: InteractiveMarkerControlType;
  export const INTERACTIVE_MARKER_MOVE_AXIS: InteractiveMarkerControlType;
  export const INTERACTIVE_MARKER_MOVE_PLANE: InteractiveMarkerControlType;
  export const INTERACTIVE_MARKER_ROTATE_AXIS: InteractiveMarkerControlType;
  export const INTERACTIVE_MARKER_MOVE_ROTATE: InteractiveMarkerControlType;

  // Interactive marker rotation behavior
  export enum InteractiveMarkerRotationBehavior { }
  export const INTERACTIVE_MARKER_INHERIT: InteractiveMarkerRotationBehavior;
  export const INTERACTIVE_MARKER_FIXED: InteractiveMarkerRotationBehavior;
  export const INTERACTIVE_MARKER_VIEW_FACING: InteractiveMarkerRotationBehavior;

  // Collada loader types
  export enum ColladaLoaderType { }
  export const COLLADA_LOADER: ColladaLoaderType;
  export const COLLADA_LOADER_2: ColladaLoaderType;

  export class Arrow {
    /**
     * A Arrow is a THREE object that can be used to display an arrow model.
     *
     * @constructor
     * @param options - object with following keys:
     *   * origin (optional) - the origin of the arrow
     *   * direction (optional) - the direction vector of the arrow
     *   * length (optional) - the length of the arrow
     *   * headLength (optional) - the head length of the arrow
     *   * shaftDiameter (optional) - the shaft diameter of the arrow
     *   * headDiameter (optional) - the head diameter of the arrow
     *   * material (optional) - the material to use for this arrow
     */
    constructor(options: {
      origin?: THREE.Vector3,
      direction?: THREE.Vector3,
      length?: number,
      headLength?: number,
      shaftDiameter?: number,
      headDiameter?: number,
      material?: THREE.Material
    });

    /**
     * Set the color of this arrow to the given hex value.
     *
     * @param hex - the hex value of the color to use
     */
    setColor(hex: string): void;

    /**
     * Set the direction of this arrow to that of the given vector.
     *
     * @param direction - the direction to set this arrow
     */
    setDirection(direction: THREE.Vector3): void;

    /**
     * Set this arrow to be the given length.
     *
     * @param length - the new length of the arrow
     */
    setLength(length: number): void;
  }

  export class Axes {
    /**
     * An Axes object can be used to display the axis of a particular coordinate frame.
     *
     * @constructor
     * @param options - object with following keys:
     *   * shaftRadius (optional) - the radius of the shaft to render
     *   * headRadius (optional) - the radius of the head to render
     *   * headLength (optional) - the length of the head to render
     */
    constructor(options: {
      shaftRadius?: number,
      headRadius?: number,
      headLength?: number
    });
  }

  export class DepthCloud {
    /**
     * The DepthCloud object.
     *
     * @constructor
     * @param options - object with following keys:
     *   * url - the URL of the stream
     *   * streamType (optional) - the stream type: mjpeg or vp8 video (defaults to vp8)
     *   * f (optional) - the camera's focal length (defaults to standard Kinect calibration)
     *   * pointSize (optional) - point size (pixels) for rendered point cloud
     *   * width (optional) - width of the video stream
     *   * height (optional) - height of the video stream
     *   * whiteness (optional) - blends rgb values to white (0..100)
     *   * varianceThreshold (optional) - threshold for variance filter, used for compression artifact removal
     */
    constructor(options: {
      url: string,
      streamType?: string,
      f?: number,
      pointSize?: number,
      width?: number,
      height?: number,
      whiteness?: number,
      varianceThreshold?: number
    });

    /**
     * Callback called when video metadata is ready
     */
    initStreamer(): void;

    /**
     * Callback called when video metadata is ready
     */
    metaLoaded(): void;

    /**
     * Start video playback
     */
    startStream(): void;

    /**
     * Stop video playback
     */
    stopStream(): void;
  }

  export class Grid extends THREE.Object3D {
    /**
     * Create a grid object.
     *
     * @constructor
     * @param options - object with following keys:
     *  * num_cells (optional) - The number of cells of the grid
     *  * color (optional) - the line color of the grid, like '#cccccc'
     *  * lineWidth (optional) - the width of the lines in the grid
     *  * cellSize (optional) - The length, in meters, of the side of each cell
     */
    constructor(options?: {
      num_cells?: number,
      color?: THREE.Color,
      lineWidth?: number,
      cellSize?: number
    });
  }

  export class Highlighter {
    /**
     * A mouseover highlighter for 3D objects in the scene.
     *
     * @constructor
     * @param options - object with following keys:
     *
     *   * mouseHandler - the handler for the mouseover and mouseout events
     */
    constructor(options: {
      mouseHandler: MouseHandler
    });

    /**
     * Add all corresponding webgl objects in the given scene and add them to the given render list.
     *
     * @param scene - the scene to check for webgl objects
     * @param objects - the objects list to check
     * @param renderList - the list to add to
     */
    getWebglObjects(scene: THREE.Scene, objects: any, renderList: any): void;

    /**
     * Add the current target of the mouseover to the hover list.
     *
     * @param event - the event that contains the target of the mouseover
     */
    onMouseOver(event: THREE.Event): void;

    /**
     * Remove the current target of the mouseover from the hover list.
     *
     * @param event - the event that contains the target of the mouseout
     */
    onMouseOut(event: THREE.Event): void;

    /**
     * Render highlighted objects in the scene.
     *
     * @param renderer - the renderer to use
     * @param scene - the scene to use
     * @param camera - the camera to use
     */
    renderHighlight(renderer: THREE.Renderer, scene: THREE.Scene, camera: THREE.Camera): void;
  }

  export class InteractiveMarker {
    /**
     * The main interactive marker object.
     *
     * @constructor
     * @param options - object with following keys:
     *
     *  * handle - the ROS3D.InteractiveMarkerHandle for this marker
     *  * camera - the main camera associated with the viewer for this marker
     *  * path (optional) - the base path to any meshes that will be loaded
     *  * loader (optional) - the Collada loader to use (e.g., an instance of ROS3D.COLLADA_LOADER
     *                        ROS3D.COLLADA_LOADER_2) -- defaults to ROS3D.COLLADA_LOADER_2
     */
    constructor(options: {
      handle: ROS3D.InteractiveMarkerHandle,
      camera: THREE.Camera,
      path?: string,
      loader?: ColladaLoaderType
    });

    /**
     * Handle a button click.
     *
     * @param control - the control to use
     * @param event3d - the event that caused this
     */
    buttonClick(control: InteractiveMarkerControl, event3d: event3D): void;

    /**
     * Free memory of elements in this marker.
     */
    dispose(): void;

    /**
     * Dispatch the given event type.
     *
     * @param type - the type of event
     * @param control - the control to use
     */
    feedbackEvent(type: string, control: InteractiveMarkerControl): void;

    /**
     * Move the axis based on the given event information.
     *
     * @param control - the control to use
     * @param origAxis - the origin of the axis
     * @param event3d - the event that caused this
     */
    moveAxis(control: InteractiveMarkerControl, origAxis: any, event3d: event3D): void;

    /**
     * Move with respect to the plane based on the contorl and event.
     *
     * @param control - the control to use
     * @param origNormal - the normal of the origin
     * @param event3d - the event that caused this
     */
    movePlane(control: InteractiveMarkerControl, origNormal: any, event3d: event3D): void;

    /**
     * Update the marker based when the pose is set from the server.
     *
     * @param event - the event that caused this
     */
    onServerSetPose(event: THREE.Event): void;

    /**
     * Rotate based on the control and event given.
     *
     * @param control - the control to use
     * @param origOrientation - the orientation of the origin
     * @param event3d - the event that caused this
     */
    rotateAxis(control: InteractiveMarkerControl, origOrientation: any, event3d: event3D): void;

    /**
     * Handle a user pose change for the orientation.
     *
     * @param control - the control to use
     * @param orientation
     */
    setOrientation(control: InteractiveMarkerControl, orientation: any): void;

    /**
     * Handle a user pose change for the position.
     *
     * @param control - the control to use
     * @param position
     */
    setPosition(control: InteractiveMarkerControl, position: any): void;

    /**
     * Show the interactive marker menu associated with this marker.
     *
     * @param control - the control to use
     * @param event - the event that caused this
     */
    showMenu(control: InteractiveMarkerControl, event: THREE.Event): void;

    /**
     * Start a drag action.
     *
     * @param control - the control to use
     * @param event3d - the event that caused this
     */
    startDrag(control: InteractiveMarkerControl, event3d: event3D): void;

    /**
     * Stop a drag action.
     *
     * @param control - the control to use
     * @param event3d - the event that caused this
     */
    stopDrag(control: InteractiveMarkerControl, event3d: event3D): void;
  }

  export class InteractiveMarkerClient {
    /**
     * A client for an interactive marker topic.
     *
     * @constructor
     * @param options - object with following keys:
     *
     *  * ros - a handle to the ROS connection
     *  * tfClient - a handle to the TF client
     *  * topic (optional) - the topic to subscribe to, like '/basic_controls'
     *  * path (optional) - the base path to any meshes that will be loaded
     *  * camera - the main camera associated with the viewer for this marker client
     *  * rootObject (optional) - the root THREE 3D object to render to
     *  * loader (optional) - the Collada loader to use (e.g., an instance of ROS3D.COLLADA_LOADER
     *                        ROS3D.COLLADA_LOADER_2) -- defaults to ROS3D.COLLADA_LOADER_2
     *  * menuFontSize (optional) - the menu font size
     */
    constructor(options: {
      ros: ROSLIB.Ros,
      tfClient: ROSLIB.TFClient,
      topic?: string,
      path?: string,
      camera: THREE.Camera,
      rootObject?: THREE.Object3D,
      loader?: ColladaLoaderType,
      menuFontSize?: number
    });

    /**
     * Erase the interactive marker with the given name.
     *
     * @param intMarkerName - the interactive marker name to delete
     */
    eraseIntMarker(intMarkerName: string): void;

    /**
     * Process the given interactive marker initialization message.
     *
     * @param initMessage - the interactive marker initialization message to process
     */
    processInit(initMessage: ROSLIB.Message): void;


    /**
     * Process the given interactive marker update message.
     *
     * @param message - the interactive marker update message to process
     */
    processUpdate(message: ROSLIB.Message): void;

    /**
     * Subscribe to the given interactive marker topic. This will unsubscribe from any current topics.
     *
     * @param topic - the topic to subscribe to, like '/basic_controls'
     */
    subscribe(topic: string): void;

    /**
     * Unsubscribe from the current interactive marker topic.
     */
    unsubscribe(): void;
  }

  export class InteractiveMarkerControl {
    /**
     * The main marker control object for an interactive marker.
     *
     * @constructor
     * @param options - object with following keys:
     *
     *  * parent - the parent of this control
     *  * message - the interactive marker control message
     *  * camera - the main camera associated with the viewer for this marker client
     *  * path (optional) - the base path to any meshes that will be loaded
     *  * loader (optional) - the Collada loader to use (e.g., an instance of ROS3D.COLLADA_LOADER
     *                        ROS3D.COLLADA_LOADER_2) -- defaults to ROS3D.COLLADA_LOADER_2
     */
    constructor(options: {
      parent: any,
      message: ROSLIB.Message,
      camera: THREE.Camera,
      path?: string,
      loader?: ColladaLoaderType
    });
  }

  export class InteractiveMarkerHandle {
    /**
     * Handle with signals for a single interactive marker.
     *
     * Emits the following events:
     *
     *  * 'pose' - emitted when a new pose comes from the server
     *
     * @constructor
     * @param options - object with following keys:
     *
     *  * message - the interactive marker message
     *  * feedbackTopic - the ROSLIB.Topic associated with the feedback
     *  * tfClient - a handle to the TF client to use
     *  * menuFontSize (optional) - the menu font size
     */
    constructor(options: {
      message: ROSLIB.Message,
      feedbackTopic: ROSLIB.Topic,
      tfClient: ROSLIB.TFClient,
      menuFontSize?: number
    });

    /**
     * Emit the new pose that has come from the server.
     */
    emitServerPoseUpdate(): void;

    /**
     * Send the button click feedback to the server.
     *
     * @param event - the event associated with the button click
     */
    onButtonClick(event: THREE.Event): void;

    /**
     * Send the menu select feedback to the server.
     *
     * @param event - the event associated with the menu select
     */
    onMenuSelect(event: THREE.Event): void;

    /**
     * Send the mousedown feedback to the server.
     *
     * @param event - the event associated with the mousedown
     */
    onMouseDown(event: THREE.Event): void;

    /**
     * Send the mouseup feedback to the server.
     *
     * @param event - the event associated with the mouseup
     */
    onMouseUp(event: THREE.Event): void;

    /**
     * Send feedback to the interactive marker server.
     *
     * @param eventType - the type of event that happened
     * @param clickPosition (optional) - the position in ROS space the click happened
     * @param menuEntryID (optional) - the menu entry ID that is associated
     * @param controlName - the name of the control
     */
    sendFeedback(eventType: string, clickPosition?: any, menuEntryID?: any, controlName?: string): void;

    /**
     * Set the pose from the client based on the given event.
     *
     * @param event - the event to base the change off of
     */
    setPoseFromClient(event: THREE.Event): void;

    /**
     * Update the pose based on the pose given by the server.
     *
     * @param poseMsg - the pose given by the server
     */
    setPoseFromServer(poseMsg: any): void;

    /**
     * Subscribe to the TF associated with this interactive marker.
     */
    subscribeTf(): void;

    unsubscribeTf(): void;

    /**
     * Update the pose based on the TF given by the server.
     *
     * @param transformMsg - the TF given by the server
     */
    tfUpdate(transformMsg: ROSLIB.Message): void;
  }

  export class InteractiveMarkerMenu {
    /**
     * A menu for an interactive marker. This will be overlayed on the canvas.
     *
     * @constructor
     * @param options - object with following keys:
     *
     *  * menuEntries - the menu entries to add
     *  * className (optional) - a custom CSS class for the menu div
     *  * entryClassName (optional) - a custom CSS class for the menu entry
     *  * overlayClassName (optional) - a custom CSS class for the menu overlay
     *  * menuFontSize (optional) - the menu font size
     */
    constructor(options: {
      menuEntries: any[],
      className?: string,
      entryClassName?: string,
      overlayClassName?: string,
      menuFontSize?: number
    });

    /**
     * Shoe the menu DOM element.
     *
     * @param control - the control for the menu
     * @param event - the event that caused this
     */
    show(control: InteractiveMarkerControl, event: THREE.Event): void;


    /**
     * Hide the menu DOM element.
     *
     * @param event (optional) - the event that caused this
     */
    hide(event?: THREE.Event): void;
  }

  export class LaserScan {
    /**
     * A LaserScan client that listens to a given topic and displays the points.
     *
     * @constructor
     * @param options - object with following keys:
     *  * ros - the ROSLIB.Ros connection handle
     *  * topic - the marker topic to listen to
     *  * tfClient - the TF client handle to use
     *  * color - (optional) color of the points (default 0xFFA500)
     *  * texture - (optional) Image url for a texture to use for the points. Defaults to a single white pixel.
     *  * rootObject (optional) - the root object to add this marker to
     *  * size (optional) - size to draw each point (default 0.05)
     *  * max_pts (optional) - number of points to draw (default 100)
     */
    constructor(options: {
      ros: ROSLIB.Ros,
      topic: string,
      tfClient: ROSLIB.TFClient,
      color?: THREE.Color,
      texture?: string,
      rootObject?: THREE.Object3D,
      size?: number,
      max_pts?: number
    });
  }

  export class Marker {
    /**
     * A Marker can convert a ROS marker message into a THREE object.
     *
     * @constructor
     * @param options - object with following keys:
     *   * path - the base path or URL for any mesh files that will be loaded for this marker
     *   * message - the marker message
     *   * loader (optional) - the Collada loader to use (e.g., an instance of ROS3D.COLLADA_LOADER
     *                         ROS3D.COLLADA_LOADER_2) -- defaults to ROS3D.COLLADA_LOADER_2
     */
    constructor(options: {
      path: string,
      message: ROSLIB.Message,
      loader?: ColladaLoaderType
    });

    /*
    * Free memory of elements in this marker.
    */
    dispose(): void;

    /**
     * Set the pose of this marker to the given values.
     *
     * @param pose - the pose to set for this marker
     */
    setPose(pose: ROSLIB.Pose): void;

    /**
     * Update this marker.
     *
     * @param message - the marker message
     * @return true on success otherwhise false is returned
     */
    update(message: ROSLIB.Message): boolean;
  }

  export class MarkerArrayClient {
    /**
     * A MarkerArray client that listens to a given topic.
     *
     * Emits the following events:
     *
     *  * 'change' - there was an update or change in the MarkerArray
     *
     * @constructor
     * @param options - object with following keys:
     *   * ros - the ROSLIB.Ros connection handle
     *   * topic - the marker topic to listen to
     *   * tfClient - the TF client handle to use
     *   * rootObject (optional) - the root object to add the markers to
     *   * path (optional) - the base path to any meshes that will be loaded
     *   * loader (optional) - the Collada loader to use (e.g., an instance of ROS3D.COLLADA_LOADER
     *                         ROS3D.COLLADA_LOADER_2) -- defaults to ROS3D.COLLADA_LOADER_2
     */
    constructor(options: {
      ros: ROSLIB.Ros,
      topic: string,
      tfClient: ROSLIB.TFClient,
      rootObject?: THREE.Object3D,
      path?: string,
      loader?: ColladaLoaderType
    });
  }

  export class MarkerClient {
    /**
     * A marker client that listens to a given marker topic.
     *
     * Emits the following events:
     *
     *  * 'change' - there was an update or change in the marker
     *
     * @constructor
     * @param options - object with following keys:
     *
     *   * ros - the ROSLIB.Ros connection handle
     *   * topic - the marker topic to listen to
     *   * tfClient - the TF client handle to use
     *   * rootObject (optional) - the root object to add this marker to
     *   * path (optional) - the base path to any meshes that will be loaded
     *   * loader (optional) - the Collada loader to use (e.g., an instance of ROS3D.COLLADA_LOADER
     *                         ROS3D.COLLADA_LOADER_2) -- defaults to ROS3D.COLLADA_LOADER_2
     */
    constructor(options: {
      ros: ROSLIB.Ros,
      topic: string,
      tfClient: ROSLIB.TFClient,
      rootObject?: THREE.Object3D,
      path?: string,
      loader?: ColladaLoaderType
    });
  }

  export class MeshResource {
    /**
     * A MeshResource is an THREE object that will load from a external mesh file. Currently loads
     * Collada files.
     *
     * @constructor
     * @param options - object with following keys:
     *
     *  * path (optional) - the base path to the associated models that will be loaded
     *  * resource - the resource file name to load
     *  * material (optional) - the material to use for the object
     *  * warnings (optional) - if warnings should be printed
     *  * loader (optional) - the Collada loader to use (e.g., an instance of ROS3D.COLLADA_LOADER
     *                        ROS3D.COLLADA_LOADER_2) -- defaults to ROS3D.COLLADA_LOADER_2
     */
    constructor(options: {
      path?: string,
      resource: string,
      material?: THREE.Material,
      warnings?: boolean,
      loader?: ColladaLoaderType
    });
  }

  export class MouseHandler {
    /**
     * A handler for mouse events within a 3D viewer.
     *
     * @constructor
     * @param options - object with following keys:
     *
     *   * renderer - the main renderer
     *   * camera - the main camera in the scene
     *   * rootObject - the root object to check for mouse events
     *   * fallbackTarget - the fallback target, e.g., the camera controls
     */
    constructor(options: {
      renderer: THREE.Renderer,
      camera: THREE.Camera,
      rootObject: THREE.Object3D,
      fallbackTarget: any
    });

    /**
     * Notify the listener of the type of event that occurred.
     *
     * @param target - the target of the event
     * @param type - the type of event that occurred
     * @param event3D - the 3D mouse event information
     * @returns if an event was canceled
     */
    notify(target: any, type: any, event3D: event3D): boolean;

    /**
     * Process the particular DOM even that has occurred based on the mouse's position in the scene.
     *
     * @param domEvent - the DOM event to process
     */
    processDomEvent(domEvent: any): void;
  }

  export class OccupancyGrid extends THREE.Mesh {
    /**
     * An OccupancyGrid can convert a ROS occupancy grid message into a THREE object.
     *
     * @constructor
     * @param options - object with following keys:
     *
     *   * message - the occupancy grid message
     *   * color (optional) - color of the visualized grid
     *   * opacity (optional) - opacity of the visualized grid (0.0 == fully transparent, 1.0 == opaque)
     */
    constructor(options: {
      message: ROSLIB.Message,
      color?: THREE.Color,
      opacity?: number
    });
  }

  export class OccupancyGridClient {
    /**
     * An occupancy grid client that listens to a given map topic.
     *
     * Emits the following events:
     *  * 'change' - there was an update or change in the marker
     *
     * @constructor
     * @param options - possible keys include:
     *   * ros - the ROSLIB.Ros connection handle
     *   * topic (optional) - the map topic to listen to
     *   * continuous (optional) - if the map should be continuously loaded (e.g., for SLAM)
     *   * tfClient (optional) - the TF client handle to use for a scene node
     *   * rootObject (optional) - the root object to add this marker to
     *   * offsetPose (optional) - offset pose of the grid visualization, e.g. for z-offset (ROSLIB.Pose type)
     *   * color (optional) - color of the visualized grid
     *   * opacity (optional) - opacity of the visualized grid (0.0 == fully transparent, 1.0 == opaque)
     */
    constructor(options: {
      ros: ROSLIB.Ros,
      topic?: string,
      continuous?: boolean,
      tfClient?: ROSLIB.TFClient,
      rootObject?: THREE.Object3D,
      offsetPose?: ROSLIB.Pose,
      color?: THREE.Color,
      opacity?: number
    });

    currentGrid: ROS3D.OccupancyGrid;
  }

  export class Odometry {
    /**
     * An Odometry client
     *
     * @constructor
     * @param options - object with following keys:
     *
     *  * ros - the ROSLIB.Ros connection handle
     *  * topic - the marker topic to listen to
     *  * tfClient - the TF client handle to use
     *  * rootObject (optional) - the root object to add this marker to
     *  * keep (optional) - number of markers to keep around (default: 1)
     *  * color (optional) - color for line (default: 0xcc00ff)
     *  * length (optional) - the length of the arrow (default: 1.0)
     *  * headLength (optional) - the head length of the arrow (default: 0.2)
     *  * shaftDiameter (optional) - the shaft diameter of the arrow (default: 0.05)
     *  * headDiameter (optional) - the head diameter of the arrow (default: 0.1)
     */
    constructor(options: {
      ros: ROSLIB.Ros,
      topic: string,
      tfClient: ROSLIB.TFClient,
      rootObject?: THREE.Object3D,
      keep?: number,
      color?: THREE.Color,
      length?: number,
      headLength?: number,
      shaftDiameter?: number,
      headDiameter?: number
    });
  }

  export class OrbitControls {
    /**
     * Behaves like THREE.OrbitControls, but uses right-handed coordinates and z as up vector.
     *
     * @constructor
     * @param options - object with following keys:
     *  * scene - the global scene to use
     *  * camera - the camera to use
     *  * userZoomSpeed (optional) - the speed for zooming
     *  * userRotateSpeed (optional) - the speed for rotating
     *  * autoRotate (optional) - if the orbit should auto rotate
     *  * autoRotateSpeed (optional) - the speed for auto rotating
     */
    constructor(options: {
      scene: THREE.Scene,
      camera: THREE.Camera,
      userZoomSpeed?: number,
      userRotateSpeed?: number,
      autoRotate?: boolean,
      autoRotateSpeed?: number
    });

    /**
     * Rotate the camera down by the given angle.
     *
     * @param angle (optional) - the angle to rotate by
     */
    rotateDown(angle?: number): void;

    /**
     * Rotate the camera to the left by the given angle.
     *
     * @param angle (optional) - the angle to rotate by
     */
    rotateLeft(angle: number): void;

    /**
     * Rotate the camera to the right by the given angle.
     *
     * @param angle (optional) - the angle to rotate by
     */
    rotateRight(angle: number): void;

    /**
     * Rotate the camera up by the given angle.
     *
     * @param angle (optional) - the angle to rotate by
     */
    rotateUp(angle: number): void;

    /**
     * Display the main axes for 1 second.
     */
    showAxes(): void;

    /**
     * Update the camera to the current settings.
     */
    update(): void;

    /**
     * Zoom in by the given scale.
     *
     * @param zoomScale (optional) - the scale to zoom in by
     */
    zoomIn(zoomScale: number): void;

    /**
     * Zoom out by the given scale.
     *
     * @param zoomScale (optional) - the scale to zoom in by
     */
    zoomOut(zoomScale: number): void;
  }

  export class Path extends THREE.Object3D {
    /**
     * A Path client that listens to a given topic and displays a line connecting the poses.
     *
     * @constructor
     * @param options - object with following keys:
     *  * ros - the ROSLIB.Ros connection handle
     *  * topic - the marker topic to listen to
     *  * tfClient - the TF client handle to use
     *  * rootObject (optional) - the root object to add this marker to
     *  * color (optional) - color for line (default: 0xcc00ff)
     */
    constructor(options: {
      ros: ROSLIB.Ros,
      topic: string,
      tfClient: ROSLIB.TFClient,
      rootObject?: THREE.Object3D,
      color?: THREE.Color
    });
  }

  export class Particles {
    /**
     * A set of particles. Used by PointCloud2.
     *
     * @constructor
     * @param options - object with following keys:
     *
     *  * tfClient - the TF client handle to use
     *  * texture - (optional) Image url for a texture to use for the points. Defaults to a single white pixel.
     *  * rootObject (optional) - the root object to add this marker to
     *  * size (optional) - size to draw each point (default 0.05)
     *  * max_pts (optional) - number of points to draw (default 10000)
     */
    constructor(options: {
      tfClient: ROSLIB.TFClient,
      texture?: string,
      rootObject?: THREE.Object3D,
      size?: number,
      max_pts?: number
    });

    setFrame(particles: Particles, frame: string): void;

    finishedUpdate(particles: Particles, n: number): void;
  }

  export class Point {
    /**
     * A PointStamped client
     *
     * @constructor
     * @param options - object with following keys:
     *  * ros - the ROSLIB.Ros connection handle
     *  * topic - the marker topic to listen to
     *  * tfClient - the TF client handle to use
     *  * rootObject (optional) - the root object to add this marker to
     *  * color (optional) - color for line (default: 0xcc00ff)
     *  * radius (optional) - radius of the point (default: 0.2)
     */
    constructor(options: {
      ros: ROSLIB.Ros,
      topic: string,
      tfClient: ROSLIB.TFClient,
      rootObject?: THREE.Object3D,
      color?: THREE.Color,
      radius?: number
    });
  }

  export class PointCloud2 {
    /**
     * A PointCloud2 client that listens to a given topic and displays the points.
     *
     * @constructor
     * @param options - object with following keys:
     *  * ros - the ROSLIB.Ros connection handle
     *  * topic - the marker topic to listen to
     *  * tfClient - the TF client handle to use
     *  * texture - (optional) Image url for a texture to use for the points. Defaults to a single white pixel.
     *  * rootObject (optional) - the root object to add this marker to
     *  * size (optional) - size to draw each point (default 0.05)
     *  * max_pts (optional) - number of points to draw (default 100)
     */
    constructor(options: {
      ros: ROSLIB.Ros,
      topic: string,
      tfClient: ROSLIB.TFClient,
      texture?: string,
      rootObject?: THREE.Object3D,
      size?: number,
      max_pts?: number
    });

    decode64(x: any[]): any[];

    read_point(msg: any, index: number, data_view: any): any[];
  }

  export class Polygon {
    /**
     * A PolygonStamped client that listens to a given topic and displays the polygon
     *
     * @constructor
     * @param options - object with following keys:
     *  * ros - the ROSLIB.Ros connection handle
     *  * topic - the marker topic to listen to
     *  * tfClient - the TF client handle to use
     *  * rootObject (optional) - the root object to add this marker to
     *  * color (optional) - color for line (default: 0xcc00ff)
     */
    constructor(options: {
      ros: ROSLIB.Ros,
      topic: string,
      tfClient: ROSLIB.TFClient,
      rootObject?: THREE.Object3D,
      color?: THREE.Color
    });
  }

  export class Pose {
    /**
     * A PoseStamped client
     *
     * @constructor
     * @param options - object with following keys:
     *  * ros - the ROSLIB.Ros connection handle
     *  * topic - the marker topic to listen to
     *  * tfClient - the TF client handle to use
     *  * rootObject (optional) - the root object to add this marker to
     *  * color (optional) - color for line (default: 0xcc00ff)
     *  * length (optional) - the length of the arrow (default: 1.0)
     *  * headLength (optional) - the head length of the arrow (default: 0.2)
     *  * shaftDiameter (optional) - the shaft diameter of the arrow (default: 0.05)
     *  * headDiameter (optional) - the head diameter of the arrow (default: 0.1)
     */
    constructor(options: {
      ros: ROSLIB.Ros,
      topic: string,
      tfClient: ROSLIB.TFClient,
      rootObject?: THREE.Object3D,
      color?: THREE.Color,
      length?: number,
      headLength?: number,
      shaftDiameter?: number,
      headDiameter?: number
    });
  }

  export class PoseArray {
    /**
     * A PoseArray client
     * @constructor
     * @param options - object with following keys:
     *
     *  * ros - the ROSLIB.Ros connection handle
     *  * topic - the marker topic to listen to
     *  * tfClient - the TF client handle to use
     *  * rootObject (optional) - the root object to add this marker to
     *  * color (optional) - color for line (default: 0xcc00ff)
     *  * length (optional) - the length of the arrow (default: 1.0)
     */
    constructor(options: {
      ros: ROSLIB.Ros,
      topic: string,
      tfClient: ROSLIB.TFClient,
      rootObject?: THREE.Object3D,
      color?: THREE.Color,
      length?: number
    });
  }

  export class SceneNode extends THREE.Object3D {
    /**
     * A SceneNode can be used to keep track of a 3D object with respect to a ROS frame within a scene.
     *
     * @constructor
     * @param options - object with following keys:
     *  * tfClient - a handle to the TF client
     *  * frameID - the frame ID this object belongs to
     *  * pose (optional) - the pose associated with this object
     *  * object - the THREE 3D object to be rendered
     */
    constructor(options: {
      tfClient: ROSLIB.TFClient,
      frameID: string,
      pose?: ROSLIB.Pose,
      object: THREE.Object3D
    });

    // getter
    protected tfClient: ROSLIB.TFClient;
    protected frameID: string;
    protected object: THREE.Object3D;

    /**
     * Set the pose of the associated model.
     *
     * @param pose - the pose to update with
     */
    updatePose(pose: ROSLIB.Pose): void;

    unsubscribeTf(): void;

    protected tfUpdate: (msg: ROSLIB.Transform) => void;
  }

  export class TriangleList {
    /**
     * A TriangleList is a THREE object that can be used to display a list of triangles as a geometry.
     *
     * @constructor
     * @param options - object with following keys:
     *
     *   * material (optional) - the material to use for the object
     *   * vertices - the array of vertices to use
     *   * colors - the associated array of colors to use
     */
    constructor(options: {
      material?: THREE.Material,
      vertices: THREE.Vector3[],
      colors: THREE.Color[]
    });

    /**
     * Set the color of this object to the given hex value.
     *
     * @param hex - the hex value of the color to set
     */
    setColor(hex: string): void;
  }

  export class Urdf {
    /**
     * A URDF can be used to load a ROSLIB.UrdfModel and its associated models into a 3D object.
     *
     * @constructor
     * @param options - object with following keys:
     *
     *   * urdfModel - the ROSLIB.UrdfModel to load
     *   * tfClient - the TF client handle to use
     *   * path (optional) - the base path to the associated Collada models that will be loaded
     *   * tfPrefix (optional) - the TF prefix to used for multi-robots
     *   * loader (optional) - the Collada loader to use (e.g., an instance of ROS3D.COLLADA_LOADER
     *                         ROS3D.COLLADA_LOADER_2) -- defaults to ROS3D.COLLADA_LOADER_2
     */
    constructor(options: {
      urdfModel: ROSLIB.UrdfModel,
      tfClient: ROSLIB.TFClient,
      path?: string,
      tfPrefix?: string,
      loader?: ColladaLoaderType
    });
  }

  export class UrdfClient {
    /**
     * A URDF client can be used to load a URDF and its associated models into a 3D object from the ROS
     * parameter server.
     *
     * Emits the following events:
     *
     * * 'change' - emited after the URDF and its meshes have been loaded into the root object
     *
     * @constructor
     * @param options - object with following keys:
     *   * ros - the ROSLIB.Ros connection handle
     *   * param (optional) - the paramter to load the URDF from, like 'robot_description'
     *   * tfClient - the TF client handle to use
     *   * path (optional) - the base path to the associated Collada models that will be loaded
     *   * rootObject (optional) - the root object to add this marker to
     *   * tfPrefix (optional) - the TF prefix to used for multi-robots
     *   * loader (optional) - the Collada loader to use (e.g., an instance of ROS3D.COLLADA_LOADER
     *                         ROS3D.COLLADA_LOADER_2) -- defaults to ROS3D.COLLADA_LOADER_2
     */
    constructor(options: {
      ros: ROSLIB.Ros,
      param?: string,
      tfClient: ROSLIB.TFClient,
      path?: string,
      rootObject?: THREE.Object3D,
      tfPrefix?: string,
      loader?: ColladaLoaderType
    });
  }

  export class Viewer {
    /**
     * A Viewer can be used to render an interactive 3D scene to a HTML5 canvas.
     *
     * @constructor
     * @param options - possible keys include:
         *   * divID - the ID of the div to place the viewer in
         *   * width - the initial width, in pixels, of the canvas
         *   * height - the initial height, in pixels, of the canvas
         *   * background (optional) - the color to render the background, like '#efefef'
         *   * antialias (optional) - if antialiasing should be used
         *   * intensity (optional) - the lighting intensity setting to use
         *   * cameraPose  (optional) - the starting position of the camera, possible keys include:
         *      * x - x-coordinate
         *      * y - y-coordinate
         *      * z - z-coordinate
     */
    constructor(options: {
      divID: string,
      width: number,
      height: number,
      background?: string,
      antialias?: boolean,
      intensity?: number,
      cameraPose?: {
        x: number,
        y: number,
        z: number
      }
    });

    // getter
    public scene: THREE.Scene;

    /**
     * Add the given THREE Object3D to the global scene in the viewer.
     *
     * @param object - the THREE Object3D to add
         * @param selectable - (optional) - if the object should be added to the selectable list
     */
    addObject(object: THREE.Object3D, selectable?: boolean): void;
  }

  /**
   * Create a THREE material based on the given RGBA values.
   *
   * @param r - the red value
   * @param g - the green value
   * @param b - the blue value
   * @param a - the alpha value
   * @returns the THREE material
   */
  export function makeColorMaterial(r: number, g: number, b: number, a: number): THREE.Material;

  /**
   * Return the intersection between the mouseray and the plane.
   *
   * @param mouseRay - the mouse ray
   * @param planeOrigin - the origin of the plane
   * @param planeNormal - the normal of the plane
   * @returns the intersection point
   */
  export function intersectPlane(mouseRay: THREE.Ray, planeOrigin: THREE.Vector3, planeNormal: THREE.Vector3): THREE.Vector3;

  /**
   * Find the closest point on targetRay to any point on mouseRay. Math taken from
   * http://paulbourke.net/geometry/lineline3d/
   *
   * @param targetRay - the target ray to use
   * @param mouseRay - the mouse ray
   * @param the closest point between the two rays
   */
  export function findClosestPoint(targetRay: THREE.Ray, mouseRay: THREE.Ray): THREE.Vector3;

  /**
   * Find the closest point between the axis and the mouse.
   *
   * @param axisRay - the ray from the axis
   * @param camera - the camera to project from
   * @param mousePos - the mouse position
   * @returns the closest axis point
   */
  export function closestAxisPoint(axisRay: THREE.Ray, camera: THREE.Camera, mousePos: THREE.Vector2): THREE.Vector3;

  export interface event3D {
    mousePos: THREE.Vector2;
    mouseRay: THREE.Ray;
    domEvent: any;
    camera: THREE.Camera;
    intersection: THREE.Intersection;
  }
}

declare module "ROS3D" {
  export = ROS3D;
}
