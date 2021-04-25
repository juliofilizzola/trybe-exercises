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
      daysItem.className = 'day holiday';
      daysItem.innerHTML = element;
      dayList.appendChild(daysItem);
    } else if(element === 4 | element === 11 | element === 18 | element === 25){
      daysItem.className = 'day friday';
      daysItem.innerHTML = element;
      dayList.appendChild(daysItem);
    } else {
      daysItem.innerHTML = element;
      dayList.appendChild(daysItem);
    }
    
  }
  
}

creatDays();

// segunda atividade

function creatButton (buttonName) {
  
  let buttonStart = document.querySelector('.buttons-container');
  let buttonCreate = document.createElement('button');
  let idButton = 'btn-holiday';

  buttonCreate.innerHTML = buttonName;
  buttonCreate.id = idButton;
  buttonStart.appendChild(buttonCreate);


}

creatButton('Feriados')

// terceira atividade.

function colorHoliday () {
  let buttonF = document.querySelector('#btn-holiday');
  let holidaylist = document.querySelectorAll('.holiday');
  console.log(holidaylist)
  let backgroundColorHoliday = 'rgb(238,238,238)';
  let BGNewColor = 'white';


  buttonF.addEventListener('click', function () {
    for (let index = 0; index < holidaylist.length; index += 1) {
      if(holidaylist[index].style.backgroundColor === BGNewColor) {
        holidaylist[index].style.backgroundColor = backgroundColorHoliday;
      } else {
        holidaylist[index].style.backgroundColor = BGNewColor;
      }
      
    }
  })
}

colorHoliday()

function creatFryday (buttonName) {
  
  let buttonStart = document.querySelector('.buttons-container');
  let buttonCreate = document.createElement('button');
  let idButton = 'btn-friday';

  buttonCreate.innerHTML = buttonName;
  buttonCreate.id = idButton;
  buttonStart.appendChild(buttonCreate);


}

creatFryday('Sexta-feira')

function colorHoliday () {
  let buttonF = document.querySelector('#btn-holiday');
  let holidaylist = document.querySelectorAll('.holiday');
  console.log(holidaylist)
  let backgroundColorHoliday = 'rgb(238,238,238)';
  let BGNewColor = 'white';


  buttonF.addEventListener('click', function () {
    for (let index = 0; index < holidaylist.length; index += 1) {
      if(holidaylist[index].style.backgroundColor === BGNewColor) {
        holidaylist[index].style.backgroundColor = backgroundColorHoliday;
      } else {
        holidaylist[index].style.backgroundColor = BGNewColor;
      }
      
    }
  })
}

colorHoliday()

function displayFridays(fridaysArray) {
  let getFridayButton = document.querySelector('#btn-friday');
  let fridays = document.getElementsByClassName('friday-day');
  let newFridayText = 'SEXTOU o/';

  getFridayButton.addEventListener('click', function() {
  for (let index = 0; index < fridays.length; index += 1) {
    if (fridays[index].innerHTML !== newFridayText) {
        fridays[index].innerHTML = newFridayText;
    } else {
        fridays[index].innerHTML = fridaysArray[index];
      }
    }
  })
};

let dezFridays = [ 4, 11, 18, 25 ];
displayFridays(dezFridays);