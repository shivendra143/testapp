import { Component, OnInit, Output, Input, EventEmitter} from '@angular/core';


@Component({
  selector: 'app-country-header',
  templateUrl: './country-header.component.html',
  styleUrls: ['./country-header.component.scss']
})
export class CountryHeaderComponent implements OnInit {
  searchText: any;
  eruope: any;
  asia: any;
  status: false;
  countries: any;
  val = 'asia';
  constructor() { }
  @Input() sdata: any;
  @Output() eventClicked = new EventEmitter<Event>();

  ngOnInit() {
   }

   ClearInput() {
    this.searchText = '';
   }
   getEvent(event: Event): void {
     this.eventClicked.emit(event);
   }

}
