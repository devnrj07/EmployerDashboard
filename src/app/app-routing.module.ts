import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccountDetailsComponent } from './account-details/account-details.component';
import { NewJobComponent } from './new-job/new-job.component';
import { PsotedJobsComponent } from './psoted-jobs/psoted-jobs.component';
import { ShortListedCandidatesComponent } from './short-listed-candidates/short-listed-candidates.component';

const routes: Routes = [
  {path: '', component: AccountDetailsComponent},
  {path : 'newjob', component: NewJobComponent},
  {path : 'jobs' , component : PsotedJobsComponent},
  {path : 'shortlist', component:ShortListedCandidatesComponent},
  {path : 'account' , component: AccountDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
