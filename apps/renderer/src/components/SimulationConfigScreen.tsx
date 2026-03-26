import { useState } from 'react';
import type { SimulationBootConfig, ResourceRichness, StartingEra, WorldSize } from '../types/simulation';

interface Props {
  onLaunch: (config: SimulationBootConfig) => void;
}

export function SimulationConfigScreen({ onLaunch }: Props): JSX.Element {
  const [initialHumans, setInitialHumans] = useState(20);
  const [worldSize, setWorldSize] = useState<WorldSize>('medium');
  const [resources, setResources] = useState<ResourceRichness>('normal');
  const [disasters, setDisasters] = useState(true);
  const [mutations, setMutations] = useState(false);
  const [era, setEra] = useState<StartingEra>('prehistory');

  return (
    <main className="config">
      <h1>Genèse — Simulation de Civilisation</h1>
      <label className="form-row">
        Humains initiaux: {initialHumans}
        <input type="range" min={5} max={500} value={initialHumans} onChange={(event) => setInitialHumans(Number(event.target.value))} />
      </label>
      <label className="form-row">
        Taille du monde
        <select value={worldSize} onChange={(event) => setWorldSize(event.target.value as WorldSize)}>
          <option value="small">Petit</option>
          <option value="medium">Moyen</option>
          <option value="large">Grand</option>
          <option value="epic">Épique</option>
        </select>
      </label>
      <label className="form-row">
        Richesse des ressources
        <select value={resources} onChange={(event) => setResources(event.target.value as ResourceRichness)}>
          <option value="arid">Aride</option>
          <option value="normal">Normal</option>
          <option value="abundant">Abondant</option>
        </select>
      </label>
      <label>
        <input type="checkbox" checked={disasters} onChange={(event) => setDisasters(event.target.checked)} /> Activer les catastrophes naturelles
      </label>
      <label>
        <input type="checkbox" checked={mutations} onChange={(event) => setMutations(event.target.checked)} /> Activer les mutations génétiques
      </label>
      <label className="form-row">
        Époque de départ
        <select value={era} onChange={(event) => setEra(event.target.value as StartingEra)}>
          <option value="prehistory">Préhistoire</option>
          <option value="stone-age">Âge de Pierre</option>
          <option value="custom">Custom</option>
        </select>
      </label>
      <button
        type="button"
        onClick={() =>
          onLaunch({
            initialHumans,
            worldSize,
            resources,
            disasters,
            mutations,
            era
          })
        }
      >
        Lancer la Genèse
      </button>
    </main>
  );
}
