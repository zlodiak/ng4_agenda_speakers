import { SpeakersPage } from './app.po';

describe('speakers App', () => {
  let page: SpeakersPage;

  beforeEach(() => {
    page = new SpeakersPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
