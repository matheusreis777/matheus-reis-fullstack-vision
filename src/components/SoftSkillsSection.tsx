import { Brain, MessageSquare, Network, BookOpen, Users, Gauge, Search, Zap, Clock } from "lucide-react";

const softSkills = [
  {
    title: "Resolução de Problemas",
    description: "Mentalidade focada em resolver problemas reais usando tecnologia. Capacidade analítica para investigar bugs complexos, entender fluxos de dados e estruturar soluções eficientes.",
    icon: Brain,
  },
  {
    title: "Comunicação Técnica",
    description: "Facilidade para traduzir problemas técnicos complexos em soluções claras para equipes e stakeholders, facilitando a tomada de decisão.",
    icon: MessageSquare,
  },
  {
    title: "Pensamento Sistêmico",
    description: "Visão ampla de arquitetura de sistemas, garantindo escalabilidade e manutenção a longo prazo. Entendimento completo do fluxo da aplicação, do banco de dados à interface.",
    icon: Network,
  },
  {
    title: "Capacidade Analítica",
    description: "Desenvolvida naturalmente através de anos trabalhando com backend, APIs e banco de dados. Habilidade para investigar problemas complexos e estruturar soluções eficientes.",
    icon: Search,
  },
  {
    title: "Adaptabilidade Tecnológica",
    description: "Experiência com tecnologias diversas — .NET, Angular, FlutterFlow, SQL, Frontend Web — demonstrando grande capacidade de adaptação às necessidades do projeto.",
    icon: BookOpen,
  },
  {
    title: "Colaboração em Equipe",
    description: "Experiência trabalhando em times ágeis e colaborando com desenvolvedores, designers e gestores de produto em ambientes corporativos.",
    icon: Users,
  },
  {
    title: "Foco em Performance",
    description: "Preocupação constante com otimização de sistemas, performance de APIs, eficiência de banco de dados e otimização de queries.",
    icon: Gauge,
  },
  {
    title: "Proatividade e Iniciativa",
    description: "Atitude 'hands-on' na identificação de oportunidades de melhoria, propondo novas arquiteturas ou automações antes mesmo dos problemas se tornarem críticos.",
    icon: Zap,
  },
  {
    title: "Gestão do Tempo",
    description: "Habilidade consolidada para priorizar demandas e organizar entregas técnicas complexas mantendo um fluxo contínuo e pragmático para o negócio.",
    icon: Clock,
  },
];

const SoftSkillsSection = () => {
  return (
    <section id="soft-skills" className="min-h-screen flex items-center section-glow py-24 mb-12">
      <div className="container mx-auto px-6 md:px-12 lg:px-24 relative z-10">
        <div className="mb-16 animate-in fade-in slide-in-from-bottom-4 duration-700">
          <h2 className="font-heading text-3xl md:text-4xl font-medium text-foreground flex items-center gap-3">
            <Brain className="text-primary" size={32} />
            Soft Skills
          </h2>
          <div className="h-1 w-20 bg-primary mt-4 rounded-full"></div>
          <p className="text-muted-foreground mt-6 text-lg max-w-2xl font-body">
            Competências comportamentais evoluídas ao longo dos anos para garantir o sucesso e a entrega de valor real aos projetos corporativos.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {softSkills.map((skill, index) => {
            const Icon = skill.icon;
            const delayClass = `delay-[${(index + 1) * 100}ms]`;
            
            return (
              <div
                key={skill.title}
                className={`group flex flex-col p-6 bg-card/20 border border-border/40 rounded-2xl transition-all duration-300 hover:bg-card/40 hover:border-primary/30 hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] animate-in fade-in slide-in-from-bottom-8 duration-700 ${delayClass}`}
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 mb-6 transition-transform duration-300 group-hover:scale-110 group-hover:bg-primary/20">
                  <Icon size={24} className="text-primary" />
                </div>
                <h3 className="font-heading text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {skill.title}
                </h3>
                <p className="font-body text-sm text-muted-foreground leading-relaxed mt-auto">
                  {skill.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SoftSkillsSection;
