var searchIndex = {};
searchIndex["rust_ofp"] = {"doc":"","items":[[0,"ofp_controller","rust_ofp","",null,null],[8,"OfpController","rust_ofp::ofp_controller","OpenFlow Controller",null,null],[16,"Message","","OpenFlow message type supporting the same protocol version as the controller.",0,null],[10,"send_message","","Send a message to the node associated with the given `TcpStream`.",0,{"inputs":[{"name":"u32"},{"name":"message"},{"name":"tcpstream"}],"output":null}],[10,"handle_client_connected","","Perform handshake and begin loop reading incoming messages from client stream.",0,{"inputs":[{"name":"tcpstream"}],"output":null}],[0,"ofp_header","rust_ofp","",null,null],[3,"OfpHeader","rust_ofp::ofp_header","OpenFlow Header",null,null],[11,"new","","Create an `OfpHeader` out of the arguments.",1,{"inputs":[{"name":"u8"},{"name":"u8"},{"name":"u16"},{"name":"u32"}],"output":{"name":"ofpheader"}}],[11,"size","","Return the byte-size of an `OfpHeader`.",1,{"inputs":[],"output":{"name":"usize"}}],[11,"marshal","","Fills a message buffer with the header fields of an `OfpHeader`.",1,{"inputs":[{"name":"vec"},{"name":"ofpheader"}],"output":null}],[11,"parse","","Takes a message buffer (sized for an `OfpHeader`) and returns an `OfpHeader`.",1,null],[11,"version","","Return the `version` field of a header.",1,null],[11,"type_code","","Return the OpenFlow message type code of a header.\n# Safety",1,null],[11,"length","","Return the `length` field of a header. Includes the length of the header itself.",1,null],[11,"xid","","Return the `xid` field of a header, the transaction id associated with this packet.\nReplies use the same id to facilitate pairing.",1,null],[0,"ofp_message","rust_ofp","",null,null],[8,"OfpMessage","rust_ofp::ofp_message","OpenFlow Message",null,null],[10,"size_of","","Return the byte-size of an `OfpMessage`.",2,{"inputs":[{"name":"self"}],"output":{"name":"usize"}}],[10,"header_of","","Create an `OfpHeader` for the given transaction id and OpenFlow message.",2,{"inputs":[{"name":"u32"},{"name":"self"}],"output":{"name":"ofpheader"}}],[10,"marshal","","Return a marshaled buffer containing an OpenFlow header and the message `msg`.",2,{"inputs":[{"name":"u32"},{"name":"self"}],"output":{"name":"vec"}}],[10,"parse","","Returns a pair `(u32, OfpMessage)` of the transaction id and OpenFlow message parsed from\nthe given OpenFlow header `header`, and buffer `buf`.",2,null],[0,"openflow0x01","rust_ofp","",null,null],[3,"Mask","rust_ofp::openflow0x01","",null,null],[12,"value","","",3,null],[12,"mask","","",3,null],[3,"Pattern","","Fields to match against flows.",null,null],[12,"dl_src","","",4,null],[12,"dl_dst","","",4,null],[12,"dl_typ","","",4,null],[12,"dl_vlan","","",4,null],[12,"dl_vlan_pcp","","",4,null],[12,"nw_src","","",4,null],[12,"nw_dst","","",4,null],[12,"nw_proto","","",4,null],[12,"nw_tos","","",4,null],[12,"tp_src","","",4,null],[12,"tp_dst","","",4,null],[12,"in_port","","",4,null],[3,"Capabilities","","Capabilities supported by the datapath.",null,null],[12,"flow_stats","","",5,null],[12,"table_stats","","",5,null],[12,"port_stats","","",5,null],[12,"stp","","",5,null],[12,"ip_reasm","","",5,null],[12,"queue_stats","","",5,null],[12,"arp_match_ip","","",5,null],[3,"SupportedActions","","Actions supported by the datapath.",null,null],[12,"output","","",6,null],[12,"set_vlan_id","","",6,null],[12,"set_vlan_pcp","","",6,null],[12,"strip_vlan","","",6,null],[12,"set_dl_src","","",6,null],[12,"set_dl_dst","","",6,null],[12,"set_nw_src","","",6,null],[12,"set_nw_dst","","",6,null],[12,"set_nw_tos","","",6,null],[12,"set_tp_src","","",6,null],[12,"set_tp_dst","","",6,null],[12,"enqueue","","",6,null],[12,"vendor","","",6,null],[3,"SwitchFeatures","","Switch features.",null,null],[12,"datapath_id","","",7,null],[12,"num_buffers","","",7,null],[12,"num_tables","","",7,null],[12,"supported_capabilities","","",7,null],[12,"supported_actions","","",7,null],[12,"ports","","",7,null],[3,"FlowMod","","Represents modifications to a flow table from the controller.",null,null],[12,"command","","",8,null],[12,"pattern","","",8,null],[12,"priority","","",8,null],[12,"actions","","",8,null],[12,"cookie","","",8,null],[12,"idle_timeout","","",8,null],[12,"hard_timeout","","",8,null],[12,"notify_when_removed","","",8,null],[12,"apply_to_packet","","",8,null],[12,"out_port","","",8,null],[12,"check_overlap","","",8,null],[3,"PacketIn","","Represents packets received by the datapath and sent to the controller.",null,null],[12,"input_payload","","",9,null],[12,"total_len","","",9,null],[12,"port","","",9,null],[12,"reason","","",9,null],[3,"PacketOut","","Represents packets sent from the controller.",null,null],[12,"output_payload","","",10,null],[12,"port_id","","",10,null],[12,"apply_actions","","",10,null],[3,"FlowRemoved","","Flow removed (datapath -&gt; controller)",null,null],[12,"pattern","","",11,null],[12,"cookie","","",11,null],[12,"priority","","",11,null],[12,"reason","","",11,null],[12,"duration_sec","","",11,null],[12,"duration_nsec","","",11,null],[12,"idle_timeout","","",11,null],[12,"packet_count","","",11,null],[12,"byte_count","","",11,null],[3,"PortState","","Current state of a physical port. Not configurable by the controller.",null,null],[12,"down","","",12,null],[12,"stp_state","","",12,null],[3,"PortFeatures","","Features of physical ports available in a datapath.",null,null],[12,"f_10mbhd","","",13,null],[12,"f_10mbfd","","",13,null],[12,"f_100mbhd","","",13,null],[12,"f_100mbfd","","",13,null],[12,"f_1gbhd","","",13,null],[12,"f_1gbfd","","",13,null],[12,"f_10gbfd","","",13,null],[12,"copper","","",13,null],[12,"fiber","","",13,null],[12,"autoneg","","",13,null],[12,"pause","","",13,null],[12,"pause_asym","","",13,null],[3,"PortConfig","","Flags to indicate behavior of the physical port.",null,null],[12,"down","","",14,null],[12,"no_stp","","",14,null],[12,"no_recv","","",14,null],[12,"no_recv_stp","","",14,null],[12,"no_flood","","",14,null],[12,"no_fwd","","",14,null],[12,"no_packet_in","","",14,null],[3,"PortDesc","","Description of a physical port.",null,null],[12,"port_no","","",15,null],[12,"hw_addr","","",15,null],[12,"name","","",15,null],[12,"config","","",15,null],[12,"state","","",15,null],[12,"curr","","",15,null],[12,"advertised","","",15,null],[12,"supported","","",15,null],[12,"peer","","",15,null],[3,"PortStatus","","A physical port has changed in the datapath.",null,null],[12,"reason","","",16,null],[12,"desc","","",16,null],[4,"MsgCode","","OpenFlow 1.0 message type codes, used by headers to identify meaning of the rest of a message.",null,null],[13,"Hello","","",17,null],[13,"Error","","",17,null],[13,"EchoReq","","",17,null],[13,"EchoResp","","",17,null],[13,"Vendor","","",17,null],[13,"FeaturesReq","","",17,null],[13,"FeaturesResp","","",17,null],[13,"GetConfigReq","","",17,null],[13,"GetConfigResp","","",17,null],[13,"SetConfig","","",17,null],[13,"PacketIn","","",17,null],[13,"FlowRemoved","","",17,null],[13,"PortStatus","","",17,null],[13,"PacketOut","","",17,null],[13,"FlowMod","","",17,null],[13,"PortMod","","",17,null],[13,"StatsReq","","",17,null],[13,"StatsResp","","",17,null],[13,"BarrierReq","","",17,null],[13,"BarrierResp","","",17,null],[13,"QueueGetConfigReq","","",17,null],[13,"QueueGetConfigResp","","",17,null],[4,"PseudoPort","","Port behavior.",null,null],[13,"PhysicalPort","","",18,null],[13,"InPort","","",18,null],[13,"Table","","",18,null],[13,"Normal","","",18,null],[13,"Flood","","",18,null],[13,"AllPorts","","",18,null],[13,"Controller","","",18,null],[13,"Local","","",18,null],[4,"Action","","Actions associated with flows and packets.",null,null],[13,"Output","","",19,null],[13,"SetDlVlan","","",19,null],[13,"SetDlVlanPcp","","",19,null],[13,"SetDlSrc","","",19,null],[13,"SetDlDst","","",19,null],[13,"SetNwSrc","","",19,null],[13,"SetNwDst","","",19,null],[13,"SetNwTos","","",19,null],[13,"SetTpSrc","","",19,null],[13,"SetTpDst","","",19,null],[13,"Enqueue","","",19,null],[4,"Timeout","","How long before a flow entry expires.",null,null],[13,"Permanent","","",20,null],[13,"ExpiresAfter","","",20,null],[4,"FlowModCmd","","Type of modification to perform on a flow table.",null,null],[13,"AddFlow","","",21,null],[13,"ModFlow","","",21,null],[13,"ModStrictFlow","","",21,null],[13,"DeleteFlow","","",21,null],[13,"DeleteStrictFlow","","",21,null],[4,"Payload","","The data associated with a packet received by the controller.",null,null],[13,"Buffered","","",22,null],[13,"NotBuffered","","",22,null],[4,"PacketInReason","","The reason a packet arrives at the controller.",null,null],[13,"NoMatch","","",23,null],[13,"ExplicitSend","","",23,null],[4,"FlowRemovedReason","","Reason a flow was removed from a switch",null,null],[13,"IdleTimeout","","",24,null],[13,"HardTimeout","","",24,null],[13,"Delete","","",24,null],[4,"StpState","","STP state of a port.",null,null],[13,"Listen","","",25,null],[13,"Learn","","",25,null],[13,"Forward","","",25,null],[13,"Block","","",25,null],[4,"PortReason","","What changed about a physical port.",null,null],[13,"PortAdd","","",26,null],[13,"PortDelete","","",26,null],[13,"PortModify","","",26,null],[0,"message","","Encapsulates handling of messages implementing `MessageType` trait.",null,null],[4,"Message","rust_ofp::openflow0x01::message","Abstractions of OpenFlow 1.0 messages mapping to message codes.",null,null],[13,"Hello","","",27,null],[13,"EchoRequest","","",27,null],[13,"EchoReply","","",27,null],[13,"FeaturesReq","","",27,null],[13,"FeaturesReply","","",27,null],[13,"FlowMod","","",27,null],[13,"PacketIn","","",27,null],[13,"FlowRemoved","","",27,null],[13,"PortStatus","","",27,null],[13,"PacketOut","","",27,null],[13,"BarrierRequest","","",27,null],[13,"BarrierReply","","",27,null],[5,"add_flow","","Return a `FlowMod` adding a flow parameterized by the given `priority`, `pattern`,\nand `actions`.",null,{"inputs":[{"name":"u16"},{"name":"pattern"},{"name":"vec"}],"output":{"name":"flowmod"}}],[11,"size_of","","",27,{"inputs":[{"name":"message"}],"output":{"name":"usize"}}],[11,"header_of","","",27,{"inputs":[{"name":"u32"},{"name":"message"}],"output":{"name":"ofpheader"}}],[11,"marshal","","",27,{"inputs":[{"name":"u32"},{"name":"message"}],"output":{"name":"vec"}}],[11,"parse","","",27,null],[8,"MessageType","rust_ofp::openflow0x01","Common API for message types implementing OpenFlow Message Codes (see `MsgCode` enum).",null,null],[10,"size_of","","Return the byte-size of a message.",28,{"inputs":[{"name":"self"}],"output":{"name":"usize"}}],[10,"parse","","Parse a buffer into a message.",28,null],[10,"marshal","","Marshal a message into a `u8` buffer.",28,{"inputs":[{"name":"self"},{"name":"vec"}],"output":null}],[11,"clone","","",17,null],[11,"fmt","","",17,null],[11,"match_all","","",4,{"inputs":[],"output":{"name":"pattern"}}],[11,"clone","","",18,null],[11,"clone","","",19,null],[11,"size_of","","",7,{"inputs":[{"name":"switchfeatures"}],"output":{"name":"usize"}}],[11,"parse","","",7,null],[11,"marshal","","",7,{"inputs":[{"name":"switchfeatures"},{"name":"vec"}],"output":null}],[11,"size_of","","",8,{"inputs":[{"name":"flowmod"}],"output":{"name":"usize"}}],[11,"parse","","",8,null],[11,"marshal","","",8,{"inputs":[{"name":"flowmod"},{"name":"vec"}],"output":null}],[11,"size_of","","",22,{"inputs":[{"name":"payload"}],"output":{"name":"usize"}}],[11,"size_of","","",9,{"inputs":[{"name":"packetin"}],"output":{"name":"usize"}}],[11,"parse","","",9,null],[11,"marshal","","",9,{"inputs":[{"name":"packetin"},{"name":"vec"}],"output":null}],[11,"size_of","","",10,{"inputs":[{"name":"packetout"}],"output":{"name":"usize"}}],[11,"parse","","",10,null],[11,"marshal","","",10,{"inputs":[{"name":"packetout"},{"name":"vec"}],"output":null}],[11,"size_of","","",11,{"inputs":[{"name":"flowremoved"}],"output":{"name":"usize"}}],[11,"parse","","",11,null],[11,"marshal","","",11,{"inputs":[{"name":"flowremoved"},{"name":"vec"}],"output":null}],[11,"size_of","","",16,{"inputs":[{"name":"portstatus"}],"output":{"name":"usize"}}],[11,"parse","","",16,null],[11,"marshal","","",16,{"inputs":[{"name":"portstatus"},{"name":"vec"}],"output":null}]],"paths":[[8,"OfpController"],[3,"OfpHeader"],[8,"OfpMessage"],[3,"Mask"],[3,"Pattern"],[3,"Capabilities"],[3,"SupportedActions"],[3,"SwitchFeatures"],[3,"FlowMod"],[3,"PacketIn"],[3,"PacketOut"],[3,"FlowRemoved"],[3,"PortState"],[3,"PortFeatures"],[3,"PortConfig"],[3,"PortDesc"],[3,"PortStatus"],[4,"MsgCode"],[4,"PseudoPort"],[4,"Action"],[4,"Timeout"],[4,"FlowModCmd"],[4,"Payload"],[4,"PacketInReason"],[4,"FlowRemovedReason"],[4,"StpState"],[4,"PortReason"],[4,"Message"],[8,"MessageType"]]};
searchIndex["rust_ofp_controller"] = {"doc":"","items":[],"paths":[]};
searchIndex["byteorder"] = {"doc":"This crate provides convenience methods for encoding and decoding numbers\nin either big-endian or little-endian order.","items":[[4,"BigEndian","byteorder","Defines big-endian serialization.",null,null],[4,"LittleEndian","","Defines little-endian serialization.",null,null],[6,"NetworkEndian","","Defines network byte order serialization.",null,null],[6,"NativeEndian","","Defines system native-endian serialization.",null,null],[8,"ReadBytesExt","","Extends `Read` with methods for reading numbers. (For `std::io`.)",null,null],[11,"read_u8","","Reads an unsigned 8 bit integer from the underlying reader.",0,null],[11,"read_i8","","Reads a signed 8 bit integer from the underlying reader.",0,null],[11,"read_u16","","Reads an unsigned 16 bit integer from the underlying reader.",0,null],[11,"read_i16","","Reads a signed 16 bit integer from the underlying reader.",0,null],[11,"read_u32","","Reads an unsigned 32 bit integer from the underlying reader.",0,null],[11,"read_i32","","Reads a signed 32 bit integer from the underlying reader.",0,null],[11,"read_u64","","Reads an unsigned 64 bit integer from the underlying reader.",0,null],[11,"read_i64","","Reads a signed 64 bit integer from the underlying reader.",0,null],[11,"read_uint","","Reads an unsigned n-bytes integer from the underlying reader.",0,null],[11,"read_int","","Reads a signed n-bytes integer from the underlying reader.",0,null],[11,"read_f32","","Reads a IEEE754 single-precision (4 bytes) floating point number from\nthe underlying reader.",0,null],[11,"read_f64","","Reads a IEEE754 double-precision (8 bytes) floating point number from\nthe underlying reader.",0,null],[8,"WriteBytesExt","","Extends `Write` with methods for writing numbers. (For `std::io`.)",null,null],[11,"write_u8","","Writes an unsigned 8 bit integer to the underlying writer.",1,null],[11,"write_i8","","Writes a signed 8 bit integer to the underlying writer.",1,null],[11,"write_u16","","Writes an unsigned 16 bit integer to the underlying writer.",1,null],[11,"write_i16","","Writes a signed 16 bit integer to the underlying writer.",1,null],[11,"write_u32","","Writes an unsigned 32 bit integer to the underlying writer.",1,null],[11,"write_i32","","Writes a signed 32 bit integer to the underlying writer.",1,null],[11,"write_u64","","Writes an unsigned 64 bit integer to the underlying writer.",1,null],[11,"write_i64","","Writes a signed 64 bit integer to the underlying writer.",1,null],[11,"write_uint","","Writes an unsigned n-bytes integer to the underlying writer.",1,null],[11,"write_int","","Writes a signed n-bytes integer to the underlying writer.",1,null],[11,"write_f32","","Writes a IEEE754 single-precision (4 bytes) floating point number to\nthe underlying writer.",1,null],[11,"write_f64","","Writes a IEEE754 double-precision (8 bytes) floating point number to\nthe underlying writer.",1,null],[8,"ByteOrder","","ByteOrder describes types that can serialize integers as bytes.",null,null],[10,"read_u16","","Reads an unsigned 16 bit integer from `buf`.",2,null],[10,"read_u32","","Reads an unsigned 32 bit integer from `buf`.",2,null],[10,"read_u64","","Reads an unsigned 64 bit integer from `buf`.",2,null],[10,"read_uint","","Reads an unsigned n-bytes integer from `buf`.",2,null],[10,"write_u16","","Writes an unsigned 16 bit integer `n` to `buf`.",2,null],[10,"write_u32","","Writes an unsigned 32 bit integer `n` to `buf`.",2,null],[10,"write_u64","","Writes an unsigned 64 bit integer `n` to `buf`.",2,null],[10,"write_uint","","Writes an unsigned integer `n` to `buf` using only `nbytes`.",2,null],[11,"read_i16","","Reads a signed 16 bit integer from `buf`.",2,null],[11,"read_i32","","Reads a signed 32 bit integer from `buf`.",2,null],[11,"read_i64","","Reads a signed 64 bit integer from `buf`.",2,null],[11,"read_int","","Reads a signed n-bytes integer from `buf`.",2,null],[11,"read_f32","","Reads a IEEE754 single-precision (4 bytes) floating point number.",2,null],[11,"read_f64","","Reads a IEEE754 double-precision (8 bytes) floating point number.",2,null],[11,"write_i16","","Writes a signed 16 bit integer `n` to `buf`.",2,null],[11,"write_i32","","Writes a signed 32 bit integer `n` to `buf`.",2,null],[11,"write_i64","","Writes a signed 64 bit integer `n` to `buf`.",2,null],[11,"write_int","","Writes a signed integer `n` to `buf` using only `nbytes`.",2,null],[11,"write_f32","","Writes a IEEE754 single-precision (4 bytes) floating point number.",2,null],[11,"write_f64","","Writes a IEEE754 double-precision (8 bytes) floating point number.",2,null],[11,"clone","","",3,null],[11,"fmt","","",3,null],[11,"hash","","",3,null],[11,"cmp","","",3,null],[11,"eq","","",3,null],[11,"partial_cmp","","",3,null],[11,"default","","",3,{"inputs":[],"output":{"name":"bigendian"}}],[11,"clone","","",4,null],[11,"fmt","","",4,null],[11,"hash","","",4,null],[11,"cmp","","",4,null],[11,"eq","","",4,null],[11,"partial_cmp","","",4,null],[11,"default","","",4,{"inputs":[],"output":{"name":"littleendian"}}],[11,"read_u16","","",3,null],[11,"read_u32","","",3,null],[11,"read_u64","","",3,null],[11,"read_uint","","",3,null],[11,"write_u16","","",3,null],[11,"write_u32","","",3,null],[11,"write_u64","","",3,null],[11,"write_uint","","",3,null],[11,"read_u16","","",4,null],[11,"read_u32","","",4,null],[11,"read_u64","","",4,null],[11,"read_uint","","",4,null],[11,"write_u16","","",4,null],[11,"write_u32","","",4,null],[11,"write_u64","","",4,null],[11,"write_uint","","",4,null],[11,"read_u8","","Reads an unsigned 8 bit integer from the underlying reader.",0,null],[11,"read_i8","","Reads a signed 8 bit integer from the underlying reader.",0,null],[11,"read_u16","","Reads an unsigned 16 bit integer from the underlying reader.",0,null],[11,"read_i16","","Reads a signed 16 bit integer from the underlying reader.",0,null],[11,"read_u32","","Reads an unsigned 32 bit integer from the underlying reader.",0,null],[11,"read_i32","","Reads a signed 32 bit integer from the underlying reader.",0,null],[11,"read_u64","","Reads an unsigned 64 bit integer from the underlying reader.",0,null],[11,"read_i64","","Reads a signed 64 bit integer from the underlying reader.",0,null],[11,"read_uint","","Reads an unsigned n-bytes integer from the underlying reader.",0,null],[11,"read_int","","Reads a signed n-bytes integer from the underlying reader.",0,null],[11,"read_f32","","Reads a IEEE754 single-precision (4 bytes) floating point number from\nthe underlying reader.",0,null],[11,"read_f64","","Reads a IEEE754 double-precision (8 bytes) floating point number from\nthe underlying reader.",0,null],[11,"write_u8","","Writes an unsigned 8 bit integer to the underlying writer.",1,null],[11,"write_i8","","Writes a signed 8 bit integer to the underlying writer.",1,null],[11,"write_u16","","Writes an unsigned 16 bit integer to the underlying writer.",1,null],[11,"write_i16","","Writes a signed 16 bit integer to the underlying writer.",1,null],[11,"write_u32","","Writes an unsigned 32 bit integer to the underlying writer.",1,null],[11,"write_i32","","Writes a signed 32 bit integer to the underlying writer.",1,null],[11,"write_u64","","Writes an unsigned 64 bit integer to the underlying writer.",1,null],[11,"write_i64","","Writes a signed 64 bit integer to the underlying writer.",1,null],[11,"write_uint","","Writes an unsigned n-bytes integer to the underlying writer.",1,null],[11,"write_int","","Writes a signed n-bytes integer to the underlying writer.",1,null],[11,"write_f32","","Writes a IEEE754 single-precision (4 bytes) floating point number to\nthe underlying writer.",1,null],[11,"write_f64","","Writes a IEEE754 double-precision (8 bytes) floating point number to\nthe underlying writer.",1,null]],"paths":[[8,"ReadBytesExt"],[8,"WriteBytesExt"],[8,"ByteOrder"],[4,"BigEndian"],[4,"LittleEndian"]]};
initSearch(searchIndex);
