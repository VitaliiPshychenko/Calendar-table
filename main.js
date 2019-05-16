function createCalendar(id, year, month) {
  const container = document.getElementById(id);
  const currentMonth = month - 1;
  const date = new Date(year, currentMonth);
  const days = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Нд'];
  let table = '<table><tr>';;

  for (let i = 0; i < days.length; i++) {
    table += `<th>${days[i]}</th>`
  }
  table += '</tr><tr>';

  for (let i = 0; i < getDay(date); i++) {
    table += '<td></td>';
  }

  while (date.getMonth() === currentMonth) {
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

  function getDay(weekDay) {
    let day = weekDay.getDay();
    if (day === 0) {
      day = 7;
    }
    return day - 1;
  }
}

createCalendar("cal", 2012, 9);