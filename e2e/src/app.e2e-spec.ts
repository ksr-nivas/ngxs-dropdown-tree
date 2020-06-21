import { NgxTreeviewPage } from './app.po';

describe('ngxs-dropdown-tree App', () => {
  let page: NgxTreeviewPage;

  beforeEach(() => {
    page = new NgxTreeviewPage();
  });

  it('should display brand message saying "ngxs-dropdown-tree"', () => {
    page.navigateTo();
    expect(page.getBrandText()).toEqual('ngxs-dropdown-tree');
  });
});
