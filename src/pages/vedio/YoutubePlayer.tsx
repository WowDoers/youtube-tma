import React, { useEffect, useRef } from 'react';

interface YouTubePlayerProps {
  videoId: string;
}

declare global {
  interface Window {
    onYouTubeIframeAPIReady?: () => void;
  }
}

const YouTubePlayer: React.FC<YouTubePlayerProps> = ({ videoId }) => {
  const playerRef = useRef<YT.Player | null>(null);

  useEffect(() => {
    const tag = document.createElement('script');
    tag.src = 'https://www.youtube.com/iframe_api';
    const firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode?.insertBefore(tag, firstScriptTag);

    const onYouTubeIframeAPIReady = () => {
      if (playerRef.current) return;

      playerRef.current = new YT.Player('youtube-player', {
        height: 'auto',
        width: 'auto',
        videoId,
        playerVars: {
          'playsinline': 1
        },
        events: {
          'onReady': onPlayerReady,
          'onStateChange': onPlayerStateChange
        }
      });
    };

    const onPlayerReady = (event: YT.PlayerEvent) => {
      // 播放器准备就绪时的处理逻辑
      console.log(`YouTube player ready: ${event.target}`);
      // 记录当前 vedio id
      localStorage.setItem('currVedio', videoId)
    //   setTimeout(() => {
    //     event.target.playVideo()
    //   }, 2000);
    };

    const onPlayerStateChange = (event: YT.PlayerEvent) => {
      // 播放状态改变时的处理逻辑
      console.log(`YouTube player state changed: ${event.target}`);
    };

    window.onYouTubeIframeAPIReady = onYouTubeIframeAPIReady;

    return () => {
        if (playerRef.current) {
            playerRef.current.destroy();
        }
    };
  }, [videoId]);

  return (
    <div id="youtube-player" />
  );
};

export default YouTubePlayer;