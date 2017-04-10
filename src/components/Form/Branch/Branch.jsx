import React from 'react'
import { Field, Radio, RadioGroup } from '../../Form'

/**
 * Branch is a component that stores whether Yes/No options were selected. It contains a callback
 * function that can be used to be upated when a button is clicked. The button labels and values are
 * configurable by passing in the appropriate property which are defined in the Branch.defaultProps object.
 */
export default class Branch extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      value: props.value
    }
  }

  yesNoClicked (val, event) {
    this.setState({ value: val }, () => {
      if (this.props.onUpdate) {
        this.props.onUpdate(val, event)
      }
    })
  }

  render () {
    const klass = `branch ${this.props.className || ''}`.trim()

    return (
      <div className={klass}>
        <div className="content">
          {this.props.children}
        </div>
        <div>
          <Field help={this.props.help}
                 adjustFor="buttons"
                 shrink={true}>
            <label>{this.props.label || ''}</label>
            <RadioGroup className="option-list branch" selectedValue={this.props.value}>
              <Radio name={this.props.name}
                     label={this.props.yesLabel}
                     value={this.props.yesValue}
                     className="yes"
                     onChange={this.yesNoClicked.bind(this, this.props.yesValue)}
                     onValidate={this.props.onValidate}
                     />
              <Radio name={this.props.name}
                     label={this.props.noLabel}
                     value={this.props.noValue}
                     className="no"
                     onChange={this.yesNoClicked.bind(this, this.props.noValue)}
                     onValidate={this.props.onValidate}
                     />
            </RadioGroup>
          </Field>
        </div>
      </div>
    )
  }
}

// Default values for properties that are not specified
Branch.defaultProps = {
  yesLabel: 'Yes',
  yesValue: 'Yes',
  noLabel: 'No',
  noValue: 'No',
  value: null
}
