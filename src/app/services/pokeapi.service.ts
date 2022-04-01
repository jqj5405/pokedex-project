import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { flatMap, map, tap } from 'rxjs';
import { CardDisplay, Form } from '../interfaces/pokemon.model';

@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  constructor(private http: HttpClient) {}

  base_URL = 'https://pokeapi.co/api/v2/pokemon';

  getFirstGen(pokemon: string) {
    return this.http
      .get<CardDisplay>([this.base_URL, pokemon.toLowerCase()].join('/'))
      .pipe(
        map((info) => {
          const selected_info = {
            id: info.id,
            name: info.name,
            height: info.height,
            weight: info.weight,
            sprites: info.sprites.other.dream_world.front_default,
            types: info.types,
          };
          return selected_info;
        })
      );
  }

  /*
   * Outdated; Practice using flatMap() to combine two Observable requests
   */
  // getFirstGen(pokemon: string) {
  //   return this.http.get<any>([this.base_URL, "?limit=151"].join("/")).pipe(
  //     map(list => {
  //       const called_pokemon = list.results
  //         .find((index: Form) => index.name === pokemon.toLowerCase())
  //       return called_pokemon.url;
  //     }),
  //     flatMap(url => this.http.get<any>(url)),
  //     map(info => {
  //       const selected_info = {
  //         id: info.id,
  //         name: info.name,
  //         height: info.height,
  //         weight: info.weight,
  //         sprites: info.sprites.other.dream_world,
  //         types: info.types[0].type.name
  //       }
  //       return selected_info;
  //     })
  //   )
  // }
}
