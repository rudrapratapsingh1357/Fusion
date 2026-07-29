import React from 'react';

const BackgroundEffect = () => {
  return (
    <div className="background-effect" aria-hidden="true">
      {/* Dot grid */}
      <div className="bg-dot-grid" />
      {/* Radial glow blobs - Balanced Cyan Composition */}
      <div className="bg-blob bg-blob--cyan-left" />
      <div className="bg-blob bg-blob--cyan-right" />
      <div className="bg-blob bg-blob--cyan-center" />

      <style>{`
        .background-effect {
          position: fixed;
          inset: 0;
          z-index: 0;
          pointer-events: none;
          overflow: hidden;
        }
        .bg-dot-grid {
          position: absolute;
          inset: 0;
          background-image: radial-gradient(circle, rgba(255,255,255,0.08) 1px, transparent 1px);
          background-size: 32px 32px;
        }
        .bg-blob {
          position: absolute;
          border-radius: 50%;
          filter: blur(120px);
          opacity: 0.15;
          background: #00FFFF;
        }
        .bg-blob--cyan-left {
          width: 500px;
          height: 500px;
          top: -150px;
          left: -100px;
          animation: blobDrift 18s ease-in-out infinite alternate;
        }
        .bg-blob--cyan-right {
          width: 500px;
          height: 500px;
          bottom: -150px;
          right: -100px;
          animation: blobDrift 22s ease-in-out infinite alternate-reverse;
        }
        .bg-blob--cyan-center {
          width: 400px;
          height: 400px;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          animation: blobDriftCenter 26s ease-in-out infinite alternate;
          opacity: 0.10;
        }
        @keyframes blobDrift {
          0%   { transform: translate(0, 0) scale(1); }
          50%  { transform: translate(30px, 20px) scale(1.05); }
          100% { transform: translate(-20px, 40px) scale(0.97); }
        }
        @keyframes blobDriftCenter {
          0%   { transform: translate(-50%, -50%) scale(1); }
          50%  { transform: translate(calc(-50% + 20px), calc(-50% + 30px)) scale(1.1); }
          100% { transform: translate(calc(-50% - 25px), calc(-50% - 15px)) scale(0.95); }
        }
      `}</style>
    </div>
  );
};

export default BackgroundEffect;
