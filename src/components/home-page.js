import { html, LitElement } from 'lit';

export class HomePage extends LitElement {
  render() {
    return html`<h1>Welcome to the Home Page</h1>`;
  }
}
customElements.define('home-page', HomePage);
