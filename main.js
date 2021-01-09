
// code for handling radio buttons

const fullName = document.querySelector("#nameInput");

let submitButton = document.querySelector("#submitButton");
submitButton.addEventListener("click", e => {
  e.preventDefault();
  // use a for loop to go through radio button elements
  let choices = document.getElementsByName("language"); // this gets all the language choices since each has the name 'languages'
  for (let i = 0; i < choices.length; i++) {
    if (choices[i].checked) {
      // code (note: break after this because only one needs to be checked)
      console.log(`NAME: ${fullName.value}, LANGUAGE: ${choices[i].value}`);
      break;
    }
  }
})

