const selectboxDOM = {
  selectbox: document.querySelectorAll(".selectbox"),
  selected: document.querySelectorAll(".selectbox__selected"),
  list: document.querySelectorAll(".selectbox__list"),
};

// Отслеживаем клик по селектбоксу и открываем его, если кликнули по нему (втавляем класс open)
selectboxDOM.selectbox.forEach((selectbox) => {
  selectbox.addEventListener("click", () => {
    selectbox.classList.add("open");
  });
});

function cb(event) {
  const target = event.target;
  // Проверяем, если элемент не селектбокс, то закрываем селектбокс (удаляем класс open)
  if (
    !target.matches(".selectbox") &&
    !target.matches(".selectbox__selected")
  ) {
    selectboxDOM.selectbox.forEach((selectbox) => {
      selectbox.classList.remove("open");
    });
  }

  selectCurrency(event);
}
// Выбор валюты
function selectCurrency(e) {
  const { target } = e;
  const value = target.innerText;
  if (target.matches(".selectbox__item")) {
    // Удаляем класс selected у всех блоков с классом selectbox__item и selected
    const selectedItems = document.querySelectorAll(
      ".selectbox__item.selected"
    );
    selectedItems.forEach((item) => {
      item.classList.remove("selected");
    });

    // Вставляем  класс selected элементу списка, по которому кликнули
    const items = document.querySelectorAll(".selectbox__item");
    items.forEach((item) => {
      if (item.innerText === value) {
        item.classList.add("selected");
      }
    });

    // Вставляем значение выбранной валюты в элементы с классом selectbox__selected
    selectboxDOM.selected.forEach((selected) => {
      selected.innerText = value;
    });
  }
}

// Отлавливаем событие клика на теге body
const body = document.querySelector("body");
body.addEventListener("click", cb);
