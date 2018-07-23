import { JqueryPluginModule } from './jquery-plugin.module';

describe('JqueryPluginModule', () => {
  let jqueryPluginModule: JqueryPluginModule;

  beforeEach(() => {
    jqueryPluginModule = new JqueryPluginModule();
  });

  it('should create an instance', () => {
    expect(jqueryPluginModule).toBeTruthy();
  });
});
