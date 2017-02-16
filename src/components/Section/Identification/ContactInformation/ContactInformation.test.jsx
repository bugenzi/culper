import React from 'react'
import { mount } from 'enzyme'
import ContactInformation from './ContactInformation'

describe('The ContactInformation component', () => {
  const validElements = 5

  it('no error on empty', () => {
    let blurs = 0
    const expected = {
      name: 'input-focus',
      onBlur: function (event) {
        blurs++
      }
    }
    const component = mount(<ContactInformation {...expected} />)
    expect(component.find('.usa-input-error-label').length).toEqual(0)
    expect(blurs).toEqual(0)
  })

  it('formats phone numbers appropriately', () => {
    const expected = {
      PhoneNumbers: [
        {
          Telephone: {
            type: 'Domestic',
            number: '2028675309',
            extension: '1234'
          }
        },
        {
          Telephone: {
            type: 'DSN',
            number: '8675309'
          }
        },
        {
          Telephone: {
            type: 'International',
            number: '0011234567890',
            extension: '1234'
          }
        }
      ]
    }
    const component = mount(<ContactInformation {...expected} />)
    expect(component.find('.table-cell strong').length).toEqual(3)
    expect(component.find('.table-cell strong').at(0).text()).toEqual('(202) 867-5309 x1234')
    expect(component.find('.table-cell strong').at(1).text()).toEqual('867-5309')
    expect(component.find('.table-cell strong').at(2).text()).toEqual('+001 1234567890 x1234')
  })
})
