Task Manager Application Report

This report details the features and technical aspects implemented in the Task Manager application, highlighting core functionalities, UI/UX design, and the underlying tech stack.

Core Features Implemented:
Task Creation and Management:

Create tasks with titles and descriptions.
Assign priority levels: Low, Medium, High.
Set due dates and times.
Mark tasks as complete or incomplete.
Delete tasks.
Drag and Drop Functionality:

Reorder tasks using drag-and-drop.
Smooth animations for task movement.
Visual feedback during drag operations.
Data Persistence:

Local Storage Integration for persistent task data across sessions.
Automatic saving of task modifications.
Proper date serialization and deserialization.
State management with Zustand and persist middleware.
UI/UX Features:
Clean, Professional Design:

Responsive layout optimized for multiple devices.
Card-based task interface.
Visual priority indicators (green for low, yellow for medium, red for high).
Clear visual hierarchy for improved usability.
Project Information Section:

Student Names: Ayat Yasmine, Belkhaouad Aya.
Supervisor: Pr. Fatima Zahrae Moutail.
Academic Year: 2024-2025.
Professional design featuring icons for clarity.
Technical Implementation:
Tech Stack:

React with TypeScript for robust component management.
Tailwind CSS for responsive, utility-first styling.
React DnD for drag-and-drop functionality.
Zustand for efficient state management with persistence.
Date-fns for date formatting and manipulation.
Lucide React for icons.
Components Structure:

App.tsx: Main layout and project information display.
TaskForm.tsx: Interface for creating tasks.
TaskList.tsx: Container for displaying tasks with drag-and-drop context.
TaskItem.tsx: Individual task components.
taskStore.ts: Centralized state management with persistence.
Conclusion:
The Task Manager application is now a fully-functional, user-friendly system equipped with task management capabilities, drag-and-drop reordering, and reliable data persistence. The design ensures a seamless, professional user experience, suitable for real-world use in both personal and professional environments.
