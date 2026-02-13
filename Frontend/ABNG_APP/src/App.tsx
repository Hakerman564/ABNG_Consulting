import './App.css'
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import WorkSpace from './components/WorkSpace';


function App() {
  return (
    <div className="flex h-screen w-full overflow-hidden">
      {/* Sidebar izquierdo - 15% del ancho */}
      <Sidebar />

      {/* Contenedor principal: Header + Workspace */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Header superior */}
        <Header />

        {/* Área de trabajo principal */}
        <WorkSpace />
      </div>
    </div>
  )
}

export default App
