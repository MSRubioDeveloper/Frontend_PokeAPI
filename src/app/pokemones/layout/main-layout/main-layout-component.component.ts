import { Component } from '@angular/core';

@Component({
  selector: 'app-main-layout-component',
  templateUrl: './main-layout-component.component.html',
  styleUrl: './main-layout-component.component.css'
})
export class MainLayoutComponent {

  public sidebarItems = [
    { label: "Paigna Principal", icon: "home", url: "/main"},
    { label: "Pokemones", icon: "people", url: "/main/pokemones"},
    { label: "Buscar", icon: "search", url: "/main/search-pokemon"},

  ];


}
