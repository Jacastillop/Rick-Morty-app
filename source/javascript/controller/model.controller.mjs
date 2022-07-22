import { ModelView } from "../view/model.view.mjs";

class ModelController {
  #viewCharacter;

  constructor() {
    this.#viewCharacter = new ModelView();
  }

  init(data) {
    document.getElementById("container").remove();
    this.#viewCharacter.init(data);
  }
}

export const model = new ModelController();
