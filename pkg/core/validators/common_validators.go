package validators

import (
	"fmt"
	"regexp"
	"time"

	"github.com/asaskevich/govalidator"
	"github.com/shopspring/decimal"
	k8s "k8s.io/apimachinery/pkg/apis/meta/v1"
	"k8s.io/apimachinery/pkg/util/intstr"

	common_api "github.com/kumahq/kuma/api/common/v1alpha1"
)

func ValidateDurationNotNegative(path PathBuilder, duration *k8s.Duration) ValidationError {
	var err ValidationError
	if duration == nil {
		err.AddViolationAt(path, MustBeDefined)
		return err
	}
	if duration.Duration < 0 {
		err.AddViolationAt(path, WhenDefinedHasToBeNonNegative)
	}
	return err
}

func ValidateDurationNotNegativeOrNil(path PathBuilder, duration *k8s.Duration) ValidationError {
	var err ValidationError
	if duration == nil {
		return err
	}

	if duration.Duration < 0 {
		err.AddViolationAt(path, WhenDefinedHasToBeNonNegative)
	}

	return err
}

func ValidateDurationGreaterThanZero(path PathBuilder, duration k8s.Duration) ValidationError {
	var err ValidationError
	if duration.Duration <= 0 {
		err.AddViolationAt(path, MustBeDefinedAndGreaterThanZero)
	}
	return err
}

func ValidateDurationGreaterThanZeroOrNil(path PathBuilder, duration *k8s.Duration) ValidationError {
	var err ValidationError
	if duration == nil {
		return err
	}

	if duration.Duration <= 0 {
		err.AddViolationAt(path, WhenDefinedHasToBeGreaterThanZero)
	}

	return err
}

func ValidateValueGreaterThanZero(path PathBuilder, value int32) ValidationError {
	var err ValidationError
	if value <= 0 {
		err.AddViolationAt(path, MustBeDefinedAndGreaterThanZero)
	}
	return err
}

func ValidateValueGreaterThanZeroOrNil(path PathBuilder, value *int32) ValidationError {
	var err ValidationError
	if value == nil {
		return err
	}
	if *value <= 0 {
		err.AddViolationAt(path, MustBeDefinedAndGreaterThanZero)
	}
	return err
}

func ValidateIntPercentageOrNil(path PathBuilder, percentage *int32) ValidationError {
	var err ValidationError
	if percentage == nil {
		return err
	}

	if *percentage < 0 || *percentage > 100 {
		err.AddViolationAt(path, HasToBeInUintPercentageRange)
	}

	return err
}

func ValidatePercentage(path PathBuilder, percentage *intstr.IntOrString) ValidationError {
	var verr ValidationError
	if percentage == nil {
		verr.AddViolationAt(path, MustBeDefined)
		return verr
	}

	dec, err := common_api.NewDecimalFromIntOrString(*percentage)
	if err != nil {
		verr.AddViolationAt(path, StringHasToBeValidNumber)
	}

	if dec.LessThan(decimal.Zero) || dec.GreaterThan(decimal.NewFromInt(100)) {
		verr.AddViolationAt(path, HasToBeInPercentageRange)
	}
	return verr
}

func ValidatePercentageOrNil(path PathBuilder, percentage *intstr.IntOrString) ValidationError {
	var verr ValidationError
	if percentage == nil {
		return verr
	}

	dec, err := common_api.NewDecimalFromIntOrString(*percentage)
	if err != nil {
		verr.AddViolationAt(path, StringHasToBeValidNumber)
	}

	if dec.LessThan(decimal.Zero) || dec.GreaterThan(decimal.NewFromInt(100)) {
		verr.AddViolationAt(path, HasToBeInPercentageRange)
	}
	return verr
}

func ValidateUInt32PercentageOrNil(path PathBuilder, percentage *uint32) ValidationError {
	var err ValidationError
	if percentage == nil {
		return err
	}

	if *percentage > 100 {
		err.AddViolationAt(path, HasToBeInUintPercentageRange)
	}

	return err
}

func ValidateStringDefined(path PathBuilder, value string) ValidationError {
	var err ValidationError
	if value == "" {
		err.AddViolationAt(path, MustBeDefined)
	}

	return err
}

func ValidatePathOrNil(path PathBuilder, filePath *string) ValidationError {
	var err ValidationError
	if filePath == nil {
		return err
	}

	isFilePath, _ := govalidator.IsFilePath(*filePath)
	if !isFilePath {
		err.AddViolationAt(path, WhenDefinedHasToBeValidPath)
	}

	return err
}

func ValidateStatusCode(path PathBuilder, status int32) ValidationError {
	var err ValidationError
	if status < 100 || status >= 600 {
		err.AddViolationAt(path, "must be in range [100, 600)")
	}

	return err
}

func ValidateDurationGreaterThan(path PathBuilder, duration *k8s.Duration, minDuration time.Duration) ValidationError {
	var err ValidationError
	if duration == nil {
		err.AddViolationAt(path, MustBeDefined)
		return err
	}

	if duration.Duration <= minDuration {
		err.AddViolationAt(path, fmt.Sprintf("%s: %s", HasToBeGreaterThan, minDuration))
	}

	return err
}

func ValidateIntegerGreaterThanZeroOrNil(path PathBuilder, value *uint32) ValidationError {
	var err ValidationError
	if value == nil {
		return err
	}

	return ValidateIntegerGreaterThan(path, *value, 0)
}

func ValidateIntegerGreaterThan(path PathBuilder, value uint32, minValue uint32) ValidationError {
	var err ValidationError
	if value <= minValue {
		err.AddViolationAt(path, fmt.Sprintf("%s %d", HasToBeGreaterThan, minValue))
	}

	return err
}

func ValidateBandwidth(path PathBuilder, value string) ValidationError {
	var err ValidationError
	if value == "" {
		err.AddViolationAt(path, MustBeDefined)
		return err
	}
	if matched, _ := regexp.MatchString(`\d*\s?[gmk]bps`, value); !matched {
		err.AddViolationAt(path, "has to be in kbps/mbps/gbps units")
	}
	return err
}

func ValidateNil[T any](path PathBuilder, t *T, msg string) ValidationError {
	var err ValidationError
	if t != nil {
		err.AddViolationAt(path, msg)
	}
	return err
}
