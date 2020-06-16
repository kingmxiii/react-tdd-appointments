import React from 'react'

const CustomerForm = ({ firstName, lastName, phoneNumber, onSubmit }) => {
  const [customer, setCustomer] = React.useState({
    firstName,
    lastName,
    phoneNumber,
  })

  const handleChange = ({ target }) => {
    setCustomer(customer => ({
      ...customer,
      [target.name]: target.value,
    }))
  }

  return (
    <form
      id="customer"
      data-test="customer-form"
      onSubmit={e => {
        e.preventDefault()
        onSubmit(customer)
      }}
    >
      <label htmlFor="firstName">First Name</label>
      <input
        id="firstName"
        name="firstName"
        type="text"
        value={customer.firstName}
        onChange={e => handleChange(e)}
      />

      <label htmlFor="lastName">Last Name</label>
      <input
        id="lastName"
        name="lastName"
        type="text"
        value={customer.lastName}
        onChange={e => handleChange(e)}
      />

      <label htmlFor="phoneNumber">Last Name</label>
      <input
        id="phoneNumber"
        name="phoneNumber"
        type="text"
        value={customer.phoneNumber}
        onChange={e => handleChange(e)}
      />
      <input type="submit" value="Add" />
    </form>
  )
}
export default CustomerForm
