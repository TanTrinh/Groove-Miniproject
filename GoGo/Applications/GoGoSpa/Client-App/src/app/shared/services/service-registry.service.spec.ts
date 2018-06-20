import { TestBed, inject } from '@angular/core/testing';

import { ServiceRegistryService } from './service-registry.service';

describe('ServiceRegistryService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ServiceRegistryService]
    });
  });

  it('should be created', inject([ServiceRegistryService], (service: ServiceRegistryService) => {
    expect(service).toBeTruthy();
  }));
});
