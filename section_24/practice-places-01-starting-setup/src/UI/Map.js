export class Map {
  constructor(coords) {
    this.coordinates = coords;
    this.render(coords);
  }

  render(coordinates) {
    if(!google) {
      alert('Could not load maps library please try again later!')
      return;
    }
  
    new google.maps.Map(document.getElementById('map'), 
      { 
        center: this.coordinates, 
        zoom: 16 
      }
    )

    new google.maps.Marker({
      position: this.coordinates,
      map: map
    })
  }

}