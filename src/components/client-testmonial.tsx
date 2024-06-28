import React from 'react';
import { Card, CardHeader, CardContent, CardFooter } from '@/components/ui/card';
import { AvatarImage, AvatarFallback, Avatar } from '@/components/ui/avatar'
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
      <Card className="p-4">
        <CardHeader className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <Avatar className="mb-4 sm:mb-0">
            <AvatarImage src={clientImage} />
            <AvatarFallback>JD</AvatarFallback>
          </Avatar>
          <div className="text-center sm:text-left grid gap-1">
            <h3 className="text-lg font-semibold leading-none">{clientName}</h3>
            <p className="text-sm text-gray-500">{clientTitle}</p>
          </div>
          <ReactCountryFlag countryCode={clientCountry} svg className="w-8 h-8" />
        </CardHeader>
        <CardContent className="text-center sm:text-left">
          <blockquote className="text-lg font-medium leading-relaxed">
            <p>{clientFeedback}</p>
          </blockquote>
        </CardContent>
      </Card>
    </CarouselItem>
  );
};

export default ClientTestmonial;
