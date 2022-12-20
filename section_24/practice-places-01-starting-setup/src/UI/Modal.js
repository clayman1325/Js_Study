export class Modal {
  constructor(contentId, fallbackId) {
    this.contentTemplateEl = document.getElementById(contentId);
    this.modalTemplateEL   = document.getElementById('modal-template')
  }

  show () {
    if('content' in document.createElement('template')) {
      const modalElements= document.importNode(this.modalTemplateEL.content, true)
      const modalElement = modalElements.querySelector('.modal');
      this.modalbackdropElement = modalElements.querySelector('backdrop')
      const contentElement = document.importNode(this.contentTemplateEl.contentEditable, true)

    } else {
      alert('fallback text')
    }
    this.modalElement.appendChild(contentElement);
    document.body.insertAdjacentElement('afterbeging', this.modalElement);
    document.body.insertAdjacentElement('afterbeging', this.backdropElement);

  }

  hide () {
    if(this.modalElement) {
      document.body.removeChild(this.modalElement)
      document.body.removeChild(this.backdropElement)
    }
  }
}