import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AppShell } from '@mantine/core';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { CV } from './pages/CV';
import { Projects } from './pages/Projects';
import { Skills } from './pages/Skills';
import { Contact } from './pages/Contact';

export default function App() {
  return (
    <Router>
      <AppShell
        header={{ height: 70 }}
        footer={{ height: 60 }}
        padding="md"
        styles={{
          main: { paddingTop: 90, paddingBottom: 70, minHeight: '100vh' },
        }}
      >
        <AppShell.Header>
          <Header />
        </AppShell.Header>

        <AppShell.Main>
          <Routes>
            <Route path="/aNdReA9111/" element={<Home />} />
            <Route path="/aNdReA9111/cv" element={<CV />} />
            <Route path="/aNdReA9111/projects" element={<Projects />} />
            <Route path="/aNdReA9111/skills" element={<Skills />} />
            <Route path="/aNdReA9111/contact" element={<Contact />} />
          </Routes>
        </AppShell.Main>

        <AppShell.Footer>
          <Footer />
        </AppShell.Footer>
      </AppShell>
    </Router>
  );
}