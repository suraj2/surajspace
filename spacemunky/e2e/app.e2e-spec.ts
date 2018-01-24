import { SpacemunkyPage } from './app.po';

describe('spacemunky App', function() {
  let page: SpacemunkyPage;

  beforeEach(() => {
    page = new SpacemunkyPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
