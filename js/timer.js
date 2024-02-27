import { hour, minute, second } from "./htmlElementHandles.js";

class Timer {
   constructor() {
      this.hours = 0;
      this.minutes = 0;
      this.seconds = 0;

      this.listenerFunc();
   }

   listenerFunc() {
      hour.addEventListener("change", (e) => this.editHourInput(e));
      minute.addEventListener("change", (e) => this.editMinuteInput(e));
      second.addEventListener("change", (e) => this.editSecondInput(e));
   }
}

new Timer();