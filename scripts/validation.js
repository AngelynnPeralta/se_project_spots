const showInputError = (formElement, inputElement, errorMessage) => {
const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
errorElement.textContent = errorMessage;
inputElement.classList.add(".modal__input_type_error");
};


const hideInputError = (formElement, inputElement) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  errorElement.textContent = "";
  inputElement.classList.remove(".modal__input_type_error");

};

const toggleButtonState = (inputList, buttonElement) => {
if (!hasInvalidInput(inputList)) {
  buttonElement.classList.add();
} else {
buttonElement.classList.remove();
}
}

const hasInvalidInput = (inputList) => {
return inputList.some((inputElement) => {
return !inputElement.validity.valid;
});
}

const checkInputValidity = (formElement, inputElement) => {
  if (!inputElement.validity.valid) {
showInputError(formElement, inputElement, inputElement.validationMessage);
  } else {
    hideInputError(formElement, inputElement);
  };
}


const setEventListeners = (formElement) => {
const inputList = Array.from(formElement.querySelectorAll(".modal__input"));
const buttonElement = Array.from(formElement.querySelectorAll(".modal__save-btn"));

inputList.forEach((inputElement) => {
inputElement.addEventListener("input", () => {
  checkInputValidity(formElement, inputElement);
  toggleButtonState(inputList, buttonElement);
});
});

}


const enablevalidation = () => {
const formList = Array.from(document.querySelectorAll(".modal__form"));
formList.forEach((formElement) => {
setEventListeners(formElement);
})
}

enablevalidation();