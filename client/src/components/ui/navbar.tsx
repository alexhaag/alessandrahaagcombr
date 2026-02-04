import { Button } from "@/components/ui/button";

export function Navbar() {
  return (
    <nav className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-border/50">
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        <div className="flex flex-col">
          <span className="font-serif text-2xl font-bold text-primary tracking-tight">Haag</span>
          <span className="text-[10px] uppercase tracking-widest text-muted-foreground font-medium">Consultoria</span>
        </div>

        <div className="hidden md:flex items-center gap-8">
          <a href="#" className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors">Sobre</a>
          <a href="#" className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors">Serviços</a>
          <a href="#" className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors">Treinamentos</a>
          <a href="#" className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors">Contato</a>
          <Button size="sm" className="bg-primary text-white hover:bg-primary/90">
            Agendar Reunião
          </Button>
        </div>
      </div>
    </nav>
  );
}