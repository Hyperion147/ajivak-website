import { Link } from 'react-router-dom';

const LiteratureSection = () => {
  return (
    <section className="my-8">
      <div className="flex flex-wrap justify-center">
        <div className="bg-primary border border-gray-300 rounded-lg p-5 m-2 w-80 shadow-md transition-transform duration-200 hover:scale-105">
          <h2 className="text-white font-medium text-xl px-3">Dr.Dharamvir</h2>
          <img 
            src="/public/Dharmvir.jpg" 
            alt="Dr. Dharamvir" 
            className="w-64 mx-auto my-2"
          />
          <Link 
            to="/articles/1"
            className="block mt-2 text-black bg-[#d3e5f8] px-3 py-2 rounded hover:bg-[#8eb5df] transition-colors duration-200 text-center"
          >
            दलित आलोचना की कसौटी पर प्रेमचंद का साहित्य
          </Link>
        </div>
      </div>
    </section>
  );
};

export default LiteratureSection;