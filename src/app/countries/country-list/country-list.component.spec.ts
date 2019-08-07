import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { CountryListComponent } from './country-list.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CountryService } from '../country.service';



describe('CountryListComponent', () => {
  let component: CountryListComponent;
  let fixture: ComponentFixture<CountryListComponent>;


  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, FormsModule, HttpClientModule],
      declarations: [ CountryListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CountryListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should call getCountries service aisa', function () {
    const service = TestBed.get(CountryService); // get your service
    spyOn(service, 'getCountries').and.callThrough(); // create spy
    component.getData('asia');
    expect(service.getCountries).toHaveBeenCalledWith('asia');
  });

  it('should call getCountries service europe', function () {
    const service = TestBed.get(CountryService); // get your service
    spyOn(service, 'getCountries').and.callThrough(); // create spy
    component.getData('europe');
    expect(service.getCountries).toHaveBeenCalledWith('europe');
  });

  it('should create', () => {
     expect(component).toBeTruthy();
   });
});
