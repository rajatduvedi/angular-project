import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { EditComponent, DialogResult, DialogSendResult, DialogScheduleResult } from './edit/edit.component';
import { DashBoardComponent, ViewDialog, CopyDialog } from './dashboard/dashboard.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Ng2FilterPipeModule } from 'ng2-filter-pipe';
// import { FroalaEditorModule, FroalaViewModule } from 'angular-froala-wysiwyg';

// import {MdToolbarModule} from '@angular/material';
// import {MdIconModule} from '@angular/material';
// import {MdSelectModule} from '@angular/material'
import {
  MdMenuModule,
  MdToolbarModule,
  MdIconModule,
  MdSelectModule,
  MdInputModule,
  MdDatepickerModule,
  MdButtonModule,
  MdButtonToggleModule,
  MdNativeDateModule,
  MdTabsModule,
  MdListModule,
  MdCardModule,
  MdCheckboxModule,
  MdDialogModule,

  // HttpModule
}
from '@angular/material';
// import {DomSanitizer} from '@angular/platform-browser';
// import {MdIconRegistry} from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    EditComponent,
    DashBoardComponent,
    DialogResult,
    DialogSendResult,
    DialogScheduleResult,
    ViewDialog,
    CopyDialog
  ],
  imports: [
    BrowserModule,
    HttpModule,
    BrowserAnimationsModule,
    FormsModule,
    MdToolbarModule,
    MdIconModule,
    MdSelectModule,
    MdMenuModule,
    MdInputModule,
    MdDatepickerModule,
    MdButtonModule,
    MdButtonToggleModule,
    MdNativeDateModule,
    MdTabsModule,
    MdListModule,
    MdCardModule,
    MdCheckboxModule,
    MdDialogModule,
    Ng2FilterPipeModule,
    // FroalaEditorModule.forRoot(), FroalaViewModule.forRoot(),


    RouterModule.forRoot([
      {
        path : 'edit/:id',
        component: EditComponent
        // redirectTo: '/edit.component',
        // pathMatch:'full'
      },
      { path: '', component: DashBoardComponent }
    ])


  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents:[ DialogResult, DialogSendResult, DialogScheduleResult, ViewDialog, CopyDialog ],
})
export class AppModule { }
