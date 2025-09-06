import appConfig from "./app-config";

//let on = false;
//setInterval(() => {
//  on = !on;
//  LED1.write(on);
//}, appConfig.blinkPeriodMilliSec);

function onInit() {
  const temp = E.getTemperature();
  console.log(`Temp = ${temp}`);
  setInterval(() => {
    LED1.toggle();
  }, appConfig.blinkPeriodMilliSec);
}
