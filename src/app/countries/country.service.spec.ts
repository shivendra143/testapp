
import { TestBed, inject, async } from '@angular/core/testing';
import { HttpTestingController, HttpClientTestingModule } from '@angular/common/http/testing';
import { CountryService } from './country.service';
import { environment } from '../../environments/environment';


describe('TestService', () => {

  let httpMock: HttpTestingController;
  let testService: CountryService;

  beforeEach(() => {

    TestBed.configureTestingModule({
        imports: [ HttpClientTestingModule ],
        providers: [ CountryService ]
    });

    testService = TestBed.get(CountryService);
    httpMock = TestBed.get(HttpTestingController);

  });

  it('getCountries() should http GET data', () => {

    const testdata = [
      { name: 'Afghanistan', capital: 'kabul', currencies: [
        {
           code: 'AFN',
           name: 'Afghan afghani',
          symbol: '؋'
        }]
      }
    ];

    testService.getCountries('asia').subscribe((res) => {
      expect(res).toEqual(testdata);
    });
    const url = environment.APIURL + 'region/asia';
    const req = httpMock.expectOne(url);
    expect(req.request.method).toEqual('GET');
    req.flush(testdata);
     httpMock.verify();
  });

});
