import { VideoCard } from '../types';

/**
 * Complete video data for modal system demo
 * This data will be integrated during Stage 2 of the demo
 * Contains real information from docs/youtube/ files
 */

// Complete video data structure for Stage 2 demo
export interface VideoDetails {
  fullDescription: string;
  keyFeatures: string[];
  duration: string;
  youtubeUrl: string;
  builderPackUrl: string;
  chapters: string[];
  tags: string[];
  technologies?: string[];
}

export interface CompleteVideoCard extends Omit<VideoCard, 'duration'> {
  gradient: string;
  details: VideoDetails;
}

export const completeVideosData: CompleteVideoCard[] = [
  {
    id: '1',
    title: '8 Claude Code Hacks',
    description: 'Professional workflows that 10x your development',
    emoji: '🚀',
    color: '#8E8E93',
    gradient: 'linear-gradient(135deg, #8E8E93, #B8B8B8)',
    details: {
      fullDescription: 'I was using Claude Code WRONG until I learned these 8 hacks. In this tutorial, I reveal 8 professional Claude Code workflows that will 10x how you build applications. Watch me transform a completely broken todo app (with non-functional checkboxes and a broken theme toggle) into fully functioning version with a polished day/night theme switcher using advanced techniques including context engineering, plan mode, todo lists and custom commands.',
      keyFeatures: [
        'Project onboarding with /init command',
        'Memory & rules for persistent coding standards', 
        'Vision-based styling fixes with screenshot prompting',
        'Scoped context targeting for surgical code fixes (context engineering)',
        'Plan Mode for complex multi-file implementations',
        'TODO workflows for systematic development',
        'Custom command automation for workflow efficiency',
        'Extended thinking for professional polish and optimization'
      ],
      duration: '~18 minutes',
      youtubeUrl: 'https://youtube.com/@AIOriented',
      builderPackUrl: 'https://gum.co/u/pj52je5n',
      chapters: [
        '00:33 The app we\'ll be fixing',
        '01:26 Insiders Club',
        '02:20 Project Setup', 
        '03:23 Hack 1: /init',
        '04:50 Hack 2: # memories',
        '06:25 Hack 3: Insert images',
        '07:47 Hack 4: @ to isolate file context',
        '10:14 Hack 5: Plan Mode',
        '13:10 Hack 6: Extended Thinking',
        '14:36 Hack 7: Todo Lists',
        '15:58 Hack 8: Custom Slash Commands',
        '17:34 Completing the app'
      ],
      technologies: ['Claude Code', 'Next.js 15', 'React', 'TypeScript', 'Tailwind CSS'],
      tags: ['Context Engineering', 'Claude Code', 'AI Coding', 'Web Development', 'Next.js', 'Productivity']
    }
  },
  {
    id: '2', 
    title: 'Context Engineering Git Automations',
    description: 'FAST 5-minute guide to automated commit messages',
    emoji: '⚡',
    color: '#5856D6',
    gradient: 'linear-gradient(135deg, #5856D6, #7B6EDF)',
    details: {
      fullDescription: 'Want to see Context Engineering in action? In this quick 5-minute tutorial, I show you how to combine Claude Code, Cursor, and slash commands to automate your Git commits using your own repository rules. We\'ll use context engineering to guide Claude Code in reading your Cursor rules, scanning local Git state, and writing perfect commit messages.',
      keyFeatures: [
        'Reading your Cursor rules for Git best practices',
        'Scanning your local Git state (status, diff, history)', 
        'Writing the perfect commit message automatically',
        'Executing commits with proper formatting',
        'Context engineering techniques for precision',
        'Custom slash command integration',
        'IDE integration with Cursor rules',
        'Bash command execution with Claude (! syntax)'
      ],
      duration: '~5 minutes',
      youtubeUrl: 'https://youtube.com/@AIOriented',
      builderPackUrl: 'https://gum.co/u/bmx8gm6r',
      chapters: [
        '00:00 Intro: Claude Code + Context Engineering',
        '00:25 What is Context Engineering?',
        '00:45 Claude Code\'s New Slash Command Feature',
        '01:12 The Problem: Writing Good Git Commit Messages',
        '01:46 Why IDE-Generated Commits Fall Short',
        '02:10 Automating Commits with Claude Code + Cursor Rules',
        '02:40 Claude Generates a Clean, Formatted Commit',
        '03:00 Step-by-Step: Setting Up Git Best Practices',
        '03:22 Creating a Custom Slash Command',
        '03:50 Bash Command Execution with Claude (! syntax)',
        '04:20 Summary: Cleaner, Smarter Git Commits with Claude'
      ],
      technologies: ['Claude Code', 'Cursor IDE', 'Git', 'Bash'],
      tags: ['Context Engineering', 'Cursor IDE', 'LLM Workflows', 'Claude AI', 'Dev Tools', 'AI Programming']
    }
  },
  {
    id: '3',
    title: 'Claude Code Router (Kimi K2)',
    description: 'Secret workflow for 90% cost savings + blazing speed',
    emoji: '🔥', 
    color: '#007AFF',
    gradient: 'linear-gradient(135deg, #007AFF, #4A9EFF)',
    details: {
      fullDescription: 'Kimi K2 by Moonshot AI is delivering massive cost savings while maintaining Claude-level quality. But here\'s the real secret - this isn\'t just about one model. I\'m revealing the exact framework that lets you access hundreds of AI models through Claude Code\'s interface. This method saves devs up to 90% on costs while giving them BLAZING inference speeds.',
      keyFeatures: [
        'Kimi K2 integration for massive cost savings',
        'Access hundreds of AI models through Claude Code interface',
        'Up to 90% cost reduction vs direct Claude usage',
        'Blazing fast inference speeds (3x faster with Groq)',
        '4 proven methods from simple exports to advanced routing',
        'Complete API setup walkthroughs (Moonshot, OpenRouter, Groq)',
        'Live speed comparisons and benchmarks',
        'Claude Router configurations and setup'
      ],
      duration: '~21 minutes',
      youtubeUrl: 'https://youtube.com/@AIOriented', 
      builderPackUrl: 'https://gum.co/u/kpgffawz',
      chapters: [
        '00:00 Intro',
        '00:09 Kimi K-2',
        '00:36 Claude Code with Any Model',
        '01:28 Method 1: Overriding environment variables',  
        '04:59 Pro-Tip: creating a kimi() command',
        '05:57 Problem: API speed/rate limiting',
        '06:21 Solution: Claude Code Router',
        '11:15 Configuring Claude Code Router',
        '12:14 Method 3: OpenRouter',
        '16:51 Fun Tip: Claude Code with Gemini 2.5 Pro',
        '18:04 Method 4: Groq in Claude Code',
        '20:56 Summary'
      ],
      technologies: ['Claude Code', 'Kimi K2', 'OpenRouter', 'Groq', 'Moonshot AI', 'Claude Router'],
      tags: ['Claude Code', 'Kimi K2', 'OpenSource AI', 'Claude Router', 'AI Models', 'Cost Optimization']
    }
  },
  {
    id: '4',
    title: 'Dual Notification System', 
    description: 'AI assistant that TELLS you what Claude Code is doing',
    emoji: '🎯',
    color: '#AF52DE',
    gradient: 'linear-gradient(135deg, #AF52DE, #C77EE8)',
    details: {
      fullDescription: 'Stop switching tabs wondering what Claude Code is doing! I built a sophisticated dual notification system that provides real-time audio and mobile feedback for every Claude operation. This isn\'t just playing random sounds - it\'s a 200+ event mapping system with context-aware intelligence that knows exactly what Claude is working on.',
      keyFeatures: [
        'Voice notifications with Alfred\'s 30+ specialized sounds',
        'Push notifications via ntfy.sh for remote monitoring',
        '200+ intelligent event mappings with file type recognition', 
        'Context-aware responses for Python, JavaScript, Git, and more',
        'Graceful error handling with appropriate audio cues',
        'Completely customizable and extensible system',
        'Works with any Claude Code setup',
        'Module-specific logging for debugging'
      ],
      duration: '~20 minutes',
      youtubeUrl: 'https://youtube.com/@AIOriented',
      builderPackUrl: 'https://github.com/chongdashu/claude-code-mastery',
      chapters: [
        '00:00 The Problem: Not Knowing What Claude is Doing',
        '01:30 Dual Notification Architecture Overview',
        '03:30 Setting Up Voice Notifications (Alfred)',
        '06:30 Adding Push Notifications (ntfy.sh)',
        '09:30 Context-Aware Intelligence Demo',
        '13:30 Advanced Customization & Configuration',
        '16:30 Real-World Workflow Demo',
        '18:00 Troubleshooting & Pro Tips',
        '19:30 Installation Guide & Resources'
      ],
      technologies: ['Claude Code', 'Python', 'ntfy.sh', 'Alfred', 'JSON', 'Hook System'],
      tags: ['Notifications', 'Alfred', 'Push Notifications', 'Claude Code', 'Workflow Automation']
    }
  }
];