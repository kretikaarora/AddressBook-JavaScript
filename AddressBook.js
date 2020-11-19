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
    //first letter should be capital and min 3 letters
    get firstName(){return this._firstName;}
    set firstName(firstName)
    {
        let nameRegex=RegExp("^[A-Z]{1}[A-Za-z]{2,}$");
        // test returns a boolen value
        if(nameRegex.test(firstName))
        this._firstName=firstName;
        else
        throw "Invalid first Name";
    }

    //get and set for lastname
    get lastName(){return this._lastName;}
    set lastName(lastName)
    {
        let nameRegex=RegExp("^[A-Z]{1}[A-Za-z]{2,}$");
        // test returns a boolen value
        if(nameRegex.test(lastName))
        this._lastName=lastName;
        else
        throw "Invalid  last Name";
    }

    //get and set for address
    get address(){return this._address;}
    set address(address)
    {
        let addressRegex = RegExp("^[A-Za-z]{4,}$");
        if(addressRegex.test(address))
            this._address= address;
        else
        throw "Invalid address ";
    }

    //get and set for city
    get city(){return this._city;}
    set city(city)
    {
        let cityRegex = RegExp("^[A-Za-z]{4,}$");
        if(cityRegex.test(city))
            this._city= city;
        else
        throw "Invalid city ";
    }

    //get and set for state
    get state(){return this._state;}
    set state(state)
    {
        let stateRegex = RegExp("^[A-Za-z0-9]{4,}$");
        if(stateRegex.test(state))
            this._state= state;
        else
        throw "Invalid state";
    }

    //get and set for zip
    get zip(){return this._zip;}
    set zip(zip)
    {
        let zipRegex = RegExp("^[1-9]{3}[ ]?[0-9]{3}$");
        if(zipRegex.test(zip))
            this._zip= zip;
        else
        throw "Invalid zip ";
    }

    //get and set for phoneNumber
    get phoneNumber(){return this._phoneNumber;}
    set phoneNumber(phoneNumber)
    {
        let phoneRegex=RegExp("^[1-9]{2}[ ]{1}[0-9]{10}$");
        if(phoneRegex.test(phoneNumber))
        this._phoneNumber= phoneNumber;
        else
        throw "Invalid phone number";
    }

    // get and set for email
    get email(){return this._email;}
    set email(email)
    {

       let emailRegex=RegExp("^([a-z0-9A-Z])+([.]?[a-z0-9A-Z]+)*[@]{1}[a-z0-9A-Z]+[.]{1}[a-zA-Z]{2,}([.]{1}[a-z]{2,})?$");
       if(emailRegex.test(email))

        this._email= email;
       else
        throw "Invalid email";
    }

    //defining to string method
    toString()
    {
        return "first Name: "+this.firstName+", last Name: "+this.lastName+"\nAddress: "+ this.address+", City: "+ this.city+", State: "+this.state+"Zip: "+this.zip+", \nPhoneNumber: "+this.phoneNumber+", email: "+this.email; 
    }
}
//creating an instance and giving contact details
try
 {
    let contactDetails=new ContactDetails("Kretika","Arora","street","Faridabad","Haryana","121 001","91 9650925666","kretika@gmail.com");
    console.log(contactDetails.toString());
    let contactDetailsArray = new Array();
    contactDetailsArray.push(contactDetails);
    contactDetailsArray.push(new ContactDetails("Roma","Salvador","nearhighway","Mumbai","Maharashtra","128 755","91 8587087642","roma@gmail.com"));
    contactDetailsArray.push(new ContactDetails("Daisy","Alava","fourstreet","Paris","France","871 258","87 6587321451","daisy@gmail.com"));
    contactDetailsArray.push(new ContactDetails("Troy","Tom","alaska","Zurich","Switzerland","128 213","91 8966541252","troy@gmail.com"));
    contactDetailsArray.forEach((contact)=>console.log(contact.toString()));
 }
catch(e)
 {
   console.log(e);
 }
