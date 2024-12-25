import React from 'react';
import { Header } from './components/Header';
import { Introduction } from './components/Introduction';
import { Timeline } from './components/Timeline/Timeline';
import { Projects } from './components/Projects/Projects';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="pt-24">
        <Introduction />
        <Timeline />
        <Projects />
      </main>
    </div>
  );
}

export default App;