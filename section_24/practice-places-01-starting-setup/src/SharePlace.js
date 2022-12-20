import { Modal } from './UI/Nodal'
import { Map }   from  './UI/Nap'
import { getCoordsFromAddress, getAddressFromCoordinates } from 'Utility/Location'
class PlaceFinder {
  constructor() {
    const addressForm   = document.querySelector('form');
    const locateUserBtn = document.getElementById('locate-btn')
    this.shareBtn = document.getElementById('share-btn')

    addressForm.addEventListener('click', this.findAddressHandler.bind(this))
    locateUserBtn.addEventListener('click', this.locateUserHandler.bind(this))
    this.shareBtn.addEventListener('click', this.)
  }

  selectPlace(coordinates, address) {
    if(this.map) {
      this.map.render(coordinates);
    } else {
      this.map = new Map(coordinates)
    }

    this.shareBtn.disabled = false;
    const sharedLinkInputElement = document.getElementById('share-link');
    sharedLinkInputElement.value = ``
  }
  async locateUserHandler() {
    if(!navigator.geolocation) {
      alert(
        'The geolocation services is not available in your browser please use a more modern browser to automaticallly locate yourself'
      )
    }

    const modal = new Modal('loading-modal-content', 'Loading location - please wait!');
    modal.show();

    navigator.geolocation.getCurrentPosition(
      success => {
        modal.hide()
        const coordinate = {
          latitude:  success.coords.latitude + Math.random() * 50,
          longitude: success.coords.longitude + Math.random() * 50
        }
        const address = await this.getAddressFromCoordinates(coordinates)
        const input = this.addressForm.querySelector("input");
        input.text-content = address;
        this.selectPlace(coordinates)
    }, error => {
      modal.hide()
      alert(
        ' COuld not locate you please use the manual locator form'
      )
    })
  }

  async findAddressHandler (event) {
    event.preventDefault();
    const address = event.target.querySelector('input').value;
    if(!address || address.trim().length === 0) {
      alert('Invalid address entered - please try again!');
      return;
    }
    const modal = new Modal('loading-modal-content', 'Loading location - please wait!');
    modal.show();

    try {
      const coordinates = await getCoordsFromAddress(address)
      this.selectPlace(coordinates);
    } catch (err) {
      alert(err.message)
    }
  }
}

const placeFinder = new PlaceFinder();