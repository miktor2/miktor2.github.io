// --- clock
const hour = document.querySelector('.js_hour');
const min = document.querySelector('.js_minutes');

function timeUpdate() {
  const t = new Date();
  const getHour = ('00' + t.getHours()).slice(-2);
  const getMin = ('00' + t.getMinutes()).slice(-2);

  hour.innerHTML = getHour;
  min.innerHTML = getMin;
}

setInterval(timeUpdate, 1000);