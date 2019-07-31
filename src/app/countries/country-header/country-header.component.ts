import { Component, OnInit, Output, EventEmitter} from '@angular/core';


@Component({
  selector: 'app-country-header',
  templateUrl: './country-header.component.html',
  styleUrls: ['./country-header.component.scss']
})
export class CountryHeaderComponent implements OnInit {
  searchText: any = { name: '' };
  eruope:any;
  asia:any;
  status:false;
  countries:any;
  val='asia';
  constructor() { }

   ngOnInit() {
   }

   @Output() eventClicked = new EventEmitter<Event>();

   //More app code

   getEvent(event: Event): void {
     this.eventClicked.emit(event);
   }

}
