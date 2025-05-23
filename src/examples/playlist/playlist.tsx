import {Component, h} from '@stencil/core';

@Component({
  tag: 'example-playlist',
  styleUrl: 'playlist.css'
})
export class Playlist {

  private readonly playlist = [
    {name: 'summer air', album: 'water house'},
    {name: 'slow down', album: 'water house'},
    {name: 'fahrenheit', album: 'water house'},
    {name: 'complications', album: 'water house'},
    {name: 'family tree', album: 'water house'},
    {name: 'hooper', album: 'water house'},
    {name: 'still', album: 'water house'},
    {name: 'moire', album: 'water house'},
    {name: 'get around', album: 'water house'},
  ];

  render() {
    return [
      <ion-content fullscreen class="component-content">
        <ion-header class="playlist-header">
          <ion-toolbar>
            <ion-buttons slot="start">
              <ion-back-button defaultHref="/"></ion-back-button>
            </ion-buttons>
            <ion-title>
              <h2>Concrete Movements</h2>
              <small>Playlist by Sam</small>
            </ion-title>
            <ion-buttons slot="end">
              <ion-button>
                <ion-icon slot="icon-only" name="ellipsis-vertical"></ion-icon>
              </ion-button>
            </ion-buttons>
          </ion-toolbar>
        </ion-header>

        <ion-img src="/assets/beach-camping-night.jpg" class="playlist-image"></ion-img>

        <div class="playlist-actions">
          <ion-button size="large">
            <ion-icon slot="start" name="play"></ion-icon>
            Play
          </ion-button>
          <ion-button size="large" color="tertiary" class="button-shuffle">
            <ion-icon slot="icon-only" name="shuffle"></ion-icon>
          </ion-button>
          <ion-button size="large" color="secondary" class="button-more">
            <ion-icon slot="icon-only" name="ellipsis-vertical"></ion-icon>
          </ion-button>
        </div>

        <ion-list lines="none" class="playlist-list">
          {
            this.playlist.map((song, index) => {
              return (
                <ion-item>
                  <div slot="start">{index + 1}</div>
                  <ion-label>
                    <h2>{song.name}</h2>
                    <p>{song.album}</p>
                  </ion-label>
                  <ion-button slot="end" color="dark">
                    <ion-icon slot="icon-only" name="ellipsis-vertical"></ion-icon>
                  </ion-button>
                </ion-item>
              );
            })
          }
        </ion-list>

        <p class="playlist-description">
          Example taken from <a
          href="https://m3.material.io/components/navigation-bar/guidelines#d034f3cf-f81d-4484-9c3c-8f107aa5a021"
          target="_blank">
          Material Design 3 docs
        </a>.
        </p>

      </ion-content>,

      <ion-tab-bar slot="bottom">
        <ion-tab-button tab="home">
          <ion-icon name="home"></ion-icon>
          Home
        </ion-tab-button>
        <ion-tab-button tab="radio">
          <ion-icon name="search"></ion-icon>
          Browse
        </ion-tab-button>
        <ion-tab-button tab="library">
          <ion-icon name="radio"></ion-icon>
          Radio
        </ion-tab-button>
        <ion-tab-button tab="search" class="tab-selected">
          <ion-icon name="library"></ion-icon>
          Library
        </ion-tab-button>
      </ion-tab-bar>
    ];
  }
}
