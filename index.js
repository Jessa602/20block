const users = [
  { name: "John", age: 25, occupation: "gardener" },
  { name: "Lenny", age: 51, occupation: "programmer" },
  { name: "Andrew", age: 43, occupation: "teacher" },
  { name: "Peter", age: 81, occupation: "teacher" },
  { name: "Anna", age: 43, occupation: "teacher" },
  { name: "Albert", age: 76, occupation: "programmer" },
  { name: "Adam", age: 47, occupation: "teacher" },
  { name: "Robert", age: 72, occupation: "driver" },
];

function main() {
  const root = document.getElementById("root");
  document.body.style.backgroundColor = "lightblue";
  document.body.style.fontFamily = "Arial, Helvetica, sans-serif";
  document.body.style.textAlign = "center";
  document.getElementById("root").style.border = "solid";
  document.getElementById("root").style.borderColor = "darkblue";
  document.getElementById("root").style.borderWidth = "15px";
  document.getElementById("root").style.margin = "200px";
  document.getElementById("root").style.padding = "20px";
  document.getElementById("root").style.backgroundColor = "white";
  const h1 = document.createElement("h1");
  h1.innerText = "FREELANCERS";
  root.appendChild(h1);
  const ul = document.createElement("ul");
  for (let i = 0; i < users.length; i++) {
    const li = document.createElement("li");
    li.innerText =
      users[i].name + " " + users[i].age + " " + users[i].occupation;
    ul.appendChild(li);
  }
  root.appendChild(ul);
}

//call the main function
main();
