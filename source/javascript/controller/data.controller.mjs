"use strict";

// Config
import { Config } from "../config.mjs";

// Views
import { IndexView } from "../view/index.view.mjs";

// Services
import { RickAndMortyService } from "../model/services/rick-and-morty.service.mjs";

class DataController {
    #rickAndMortyURL;
    #privateCharacters;
    #view;

    constructor() {
        this.#rickAndMortyURL = Config.RickAndMortyAPI_URL;
        this.#privateCharacters = [];
        this.#view = new IndexView();
    }

    async init() {
        const data = new RickAndMortyService(this.#rickAndMortyURL);
        await data.consumerApi();
        this.#view.init(data.getCharacters());
    }

}

export const index = new DataController();
index.init();