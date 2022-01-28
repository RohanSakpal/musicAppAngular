import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';
import { Album } from '../Album';
import { SpotifyService } from '../services/spotify.service';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.css']
})
export class AlbumComponent implements OnInit {

  id:string;
  album:Album[];
  constructor(private serv:SpotifyService,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.pipe(map(params=>params['id'])).subscribe((id)=>{
      this.serv.getAlbum(id).subscribe((resAlb)=>{
        this.album = resAlb;
      })
    })
  }

}
