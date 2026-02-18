// Task 4: Area and volume calculations (rounded to 2 decimals using Math)

const round2 = (value) => Number(value.toFixed(2));

// 4.1 Area of a circle: π * r^2
const radiusCircle = 10;
const circleArea = Math.PI * radiusCircle ** 2;
console.log("Circle area:", round2(circleArea));

// 4.2 Area of a rectangle: length * width
const length = 100;
const width = 3.5;
const rectangleArea = length * width;
console.log("Rectangle area:", round2(rectangleArea));

// 4.3 Volume of a cylinder: π * r^2 * height
const radiusCylinder = 4;
const height = 8;
const cylinderVolume = Math.PI * radiusCylinder ** 2 * height;
console.log("Cylinder volume:", round2(cylinderVolume));
