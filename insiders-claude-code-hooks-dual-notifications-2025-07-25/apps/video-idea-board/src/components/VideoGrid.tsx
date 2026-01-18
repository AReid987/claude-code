import React from 'react';
import { VideoCard as VideoCardType } from '../types';
import VideoCard from './VideoCard';

interface VideoGridProps {
  videos: VideoCardType[];
  onVideoClick: (video: VideoCardType) => void;
}

/**
 * Grid container for video cards with responsive layout
 * Displays YouTube video cards in an aesthetic grid formation
 */
const VideoGrid: React.FC<VideoGridProps> = ({ videos, onVideoClick }) => {
  return (
    <div 
      className="video-grid"
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
        gap: '24px',
        padding: '20px 0',
        maxWidth: '1400px',
        margin: '0 auto'
      }}
    >
      {videos.map((video) => (
        <VideoCard 
          key={video.id} 
          video={video} 
          onClick={onVideoClick}
        />
      ))}
    </div>
  );
};

export default VideoGrid;