describe("Bowling", function() {

  beforeEach(function() {
    bowling = new Bowling();
  });

  it("Records a players score -without spares or strikes", function() {
    expect(bowling.score).toEqual(bowling.calculate(kd_pins));

  });




});
