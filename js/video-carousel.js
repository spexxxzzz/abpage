class VideoCarousel extends HTMLElement {
  constructor() {
    super();
    this.currentTabIndex = 0;
    this.currentVideoInCategory = {};
    this.isTransitioning = false;
    this.attachShadow({ mode: 'open' });
    this.isMobile = this.checkIfMobile();
    this.touchStartX = 0;
    this.touchEndX = 0;
  }

  // Add method to check if the device is mobile
  checkIfMobile() {
    return window.innerWidth <= 768 || 
           /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  }

  connectedCallback() {
    this.render();
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', () => this.setupShowcase());
    } else {
      this.setupShowcase();
    }
  }

  disconnectedCallback() {
    this.cleanupHLS();
  }

  render() {
    this.shadowRoot.innerHTML = `
      <style>
        :host {
          display: block;
          position: relative;
          width: 100%;
          margin: 0 auto;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', sans-serif;
          color: #f5f5f5;
          --zinc-900: rgb(24, 24, 27);
          --zinc-800: rgb(39, 39, 42);
          --zinc-700: rgb(63, 63, 70);
          --zinc-400: rgb(161, 161, 170);
          --zinc-300: rgb(212, 212, 216);
          --accent-color: #0066ff;
          --transition-fast: 0.15s ease;
          --transition-medium: 0.25s ease;
          --transition-slow: 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .showcase-container {
          position: relative;
          width: 100%;
          margin: 0 auto;
          overflow: hidden;
        }
        
        .tabs-wrapper {
          position: relative;
          width: 100%;
        }
        
        .tabs-scroll-button {
          position: absolute;
          top: 0;
          height: 100%;
          width: 38px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(39, 39, 42, 0.6);
          backdrop-filter: blur(4px);
          opacity: 0;
          transition: opacity 0.3s cubic-bezier(0.4, 0, 0.2, 1), 
                      transform 0.2s cubic-bezier(0.4, 0, 0.2, 1), 
                      background-color 0.2s ease;
          cursor: pointer;
          z-index: 10;
          border: none;
        }
        
        .tabs-scroll-button.left {
          left: 0;
          border-radius: 8px 0 0 0;
        }
        
        .tabs-scroll-button.right {
          right: 0;
          border-radius: 0 8px 0 0;
        }
        
        .tabs-scroll-button svg {
          width: 16px;
          height: 16px;
          color: var(--zinc-300);
          transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .tabs-wrapper:hover .tabs-scroll-button.visible {
          opacity: 1;
          animation: fadeIn 0.3s ease;
        }
        
        .tabs-scroll-button.visible:hover {
          opacity: 1;
          background: rgba(63, 63, 70, 0.9);
          transform: translateX(0);
        }
    
        
        .tabs-scroll-button.visible:hover svg {
          opacity: 1;
          transform: scale(1.15);
        }
        
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        .tabs {
          display: flex;
          border-bottom: none;
          margin-bottom: 0;
          overflow-x: auto;
          scrollbar-width: none;
          transition: border-color var(--transition-medium);
          background: var(--zinc-800);
          border-radius: 8px 8px 0 0;
          border: 1px solid var(--zinc-700);
          border-bottom: none;
        }
        .tabs::-webkit-scrollbar {
          display: none;
        }
        
        .tab {
          padding: 10px 16px;
          margin-right: 8px;
          cursor: pointer;
          font-weight: 500;
          color: var(--zinc-400);
          border-bottom: 2px solid transparent;
          transition: color var(--transition-medium), background-color var(--transition-medium), border-radius var(--transition-medium);
          white-space: nowrap;
        }
        .tab.active {
          color: #ffffff;
          background-color: var(--zinc-900);
          border-bottom: 2px solid transparent;
          border-radius: 6px 6px 0 0;
        }
        .tab:hover:not(.active) {
          color: var(--zinc-300);
          border-bottom-color: var(--zinc-700);
        }
        
        .showcase {
          position: relative;
          width: 100%;
          overflow: hidden;
          transition: background-color var(--transition-medium);
        }
        
        .capability-container {
          display: flex;
          flex-direction: column;
          margin-bottom: 32px;
          background: var(--zinc-800);
          border-radius: 0 0 8px 8px;
          border: 1px solid var(--zinc-700);
          border-top: none;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
          overflow: hidden;
          transition: box-shadow var(--transition-medium), border-color var(--transition-medium);
        }
        
        .prompt-section {
          padding: 16px 20px;
          background: var(--zinc-900);
          border-bottom: 1px solid var(--zinc-700);
          transition: background-color var(--transition-medium);
        }
        .prompt-label {
          font-size: 14px;
          font-weight: 600;
          color: var(--zinc-400);
          margin-bottom: 8px;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          transition: color var(--transition-fast);
        }
        .prompt-text {
          font-size: 16px;
          line-height: 1.5;
          color: #ffffff;
          transition: color var(--transition-medium), opacity 0.25s ease;
          opacity: 1;
        }
        
        .video-container {
          position: relative;
          width: 100%;
          aspect-ratio: 16 / 12;
          transition: opacity var(--transition-medium);
          background-color: var(--zinc-900);
          overflow: hidden;
        }
        
        .speed-badge {
          position: absolute;
          top: 12px;
          right: 12px;
          background-color: rgba(0, 0, 0, 0.6);
          color: white;
          padding: 4px 8px;
          border-radius: 4px;
          font-size: 12px;
          font-weight: 500;
          z-index: 10;
          transition: opacity var(--transition-medium);
          backdrop-filter: blur(4px);
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
          border: 1px solid rgba(255, 255, 255, 0.1);
          opacity: 0.9;
          pointer-events: none;
        }
        
        .navigation-controls {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 12px 16px;
          background: var(--zinc-900);
          border-top: 1px solid var(--zinc-700);
          transition: background-color var(--transition-medium);
        }
        
        .nav-button {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 36px;
          height: 36px;
          border-radius: 50%;
          background: var(--zinc-800);
          border: 1px solid var(--zinc-700);
          color: var(--zinc-300);
          cursor: pointer;
          transition: all var(--transition-fast);
          transform: scale(1);
        }
        .nav-button:hover {
          background: var(--zinc-700);
          color: white;
          transform: scale(1.05);
        }
        .nav-button:active {
          transform: scale(0.95);
        }
        .nav-button svg {
          transition: transform var(--transition-fast);
        }
        .nav-button:hover svg {
          transform: translateX(-2px);
        }
        .next-video:hover svg {
          transform: translateX(2px);
        }
        
        .counter {
          font-size: 14px;
          color: var(--zinc-400);
        }
        
        .dot-navigation {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          transition: opacity var(--transition-medium);
        }
        
        .dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background-color: var(--zinc-700);
          opacity: 0.3;
          transition: all var(--transition-medium);
        }
        
        .dot.active {
          opacity: 0.7;
          transform: scale(1.2);
        }
        
        ::slotted(.carousel-slide) {
          display: none;
          width: 100%;
          height: 100%;
          transition: opacity var(--transition-slow);
          opacity: 0;
          position: absolute;
          top: 0;
          left: 0;
        }
        ::slotted(.carousel-slide.active) {
          display: block;
          opacity: 1;
          position: relative;
        }
        
        ::slotted(video) {
          width: 100% !important;
          height: 100% !important;
          object-fit: cover !important;
          object-position: center !important;
          background: #000;
          display: block;
          transition: filter var(--transition-medium);
          min-height: 100%;
          position: absolute;
          top: 0;
          left: 0;
        }

        @media (max-width: 640px) {
          .tabs-scroll-button {
            display: none;
          }
          
          .tabs {
            -webkit-overflow-scrolling: touch; /* For smoother scrolling on iOS */
            scroll-behavior: smooth;
            scroll-snap-type: x mandatory;
          }
          
          .tab {
            scroll-snap-align: start;
          }
        }
      </style>
      
      <div class="showcase-container">
        <div class="tabs-wrapper">
          <div class="tabs-scroll-button left">
            <svg fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
              <path d="M15 19l-7-7 7-7" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          </div>
          <div class="tabs"></div>
          <div class="tabs-scroll-button right">
            <svg fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
              <path d="M9 19l7-7-7-7" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          </div>
        </div>
        <div class="showcase">
          <div class="capability-container">
            <div class="prompt-section">
              <div class="prompt-label">PROMPT</div>
              <div class="prompt-text"></div>
            </div>
            <div class="video-container">
              <slot></slot>
              <div class="speed-badge"></div>
            </div>
            <div class="navigation-controls">
              <button class="nav-button prev-video">
                <svg width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                  <path d="M15 18l-6-6 6-6" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
              </button>
              <div class="dot-navigation"></div>
              <button class="nav-button next-video">
                <svg width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                  <path d="M9 18l6-6-6-6" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    `;
  }

  setupShowcase() {
    const container = this.shadowRoot.querySelector('.showcase-container');
    const tabsContainer = container.querySelector('.tabs');
    const promptText = container.querySelector('.prompt-text');
    const dotNavigation = container.querySelector('.dot-navigation');
    const prevButton = container.querySelector('.nav-button.prev-video');
    const nextButton = container.querySelector('.nav-button.next-video');
    const leftScrollButton = container.querySelector('.tabs-scroll-button.left');
    const rightScrollButton = container.querySelector('.tabs-scroll-button.right');
    const videoContainer = container.querySelector('.video-container');
    const promptSection = container.querySelector('.prompt-section');
    const navigationControls = container.querySelector('.navigation-controls');

    const slides = this.querySelectorAll('.carousel-slide');
    if (slides.length === 0) {
      console.error("No slides found! DOM structure:", this.innerHTML);
      return;
    }

    // Remove controls attribute from videos on mobile
    if (this.isMobile) {
      for (const video of this.querySelectorAll('video')) {
        video.removeAttribute('controls');
      }
    }

    // Gather categories, captions, etc.
    const capabilities = [];
    const videos = [];
    let hasCategories = false;

    for (const slide of slides) {
      const vid = slide.querySelector('video');
      videos.push(vid);

      if (vid) {
        // Force video dimensions immediately
        vid.style.width = '100%';
        vid.style.height = '100%';
        vid.style.minHeight = '100%';
        vid.style.position = 'absolute';
        vid.style.top = '0';
        vid.style.left = '0';
        
        // Check if any video has a category defined
        if (vid.dataset.category) {
          hasCategories = true;
        }

        // Don't use default categories if no categories specified
        const category = vid.dataset.category || "";
        capabilities.push({ title: category, caption: vid.dataset.caption || "" });
      }
    }

    // Group videos by category
    const uniqueCategories = [...new Set(capabilities.map(c => c.title).filter(Boolean))];
    
    // If no categories found, use single empty category for all videos
    if (uniqueCategories.length === 0) {
      uniqueCategories.push("");
    }
    
    const videosByCategory = {};
    capabilities.forEach((cap, i) => {
      const categoryKey = cap.title || uniqueCategories[0];
      if (!videosByCategory[categoryKey]) {
        videosByCategory[categoryKey] = [];
      }
      videosByCategory[categoryKey].push({
        index: i,
        video: videos[i],
        slide: slides[i],
        caption: cap.caption
      });
    });

    // Initialize currentVideoInCategory
    uniqueCategories.forEach(cat => {
      this.currentVideoInCategory[cat] = 0;
    });

    // Create tabs
    uniqueCategories.forEach((cat, i) => {
      const tab = document.createElement('div');
      tab.className = i === 0 ? 'tab active' : 'tab';
      tab.textContent = cat;
      tab.dataset.category = cat;
      tabsContainer.appendChild(tab);
    });
    const tabs = container.querySelectorAll('.tab');

    // Helper to update nav state
    const updateNavigationState = category => {
      const currentIndex = this.currentVideoInCategory[category];
      const categoryIndex = uniqueCategories.indexOf(category);
      
      // Clear existing dots
      if (dotNavigation) {
        dotNavigation.innerHTML = '';
        
        // Calculate total position among all videos
        let globalIndex = 0;
        for (let i = 0; i < categoryIndex; i++) {
          globalIndex += videosByCategory[uniqueCategories[i]].length;
        }
        globalIndex += currentIndex;
        
        // Create dots for all videos across all categories
        let totalDotCount = 0;
        for (const cat of uniqueCategories) {
          totalDotCount += videosByCategory[cat].length;
        }
        
        // Create all dots
        for (let i = 0; i < totalDotCount; i++) {
          const dot = document.createElement('div');
          dot.className = i === globalIndex ? 'dot active' : 'dot';
          dotNavigation.appendChild(dot);
        }
      }
    };

    // Switch to a specific video in category
    const switchToVideoInCategory = (category, videoIndex) => {
      if (this.isTransitioning) return;
      this.isTransitioning = true;
    
      const items = videosByCategory[category];
      if (!items || items.length === 0) return;
    
      const index = Math.max(0, Math.min(videoIndex, items.length - 1));
    
      // Fade out current video
      const currentActiveSlide = this.querySelector('.carousel-slide.active');
      if (currentActiveSlide) {
        // Apply fade-out effect
        currentActiveSlide.style.opacity = '0';
        
        // Wait a short time before switching
        setTimeout(() => {
          // Remove active class from all slides
          for (const slide of slides) {
            slide.classList.remove('active');
          }
          
          // Pause & reset all videos in this category except the target one
          for (const obj of items) {
            if (obj.video && obj.video !== items[index].video) {
              obj.video.pause();
              obj.video.currentTime = 0;
            }
          }
          
          // Activate the requested slide
          const { video, slide, caption } = items[index];
          slide.classList.add('active');
          
          // Enforce video sizing before any other operations
          if (video) {
            this.enforceVideoSizing(video);
            
            // Update speed badge visibility based on data.nrt attribute
            const speedBadge = this.shadowRoot.querySelector('.speed-badge');
            if (speedBadge) {
              if (video.dataset.nrt === "true") {
                speedBadge.style.display = 'none';
              } else {
                speedBadge.style.display = 'block';
              }
            }
          }
          
          // Force a repaint to ensure the transition runs
          void slide.offsetWidth;
          
          // Fade in the new slide
          slide.style.opacity = '1';
          
          if (promptText) {
            // Fade out/in prompt text - improved for Safari compatibility
            promptText.style.opacity = '0';
            setTimeout(() => {
              promptText.textContent = caption;
              // Force a reflow before changing opacity to ensure Safari updates properly
              void promptText.offsetWidth;
              promptText.style.opacity = '1';
            }, 150);
          }
          
          this.currentVideoInCategory[category] = index;
          updateNavigationState(category);
          
          if (video) {
            // If it's an MP4, play it directly. Otherwise, use HLS.
            if (video.src.endsWith('.mp4')) {
              this.enforceVideoSizing(video);
              video.play().catch(e => console.error("MP4 play error", e));
            } else {
              // Initialize (or reattach) the dedicated HLS instance for this video
              window.initializeHLS(video, () => {
                // Ensure sizing after HLS initialization too
                this.enforceVideoSizing(video);
              });
              video.play().catch(e => console.error("HLS play error", e));
            }
          }
          
          // Preload next video in same category
          if (index + 1 < items.length) {
            const nextVid = items[index + 1].video;
            if (nextVid) {
              nextVid.preload = 'auto';
              nextVid.load();
            }
          }
          
          // Preload first video of next category (if any)
          const catIndex = uniqueCategories.indexOf(category);
          if (catIndex !== -1 && catIndex + 1 < uniqueCategories.length) {
            const nextCat = uniqueCategories[catIndex + 1];
            const nextCatItems = videosByCategory[nextCat] || [];
            if (nextCatItems.length > 0) {
              const firstVidOfNextCat = nextCatItems[0].video;
              if (firstVidOfNextCat) {
                firstVidOfNextCat.preload = 'auto';
                firstVidOfNextCat.load();
              }
            }
          }
          
          setTimeout(() => {
            this.isTransitioning = false;
          }, 300);
        }, 150);
      } else {
        // If no active slide, just activate the new one without transition
        const { video, slide, caption } = items[index];
        slide.classList.add('active');
        slide.style.opacity = '1';
        
        // Update speed badge visibility
        if (video) {
          const speedBadge = this.shadowRoot.querySelector('.speed-badge');
          if (speedBadge) {
            if (video.dataset.nrt === "true") {
              speedBadge.style.display = 'none';
            } else {
              speedBadge.style.display = 'block';
            }
          }
        }
        
        if (promptText) promptText.textContent = caption;
        this.currentVideoInCategory[category] = index;
        updateNavigationState(category);
        
        if (video) {
          // If it's an MP4, play it directly. Otherwise, use HLS.
          if (video.src.endsWith('.mp4')) {
            video.play().catch(e => console.error("MP4 play error", e));
          } else {
            window.initializeHLS(video, () => {});
            video.play().catch(e => console.error("HLS play error", e));
          }
        }
        
        setTimeout(() => {
          this.isTransitioning = false;
        }, 400);
      }
    };
  // Switch to a given category by index
    const switchToCategory = (categoryIndex, shouldScroll = true) => {
      if (this.isTransitioning) return;
      const category = uniqueCategories[categoryIndex];
      if (!category) return;
      tabs.forEach(tab => tab.classList.remove('active'));
      tabs[categoryIndex].classList.add('active');
      
      // Ensure the selected tab is visible in the scrollable tabs area
      if (shouldScroll) {
        tabs[categoryIndex].scrollIntoView({
          behavior: 'smooth',
          block: 'nearest',
          inline: 'nearest'
        });
      }
      
      const currentIndex = this.currentVideoInCategory[category] || 0;
      switchToVideoInCategory(category, currentIndex);
      this.currentTabIndex = categoryIndex;
    };

    // Tab click handlers
    tabs.forEach((tab, i) => {
      tab.addEventListener('click', () => {
        if (!this.isTransitioning) {
          // Track the category click with Segment analytics
          if (window.analytics && typeof window.analytics.track === 'function') {
            window.analytics.track('Carousel Category Click', {
              category: uniqueCategories[i] || 'default'
            });
          }
          switchToCategory(i);
        }
      });
    });

    // Prev/Next nav handlers
    if (prevButton) {
      prevButton.addEventListener('click', () => {
        if (this.isTransitioning) return;
        const activeCategory = uniqueCategories[this.currentTabIndex];
        const currentIndex = this.currentVideoInCategory[activeCategory];
        if (currentIndex > 0) {
          switchToVideoInCategory(activeCategory, currentIndex - 1);
        } else {
          // Go to the previous category if this is the first video
          const prevCategoryIndex = (this.currentTabIndex - 1 + uniqueCategories.length) % uniqueCategories.length;
          const prevCategory = uniqueCategories[prevCategoryIndex];
          // Set the current video to the last one in that category
          this.currentVideoInCategory[prevCategory] = videosByCategory[prevCategory].length - 1;
          // Switch to that category (which will use the current video we just set)
          switchToCategory(prevCategoryIndex);
        }
      });
    }
    if (nextButton) {
      nextButton.addEventListener('click', () => {
        if (this.isTransitioning) return;
        const activeCategory = uniqueCategories[this.currentTabIndex];
        const currentIndex = this.currentVideoInCategory[activeCategory];
        const total = videosByCategory[activeCategory].length;
        if (currentIndex < total - 1) {
          switchToVideoInCategory(activeCategory, currentIndex + 1);
        } else {
          // Go to the next category if this is the last video
          const nextCategoryIndex = (this.currentTabIndex + 1) % uniqueCategories.length;
          switchToCategory(nextCategoryIndex);
        }
      });
    }


    // Check if tabs overflow and show/hide scroll buttons
    const checkTabsOverflow = () => {
      const hasOverflow = tabsContainer.scrollWidth > tabsContainer.clientWidth;
      const atStart = tabsContainer.scrollLeft <= 10;
      const atEnd = tabsContainer.scrollLeft + tabsContainer.clientWidth >= tabsContainer.scrollWidth - 10;
      
      leftScrollButton.classList.toggle('visible', hasOverflow && !atStart);
      rightScrollButton.classList.toggle('visible', hasOverflow && !atEnd);
    };
    
    // Scroll tabs left/right
    leftScrollButton.addEventListener('click', () => {
      tabsContainer.scrollBy({ left: -150, behavior: 'smooth' });
    });
    
    rightScrollButton.addEventListener('click', () => {
      tabsContainer.scrollBy({ left: 150, behavior: 'smooth' });
    });
    
    // Update button visibility when scrolling
    tabsContainer.addEventListener('scroll', checkTabsOverflow);
    
    // Call initially and on window resize
    checkTabsOverflow();
    window.addEventListener('resize', checkTabsOverflow);

    // Wait 200ms and then switch to the first category and first video
    setTimeout(() => {
      switchToCategory(0, false);
    }, 200);
  }


  // Clean up all HLS on teardown
  cleanupHLS() {
    if (typeof window.cleanupHLS === 'function') {
      window.cleanupHLS();
    }
  }

  // Add a new method to ensure video sizing when switching videos
  enforceVideoSizing(video) {
    if (!video) return;
    video.style.width = '100%';
    video.style.height = '100%';
    video.style.minHeight = '100%';
    video.style.position = 'absolute';
    video.style.top = '0';
    video.style.left = '0';
    video.style.objectFit = 'cover';
    video.style.objectPosition = 'center';
  }
}

customElements.define('video-carousel', VideoCarousel);
