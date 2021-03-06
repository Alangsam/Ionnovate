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

const fishes = [
  {
    care: "easy",
    color: "light",
    number: "One",
    url:
      "https://petfishonline.com/wp-content/uploads/2019/12/%D7%A2%D7%99%D7%A6%D7%95%D7%91-%D7%9C%D7%9C%D7%90-%D7%A9%D7%9D-14.png",
  },
  {
    care: "easy",
    color: "Dark",
    number: "One",
    url:
      "https://lh3.googleusercontent.com/proxy/Os_1qk0__QHAky_kcYMilmV5nuwKuRUH_Hd2-z9FSQo3kps-kZkoiqwUR48C4EChIZvthQzoe6r6tLbnPjsHE_2g1AUVpxkKK7ATCnciNGfj4kCGVEA5Z4HJf9W0aKdlMW0WXzh091N-Ng",
  },
  {
    care: "easy",
    color: "Misc",
    number: "Few",
    url:
      "https://www.peta.org/wp-content/uploads/2019/08/iStock-644996948_itthipolB-1.jpg",
  },
  {
    care: "easy",
    color: "light",
    number: "Few",
    url:
      "https://images-na.ssl-images-amazon.com/images/I/81V8e2y4njL._AC_SY450_.jpg",
  },
  {
    care: "easy",
    color: "Dark",
    number: "Many",
    url:
      "https://tropicalfishparadise.com/wp-content/uploads/2018/01/20180107_165513.jpg",
  },
  {
    care: "easy",
    color: "Misc",
    number: "Many",
    url: "https://d2j6dbq0eux0bg.cloudfront.net/images/5391016/986882728.jpg",
  },
  {
    care: "easy",
    color: "light",
    number: "One",
    url: "https://www.bettalove.com/Images/Betta_splendens,white.jpg",
  },
  {
    care: "hard",
    color: "Dark",
    number: "One",
    url:
      "https://forum.americanexpedition.us/images/channel-catfish/channel-catfish-in-another-tank.jpg",
  },
  {
    care: "hard",
    color: "Misc",
    number: "One",
    url:
      "https://i.pinimg.com/originals/de/08/d3/de08d3969241fe1a97d1885f91cfcd12.jpg",
  },
  {
    care: "hard",
    color: "light",
    number: "Few",
    url:
      "https://dlgdxii3fgupk.cloudfront.net/myaquariumclub.com/images/fbfiles/images/DSCF0005_v_1401702837.JPG",
  },
  {
    care: "hard",
    color: "Dark",
    number: "Few",
    url:
      "https://i.pinimg.com/originals/1b/9a/ac/1b9aac7d7b14dab0b285be79a27a5880.jpg",
  },
  {
    care: "hard",
    color: "Misc",
    number: "Many",
    url:
      "https://upload.wikimedia.org/wikipedia/commons/4/48/Neontetra_tmy.JPG",
  },
  {
    care: "hard",
    color: "light",
    number: "Many",
    url: "https://i.ytimg.com/vi/QKD0q-w5vfg/maxresdefault.jpg",
  },
  {
    care: "hard",
    color: "Dark",
    number: "Few",
    url:
      "https://bulk-share.slickpic.com/album/share/MhMw2iwzhOUkOw/10269792.0/1000/p/IMG_4109.jpg",
  },
  {
    care: "hard",
    color: "Misc",
    number: "One",
    url:
      "https://cdn.statically.io/img/nextshark.com/wp-content/uploads/2019/04/ASIAN_AROWANA-770x409.png?quality=100",
  },
];

function showAttributes() {
  const animal = document.querySelector('input[name="whichSpecies"]:checked')
    .value;
  if (animal) {
    document.getElementById("preferencesDefault").style.display = "none";
  }
  if (animal === "Dog") {
    document.getElementById("dogPreferences").style.display = "block";
    document.getElementById("catPreferences").style.display = "none";
    document.getElementById("fishPreferences").style.display = "none";
  } else if (animal === "Cat") {
    document.getElementById("catPreferences").style.display = "block";
    document.getElementById("dogPreferences").style.display = "none";
    document.getElementById("fishPreferences").style.display = "none";
  } else if (animal === "Fish") {
    document.getElementById("fishPreferences").style.display = "block";
    document.getElementById("dogPreferences").style.display = "none";
    document.getElementById("catPreferences").style.display = "none";
  }
}

function showNaming() {
  document.getElementById("nameDefault").style.display = "none";
  document.getElementById("miscelaneousInfo").style.display = "block";
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
  //   if ((matchedDogs.length = 0)) {
  //     document.getElementById("animalName").innerHTML = "";
  //   }
  const urlArr = matchedDogs.map((obj) => obj.url);
  const myNode = document.getElementById("animalImages");
  myNode.innerHTML = "";
  urlArr.forEach((url) => {
    let imgElement = document.createElement("img");
    imgElement.src = url;
    imgElement.className = "col-4 offset-4 img-thumbnail my-4";
    document.getElementById("animalImages").appendChild(imgElement);
    //console.log(imgElement);
  });
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

  const animalObject = {
    size: catSize,
    coat: catCoat,
    personality: catEnergy,
  };
  const matchedCats = cats.filter((catObj) => {
    if (
      catObj.weight.toLowerCase() === animalObject.size.toLowerCase() &&
      catObj.coat.toLowerCase() === animalObject.coat.toLowerCase() &&
      catObj.activeness.toLowerCase() === animalObject.personality.toLowerCase()
    ) {
      return catObj;
    }
  });
  //   if ((matchedCats.length = 0)) {
  //     document.getElementById("animalName").innerHTML = "";
  //   }
  const urlArr = matchedCats.map((obj) => obj.url);
  const myNode = document.getElementById("animalImages");
  myNode.innerHTML = "";
  urlArr.forEach((url) => {
    let imgElement = document.createElement("img");
    imgElement.src = url;
    imgElement.className = "col-4 offset-4 img-thumbnail my-4";
    document.getElementById("animalImages").appendChild(imgElement);
    //console.log(imgElement);
  });
}

function fishObject() {
  const fishCare = document.querySelector(
    'input[name="fishDifficulty"]:checked'
  ).value;
  const fishColor = document.querySelector('input[name="fishColor"]:checked')
    .value;
  const fishNumber = document.querySelector('input[name="fishNumber"]:checked')
    .value;
  const animalObject = {
    care: fishCare,
    color: fishColor,
    number: fishNumber,
  };
  const matchedFishes = fishes.filter((fishObj) => {
    if (
      fishObj.care.toLowerCase() === animalObject.care.toLowerCase() &&
      fishObj.color.toLowerCase() === animalObject.color.toLowerCase() &&
      fishObj.number.toLowerCase() === animalObject.number.toLowerCase()
    ) {
      return fishObj;
    }
  });
  //   if ((matchedDogs.length = 0)) {
  //     document.getElementById("animalName").innerHTML = "";
  //   }
  const urlArr = matchedFishes.map((obj) => obj.url);
  const myNode = document.getElementById("animalImages");
  myNode.innerHTML = "";
  urlArr.forEach((url) => {
    let imgElement = document.createElement("img");
    imgElement.src = url;
    imgElement.className = "col-4 offset-4 img-thumbnail my-4";
    document.getElementById("animalImages").appendChild(imgElement);
    //console.log(imgElement);
  });
}

function animalImages() {
  const animal = document.querySelector('input[name="whichSpecies"]:checked')
    .value;
  const name =
    document.getElementById("petFirst").value +
    " " +
    document.getElementById("petLast").value;
  if (animal === "Dog") {
    dogObject();
  } else if (animal === "Cat") {
    catObject();
  } else if (animal === "Fish") {
    fishObject();
  }

  if (document.getElementById("animalImages").innerHTML.length > 0) {
    document.getElementById("animalName").innerHTML = "";
    let animalName = document.createElement("h3");
    let applyHere = document.createElement("a");
    animalName.innerText = "This Could Be " + name;
    applyHere.innerText = "Apply to Adopt";
    applyHere.className = "btn btn-dark ml-2";
    applyHere.href = "application.html";
    document
      .getElementById("animalName")
      .appendChild(animalName)
      .appendChild(applyHere);
  } else {
    document.getElementById("animalName").innerHTML = "";
    let animalName = document.createElement("h3");
    animalName.innerText =
      "Sorry, none of our animals match your specifications :(";
    document.getElementById("animalName").appendChild(animalName);
  }
}

//https://github.com/justadudewhohacks/face-api.js#getting-started-displaying-detection-results

//for video player
const video = document.getElementById("videoDisplay");

//load models from folder

Promise.all([
  faceapi.nets.tinyFaceDetector.loadFromUri("/models"),
  faceapi.nets.faceLandmark68Net.loadFromUri("./models"),
  faceapi.nets.faceRecognitionNet.loadFromUri("./models"),
]).then(showVideo);

function showVideo() {
  navigator.getUserMedia(
    { video: {} },
    (res) => {
      video.srcObject = res;
    },
    (err) => {
      console.log(err);
    }
  );
}

video.addEventListener("play", () => {
  //every 200 ms, perfrom face detection on the streaming video(webcam, declared on line 512)
  // const canvas = faceapi.createCanvasFromMedia(video);
  // canvas.className = "absoluteP";
  // document.getElementById("videoSource").append(canvas);
  // const displaySize = { width: video.width, height: video.height };
  // faceapi.matchDimensions(canvas, displaySize);

  let isHuman = 0;

  var refreshId = setInterval(async () => {
    const faceObjects = await faceapi.detectAllFaces(
      video,
      new faceapi.TinyFaceDetectorOptions()
    );
    console.log(faceObjects[0].score);
    if (faceObjects[0].score > 0.9) {
      let submitbutton = document.createElement("button");
      let accNum = document.createElement("h4");
      accNum.className = "text-success";
      accNum.innerText =
        "We are " + faceObjects[0].score + "% sure you're a human";
      submitbutton.className = "btn btn-dark w-25 my-4";
      submitbutton.innerText = "Submit";
      submitbutton.id = "subButtonnn";
      submitbutton.setAttribute("onclick", "isNameValid()");

      await document
        .getElementById("sumbitFormButton")
        .appendChild(submitbutton);
      await document.getElementById("detectionAccuracy").appendChild(accNum);
      clearInterval(refreshId);
      video.parentNode.removeChild(video);
      //   // console.log(faceObjects[0].detection.score);
    }
    console.log(isHuman);
    // const sizedFaceObjects = faceapi.resizeResults(faceObjects, displaySize);
    // canvas.getContext("2d").clearRect(0, 0, canvas.width, canvas.height);
    // faceapi.draw.drawDetections(canvas, sizedFaceObjects);
    // faceapi.draw.drawFaceLandmarks(canvas, sizedFaceObjects);
    //console.log(faceObjects[0].detection.score);
  }, 300);
});

//VALIDATION

// function isPetNameValid() {
//   const petFirst = document.getElementById("petFirst").value;
//   const petLast = document.getElementById("petLast").value;
//   const dogSize = document.querySelector("input[name='whichSize']:checked")
//     .value;
//   //const dogCrazy
//   //const dogCoat
//   if (petFirst.length > 0 && petFirst <= 30) {
//   }
//   console.log({ petFirst, petLast, dogSize });
// }

function isNameValid() {
  const first = document.getElementById("appFirstName");
  const middle = document.getElementById("appMidName");
  const last = document.getElementById("appLastName");
  const employedStatus = document.getElementById("employmentSelect").value;
  const careExperience = [
    document.querySelector(".messageCheckbox").checked,
    document.querySelector(".messageCheckbox2").checked,
    document.querySelector(".messageCheckbox3").checked,
  ];
  const careRange = document.getElementById("careRange").value;
  const textBox = document.getElementById("personalText").value;

  if (first.value.length === 0 || first.value.length > 30) {
    first.className = "form-control is-invalid";
  } else {
    first.className = "form-control is-valid";
  }
  if (middle.value.length === 0 || middle.value.length > 30) {
    middle.className = "form-control is-invalid";
  } else {
    middle.className = "form-control is-valid";
  }
  if (last.value.length === 0 || last.value.valuelength > 30) {
    last.className = "form-control is-invalid";
  } else {
    last.className = "form-control is-valid";
  }

  if (textBox.length === 0) {
    document.getElementById("personalText").className =
      "form-control is-invalid";
  } else document.getElementById("personalText").className = "form-control";

  if (
    first.value.length !== 0 &&
    first.value.length <= 30 &&
    middle.value.length !== 0 &&
    middle.value.length <= 30 &&
    last.value.length !== 0 &&
    last.value.length <= 30 &&
    textBox.length !== 0
  ) {
    console.log({
      first,
      middle,
      last,
      employedStatus,
      careExperience,
      careRange,
      textBox,
    });
  }
}

function checkIfAllReadyForSub() {
  const first = document.getElementById("appFirstName");
  const middle = document.getElementById("appMidName");
  const last = document.getElementById("appLastName");
  const textBox = document.getElementById("personalText").value;

  if (
    first.value.length !== 0 &&
    first.value.length <= 30 &&
    middle.value.length !== 0 &&
    middle.value.length <= 30 &&
    last.value.length !== 0 &&
    last.value.length <= 30 &&
    textBox.length !== 0
  ) {
    document.getElementById("subButtonnn").disabled = false;
  } else document.getElementById("subButtonnn").disabled = true;
}

function textAreaCountAndValidate() {
  const length = document.getElementById("personalText").value.length;
  const label = document.getElementById("labelForEssay");
  label.innerText =
    "Tell us About Yourself in less than 500 characters (" + length + "/500)";
  if (length === 0) {
    document.getElementById("personalText").className =
      "form-control is-invalid";
  } else document.getElementById("personalText").className = "form-control";
}

// function consoleLogObject() {
//   const nameValues = document.getElementById("nameGroup");

//   const submitObject = {
//     nameValues,
//   };
// }

function allButtonsPressed() {
  const animal = document.querySelector('input[name="whichSpecies"]:checked')
    .value;
  if (animal === "Dog") {
    const dogSizes = document.querySelector("input[name='whichSize']:checked");
    const dogPersonality = document.querySelector(
      'input[name="whichCraziness"]:checked'
    ).value;
    const dogCoat = document.querySelector('input[name="whichCoat"]:checked')
      .value;
    if (dogSizes !== null && dogPersonality !== null && dogCoat !== null) {
      showNaming();
    }
  } else if (animal === "Cat") {
    const catSize = document.querySelector('input[name="whichWeight"]:checked')
      .value;
    const catEnergy = document.querySelector(
      'input[name="whichEnergy"]:checked'
    ).value;
    const catCoat = document.querySelector('input[name="whichCoatCat"]:checked')
      .value;
    if (catSize !== null && catEnergy !== null && catCoat !== null) {
      showNaming();
    }
  } else {
    const fishCare = document.querySelector(
      'input[name="fishDifficulty"]:checked'
    ).value;
    const fishColor = document.querySelector('input[name="fishColor"]:checked')
      .value;
    const fishNumber = document.querySelector(
      'input[name="fishNumber"]:checked'
    ).value;
    if (fishCare !== null && fishColor !== null && fishNumber !== null) {
      showNaming();
    }
  }
}

function nameValidate() {
  const subButton = document.getElementById("subButton");
  const firstName = document.getElementById("petFirst");
  const lastName = document.getElementById("petLast");
  if (firstName.value.length === 0 || firstName.value.length > 20) {
    subButton.disabled = true;
    firstName.className = "form-control is-invalid";
  } else {
    subButton.disabled = false;
    firstName.className = "form-control is-valid";
  }
  if (lastName.value.length > 20) {
    subButton.disabled = true;
    lastName.className = "form-control is-invalid";
  } else if (
    lastName.value.length <= 20 &&
    firstName.value.length !== 0 &&
    firstName.value.length <= 20
  ) {
    subButton.disabled = false;
    lastName.className = "form-control is-valid";
  }
}
