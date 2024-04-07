const userLogin = () => {
  console.log("enter username and password");
  let username = prompt("Enter username");
  let password = prompt("enter password");
  return new Promise((res, rej) => {
    setTimeout(() => {
      console.log("Performing user Authentication");
      if (username === "naveen" && password === "123") {
        res("user Authentication");
      } else {
        rej("authentication failed");
      }
    }, 1000);
  });
};

function goToHomePage(userAuthStatus) {
  return Promise.resolve(`go to Home Page as  : ${userAuthStatus}`);
}

// userLogin()
//   .then((response) => {
//     console.log("validated User");
//     return goToHomePage(response);
//   })
//   .then((userAuthStatus) => {
//     console.log(userAuthStatus);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// async function performTask() {
//   try {
//     const res = await userLogin();
//     console.log("validated User");
//     const userAuthStatus = await goToHomePage(res);
//     console.log(userAuthStatus);
//   } catch (err) {
//     console.log(err);
//   }
// }

// performTask();
