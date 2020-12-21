/**
 * Title: Assignment 1.4 
 * Author: Professor Krasso
 * Date: 20 December 2020
 * Modified By:  Anil Rayamajhi
 * Description: TypeScript
 */


 // Imports
import { IPerson } from './person.interface';

// Person class implenets IPerson interface
class Person implements IPerson{
    firstName: string;
    lastName: string;

    constructor(firstName: string, lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
}

// Instance of Person Object
let myName = new Person("Anil", "Rayamajhi")

console.log(`My name is ${myName.firstName} ${myName.lastName}`)