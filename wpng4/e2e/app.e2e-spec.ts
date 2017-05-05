import { Wpng4Page } from './app.po';

describe('wpng4 App', () => {
  let page: Wpng4Page;

  beforeEach(() => {
    page = new Wpng4Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
