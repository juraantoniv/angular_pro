import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AllComponetComponent} from "./all.componet/all.componet.component";
import {CharactersComponent} from "./characters/characters.component";

const routes: Routes = [
  { path:'', component:AllComponetComponent,children:[
      {path:':id',component:CharactersComponent}
    ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ItemRoutingModule { }
