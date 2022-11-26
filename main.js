import './style.css'
import {Loader} from 'google-maps';
// or const {Loader} = require('google-maps'); without typescript
 
// const options: LoaderOptions = {/* todo */};
const loader = new Loader('AIzaSyCPKunojA-HQICLZqgpKKgk8vKyNoN85ZI');
 
const google = await loader.load();
const map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: -34.397, lng: 150.644},
    zoom: 8,
});
