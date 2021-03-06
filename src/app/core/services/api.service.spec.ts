import { ApiService } from './api.service';
import { mockHackers } from '../helpers.spec';
import { of as observableOf } from 'rxjs';

describe('ApiService', () => {
  let service: ApiService;
  const httpSpy = jasmine.createSpyObj('http', ['get']);

  beforeEach(() => {
    service = new ApiService(httpSpy);
    httpSpy.get.calls.reset();
  });

  describe('getHackers', () => {
    it('should return list of hackers', done => {
      const mockResponse = observableOf(mockHackers);

      httpSpy.get.and.returnValue(mockResponse);

      service.getHackers().subscribe(data => {
        expect(httpSpy.get).toHaveBeenCalledWith('/api/hackers?q=');
        expect(data).toEqual(mockHackers);
        done();
      });
    });
  });

  describe('getHackerDetails', () => {
    it('should return hacker details given hacker id', done => {
      const mockResponse = observableOf(mockHackers[0]);

      const id = mockHackers[0].id;

      httpSpy.get.and.returnValue(mockResponse);

      service.getHackerDetails(id).subscribe(data => {
        expect(httpSpy.get).toHaveBeenCalledWith(`/api/hackers?id=${id}`);
        expect(data).toEqual(mockHackers[0]);
        done();
      });
    });
  });
});
