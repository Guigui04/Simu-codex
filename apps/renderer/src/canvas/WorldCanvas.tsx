import { Application, Graphics } from 'pixi.js';
import { useEffect, useRef } from 'react';

export function WorldCanvas(): JSX.Element {
  const hostRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const host = hostRef.current;
    if (!host) {
      return;
    }

    const app = new Application();
    void app.init({
      resizeTo: host,
      background: '#0a0f1a',
      antialias: true
    }).then(() => {
      host.appendChild(app.canvas);
      const cell = 8;
      for (let y = 0; y < 150; y += 1) {
        for (let x = 0; x < 200; x += 1) {
          const tile = new Graphics();
          tile.rect(x * cell, y * cell, cell, cell);
          tile.fill((x + y) % 3 === 0 ? '#1f5f3d' : '#2f7a4f');
          app.stage.addChild(tile);
        }
      }
    });

    return () => {
      app.destroy(true, { children: true });
    };
  }, []);

  return <div ref={hostRef} style={{ width: '100%', height: '100%' }} />;
}
