// Write your solution in this file!
var customerName = 'bob';

function upperCaseCustomerName() {
    customerName = customerName.toUpperCase();
}

function setBestCustomer() {
    bestCustomer = 'not bob';
}

function overwriteBestCustomer () {
    bestCustomer = 'maybe bob';
}

var leastFavoriteCustomer = 'someone';

function changeleastFavoriteCustomer()  {
    throw new Error('Assignment to constant variable')
}