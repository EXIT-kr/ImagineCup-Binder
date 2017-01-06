import { BinderAngular2Page } from './app.po';

describe('binder-angular2 App', function() {
  let page: BinderAngular2Page;

  beforeEach(() => {
    page = new BinderAngular2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
