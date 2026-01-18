# Claude Code Tutorial: 8 Powerful Workflows Lesson Plan

**Total Time**: ~5 minutes  
**Audience**: Developers learning Claude Code  
**Goal**: Demonstrate 8 context-powered workflows in a cohesive todo app build

---

## 🎬 Pre-Recording Setup

1. **Start fresh terminal** in project directory
2. **Open browser** to localhost:3000 (app should be running)
3. **Have screenshot ready** of a beautiful theme toggle for Step 3
4. **Clear Claude Code session** to start fresh

---

## 📱 Starting App State: What You'll See

When you open localhost:3000, the "Todo App - Claude Code Demo" looks functional but is completely broken:

### **🏠 Overall Layout**
- Clean, professional design with gray sections
- Three main sections: "Add New Todo", "Your Todos", "Theme Settings"
- Everything looks like it should work, but nothing does

### **➕ Add New Todo Section**
- **Input field**: placeholder says "Add a new todo..."
- **Blue "Add Todo" button**: looks professional and clickable
- **The Bug**: Type "Buy groceries" and click Add → input clears (looks like it worked!) but nothing appears in the todo list below
- **Console**: Opens dev tools and you'll see "Would add todo: Buy groceries" but no actual functionality

### **📝 Your Todos Section**
- **4 hardcoded todos** displayed:
  - ✅ "Learn Next.js" (checked/completed - crossed out)
  - ☐ "Build a demo app" (unchecked)
  - ☐ "Add dark mode" (unchecked)
  - ☐ "Write documentation" (unchecked)
- **The Bugs**: 
  - Try clicking checkboxes → nothing happens (they're readOnly)
  - Todo list never updates no matter what you do with the Add form
  - Static data that never changes

### **🎨 Theme Settings Section**
- **Label**: "Theme:" in normal text
- **Two tiny, ugly buttons**: 
  - 🌙 Dark (microscopic, terrible styling)
  - ☀️ Light (equally tiny and ugly)
- **Disclaimer text**: "(This toggle doesn't work yet)" - admitting it's broken
- **The Bugs**:
  - Buttons are absurdly small (10px font!)
  - Clicking does nothing except console.log
  - No theme switching functionality at all
  - No dark mode exists

### **🎭 User Experience**
- **First impression**: "This looks like a real todo app"
- **30 seconds later**: "Wait... nothing works!"
- **Perfect frustration level**: Obvious what should happen, but nothing does
- **Compelling demo setup**: Clear problems that desperately need fixing

---

## 📝 Step-by-Step Tutorial

### **Step 1: Project Onboarding** ⏱️ 30 seconds

**🎯 Goal**: Show Claude Code can analyze any codebase instantly

**📜 Script**: 
> "Let's start with a broken todo app. Watch Claude Code analyze this entire codebase in seconds."

**⌨️ Command**: 
```
/init
```
**📋 Planning Mode**: Not required - this is a command

**🎥 Demo Actions**:
1. Run `/init` command
2. Wait for Claude to analyze codebase
3. Open `CLAUDE.md` file that gets created
4. Point out: "Look - it identified our tech stack, file structure, and even the broken components"

**✅ Expected Outcome**: 
- `CLAUDE.md` file appears
- Contains project overview, tech stack, and component analysis
- Sets foundation for all future interactions

---

### **Step 2: Memory & Rules** ⏱️ 45 seconds

**🎯 Goal**: Show how to give Claude persistent coding standards

**📜 Script**: 
> "Now let's give Claude some coding standards that will persist across our entire session."

**⌨️ Prompt**: 
```
# You MUST follow the guidelines in .cursor/rules/typescript-best-practices.mdc for all TypeScript code.
```
**📋 Planning Mode**: Not required - direct instruction

**🎥 Demo Actions**:
1. Use `#` key to start the prompt
2. Type the rule about TypeScript best practices
3. Show that `CLAUDE.md` gets instantly updated
4. Open `CLAUDE.md` to show the new rule was added

**✅ Expected Outcome**: 
- `CLAUDE.md` file updates automatically
- Shows new TypeScript rule added to project guidelines
- Claude will now follow these standards for all code

---

### **Step 3: Vision** ⏱️ 60 seconds

**🎯 Goal**: Demonstrate Claude's visual capabilities

**📜 Script**: 
> "Our theme toggle looks terrible. Let me show Claude what I want it to look like."

**🎥 Demo Actions**:
1. Show current ugly theme toggle in browser
2. Paste screenshot of beautiful toggle switch
3. Give prompt with file reference

**⌨️ Prompt**: 
```
Fix the styling of the @/components/ThemeToggle.tsx component to look like this beautiful toggle switch.
```
**📋 Planning Mode**: Not required - direct implementation

**✅ Expected Outcome**: 
- `ThemeToggle.tsx` file gets updated with beautiful styling
- Refresh browser to show improved visual design
- Toggle still doesn't work functionally (that's next step)

---

### **Step 4: Scoped Context** ⏱️ 45 seconds

**🎯 Goal**: Show targeted file fixing with surgical precision

**📜 Script**: 
> "Let's test our Add Todo form. Type something and click Add... nothing happens! Watch Claude fix this with surgical precision by targeting just that one file."

**🎥 Demo Actions**:
1. Try adding a todo in browser - show it doesn't work
2. Use scoped file reference in prompt

**⌨️ Prompt**: 
```
The Add Todo form isn't working. Fix it by targeting @src/components/AddTodo.tsx.
```
**📋 Planning Mode**: Not required - direct scoped fix

**✅ Expected Outcome**: 
- Only `AddTodo.tsx` file gets modified
- Form now connects to todo state
- Can add new todos to the list
- New todos appear immediately

---

### **Step 5: Plan Mode** ⏱️ 90 seconds

**🎯 Goal**: Show planning workflow for complex multi-step features

**📜 Script**: 
> "That was a simple fix. Now let's see something more impressive - making this theme toggle actually work. This requires multiple files and complex architecture. I'll use Plan Mode to let Claude think through the entire implementation."

**⌨️ Prompt**: 
```
Use Plan Mode to make this theme toggle functional and add it to the app.
```
**📋 Planning Mode**: REQUIRED - Press `Shift+Tab` to enter Plan Mode

**🎥 Demo Actions**:
1. Type the prompt
2. **Press `Shift+Tab` to enter Plan Mode** 
3. Let Claude create comprehensive plan
4. **Press `Shift+Tab` again to execute the plan**
5. Show theme toggle now works in browser
6. Switch between light/dark mode
7. Point out: "Notice how Claude created multiple files and complex architecture"

**✅ Expected Outcome**: 
- Multiple files created: theme context, provider, hooks
- Theme toggle now functional in browser
- Dark/light mode switching works
- Complex implementation completed automatically

---

### **Step 6: TODOs Workflow** ⏱️ 75 seconds

**🎯 Goal**: Show systematic task management

**📜 Script**: 
> "Now I need to make the todo checkboxes work and apply dark theme everywhere. Let me use Claude's TODO system to track this systematically."

**⌨️ Prompt**: 
```
Use a todo list to make the TodoList interactive and apply dark theme to all components.
```
**📋 Planning Mode**: Not required - Claude will create TODO workflow automatically

**🎥 Demo Actions**:
1. Watch Claude create todo list
2. See Claude work through each task systematically
3. Test checkbox functionality in browser
4. Switch to dark mode - show all components respond
5. Point out how Claude updates todo status as it works

**✅ Expected Outcome**: 
- Todo checkboxes now work
- All components respond to theme changes
- Todo workflow visible in Claude's responses
- Dark mode looks polished across entire app

---

### **Step 7: Custom Command** ⏱️ 60 seconds

**🎯 Goal**: Show custom command workflow

**📜 Script**: 
> "This todo workflow is useful. Let me save it to a file using our custom sync command."

**⌨️ Prompt**: 
```
This is a useful plan. Run /sync-todos to keep our task list synced with an external file. Now run it. Then, mark a task 'completed' and run it again.
```
**📋 Planning Mode**: Not required - command execution

**🎥 Demo Actions**:
1. Claude runs `/sync-todos` command
2. Show `todos.md` file appears in project
3. Mark a task as completed in Claude
4. Run `/sync-todos` again
5. Open `todos.md` to show updated status

**✅ Expected Outcome**: 
- `todos.md` file created in project root
- File contains formatted todo list
- File updates when todo statuses change
- Demonstrates custom command workflow

---

### **Step 8: Extended Thinking - Polish & Animations** ⏱️ 75 seconds

**🎯 Goal**: Show extended thinking for professional UX polish

**📜 Script**: 
> "The app works perfectly, but let's make it feel professional. I'll use extended thinking to add polish and smooth animations."

**⌨️ Prompt**: 
```
Think through how to make this todo app feel polished and professional. Add smooth animations, micro-interactions, and visual feedback that makes it delightful to use.
```
**📋 Planning Mode**: Not required - "Think through" triggers extended thinking automatically

**🎥 Demo Actions**:
1. Watch Claude analyze UX improvement opportunities
2. See comprehensive polish strategy (extended thinking creates detailed todo list)
3. Run `/sync-todos` to save the polish roadmap to file
4. Claude implements smooth animations and transitions
5. Test adding/removing todos - see smooth animations
6. Show hover effects and micro-interactions
7. Open `todos.md` to show the detailed polish plan was saved

**✅ Expected Outcome**: 
- Detailed UX analysis from Claude (extended thinking)
- Comprehensive polish roadmap saved to `todos.md`
- Smooth animations when adding/completing todos
- Hover effects and micro-interactions
- Professional loading states and feedback
- App feels polished and delightful

**💡 Mention**: "This is extended thinking - for even more complex architectural problems, Claude has 'ultra thinking' capabilities for the most challenging decisions."

---

## 🎬 Closing (30 seconds)

**📜 Script**: 
> "In 5 minutes, we went from broken components to a production-ready todo app. Claude Code's context-powered workflows let you build faster and smarter. Try these techniques in your own projects!"

**🎥 Demo Actions**:
1. Quick recap of final app functionality
2. Show beautiful theme switching
3. Demonstrate working todo features
4. Point to documentation/resources

---

## 📊 Tutorial Summary

| Step | Workflow | Time | Key Takeaway |
|------|----------|------|--------------|
| 1 | Project Onboarding | 30s | Instant codebase analysis |
| 2 | Memory & Rules | 45s | Persistent coding standards |
| 3 | Vision | 60s | Fix styling with screenshots |
| 4 | Scoped Context | 45s | Targeted file fixes |
| 5 | Plan Mode | 90s | Complex feature planning |
| 6 | TODOs | 75s | Systematic task management |
| 7 | Custom Command | 60s | Workflow automation |
| 8 | Extended Thinking | 75s | Polish & animations |

**Total**: ~5 minutes of pure value

---

## 🎯 Pro Tips for Recording

1. **Practice the flow** - each step builds on the previous
2. **Have screenshot ready** for Step 3
3. **Keep browser and editor side-by-side** for easy switching
4. **Emphasize the "broken → working" moments** for visual impact
5. **Point out the speed** - complex features built in seconds
6. **Show, don't just tell** - interact with the app after each step

---

## 🔧 Troubleshooting

**If something doesn't work**:
- Reset to clean git state: `git reset --hard HEAD`
- Restart dev server: `npm run dev`
- Clear Claude Code session and start over
- Each step should work independently