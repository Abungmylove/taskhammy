import React from 'react';
import { motion } from 'motion/react';
import { Command, Sparkles, Clock, Users, BarChart3, ArrowUpRight, Zap, CheckCircle } from 'lucide-react';

export const BentoFeatures: React.FC = () => {
  return (
    <section id="features" className="py-24 bg-zinc-950 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Engineered for speed, built for team flow.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-zinc-400 leading-relaxed">
            Eliminate task bottlenecks with keyboard shortcuts, AI workload balancing, and instant team synchronization.
          </p>
        </div>

        {/* 5-Cell Asymmetric Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">

          {/* Cell 1: Smart AI Scheduling (Col-span 7) */}
          <div className="md:col-span-7 bg-gradient-to-br from-zinc-900 via-zinc-900 to-emerald-950/40 border border-zinc-800 hover:border-emerald-500/30 rounded-3xl p-6 sm:p-8 flex flex-col justify-between relative overflow-hidden group transition-all">
            <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl group-hover:bg-emerald-500/20 transition-all pointer-events-none" />
            
            <div>
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mb-6">
                <Sparkles className="w-5 h-5" />
              </div>
              <h3 className="text-2xl font-bold text-white tracking-tight mb-2">
                Autonomous AI Task Prioritization
              </h3>
              <p className="text-zinc-400 text-sm max-w-md leading-relaxed">
                Taskhammy analyzes team capacity, deadline urgency, and dependency trees to auto-assign priority tags in real time.
              </p>
            </div>

            {/* Visual AI Card Mockup */}
            <div className="mt-8 bg-zinc-950/80 border border-zinc-800 rounded-2xl p-4 space-y-3 font-mono text-xs shadow-xl">
              <div className="flex items-center justify-between text-zinc-400 border-b border-zinc-800/80 pb-2">
                <span className="flex items-center gap-1.5 text-emerald-400 font-semibold">
                  <Zap className="w-3.5 h-3.5" /> AI Engine Active
                </span>
                <span>Optimum Sprint Score: 98%</span>
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between p-2 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-300">
                  <span className="truncate">Auto-prioritized: "Auth Token Refactor" → Urgent</span>
                  <CheckCircle className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                </div>
                <div className="flex items-center justify-between p-2 rounded-lg bg-zinc-900 text-zinc-400">
                  <span className="truncate">Rescheduled: "Database Migration" to Tuesday 10:00 AM</span>
                  <span className="text-[10px] text-zinc-500">Auto-balanced</span>
                </div>
              </div>
            </div>
          </div>

          {/* Cell 2: Keyboard Command Palette (Col-span 5) */}
          <div className="md:col-span-5 bg-zinc-900 border border-zinc-800 hover:border-zinc-700 rounded-3xl p-6 sm:p-8 flex flex-col justify-between transition-all group">
            <div>
              <div className="w-10 h-10 rounded-xl bg-zinc-800 border border-zinc-700 flex items-center justify-center text-zinc-300 mb-6">
                <Command className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold text-white tracking-tight mb-2">
                Command Palette (⌘K)
              </h3>
              <p className="text-zinc-400 text-sm leading-relaxed">
                Control everything without leaving your keyboard. Create tasks, filter sprints, or reassign tickets in seconds.
              </p>
            </div>

            {/* Keyboard Command Visual Box */}
            <div className="mt-8 bg-zinc-950 border border-zinc-800 rounded-2xl p-4">
              <div className="flex items-center gap-2 text-xs font-mono text-zinc-300 border-b border-zinc-800 pb-2.5">
                <kbd className="px-2 py-1 bg-zinc-800 border border-zinc-700 rounded text-zinc-200">⌘</kbd>
                <kbd className="px-2 py-1 bg-zinc-800 border border-zinc-700 rounded text-zinc-200">K</kbd>
                <span className="text-zinc-500 ml-2">Type a command or search...</span>
              </div>
              <div className="mt-3 space-y-1.5 text-xs text-zinc-400 font-mono">
                <div className="p-1.5 rounded hover:bg-zinc-900 flex justify-between">
                  <span>Create new urgent task</span>
                  <span className="text-zinc-600">C</span>
                </div>
                <div className="p-1.5 rounded hover:bg-zinc-900 flex justify-between text-emerald-400 bg-emerald-500/5">
                  <span>Filter by my assigned tasks</span>
                  <span className="text-emerald-500">F</span>
                </div>
              </div>
            </div>
          </div>

          {/* Cell 3: Focus Mode & Time Blocking (Col-span 4) */}
          <div className="md:col-span-4 bg-zinc-900 border border-zinc-800 hover:border-zinc-700 rounded-3xl p-6 sm:p-8 flex flex-col justify-between transition-all">
            <div>
              <div className="w-10 h-10 rounded-xl bg-teal-500/10 border border-teal-500/30 flex items-center justify-center text-teal-400 mb-6">
                <Clock className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-white tracking-tight mb-2">
                Deep Work Focus Mode
              </h3>
              <p className="text-zinc-400 text-sm leading-relaxed">
                Mute distractions, track Pomodoro time-blocks, and sync your status directly with Slack & Discord.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-zinc-800/80 flex items-center justify-between text-xs text-zinc-400 font-mono">
              <span>Focus Timer: 25:00</span>
              <span className="text-teal-400 font-semibold">Active</span>
            </div>
          </div>

          {/* Cell 4: Live Collaboration (Col-span 4) */}
          <div className="md:col-span-4 bg-zinc-900 border border-zinc-800 hover:border-zinc-700 rounded-3xl p-6 sm:p-8 flex flex-col justify-between transition-all">
            <div>
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mb-6">
                <Users className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-white tracking-tight mb-2">
                Real-Time Presence
              </h3>
              <p className="text-zinc-400 text-sm leading-relaxed">
                See teammate cursors, live task edits, and thread comments updated instantly without refreshing.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-zinc-800/80 flex items-center justify-between">
              <div className="flex -space-x-2">
                <div className="w-7 h-7 rounded-full bg-emerald-500 text-zinc-950 font-bold text-[10px] flex items-center justify-center border-2 border-zinc-900">JS</div>
                <div className="w-7 h-7 rounded-full bg-teal-400 text-zinc-950 font-bold text-[10px] flex items-center justify-center border-2 border-zinc-900">AK</div>
                <div className="w-7 h-7 rounded-full bg-indigo-400 text-zinc-950 font-bold text-[10px] flex items-center justify-center border-2 border-zinc-900">ML</div>
              </div>
              <span className="text-xs font-mono text-emerald-400">3 active now</span>
            </div>
          </div>

          {/* Cell 5: Velocity & Analytics (Col-span 4) */}
          <div className="md:col-span-4 bg-gradient-to-br from-zinc-900 to-zinc-950 border border-zinc-800 hover:border-zinc-700 rounded-3xl p-6 sm:p-8 flex flex-col justify-between transition-all">
            <div>
              <div className="w-10 h-10 rounded-xl bg-zinc-800 border border-zinc-700 flex items-center justify-center text-zinc-300 mb-6">
                <BarChart3 className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-white tracking-tight mb-2">
                Sprint Velocity Analytics
              </h3>
              <p className="text-zinc-400 text-sm leading-relaxed">
                Automated burndown reports and velocity charts to track team productivity trends week over week.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-zinc-800/80 flex items-center justify-between text-xs font-mono">
              <span className="text-zinc-400">Weekly Throughput</span>
              <span className="text-emerald-400 font-bold flex items-center gap-1">
                +34% <ArrowUpRight className="w-3.5 h-3.5" />
              </span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
