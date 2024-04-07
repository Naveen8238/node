console.log("Start operarion");

function sleep(milliseconds) {
  console.log("operation is running");
  setTimeout(() => {
    console.log("operation is done");
  }, milliseconds);
  setTimeout(() => {
    console.log("operation is running");
  }, 3000);
}
sleep(1000);
console.log("do something else...");
