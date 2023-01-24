let body = document.querySelector('body');
let editButton = document.querySelector('.profile__edit-button');
let closeButton = document.querySelector('.popup__close-button');
let saveButton = document.querySelector('.popup__save-button');
let popup = document.querySelector('.popup')
let formInput = document.querySelectorAll('.popup__input');
let profileName = document.querySelector('.profile__name');
let profileDescription = document.querySelector('.profile__description');

console.log(formInput[0].value);
editButton.addEventListener('click', openPopup);
function openPopup() {
    formInput[0].value = profileName.textContent.trim();
    formInput[1].value = profileDescription.textContent.trim();
    popup.style.display = "flex";
}

closeButton.addEventListener('click', closePopup);
function closePopup() {
    popup.style.display = "none";
}

saveButton.addEventListener('click', savePopup);
function savePopup() {
    profileName.textContent = formInput[0].value;
    profileDescription.textContent = formInput[1].value;
    popup.style.display = "none";
}