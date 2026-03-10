import { User, Briefcase, Database, GraduationCap } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="sobre" className="min-h-screen flex items-center section-glow py-24 mb-12">
      <div className="container mx-auto px-6 md:px-12 lg:px-24 relative z-10">
        <div className="mb-12 animate-in fade-in slide-in-from-bottom-4 duration-700">
          <h2 className="font-heading text-3xl md:text-4xl font-medium text-foreground flex items-center gap-3">
            <User className="text-primary" size={32} />
            Sobre Mim
          </h2>
          <div className="h-1 w-20 bg-primary mt-4 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
          {/* Sidebar / Highlights Card */}
          <div className="lg:col-span-4 space-y-6 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-100">
            <div className="bg-card/30 border border-border/50 rounded-2xl p-6 md:p-8 backdrop-blur-sm shadow-sm transition-all hover:bg-card/50">
              <h3 className="font-heading text-xl font-medium text-foreground mb-6">Destaques Profissionais</h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <Briefcase className="text-primary" size={20} />
                  </div>
                  <div>
                    <p className="font-heading text-2xl font-semibold text-foreground">4+ anos</p>
                    <p className="text-muted-foreground text-sm font-body mt-1">Desenvolvimento .NET & Angular</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <Database className="text-primary" size={20} />
                  </div>
                  <div>
                    <p className="font-heading text-2xl font-semibold text-foreground">8+ anos</p>
                    <p className="text-muted-foreground text-sm font-body mt-1">Modelagem & Banco de Dados</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <GraduationCap className="text-primary" size={20} />
                  </div>
                  <div>
                    <p className="font-heading text-lg font-semibold text-foreground line-clamp-1">Graduado</p>
                    <p className="text-muted-foreground text-sm font-body mt-1">Análise e Desenvolvimento de Sistemas</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Main Bio Content */}
          <div className="lg:col-span-8 space-y-6 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-200">
            <div className="bg-card/10 border border-border/30 rounded-2xl p-6 md:p-8 lg:p-10">
              <div className="prose prose-invert max-w-none">
                <p className="text-foreground text-lg leading-relaxed font-body mb-6">
                  Olá, sou o <span className="font-semibold text-primary">Matheus Reis Mendonça</span>, um Desenvolvedor Fullstack Pleno focado em criar sistemas robustos, escaláveis e eficientes, atuando desde a modelagem de dados até a interface do usuário.
                </p>
                
                <h4 className="text-foreground font-heading font-medium text-xl mt-8 mb-4 border-b border-border/50 pb-2">Minha Trajetória</h4>
                <p className="text-muted-foreground text-base leading-relaxed font-body mb-4">
                  Com uma forte bagagem de quase uma década trabalhando com bancos de dados e mais de 4 anos dedicados ao desenvolvimento de software, adquiri uma visão profunda e sistêmica sobre como aplicações de sucesso são arquitetadas nos bastidores.
                </p>
                <p className="text-muted-foreground text-base leading-relaxed font-body mb-4">
                  Minha principal expertise reside no backend utilizando <strong className="text-foreground font-medium">C# e a plataforma .NET</strong>, a qual emprego no desenvolvimento de APIs REST escaláveis para sistemas corporativos, garantindo a performance da lógica de negócios mais complexa.
                </p>

                <h4 className="text-foreground font-heading font-medium text-xl mt-8 mb-4 border-b border-border/50 pb-2">Como eu trabalho</h4>
                <p className="text-muted-foreground text-base leading-relaxed font-body mb-4">
                  Acredito que o verdadeiro valor da tecnologia está em resolver problemas de negócios de maneira elegante. Meu perfil Fullstack me permite navegar sem atritos por toda a esteira de desenvolvimento do ciclo de vida da aplicação — ajudando as empresas a reduzirem ruídos de comunicação entre as barreiras de frontend e backend.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
