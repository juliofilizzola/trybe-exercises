import React from 'react'

export default function ProfessionalFielset() {

  return (
    <div>
      <fieldset>
        <label htmlFor="resume">
          <textarea
            name="resume"
            maxLength="1000"
            // onChange={}
            required
          />
        </label>
        <label htmlFor="role">
          <input
            name="role"
            maxLength="40"
            // onChange={}
            onMouseEnter={() => {
              alert('Preencha com cuidado essa informação.')
            }}
            required
          />
        </label>
        <label htmlFor="roleDescription">
          <textarea
            name="roleDescription"
            maxLength="500"
            // onChange={}
          />
        </label>
      </fieldset>
    </div>
  )
}