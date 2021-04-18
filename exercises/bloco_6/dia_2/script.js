const fist = document.querySelector("#input-Estado");

const statesOfBr = [
  "Selecione um Estado",
  "Acre",
  "Alagoas",
  "Amapá",
  "Amazonas",
  "Bahia",
  "Ceará",
  "Distrito Federal",
  "Espírito Santo",
  "Goiás",
  "Maranhão",
  "Mato Grosso",
  "Mato Grosso do Sul",
  "Minas Gerais",
  "Pará",
  "Paraíba",
  "Paraná",
  "Pernambuco",
  "Piauí",
  "Rio de Janeiro",
  "Rio Grande do Norte",
  "Rio Grande do Sul",
  "Rondônia",
  "Roraima",
  "Santa Catarina",
  "São Paulo",
  "Sergipe",
  "Tocantins",
];

function states(Estados) {
  for (let index = 0; index < Estados.length; index += 1) {
    const input = document.createElement("option");
    input.innerText = Estados[index];
    input.value = Estados[index];
    fist.appendChild(input);
  }
}

states(statesOfBr);

const del = document.querySelector("#delete");
const forms = document.querySelector("#formu");
const nameInput = document.querySelector("#name-completed");
const emailInput = document.querySelector("#e-mai");
const cpfInput = document.querySelector("#CPF");
const enderecoInput = document.querySelector("#ende");
const cityInput = document.querySelector("#city");
const stadeInput = document.querySelector("#input-Estado");
const resumoInput = document.querySelector("#textA");
const cargoInput = document.querySelector("#Cargo");
const DcargoInput = document.querySelector("#DScarog");
const dataInput = document.querySelector("#data");

const enviar = document.querySelector("#enviar");

function save(event) {
  event.preventDefault();
  localStorage.setItem("Email", emailInput.value);
  localStorage.setItem("CPF", cpfInput.value);
  localStorage.setItem("endereço", enderecoInput.value);
  localStorage.setItem("Cidade", cityInput.value);
  localStorage.setItem("Estado", stadeInput.value);
  localStorage.setItem("Resumo do CV", resumoInput.value);
  localStorage.setItem("Cargo", cargoInput.value);
  localStorage.setItem("Descrição do Cargo", DcargoInput.value);
  localStorage.setItem("Data", dataInput.value);
}

enviar.addEventListener("click", save);

function clearAll() {
  const formElements = document.querySelectorAll("input");
  for (let index = 0; index < formElements.length; index += 1) {
    const userInput = formElements[index];
    userInput.value = "";
    resumoInput.value = "";
  }
}

del.addEventListener("click", clearAll);

new window.JustValidate(".js-form", {
  rules: {
    name: {
      required: true,
      minLength: 3,
      maxLength: 40,
    },
    email: {
      required: true,
      email: true,
      maxLength: 50,
    },
    cpf: {
      required: true,
      maxLength: 11,
    },
    address: {
      required: true,
      maxLength: 200,
    },
    city: {
      required: true,
      maxLength: 28,
    },
    state: {
      required: true,
    },
    radio: {
      required: true,
    },
    text: {
      required: true,
      maxLength: 1000,
    },
    position: {
      required: true,
      maxLength: 40,
    },
    description: {
      required: true,
      maxLength: 500,
    },
    date: {
      required: true,
    },
  },
  messages: {
    name: {
      required: "O campo de nome é obrigatório.",
      maxLength: "O limite é de 40 caracteres.",
    },
    email: {
      required: "O campo de email é obrigatório.",
      email: "O email digitado não é válido.",
      maxLength: "O limite é de 50 caracteres.",
    },
    cpf: {
      required: "O campo de CPF é obrigatório.",
      maxLength: "O limite é de 11 caracteres.",
    },
    address: {
      required: "O campo endereço é obrigatório.",
      maxLength: "O limite é de 200 caracteres.",
    },
    city: {
      required: "O campo cidade é obrigatório.",
      maxLength: "O limite é de 28 caracteres.",
    },
    state: {
      required: "O campo estado é obrigatório.",
    },
    radio: {
      required: "A escolha de um item é obrigatória.",
    },
    text: {
      required: "Este campo é obrigatório.",
      maxLength: "O limite é de 1000 caracteres.",
    },
    position: {
      required: "Este campo é obrigatório.",
      maxLength: "O limite é de 40 caracteres.",
    },
    description: {
      required: "Este campo é obrigatório.",
      maxLength: "O limite é de 500 caracteres.",
    },
    date: {
      required: "Este campo é obrigatório.",
    },
  },
  submitHandler: function (form, values) {
    console.log(form, values);
  },
});

