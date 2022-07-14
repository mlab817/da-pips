import {Route, Routes} from 'react-router-dom';
import ActivitiesPage from './pages/activities.page';
import HomePage from './pages/home.page';
import DirectoryPage from './pages/directory.page';
import ProgramsPage from './pages/programs.page';
import ProjectsPage from './pages/projects.page';
import UsersPage from './pages/users.page';
import RegisterPage from './pages/register.page';
import TrackerPage from './pages/tracker.page';

const App = () => {
  return (
    <Routes>
      <Route exact path="/" element={<HomePage />} />
      <Route path="/program-summary" element={<HomePage />} />
      <Route path="/activities" element={<ActivitiesPage />} />
      <Route path="/programs" element={<ProgramsPage />} />
      <Route path="/projects" element={<ProjectsPage />} />
      <Route path="/users" element={<UsersPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/tracker" element={<TrackerPage />} />
      <Route path="/directory" element={<DirectoryPage />} />
    </Routes>
  )
}

export default App
