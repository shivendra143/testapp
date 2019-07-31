import { Component, OnInit, ViewChild} from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.scss']
})
export class CountriesComponent implements OnInit {
  searchText='';
  constructor(
    private router: Router
  ) { }
  public clickedEvent: Event;

  childEventClicked(event: Event) {
    console.log(event)
     this.clickedEvent = event;
     this.Reset(event);
   }
  ngOnInit() {
  }
  Reset(event){
    console.log(event)
    this.searchText=null;
    this.router.navigate(['/']);
  }

}
