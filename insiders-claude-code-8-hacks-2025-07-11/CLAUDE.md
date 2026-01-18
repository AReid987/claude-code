# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Next.js 15 demonstration app designed to showcase Claude Code workflows. It contains intentionally broken components and incomplete features to demonstrate various development workflows and context-powered improvements.

## Development Commands

- `npm run dev` - Start development server on localhost:3000
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint checks

## Architecture

**Framework**: Next.js 15 with App Router
**Language**: TypeScript
**Styling**: Tailwind CSS
**Structure**: `/src` directory with component-based architecture

### Key Components

- **AddTodo** (`src/components/AddTodo.tsx`): Form component with intentionally broken functionality - clears input but doesn't add todos to list
- **TodoList** (`src/components/TodoList.tsx`): Static todo list with hardcoded data and read-only checkboxes
- **ThemeToggle** (`src/components/ThemeToggle.tsx`): Broken theme toggle with poor styling and no functionality
- **Counter** (`src/components/Counter.tsx`): Working counter component with custom hook

### Intentional Issues for Demo Purposes

This codebase contains several intentional bugs and incomplete features:

1. **AddTodo form**: Clears input but doesn't actually add todos to the list
2. **TodoList checkboxes**: Set to readOnly, not interactive
3. **ThemeToggle**: Ugly styling with inline styles, no theme system implementation
4. **No theme context**: No dark/light mode infrastructure exists

### Project Goals

The app is designed to demonstrate 8 Claude Code workflows:
1. Project onboarding with `/init`
2. Memory and rules management
3. Vision-based component styling
4. Scoped context editing
5. Plan mode for complex features
6. TODO management workflows
7. Custom command creation
8. Extended thinking for UX improvements

## Development Notes

- Uses functional components with hooks
- Tailwind CSS for styling
- TypeScript for type safety
- Components are intentionally kept simple for demonstration purposes
- Follow existing code patterns when making improvements
- The `PRD.md` file contains detailed specifications for the intended final state of each component

## TypeScript Guidelines

Follow the guidelines in `.cursor/rules/typescript-best-practices.mdc` for all TypeScript code.

## TypeScript Guidelines

- You MUST follow the guidelines in .cursor/rules/typescript-best-practices.mdc for all TypeScript code