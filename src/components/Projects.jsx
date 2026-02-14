import { Github } from 'lucide-react';
import SectionHeader from './SectionHeader';
import { PROJECTS } from '../constants/data';
import { 
  Code, Database, Globe, FileCode, Braces, Box, 
  Feather, Layers, Server, Cpu 
} from 'lucide-react';

const getTechIcon = (tech) => {
  const techLower = tech.toLowerCase();
  
  // Other technology icons
  const iconMap = {
    tailwind: <Feather className="w-3 h-3" />,
    react: <Code className="w-3 h-3" />,
    node: <Server className="w-3 h-3" />,
    mongodb: <Database className="w-3 h-3" />,
    express: <Box className="w-3 h-3" />,
    html: <Globe className="w-3 h-3" />,
    css: <FileCode className="w-3 h-3" />,
    javascript: <Braces className="w-3 h-3" />,
    java: <Cpu className="w-3 h-3" />,
    bootstrap: <Layers className="w-3 h-3" />,
    jwt: <Box className="w-3 h-3" />,
    weatherapi: <Globe className="w-3 h-3" />,
  };
  
  for (const [key, icon] of Object.entries(iconMap)) {
    if (techLower.includes(key)) {
      return icon;
    }
  }
  
  return <Code className="w-3 h-3" />;
};

const Projects = () => {
  return (
    <section id="projects" className="py-20 text-white bg-slate-900">
      <div className="max-w-6xl px-8 mx-auto">
        <SectionHeader 
          title="Featured Projects"
          subtitle="A showcase of my best work"
        />

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {PROJECTS.map((project) => (
            <div 
              key={project.id || project.title}
              className="overflow-hidden transition-all duration-300 bg-white/5 backdrop-blur-sm rounded-3xl hover:bg-white/10 hover:-translate-y-4 hover:shadow-2xl group"
            >
              <div className="relative flex items-center justify-center h-64 overflow-hidden bg-linear-to-br from-indigo-500">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="object-contain w-full h-full transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 transition-opacity duration-300 bg-linear-to-r from-indigo-500 group-hover:opacity-20 opacity-50" />
              </div>
              <div className="p-8">
                <h3 className="mb-4 text-2xl font-bold">{project.title}</h3>
                <p className="mb-6 leading-relaxed text-gray-400">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <span 
                      key={tech}
                      className="flex items-center gap-1.5 px-3 py-1 text-sm text-white rounded-full bg-linear-to-r from-indigo-500"
                    >
                      {getTechIcon(tech)}
                      <span>{tech}</span>
                    </span>
                  ))}
                </div>
<div className="flex space-x-4">
                  <a 
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center px-4 py-2 space-x-2 text-indigo-400 transition-all duration-300 border border-indigo-500 rounded-full hover:bg-indigo-500 hover:text-white"
                  >
                    <Github className="w-4 h-4" />
                    <span>Code</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
