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

document.addEventListener("DOMContentLoaded", function (event) {
  function userObject() {
    const animal = document.getElementById("animal-form").value;
    return console.log(animal);
  }
  userObject();
});
function userObject() {
  const animal = document.querySelector('input[name="whichSpecies"]:checked')
    .value;
  const dogSize = document.querySelector('input[name="whichSize"]:checked')
    .value;
  const dogPersonality = document.querySelector(
    'input[name="whichCraziness"]:checked'
  ).value;
  const dogCoat = document.querySelector('input[name="whichCoat"]:checked')
    .value;
  const petName = document.querySelector('input[name="whichCoat"]:checked')
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
      imgElement.className = "col-4 offset-4 img-thumbnail";
      document.getElementById("animalImages").appendChild(imgElement);
      console.log(imgElement);
    });
  }
}
// function insertImages(userObject, animalObject) {
//     switch(userObject.)
//   console.log(document.getElementById("animalImages"));
// }
