"use strict";

export class IndexView {
  #body;
  #characters;
  #pageModel;

  constructor(modelController) {
    document.title = "Rick and Morty World";
    this.#body = document.querySelector("body");
    this.#characters = [];
    this.#pageModel = modelController;
  }

  init(data) {
    let card;
    let label;
    let image;
    const container = this.#createContainer();
    data.forEach((character) => {
      card = this.#createCard(character.Id);
      label = this.#createName(character.Name);
      image = this.#createImage(character.Image, character.Id);
      card.append(image, label);
      container.append(card);
      this.#characters.push(character);
    });
    this.#body.append(container);
  }

  #createContainer() {
    let container = document.createElement("div");
    container.id = "container";
    container.classList.add("cards-container");
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

  #createImage(url, id) {
    let image = document.createElement("img");
    image.id = "image";
    image.classList.add("image-character");
    image.src = url;
    image.addEventListener("click", () =>
      this.#pageModel.init(this.#characters[id - 1])
    );
    return image;
  }
}
