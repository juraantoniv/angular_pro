import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {IEpisode} from "../interfeces/episode";
import {Observable} from "rxjs";
import {urls} from "../../configs/urls";

@Injectable({
  providedIn: 'root'
})
export class AllServicesService {

  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<IEpisode[]> {
    return this.httpClient.get<IEpisode[]>(urls.episode)
  }
  getAllById(id:string): Observable<IEpisode> {
    return this.httpClient.get<IEpisode>(`${urls.episode}/${id}`)
  }
}
