import appConfig from "./app-config";

let on = false;
setInterval(() => {
  on = !on;
  LED1.write(on);
}, appConfig.blinkPeriodMilliSec);
