import { Component, OnInit } from '@angular/core';
import { PokemonResponse } from '../../interfaces/pokemon-response.interface';
import { PokemonService } from '../../services/pokemon-service.service';
import { Observable, forkJoin } from 'rxjs';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-pokemones',
  templateUrl: './pokemones.component.html',
  styleUrl: './pokemones.component.css'
})
export class PokemonesComponent implements OnInit {

  public offset: number = 0;

  public pokemones?: PokemonResponse[];

  constructor(
    private readonly pokemonService: PokemonService,
    private toastr: ToastrService
  ){}

  ngOnInit(): void {
   this.get50Pokemons( 0);
  }

  public get50Pokemons( offset: number ){
    this.offset += offset;
    if( this.offset < 0 ) {
        this.offset = 0;
       this.toastr.error("No puedes solicitar menos pokememones") ;
       return
    }
    console.log( this.offset)
    this.pokemonService.get5OPokemons( 50 , this.offset )
    .subscribe( pokemones =>{

      const results = pokemones.results;                
      const allPokemons = results.map(pokemon => this.pokemonService.searchPokemonByUrl( pokemon.url ))

       forkJoin(allPokemons)
      .subscribe(allPokemons => {
        this.pokemones = allPokemons as PokemonResponse[]
      });
   
    })
  }

}
