import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';

gsap.registerPlugin(ScrollTrigger);

// Initialize Lenis for buttery smooth scrolling
const lenis = new Lenis({
  duration: 1.2,
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
  smoothWheel: true,
  touchMultiplier: 2,
});

// Sync Lenis with GSAP ScrollTrigger
lenis.on('scroll', ScrollTrigger.update);
gsap.ticker.add((time) => {
  lenis.raf(time * 1000);
});
gsap.ticker.lagSmoothing(0);

// 🚀 Vercel Serverless API - Instant response, no cold starts!
const BACKEND_URL = "https://portfoli-contact.vercel.app";
const sidebar = document.getElementById("sidebar");
const sidebarOverlay = document.getElementById("sidebarOverlay");
const mobileMenuBtn = document.getElementById("mobileMenuBtn");
const navLinks = document.querySelectorAll(".nav-link");
function toggleSidebar() {
  if (sidebar && mobileMenuBtn) {
    sidebar.classList.toggle("active");
    mobileMenuBtn.classList.toggle("active");
    if (sidebarOverlay) sidebarOverlay.classList.toggle("active");
  }
}
function closeSidebar() {
  if (sidebar && mobileMenuBtn) {
    sidebar.classList.remove("active");
    mobileMenuBtn.classList.remove("active");
    if (sidebarOverlay) sidebarOverlay.classList.remove("active");
  }
}
if (mobileMenuBtn) {
  mobileMenuBtn.addEventListener("click", toggleSidebar);
}
if (sidebarOverlay) {
  sidebarOverlay.addEventListener("click", closeSidebar);
}
navLinks.forEach((link) => {
  link.addEventListener("click", closeSidebar);
});
const sections = document.querySelectorAll("section[id]");
const themeToggle = document.getElementById("themeToggle");
const body = document.body;
let isDark = !0;
if (themeToggle) {
  themeToggle.addEventListener("click", () => {
    isDark = !isDark;
    if (isDark) {
      body.classList.add("dark");
      body.classList.remove("light");
    } else {
      body.classList.remove("dark");
      body.classList.add("light");
    }
    themeToggle.classList.toggle("active");
  });
}
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  });
});
const isMobile = window.innerWidth <= 768;
const isLowEndDevice = window.innerWidth <= 480;
// 🚀 Centralized Performance Mode Flag
// Disables heavy effects on Tablets/Mobile (<1024px) OR if user prefers reduced motion
const isLowPerf = window.innerWidth < 1024 || window.matchMedia('(prefers-reduced-motion: reduce)').matches;

const typingText = document.querySelector(".typing-text");
if (typingText) {
  // Simple fade-in instead of typing animation
  typingText.style.opacity = "1";
}
const animDuration = isLowPerf ? 0.5 : 1.5;
const animDelay = isLowPerf ? 0.1 : 0.3;

// 🚀 Optimized Hero Animations - Unified & Smooth
// Wrapped in window.load to ensure Tailwind CSS is fully applied before GSAP calculates positions
window.addEventListener("load", () => {
    // Check if GSAP is loaded
    if (typeof gsap === "undefined" || typeof ScrollTrigger === "undefined") {
        console.warn("GSAP/ScrollTrigger not loaded yet. Waiting...");
        return;
    }

    // 🚀 Performance Optimization: Simpler animations for mobile/low-perf
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    if (isLowPerf) {
        // Mobile/LowPerf: Simple fades (no x/y shifts to prevent jank)
        tl.fromTo(".hero-content-left", { autoAlpha: 0 }, { autoAlpha: 1, duration: 0.8 })
          .fromTo(".hero-image-right", { autoAlpha: 0 }, { autoAlpha: 1, duration: 0.8 }, "<0.1")
          .fromTo(".hero-title", { autoAlpha: 0 }, { autoAlpha: 1, duration: 0.8 }, "<0.1")
          .fromTo(".typing-text", { autoAlpha: 0 }, { autoAlpha: 1, duration: 0.5 }, "<0.1")
          .fromTo(".profile-link", { autoAlpha: 0 }, { autoAlpha: 1, stagger: 0.1, duration: 0.5 }, "<0.1");
    } else {
        // Desktop High-Perf: Full 3D/Position effects
        tl.fromTo(".hero-content-left",
            { x: -30, autoAlpha: 0 },
            { x: 0, autoAlpha: 1, duration: 1 }
        )
        .fromTo(".hero-image-right",
            { x: 30, autoAlpha: 0 },
            { x: 0, autoAlpha: 1, duration: 1 },
            "<0.1"
        )
        .fromTo(".hero-title",
            { y: 30, autoAlpha: 0 },
            { y: 0, autoAlpha: 1, duration: 0.8 },
            "<0.2"
        )
        .fromTo(".typing-text",
            { y: 20, autoAlpha: 0 },
            { y: 0, autoAlpha: 1, duration: 0.8 },
            "<0.1"
        )
        .fromTo(".profile-link",
            { y: 20, autoAlpha: 0 },
            { y: 0, autoAlpha: 1, stagger: 0.05, duration: 0.5 },
            "<0.2"
        );
    }

    gsap.utils.toArray(".card").forEach((card) => {
        gsap.fromTo(
            card,
            { y: 30, autoAlpha: 0 }, // autoAlpha handles opacity + visibility
            {
            y: 0,
            autoAlpha: 1,
            duration: isLowPerf ? 0.4 : 0.6,
            ease: "power2.out",
            scrollTrigger: {
                trigger: card,
                start: "top 90%",
                toggleActions: "play none none reverse",
            },
            }
        );
    });

    gsap.fromTo(
        ".about-photo-enhanced",
        { scale: 0.9, autoAlpha: 0 }, // Simplified start state
        {
            scale: 1,
            autoAlpha: 1,
            duration: 0.8,
            ease: "back.out(1.2)",
            scrollTrigger: {
            trigger: ".about-photo-enhanced",
            start: "top 85%",
            toggleActions: "play none none reverse",
            },
        }
    );

    gsap.utils.toArray(".timeline-item").forEach((item, index) => {
    // 💡 Performance Optimization: Skip complex slide-ins on mobile for smoother scrolling
    if (isLowPerf) {
        gsap.fromTo(
        item,
        { autoAlpha: 0 },
        {
            autoAlpha: 1,
            duration: 0.5,
            scrollTrigger: {
            trigger: item,
            start: "top 90%",
            toggleActions: "play none none reverse",
            },
        }
        );
    } else {
        gsap.fromTo(
        item,
        { x: index % 2 === 0 ? -60 : 60, autoAlpha: 0 },
        {
            x: 0,
            autoAlpha: 1,
            duration: 0.7,
            ease: "power2.out",
            scrollTrigger: {
            trigger: item,
            start: "top 85%",
            toggleActions: "play none none reverse",
            },
        }
        );
    }
    });

    gsap.utils.toArray(".circuit-line").forEach((line) => {
    gsap.fromTo(
        line,
        { scaleX: 0 },
        {
        scaleX: 1,
        duration: 1,
        ease: "power2.inOut",
        scrollTrigger: {
            trigger: line,
            start: "top 85%",
            toggleActions: "play none none reverse",
            },
        }
        );
    });

    // Force refresh to ensure positions are correct after all resources loaded

    // Slight delay to ensure paint is done
    setTimeout(() => ScrollTrigger.refresh(), 100);
});
// Only enable 3D hover effects on High Perf Desktop to save battery/perf
if (!isLowPerf) {
    document.querySelectorAll(".card-3d").forEach((card) => {
    card.addEventListener("mouseenter", () => {
        gsap.to(card, { scale: 1.03, duration: 0.2, ease: "power2.out" });
    });
    card.addEventListener("mouseleave", () => {
        gsap.to(card, { scale: 1, duration: 0.2, ease: "power2.out" });
    });
    });
}
document.addEventListener("DOMContentLoaded", () => {
  const submitBtn = document.querySelector(".submit-button");
  const btnText = submitBtn ? submitBtn.querySelector(".button-text") : null;

  // ⚡ Vercel serverless functions are always instant - no warming needed!
  if (submitBtn && btnText) {
    submitBtn.disabled = false;
    btnText.textContent = "TRANSMIT MESSAGE";
  }
  // Particle effects removed - using static background image instead
  gsap.from("body", { opacity: 0, duration: 0.8, ease: "power2.out" });
});
let ticking = !1;
function updateScrollEffects() {
  // 💡 Refactored: Section tracking is now handled by IntersectionObserver for much better performance
  ticking = !1;
}
function requestTick() {
  if (!ticking) {
    requestAnimationFrame(updateScrollEffects);
    ticking = !0;
  }
}

// 💡 Performance Optimization: Use IntersectionObserver for section tracking instead of scroll listener where possible
const sectionObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const sectionId = entry.target.getAttribute("id");
        navLinks.forEach((link) => {
          link.classList.toggle(
            "active",
            link.getAttribute("data-section") === sectionId
          );
        });
      }
    });
  },
  { threshold: 0.5 }
);

sections.forEach((section) => sectionObserver.observe(section));
window.addEventListener("scroll", requestTick, { passive: !0 });
requestAnimationFrame(updateScrollEffects);
const observerOptions = { threshold: 0.1, rootMargin: "0px 0px -50px 0px" };
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("animate");
    }
  });
}, observerOptions);
document.querySelectorAll(".card").forEach((card) => {
  observer.observe(card);
});
// 🎭 Jumble/Decrypt Animation - Triggers when hovering/clicking on the name text only
(function () {
  const jumbleElements = document.querySelectorAll(".jumble-text");
  if (jumbleElements.length === 0) return;
  const chars = "!<>-_\\/[]{}=+*^?#";

  // Function to animate a single element
  function animateJumble(el) {
    if (el.dataset.animating === "true") return;
    el.dataset.animating = "true";
    const originalText = el.dataset.text || el.textContent.trim();
    const duration = 400;
    const start = performance.now();

    function animate(now) {
      let progress = (now - start) / duration;
      if (progress > 1) progress = 1;
      const revealCount = Math.floor(progress * originalText.length);
      let newText = "";
      for (let i = 0; i < originalText.length; i++) {
        if (i < revealCount) {
          newText += originalText[i];
        } else {
          newText += chars[Math.floor(Math.random() * chars.length)];
        }
      }
      el.textContent = newText;
      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        el.textContent = originalText.trim();
        el.dataset.animating = "false";
      }
    }
    requestAnimationFrame(animate);
  }

  // Add event listeners to each name span individually
  jumbleElements.forEach((el) => {
    // Desktop: hover on name text
    el.addEventListener("mouseenter", function () {
      animateJumble(this);
    });

    // Mobile: touch/click on name text
    el.addEventListener(
      "touchstart",
      function () {
        animateJumble(this);
      },
      { passive: !0 }
    );

    el.addEventListener("click", function () {
      animateJumble(this);
    });

    // Add cursor pointer to indicate it's interactive
    el.style.cursor = "pointer";
  });
})();
const pronounceBtn = document.getElementById("pronounce-name");
if (pronounceBtn) {
  pronounceBtn.addEventListener("click", () => {
    pronounceBtn.style.color = "#00CED1";
    setTimeout(() => {
      pronounceBtn.style.color = "#ffffff";
    }, 1000);
    const utterance = new SpeechSynthesisUtterance("Call me Sarshij");
    utterance.lang = "en-US";
    utterance.rate = 0.9;
    utterance.pitch = 1;
    utterance.volume = 1;
    window.speechSynthesis.speak(utterance);
  });
}
// Magnetic card 3D tilt removed - using simple CSS hover instead
document.querySelectorAll("[data-copy]").forEach((element) => {
  element.addEventListener("click", async () => {
    const textToCopy = element.getAttribute("data-copy");
    try {
      await navigator.clipboard.writeText(textToCopy);
      showToast();
      // Particle burst removed for better performance
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  });
});
function showToast() {
  const toast = document.getElementById("copyToast");
  toast.classList.add("show");
  setTimeout(() => {
    toast.classList.remove("show");
  }, 2000);
}
const contactForm = document.getElementById("contactForm");
if (contactForm) {
  const formInputs = contactForm.querySelectorAll(".form-input");
  const formProgress = document.getElementById("formProgress");
  const formProgressText = document.getElementById("formProgressText");
  const messageInput = document.getElementById("message");
  const charCount = document.getElementById("charCount");
  function updateProgress() {
    let filledFields = 0;
    formInputs.forEach((input) => {
      if (input.value.trim() !== "") {
        filledFields++;
      }
    });
    const progress = (filledFields / formInputs.length) * 100;
    formProgress.style.width = progress + "%";
    formProgressText.textContent = Math.round(progress) + "% Complete";
    if (progress === 100) {
      formProgressText.style.color = "#00ff88";
    } else {
      formProgressText.style.color = "#8A2BE2";
    }
  }
  if (messageInput && charCount) {
    messageInput.addEventListener("input", () => {
      const count = messageInput.value.length;
      const max = messageInput.getAttribute("maxlength");
      charCount.textContent = count;
      const counter = messageInput
        .closest(".form-group")
        .querySelector(".character-counter");
      counter.classList.remove("warning", "danger");
      if (count > max * 0.9) {
        counter.classList.add("danger");
      } else if (count > max * 0.7) {
        counter.classList.add("warning");
      }
      updateProgress();
    });
  }
  formInputs.forEach((input) => {
    input.addEventListener("input", updateProgress);
    input.addEventListener("blur", updateProgress);
  });
  function validateForm() {
    const nameInput = contactForm.querySelector("#name");
    const emailInput = contactForm.querySelector("#email");
    const messageInput = contactForm.querySelector("#message");
    const errors = [];
    const name = nameInput?.value.trim() || "";
    if (!name) {
      errors.push("Name is required");
      nameInput?.classList.add("error");
    } else if (name.length < 2) {
      errors.push("Name must be at least 2 characters");
      nameInput?.classList.add("error");
    } else if (name.length > 100) {
      errors.push("Name must be less than 100 characters");
      nameInput?.classList.add("error");
    } else {
      nameInput?.classList.remove("error");
    }
    const email = emailInput?.value.trim() || "";
    // Strict Email Regex (W3C standard + TLD enforcement)
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    // Blocklist for common temp mails or generic placeholders
    const blockedDomains = ["test.com", "example.com", "tempmail.com", "mailinator.com"];
    const domain = email.split('@')[1];

    if (!email) {
      errors.push("Email is required");
      emailInput?.classList.add("error");
    } else if (!emailRegex.test(email)) {
      errors.push("Please enter a valid email address");
      emailInput?.classList.add("error");
    } else if (blockedDomains.includes(domain)) {
      errors.push("Please use a legitimate email address");
      emailInput?.classList.add("error");
    } else if (email.length > 255) {
      errors.push("Email must be less than 255 characters");
      emailInput?.classList.add("error");
    } else {
      emailInput?.classList.remove("error");
    }
    const message = messageInput?.value.trim() || "";
    if (!message) {
      errors.push("Message is required");
      messageInput?.classList.add("error");
    } else if (message.length < 10) {
      errors.push("Message must be at least 10 characters");
      messageInput?.classList.add("error");
    } else if (message.length > 500) {
      errors.push("Message must be less than 500 characters");
      messageInput?.classList.add("error");
    } else {
      messageInput?.classList.remove("error");
    }
    const turnstileResponse = contactForm.querySelector('[name="cf-turnstile-response"]')?.value;
    if (!turnstileResponse) {
       errors.push("Please complete the Security Check (CAPTCHA)");
    }

    // Honeypot check (reject if filled - bots auto-fill hidden fields)
    const honeypot = contactForm.querySelector('#website')?.value;
    if (honeypot) {
      console.warn('🤖 Bot detected via honeypot field');
      errors.push("Validation failed");
    }

    return { isValid: errors.length === 0, errors };
  }
  contactForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    const submitButton = contactForm.querySelector(".submit-button");
    if (!submitButton) {
      console.error("Submit button not found!");
      return;
    }
    const buttonText = submitButton.querySelector(".button-text");
    if (!buttonText) {
      console.error("Button text element not found!");
      return;
    }
    const originalText = buttonText.textContent;
    const validation = validateForm();
    if (!validation.isValid) {
      buttonText.textContent = validation.errors[0];
      submitButton.classList.add("error");
      setTimeout(() => {
        submitButton.classList.remove("error");
        buttonText.textContent = originalText;
      }, 3000);
      return;
    }
    submitButton.classList.add("loading");
    submitButton.disabled = !0;
    try {
      const formData = new FormData(contactForm);
      const data = Object.fromEntries(formData.entries());
      data.name = data.name.trim();
      data.email = data.email.trim();
      data.message = data.message.trim();
      // Add Turnstile Token to payload
      data['cf-turnstile-response'] = formData.get('cf-turnstile-response');
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 30000);
      let response;
      try {
        response = await fetch(`${BACKEND_URL}/api/contact`, {
          method: "POST",
          body: JSON.stringify(data),
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          signal: controller.signal,
        });
        clearTimeout(timeoutId);
      } catch (fetchError) {
        clearTimeout(timeoutId);
        throw fetchError;
      }
      try {
        if (response.ok) {
          const result = await response.json();
          if (!result || typeof result !== "object") {
            throw new Error("Invalid response from server");
          }
          submitButton.classList.remove("loading");
          submitButton.classList.add("success");
          buttonText.textContent = "Message Sent!";
          // Particle effect removed for better performance
          contactForm.reset();
          formInputs.forEach((input) => {
            input.classList.remove("has-value", "error");
          });
          updateProgress();
          setTimeout(() => {
            submitButton.classList.remove("success");
            buttonText.textContent = originalText;
            submitButton.disabled = !1;
          }, 3000);
        } else {
          let errorMessage = "Form submission failed";
          try {
            const errorData = await response.json();
            errorMessage = errorData.message || errorData.error || errorMessage;
          } catch (parseError) {
            if (response && response.status) {
              errorMessage =
                response.statusText || `Server error (${response.status})`;
            }
          }
          throw new Error(errorMessage);
        }
      } catch (responseError) {
        throw responseError;
      }
    } catch (error) {
      console.error("Form submission error:", error);
      submitButton.classList.remove("loading");
      submitButton.classList.add("error");
      let errorMessage = "Error! Try Again";
      if (error.name === "AbortError" || error.message.includes("timeout")) {
        errorMessage = "Request Timeout! Try Again";
      } else if (
        error.message.includes("Failed to fetch") ||
        error.message.includes("NetworkError") ||
        error.message.includes("ERR_")
      ) {
        errorMessage = "Network Error! Check Connection";
      } else if (
        error.message.includes("Rate limit") ||
        error.message.includes("Too many requests")
      ) {
        errorMessage = "Too Many Requests! Please wait a minute";
      } else if (error.message.includes("All fields are required")) {
        errorMessage = "Please fill all fields";
      } else if (error.message) {
        errorMessage =
          error.message.length > 50 ? "Error! Try Again" : error.message;
      }
      buttonText.textContent = errorMessage;
      setTimeout(() => {
        submitButton.classList.remove("error");
        buttonText.textContent = originalText;
        submitButton.disabled = !1;
      }, 3000);
    }
  });
  updateProgress();
}
const backToTopButton = document.getElementById("backToTop");
if (backToTopButton) {
  window.addEventListener("scroll", () => {
    if (window.pageYOffset > 300) {
      backToTopButton.classList.add("show");
    } else {
      backToTopButton.classList.remove("show");
    }
  }, { passive: true });
  backToTopButton.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}
const mobileNotice = document.getElementById("mobileNotice");
const closeMobileNotice = document.getElementById("closeMobileNotice");
if (closeMobileNotice && mobileNotice) {
  const closePopup = () => {
    mobileNotice.style.opacity = "0";
    setTimeout(() => {
      mobileNotice.style.display = "none";
    }, 300);
  };
  closeMobileNotice.addEventListener("click", (e) => {
    e.stopPropagation();
    closePopup();
  });
  window.addEventListener("click", (e) => {
    if (
      mobileNotice.style.display !== "none" &&
      !mobileNotice.contains(e.target)
    ) {
      closePopup();
    }
  });
}



// Cache clearing logic removed to improve load stability and UX
function initTerminalMode() {
  const toggleBtn = document.getElementById("toggleTerminal");
  const terminal = document.getElementById("contactTerminal");
  const normalForm = document.getElementById("contactForm");
  const input = document.getElementById("terminalInput");
  const output = document.getElementById("terminalOutput");
  const helpBtn = document.getElementById("terminalHelp");
  if (!toggleBtn || !terminal) return;

  // Helper to prevent XSS
  const escapeHtml = (str) => {
    if (!str) return '';
    return str.replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  };

  let step = 0;
  let mathChallenge = { a: 0, b: 0, answer: 0 };
  const userData = { name: "", email: "", message: "", isTerminal: true };
  if (helpBtn) {
    helpBtn.addEventListener("click", () => {
      printToTerminal("---| TERMINAL USER GUIDE |---");
      printToTerminal("1. Type 'contact' and press ENTER to start.");
      printToTerminal("2. Follow prompts to enter Name, Email, and Message.");
      printToTerminal("3. Your data will be sent automatically at the end.");
      printToTerminal("4. Commands: 'clear' to reset, 'exit' to close.");
    });
  }
  toggleBtn.addEventListener("click", () => {
    terminal.classList.toggle("active");
    if (terminal.classList.contains("active")) {
      normalForm.style.display = "none";
      toggleBtn.innerHTML = '<i class="fas fa-times"></i> EXIT TERMINAL';
      printToTerminal("SYSTEM: Establishing secure uplink...");
      setTimeout(
        () =>
          printToTerminal(
            "SYSTEM: Connection stabilized. Type 'help' for commands."
          ),
        1000
      );
      input.focus();
    } else {
      normalForm.style.display = "block";
      toggleBtn.innerHTML =
        '<i class="fas fa-terminal"></i> USE CYBER TERMINAL';
    }
  });
  input.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
      const cmd = input.value.trim().toLowerCase();
      printToTerminal(
        `<span class="terminal-prompt">root@sarshij:~$</span> ${escapeHtml(input.value)}`
      );
      input.value = "";
      processCommand(cmd);
    }
  });
  function printToTerminal(text, isTypewriter = !1) {
    const line = document.createElement("div");
    line.className = "terminal-line";
    output.appendChild(line);
    if (isTypewriter) {
      let i = 0;
      const speed = 20;
      function type() {
        if (i < text.length) {
          if (text.charAt(i) === "<") {
            const tagEnd = text.indexOf(">", i);
            line.innerHTML += text.substring(i, tagEnd + 1);
            i = tagEnd + 1;
          } else {
            line.innerHTML += text.charAt(i);
            i++;
          }
          setTimeout(type, speed);
          terminal.scrollTop = terminal.scrollHeight;
        }
      }
      type();
    } else {
      line.innerHTML = text;
      terminal.scrollTop = terminal.scrollHeight;
    }
  }
  async function processCommand(cmd) {
    if (cmd === "help") {
      printToTerminal("---| TERMINAL USER GUIDE |---");
      printToTerminal("1. Type 'contact' and press ENTER to start.");
      printToTerminal("2. Commands: 'clear', 'status', 'exit'", !0);
      return;
    }
    if (cmd === "clear") {
      output.innerHTML = "SYSTEM: Memory cleared...";
      setTimeout(() => (output.innerHTML = ""), 1000);
      return;
    }
    if (cmd === "status") {
      printToTerminal("SYSTEM: Pinging uplink server...", !0);
      try {
        const res = await fetch(`${BACKEND_URL}/api/wake-up`);
        if (res.ok)
          printToTerminal(
            "SYSTEM: <span style='color: #00ff88'>UPLINK ONLINE</span> (v3.0.4)",
            !0
          );
        else
          printToTerminal(
            "SYSTEM: <span style='color: #ff3e3e'>UPLINK DEGRADED</span>",
            !0
          );
      } catch (e) {
        printToTerminal(
          "SYSTEM: <span style='color: #ff3e3e'>UPLINK OFFLINE</span>",
          !0
        );
      }
      return;
    }
    if (cmd === "exit") {
      toggleBtn.click();
      return;
    }
    if (step === 0 && cmd === "contact") {
      step = 0.5; // Math Challenge Step
      mathChallenge.a = Math.floor(Math.random() * 10) + 1;
      mathChallenge.b = Math.floor(Math.random() * 10) + 1;
      mathChallenge.answer = mathChallenge.a + mathChallenge.b;
      printToTerminal(
        `SECURITY CHECK: What is ${mathChallenge.a} + ${mathChallenge.b}?`,
        !0
      );
    } else if (step === 0.5) {
      if (parseInt(cmd) === mathChallenge.answer) {
        step = 1;
        printToTerminal(
         "ACCESS GRANTED. Initiation sequence started. Enter your name:",
         !0
        );
      } else {
        step = 0;
         printToTerminal(
         "ACCESS DENIED. Incorrect security code. Session reset.",
         !0
        );
      }
    } else if (step === 1) {
      userData.name = escapeHtml(cmd);
      step = 2;
      printToTerminal(
        `SUCCESS: ID confirmed as '${escapeHtml(cmd)}'. Enter neural-mail:`,
        !0
      );
    } else if (step === 2) {
      const email = escapeHtml(cmd);
      const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

      if (emailRegex.test(email)) {
        userData.email = email;
        step = 3;
        printToTerminal(
          "SUCCESS: Uplink address verified. Enter your transmission data:",
          !0
        );
      } else {
        printToTerminal(
          "ERROR: Invalid email format. Please re-enter uplink address:",
          !0
        );
        // Keep step at 2 to retry
      }
    } else if (step === 3) {
      userData.message = escapeHtml(cmd);
      printToTerminal("SYSTEM: Encrypting and transmitting data packet...", !0);
      sendData();
      step = 0;
    } else {
      printToTerminal(`ERROR: Unknown command '${escapeHtml(cmd)}'. Try 'help'.`);
    }
  }
  async function sendData() {
    try {
      const response = await fetch(`${BACKEND_URL}/api/contact`, {
        method: "POST",
        body: JSON.stringify({ ...userData, isTerminal: true }),
        headers: { "Content-Type": "application/json" },
      });
      if (response.ok) {
        printToTerminal(
          "SYSTEM: <span style='color: #00ff88'>TRANSMISSION SUCCESSFUL.</span> Uplink terminated.",
          !0
        );
      } else {
        printToTerminal(
          "ERROR: <span style='color: #ff3e3e'>TRANSMISSION REJECTED by server.</span>",
          !0
        );
      }
    } catch (err) {
      printToTerminal(
        "ERROR: <span style='color: #ff3e3e'>CONNECTION TIMEOUT.</span> Packet lost in transit.",
        !0
      );
    }
  }
}

// Performance Optimization: Intersection Observer to pause animations
function initPerformanceObserver() {
  const animatedElements = document.querySelectorAll('.animate-wave, .animate-bounce, .animate-spin, .animate-tilt, .circuit-line, .glow-special, .neon-yellow, .neon-cyan, .neon-purple, .heading-animate, .timeline-item, .card, .card-3d');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      // Toggle a class that sets animation-play-state: paused
      if (entry.isIntersecting) {
        entry.target.classList.remove('paused-animation');
      } else {
        entry.target.classList.add('paused-animation');
      }
    });
  }, {
    rootMargin: '50px 0px', // Pre-load slightly before viewport
    threshold: 0.01 // Trigger as soon as 1% is visible
  });

  animatedElements.forEach(el => observer.observe(el));
}

document.addEventListener("DOMContentLoaded", () => {
  initTerminalMode();
  initPerformanceObserver();
});

// 7. Advanced Interactive Companion Character (Personalized Voice & Smart Hype)
(function() {
    const companion = document.getElementById('companion');
    const companionBubble = document.getElementById('companionBubble');
    const bubbleText = document.getElementById('bubbleText');
    const companionImg = companion?.querySelector('.companion-img');
    const voiceToggle = document.getElementById('voiceToggle');

    if (!companion) return;

    // --- State & Config ---
    let isDragging = false;
    let isMuted = true; // Default to muted: Speaks only on load (forced) or when clicked
    let currentX = 0, currentY = 0, initialX = 0, initialY = 0;
    let lastClickTime = 0;
    let voice = null;

    // --- Quotes & Facts (Short & Punchy) ---
    const quotes = {
        greeting: [
            "👋 Welcome!",
        ],
        smart: [
            "📄 Checking the resume?",
            "💼 Looking for a pro?",
            "🔗 Let's connect!",
            "⚡ Electronics + Software",
            "🌊 Scroll down!",
            "📬 Want to collaborate?"
        ],
        facts: [
            "🎓 Electronics Engineer.",
            "💻 Full-stack + AI/ML",
            "🤖 AI Projects.",
            "🌐 Web + Hardware.",
            "💪 Python, JS, C++",
        ],
        excited: ["🎉 Glad you're here!", "💫 Hi there!", "🌟 Awesome!"],
        dragged: ["🚀 Wheee!", "🎯 Nice spot!", "😎 Moving!"]
    };

    const allEngage = [...quotes.smart, ...quotes.facts];

    // --- Voice Initialization ---
    // Simple voice initialization - prioritized performance
    function initVoice() {
        if (!window.speechSynthesis) return;
        const voices = window.speechSynthesis.getVoices();
        // Look for a "cute" sounding female voice (Google/Microsoft female voices)
        voice = voices.find(v => v.name.includes('Female') || v.name.includes('Google UK English Female') || v.name.includes('Microsoft Zira') || v.name.includes('Samantha')) || voices[0];
    }
    if (window.speechSynthesis && speechSynthesis.onvoiceschanged !== undefined) {
        speechSynthesis.onvoiceschanged = initVoice;
    }
    // Try immediate init
    setTimeout(initVoice, 100);

    function speak(text, force = false) {
        if (!window.speechSynthesis) return;
        if (isMuted && !force) return;

        window.speechSynthesis.cancel();

        // Strip emojis and metadata for a cleaner voice readout
        const cleanText = text.replace(/([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g, '').trim();

        const utterance = new SpeechSynthesisUtterance(cleanText);
        if (voice) utterance.voice = voice;
        utterance.pitch = 1.3;
        utterance.rate = 1.0;

        companionBubble.classList.add('speaking');
        utterance.onend = () => companionBubble.classList.remove('speaking');
        window.speechSynthesis.speak(utterance);
    }

    // --- UI Helpers ---
    function updateMuteUI() {
        if (!voiceToggle) return;
        const icon = voiceToggle.querySelector('i');
        // Always show as 'sound available on click' or 'muted'
        icon.className = 'fas fa-volume-up';
        voiceToggle.style.background = '#00ced1';
        voiceToggle.title = "Click to Speak (One Time)";
    }
    updateMuteUI();

    function showMessage(text, forceVoice = false, duration = 4000) {
        if (!bubbleText) return;
        bubbleText.textContent = text;
        companionBubble.classList.add('show');
        speak(text, forceVoice);
        setTimeout(() => companionBubble.classList.remove('show'), duration);
    }

    // --- Interactivity ---
    if (voiceToggle) {
        voiceToggle.addEventListener('click', (e) => {
            e.stopPropagation();
            // Speak only once per click
            const randomMsg = allEngage[Math.floor(Math.random() * allEngage.length)];
            showMessage(randomMsg, true); // Force voice for this interaction
        });
    }

    companion.addEventListener('click', () => {
        if (isDragging) return;
        const now = Date.now();
        if (now - lastClickTime < 300) {
            playAnimation('spin');
            showMessage(quotes.excited[Math.floor(Math.random() * quotes.excited.length)]);
        } else {
            const randomMsg = allEngage[Math.floor(Math.random() * allEngage.length)];
            showMessage(randomMsg);
        }
        lastClickTime = now;
    });

    // --- Greeting & Loop ---
    // Only greet on desktop to save mobile resources
    if (window.innerWidth > 768) {
        setTimeout(() => {
            const greeting = quotes.greeting[Math.floor(Math.random() * quotes.greeting.length)];
            showMessage(greeting, true); // Force voice for initial greeting
        }, 2000); // Delayed slightly
    }

    // Auto-Engagement Loop - REDUCED FREQUENCY significantly
    setInterval(() => {
        // Desktop Only: Auto engage. Mobile: Touch only.
        if (!companionBubble.classList.contains('show') && !isDragging && window.innerWidth > 768) {
            // Only engage if tab is visible
            if (document.visibilityState === 'visible') {
                const randomMsg = allEngage[Math.floor(Math.random() * allEngage.length)];
                showMessage(randomMsg);
            }
        }
    }, 45000); // Increased from 18s to 45s

    // --- Standard Mascot Logic (Drag/Anim/Track) ---
    // Load Position
    const savedPos = localStorage.getItem('companion-position');
    // Only restore position on desktop to prevent it flying off-screen on mobile
    if (savedPos && window.innerWidth > 768) {
        try {
            const { x, y } = JSON.parse(savedPos);
            companion.style.right = 'auto'; companion.style.bottom = 'auto';
            companion.style.left = x + 'px'; companion.style.top = y + 'px';
        } catch (e) {
            // Ignore error
        }
    }

    // Reset position on resize (if switching to mobile)
    window.addEventListener('resize', () => {
        if (window.innerWidth <= 768) {
            companion.style.left = '';
            companion.style.top = '';
            companion.style.right = '';
            companion.style.bottom = '';
        }
    });

    companion.addEventListener('mousedown', (e) => {
        if (e.target.closest('.companion-bubble')) return;
        isDragging = true;
        const rect = companion.getBoundingClientRect();
        initialX = e.clientX - rect.left; initialY = e.clientY - rect.top;
        companion.style.cursor = 'grabbing';
    });

    document.addEventListener('mousemove', (e) => {
        if (!isDragging) return;
        currentX = Math.max(0, Math.min(e.clientX - initialX, window.innerWidth - companion.offsetWidth));
        currentY = Math.max(0, Math.min(e.clientY - initialY, window.innerHeight - companion.offsetHeight));
        companion.style.left = currentX + 'px'; companion.style.top = currentY + 'px';
        companion.style.right = 'auto'; companion.style.bottom = 'auto';
    });

    document.addEventListener('mouseup', () => {
        if (!isDragging) return;
        isDragging = false;
        companion.style.cursor = 'pointer';
        localStorage.setItem('companion-position', JSON.stringify({ x: currentX, y: currentY }));
        showMessage(quotes.dragged[Math.floor(Math.random() * quotes.dragged.length)]);
    });

    function playAnimation(type) {
        companion.classList.remove('animate-wave', 'animate-bounce', 'animate-spin', 'animate-tilt');
        void companion.offsetWidth;
        companion.classList.add('animate-' + type);
    }

    // Reduced animation frequency
    setInterval(() => {
        if (!isDragging && document.visibilityState === 'visible') {
            playAnimation(['wave', 'bounce', 'tilt'][Math.floor(Math.random() * 3)]);
        }
    }, 20000); // Increased from 12s to 20s

    // THROTTLED Mouse Move for 3D Effect
    let lastMove = 0;
    document.addEventListener('mousemove', (e) => {
        const now = Date.now();
        if (now - lastMove < 200) return; // Increased throttle from 100ms to 200ms
        lastMove = now;

        // Disabled on mobile or if CPU is struggling (simplified check)
        if (window.innerWidth <= 768) return;

        const rect = companion.getBoundingClientRect();
        // Only calculate if near the companion to save CPU
        const dist = Math.hypot(e.clientX - (rect.left + rect.width /2), e.clientY - (rect.top + rect.height/2));
        if (dist > 500) return;

        const dx = e.clientX - (rect.left + rect.width / 2);
        const dy = e.clientY - (rect.top + rect.height / 2);

        // Simple approximation to avoid expensive atan2 if possible, keeping full logic for now but throttled
        const angle = Math.atan2(dy, dx);
        if (companionImg && !isDragging) {
            companionImg.style.transform = `rotateX(${Math.cos(angle) * -5}deg) rotateY(${Math.sin(angle) * 5}deg)`;
        }
    });

})();

// Skeleton Loader Logic
document.addEventListener('DOMContentLoaded', () => {
  if ('IntersectionObserver' in window) {
      const imageObserver = new IntersectionObserver((entries, observer) => {
          entries.forEach(entry => {
              if (entry.isIntersecting) {
                  const img = entry.target;
                  if (img.dataset.src) {
                      img.src = img.dataset.src;
                      img.classList.add('loaded');
                      observer.unobserve(img);
                  }
              }
          });
      });

      document.querySelectorAll('img[loading="lazy"]').forEach(img => imageObserver.observe(img));
  }

  // Existing skeleton logic fallbacks
  document.querySelectorAll('.skeleton img').forEach(img => {
    if (img.complete) {
      img.parentElement.classList.add('loaded');
      img.classList.add('loaded');
    } else {
      img.onload = () => {
        img.parentElement.classList.add('loaded');
        img.classList.add('loaded');
      };
    }
  });
});

// ============================================================
// SCROLL PROGRESS BAR
// Updates CSS custom property --scroll-pct based on scroll position.
// The visual bar is 100% CSS via body::before in glassmorphism.css.
// ============================================================
(function initScrollProgress() {
  const root = document.documentElement;

  function updateScrollProgress() {
    const scrollTop = window.scrollY || root.scrollTop;
    const docHeight  = root.scrollHeight - root.clientHeight;
    const pct = docHeight > 0 ? Math.min((scrollTop / docHeight) * 100, 100) : 0;
    root.style.setProperty('--scroll-pct', pct.toFixed(2) + '%');
  }

  window.addEventListener('scroll', updateScrollProgress, { passive: true });
  updateScrollProgress(); // set initial
})();

// ============================================================
// CUSTOM CURSOR GLOW
// Runs only on pointer:fine (mouse) — skips mobile/touch.
// Creates #cursor-dot (snaps) and #cursor-ring (lerp follows).
// ============================================================
(function initCustomCursor() {
  if (!window.matchMedia('(pointer: fine)').matches) return;

  const dot  = document.createElement('div');
  const ring = document.createElement('div');
  dot.id  = 'cursor-dot';
  ring.id = 'cursor-ring';
  document.body.appendChild(dot);
  document.body.appendChild(ring);

  let ringX = 0, ringY = 0;
  let dotX  = 0, dotY  = 0;

  // Lerp ring toward cursor; dot snaps exactly
  function animateCursor() {
    ringX += (dotX - ringX) * 0.18;
    ringY += (dotY - ringY) * 0.18;
    dot.style.left  = dotX  + 'px';
    dot.style.top   = dotY  + 'px';
    ring.style.left = ringX + 'px';
    ring.style.top  = ringY + 'px';
    requestAnimationFrame(animateCursor);
  }
  animateCursor();

  document.addEventListener('mousemove', (e) => {
    dotX = e.clientX;
    dotY = e.clientY;
  }, { passive: true });

  // Expand ring on interactive elements
  const interactors = 'a, button, [role="button"], input, textarea, select, .card, .card-3d, .nav-link, .hamburger-btn, .companion-container';
  document.addEventListener('mouseover', (e) => {
    if (e.target.closest(interactors)) {
      dot.classList.add('hovering');
      ring.classList.add('hovering');
    }
  }, { passive: true });
  document.addEventListener('mouseout', (e) => {
    if (e.target.closest(interactors)) {
      dot.classList.remove('hovering');
      ring.classList.remove('hovering');
    }
  }, { passive: true });

  // Click pulse
  document.addEventListener('mousedown', () => ring.classList.add('clicking'),    { passive: true });
  document.addEventListener('mouseup',   () => ring.classList.remove('clicking'), { passive: true });

  // Hide when mouse leaves window
  document.addEventListener('mouseleave', () => { dot.style.opacity = '0'; ring.style.opacity = '0'; }, { passive: true });
  document.addEventListener('mouseenter', () => { dot.style.opacity = '1'; ring.style.opacity = '1'; }, { passive: true });
})();
