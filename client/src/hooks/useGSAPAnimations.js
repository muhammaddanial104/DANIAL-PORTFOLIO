// ═══════════════════════════════════════════════════
// HOOK: useGSAPAnimations.js — CINEMATIC SCROLLTRIGGER ENGINE
// Inspired by: Hassan Dev, Skybloom, Black Tide (Videos 1, 2, 3)
// GSAP ScrollTrigger-powered 3D scroll animations across every section
// ═══════════════════════════════════════════════════
import { useEffect, useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// Use useLayoutEffect on client, useEffect on server
const useIsomorphicLayoutEffect =
  typeof window !== "undefined" ? useLayoutEffect : useEffect;

export default function useGSAPAnimations(loaded) {
  useIsomorphicLayoutEffect(() => {
    if (!loaded) return;

    // Add gsap-ready class to body for CSS initial states
    document.body.classList.add("gsap-ready");

    // Small delay to ensure DOM is fully painted after loader
    const initTimer = setTimeout(() => {
      const ctx = gsap.context(() => {
        const isMobile = window.innerWidth < 768;
        const ease3D = "power3.out";
        const easeElastic = "elastic.out(1, 0.5)";
        const easeBounce = "back.out(1.7)";

        // ═══════════════════════════════════════════════════
        // GLOBAL: Section headers — line expand + 3D title reveal
        // ═══════════════════════════════════════════════════
        document.querySelectorAll(".section-header").forEach((header) => {
          const line = header.querySelector(".section-line");
          const num = header.querySelector(".section-num");
          const title = header.querySelector(".section-title");
          const section = header.closest(".section");

          if (!section) return;

          const tl = gsap.timeline({
            scrollTrigger: {
              trigger: section,
              start: "top 82%",
              toggleActions: "play none none reverse",
            },
          });

          if (num)
            tl.to(num, {
              opacity: 1,
              rotateY: 0,
              duration: 0.6,
              ease: easeBounce,
            });

          if (title)
            tl.to(
              title,
              {
                opacity: 1,
                y: 0,
                rotateX: 0,
                duration: 0.7,
                ease: ease3D,
              },
              "-=0.3"
            );

          if (line) {
            tl.to(
              line,
              { scaleX: 1, duration: 0.8, ease: "power2.inOut" },
              "-=0.4"
            );
            // Glow pulse
            tl.call(() => line.classList.add("gsap-glow"), null, "-=0.2");
          }
        });

        // ═══════════════════════════════════════════════════
        // HERO SECTION — Cinematic 3D entrance
        // ═══════════════════════════════════════════════════
        const heroSection = document.querySelector("#home");
        if (heroSection) {
          const heroTL = gsap.timeline({ delay: 0.2 });

          // Hero tag — slide in from left with 3D rotateY
          heroTL.to(".hero-tag", {
            opacity: 1,
            x: 0,
            rotateY: 0,
            duration: 0.8,
            ease: ease3D,
          });

          // Position title — slide from right with blur deblur
          heroTL.to(
            ".hero-position-title",
            {
              opacity: 1,
              x: 0,
              filter: "blur(0px)",
              duration: 0.9,
              ease: ease3D,
            },
            "-=0.4"
          );

          // Education badge — elastic pop
          heroTL.to(
            ".hero-edu-badge",
            {
              opacity: 1,
              scale: 1,
              rotateZ: 0,
              duration: 1,
              ease: easeElastic,
            },
            "-=0.5"
          );

          // Description — clip-path wipe reveal
          heroTL.to(
            ".hero-desc",
            {
              opacity: 1,
              clipPath: "inset(0 0% 0 0)",
              duration: 0.8,
              ease: "power2.inOut",
            },
            "-=0.6"
          );

          // Buttons — stagger 3D flip from bottom
          heroTL.to(
            ".hero-buttons .btn",
            {
              opacity: 1,
              y: 0,
              rotateX: 0,
              duration: 0.6,
              stagger: 0.15,
              ease: easeBounce,
            },
            "-=0.4"
          );

          // Orb — scale up with rotation
          heroTL.to(
            ".orb-float-wrap",
            {
              opacity: 1,
              scale: 1,
              rotate: 0,
              duration: 1.2,
              ease: easeElastic,
            },
            "-=0.8"
          );

          // Orb data tags — stagger
          heroTL.to(
            ".orb-data-tag",
            {
              opacity: 1,
              scale: 1,
              rotate: 0,
              duration: 0.5,
              stagger: 0.12,
              ease: easeBounce,
            },
            "-=0.6"
          );

          // Scroll indicator
          heroTL.to(
            ".scroll-indicator",
            {
              opacity: 1,
              y: 0,
              duration: 0.5,
              ease: ease3D,
            },
            "-=0.3"
          );

          // Continuous orb rotation
          gsap.to(".orb-float-wrap", {
            rotation: 360,
            duration: 40,
            repeat: -1,
            ease: "none",
          });
        }

        // ═══════════════════════════════════════════════════
        // ABOUT SECTION — 3D flip, slide, circle reveal
        // ═══════════════════════════════════════════════════
        const aboutSection = document.querySelector("#about");
        if (aboutSection) {
          // Photo frame — clean cinematic entrance
          gsap.to(".photo-frame", {
            scrollTrigger: {
              trigger: aboutSection,
              start: "top 80%",
              toggleActions: "play none none reverse",
            },
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 1,
            ease: ease3D,
          });

          // Pillar tags — elastic stagger
          gsap.to(".about-pillar-tag", {
            scrollTrigger: {
              trigger: ".about-pillars-list",
              start: "top 85%",
              toggleActions: "play none none reverse",
            },
            opacity: 1,
            scale: 1,
            rotateZ: 0,
            duration: 0.7,
            stagger: 0.1,
            ease: easeElastic,
          });

          // Intro text — slide from left
          gsap.to(".about-intro", {
            scrollTrigger: {
              trigger: ".about-info-col",
              start: "top 80%",
              toggleActions: "play none none reverse",
            },
            opacity: 1,
            x: 0,
            duration: 0.8,
            ease: ease3D,
          });

          // Body text — slide from right
          gsap.to(".about-body", {
            scrollTrigger: {
              trigger: ".about-body",
              start: "top 85%",
              toggleActions: "play none none reverse",
            },
            opacity: 1,
            x: 0,
            duration: 0.8,
            ease: ease3D,
          });

          // Experience box — 3D tilt up
          gsap.to(".about-exp-box", {
            scrollTrigger: {
              trigger: ".about-exp-box",
              start: "top 85%",
              toggleActions: "play none none reverse",
            },
            opacity: 1,
            y: 0,
            rotateX: 0,
            duration: 1,
            ease: ease3D,
            onComplete: () => {
              document.querySelector(".about-exp-box")?.classList.add("gsap-revealed");
            },
          });

          // Focus box — circle reveal
          gsap.to(".about-focus-box", {
            scrollTrigger: {
              trigger: ".about-focus-box",
              start: "top 85%",
              toggleActions: "play none none reverse",
            },
            opacity: 1,
            clipPath: "circle(75% at 50% 50%)",
            duration: 1.2,
            ease: "power2.inOut",
          });

          // Fact cards — pop in
          gsap.to(".fact-card", {
            scrollTrigger: {
              trigger: ".about-facts-grid",
              start: "top 85%",
              toggleActions: "play none none reverse",
            },
            opacity: 1,
            scale: 1,
            rotateZ: 0,
            duration: 0.6,
            stagger: 0.1,
            ease: easeElastic,
          });
        }

        // ═══════════════════════════════════════════════════
        // SKILLS SECTION — 3D card flip entrance
        // ═══════════════════════════════════════════════════
        const skillsSection = document.querySelector("#skills");
        if (skillsSection) {
          // Skill categories — 3D flip
          gsap.to(".skill-category", {
            scrollTrigger: {
              trigger: ".skills-grid",
              start: "top 78%",
              toggleActions: "play none none reverse",
            },
            opacity: 1,
            rotateY: 0,
            translateZ: 0,
            duration: isMobile ? 0.6 : 0.9,
            stagger: isMobile ? 0.08 : 0.15,
            ease: ease3D,
          });

          // Actual tech card — slide up
          gsap.to(".actual-tech-card", {
            scrollTrigger: {
              trigger: ".actual-tech-container",
              start: "top 85%",
              toggleActions: "play none none reverse",
            },
            opacity: 1,
            y: 0,
            rotateX: 0,
            duration: 0.8,
            ease: ease3D,
          });

          // Tech pills — cascade
          gsap.to(".tech-pill", {
            scrollTrigger: {
              trigger: ".actual-tech-chips",
              start: "top 88%",
              toggleActions: "play none none reverse",
            },
            opacity: 1,
            x: 0,
            rotateZ: 0,
            duration: 0.4,
            stagger: 0.04,
            ease: easeBounce,
          });
        }

        // ═══════════════════════════════════════════════════
        // PROJECTS SECTION — Dramatic staggered entrance
        // ═══════════════════════════════════════════════════
        const projectsSection = document.querySelector("#projects");
        if (projectsSection) {
          // Each flagship card gets its own ScrollTrigger
          const flagshipCards =
            projectsSection.querySelectorAll(".nova-flagship-card");

          flagshipCards.forEach((card, i) => {
            const direction = i === 0 ? -1 : i === 1 ? 1 : 0;

            gsap.to(card, {
              scrollTrigger: {
                trigger: card,
                start: "top 82%",
                toggleActions: "play none none reverse",
              },
              opacity: 1,
              x: 0,
              y: 0,
              scale: 1,
              rotateY: 0,
              duration: 1,
              ease: ease3D,
              onComplete: () => card.classList.add("gsap-revealed"),
            });

            // Feature pills inside this card
            const pills = card.querySelectorAll(".nova-feat-pill");
            if (pills.length) {
              gsap.to(pills, {
                scrollTrigger: {
                  trigger: card,
                  start: "top 70%",
                  toggleActions: "play none none reverse",
                },
                opacity: 1,
                scale: 1,
                duration: 0.3,
                stagger: 0.03,
                ease: easeBounce,
              });
            }

            // Tech chips inside this card
            const chips = card.querySelectorAll(".tech-chip");
            if (chips.length) {
              gsap.to(chips, {
                scrollTrigger: {
                  trigger: card,
                  start: "top 65%",
                  toggleActions: "play none none reverse",
                },
                opacity: 1,
                x: 0,
                duration: 0.3,
                stagger: 0.05,
                ease: ease3D,
              });
            }
          });

          // Other project cards
          const otherCards =
            projectsSection.querySelectorAll(".project-card");
          if (otherCards.length) {
            gsap.to(otherCards, {
              scrollTrigger: {
                trigger: otherCards[0],
                start: "top 85%",
                toggleActions: "play none none reverse",
              },
              opacity: 1,
              y: 0,
              rotateX: 0,
              scale: 1,
              duration: 0.7,
              stagger: 0.12,
              ease: ease3D,
              onComplete: () => {
                otherCards.forEach((c) => c.classList.add("gsap-revealed"));
              },
            });
          }

          // Screenshot parallax on flagship cards
          flagshipCards.forEach((card) => {
            const screenshot = card.querySelector(".nova-screenshot-wrap");
            if (screenshot) {
              gsap.to(screenshot, {
                scrollTrigger: {
                  trigger: card,
                  start: "top bottom",
                  end: "bottom top",
                  scrub: 1.5,
                },
                y: -30,
                ease: "none",
              });
            }
          });
        }

        // ═══════════════════════════════════════════════════
        // SERVICES SECTION — Enhanced entrance
        // ═══════════════════════════════════════════════════
        const servicesSection = document.querySelector("#services");
        if (servicesSection) {
          gsap.to(".services-subtitle", {
            scrollTrigger: {
              trigger: servicesSection,
              start: "top 80%",
              toggleActions: "play none none reverse",
            },
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
            duration: 0.8,
            ease: ease3D,
          });
        }

        // ═══════════════════════════════════════════════════
        // CONTACT SECTION — Cinematic reveals
        // ═══════════════════════════════════════════════════
        const contactSection = document.querySelector("#contact");
        if (contactSection) {
          const contactTL = gsap.timeline({
            scrollTrigger: {
              trigger: contactSection,
              start: "top 78%",
              toggleActions: "play none none reverse",
            },
          });

          // Main heading — 3D fly in
          contactTL.to(".contact-main-heading", {
            opacity: 1,
            y: 0,
            rotateX: 0,
            duration: 0.8,
            ease: ease3D,
          });

          // Lead text — blur deblur
          contactTL.to(
            ".contact-lead-text",
            {
              opacity: 1,
              y: 0,
              filter: "blur(0px)",
              duration: 0.7,
              ease: ease3D,
            },
            "-=0.4"
          );

          // Channel buttons — stagger from edges
          contactTL.to(
            ".channel-btn",
            {
              opacity: 1,
              x: 0,
              y: 0,
              duration: 0.6,
              stagger: 0.1,
              ease: easeBounce,
            },
            "-=0.3"
          );

          // Form — 3D flip up
          contactTL.to(
            ".contact-form-wrap",
            {
              opacity: 1,
              y: 0,
              rotateX: 0,
              duration: 0.9,
              ease: ease3D,
            },
            "-=0.3"
          );

          // Form fields — sequential slide
          contactTL.to(
            ".contact-simple-form input, .contact-simple-form textarea",
            {
              opacity: 1,
              x: 0,
              duration: 0.5,
              stagger: 0.1,
              ease: ease3D,
            },
            "-=0.5"
          );

          // Submit button — scale up
          contactTL.to(
            ".contact-submit-btn",
            {
              opacity: 1,
              scale: 1,
              duration: 0.5,
              ease: easeElastic,
            },
            "-=0.3"
          );
        }

        // ═══════════════════════════════════════════════════
        // FOOTER — Stagger up
        // ═══════════════════════════════════════════════════
        const footer = document.querySelector(".footer");
        if (footer) {
          const footerChildren = footer.querySelectorAll(".footer-inner > *");
          if (footerChildren.length) {
            gsap.to(footerChildren, {
              scrollTrigger: {
                trigger: footer,
                start: "top 90%",
                toggleActions: "play none none reverse",
              },
              opacity: 1,
              y: 0,
              duration: 0.6,
              stagger: 0.1,
              ease: ease3D,
            });
          }

          gsap.to(".footer-bottom", {
            scrollTrigger: {
              trigger: ".footer-bottom",
              start: "top 95%",
              toggleActions: "play none none reverse",
            },
            opacity: 1,
            y: 0,
            duration: 0.5,
            ease: ease3D,
          });
        }

        // ═══════════════════════════════════════════════════
        // GLOBAL PARALLAX: Sections have subtle Y parallax
        // ═══════════════════════════════════════════════════
        if (!isMobile) {
          document.querySelectorAll(".section").forEach((section) => {
            const inner =
              section.querySelector(".about-grid") ||
              section.querySelector(".skills-grid") ||
              section.querySelector(".services-grid") ||
              section.querySelector(".contact-container");

            if (inner) {
              gsap.to(inner, {
                scrollTrigger: {
                  trigger: section,
                  start: "top bottom",
                  end: "bottom top",
                  scrub: 2,
                },
                y: -20,
                ease: "none",
              });
            }
          });
        }

        // ═══════════════════════════════════════════════════
        // MAGNETIC HOVER on buttons (desktop only)
        // ═══════════════════════════════════════════════════
        if (!isMobile) {
          document.querySelectorAll(".btn").forEach((btn) => {
            const onMove = (e) => {
              const rect = btn.getBoundingClientRect();
              const x = e.clientX - rect.left - rect.width / 2;
              const y = e.clientY - rect.top - rect.height / 2;
              gsap.to(btn, {
                x: x * 0.2,
                y: y * 0.2,
                duration: 0.3,
                ease: "power2.out",
              });
            };
            const onLeave = () => {
              gsap.to(btn, { x: 0, y: 0, duration: 0.5, ease: "elastic.out(1, 0.3)" });
            };
            btn.addEventListener("mousemove", onMove);
            btn.addEventListener("mouseleave", onLeave);
          });
        }
      }); // end gsap.context

      return () => ctx.revert();
    }, 100); // 100ms delay after loaded

    return () => {
      clearTimeout(initTimer);
      document.body.classList.remove("gsap-ready");
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, [loaded]);
}
