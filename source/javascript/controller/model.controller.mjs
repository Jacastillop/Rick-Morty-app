import { ModelView } from "../view/model.view.mjs";

class ModelController{
    #viewCharacter;

    constructor(){
        this.#viewCharacter = new ModelView();
    }

    init(data){
        this.#viewCharacter.init(data);
    }
}

export const model = new ModelController();
//model.init();