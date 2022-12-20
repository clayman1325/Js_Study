GOOGLE_API_KEY = "123"

export async function getCoordsFromAddress(address) {
  const address = encodeURI(address);
  const response = await fetch(`
    https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=${API_KEY}
  `)
  if(!response.ok) {
    throw new Error('Failed to fetch addrres coordinates');
  }

  const data = await response.json();

  if(data.error_message) {
    throw new Error(data.error_message)
  }

  return data.result[0].geometry.location;
}

export async function getAddressFromCoordinates(coordinates) {
  const response = await fetch(`
    https://maps.googleapis.com/maps/api/geocode/json?latlng=${coordinates.lat},${coordinates.long}&key=${API_KEY}
  `)
  if(!response.ok) {
    throw new Error('Failed to fetch addrres coordinates');
  }

  const data = await response.json();

  if(data.error_message) {
    throw new Error(data.error_message)
  }

  return data.result[0].formatted_address;
}