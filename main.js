function createCalendar(id, year, month) {
  const container = document.getElementById(id);
  const date = new Date(year, month - 1);
  const days = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Нд'];
  let table = '<table><tr>';;

  for (let i = 0; i < days.length; i++) {
    table += `<th>${days[i]}</th>`
  }
  table += '</tr><tr>';

  function getDay(weekDay) {
    let day = weekDay.getDay();
    if (day === 0) {
      day = 7;
    }
    return day - 1;
  }

  for (let i = 0; i < getDay(date); i++) {
    table += '<td></td>';
  }

  while (date.getMonth() === month - 1) {
    table += `<td>${date.getDate()}</td>`;
    if (getDay(date) % 7 === 6) {
      table += '</tr><tr>';
    }
    date.setDate(date.getDate() + 1);
  }

  if (getDay(date) !== 0) {
    for (let i = getDay(date); i < 7; i++) {
      table += '<td></td>';
    }
  }
  table += '</tr></table>';
 
  container.innerHTML = table;
}

createCalendar("cal", 2012, 9);