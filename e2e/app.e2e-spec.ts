import { NotitionManagerPage } from './app.po';

describe('notition-manager App', function() {
  let page: NotitionManagerPage;

  beforeEach(() => {
    page = new NotitionManagerPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
