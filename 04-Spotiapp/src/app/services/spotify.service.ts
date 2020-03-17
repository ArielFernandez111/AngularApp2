import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor( private http: HttpClient ) { 
    console.log('Spotify Service Listo');
  }

  getNewReleases() {

    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQC5Dv2Ty85b2cgKOxgd-LeovoxQsrHm8-GvAGuTrkrrHyeO7tvPRujMF9cgiL9Of2pJeb63x3d5zV9FhN8'
    });

    return this.http.get('https://api.spotify.com/v1/browse/new-releases?limit=20', { headers } );
  }
}
