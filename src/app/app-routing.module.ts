import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: "main",
    loadChildren: ()=> import("./pokemones/pokemones.module").then( m => m.PokemonesModule)
  },
  {
    //cualquier otra ruta que no sean las definidas
    path: "**",
    redirectTo: "main"
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
