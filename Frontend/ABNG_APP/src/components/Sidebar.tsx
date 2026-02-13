import { Building2 } from 'lucide-react';
import Sidebarblock from './Sidebarblock';

const Sidebar = () => {
    return (
        <aside className="w-[15%] min-w-[200px] max-w-[250px] bg-[#f9fbfa] border-r border-[hsla(152,60%,35%,0.2)] flex-shrink-0">
            <Sidebarblock ClassName='min-h-14 flex items-center pl-2'>
                <div className=' bg-green-700 rounded-lg size-10 flex items-center justify-center'>    
                    <Building2 className="w-6 h-7 size={32} strokeWidth={1.5} text-white"/>
                </div>
            </Sidebarblock >
            <Sidebarblock ClassName="border-t min-h-14 border-[hsla(152,60%,35%,0.2)]">Perfil</Sidebarblock>
            <Sidebarblock ClassName="border-t min-h-15 border-[hsla(152,60%,35%,0.2)]">Configuracion</Sidebarblock>
            <Sidebarblock ClassName="border-t min-h-14 border-[hsla(152,60%,35%,0.2)]">Clientes</Sidebarblock>
            <Sidebarblock ClassName="border-t min-h-14 border-[hsla(152,60%,35%,0.2)]">Reportes</Sidebarblock>
            <Sidebarblock ClassName="border-t min-h-14 border-[hsla(152,60%,35%,0.2)]">Cerrar secion</Sidebarblock>
          
        </aside>
    )
};

export default Sidebar