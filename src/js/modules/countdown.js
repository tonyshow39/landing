const timerItems = document.querySelectorAll(".timer__num");
const finishDate = new Date(2022, 6, 20);

// Получение объекта данных счетчика
function getCountdownData(date) {
  const timeNow = Date.now();
  const timeFinish = date.valueOf();
  const time = timeFinish - timeNow;

  if (time < 0) {
    clearInterval(interval);
    return {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    };
  }

  return {
    days: Math.floor(time / 1000 / 60 / 60 / 24),
    hours: Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
    minutes: Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)),
    seconds: Math.floor((time % (1000 * 60)) / 1000),
  };
}

// Отрисовка таймера обратного отсчета
function renderCountdown(items, finishDate) {
  const countdownData = getCountdownData(finishDate);
  items.forEach((item) => {
    const span = item.querySelector("span");
    const segment = item.querySelector(".segment");
    const id = span.id;
    const value = countdownData[id];
    span.innerText = value;
    renderStroke(segment, id, value);
  });
}

// Отрисовка обводки
function renderStroke(segment, timeType, value) {
  if (["seconds", "minutes", "days"].includes(timeType)) {
    segment.style.strokeDasharray = `${value} 60`;
  } else {
    const hourSegment = 60 / 24;
    const hours = value * hourSegment;
    segment.style.strokeDasharray = `${hours} 60`;
  }
}

const interval = setInterval(() => {
  renderCountdown(timerItems, finishDate);
}, 1000);
