import AddressValidator from './address'
import DateRangeValidator from './daterange'
import TreatmentValidator from './treatment'
import { validGenericTextfield, validGenericMonthYear } from './helpers'

export default class DiagnosisValidator {
  constructor (state = {}, props = {}) {
    this.condition = state.Condition
    this.diagnosed = state.Diagnosed
    this.treatment = state.Treatment
    this.effective = state.Effective
    this.treatmentFacility = state.TreatmentFacility
    this.explanation = state.Explanation
  }

  validEffective () {
    if (this.effective !== 'Yes' && this.effective !== 'No') {
      return false
    }

    if (this.effective === 'No' && !validGenericTextfield(this.explanation)) {
      return false
    }

    return true
  }

  isValid () {
    return validGenericTextfield(this.condition) &&
      new DateRangeValidator(this.diagnosed).isValid() &&
      new TreatmentValidator(this.treatment).isValid() &&
      new TreatmentValidator(this.treatmentFacility).isValid() &&
      this.validEffective()
  }
}

