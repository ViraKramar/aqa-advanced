// 1) Function declaration
function calcAreaDecl(width, height) {
  return width * height;
}
console.log("Declaration:", calcAreaDecl(6, 11));

// 2) Function expression
const calcAreaExpr = function (width, height) {
  return width * height;
};
console.log("Expression:", calcAreaExpr(6, 11));

// 3) Arrow function
const calcAreaArrow = (width, height) => width * height;
console.log("Arrow:", calcAreaArrow(6, 11));
