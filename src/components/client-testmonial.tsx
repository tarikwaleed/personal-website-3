import React from 'react';
import { Card } from '@/components/ui/card'; // Make sure to import the Card component from its path
import ReactCountryFlag from "react-country-flag"
import { CarouselItem } from './ui/carousel';

interface CarouselItemProps {
  clientFeedback: string;
  clientName: string;
  clientImage: string;
  clientCountry: string;
  clientTitle: string;

}

const ClientTestmonial: React.FC<CarouselItemProps> = ({ clientTitle, clientFeedback, clientName, clientImage, clientCountry }) => {
  return (
    <CarouselItem >
      <Card className="p-4 ">
        <section className="bg-white dark:bg-gray-900">
          <div className="flex flex-row max-w-screen-xl px-4 py-8 mx-auto text-center lg:py-16 lg:px-6">
            <img
              className="w-1/3 h-max rounded-md "
              src={clientImage}
              alt="profile picture"
            />
            <figure className="max-w-screen-md mx-auto">
              <svg
                className="h-12 mx-auto mb-3 text-gray-400 dark:text-gray-600"
                viewBox="0 0 24 27"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z"
                  fill="currentColor"
                />
              </svg>
              <blockquote >
                <p className="text-2xl font-medium text-gray-900 dark:text-white">
                  &quot;{`${clientFeedback}`}&quot;
                </p>
              </blockquote>
              <figcaption className="flex items-center justify-center mt-6 space-x-3">
                <div className="flex items-center divide-x-2 divide-gray-500 dark:divide-gray-700">
                  <div className="pr-3 font-medium text-gray-900 dark:text-white">
                    {clientName}
                  </div>
                  <div className="pl-3 text-sm font-light text-gray-500 dark:text-gray-400">
                    {clientTitle}
                  </div>
                </div>
                <ReactCountryFlag countryCode={clientCountry} />
              </figcaption>
            </figure>
          </div>
        </section>
      </Card>
    </CarouselItem>
  );
};

export default ClientTestmonial;
