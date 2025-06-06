import {Component, h} from '@stencil/core';
import {getComponents} from '../../utils/component-utils';
import {getExamples} from '../../utils/example-utils';

@Component({
  tag: 'app-root',
  styleUrl: 'app-root.css'
})
export class AppRoot {
  private readonly components = getComponents();
  private readonly examples = getExamples();

  render() {
    return (
      <ion-app>
        <ion-router useHash={false}>
          <ion-route url="/" component="app-home"/>
          <ion-route url="/component" component="app-home"/>
          {this.components.filter(c => c.name !== 'tabs').map(component => {
            return (
              <ion-route url={`/component/${component.id}`} component={`component-${component.id}`}/>
            );
          })}
          {this.examples.filter(c => c.name !== 'tabs').map(example => {
            return (
              <ion-route url={`/example/${example.id}`} component={`example-${example.id}`}/>
            );
          })}
          <ion-route component="component-tabs">
            <ion-route url="/component/tabs/music" component="tabs-music">
            </ion-route>
            <ion-route url="/component/tabs/movies" component="tabs-movies">
            </ion-route>
            <ion-route url="/component/tabs/games" component="tabs-games">
            </ion-route>
          </ion-route>
        </ion-router>
        <ion-nav/>
      </ion-app>
    );
  }
}
