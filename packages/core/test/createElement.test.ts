describe('createElement', () => {
  it('creates virtual dom node', () => {
    const element = createElement('div', {}, 'hello');

    expect(element.type).toBe('div');
  });
});