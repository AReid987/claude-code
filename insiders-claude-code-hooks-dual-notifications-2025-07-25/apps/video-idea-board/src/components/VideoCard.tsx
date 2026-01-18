import React from 'react';
import { VideoCard as VideoCardType } from '../types';

interface VideoCardProps {
  video: VideoCardType;
  onClick: (video: VideoCardType) => void;
}

/**
 * Individual video card component with gradient styling
 * Displays YouTube video information in an elegant card format
 */
const VideoCard: React.FC<VideoCardProps> = ({ video, onClick }) => {
  return (
    <div 
      className="video-card"
      style={{
        background: video.gradient,
        borderRadius: '16px',
        padding: '24px',
        textAlign: 'center',
        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
        transition: 'transform 0.2s ease, box-shadow 0.2s ease',
        cursor: 'pointer',
        minHeight: '140px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        color: 'white',
        fontWeight: 'bold'
      }}
      onClick={() => onClick(video)}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translateY(-4px)';
        e.currentTarget.style.boxShadow = '0 12px 48px rgba(0, 0, 0, 0.15)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'translateY(0)';
        e.currentTarget.style.boxShadow = '0 8px 32px rgba(0, 0, 0, 0.1)';
      }}
    >
      <div style={{ fontSize: '2.5rem', marginBottom: '12px' }}>
        {video.emoji}
      </div>
      <h3 style={{ 
        margin: '0 0 8px 0', 
        fontSize: '1.2rem', 
        textShadow: '0 2px 4px rgba(0, 0, 0, 0.3)',
        lineHeight: '1.3'
      }}>
        {video.title}
      </h3>
      <p style={{ 
        margin: '0', 
        fontSize: '0.9rem', 
        opacity: 0.9,
        textShadow: '0 1px 2px rgba(0, 0, 0, 0.3)',
        lineHeight: '1.4'
      }}>
        {video.description}
      </p>
      {video.duration && (
        <div style={{
          marginTop: '8px',
          fontSize: '0.8rem',
          opacity: 0.8,
          background: 'rgba(255, 255, 255, 0.2)',
          padding: '4px 8px',
          borderRadius: '12px'
        }}>
          {video.duration}
        </div>
      )}
    </div>
  );
};

export default VideoCard;