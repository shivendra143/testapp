import { Component, OnInit, ViewChild} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.scss']
})
export class CountriesComponent implements OnInit {
   public clickedEvent: Event;
   public searchEvent: Event;
  // searchdata: any='';
  constructor(
    private router: Router
  ) { }
  ngOnInit() { }


  childEventClicked(event: Event) {
   // console.log(event)
     this.clickedEvent = event;
     this.searchEvent = event;
   }


}
