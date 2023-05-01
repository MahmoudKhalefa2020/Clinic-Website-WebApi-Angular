import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { DoctorRoutingModule } from './doctor-routing.module';
import { NgxPaginationModule } from 'ngx-pagination';
import { AllDoctorComponent } from 'src/app/components/Doctor/all-doctor/all-doctor.component';
import { DoctorIndexComponent } from 'src/app/components/Doctor/doctor-index/doctor-index.component';
import { DoctorAppointmentsComponent } from 'src/app/components/doctor/doctor-appointments/doctor-appointments.component';
import { DoctorPendingAppointmentsComponent } from 'src/app/components/doctor/doctor-pending-appointments/doctor-pending-appointments.component';
import { DoctorConfirmedAppointmentsComponent } from 'src/app/components/doctor/doctor-confirmed-appointments/doctor-confirmed-appointments.component';
import { MinutesToTimePipe } from 'src/app/pipes/minutes-to-time.pipe';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SearchComponent } from 'src/app/components/Doctor/search/search.component';
import { DoctorDetailsComponent } from 'src/app/components/Doctor/doctor-details/doctor-details.component';

@NgModule({
  declarations: [
    DoctorIndexComponent,
    DoctorAppointmentsComponent,
    DoctorPendingAppointmentsComponent,
    DoctorConfirmedAppointmentsComponent,
    AllDoctorComponent,
    MinutesToTimePipe,
    SearchComponent,
    DoctorDetailsComponent
  ],
  imports: [
    CommonModule,
    DoctorRoutingModule,
    NgxPaginationModule,
    NgbModule,
    FormsModule

  ]
})
export class DoctorModule {}