import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { RouterTestingModule } from '@angular/router/testing';
import { CountriesComponent } from './countries/countries.component';
import { CountryHeaderComponent } from './countries/country-header/country-header.component';
import { CountryDetailsComponent } from './countries/country-details/country-details.component';
import { CountryListComponent } from './countries/country-list/country-list.component';
import { FormsModule } from '@angular/forms';


describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        FormsModule,
        AppRoutingModule
      ],
      declarations: [
        AppComponent,
        CountriesComponent,
        CountryHeaderComponent,
        CountryListComponent,
        CountryDetailsComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });


});
