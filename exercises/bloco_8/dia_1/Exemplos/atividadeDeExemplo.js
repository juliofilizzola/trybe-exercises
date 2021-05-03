const doingThings = (action) => action();

const wakeUp = () => console.log('Acordando!!');

const breakfast = () => console.log('Bora tomar café!!');

const toSleep = () => console.log('Partiu dormir!!')

doingThings(wakeUp);
doingThings(breakfast);
doingThings(toSleep);
