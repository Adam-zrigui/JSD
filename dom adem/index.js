let plus = document.getElementsByClassName("plus-btn");
for (let i = 0; i < plus.length; i++) {
  plus[i].addEventListener("click", function () {
    plus[i].previousElementSibling.value++;
    total();
  });
}
var minBtn = document.getElementsByClassName("minus-btn");

for (let i = 0; i < minBtn.length; i++) {
  minBtn[i].addEventListener("click", function () {
    if (minBtn[i].nextElementSibling.value > 1) {
      minBtn[i].nextElementSibling.value--;
      total();
    }
  });
}
var price = document.getElementById("finalPrice");
var lek = document.getElementsByClassName("like");

for (let i = 0; i < lek.length; i++) {
  lek[i].addEventListener("click", function () {
    if (lek[i].style.color == "red") {
      lek[i].style.color = "black";
    } else lek[i].style.color = "red";
  });
}
var del = document.getElementsByClassName("delete");

for (let i = 0; i < del.length; i++) {
  let det = del[i];

  det.addEventListener("click", function () {
    det.parentElement.remove();
    total();
  });
}
function total() {
  let sum = 0;
  for (let i = 0; i < items.length; i++) {
    sum =
      sum +
      items[i].querySelector(".price").innerText *
        items[i].querySelector(".Quant").value;
  }
  return (price.value = sum);
}
var items = document.getElementsByClassName("Item");