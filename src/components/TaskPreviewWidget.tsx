import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CheckCircle2, Circle, Plus, Sparkles, Clock, AlertCircle, Filter, Calendar } from 'lucide-react';
import { TaskItem } from '../types/task';

const INITIAL_TASKS: TaskItem[] = [
  {
    id: 'task-1',
    title: 'Design Taskhammy Landing Page hero section',
    category: 'Design System',
    priority: 'urgent',
    status: 'in-progress',
    assignee: { name: 'Alex M.', avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80' },
    dueDate: 'Today'
  },
  {
    id: 'task-2',
    title: 'Review team velocity & sprint burndown chart',
    category: 'Analytics',
    priority: 'high',
    status: 'todo',
    assignee: { name: 'Sarah K.', avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&auto=format&fit=crop&q=80' },
    dueDate: 'Tomorrow'
  },
  {
    id: 'task-3',
    title: 'Configure AI automatic task prioritization rule',
    category: 'Automation',
    priority: 'medium',
    status: 'completed',
    assignee: { name: 'Jordan B.', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80' },
    dueDate: 'Completed'
  }
];

export const TaskPreviewWidget: React.FC = () => {
  const [tasks, setTasks] = useState<TaskItem[]>(INITIAL_TASKS);
  const [newTitle, setNewTitle] = useState('');
  const [activeFilter, setActiveFilter] = useState<'all' | 'pending' | 'completed'>('all');

  const toggleTask = (id: string) => {
    setTasks(prev =>
      prev.map(t => {
        if (t.id === id) {
          const nextStatus = t.status === 'completed' ? 'todo' : 'completed';
          return { ...t, status: nextStatus, dueDate: nextStatus === 'completed' ? 'Completed' : 'Today' };
        }
        return t;
      })
    );
  };

  const handleAddTask = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTitle.trim()) return;

    const newTask: TaskItem = {
      id: `task-${Date.now()}`,
      title: newTitle.trim(),
      category: 'Quick Add',
      priority: 'high',
      status: 'todo',
      assignee: { name: 'You', avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&auto=format&fit=crop&q=80' },
      dueDate: 'Today'
    };

    setTasks([newTask, ...tasks]);
    setNewTitle('');
  };

  const filteredTasks = tasks.filter(t => {
    if (activeFilter === 'pending') return t.status !== 'completed';
    if (activeFilter === 'completed') return t.status === 'completed';
    return true;
  });

  const completedCount = tasks.filter(t => t.status === 'completed').length;
  const progressPercent = Math.round((completedCount / (tasks.length || 1)) * 100);

  return (
    <div className="w-full bg-zinc-900/90 border border-zinc-800 rounded-2xl p-4 sm:p-6 shadow-2xl shadow-emerald-950/20 backdrop-blur-xl relative overflow-hidden">
      {/* Decorative top sheen */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-emerald-500/40 to-transparent" />
      
      {/* Widget Header Bar */}
      <div className="flex items-center justify-between pb-4 border-b border-zinc-800/80 mb-4">
        <div className="flex items-center gap-3">
          <div className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse" />
          <div>
            <h3 className="text-sm font-semibold text-zinc-100 flex items-center gap-2">
              Sprint Backlog
              <span className="text-[11px] font-mono font-medium px-2 py-0.5 rounded-full bg-zinc-800 text-zinc-400">
                {tasks.length} items
              </span>
            </h3>
            <p className="text-xs text-zinc-400">Taskhammy Interactive Workspace</p>
          </div>
        </div>

        {/* Filter Pills */}
        <div className="flex items-center gap-1 bg-zinc-950 p-1 rounded-lg border border-zinc-800 text-xs">
          <button
            onClick={() => setActiveFilter('all')}
            className={`px-2.5 py-1 rounded-md transition-all ${
              activeFilter === 'all' ? 'bg-zinc-800 text-white font-medium' : 'text-zinc-400 hover:text-zinc-200'
            }`}
          >
            All
          </button>
          <button
            onClick={() => setActiveFilter('pending')}
            className={`px-2.5 py-1 rounded-md transition-all ${
              activeFilter === 'pending' ? 'bg-zinc-800 text-white font-medium' : 'text-zinc-400 hover:text-zinc-200'
            }`}
          >
            Active
          </button>
          <button
            onClick={() => setActiveFilter('completed')}
            className={`px-2.5 py-1 rounded-md transition-all ${
              activeFilter === 'completed' ? 'bg-zinc-800 text-white font-medium' : 'text-zinc-400 hover:text-zinc-200'
            }`}
          >
            Done
          </button>
        </div>
      </div>

      {/* Progress Metric Bar */}
      <div className="mb-4 bg-zinc-950/60 rounded-xl p-3 border border-zinc-800/60">
        <div className="flex items-center justify-between text-xs mb-1.5 font-mono">
          <span className="text-zinc-400 flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
            AI Velocity Indicator
          </span>
          <span className="text-emerald-400 font-semibold">{progressPercent}% Completed</span>
        </div>
        <div className="w-full h-2 bg-zinc-800 rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-gradient-to-r from-emerald-500 to-teal-400 rounded-full"
            initial={{ width: 0 }}
            animate={{ width: `${progressPercent}%` }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
          />
        </div>
      </div>

      {/* Interactive Add Task Input */}
      <form onSubmit={handleAddTask} className="relative mb-4">
        <input
          type="text"
          value={newTitle}
          onChange={(e) => setNewTitle(e.target.value)}
          placeholder="Try typing a task (e.g. 'Finalize sprint goals')..."
          className="w-full bg-zinc-950 border border-zinc-800 text-zinc-100 placeholder-zinc-500 text-xs sm:text-sm rounded-xl pl-3.5 pr-24 py-2.5 focus:outline-none focus:border-emerald-500/60 transition-colors"
        />
        <button
          type="submit"
          disabled={!newTitle.trim()}
          className="absolute right-1.5 top-1.5 bottom-1.5 px-3 bg-emerald-500 hover:bg-emerald-400 disabled:opacity-40 disabled:hover:bg-emerald-500 text-zinc-950 font-semibold text-xs rounded-lg flex items-center gap-1 transition-all"
        >
          <Plus className="w-3.5 h-3.5" />
          Add
        </button>
      </form>

      {/* Task List */}
      <div className="space-y-2.5 min-h-[190px]">
        <AnimatePresence mode="popLayout">
          {filteredTasks.map((task) => {
            const isDone = task.status === 'completed';
            return (
              <motion.div
                key={task.id}
                layout
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.2 }}
                onClick={() => toggleTask(task.id)}
                className={`p-3 rounded-xl border transition-all cursor-pointer flex items-center justify-between gap-3 group ${
                  isDone
                    ? 'bg-zinc-950/40 border-zinc-800/40 opacity-60'
                    : 'bg-zinc-950/80 border-zinc-800 hover:border-zinc-700 hover:bg-zinc-950'
                }`}
              >
                <div className="flex items-center gap-3 min-w-0">
                  <button
                    type="button"
                    className="text-zinc-400 group-hover:text-emerald-400 transition-colors flex-shrink-0"
                  >
                    {isDone ? (
                      <CheckCircle2 className="w-5 h-5 text-emerald-400 fill-emerald-400/20" />
                    ) : (
                      <Circle className="w-5 h-5" />
                    )}
                  </button>
                  <div className="min-w-0">
                    <p
                      className={`text-xs sm:text-sm font-medium truncate transition-all ${
                        isDone ? 'line-through text-zinc-500' : 'text-zinc-200'
                      }`}
                    >
                      {task.title}
                    </p>
                    <div className="flex items-center gap-2 mt-1 text-[10px] text-zinc-400 font-mono">
                      <span className="px-1.5 py-0.5 rounded bg-zinc-800 text-zinc-400 border border-zinc-700/50">
                        {task.category}
                      </span>
                      <span className="flex items-center gap-1 text-zinc-500">
                        <Clock className="w-3 h-3" />
                        {task.dueDate}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Priority Badge & Assignee Avatar */}
                <div className="flex items-center gap-2 flex-shrink-0">
                  <span
                    className={`text-[10px] font-mono font-medium px-2 py-0.5 rounded-md border ${
                      task.priority === 'urgent'
                        ? 'bg-rose-500/10 text-rose-400 border-rose-500/20'
                        : task.priority === 'high'
                        ? 'bg-amber-500/10 text-amber-400 border-amber-500/20'
                        : 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20'
                    }`}
                  >
                    {task.priority}
                  </span>
                  <img
                    src={task.assignee.avatar}
                    alt={task.assignee.name}
                    className="w-6 h-6 rounded-full border border-zinc-700 object-cover"
                  />
                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>

      <div className="mt-4 pt-3 border-t border-zinc-800/80 flex items-center justify-between text-[11px] font-mono text-zinc-500">
        <span className="flex items-center gap-1.5">
          <AlertCircle className="w-3.5 h-3.5 text-emerald-400" />
          Click any task item above to test live state update
        </span>
        <span>Keyboard: ⌘N</span>
      </div>
    </div>
  );
};
