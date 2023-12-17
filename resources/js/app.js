import * as bootstrap from 'bootstrap';
import axios from "axios";

//elements
const btnAddCustomer = document.querySelector('#btn-add-customer');
const btnLoadCustomers = document.querySelector('#btn-load-customers');
const btnSaveCustomer = document.querySelector('#btn-save-customer');
const container = document.querySelector('.container');
const formAddCustomer = document.querySelector('#form-add-customer');
const modalAddCustomer = new bootstrap.Modal('#backdrop');
const tableCustomerList = document.querySelector('#customers-list');

//functions
const addCustomerToList = customer => {
    const tableRow = document.createElement('tr');
    const values = Object.values(customer);
    values.forEach(value => {
        const tableCell = document.createElement('td');
        tableCell.textContent = value;
        tableRow.append(tableCell);
    });
    tableCustomerList.append(tableRow);
}
const displayAddCustomerModal = e => {
    e.preventDefault();
    modalAddCustomer.show();
}
const displayAlert = message => {
    let alertContainer = document.createElement('div');
    alertContainer.classList.add('alert', 'alert-danger');
    alertContainer.textContent = message;
    container.insertBefore(alertContainer, tableCustomerList);
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
                addCustomerToList(customer);
            });
        } else {
            displayAlert('No customers were found');
        }
    } catch(e) {
        displayAlert(e);
    }
}

const submitAddCustomerForm = async e => {
    try {
        e.preventDefault();
        const customerFormData = new FormData(formAddCustomer);
        const customerObject = {
            "full_name": customerFormData.get('full_name'),
            "email_address": customerFormData.get('email_address'),
            "phone_number": customerFormData.get('phone_number'),
            "address": customerFormData.get('address')
        };
        const newCustomer = await axios.post('/api/customers', customerObject);
        addCustomerToList(newCustomer.data);
    } catch(e) {
        console.error(e);
        displayAlert(e.response.data.message);
    } finally {
        modalAddCustomer.hide();
    }
}

//event listeners
btnLoadCustomers.addEventListener('click', loadCustomers);

btnAddCustomer.addEventListener('click', displayAddCustomerModal);

btnSaveCustomer.addEventListener('click', submitAddCustomerForm);
