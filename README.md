# "Challenge 1, Infinity Scroll"
![banner](https://user-images.githubusercontent.com/20978259/122320033-8cd1d700-ceef-11eb-8d1b-c69a10447521.png)


## Project Description:
The purpose of this project is to render as many times as possible different pins as the user scrolls down 👩🏻‍💻💫. Recreating Pinterest infinity scroll behavior. 📌

### Set Up
* Fork and clone this repo
* Open directly from file

### MVP
* Users can browse on page infinitly looking for the cat to offer a forever home 😻

## API Endpoint Documentation
| **GET** |  |
| --- | --- |
| _Pins_ | Users are able to see pins from different users. Pins contain 'image' and 'description'.

## Hierarchy
```
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
```

## Wireframes

### Low Fidelity Wireframes
![wireframe](https://user-images.githubusercontent.com/20978259/122319988-77f54380-ceef-11eb-8f0c-bfebc8bea7e1.png)

### High Fidelity Wireframes
![desktop](https://user-images.githubusercontent.com/20978259/122328567-e9d48980-cefd-11eb-9458-b51a0a4bbffc.png)

<div style="position: relative; padding-bottom: 56.25%; height: 0;"><iframe src="https://www.loom.com/embed/daf04e21d9b34840ae1552214d2c0e5b" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe></div>

## Authors
@makeespresso

## Acknowledgments/Inspo
* [Pinterest](https://www.pinterest.com/)
