import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainLayoutComponent } from './layout/main-layout/main-layout-component.component';
import { PokemonesComponent } from './pages/pokemones/pokemones.component';
import { PaginaPrincipalComponent } from './pages/pagina-principal/pagina-principal.component';
import { BuscarPokemonComponent } from './pages/buscar-pokemon/buscar-pokemon.component';
import { PokemonInfoComponent } from './pages/pokemon-info/pokemon-info.component';

const routes: Routes = [
  {
    path: "",
    component: MainLayoutComponent,
    children: [
      { path: "", component: PaginaPrincipalComponent},
      { path: "pokemones", component: PokemonesComponent},
      { path: "search-pokemon", component:  BuscarPokemonComponent},
      { path: "pokemon-info/:id", component:  PokemonInfoComponent},
      { path: "**", redirectTo: "pokemones"},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PokemonesRoutingModule { }
