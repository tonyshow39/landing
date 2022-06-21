const reviews = document.getElementById("reviews");

async function getUsers() {
  const request = fetch("https://reqres.in/api/users?page=2");
  const response = await request;
  if (response.ok) {
    const data = await response.json();
    console.log(data);
    renderUsers(data.data);
  }
}
getUsers();

function renderUsers(users) {
  users.forEach((user) => {
    const review = document.createElement("div");
    review.className = "review";
    review.innerHTML = `
      <div class="review__avatar" style="background-image: url('${user.avatar}')"></div>
      <div class="review__text">
        "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings”.
      </div>
      <div class="review__name">${user.first_name} ${user.last_name}</div>
      <div class="review__label">${user.email}</div>
    `;
    reviews.appendChild(review);
  });
}

const user = {
  name: " Анатолий",
  job: "Программист",
};

async function setUser() {
  const options = {
    method: "POST",
    body: JSON.stringify(user),
  };
  const request = fetch(`https://reqres.in/api/users`, options);
  const response = await request;
  if (response.ok) {
    const data = await response.json();
    user.id = data.id;
    user.name = "Сергей";
    console.log(data);
    updateUser(user);
  }
}
setUser();

async function updateUser(user) {
  console.log(user);
  const options = {
    method: "PUT",
    body: JSON.stringify(user),
  };
  const request = fetch(`https://reqres.in/api/users/${user.id}`, options);
  const response = await request;
  if (response.ok) {
    const data = await response.json();
    console.log(data);

    setTimeout(() => {
      deleteUser(user.id);
    }, 2000);
  }
}

async function deleteUser(id) {
  console.log(id);
  const options = {
    method: "DELETE",
  };
  const request = fetch(`https://reqres.in/api/users/${id}`, options);
  const response = await request;
  if (response.ok) {
    console.log("Пользователь удален!");
  }
}
