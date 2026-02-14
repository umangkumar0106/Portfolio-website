import React from 'react';
import SectionHeader from './SectionHeader';
import { ACADEMICS } from '../constants/data';

const Academic = () => {
  return (
    <section id="academic" className="py-20 text-white bg-slate-900">
      <div className="max-w-6xl px-8 mx-auto">
        <SectionHeader 
          title="Academic Record"
          subtitle="My journey of formal education and achievements"
        />

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2">
          {ACADEMICS.map((academic, index) => (
            <div 
              key={index}
              className="p-8 text-gray-900 transition-all duration-300 bg-white border-t-4 shadow-xl rounded-3xl hover:shadow-2xl hover:-translate-y-2 border-gradient-to-r from-indigo-500 to-purple-600"
            >
              <div className="flex items-start space-x-4">
                <div className="flex items-center justify-center w-16 h-16 shrink-0 bg-linear-to-r from-indigo-500 to-purple-600 rounded-xl">
                  <i className={`${academic.icon} text-2xl text-white`} />
                </div>
                <div className="flex-1">
                  <h3 className="mb-2 text-xl font-bold leading-tight">{academic.title}</h3>
                  <p className="mb-1 font-semibold text-gray-600">{academic.institute}</p>
                  <p className="mb-2 text-gray-500">{academic.year}</p>
                  <p className="font-bold text-indigo-600">{academic.result}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Academic;
