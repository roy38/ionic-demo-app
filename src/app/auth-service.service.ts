import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  constructor() { }

  async signupUser(data: any) {
    return await this.setLocalStorageItem(data)
  }

  async loginUser(username: string, password: string) {
    return await this.getLocalStorageItem('loginUser')
  }

  async isAuthenticated() {
    if(localStorage.getItem('loginUser')) return true
    return false
  }

  async setLocalStorageItem(data: any) {
    localStorage.setItem('loginUser', JSON.stringify(data))
    return true 
  }

  async getLocalStorageItem(key: string) {
    return localStorage.getItem(key)
  }
}
