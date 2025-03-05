import React from 'react';
import { CheckSquare, GraduationCap, Users } from 'lucide-react';
import { TaskForm } from './components/TaskForm';
import { TaskList } from './components/TaskList';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto py-8 px-4">
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <div className="flex items-center gap-3 mb-4">
            <CheckSquare size={32} className="text-blue-500" />
            <h1 className="text-3xl font-bold text-gray-900">Gestionnaire de Tâches</h1>
          </div>
          
          <div className="border-t pt-4">
            <div className="grid grid-cols-2 gap-6">
              <div>
                <h2 className="flex items-center gap-2 text-lg font-semibold text-gray-800 mb-2">
                  <Users size={20} className="text-blue-500" />
                  Réalisé par
                </h2>
                <ul className="space-y-1 text-gray-600">
                  <li>Ayat Yasmine</li>
                  <li>Belkhaouad Aya</li>
                </ul>
              </div>
              
              <div>
                <h2 className="flex items-center gap-2 text-lg font-semibold text-gray-800 mb-2">
                  <GraduationCap size={20} className="text-blue-500" />
                  Encadré par
                </h2>
                <p className="text-gray-600">
                  Tuteur de l'école : Pr. Fatima zahrae moutail
                </p>
              </div>
            </div>
            
            <div className="mt-4 pt-4 border-t text-center">
              <p className="text-sm text-gray-500">
                ANNEE UNIVERSITAIRE: 2024-2025
              </p>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <TaskForm />
          <TaskList />
        </div>
      </div>
    </div>
  );
}

export default App;