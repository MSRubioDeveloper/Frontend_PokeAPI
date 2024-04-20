import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PokemonService } from '../../services/pokemon-service.service';
import { PokemonResponse } from '../../interfaces/pokemon-response.interface';
import { MatDialog } from '@angular/material/dialog';
import { InfoAbilitiesComponent } from '../../components/info-abilities/info-abilities.component';
import { catchError } from 'rxjs';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'page-pokemon-info',
  templateUrl: './pokemon-info.component.html',
  styleUrl: './pokemon-info.component.css'
})
export class PokemonInfoComponent implements OnInit {

  public pokemonsFounded?: PokemonResponse | any;

  constructor(
    private activatedRouter: ActivatedRoute,
    private pokemonService: PokemonService,
    private router: Router,
    public dialog: MatDialog,
    public toastr: ToastrService
  ){}


  ngOnInit(): void {
    this.activatedRouter.params.subscribe(params => {
      const productId = params['id'];
      this.pokemonService.searchPokemonById( productId ).pipe(
        // map(pokemon => users.filter(user => user.id_empleado.toString().includes( productId.toString() ) )),
        // map(filteredUsers => filteredUsers.slice(0, 5))
        catchError( err => {
          this.toastr.error(`El pokemon con el id "${ productId}" no existe, haz sido redirigido...`)
          this.router.navigateByUrl("/");
          return "ok";
        })
  
      )
      .subscribe( data => {
        if( !data ) this.router.navigateByUrl("/")

        this.pokemonsFounded = data ;
        
      });
    });
  }


  openCommentsDialog( url: string){

    
    const dialogRef = this.dialog.open(InfoAbilitiesComponent,{
      width: "700px",
      height: "90vh"
    });

    dialogRef.componentInstance.url = url;
    dialogRef.componentInstance.url_sprite = this.pokemonsFounded.sprites.front_default;
    console.log( url)


  }




}
