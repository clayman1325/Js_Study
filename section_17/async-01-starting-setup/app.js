const button = document.querySelector('button');
const output = document.querySelector('p');


const setTimer = (duration) => {
  const promise = new Promise( (resolve, reject) => {
    setTimeout(() => {
      resolve("Its done!!!");
    }, duration)
  })

  return promise;

}


function trackUserHandler() {
  console.log('Clicked!');
  navigator.geolocation.getCurrentPosition(
    posData => {
      setTimer(2000).then((data) => {
        console.log(data,posData);
      });
    }, 
    error => {
      console.log(error)
    }
  );

  console.log("getting the data")
}

button.addEventListener('click', trackUserHandler);