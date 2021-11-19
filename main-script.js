var ItemArray = [
  {
    name: "Biriyani",
    img: "./Images/briyani.jpg",
    type: "lunch",
  },
  {
    name: "Chappathi",
    img: "./Images/chapathi.jpg",
    type: "breakfast",
  },
  {
    name: "Curd",
    img: "./Images/curd.jpg",
    type: "lunch",
  },
  {
    name: "Idly",
    img: "./Images/idly.jpg",
    type: "breakfast",
  },
  {
    name: "Lemon",
    img: "./Images/lemon.jpg",
    type: "lunch",
  },
  {
    name: "Meals",
    img: "./Images/meals.jpg",
    type: "lunch",
  },
  {
    name: "Naan",
    img: "./Images/naan.jpg",
    type: "dinner",
  },
  {
    name: "Noodles",
    img: "./Images/noodles.jpg",
    type: "dinner",
  },
  {
    name: "Pongal",
    img: "./Images/pongal.jpg",
    type: "breakfast",
  },
  {
    name: "Poori",
    img: "./Images/poori.jpg",
    type: "breakfast",
  },
  {
    name: "Roast",
    img: "./Images/roast.jpg",
    type: "dinner",
  },
];
var div = document.getElementById("itemlist");
function renderItems(itemName) {
  switch (itemName) {
    case "all":
      deleteItems();
      ItemArray.map((item, index) => {
        var image = document.createElement("img");
        var name = document.createElement("p");
        image.src = item.img;
        name.innerHTML = item.name;
        div.appendChild(image);
        div.appendChild(name);
       
      });
      break;
    case "breakfast":
      deleteItems();
      var arr = ItemArray.filter((value) => value.type === "breakfast");
      arr.map((item, index) => {
        var image = document.createElement("img");
        var name = document.createElement("p");
        image.src = item.img;
        name.innerHTML = item.name;
        div.appendChild(image);
        div.appendChild(name);
      });
      break;
    case "lunch":
      deleteItems();
      var arr = ItemArray.filter((value) => value.type === "lunch");
      arr.map((item, index) => {
        var image = document.createElement("img");
        var name = document.createElement("p");
        image.src = item.img;
        name.innerHTML = item.name;
        div.appendChild(image);
        div.appendChild(name);
      });
      break;
    case "dinner":
      deleteItems();
      var arr = ItemArray.filter((value) => value.type === "dinner");
      arr.map((item, index) => {
        var image = document.createElement("img");
        var name = document.createElement("p");
        image.src = item.img;
        name.innerHTML = item.name;
        div.appendChild(image);
        div.appendChild(name);
      });
      break;
  }
}
function deleteItems() {
  if (div.hasChildNodes()) {
    var child = div.lastElementChild;
    while (child) {
      div.removeChild(child);
      child = div.lastElementChild;
    }
  }
}
