import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { FuseFullscreenModule } from '@fuse/components/fullscreen';
import { FuseLoadingBarModule } from '@fuse/components/loading-bar';
import { FuseNavigationModule } from '@fuse/components/navigation';
import { SearchModule } from 'app/layout/common/search/search.module';
import { ShortcutsModule } from 'app/layout/common/shortcuts/shortcuts.module';
import { UserModule } from 'app/layout/common/user/user.module';
import { SharedModule } from 'app/shared/shared.module';
import { ModernLayoutComponent } from 'app/layout/layouts/horizontal/modern/modern.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { TimesheetModule } from 'app/modules/admin/timesheet/timesheet.module';
import { TimesheetNavModule } from 'app/layout/common/timesheet/timesheet.module';

@NgModule({
  declarations: [
    ModernLayoutComponent
  ],
  imports: [
    HttpClientModule,
    RouterModule,
    MatButtonModule,
    MatDividerModule,
    MatIconModule,
    MatMenuModule,
    FuseFullscreenModule,
    FuseLoadingBarModule,
    FuseNavigationModule,
    MatSidenavModule,
    TimesheetModule,
    TimesheetNavModule,
    SearchModule,
    ShortcutsModule,
    UserModule,
    SharedModule
  ],
  exports: [
    ModernLayoutComponent
  ]
})
export class ModernLayoutModule {
}
