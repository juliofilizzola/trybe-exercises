import React from 'react';
import { connect } from 'react-redux';
import personSendForm from '../actions/personSendForm';
import Data from '../data';

function FormsPerson({personInfo}) {
  return (
    <form>
     <fieldset>
        <label htmlFor="name">
          Seu nome:
          <input
            type="text"
            placeholder="Digite seu Nome"
            name="name"
            maxLength="40"
            onChange={personInfo}
            />
        </label>
        <label htmlFor="email">
          Email:
          <input
            onChange={personInfo}
            type="text"
            maxLength="11"
            name="email"
          />
        </label>
        <label htmlFor="cpf">
          Seu CPF:
          <input
            onChange={personInfo}
            type="text"
            maxLength="11"
            name="cpf"
          />
        </label>
        <label htmlFor="address">
          Seu Endereço:
          <input
            onChange={personInfo}
            type="text"
            maxLength="50"
            name="address"
          />
        </label>
        <label htmlFor="city">
          Sua Cidade:
          <input
            onChange={personInfo}
            type="text"
            isRequired
            maxLength="50"
            name="city"
          />
        </label>
        <label htmlFor="state">
          <select 
            name="state"
            onChange={personInfo}
          >
            { Data.map((value) => (<option value={value} key={value}>{value}</option>))}
          </select>
        </label>
        <label htmlFor="address">
          Casa:
          <input type="checkbox" onChange={personInfo} name="addressType" value="Casa"/>
        </label>
        <label htmlFor="address">
            AP:
          <input type="checkbox" onChange={personInfo} name="addressType" value="Apartamento" />
        </label>
     </fieldset>
    </form>
  )
}

const mapDispatchToProps = (dispatch) => ({
  personInfo: (state) => dispatch(personSendForm(state))
})

export default connect(null, mapDispatchToProps)(FormsPerson);
