import React, { useState } from 'react';

const HistorySection = () => {
  const [showDetails, setShowDetails] = useState(null);

  const toggleDetails = (id) => {
    setShowDetails(showDetails === id ? null : id);
  };

  const historyFigures = [
    {
      id: 'history1',
      title: 'महान आजीवक मक्खलि गोसाल',
      subtitle: 'Mahan Ajivak Makkhali Gosal',
      content: 'महान आजीवक मक्खलि गोसाल, महावीर और बुद्ध से बड़ी उम्र के थे। वे आजीवक सम्प्रदाय के प्रवर्तक थे जो भारतीय दर्शन के छह प्रमुख सम्प्रदायों में से एक था। उनका दर्शन नियतिवाद (Fatalism) पर आधारित था जिसमें मानव जीवन पूर्वनिर्धारित माना जाता था।'
    },
  ];

  return (
    <section id="history" className="my-8 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      <h1 className="text-center text-2xl md:text-3xl font-bold mb-6 text-gray-800">Historic Figures</h1>
      
      <div className="space-y-4">
        {historyFigures.map((figure) => (
          <div key={figure.id} className="overflow-hidden rounded-lg shadow-md transition-all duration-300">
            <div 
              className="bg-primary p-4 cursor-pointer hover:bg-[#269595] transition-colors duration-200"
              onClick={() => toggleDetails(figure.id)}
              aria-expanded={showDetails === figure.id}
              aria-controls={`${figure.id}-details`}
            >
              <h3 className="text-xl md:text-2xl font-semibold text-center text-white">{figure.title}</h3>
              <h4 className="text-lg md:text-xl text-center text-gray-200">{figure.subtitle}</h4>
            </div>
            
            {showDetails === figure.id && (
              <div 
                id={`${figure.id}-details`}
                className="bg-[#73dbdb] p-4 md:p-6 border-l-4 border-primary"
              >
                <p className="text-text text-base md:text-lg leading-relaxed">
                  {figure.content}
                </p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default HistorySection;