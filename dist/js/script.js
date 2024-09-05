const dayInput = document.querySelector(".day");
const monthInput = document.querySelector(".month");
const yearInput = document.querySelector(".year");

const ageBtn = document.querySelector(".img-btn");
const dayOutput = document.querySelector(".days");
const monthOutput = document.querySelector(".months");
const yearOutput = document.querySelector(".years");

const dayError = document.getElementById("dayerror");
const monthError = document.getElementById("montherror");
const yearError = document.getElementById("yearerror");
const dayText = document.querySelector(".daylabel");
const monthText = document.querySelector(".monthlabel");
const yearText = document.querySelector(".yearlabel");

const today = new Date();

ageBtn.addEventListener("click", () => {
  let year = parseInt(yearInput.value);
  let month = parseInt(monthInput.value) - 1;
  let day = parseInt(dayInput.value);

  let yearLength = yearInput.value.length;
  let monthLength = monthInput.value.length;
  let dayLength = dayInput.value.length;
  // console.log(yearlength);

  if (isNaN(year)) {
    yearError.innerHTML = "This field is required";
    yearText.style.color = "red";
    yearInput.style.border = "1px solid red";
  } else if (today.getFullYear() < year || yearLength < 4) {
    yearError.innerHTML = "Must be in the past";
    yearText.style.color = "red";
    yearInput.style.border = "1px solid red";
  } else if (year < 1900) {
    yearError.innerHTML = "Must be in and above 1900s";
    yearText.style.color = "red";
    yearInput.style.border = "1px solid red";
  } else {
    yearError.innerHTML = "";
    yearText.style.color = "grey";
    yearInput.style.border = "1px solid grey";
  }
  console.log(year.length, today.getFullYear());

  if (isNaN(month)) {
    monthError.innerHTML = "This field is required";
    monthText.style.color = "red";
    monthInput.style.border = "1px solid red";
  } else if (month > 12) {
    monthError.innerHTML = "Must be a valid month";
    monthText.style.color = "red";
    monthInput.style.border = "1px solid red";
  } else {
    monthError.innerHTML = "";
    monthText.style.color = "grey";
    monthInput.style.border = "1px solid grey";
  }

  const daysInMonth = [
    31,
    28 + (isLeapYear(year) ? 1 : 0),
    31,
    30,
    31,
    30,
    31,
    31,
    30,
    31,
    30,
    31,
  ];

  if (isNaN(day)) {
    dayError.innerHTML = "This field is required";
    dayText.style.color = "red";
    dayInput.style.border = "1px solid red";
  } else if (day < 1 || day > 31 || day > daysInMonth[month]) {
    dayError.innerHTML = "Must be a valid day";
    dayText.style.color = "red";
    dayInput.style.border = "1px solid red";
  } else {
    dayError.innerHTML = "";
    dayText.style.color = "grey";
    dayInput.style.border = "1px solid grey";
  }

  if (!year || !month || !day) return;
  if (
    today.getFullYear() < year ||
    yearLength < 4 ||
    month > 12 ||
    day < 1 ||
    day > 31 ||
    day > daysInMonth[month]
  )
    return;

  console.log(day, dayError);

  console.log(year, month, day);

  const birthDate = new Date(year, month, day);

  let age = today.getFullYear() - birthDate.getFullYear();
  let monthDiff = today.getMonth() - birthDate.getMonth();
  let dayDiff = today.getDate() - birthDate.getDate();

  if (dayDiff < 0) {
    // monthDiff += 1;
    // dayDiff += new Date(today.getFullYear(), today.getMonth(), 0).getDate();
    let previousMonth = new Date(today.getFullYear(), today.getMonth(), 0);
    dayDiff = previousMonth.getDate();
    monthDiff--;
  }

  if (monthDiff < 0) {
    age--;
    monthDiff += 12;
  }

  let nextBirthday = new Date(
    today.getFullYear(),
    birthDate.getMonth(),
    birthDate.getDate()
  );
  if (today > nextBirthday) {
    nextBirthday = new Date(
      today.getFullYear() + 1,
      birthDate.getMonth(),
      birthDate.getDate()
    );
  }

  const remainingTime = nextBirthday - today;
  const remainingDays = Math.floor(remainingTime / (1000 * 60 * 60 * 24));
  const remainingMonths = Math.floor(remainingDays / 30.44);

  let remainingExactDays = remainingDays - Math.floor(remainingMonths * 30.44);
  if (birthDate.getMonth() === 1) {
    const isLeapYear = (year) =>
      year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0);
    const daysInFebruary = isLeapYear(nextBirthday.getFullYear()) ? 29 : 28;
    if (remainingExactDays >= daysInFebruary) {
      remainingExactDays = daysInFebruary - remainingExactDays;
    }
  }

  dayOutput.textContent = remainingExactDays;
  monthOutput.textContent = remainingMonths;
  yearOutput.textContent = age;

  console.log(birthDate, age, monthDiff, dayDiff);
  console.log(dayOutput, monthOutput, yearOutput);
  console.log(nextBirthday, remainingDays, remainingTime);

  function isLeapYear(year) {
    return year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0);
  }
});
