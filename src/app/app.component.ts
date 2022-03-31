import { Component, OnInit } from '@angular/core';
import { PokemonService } from './services/pokeapi.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'pokedex-project';

  constructor(private pokeAPI: PokemonService) { }

  ngOnInit(): void {
    this.getPokemon();
  }

  getPokemon() {
    this.pokeAPI.getPokemon('pikachu').subscribe();
  }
}
