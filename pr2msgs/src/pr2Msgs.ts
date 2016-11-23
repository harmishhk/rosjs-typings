namespace PR2Msgs {
  export class AccelerometerState extends ROSLIB.Message {
    // This captures acceleration measurements from the 3-dof accelerometer in the hand of the PR2
    // Units are meters / second / second
    // Vectors should be <X, Y, Z> in the frame of the gripper

    // The communication with the accelerometer is at approximately 3khz, but there is only good timestamping every 1ms
    // This means the samples should be interpreted as all having come from the 1 ms before the time in the header

    header: StdMsgs.Header;
    samples: GeometryMsgs.Vector3[];

    constructor(values: {
      header: StdMsgs.Header;
      samples: GeometryMsgs.Vector3[];
    }) { super(values) }
  }

  export class AccessPoint extends ROSLIB.Message {
    // This message communicates the state of the PR2's wifi access point.
    header: StdMsgs.Header;
    essid: string;
    macaddr: string;
    signal: number;
    noise: number;
    snr: number;
    channel: number;
    rate: string;
    tx_power: string;
    quality: number;

    constructor(values: {
      header: StdMsgs.Header;
      essid: string;
      macaddr: string;
      signal: number;
      noise: number;
      snr: number;
      channel: number;
      rate: string;
      tx_power: string;
      quality: number;
    }) { super(values) }
  }

  export class BatteryServer2 extends ROSLIB.Message {
    // This message communicates the state of a battery server, which controls multiple batteries.
    header: StdMsgs.Header;
    MAX_BAT_COUNT = 4;
    MAX_BAT_REG = 48;
    id: number; // unique ID for each battery server

    // Battery System Stats
    last_system_update: { secs: number, nsecs: number }; // last time the system stats where updated
    time_left: { secs: number, nsecs: number }; // in seconds (hardware resolution is 1 minute)
    average_charge: number; // in percent
    message: string; // message from the ocean server
    last_controller_update: { secs: number, nsecs: number }; // last time a battery status flag was updated

    // for each battery
    battery: PR2Msgs.BatteryState2[];

    constructor(values: {
      header: StdMsgs.Header;
      id: number;

      last_system_update: { secs: number, nsecs: number };
      time_left: { secs: number, nsecs: number };
      average_charge: number;
      message: string;
      last_controller_update: { secs: number, nsecs: number };

      // for each battery
      battery: PR2Msgs.BatteryState2[];
    }) { super(values) }
  }

  export class BatteryState2 extends ROSLIB.Message {
    // This message communicates the state of a single battery.
    // Battery Controller Flags, one per battery
    present: boolean; // is this pack present
    charging: boolean; // is this pack charging
    discharging: boolean; // is this pack discharging
    power_present: boolean; //is there an input voltage
    power_no_good: boolean; // is there a fault (No Good)
    inhibited: boolean; // is this pack disabled for some reason

    // These registers are per battery
    last_battery_update: { secs: number, nsecs: number }; // last time any battery update occurred
    battery_register: number[]; // 48 value of this register in the battery
    battery_update_flag: boolean[]; // 48 Has this register ever been updated
    battery_register_update: { secs: number, nsecs: number }[]; // 48 last time this specific register was updated

    constructor(values: {
      present: boolean;
      charging: boolean;
      discharging: boolean;
      power_present: boolean;
      power_no_good: boolean;
      inhibited: boolean;
      last_battery_update: { secs: number, nsecs: number };
      battery_register: number[];
      battery_update_flag: boolean[];
      battery_register_update: { secs: number, nsecs: number }[];
    }) { super(values) }
  }

  export class DashboardState extends ROSLIB.Message {
    // This message communicates state information that might be used by a dashboard application.
    motors_halted: StdMsgs.Bool;
    motors_halted_valid: boolean;

    power_board_state: PR2Msgs.PowerBoardState;
    power_board_state_valid: boolean;

    power_state: PR2Msgs.PowerState;
    power_state_valid: boolean;

    access_point: PR2Msgs.AccessPoint;
    access_point_valid: boolean;

    constructor(values: {
      motors_halted: StdMsgs.Bool;
      motors_halted_valid: boolean;
      power_board_state: PR2Msgs.PowerBoardState;
      power_board_state_valid: boolean;
      power_state: PR2Msgs.PowerState;
      power_state_valid: boolean;
      access_point: PR2Msgs.AccessPoint;
      access_point_valid: boolean;
    }) { super(values) }
  }

  export class GPUStatus extends ROSLIB.Message {
    header: StdMsgs.Header;
    product_name: string;
    pci_device_id: string;
    pci_location: string;
    display: string;
    driver_version: string;
    temperature: number; // Temperature in Celcius
    fan_speed: number; // Fan speed in rad/s
    gpu_usage: number; // Usage in percent
    memory_usage: number; // Usage in percent

    constructor(values: {
      header: StdMsgs.Header;
      product_name: string;
      pci_device_id: string;
      pci_location: string;
      display: string;
      driver_version: string;
      temperature: number;
      fan_speed: number;
      gpu_usage: number;
      memory_usage: number;
    }) { super(values) }
  }

  export class LaserScannerSignal extends ROSLIB.Message {
    // This message is emitted by the laser tilt controller when the laser hits one limit of its profile.
    header: StdMsgs.Header;

    // signal == 0 => Half profile complete
    // signal == 1 => Full Profile Complete
    signal: number;

    constructor(values: {
      header: StdMsgs.Header;
      signal: number;
    }) { super(values) }
  }

  export class LaserTrajCmd extends ROSLIB.Message {
    // This message is used to set the profile that the tilt laser controller executes.
    header: StdMsgs.Header;
    profile: string; // options are currently "linear" or "linear_blended"
    position: number[]; // 64 Laser positions
    time_from_start: { sec: number, nsec: number }[]; // Times to reach laser positions in seconds
    max_velocity: number; // Set <= 0 to use default
    max_acceleration: number; // Set <= 0 to use default

    constructor(values: {
      header: StdMsgs.Header;
      profile: string;
      position: number[];
      time_from_start: { sec: number, nsec: number }[];
      max_velocity: number;
      max_acceleration: number;
    }) { super(values) }
  }

  export class PeriodicCmd extends ROSLIB.Message {
    // This message is used to set the parameters of a profile executed by the laser tilt controller.
    header: StdMsgs.Header;
    profile: string;
    period: number;
    amplitude: number;
    offset: number;

    constructor(values: {
      header: StdMsgs.Header;
      profile: string;
      period: number;
      amplitude: number;
      offset: number;
    }) { super(values) }
  }

  export enum MasterStateType { }
  export const MASTER_NOPOWER: MasterStateType = 0;
  export const MASTER_STANDBY: MasterStateType = 1;
  export const MASTER_ON: MasterStateType = 2;
  export const MASTER_OFF: MasterStateType = 3;
  export const MASTER_SHUTDOWN: MasterStateType = 4;

  export enum CircuitStateType { }
  export const STATE_NOPOWER: CircuitStateType = 0;
  export const STATE_STANDBY: CircuitStateType = 1;
  export const STATE_PUMPING: CircuitStateType = 2;
  export const STATE_ON: CircuitStateType = 3;
  export const STATE_ENABLED: CircuitStateType = 3; // Preferred over STATE_ON, keeping STATE_ON for backcompat
  export const STATE_DISABLED: CircuitStateType = 4;

  export class PowerBoardState extends ROSLIB.Message {
    // This message communicates the state of the PR2's power board.
    header: StdMsgs.Header;
    name: string; // Name with serial number
    serial_num: number; // Serial number for this board's message
    input_voltage: number; // Input voltage to power board

    // Master States:
    // MASTER_NOPOWER, MASTER_STANDBY, MASTER_ON, MASTER_OFF, MASTER_SHUTDOWN
    master_state: PR2Msgs.MasterStateType; // The master state machine's state in the powerboard

    // Circuit States:
    // STATE_NOPOWER, STATE_STANDBY, STATE_PUMPING, STATE_ON, STATE_DISABLED
    circuit_state: PR2Msgs.CircuitStateType[]; // 3 One of the above states
    circuit_voltage: number[]; // 3 Output voltage of each circuit

    // True if robot should be enabled
    run_stop: boolean; // Note - if the wireless run- stop is hit, this will be unobservable
    wireless_stop: boolean;

    constructor(values: {
      header: StdMsgs.Header;
      name: string;
      serial_num: number;
      input_voltage: number;
      master_state: PR2Msgs.MasterStateType;
      circuit_state: PR2Msgs.CircuitStateType[];
      circuit_voltage: number[];
      run_stop: boolean;
      wireless_stop: boolean;
    }) { super(values) }
  }

  export class PowerState extends ROSLIB.Message {
    // This message communicates the state of the PR2's power system.
    header: StdMsgs.Header;
    power_consumption: number; // Watts
    time_remaining: { sec: number, nsec: number }; // estimated time to empty or full
    prediction_method: string; // how time_remaining is being calculated
    relative_capacity: number; // percent of capacity
    AC_present: number; // number of packs detecting AC power, > 0 means plugged in

    constructor(values: {
      header: StdMsgs.Header;
      power_consumption: number;
      time_remaining: { sec: number, nsec: number };
      prediction_method: string;
      relative_capacity: number;
      AC_present: number;
    }) { super(values) }
  }

  export class PressureState extends ROSLIB.Message {
    // Output from finger-tip pressure sensors on PR2
    // Higher number correspond to more pressure, but there is no explicit unit and you will have to calibrate for offset
    // The numbers reported are the raw values from the I2C hardware
    header: StdMsgs.Header;
    l_finger_tip: number[];
    r_finger_tip: number[];

    constructor(values: {
      header: StdMsgs.Header;
      l_finger_tip: number[];
      r_finger_tip: number[];
    }) { super(values) }
  }

  export class SetLaserTrajCmdRequest extends ROSLIB.ServiceRequest {
    command: PR2Msgs.LaserTrajCmd;

    constructor(values: {
      command: PR2Msgs.LaserTrajCmd;
    }) { super(values) }
  }

  export class SetLaserTrajCmdResponse extends ROSLIB.ServiceResponse {
    start_time: { sec: number, nsec: number };

    constructor(values: {
      start_time: { sec: number, nsec: number };
    }) { super(values) }
  }

  export class SetPeriodicCmdRequest extends ROSLIB.ServiceRequest {
    command: PR2Msgs.PeriodicCmd;

    constructor(values: {
      command: PR2Msgs.PeriodicCmd;
    }) { super(values) }
  }

  export class SetPeriodicCmdResponse extends ROSLIB.ServiceResponse {
    start_time: { sec: number, nsec: number };

    constructor(values: {
      start_time: { sec: number, nsec: number };
    }) { super(values) }
  }
}

declare module 'PR2Msgs' {
  export = PR2Msgs;
}
