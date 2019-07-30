package konvoyinjector_test

import (
	"io/ioutil"
	"path/filepath"

	. "github.com/onsi/ginkgo"
	. "github.com/onsi/gomega"

	"github.com/Kong/konvoy/components/konvoy-control-plane/pkg/config"
	konvoy_injector "github.com/Kong/konvoy/components/konvoy-control-plane/pkg/config/app/konvoy-injector"
)

var _ = Describe("Config", func() {

	It("should be loadable from configuration file", func() {
		// given
		cfg := konvoy_injector.Config{}

		// when
		err := config.Load(filepath.Join("testdata", "valid-config.input.yaml"), &cfg)

		// then
		Expect(err).ToNot(HaveOccurred())

		// and
		Expect(cfg.WebHookServer.Address).To(Equal("127.0.0.2"))
		Expect(cfg.WebHookServer.Port).To(Equal(uint32(8442)))
		Expect(cfg.WebHookServer.CertDir).To(Equal("/var/secret/konvoy-injector"))
		// and
		Expect(cfg.Injector.ControlPlane.XdsServer.Address).To(Equal("xds-server"))
		Expect(cfg.Injector.ControlPlane.XdsServer.Port).To(Equal(uint32(9876)))
		Expect(cfg.Injector.ControlPlane.ApiServer.URL).To(Equal("https://api-server:8765"))
		// and
		Expect(cfg.Injector.SidecarContainer.Image).To(Equal("konvoy-sidecar:latest"))
		Expect(cfg.Injector.SidecarContainer.RedirectPort).To(Equal(uint32(1234)))
		Expect(cfg.Injector.SidecarContainer.UID).To(Equal(int64(2345)))
		Expect(cfg.Injector.SidecarContainer.GID).To(Equal(int64(3456)))
		Expect(cfg.Injector.SidecarContainer.AdminPort).To(Equal(uint32(45678)))
		// and
		Expect(cfg.Injector.InitContainer.Image).To(Equal("konvoy-init:latest"))
	})

	It("should have consistent defaults", func() {
		// given
		cfg := konvoy_injector.DefaultConfig()

		// when
		actual, err := config.ToYAML(&cfg)
		// then
		Expect(err).ToNot(HaveOccurred())

		// when
		expected, err := ioutil.ReadFile(filepath.Join("testdata", "default-config.golden.yaml"))
		// then
		Expect(err).ToNot(HaveOccurred())
		// and
		Expect(actual).To(MatchYAML(expected))
	})

	It("should have validators", func() {
		// given
		cfg := konvoy_injector.Config{}

		// when
		err := config.Load(filepath.Join("testdata", "invalid-config.input.yaml"), &cfg)

		// then
		Expect(err).To(MatchError(`Invalid configuration: .WebHookServer is not valid: .Address must be either empty or a valid IPv4/IPv6 address; .Port must be in the range [0, 65535]; .CertDir must be non-empty; .Injector is not valid: .ControlPlane is not valid: .XdsServer is not valid: .Address must be non-empty; .Port must be in the range [0, 65535]; .ApiServer is not valid: .URL must be a valid absolute URI; .SidecarContainer is not valid: .Image must be non-empty; .RedirectPort must be in the range [0, 65535]; .AdminPort must be in the range [0, 65535]; .InitContainer is not valid: .Image must be non-empty`))
	})
})
