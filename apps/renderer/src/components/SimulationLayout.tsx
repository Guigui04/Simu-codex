import { WorldCanvas } from '../canvas/WorldCanvas';
import type { SimulationBootConfig } from '../types/simulation';

interface Props {
  config: SimulationBootConfig;
}

export function SimulationLayout({ config }: Props): JSX.Element {
  return (
    <main className="layout">
      <section className="panel">
        <WorldCanvas />
      </section>
      <aside className="panel" style={{ padding: 12 }}>
        <h2>Tableau de bord</h2>
        <p>Population initiale: {config.initialHumans}</p>
        <p>Monde: {config.worldSize}</p>
        <p>Ressources: {config.resources}</p>
      </aside>
      <section className="panel" style={{ padding: 12 }}>
        <h3>Contrôles temporels</h3>
        <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
          <button type="button">Pause/Play</button>
          <button type="button">x1</button>
          <button type="button">x5</button>
          <button type="button">x10</button>
          <button type="button">x50</button>
          <button type="button">x100</button>
          <button type="button">x1000</button>
        </div>
      </section>
      <section className="panel" style={{ padding: 12 }}>
        <h3>Journal d'événements</h3>
        <ul>
          <li>Jour 1 — Fondation de la première tribu.</li>
          <li>Jour 2 — Découverte de silex près de la rivière.</li>
          <li>Jour 3 — Première alliance commerciale.</li>
        </ul>
      </section>
    </main>
  );
}
