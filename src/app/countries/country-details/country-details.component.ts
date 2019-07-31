import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { CountryService } from '../country.service';

@Component({
  selector: 'app-country-details',
  templateUrl: './country-details.component.html',
  styleUrls: ['./country-details.component.scss']
})
export class CountryDetailsComponent implements OnInit {

  currentData: any;
  id: any;

  constructor(private countryService: CountryService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.id = params['id'];
     // console.log(this.id )
     this.currentData = this.countryService.getCountriesById(this.id);
     // console.log(this.currentData)
     this.currentData.subscribe((response)=>{
      console.log(response)
      this.currentData= response[0];
     });
    });


  }


  onEditRecipe() {
    this.router.navigate(['edit'], {relativeTo: this.route});
  }


}
