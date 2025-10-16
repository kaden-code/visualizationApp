# 3D👁MIND - Interactive Visualization Training App

## Overview
A full-fledged web application that brings visualization exercises to life through an intuitive GUI. Building on foundational skills from previous projects (HTML structure, CSS styling, and JavaScript interactivity), 3D👁MIND enables users to engage with three distinct visualization exercises: Image Roulette, Image Description, and Image Streaming. The app features game settings, custom imagination lists, and a responsive design that works seamlessly across desktop and mobile devices.

## Demo video 
[![Watch the video](https://img.youtube.com/vi/r-6hULJ0JyE/maxresdefault.jpg)](https://youtu.be/r-6hULJ0JyE)

### [Watch the demo on YouTube](https://youtu.be/r-6hULJ0JyE)

## Features
- **Image Roulette**: Timed display of randomized prompts with audio cues for "switch" and "read" transitions
- **Image Description**: Multi-phase timer that prompts visualization followed by typed descriptions, with automatic saving to an in-page library
- **Image Streaming**: Long-form free-flow imagery sessions with periodic input windows and library storage
- **Custom Lists**: Create personalized visualization prompts tailored to specific skill development
- **Responsive Design**: Interface adapts gracefully from desktop to mobile viewports
- **Audio Synchronization**: Precise audio cues integrated with timed exercises
- **Progress Tracking**: Built-in libraries for Image Description and Image Streaming results

## Technologies
- **HTML5**
- **CSS3**
- **Vanilla JavaScript**

## Project Stats
- **Lines of Code:** HTML 425, CSS 954, JavaScript 1022
- **Date Completed:** April 2023

## Challenges Overcome
- Planning and structuring first large-scale project
- Managing more complex codebase effectively
- Responsive design implementation - initially built for one screen size requiring significant rework
- Maintaining consistent variable naming conventions
- Debugging numerous errors across interconnected components
- State management across modes to coordinate multiple screens
- Timer & audio synchronization using layered `setInterval` and nested `setTimeout` calls
- Dynamic DOM lifecycle management with proper event listener handling
- Preventing event propagation issues with custom list controls
- Form input validation and user-driven customization

## Skills Demonstrated
- **Single-page application development**: Complete in-browser application
- **Front-end architecture**: Semantic HTML structuring of multiple views
- **Advanced CSS**: Component styling, hover effects, transitions, responsive layouts with Flexbox and media queries
- **Vanilla JavaScript mastery**:
  - Modular event handling
  - Complex timer orchestration
  - Dynamic element creation and cleanup
  - In-memory state arrays for starter & custom lists
- **UI/UX polish**: Custom rollover icons, clear visual feedback, consistent theming
- **Systems thinking**: Breaking app into discrete, reusable components (games, settings, libraries)
- **Problem solving**: Juggling nested timeouts/intervals, preventing UI bleed-over, safeguarding against empty user input
- **Meta-learning**: Using the visualization app to enhance programming skills, creating unique feedback loop between product and development process
