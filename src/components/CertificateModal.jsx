import { X } from 'lucide-react';

const CertificateModal = ({ certModal, onClose }) => {
  if (!certModal) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center p-4 z-10000 bg-black/80 backdrop-blur-sm animate-fade-in">
      <div className="bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto transform animate-scale-in">
        <div className="flex items-center justify-between p-6 border-b">
          <h3 className="text-2xl font-bold text-gray-900">{certModal.title} Certificate</h3>
          <button 
            onClick={onClose}
            className="p-2 transition-colors rounded-full hover:bg-gray-100"
          >
            <X className="w-6 h-6" />
          </button>
        </div>
        
        <div className="p-8">
          {certModal.image ? (
            <div className="flex justify-center">
              <img 
                src={certModal.image} 
                alt={certModal.title} 
                className="h-auto max-w-full rounded-lg shadow-lg"
              />
            </div>
          ) : (
            <div className="p-12 text-center border-4 border-blue-500 bg-linear-to-br from-gray-50 to-gray-100 rounded-2xl">
              <h2 className="mb-4 text-3xl font-bold text-blue-600">Certificate of Completion</h2>
              <div className="w-48 h-1 mx-auto mb-8 bg-linear-to-r from-blue-500 to-blue-600" />
              <h3 className="mb-4 text-2xl font-semibold text-gray-800">{certModal.title}</h3>
              <p className="mb-2 text-gray-600">This certifies that</p>
              <h4 className="mb-4 text-3xl font-bold text-gray-900">Umang Kumar</h4>
              <p className="mb-2 text-gray-600">has successfully completed the requirements for</p>
              <h3 className="mb-8 text-2xl font-bold text-blue-600">{certModal.title}</h3>
              <div className="flex items-end justify-between">
                <div>
                  <div className="w-48 h-px mb-2 bg-gray-400" />
                  <p className="text-sm text-gray-600">Authorized Signature</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Date Issued: {certModal.date}</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CertificateModal;
