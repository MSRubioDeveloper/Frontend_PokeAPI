import { AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { PokemonResponse } from '../../interfaces/pokemon-response.interface';

@Component({
  selector: 'pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrl: './pokemon-card.component.css'
})
export class PokemonCardComponent  {

  @Input({
    required: true
  })
  public headerImage?: string;

  @Input()
  public pokemon?: PokemonResponse;

  @ViewChild("cardImageBg") card?: ElementRef;

  public hasLoaded: boolean = false;


  constructor(
    private router: Router,
 
  ){}




  public information(): void{
    this.router.navigateByUrl(`main/pokemon-info/${this.pokemon?.name}`);
  }

  onLoad(){
    this.hasLoaded = false;
    setTimeout(()=>{
      this.hasLoaded = true;
    }, 500)
  }

 

}
