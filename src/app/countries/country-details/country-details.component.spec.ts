import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { CountryDetailsComponent } from './country-details.component';
import { AppRoutingModule } from '../../app-routing.module';
import { CountriesComponent } from '../countries.component';
import { CountryHeaderComponent } from '../country-header/country-header.component';
import { CountryListComponent } from '../country-list/country-list.component';
import { FormsModule } from '@angular/forms';




describe('CountryDetailsComponent', () => {

  let component: CountryDetailsComponent;
  let fixture: ComponentFixture<CountryDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule, AppRoutingModule, FormsModule],
      declarations: [ CountryDetailsComponent, CountriesComponent, CountryHeaderComponent, CountryListComponent]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CountryDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

   it('should create', () => {
     expect(component).toBeTruthy();
   });
});
