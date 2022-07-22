"use strict";
export class ModelView {
  #body;

  constructor() {
    document.title = "Rick and Morty World";
    this.#body = document.querySelector("body");
  }

  init(character) {
    const container = this.#createContainer();
    const card = this.#createCard(character.Id);
    const name = this.#createName(character.Name);
    const image = this.#createImage(character.Image);
    const infoContainer = this.#createInfoContainer(
      character.Id,
      character.Created,
      character.Status,
      character.Species,
      character.Type,
      character.Gender,
      character.Url,
      character.Origin.name,
      character.Location.name,
      character.Episode
    );

    card.append(image, name);
    container.append(card, infoContainer);
    this.#body.append(container);
  }

  #createContainer() {
    let container = document.createElement("div");
    container.id = "container";
    container.classList.add("container");
    return container;
  }

  #createInfoContainer(
    id,
    created,
    status,
    species,
    type,
    gender,
    url,
    origin,
    location,
    episodes
  ) {
    let container = document.createElement("div");
    container.id = "container";
    container.classList.add("info-container");
    let labelId = this.#createName(`Id: ${id}`);
    let labelCreated = this.#createName(`Created: ${created}`);
    let labelStatus = this.#createName(`Status: ${status}`);
    let labelSpecies = this.#createName(`Species: ${species}`);
    let labelType = this.#createName(`Type: ${type}`);
    let labelGender = this.#createName(`Gender: ${gender}`);
    let labelUrl = this.#createName(`Url: ${url}`);
    let labelOrigin = this.#createName(`Origin: ${origin}`);
    let labelLocation = this.#createName(`Location: ${location}`);
    let labelEpisodes = this.#createName(`# Episodes: ${episodes.length}`);
    container.append(
      labelId,
      labelCreated,
      labelStatus,
      labelSpecies,
      labelType,
      labelGender,
      labelUrl,
      labelOrigin,
      labelLocation,
      labelEpisodes
    );
    return container;
  }

  #createCard(id) {
    let card = document.createElement("div");
    card.id = `card_${id}`;
    card.classList.add("card-character");
    return card;
  }

  #createName(name) {
    let nameLabel = document.createElement("label");
    nameLabel.id = "nameLabel";
    nameLabel.classList.add("name-character");
    nameLabel.innerText = name;
    return nameLabel;
  }

  #createImage(url) {
    let image = document.createElement("img");
    image.id = "image";
    image.classList.add("image-character");
    image.src = url;
    return image;
  }
}
