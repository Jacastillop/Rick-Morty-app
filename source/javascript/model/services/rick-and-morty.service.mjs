import { Character } from "../character.model.mjs";

export class RickAndMortyService {
  #privateUrl;
  #characters;

  constructor(url) {
    this.#privateUrl = url;
    this.#characters = [];
  }

  async consumerApi() {
    const request = await fetch(`${this.#privateUrl}/character`);
    const { results } = await request.json();
    results.forEach(
      ({
        created,
        episode,
        gender,
        id,
        image,
        location,
        name,
        origin,
        species,
        status,
        type,
        url,
      }) => {
        this.#characters.push(
          new Character(
            created,
            episode,
            gender,
            id,
            image,
            location,
            name,
            origin,
            species,
            status,
            type,
            url
          )
        );
      }
    );
    return this.#characters;
  }

  getCharacters() {
    return this.#characters;
  }
}
