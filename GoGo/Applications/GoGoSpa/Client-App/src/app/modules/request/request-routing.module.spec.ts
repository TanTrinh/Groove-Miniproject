import { RequestRoutingModule } from './request-routing.module';

describe('RequestRoutingModule', () => {
  let requestRoutingModule: RequestRoutingModule;

  beforeEach(() => {
    requestRoutingModule = new RequestRoutingModule();
  });

  it('should create an instance', () => {
    expect(requestRoutingModule).toBeTruthy();
  });
});
