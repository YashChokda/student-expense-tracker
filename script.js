let total = 0;

function addExpense() {
  let name = document.getElementById("name").value;
  let amount = document.getElementById("amount").value;

  if (name === "" || amount === "") {
    alert("Please fill all fields");
    return;
  }

  let list = document.getElementById("list");
  let item = document.createElement("li");
  item.innerText = name + " - ₹" + amount;
  list.appendChild(item);

  total += parseInt(amount);
  document.getElementById("total").innerText = total;

  document.getElementById("name").value = "";
  document.getElementById("amount").value = "";
}
