import { TimersModule } from './timers.module';

describe('TimersModule', () => {
  let timersModule: TimersModule;

  beforeEach(() => {
    timersModule = new TimersModule();
  });

  it('should create an instance', () => {
    expect(timersModule).toBeTruthy();
  });
});
