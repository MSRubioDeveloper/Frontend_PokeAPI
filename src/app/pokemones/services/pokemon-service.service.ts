import { Injectable } from '@angular/core';
import { environments } from '../../environments/environments';
import { HttpClient } from '@angular/common/http';
import { PokemonResponse } from '../interfaces/pokemon-response.interface';
import { PokemonMultiResponse } from '../interfaces/multiple-response.interface';
import { AbilityResponse } from '../interfaces/ability-response.interface';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  private base_url: string = environments.API_URL;


  constructor(
    private http: HttpClient
  ) { }

  public searchPokemonById( id: number | string ){
    return this.http.get<PokemonResponse>(`${ this.base_url }/${ id }`)
  }

  public searchPokemonByUrl( url: string ){
    return this.http.get( url );
  }

  public get5OPokemons( limit = 50, offset = 0 ){
    return this.http.get<PokemonMultiResponse>(`${ this.base_url}?limit=${ limit }&offset=${ offset }`)
  }

  public getAbilityInfo( url: string): Promise<AbilityResponse>{
    return new Promise( ( resolve, reject ) => {
      fetch(url)
        .then( respones =>{
          if( !respones.ok){
            throw new Error("La solicitud no fue exitosa!");
          }

          return respones.json() as Promise<AbilityResponse>;
        })
        .then(( abilityInfo: AbilityResponse) =>{
          resolve( abilityInfo )
        })
        .catch( err => {
          console.log( "ACTIVADOOOO")
          reject( err)
        })
    } )
  }

}
