/**
 * Type definitions for the Video Idea Board
 * Part of AI Oriented Claude Code Mastery Series
 */

export interface VideoCard {
  /** Unique identifier for the video card */
  id: string;
  
  /** Video title */
  title: string;
  
  /** Short description/tagline */
  description: string;
  
  /** Video emoji/icon */
  emoji: string;
  
  /** Background color */
  color: string;
  
  /** Background gradient */
  gradient: string;
  
  /** Video duration */
  duration?: string;
}