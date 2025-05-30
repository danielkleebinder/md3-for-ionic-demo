import { Component, h } from '@stencil/core';

@Component({
  tag: 'component-button',
  styleUrl: 'button.css'
})
export class Button {
  render() {
    return [
      <ion-header translucent={true}>
        <ion-toolbar>
          <ion-buttons slot="start">
            <ion-back-button defaultHref="/"></ion-back-button>
          </ion-buttons>
          <ion-title>Button</ion-title>
        </ion-toolbar>
      </ion-header>,

      <ion-content fullscreen={true}>
        <section>
          <ion-list-header>
            <ion-label>
              Small Size
            </ion-label>
          </ion-list-header>
          <ion-button size="small">Default</ion-button>
          <ion-button size="small" class="md-square">Default Squared</ion-button>
          <ion-button size="small" color="secondary">Secondary</ion-button>
          <ion-button size="small" color="secondary">
            <ion-icon slot="start" name="mail"></ion-icon>
            Leading Icon
          </ion-button>
          <ion-button size="small" color="tertiary">Tertiary</ion-button>
          <ion-button size="small" color="tertiary">
            Trailing Icon
            <ion-icon slot="end" name="videocam"></ion-icon>
          </ion-button>
        </section>

        <section>
          <ion-list-header>
            <ion-label>
              Default Size
            </ion-label>
          </ion-list-header>
          <ion-button color="success">Success</ion-button>
          <ion-button color="warning">Warning</ion-button>
          <ion-button color="danger">Danger</ion-button>
        </section>

        <section>
          <ion-list-header>
            <ion-label>
              Large Size
            </ion-label>
          </ion-list-header>
          <ion-button size="large" color="light">Light</ion-button>
          <ion-button size="large" color="medium">Medium</ion-button>
          <ion-button size="large" color="dark">Dark</ion-button>
        </section>

        <section>
          <ion-list-header>
            <ion-label>
              Block Width
            </ion-label>
          </ion-list-header>
          <ion-button class="ion-text-wrap" expand="block">A block button</ion-button>
        </section>

        <section>
          <ion-list-header>
            <ion-label>
              Full Width
            </ion-label>
          </ion-list-header>
          <ion-button class="ion-text-wrap" expand="full" color="secondary">A full-width button</ion-button>
        </section>
      </ion-content>
    ];
  }
}
