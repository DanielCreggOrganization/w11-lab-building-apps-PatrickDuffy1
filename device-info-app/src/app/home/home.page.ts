import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonCardHeader, IonCardContent, IonCardTitle, IonCard, IonButton } from '@ionic/angular/standalone';
import { DeviceInfoService } from '../services/device-info.service';
import { DeviceInfo as CapacitorDeviceInfo } from '@capacitor/device';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonCardHeader, IonCardContent, IonCardTitle, IonCard, IonButton],
})
export class HomePage 
{
  deviceInfoService: DeviceInfoService;
  deviceInfo: CapacitorDeviceInfo | null = null;

  constructor(deviceInfoService : DeviceInfoService) 
  {
    this.deviceInfoService = deviceInfoService;
  }

  async getDeviceInfo()
  {
    this.deviceInfo = await this.deviceInfoService.getDeviceInfo();
  }
}
