// ---------------------------------------------------------------
// ThreeBackground.jsx — CINEMATIC v4
// Canvas itself gently floats + full galaxy scene
// ---------------------------------------------------------------
import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function ThreeBackground() {
  const ref = useRef(null);

  useEffect(() => {
    const canvas = ref.current;
    const renderer = new THREE.WebGLRenderer({ canvas, antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x02000a, 1);

    const scene  = new THREE.Scene();
    scene.fog    = new THREE.FogExp2(0x02000a, 0.0045);
    const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 2000);
    camera.position.set(0, 14, 95);

    // -- 1. STAR LAYERS --
    const mkStars = (n, sz, col, r) => {
      const g = new THREE.BufferGeometry();
      const p = new Float32Array(n * 3);
      for (let i = 0; i < n; i++) {
        p[i*3]   = (Math.random()-0.5)*r;
        p[i*3+1] = (Math.random()-0.5)*r;
        p[i*3+2] = (Math.random()-0.5)*r;
      }
      g.setAttribute("position", new THREE.BufferAttribute(p, 3));
      return new THREE.Points(g, new THREE.PointsMaterial({ color:col, size:sz, transparent:true, opacity:0.8, sizeAttenuation:true }));
    };
    scene.add(mkStars(6000, 0.28, 0xffffff, 1000));
    scene.add(mkStars(2500, 0.42, 0xcc88ff,  750));
    scene.add(mkStars(1500, 0.38, 0x88ccff,  650));
    scene.add(mkStars(1000, 0.44, 0xff99dd,  850));

    // -- 2. GALAXY NEBULA --
    const NC = 12000;
    const nGeo = new THREE.BufferGeometry();
    const nPos = new Float32Array(NC*3), nCol = new Float32Array(NC*3);
    const COLS = [
      new THREE.Color(0xa855f7), new THREE.Color(0xec4899),
      new THREE.Color(0x4f46e5), new THREE.Color(0x22d3ee),
      new THREE.Color(0xc026d3), new THREE.Color(0x7c3aed),
    ];
    for (let i = 0; i < NC; i++) {
      const arm = Math.floor(Math.random()*4), aA = (arm/4)*Math.PI*2;
      const r = Math.random()*140+10, spin = r*0.014, ang = aA+spin;
      const sc = (Math.random()-0.5)*22;
      nPos[i*3]   = Math.cos(ang)*r+sc;
      nPos[i*3+1] = (Math.random()-0.5)*18;
      nPos[i*3+2] = Math.sin(ang)*r+sc-95;
      const c = COLS[Math.floor(Math.random()*COLS.length)], m = Math.random()*0.55+0.45;
      nCol[i*3]=c.r*m; nCol[i*3+1]=c.g*m; nCol[i*3+2]=c.b*m;
    }
    nGeo.setAttribute("position", new THREE.BufferAttribute(nPos,3));
    nGeo.setAttribute("color",    new THREE.BufferAttribute(nCol,3));
    const nebula = new THREE.Points(nGeo, new THREE.PointsMaterial({
      size:0.95, vertexColors:true, transparent:true, opacity:0.75, sizeAttenuation:true
    }));
    scene.add(nebula);

    // -- 3. TORUS KNOTS --
    const knot = new THREE.Mesh(
      new THREE.TorusKnotGeometry(20, 5.5, 240, 24, 2, 3),
      new THREE.MeshBasicMaterial({ color:0x9d00ff, wireframe:true, transparent:true, opacity:0.12 })
    );
    knot.position.set(0,0,-75); scene.add(knot);
    const knot2 = new THREE.Mesh(
      new THREE.TorusKnotGeometry(10, 2, 120, 16, 3, 5),
      new THREE.MeshBasicMaterial({ color:0x22d3ee, wireframe:true, transparent:true, opacity:0.1 })
    );
    knot2.position.set(0,0,-75); scene.add(knot2);

    // -- 4. TORUS RINGS --
    const mkTorus = (r,t,col,op,rx,rz,pz) => {
      const m = new THREE.Mesh(
        new THREE.TorusGeometry(r,t,16,180),
        new THREE.MeshBasicMaterial({ color:col, transparent:true, opacity:op })
      );
      m.rotation.x=rx; m.rotation.z=rz; m.position.z=pz;
      scene.add(m); return m;
    };
    const tr1 = mkTorus(30,0.3,0xec4899,0.28, Math.PI/3, 0.2,-70);
    const tr2 = mkTorus(40,0.2,0x22d3ee,0.20,-Math.PI/4,-0.15,-70);
    const tr3 = mkTorus(20,0.25,0xa855f7,0.32, Math.PI/2, 0,-70);
    const tr4 = mkTorus(50,0.15,0x7c3aed,0.15, 0.6, 0.4,-80);

    // -- 5. FLOATING GEO --
    const mkFloat = (geo,col,x,y,z,rx,ry) => {
      const m = new THREE.Mesh(geo, new THREE.MeshBasicMaterial({
        color:col, wireframe:true, transparent:true, opacity:0.36
      }));
      m.position.set(x,y,z); m.userData={rx,ry,bY:y};
      scene.add(m); return m;
    };
    const floaters = [
      mkFloat(new THREE.IcosahedronGeometry(6,1),  0xa855f7,-52, 24,-35,0.005,0.008),
      mkFloat(new THREE.OctahedronGeometry(5,0),   0x22d3ee, 50,-16,-30,0.009,0.007),
      mkFloat(new THREE.TetrahedronGeometry(4.5,0),0xec4899,-36,-30,-45,0.007,0.011),
      mkFloat(new THREE.IcosahedronGeometry(4,0),  0xcc44ff, 58, 30,-40,0.004,0.009),
      mkFloat(new THREE.OctahedronGeometry(3.5,0), 0xa855f7, 20, 38,-25,0.010,0.006),
      mkFloat(new THREE.IcosahedronGeometry(3,1),  0x22d3ee,-22,-36,-20,0.008,0.012),
    ];

    // -- 6. NEURAL MESH --
    const NN = 200;
    const nnG = new THREE.BufferGeometry();
    const nnP = new Float32Array(NN*3), nnV = [];
    for (let i=0;i<NN;i++){
      nnP[i*3]=(Math.random()-0.5)*120; nnP[i*3+1]=(Math.random()-0.5)*80; nnP[i*3+2]=(Math.random()-0.5)*60;
      nnV.push({x:(Math.random()-0.5)*0.04,y:(Math.random()-0.5)*0.04,z:(Math.random()-0.5)*0.02});
    }
    nnG.setAttribute("position", new THREE.BufferAttribute(nnP,3));
    scene.add(new THREE.Points(nnG, new THREE.PointsMaterial({color:0xc026d3,size:1.4,transparent:true,opacity:0.6})));
    const maxV = NN*NN*6, lArr = new Float32Array(maxV);
    const lGeo = new THREE.BufferGeometry();
    lGeo.setAttribute("position", new THREE.BufferAttribute(lArr,3));
    scene.add(new THREE.LineSegments(lGeo, new THREE.LineBasicMaterial({color:0xa855f7,transparent:true,opacity:0.055})));

    // -- 7. METEORS --
    const meteors = [];
    const spawnMeteor = () => {
      const g = new THREE.BufferGeometry(), p = new Float32Array(6);
      p[0]=p[3]=(Math.random()-0.5)*400; p[1]=p[4]=(Math.random()-0.5)*200; p[2]=p[5]=(Math.random()-0.5)*80;
      g.setAttribute("position", new THREE.BufferAttribute(p,3));
      const s = new THREE.Line(g, new THREE.LineBasicMaterial({
        color: Math.random()>0.4?0xffffff:0xcc88ff, transparent:true, opacity:1
      }));
      s.userData = { vx:(Math.random()-0.5)*4, vy:-Math.random()*3-0.5, life:1 };
      scene.add(s); meteors.push(s);
    };
    for (let i=0;i<7;i++) spawnMeteor();

    // -- Mouse parallax --
    let tRX=0, tRY=0;
    const onMouse = e => {
      tRY = ((e.clientX/window.innerWidth)-0.5)*0.3;
      tRX = -((e.clientY/window.innerHeight)-0.5)*0.2;
    };
    window.addEventListener("mousemove", onMouse);

    // -- ANIMATE --
    let t=0, raf, frame=0;
    const animate = () => {
      raf = requestAnimationFrame(animate); t+=0.004; frame++;

      nebula.rotation.y = t*0.022;
      knot.rotation.x  = t*0.18; knot.rotation.y  = t*0.28;
      knot2.rotation.x = -t*0.22; knot2.rotation.y = -t*0.18;
      tr1.rotation.z = t*0.10; tr2.rotation.z = -t*0.07;
      tr3.rotation.y = t*0.05; tr4.rotation.z  = t*0.04;

      floaters.forEach((f,i) => {
        f.rotation.x += f.userData.rx;
        f.rotation.y += f.userData.ry;
        f.position.y  = f.userData.bY + Math.sin(t+i*1.4)*2.2;
      });

      // neural
      for (let i=0;i<NN;i++){
        nnP[i*3]+=nnV[i].x; nnP[i*3+1]+=nnV[i].y; nnP[i*3+2]+=nnV[i].z;
        if(Math.abs(nnP[i*3])>60)   nnV[i].x*=-1;
        if(Math.abs(nnP[i*3+1])>40) nnV[i].y*=-1;
        if(Math.abs(nnP[i*3+2])>30) nnV[i].z*=-1;
      }
      nnG.attributes.position.needsUpdate = true;
      let li=0;
      for(let i=0;i<NN;i++) for(let j=i+1;j<NN;j++){
        const dx=nnP[i*3]-nnP[j*3],dy=nnP[i*3+1]-nnP[j*3+1],dz=nnP[i*3+2]-nnP[j*3+2];
        if(dx*dx+dy*dy+dz*dz<20*20&&li<maxV-6){
          lArr[li++]=nnP[i*3]; lArr[li++]=nnP[i*3+1]; lArr[li++]=nnP[i*3+2];
          lArr[li++]=nnP[j*3]; lArr[li++]=nnP[j*3+1]; lArr[li++]=nnP[j*3+2];
        }
      }
      lGeo.setDrawRange(0,li/3); lGeo.attributes.position.needsUpdate=true;

      // meteors
      if(frame%90===0) spawnMeteor();
      for(let i=meteors.length-1;i>=0;i--){
        const s=meteors[i], p=s.geometry.attributes.position.array;
        p[0]+=s.userData.vx*4; p[1]+=s.userData.vy*3.5;
        p[3]+=s.userData.vx*5.5; p[4]+=s.userData.vy*5;
        s.userData.life-=0.016; s.material.opacity=s.userData.life;
        s.geometry.attributes.position.needsUpdate=true;
        if(s.userData.life<=0){ scene.remove(s); meteors.splice(i,1); }
      }

      // gentle floating camera bob
      camera.position.y = 14 + Math.sin(t*0.5)*1.8;

      // mouse parallax
      camera.rotation.x += (tRX - camera.rotation.x)*0.022;
      camera.rotation.y += (tRY - camera.rotation.y)*0.022;

      renderer.render(scene, camera);
    };
    animate();

    const onResize = () => {
      camera.aspect = window.innerWidth/window.innerHeight;
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
    <canvas
      ref={ref}
      id="bg-canvas"
      style={{ position:"fixed", inset:0, zIndex:0, pointerEvents:"none" }}
    />
  );
}
