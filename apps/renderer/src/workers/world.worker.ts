/// <reference lib="webworker" />

self.onmessage = () => {
  self.postMessage({ type: 'WORLD_READY' });
};
