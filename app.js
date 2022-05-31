let btns = document.querySelectorAll("button");
let res = document.getElementById("resaltes");

let arrRes = [];

btns.forEach(function (ele) {
  ele.onclick = function () {
    if (ele.textContent == "AC") {
      document.getElementById("b-ac").addEventListener("click", function () {
        arrRes = [];
        res.textContent = null;
      });
    } else if (ele.textContent == "=") {
      let arrS = arrRes.join("")
      res.textContent = eval(arrS);
    } else {
        res.textContent += `${ele.textContent} `

      arrRes.push(ele.textContent);
    }
  };
});
