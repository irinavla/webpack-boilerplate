import './styles/dropdown.css';

class Dropdown {
  constructor(container) {
    this.container = container;
    this.trigger = container.querySelector('.trigger');
    this.content = container.querySelector('.content');
  }

  init() {
    this.trigger.addEventListener('click', () => {
      this.trigger.classList.toggle('active');
      if (this.content.style.maxHeight) {
        this.content.style.maxHeight = null;
      } else {
        this.content.style.maxHeight = this.content.scrollHeight + "px";
      }
    })
  }
}

export default Dropdown