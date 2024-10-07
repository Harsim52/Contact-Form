const inputs = [
  {
    element: document.getElementById("fname"),
    errorMsg: document.getElementById("fname-error"),
  },
  {
    element: document.getElementById("lname"),
    errorMsg: document.getElementById("lname-error"),
  },

  {
    element: document.getElementById("email"),
    errorMsg: document.getElementById("email-error"),
  },
  {
    element: document.getElementById("msg"),
    errorMsg: document.getElementById("msg-error"),
  },
  {
    element: document.getElementById("consent-msg"),
    errorMsg: document.getElementById("consent-error"),
  },
];
const radioDivs = document.querySelectorAll(".radio-btns");
const radioInputs = document.querySelectorAll('input[name="query"]');
const radioErrorMsg = document.getElementById("radio-error");

const submitBtn = document.querySelector("button");

const thankyouMsg = document.querySelector(".msg-sent");
console.log(thankyouMsg);
if (sessionStorage.getItem("formSubmitted")) {
  thankyouMsg.classList.remove("hide"); // Show the message
  sessionStorage.removeItem("formSubmitted"); // Clear the flag so it's only shown once
}

submitBtn.addEventListener("click", (event) => {
  let isValid = true;

  inputs.forEach(({ element, errorMsg }) => {
    if (!element.value.trim() || !element.checkValidity()) {
      element.classList.add("invalid");
      errorMsg.classList.remove("hide");
      isValid = false;
    } else {
      element.classList.remove("invalid");
      errorMsg.classList.add("hide");
    }
  });

  let isChecked = false;

  radioInputs.forEach((input) => {
    if (input.checked) {
      isChecked = true;
    }
  });

  if (!isChecked) {
    radioErrorMsg.classList.remove("hide");
    radioDivs.forEach((radio) => {
      radio.classList.add("invalid");
    });
    isValid = false;
  } else {
    radioErrorMsg.classList.add("hide");
    
  }
  if (!isValid) {
    event.preventDefault();
  }else{
    sessionStorage.setItem("formSubmitted", "true");
  }
  
});
