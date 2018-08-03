import {Injectable} from "@angular/core";
import 'rxjs/add/operator/map';

@Injectable(({providedIn:'root'}) as any)
export class ConfigurationService {
    private config: Object = null;

  constructor() {}

  getConfig(configKey: string): string {
    if (!this.config) {
        console.log("No saved configuration.");
        throw new Error("No saved configuration.");
    }
    if (!this.config[configKey]) {
        console.log("Configuration does not contain the key: " + configKey);
        throw new Error("Configuration does not contain the key: " + configKey);
    }
    return this.config[configKey];
  }
}
