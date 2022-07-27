import { faker } from '@faker-js/faker';

export class User{
    name:string
    location:{
        lat:number,
        lng:number
    }

    constructor(){
        this.name= faker.name.firstName('male')
        this.location={
        lat:+faker.address.latitude(), 
        lng:+ faker.address.longitude()
        }
    }

}