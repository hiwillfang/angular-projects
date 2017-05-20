import { MapItAppPage } from './app.po';

describe('map-it-app App', () => {
  let page: MapItAppPage;

  beforeEach(() => {
    page = new MapItAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
