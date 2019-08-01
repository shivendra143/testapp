import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";
import { CountryService } from '../country.service';


@Component({
  selector: 'app-country-list',
  templateUrl: './country-list.component.html',
  styleUrls: ['./country-list.component.scss']
})
export class CountryListComponent implements OnInit{
  countries:any =[];
  currentData:any;
  val='asia';

  @Input() event: Event;

  //More app code


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

  getList(){
     // console.log(this.event);
     if(this.event !=undefined ){
      this.getData(this.event);
     }
    }

/**
 *
 * @param val Get all list behalf of regin function
 */
 getData(val){
  this.countryService.getCountries(val).subscribe(
    response => {
      //console.log(response)
      this.countries = response;
      // Do stuff whith your result
    },
    err => {
      console.log(err.message)
      // Do stuff whith your error
    },
    () => {
      console.log('complete')
     },
   );
  }
  /**
   * Input search result through header input
   */
    getSearch(){
       console.log(this.event)
       this.countryService.getCountriesById(this.event).subscribe(
        response => {
          console.log(response)
          this.countries = response;
          // Do stuff whith your result
        },
        err => {
          console.log(err.message)
          // Do stuff whith your error
        },
        () => {
          console.log('complete')
         },
       );
    }

    Reset(){
      // console.log(event)
      //  this.searchdata = '';
       this.getData(this.val);
       this.router.navigate(['/']);
     }
}
