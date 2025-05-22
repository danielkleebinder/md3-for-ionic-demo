import {Component, h} from '@stencil/core';
import {getComponents} from '../../utils/component-utils';

@Component({
  tag: 'app-home',
  styleUrl: 'app-home.css'
})
export class AppHome {
  components = getComponents();

  toggleDarkMode = () => {
    document.documentElement.classList.toggle('ion-palette-dark');
  }

  render() {
    return [
      <ion-header translucent={true}>
        <ion-toolbar>
          <ion-title>Ionic Framework (md3)</ion-title>
        </ion-toolbar>
      </ion-header>,

      <ion-content fullscreen={true}>
        <ion-header collapse="condense">
          <ion-toolbar>
            <ion-title size="large">Ionic Framework (md3)</ion-title>
          </ion-toolbar>
        </ion-header>

        <ion-list class="theme-list" lines="full">
          <ion-item>
            <ion-icon slot="start" icon="moon" class="component-icon component-icon-dark"></ion-icon>
            <ion-toggle onIonChange={this.toggleDarkMode}>
              Dark Mode
            </ion-toggle>
          </ion-item>
        </ion-list>

        <ion-item>
          <ion-label>
            Have a look at the designs of Ionic components with Material Design 3 applied to them. Visit <a
            href="https://github.com/danielkleebinder/md3-for-ionic" target="_blank">Github</a> to learn more about this
            project 🚀
          </ion-label>
        </ion-item>

        <ion-list class="home-list">
          {this.components.map(component => {
            const href = component.id === 'tabs' ? '/component/tabs/music' : `/component/${component.id}`;

            return (
              <ion-item href={href}>
                <ion-icon slot="start" icon={component.icon} class="component-icon component-icon-primary"></ion-icon>
                <ion-label>{component.name}</ion-label>
              </ion-item>
            );
          })}
        </ion-list>
      </ion-content>
    ];
  }
}
