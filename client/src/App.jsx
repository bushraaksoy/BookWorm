import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import Sidebar from './components/Sidebar';
import AllRoutes from './routes/AllRoutes';

function App() {
  const sidebarItems = [
    { title: 'My Library', ref: '/' },
    { title: 'Add Book', ref: '/addBook' },
    // { title: 'All Books', ref: '/books' },
    // { title: 'Search Book', ref: '/search' },
  ];

  return (
    <>
      <ToastContainer position="top-right" />
      <div className="app">
        <Sidebar title="Admin Panel" sidebarItems={sidebarItems} />
        <div className="main content">
          <AllRoutes />
        </div>
      </div>
    </>
  );
}

export default App;
