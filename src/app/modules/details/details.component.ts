import {Component, Input, OnInit} from '@angular/core';
import {IEpisode} from "../interfeces/episode";

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  @Input()
  episodes:IEpisode

  constructor() { }

  ngOnInit(): void {
  }

}
