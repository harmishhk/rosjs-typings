namespace DynamicReconfigure {
  export class BoolParameter extends ROSLIB.Message {
    name: string;
    value: boolean;

    constructor(values: {
      name: string;
      value: boolean;
    }) { super(values) }
  }

  export class Config extends ROSLIB.Message {
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
    }) { super(values) }
  }

  export class ConfigDescription extends ROSLIB.Message {
    groups: Group[];
    max: Config;
    min: Config;
    dflt: Config;

    constructor(values: {
      groups: Group[];
      max: Config;
      min: Config;
      dflt: Config;
    }) { super(values) }
  }

  export class DoubleParameter extends ROSLIB.Message {
    name: string;
    value: number;

    constructor(values: {
      name: string;
      value: number;
    }) { super(values) }
  }

  export class Group extends ROSLIB.Message {
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
    }) { super(values) }
  }

  export class GroupState extends ROSLIB.Message {
    name: string;
    state: boolean;
    id: number;
    parent: number;

    constructor(values: {
      name: string;
      state: boolean;
      id: number;
      parent: number;
    }) { super(values) }
  }

  export class IntParameter extends ROSLIB.Message {
    name: string;
    value: number;

    constructor(values: {
      name: string;
      value: number;
    }) { super(values) }
  }

  export class ParamDescription extends ROSLIB.Message {
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
    }) { super(values) }
  }

  export class StrParameter extends ROSLIB.Message {
    name: string;
    value: string;

    constructor(values: {
      name: string;
      value: string;
    }) { super(values) }
  }

  export class ReconfigureRequest extends ROSLIB.ServiceRequest {
    config: Config;

    constructor(values: {
      config: Config;
    }) { super(values) }
  }

  export class ReconfigureResponse extends ROSLIB.ServiceRequest {
    config: Config;

    constructor(values: {
      config: Config;
    }) { super(values) }
  }
}
declare module 'DynamicReconfigure' {
  export = DynamicReconfigure;
}
