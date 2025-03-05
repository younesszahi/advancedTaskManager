import { create } from 'zustand';
import { Task, Priority } from '../types';
import { persist } from 'zustand/middleware';

interface TaskState {
  tasks: Task[];
  addTask: (task: Omit<Task, 'id' | 'createdAt'>) => void;
  updateTask: (id: string, updates: Partial<Task>) => void;
  deleteTask: (id: string) => void;
  toggleComplete: (id: string) => void;
  moveTask: (dragIndex: number, hoverIndex: number) => void;
}

export const useTaskStore = create<TaskState>()(
  persist(
    (set) => ({
      tasks: [],
      addTask: (task) =>
        set((state) => ({
          tasks: [
            ...state.tasks,
            {
              ...task,
              id: crypto.randomUUID(),
              createdAt: new Date(),
            },
          ],
        })),
      updateTask: (id, updates) =>
        set((state) => ({
          tasks: state.tasks.map((task) =>
            task.id === id ? { ...task, ...updates } : task
          ),
        })),
      deleteTask: (id) =>
        set((state) => ({
          tasks: state.tasks.filter((task) => task.id !== id),
        })),
      toggleComplete: (id) =>
        set((state) => ({
          tasks: state.tasks.map((task) =>
            task.id === id ? { ...task, completed: !task.completed } : task
          ),
        })),
      moveTask: (dragIndex, hoverIndex) =>
        set((state) => {
          const newTasks = [...state.tasks];
          const dragTask = newTasks[dragIndex];
          newTasks.splice(dragIndex, 1);
          newTasks.splice(hoverIndex, 0, dragTask);
          return { tasks: newTasks };
        }),
    }),
    {
      name: 'task-storage',
      partialize: (state) => ({ tasks: state.tasks }),
      serialize: (state) => {
        return JSON.stringify({
          ...state,
          state: {
            ...state.state,
            tasks: state.state.tasks.map(task => ({
              ...task,
              dueDate: task.dueDate.toISOString(),
              createdAt: task.createdAt.toISOString()
            }))
          }
        });
      },
      deserialize: (str) => {
        const parsed = JSON.parse(str);
        return {
          ...parsed,
          state: {
            ...parsed.state,
            tasks: parsed.state.tasks.map(task => ({
              ...task,
              dueDate: new Date(task.dueDate),
              createdAt: new Date(task.createdAt)
            }))
          }
        };
      }
    }
  )
);