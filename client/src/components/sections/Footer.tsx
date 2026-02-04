export function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-200 py-16">
      <div className="container mx-auto px-4 md:px-6 grid md:grid-cols-3 gap-12">
        <div className="space-y-4">
          <div className="flex flex-col">
            <span className="font-serif text-2xl font-bold text-white tracking-tight">Haag</span>
            <span className="text-[10px] uppercase tracking-widest text-slate-400 font-medium">Consultoria</span>
          </div>
          <p className="text-slate-400 text-sm leading-relaxed max-w-xs">
            Transformando empresas através do desenvolvimento humano desde 2001.
          </p>
        </div>
        
        <div className="space-y-4">
          <h3 className="font-serif text-lg text-white">Contato</h3>
          <ul className="space-y-2 text-slate-400 text-sm">
            <li>contato@haagconsultoria.com.br</li>
            <li>(51) 99999-9999</li>
            <li>Porto Alegre, RS</li>
          </ul>
        </div>

        <div className="space-y-4">
          <h3 className="font-serif text-lg text-white">Links Rápidos</h3>
          <ul className="space-y-2 text-slate-400 text-sm">
            <li><a href="#" className="hover:text-white transition-colors">Sobre Nós</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Serviços</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Treinamentos</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Portal do Cliente</a></li>
          </ul>
        </div>
      </div>
      <div className="container mx-auto px-4 mt-12 pt-8 border-t border-slate-800 text-center text-xs text-slate-500">
        &copy; {new Date().getFullYear()} Haag Consultoria. Todos os direitos reservados.
      </div>
    </footer>
  );
}