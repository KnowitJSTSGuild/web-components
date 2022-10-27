import {html, css, LitElement} from 'lit';
import {customElement, property} from 'lit/decorators.js';

@customElement('photo-album')
export class PhotoAlbum extends LitElement {

  static override styles = css`
    .images ::slotted(*) {
      padding: 10px;
      height: 200px;
      display: flex;
    }

    .cover {
      height: 500px;
      display: flex;
    }
    `;
  
  @property()
  placeholderImg;
    
  constructor() {
    super();
    
    const imagesDiv = document.getElementById("images");

    this.placeholderImg = imagesDiv?.children[0] as HTMLImageElement;

  }
  

  override render() {

    return html`<h1>Photo album demo</h1>
      <div class="cover">
        <img id="cover-img" src=${this.placeholderImg.src} />
        <div id="cover-img-alt"></div>
      </div>
      <div class="images">
        <slot name="images" @click=${this.clickImage}></slot>
      </div>`;
  }

  private clickImage(img: Event) {

    const coverImg = this.shadowRoot?.getElementById("cover-img") as HTMLImageElement;
    const newImg = img.target as HTMLImageElement;

    coverImg.src = newImg.src;

  }
 }
