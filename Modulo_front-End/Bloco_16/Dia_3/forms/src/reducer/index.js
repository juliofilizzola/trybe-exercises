
const INITIAL ={
  personInfo: {
    name: '',
    email: '',
    address: '',
    city: '',
    state: '',
    addressType: '',
  },
  profInfo : {
    resume: '',
    role: '',
    roleDescription: '',
  }

}

export default function MyReducer(state = INITIAL, action) {
  if(action.type){
    state[action.type][action.name]= action.value;
  }
  return state;
}
