import { Component, OnInit } from '@angular/core';
import { Artist } from '../Artist';
import { SpotifyService } from '../services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  searchStr:string;
  searchRes:Artist[];
  constructor(private serv:SpotifyService) { }

  ngOnInit(): void {
  }

  searchMusic(){
    this.serv.searchMusic(this.searchStr).subscribe((res)=>{
      // console.log(res.artists.items);
      this.searchRes = res.artists.items;
    })
  }

}
