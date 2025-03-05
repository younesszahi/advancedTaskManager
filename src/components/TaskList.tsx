import React from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { TaskItem } from './TaskItem';
import { useTaskStore } from '../store/taskStore';

export const TaskList: React.FC = () => {
  const tasks = useTaskStore((state) => state.tasks);

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="space-y-2">
        {tasks.map((task, index) => (
          <TaskItem key={task.id} task={task} index={index} />
        ))}
        {tasks.length === 0 && (
          <div className="text-center py-8 text-gray-500">
            No tasks yet. Add your first task above!
          </div>
        )}
      </div>
    </DndProvider>
  );
};