const unroll = require("./unroll");

let square;
let smallerSquare;
let unrolledSquare;
let unrolledSmallerSquare;

beforeEach(() => {
  square = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
    [13, 14, 15, 16]
  ];
  
  smallerSquare = [
    ["a", "b", "c"],
    ["d", "e", "f"],
    ["g", "h", "i"]
  ];

  unrolledSquare = [1, 2, 3, 4, 8, 12, 16, 15, 14, 13, 9, 5, 6, 7, 11, 10];
  unrolledSmallerSquare =["a", "b", "c", "f", "i", "h", "g", "d", "e"];
});


describe("#unroll", function () {

  it("is a function", function () {
    expect(typeof unroll).toEqual("function");
  });

  it("unrolls a numeric square", function () {
    expect(unroll(square)).toEqual(unrolledSquare);
  });

  it("unrolls a smaller alphabet square", function () {
    expect(unroll(smallerSquare)).toEqual(unrolledSmallerSquare);
  });
});

      
