import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CountriesComponent } from './countries/countries.component';
import { CountryDetailsComponent } from './countries/country-details/country-details.component';


const appRoutes: Routes = [
  { path: '', redirectTo: 'countries', pathMatch: 'full' },
  {
    path: 'countries',
    component: CountriesComponent,
    children: [
      { path: ':id',
         component: CountryDetailsComponent
      },
    ]
  }
];

@NgModule({
  imports: [
    RouterModule,
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
