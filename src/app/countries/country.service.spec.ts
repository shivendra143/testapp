
import { TestBed } from '@angular/core/testing';
import { HttpTestingController, HttpClientTestingModule } from '@angular/common/http/testing';
import { CountryService } from './country.service';
import { environment } from '../../environments/environment';


describe('TestService', () => {

  let httpVerify: HttpTestingController;
  let testService: CountryService;

  beforeEach(() => {

    TestBed.configureTestingModule({
        imports: [ HttpClientTestingModule ],
        providers: [ CountryService ]
    });

    testService = TestBed.get(CountryService);
    httpVerify = TestBed.get(HttpTestingController);

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
    const req = httpVerify.expectOne(url);
    expect(req.request.method).toEqual('GET');
    req.flush(testdata);
    httpVerify.verify();
  });

});
