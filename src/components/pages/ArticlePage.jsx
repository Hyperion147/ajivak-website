import React from 'react';

const ArticlePage = () => {
  return (
    <div className="font-sans bg-background min-h-screen flex flex-col">
      {/* Header */}
      <header className="bg-secondary text-text py-6 px-4 text-center shadow-md">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-2 leading-tight">
            दलित आलोचना की कसौटी पर प्रेमचंद का साहित्य
          </h1>
          <p className="text-lg md:text-xl italic text-text">
            सुरेश कुमार
          </p>
        </div>
      </header>
      
      {/* Main Content */}
      <main className="flex-grow py-6 px-4">
        <article className="max-w-6xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
          {/* Article Header with Image */}
          <div className="flex flex-col lg:flex-row gap-6 p-6 border-b border-gray-200">
            <div className="lg:w-1/3">
              <div className="relative pb-[75%] overflow-hidden rounded-lg shadow-md">
                <img 
                  src="/public/Dharmvir-and-premchand.jpg" 
                  alt="डॉ. धर्मवीर व प्रेमचंद" 
                  className="absolute h-full w-full object-cover"
                />
              </div>
              <figcaption className="font-bold text-center mt-3 text-text">
                डॉ. धर्मवीर व प्रेमचंद
              </figcaption>
            </div>
            <div className="lg:w-2/3">
              <p className="text-lg md:text-xl font-semibold leading-relaxed text-text">
                डॉ. धर्मवीर को प्रेमचंद से यही तो अपेक्षा थी कि आचार्य चतुरसेन शास्त्री की तरह वह भी 'कफ़न' कहानी में जमींदार के नैतिक पतन की कहानी लिखते और 'कफ़न' कहानी का सारा सच पाठकों के सामने रख देते। पढ़ें, इस समालोचना का पहला भाग
              </p>
            </div>
          </div>

          {/* Article Body */}
          <div className="p-6 md:p-8 space-y-6 text-gray-700">
            <p className="text-base md:text-lg leading-relaxed text-text">
              बीसवीं सदी के आखिरी तीन दशक साहित्यिक, सांस्कृतिक और राजनीतिक लिहाज से बड़े उथल-पुथल वाले रहे हैं। इन दशकों में जहां दलित राजनीति ने अंगड़ाई ली, वहीं साहित्यिक और आलोचना के परिसर में दलित साहित्य और चेतना का उभार एक बड़ी परिघटना थी। ओमप्रकाश वाल्मीकि, मलखान सिंह, मोहनदास नैमिशराय, सूरजपाल सिंह चौहान और श्यौराज सिंह 'बेचैन' सरीखे दलित लेखकों ने कथा, कहानी और कविता को संघर्ष, पीड़ा एवं यथार्थ की ज़मीन पर लाकर खड़ा कर दिया। इस पूरी सृजन प्रक्रिया से हिंदी साहित्य की चौहद्दी का विस्तार हुआ। फिर बीसवीं सदी के आखिरी दशक में ही मंडल कमीशन और भूमंडलीकरण की गतिविधियां ज़ोर पकड़ने लगीं। इन्हीं सामाजिक और राजनीतिक गतिविधियों के दौरान प्रखर दलित चिंतक और आलोचक डॉ. धर्मवीर का हिंदी आलोचना में पदार्पण नए प्रतिमान और बदलाव का सूचक था। वे हिंदी आलोचना की सार्वजनिक तथा अकादमिक दुनिया की चौहद्दी में दलित चिंतक और आलोचक के तौर पर जाने जाते हैं। उन्होंने हिंदी आलोचना की न सिर्फ पुरानी ज़मीन तोड़ी, बल्कि उसकी बौद्धिकता, ज्ञानकोश, कसौटियां और प्रतिमान पर सवाल उठाकर उसे सिर के बल खड़ा करने का प्रयास किया। डॉ. धर्मवीर ने कबीर के चिंतन और साहित्य पर गंभीर अकादमिक काम किया है। उनके निष्कर्ष और स्थापनाएं नवाचार से भरे होते थे। इसी तरह प्रेमचंद की कहानियों पर भी उन्होंने अपनी पैनी नजर डाली। इसका परिणाम यह हुआ कि हिंदी आलोचना की दुनिया में कबीर और प्रेमचंद को लेकर एक गंभीर विमर्श का जन्म हुआ।
            </p>

            <blockquote className="border-l-4 border-blue-500 pl-4 italic text-gray-600 bg-blue-100 p-4 rounded-r">
              "कम्बख़्त! प्याऊ पर पानी पिलाने वाली से रानी बनी जाती है, रांड़! और नखरे करे जाती है, क्या फिर भूरासिंह को बुलाऊं?"
            </blockquote>

            <p className="text-base md:text-lg leading-relaxed">
              आचार्य चतुरसेन शास्त्री जिस दौर में अपनी कहानी में उत्तर भारत के सांमतों के नैतिक पतन की पटकथा लिख रहे थे, उसी समय प्रेमचंद अपनी कफ़न कहानी में जमींदार को दयालु बता रहे थे। डॉ. धर्मवीर को प्रेमचंद से यही तो अपेक्षा थी कि आचार्य चतुरसेन शास्त्री की तरह वह भी 'कफ़न' कहानी में जमींदार के नैतिक पतन की कहानी लिखते और 'कफ़न' कहानी का सारा सच पाठकों के सामने रख देते। आचार्य चतुरसेन शास्त्री की कहानी पढ़कर हिंदी के आलोचक बताएं कि जिस नववधू स्त्री का ठाकुर ने बलात्कार किया है? उसके पेट में किसका बच्चा होगा?
            </p>

            <div className="pt-4">
              <p className="font-bold text-gray-800">क्रमश: जारी</p>
              <p className="text-sm text-gray-500">(संपादन : राजन/नवल/अनिल)</p>
            </div>
          </div>

          {/* Author Bio */}
          <div className="bg-blue-100 p-6 md:p-8 rounded-b-xl">
            <div className="flex flex-col md:flex-row gap-6 items-center">
              <img 
                src="https://www.forwardpress.in/wp-content/uploads/2021/03/suresh-kumar.jpeg" 
                alt="सुरेश कुमार" 
                className="w-24 h-24 md:w-32 md:h-32 rounded-full object-cover border-4 border-white shadow-md"
              />
              <div>
                <h4 className="text-xl font-bold text-gray-800 mb-2">सुरेश कुमार</h4>
                <p className="text-gray-700">
                  युवा आलोचक सुरेश कुमार बनारस हिंदू विश्वविद्यालय से एम.ए. और लखनऊ विश्वविद्यालय से पीएचडी करने के बाद इन दिनों नवजागरण कालीन साहित्य पर स्वतंत्र शोध कार्य कर रहे हैं। इनके अनेक आलेख प्रतिष्ठित पत्र-पत्रिकाओं में लेख प्रकाशित हैं।
                </p>
              </div>
            </div>
          </div>
        </article>
      </main>
    </div>
  );
};

export default ArticlePage;