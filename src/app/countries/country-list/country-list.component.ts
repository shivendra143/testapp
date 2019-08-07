import { Component, OnInit, Input, Output, EventEmitter, OnDestroy} from '@angular/core';
import { Router, ActivatedRoute} from '@angular/router';
import { CountryService } from '../country.service';
import { CountryHeaderComponent } from '../country-header/country-header.component';


@Component({
  selector: 'app-country-list',
  templateUrl: './country-list.component.html',
  styleUrls: ['./country-list.component.scss']
})
export class CountryListComponent implements OnInit, OnDestroy {
  countries: any = [];
  currentData: any;
  @Input() searchfun: CountryHeaderComponent;
  val = 'asia';
  private list: any;
  private search: any;
  @Input() event: Event;
  @Output() searchReset = new EventEmitter<Event>();
  constructor(
    private countryService: CountryService,
    private router: Router,
    private route: ActivatedRoute
  ) {}


  ngOnInit() {
    this.getData(this.val);
 }

 /**
  * On button click get data by country name
  */

  getList() {
     // console.log(this.event);
     if (this.event !== undefined ) {
      this.getData(this.event);
     }
    }

/**
 *
 * @param val Get all list behalf of regin function
 */
 getData(val) {
  this.list = this.countryService.getCountries(val).subscribe(
    response => {
      this.countries = response;
      this.router.navigate(['/']);
    },
    err => {
      console.log(err.message);
    },
    () => {
      console.log('complete');
     }
   );
  }
  /**
   * Input search result through header input
   */
    getSearch() {
       this.search = this.countryService.getCountriesById(this.event).subscribe(
        response => {
          this.countries = response;
          },
        err => {
          console.log(err.message);
        },
        () => {
          console.log('complete');
         }
       );
    }

    Reset() {
      this.searchfun.ClearInput();
     // console.log(this.val)
       this.getData(this.val);
       this.router.navigate(['/']);
    }



    ngOnDestroy() {

    }
}
