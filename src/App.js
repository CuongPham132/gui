import './App.css';
import ThanhDau from './components/ThanhDau';
import ThanhBen from './components/ThanhBen';
import KeHoachCuaToi from './components/KeHoachCuaToi';

function App() {
  return (
    <div className="flex flex-col h-screen bg-gray-800 text-white">
      <ThanhDau />
      <div className="flex flex-1">
        {/* Sidebar */}
        <ThanhBen />

        {/* Main Content */}
        <KeHoachCuaToi />
      </div>
    </div>
  );
}

export default App;
