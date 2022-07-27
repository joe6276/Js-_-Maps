import {Map} from './Map'
import { User } from './User'
import { Company } from './Company'
const user = new User()
console.log(user);

const company=new Company()
console.log(company);

const map =new Map('map')
// map.addMarker(company)
// map.addMarker(user)


map.searchPlace('Kenyatta hospital')

        