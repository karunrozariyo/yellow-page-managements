import * as readlineSync from 'readline-sync';

interface Business {
    id: number;
    name: string;
    category: string;
    address: string;
    phone: string;
    email: string;
}

class YellowPageManager {
    private businesses: Business[];

    constructor() {
        this.businesses = [];
    }

    addBusiness(business: Business): void {
        this.businesses.push(business);
    }

    getAllBusinesses(): Business[] {
        return this.businesses;
    }


    searchByName(name: string): Business[] {
        return this.businesses.filter(business => business.name.toLowerCase().indexOf(name.toLowerCase()) !== -1);

    }

    searchByCategory(category: string): Business[] {
        return this.businesses.filter(business => business.category.toLowerCase() === category.toLowerCase());
    }


    removeBusiness(id: number): void {
        this.businesses = this.businesses.filter(business => business.id !== id);
    }
}

function getUserInput(prompt: string): string {
    return readlineSync.question(prompt + ": ");
}

const yellowPageManager = new YellowPageManager();

const name = getUserInput("Business name");
const category = getUserInput("Category");
const address = getUserInput("Address");
const phone = getUserInput("Phone number");
const email = getUserInput("Email");

const newBusiness: Business = {
    id: yellowPageManager.getAllBusinesses().length + 1,
    name,
    category,
    address,
    phone,
    email
};
yellowPageManager.addBusiness(newBusiness);

console.log("All businesses:", yellowPageManager.getAllBusinesses());
