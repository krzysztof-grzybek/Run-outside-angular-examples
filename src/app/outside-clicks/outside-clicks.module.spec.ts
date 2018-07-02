import { OutsideClicksModule } from './outside-clicks.module';

describe('OutsideClicksModule', () => {
  let outsideClicksModule: OutsideClicksModule;

  beforeEach(() => {
    outsideClicksModule = new OutsideClicksModule();
  });

  it('should create an instance', () => {
    expect(outsideClicksModule).toBeTruthy();
  });
});
