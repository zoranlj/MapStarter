import { AppPage } from './app.po';

describe('new App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display Map Starter title', () => {
    page.navigateTo();
    expect(page.getTitleText()).toContain('Map Starter');
  });
});
