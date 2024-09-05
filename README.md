  Age Calculator
This project is a simple age calculator that calculates the user's age based on their birthday input. 
It also displays the number of months and days remaining until the user's next birthday. 
The user enters their birth date and clicks an arrow icon to view their age details.

  Features
Age Calculation: Calculates the exact age of the user in years, months, and days based on their birthdate.
Next Birthday Info: Displays the number of months and days remaining until the user's next birthday.
Interactive UI: Users input their birth date and click an arrow icon to trigger the calculation.

  How to Use
Enter your birth date in the input field provided (typically in a DD-MM-YYYY format).
Click on the arrow icon to calculate your age.
The result will display:
Your current age in years.
The number of months and days remaining until your next birthday.
If your birthday is today, the calculator will indicate that you have just turned a new age.

 Getting Started
 Clone the Repository: https://github.com/Nkiru-Ujam/age-calculator.git

  Technologies Used
HTML: For structuring the UI of the calculator.
CSS: For styling the input field, buttons, and result display.
JavaScript: For calculating the age, months, and days based on the birthdate input.

  Age Calculation Logic
The calculator uses the Date object in JavaScript to calculate the difference between the current date and the user's birthdate.
The exact age in years is calculated by subtracting the birth year from the current year.
The remaining months and days are calculated by comparing the current date with the user's upcoming birthday in the current or next year.
Example Calculation
If you enter a birthdate of 1995-05-15 and today's date is 2024-09-05, the calculator will display:
29 years old.
8 months and 10 days remaining until your next birthday.
