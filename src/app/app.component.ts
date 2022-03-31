import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { PokemonService } from './services/pokeapi.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'pokedex-project';
  starterPokemon = ["Bulbasaur", "Squirtle", "Charmander"];

  constructor(private pokeAPI: PokemonService) { }

  ngOnInit(): void {
    this.getPokemon('pikachu');
  }

  getPokemon(name: string) {
    this.pokeAPI.getFirstGen(name).subscribe(console.log);
  }
}
