import { GithubApiDemoPage } from './app.po';

describe('github-api-demo App', () => {
  let page: GithubApiDemoPage;

  beforeEach(() => {
    page = new GithubApiDemoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('gh works!');
  });
});
