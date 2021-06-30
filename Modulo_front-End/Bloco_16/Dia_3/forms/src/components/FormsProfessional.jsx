import React from 'react';
import { connect } from 'react-redux';
import profSendForm from '../actions/profSendForm'


function ProfessionalFieldset({profInfo}) {

  return (
    <div>
      <fieldset>
        <label htmlFor="resume">
          <textarea
            name="resume"
            maxLength="1000"
            onChange={profInfo}
            required
          />
        </label>
        <label htmlFor="role">
          <input
            name="role"
            maxLength="40"
            onChange={profInfo}
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
            onChange={profInfo}
          />
        </label>
      </fieldset>
    </div>
  )
}

const mapDispatchToProps = (dispatch) => ({
  profInfo: (state) => dispatch(profSendForm(state))
})

export default connect(null, mapDispatchToProps)(ProfessionalFieldset);
