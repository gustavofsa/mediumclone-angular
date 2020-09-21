import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from './../../../environments/environment';
import { UserProfileInterface } from '../types/userProfile.interface';
import { GetUserProfileResponseInterface } from '../types/userProfileResponse.interface';

@Injectable()
export class UserProfileService {
  constructor(private http: HttpClient) {}

  getUserProfile(slug: string): Observable<UserProfileInterface> {
    const url = `${environment.apiUrl}/profiles/${slug}`;

    return this.http
      .get(url)
      .pipe(
        map((response: GetUserProfileResponseInterface) => response.profile)
      );
  }
}
