/**
 * project-lightbox.js — Interactive project showcase with lightbox detail view
 * Click a project card to open a full-screen modal with tech details, 
 * description, links, and animated entrance.
 */

class ProjectLightbox {
  constructor() {
    this.projects = [];
    this.isOpen = false;
    this.currentIndex = 0;
    this.init();
  }

  init() {
    this.collectProjects();
    this.injectLightboxHTML();
    this.cacheElements();
    this.addEvents();
    this.injectStyles();
  }

  collectProjects() {
    const cards = document.querySelectorAll('#projects .card');
    cards.forEach((card, index) => {
      const title = card.querySelector('h3')?.textContent?.trim() || 'Project';
      const desc = card.querySelector('p')?.textContent?.trim() || '';
      const links = card.querySelectorAll('a');
      const github = links[0]?.href || '#';
      const iconContainer = card.querySelector('.project-icon-container');

      // Extract tech tags from description heuristics
      const techTags = [];
      if (desc.toLowerCase().includes('python')) techTags.push('Python');
      if (desc.toLowerCase().includes('react')) techTags.push('React');
      if (desc.toLowerCase().includes('typescript')) techTags.push('TypeScript');
      if (desc.toLowerCase().includes('tensorflow') || desc.toLowerCase().includes('keras')) techTags.push('TensorFlow');
      if (desc.toLowerCase().includes('opencv')) techTags.push('OpenCV');
      if (desc.toLowerCase().includes('mediapipe')) techTags.push('MediaPipe');
      if (desc.toLowerCase().includes('ai') || desc.toLowerCase().includes('machine learning')) techTags.push('AI/ML');
      if (desc.toLowerCase().includes('javascript') || desc.toLowerCase().includes('js')) techTags.push('JavaScript');
      if (desc.toLowerCase().includes('tkinter')) techTags.push('Tkinter');
      if (desc.toLowerCase().includes('vite')) techTags.push('Vite');

      // Auto-detect tags from title too
      if (title.toLowerCase().includes('medassist')) techTags.push('Healthcare', 'AI');
      if (title.toLowerCase().includes('reddit')) techTags.push('Data Scraping', 'Python');
      if (title.toLowerCase().includes('qr')) techTags.push('QR Code', 'Utility');
      if (title.toLowerCase().includes('smartvault') || title.toLowerCase().includes('vault')) techTags.push('Security', 'React', 'TypeScript');
      if (title.toLowerCase().includes('emotion')) techTags.push('Deep Learning', 'Computer Vision');
      if (title.toLowerCase().includes('gesture')) techTags.push('Computer Vision', 'Python');
      if (title.toLowerCase().includes('unsubscriber')) techTags.push('YouTube API', 'OAuth');
      if (title.toLowerCase().includes('downloader')) techTags.push('YouTube API', 'Python');

      if (techTags.length === 0) techTags.push('Full-Stack', 'Innovation');

      this.projects.push({
        id: index,
        title,
        description: desc,
        github,
        techTags: [...new Set(techTags)],
        iconHTML: iconContainer?.innerHTML || '<i class="fas fa-code"></i>',
      });

      // Make card clickable
      card.style.cursor = 'pointer';
      card.addEventListener('click', (e) => {
        if (e.target.closest('a')) return; // Don't intercept link clicks
        this.open(index);
      });
    });
  }

  injectLightboxHTML() {
    const div = document.createElement('div');
    div.innerHTML = `
      <div id="projectLightbox" class="project-lightbox">
        <div class="lightbox-overlay"></div>
        <div class="lightbox-content">
          <button class="lightbox-close" aria-label="Close">
            <i class="fas fa-times"></i>
          </button>
          <button class="lightbox-nav lightbox-prev" aria-label="Previous">
            <i class="fas fa-chevron-left"></i>
          </button>
          <button class="lightbox-nav lightbox-next" aria-label="Next">
            <i class="fas fa-chevron-right"></i>
          </button>
          <div class="lightbox-body">
            <div class="lightbox-icon-display" id="lightboxIcon"></div>
            <div class="lightbox-details">
              <h2 class="lightbox-title" id="lightboxTitle"></h2>
              <div class="lightbox-tags" id="lightboxTags"></div>
              <p class="lightbox-description" id="lightboxDesc"></p>
              <div class="lightbox-links">
                <a id="lightboxGithub" target="_blank" rel="noopener noreferrer" class="lightbox-link github-link">
                  <i class="fab fa-github"></i> View on GitHub
                </a>
              </div>
            </div>
          </div>
          <div class="lightbox-counter" id="lightboxCounter"></div>
        </div>
      </div>
    `;
    document.body.appendChild(div.firstElementChild);
  }

  cacheElements() {
    this.lightbox = document.getElementById('projectLightbox');
    this.overlay = this.lightbox?.querySelector('.lightbox-overlay');
    this.closeBtn = this.lightbox?.querySelector('.lightbox-close');
    this.prevBtn = this.lightbox?.querySelector('.lightbox-prev');
    this.nextBtn = this.lightbox?.querySelector('.lightbox-next');
    this.title = document.getElementById('lightboxTitle');
    this.desc = document.getElementById('lightboxDesc');
    this.tags = document.getElementById('lightboxTags');
    this.github = document.getElementById('lightboxGithub');
    this.counter = document.getElementById('lightboxCounter');
    this.iconDisplay = document.getElementById('lightboxIcon');
  }

  injectStyles() {
    const style = document.createElement('style');
    style.textContent = `
      .project-lightbox {
        position: fixed; inset: 0; z-index: 50000;
        display: flex; align-items: center; justify-content: center;
        opacity: 0; pointer-events: none;
        transition: opacity 0.4s ease;
      }
      .project-lightbox.open { opacity: 1; pointer-events: all; }
      .lightbox-overlay {
        position: absolute; inset: 0;
        background: rgba(5, 5, 10, 0.85);
        backdrop-filter: blur(16px);
        -webkit-backdrop-filter: blur(16px);
      }
      .lightbox-content {
        position: relative; z-index: 1;
        max-width: 700px; width: 90%;
        max-height: 85vh; overflow-y: auto;
        background: rgba(10, 10, 20, 0.9);
        backdrop-filter: blur(24px);
        border: 1px solid rgba(0, 206, 209, 0.2);
        border-radius: 20px;
        padding: 2.5rem;
        box-shadow: 0 40px 80px rgba(0,0,0,0.8), 0 0 60px rgba(138,43,226,0.1);
        transform: scale(0.9) translateY(20px);
        transition: transform 0.4s cubic-bezier(0.23, 1, 0.32, 1);
      }
      .project-lightbox.open .lightbox-content {
        transform: scale(1) translateY(0);
      }
      .lightbox-close {
        position: absolute; top: 16px; right: 16px;
        width: 36px; height: 36px; border-radius: 50%;
        border: 1px solid rgba(255,255,255,0.1);
        background: rgba(255,255,255,0.05);
        color: #ccc; cursor: pointer; font-size: 1rem;
        display: flex; align-items: center; justify-content: center;
        transition: all 0.3s ease;
      }
      .lightbox-close:hover {
        background: rgba(255, 107, 107, 0.2);
        border-color: #ff6b6b; color: #ff6b6b;
      }
      .lightbox-nav {
        position: absolute; top: 50%; transform: translateY(-50%);
        width: 40px; height: 40px; border-radius: 50%;
        border: 1px solid rgba(255,255,255,0.1);
        background: rgba(255,255,255,0.05);
        color: #ccc; cursor: pointer; font-size: 1rem;
        display: flex; align-items: center; justify-content: center;
        transition: all 0.3s ease; z-index: 2;
      }
      .lightbox-nav:hover { background: rgba(0,206,209,0.15); color: #00ced1; border-color: #00ced1; }
      .lightbox-prev { left: 16px; }
      .lightbox-next { right: 16px; }
      .lightbox-body { display: flex; gap: 2rem; }
      .lightbox-icon-display {
        width: 180px; min-height: 180px;
        border-radius: 16px;
        background: linear-gradient(135deg, rgba(138,43,226,0.1), rgba(0,206,209,0.1));
        display: flex; align-items: center; justify-content: center;
        flex-shrink: 0; overflow: hidden;
        border: 1px solid rgba(255,255,255,0.05);
      }
      .lightbox-icon-display .project-icon-container {
        width: 100%; height: 100%; margin: 0;
        background: none;
      }
      .lightbox-details { flex: 1; display: flex; flex-direction: column; gap: 1rem; }
      .lightbox-title {
        font-family: 'Orbitron', sans-serif;
        font-size: 1.5rem; font-weight: 700;
        background: linear-gradient(135deg, #8a2be2, #00ced1);
        -webkit-background-clip: text; background-clip: text;
        -webkit-text-fill-color: transparent;
      }
      .lightbox-tags { display: flex; flex-wrap: wrap; gap: 8px; }
      .lightbox-tags span {
        padding: 4px 12px; border-radius: 20px;
        font-size: 0.7rem; font-weight: 500;
        background: rgba(138, 43, 226, 0.15);
        border: 1px solid rgba(138, 43, 226, 0.3);
        color: #c8a0ff;
        text-transform: uppercase; letter-spacing: 0.5px;
      }
      .lightbox-description {
        font-size: 0.9rem; line-height: 1.7;
        color: rgba(200, 200, 220, 0.8);
      }
      .lightbox-links { display: flex; gap: 12px; margin-top: auto; }
      .lightbox-link {
        display: inline-flex; align-items: center; gap: 8px;
        padding: 10px 20px; border-radius: 10px;
        font-size: 0.85rem; font-weight: 600;
        text-decoration: none; transition: all 0.3s ease;
      }
      .github-link {
        background: linear-gradient(135deg, #8a2be2, #00ced1);
        color: white; border: none;
      }
      .github-link:hover {
        transform: translateY(-2px);
        box-shadow: 0 8px 25px rgba(138, 43, 226, 0.4);
      }
      .lightbox-counter {
        text-align: center; margin-top: 1rem;
        font-family: 'Fira Code', monospace;
        font-size: 0.75rem; color: rgba(200,200,220,0.4);
        letter-spacing: 1px;
      }
      @media (max-width: 768px) {
        .lightbox-body { flex-direction: column; }
        .lightbox-icon-display { width: 100%; min-height: 140px; }
        .lightbox-content { padding: 1.5rem; width: 95%; }
        .lightbox-title { font-size: 1.2rem; }
        .lightbox-nav { display: none; }
      }
    `;
    document.head.appendChild(style);
  }

  open(index) {
    this.currentIndex = index;
    this.renderProject();
    this.lightbox.classList.add('open');
    this.isOpen = true;
    document.body.style.overflow = 'hidden';
  }

  close() {
    this.lightbox.classList.remove('open');
    this.isOpen = false;
    document.body.style.overflow = '';
  }

  next() {
    this.currentIndex = (this.currentIndex + 1) % this.projects.length;
    this.renderProject();
  }

  prev() {
    this.currentIndex = (this.currentIndex - 1 + this.projects.length) % this.projects.length;
    this.renderProject();
  }

  renderProject() {
    const project = this.projects[this.currentIndex];
    if (!project) return;

    this.title.textContent = project.title;
    this.desc.textContent = project.description;
    this.github.href = project.github;

    this.tags.innerHTML = project.techTags.map(t =>
      `<span>${t}</span>`
    ).join('');

    this.iconDisplay.innerHTML = `<div class="project-icon-container" style="width:100%;height:100%;margin:0;background:linear-gradient(135deg,rgba(138,43,226,0.15),rgba(0,206,209,0.15))">${project.iconHTML}</div>`;

    this.counter.textContent = `${this.currentIndex + 1} / ${this.projects.length}`;
  }

  addEvents() {
    this.closeBtn?.addEventListener('click', () => this.close());
    this.overlay?.addEventListener('click', () => this.close());
    this.nextBtn?.addEventListener('click', () => this.next());
    this.prevBtn?.addEventListener('click', () => this.prev());

    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
      if (!this.isOpen) return;
      if (e.key === 'Escape') this.close();
      if (e.key === 'ArrowRight') this.next();
      if (e.key === 'ArrowLeft') this.prev();
    });
  }
}

document.addEventListener('DOMContentLoaded', () => {
  new ProjectLightbox();
});

export default ProjectLightbox;
