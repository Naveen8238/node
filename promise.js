// const promise = new Promise((res, rej) => {
//   console.log("aync task execution");
//   if (false) {
//     const person = { name: "naveen" };
//     res(person);
//   } else {
//     const error = { errCode: "1001" };
//     rej(error);
//   }
// });
// promise
//   .then((val) => {
//     console.log("Passed");
//     console.log(val);
//   })
//   .catch((val) => {
//     console.log("failed!");
//     console.log(val);
//   });

// function aSyncTask() {
//   return Promise.resolve();
// }
// aSyncTask().then(() => console.log(name));

// const name = "Naveen";

const makeApi = (time) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("This API executed in" + time);
    }, time);
  });
};

let multiApiCall = [makeApi(1000), makeApi(2000), makeApi(500)];
Promise.all(multiApiCall).then((values) => {
  console.log(values);
});
Promise.race(multiApiCall).then((value) => {
  console.log(value);
});
