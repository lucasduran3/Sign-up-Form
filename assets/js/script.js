const form = document.getElementsByTagName("form")[0];

const firstName = document.getElementById("first-name");
const lastName = document.getElementById("last-name");
const email = document.getElementById("email");
const phoneNumber = document.getElementById("phone-number");
const password = document.getElementById("password");
const confirmPass = document.getElementById("confirm-pass");

firstName.addEventListener("input", function (event) {
  const errorMsj = document.querySelector("#first-name ~ div.error");

  if (firstName.validity.valid) {
    errorMsj.innerHTML = "";
    errorMsj.className = "error";
  } else if (firstName.validity.valueMissing) {
    showError(errorMsj, "*This field is Required.");
  }
});

lastName.addEventListener("input", function (event) {
  const errorMsj = document.querySelector("#last-name ~ div.error");

  if (lastName.validity.valid) {
    errorMsj.innerHTML = "";
    errorMsj.className = "error";
  } else if (lastName.validity.valueMissing) {
    showError(errorMsj, "*This field is Required.");
  }
});

email.addEventListener("input", function (event) {
  const errorMsj = document.querySelector("#email ~ div.error");

  if (email.validity.valid) {
    errorMsj.innerHTML = "";
    errorMsj.className = "error";
  } else if (email.validity.valueMissing) {
    showError(errorMsj, "*This field is Required.");
  } else if (email.validity.typeMismatch) {
    showError(errorMsj, "*Entered value needs to be an email address.");
  }
});

phoneNumber.addEventListener("input", function (event) {
  const errorMsj = document.querySelector("#phone-number ~ div.error");

  if (phoneNumber.validity.valid) {
    errorMsj.innerHTML = "";
    errorMsj.className = "error";
  } else if (phoneNumber.validity.patternMismatch) {
    showError(errorMsj, "*Entered value needs to be in the correct format.");
  } else if (phoneNumber.validity.valueMissing) {
    showError(errorMsj, "*This field is Required");
  }
});

password.addEventListener("input", function (event) {
  const errorMsj = document.querySelector("#password ~ div.error");

  if (password.validity.valid) {
    errorMsj.innerHTML = "";
    errorMsj.className = "error";
  } else if (password.validity.valueMissing) {
    showError(errorMsj, "*This field is Required.");
  } else if (password.validity.tooShort) {
    showError(errorMsj, "*Password requires minimum 8 characters.");
  }
});

confirmPass.addEventListener("input", function (event) {
  const errorMsj = document.querySelector("#confirm-pass ~ div.error");

  if (confirmPass.validity.valid) {
    errorMsj.innerHTML = "";
    errorMsj.className = "error";
  } else if (confirmPass.validity.valueMissing) {
    showError(errorMsj, "*This field is Required.");
  } else if (password.value != confirmPass.value) {
    showError(errorMsj, "*Password did not match.");
  }
});

form.addEventListener("submit", function (event) {
  let hasError = false;

  if (!firstName.validity.valid) {
    showError(
      document.querySelector("#first-name ~ div.error"),
      "*This field is Required."
    );
    hasError = true;
    event.preventDefault();
  }

  if (!lastName.validity.valid) {
    showError(
      document.querySelector("#last-name ~ div.error"),
      "*This field is Required."
    );
    hasError = true;
    event.preventDefault();
  }

  if (!email.validity.valid) {
    if (email.validity.valueMissing) {
      showError(
        document.querySelector("#email ~ div.error"),
        "*This field is Required."
      );
    } else if (email.validity.typeMismatch) {
      showError(
        document.querySelector("#email ~ div.error"),
        "*Entered value needs to be an email address."
      );
    }
    hasError = true;
    event.preventDefault();
  }

  if (!phoneNumber.validity.valid) {
    if (phoneNumber.validity.valueMissing) {
      showError(
        document.querySelector("#phone-number ~ div.error"),
        "*This field is Required."
      );
    } else if (phoneNumber.validity.patternMismatch) {
      showError(
        document.querySelector("#phone-number ~ div.error"),
        "*Entered value needs to be in the correct format."
      );
    }

    hasError = true;
    event.preventDefault();
  }

  if (!password.validity.valid) {
    if (password.validity.valueMissing) {
      showError(
        document.querySelector("#password ~ div.error"),
        "*This field is Required."
      );
    } else if (password.validity.tooShort) {
      showError(
        document.querySelector("#password ~ div.error"),
        "*Password requires minimun 8 characters."
      );
    }

    hasError = true;
    event.preventDefault();
  }

  if (!confirmPass.validity.valid) {
    if (confirmPass.validity.valueMissing) {
      showError(
        document.querySelector("#confirm-pass ~ div.error"),
        "*This field is Required."
      );
    } else if (confirmPass.value != password.value) {
      showError(
        document.querySelector("#confirmPass ~ div.error"),
        "*Passwords do not match."
      );
    }

    hasError = true;
    event.preventDefault();
  }
});

function showError(current, message) {
  current.textContent = message;
  current.className = "error error-active";
}
