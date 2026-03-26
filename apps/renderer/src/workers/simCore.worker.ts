/// <reference lib="webworker" />

type SimCoreMessage =
  | { type: 'INIT'; initialHumans: number }
  | { type: 'TICK'; steps: number };

let tick = 0;
let population = 0;

self.onmessage = (event: MessageEvent<SimCoreMessage>) => {
  if (event.data.type === 'INIT') {
    population = event.data.initialHumans;
    tick = 0;
  }

  if (event.data.type === 'TICK') {
    tick += event.data.steps;
    self.postMessage({ type: 'TICK_UPDATE', tick, population });
  }
};
