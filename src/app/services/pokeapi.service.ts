import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { map, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor(private http: HttpClient) { }

  base_URL = 'https://pokeapi.co/api/v2/pokemon'

  getPokemon(pokemon: string) {
    return this.http.get<any>([this.base_URL, pokemon].join("/").toLowerCase()).pipe(
      tap(info => console.log(pokemon, info)),
      map(info => {
        const selected_info = {
          id: info.id,
          height: info.height,
          weight: info.weight,
          sprites: info.sprites.other.dream_world,
          types: info.types[0].type.name
        }
        console.log(selected_info);
        return selected_info;
      })
    )
  }
}
