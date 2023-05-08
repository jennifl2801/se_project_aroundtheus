const initialCards = [
  {
    name: "Yosemite Valley",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/yosemite.jpg",
  },
  {
    name: "Lake Louise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/lake-louise.jpg",
  },
  {
    name: "Bald Mountains",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/bald-mountains.jpg",
  },
  {
    name: "Latemar",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/latemar.jpg",
  },
  {
    name: "Vanoise National Park",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/vanoise.jpg",
  },
  {
    name: "Lago di Braies",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/lago.jpg ",
  },
];

const cardTemplate = document
  .querySelector("#card-template")
  .content.querySelector(".card");

//WRAPERS
const cardsWrap = document.querySelector(".cards__list");
const editProfileModal = document.querySelector("#edit-modal");
const profileFormElement = document.querySelector(".modal__form");

// BUTTONS AND OTHER DOM NODES
const profileEditButton = document.querySelector("#profile-edit-button");
const modalCloseButton = document.querySelector("#profile-modal-close");
const profileTitle = document.querySelector(".profile__title");
const profileDescription = document.querySelector(".profile__description");
const addNewCardButton = document.querySelector(".profile__add-button");

//FORM DATA
const nameInput = profileFormElement.querySelector("#profile-name-input");
const jobInput = profileFormElement.querySelector("#profile-description-input");

//FUNCTIONS
function closeModal() {
  editProfileModal.classList.remove("modal_is-opened");
}

function openModal() {
  nameInput.value = profileTitle.textContent;
  jobInput.value = profileDescription.textContent;

  editProfileModal.classList.add("modal_is-opened");
}

function handleProfileEditSubmit(evt) {
  evt.preventDefault();
  profileTitle.textContent = nameInput.value;
  profileDescription.textContent = jobInput.value;
  closeModal();
}

function getCardElement(data) {
  const cardElement = cardTemplate.cloneNode(true);
  const cardImageEl = cardElement.querySelector(".card__image");
  const cardTitleEl = cardElement.querySelector(".card__title");

  cardImageEl.src = data.link;
  cardTitleEl.textContent = data.name.trim();
  cardImageEl.alt = data.name;

  return cardElement;
}

profileFormElement.addEventListener("submit", handleProfileEditSubmit);
profileEditButton.addEventListener("click", openModal);
modalCloseButton.addEventListener("click", closeModal);

//add new card button
/*addNewCardButton.addEventListener("click", openModal);*/

initialCards.forEach((cardData) => {
  cardsWrap.prepend(getCardElement(cardData));
});
