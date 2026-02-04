import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

export function About() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="order-2 md:order-1 relative"
          >
            {/* Use a placeholder abstract or stock office image if user wants, 
                but here we can use a nice typographic layout or another image if available.
                Since we only have one main image, let's create a composed graphic. */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-muted rounded-2xl h-64 w-full flex items-center justify-center p-8 text-center text-muted-foreground">
                 <span className="font-serif italic text-4xl text-primary/20">Desde 2001</span>
              </div>
              <div className="bg-primary rounded-2xl h-64 w-full text-primary-foreground p-6 flex flex-col justify-end mt-12">
                <p className="font-serif text-xl">"Pessoas desenvolvidas constroem empresas saudáveis."</p>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="order-1 md:order-2 space-y-6"
          >
            <h2 className="text-3xl md:text-4xl font-serif text-primary">Sobre a Haag Consultoria</h2>
            <div className="w-20 h-1 bg-secondary rounded-full" />
            
            <p className="text-muted-foreground text-lg leading-relaxed">
              Fundada em 2001 pela psicóloga organizacional <strong className="text-primary font-medium">Alessandra Haag</strong>, 
              nascemos com o propósito de integrar o mercado de trabalho à área organizacional.
            </p>
            
            <p className="text-muted-foreground text-lg leading-relaxed">
              Atuamos como parceiros estratégicos de empresas que desejam investir em cultura organizacional, 
              engajamento e bem-estar corporativo, unindo ciência, psicologia e práticas modernas de gestão.
            </p>

            <ul className="space-y-4 pt-4">
              {[
                "Parcerias sólidas entre empresas e profissionais",
                "Crescimento mútuo e desenvolvimento humano",
                "Resultados sustentáveis e cultura forte"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-1 shrink-0" />
                  <span className="text-foreground/80">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}