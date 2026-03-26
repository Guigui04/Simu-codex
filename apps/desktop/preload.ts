import { contextBridge } from 'electron';

contextBridge.exposeInMainWorld('genesis', {
  version: '0.1.0'
});
