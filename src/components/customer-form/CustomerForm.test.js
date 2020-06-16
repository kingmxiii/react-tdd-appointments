import React from 'react'
import { shallow, mount } from 'enzyme'
import CustomerForm from './CustomerForm'

const form = (wrapper, id) => wrapper.find(`form[data-test="${id}"]`)

const expectTobeInputFieldOfTypeText = formField => {
  expect(formField.length).toBe(1)
  expect(formField.name()).toBe('input')
  expect(formField.is('[type="text"]')).toBe(true)
}

describe('CustomerForm', () => {
  describe('new customer mode', () => {
    let wrapper
    let formComponent
    beforeEach(() => {
      wrapper = shallow(<CustomerForm />)
      formComponent = form(wrapper, 'customer-form')
    })

    it('renders a form', () => {
      expect(formComponent.length).toBe(1)
    })

    it('has a submit button', () => {
      const button = formComponent.find(`button[type="submit"]`)
      expect(button.length).toBe(1)
    })

    it('renders the first name field as a text box', () => {
      const firstNamefield = formComponent.find('[name="firstName"]')
      expectTobeInputFieldOfTypeText(firstNamefield)
    })
  })

  describe('existing customer', () => {
    let wrapper
    let formComponent

    const itRendersAsTextBox = fieldName => {
      it('renders field as a text box', () => {
        const field = formComponent.find(`[name="${fieldName}"]`)
        expectTobeInputFieldOfTypeText(field)
      })
    }

    const itIncludesTheExistingValue = (fieldName, value) => {
      it('includes the existing value for the field', () => {
        const field = formComponent.find(`[name="${fieldName}"]`)
        expect(field.props().value).toEqual(value)
      })
    }

    const itAssignMatchingLabelId = fieldName => {
      it('assigns an id that matches the label id to the field', () => {
        const field = formComponent.find(`[name="${fieldName}"]`)
        expect(field.props().id).toEqual(fieldName)
      })
    }

    const itRendersLabelForField = fieldName => {
      it('renders a label for the field', () => {
        const labelForField = formComponent.find(
          `label[htmlFor="${fieldName}"]`
        )
        expect(labelForField.length).toBe(1)
      })
    }

    const itSavesExistingValue = (fieldName, value) => {
      it('saves existing value when submitted', async () => {
        expect.hasAssertions()
        wrapper.setProps({
          onSubmit: customer => {
            expect(customer[fieldName]).toBe(value)
          },
        })
        await formComponent.simulate('submit')
      })
    }

    const itsSavesNewValue = (fieldName, value) => {
      it('saves new value when submitted', async () => {
        expect.hasAssertions()
        wrapper.setProps({
          onSubmit: customer => {
            expect(customer[fieldName]).toBe(value)
          },
        })
        const field = formComponent.find(`[name="${fieldName}"]`)
        await field.simulate('change', { target: { value, name: fieldName } })
        await formComponent.simulate('submit', { preventDefault: () => {} })
      })
    }

    beforeEach(() => {
      wrapper = mount(
        <CustomerForm
          firstName="Ashley"
          lastName="Smith"
          phoneNumber="7185554545"
          onSubmit={() => {}}
        />
      )
      formComponent = form(wrapper, 'customer-form')
    })

    it('renders a form', () => {
      expect(formComponent.length).toBe(1)
    })

    describe('first name field', () => {
      itRendersAsTextBox('firstName')
      itIncludesTheExistingValue('firstName', 'Ashley')
      itAssignMatchingLabelId('firstName')
      itRendersLabelForField('firstName')
      itSavesExistingValue('firstName', 'Ashley')
      itsSavesNewValue('firstName', 'Jamie')
    })

    describe('last name field', () => {
      itRendersAsTextBox('lastName')
      itIncludesTheExistingValue('lastName', 'Smith')
      itAssignMatchingLabelId('lastName')
      itRendersLabelForField('lastName')
      itSavesExistingValue('lastName', 'Smith')
      itsSavesNewValue('lastName', 'Jonhson')
    })

    describe('phone number field', () => {
      itRendersAsTextBox('phoneNumber')
      itIncludesTheExistingValue('phoneNumber', '7185554545')
      itAssignMatchingLabelId('phoneNumber')
      itRendersLabelForField('phoneNumber')
      itSavesExistingValue('phoneNumber', '7185554545')
      itsSavesNewValue('phoneNumber', '2121234040')
    })
  })
})
