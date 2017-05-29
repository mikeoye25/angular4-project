import { MaxAppPage } from './app.po';

describe('max-app App', () => {
  let page: MaxAppPage;

  beforeEach(() => {
    page = new MaxAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
