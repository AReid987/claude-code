# Claude Code Demo App: 8 Powerful Workflows

A Next.js todo app designed to showcase **8 context-powered Claude Code workflows** in under 5 minutes. Perfect for tutorials, demos, and learning how to build faster with AI-powered development.

This repository the accompanies the [YouTube Video](https://www.youtube.com/watch?v=e4h7Lw-s1f).

## 🔐 Exclusive Access - AI Oriented Insiders Club

This repository and its complete source code, including all custom commands and lesson materials, are **exclusively available to members of the AI Oriented Insiders Club**.

### 🎁 What's Included for Insiders:

- **Complete Source Code** - Full project with all 8 workflow implementations
- **Custom Commands** - Including the powerful `/sync-todos` command shown in the tutorial
- **Lesson Plan** - Detailed step-by-step tutorial script used in the video
- **Behind-the-Scenes Content** - Early access to tutorials before they go public
- **Private Repository Access** - Full access to this and other exclusive projects
- **Video Previews** - See what's coming before it's released publicly

### 💯 Join for Free

The AI Oriented Insiders Club is **completely free to join**. Get access to:

- This complete Claude Code demo repository
- Custom commands and prompts used in the tutorial
- Agent Development Kit series materials
- Early access to all future content
- Private community discussions

**[Join the AI Oriented Insiders Club →](https://insiders.aioriented.dev)**

_As mentioned in the tutorial video, all materials including the custom `/sync-todos` command are available exclusively to club members._

## ☕ Support Me

If you find this tutorial series and codebase helpful in your AI agent development journey, consider buying me a coffee! Your support helps me create more educational content on AI, Claude Code and agentic workflows.

<a href="https://buymeacoffee.com/aioriented" target="_blank">
  <img src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png" alt="Buy Me A Coffee" style="height: 60px !important;width: 217px !important;" >
</a>

## 🎯 What This Demo Covers

This tutorial demonstrates 8 powerful workflows that tell a cohesive story: from project onboarding to building, fixing, and productionizing a complete todo app.

| Workflow                  | Feature                     | Demo Purpose                                 |
| ------------------------- | --------------------------- | -------------------------------------------- |
| **1. Project Onboarding** | `/init` command             | Instant codebase analysis and setup          |
| **2. Memory & Rules**     | Persistent coding standards | TypeScript best practices across session     |
| **3. Vision**             | Screenshot-based styling    | Fix ugly components with visual references   |
| **4. Scoped Context**     | Targeted file fixes         | Surgical precision edits with `@file` syntax |
| **5. Plan Mode**          | Complex feature planning    | Multi-file architecture with `Shift+Tab`     |
| **6. TODOs Workflow**     | Systematic task management  | Track implementation progress                |
| **7. Custom Commands**    | `/sync-todos` automation    | Workflow automation and file syncing         |
| **8. Extended Thinking**  | UX polish & animations      | Professional micro-interactions              |

## 🚀 Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the intentionally broken todo app.

## 🎭 What You'll See (Starting State)

The app **looks** functional but is completely broken:

### ➕ Add Todo Form

- Input field and button look professional
- **Bug**: Form clears but doesn't add todos to list
- Console shows "Would add todo: ..." but no functionality

### 📝 Todo List

- 4 hardcoded todos with checkboxes
- **Bug**: Checkboxes are `readOnly` - clicking does nothing
- Static data that never updates

### 🎨 Theme Toggle

- Tiny, ugly buttons with terrible styling
- **Bug**: Buttons do nothing except `console.log`
- No theme system exists (no context, provider, or dark mode)

## 📈 What You'll Build

By the end of the 8-step tutorial:

✅ **Working Add Todo Form** - Actually adds todos to the list  
✅ **Interactive Todo List** - Checkboxes work, themed styling  
✅ **Beautiful Theme System** - Complete dark/light mode switching  
✅ **Development Workflow** - CLAUDE.md, custom commands, TypeScript best practices  
✅ **Professional Polish** - Smooth animations and micro-interactions

## 🛠️ Tech Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Architecture**: Component-based with hooks
- **Structure**: `/src` directory with `@/` aliases

## 🎬 Tutorial Flow

Each step builds on the previous one:

1. **Analyze** → `/init` creates `CLAUDE.md` with project overview
2. **Setup Rules** → Add TypeScript standards that persist
3. **Fix Styling** → Use screenshot to make toggle beautiful
4. **Fix Form** → Target specific file to make Add Todo work
5. **Build Theme** → Plan Mode creates complete theme system
6. **Add Interactivity** → Make checkboxes work with TODO tracking
7. **Automate** → Custom `/sync-todos` command saves progress
8. **Polish** → Extended thinking adds animations and UX improvements

## 💡 Key Learning Points

- **Context Engineering**: How to give Claude the right context for better results
- **Incremental Building**: Small, targeted changes that build into complex features
- **Visual Development**: Using screenshots and file references for precision
- **Systematic Workflows**: TODOs and planning for complex implementations
- **Professional Polish**: Extended thinking for production-ready UX

## 🔧 Development Commands

- `npm run dev` - Start development server on localhost:3000
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint checks

## 📚 Files to Explore

- `src/components/AddTodo.tsx` - Form component (initially broken)
- `src/components/TodoList.tsx` - Static todo list (initially non-interactive)
- `src/components/ThemeToggle.tsx` - Theme toggle (initially ugly/broken)
- `src/components/Counter.tsx` - Working counter component
- `CLAUDE.md` - Project guidelines (created by `/init`)
- `PRD.md` - Product requirements and tutorial details
- `lesson.md` - Complete step-by-step tutorial script

## 🎯 Perfect for Learning

This demo is ideal for:

- Understanding Claude Code workflows
- Learning context-powered development
- Seeing AI-assisted coding in action
- Building production-ready features quickly
- Mastering systematic development approaches

**Total Tutorial Time**: ~5 minutes of pure value
