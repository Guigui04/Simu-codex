import { useState } from 'react';
import { SimulationConfigScreen } from './SimulationConfigScreen';
import { SimulationLayout } from './SimulationLayout';
import type { SimulationBootConfig } from '../types/simulation';

export function App(): JSX.Element {
  const [config, setConfig] = useState<SimulationBootConfig | null>(null);

  if (!config) {
    return <SimulationConfigScreen onLaunch={setConfig} />;
  }

  return <SimulationLayout config={config} />;
}
