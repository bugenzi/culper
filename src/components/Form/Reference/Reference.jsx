import React from 'react'
import { i18n } from '../../../config'
import ValidationElement from '../ValidationElement'
import Svg from '../Svg'
import Field from '../Field'
import Name from '../Name'
import Comments from '../Comments'
import Text from '../Text'
import DateControl from '../DateControl'
import Telephone from '../Telephone'
import Email from '../Email'
import Address from '../Address'
import Checkbox from '../Checkbox'
import CheckboxGroup from '../CheckboxGroup'
import Show from '../Show'
import NotApplicable from '../NotApplicable'

export default class Reference extends ValidationElement {
  constructor (props) {
    super(props)

    this.state = {
      FullName: props.FullName,
      LastContact: props.LastContact,
      Comments: props.Comments,
      Relationship: props.Relationship,
      RelationshipOther: props.RelationshipOther,
      Phone: props.Phone,
      Email: props.Email,
      EmailNotApplicable: props.EmailNotApplicable,
      Address: props.Address,
      focus: props.focus,
      error: props.error,
      valid: props.valid,
      errorCodes: []
    }

    this.handleRelationshipChange = this.handleRelationshipChange.bind(this)
    this.updateRelationshipOther = this.updateRelationshipOther.bind(this)
    this.updateEmailNotApplicable = this.updateEmailNotApplicable.bind(this)
  }

  /**
   * Handle any updates and bubble them up.
   */
  onUpdate (name, values) {
    this.setState({ [name]: values }, () => {
      if (this.props.onUpdate) {
        this.props.onUpdate({
          name: this.props.name,
          FullName: this.state.FullName,
          LastContact: this.state.LastContact,
          Comments: this.state.Comments,
          Relationship: this.state.Relationship,
          RelationshipOther: this.state.RelationshipOther,
          Phone: this.state.Phone,
          Email: this.state.Email,
          EmailNotApplicable: this.state.EmailNotApplicable,
          Address: this.state.Address
        })
      }
    })
  }

  /**
   * Handle the change event for relationships.
   */
  handleRelationshipChange (event) {
    let relations = event.target.value
    let selected = [...this.state.Relationship]

    if (selected.includes(relations)) {
      // Remove the relationship if it was previously selected
      selected.splice(selected.indexOf(relations), 1)
    } else {
      // Add the new relationship
      selected.push(relations)
    }

    this.onUpdate('Relationship', selected)
  }

  updateRelationshipOther (values) {
    this.onUpdate('RelationshipOther', values)
  }

  updateEmailNotApplicable (values) {
    this.onUpdate('EmailNotApplicable', values)
  }

  render () {
    const klass = `reference ${this.props.className || ''}`.trim()
    const prefix = `${this.props.localePrefix || ''}${this.props.localePrefix ? '.' : ''}`.trim()

    return (
      <div className={klass}>
        <Field title={i18n.t(`${prefix}reference.heading.name`)}>
          <Name name="FullName"
                prefix={`${this.props.prefix}.name`}
                {...this.state.FullName}
                onUpdate={this.onUpdate.bind(this, 'FullName')}
                onValidate={this.props.onValidate}
                />
        </Field>

        <Field title={i18n.t(`${prefix}reference.heading.contact`)}
               help={`${prefix}reference.help.contact`}
               adjustFor="labels"
               shrink={true}>
          <DateControl name="LastContact"
                       {...this.state.LastContact}
                       onUpdate={this.onUpdate.bind(this, 'LastContact')}
                       onValidate={this.props.onValidate}
                       />
        </Field>

        <Field title={i18n.t(`${prefix}reference.heading.relationship`)}
               help={`${prefix}reference.help.relationship`}
               comments={true}
               commentsName="Comments"
               commentsValue={this.state.Comments}
               commentsAdd={`${prefix}reference.label.relationship.comments`}
               onUpdate={this.onUpdate.bind(this, 'Comments')}
               adjustFor="labels"
               shrink={true}>
          <label>{i18n.t(`${prefix}reference.label.relationship.title`)}</label>
          <CheckboxGroup className="relationship option-list eapp-extend-labels"
                         selectedValues={this.state.Relationship}>
            <Checkbox name="relationship-neighbor"
                      label={i18n.t(`${prefix}reference.label.relationship.neighbor`)}
                      value="Neighbor"
                      onChange={this.handleRelationshipChange}
                      >
              <div className="relationship-icon neighbor">
                <Svg src="img/neighbor-icon.svg" />
              </div>
            </Checkbox>
            <Checkbox name="relationship-friend"
                      label={i18n.t(`${prefix}reference.label.relationship.friend`)}
                      value="Friend"
                      onChange={this.handleRelationshipChange}
                      >
              <div className="relationship-icon friend">
                <Svg src="img/friend-icon.svg" />
              </div>
            </Checkbox>
            <Checkbox name="relationship-landlord"
                      label={i18n.t(`${prefix}reference.label.relationship.landlord`)}
                      value="Landlord"
                      onChange={this.handleRelationshipChange}
                      >
              <div className="relationship-icon landlord">
                <Svg src="img/landlord-icon.svg" />
              </div>
            </Checkbox>
            <Checkbox name="relationship-business"
                      label={i18n.t(`${prefix}reference.label.relationship.business`)}
                      value="Business"
                      onChange={this.handleRelationshipChange}
                      >
              <div className="relationship-icon business">
                <Svg src="img/business-associate-icon.svg" />
              </div>
            </Checkbox>
            <Checkbox name="relationship-other"
                      label={i18n.t(`${prefix}reference.label.relationship.other`)}
                      value="Other"
                      onChange={this.handleRelationshipChange}
                      >
              <div className="relationship-icon other">
                <Svg src="img/other-icon.svg" />
              </div>
            </Checkbox>
          </CheckboxGroup>
          <Show when={this.state.Relationship.some(x => { return x === 'Other' })}>
            <Text name="RelationshipOther"
                  label={i18n.t(`${prefix}reference.label.relationship.explanation`)}
                  maxlength="100"
                  className="relationship-other"
                  {...this.state.RelationshipOther}
                  onUpdate={this.updateRelationshipOther}
                  onValidate={this.props.handleValidation}
                  />
          </Show>
        </Field>

        <h2>{i18n.t(`${prefix}reference.heading.correspondence`)}</h2>
        <p>{i18n.t(`${prefix}reference.para.correspondence`)}</p>

        <Field title={i18n.t(`${prefix}reference.heading.phone`)}
               help={`${prefix}reference.help.phone`}
               adjustFor="labels">
          <Telephone name="Phone"
                     {...this.state.Phone}
                     onUpdate={this.onUpdate.bind(this, 'Phone')}
                     onValidate={this.props.onValidate}
                     />
        </Field>

        <Field title={i18n.t(`${prefix}reference.heading.email`)}
               help={`${prefix}reference.help.email`}
               adjustFor="buttons">
          <NotApplicable name="EmailNotApplicable"
                         {...this.state.EmailNotApplicable}
                         label={i18n.t('reference.label.idk')}
                         or={i18n.m('reference.para.or')}
                         onUpdate={this.updateEmailNotApplicable}>
            <Email name="Email"
                   {...this.state.Email}
                   className="reference-email"
                   label={i18n.t(`${prefix}reference.label.email`)}
                   onUpdate={this.onUpdate.bind(this, 'Email')}
                   onValidate={this.props.onValidate}
                   />
          </NotApplicable>
        </Field>

        <Field title={i18n.t(`${prefix}reference.heading.address`)}
               help={`${prefix}reference.help.address`}
               adjustFor="labels">
          <p>{i18n.t(`${prefix}reference.para.address`)}</p>
          <Address name="Address"
                   {...this.state.Address}
                   label={i18n.t(`${prefix}reference.label.address`)}
                   onUpdate={this.onUpdate.bind(this, 'Address')}
                   onValidate={this.props.onValidate}
                   />
        </Field>
      </div>
    )
  }
}

Reference.defaultProps = {
  FullName: {},
  LastContact: {},
  Comments: {},
  Relationship: [],
  RelationshipOther: '',
  Phone: {},
  Email: {},
  EmailNotApplicable: {},
  Address: {},
  focus: false,
  error: false,
  valid: false,
  prefix: 'reference'
}