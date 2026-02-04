import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center bg-primary/5 overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-secondary/20 blur-3xl -z-10 rounded-l-full" />
      <div className="absolute bottom-0 left-0 w-1/4 h-1/2 bg-primary/10 blur-3xl -z-10 rounded-r-full" />

      <div className="container mx-auto px-4 md:px-6 grid md:grid-cols-2 gap-12 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-6"
        >
          <div className="inline-block px-4 py-1.5 rounded-full bg-secondary text-primary font-medium text-sm tracking-wide">
            Haag Consultoria &bull; Gestão com Pessoas
          </div>
          <h1 className="text-4xl md:text-6xl font-serif text-primary leading-tight">
            Investir em <span className="text-primary/80 italic">Saúde Mental</span> deixou de ser opcional.
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-lg leading-relaxed">
            Integramos o mercado de trabalho à área organizacional, promovendo parcerias sólidas para o desenvolvimento humano e resultados sustentáveis.
          </p>
          <div className="flex flex-wrap gap-4 pt-4">
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg group">
              Fale Conosco
              <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button size="lg" variant="outline" className="border-primary/20 text-primary hover:bg-primary/5">
              Nossos Serviços
            </Button>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative flex justify-center md:justify-end"
        >
          <div className="relative w-[300px] h-[300px] md:w-[450px] md:h-[450px]">
            {/* Abstract Shape behind image */}
            <div className="absolute inset-0 bg-secondary rounded-[2rem] rotate-3 translate-x-4 translate-y-4" />
            
            {/* Image Container */}
            <div className="absolute inset-0 bg-white rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white/50">
               <img 
                 src="https://alessandrahaag.com.br/wp-content/uploads/2025/10/Design-sem-nome-1-1.png" 
                 alt="Alessandra Haag" 
                 className="w-full h-full object-cover object-top"
               />
            </div>
            
            {/* Badge */}
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl border border-border/50 max-w-[200px]">
              <p className="font-serif text-3xl text-primary font-bold">20+</p>
              <p className="text-sm text-muted-foreground uppercase tracking-wider font-medium mt-1">Anos de Experiência</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}