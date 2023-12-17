<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Xplor Technical Assessment</title>
    @vite(['resources/css/app.css', 'resources/js/app.js'])
</head>
<body>
<div class="container">
    <div class="d-flex justify-content-end mt-3 mb-3">
        <button class="btn btn-primary me-3" id="btn-load-customers">Load Customers</button>
        <button class="btn btn-secondary" id="btn-add-customer">Add Customer</button>
    </div>
    <table id="customers-list" class="table table-striped"></table>
</div>
<div class="modal fade" id="backdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="label" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
        <div class="modal-content">
            <div class="modal-header">
                <h1 class="modal-title fs-5" id="label">Add Customer</h1>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                <form id="form-add-customer">
                    <div class="mb-3">
                        <label class="form-label">Full Name:</label>
                        <input type="text" name="full_name" id="full_name" class="form-control" maxlength="100" />
                    </div>
                    <div class="mb-3">
                        <label class="form-label">Email Address:</label>
                        <input type="email" name="email_address" id="email_address" class="form-control" maxlength="100" />
                    </div>
                    <div class="mb-3">
                        <label class="form-label">Phone Number:</label>
                        <input type="tel" name="phone_number" id="phone_number" class="form-control" maxlength="20" />
                    </div>
                    <div class="mb-3">
                        <label class="form-label">Address:</label>
                        <textarea name="address" id="address" class="form-control"></textarea>
                    </div>
                    @csrf
                </form>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                <button type="button" class="btn btn-primary" id="btn-save-customer">Save</button>
            </div>
        </div>
    </div>
</div>
</body>
</html>
