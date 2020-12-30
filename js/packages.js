const today = new Date();
const currentMonth = today.getMonth() + 1;
const currentDay = today.getDate();
const currentYear = today.getFullYear();
const currentDate = currentYear + "-" + currentMonth + "-" + currentDay;
document.getElementById("select-date").value = currentDate;
handleChange();


// function changePrice(i) {
//
//   var selectedOption = i.options[i.selectedIndex].value;
//   if (selectedOption === "luxury") {
//     document.getElementById("price-ep").innerHTML = "₹4990";
//     document.getElementById("price-cp").innerHTML = "₹5190";
//     document.getElementById("price-map").innerHTML = "₹5490";
//     document.getElementById("price-ap").innerHTML = "₹5790";
//     document.getElementById("price-jp").innerHTML = "₹5990";
//   }else if (selectedOption === "alphine") {
//     document.getElementById("price-ep").innerHTML = "₹3990";
//     document.getElementById("price-cp").innerHTML = "₹4190";
//     document.getElementById("price-map").innerHTML = "₹4490";
//     document.getElementById("price-ap").innerHTML = "₹4790";
//     document.getElementById("price-jp").innerHTML = "₹4990";
//   }
//
// }


function changePrice(date, i) {
  if (date > 2 && date < 9) {
    var i = document.getElementById("select-package");
    var selectedOption = i.options[i.selectedIndex].value;
    if (selectedOption === "luxury") {
      document.getElementById("price-ep").innerHTML = "₹3999";
      document.getElementById("price-cp").innerHTML = "₹4299";
      document.getElementById("price-map").innerHTML = "₹5099";
      document.getElementById("price-ap").innerHTML = "₹5499";
    }else if (selectedOption === "alphine") {
      document.getElementById("price-ep").innerHTML = "₹3499";
      document.getElementById("price-cp").innerHTML = "₹3799";
      document.getElementById("price-map").innerHTML = "₹4599";
      document.getElementById("price-ap").innerHTML = "₹4999";
    }
    // extra bed
    document.getElementById("price-ep-bed").innerHTML = "₹650";
    document.getElementById("price-cp-bed").innerHTML = "₹850";
    document.getElementById("price-map-bed").innerHTML = "₹1050";
    document.getElementById("price-ap-bed").innerHTML = "₹1350";
  } else {
    var i = document.getElementById("select-package");
    var selectedOption = i.options[i.selectedIndex].value;
    if (selectedOption === "luxury") {
      document.getElementById("price-ep").innerHTML = "₹3000";
      document.getElementById("price-cp").innerHTML = "₹3300";
      document.getElementById("price-map").innerHTML = "₹3800";
      document.getElementById("price-ap").innerHTML = "₹4400";
    }else if (selectedOption === "alphine") {
      document.getElementById("price-ep").innerHTML = "₹2500";
      document.getElementById("price-cp").innerHTML = "₹2800";
      document.getElementById("price-map").innerHTML = "₹3300";
      document.getElementById("price-ap").innerHTML = "₹3900";
    }
    // extra bed
    document.getElementById("price-ep-bed").innerHTML = "₹550";
    document.getElementById("price-cp-bed").innerHTML = "₹750";
    document.getElementById("price-map-bed").innerHTML = "₹950";
    document.getElementById("price-ap-bed").innerHTML = "₹1150";
  }

}

function handleChange() {
  const inputDate = document.getElementById("select-date").value;
  const date = new Date(inputDate).getMonth() + 1;
  var i = document.getElementById("select-package");
  changePrice(date, i);
}
