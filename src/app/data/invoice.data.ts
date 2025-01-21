import { Invoice } from "../models/invoice";

export const invoiceData:any = {
    id: 1,
    name: 'Componente de PC',
    client:{
        name: 'Andres',
        lastname: 'Doe',
        address:{
            country: 'USA',
            city: 'Los Angeles',
            street: 'One Street',
            number: 15
        }
    },
    company: {
        name: 'New Age',
        fisicalNumber:123123
    },
    items:[
        {
            id:1,
            product: 'Cpu Intel i9',
            price: 599,
            quantity:1
        },
        {
            id:2,
            product: 'Teclado',
            price: 299,
            quantity:2
        },
        {
            id:3,
            product: 'Monitor',
            price: 800,
            quantity:3
        }
    ]
}