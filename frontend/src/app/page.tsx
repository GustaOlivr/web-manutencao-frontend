import Image from "next/image";
import { MdDashboard } from "react-icons/md";
import { FiBox } from "react-icons/fi";
import { FiTool } from "react-icons/fi";
import { FaGear } from "react-icons/fa6";
import { FaRegUserCircle } from "react-icons/fa";





export default function Home() {
  return (
<div className="h-screen flex flex-col">
  <div className="flex-1 flex">
    <aside className="w-64 p-6 bg-slate-800">Menu Lateral
        <Image src={"/image/ney.jpg"} className="w-full" alt="ImagemNey" width={240} height={240}/>
      
      <nav className="space-y-4 flex flex-col mt-8 ">
        <a href="" className="flex items-center gap-4 hover:font-semibold">
        <MdDashboard />
          Dashboard
          </a>
          <a href="" className="flex items-center gap-4 hover:font-semibold">
        <FiBox />
          Ambientes
          </a>
          <a href="" className="flex items-center gap-4 hover:font-semibold">
          <FaGear />
           Equipamentos
           </a>
          <a href="" className="flex items-center gap-4 hover:font-semibold"> 
          <FiTool />
            Manutenções
            </a>
          <a href="" className="flex items-center gap-4 hover:font-semibold"> 
          <FaRegUserCircle />
            Usuário
            </a>

      </nav>
    </aside>
    <main className="flex-1 p-6">
      <h1 className="text-4xl font-bold uppercase w-full bg-slate-900 p-6 text-center">Sistema de Gestao de Manutenção</h1>

      <div className="grid grid-cols-4 gap-4 p-6 ">
        <div className="bg-orange-500 p-6 flex rounded-xl">
          <div className="flex-1 flex flex-col">
            <strong className="text-3xl font-semibold">200</strong>
            <span className="">Ambientes</span>
          </div>
          <FiBox size={48}/>
        </div>
      </div>
      </main>
  </div>
  <footer className="p-6 bg-white text-center text-red-600 text-sm">Todos os direitos reservados &copy; 2024</footer>
</div>
  );
}
