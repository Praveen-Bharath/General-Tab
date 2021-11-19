var ItemArray = [
  {
    id:1,
    name: "Biriyani",
    img: "./Images/briyani.jpg",
    type: "lunch",
  },
  {
    id:2,
    name: "Chappathi",
    img: "./Images/chapathi.jpg",
    type: "breakfast",
  },
  {
    id:3,
    name: "Curd",
    img: "./Images/curd.jpg",
    type: "lunch",
  },
  {
    id:4,
    name: "Idly",
    img: "./Images/idly.jpg",
    type: "breakfast",
  },
  {
    id:5,
    name: "Lemon",
    img: "./Images/lemon.jpg",
    type: "lunch",
  },
  {
    id:6,
    name: "Meals",
    img: "./Images/meals.jpg",
    type: "lunch",
  },
  {
    id:7,
    name: "Naan",
    img: "./Images/naan.jpg",
    type: "dinner",
  },
  {
    id:8,
    name: "Noodles",
    img: "./Images/noodles.jpg",
    type: "dinner",
  },
  {
    id:9,
    name: "Pongal",
    img: "./Images/pongal.jpg",
    type: "breakfast",
  },
  {
    id:10,
    name: "Poori",
    img: "./Images/poori.jpg",
    type: "breakfast",
  },
  {
    id:11,
    name: "Roast",
    img: "./Images/roast.jpg",
    type: "dinner",
  }
];
var div = document.getElementById("itemlist");
function renderItems(itemName) {
  switch (itemName) {
    case "all":
      deleteItems();
      ItemArray.forEach((item, index) => {
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
      var arraybreakfast = ItemArray.filter((value) => value.type === "breakfast");
      arraybreakfast.forEach((item, index) => {
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
      var arraylunch = ItemArray.filter((value) => value.type === "lunch");
      arraylunch.forEach((item, index) => {
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
      var arraydinner = ItemArray.filter((value) => value.type === "dinner");
      arraydinner.forEach((item, index) => {
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
