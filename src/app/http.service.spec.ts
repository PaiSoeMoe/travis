import { TestBed } from '@angular/core/testing';

import { HttpService } from './http.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';

describe('HttpService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      HttpClientModule
    ], providers: [HttpClient]
  }));

  it('should be created', () => {
    const service: HttpService = TestBed.get(HttpService);
    expect(service).toBeTruthy();
  });
});
