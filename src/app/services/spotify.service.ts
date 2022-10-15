import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {
  //setup header
  private authorizationKey = 'Bearer BQBTJfU-BaAUJqHEGLv3zOtKC_vLFB2NWi3WNgqB9_lLB-hEG-SVpmKcl2LGDxLmXn0J2BpjAGTSHDOEE5y-MKF2jSpSd-F_lfqzzEnILak-xW2tkHx0EmJmZQQAb2_pKXBbxTIHbenBYNAtzdgTCg-ZDU0-2yRMTLiKFGiJeA2aWnQr5Tpojm5jn9yPTck'

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

