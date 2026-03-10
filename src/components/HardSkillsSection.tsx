import { Code2, Layout, Database, Globe, Smartphone, Cloud } from "lucide-react";

const skillGroups = [
  {
    title: "Backend",
    icon: Code2,
    skills: ["C#", ".NET", "ASP.NET Core", "Web API", "APIs REST escaláveis", "Regras de negócio complexas", "Arquitetura corporativa"],
  },
  {
    title: "Frontend",
    icon: Layout,
    skills: ["Angular", "AngularJS", "JavaScript", "HTML", "CSS"],
  },
  {
    title: "Mobile",
    icon: Smartphone,
    skills: ["React Native", "FlutterFlow", "Aplicações mobile multiplataforma"],
  },
  {
    title: "Banco de Dados",
    icon: Database,
    skills: ["SQL Server", "PostgreSQL", "Supabase", "Modelagem de dados", "Queries complexas", "Otimização de performance", "Relacionamento entre tabelas"],
  },
  {
    title: "Integrações",
    icon: Globe,
    skills: ["APIs externas", "Comunicação entre serviços", "Autenticação e tokens", "Automação de fluxos de dados", "Requisições HTTP"],
  },
  {
    title: "Cloud & DevOps",
    icon: Cloud,
    skills: ["Azure", "Docker", "CI/CD", "Git", "Deployments", "Hospedagem"],
  },
];

const HardSkillsSection = () => {
  return (
    <section id="skills" className="min-h-screen flex items-center section-glow py-24 mb-12">
      <div className="container mx-auto px-6 md:px-12 lg:px-24 relative z-10">
        <div className="mb-16 animate-in fade-in slide-in-from-bottom-4 duration-700">
          <h2 className="font-heading text-3xl md:text-4xl font-medium text-foreground flex items-center gap-3">
            <Code2 className="text-primary" size={32} />
            Habilidades Técnicas
          </h2>
          <div className="h-1 w-20 bg-primary mt-4 rounded-full"></div>
          <p className="text-muted-foreground mt-6 text-lg max-w-2xl font-body">
            Um panorama das principais tecnologias, frameworks e ferramentas que utilizo no meu dia a dia para construir soluções eficientes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {skillGroups.map((group, index) => {
            const Icon = group.icon;
            // Adding staggered animation delay based on index
            const delayClass = `delay-[${(index + 1) * 100}ms]`;
            
            return (
              <div
                key={group.title}
                className={`group flex flex-col p-6 bg-card/20 border border-border/40 rounded-2xl transition-all duration-300 hover:bg-card/40 hover:border-primary/30 hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] animate-in fade-in slide-in-from-bottom-8 duration-700 ${delayClass}`}
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-110">
                    <Icon size={24} className="text-primary" />
                  </div>
                  <h3 className="font-heading text-xl font-semibold text-foreground">
                    {group.title}
                  </h3>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="font-body text-sm font-medium px-3 py-1.5 rounded-lg bg-secondary/50 text-secondary-foreground border border-border/50 transition-colors duration-300 group-hover:bg-primary/10 group-hover:text-primary group-hover:border-primary/20"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HardSkillsSection;
