// Display a spinner animation in the terminal

// Store the spinner characters
let spinner = "|/-\\|/-\\|\n";

// Set the time delay
let time = 100;

// Iterate through the characters of spinner
for (const char of spinner) {

  // Print each character 200ms after the other
  setTimeout(() => {
    process.stdout.write(char);
  }, time)

  // Increment the time by 200ms
  time += 200;
}










setTimeout(() => {
  process.stdout.write('\r|   ');
}, 100);

setTimeout(() => {
  process.stdout.write('\r/   ');
}, 300);

setTimeout(() => {
  process.stdout.write('\r-   ');
}, 500);

setTimeout(() => {
  // Need to escape the backslash since it's a special character.
  process.stdout.write('\r\\   '); 
}, 700);

setTimeout(() => {
  process.stdout.write('\r|   ');
}, 900);

setTimeout(() => {
  process.stdout.write('\r/   ');
}, 1100);

setTimeout(() => {
  process.stdout.write('\r-   ');
}, 1300);

setTimeout(() => {
  // Need to escape the backslash since it's a special character.
  process.stdout.write('\r\\   '); 
}, 1500);

setTimeout(() => {
  process.stdout.write('\r|   ');
}, 1700);