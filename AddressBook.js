let firstNameRegex = RegExp("^[A-Z]{1}[A-Za-z]{2,}$");
let lastNameRegex = RegExp("^[A-Z]{1}[A-Za-z]{3,}$");
let addressRegex = RegExp("^.{4,}$");
let cityRegex = RegExp("^[a-zA-Z]{4,}$");
let stateRegex = RegExp("^[a-zA-Z\\s]{4,}$");
let zipRegex = RegExp("^(\\s*[0-9]{1}\\s*){6}$");
let phoneRegex = RegExp("^[1-9]{1}[0-9]{9}$");
let emailRegex = RegExp("^[a-zA-Z]+(\\.[a-zA-Z_+-]+){0,1}[@]{1}[a-zA-Z]+\\.[a-zA-Z]+(\\.[a-zA-Z]+){0,1}$");

class Contact {
    // Properties
    /*firstName;
    lastName;
    address;
    city; 
    state;
    zip;
    phone;
    email;*/

    //constructors
    constructor(...params){
        this.firstName = params[0];
        this.lastName = params[1];
        this.address = params[2];
        this.city = params[3];
        this.state = params[4];
        this.zip = params[5];
        this.phone = params[6];
        this.email = params[7];
    }
    //getters and setters
    get firstName() {return this._firstName;}
    get lastName() {return this._lastName;}
    get address() {return this._address;}
    get city() {return this._city;} 
    get state() {return this._state;}
    get zip() {return this._zip;}
    get phone() {return this._phone;}
    get email() {return this._email;}

    set firstName(firstName) {
        // First Name should start with capital and min 3 characters
        if(firstNameRegex.test(firstName))
            this._firstName = firstName;
        else
            throw "First Name should start with capital and min 3 characters";
    }
    set lastName(lastName) {
        // Last Name should start with capital and min 3 characters
        if(lastNameRegex.test(lastName))
            this._lastName = lastName;
        else
            throw "Last Name should start with capital and min 3 characters";
    }
    set address(address) {
        // Address should have min 4 characters
        if(addressRegex.test(address))
            this._address = address;
        else
            throw "Address should have min 4 characters";
    }
    set city(city) {
        // City should have min 4 characters
        if(cityRegex.test(city))
            this._city = city;
        else
            throw "City should have min 4 characters";
    }
    set state(state) {
        // State should have min 4 characters
        if(stateRegex.test(state))
            this._state = state;
        else
            throw "State should have min 4 characters";
    }   
    set zip(zip) {
        // Zip should have correct pattern
        if(zipRegex.test(zip))
            this._zip = zip;
        else    
            throw "Zip should have correct pattern";
    }
    set phone(phone) {
        // Phone should have correct pattern
        if(phoneRegex.test(phone))
            this._phone = phone;
        else    
            throw "Phone should have correct pattern";
    }
    set email(email) {
        // Email should have correct pattern
        if(emailRegex.test(email))
            this._email = email;
        else    
            throw "Email should have correct pattern";
    }
    //toString method
    toString(){
        return "First Name: " + this.firstName + 
                ", Last Name: " + this.lastName + 
                ", Address: " + this.address + 
                ", City: " + this.city + 
                ", State: " + this.state + 
                ", ZipCode: " + this.zip +
                ", Phone: " + this.phone + 
                ", Email: " + this.email;
    }
}

let contact = new Contact("Abhinav", "Thakur", "Rohini", "Delhi", "New Delhi", "110089", "9013341138", "at@gmail.com");
process.stdout.write(contact.toString() + "\n");
// First Name should start with capital and min 3 characters
try {
    contact.firstName = "A";
} catch (e) {
    console.error(e);
}
// Last Name should start with capital and min 3 characters
try {
    contact.lastName = "T";
} catch (e) {
    console.error(e);
}
// Address should have min 4 characters
try {
    contact.address = "44";
} catch (e) {
    console.error(e);
}
// City should have min 4 characters
try {
    contact.city = "RO.";
} catch (e) {
    console.error(e);
}
// State should have min 4 characters
try {
    contact.state = "DE";
} catch (e) {
    console.error(e);
}
// Zip should have correct pattern
try {
    contact.zip = "123";
} catch (e) {
    console.error(e);
}
// Phone should have correct pattern
try {
    contact.phone = "923453";
} catch (e) {
    console.error(e);
}
// Email should have correct pattern
try {
    contact.email = "abc@capgemini";
} catch (e) {
    console.error(e);
}
// UC3 Create address book array of contacts
let addressBook = new Array();
addressBook.push(contact);

addressBook.push(new Contact("Abhinav", "Thakur", "Rohini", "JDelhi",
"New Delhi", "110089", "9013341138", "mail.at@gmail.com"));

addressBook.push(new Contact("Arpit", "Thakur", "Rohini", "WDelhi",
"New Delhi", "110085", "9998888888", "art@gmail.com"));

addressBook.push(new Contact("Prajwal", "Rao", "NIT", "Kurukshetra",
"Haryana", "101010", "9876543210", "prao@gmail.com"));

process.stdout.write(addressBook.join("\n").toString());

// UC4 Edit address of contact in address book
function editContactAddress(firstName, lastName, newAddress) {
    for(i = 0; i < addressBook.length; i++) {
        if(addressBook[i].firstName == firstName && addressBook[i].lastName == lastName)
            addressBook[i].address = newAddress;
    }
}

editContactAddress("Abhinav", "Thakur", "Sec16-Rohini");
process.stdout.write(addressBook.join("\n").toString());
