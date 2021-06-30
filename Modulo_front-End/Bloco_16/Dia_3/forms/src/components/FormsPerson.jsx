import React from 'react'
import Data from '../data';

export default function FormsPerson() {
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
            />
        </label>
        <label htmlFor="cpf">
          Seu CPF:
          <input
            type="text"
            isRequired
            maxLength="11"
            id="cpf"
          />
        </label>
        <label htmlFor="address">
          Seu Endereço:
          <input
            type="text"
            isRequired
            maxLength="50"
            id="address"
          />
        </label>
        <label htmlFor="city">
          Sua Cidade:
          <input
            type="text"
            isRequired
            maxLength="50"
            id="city"
          />
        </label>
        <label htmlFor="state">
          <select id="state">
            { Data.map((value) => (<option value={value} key={value}>{value}</option>))}
          </select>
        </label>
        <label htmlFor="address">
          Casa:
          <input type="checkbox" name="address" id="" value="Casa"/>
          AP:
          <input type="checkbox" name="address" id="" value="Apartamento" />
        </label>
     </fieldset>
    </form>
  )
}
