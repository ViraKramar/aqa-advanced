function printLater(text, ms) {
  setTimeout(() => {
    console.log(text);
  }, ms);
}

printLater("Hello after 1000ms", 1000);
