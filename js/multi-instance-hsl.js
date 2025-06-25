if (!window.hlsUtilitiesInitialized) {
    window.hlsUtilitiesInitialized = true;
    let hlsInstances = [];
    const MAX_RETRY_ATTEMPTS = 3;
  
    // Create one HLS instance per video element and reuse it on re-attachment.
    function initializeHLS(video, onEndedCallback) {
      try {
        if (!video._hls) {
          if (window.Hls && window.Hls.isSupported()) {
            const hls = new Hls({
              capLevelToPlayerSize: true,
              startLevel: -1,
              maxBufferLength: 30,
              maxMaxBufferLength: 60,
              enableWorker: true,
              manifestLoadingTimeOut: 10000,
              manifestLoadingMaxRetry: MAX_RETRY_ATTEMPTS
            });
            video._hls = hls;
            hls.videoElement = video;
            hlsInstances.push(hls);
  
            // Load the stream and attach it to the video element.
            hls.loadSource(video.src);
            hls.attachMedia(video);
  
            hls.on(Hls.Events.MANIFEST_PARSED, () => {
              hls.startLevel = -1; // auto quality selection
            });
  
            // Set up the ended callback
            video.addEventListener('ended', onEndedCallback);
  
            // Error handling (you can extend this as needed)
            let recoveryAttempts = 0;
            hls.on(Hls.Events.ERROR, (event, data) => {
              if (data.fatal) {
                switch (data.type) {
                  case Hls.ErrorTypes.NETWORK_ERROR:
                    console.warn(`HLS network error (attempt ${recoveryAttempts + 1}/${MAX_RETRY_ATTEMPTS})`);
                    if (recoveryAttempts < MAX_RETRY_ATTEMPTS) {
                      recoveryAttempts++;
                      hls.startLoad();
                    } else {
                      console.error('HLS network error - max retries reached');
                      cleanupHLSInstance(hls);
                    }
                    break;
                  case Hls.ErrorTypes.MEDIA_ERROR:
                    console.warn(`HLS media error (attempt ${recoveryAttempts + 1}/${MAX_RETRY_ATTEMPTS})`);
                    if (recoveryAttempts < MAX_RETRY_ATTEMPTS) {
                      recoveryAttempts++;
                      hls.recoverMediaError();
                    } else {
                      console.error('HLS media error - max retries reached');
                      cleanupHLSInstance(hls);
                    }
                    break;
                  default:
                    console.error('Unrecoverable HLS error:', data.type);
                    cleanupHLSInstance(hls);
                    break;
                }
              }
            });
          } else if (video.canPlayType('application/vnd.apple.mpegurl')) {
            // Safari fallback
            video.src = video.src;
            video.load();
            video.addEventListener('ended', onEndedCallback);
          }
        } else {
          // If the HLS instance already exists, simply reattach it to the video element.
          if (window.Hls && window.Hls.isSupported() && video._hls) {
            video._hls.attachMedia(video);
          }
        }
      } catch (error) {
        console.error('Error initializing HLS:', error);
        video._hls = null;
      }
    }
  
    function cleanupHLSInstance(hls) {
      try {
        if (!hls) return;
        const video = hls.videoElement;
        hls.destroy();
        const idx = hlsInstances.indexOf(hls);
        if (idx !== -1) hlsInstances.splice(idx, 1);
        if (video) {
          video._hls = null;
        }
      } catch (err) {
        console.error('Error cleaning up HLS instance:', err);
      }
    }
  
    function cleanupHLS() {
      try {
        const instances = [...hlsInstances];
        instances.forEach(hls => cleanupHLSInstance(hls));
        hlsInstances.length = 0;
      } catch (err) {
        console.error('Error in HLS cleanup:', err);
        hlsInstances = [];
      }
    }
  
  
    window.initializeHLS = initializeHLS;
    window.cleanupHLS = cleanupHLS;
  
    window.addEventListener('beforeunload', cleanupHLS);
    window.addEventListener('pagehide', cleanupHLS);
  
    console.log("HLS utilities initialized and ready.");
  }
  

  
  