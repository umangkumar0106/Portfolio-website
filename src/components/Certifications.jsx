import { Eye } from 'lucide-react';
import SectionHeader from './SectionHeader';
import { CERTIFICATIONS } from '../constants/data';

const Certifications = ({ onViewCert }) => {
  return (
    <section id="certifications" className="py-20 bg-linear-to-br from-gray-50 to-gray-100">
      <div className="max-w-6xl px-8 mx-auto">
        <SectionHeader 
          title="Certifications & Achievements"
          subtitle="Professional certifications and continuous learning"
        />

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {CERTIFICATIONS.map((cert, index) => (
            <div 
              key={index}
              className="p-8 transition-all duration-300 bg-white border-t-4 shadow-xl rounded-3xl hover:shadow-2xl hover:-translate-y-2 border-gradient-to-r from-indigo-500 to-purple-600"
            >
              <div className="flex items-center justify-center w-16 h-16 mb-6 bg-linear-to-r from-indigo-500 to-purple-600 rounded-xl">
                <i className={`${cert.icon} text-2xl text-white`} />
              </div>
              <h3 className="mb-3 text-xl font-bold leading-tight text-gray-900">{cert.title}</h3>
              <p className="mb-2 font-semibold text-indigo-600">{cert.issuer}</p>
              <p className="mb-4 text-sm text-gray-500">{cert.date}</p>
              <p className="mb-6 leading-relaxed text-gray-600">{cert.description}</p>
              <button 
                onClick={() => onViewCert(cert)}
                className="flex items-center px-4 py-2 space-x-2 text-indigo-600 transition-all duration-300 border-2 border-indigo-500 rounded-full hover:bg-indigo-500 hover:text-white"
              >
                <Eye className="w-4 h-4" />
                <span>View Certificate</span>
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
