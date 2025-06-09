const editProfileBtn = document.querySelector(".profile__edit-button");
const editProfileModal = document.querySelector("#edit-profile-modal");
const editProfileCloseBtn = editProfileModal.querySelector(".modal__close-btn");


editProfileBtn.addEventListener("click", function () {
  editProfileModal.classList.add("modal-is-opened");
});

editProfileCloseBtn.addEventListener("click", function(){
editProfileModal.classList.remove("modal-is-opened");
});


const newPostBtn = document.querySelector(".profile__plus-button");
const newPostModal = document.querySelector("#new-post-modal");
const newPostCloseBtn = newPostModal.querySelector(".modal__close-btn");

newPostBtn.addEventListener("click", function () {
newPostModal.classList.add("modal-is-opened");
});

newPostCloseBtn.addEventListener("click", function () {
  newPostModal.classList.remove("modal-is-opened");
});