const container = document.querySelector(".container");

async function getPins() {
  const urlIP = "http://makeespresso.co/Data/pins.json";
  try {
    const apiIp = await axios.get(urlIP);
    let imageArray = apiIp.data;
    return imageArray;
  } catch (error) {
    console.log(error.message);
  }
}

async function loadImages(numImages = 48) {
  let dataArray = await getPins();
  imagesArray = dataArray.map((image) => {
    return image.images.orig.url;
  });
  titleArray = dataArray.map((desc) => {
    return desc.board.name;
  });

  console.log(imagesArray);
  let i = 0;
  while (i < numImages) {
    const divPin = document.createElement("div");
    divPin.classList.add("divPins");
    container.appendChild(divPin);

    const img = document.createElement("img");
    img.src = imagesArray[i];
    // container.appendChild(div);
    divPin.appendChild(img);

    const desc = document.createElement("p");
    desc.innerHTML = titleArray[i];
    divPin.appendChild(desc);
    i++;
  }
}

loadImages();

window.addEventListener("scroll", () => {
  if (
    window.scrollY + window.innerHeight >=
    document.documentElement.scrollHeight
  ) {
    loadImages();
  }
});
