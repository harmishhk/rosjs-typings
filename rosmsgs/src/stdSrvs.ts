namespace StdSrvs {
  export class EmptyRequest extends ROSLIB.ServiceRequest {
    constructor(values: {}) { super(values) }
  }

  export class EmptyResponse extends ROSLIB.ServiceResponse {
    constructor(values: {}) { super(values) }
  }

  export class SetBoolRequest extends ROSLIB.ServiceRequest {
    data: boolean; //e.g. for hardware enabling / disabling

    constructor(values: {
      data: boolean
    }) { super(values) }
  }

  export class SetBoolResponse extends ROSLIB.ServiceResponse {
    success: boolean; // indicate successful run of triggered service
    message: string;  //informational, e.g. for error messages

    constructor(values: {
      success: boolean;
      message: string;
    }) { super(values) }
  }

  export class TriggerRequest extends ROSLIB.ServiceRequest {
    constructor(values: {}) { super(values) }
  }

  export class TriggerResponse extends ROSLIB.ServiceResponse {
    success: boolean; // indicate successful run of triggered service
    message: string;  // informational, e.g. for error messages

    constructor(values: {
      success: boolean;
      message: string;
    }) { super(values) }
  }
}
declare module 'StdSrvs' {
  export = StdSrvs;
}
