import React from 'react'
import { i18n } from '../../../../config'
import SubsectionElement from '../../SubsectionElement'
import { LegalInvestigationsHistoryValidator } from '../../../../validators'
import { Summary, DateSummary } from '../../../Summary'
import { Accordion, Branch, Show, Field, NotApplicable, DateControl,
         Text } from '../../../Form'
import InvestigatingAgency from './InvestigatingAgency'
import ClearanceLevel from './ClearanceLevel'

export default class History extends SubsectionElement {
  constructor (props) {
    super(props)

    this.update = this.update.bind(this)
    this.updateBranch = this.updateBranch.bind(this)
    this.updateList = this.updateList.bind(this)
  }

  update (queue) {
    this.props.onUpdate({
      List: this.props.List,
      ListBranch: this.props.ListBranch,
      HasHistory: this.props.HasHistory,
      ...queue
    })
  }

  updateList (values) {
    this.update({
      List: values.items,
      ListBranch: values.branch
    })
  }

  updateBranch (values) {
    this.update({
      HasHistory: values,
      List: values === 'Yes' ? this.props.List : [],
      ListBranch: values === 'Yes' ? this.props.ListBranch : ''
    })
  }

  summary (item, index) {
    const o = item || {}
    const dates = DateSummary(o.Granted)
    const agency = (o.Agency || {}).Agency || ''

    return Summary({
      type: i18n.t('legal.investigations.history.collection.item'),
      index: index,
      left: agency,
      right: dates,
      placeholder: i18n.m('legal.investigations.history.collection.unknown')
    })
  }

  render () {
    return (
      <div className="investigations-history">
        <Branch name="has_history"
                label={i18n.t('legal.investigations.history.heading.title')}
                labelSize="h2"
                className="legal-investigations-history-has-history"
                value={this.props.HasHistory}
                warning={true}
                onError={this.handleError}
                required={this.props.required}
                onUpdate={this.updateBranch}
                scrollIntoView={this.props.scrollIntoView}>
        </Branch>

        <Show when={this.props.HasHistory === 'Yes'}>
          <Accordion defaultState={this.props.defaultState}
                     items={this.props.List}
                     scrollToBottom={this.props.scrollToBottom}
                     branch={this.props.ListBranch}
                     summary={this.summary}
                     onUpdate={this.updateList}
                     onError={this.handleError}
                     description={i18n.t('legal.investigations.history.collection.description')}
                     appendTitle={i18n.t('legal.investigations.history.collection.appendTitle')}
                     appendLabel={i18n.t('legal.investigations.history.collection.appendLabel')}
                     required={this.props.required}
                     scrollIntoView={this.props.scrollIntoView}>
            <Field title={i18n.t('legal.investigations.history.heading.agency')}
                   adjustFor="big-buttons"
                   scrollIntoView={this.props.scrollIntoView}>
              <NotApplicable name="AgencyNotApplicable"
                             or={i18n.m('legal.investigations.history.para.or')}
                             label={i18n.t('legal.investigations.history.label.idk')}
                             required={this.props.required}
                             bind={true}>
                <InvestigatingAgency name="Agency"
                                     className="legal-investigations-history-agency"
                                     bind={true}
                                     required={this.props.required}
                                     scrollIntoView={this.props.scrollIntoView}
                                     />
              </NotApplicable>
            </Field>

            <Field title={i18n.t('legal.investigations.history.heading.completed')}
                   help="legal.investigations.history.help.completed"
                   adjustFor="datecontrol"
                   scrollIntoView={this.props.scrollIntoView}>
              <NotApplicable name="CompletedNotApplicable"
                             or={i18n.m('legal.investigations.history.para.or')}
                             label={i18n.t('legal.investigations.history.label.idk')}
                             required={this.props.required}
                             bind={true}>
                <DateControl name="Completed"
                             className="legal-investigations-history-completed"
                             bind={true}
                             required={this.props.required}
                             />
              </NotApplicable>
            </Field>

            <Field title={i18n.t('legal.investigations.history.heading.issued')}
                   adjustFor="text"
                   scrollIntoView={this.props.scrollIntoView}>
              <Text name="Issued"
                    className="legal-investigations-history-issued"
                    bind={true}
                    required={this.props.required}
                    />
            </Field>

            <Field title={i18n.t('legal.investigations.history.heading.granted')}
                   help="legal.investigations.history.help.granted"
                   adjustFor="datecontrol"
                   scrollIntoView={this.props.scrollIntoView}>
              <NotApplicable name="GrantedNotApplicable"
                             or={i18n.m('legal.investigations.history.para.or')}
                             label={i18n.t('legal.investigations.history.label.idk')}
                             required={this.props.required}
                             bind={true}>
                <DateControl name="Granted"
                             className="legal-investigations-history-granted"
                             bind={true}
                             required={this.props.required}
                             />
              </NotApplicable>
            </Field>

            <Field title={i18n.t('legal.investigations.history.heading.clearance')}
                   adjustFor="big-button"
                   scrollIntoView={this.props.scrollIntoView}>
              <NotApplicable name="clearanceNotApplicable"
                             or={i18n.m('legal.investigations.history.para.or')}
                             label={i18n.t('legal.investigations.history.label.idk')}
                             required={this.props.required}
                             bind={true}>
                <ClearanceLevel name="Clearance"
                                className="legal-investigations-history-clearance"
                                bind={true}
                                required={this.props.required}
                                scrollIntoView={this.props.scrollIntoView}
                                />
              </NotApplicable>
            </Field>
          </Accordion>
        </Show>
      </div>
    )
  }
}

History.defaultProps = {
  name: 'history',
  HasHistory: '',
  List: [],
  ListBranch: '',
  defaultState: true,
  onUpdate: (queue) => {},
  onError: (value, arr) => { return arr },
  section: 'legal',
  subsection: 'investigations/history',
  dispatch: () => {},
  validator: (state, props) => {
    return new LegalInvestigationsHistoryValidator(state, props).isValid()
  },
  scrollToBottom: ''
}
