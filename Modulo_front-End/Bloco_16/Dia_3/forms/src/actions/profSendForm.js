export default function profSendForm({target}) {
  const {name} = target;
  const value = target.type === 'checkbox' ? target.checked : target.value;
  return {
    type: 'profInfo',
    name, 
    value,
  }
}
