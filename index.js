const { default: mongoose } = require('mongoose');
const maongoose  = require('mongoose');
//Map global promise - get rid of warnings

mongoose.Promise = global.Promise;
// connect to db
const db= mongoose.connect('mongodb://localhost:27017/customerCLi',{
   
});

//Import model

const Customer = require('./models/customer');
const customer = require('./models/customer');

//Add Customer
const addCustomer = (customer)=>{
    Customer.create(customer).then(customer=>{
        console.info('New Costomer added');
        
    });
}

//Find Customer
const findCustomer = (name)=>{
    //Make Case insensitive

    const search =  new RegExp(name,'i');
    Customer.find({$or:[{firstname:search},{lastname:search}]})
    .then(customer=>{
        console.info(customer);
        console.info(`${customer.length} matches`);
    });
}


//Update customer

const updateCustomer = (_id, customer) =>{
    Customer.update({_id},customer)
    .then(customer=>{
        console.info('Customer Updated');
    });
}

//Remove customer

const removeCustomer = (_id) =>{
    Customer.deleteOne(({_id}))
    .then(result=>{
        console.info('Customer Removed',result);
    }).catch(err=>{
        console.error('Error removing customer:',err);
    });
}

//List of Customers

const listCustomer=()=>{
    Customer.find()
    .then(customers=>{
        console.info(customers);
        console.info('${customers.length} a=matches');
    });
}

//Export All MEthods

module.exports={
    addCustomer,
    findCustomer,
    updateCustomer,
    removeCustomer,
    listCustomer
}