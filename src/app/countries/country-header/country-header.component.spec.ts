import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CountryHeaderComponent } from './country-header.component';
import { FormsModule } from '@angular/forms';

describe('CountryHeaderComponent', () => {
  let component: CountryHeaderComponent;
  let fixture: ComponentFixture<CountryHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule],
      declarations: [ CountryHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CountryHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

   it('should create', () => {
     expect(component).toBeTruthy();
   });
});
