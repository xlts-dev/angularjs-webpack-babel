export default ngModule => {
  describe(`test-directive`, () => {
    beforeEach(window.module(ngModule.name));

    it(`should test property`, () => {
      expect(true).to.be.true;
    });
  });
};
