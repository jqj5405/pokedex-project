import { Component, Input, OnInit } from '@angular/core';
import { CardDisplay } from '../interfaces/pokemon.model';
import { PokemonService } from '../services/pokeapi.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  @Input() name!: string;
  pokemon!: CardDisplay;

  constructor(private pokeAPI: PokemonService) {}

  ngOnInit(): void {
    this.getPokemon(this.name);
  }

  getPokemon(name: string) {
    this.pokeAPI.getFirstGen(name).subscribe((info) => {
      info.weight /= Math.pow(10, 1);
      info.height /= Math.pow(10, 1);
      this.pokemon = info;
    });
  }
}
