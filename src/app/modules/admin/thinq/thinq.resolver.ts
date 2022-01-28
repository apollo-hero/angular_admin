import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { ThinqResponse } from '@core/thinq/thinq.type';
import { merge, Observable, of } from 'rxjs';
import { RelateThinqService } from '../relate-thinq/relate-thinq.service';
import { ThinqService } from './thinq.service';

@Injectable({
  providedIn: 'root'
})
export class ThinqResolver implements Resolve<any> {
  constructor(
    private _thinqService: ThinqService,
    private _relateThinqService: RelateThinqService
  ) { }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
    const appId = route.params['appId'];
    return merge(
      this._thinqService.getData(appId),
      this._relateThinqService.getExistingRelations(appId)
    );
  }
}
