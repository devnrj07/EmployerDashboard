import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-new-job',
  templateUrl: './new-job.component.html',
  styleUrls: ['./new-job.component.css']
})
export class NewJobComponent implements OnInit {

  constructor(private FB: FormBuilder) { }

  Locations = [{
    letter: 'A',
    names: ['Alabama', 'Alaska', 'Arizona', 'Arkansas']
  }, {
    letter: 'C',
    names: ['California', 'Colorado', 'Connecticut']
  }, {
    letter: 'D',
    names: ['Delaware']
  }, {
    letter: 'F',
    names: ['Florida']
  }, {
    letter: 'G',
    names: ['Georgia']
  }, {
    letter: 'H',
    names: ['Hawaii']
  }, {
    letter: 'I',
    names: ['Idaho', 'Illinois', 'Indiana', 'Iowa']
  }, {
    letter: 'K',
    names: ['Kansas', 'Kentucky']
  }, {
    letter: 'L',
    names: ['Louisiana']
  }, {
    letter: 'M',
    names: ['Maine', 'Maryland', 'Massachusetts', 'Michigan',
      'Minnesota', 'Mississippi', 'Missouri', 'Montana']
  }, {
    letter: 'N',
    names: ['Nebraska', 'Nevada', 'New Hampshire', 'New Jersey',
      'New Mexico', 'New York', 'North Carolina', 'North Dakota']
  }, {
    letter: 'O',
    names: ['Ohio', 'Oklahoma', 'Oregon']
  }, {
    letter: 'P',
    names: ['Pennsylvania']
  }, {
    letter: 'R',
    names: ['Rhode Island']
  }, {
    letter: 'S',
    names: ['South Carolina', 'South Dakota']
  }, {
    letter: 'T',
    names: ['Tennessee', 'Texas']
  }, {
    letter: 'U',
    names: ['Utah']
  }, {
    letter: 'V',
    names: ['Vermont', 'Virginia']
  }, {
    letter: 'W',
    names: ['Washington', 'West Virginia', 'Wisconsin', 'Wyoming']
  }];

  validation_messages = {
    'companyname': [
      { type : 'pattern', message : 'No special characters are allowed'},
      { type: 'required', message: 'Full name is required' }
    ],
    'desc': [
      { type: 'maxlength', message: 'Bio cannot be more than 256 characters long' },
    ],
    'location': [
      { type: 'required', message: 'Please select location' },
    ],

    'position':
    [
      { type: 'required', message: 'Please select position' },
    ],

    'vaccancy' :[
      { type: 'required', message: 'Please enter vaccancy' },
    ],
  };


  newJobForm = this.FB.group({
    companyname: ['', [Validators.required, Validators.pattern('^([a-z]|[A-Z]){4,8}$')]],
    desc: ['Leader in IT industry', Validators.maxLength(256)],
    date: ['', Validators.required],
    location: ['', Validators.required],
    position: ['', Validators.required],
    vaccancy: ['', Validators.required]

});

  ngOnInit() { }

}
