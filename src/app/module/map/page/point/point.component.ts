import { Component, OnInit, Inject } from '@angular/core';
import * as mapboxGL from 'mapbox-gl';
import { environment } from 'src/environments/environment';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material';
import { WindowService } from 'src/app/core/service/window.service';

@Component({
  selector: 'app-map-point',
  templateUrl: './point.component.html',
  styleUrls: ['./point.component.css']
})
export class PointComponent implements OnInit {

  formGroup: FormGroup;
  formGroupSelecType: FormGroup;
  map: mapboxGL.Map;
  mapboxOption: mapboxGL.MapboxOptions = {
    container: 'mapPoint',
    style: 'mapbox://styles/mapbox/streets-v11',
    center: [105.7699382, 10.0427404], // can tho
    zoom: 13
  };

  selectTypes: SelectOption[] = [
    {
      label: 'Random point',
      value: 1,
    }
  ]

  constructor(
    private formBuilder: FormBuilder,
    private _windowService: WindowService,
    private snackBar: MatSnackBar,
  ) { }

  ngOnInit() {
    this.initForm();
    this.initMap();
  }

  initMap = () => {
    // mapboxGL.accessToken = environment.map.mapbox.accessToken; // error Cannot assign to 'accessToken' because it is a read-only property
    (mapboxGL as typeof mapboxGL).accessToken = environment.map.mapbox.accessToken;

		  // accessToken: ,
    this.map = new mapboxGL.Map(this.mapboxOption);
    this.map.on('load', event => {
      this.map.on('click', eventClick => {

      });
    });
  }

  moveToHome = () => {
    this.getCurrentGeolocation(position => {
      // update form
      this.formGroup.controls.longitude.setValue(position.coords.longitude);
      this.formGroup.controls.latitude.setValue(position.coords.latitude);

      const flyToOptions: mapboxGL.FlyToOptions = {
        center: [this.formGroup.controls.longitude.value, this.formGroup.controls.latitude.value],
        zoom: this.formGroup.controls.zoom.value,
      };
      this.map.flyTo(flyToOptions);
    }, err => {
      this.openSnackBar(err.message);
    });
  }
  
  onMove = () => {
    const flyToOptions: mapboxGL.FlyToOptions = {
      center: [this.formGroup.controls.longitude.value, this.formGroup.controls.latitude.value],
      zoom: this.formGroup.controls.zoom.value,
    };
    this.map.flyTo(flyToOptions);
  }

  openSnackBar = (message: string) => {
    this.snackBar.open(message, null, {
      duration: 2000, // 2s
    });
  }
  onSelectType = () => {
    console.log('onSelectType');
  }

  initForm = () => {
    this.formGroup = this.formBuilder.group({
      'longitude': [
        this.mapboxOption.center[0], // default value
        [
          Validators.required,
        ]
      ],
      'latitude': [
        this.mapboxOption.center[1],
        [
          Validators.required,
        ]
      ],
      'zoom': [
        this.mapboxOption.zoom,
        [
          Validators.required,
        ]
      ],
    });
    
    this.formGroupSelecType = this.formBuilder.group({
      randomRadius: [1, [Validators.required]],
      randomCount: [1, [Validators.required]],
      randomLng: [1, [Validators.required]],
      randomLat: [1, [Validators.required]],
    });
  }

  getCurrentGeolocation = (positionCallback: PositionCallback, errCallback: PositionErrorCallback) => {
    if (this._windowService.window.navigator.geolocation) {
      this._windowService.window.navigator.geolocation.getCurrentPosition(positionCallback, errCallback);
    } else {
      this.openSnackBar('Underfined this._window.navigator.geolocation');
    }
  }
}

interface SelectOption {
  label: string,
  value: any,
}