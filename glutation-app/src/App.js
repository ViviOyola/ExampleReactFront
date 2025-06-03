import './App.css';
import "primereact/resources/themes/saga-blue/theme.css";  // Theme
import "primereact/resources/primereact.min.css";          // Core CSS
import "primeicons/primeicons.css";                        // Icons
import "primeflex/primeflex.css";                          // PrimeFlex
import UserTable from './components/UserTable'; // Import the UserTable component

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>User Management</h1>
      </header>
      <main className="p-p-4">
        <UserTable />
      </main>
    </div>
  );
}

export default App;
