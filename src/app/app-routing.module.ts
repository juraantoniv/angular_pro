import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {LayoutComponentComponent} from "./layouts/layout.component/layout.component.component";


const router:Routes=[
  {path:'', component:  LayoutComponentComponent,children:[
      {path:'', loadChildren:()=>import('./modules/item.module').then(value => value.ItemModule)},
    ]}
]


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(router)
  ]
})
export class AppRoutingModule { }
