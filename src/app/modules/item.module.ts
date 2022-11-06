import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ItemRoutingModule } from './item-routing.module';
import { AllComponetComponent } from './all.componet/all.componet.component';
import { DetailsComponent } from './details/details.component';
import { CharactersComponent } from './characters/characters.component';
import {HttpClientModule} from "@angular/common/http";


@NgModule({
  declarations: [
    AllComponetComponent,
    DetailsComponent,
    CharactersComponent,
  ],
  imports: [
    CommonModule,
    ItemRoutingModule,
    HttpClientModule
  ]
})
export class ItemModule { }
