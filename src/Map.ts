import { User } from './User'
import { Company } from './Company'
type BothInterface = User & Company

interface Mappabe {}

type Example = User | Company

export class Map {
  private googleMap: google.maps.Map

  constructor(id: string) {
    this.googleMap = new google.maps.Map(
      document.getElementById(id) as HTMLElement,
      {
        zoom: 15,
        center: {
          lat: 0,
          lng: 0,
        },
      },
    )
  }
  addMarker(mapper: Example) {
    const marker = new google.maps.Marker({
      map: this.googleMap,
      position: { lat: mapper.location.lat, lng: mapper.location.lng },
      shape: { type: 'circle', coords: [1, 2, 1] },
      label: {
        color: 'black',
        text:
          'companyName' in mapper
            ? mapper.companyName
            : 'name' in mapper
            ? mapper.name
            : '',
      },
    })
    marker.addListener('click', () => {
      const infowindow = new google.maps.InfoWindow({
        content:'name' in mapper?mapper.name 
        :'companyName' in mapper? mapper.companyName+mapper.catchPhrase:'mvuyygh'
      })

      infowindow.open(this.googleMap, marker)
    })
  }

  searchPlace(place: string) {
    const service = new google.maps.places.PlacesService(this.googleMap)
    const request = {
      fields: ['name', 'geometry'],
      query: place,
    }
    service.findPlaceFromQuery(request, (results, status) => {
      if (status === google.maps.places.PlacesServiceStatus.OK) {
        for (var i = 0; i < results.length; i++) {
               const loc = results[0].geometry?.location as google.maps.LatLng
               const obj = {
            name:place,
            location:{
                lat:+loc.lat(),
                lng:+loc.lng()
            }
        }
            console.log('Here', obj, loc.lat);
            this.addMarker(obj)
        }

        const loc = results[0].geometry?.location as google.maps.LatLng


        

        this.googleMap.setCenter(loc)
      }
    })
  }
}
