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
    renderer.setPixelRatio(isMobileDevice ? 1.0 : Math.min(window.devicePixelRatio, 2.0));
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

    // -- 4. PURE DEEP SPACE COSMOS (No wireframe clutter) --

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

    // ═══════════════════════════════════════════════════
    // 3D SHOOTING STARS / METEORS (ACROSS MILKY WAY GALAXY)
    // ═══════════════════════════════════════════════════
    const METEOR_COUNT = isMobile ? 4 : 7;
    const meteors3D = [];
    const meteorGroup = new THREE.Group();
    scene.add(meteorGroup);

    // High-precision 128x128 glowing particle sprite texture for meteor heads, trails, and sparks
    const createParticleTexture = () => {
      const c = document.createElement("canvas");
      c.width = 128;
      c.height = 128;
      const cctx = c.getContext("2d");
      const gr = cctx.createRadialGradient(64, 64, 0, 64, 64, 64);
      gr.addColorStop(0, "rgba(255, 255, 255, 1)");
      gr.addColorStop(0.18, "rgba(255, 255, 255, 0.95)");
      gr.addColorStop(0.42, "rgba(165, 243, 252, 0.7)");
      gr.addColorStop(0.72, "rgba(103, 232, 249, 0.2)");
      gr.addColorStop(1, "rgba(0, 0, 0, 0)");
      cctx.fillStyle = gr;
      cctx.fillRect(0, 0, 128, 128);
      const tex = new THREE.CanvasTexture(c);
      tex.minFilter = THREE.LinearFilter;
      tex.magFilter = THREE.LinearFilter;
      return tex;
    };
    const meteorTex = createParticleTexture();

    class ShootingStar3D {
      constructor(idx) {
        this.idx = idx;
        const SEGMENTS = 14;
        this.SEGMENTS = SEGMENTS;

        // Trail Line Geometry (Core Filament)
        const lineGeo = new THREE.BufferGeometry();
        this.posArray = new Float32Array((SEGMENTS + 1) * 3);
        this.colArray = new Float32Array((SEGMENTS + 1) * 3);
        lineGeo.setAttribute("position", new THREE.BufferAttribute(this.posArray, 3));
        lineGeo.setAttribute("color", new THREE.BufferAttribute(this.colArray, 3));

        const lineMat = new THREE.LineBasicMaterial({
          vertexColors: true,
          transparent: true,
          blending: THREE.AdditiveBlending,
          depthWrite: false,
        });
        this.line = new THREE.Line(lineGeo, lineMat);
        meteorGroup.add(this.line);

        // Volumetric Glow Trail (Luminous Plasma Beam)
        const bodyGeo = new THREE.BufferGeometry();
        this.bodyPos = new Float32Array(SEGMENTS * 3);
        this.bodyCol = new Float32Array(SEGMENTS * 3);
        bodyGeo.setAttribute("position", new THREE.BufferAttribute(this.bodyPos, 3));
        bodyGeo.setAttribute("color", new THREE.BufferAttribute(this.bodyCol, 3));
        const bodyMat = new THREE.PointsMaterial({
          map: meteorTex,
          size: isMobile ? 3.2 : 5.0,
          vertexColors: true,
          transparent: true,
          blending: THREE.AdditiveBlending,
          depthWrite: false,
        });
        this.bodyPoints = new THREE.Points(bodyGeo, bodyMat);
        meteorGroup.add(this.bodyPoints);

        // Radiant Glowing Head Nucleus
        const headGeo = new THREE.BufferGeometry();
        headGeo.setAttribute("position", new THREE.BufferAttribute(new Float32Array(3), 3));
        const headMat = new THREE.PointsMaterial({
          map: meteorTex,
          size: isMobile ? 4.5 : 7.0,
          transparent: true,
          blending: THREE.AdditiveBlending,
          depthWrite: false,
        });
        this.head = new THREE.Points(headGeo, headMat);
        meteorGroup.add(this.head);

        // Stardust Sparks shedding behind meteor
        const SPARK_COUNT = 16;
        this.SPARK_COUNT = SPARK_COUNT;
        const sparkGeo = new THREE.BufferGeometry();
        this.sparkPos = new Float32Array(SPARK_COUNT * 3);
        this.sparkCol = new Float32Array(SPARK_COUNT * 3);
        sparkGeo.setAttribute("position", new THREE.BufferAttribute(this.sparkPos, 3));
        sparkGeo.setAttribute("color", new THREE.BufferAttribute(this.sparkCol, 3));

        const sparkMat = new THREE.PointsMaterial({
          map: meteorTex,
          size: isMobile ? 1.8 : 2.6,
          vertexColors: true,
          transparent: true,
          blending: THREE.AdditiveBlending,
          depthWrite: false,
        });
        this.sparks = new THREE.Points(sparkGeo, sparkMat);
        this.sparkData = [];
        for (let i = 0; i < SPARK_COUNT; i++) {
          this.sparkData.push({ x: 0, y: 0, z: 0, vx: 0, vy: 0, vz: 0, alpha: 0 });
        }
        meteorGroup.add(this.sparks);

        this.history = [];
        this.active = false;
        this.delay = idx * 0.7 + Math.random() * 0.5; // Staggered start
      }

      spawn() {
        // Spawn near Milky Way Galaxy volume
        const spawnRight = Math.random() > 0.35;
        const startX = spawnRight
          ? (Math.random() * 55 + 15)
          : (-Math.random() * 45 - 10);
        const startY = Math.random() * 45 + 15;
        const startZ = (Math.random() - 0.5) * 50 - 15;

        this.currentPos = new THREE.Vector3(startX, startY, startZ);

        // Shoot diagonally across the Milky Way Galaxy
        const dirX = spawnRight ? (-1.35 - Math.random() * 0.7) : (1.35 + Math.random() * 0.7);
        const dirY = -1.0 - Math.random() * 0.5;
        const dirZ = 0.2 + (Math.random() - 0.5) * 0.6;
        const dir = new THREE.Vector3(dirX, dirY, dirZ).normalize();

        this.speed = 1.8 + Math.random() * 1.6;
        this.velocity = dir.multiplyScalar(this.speed);

        // Color theme: Brilliant Cyan or Celestial Purple
        const isCyan = Math.random() > 0.4;
        this.coreColor = new THREE.Color(1.0, 1.0, 1.0);
        this.glowColor = isCyan
          ? new THREE.Color(0.25, 0.90, 1.0)
          : new THREE.Color(0.92, 0.40, 1.0);

        this.life = 0;
        this.maxLife = 50 + Math.floor(Math.random() * 32);
        this.history = [];
        for (let i = 0; i <= this.SEGMENTS; i++) {
          this.history.push(this.currentPos.clone());
        }

        for (let i = 0; i < this.SPARK_COUNT; i++) {
          this.sparkData[i].alpha = 0;
        }

        this.active = true;
      }

      update() {
        if (!this.active) {
          this.delay -= 0.016;
          if (this.delay <= 0) {
            this.spawn();
          }
          return;
        }

        this.currentPos.add(this.velocity);
        this.history.unshift(this.currentPos.clone());
        if (this.history.length > this.SEGMENTS + 1) {
          this.history.pop();
        }

        this.life++;

        // Smooth fade-in & fade-out
        const p = this.life / this.maxLife;
        let alpha = 1.0;
        if (p < 0.12) {
          alpha = p / 0.12;
        } else if (p > 0.68) {
          alpha = (1.0 - p) / 0.32;
        }

        // Update trail line vertices and gradient colors
        for (let i = 0; i <= this.SEGMENTS; i++) {
          const pt = this.history[i] || this.currentPos;
          this.posArray[i * 3]     = pt.x;
          this.posArray[i * 3 + 1] = pt.y;
          this.posArray[i * 3 + 2] = pt.z;

          const segFade = Math.pow(1 - (i / this.SEGMENTS), 1.6) * alpha;
          const r = THREE.MathUtils.lerp(this.glowColor.r, this.coreColor.r, Math.max(0, 1 - i * 0.2)) * segFade;
          const g = THREE.MathUtils.lerp(this.glowColor.g, this.coreColor.g, Math.max(0, 1 - i * 0.2)) * segFade;
          const b = THREE.MathUtils.lerp(this.glowColor.b, this.coreColor.b, Math.max(0, 1 - i * 0.2)) * segFade;
          this.colArray[i * 3]     = r;
          this.colArray[i * 3 + 1] = g;
          this.colArray[i * 3 + 2] = b;
        }
        this.line.geometry.attributes.position.needsUpdate = true;
        this.line.geometry.attributes.color.needsUpdate = true;
        this.line.material.opacity = alpha;

        // Update glowing head
        const hPos = this.head.geometry.attributes.position;
        hPos.setXYZ(0, this.currentPos.x, this.currentPos.y, this.currentPos.z);
        hPos.needsUpdate = true;
        this.head.material.opacity = alpha;

        // Shed trailing spark particles
        if (Math.random() > 0.30) {
          for (let i = 0; i < this.SPARK_COUNT; i++) {
            if (this.sparkData[i].alpha <= 0) {
              this.sparkData[i].x = this.currentPos.x + (Math.random() - 0.5) * 1.6;
              this.sparkData[i].y = this.currentPos.y + (Math.random() - 0.5) * 1.6;
              this.sparkData[i].z = this.currentPos.z + (Math.random() - 0.5) * 1.6;
              this.sparkData[i].vx = -this.velocity.x * 0.09 + (Math.random() - 0.5) * 0.45;
              this.sparkData[i].vy = -this.velocity.y * 0.09 + (Math.random() - 0.5) * 0.45;
              this.sparkData[i].vz = -this.velocity.z * 0.09 + (Math.random() - 0.5) * 0.45;
              this.sparkData[i].alpha = 0.95;
              break;
            }
          }
        }

        // Update volumetric body trail points (plasma glow beam)
        for (let i = 0; i < this.SEGMENTS; i++) {
          const pt = this.history[i] || this.currentPos;
          this.bodyPos[i * 3]     = pt.x;
          this.bodyPos[i * 3 + 1] = pt.y;
          this.bodyPos[i * 3 + 2] = pt.z;

          const bFade = Math.pow(1 - (i / this.SEGMENTS), 1.3) * alpha * 0.9;
          this.bodyCol[i * 3]     = this.glowColor.r * bFade;
          this.bodyCol[i * 3 + 1] = this.glowColor.g * bFade;
          this.bodyCol[i * 3 + 2] = this.glowColor.b * bFade;
        }
        this.bodyPoints.geometry.attributes.position.needsUpdate = true;
        this.bodyPoints.geometry.attributes.color.needsUpdate = true;
        this.bodyPoints.material.opacity = alpha;

        // Update sparks
        for (let i = 0; i < this.SPARK_COUNT; i++) {
          const sp = this.sparkData[i];
          if (sp.alpha > 0) {
            sp.x += sp.vx;
            sp.y += sp.vy;
            sp.z += sp.vz;
            sp.alpha -= 0.035;
          }
          this.sparkPos[i * 3]     = sp.x;
          this.sparkPos[i * 3 + 1] = sp.y;
          this.sparkPos[i * 3 + 2] = sp.z;

          const sAlpha = Math.max(0, sp.alpha);
          this.sparkCol[i * 3]     = this.glowColor.r * sAlpha;
          this.sparkCol[i * 3 + 1] = this.glowColor.g * sAlpha;
          this.sparkCol[i * 3 + 2] = this.glowColor.b * sAlpha;
        }
        this.sparks.geometry.attributes.position.needsUpdate = true;
        this.sparks.geometry.attributes.color.needsUpdate = true;

        if (this.life >= this.maxLife) {
          this.active = false;
          this.line.material.opacity = 0;
          this.bodyPoints.material.opacity = 0;
          this.head.material.opacity = 0;
          this.delay = 0.5 + Math.random() * 1.8; // Quick next shooting star
        }
      }
    }

    for (let i = 0; i < METEOR_COUNT; i++) {
      meteors3D.push(new ShootingStar3D(i));
    }

    // -- 5. SCROLL-DRIVEN 3D CAMERA TRAVEL --

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

      // Soft, Majestic Galactic Glow (Rich & Balanced)
      // - Hero (p < 0.06): 0.58 (Rich, luminous cosmic spiral)
      // - Middle sections (0.06 -> 0.68): 0.28 (Gentle background nebula)
      // - Contact & Footer (p > 0.68): 0.08 (Subtle & clean)
      let targetOpacity = 0.58;
      if (scrollProgress < 0.06) {
        targetOpacity = 0.58;
      } else if (scrollProgress < 0.68) {
        const u = (scrollProgress - 0.06) / 0.15;
        targetOpacity = THREE.MathUtils.lerp(0.58, 0.28, Math.min(u, 1.0));
      } else {
        const fadeU = Math.min((scrollProgress - 0.68) / 0.20, 1.0);
        targetOpacity = THREE.MathUtils.lerp(0.28, 0.08, fadeU);
      }
      galaxyPoints.material.opacity = targetOpacity;
      coreGlowPoints.material.opacity = targetOpacity * 0.9;

      // ═══════════════════════════════════════════════════
      // 3D SHOOTING STARS: Continuous hypersonic streaks across Milky Way Galaxy
      // ═══════════════════════════════════════════════════
      meteors3D.forEach(m => m.update());

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
      meteorTex.dispose();
      meteorGroup.traverse(child => {
        if (child.geometry) child.geometry.dispose();
        if (child.material) child.material.dispose();
      });
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
