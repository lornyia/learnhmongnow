import { LearnhmongnowPage } from './app.po';

describe('learnhmongnow App', () => {
  let page: LearnhmongnowPage;

  beforeEach(() => {
    page = new LearnhmongnowPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
