// Code generated by protoc-gen-go. DO NOT EDIT.
// versions:
// 	protoc-gen-go v1.28.1
// 	protoc        v3.20.0
// source: mesh/v1alpha1/traffic_trace.proto

package v1alpha1

import (
	_ "github.com/kumahq/kuma/api/mesh"
	_ "github.com/kumahq/protoc-gen-kumadoc/proto"
	protoreflect "google.golang.org/protobuf/reflect/protoreflect"
	protoimpl "google.golang.org/protobuf/runtime/protoimpl"
	reflect "reflect"
	sync "sync"
)

const (
	// Verify that this generated code is sufficiently up-to-date.
	_ = protoimpl.EnforceVersion(20 - protoimpl.MinVersion)
	// Verify that runtime/protoimpl is sufficiently up-to-date.
	_ = protoimpl.EnforceVersion(protoimpl.MaxVersion - 20)
)

// TrafficTrace defines trace configuration for selected dataplanes.
type TrafficTrace struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	// List of selectors to match dataplanes.
	Selectors []*Selector `protobuf:"bytes,1,rep,name=selectors,proto3" json:"selectors,omitempty"`
	// Configuration of the tracing.
	Conf *TrafficTrace_Conf `protobuf:"bytes,3,opt,name=conf,proto3" json:"conf,omitempty"`
}

func (x *TrafficTrace) Reset() {
	*x = TrafficTrace{}
	if protoimpl.UnsafeEnabled {
		mi := &file_mesh_v1alpha1_traffic_trace_proto_msgTypes[0]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *TrafficTrace) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*TrafficTrace) ProtoMessage() {}

func (x *TrafficTrace) ProtoReflect() protoreflect.Message {
	mi := &file_mesh_v1alpha1_traffic_trace_proto_msgTypes[0]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use TrafficTrace.ProtoReflect.Descriptor instead.
func (*TrafficTrace) Descriptor() ([]byte, []int) {
	return file_mesh_v1alpha1_traffic_trace_proto_rawDescGZIP(), []int{0}
}

func (x *TrafficTrace) GetSelectors() []*Selector {
	if x != nil {
		return x.Selectors
	}
	return nil
}

func (x *TrafficTrace) GetConf() *TrafficTrace_Conf {
	if x != nil {
		return x.Conf
	}
	return nil
}

// Configuration defines settings of the tracing.
type TrafficTrace_Conf struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	// Backend defined in the Mesh entity.
	Backend string `protobuf:"bytes,1,opt,name=backend,proto3" json:"backend,omitempty"`
}

func (x *TrafficTrace_Conf) Reset() {
	*x = TrafficTrace_Conf{}
	if protoimpl.UnsafeEnabled {
		mi := &file_mesh_v1alpha1_traffic_trace_proto_msgTypes[1]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *TrafficTrace_Conf) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*TrafficTrace_Conf) ProtoMessage() {}

func (x *TrafficTrace_Conf) ProtoReflect() protoreflect.Message {
	mi := &file_mesh_v1alpha1_traffic_trace_proto_msgTypes[1]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use TrafficTrace_Conf.ProtoReflect.Descriptor instead.
func (*TrafficTrace_Conf) Descriptor() ([]byte, []int) {
	return file_mesh_v1alpha1_traffic_trace_proto_rawDescGZIP(), []int{0, 0}
}

func (x *TrafficTrace_Conf) GetBackend() string {
	if x != nil {
		return x.Backend
	}
	return ""
}

var File_mesh_v1alpha1_traffic_trace_proto protoreflect.FileDescriptor

var file_mesh_v1alpha1_traffic_trace_proto_rawDesc = []byte{
	0x0a, 0x21, 0x6d, 0x65, 0x73, 0x68, 0x2f, 0x76, 0x31, 0x61, 0x6c, 0x70, 0x68, 0x61, 0x31, 0x2f,
	0x74, 0x72, 0x61, 0x66, 0x66, 0x69, 0x63, 0x5f, 0x74, 0x72, 0x61, 0x63, 0x65, 0x2e, 0x70, 0x72,
	0x6f, 0x74, 0x6f, 0x12, 0x12, 0x6b, 0x75, 0x6d, 0x61, 0x2e, 0x6d, 0x65, 0x73, 0x68, 0x2e, 0x76,
	0x31, 0x61, 0x6c, 0x70, 0x68, 0x61, 0x31, 0x1a, 0x12, 0x6d, 0x65, 0x73, 0x68, 0x2f, 0x6f, 0x70,
	0x74, 0x69, 0x6f, 0x6e, 0x73, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x1a, 0x1c, 0x6d, 0x65, 0x73,
	0x68, 0x2f, 0x76, 0x31, 0x61, 0x6c, 0x70, 0x68, 0x61, 0x31, 0x2f, 0x73, 0x65, 0x6c, 0x65, 0x63,
	0x74, 0x6f, 0x72, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x1a, 0x0c, 0x63, 0x6f, 0x6e, 0x66, 0x69,
	0x67, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x22, 0x94, 0x02, 0x0a, 0x0c, 0x54, 0x72, 0x61, 0x66,
	0x66, 0x69, 0x63, 0x54, 0x72, 0x61, 0x63, 0x65, 0x12, 0x40, 0x0a, 0x09, 0x73, 0x65, 0x6c, 0x65,
	0x63, 0x74, 0x6f, 0x72, 0x73, 0x18, 0x01, 0x20, 0x03, 0x28, 0x0b, 0x32, 0x1c, 0x2e, 0x6b, 0x75,
	0x6d, 0x61, 0x2e, 0x6d, 0x65, 0x73, 0x68, 0x2e, 0x76, 0x31, 0x61, 0x6c, 0x70, 0x68, 0x61, 0x31,
	0x2e, 0x53, 0x65, 0x6c, 0x65, 0x63, 0x74, 0x6f, 0x72, 0x42, 0x04, 0x88, 0xb5, 0x18, 0x01, 0x52,
	0x09, 0x73, 0x65, 0x6c, 0x65, 0x63, 0x74, 0x6f, 0x72, 0x73, 0x12, 0x39, 0x0a, 0x04, 0x63, 0x6f,
	0x6e, 0x66, 0x18, 0x03, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x25, 0x2e, 0x6b, 0x75, 0x6d, 0x61, 0x2e,
	0x6d, 0x65, 0x73, 0x68, 0x2e, 0x76, 0x31, 0x61, 0x6c, 0x70, 0x68, 0x61, 0x31, 0x2e, 0x54, 0x72,
	0x61, 0x66, 0x66, 0x69, 0x63, 0x54, 0x72, 0x61, 0x63, 0x65, 0x2e, 0x43, 0x6f, 0x6e, 0x66, 0x52,
	0x04, 0x63, 0x6f, 0x6e, 0x66, 0x1a, 0x20, 0x0a, 0x04, 0x43, 0x6f, 0x6e, 0x66, 0x12, 0x18, 0x0a,
	0x07, 0x62, 0x61, 0x63, 0x6b, 0x65, 0x6e, 0x64, 0x18, 0x01, 0x20, 0x01, 0x28, 0x09, 0x52, 0x07,
	0x62, 0x61, 0x63, 0x6b, 0x65, 0x6e, 0x64, 0x3a, 0x65, 0xaa, 0x8c, 0x89, 0xa6, 0x01, 0x16, 0x0a,
	0x14, 0x54, 0x72, 0x61, 0x66, 0x66, 0x69, 0x63, 0x54, 0x72, 0x61, 0x63, 0x65, 0x52, 0x65, 0x73,
	0x6f, 0x75, 0x72, 0x63, 0x65, 0xaa, 0x8c, 0x89, 0xa6, 0x01, 0x0e, 0x12, 0x0c, 0x54, 0x72, 0x61,
	0x66, 0x66, 0x69, 0x63, 0x54, 0x72, 0x61, 0x63, 0x65, 0xaa, 0x8c, 0x89, 0xa6, 0x01, 0x06, 0x22,
	0x04, 0x6d, 0x65, 0x73, 0x68, 0xaa, 0x8c, 0x89, 0xa6, 0x01, 0x04, 0x52, 0x02, 0x10, 0x01, 0xaa,
	0x8c, 0x89, 0xa6, 0x01, 0x11, 0x3a, 0x0f, 0x0a, 0x0d, 0x74, 0x72, 0x61, 0x66, 0x66, 0x69, 0x63,
	0x2d, 0x74, 0x72, 0x61, 0x63, 0x65, 0xaa, 0x8c, 0x89, 0xa6, 0x01, 0x02, 0x68, 0x01, 0x42, 0x4f,
	0x5a, 0x28, 0x67, 0x69, 0x74, 0x68, 0x75, 0x62, 0x2e, 0x63, 0x6f, 0x6d, 0x2f, 0x6b, 0x75, 0x6d,
	0x61, 0x68, 0x71, 0x2f, 0x6b, 0x75, 0x6d, 0x61, 0x2f, 0x61, 0x70, 0x69, 0x2f, 0x6d, 0x65, 0x73,
	0x68, 0x2f, 0x76, 0x31, 0x61, 0x6c, 0x70, 0x68, 0x61, 0x31, 0x8a, 0xb5, 0x18, 0x21, 0x50, 0x01,
	0xa2, 0x01, 0x0c, 0x54, 0x72, 0x61, 0x66, 0x66, 0x69, 0x63, 0x54, 0x72, 0x61, 0x63, 0x65, 0xf2,
	0x01, 0x0d, 0x74, 0x72, 0x61, 0x66, 0x66, 0x69, 0x63, 0x2d, 0x74, 0x72, 0x61, 0x63, 0x65, 0x62,
	0x06, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x33,
}

var (
	file_mesh_v1alpha1_traffic_trace_proto_rawDescOnce sync.Once
	file_mesh_v1alpha1_traffic_trace_proto_rawDescData = file_mesh_v1alpha1_traffic_trace_proto_rawDesc
)

func file_mesh_v1alpha1_traffic_trace_proto_rawDescGZIP() []byte {
	file_mesh_v1alpha1_traffic_trace_proto_rawDescOnce.Do(func() {
		file_mesh_v1alpha1_traffic_trace_proto_rawDescData = protoimpl.X.CompressGZIP(file_mesh_v1alpha1_traffic_trace_proto_rawDescData)
	})
	return file_mesh_v1alpha1_traffic_trace_proto_rawDescData
}

var file_mesh_v1alpha1_traffic_trace_proto_msgTypes = make([]protoimpl.MessageInfo, 2)
var file_mesh_v1alpha1_traffic_trace_proto_goTypes = []interface{}{
	(*TrafficTrace)(nil),      // 0: kuma.mesh.v1alpha1.TrafficTrace
	(*TrafficTrace_Conf)(nil), // 1: kuma.mesh.v1alpha1.TrafficTrace.Conf
	(*Selector)(nil),          // 2: kuma.mesh.v1alpha1.Selector
}
var file_mesh_v1alpha1_traffic_trace_proto_depIdxs = []int32{
	2, // 0: kuma.mesh.v1alpha1.TrafficTrace.selectors:type_name -> kuma.mesh.v1alpha1.Selector
	1, // 1: kuma.mesh.v1alpha1.TrafficTrace.conf:type_name -> kuma.mesh.v1alpha1.TrafficTrace.Conf
	2, // [2:2] is the sub-list for method output_type
	2, // [2:2] is the sub-list for method input_type
	2, // [2:2] is the sub-list for extension type_name
	2, // [2:2] is the sub-list for extension extendee
	0, // [0:2] is the sub-list for field type_name
}

func init() { file_mesh_v1alpha1_traffic_trace_proto_init() }
func file_mesh_v1alpha1_traffic_trace_proto_init() {
	if File_mesh_v1alpha1_traffic_trace_proto != nil {
		return
	}
	file_mesh_v1alpha1_selector_proto_init()
	if !protoimpl.UnsafeEnabled {
		file_mesh_v1alpha1_traffic_trace_proto_msgTypes[0].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*TrafficTrace); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_mesh_v1alpha1_traffic_trace_proto_msgTypes[1].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*TrafficTrace_Conf); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
	}
	type x struct{}
	out := protoimpl.TypeBuilder{
		File: protoimpl.DescBuilder{
			GoPackagePath: reflect.TypeOf(x{}).PkgPath(),
			RawDescriptor: file_mesh_v1alpha1_traffic_trace_proto_rawDesc,
			NumEnums:      0,
			NumMessages:   2,
			NumExtensions: 0,
			NumServices:   0,
		},
		GoTypes:           file_mesh_v1alpha1_traffic_trace_proto_goTypes,
		DependencyIndexes: file_mesh_v1alpha1_traffic_trace_proto_depIdxs,
		MessageInfos:      file_mesh_v1alpha1_traffic_trace_proto_msgTypes,
	}.Build()
	File_mesh_v1alpha1_traffic_trace_proto = out.File
	file_mesh_v1alpha1_traffic_trace_proto_rawDesc = nil
	file_mesh_v1alpha1_traffic_trace_proto_goTypes = nil
	file_mesh_v1alpha1_traffic_trace_proto_depIdxs = nil
}
