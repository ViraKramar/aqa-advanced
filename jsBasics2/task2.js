const averageGrade = 100; // 0..100

switch (true) {
  case averageGrade < 0 || averageGrade > 100:
    console.log("Некоректне значення averageGrade");
    break;
  case averageGrade < 60:
    console.log("Незадовільно");
    break;
  case averageGrade <= 70:
    console.log("Задовільно");
    break;
  case averageGrade <= 80:
    console.log("Добре");
    break;
  case averageGrade <= 90:
    console.log("Дуже добре");
    break;
  default:
    console.log("Відмінно"); // 91..100
}
