import React, { useRef } from 'react';
import { useDrag, useDrop } from 'react-dnd';
import { Check, Clock, Trash2, Edit2 } from 'lucide-react';
import { Task } from '../types';
import { format } from 'date-fns';
import { useTaskStore } from '../store/taskStore';

interface TaskItemProps {
  task: Task;
  index: number;
}

export const TaskItem: React.FC<TaskItemProps> = ({ task, index }) => {
  const ref = useRef<HTMLDivElement>(null);
  const { deleteTask, toggleComplete, moveTask } = useTaskStore();

  const [{ isDragging }, drag] = useDrag({
    type: 'TASK',
    item: { index },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  const [, drop] = useDrop({
    accept: 'TASK',
    hover: (item: { index: number }, monitor) => {
      if (!ref.current) return;
      const dragIndex = item.index;
      const hoverIndex = index;
      if (dragIndex === hoverIndex) return;
      moveTask(dragIndex, hoverIndex);
      item.index = hoverIndex;
    },
  });

  drag(drop(ref));

  const priorityColors = {
    low: 'bg-green-100 text-green-800',
    medium: 'bg-yellow-100 text-yellow-800',
    high: 'bg-red-100 text-red-800',
  };

  return (
    <div
      ref={ref}
      className={`bg-white rounded-lg shadow-sm p-4 mb-3 ${
        isDragging ? 'opacity-50' : ''
      } transform transition-all hover:shadow-md cursor-move`}
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <button
            onClick={() => toggleComplete(task.id)}
            className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-colors ${
              task.completed
                ? 'bg-green-500 border-green-500'
                : 'border-gray-300 hover:border-green-500'
            }`}
          >
            {task.completed && <Check size={14} className="text-white" />}
          </button>
          <div>
            <h3
              className={`font-medium ${
                task.completed ? 'line-through text-gray-500' : ''
              }`}
            >
              {task.title}
            </h3>
            <p className="text-sm text-gray-600">{task.description}</p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <span
            className={`px-2 py-1 rounded-full text-xs font-medium ${
              priorityColors[task.priority]
            }`}
          >
            {task.priority}
          </span>
          <div className="flex items-center text-gray-500 text-sm">
            <Clock size={14} className="mr-1" />
            {format(task.dueDate, 'MMM d, HH:mm')}
          </div>
          <button
            onClick={() => deleteTask(task.id)}
            className="text-gray-400 hover:text-red-500 transition-colors"
          >
            <Trash2 size={18} />
          </button>
        </div>
      </div>
    </div>
  );
};