const editProfileBtn = document.querySelector(".profile__edit-button");
const editProfileModal = document.querySelector("#edit-profile-modal");
const editProfileCloseBtn = editProfileModal.querySelector(".modal__close-btn");
const editProfileNameInput = editProfileModal.querySelector(
  "#profile-name-input"
);
const editProfileDescriptionInput = editProfileModal.querySelector(
  "#profile-description-input"
);
const editProfileFormElement =
  editProfileModal.querySelector("#edit-profile-form");

const newPostBtn = document.querySelector(".profile__plus-button");
const newPostModal = document.querySelector("#new-post-modal");
const newPostCloseBtn = newPostModal.querySelector(".modal__close-btn");
const newPostFormElement = newPostModal.querySelector("#new-post-form");
const newPostCaptionInput = newPostModal.querySelector(
  "#new-post-caption-input"
);
const newPostImageLinkInput = newPostModal.querySelector("#card-image-input");

const profileNameElement = document.querySelector(".profile__name");
const profileDescriptionElement = document.querySelector(
  ".profile__description"
);

function openModal(modal) {
  modal.classList.add("modal_is-opened");
}

function closeModal(modal) {
  modal.classList.remove("modal_is-opened");
}

editProfileBtn.addEventListener("click", function () {
  editProfileNameInput.value = profileNameElement.textContent;
  editProfileDescriptionInput.value = profileDescriptionElement.textContent;
  openModal(editProfileModal);
});

editProfileCloseBtn.addEventListener("click", function () {
 closeModal(editProfileModal);
});

newPostBtn.addEventListener("click", function () {
openModal(newPostModal);
});

newPostCloseBtn.addEventListener("click", function () {
 closeModal(newPostModal);
});

function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  profileNameElement.textContent = editProfileNameInput.value;
  profileDescriptionElement.textContent = editProfileDescriptionInput.value;
  closeModal(editProfileModal);
}

editProfileFormElement.addEventListener("submit", handleProfileFormSubmit);

function handleNewPostSubmit(evt) {
  evt.preventDefault();
  console.log(newPostCaptionInput.value);
  console.log(newPostImageLinkInput.value);
  closeModal(newPostModal);
}

newPostFormElement.addEventListener("submit", handleNewPostSubmit);
