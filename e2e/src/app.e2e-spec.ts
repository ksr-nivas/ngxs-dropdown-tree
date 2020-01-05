import { NgxTreeviewPage } from './app.po';

describe('ngxs-treeview App', () => {
  let page: NgxTreeviewPage;

  beforeEach(() => {
    page = new NgxTreeviewPage();
  });

  it('should display brand message saying "ngxs-treeview"', () => {
    page.navigateTo();
    expect(page.getBrandText()).toEqual('ngxs-treeview');
  });
});
