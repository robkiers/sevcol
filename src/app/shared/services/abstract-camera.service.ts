
import { DesktopCameraService } from './desktop-camera.service';
import { Observable } from 'rxjs';
import { MobileCameraService } from './mobile-camera.service';
import { PlatformInformationProvider } from './platform-information.provider';

export function cameraFactory(
    platformInformationProvider: PlatformInformationProvider): AbstractCameraService {
    if (platformInformationProvider.isMobileDevice) {
        return new MobileCameraService();
    }

    return new DesktopCameraService();
}

// export function cameraFactory() {
//     return new DesktopCameraService();
// }

interface ICameraService {
    getPhoto(): Observable<string>;
}

export abstract class AbstractCameraService implements ICameraService {
    abstract getPhoto(): Observable<string>;
}
