import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../../services/pokemon-service.service';
import { AbilityResponse } from '../../interfaces/ability-response.interface';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-info-abilities',
  templateUrl: './info-abilities.component.html',
  styleUrl: './info-abilities.component.css'
})
export class InfoAbilitiesComponent implements OnInit{
  
    public abilityInfo?: AbilityResponse | any;
    public sprite_url?: string;

  constructor(
    private pokemonService: PokemonService,
    private router: Router,
    private toastr: ToastrService
  ){}
  
   ngOnInit(): void {
    this.abilityInfo =  this.pokemonService.getAbilityInfo( this.url )
                      .then( ability =>{
                        this.abilityInfo = ability;
                      })
                      .catch( err => {
                        console.log( err)

                        this.router.navigateByUrl("/pokemones");
                      })
      
  }

  public url: string = "";
  public url_sprite: string = "";

  public test(){
    console.log( this.abilityInfo);
  }
}
