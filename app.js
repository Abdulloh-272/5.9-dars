const firstName = document.querySelector("#firstname");
const password = document.querySelector("#pass");
const btn = document.querySelector("#btn");

const ID = "123456";
const PAROL = "78900";

btn.addEventListener("click", (e) => {
  e.preventDefault();

  if (firstName.value === "" || password.value === "") {
    alert("Ism yoki Parol kiritilmagan!");
  } else if (firstName.value === ID && password.value === PAROL) {
    alert("Tizimga Muvaffaqiyatli Kirdingiz!");
  } else {
    alert("Ism yoki Parol Xato!");
  }
});

// const fsname = document.querySelector("#firstname");
// const pass = document.querySelector("#pass");
// const btn = document.querySelector("#btn");

// const FIRSTNAME = "abdulloh";
// const PAROL = "232323";

// btn.addEventListener("click", (e) => {
//   e.preventDefault();
//   if (fsname.value == " " || pass.value == " ") {
//     alert("Parol ");
//   }
// });
