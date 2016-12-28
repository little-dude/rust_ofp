var searchIndex = {};
searchIndex["rust_ofp"] = {"doc":"","items":[[0,"ofp_header","rust_ofp","",null,null],[3,"OfpHeader","rust_ofp::ofp_header","",null,null],[11,"new","","",0,{"inputs":[{"name":"u8"},{"name":"u8"},{"name":"u16"},{"name":"u32"}],"output":{"name":"ofpheader"}}],[11,"size","","",0,{"inputs":[],"output":{"name":"usize"}}],[11,"marshal","","",0,{"inputs":[{"name":"vec"},{"name":"ofpheader"}],"output":null}],[11,"parse","","",0,null],[11,"version","","",0,null],[11,"type_code","","",0,null],[11,"length","","",0,null],[11,"xid","","",0,null],[0,"openflow0x01","rust_ofp","",null,null],[3,"Pattern","rust_ofp::openflow0x01","",null,null],[3,"Capabilities","","",null,null],[12,"flow_stats","","",1,null],[12,"table_stats","","",1,null],[12,"port_stats","","",1,null],[12,"stp","","",1,null],[12,"ip_reasm","","",1,null],[12,"queue_stats","","",1,null],[12,"arp_match_ip","","",1,null],[3,"SupportedActions","","",null,null],[12,"output","","",2,null],[12,"set_vlan_id","","",2,null],[12,"set_vlan_pcp","","",2,null],[12,"strip_vlan","","",2,null],[12,"set_dl_src","","",2,null],[12,"set_dl_dst","","",2,null],[12,"set_nw_src","","",2,null],[12,"set_nw_dst","","",2,null],[12,"set_nw_tos","","",2,null],[12,"set_tp_src","","",2,null],[12,"set_tp_dst","","",2,null],[12,"enqueue","","",2,null],[12,"vendor","","",2,null],[3,"SwitchFeatures","","",null,null],[12,"datapath_id","","",3,null],[12,"num_buffers","","",3,null],[12,"num_tables","","",3,null],[12,"supported_capabilities","","",3,null],[12,"supported_actions","","",3,null],[12,"ports","","",3,null],[3,"FlowMod","","",null,null],[12,"command","","",4,null],[12,"pattern","","",4,null],[12,"priority","","",4,null],[12,"actions","","",4,null],[12,"cookie","","",4,null],[12,"idle_timeout","","",4,null],[12,"hard_timeout","","",4,null],[12,"notify_when_removed","","",4,null],[12,"apply_to_packet","","",4,null],[12,"out_port","","",4,null],[12,"check_overlap","","",4,null],[3,"PacketIn","","",null,null],[12,"input_payload","","",5,null],[12,"total_len","","",5,null],[12,"port","","",5,null],[12,"reason","","",5,null],[3,"PortState","","",null,null],[12,"down","","",6,null],[12,"stp_state","","",6,null],[3,"PortFeatures","","",null,null],[12,"f_10mbhd","","",7,null],[12,"f_10mbfd","","",7,null],[12,"f_100mbhd","","",7,null],[12,"f_100mbfd","","",7,null],[12,"f_1gbhd","","",7,null],[12,"f_1gbfd","","",7,null],[12,"f_10gbfd","","",7,null],[12,"copper","","",7,null],[12,"fiber","","",7,null],[12,"autoneg","","",7,null],[12,"pause","","",7,null],[12,"pause_asym","","",7,null],[3,"PortConfig","","",null,null],[12,"down","","",8,null],[12,"no_stp","","",8,null],[12,"no_recv","","",8,null],[12,"no_recv_stp","","",8,null],[12,"no_flood","","",8,null],[12,"no_fwd","","",8,null],[12,"no_packet_in","","",8,null],[3,"PortDesc","","",null,null],[12,"port_no","","",9,null],[12,"hw_addr","","",9,null],[12,"name","","",9,null],[12,"config","","",9,null],[12,"state","","",9,null],[12,"curr","","",9,null],[12,"advertised","","",9,null],[12,"supported","","",9,null],[12,"peer","","",9,null],[3,"PortStatus","","",null,null],[12,"reason","","",10,null],[12,"desc","","",10,null],[4,"PseudoPort","","",null,null],[13,"PhysicalPort","","",11,null],[13,"InPort","","",11,null],[13,"Table","","",11,null],[13,"Normal","","",11,null],[13,"Flood","","",11,null],[13,"AllPorts","","",11,null],[13,"Controller","","",11,null],[13,"Local","","",11,null],[4,"Action","","",null,null],[13,"Output","","",12,null],[4,"Timeout","","",null,null],[13,"Permanent","","",13,null],[13,"ExpiresAfter","","",13,null],[4,"MsgCode","","",null,null],[13,"Hello","","",14,null],[13,"Error","","",14,null],[13,"EchoReq","","",14,null],[13,"EchoResp","","",14,null],[13,"Vendor","","",14,null],[13,"FeaturesReq","","",14,null],[13,"FeaturesResp","","",14,null],[13,"GetConfigReq","","",14,null],[13,"GetConfigResp","","",14,null],[13,"SetConfig","","",14,null],[13,"PacketIn","","",14,null],[13,"FlowRemoved","","",14,null],[13,"PortStatus","","",14,null],[13,"PacketOut","","",14,null],[13,"FlowMod","","",14,null],[13,"PortMod","","",14,null],[13,"StatsReq","","",14,null],[13,"StatsResp","","",14,null],[13,"BarrierReq","","",14,null],[13,"BarrierResp","","",14,null],[13,"QueueGetConfigReq","","",14,null],[13,"QueueGetConfigResp","","",14,null],[4,"FlowModCmd","","",null,null],[13,"AddFlow","","",15,null],[13,"ModFlow","","",15,null],[13,"ModStrictFlow","","",15,null],[13,"DeleteFlow","","",15,null],[13,"DeleteStrictFlow","","",15,null],[4,"Payload","","",null,null],[13,"Buffered","","",16,null],[13,"NotBuffered","","",16,null],[4,"PacketInReason","","",null,null],[13,"NoMatch","","",17,null],[13,"ExplicitSend","","",17,null],[4,"StpState","","",null,null],[13,"Listen","","",18,null],[13,"Learn","","",18,null],[13,"Forward","","",18,null],[13,"Block","","",18,null],[4,"PortReason","","",null,null],[13,"PortAdd","","",19,null],[13,"PortDelete","","",19,null],[13,"PortModify","","",19,null],[0,"message","","",null,null],[4,"Message","rust_ofp::openflow0x01::message","",null,null],[13,"Hello","","",20,null],[13,"EchoRequest","","",20,null],[13,"EchoReply","","",20,null],[13,"FeaturesReq","","",20,null],[13,"FeaturesReply","","",20,null],[13,"FlowMod","","",20,null],[13,"PacketIn","","",20,null],[13,"PortStatus","","",20,null],[5,"add_flow","","",null,{"inputs":[{"name":"u16"},{"name":"pattern"},{"name":"vec"}],"output":{"name":"flowmod"}}],[11,"marshal","","",20,{"inputs":[{"name":"u32"},{"name":"message"}],"output":{"name":"vec"}}],[11,"parse","","",20,null],[8,"MessageType","rust_ofp::openflow0x01","",null,null],[10,"size_of","","",21,{"inputs":[{"name":"self"}],"output":{"name":"usize"}}],[10,"parse","","",21,null],[10,"marshal","","",21,{"inputs":[{"name":"self"},{"name":"vec"}],"output":null}],[11,"clone","","",11,null],[11,"clone","","",12,null],[11,"size_of_sequence","","",12,{"inputs":[{"name":"vec"}],"output":{"name":"usize"}}],[11,"parse_sequence","","",12,{"inputs":[{"name":"cursor"}],"output":{"name":"vec"}}],[11,"clone","","",14,null],[11,"parse","","",3,null],[11,"size_of","","",4,{"inputs":[{"name":"flowmod"}],"output":{"name":"usize"}}],[11,"parse","","",4,null],[11,"marshal","","",4,{"inputs":[{"name":"flowmod"},{"name":"vec"}],"output":null}],[11,"size_of","","",16,{"inputs":[{"name":"payload"}],"output":{"name":"usize"}}],[11,"size_of","","",5,{"inputs":[{"name":"packetin"}],"output":{"name":"usize"}}],[11,"parse","","",5,null],[11,"marshal","","",5,{"inputs":[{"name":"packetin"},{"name":"vec"}],"output":null}],[11,"size_of","","",10,{"inputs":[],"output":{"name":"usize"}}],[11,"parse","","",10,null],[11,"marshal","","",10,{"inputs":[{"name":"portstatus"},{"name":"vec"}],"output":null}]],"paths":[[3,"OfpHeader"],[3,"Capabilities"],[3,"SupportedActions"],[3,"SwitchFeatures"],[3,"FlowMod"],[3,"PacketIn"],[3,"PortState"],[3,"PortFeatures"],[3,"PortConfig"],[3,"PortDesc"],[3,"PortStatus"],[4,"PseudoPort"],[4,"Action"],[4,"Timeout"],[4,"MsgCode"],[4,"FlowModCmd"],[4,"Payload"],[4,"PacketInReason"],[4,"StpState"],[4,"PortReason"],[4,"Message"],[8,"MessageType"]]};
searchIndex["rust_ofp_controller"] = {"doc":"","items":[],"paths":[]};
searchIndex["byteorder"] = {"doc":"This crate provides convenience methods for encoding and decoding numbers\nin either big-endian or little-endian order.","items":[[4,"BigEndian","byteorder","Defines big-endian serialization.",null,null],[4,"LittleEndian","","Defines little-endian serialization.",null,null],[6,"NetworkEndian","","Defines network byte order serialization.",null,null],[6,"NativeEndian","","Defines system native-endian serialization.",null,null],[8,"ReadBytesExt","","Extends `Read` with methods for reading numbers. (For `std::io`.)",null,null],[11,"read_u8","","Reads an unsigned 8 bit integer from the underlying reader.",0,null],[11,"read_i8","","Reads a signed 8 bit integer from the underlying reader.",0,null],[11,"read_u16","","Reads an unsigned 16 bit integer from the underlying reader.",0,null],[11,"read_i16","","Reads a signed 16 bit integer from the underlying reader.",0,null],[11,"read_u32","","Reads an unsigned 32 bit integer from the underlying reader.",0,null],[11,"read_i32","","Reads a signed 32 bit integer from the underlying reader.",0,null],[11,"read_u64","","Reads an unsigned 64 bit integer from the underlying reader.",0,null],[11,"read_i64","","Reads a signed 64 bit integer from the underlying reader.",0,null],[11,"read_uint","","Reads an unsigned n-bytes integer from the underlying reader.",0,null],[11,"read_int","","Reads a signed n-bytes integer from the underlying reader.",0,null],[11,"read_f32","","Reads a IEEE754 single-precision (4 bytes) floating point number from\nthe underlying reader.",0,null],[11,"read_f64","","Reads a IEEE754 double-precision (8 bytes) floating point number from\nthe underlying reader.",0,null],[8,"WriteBytesExt","","Extends `Write` with methods for writing numbers. (For `std::io`.)",null,null],[11,"write_u8","","Writes an unsigned 8 bit integer to the underlying writer.",1,null],[11,"write_i8","","Writes a signed 8 bit integer to the underlying writer.",1,null],[11,"write_u16","","Writes an unsigned 16 bit integer to the underlying writer.",1,null],[11,"write_i16","","Writes a signed 16 bit integer to the underlying writer.",1,null],[11,"write_u32","","Writes an unsigned 32 bit integer to the underlying writer.",1,null],[11,"write_i32","","Writes a signed 32 bit integer to the underlying writer.",1,null],[11,"write_u64","","Writes an unsigned 64 bit integer to the underlying writer.",1,null],[11,"write_i64","","Writes a signed 64 bit integer to the underlying writer.",1,null],[11,"write_uint","","Writes an unsigned n-bytes integer to the underlying writer.",1,null],[11,"write_int","","Writes a signed n-bytes integer to the underlying writer.",1,null],[11,"write_f32","","Writes a IEEE754 single-precision (4 bytes) floating point number to\nthe underlying writer.",1,null],[11,"write_f64","","Writes a IEEE754 double-precision (8 bytes) floating point number to\nthe underlying writer.",1,null],[8,"ByteOrder","","ByteOrder describes types that can serialize integers as bytes.",null,null],[10,"read_u16","","Reads an unsigned 16 bit integer from `buf`.",2,null],[10,"read_u32","","Reads an unsigned 32 bit integer from `buf`.",2,null],[10,"read_u64","","Reads an unsigned 64 bit integer from `buf`.",2,null],[10,"read_uint","","Reads an unsigned n-bytes integer from `buf`.",2,null],[10,"write_u16","","Writes an unsigned 16 bit integer `n` to `buf`.",2,null],[10,"write_u32","","Writes an unsigned 32 bit integer `n` to `buf`.",2,null],[10,"write_u64","","Writes an unsigned 64 bit integer `n` to `buf`.",2,null],[10,"write_uint","","Writes an unsigned integer `n` to `buf` using only `nbytes`.",2,null],[11,"read_i16","","Reads a signed 16 bit integer from `buf`.",2,null],[11,"read_i32","","Reads a signed 32 bit integer from `buf`.",2,null],[11,"read_i64","","Reads a signed 64 bit integer from `buf`.",2,null],[11,"read_int","","Reads a signed n-bytes integer from `buf`.",2,null],[11,"read_f32","","Reads a IEEE754 single-precision (4 bytes) floating point number.",2,null],[11,"read_f64","","Reads a IEEE754 double-precision (8 bytes) floating point number.",2,null],[11,"write_i16","","Writes a signed 16 bit integer `n` to `buf`.",2,null],[11,"write_i32","","Writes a signed 32 bit integer `n` to `buf`.",2,null],[11,"write_i64","","Writes a signed 64 bit integer `n` to `buf`.",2,null],[11,"write_int","","Writes a signed integer `n` to `buf` using only `nbytes`.",2,null],[11,"write_f32","","Writes a IEEE754 single-precision (4 bytes) floating point number.",2,null],[11,"write_f64","","Writes a IEEE754 double-precision (8 bytes) floating point number.",2,null],[11,"read_u16","","",3,null],[11,"read_u32","","",3,null],[11,"read_u64","","",3,null],[11,"read_uint","","",3,null],[11,"write_u16","","",3,null],[11,"write_u32","","",3,null],[11,"write_u64","","",3,null],[11,"write_uint","","",3,null],[11,"read_u16","","",4,null],[11,"read_u32","","",4,null],[11,"read_u64","","",4,null],[11,"read_uint","","",4,null],[11,"write_u16","","",4,null],[11,"write_u32","","",4,null],[11,"write_u64","","",4,null],[11,"write_uint","","",4,null],[11,"read_u8","","Reads an unsigned 8 bit integer from the underlying reader.",0,null],[11,"read_i8","","Reads a signed 8 bit integer from the underlying reader.",0,null],[11,"read_u16","","Reads an unsigned 16 bit integer from the underlying reader.",0,null],[11,"read_i16","","Reads a signed 16 bit integer from the underlying reader.",0,null],[11,"read_u32","","Reads an unsigned 32 bit integer from the underlying reader.",0,null],[11,"read_i32","","Reads a signed 32 bit integer from the underlying reader.",0,null],[11,"read_u64","","Reads an unsigned 64 bit integer from the underlying reader.",0,null],[11,"read_i64","","Reads a signed 64 bit integer from the underlying reader.",0,null],[11,"read_uint","","Reads an unsigned n-bytes integer from the underlying reader.",0,null],[11,"read_int","","Reads a signed n-bytes integer from the underlying reader.",0,null],[11,"read_f32","","Reads a IEEE754 single-precision (4 bytes) floating point number from\nthe underlying reader.",0,null],[11,"read_f64","","Reads a IEEE754 double-precision (8 bytes) floating point number from\nthe underlying reader.",0,null],[11,"write_u8","","Writes an unsigned 8 bit integer to the underlying writer.",1,null],[11,"write_i8","","Writes a signed 8 bit integer to the underlying writer.",1,null],[11,"write_u16","","Writes an unsigned 16 bit integer to the underlying writer.",1,null],[11,"write_i16","","Writes a signed 16 bit integer to the underlying writer.",1,null],[11,"write_u32","","Writes an unsigned 32 bit integer to the underlying writer.",1,null],[11,"write_i32","","Writes a signed 32 bit integer to the underlying writer.",1,null],[11,"write_u64","","Writes an unsigned 64 bit integer to the underlying writer.",1,null],[11,"write_i64","","Writes a signed 64 bit integer to the underlying writer.",1,null],[11,"write_uint","","Writes an unsigned n-bytes integer to the underlying writer.",1,null],[11,"write_int","","Writes a signed n-bytes integer to the underlying writer.",1,null],[11,"write_f32","","Writes a IEEE754 single-precision (4 bytes) floating point number to\nthe underlying writer.",1,null],[11,"write_f64","","Writes a IEEE754 double-precision (8 bytes) floating point number to\nthe underlying writer.",1,null]],"paths":[[8,"ReadBytesExt"],[8,"WriteBytesExt"],[8,"ByteOrder"],[4,"BigEndian"],[4,"LittleEndian"]]};
initSearch(searchIndex);
