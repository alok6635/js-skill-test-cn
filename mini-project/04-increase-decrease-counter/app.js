//select value and buttons -
const value = document.querySelector("#counter");
const btns = document.querySelectorAll(".btn");

//set inital value to zero -
let count = 0;
btns.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    const text = e.currentTarget.classList;
    if (text.contains("decrease")) {
      count--;
    } else if (text.contains("increase")) {
      count++;
    } else {
      count = 0;
    }
//colors changes-
    if (count > 0) {
      value.style.color = "green";
    }
    if (count < 0) {
      value.style.color = "red";
    }
    if (count === 0) {
      value.style.color = "#222";
    }
    value.textContent = count;
  });
});



// use to arrow funtion-

// const counter = document.querySelector('#counter');
// const btns = document.querySelectorAll('.btn');
// let count = 0;
// btns.forEach((btn) => {
//   btn.addEventListener("click",  (e) =>{
//     const styles = e.currentTarget.classList;
//     if (styles.contains("decrease")) {
//       count--;
//     } else if (styles.contains("increase")) {
//       count++;
//     } else {
//       count = 0;
//     }

//     if (count > 0) {
//       value.style.color = "green";
//     }
//     if (count < 0) {
//       value.style.color = "red";
//     }
//     if (count === 0) {
//       value.style.color = "#222";
//     }
//     value.textContent = count;
//   });

// });
