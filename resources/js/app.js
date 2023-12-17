import * as bootstrap from 'bootstrap';
import axios from "axios";

//elements
const btnLoadCustomers = document.querySelector('#btn-load-customers');
const btnAddCustomer = document.querySelector('#btn-add-customer');
const tableCustomerList = document.querySelector('#customers-list');

//functions
const displayAddCustomerModal = e => {
    e.preventDefault();
    console.log("Add Customer was clicked");

    const addCustomerModal = new bootstrap.Modal('#backdrop');
    addCustomerModal.show();
}
const displayAlert = message => {
    let alertContainer = document.createElement('div');
    alertContainer.classList.add('alert', 'alert-danger');
    alertContainer.textContent = message;
    tableCustomerList.prepend(alertContainer);
    window.scrollTo(0,0);
}

const populateTableHeaders = (obj) => {
    const keys = Object.keys(obj);
    const headerRow = document.createElement('tr');
    keys.forEach(key => {
        const headerCell = document.createElement('th');
        headerCell.textContent = key.replaceAll('\_', ' ').toUpperCase();
        headerRow.append(headerCell);
    });
    tableCustomerList.append(headerRow);
}

const loadCustomers = async e => {
    try {
        const customers = await axios.get('/api/customers');
        if(customers.data && customers.data.length > 1){
            populateTableHeaders(customers.data[0]);
            customers.data.forEach(customer => {
                console.log("customer", customer);
                const tableRow = document.createElement('tr');
                const values = Object.values(customer);
                values.forEach(value => {
                   const tableCell = document.createElement('td');
                   tableCell.textContent = value;
                   tableRow.append(tableCell);
                });
                tableCustomerList.append(tableRow);
            });
        } else {
            displayAlert('No customers were found');
        }
    } catch(e) {
        displayAlert(e);
    }
}

//event listeners
btnLoadCustomers.addEventListener('click', loadCustomers);

btnAddCustomer.addEventListener('click', displayAddCustomerModal);
