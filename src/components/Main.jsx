import React, { useState } from "react";
import bg1 from "../assets/bg1.jpg";
import img01 from "../assets/img01.png";
import img02 from "../assets/img02.png";

const Main = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleAnswer = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    const faqQA = [
        {
          question: "What is Webflow and why is it the best website builder?",
          answer: "Vitae congue eu consequat ac felis placerat vestibulum lectus mauris ultrices. Cursus sit amet dictum sit amet justo donec enim diam porttitor lacus luctus accumsan tortor posuere.",
        },
        {
          question: "How can I create a website using Webflow?",
          answer: "Webflow offers a visual editor and drag-and-drop functionality to create responsive websites without needing to code.",
        },
        {
          question: "What are the benefits of using Webflow for web development?",
           answer: "Webflow allows for greater control over design and functionality with fewer limitations compared to traditional website builders.",
        },
    ];

  return (
      <div>
          <div className="relative h-screen">
              <img src={bg1} alt="background image" className="h-full w-full object-cover" />
              <div className="absolute bottom-10 left-5 lg:left-20 bg-gradient-to-r from-gradient2 to-gradient1 px-8 py-6 md:py-12 lg:px-16 lg:w-1/2 hidden md:block">
                  <h1 className="text-white font-bold text-2xl md:text-4xl lg:text-5xl mb-4">We Crush Your Competitors, Goals, And Sales Records - Without the B.S.</h1>
                    
                  <button className="bg-secondary text-white font-bold py-2 px-4 md:px-8 md:py-3 my-3 text-sm md:text-lg">GET FREE CONSULTATION</button>
              </div>
          </div>

          <div className="bg-gradient-to-r from-gradient2 to-gradient1 px-8 py-6 w-full block md:hidden">
              <h1 className="text-white font-bold text-2xl mb-4">We Crush Your Competitors, Goals, And Sales Records - Without the B.S.</h1>
                
              <button className="bg-secondary text-white font-bold py-2 px-4 text-sm">GET FREE CONSULTATION</button>   
          </div>

          <div className="py-8 md:py-12 px-4 md:px-16 lg:px-36">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                  <div className="flex justify-center">
                      <img src={img01} alt="Image 01" className="w-full md:w-4/5 lg:w-3/4" />
                  </div>

                  <div className="text-left">
                      <h1 className="text-primary text-xl md:text-2xl font-bold mb-4">Web & Mobile App Development</h1>
                      <p className="text-sm md:text-base">Your web and mobile Apps are pieces of the puzzle to grow your business. We use frameworks which tailor content and engagement methods to respond to different intents shown by your potential customers who interact with your business online.</p>
                      
                      <button className="bg-secondary text-white font-bold py-2 px-4 md:px-8 md:py-3 mt-4">LEARN MORE</button>
                  </div>
                </div>
          </div>

          <div className="py-8 md:py-12 px-4 md:px-16 lg:px-36">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                  <div className="text-left">
                      <h1 className="text-primary text-xl md:text-2xl font-bold mb-4">Digital Strategy Consulting</h1>
                      <p className="text-sm md:text-base">Your digital strategy should complement the overall marketing strategy of the company. In online marketing, each component will never work in isolation and every business needs a different mix. We provide a clear concept and strategic overview to find the most efficient model for your business.</p>
                      
                      <button className="bg-secondary text-white font-bold py-2 px-4 md:px-8 md:py-3 mt-4">LEARN MORE</button>
                  </div>

                  <div className="flex justify-center">
                      <img src={img02} alt="Image 02" className="w-full md:w-4/5 lg:w-3/4" />
                  </div>
              </div>
          </div>

          <div className="py-12 px-4 md:px-16 lg:px-36">
              <div className="p-6">
                    <h1 className="text-primary text-xl md:text-2xl font-bold mb-8 text-center">Frequently Asked Questions</h1>
                    
                    {faqQA.map((faq, index) => (
                        <div key={index} className="mb-6 bg-gray-100 p-5">
                            <div className="flex justify-between items-center">
                                <h1 className={`text-base md:text-lg lg:text-xl font-semibold ${ activeIndex === index ? "text-primary" : "text-gray-700" }`}>{faq.question}</h1>
                            
                                <button className="text-gray-700 text-xl md:text-2xl" onClick={() => toggleAnswer(index)}>{activeIndex === index ? "-" : "+"}</button>
                            </div>

                            {activeIndex === index && (
                                <p className="mt-2 text-gray-600 text-sm md:text-base bg-gray-100">{faq.answer}</p>
                            )}
                        </div>
                    ))}
              </div>
          </div>
      </div>
  );
};

export default Main;