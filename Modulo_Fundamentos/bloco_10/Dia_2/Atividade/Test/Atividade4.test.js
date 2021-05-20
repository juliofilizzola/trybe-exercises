const getRepos = require('../src/Atividade3');

it('gets a list of repositories names', () => {
  return getRepos('https://api.github.com/orgs/tryber/repos').then(result => {
    expect(result).toContain('sd-01-week4-5-project-todo-list');
    expect(result).toContain('sd-01-week4-5-project-meme-generator');
  });
});