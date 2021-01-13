import { Component, OnInit } from '@angular/core';
import {Iuser} from '../../iuser';
import {Router} from '@angular/router';
import {FormBuilder, FormGroup} from '@angular/forms';
import {UserService} from '../../service/user.service';

@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
    // test: Date = new Date();
    user: Iuser;
    createUserForm: FormGroup;
    // focus;
    // focus1;
    constructor(
        private userService: UserService,
        private formBuilder: FormBuilder
    ) { }

    ngOnInit() {
        (function() {
            'use strict';
            window.addEventListener('load', function() {
                // Fetch all the forms we want to apply custom Bootstrap validation styles to
                const forms = document.getElementsByClassName('register-form');
                // Loop over them and prevent submission
                const validation = Array.prototype.filter.call(forms, function(form) {
                    form.addEventListener('submit', function(event) {
                        if (form.checkValidity() === false) {
                            event.preventDefault();
                            event.stopPropagation();
                        }
                        form.classList.add('was-validated');
                    }, false);
                });
            }, false);
        })();
        function checkPasswordMatch() {
            // tslint:disable-next-line:prefer-const
            // @ts-ignore
            const password = $('#alidationCustom03').val();
            // tslint:disable-next-line:prefer-const
            // @ts-ignore
            const confirmPassword = $('#validationCustom04').val();

            if (password !== confirmPassword) {
                // @ts-ignore
                $('#divCheckPasswordMatch').html('Passwords do not match!');
            } else {
                // @ts-ignore
                $('#divCheckPasswordMatch').html('Passwords match.');
            }
        }
// @ts-ignore
        $(document).ready(function () {
            // @ts-ignore
            $('#txtConfirmPassword').keyup(checkPasswordMatch);
        });
        this.createUserForm = this.formBuilder.group({
            username: [null],
            password: [null],
            phoneNumber: [null]
        })
    }

    createUser() {
        const newUser: Iuser = this.createUserForm.value;
        this.userService.create(newUser).subscribe(() => {
            alert('OK');
        }, error => {
            alert('DM');
        });
    }
}
