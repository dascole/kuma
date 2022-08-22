// Code generated by protoc-gen-go. DO NOT EDIT.
// versions:
// 	protoc-gen-go v1.28.1
// 	protoc        v3.20.0
// source: mesh/v1alpha1/virtual_outbound.proto

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

// VirtualOutbound defines how to generate hostname ports combination.
type VirtualOutbound struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	// List of selectors to match dataplanes that this policy applies to
	Selectors []*Selector           `protobuf:"bytes,1,rep,name=selectors,proto3" json:"selectors,omitempty"`
	Conf      *VirtualOutbound_Conf `protobuf:"bytes,2,opt,name=conf,proto3" json:"conf,omitempty"`
}

func (x *VirtualOutbound) Reset() {
	*x = VirtualOutbound{}
	if protoimpl.UnsafeEnabled {
		mi := &file_mesh_v1alpha1_virtual_outbound_proto_msgTypes[0]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *VirtualOutbound) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*VirtualOutbound) ProtoMessage() {}

func (x *VirtualOutbound) ProtoReflect() protoreflect.Message {
	mi := &file_mesh_v1alpha1_virtual_outbound_proto_msgTypes[0]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use VirtualOutbound.ProtoReflect.Descriptor instead.
func (*VirtualOutbound) Descriptor() ([]byte, []int) {
	return file_mesh_v1alpha1_virtual_outbound_proto_rawDescGZIP(), []int{0}
}

func (x *VirtualOutbound) GetSelectors() []*Selector {
	if x != nil {
		return x.Selectors
	}
	return nil
}

func (x *VirtualOutbound) GetConf() *VirtualOutbound_Conf {
	if x != nil {
		return x.Conf
	}
	return nil
}

type VirtualOutbound_Conf struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	// Host the gotemplate to generate the hostname from the Parameters map
	Host string `protobuf:"bytes,1,opt,name=host,proto3" json:"host,omitempty"`
	// Port the gotemplate to generate the port from the Parameters map
	Port string `protobuf:"bytes,2,opt,name=port,proto3" json:"port,omitempty"`
	// Parameters a mapping between tag keys and template parameter key. This
	// must always contain at least `kuma.io/service`
	Parameters []*VirtualOutbound_Conf_TemplateParameter `protobuf:"bytes,3,rep,name=parameters,proto3" json:"parameters,omitempty"`
}

func (x *VirtualOutbound_Conf) Reset() {
	*x = VirtualOutbound_Conf{}
	if protoimpl.UnsafeEnabled {
		mi := &file_mesh_v1alpha1_virtual_outbound_proto_msgTypes[1]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *VirtualOutbound_Conf) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*VirtualOutbound_Conf) ProtoMessage() {}

func (x *VirtualOutbound_Conf) ProtoReflect() protoreflect.Message {
	mi := &file_mesh_v1alpha1_virtual_outbound_proto_msgTypes[1]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use VirtualOutbound_Conf.ProtoReflect.Descriptor instead.
func (*VirtualOutbound_Conf) Descriptor() ([]byte, []int) {
	return file_mesh_v1alpha1_virtual_outbound_proto_rawDescGZIP(), []int{0, 0}
}

func (x *VirtualOutbound_Conf) GetHost() string {
	if x != nil {
		return x.Host
	}
	return ""
}

func (x *VirtualOutbound_Conf) GetPort() string {
	if x != nil {
		return x.Port
	}
	return ""
}

func (x *VirtualOutbound_Conf) GetParameters() []*VirtualOutbound_Conf_TemplateParameter {
	if x != nil {
		return x.Parameters
	}
	return nil
}

// A mapping between a template parameter and a dataplane outbound tag name.
type VirtualOutbound_Conf_TemplateParameter struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	// Name the name of the template parameter (must be alphanumeric).
	Name string `protobuf:"bytes,1,opt,name=name,proto3" json:"name,omitempty"`
	// TagKey the name of the tag in the Kuma outbound (optional if absent it
	// will use Name).
	TagKey string `protobuf:"bytes,2,opt,name=tag_key,json=tagKey,proto3" json:"tag_key,omitempty"`
}

func (x *VirtualOutbound_Conf_TemplateParameter) Reset() {
	*x = VirtualOutbound_Conf_TemplateParameter{}
	if protoimpl.UnsafeEnabled {
		mi := &file_mesh_v1alpha1_virtual_outbound_proto_msgTypes[2]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *VirtualOutbound_Conf_TemplateParameter) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*VirtualOutbound_Conf_TemplateParameter) ProtoMessage() {}

func (x *VirtualOutbound_Conf_TemplateParameter) ProtoReflect() protoreflect.Message {
	mi := &file_mesh_v1alpha1_virtual_outbound_proto_msgTypes[2]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use VirtualOutbound_Conf_TemplateParameter.ProtoReflect.Descriptor instead.
func (*VirtualOutbound_Conf_TemplateParameter) Descriptor() ([]byte, []int) {
	return file_mesh_v1alpha1_virtual_outbound_proto_rawDescGZIP(), []int{0, 0, 0}
}

func (x *VirtualOutbound_Conf_TemplateParameter) GetName() string {
	if x != nil {
		return x.Name
	}
	return ""
}

func (x *VirtualOutbound_Conf_TemplateParameter) GetTagKey() string {
	if x != nil {
		return x.TagKey
	}
	return ""
}

var File_mesh_v1alpha1_virtual_outbound_proto protoreflect.FileDescriptor

var file_mesh_v1alpha1_virtual_outbound_proto_rawDesc = []byte{
	0x0a, 0x24, 0x6d, 0x65, 0x73, 0x68, 0x2f, 0x76, 0x31, 0x61, 0x6c, 0x70, 0x68, 0x61, 0x31, 0x2f,
	0x76, 0x69, 0x72, 0x74, 0x75, 0x61, 0x6c, 0x5f, 0x6f, 0x75, 0x74, 0x62, 0x6f, 0x75, 0x6e, 0x64,
	0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x12, 0x12, 0x6b, 0x75, 0x6d, 0x61, 0x2e, 0x6d, 0x65, 0x73,
	0x68, 0x2e, 0x76, 0x31, 0x61, 0x6c, 0x70, 0x68, 0x61, 0x31, 0x1a, 0x12, 0x6d, 0x65, 0x73, 0x68,
	0x2f, 0x6f, 0x70, 0x74, 0x69, 0x6f, 0x6e, 0x73, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x1a, 0x1c,
	0x6d, 0x65, 0x73, 0x68, 0x2f, 0x76, 0x31, 0x61, 0x6c, 0x70, 0x68, 0x61, 0x31, 0x2f, 0x73, 0x65,
	0x6c, 0x65, 0x63, 0x74, 0x6f, 0x72, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x1a, 0x0c, 0x63, 0x6f,
	0x6e, 0x66, 0x69, 0x67, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x22, 0xe6, 0x03, 0x0a, 0x0f, 0x56,
	0x69, 0x72, 0x74, 0x75, 0x61, 0x6c, 0x4f, 0x75, 0x74, 0x62, 0x6f, 0x75, 0x6e, 0x64, 0x12, 0x40,
	0x0a, 0x09, 0x73, 0x65, 0x6c, 0x65, 0x63, 0x74, 0x6f, 0x72, 0x73, 0x18, 0x01, 0x20, 0x03, 0x28,
	0x0b, 0x32, 0x1c, 0x2e, 0x6b, 0x75, 0x6d, 0x61, 0x2e, 0x6d, 0x65, 0x73, 0x68, 0x2e, 0x76, 0x31,
	0x61, 0x6c, 0x70, 0x68, 0x61, 0x31, 0x2e, 0x53, 0x65, 0x6c, 0x65, 0x63, 0x74, 0x6f, 0x72, 0x42,
	0x04, 0x88, 0xb5, 0x18, 0x01, 0x52, 0x09, 0x73, 0x65, 0x6c, 0x65, 0x63, 0x74, 0x6f, 0x72, 0x73,
	0x12, 0x42, 0x0a, 0x04, 0x63, 0x6f, 0x6e, 0x66, 0x18, 0x02, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x28,
	0x2e, 0x6b, 0x75, 0x6d, 0x61, 0x2e, 0x6d, 0x65, 0x73, 0x68, 0x2e, 0x76, 0x31, 0x61, 0x6c, 0x70,
	0x68, 0x61, 0x31, 0x2e, 0x56, 0x69, 0x72, 0x74, 0x75, 0x61, 0x6c, 0x4f, 0x75, 0x74, 0x62, 0x6f,
	0x75, 0x6e, 0x64, 0x2e, 0x43, 0x6f, 0x6e, 0x66, 0x42, 0x04, 0x88, 0xb5, 0x18, 0x01, 0x52, 0x04,
	0x63, 0x6f, 0x6e, 0x66, 0x1a, 0xe4, 0x01, 0x0a, 0x04, 0x43, 0x6f, 0x6e, 0x66, 0x12, 0x18, 0x0a,
	0x04, 0x68, 0x6f, 0x73, 0x74, 0x18, 0x01, 0x20, 0x01, 0x28, 0x09, 0x42, 0x04, 0x88, 0xb5, 0x18,
	0x01, 0x52, 0x04, 0x68, 0x6f, 0x73, 0x74, 0x12, 0x18, 0x0a, 0x04, 0x70, 0x6f, 0x72, 0x74, 0x18,
	0x02, 0x20, 0x01, 0x28, 0x09, 0x42, 0x04, 0x88, 0xb5, 0x18, 0x01, 0x52, 0x04, 0x70, 0x6f, 0x72,
	0x74, 0x12, 0x60, 0x0a, 0x0a, 0x70, 0x61, 0x72, 0x61, 0x6d, 0x65, 0x74, 0x65, 0x72, 0x73, 0x18,
	0x03, 0x20, 0x03, 0x28, 0x0b, 0x32, 0x3a, 0x2e, 0x6b, 0x75, 0x6d, 0x61, 0x2e, 0x6d, 0x65, 0x73,
	0x68, 0x2e, 0x76, 0x31, 0x61, 0x6c, 0x70, 0x68, 0x61, 0x31, 0x2e, 0x56, 0x69, 0x72, 0x74, 0x75,
	0x61, 0x6c, 0x4f, 0x75, 0x74, 0x62, 0x6f, 0x75, 0x6e, 0x64, 0x2e, 0x43, 0x6f, 0x6e, 0x66, 0x2e,
	0x54, 0x65, 0x6d, 0x70, 0x6c, 0x61, 0x74, 0x65, 0x50, 0x61, 0x72, 0x61, 0x6d, 0x65, 0x74, 0x65,
	0x72, 0x42, 0x04, 0x88, 0xb5, 0x18, 0x01, 0x52, 0x0a, 0x70, 0x61, 0x72, 0x61, 0x6d, 0x65, 0x74,
	0x65, 0x72, 0x73, 0x1a, 0x46, 0x0a, 0x11, 0x54, 0x65, 0x6d, 0x70, 0x6c, 0x61, 0x74, 0x65, 0x50,
	0x61, 0x72, 0x61, 0x6d, 0x65, 0x74, 0x65, 0x72, 0x12, 0x18, 0x0a, 0x04, 0x6e, 0x61, 0x6d, 0x65,
	0x18, 0x01, 0x20, 0x01, 0x28, 0x09, 0x42, 0x04, 0x88, 0xb5, 0x18, 0x01, 0x52, 0x04, 0x6e, 0x61,
	0x6d, 0x65, 0x12, 0x17, 0x0a, 0x07, 0x74, 0x61, 0x67, 0x5f, 0x6b, 0x65, 0x79, 0x18, 0x02, 0x20,
	0x01, 0x28, 0x09, 0x52, 0x06, 0x74, 0x61, 0x67, 0x4b, 0x65, 0x79, 0x3a, 0x66, 0xaa, 0x8c, 0x89,
	0xa6, 0x01, 0x19, 0x0a, 0x17, 0x56, 0x69, 0x72, 0x74, 0x75, 0x61, 0x6c, 0x4f, 0x75, 0x74, 0x62,
	0x6f, 0x75, 0x6e, 0x64, 0x52, 0x65, 0x73, 0x6f, 0x75, 0x72, 0x63, 0x65, 0xaa, 0x8c, 0x89, 0xa6,
	0x01, 0x11, 0x12, 0x0f, 0x56, 0x69, 0x72, 0x74, 0x75, 0x61, 0x6c, 0x4f, 0x75, 0x74, 0x62, 0x6f,
	0x75, 0x6e, 0x64, 0xaa, 0x8c, 0x89, 0xa6, 0x01, 0x06, 0x22, 0x04, 0x6d, 0x65, 0x73, 0x68, 0xaa,
	0x8c, 0x89, 0xa6, 0x01, 0x04, 0x52, 0x02, 0x10, 0x01, 0xaa, 0x8c, 0x89, 0xa6, 0x01, 0x14, 0x3a,
	0x12, 0x0a, 0x10, 0x76, 0x69, 0x72, 0x74, 0x75, 0x61, 0x6c, 0x2d, 0x6f, 0x75, 0x74, 0x62, 0x6f,
	0x75, 0x6e, 0x64, 0x42, 0x55, 0x5a, 0x28, 0x67, 0x69, 0x74, 0x68, 0x75, 0x62, 0x2e, 0x63, 0x6f,
	0x6d, 0x2f, 0x6b, 0x75, 0x6d, 0x61, 0x68, 0x71, 0x2f, 0x6b, 0x75, 0x6d, 0x61, 0x2f, 0x61, 0x70,
	0x69, 0x2f, 0x6d, 0x65, 0x73, 0x68, 0x2f, 0x76, 0x31, 0x61, 0x6c, 0x70, 0x68, 0x61, 0x31, 0x8a,
	0xb5, 0x18, 0x27, 0x50, 0x01, 0xa2, 0x01, 0x0f, 0x56, 0x69, 0x72, 0x74, 0x75, 0x61, 0x6c, 0x4f,
	0x75, 0x74, 0x62, 0x6f, 0x75, 0x6e, 0x64, 0xf2, 0x01, 0x10, 0x76, 0x69, 0x72, 0x74, 0x75, 0x61,
	0x6c, 0x2d, 0x6f, 0x75, 0x74, 0x62, 0x6f, 0x75, 0x6e, 0x64, 0x62, 0x06, 0x70, 0x72, 0x6f, 0x74,
	0x6f, 0x33,
}

var (
	file_mesh_v1alpha1_virtual_outbound_proto_rawDescOnce sync.Once
	file_mesh_v1alpha1_virtual_outbound_proto_rawDescData = file_mesh_v1alpha1_virtual_outbound_proto_rawDesc
)

func file_mesh_v1alpha1_virtual_outbound_proto_rawDescGZIP() []byte {
	file_mesh_v1alpha1_virtual_outbound_proto_rawDescOnce.Do(func() {
		file_mesh_v1alpha1_virtual_outbound_proto_rawDescData = protoimpl.X.CompressGZIP(file_mesh_v1alpha1_virtual_outbound_proto_rawDescData)
	})
	return file_mesh_v1alpha1_virtual_outbound_proto_rawDescData
}

var file_mesh_v1alpha1_virtual_outbound_proto_msgTypes = make([]protoimpl.MessageInfo, 3)
var file_mesh_v1alpha1_virtual_outbound_proto_goTypes = []interface{}{
	(*VirtualOutbound)(nil),                        // 0: kuma.mesh.v1alpha1.VirtualOutbound
	(*VirtualOutbound_Conf)(nil),                   // 1: kuma.mesh.v1alpha1.VirtualOutbound.Conf
	(*VirtualOutbound_Conf_TemplateParameter)(nil), // 2: kuma.mesh.v1alpha1.VirtualOutbound.Conf.TemplateParameter
	(*Selector)(nil),                               // 3: kuma.mesh.v1alpha1.Selector
}
var file_mesh_v1alpha1_virtual_outbound_proto_depIdxs = []int32{
	3, // 0: kuma.mesh.v1alpha1.VirtualOutbound.selectors:type_name -> kuma.mesh.v1alpha1.Selector
	1, // 1: kuma.mesh.v1alpha1.VirtualOutbound.conf:type_name -> kuma.mesh.v1alpha1.VirtualOutbound.Conf
	2, // 2: kuma.mesh.v1alpha1.VirtualOutbound.Conf.parameters:type_name -> kuma.mesh.v1alpha1.VirtualOutbound.Conf.TemplateParameter
	3, // [3:3] is the sub-list for method output_type
	3, // [3:3] is the sub-list for method input_type
	3, // [3:3] is the sub-list for extension type_name
	3, // [3:3] is the sub-list for extension extendee
	0, // [0:3] is the sub-list for field type_name
}

func init() { file_mesh_v1alpha1_virtual_outbound_proto_init() }
func file_mesh_v1alpha1_virtual_outbound_proto_init() {
	if File_mesh_v1alpha1_virtual_outbound_proto != nil {
		return
	}
	file_mesh_v1alpha1_selector_proto_init()
	if !protoimpl.UnsafeEnabled {
		file_mesh_v1alpha1_virtual_outbound_proto_msgTypes[0].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*VirtualOutbound); i {
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
		file_mesh_v1alpha1_virtual_outbound_proto_msgTypes[1].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*VirtualOutbound_Conf); i {
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
		file_mesh_v1alpha1_virtual_outbound_proto_msgTypes[2].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*VirtualOutbound_Conf_TemplateParameter); i {
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
			RawDescriptor: file_mesh_v1alpha1_virtual_outbound_proto_rawDesc,
			NumEnums:      0,
			NumMessages:   3,
			NumExtensions: 0,
			NumServices:   0,
		},
		GoTypes:           file_mesh_v1alpha1_virtual_outbound_proto_goTypes,
		DependencyIndexes: file_mesh_v1alpha1_virtual_outbound_proto_depIdxs,
		MessageInfos:      file_mesh_v1alpha1_virtual_outbound_proto_msgTypes,
	}.Build()
	File_mesh_v1alpha1_virtual_outbound_proto = out.File
	file_mesh_v1alpha1_virtual_outbound_proto_rawDesc = nil
	file_mesh_v1alpha1_virtual_outbound_proto_goTypes = nil
	file_mesh_v1alpha1_virtual_outbound_proto_depIdxs = nil
}
