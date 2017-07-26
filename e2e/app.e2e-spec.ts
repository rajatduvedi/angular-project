import { AngularRajProjectPage } from './app.po';

describe('angular-raj-project App', () => {
  let page: AngularRajProjectPage;

  beforeEach(() => {
    page = new AngularRajProjectPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
