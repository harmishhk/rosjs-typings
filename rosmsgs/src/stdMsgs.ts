namespace StdMsgs {
  export class Bool extends ROSLIB.Message {
    data: boolean;

    constructor(values: {
      data: boolean;
    }) { super(values) }
  }

  export class Byte extends ROSLIB.Message {
    data: number;

    constructor(values: {
      data: number;
    }) { super(values) }
  }

  export class ByteMultiArray extends ROSLIB.Message {
    // Please look at the MultiArrayLayout message definition for
    // documentation on all multiarrays
    layout: MultiArrayLayout;  // specification of data layout
    data: number[];           // array of data

    constructor(values: {
      layout: MultiArrayLayout;
      data: number[];
    }) { super(values) }
  }

  export class Char extends Byte { }

  export class ColorRGBA extends ROSLIB.Message {
    r: number;
    g: number;
    b: number;
    a: number;

    constructor(values: {
      r: number;
      g: number;
      b: number;
      a: number;
    }) { super(values) }
  }

  export class Duration extends ROSLIB.Message {
    data: { sec: number, nsec: number };

    constructor(values: {
      data: { sec: number, nsec: number };
    }) { super(values) }
  }

  export class Empty extends ROSLIB.Message {
    constructor(values: {}) { super(values) }
  }

  export class Float32 extends Byte { }

  export class Float32MultiArray extends ByteMultiArray { }

  export class Float64 extends Byte { }

  export class Float64MultiArray extends ByteMultiArray { }

  export class Header extends ROSLIB.Message {
    // Standard metadata for higher-level stamped data types
    // This is generally used to communicate timestamped data in a particular coordinate frame.
    //
    // sequence ID: consecutively increasing ID
    seq: number;
    // Two-integer timestamp that is expressed as:
    //  * stamp.sec: seconds (stamp_secs) since epoch
    //  * stamp.nsec: nanoseconds since stamp_secs
    //  time-handling sugar is provided by the client library
    stamp: { secs: number, nsecs: number };
    // Frame this data is associated with
    //  0: no frame
    //  1: global frame
    frame_id: string;

    constructor(values: {
      seq: number;
      stamp: { secs: number, nsecs: number };
      frame_id: string;
    }) { super(values) }
  }

  export class Int16 extends Byte { }

  export class Int16MultiArray extends ByteMultiArray { }

  export class Int32 extends Byte { }

  export class Int32MultiArray extends ByteMultiArray { }

  export class Int64 extends Byte { }

  export class Int64MultiArray extends ByteMultiArray { }

  export class Int8 extends Byte { }

  export class Int8MultiArray extends ByteMultiArray { }

  export class MultiArrayDimension extends ROSLIB.Message {
    label: string;  // label of given dimension
    size: number;   // size of given dimension (in type units)
    stride: number; // stride of given dimension

    constructor(values: {
      label: string;
      size: number;
      stride: number;
    }) { super(values) }
  }

  export class MultiArrayLayout extends ROSLIB.Message {
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

    constructor(values: {
      dim: MultiArrayDimension[];
      data_offset: number;
    }) { super(values) }
  }

  export class String extends ROSLIB.Message {
    data: string;

    constructor(values: {
      data: string;
    }) { super(values) }
  }

  export class Time extends ROSLIB.Message {
    data: { sec: number, nsec: number };

    constructor(values: {
      data: { sec: number, nsec: number };
    }) { super(values) }
  }

  export class UInt16 extends Byte { }

  export class UInt16MultiArray extends ByteMultiArray { }

  export class UInt32 extends Byte { }

  export class UInt32MultiArray extends ByteMultiArray { }

  export class UInt64 extends Byte { }

  export class UInt64MultiArray extends ByteMultiArray { }

  export class UInt8 extends Byte { }

  export class UInt8MultiArray extends ByteMultiArray { }
}

declare module 'StdMsgs' {
  export = StdMsgs;
}
