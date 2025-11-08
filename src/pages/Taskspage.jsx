import TaskManager from '../components/TaskManager';

export default function TasksPage() {
  return (
    <div>
      <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-8 text-center">
        My Tasks
      </h1>
      <TaskManager />
    </div>
  );
}
