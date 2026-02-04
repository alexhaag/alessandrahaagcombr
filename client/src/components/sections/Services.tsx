import { motion } from "framer-motion";
import { Users, BarChart3, BrainCircuit, HeartHandshake } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const services = [
  {
    title: "Recrutamento e Seleção",
    description: "Aplicação de metodologias modernas, como hunting, entrevistas por competências e testes psicológicos.",
    icon: Users
  },
  {
    title: "Pesquisa de Clima",
    description: "Diagnóstico do ambiente de trabalho e estratégias de melhoria contínua da cultura corporativa.",
    icon: BarChart3
  },
  {
    title: "Gestão e Desenvolvimento",
    description: "Levantamento de perfis, análise de competências e feedbacks estruturados.",
    icon: BrainCircuit
  },
  {
    title: "Saúde Mental (NR1)",
    description: "Programas voltados ao equilíbrio emocional, prevenção de burnout e ambientes saudáveis.",
    icon: HeartHandshake
  }
];

export function Services() {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <h2 className="text-3xl md:text-5xl font-serif text-primary">Nossas Soluções</h2>
          <p className="text-muted-foreground text-lg">
            Soluções completas e personalizadas para potencializar as qualidades das equipes e fortalecer vínculos.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="h-full border-none shadow-sm hover:shadow-lg transition-shadow duration-300 bg-white">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/5 rounded-xl flex items-center justify-center mb-4 text-primary">
                    <service.icon className="w-6 h-6" />
                  </div>
                  <CardTitle className="font-serif text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}