/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/

// Приклад enum для днів тижня
enum DayOfWeek {
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
  Sunday
}

// Функція, яка перевіряє, чи це вихідний день
function isWeekend(day: DayOfWeek): boolean {
  return day === DayOfWeek.Saturday || day === DayOfWeek.Sunday;
}

// Приклад використання функції
const today: DayOfWeek = DayOfWeek.Saturday;

if (isWeekend(today)) {
  console.log('Сьогодні вихідний!');
} else {
  console.log('Сьогодні робочий день.');
}
