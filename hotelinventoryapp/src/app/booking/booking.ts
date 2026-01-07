import { JsonPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatExpansionModule } from '@angular/material/expansion';

@Component({
  selector: 'app-booking',
  imports: [ReactiveFormsModule, JsonPipe, MatFormFieldModule, MatExpansionModule],
  templateUrl: './booking.html',
  styleUrl: './booking.scss',
})
export class Booking implements OnInit {
  bookingForm!: FormGroup;
  addressOpen = false;
  get guestList() {
    return this.bookingForm.get('guestList') as any;
  }

  constructor(private fb: FormBuilder) {}

  // new FormControl(''); === ['']

  ngOnInit(): void {
    this.bookingForm = this.fb.group({
      tnc: [false, [Validators.requiredTrue]],
      roomId: new FormControl(
        { value: '2', disabled: true },
        { validators: [Validators.required] }
      ),
      guestEmail: ['', { updateOn: 'blur', validators: [Validators.required, Validators.email] }],
      // Helps in reducing the number of validation calls
      checkInDate: [''],
      checkOutDate: [''],
      bookingStatus: [''],
      bookingAmount: [''],
      mobileNumber: [''],
      guestName: ['', [Validators.required, Validators.minLength(3)]],
      address: this.fb.group({
        Address: [''],
        City: [''],
        State: [''],
        Country: [''],
        ZipCode: [''],
      }),
      guestCount: [''],
      guestList: this.fb.array([
        this.fb.group({
          guestName: ['', [Validators.required]],
          guestAge: [''],
        }),
      ]),
    });
    this.getBookingData();

    this.bookingForm.valueChanges.subscribe((value) => {
      console.log('Form Value Changes:', value);
    });
  }

  // Different way to patchValue and setValue
  // Pathch Value - only specific fields
  // Set Value - all fields

  getBookingData() {
    this.bookingForm.patchValue({
      roomId: '5',
      guestEmail: '',
    });
  }

  addBooking() {
    const bookingDetails: BookingDetails = this.bookingForm.getRawValue();
    console.log('Booking Details:', bookingDetails);
  }

  addGuest() {
    this.guestList.push(
      this.fb.group({
        guestName: [''],
        guestAge: [''],
      })
    );
  }

  addPassport() {
    this.bookingForm.addControl('passportNumber', new FormControl(''));
  }
  RemovePassport() {
    this.bookingForm.removeControl('passportNumber');
  }

  removeGuest(index: number) {
    this.guestList.removeAt(index);
  }
}

export interface BookingDetails {
  roomId: string;
  guestEmail: string;
  checkInDate: Date;
  checkOutDate: Date;
  bookingStatus: string;
  bookingAmount: number;
  mobileNumber: string;
  guestName: string;
  guestAddress: string;
  guestCity: string;
  guestState: string;
  guestCountry: string;
  guestZipCode: string;
  guestCount: number;
  guestList: Array<string>;
}
