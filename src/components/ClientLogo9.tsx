import React from "react";

export const clientLogos = [
  {
    logo: "https://cdn.easyfrontend.com/pictures/logos/color-logo-1.png",
    alt: "Client Logo 1",
  },
  {
    logo: "https://cdn.easyfrontend.com/pictures/logos/color-logo-2.png",
    alt: "Client Logo 2",
  },
  {
    logo: "https://cdn.easyfrontend.com/pictures/logos/color-logo-3.png",
    alt: "Client Logo 3",
  },
  {
    logo: "https://cdn.easyfrontend.com/pictures/logos/color-logo-4.png",
    alt: "Client Logo 4",
  },
  {
    logo: "https://cdn.easyfrontend.com/pictures/logos/color-logo-5.png",
    alt: "Client Logo 5",
  },
  {
    logo: "https://cdn.easyfrontend.com/pictures/logos/color-logo-6.png",
    alt: "Client Logo 6",
  },
  {
    logo: "https://cdn.easyfrontend.com/pictures/logos/color-logo-7.png",
    alt: "Client Logo 7",
  },
  {
    logo: "https://cdn.easyfrontend.com/pictures/logos/color-logo-8.png",
    alt: "Client Logo 8",
  },
  {
    logo: "https://cdn.easyfrontend.com/pictures/logos/color-logo-9.png",
    alt: "Client Logo 9",
  },
];

const ClientLogo9: React.FC = () => {
  return (
    <section className="w-full flex flex-col items-center justify-center min-h-screen py-20 px-4">
      <div className="w-full max-w-6xl px-4 flex flex-col items-center">
        <div className="grid grid-cols-12 md:items-end  gap-6 w-full">
          <div className="col-span-12 md:col-span-9 mb-6 sm:mb-12 flex flex-col   mx-auto">
            <div className="grid grid-cols-12 w-full">
              <div className="col-span-12 xl:col-span-9">
                <h2 className="font-bold text-[25px] lg:text-[45px] leading-none mb-6">
                  Our Trusted Clients
                </h2>
                <p className="text-lg leading-9 opacity-70">
                  It’s easier to reach your savings goals when you have the right
                  savings account. Take a look and find the right one for you.
                </p>
              </div>
            </div>
          </div>

          {clientLogos.map((client, i) => (
            <div
              key={i}
              className="col-span-12 sm:col-span-6 md:col-span-4 xl:col-span-3"
            >
              <div className="bg-slate-100 dark:bg-[#1E2735] rounded-lg h-full grid place-items-center p-4 lg:p-12">
                <img
                  src={client.logo}
                  alt={client.alt}
                  className="max-h-12 h-auto max-w-full"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientLogo9;
