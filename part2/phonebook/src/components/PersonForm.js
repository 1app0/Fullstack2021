import React from 'react'

const PersonForm = ({
  handleSubmit,
  handleChangeNumber,
  handleChangeName,
  newName,
  newNumber,
}) => {
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <h2>Add a new person to the phonebook</h2>
          name:{' '}
          <input type="text" onChange={handleChangeName} value={newName} />
          <br />
          number:{' '}
          <input type="text" onChange={handleChangeNumber} value={newNumber} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
    </div>
  )
}

export default PersonForm
