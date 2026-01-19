// GitHub Repo: https://github.com/TenGallons/cs81-module4a-reviewtracker

// Weekly reading log
// This array holds reading entries for the week.
// Each item is an object with a day, a book title, and minutes spent reading.
const readingLog = [
  { day: "Monday", book: "Dune", minutes: 30 },
  { day: "Tuesday", book: "1984", minutes: 20 },
  { day: "Wednesday", book: "Dune", minutes: 25 },
  { day: "Thursday", book: "The Hobbit", minutes: 40 },
  { day: "Friday", book: "1984", minutes: 15 }
];

// Adds a new reading entry to the log
// Purpose: Adds one new reading session into the readingLog array.
// Inputs: day (string), book (string), minutes (number).
// Output: No return value; it updates readingLog by pushing a new object.
function addReadBook(day, book, minutes) {
  // Create a new object using the input values so it matches the data structure in readingLog
  const newEntry = { day, book, minutes };

  // Push appends the new object to the end of the array, increasing readingLog.length by 1
  readingLog.push(newEntry);

  // Improvement idea: validate minutes so bad data doesn't get added
  // Example: if (typeof minutes !== "number" || minutes <= 0) return;
}

// Returns total minutes spent reading all week
// Purpose: Totals up the minutes field from every object in the log.
// Inputs: log (array of reading entry objects).
// Output: Returns a number representing total minutes read.
function totalReadingMinutes(log) {
  // Start total at 0 so we can add each entry's minutes into it
  let total = 0;

  // This loop goes entry-by-entry and reads entry.minutes each time
  for (let entry of log) {
    // Add the minutes from the current object into the total
    total += entry.minutes;
  }

  // Return the final sum after looping through all entries
  return total;
}

// Returns the book read most frequently
// Purpose: Finds which book title appears the most times in the log.
// Inputs: log (array of reading entry objects).
// Output: Returns the most frequently read book title as a string (or null if none).
function mostReadBook(log) {
  // bookCounts stores frequency counts using book titles as keys
  const bookCounts = {};

  // First loop: count how many times each book appears
  for (let entry of log) {
    // If this book has not been seen yet, initialize its count
    if (!bookCounts[entry.book]) {
      bookCounts[entry.book] = 1;
    } else {
      // Otherwise increase the existing count
      bookCounts[entry.book]++;
    }
  }

  // Track the "best" (most frequent) book while scanning counts
  let maxBook = null;
  let maxCount = 0;

  // Second loop: find the highest count value inside bookCounts
  for (let book in bookCounts) {
    // If this book has a higher count than our current max, update max values
    if (bookCounts[book] > maxCount) {
      maxBook = book;
      maxCount = bookCounts[book];
    }
  }

  // Return the title that won the frequency comparison
  return maxBook;
}

// Prints a summary of minutes read per day
// Purpose: Prints each reading entry in a readable sentence format.
// Inputs: log (array of reading entry objects).
// Output: No return value; it prints lines to the console.
function printDailySummary(log) {
  // Loop through every entry and print day, minutes, and book
  for (let entry of log) {
    // Template strings make formatting clean and readable
    console.log(`${entry.day}: ${entry.minutes} mins reading "${entry.book}"`);
  }
}

// Example usage
// Add a Saturday entry so we can see how the log changes after calling addReadBook()
addReadBook("Saturday", "Dune", 50);

// Print all entries including the new Saturday entry
printDailySummary(readingLog);

// Total minutes read across the whole array
console.log("Total minutes read:", totalReadingMinutes(readingLog));

// Most frequently read book title
console.log("Most read book:", mostReadBook(readingLog));

// Test case added (new input data):
// Add a Sunday entry with a different book to test that totals + mostReadBook still behave correctly
addReadBook("Sunday", "The Hobbit", 35);
console.log("New total minutes read:", totalReadingMinutes(readingLog));
console.log("New most read book:", mostReadBook(readingLog));