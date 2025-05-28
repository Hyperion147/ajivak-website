import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const images = [
  {
    sno: 1,
    img: "https://www.vaniprakashan.com/uploads/product_image/dalit-chintan-ka-vikas.jpg",
    alt: "Dalit Chintan Ka Vikas",
  },
  {
    sno: 2,
    img: "https://www.vaniprakashan.com/uploads/product_image/chamar-ki-beti-roopa.jpg",
    alt: "Chamar Ki Beti Roopa",
  },
  {
    sno: 3,
    img: "https://www.vaniprakashan.com/uploads/product_image/42427afc3622243645d7ffcd9ada2107.jpg",
    alt: "Book Cover 3",
  },
  {
    sno: 4,
    img: "https://www.vaniprakashan.com/uploads/product_image/d5179226eb72e9bc7c3af088938f8de0.jpg",
    alt: "Book Cover 4",
  },
  {
    sno: 5,
    img: "https://www.vaniprakashan.com/uploads/product_image/63c4cb01943e8ca33eb6c4b24f8e6363.jpg",
    alt: "Book Cover 5",
  },
];

function BookSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="w-full px-4 sm:px-8 lg:px-16 mb-20">
      <div className="mt-20">
        <Slider {...settings}>
          {images.map((m) => (
            <div key={m.sno} className="px-2">
              <div className="shadow-md rounded-xl border bg-primary overflow-hidden transition-transform duration-300 hover:scale-105">
                <div className="flex justify-center items-center p-4">
                  <img
                    src={m.img}
                    alt={m.alt}
                    className="h-[400px] object-cover rounded-xl"
                  />
                </div>
                <div className="flex justify-center pb-4">
                  <button className="bg-secondary hover:bg-background text-text transition text-md font-semibold px-6 py-2 rounded-full shadow">
                    Read More
                  </button>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default BookSlider;
