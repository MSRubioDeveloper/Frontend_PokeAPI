import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PokemonResponse } from '../../interfaces/pokemon-response.interface';
import { ToastrService } from 'ngx-toastr';
import { PokemonService } from '../../services/pokemon-service.service';
import { catchError } from 'rxjs';



@Component({
  selector: 'app-buscar-pokemon',
  templateUrl: './buscar-pokemon.component.html',
  styleUrl: './buscar-pokemon.component.css'
})
export class BuscarPokemonComponent {


  public searchForm: FormGroup = this.fb.group({
    pokemon_id: [ "", [ Validators.required, Validators.minLength(1)]]
  });

  public pokemonsFounded?: PokemonResponse;

  constructor(
    private fb: FormBuilder,
    private toastr: ToastrService,
    private pokemonService: PokemonService
  ){}


  public searchById( term: string){

    const termLower = term.toLowerCase()
    //  const parseId = parseInt(term);
    // if( !parseId ){
    //   this.pokemonsFounded = undefined;
    //   return this.toastr.error("El termino de busqueda debe ser un numero", "Error" );
    // }

    return this.pokemonService.searchPokemonById( termLower ).pipe(
      // map(pokemon => pokemon.filter(user => user.id_empleado.toString().includes( parseId.toString() ) )),
      // map(filteredUsers => filteredUsers.slice(0, 5)),
      catchError( error => {
        this.pokemonsFounded = undefined
        this.toastr.error(`Pokemon con el id ${ termLower } no existe!`)
        throw new Error(`Pokemon inexistente!: status ${ error }`)
      })
    )
    .subscribe( pokemon => {
      console.log( pokemon )
      if( !pokemon ) this.pokemonsFounded = undefined

      this.toastr.success(`Pokemon ${ pokemon.name } (${pokemon.id}) encontrado!` )
      this.pokemonsFounded = pokemon;
    
    });

    
  }
}
