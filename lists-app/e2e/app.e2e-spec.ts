import { ListsAppPage } from './app.po';

describe('lists-app App', () => {
  let page: ListsAppPage;

  beforeEach(() => {
    page = new ListsAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
