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
    const isMobileDevice = window.innerWidth < 768;
    renderer.setPixelRatio(isMobileDevice ? 1.0 : Math.min(window.devicePixelRatio, 1.5));
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
    // 4B. 3D GLOWING MILKY WAY GALAXY (COSMIC SPIRAL VORTEX)
    // - 5 Majestic Logarithmic Spiral Arms
    // - Supermassive Galactic Core with brilliant diamond-white & gold nucleus
    // - Dense 3D Bulge tapering to an ethereal cosmic dust disc
    // - Continuous orbital Keplerian swirl + mouse perspective tilt
    // - Gentle scroll expansion and deep-space fade (zero glare in footer)
    // ═══════════════════════════════════════════════════
    const galaxyGroup = new THREE.Group();
    const isMobile = window.innerWidth < 768;
    const baseGalaxyX = isMobile ? 0 : 20;
    const baseGalaxyY = isMobile ? -5 : 4;
    const baseGalaxyZ = isMobile ? -18 : -12;
    galaxyGroup.position.set(baseGalaxyX, baseGalaxyY, baseGalaxyZ);

    const baseRotX = 1.05; // ~60 degree 3D oblique tilt revealing spiral arms
    const baseRotY = 0.22;
    const baseRotZ = -0.48;
    galaxyGroup.rotation.set(baseRotX, baseRotY, baseRotZ);

    const GALAXY_COUNT = isMobile ? 6500 : 24000;
    const NUM_ARMS = 5;
    const SPIRAL_TWIST = 3.8;
    const MAX_RADIUS = 68.0;

    const gGeo = new THREE.BufferGeometry();
    const gPos = new Float32Array(GALAXY_COUNT * 3);
    const gCol = new Float32Array(GALAXY_COUNT * 3);

    // Cosmic Palette:
    // Core: Diamond White, Warm Gold, Sunburst Amber
    // Arms: Electric Cyan, Royal Purple, Nebula Magenta, Azure Blue
    // Outer Halo: Deep Violet, Sapphire, Stardust Silver
    for (let i = 0; i < GALAXY_COUNT; i++) {
      // Non-linear power distribution: dense at core, extended spiral arms
      const r = Math.pow(Math.random(), 2.0) * MAX_RADIUS + 0.3;
      const armIndex = i % NUM_ARMS;
      const armAngle = (armIndex / NUM_ARMS) * Math.PI * 2;
      const spiralAngle = armAngle + Math.log(r + 1.2) * SPIRAL_TWIST;

      // Natural arm dispersion that widens outwards
      const scatterSpread = Math.pow(r / MAX_RADIUS, 1.25) * 5.2 + 0.6;
      const scatterAngle = (Math.random() - 0.5) * 0.45;
      const rx = (Math.random() - 0.5) * scatterSpread;
      const ry = (Math.random() - 0.5) * scatterSpread;

      // 3D thickness: dense spherical bulge at center, thin disc at perimeter
      const zThickness = 15.0 * Math.exp(-r / 12.0) + 1.6 + (r / MAX_RADIUS) * 1.8;
      const rz = (Math.random() + Math.random() + Math.random() - 1.5) * zThickness * 0.7;

      const px = Math.cos(spiralAngle + scatterAngle) * r + rx;
      const py = Math.sin(spiralAngle + scatterAngle) * r + ry;
      const pz = rz;

      gPos[i * 3]     = px;
      gPos[i * 3 + 1] = py;
      gPos[i * 3 + 2] = pz;

      // Color gradation across the galaxy
      let cr, cg, cb;
      if (r < 7.5) {
        // Galactic Nucleus: Intense White, Gold & Warm Core Glow
        const pick = Math.random();
        if (pick < 0.45) {
          cr = 1.0; cg = 1.0; cb = 1.0; // Diamond White
        } else if (pick < 0.78) {
          cr = 1.0; cg = 0.88; cb = 0.55; // Luminous Gold
        } else {
          cr = 0.35; cg = 0.95; cb = 1.0; // Core Cyan Spark
        }
      } else if (r < 36.0) {
        // Main Spiral Arms: Electric Cyan, Royal Purple, Cosmic Magenta
        const pick = Math.random();
        if (pick < 0.38) {
          cr = 0.10; cg = 0.85; cb = 1.0; // Cyan
        } else if (pick < 0.72) {
          cr = 0.68; cg = 0.33; cb = 0.98; // Royal Purple
        } else if (pick < 0.90) {
          cr = 0.95; cg = 0.26; cb = 0.75; // Nebula Magenta
        } else {
          cr = 0.25; cg = 0.65; cb = 1.0; // Azure
        }
      } else {
        // Outer Spiral Halo: Royal Violet, Deep Sapphire, Diamond Dust
        const pick = Math.random();
        if (pick < 0.50) {
          cr = 0.55; cg = 0.25; cb = 0.92; // Violet
        } else if (pick < 0.80) {
          cr = 0.20; cg = 0.45; cb = 0.95; // Deep Sapphire
        } else {
          cr = 0.88; cg = 0.94; cb = 1.0; // Silver dust
        }
      }

      // Softer, calm stellar brightness (reduced glow to prevent harsh glare)
      const brightness = 0.38 + Math.random() * 0.22;
      gCol[i * 3]     = cr * brightness;
      gCol[i * 3 + 1] = cg * brightness;
      gCol[i * 3 + 2] = cb * brightness;
    }

    gGeo.setAttribute("position", new THREE.BufferAttribute(gPos, 3));
    gGeo.setAttribute("color", new THREE.BufferAttribute(gCol, 3));

    const galaxyPoints = new THREE.Points(
      gGeo,
      new THREE.PointsMaterial({
        size: isMobile ? 0.40 : 0.52,
        vertexColors: true,
        transparent: true,
        opacity: 0.45,
        blending: THREE.AdditiveBlending,
        depthWrite: false,
        sizeAttenuation: true,
      })
    );
    galaxyGroup.add(galaxyPoints);

    // Subtle Central Core Star Nucleus
    const CORE_POINTS_COUNT = isMobile ? 250 : 550;
    const cGeo = new THREE.BufferGeometry();
    const cPos = new Float32Array(CORE_POINTS_COUNT * 3);
    const cCol = new Float32Array(CORE_POINTS_COUNT * 3);
    for (let i = 0; i < CORE_POINTS_COUNT; i++) {
      const cr = Math.pow(Math.random(), 1.8) * 6.5;
      const cTheta = Math.random() * Math.PI * 2;
      const cPhi = Math.acos(Math.random() * 2 - 1);
      cPos[i * 3]     = cr * Math.sin(cPhi) * Math.cos(cTheta) * 1.2;
      cPos[i * 3 + 1] = cr * Math.sin(cPhi) * Math.sin(cTheta) * 1.2;
      cPos[i * 3 + 2] = cr * Math.cos(cPhi) * 0.7;

      const pick = Math.random();
      const coreDim = 0.45;
      if (pick < 0.55) {
        cCol[i * 3] = 1.0 * coreDim; cCol[i * 3 + 1] = 1.0 * coreDim; cCol[i * 3 + 2] = 1.0 * coreDim;
      } else if (pick < 0.85) {
        cCol[i * 3] = 1.0 * coreDim; cCol[i * 3 + 1] = 0.88 * coreDim; cCol[i * 3 + 2] = 0.55 * coreDim;
      } else {
        cCol[i * 3] = 0.30 * coreDim; cCol[i * 3 + 1] = 0.90 * coreDim; cCol[i * 3 + 2] = 1.0 * coreDim;
      }
    }
    cGeo.setAttribute("position", new THREE.BufferAttribute(cPos, 3));
    cGeo.setAttribute("color", new THREE.BufferAttribute(cCol, 3));
    const coreGlowPoints = new THREE.Points(
      cGeo,
      new THREE.PointsMaterial({
        size: isMobile ? 0.60 : 0.78,
        vertexColors: true,
        transparent: true,
        opacity: 0.45,
        blending: THREE.AdditiveBlending,
        depthWrite: false,
        sizeAttenuation: true,
      })
    );
    galaxyGroup.add(coreGlowPoints);

    scene.add(galaxyGroup);

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
      // 3D MILKY WAY GALAXY: CONTINUOUS SWIRL & SCROLL TRAVERSAL
      // - Smooth continuous orbital Keplerian spinning around galactic pole
      // - Interactive 3D mouse parallax tilt
      // - Gentle scroll expansion and deep-space perspective drift
      // - Opacity dimming in footer to protect eyes from glare
      // ═══════════════════════════════════════════════════
      galaxyPoints.rotation.z += 0.0009;
      coreGlowPoints.rotation.z += 0.0016;

      // Floating wave in zero gravity
      galaxyGroup.position.x = baseGalaxyX + Math.cos(t * 1.2) * 1.0;
      galaxyGroup.position.y = baseGalaxyY + Math.sin(t * 1.6) * 1.2;
      galaxyGroup.position.z = baseGalaxyZ - scrollProgress * 18.0;

      // Smooth mouse-tracking 3D tilt
      galaxyGroup.rotation.x = baseRotX - mouseY * 0.30;
      galaxyGroup.rotation.y = baseRotY + mouseX * 0.38;
      galaxyGroup.rotation.z = baseRotZ + mouseX * 0.15;

      // Subtle scale expansion as user scrolls into cosmic deep
      const galaxyScale = 1.0 + scrollProgress * 0.35;
      galaxyGroup.scale.set(galaxyScale, galaxyScale, galaxyScale);

      // Soft, Calm Galactic Glow (Subtle & Eye-Pleasing)
      // - Hero (p < 0.06): 0.45 (Soft, delicate cosmic spiral)
      // - Middle sections (0.06 -> 0.68): 0.16 (Gentle background nebula)
      // - Contact & Footer (p > 0.68): 0.02 (Zero eye strain & zero glare)
      let targetOpacity = 0.45;
      if (scrollProgress < 0.06) {
        targetOpacity = 0.45;
      } else if (scrollProgress < 0.68) {
        const u = (scrollProgress - 0.06) / 0.15;
        targetOpacity = THREE.MathUtils.lerp(0.45, 0.16, Math.min(u, 1.0));
      } else {
        const fadeU = Math.min((scrollProgress - 0.68) / 0.20, 1.0);
        targetOpacity = THREE.MathUtils.lerp(0.16, 0.02, fadeU);
      }
      galaxyPoints.material.opacity = targetOpacity;
      coreGlowPoints.material.opacity = targetOpacity * 0.85;

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
