// ═══════════════════════════════════════════════════
// COMPONENT: ThreeBackground.jsx — BALANCED VISIBILITY & READABLE OVERLAY
// Background visible subtly with glowing nebula & stars, comfortable contrast
// ═══════════════════════════════════════════════════
import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function ThreeBackground() {
  const ref = useRef(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;

    // -- SCENE & RENDERER --
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 2000);
    camera.position.set(0, 14, 85);

    const renderer = new THREE.WebGLRenderer({
      canvas,
      antialias: true,
      alpha: true,
      powerPreference: "high-performance",
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
    renderer.setSize(window.innerWidth, window.innerHeight);

    // -- 1. STARFIELD (Balanced visibility) --
    const mkStars = (n, sz, col, r, op = 0.5) => {
      const g = new THREE.BufferGeometry();
      const p = new Float32Array(n * 3);
      for (let i = 0; i < n; i++) {
        p[i * 3] = (Math.random() - 0.5) * r;
        p[i * 3 + 1] = (Math.random() - 0.5) * (r * 0.7);
        p[i * 3 + 2] = (Math.random() - 0.5) * r;
      }
      g.setAttribute("position", new THREE.BufferAttribute(p, 3));
      return new THREE.Points(
        g,
        new THREE.PointsMaterial({
          color: col,
          size: sz,
          transparent: true,
          opacity: op,
          sizeAttenuation: true,
        })
      );
    };

    // Visible, sparkling starfield
    scene.add(mkStars(1800, 0.28, 0xffffff, 1000, 0.55));
    scene.add(mkStars(800, 0.35, 0xcc88ff, 800, 0.48));
    scene.add(mkStars(800, 0.32, 0x88ccff, 700, 0.45));

    // -- 2. GALAXY NEBULA (Slightly more visible) --
    const NC = 4500;
    const nGeo = new THREE.BufferGeometry();
    const nPos = new Float32Array(NC * 3);
    const nCol = new Float32Array(NC * 3);
    const COLS = [
      new THREE.Color(0xa855f7),
      new THREE.Color(0xec4899),
      new THREE.Color(0x4f46e5),
      new THREE.Color(0x22d3ee),
    ];
    for (let i = 0; i < NC; i++) {
      const arm = Math.floor(Math.random() * 4);
      const aA = (arm / 4) * Math.PI * 2;
      const r = Math.random() * 140 + 10;
      const spin = r * 0.014;
      const ang = aA + spin;
      const sc = (Math.random() - 0.5) * 20;
      nPos[i * 3] = Math.cos(ang) * r + sc;
      nPos[i * 3 + 1] = (Math.random() - 0.5) * 16;
      nPos[i * 3 + 2] = Math.sin(ang) * r + sc - 95;

      const c = COLS[Math.floor(Math.random() * COLS.length)];
      const m = Math.random() * 0.45 + 0.35;
      nCol[i * 3] = c.r * m;
      nCol[i * 3 + 1] = c.g * m;
      nCol[i * 3 + 2] = c.b * m;
    }
    nGeo.setAttribute("position", new THREE.BufferAttribute(nPos, 3));
    nGeo.setAttribute("color", new THREE.BufferAttribute(nCol, 3));
    const nebula = new THREE.Points(
      nGeo,
      new THREE.PointsMaterial({
        size: 0.8,
        vertexColors: true,
        transparent: true,
        opacity: 0.48,
        sizeAttenuation: true,
      })
    );
    scene.add(nebula);

    // -- 3. TORUS KNOTS --
    const knot = new THREE.Mesh(
      new THREE.TorusKnotGeometry(20, 5.5, 180, 18, 2, 3),
      new THREE.MeshBasicMaterial({ color: 0x9d00ff, wireframe: true, transparent: true, opacity: 0.09 })
    );
    knot.position.set(0, 0, -75);
    scene.add(knot);

    const knot2 = new THREE.Mesh(
      new THREE.TorusKnotGeometry(10, 2, 100, 14, 3, 5),
      new THREE.MeshBasicMaterial({ color: 0x22d3ee, wireframe: true, transparent: true, opacity: 0.08 })
    );
    knot2.position.set(0, 0, -75);
    scene.add(knot2);

    // -- 4. TORUS RINGS --
    const mkTorus = (r, t, col, op, rx, rz, pz) => {
      const m = new THREE.Mesh(
        new THREE.TorusGeometry(r, t, 14, 140),
        new THREE.MeshBasicMaterial({ color: col, transparent: true, opacity: op })
      );
      m.rotation.x = rx;
      m.rotation.z = rz;
      m.position.z = pz;
      scene.add(m);
      return m;
    };
    const tr1 = mkTorus(30, 0.22, 0xec4899, 0.16, Math.PI / 3, 0.2, -70);
    const tr2 = mkTorus(40, 0.16, 0x22d3ee, 0.13, -Math.PI / 4, -0.15, -70);
    const tr3 = mkTorus(20, 0.18, 0xa855f7, 0.15, Math.PI / 2, 0, -70);

    // -- 5. FLOATING WIREFRAME GEOMETRIES --
    const mkFloat = (geo, col, x, y, z, rx, ry) => {
      const m = new THREE.Mesh(
        geo,
        new THREE.MeshBasicMaterial({
          color: col,
          wireframe: true,
          transparent: true,
          opacity: 0.20,
        })
      );
      m.position.set(x, y, z);
      m.userData = { rx, ry, bY: y };
      scene.add(m);
      return m;
    };
    const floaters = [
      mkFloat(new THREE.IcosahedronGeometry(5, 1), 0xa855f7, -50, 22, -35, 0.003, 0.005),
      mkFloat(new THREE.OctahedronGeometry(4, 0), 0x22d3ee, 48, -14, -30, 0.005, 0.004),
      mkFloat(new THREE.TetrahedronGeometry(3.5, 0), 0xec4899, -32, -26, -45, 0.004, 0.006),
    ];

    // -- Mouse parallax --
    let tRX = 0;
    let tRY = 0;
    const onMouse = e => {
      tRY = ((e.clientX / window.innerWidth) - 0.5) * 0.18;
      tRX = -((e.clientY / window.innerHeight) - 0.5) * 0.12;
    };
    window.addEventListener("mousemove", onMouse);

    // -- ANIMATE --
    let t = 0;
    let raf;
    const animate = () => {
      raf = requestAnimationFrame(animate);
      t += 0.0025;

      nebula.rotation.y = t * 0.012;
      knot.rotation.x = t * 0.10;
      knot.rotation.y = t * 0.15;
      knot2.rotation.x = -t * 0.12;
      knot2.rotation.y = -t * 0.10;
      tr1.rotation.z = t * 0.06;
      tr2.rotation.z = -t * 0.04;
      tr3.rotation.y = t * 0.03;

      floaters.forEach((f, i) => {
        f.rotation.x += f.userData.rx;
        f.rotation.y += f.userData.ry;
        f.position.y = f.userData.bY + Math.sin(t + i * 1.4) * 1.4;
      });

      camera.position.y = 14 + Math.sin(t * 0.35) * 1.1;
      camera.rotation.x += (tRX - camera.rotation.x) * 0.02;
      camera.rotation.y += (tRY - camera.rotation.y) * 0.02;

      renderer.render(scene, camera);
    };
    animate();

    const onResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener("resize", onResize);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", onMouse);
      window.removeEventListener("resize", onResize);
      renderer.dispose();
    };
  }, []);

  return (
    <>
      <canvas
        ref={ref}
        id="bg-canvas"
        style={{ position: "fixed", inset: 0, zIndex: 0, pointerEvents: "none" }}
      />
      {/* Balanced dark overlay: allows background elements to shine softly while keeping text readable */}
      <div
        id="bg-dark-overlay"
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 0,
          pointerEvents: "none",
          background: "radial-gradient(ellipse 90% 70% at 50% 30%, rgba(3, 0, 12, 0.48) 0%, rgba(2, 0, 8, 0.72) 75%, #010005 100%)",
        }}
      />
    </>
  );
}
