import React, { useState } from 'react';
import { Header } from './components/Header';
import { Introduction } from './components/Introduction';
import { Timeline } from './components/Timeline/Timeline';
import { Education } from './components/Education/Education';
import { Skills } from './components/Skills/Skills';
import { Projects } from './components/Projects/Projects';
import { ThemeToggle } from './components/ThemeToggle';
import { ScrollProgress } from './components/ScrollProgress';
import { Footer } from './components/Footer';
import { PlaygroundPage } from './components/Playground/PlaygroundPage';

function App() {
  const [showPlayground, setShowPlayground] = useState(false);

  if (showPlayground) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors">
        <ScrollProgress />
        <PlaygroundPage onBack={() => setShowPlayground(false)} />
      </div>
    );
  }

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
        <div className="flex justify-center pb-20">
          <button
            onClick={() => setShowPlayground(true)}
            className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors dark:bg-blue-500 dark:hover:bg-blue-600"
          >
            View Project Playground
          </button>
        </div>
      </main>
      <ThemeToggle />
      <Footer />
    </div>
  );
}

export default App;