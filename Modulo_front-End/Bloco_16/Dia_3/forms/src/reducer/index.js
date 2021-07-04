
const INITIAL ={
  personInfo: {
    name: '',
    email: '',
    address: '',
    city: '',
    state: '',
    addressType: '',
    cpf: '',
  },
  profInfo : {
    resume: '',
    role: '',
    roleDescription: '',
  }

}

export default function MyReducer(state = INITIAL, action) {
  if (action.value) {
    state[action.type][action.name] = action.value
  }
  return state;
}
