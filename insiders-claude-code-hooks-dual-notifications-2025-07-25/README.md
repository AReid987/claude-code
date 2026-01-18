# Claude Code Dual Notification System

**Never wonder what Claude Code is doing again.** This repository contains a sophisticated dual notification system that provides real-time audio and mobile feedback for every Claude Code operation.

## 🙏 Thank You

Thank you for downloading or purchasing this Claude Code dual notification system! Your support means the world to me and goes a long way toward helping me create more high-quality content and tools for the developer community. Whether you're using this to enhance your coding workflow or learning from the implementation, I hope it serves you well.

If this system has been helpful, consider sharing news about it with fellow developers or leaving feedback. Every bit of support helps fuel the creation of more innovative tools and tutorials.

## 🚀 What You Get

### 🔊 **Voice Notification System**

- **Alfred Voice Assistant**: 30+ specialized sounds for different operations
- **Context-Aware Intelligence**: Different sounds for Python, JavaScript, Git commands, and more
- **Graceful Fallbacks**: System continues working even if audio files are missing
- **Customizable**: Add your own voice characters (Jarvis, etc.)

### 📱 **Push Notification System**

- **Mobile/Desktop Alerts**: Get notified via ntfy.sh on any device
- **Remote Monitoring**: Stay updated when away from your computer
- **Priority Levels**: Different urgency for different event types
- **100+ Message Variations**: Context-aware notifications that make sense

### 🧠 **Context-Aware Intelligence**

- **File Type Recognition**: "Reading Python file" vs "Reading Markdown file"
- **Git Command Detection**: "Checking repository status" vs "Committing changes"
- **Tool-Specific Feedback**: Different responses for Read, Edit, Grep, Bash tools
- **Error Handling**: Special audio cues for failed operations

## ⚡ Quick Start

### 1. Install Dependencies

```bash
# Install uv package manager from Astral (for Python dependencies)
curl -LsSf https://astral.sh/uv/install.sh | sh
# Or on Windows: powershell -ExecutionPolicy ByPass -c "irm https://astral.sh/uv/install.ps1 | iex"
# Or with pip: pip install uv

# Test the voice system
echo '{"hook_event_name": "Stop"}' | uv run .claude/hooks/voice_notifications/handler.py --voice=alfred
```

### 2. Configure Claude Code

Copy `.claude/settings.json` to your Claude Code configuration:

```json
{
  "hooks": {
    "Stop": [
      {
        "hooks": [
          {
            "command": "uv run .claude/hooks/voice_notifications/handler.py --voice=alfred"
          }
        ]
      }
    ],
    "PreToolUse": [
      {
        "hooks": [
          {
            "command": "uv run .claude/hooks/voice_notifications/handler.py --voice=alfred"
          }
        ]
      }
    ],
    "Notification": [
      {
        "hooks": [
          {
            "command": "uv run .claude/hooks/voice_notifications/handler.py --voice=alfred"
          }
        ]
      }
    ]
  }
}
```

### 3. Set Up Push Notifications (Optional)

1. Download ntfy.sh app on your mobile device
2. Subscribe to a custom topic (e.g., `claude-code-yourname-12345`)
3. Update `.claude/settings.json` to include push notifications
4. Test: `echo '{"hook_event_name": "Stop"}' | uv run .claude/hooks/push_notifications/handler.py --topic=your-topic`

### 4. Try the Demo App

```bash
cd apps/video-idea-board
npm install
npm run dev
```

Then ask Claude Code to enhance the app and watch the notifications work!

## 📚 Complete Tutorial

See [`lesson.md`](./lesson.md) for the complete 22-minute tutorial with:

- Step-by-step setup instructions
- Architecture explanations
- Advanced customization options
- Troubleshooting guide
- Real-world workflow demonstrations

## 🛠️ System Architecture

```
.claude/hooks/
├── voice_notifications/           # Alfred voice system
│   ├── handler.py                # Main notification handler
│   ├── sound_mapping.json        # 200+ event mappings
│   └── sounds/alfred/            # 30+ specialized sound files
├── push_notifications/           # Mobile notification system
│   ├── handler.py                # Push notification handler
│   └── notification_mapping.json # Message variations
└── common/                       # Shared utilities
    ├── enums.py                  # Event type definitions
    └── utils.py                  # Common functions
```

## 🎯 Key Features

✅ **Intelligent Event Mappings** - Context-aware responses for every situation
✅ **Dual Coverage** - Audio when at computer, mobile when away  
✅ **Works with Any Claude Code Setup** - No special requirements  
✅ **Graceful Error Recovery** - System keeps working even with issues

## 🔧 Technologies Used

- **Claude Code**: AI coding assistant with hook system
- **Astral uv**: Fast Python package manager for script execution
- **Python 3.13+**: Handler scripts with uv package management
- **pygame**: Cross-platform audio playback
- **ntfy.sh**: Free push notification service

## 📱 Demo Application

The included `video-idea-board` app demonstrates the system in action:

- React + TypeScript application
- Shows context-aware notifications for different file types
- Perfect for testing the dual notification system
- Real example of Claude Code workflow automation

## 📄 License

MIT License - Use this system in your own projects, commercial or personal. This software is provided "as is" without warranty of any kind. No support is provided. Use at your own risk.

---

**Built with Claude Code** ⚡ _Stop wondering, start knowing._
