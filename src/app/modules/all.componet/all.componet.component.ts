import { Component, OnInit } from '@angular/core';
import {IEpisode} from "../interfeces/episode";
import {AllServicesService} from "../services/all.services.service";

@Component({
  selector: 'app-all.componet',
  templateUrl: './all.componet.component.html',
  styleUrls: ['./all.componet.component.css']
})
export class AllComponetComponent implements OnInit {
  episodes:IEpisode[]

  constructor(private AllServicesService:AllServicesService) { }

  ngOnInit(): void {
    this.AllServicesService.getAll().subscribe( value=> {

      this.episodes=value
      console.log(this.episodes)
    }
)}
}
