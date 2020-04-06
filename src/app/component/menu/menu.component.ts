import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  menus = [
    {
      label: 'Home',
      icon: 'home', // naterial icon
      // faIcon: 'fab fa-accusoft', // fontasomeware icon
      link: '/',
    },
    // {
    //   label: 'animation',
    //   icon: 'settings',
    //   link: '/animation',
      // items: [
      //   {
      //     label: 'Item 1.1',
      //     link: '/item-1-1',
      //     faIcon: 'fab fa-accusoft'
      //   },
      // ]
    // },
    {
      label: 'Color',
      icon: 'color_lens',
      items: [
        {
          label: 'Color',
          link: '/color',
          icon: 'radio_button_unchecked'
        },
        {
          label: 'Color List',
          link: '/color/list',
          icon: 'radio_button_unchecked'
        },
        {
          label: 'Color picker',
          icon: 'colorize',
          items: [
            {
              label: 'Picker html',
              link: '/color/picker/html',
              icon: 'radio_button_unchecked'
            },
            {
              label: 'from image',
              link: '/color/picker/from-image',
              icon: 'radio_button_unchecked'
            },
          ]
        },
      ]
    },
    
    {
      label: 'Images',
      icon: 'image',
      items: [
        {
          label: 'To base64 data',
          link: '/image/base64',
          icon: 'radio_button_unchecked'
        },
      ]
    },
    {
      label: 'Maps',
      faIcon: 'fas fa-globe-asia',
      items: [
        {
          label: 'Point',
          link: '/map/point',
          faIcon: 'fas fa-map-marker-alt'
        },
      ]
    },
    {
      label: 'random',
      faIcon: 'fas fa-random',
      items: [
        {
          label: 'UUID',
          link: '/random/uuid',
          icon: 'data_usage'
        },
      ]
    },
    {
      label: 'QR Code',
      faIcon: 'fa fa-qrcode',
      link: '/qr-code',
    },
    {
      label: 'Viewer',
      faIcon: 'fas fa-border-style',
      items: [
        {
          label: 'JSON viewer',
          link: '/viewer/json',
          icon: 'data_usage'
        },
      ]
    },
  ];
  config = {
    paddingAtStart: true,
    interfaceWithRoute: true,
    classname: 'my-custom-class',
    listBackgroundColor: `rgb(255, 255, 255)`,
    fontColor: `rgb(8, 54, 71)`,
    backgroundColor: `rgb(255, 255, 255)`,
    selectedListFontColor: `red`,
    highlightOnSelect: true,
    collapseOnSelect: true,
    rtlLayout: false
  };

  constructor() { }

  ngOnInit() {
  }

  selectedItem = (event) => {
    console.log('selectedItem', event);
  }

  selectedLabel = (event) => {
    console.log('selectedLabel', event);
  }

}
