const signUpButton = document.getElementById("signUp");
const signInButton = document.getElementById("signIn");
const container = document.getElementById("container");
let returnMsg = "Did not get it";
let color = "linear-gradient(to right, #FFDD00, #FBB034)";
signUpButton.addEventListener("click", () => {
  container.classList.add("right-panel-active");
});

signInButton.addEventListener("click", () => {
  container.classList.remove("right-panel-active");
});

document.getElementById("signup-btn").addEventListener("click", async (e) => {
  e.preventDefault();
  const name = document.querySelector("#sign-name").value;
  const username = document.querySelector("#sign-username").value;
  const email = document.querySelector("#sign-email").value;
  const password = document.querySelector("#sign-password").value;

  let signData = {
    name,
    username,
    email,
    password,
  };

  try {
    const res = await fetch(
      "https://timetrackerbe.up.railway.app/user/signup",
      {
        method: "POST",
        body: JSON.stringify(signData),
        headers: {
          "content-type": "application/json",
        },
      }
    );
    const result = await res.json();
    if (result.result == true) {
      returnMsg = result.msg;
      // document.cookie("token = result.token");
      color = "linear-gradient(to right, #00b09b, #96c93d)";
      document.querySelector(".signupForm").reset();
    } else if (result.result == false) {
      returnMsg = result.msg;
      color = "linear-gradient(to right, #A40606, #D98324)";
    }

    notify();
  } catch (err) {
    console.log(err);
  }
});

document.getElementById("login-btn").addEventListener("click", async (e) => {
  e.preventDefault();
  const email = document.querySelector("#log-email").value;
  const password = document.querySelector("#log-password").value;

  let logData = {
    email,
    password,
  };

  try {
    const res = await fetch("https://timetrackerbe.up.railway.app/user/login", {
      method: "POST",
      body: JSON.stringify(logData),
      headers: {
        "content-type": "application/json",
      },
    });
    const result = await res.json();
    console.log(result);
    if (result.result == true) {
      returnMsg = result.msg;
      color = "linear-gradient(to right, #00b09b, #96c93d)";

      document.querySelector(".signupForm").reset();
      // location.href = "../views/track.html";
    } else if (result.result == false) {
      returnMsg = result.msg;
      color = "linear-gradient(to right, #A40606, #D98324)";
    }

    notify();
  } catch (err) {
    console.log(err);
  }
});

const notify = () => {
  Toastify({
    text: returnMsg,
    duration: 3000,
    // destination: "https://github.com/apvarun/toastify-js",
    newWindow: true,
    // close: true,
    gravity: "bottom", // `top` or `bottom`
    position: "center", // `left`, `center` or `right`
    stopOnFocus: true, // Prevents dismissing of toast on hover
    style: {
      background: color,
    },
    onClick: function () {}, // Callback after click
  }).showToast();
};

// showToast();
