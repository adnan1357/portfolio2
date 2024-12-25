import React from 'react';
import { Header } from './components/Header';
import { Introduction } from './components/Introduction';
import { Timeline } from './components/Timeline/Timeline';
import { Education } from './components/Education/Education';
import { Skills } from './components/Skills/Skills';
import { Projects } from './components/Projects/Projects';
import { ThemeToggle } from './components/ThemeToggle';
import { ScrollProgress } from './components/ScrollProgress';

function App() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors">
      <ScrollProgress />
      <Header />
      <main className="pt-24">
        <Introduction />
        <Skills />
        <Timeline />
        <Education />
        <Projects />
      </main>
      <ThemeToggle />
    </div>
  );
}

export default App;