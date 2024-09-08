import React from 'react';

function Mentors() {
  return (
    <div>
      <h1 className="text-center text-4xl md:text-6xl font-bold text-yellow-500 mt-5 mx-4 md:mx-10">Our Top Mentors!!</h1>
      <div className="flex flex-col md:flex-row mt-10 justify-around gap-10 mx-4 md:mx-10">
        {[1, 2, 3, 4].map((_, index) => (
          <div key={index} className="border-solid border-2 shadow-lg shadow-gray-700 rounded-lg flex flex-col p-2 w-full md:w-[30%] h-auto">
            <img
              src={
                index === 0
                  ? "https://img.freepik.com/free-photo/happy-latin-businesswoman-standing-with-arms-crossed-against-isolated-background_662251-639.jpg"
                  : index === 1
                  ? "https://img.freepik.com/free-photo/smiling-young-male-professional-standing-with-arms-crossed-while-making-eye-contact-against-isolated-background_662251-838.jpg"
                  : index === 2
                  ? "https://thumbs.dreamstime.com/b/portrait-male-african-american-professional-possibly-business-executive-corporate-ceo-finance-attorney-lawyer-sales-stylish-155546880.jpg"
                  : "https://c0.wallpaperflare.com/preview/852/396/1019/business-office-business-woman-professional.jpg"
              }
              alt="Mentor"
              className="w-full h-auto rounded-lg"
            />
            <h1 className="text-center text-xl font-semibold text-yellow-500 mt-2">Abcd</h1>
            <h1 className="text-center font-semibold">Senior Software Developer</h1>
            <br />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Mentors;
