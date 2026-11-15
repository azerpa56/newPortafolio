import { ImageResponse } from 'next/og';

export const alt = 'Alejandro Zerpa — Desarrollador Full-Stack especializado en IA';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

const TAGS = ['Next.js', 'Spring Boot', 'Gemini AI', 'n8n', 'PostgreSQL'];

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '72px 80px',
          background: 'linear-gradient(135deg, #0f172a 0%, #1e1b4b 55%, #3b0764 100%)',
          color: '#ffffff',
          fontFamily: 'sans-serif',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
          <div
            style={{
              display: 'flex',
              padding: '10px 22px',
              borderRadius: 999,
              border: '2px solid rgba(196,181,253,0.5)',
              color: '#ddd6fe',
              fontSize: 28,
            }}
          >
            Full-Stack · IA aplicada
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div style={{ display: 'flex', fontSize: 92, fontWeight: 700, letterSpacing: -2 }}>
            Alejandro Zerpa
          </div>
          <div style={{ display: 'flex', fontSize: 40, color: '#c7d2fe', marginTop: 12 }}>
            Desarrollador Full-Stack especializado en IA
          </div>
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
          <div style={{ display: 'flex', gap: 14 }}>
            {TAGS.map((tag) => (
              <div
                key={tag}
                style={{
                  display: 'flex',
                  padding: '8px 18px',
                  borderRadius: 10,
                  background: 'rgba(255,255,255,0.1)',
                  fontSize: 24,
                  color: '#e0e7ff',
                }}
              >
                {tag}
              </div>
            ))}
          </div>
          <div style={{ display: 'flex', fontSize: 28, color: '#a5b4fc' }}>alejandro-zerpa.tech</div>
        </div>
      </div>
    ),
    size
  );
}
