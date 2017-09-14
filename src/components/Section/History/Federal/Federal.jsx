import React from 'react'
import { i18n } from '../../../../config'
import { FederalServiceValidator } from '../../../../validators'
import SubsectionElement from '../../SubsectionElement'
import { Branch, Show, Accordion, Field, DateRange, Text, Location } from '../../../Form'
import { Summary, DateSummary } from '../../../Summary'

export default class Federal extends SubsectionElement {
  constructor (props) {
    super(props)

    this.update = this.update.bind(this)
    this.updateBranch = this.updateBranch.bind(this)
    this.updateList = this.updateList.bind(this)
  }

  update (queue) {
    this.props.onUpdate({
      HasFederalService: this.props.HasFederalService,
      List: this.props.List,
      ListBranch: this.props.ListBranch,
      ...queue
    })
  }

  updateBranch (value, event) {
    this.update({
      HasFederalService: value,
      List: value === 'Yes' ? this.props.List : [],
      ListBranch: value === 'Yes' ? this.props.ListBranch : ''
    })
  }

  updateList (values) {
    this.update({
      List: values.items,
      ListBranch: values.branch
    })
  }

  /**
   * Assists in rendering the summary section.
   */
  summary (item, index) {
    const agency = item && item.Name && item.Name.value ? item.Name.value : ''
    const dates = DateSummary(item.Dates)

    return Summary({
      type: i18n.t('history.federal.collection.summary.item'),
      index: index,
      left: agency,
      right: dates,
      placeholder: i18n.m('history.federal.collection.summary.unknown')
    })
  }

  render () {
    return (
      <div className="federal">
        <Field title={i18n.t('history.federal.title')}
               titleSize="h2"
               className="no-margin-bottom"
               />

        <Branch name="has_federalservice"
                label={i18n.t('history.federal.heading.branch')}
                labelSize="h2"
                help="history.federal.help.branch"
                value={this.props.HasFederalService}
                warning={true}
                onUpdate={this.updateBranch}
                onError={this.handleError}
                required={this.props.required}
                scrollIntoView={this.props.scrollIntoView}>
        </Branch>
        <Show when={this.props.HasFederalService === 'Yes'}>
          <Accordion items={this.props.List}
                     branch={this.props.ListBranch}
                     defaultState={this.props.defaultState}
                     onUpdate={this.updateList}
                     onError={this.handleError}
                     summary={this.summary}
                     description={i18n.t('history.federal.collection.summary.title')}
                     appendTitle={i18n.t('history.federal.collection.appendTitle')}
                     appendLabel={i18n.t('history.federal.collection.append')}
                     required={this.props.required}
                     scrollIntoView={this.props.scrollIntoView}>
            <Field title={i18n.t('history.federal.heading.dates')}
                   help="history.federal.help.dates"
                   adjustFor="daterange"
                   scrollIntoView={this.props.scrollIntoView}>
              <DateRange name="Dates"
                         bind={true}
                         required={this.props.required}
                         />
            </Field>

            <Field title={i18n.t('history.federal.heading.name')}
                   className="federal-agency"
                   scrollIntoView={this.props.scrollIntoView}>
              <Text name="Name"
                    bind={true}
                    required={this.props.required}
                    />
            </Field>

            <Field title={i18n.t('history.federal.heading.position')}
                   className="federal-position"
                   scrollIntoView={this.props.scrollIntoView}>
              <Text name="Position"
                    bind={true}
                    required={this.props.required}
                    />
            </Field>

            <Field title={i18n.t('history.federal.heading.address')}
                   help="history.federal.help.address"
                   className="federal-agency-address"
                   adjustFor="address"
                   scrollIntoView={this.props.scrollIntoView}>
              <Location name="Address"
                        layout={Location.ADDRESS}
                        geocode={true}
                        addressBooks={this.props.addressBooks}
                        addressBook="Agency"
                        dispatch={this.props.dispatch}
                        bind={true}
                        required={this.props.required}
                        />
            </Field>
          </Accordion>
        </Show>
      </div>
    )
  }
}

Federal.defaultProps = {
  HasFederalService: '',
  List: [],
  ListBranch: '',
  onUpdate: (queue) => {},
  onError: (value, arr) => { return arr },
  section: 'history',
  subsection: 'federal',
  addressBooks: {},
  dispatch: () => {},
  validator: (state, props) => {
    return new FederalServiceValidator(props, props).isValid()
  },
  defaultState: true
}
