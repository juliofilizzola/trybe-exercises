function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
};

createDaysOfTheWeek();

// Escreva seu código abaixo.

// primeira atividade VQV

const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

function creatDays() {
  let dayList = document.querySelector('#days');

  for (let index = 0; index < dezDaysList.length; index += 1) {
    let element = dezDaysList[index];
    let daysItem = document.createElement('li');

    if (element === 24 | element === 31){
      dayList.className = 'day holiday';
      daysItem.innerHTML = element;
      dayList.appendChild(daysItem);
    } else if(element === 4 | element === 11 | element === 18 | element === 25){
      dayList.className = 'day friday';
      daysItem.innerHTML = element;
      dayList.appendChild(daysItem);
    } else {
      daysItem.innerHTML = element;
      dayList.appendChild(daysItem);
    }
    
  }
  
}

creatDays();

function fridays() {
  let buttonStart = document.querySelector('.buttons-container');
  let buttonCreate = document.createAttribute('button');
  buttonStart.appendChild(buttonCreate);
}
fridays()