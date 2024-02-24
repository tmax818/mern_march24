# [Node Dates (Practice)](https://login.codingdojo.com/m/754/16715/124484)

## Learning Objectives

- Explain how the ISO 8601 date format applies to dates in computing
- Apply Day.js to manipulate dates and render them as console messages

## Node Dates

- [ ] Create a new project called [isodate-formatter]()

- [ ] Create an [index.js]() file

- [ ] Run `npm init -y`

- [ ] Add "type" field to package.json with value of "module": "type": "module"

- [ ] Run `npm install dayjs`

- [ ] Create new module file `mkdir utils && touch utils/formatDate.js`

- [ ] In [formatDate.js](), import the dayjs module.

- [ ] In [formatDate.js](), create and export a function that takes an ISO date, like 2023-01-01T12:34:56Z, and returns a readable string as an output (e.g. January 1, 2023, 12:34:56 PM UTC).

- [ ] Have a function for converting date formats to appear like "4 months ago"

- [ ] Have a function for converting date formats to appear like "Thursday, January 21, 2023"

- [ ] Have a function for converting date formats to appear like "01/21/2023"

- [ ] Test each string format with at least five different dates

- [ ] In index.js, import your functions, run them, and log their outputs to the console

- [ ] Bonus: Log your output with different colors by installing chalk `npm install chalk`