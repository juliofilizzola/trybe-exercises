export default function personSendForm({target}) {
  const {name} = target;
  const value = target.type === 'checkbox' ? target.checked : target.value;
  return {
    type: 'personInfo',
    name, 
    value,
  }
}
