// ═══════════════════════════════════════════════════
// HOOK: useGSAPAnimations.js — HIGH-FASHION CINEMATIC GSAP ENGINE
// Inspired by: Hassan Dev, Skybloom, Black Tide (Videos 1, 2, 3)
// Full GSAP ScrollTrigger Suite across all sections:
// - Global Section Headers: Expanding laser lines + 3D unfold
// - Hero: 3D outcome headline, supporting pills, spring CTAs, magnetic cursor pull
// - AI Lab: Interactive terminal 3D entrance & prompt cascade
// - Projects: 3D parallax flagship cards, screenshot scrub, feature cascades
// - Services: Staggered 3D card flips with illuminated borders
// - Architecture: Pipeline nodes sequential wave activation
// - ROI Calculator: Value cards 3D entrance + numerical count-ups
// - About: 3D profile photo perspective tilt & metrics pop
// - Skills: 3D category cards flip & tech pills cascade
// - Contact: 3D channel buttons & neon glowing form
// - Footer: Cosmic CTA card slide-up & 4-column starlight stagger
// ═══════════════════════════════════════════════════
import { useEffect, useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const useIsomorphicLayoutEffect =
  typeof window !== "undefined" ? useLayoutEffect : useEffect;

export default function useGSAPAnimations(loaded) {
  useIsomorphicLayoutEffect(() => {
    if (!loaded) return;

    // Enable initial CSS states
    document.body.classList.add("gsap-ready");

    const initTimer = setTimeout(() => {
      const ctx = gsap.context(() => {
        const isMobile = window.innerWidth < 768;
        const ease3D = "power3.out";
        const easeElastic = "elastic.out(1, 0.4)";
        const easeBounce = "back.out(1.6)";

        // ═══════════════════════════════════════════════════
        // 1. GLOBAL: SECTION HEADERS — EXPANDING LASER + 3D TITLE
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

          if (num) {
            tl.to(num, {
              opacity: 1,
              rotateY: 0,
              duration: 0.5,
              ease: easeBounce,
            });
          }

          if (title) {
            tl.to(
              title,
              {
                opacity: 1,
                y: 0,
                rotateX: 0,
                duration: 0.65,
                ease: ease3D,
              },
              "-=0.25"
            );
          }

          if (line) {
            tl.to(
              line,
              {
                scaleX: 1,
                duration: 0.75,
                ease: "power2.inOut",
              },
              "-=0.35"
            );
          }
        });

        // ═══════════════════════════════════════════════════
        // 2. HERO SECTION (#home) — CINEMATIC 3D ENTRANCE (REDESIGNED)
        // ═══════════════════════════════════════════════════
        const heroSection = document.querySelector("#home");
        if (heroSection) {
          const heroTL = gsap.timeline({ delay: 0.15 });

          // Greeting badge
          heroTL.to(".hero-greeting-badge", {
            opacity: 1,
            y: 0,
            duration: 0.6,
            ease: easeBounce,
          });

          // Name - First & Last
          heroTL.to(
            ".hero-name-first",
            {
              opacity: 1,
              x: 0,
              duration: 0.6,
              ease: ease3D,
            },
            "-=0.3"
          );

          // Subtitle line
          heroTL.to(
            ".hero-subtitle-line",
            {
              opacity: 1,
              y: 0,
              duration: 0.6,
              ease: ease3D,
            },
            "-=0.3"
          );

          // Bachelor in Robotics badge
          heroTL.to(
            ".hero-badges",
            {
              opacity: 1,
              scale: 1,
              duration: 0.6,
              ease: easeElastic,
            },
            "-=0.3"
          );

          // Description
          heroTL.to(
            ".hero-desc",
            {
              opacity: 1,
              y: 0,
              duration: 0.65,
              ease: ease3D,
            },
            "-=0.35"
          );

          // CTA Action Buttons
          heroTL.to(
            ".hero-buttons .btn",
            {
              opacity: 1,
              y: 0,
              duration: 0.55,
              stagger: 0.1,
              ease: easeBounce,
            },
            "-=0.35"
          );

          // Social icons row
          heroTL.to(
            ".hero-social-row a",
            {
              opacity: 1,
              scale: 1,
              duration: 0.45,
              stagger: 0.06,
              ease: easeBounce,
            },
            "-=0.3"
          );

          // Stats items row
          heroTL.to(
            ".hero-stats-row .hero-stat-item",
            {
              opacity: 1,
              y: 0,
              duration: 0.5,
              stagger: 0.1,
              ease: ease3D,
            },
            "-=0.3"
          );

          // Right Photo Container
          heroTL.to(
            ".hero-photo-container",
            {
              opacity: 1,
              scale: 1,
              x: 0,
              duration: 0.9,
              ease: ease3D,
            },
            "-=0.8"
          );

          // Floating tags around photo
          heroTL.to(
            ".hero-float-tag",
            {
              opacity: 1,
              scale: 1,
              duration: 0.5,
              stagger: 0.1,
              ease: easeBounce,
            },
            "-=0.5"
          );

          // Scroll indicator
          heroTL.to(
            ".scroll-indicator",
            {
              opacity: 0.5,
              y: 0,
              duration: 0.5,
              ease: ease3D,
            },
            "-=0.2"
          );
        }

        // ═══════════════════════════════════════════════════
        // 3. AI LAB SECTION (#ai-lab) — TERMINAL & AGENT WORKFLOW
        // ═══════════════════════════════════════════════════
        const aiLabSection = document.querySelector("#ai-lab");
        if (aiLabSection) {
          const aiTL = gsap.timeline({
            scrollTrigger: {
              trigger: aiLabSection,
              start: "top 78%",
              toggleActions: "play none none reverse",
            },
          });

          aiTL.to(".ai-lab-subtitle", {
            opacity: 1,
            y: 0,
            duration: 0.6,
            ease: ease3D,
          });

          // Terminal container 3D perspective flip-in
          const terminal = aiLabSection.querySelector(".ai-lab-terminal");
          if (terminal) {
            aiTL.to(
              terminal,
              {
                opacity: 1,
                y: 0,
                rotateX: 0,
                duration: 0.8,
                ease: ease3D,
              },
              "-=0.3"
            );
          }

          // Suggested prompt chips cascade
          const promptChips = aiLabSection.querySelectorAll(".ai-prompt-btn");
          if (promptChips.length) {
            aiTL.to(
              promptChips,
              {
                opacity: 1,
                scale: 1,
                duration: 0.35,
                stagger: 0.04,
                ease: easeBounce,
              },
              "-=0.4"
            );
          }
        }

        // ═══════════════════════════════════════════════════
        // 4. PROJECTS SECTION (#projects) — 3D PARALLAX CARDS
        // ═══════════════════════════════════════════════════
        const projectsSection = document.querySelector("#projects");
        if (projectsSection) {
          const flagshipCards = projectsSection.querySelectorAll(".nova-flagship-card");

          flagshipCards.forEach((card, index) => {
            const fromLeft = index % 2 === 0;
            gsap.to(card, {
              scrollTrigger: {
                trigger: card,
                start: "top 80%",
                toggleActions: "play none none reverse",
              },
              opacity: 1,
              x: 0,
              y: 0,
              scale: 1,
              rotateY: 0,
              duration: 0.85,
              ease: ease3D,
            });

            // Feature pills inside this card
            const pills = card.querySelectorAll(".nova-feat-pill");
            if (pills.length) {
              gsap.to(pills, {
                scrollTrigger: {
                  trigger: card,
                  start: "top 72%",
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
                  start: "top 68%",
                  toggleActions: "play none none reverse",
                },
                opacity: 1,
                x: 0,
                duration: 0.3,
                stagger: 0.04,
                ease: ease3D,
              });
            }

            // Parallax scroll on flagship screenshot
            const screenshot = card.querySelector(".nova-screenshot-wrap");
            if (screenshot && !isMobile) {
              gsap.to(screenshot, {
                scrollTrigger: {
                  trigger: card,
                  start: "top bottom",
                  end: "bottom top",
                  scrub: 1.5,
                },
                y: -25,
                ease: "none",
              });
            }
          });

          // Other project cards grid
          const otherCards = projectsSection.querySelectorAll(".project-card");
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
              stagger: 0.1,
              ease: ease3D,
            });
          }
        }

        // ═══════════════════════════════════════════════════
        // 5. SERVICES SECTION (#services) — 3D STAGGERED FLIP-IN
        // ═══════════════════════════════════════════════════
        const servicesSection = document.querySelector("#services");
        if (servicesSection) {
          const serviceCards = servicesSection.querySelectorAll(".service-card");
          if (serviceCards.length) {
            gsap.to(serviceCards, {
              scrollTrigger: {
                trigger: serviceCards[0],
                start: "top 82%",
                toggleActions: "play none none reverse",
              },
              opacity: 1,
              y: 0,
              rotateX: 0,
              scale: 1,
              duration: 0.75,
              stagger: 0.1,
              ease: ease3D,
            });
          }

          const filterBtns = servicesSection.querySelectorAll(".services-category-btn");
          if (filterBtns.length) {
            gsap.to(filterBtns, {
              scrollTrigger: {
                trigger: servicesSection,
                start: "top 78%",
                toggleActions: "play none none reverse",
              },
              opacity: 1,
              scale: 1,
              duration: 0.4,
              stagger: 0.06,
              ease: easeBounce,
            });
          }
        }

        // ═══════════════════════════════════════════════════
        // 6. SYSTEM ARCHITECTURE (#architecture) — PIPELINE WAVE
        // ═══════════════════════════════════════════════════
        const archSection = document.querySelector("#architecture");
        if (archSection) {
          const nodes = archSection.querySelectorAll(".arch-node-wrapper");
          if (nodes.length) {
            gsap.to(nodes, {
              scrollTrigger: {
                trigger: archSection,
                start: "top 75%",
                toggleActions: "play none none reverse",
              },
              opacity: 1,
              y: 0,
              scale: 1,
              duration: 0.6,
              stagger: 0.08,
              ease: easeBounce,
            });
          }

          const detailCard = archSection.querySelector(".arch-node-detail-card");
          if (detailCard) {
            gsap.to(detailCard, {
              scrollTrigger: {
                trigger: detailCard,
                start: "top 85%",
                toggleActions: "play none none reverse",
              },
              opacity: 1,
              y: 0,
              rotateX: 0,
              duration: 0.7,
              ease: ease3D,
            });
          }
        }

        // ═══════════════════════════════════════════════════
        // 7. ROI CALCULATOR (#calculator) — METRICS & VALUE CARDS
        // ═══════════════════════════════════════════════════
        const roiSection = document.querySelector("#calculator");
        if (roiSection) {
          const controls = roiSection.querySelector(".roi-controls-card");
          const results = roiSection.querySelector(".roi-results-card");

          if (controls) {
            gsap.to(controls, {
              scrollTrigger: {
                trigger: roiSection,
                start: "top 78%",
                toggleActions: "play none none reverse",
              },
              opacity: 1,
              x: 0,
              duration: 0.8,
              ease: ease3D,
            });
          }

          if (results) {
            gsap.to(results, {
              scrollTrigger: {
                trigger: roiSection,
                start: "top 78%",
                toggleActions: "play none none reverse",
              },
              opacity: 1,
              x: 0,
              duration: 0.8,
              ease: ease3D,
            });
          }

          const valueCards = roiSection.querySelectorAll(".roi-value-card");
          if (valueCards.length) {
            gsap.to(valueCards, {
              scrollTrigger: {
                trigger: results || roiSection,
                start: "top 72%",
                toggleActions: "play none none reverse",
              },
              opacity: 1,
              scale: 1,
              duration: 0.5,
              stagger: 0.1,
              ease: easeBounce,
            });
          }
        }

        // ═══════════════════════════════════════════════════
        // 8. ABOUT SECTION (#about) — 3D PROFILE PHOTO & METRICS (REDESIGNED)
        // ═══════════════════════════════════════════════════
        const aboutSection = document.querySelector("#about");
        if (aboutSection) {
          const aboutTL = gsap.timeline({
            scrollTrigger: {
              trigger: aboutSection,
              start: "top 78%",
              toggleActions: "play none none reverse",
            },
          });

          // Section tag
          const tag = aboutSection.querySelector(".section-num-tag");
          if (tag) {
            aboutTL.to(tag, {
              opacity: 1,
              y: 0,
              duration: 0.5,
              ease: easeBounce,
            });
          }

          // Main headline
          aboutTL.to(
            ".about-main-headline",
            {
              opacity: 1,
              y: 0,
              duration: 0.7,
              ease: ease3D,
            },
            "-=0.25"
          );

          // Intro & Body
          aboutTL.to(
            [".about-intro", ".about-body"],
            {
              opacity: 1,
              x: 0,
              duration: 0.6,
              stagger: 0.15,
              ease: ease3D,
            },
            "-=0.3"
          );

          // Stats items
          const aboutStats = aboutSection.querySelectorAll(".about-stat-item");
          if (aboutStats.length) {
            aboutTL.to(
              aboutStats,
              {
                opacity: 1,
                y: 0,
                duration: 0.45,
                stagger: 0.08,
                ease: easeBounce,
              },
              "-=0.25"
            );
          }

          // Photo Frame 3D entrance
          const photoWrap = aboutSection.querySelector(".about-photo-wrapper");
          if (photoWrap) {
            aboutTL.to(
              photoWrap,
              {
                opacity: 1,
                y: 0,
                scale: 1,
                duration: 0.85,
                ease: ease3D,
              },
              "-=0.4"
            );
          }

          // Floating Action Tags (Code, Create, Automate, Innovate)
          const actionTags = aboutSection.querySelectorAll(".about-action-tag");
          if (actionTags.length) {
            aboutTL.to(
              actionTags,
              {
                opacity: 1,
                scale: 1,
                x: 0,
                duration: 0.4,
                stagger: 0.08,
                ease: easeBounce,
              },
              "-=0.5"
            );
          }

          // Action buttons
          const actionBtns = aboutSection.querySelectorAll(".about-actions-row .btn");
          if (actionBtns.length) {
            aboutTL.to(
              actionBtns,
              {
                opacity: 1,
                y: 0,
                duration: 0.45,
                stagger: 0.1,
                ease: easeBounce,
              },
              "-=0.3"
            );
          }

          // Experience box
          aboutTL.to(
            ".about-exp-box",
            {
              opacity: 1,
              y: 0,
              duration: 0.6,
              ease: ease3D,
            },
            "-=0.2"
          );

          // Why work card
          const whyCard = aboutSection.querySelector(".why-work-card");
          if (whyCard) {
            aboutTL.to(
              whyCard,
              {
                opacity: 1,
                y: 0,
                duration: 0.6,
                ease: ease3D,
              },
              "-=0.3"
            );
          }

          // Availability card
          const availCard = aboutSection.querySelector(".availability-card");
          if (availCard) {
            aboutTL.to(
              availCard,
              {
                opacity: 1,
                y: 0,
                duration: 0.6,
                ease: ease3D,
              },
              "-=0.3"
            );
          }

          // Pillar tags
          const pillars = aboutSection.querySelectorAll(".about-pillar-tag");
          if (pillars.length) {
            aboutTL.to(
              pillars,
              {
                opacity: 1,
                scale: 1,
                rotateZ: 0,
                duration: 0.4,
                stagger: 0.04,
                ease: easeBounce,
              },
              "-=0.3"
            );
          }
        }

        // ═══════════════════════════════════════════════════
        // 9. SKILLS SECTION (#skills) — 3D PEDESTALS & LEARNING CARD (REDESIGNED)
        // ═══════════════════════════════════════════════════
        const skillsSection = document.querySelector("#skills");
        if (skillsSection) {
          // 3D Pedestal Tech Cards Stagger Entrance
          const pedestalCards = skillsSection.querySelectorAll(".tech-pedestal-card");
          if (pedestalCards.length) {
            gsap.to(pedestalCards, {
              scrollTrigger: {
                trigger: skillsSection,
                start: "top 76%",
                toggleActions: "play none none reverse",
              },
              opacity: 1,
              y: 0,
              scale: 1,
              duration: 0.6,
              stagger: 0.06,
              ease: easeBounce,
            });
          }

          // Currently Learning Sidebar Card Entrance
          const learningCard = skillsSection.querySelector(".skills-learning-card");
          if (learningCard) {
            gsap.to(learningCard, {
              scrollTrigger: {
                trigger: skillsSection,
                start: "top 74%",
                toggleActions: "play none none reverse",
              },
              opacity: 1,
              x: 0,
              duration: 0.75,
              ease: ease3D,
            });
          }
        }

        // ═══════════════════════════════════════════════════
        // 10. CONTACT SECTION (#contact) — CHANNELS & FORM
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

          contactTL.to(".contact-main-heading", {
            opacity: 1,
            y: 0,
            duration: 0.7,
            ease: ease3D,
          });

          contactTL.to(
            ".contact-lead-text",
            {
              opacity: 1,
              y: 0,
              duration: 0.6,
              ease: ease3D,
            },
            "-=0.3"
          );

          // Direct channel buttons
          const channelBtns = contactSection.querySelectorAll(".channel-btn");
          if (channelBtns.length) {
            contactTL.to(
              channelBtns,
              {
                opacity: 1,
                x: 0,
                y: 0,
                duration: 0.5,
                stagger: 0.08,
                ease: easeBounce,
              },
              "-=0.3"
            );
          }

          // Contact Form container
          contactTL.to(
            ".contact-form-wrap",
            {
              opacity: 1,
              y: 0,
              rotateX: 0,
              duration: 0.7,
              ease: ease3D,
            },
            "-=0.3"
          );
        }

        // ═══════════════════════════════════════════════════
        // 11. FOOTER SECTION (#footer) — COSMIC GLASS STAGGER
        // ═══════════════════════════════════════════════════
        const footer = document.querySelector(".footer");
        if (footer) {
          const footerTL = gsap.timeline({
            scrollTrigger: {
              trigger: footer,
              start: "top 85%",
              toggleActions: "play none none reverse",
            },
          });

          // CTA Card slide-up
          const ctaCard = footer.querySelector(".footer-cta-card");
          if (ctaCard) {
            footerTL.to(ctaCard, {
              opacity: 1,
              y: 0,
              scale: 1,
              duration: 0.8,
              ease: ease3D,
            });
          }

          // 4 Main Columns stagger
          const cols = footer.querySelectorAll(".footer-inner > .footer-col");
          if (cols.length) {
            footerTL.to(
              cols,
              {
                opacity: 1,
                y: 0,
                duration: 0.65,
                stagger: 0.1,
                ease: ease3D,
              },
              "-=0.4"
            );
          }

          // Bottom Bar
          const btm = footer.querySelector(".footer-bottom");
          if (btm) {
            footerTL.to(
              btm,
              {
                opacity: 1,
                y: 0,
                duration: 0.5,
                ease: ease3D,
              },
              "-=0.2"
            );
          }
        }

        // ═══════════════════════════════════════════════════
        // 12. MAGNETIC CURSOR PULL ON BUTTONS (DESKTOP)
        // ═══════════════════════════════════════════════════
        if (!isMobile) {
          const magneticTargets = document.querySelectorAll(
            ".btn, .footer-btn-primary, .footer-btn-secondary, .channel-btn, .footer-back-top-btn"
          );

          magneticTargets.forEach((el) => {
            const onMove = (e) => {
              const rect = el.getBoundingClientRect();
              const x = e.clientX - rect.left - rect.width / 2;
              const y = e.clientY - rect.top - rect.height / 2;
              gsap.to(el, {
                x: x * 0.25,
                y: y * 0.25,
                duration: 0.3,
                ease: "power2.out",
              });
            };

            const onLeave = () => {
              gsap.to(el, {
                x: 0,
                y: 0,
                duration: 0.6,
                ease: "elastic.out(1, 0.35)",
              });
            };

            el.addEventListener("mousemove", onMove);
            el.addEventListener("mouseleave", onLeave);
          });
        }
      }); // end gsap.context

      return () => ctx.revert();
    }, 120);

    return () => {
      clearTimeout(initTimer);
      document.body.classList.remove("gsap-ready");
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, [loaded]);
}
