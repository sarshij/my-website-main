/**
 * smartbot.js — AI Companion Chatbot
 * Replaces the static Athena companion with an interactive AI chatbot.
 * Features: contextual Q&A about Sarshij, typewriter responses,
 * personality, voice support, draggable, persistent memory.
 */

import athenaImg from '../img/Model/gothfixXL.webp';

class SmartBot {
  constructor() {
    this.container = null;
    this.bubble = null;
    this.chatPanel = null;
    this.isOpen = false;
    this.isMuted = true;
    this.isDragging = false;
    this.voice = null;
    this.context = {
      currentSection: 'home',
      questionsAsked: [],
      mood: 'greeting',
    };
    this.position = this.loadPosition();

    this.knowledgeBase = this.buildKnowledgeBase();
    this.init();
  }

  buildKnowledgeBase() {
    return {
      greetings: [
        { keywords: ['hi', 'hello', 'hey', 'greetings', 'sup', 'yo'],
          response: 'Hey there! I\'m Sarshij\'s AI assistant. Ask me anything about his skills, projects, or background!' },
        { keywords: ['who are you', 'what are you', 'your name'],
          response: 'I\'m AURA — Sarshij\'s AI companion. I can tell you about his work, projects, skills, and more. What would you like to know?' },
        { keywords: ['how are you', 'how\'s it going'],
          response: 'Systems nominal! Running at optimal efficiency. Ready to help you explore Sarshij\'s universe.' },
      ],
      about: [
        { keywords: ['who is sarshij', 'tell me about sarshij', 'about sarshij', 'about him', 'tell me about him', 'who is he'],
          response: 'Sarshij Karn is an Electronics, Communication & Information Engineering student at National College of Engineering (Tribhuvan University). He\'s passionate about AI, cybersecurity, full-stack development, and building future-ready tech solutions. He\'s also a content creator and tech explorer from Nepal.' },
        { keywords: ['what does he do', 'what is he', 'his profession', 'his job'],
          response: 'Sarshij is an engineering student with expertise spanning electronics, AI/ML, cybersecurity, web development, and system automation. He builds AI-powered apps, security tools, and smart systems. He also creates tech content on YouTube.' },
        { keywords: ['where is he from', 'his location', 'nationality', 'nepal'],
          response: 'Sarshij is from Kathmandu, Nepal! He studies at National College of Engineering and is deeply involved in the local tech scene.' },
        { keywords: ['his age', 'how old', 'birthday', 'born'],
          response: 'Sarshij is currently pursuing his Bachelor\'s degree. He completed Grade X with a perfect 4.0 GPA and Grade XII with 3.53 GPA.' },
      ],
      skills: [
        { keywords: ['skills', 'expertise', 'what can he do', 'technologies', 'tech stack', 'languages', 'programming'],
          response: 'Sarshij\'s core skills include: Python, C/C++, JavaScript for programming; AI/ML with TensorFlow, Keras, OpenCV, MediaPipe; web development with HTML5, CSS3, JS and frontend optimization; electronics including circuit simulation, Arduino, PCB design; cybersecurity with Linux security and ethical hacking; and tools like Git, VS Code, and PowerShell automation.' },
        { keywords: ['ai', 'machine learning', 'ml', 'deep learning', 'artificial intelligence'],
          response: 'Sarshij has strong AI/ML skills! He works with TensorFlow, Keras, OpenCV, and MediaPipe. His projects include emotion detection models, gesture-based calculators, and AI-powered healthcare apps. He also explores prompt engineering and AI agents.' },
        { keywords: ['cybersecurity', 'security', 'hacking', 'ethical hacking'],
          response: 'Sarshij is actively learning cybersecurity! He focuses on Linux security, ethical hacking, terminal operations, security tools, and automation for security. He\'s building expertise to create secure, resilient systems.' },
        { keywords: ['electronics', 'hardware', 'circuit', 'arduino', 'pcb'],
          response: 'Sarshij is an electronics engineering student skilled in analog & digital circuits, signals & systems, circuit simulation, Arduino & MCUs, and PCB design. He bridges hardware and software seamlessly.' },
      ],
      projects: [
        { keywords: ['projects', 'what has he built', 'his work', 'portfolio', 'github'],
          response: 'Sarshij has built 8+ featured projects! MedAssist (AI healthcare), Reddit Data Scraper, HyperQR (QR utility), SmartVault (secure notes), Emotion Detection AI, Gesture Calculator, YouTube Unsubscriber, and YouTube Playlist Downloader. Check them out in the Projects section!' },
        { keywords: ['medassist', 'healthcare', 'medical'],
          response: 'MedAssist is a smart healthcare companion app that helps manage medications, appointments, and medical records with AI-powered features. It\'s one of Sarshij\'s most ambitious projects!' },
        { keywords: ['emotion detection', 'face', 'emotion'],
          response: 'The Emotion Detection model uses OpenCV and deep learning to detect human emotions from real-time facial expressions. It includes avatar visualization and text-to-speech announcements!' },
        { keywords: ['youtube', 'downloader', 'unsubscriber'],
          response: 'Sarshij built two YouTube tools: a Bulk Unsubscriber (Python + YouTube API) and a Playlist Downloader (CLI + GUI). Both solve real problems creatively!' },
      ],
      education: [
        { keywords: ['education', 'college', 'university', 'study', 'degree', 'bachelor'],
          response: 'Sarshij is pursuing a Bachelor\'s in Electronics, Communication and Information Engineering at National College Of Engineering (Tribhuvan University), 2024 - Present. He also completed Grade XII with 3.53 GPA at Liverpool International College (2023) and Grade X with 4.00 GPA at Happyland Secondary School (2021).' },
        { keywords: ['scholarship', 'award', 'achievement'],
          response: 'Sarshij has earned multiple recognitions: Merit-Based Scholarship at Liverpool International College, Full Merit Scholarship at National College Of Engineering, and certificates from multiple hackathons and workshops.' },
      ],
      contact: [
        { keywords: ['contact', 'email', 'reach', 'message', 'get in touch'],
          response: 'You can reach Sarshij via email at sarshijkarn333@gmail.com, call at +977 9863918187, or connect on social media. The contact form on this site also works — try the Cyber Terminal mode for a fun experience!' },
        { keywords: ['social', 'social media', 'instagram', 'twitter', 'linkedin', 'github', 'youtube'],
          response: 'Sarshij is active on GitHub (@sarshij), LinkedIn, X (@realsarshijkarn), Instagram (@sarshijkarn), and YouTube (@sarshijkarn). All links are in the Contact section!' },
      ],
      fun: [
        { keywords: ['hobbies', 'interests', 'free time', 'fun'],
          response: 'Sarshij enjoys cybersecurity challenges, exploring AI/tech trends, financial markets analysis, web exploration, playing sports, reading books, participating in hackathons, and studying human psychology!' },
        { keywords: ['resume', 'cv', 'hire', 'job'],
          response: 'You can download Sarshij\'s resume from the Home section! He\'s open to internships, collaborations, and exciting opportunities in AI, cybersecurity, and electronics engineering.' },
        { keywords: ['website', 'this site', 'built with'],
          response: 'This website was built with vanilla JavaScript, Three.js for 3D particles, GSAP for smooth animations, and Tailwind CSS. It\'s powered by Vite and deployed on Vercel. Every pixel was crafted for maximum impact!' },
      ],
      fallback: [
        { keywords: [],
          response: 'That\'s an interesting question! I\'m still learning. Try asking about Sarshij\'s skills, projects, education, or background. I can also tell you about his hobbies or how to contact him!' },
      ],
    };
  }

  init() {
    this.injectHTML();
    this.cacheElements();
    this.initVoice();
    this.initDrag();
    this.initEvents();
    this.addCustomCommands();
    setTimeout(() => this.showGreeting(), 2000);
  }

  injectHTML() {
    const div = document.createElement('div');
    div.innerHTML = `
      <div class="smartbot-container" id="smartbot">
        <div class="smartbot-bubble" id="smartbotBubble">
          <div class="smartbot-header">
            <div class="smartbot-status">
              <span class="smartbot-dot"></span>
              <span class="smartbot-name">AURA</span>
            </div>
            <div class="smartbot-header-actions">
              <button class="smartbot-voice-btn" id="smartbotVoice" title="Toggle Voice">
                <i class="fas fa-volume-mute"></i>
              </button>
              <button class="smartbot-toggle-btn" id="smartbotToggle" title="Open Chat">
                <i class="fas fa-chevron-up"></i>
              </button>
            </div>
          </div>
          <div class="smartbot-messages" id="smartbotMessages">
            <div class="smartbot-msg bot">
              <div class="msg-avatar">A</div>
              <div class="msg-content">
                <span class="msg-sender">AURA</span>
                <span class="msg-text">Systems initializing... Neural link established. How can I help you explore Sarshij's universe?</span>
              </div>
            </div>
          </div>
          <div class="smartbot-input-area">
            <input type="text" class="smartbot-input" id="smartbotInput" placeholder="Ask me anything..." autocomplete="off">
            <button class="smartbot-send-btn" id="smartbotSend">
              <i class="fas fa-paper-plane"></i>
            </button>
          </div>
        </div>
        <div class="smartbot-fab" id="smartbotFab">
          <img src="${athenaImg}" alt="AURA Chatbot" class="smartbot-fab-img" width="565" height="997">
          <span class="smartbot-fab-badge">AI</span>
        </div>
      </div>
    `;
    document.body.appendChild(div.firstElementChild);
  }

  cacheElements() {
    this.container = document.getElementById('smartbot');
    this.bubble = document.getElementById('smartbotBubble');
    this.fab = document.getElementById('smartbotFab');
    this.messages = document.getElementById('smartbotMessages');
    this.input = document.getElementById('smartbotInput');
    this.sendBtn = document.getElementById('smartbotSend');
    this.toggleBtn = document.getElementById('smartbotToggle');
    this.voiceBtn = document.getElementById('smartbotVoice');
  }

  initVoice() {
    if (!window.speechSynthesis) return;
    const tryInit = () => {
      const voices = window.speechSynthesis.getVoices();
      this.voice = voices.find(v =>
        v.name.includes('Female') ||
        v.name.includes('Google UK English Female') ||
        v.name.includes('Microsoft Zira') ||
        v.name.includes('Samantha')
      ) || voices[0];
    };
    tryInit();
    if (window.speechSynthesis.onvoiceschanged !== undefined) {
      window.speechSynthesis.onvoiceschanged = tryInit;
    }
  }

  speak(text, force = false) {
    if (!window.speechSynthesis || (this.isMuted && !force)) return;
    window.speechSynthesis.cancel();
    const clean = text.replace(/[^\w\s.,!?;:'"()-]/g, '').trim();
    if (!clean) return;
    const u = new SpeechSynthesisUtterance(clean);
    if (this.voice) u.voice = this.voice;
    u.pitch = 1.3;
    u.rate = 1.0;
    window.speechSynthesis.speak(u);
  }

  toggleVoice() {
    this.isMuted = !this.isMuted;
    const icon = this.voiceBtn.querySelector('i');
    icon.className = this.isMuted ? 'fas fa-volume-mute' : 'fas fa-volume-up';
    this.voiceBtn.title = this.isMuted ? 'Unmute Voice' : 'Mute Voice';
    if (!this.isMuted) {
      this.speak('Voice activated', true);
    }
  }

  toggleChat() {
    this.isOpen = !this.isOpen;
    this.bubble.classList.toggle('open', this.isOpen);
    this.fab.classList.toggle('hidden', this.isOpen);
    if (this.isOpen) {
      setTimeout(() => this.input.focus(), 300);
    }
  }

  addMessage(text, isBot = true, type = false) {
    const div = document.createElement('div');
    div.className = `smartbot-msg ${isBot ? 'bot' : 'user'}`;

    if (isBot) {
      div.innerHTML = `
        <div class="msg-avatar">A</div>
        <div class="msg-content">
          <span class="msg-sender">AURA</span>
          <span class="msg-text">${type ? '' : this.escapeHTML(text)}</span>
        </div>
      `;
      this.messages.appendChild(div);
      if (type) {
        this.typewriterEffect(div.querySelector('.msg-text'), text);
      }
    } else {
      div.innerHTML = `
        <div class="msg-content user-msg">
          <span class="msg-text">${this.escapeHTML(text)}</span>
        </div>
      `;
      this.messages.appendChild(div);
    }

    this.scrollToBottom();
  }

  typewriterEffect(element, text, speed = 20) {
    let i = 0;
    const type = () => {
      if (i < text.length) {
        element.textContent += text.charAt(i);
        i++;
        this.scrollToBottom();
        setTimeout(type, speed);
      }
    };
    type();
  }

  escapeHTML(str) {
    const div = document.createElement('div');
    div.textContent = str;
    return div.innerHTML;
  }

  scrollToBottom() {
    requestAnimationFrame(() => {
      this.messages.scrollTop = this.messages.scrollHeight;
    });
  }

  showGreeting() {
    const greetings = [
      '👋 Hey! I\'m AURA, Sarshij\'s AI companion. Ask me anything!',
      '🌀 Neural link active! Want to know about Sarshij\'s projects?',
      '⚡ Systems online! Try asking me about Sarshij\'s skills.',
      '🤖 Ready to assist! Ask me about Sarshij\'s background or work.',
    ];
    const msg = greetings[Math.floor(Math.random() * greetings.length)];
    this.addMessage(msg, true, true);
  }

  findResponse(input) {
    const lower = input.toLowerCase().trim();

    // Check all categories
    for (const [, entries] of Object.entries(this.knowledgeBase)) {
      for (const entry of entries) {
        if (entry.keywords.length === 0) continue;
        if (entry.keywords.some(kw => lower.includes(kw))) {
          // Track context
          this.context.questionsAsked.push(lower);
          return entry.response;
        }
      }
    }

    // Fallback
    return this.knowledgeBase.fallback[0].response;
  }

  processInput(input) {
    if (!input.trim()) return;
    this.addMessage(input, false);
    this.input.value = '';

    // Show typing indicator
    const typing = document.createElement('div');
    typing.className = 'smartbot-msg bot typing-indicator';
    typing.innerHTML = `
      <div class="msg-avatar">A</div>
      <div class="msg-content">
        <span class="msg-sender">AURA</span>
        <span class="msg-text"><span class="typing-dots"><span>.</span><span>.</span><span>.</span></span></span>
      </div>
    `;
    this.messages.appendChild(typing);
    this.scrollToBottom();

    // Simulate thinking delay
    const delay = 400 + Math.random() * 600;
    setTimeout(() => {
      typing.remove();
      const response = this.findResponse(input);
      this.addMessage(response, true, true);
      this.speak(response);
    }, delay);
  }

  addCustomCommands() {
    // Listen for section changes to update context
    const observer = new MutationObserver(() => {
      const activeLink = document.querySelector('.nav-link.active');
      if (activeLink) {
        this.context.currentSection = activeLink.dataset.section || 'home';
      }
    });
    document.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => {
        this.context.currentSection = link.dataset.section || 'home';
      });
    });
  }

  initDrag() {
    const fab = this.fab;
    if (!fab) return;

    let startX, startY, origX, origY;

    fab.addEventListener('mousedown', (e) => {
      if (e.button !== 0) return;
      this.isDragging = true;
      const rect = fab.getBoundingClientRect();
      startX = e.clientX;
      startY = e.clientY;
      origX = rect.left;
      origY = rect.top;
      fab.style.transition = 'none';
      fab.style.cursor = 'grabbing';
    });

    document.addEventListener('mousemove', (e) => {
      if (!this.isDragging) return;
      const dx = e.clientX - startX;
      const dy = e.clientY - startY;
      const x = Math.max(0, Math.min(origX + dx, window.innerWidth - 56));
      const y = Math.max(0, Math.min(origY + dy, window.innerHeight - 56));
      fab.style.left = x + 'px';
      fab.style.top = y + 'px';
      fab.style.right = 'auto';
      fab.style.bottom = 'auto';
    });

    document.addEventListener('mouseup', () => {
      if (!this.isDragging) return;
      this.isDragging = false;
      fab.style.transition = '';
      fab.style.cursor = 'pointer';
      const rect = fab.getBoundingClientRect();
      this.position = { x: rect.left, y: rect.top };
      this.savePosition();
    });
  }

  loadPosition() {
    try {
      const saved = localStorage.getItem('smartbot-position');
      return saved ? JSON.parse(saved) : null;
    } catch {
      return null;
    }
  }

  savePosition() {
    if (this.position) {
      localStorage.setItem('smartbot-position', JSON.stringify(this.position));
    }
  }

  initEvents() {
    this.fab?.addEventListener('click', (e) => {
      if (this.isDragging) return;
      this.toggleChat();
    });

    this.toggleBtn?.addEventListener('click', () => this.toggleChat());

    this.sendBtn?.addEventListener('click', () => {
      this.processInput(this.input.value);
    });

    this.input?.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        this.processInput(this.input.value);
      }
    });

    this.voiceBtn?.addEventListener('click', () => this.toggleVoice());
  }
}

// Initialize on DOM ready
document.addEventListener('DOMContentLoaded', () => {
  new SmartBot();
});

export default SmartBot;
