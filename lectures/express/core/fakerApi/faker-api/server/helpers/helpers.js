
import {fa, faker} from '@faker-js/faker';

export const createUser = () => {
    let first = faker.person.firstName();
    let last = faker.person.lastName();
    const newUser = {
        _id: faker.database.mongodbObjectId(),
        firstName: first,
        lastName: last,
        email: faker.internet.email({firstName: first, lastName: last}),
        phoneNumber: faker.phone.number(),
        password: faker.internet.password()
    }
    
    return newUser;
}

export const createCompany = () => {
    const newCompany = {
        _id: faker.database.mongodbObjectId(),
        name: faker.company.name(),
        address: {
            street: faker.location.streetAddress(true),
            city: faker.location.city(),
            state: faker.location.state(),
            zipCode: faker.location.zipCode(),
            country: faker.location.country()
        }
    }
    return newCompany;
}