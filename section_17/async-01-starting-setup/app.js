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

const getPosition = (opts) => {
  const promise = new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(
      success => {
        resolve(success)
      }, error => {
        reject(error)
      }, opts
    )
  })
  return promise;
}
function trackUserHandler() {
  console.log('Clicked!');
  getPosition().then((posData) => {
    setTimer(2000).then((data) => {
      console.log("done baby", posData)
    })
  })

  console.log("getting the data")
}

function trackUserHandler2() {
  getPosition()
    .then((posData) => {
      return setTimer(2000)
    }, error => {
      console.log(error)
    })
    .catch(err => {
      console.log(err)
    })
    .then((data) => {
      console.log(data, posData)
    })
}

const getPositionData = async function () => {
  try {
    const posData   = await trackUserHandler();
    const waitUntil = await setTimer(2000);

    console.log(posData, waitUntil)
  }
  catch (errror) {
    console.log(error)
  }
} 


button.addEventListener('click', trackUserHandler);