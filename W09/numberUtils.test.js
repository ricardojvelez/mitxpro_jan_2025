const { isOdd, isEven } = require("./numberUtils");

describe("#numberUtils", () => {
  describe("#isOdd", () => {
    describe("when the number is odd", () => {
      it("returns true", () => {
        expect(isOdd(1)).toEqual(true);
      });
    });

    describe("when the number is even", () => {
      it("returns false", () => {
        expect(isOdd(2)).toEqual(false);
      });
    });
  });

  describe('#isEven', () => {
    describe('when the number is even', () => {
      it('returns true', () => {
        expect(isEven(2)).toEqual(true);
      })
    })

    describe.only('when the number is odd', () => {
      it('returns false', () => {
        expect(isEven(3)).toEqual(false);
      })
    })
  })
});


