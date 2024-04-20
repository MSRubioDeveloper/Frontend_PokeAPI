import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PokemonesRoutingModule } from './pokemones-routing.module';
import { MainLayoutComponent } from './layout/main-layout/main-layout-component.component';
import { PrimengModule } from '../primeng/primeng.module';
import { AngularMaterialModule } from '../angular-material/angular-material.module';
import { PokemonesComponent } from './pages/pokemones/pokemones.component';
import { PaginaPrincipalComponent } from './pages/pagina-principal/pagina-principal.component';
import { PokemonCardComponent } from './components/pokemon-card/pokemon-card.component';
import { BuscarPokemonComponent } from './pages/buscar-pokemon/buscar-pokemon.component';
import { ReactiveFormsModule } from '@angular/forms';
import { PokemonInfoComponent } from './pages/pokemon-info/pokemon-info.component';
import { InfoAbilitiesComponent } from './components/info-abilities/info-abilities.component';



@NgModule({
  declarations: [
    MainLayoutComponent,
    PokemonesComponent,
    PaginaPrincipalComponent,
    PokemonCardComponent,
    BuscarPokemonComponent,
    PokemonInfoComponent,
    InfoAbilitiesComponent
  ],
  imports: [
    CommonModule,
    PokemonesRoutingModule,
    PrimengModule,
    AngularMaterialModule,

     //Reactive forms module
     ReactiveFormsModule,
  ]
})
export class PokemonesModule { }
