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
| _/Pins/_ | . Users are able to see pins from different users. Pins contain 'image' and 'description'.

## Hierarchy

* \ async function getPins() {
* \   const urlIP = "http://makeespresso.co/Data/pins.json";
* \   try {
    * \ const apiIp = await axios.get(urlIP);
* \     let imageArray = apiIp.data;
    * \ return imageArray;
* \   } catch (error) {
    * \ console.log(error.message);
* \   }
* \ }


## Wireframes

## Low Fidelity Wireframes
![wireframe](https://user-images.githubusercontent.com/20978259/122319988-77f54380-ceef-11eb-8f0c-bfebc8bea7e1.png)

## High Fidelity Wireframes
![mobile](https://user-images.githubusercontent.com/20978259/122324400-b6dac780-cef6-11eb-910c-1f8ca8955206.png)


## Authors
@makeespresso

## Acknowledgments/Inspo
* [Pinterest](https://www.pinterest.com/)
