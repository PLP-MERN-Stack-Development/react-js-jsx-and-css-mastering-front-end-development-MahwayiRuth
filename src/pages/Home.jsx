import { Link } from 'react-router-dom';
import Card from '../components/Card';
import Button from '../components/Button';

export default function Home() {
  return (
    <div className="max-w-4xl mx-auto text-center">
      <h1 className="text-5xl font-bold text-gray-800 dark:text-white mb-6">
        Welcome to MyApp
      </h1>
      <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
        A modern React application with Tailwind CSS
      </p>
      
      <div className="grid md:grid-cols-2 gap-6 mt-12">
        <Card title="Task Manager">
          <p className="mb-4">Manage your tasks with ease. Add, complete, and filter tasks.</p>
          <Link to="/tasks">
            <Button>Go to Tasks</Button>
          </Link>
        </Card>
        
        <Card title="API Integration">
          <p className="mb-4">Browse data from JSONPlaceholder API with search and pagination.</p>
          <Link to="/api">
            <Button variant="secondary">View API Data</Button>
          </Link>
        </Card>
      </div>
    </div>
  );
}
