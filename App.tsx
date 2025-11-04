import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider, useTheme } from './utils/ThemeContext';
import Layout from './components/Layout';
import Home from './pages/Home';
import TasksPage from './pages/TasksPage';
import APIPage from './pages/APIPage';

function AppContent() {
  const { isDark, toggleTheme } = useTheme();

  return (
    <Router>
      <Layout toggleTheme={toggleTheme} isDark={isDark}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tasks" element={<TasksPage />} />
          <Route path="/api" element={<APIPage />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}