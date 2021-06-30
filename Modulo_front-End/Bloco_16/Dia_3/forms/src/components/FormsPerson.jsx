import React from 'react'

export default function FormsPerson() {
  return (
    <form>
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
    </form>
  )
}
