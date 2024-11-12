interface Location {
  lat: number
  lon: number
}

function getCurrentLocation(): Promise<Location> {
  return new Promise((resolve, reject) => {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          console.log(position)
          resolve({
            lat: position.coords.latitude,
            lon: position.coords.longitude,
          })
        },
        (error) => {
          reject({ error: error.message })
        },
      )
    } else {
      reject(new Error('Geolocation is not supported by this browser.'))
    }
  })
}

export { type Location, getCurrentLocation }
