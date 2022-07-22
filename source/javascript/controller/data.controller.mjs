"use strict";

// Config
import { Config } from "../config.mjs";

// Views
import { IndexView } from "../view/index.view.mjs";

// Services
import { RickAndMortyService } from "../model/services/rick-and-morty.service.mjs";

import { model } from "../controller/model.controller.mjs"

class DataController {
    #rickAndMortyURL;
    #view;

    constructor() {
        this.#rickAndMortyURL = Config.RickAndMortyAPI_URL;
        this.#view = new IndexView(model);
    }

    async init() {
        const data = new RickAndMortyService(this.#rickAndMortyURL);
        await data.consumerApi();
        this.#view.init(data.getCharacters());
    }



}

export const index = new DataController();
index.init();