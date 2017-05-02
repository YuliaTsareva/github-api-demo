import { browser, element, by } from 'protractor';

export class GithubApiDemoPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('gh-root h1')).getText();
  }
}
