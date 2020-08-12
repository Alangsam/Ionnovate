const dog = [
  {
    name: "Alaskan Klee Kai",
    size: "small",
    coat: "dark",
    personality: "rambunctious",
    url:
      "https://www.hillspet.com/content/dam/cp-sites/hills/hills-pet/en_us/img/breeds/alaskan-klee-kai-in-yard.jpg",
  },
  {
    name: "Pomeranian",
    size: "small",
    coat: "light",
    personality: "rambunctious",
    url:
      "https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2017/11/12225627/Pomeranian-On-White-01.jpg",
  },
  {
    name: "Yorkipoo",
    size: "small",
    coat: "splotchy",
    personality: "obedient",
    url:
      "https://i.pinimg.com/originals/a3/e7/e7/a3e7e77be5c6ac74cb3512341c90cc48.jpg",
  },
  {
    name: "English Cocker Spaniel",
    size: "small",
    coat: "splotchy",
    personality: "obedient",
    url:
      "https://d17fnq9dkz9hgj.cloudfront.net/breed-uploads/2018/08/english-cocker-spaniel-card-small.jpg?bust=1535568861",
  },
  {
    name: "Yorkshire Terrier",
    size: "small",
    coat: "splotchy",
    personality: "obedient",
    url:
      "https://cdn2-www.dogtime.com/assets/uploads/2011/01/file_23132_yorkshire-terrier.jpg",
  },
  {
    name: "American Eskimo Dog",
    size: "medium",
    coat: "light",
    personality: "obedient",
    url:
      "https://d17fnq9dkz9hgj.cloudfront.net/breed-uploads/2018/08/american-eskimo-dog-card-small.jpg?bust=1535567308",
  },
  {
    name: "Afghan Hound",
    size: "medium",
    coat: "light",
    personality: "rambunctious",
    url:
      "https://images2.minutemediacdn.com/image/upload/c_fill,g_auto,h_1248,w_2220/v1555341680/shape/mentalfloss/istock_000015184774_small.jpg?itok=YYlSXPWZ",
  },
  {
    name: "Pitbul",
    size: "medium",
    coat: "light",
    personality: "obedient",
    url:
      "https://i.pinimg.com/originals/70/bd/e5/70bde558835ff0d2b29154150a2a784c.jpg",
  },
  {
    name: "American Foxhound",
    size: "medium",
    coat: "splotchy",
    personality: "obedient",
    url:
      "https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2017/11/05140410/American-Foxhound-2.jpg",
  },
  {
    name: "Basset Hound",
    size: "medium",
    coat: "splotchy",
    personality: "rambunctious",
    url:
      "https://vetstreet.brightspotcdn.com/dims4/default/1567d53/2147483647/crop/0x0%2B0%2B0/resize/645x380/quality/90/?url=https%3A%2F%2Fvetstreet-brightspot.s3.amazonaws.com%2F66%2Fe14b90a41e11e087a80050568d634f%2Ffile%2FBasset-Hound-2-645mk062311.jpg",
  },
  {
    name: "Bernese Mountain Dog",
    size: "large",
    coat: "dark",
    personality: "rambunctious",
    url: "https://threedog.com/app/uploads/2019/08/Bernese_Mountain_DOg2.jpg",
  },
  {
    name: "Somoyed",
    size: "large",
    coat: "light",
    personality: "obedient",
    url:
      "https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2017/11/20122208/Samoyed-standing-in-the-forest.jpg",
  },
  {
    name: "Great Dane",
    size: "large",
    coat: "dark",
    personality: "obedient",
    url:
      "https://thestatehousefile.com/wp-contenthttps://cdn.orvis.com/images/DBS_GreatDane_1280.jpg/uploads/2017/02/EberhartGreatDanes.jpg",
  },
  {
    name: "Dalmation",
    size: "large",
    coat: "splotchy",
    personality: "rambunctious",
    url:
      "https://vetstreet-brightspot.s3.amazonaws.com/ee/140380a73111e0a0d50050568d634f/file/Dalmatian-2-645mk062311.jpg",
  },
  {
    name: "Pyrenean Mastiff",
    size: "large",
    coat: "splotchy",
    personality: "rambunctious",
    url:
      "https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2017/11/12225240/Pyrenean-Mastiff-On-White-01.jpg",
  },
];

const cats = [
  {
    weight: "skinny",
    activeness: "lazy",
    coat: "tabby",
    url:
      "https://www.catster.com/wp-content/uploads/2018/01/McGee_Mackerel-Tabby_2_by-Denise-LeBeau.jpg",
  },
  {
    weight: "skinny",
    activeness: "Active",
    coat: "tabby",
    url:
      "https://www.hillspet.com/content/dam/cp-sites/hills/hills-pet/en_us/exported/cat-care/Skyword/images/striped-tabby-laying-on-bed-SW.jpg",
  },
  {
    weight: "skinny",
    activeness: "lazy",
    coat: "calico",
    url:
      "https://www.coveredincathair.com/sites/coveredincathair.com/files/Skinny%20Calico%20Kitty.jpg",
  },
  {
    weight: "skinny",
    activeness: "active",
    coat: "tuxedo",
    url:
      "https://1.bp.blogspot.com/--XL9hd9Pnvk/TuO21Svmv4I/AAAAAAAAAUo/vri_XZ1lOGA/s1600/Tuxedo+Kitty.jpg",
  },
  {
    weight: "skinny",
    activeness: "lazy",
    coat: "tuxedo",
    url:
      "https://lh3.googleusercontent.com/proxy/_IXdEGJSopq7a4uQQIpvaNrDgjdgbhaU9LY6A98eGRlz9s-EXv-TXm11l-NH0oCHHR2m-7XAAALzwuFejuL0ei6noyzX8Iv3WnmBzHG4iG3hJka1zRJSUFZ6Or1lpa7Qjc3_dC_kDjLvVzxkWxWNLn_v-A",
  },
  {
    weight: "normal",
    activeness: "active",
    coat: "tabby",
    url:
      "https://i2.wp.com/consciouscat.net/wp-content/uploads/2017/09/tabby-cat-2-e1504603272898.jpg?fit=550%2C366&ssl=1",
  },
  {
    weight: "normal",
    activeness: "lazy",
    coat: "tabby",
    url:
      "https://i.pinimg.com/736x/bb/af/a5/bbafa5688a7e64c4431a3b575f9035c6.jpg",
  },
  {
    weight: "normal",
    activeness: "active",
    coat: "calico",
    url: "https://www.catster.com/wp-content/uploads/2018/03/Calico-cat.jpg",
  },
  {
    weight: "normal",
    activeness: "lazy",
    coat: "calico",
    url:
      "https://i.pinimg.com/originals/78/0d/3a/780d3a0d9106db662859af5adeb82220.jpg",
  },
  {
    weight: "normal",
    activeness: "active",
    coat: "tuxedo",
    url:
      "https://i.pinimg.com/originals/42/25/22/422522477e9fb69ddbabbb041444381a.jpg",
  },
  {
    weight: "fat",
    activeness: "lazy",
    coat: "tabby",
    url:
      "https://i.pinimg.com/736x/b9/68/ed/b968edd400c69c17989ce4bfbf4eb3c4.jpg",
  },
  {
    weight: "fat",
    activeness: "active",
    coat: "tuxedo",
    url: "https://www.catster.com/wp-content/uploads/2015/06/fat-cat-11.jpg",
  },
  {
    weight: "fat",
    activeness: "lazy",
    coat: "tuxedo",
    url: "https://i.ytimg.com/vi/EBnzcNHhj4Q/maxresdefault.jpg",
  },
  {
    weight: "fat",
    activeness: "active",
    coat: "calico",
    url:
      "https://i.pinimg.com/originals/b4/b0/0a/b4b00aa511c40e52a6bba93894d68ce9.jpg",
  },
  {
    weight: "fat",
    activeness: "lazy",
    coat: "calico",
    url:
      "https://i.pinimg.com/originals/41/b6/51/41b651de7b4ebf9724a9d392b6b95420.jpg",
  },
];

document.addEventListener("DOMContentLoaded", function (event) {
  function userObject() {
    const animal = document.getElementById("animal-form").value;
    return console.log(animal);
  }
  userObject();
});

function showAttributes() {
  const animal = document.querySelector('input[name="whichSpecies"]:checked')
    .value;
  if (animal) {
    document.getElementById("preferencesDefault").style.display = "none";
  }
  if (animal === "Dog") {
    document.getElementById("dogPreferences").style.display = "block";
    document.getElementById("catPreferences").style.display = "none";
  } else if (animal === "Cat") {
    document.getElementById("catPreferences").style.display = "block";
    document.getElementById("dogPreferences").style.display = "none";
  }
}

function dogObject() {
  const animal = document.querySelector('input[name="whichSpecies"]:checked')
    .value;
  const dogSize = document.querySelector('input[name="whichSize"]:checked')
    .value;
  const dogPersonality = document.querySelector(
    'input[name="whichCraziness"]:checked'
  ).value;
  const dogCoat = document.querySelector('input[name="whichCoat"]:checked')
    .value;
  if (animal.toLowerCase() === "dog") {
    const animalObject = {
      size: dogSize,
      coat: dogCoat,
      personality: dogPersonality,
    };
    const matchedDogs = dog.filter((dogObj) => {
      if (
        dogObj.size.toLowerCase() === animalObject.size.toLowerCase() &&
        dogObj.coat.toLowerCase() === animalObject.coat.toLowerCase() &&
        dogObj.personality.toLowerCase() ===
          animalObject.personality.toLowerCase()
      ) {
        return dogObj;
      }
    });
    const urlArr = matchedDogs.map((obj) => obj.url);
    const myNode = document.getElementById("animalImages");
    myNode.innerHTML = "";
    urlArr.forEach((url) => {
      let imgElement = document.createElement("img");
      imgElement.src = url;
      imgElement.className = "col-4 offset-4 img-thumbnail my-4";
      document.getElementById("animalImages").appendChild(imgElement);
      console.log(imgElement);
    });
  }
}

function catObject() {
  const animal = document.querySelector('input[name="whichSpecies"]:checked')
    .value;
  const catSize = document.querySelector('input[name="whichWeight"]:checked')
    .value;
  const catEnergy = document.querySelector('input[name="whichEnergy"]:checked')
    .value;
  const catCoat = document.querySelector('input[name="whichCoatCat"]:checked')
    .value;
  if (animal === "Cat") {
    const animalObject = {
      size: catSize,
      coat: catCoat,
      personality: catEnergy,
    };
    const matchedCats = cats.filter((catObj) => {
      if (
        catObj.weight.toLowerCase() === animalObject.size.toLowerCase() &&
        catObj.coat.toLowerCase() === animalObject.coat.toLowerCase() &&
        catObj.activeness.toLowerCase() ===
          animalObject.personality.toLowerCase()
      ) {
        return catObj;
      }
    });
    const urlArr = matchedCats.map((obj) => obj.url);
    const myNode = document.getElementById("animalImages");
    myNode.innerHTML = "";
    urlArr.forEach((url) => {
      let imgElement = document.createElement("img");
      imgElement.src = url;
      imgElement.className = "col-4 offset-4 img-thumbnail my-4";
      document.getElementById("animalImages").appendChild(imgElement);
      console.log(imgElement);
    });
  }
}

function animalImages() {
  const animal = document.querySelector('input[name="whichSpecies"]:checked')
    .value;
  if (animal === "Dog") {
    dogObject();
  } else if (animal === "Cat") {
    catObject();
  }
}

// function insertImages(userObject, animalObject) {
//     switch(userObject.)
//   console.log(document.getElementById("animalImages"));
// }
