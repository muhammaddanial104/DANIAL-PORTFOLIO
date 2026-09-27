// ═══════════════════════════════════════════════════
// COMPONENT: ThreeBackground.jsx — 3D SCROLLYTELLING CAMERA JOURNEY
// Inspired by Skybloom & Black Tide (Videos 2 & 3)
// Real 3D Camera Travel through Cyber Corridor, Neural Mesh, & Data Vortex
// ═══════════════════════════════════════════════════
import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function ThreeBackground() {
  const ref = useRef(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;

    // -- 1. SCENE & CAMERA --
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x02000a, 0.0075);

    const camera = new THREE.PerspectiveCamera(58, window.innerWidth / window.innerHeight, 0.1, 1500);
    camera.position.set(0, 10, 75);

    const renderer = new THREE.WebGLRenderer({
      canvas,
      antialias: true,
      alpha: true,
      powerPreference: "high-performance",
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
    renderer.setSize(window.innerWidth, window.innerHeight);

    // -- 2. STARFIELD DEEP SPACE (1,800 Stars) --
    const mkStars = (n, sz, col, r, op = 0.5) => {
      const g = new THREE.BufferGeometry();
      const p = new Float32Array(n * 3);
      for (let i = 0; i < n; i++) {
        p[i * 3] = (Math.random() - 0.5) * r;
        p[i * 3 + 1] = (Math.random() - 0.5) * (r * 0.7);
        p[i * 3 + 2] = (Math.random() - 0.5) * r - 40;
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

    scene.add(mkStars(1400, 0.28, 0xffffff, 900, 0.6));
    scene.add(mkStars(700, 0.35, 0x22d3ee, 700, 0.45));
    scene.add(mkStars(700, 0.38, 0xa855f7, 700, 0.45));

    // -- 3. SPIRAL NEBULA CLOUD --
    const NC = 3800;
    const nGeo = new THREE.BufferGeometry();
    const nPos = new Float32Array(NC * 3);
    const nCol = new Float32Array(NC * 3);
    const COLS = [
      new THREE.Color(0xa855f7),
      new THREE.Color(0x22d3ee),
      new THREE.Color(0x10b981),
      new THREE.Color(0xec4899),
    ];
    for (let i = 0; i < NC; i++) {
      const arm = Math.floor(Math.random() * 4);
      const aA = (arm / 4) * Math.PI * 2;
      const r = Math.random() * 150 + 10;
      const spin = r * 0.015;
      const ang = aA + spin;
      const sc = (Math.random() - 0.5) * 22;
      nPos[i * 3] = Math.cos(ang) * r + sc;
      nPos[i * 3 + 1] = (Math.random() - 0.5) * 20;
      nPos[i * 3 + 2] = Math.sin(ang) * r + sc - 60;

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
        size: 0.85,
        vertexColors: true,
        transparent: true,
        opacity: 0.48,
        sizeAttenuation: true,
      })
    );
    scene.add(nebula);

    // -- 4. CENTRAL 3D NEURAL CORE (Hero Key Element) --
    const coreGroup = new THREE.Group();
    coreGroup.position.set(0, 0, -40);

    // Outer Wireframe Core Icosahedron
    const coreIcosa = new THREE.Mesh(
      new THREE.IcosahedronGeometry(12, 1),
      new THREE.MeshBasicMaterial({
        color: 0x22d3ee,
        wireframe: true,
        transparent: true,
        opacity: 0.22,
      })
    );
    coreGroup.add(coreIcosa);

    // Inner Glowing Core Octahedron
    const coreInner = new THREE.Mesh(
      new THREE.OctahedronGeometry(6, 0),
      new THREE.MeshBasicMaterial({
        color: 0xa855f7,
        wireframe: true,
        transparent: true,
        opacity: 0.35,
      })
    );
    coreGroup.add(coreInner);

    // Double Orbit Torus Rings
    const mkRing = (r, col, rx, rz) => {
      const ring = new THREE.Mesh(
        new THREE.TorusGeometry(r, 0.16, 12, 120),
        new THREE.MeshBasicMaterial({ color: col, transparent: true, opacity: 0.28 })
      );
      ring.rotation.x = rx;
      ring.rotation.z = rz;
      return ring;
    };
    const ring1 = mkRing(22, 0x10b981, Math.PI / 3, 0.2);
    const ring2 = mkRing(26, 0xa855f7, -Math.PI / 4, -0.3);
    const ring3 = mkRing(18, 0x22d3ee, Math.PI / 2, 0);
    coreGroup.add(ring1, ring2, ring3);

    scene.add(coreGroup);

    // ═══════════════════════════════════════════════════
    // 4B. 3D GLOWING PARTICLE ROCKET (PINTEREST INSPIRATION)
    // Hyper-detailed Point Cloud Spacecraft:
    // - Cockpit Dome: Glowing Electric Cyan / Blue Sphere
    // - Fuselage & Nose: Golden Amber, Warm Orange & Diamond White
    // - Swept Delta Wings: Aerodynamic stabilizers with white & cyan borders
    // - Thruster Exhaust: Dynamic flickering particle plume
    // ═══════════════════════════════════════════════════
    const rocketGroup = new THREE.Group();
    const isMobile = window.innerWidth < 768;
    const baseRocketX = isMobile ? 0 : 25;
    const baseRocketY = isMobile ? -12 : 2;
    const baseRocketZ = isMobile ? -10 : 12;
    rocketGroup.position.set(baseRocketX, baseRocketY, baseRocketZ);

    const baseRotX = 0.22;
    const baseRotY = 0.38;
    const baseRotZ = -0.42; // 25-deg upward aerodynamic tilt matching reference photo
    rocketGroup.rotation.set(baseRotX, baseRotY, baseRotZ);

    const ROCKET_PARTICLE_COUNT = 7500;
    const rGeo = new THREE.BufferGeometry();
    const rPos = new Float32Array(ROCKET_PARTICLE_COUNT * 3);
    const rCol = new Float32Array(ROCKET_PARTICLE_COUNT * 3);
    const rSpeeds = new Float32Array(ROCKET_PARTICLE_COUNT);

    // Exact color palette matching reference photo:
    const C_CYAN   = [0.0, 0.94, 1.0];   // Electric Cyan Cockpit
    const C_BLUE   = [0.12, 0.65, 1.0];  // Deep Sky Blue
    const C_GOLD   = [0.98, 0.72, 0.14]; // Golden Amber Fuselage
    const C_ORANGE = [0.95, 0.44, 0.08]; // Warm Orange
    const C_WHITE  = [1.0, 1.0, 1.0];    // Diamond White Sparkles

    for (let i = 0; i < ROCKET_PARTICLE_COUNT; i++) {
      const part = Math.random();
      let x = 0, y = 0, z = 0;
      let col = C_WHITE;

      if (part < 0.25) {
        // 1. COCKPIT DOME: Dense Glowing Cyan/Blue Sphere atop fuselage
        const theta = Math.random() * Math.PI * 2;
        const phi = Math.acos(Math.random() * 2 - 1);
        const r = 4.2 * Math.cbrt(Math.random());
        x = r * Math.sin(phi) * Math.cos(theta);
        y = 3.4 + r * Math.sin(phi) * Math.sin(theta) * 0.85;
        z = 2.8 + r * Math.cos(phi);
        col = Math.random() < 0.22 ? C_WHITE : Math.random() < 0.6 ? C_CYAN : C_BLUE;
      } else if (part < 0.68) {
        // 2. MAIN FUSELAGE & NOSE CONE (Golden Amber & Diamond White)
        const tZ = Math.random();
        z = -13 + tZ * 29; // z from -13 to 16
        let radius;
        if (z > 4) {
          // Streamlined parabolic nose cone
          const f = (16 - z) / 12;
          radius = 7.2 * Math.pow(Math.max(0, f), 0.75);
        } else if (z < -8) {
          // Tapered aft fuselage
          const f = (z + 13) / 5;
          radius = 5.8 + f * 1.4;
        } else {
          radius = 7.2;
        }
        const theta = Math.random() * Math.PI * 2;
        const r = radius * (0.84 + 0.16 * Math.random());
        x = r * Math.cos(theta) * 1.08;
        y = r * Math.sin(theta) * 0.92;

        if (z > 11) {
          col = Math.random() < 0.45 ? C_WHITE : C_GOLD;
        } else if (y > 1.2 && z > -2 && z < 7) {
          col = Math.random() < 0.35 ? C_CYAN : C_GOLD;
        } else {
          col = Math.random() < 0.28 ? C_WHITE : Math.random() < 0.65 ? C_GOLD : C_ORANGE;
        }
      } else if (part < 0.86) {
        // 3. SWEPT DELTA FINS / WINGS
        const side = Math.random() < 0.5 ? 1 : -1;
        const wingT = Math.random();
        const span = 6.2 + wingT * 11.5;
        const chordZ = -11 + (1 - wingT) * 11 - Math.random() * 3.0;
        x = side * span;
        y = (Math.random() - 0.5) * 1.0;
        z = chordZ;
        col = wingT > 0.55 ? (Math.random() < 0.5 ? C_CYAN : C_WHITE) : (Math.random() < 0.5 ? C_GOLD : C_WHITE);
      } else {
        // 4. THRUSTER EXHAUST PLUME
        const plumeT = Math.random();
        z = -13 - plumeT * 18;
        const plumeR = (0.8 + plumeT * 3.8) * Math.random();
        const pAngle = Math.random() * Math.PI * 2;
        x = plumeR * Math.cos(pAngle);
        y = plumeR * Math.sin(pAngle);
        col = plumeT < 0.3 ? (Math.random() < 0.5 ? C_CYAN : C_WHITE) : (Math.random() < 0.65 ? C_ORANGE : C_GOLD);
      }

      rPos[i * 3]     = x;
      rPos[i * 3 + 1] = y;
      rPos[i * 3 + 2] = z;

      rCol[i * 3]     = col[0];
      rCol[i * 3 + 1] = col[1];
      rCol[i * 3 + 2] = col[2];

      rSpeeds[i] = Math.random() * 0.8 + 0.4;
    }

    rGeo.setAttribute("position", new THREE.BufferAttribute(rPos, 3));
    rGeo.setAttribute("color", new THREE.BufferAttribute(rCol, 3));

    const rocketPoints = new THREE.Points(
      rGeo,
      new THREE.PointsMaterial({
        size: 0.58,
        vertexColors: true,
        transparent: true,
        opacity: 0.95,
        blending: THREE.AdditiveBlending,
        depthWrite: false,
        sizeAttenuation: true,
      })
    );
    rocketGroup.add(rocketPoints);
    scene.add(rocketGroup);

    // -- 5. FLOATING ARCHITECTURAL POLYHEDRA (About & Skills Waypoints) --
    const mkPoly = (geo, col, x, y, z, rx, ry) => {
      const m = new THREE.Mesh(
        geo,
        new THREE.MeshBasicMaterial({ color: col, wireframe: true, transparent: true, opacity: 0.24 })
      );
      m.position.set(x, y, z);
      m.userData = { rx, ry, origY: y };
      scene.add(m);
      return m;
    };

    const polyhedra = [
      mkPoly(new THREE.DodecahedronGeometry(5, 0), 0x22d3ee, -38, 14, 10, 0.005, 0.006),
      mkPoly(new THREE.IcosahedronGeometry(6, 0), 0xa855f7, 36, -10, -5, 0.004, 0.005),
      mkPoly(new THREE.OctahedronGeometry(4.5, 0), 0x10b981, -28, -22, -20, 0.006, 0.004),
      mkPoly(new THREE.TetrahedronGeometry(4, 0), 0xec4899, 30, 20, -30, 0.005, 0.007),
    ];

    // -- 6. CYBER MATRIX GROUND GRID --
    const gridHelper = new THREE.GridHelper(260, 48, 0x22d3ee, 0xa855f7);
    gridHelper.position.set(0, -35, -20);
    gridHelper.material.transparent = true;
    gridHelper.material.opacity = 0.12;
    scene.add(gridHelper);

    // -- 7. SCROLL-DRIVEN 3D CAMERA TRAVEL (Videos 2 & 3 Traversal) --
    // We map scroll percentage [0, 1] to cinematic camera waypoints
    let scrollProgress = 0;
    let targetScroll = 0;

    const onScroll = () => {
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      targetScroll = maxScroll > 0 ? Math.min(Math.max(window.scrollY / maxScroll, 0), 1) : 0;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    // Mouse Parallax
    let mouseX = 0;
    let mouseY = 0;
    let targetMX = 0;
    let targetMY = 0;
    const onMouseMove = e => {
      targetMX = (e.clientX / window.innerWidth - 0.5) * 2;
      targetMY = (e.clientY / window.innerHeight - 0.5) * 2;
    };
    window.addEventListener("mousemove", onMouseMove, { passive: true });

    // -- 8. ANIMATION LOOP WITH GSAP-STYLE LERP --
    let t = 0;
    let rafId;

    const animate = () => {
      rafId = requestAnimationFrame(animate);
      t += 0.003;

      // Sample sub-pixel smooth scroll from Lenis or window
      const currentScrollY = window.__lenis ? window.__lenis.scroll : window.scrollY;
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (maxScroll > 0) {
        targetScroll = Math.min(Math.max(currentScrollY / maxScroll, 0), 1);
      }

      // Smooth lerp for scroll and mouse
      scrollProgress += (targetScroll - scrollProgress) * 0.08;
      mouseX += (targetMX - mouseX) * 0.05;
      mouseY += (targetMY - mouseY) * 0.05;

      // Orbit rotating geometries
      nebula.rotation.y = t * 0.015;
      coreIcosa.rotation.x = t * 0.12;
      coreIcosa.rotation.y = t * 0.16;
      coreInner.rotation.x = -t * 0.18;
      coreInner.rotation.y = t * 0.14;
      ring1.rotation.z = t * 0.08;
      ring2.rotation.z = -t * 0.06;
      ring3.rotation.y = t * 0.05;

      polyhedra.forEach((p, idx) => {
        p.rotation.x += p.userData.rx;
        p.rotation.y += p.userData.ry;
        p.position.y = p.userData.origY + Math.sin(t * 1.5 + idx * 1.2) * 1.6;
      });

      // ═══════════════════════════════════════════════════
      // 3D PARTICLE ROCKET PHYSICS (PINTEREST INTERACTIVE MESH)
      // Zero-gravity float + Real-time mouse flight banking + Streaming thruster
      // ═══════════════════════════════════════════════════
      const pPositions = rGeo.attributes.position.array;
      const boostFactor = Math.min(scrollProgress / 0.18, 1);

      // Floating wave in zero gravity + scroll boost
      rocketGroup.position.x = baseRocketX + Math.cos(t * 1.4) * 0.9 + boostFactor * 28;
      rocketGroup.position.y = baseRocketY + Math.sin(t * 1.8) * 1.5 + boostFactor * 38;
      rocketGroup.position.z = baseRocketZ + boostFactor * 55;

      // Mouse tracking 3D tilt (spacecraft banking towards cursor)
      rocketGroup.rotation.x = baseRotX - mouseY * 0.35;
      rocketGroup.rotation.y = baseRotY + mouseX * 0.45;
      rocketGroup.rotation.z = baseRotZ + mouseX * -0.15;

      // Thruster exhaust particles flicker and stream backwards
      const thrusterStartIdx = Math.floor(ROCKET_PARTICLE_COUNT * 0.86);
      for (let i = thrusterStartIdx; i < ROCKET_PARTICLE_COUNT; i++) {
        const i3 = i * 3;
        pPositions[i3 + 2] -= rSpeeds[i] * (0.9 + boostFactor * 2.2);
        if (pPositions[i3 + 2] < -34) {
          pPositions[i3 + 2] = -13 - Math.random() * 2.5;
        }
      }
      rGeo.attributes.position.needsUpdate = true;

      // ═══════════════════════════════════════════════════
      // 3D CAMERA TRAVEL WAYPOINTS — 6 SECTIONS (SKYBLOOM & BLACK TIDE)
      // Section 0 (Hero):      Pos(0, 10, 85)     Look(0, 0, -40)     Roll: 0
      // Section 1 (About):     Pos(24, -4, 52)    Look(-8, 0, -20)    Roll: 0.08
      // Section 2 (Skills):    Pos(-26, 8, 26)    Look(10, -2, -30)   Roll: -0.10
      // Section 3 (Projects):  Pos(0, -14, 8)     Look(0, -5, -45)    Roll: 0.05
      // Section 4 (Services):  Pos(20, 10, -8)    Look(-12, -2, -50)  Roll: -0.07
      // Section 5 (Contact):   Pos(0, -24, -28)   Look(0, -18, -75)   Roll: 0
      // ═══════════════════════════════════════════════════
      const p = scrollProgress;

      let camX, camY, camZ, lookX, lookY, lookZ, roll;

      if (p < 0.20) {
        // Section 0 -> 1: Hero to About (Gliding right and down around the Neural Core)
        const u = p / 0.20;
        const easeU = 0.5 - 0.5 * Math.cos(u * Math.PI);
        camX = THREE.MathUtils.lerp(0, 24, easeU);
        camY = THREE.MathUtils.lerp(10, -4, easeU);
        camZ = THREE.MathUtils.lerp(85, 52, easeU);
        lookX = THREE.MathUtils.lerp(0, -8, easeU);
        lookY = THREE.MathUtils.lerp(0, 0, easeU);
        lookZ = THREE.MathUtils.lerp(-40, -20, easeU);
        roll = THREE.MathUtils.lerp(0, 0.08, easeU);
      } else if (p < 0.40) {
        // Section 1 -> 2: About to Skills (Swooping to the left through the cyber nebula)
        const u = (p - 0.20) / 0.20;
        const easeU = 0.5 - 0.5 * Math.cos(u * Math.PI);
        camX = THREE.MathUtils.lerp(24, -26, easeU);
        camY = THREE.MathUtils.lerp(-4, 8, easeU);
        camZ = THREE.MathUtils.lerp(52, 26, easeU);
        lookX = THREE.MathUtils.lerp(-8, 10, easeU);
        lookY = THREE.MathUtils.lerp(0, -2, easeU);
        lookZ = THREE.MathUtils.lerp(-20, -30, easeU);
        roll = THREE.MathUtils.lerp(0.08, -0.10, easeU);
      } else if (p < 0.60) {
        // Section 2 -> 3: Skills to Projects (Centering and diving low over the Matrix grid)
        const u = (p - 0.40) / 0.20;
        const easeU = 0.5 - 0.5 * Math.cos(u * Math.PI);
        camX = THREE.MathUtils.lerp(-26, 0, easeU);
        camY = THREE.MathUtils.lerp(8, -14, easeU);
        camZ = THREE.MathUtils.lerp(26, 8, easeU);
        lookX = THREE.MathUtils.lerp(10, 0, easeU);
        lookY = THREE.MathUtils.lerp(-2, -5, easeU);
        lookZ = THREE.MathUtils.lerp(-30, -45, easeU);
        roll = THREE.MathUtils.lerp(-0.10, 0.05, easeU);
      } else if (p < 0.80) {
        // Section 3 -> 4: Projects to Services (Climbing diagonally right into upper cyber orbit)
        const u = (p - 0.60) / 0.20;
        const easeU = 0.5 - 0.5 * Math.cos(u * Math.PI);
        camX = THREE.MathUtils.lerp(0, 20, easeU);
        camY = THREE.MathUtils.lerp(-14, 10, easeU);
        camZ = THREE.MathUtils.lerp(8, -8, easeU);
        lookX = THREE.MathUtils.lerp(0, -12, easeU);
        lookY = THREE.MathUtils.lerp(-5, -2, easeU);
        lookZ = THREE.MathUtils.lerp(-45, -50, easeU);
        roll = THREE.MathUtils.lerp(0.05, -0.07, easeU);
      } else {
        // Section 4 -> 5: Services to Contact (Final descent into the deep Nexus vortex)
        const u = (p - 0.80) / 0.20;
        const easeU = 0.5 - 0.5 * Math.cos(u * Math.PI);
        camX = THREE.MathUtils.lerp(20, 0, easeU);
        camY = THREE.MathUtils.lerp(10, -24, easeU);
        camZ = THREE.MathUtils.lerp(-8, -28, easeU);
        lookX = THREE.MathUtils.lerp(-12, 0, easeU);
        lookY = THREE.MathUtils.lerp(-2, -18, easeU);
        lookZ = THREE.MathUtils.lerp(-50, -75, easeU);
        roll = THREE.MathUtils.lerp(-0.07, 0, easeU);
      }

      // Add Mouse Parallax
      camera.position.x = camX + mouseX * 4.5;
      camera.position.y = camY - mouseY * 3.0;
      camera.position.z = camZ;

      camera.lookAt(lookX + mouseX * 2.0, lookY - mouseY * 1.5, lookZ);

      // Camera Banking / Aircraft Roll for cinematic flight feel
      camera.rotation.z += roll + mouseX * -0.03;

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
      cancelAnimationFrame(rafId);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("mousemove", onMouseMove);
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
      {/* Cinematic Vignette Overlay */}
      <div
        id="bg-dark-overlay"
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 0,
          pointerEvents: "none",
          background: "radial-gradient(ellipse 95% 75% at 50% 30%, rgba(3, 0, 12, 0.42) 0%, rgba(2, 0, 8, 0.75) 75%, #010005 100%)",
        }}
      />
    </>
  );
}
