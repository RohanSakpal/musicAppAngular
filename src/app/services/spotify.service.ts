import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {
  //setup header
  private authorizationKey = 'Bearer BQD7BDC5N0JzYAub_ooR5knQS8VY8XfzoKrhuta7eCoLavp7FmL4dc27LREbU2BBKNwmPe6CvP1OwV2lSmpZO3dzZjOWnyVvaWXLybh29esf34KTrB-dUvzTBdl7Xhd-Lc8EmeW4u20XoQbTc91PPZqxrr4LnN4'

  private httpOptions = {
    headers: new HttpHeaders({
      "Accept": "application/json",
      "Content-Type": "application/json",
      "Authorization": this.authorizationKey
    })
  };

  //service for search query
  private searchUrl: string;
  private artistUrl: string;
  private albumsUrl: string;
  private albumUrl: string;

  constructor(private _http: HttpClient) { }

  searchMusic(str: string): Observable<any> {
    this.searchUrl = `https://api.spotify.com/v1/search?q=${str}&offset=0&limit=20&type=artist&market=ID`;
    return this._http.get<any>(this.searchUrl, this.httpOptions);
  }

  getArtist(id: string):Observable<any> {
    this.artistUrl = `https://api.spotify.com/v1/artists/${id}`;
    return this._http.get<any>(this.artistUrl, this.httpOptions);
  }

  getAlbums(artistId: string):Observable<any> {
    this.albumsUrl = `https://api.spotify.com/v1/artists/${artistId}/albums`;
    return this._http.get<any>(this.albumsUrl, this.httpOptions);
  }

  getAlbum(id: string):Observable<any> {
    this.albumUrl = `https://api.spotify.com/v1/albums/${id}`;
    return this._http.get<any>(this.albumUrl, this.httpOptions);
  }
}

