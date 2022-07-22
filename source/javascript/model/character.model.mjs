'use strict';

export class Character {
    #created;
    #episode;
    #gender;
    #id;
    #image;
    #location;
    #name;
    #origin;
    #species;
    #status;
    #type;
    #url;

    constructor(created,episode,gender,id,image,location,name,origin,species,status,type,url) {
        this.#created = created;
        this.#episode = episode;
        this.#gender = gender;
        this.#id = id;
        this.#image = image;
        this.#location = location;
        this.#name =name;
        this.#origin=origin;
        this.#species=species;
        this.#status=status;
        this.#type=type;
        this.#url=url;
    }

    get Created() {
        return this.#created;
    }

    set Created(created) {
        this.#created = created;
    }

    get Episode() {
        return this.#episode;
    }

    set Episode(episode) {
        this.#episode = episode;
    }

    get Gender() {
        return this.#gender;
    }

    set Gender(gender) {
        this.#gender = gender;
    }

    get Id() {
        return this.#id;
    }

    set Id(id) {
        this.#id = id;
    }

    get Image() {
        return this.#image;
    }

    set Image(image) {
        this.#image = image;
    }

    get Location() {
        return this.#location;
    }

    set Location(location) {
        this.#location = location;
    }

    get Name() {
        return this.#name;
    }

    set Name(name) {
        this.#name = name;
    }

    get Origin() {
        return this.#origin;
    }

    set Origin(origin) {
        this.#origin = origin;
    }

    get Species() {
        return this.#species;
    }

    set Species(species) {
        this.#species = species;
    }
    
    get Type() {
        return this.#type;
    }

    set Type(type) {
        this.#type = type;
    }

    get Status() {
        return this.#status;
    }

    set Status(status) {
        this.#status = status;
    }

    get Url() {
        return this.#url;
    }

    set Url(url) {
        this.#url = url;
    }


}