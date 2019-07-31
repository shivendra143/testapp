import { Component, OnInit, ViewChild} from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.scss']
})
export class CountriesComponent implements OnInit {
  searchText = '';
  public clickedEvent: Event;
  constructor(
    private router: Router
  ) { }
  ngOnInit() { }

  Reset(event){
    // console.log(event)
     this.searchText = null;
     this.router.navigate(['/']);
   }

  childEventClicked(event: Event) {
   // console.log(event)
     this.clickedEvent = event;
     this.Reset(event);
   }


}
