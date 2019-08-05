import { Component, OnInit, ViewChild} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.scss']
})
export class CountriesComponent implements OnInit {
   public clickedEvent: Event;
   constructor(
    private router: Router
  ) { }
  ngOnInit() { }


  childEventClicked(event: Event) {
     this.clickedEvent = event;
   }


}
