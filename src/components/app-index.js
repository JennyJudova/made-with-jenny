import { html, LitElement } from 'lit';
import { Router } from '@vaadin/router';
import './home-page'; // Add this line

export class AppIndex extends LitElement {
  firstUpdated() {
    const router = new Router(this.shadowRoot.getElementById('outlet'));
    router.setRoutes([
      { path: '/', component: 'home-page' },
      { path: '/about', component: 'about-page' },
      { path: '/contact', component: 'contact-page' },
    ]);
  }

  render() {
    return html`
      <nav>
        <a href="/">Home</a>
        <a href="/about">About</a>
        <a href="/contact">Contact</a>
      </nav>
      <div id="outlet"></div>
    `;
  }
}
customElements.define('app-index', AppIndex);