import React from 'react';
import { connect } from 'react-redux';
import personSendForm from '../actions/personSendForm';
import Data from '../data';

export default function FormsPerson({personInfo}) {
  return (
    <form>
     <fieldset>
        <label htmlFor="name">
          Seu nome:
          <input
            type="text"
            placeholder="Digite seu Nome"
            id="name"
            isRequired
            maxLength="40"
            onChange={personInfo}
            />
        </label>
        <label htmlFor="cpf">
          Seu CPF:
          <input
            onChange={personInfo}
            type="text"
            isRequired
            maxLength="11"
            id="cpf"
          />
        </label>
        <label htmlFor="address">
          Seu Endereço:
          <input
            onChange={personInfo}
            type="text"
            isRequired
            maxLength="50"
            id="address"
          />
        </label>
        <label htmlFor="city">
          Sua Cidade:
          <input
            onChange={personInfo}
            type="text"
            isRequired
            maxLength="50"
            id="city"
          />
        </label>
        <label htmlFor="state">
          <select 
            id="state"
            onChange={personInfo}
          >
            { Data.map((value) => (<option value={value} key={value}>{value}</option>))}
          </select>
        </label>
        <label htmlFor="address">
          Casa:
          <input type="checkbox" onChange={personInfo} name="address" value="Casa"/>
        </label>
        <label htmlFor="address">
            AP:
          <input type="checkbox" onChange={personInfo} name="address" value="Apartamento" />
        </label>
     </fieldset>
    </form>
  )
}

const mapDispatchToProps = (dispatch) => ({
  personInfo: (state) => dispatch(personSendForm(state))
})

connect(null, mapDispatchToProps)(FormsPerson);
