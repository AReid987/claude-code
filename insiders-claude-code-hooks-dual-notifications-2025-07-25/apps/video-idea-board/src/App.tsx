import React from 'react';
import { VideoCard as VideoCardType } from './types';
import VideoGrid from './components/VideoGrid';
import { videosData } from './data/videos';

/**
 * Main Video Idea Board Application
 * Part of AI Oriented Claude Code Mastery Series - Episode 3
 */
const App: React.FC = () => {
  // Handle video card clicks (modal system to be added)
  const handleVideoClick = (video: VideoCardType) => {
    console.log('Video clicked:', video.title);
    // Modal will be implemented here during demo
  };

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
    }}>
      {/* Branded Header */}
      <header style={{
        background: 'rgba(255, 255, 255, 0.1)',
        backdropFilter: 'blur(10px)',
        padding: '20px',
        textAlign: 'center',
        color: 'white',
        borderBottom: '1px solid rgba(255, 255, 255, 0.2)'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h1 style={{ 
            margin: '0 0 8px 0', 
            fontSize: '2.5rem',
            fontWeight: 'bold',
            textShadow: '0 2px 4px rgba(0, 0, 0, 0.3)'
          }}>
            📺 Video Idea Board
          </h1>
          <p style={{ 
            margin: '0 0 16px 0', 
            fontSize: '1.1rem',
            opacity: 0.9
          }}>
            Check out my channel @AIOriented on YouTube for more great Claude Code tutorials
          </p>
          <div style={{
            display: 'flex',
            gap: '12px',
            justifyContent: 'center',
            alignItems: 'center',
            flexWrap: 'wrap'
          }}>
            <a
              href="https://x.com/chongdashu"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                background: '#000000',
                color: 'white',
                padding: '8px 16px',
                borderRadius: '20px',
                fontSize: '0.9rem',
                fontWeight: '500',
                textDecoration: 'none',
                transition: 'transform 0.2s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              <span style={{ fontSize: '1.1rem' }}>𝕏</span>
              x.com/chongdashu
            </a>
            <a
              href="https://youtube.com/@AIOriented"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                background: '#FF0000',
                color: 'white',
                padding: '8px 16px',
                borderRadius: '20px',
                fontSize: '0.9rem',
                fontWeight: '500',
                textDecoration: 'none',
                transition: 'transform 0.2s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              <span style={{ fontSize: '1.1rem' }}>📺</span>
              youtube.com/@AIOriented
            </a>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main style={{ padding: '40px 20px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ 
            textAlign: 'center', 
            marginBottom: '40px',
            color: 'white'
          }}>
            <h2 style={{ 
              fontSize: '1.8rem', 
              margin: '0 0 12px 0',
              textShadow: '0 2px 4px rgba(0, 0, 0, 0.3)'
            }}>
              Claude Code
            </h2>
            <p style={{ 
              fontSize: '1.1rem', 
              opacity: 0.9,
              margin: '0'
            }}>
              Level up your Claude Code experience with these tutorials!
            </p>
          </div>
          
          <VideoGrid videos={videosData} onVideoClick={handleVideoClick} />
        </div>
      </main>

      {/* Branded Footer */}
      <footer style={{
        background: 'rgba(0, 0, 0, 0.2)',
        color: 'white',
        textAlign: 'center',
        padding: '20px',
        marginTop: '40px'
      }}>
        <p style={{ 
          margin: '0 0 8px 0',
          fontSize: '1rem'
        }}>
          Built live with Claude Code hooks ⚡
        </p>
        <span style={{ 
          fontSize: '0.9rem',
          opacity: 0.8
        }}>
          youtube.com/@aioriented
        </span>
      </footer>
    </div>
  );
};

export default App;