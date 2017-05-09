import { TestBed, inject } from '@angular/core/testing';
import { HttpModule } from '@angular/http';
import { AuthService } from '../auth/auth.service';

import { RepositoriesService } from './repositories.service';

describe('RepositoriesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpModule],
      providers: [RepositoriesService, {provide: AuthService, useValue: {}}],
    });
  });

  it('should ...', inject([RepositoriesService], (service: RepositoriesService) => {
    expect(service).toBeTruthy();
  }));
});
