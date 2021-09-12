import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DiaryComponent } from './diary/diary.component';
import { HomeworkComponent } from './homework/homework.component';
import { SettingsComponent } from './settings/settings.component';
import { SyllabusComponent } from './syllabus/syllabus.component';

const routes: Routes = [
  { path: '', component: DiaryComponent, data: { animation: 'diary' } },
  {
    path: 'syllabus',
    component: SyllabusComponent,
    data: { animation: 'syllabus' },
  },
  {
    path: 'homework',
    component: HomeworkComponent,
    data: { animation: 'homework' },
  },
  {
    path: 'settings',
    component: SettingsComponent,
    data: { animation: 'settings' },
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
