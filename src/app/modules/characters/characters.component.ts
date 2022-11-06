import { Component, OnInit } from '@angular/core';
import {IEpisode} from "../interfeces/episode";
import {ActivatedRoute, Router} from "@angular/router";
import {AllServicesService} from "../services/all.services.service";

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent implements OnInit {

  episod:{ [p: string]: any } | undefined
  episodes:IEpisode[]

  constructor( private router:Router ,private ActivatedRoute:ActivatedRoute,private AllServicesService:AllServicesService) {
    this.ActivatedRoute.params.subscribe(({id}) => {
      this.episod=this.router.getCurrentNavigation()?.extras.state
      console.log(id)
      console.log(this.router.getCurrentNavigation()?.extras.state)
      this.AllServicesService.getAllById(id).subscribe(value =>this.episod=value )
      console.log(this.episod)
    })
  }

  ngOnInit(): void {
  }

}
