/// <reference lib="webworker" />

self.onmessage = () => {
  self.postMessage({
    type: 'ECON_UPDATE',
    gdp: 0,
    gini: 0,
    inflation: 0
  });
};
