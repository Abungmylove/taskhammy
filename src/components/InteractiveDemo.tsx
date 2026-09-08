import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { LayoutGrid, List, Calendar, Search, Filter, Plus, CheckCircle2, Circle, MoreHorizontal, ArrowRight } from 'lucide-react';
import { TaskItem } from '../types/task';

const DEMO_TASKS: TaskItem[] = [
  {
    id: 'd-1',
    title: 'Migrate core API service to Rust microservices',
    category: 'Backend Architecture',
    priority: 'urgent',
    status: 'todo',
    assignee: { name: 'Devon H.', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80' },
    dueDate: 'Sep 12'
  },
  {
    id: 'd-2',
    title: 'Design Taskhammy dark mode design tokens',
    category: 'UI/UX',
    priority: 'high',
    status: 'in-progress',
    assignee: { name: 'Elena R.', avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80' },
    dueDate: 'Sep 10'
  },
  {
    id: 'd-3',
    title: 'Implement WebSocket real-time collaboration',
    category: 'Infrastructure',
    priority: 'urgent',
    status: 'in-progress',
    assignee: { name: 'Marcus L.', avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&auto=format&fit=crop&q=80' },
    dueDate: 'Sep 11'
  },
  {
    id: 'd-4',
    title: 'Conduct user interviews for Q4 roadmap',
    category: 'Product Research',
    priority: 'medium',
    status: 'completed',
    assignee: { name: 'Sofia T.', avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&auto=format&fit=crop&q=80' },
    dueDate: 'Sep 08'
  }
];

export const InteractiveDemo: React.FC = () => {
  const [viewMode, setViewMode] = useState<'board' | 'list'>('board');
  const [searchQuery, setSearchQuery] = useState('');
  const [tasks, setTasks] = useState<TaskItem[]>(DEMO_TASKS);

  const filteredTasks = tasks.filter(t =>
    t.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    t.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const moveStatus = (id: string, newStatus: TaskItem['status']) => {
    setTasks(prev =>
      prev.map(t => (t.id === id ? { ...t, status: newStatus } : t))
    );
  };

  return (
    <section id="interactive-demo" className="py-24 bg-zinc-950 border-t border-zinc-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Test Taskhammy in action.
            </h2>
            <p className="mt-3 text-base text-zinc-400 max-w-xl">
              Experience the fast, fluid interface. Switch views, search tasks, and drag items between workflow columns below.
            </p>
          </div>

          {/* View Mode Toggle Controls */}
          <div className="flex items-center gap-2 bg-zinc-900 p-1 rounded-xl border border-zinc-800 self-start md:self-auto">
            <button
              onClick={() => setViewMode('board')}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-medium flex items-center gap-1.5 transition-all ${
                viewMode === 'board' ? 'bg-emerald-500 text-zinc-950 font-semibold shadow-md' : 'text-zinc-400 hover:text-white'
              }`}
            >
              <LayoutGrid className="w-4 h-4" />
              Board View
            </button>
            <button
              onClick={() => setViewMode('list')}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-medium flex items-center gap-1.5 transition-all ${
                viewMode === 'list' ? 'bg-emerald-500 text-zinc-950 font-semibold shadow-md' : 'text-zinc-400 hover:text-white'
              }`}
            >
              <List className="w-4 h-4" />
              List View
            </button>
          </div>
        </div>

        {/* Demo Workspace Card Container */}
        <div className="bg-zinc-900/90 border border-zinc-800 rounded-3xl p-4 sm:p-6 shadow-2xl backdrop-blur-xl">
          
          {/* Workspace Search & Actions Bar */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-zinc-800">
            <div className="relative flex-1 max-w-md">
              <Search className="w-4 h-4 text-zinc-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search tasks by keyword or category..."
                className="w-full bg-zinc-950 border border-zinc-800 rounded-xl pl-10 pr-4 py-2 text-xs sm:text-sm text-zinc-200 placeholder-zinc-500 focus:outline-none focus:border-emerald-500/50"
              />
            </div>

            <div className="flex items-center gap-3 text-xs">
              <span className="text-zinc-500 font-mono">Filter by status:</span>
              <button
                onClick={() => setSearchQuery('')}
                className="px-3 py-1.5 rounded-lg bg-zinc-950 border border-zinc-800 text-zinc-300 hover:text-white transition-colors"
              >
                Reset Search
              </button>
            </div>
          </div>

          {/* Interactive Workspace Area */}
          <div className="pt-6">
            {viewMode === 'board' ? (
              /* Kanban Columns */
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {(['todo', 'in-progress', 'completed'] as const).map((columnStatus) => {
                  const colTasks = filteredTasks.filter(t => t.status === columnStatus);
                  const columnTitle = columnStatus === 'todo' ? 'To Do' : columnStatus === 'in-progress' ? 'In Progress' : 'Completed';
                  const statusDotColor = columnStatus === 'todo' ? 'bg-zinc-500' : columnStatus === 'in-progress' ? 'bg-amber-400' : 'bg-emerald-400';

                  return (
                    <div key={columnStatus} className="bg-zinc-950/70 border border-zinc-800/80 rounded-2xl p-4 flex flex-col min-h-[320px]">
                      {/* Column Header */}
                      <div className="flex items-center justify-between pb-3 border-b border-zinc-800/60 mb-3">
                        <div className="flex items-center gap-2">
                          <span className={`w-2.5 h-2.5 rounded-full ${statusDotColor}`} />
                          <h4 className="text-sm font-bold text-zinc-200">{columnTitle}</h4>
                        </div>
                        <span className="text-xs font-mono px-2 py-0.5 rounded bg-zinc-900 text-zinc-400 border border-zinc-800">
                          {colTasks.length}
                        </span>
                      </div>

                      {/* Cards in Column */}
                      <div className="space-y-3 flex-1">
                        <AnimatePresence>
                          {colTasks.map((task) => (
                            <motion.div
                              key={task.id}
                              layout
                              initial={{ opacity: 0, scale: 0.95 }}
                              animate={{ opacity: 1, scale: 1 }}
                              exit={{ opacity: 0, scale: 0.95 }}
                              className="p-3.5 bg-zinc-900 border border-zinc-800 hover:border-zinc-700 rounded-xl space-y-2.5 shadow-md"
                            >
                              <div className="flex items-start justify-between gap-2">
                                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-zinc-800 text-zinc-400">
                                  {task.category}
                                </span>
                                <span
                                  className={`text-[10px] font-mono font-semibold uppercase px-1.5 py-0.5 rounded ${
                                    task.priority === 'urgent'
                                      ? 'text-rose-400 bg-rose-500/10'
                                      : task.priority === 'high'
                                      ? 'text-amber-400 bg-amber-500/10'
                                      : 'text-zinc-400 bg-zinc-800'
                                  }`}
                                >
                                  {task.priority}
                                </span>
                              </div>

                              <p className="text-xs sm:text-sm font-semibold text-zinc-100 leading-snug">
                                {task.title}
                              </p>

                              <div className="pt-2 border-t border-zinc-800/60 flex items-center justify-between text-xs">
                                <div className="flex items-center gap-1.5 text-zinc-400">
                                  <img src={task.assignee.avatar} alt="Assignee" className="w-5 h-5 rounded-full object-cover" />
                                  <span className="text-[11px] font-medium">{task.assignee.name}</span>
                                </div>

                                {/* Status Move Controls */}
                                <div className="flex items-center gap-1">
                                  {columnStatus !== 'todo' && (
                                    <button
                                      onClick={() => moveStatus(task.id, 'todo')}
                                      className="p-1 hover:bg-zinc-800 text-zinc-400 rounded text-[10px] font-mono"
                                      title="Move to Todo"
                                    >
                                      ← Todo
                                    </button>
                                  )}
                                  {columnStatus !== 'completed' && (
                                    <button
                                      onClick={() => moveStatus(task.id, columnStatus === 'todo' ? 'in-progress' : 'completed')}
                                      className="p-1 hover:bg-zinc-800 text-emerald-400 rounded text-[10px] font-mono font-semibold"
                                      title="Advance Task"
                                    >
                                      Next →
                                    </button>
                                  )}
                                </div>
                              </div>
                            </motion.div>
                          ))}
                        </AnimatePresence>

                        {colTasks.length === 0 && (
                          <div className="h-28 border border-dashed border-zinc-800 rounded-xl flex items-center justify-center text-xs text-zinc-500 font-mono">
                            No tasks in this column
                          </div>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            ) : (
              /* List View */
              <div className="bg-zinc-950 border border-zinc-800 rounded-2xl overflow-hidden divide-y divide-zinc-800">
                {filteredTasks.map((task) => (
                  <div key={task.id} className="p-4 flex items-center justify-between gap-4 hover:bg-zinc-900/50 transition-colors">
                    <div className="flex items-center gap-3">
                      <button
                        onClick={() => moveStatus(task.id, task.status === 'completed' ? 'todo' : 'completed')}
                        className="text-zinc-500 hover:text-emerald-400 transition-colors"
                      >
                        {task.status === 'completed' ? (
                          <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                        ) : (
                          <Circle className="w-5 h-5" />
                        )}
                      </button>
                      <div>
                        <p className={`text-sm font-semibold ${task.status === 'completed' ? 'line-through text-zinc-500' : 'text-zinc-100'}`}>
                          {task.title}
                        </p>
                        <span className="text-xs font-mono text-zinc-500">{task.category} · Due {task.dueDate}</span>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <span className="text-xs font-mono px-2 py-1 rounded bg-zinc-900 border border-zinc-800 text-zinc-400 uppercase">
                        {task.status}
                      </span>
                      <img src={task.assignee.avatar} alt="Assignee" className="w-6 h-6 rounded-full object-cover" />
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="mt-6 text-center">
            <a
              href="#pricing"
              className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-400 hover:text-emerald-300 font-mono"
            >
              Get full access to all task views & integrations <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
