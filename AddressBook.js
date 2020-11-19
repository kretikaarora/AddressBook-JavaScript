class ContactDetails
{
    //constructor
    constructor(...params)
    {
        this.firstName=params[0];
        this.lastName=params[1];
        this.address=params[2];
        this.city=params[3];
        this.state=params[4];
        this.zip=params[5];
        this.phoneNumber=params[6];
        this.email=params[7];      
    }

    //get and set for firstname
    get firstName(){return this._firstName;}
    set firstName(firstName)
    {
        this._firstName=firstName;
    }

    //get and set for lastname
    get lastName(){return this._lastName;}
    set lastName(lastName)
    {
        this._lastName=lastName;
    }

    //get and set for address
    get address(){return this._address;}
    set address(address)
    {
        this._address= address;
    }

    //get and set for city
    get city(){return this._city;}
    set city(city)
    {
        this._city= city;
    }

    //get and set for state
    get state(){return this._state;}
    set state(state)
    {
        this._state=state;
    }

    //get and set for zip
    get zip(){return this._zip;}
    set zip(zip)
    {
        this._zip=zip;
    }

    //get and set for phoneNumber
    get phoneNumber(){return this._phoneNumber;}
    set phoneNumber(phoneNumber)
    {
        this._phoneNumber= phoneNumber;
    }

    // get and set for email
    get email(){return this._email;}
    set email(email)
    {
        this._email= email;
    }

    //defining to string method
    toString()
    {
        return "first Name: "+this.firstName+", last Name: "+this.lastName+"\nAddress: "+ this.address+", City: "+ this.city+", State: "+this.state+"Zip: "+this.zip+", \nPhoneNumber: "+this.phoneNumber+", email: "+this.email; 
    }
}
//creating an instance and giving contact details
let contactDetails=new ContactDetails("Kretika","Arora","street1","Faridabad","Haryana",121001,9650925666,"kretikaarora@gmail.com");
console.log(contactDetails.toString());