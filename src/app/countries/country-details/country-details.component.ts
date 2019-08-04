import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { CountryService } from '../country.service';

@Component({
  selector: 'app-country-details',
  templateUrl: './country-details.component.html',
  styleUrls: ['./country-details.component.scss']
})
export class CountryDetailsComponent implements OnInit, OnDestroy {

  currentData: any;
  id: any;
  private details: any;

  constructor(private countryService: CountryService,
    private router: Router,
    private route: ActivatedRoute) { }


  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.id = params['id'];
      this.GetDetails(this.id); });
  }
 GetDetails(val) {
    this.details = this.countryService.getCountriesById(val).subscribe(
      response => {
        this.currentData = response[0];
       },
      err => {
        console.log(err.message);
      },
      () => {
        console.log('complete');
       }
     );
}
ngOnDestroy() {
   this.details.unsubscribe();
 }

}
