import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

const trainings = [
  { code: "CIPA", name: "Comissão Interna de Prevenção de Acidentes", desc: "Prevenção de acidentes e doenças decorrentes do trabalho." },
  { code: "EPI", name: "Equipamentos de Proteção Individual", desc: "Garantir proteção adequada contra riscos ocupacionais." },
  { code: "PCMSO", name: "Controle Médico de Saúde Ocupacional", desc: "Monitorizar a saúde física e mental dos trabalhadores." },
  { code: "PPRA/PGR", name: "Prevenção de Riscos Ambientais", desc: "Identificar e controlar riscos ambientais." },
  { code: "NR10", name: "Segurança em Eletricidade", desc: "Segurança em instalações elétricas e sistemas energizados." },
  { code: "NR12", name: "Segurança em Máquinas", desc: "Prevenir acidentes no uso de máquinas e equipamentos." },
  { code: "NR17", name: "Ergonomia", desc: "Adaptar condições de trabalho para conforto e segurança." },
  { code: "NR35", name: "Trabalho em Altura", desc: "Requisitos para trabalhos com risco de queda." },
];

export function Trainings() {
  return (
    <section className="py-24 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-1 space-y-6">
            <h2 className="text-3xl md:text-5xl font-serif text-white">Treinamentos e Normas</h2>
            <div className="w-20 h-1 bg-secondary rounded-full" />
            <p className="text-primary-foreground/80 text-lg leading-relaxed">
              A Haag Consultoria possui uma ampla cartela de treinamentos regulamentares para garantir a conformidade e segurança da sua empresa.
            </p>
          </div>

          <div className="lg:col-span-2 grid sm:grid-cols-2 gap-4">
            {trainings.map((t, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
              >
                <Card className="bg-primary-foreground/5 border-primary-foreground/10 hover:bg-primary-foreground/10 transition-colors h-full">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="font-semibold text-white text-lg">{t.name}</h3>
                      <Badge variant="outline" className="border-secondary text-secondary ml-2 shrink-0">{t.code}</Badge>
                    </div>
                    <p className="text-primary-foreground/60 text-sm">
                      {t.desc}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}