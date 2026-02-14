import SectionHeader from './SectionHeader';
import { SKILLS, SECOND_IMAGE } from '../constants/data';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-6xl px-8 mx-auto">
        <SectionHeader 
          title="About Me"
          subtitle="MCA Student | Exploring the MERN Stack | Learning, Building, Growing"
        />

        <div className="grid items-center gap-12 md:grid-cols-3">
          <div className="md:col-span-1">
            <div className="relative">
              <img 
                src={SECOND_IMAGE}
                alt="Umang Kumar"
                className="w-full max-w-sm transition-all duration-300 shadow-xl rounded-3xl grayscale hover:grayscale-0 hover:scale-105"
              />
              <div className="absolute w-full h-full -top-5 -left-5 bg-linear-to-br from-indigo-500 to-purple-600 rounded-3xl -z-10 opacity-30" />
            </div>
          </div>

          <div className="space-y-6 md:col-span-2">
            <h3 className="text-3xl font-bold text-gray-900">Hello! I'm Umang Kumar</h3>
            <p className="leading-relaxed text-gray-600">
              I'm an MCA student with a growing interest in full-stack development. I have knowledge of the MERN stack (MongoDB, Express.js, React, and Node.js) and am continuously working to improve my skills. I also have a good understanding of core subjects like Data Structures and Algorithms (DSA), Object-Oriented Programming (OOP), and Database Management Systems (DBMS). I'm passionate about learning new technologies and building real-world projects to strengthen my practical experience.
            </p>

            <div className="grid grid-cols-3 gap-4 pt-8 md:grid-cols-4">
              {SKILLS.map((skill, index) => (
                <div 
                  key={index}
                  className="p-4 text-center transition-all duration-300 bg-white shadow-lg rounded-xl hover:shadow-xl hover:-translate-y-2 group"
                >
                  <i className={`${skill.icon} text-3xl mb-3 bg-linear-to-r from-indigo-500 to-purple-600 bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300`} />
                  <h4 className="text-sm font-semibold text-gray-800">{skill.name}</h4>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
