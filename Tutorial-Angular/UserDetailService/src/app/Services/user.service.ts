import {EventEmitter} from '@angular/core';

export class UserService{
    users = [
        {name: 'Rajan', job: 'Teacher', gender: 'Male', country: 'United States', age: 35, avatar: 'assets/avatar/rajan.jpg'},
        {name: 'Rahul', job: 'Designer', gender: 'Male', country: 'Germany', age: 35, avatar: 'assets/avatar/rahul.jpg'},
        {name: 'Nilesh', job: 'Lawyer', gender: 'Male', country: 'Ireland', age: 35, avatar: 'assets/avatar/nilesh.jpg'},
        {name: 'Nitesh', job: 'Doctor', gender: 'Male', country: 'India', age: 35, avatar: 'assets/avatar/nitesh.jpg'},
        {name: 'Ujjwal', job: 'Teacher', gender: 'Male', country: 'United States', age: 35, avatar: 'assets/avatar/ujjwal.jpg'},
        {name: 'Ramesh', job: 'Designer', gender: 'Male', country: 'Germany', age: 35, avatar: 'assets/avatar/ramesh.jpg'},
        {name: 'Narendra', job: 'Lawyer', gender: 'Male', country: 'Ireland', age: 35, avatar: 'assets/avatar/narendra.jpg'},
        {name: 'Arpit', job: 'Doctor', gender: 'Male', country: 'India', age: 35, avatar: 'assets/avatar/arpit.png'}
    ]

    OnShowDetailsClicked = new EventEmitter<{name: string, job: string, gender: string, country: string, age: number, avatar: string}>();

    ShowUserDetails(user: {name: string, job: string, gender: string, country: string, age: number, avatar: string}){
        this.OnShowDetailsClicked.emit(user);
    }
}