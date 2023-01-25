let editButton = document.querySelector('.profile__edit-button');
let closeButton = document.querySelector('.popup__close-button');
let popup = document.querySelector('.popup')
let formInputName = document.querySelector('.popup__input_name');
let formInputDescription = document.querySelector('.popup__input_description');
let profileName = document.querySelector('.profile__name');
let profileDescription = document.querySelector('.profile__description');
let form = document.querySelector('.popup__form');

editButton.addEventListener('click', openPopup);
closeButton.addEventListener('click', closePopup);
form.addEventListener('submit', formSubmit);

function openPopup() {
    formInputName.value = profileName.textContent.trim();
    formInputDescription.value = profileDescription.textContent.trim();
    popup.classList.add("popup__opened");
}
function closePopup() {
    popup.classList.remove("popup__opened");
}
function formSubmit(evt) {
    evt.preventDefault();
    profileName.textContent = formInputName.value;
    profileDescription.textContent = formInputDescription.value;
    popup.classList.remove("popup__opened");
}
