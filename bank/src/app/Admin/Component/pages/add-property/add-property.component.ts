import { DatePipe } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AdminService } from 'src/app/Admin/Services/admin.service';
import { ToastrService } from 'ngx-toastr';
import { MatPaginator } from '@angular/material/paginator';


@Component({
  selector: 'app-add-property',
  templateUrl: './add-property.component.html',
  styleUrls: ['./add-property.component.css']
})
export class AddPropertyComponent {
  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;

  addPropertyForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private service: AdminService,
    private datePipe: DatePipe,
    private toastr: ToastrService,
  ) { }

  ngOnInit() {
    this.addProperty();
  }

  addProperty() {

    this.addPropertyForm = this.formBuilder.group({

      propertyTitle: new FormControl('', Validators.required),
      propertyDescription: new FormControl(''),

      currentStatus: new FormControl('', Validators.required),
      propertyType: new FormControl('', Validators.required),

      price: new FormControl('', Validators.required),
      area: new FormControl('', Validators.required),

      propertyFileUzploadLink: new FormControl('', Validators.required),

      address: new FormControl('', Validators.required),
      city: new FormControl(''),
      state: new FormControl('', Validators.required),
      country: new FormControl(''),
      latitude: new FormControl(''),
      longitude: new FormControl('', Validators.required),


      propertyFeature: new FormControl('', Validators.required),
      propertyTag: new FormControl('', Validators.required),

      contactName: new FormControl('', Validators.required),
      contactEmail: new FormControl('', Validators.required),
      contactNumber: new FormControl('', Validators.required),

      landMark: new FormControl('', Validators.required),


    })
  }
}
