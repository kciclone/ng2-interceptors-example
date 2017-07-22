import { InterceptorPage } from './app.po';

describe('interceptor App', () => {
  let page: InterceptorPage;

  beforeEach(() => {
    page = new InterceptorPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
