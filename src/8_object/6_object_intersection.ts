/**
 * object intersection
 */
type PrimitiveIntersection = string & number;

type PersonType = {
    name: string,
    age: number
}

type CompanyType = {
    company: string,
    companyNumber: string,
}

type PersonAndCompany = PersonType & CompanyType

const member1: PersonAndCompany = {
    name: 'member1',
    age: 30,
    company: 'company1',
    companyNumber: 'xxxx-111-xxx'
}

type PetType = {
    petName: string,
    petAge: number,
}

type CompanyOrPet = PersonType & (CompanyType | PetType)

const companyOrPet: CompanyOrPet = {
    //person
    name: 'person1',
    age: 30,

    //company
    company: 'compayName',
    companyNumber: 'xxxx-111',

    //pet
    petName: 'ori',
    petAge: 5

}