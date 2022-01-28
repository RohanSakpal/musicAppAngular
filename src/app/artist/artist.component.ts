import { Component, OnInit } from '@angular/core';
import { Artist } from '../Artist';

import { SpotifyService } from '../services/spotify.service';
import { Album } from '../Album';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.css']
})
export class ArtistComponent implements OnInit {
id:string;
artist:Artist[];
Albums:Album[];
  constructor(private serv:SpotifyService,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.pipe(map(params=>params['id'])).subscribe((id)=>{
      this.serv.getArtist(id).subscribe((resArt)=>{
        this.artist = resArt;
      })

      this.serv.getAlbums(id).subscribe((resAlbums)=>{
        this.Albums = resAlbums.items;
      })
    })
  }

}
