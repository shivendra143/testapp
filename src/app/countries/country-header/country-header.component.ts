import { Component, OnInit, Output, Input, EventEmitter} from '@angular/core';


@Component({
  selector: 'app-country-header',
  templateUrl: './country-header.component.html',
  styleUrls: ['./country-header.component.scss']
})
export class CountryHeaderComponent implements OnInit {
  searchText: any;
  eruope:any;
  asia:any;
  status:false;
  countries:any;
  val='asia';
  constructor() { }
  @Input() searchdata: any;
  @Output() eventClicked = new EventEmitter<Event>();


   ngOnInit() {
    this.searchText=this.searchdata;
    //console.log(this.searchdata);
   }


   //More app code

   getEvent(event: Event): void {
     this.eventClicked.emit(event);
   }

}
