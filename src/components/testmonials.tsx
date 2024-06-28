"use client"
import React from 'react'
import { Card } from "@/components/ui/card"
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"
import ClientTestmonial from './client-testmonial'
type Props = {}

const Testmonials = (props: Props) => {
  return (
    <section id="testmonials" className="w-full md:w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 ">
        <div className="flex flex-col items-center justify-center space-y-20 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Client Testimonials</h2>
            <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Here&apos;s what some of my clients have to say about my work.
            </p>
          </div>
          <Carousel
            className="sm:w-screen lg:w-1/2 md:w-screen h-full"
            plugins={[
              Autoplay({
                delay: 3000,
              }),
            ]}
          >
            <CarouselContent >
              <ClientTestmonial
                clientName='Ahmad AlQaisi'
                clientFeedback='  طارق  شخص مبدع  طارق  شخص مبدع  طارق  شخص مبدع  طارق  شخص مبدع  طارق  شخص مبدع  طارق  شخص مبدع طارق  شخص مبدع '
                clientImage='/clients/client3.jpeg'
                clientCountry='jo'
                clientTitle='Senior Software Engineer'
              >
              </ClientTestmonial>
              <ClientTestmonial
                clientName='Abdullah Baghweetah'
                clientFeedback='fdfd'
                clientImage='/clients/client2.jpeg'
                clientCountry='us'
                clientTitle='Digital Marketing Specialist @ Monhna.com'
              >
              </ClientTestmonial>
              <ClientTestmonial
                clientName='Abdulaziz Sultan'
                clientFeedback='  طارق  شخص مبدع  طارق  شخص مبدع  طارق  شخص مبدع  طارق  شخص مبدع  طارق  شخص مبدع  طارق  شخص مبدع طارق  شخص مبدع '
                clientImage='/clients/client4.jpeg'
                clientCountry='sa'
                clientTitle='CEO @ spexoptics.com '
              >
              </ClientTestmonial>
              <ClientTestmonial
                clientName='Alhabeeb Ali'
                clientFeedback='  طارق  شخص مبدع  طارق  شخص مبدع  طارق  شخص مبدع  طارق  شخص مبدع  طارق  شخص مبدع  طارق  شخص مبدع طارق  شخص مبدع '
                clientImage='/clients/client5.png'
                clientCountry='sa'
                clientTitle='Entrepreneur'
              >
              </ClientTestmonial>

            </CarouselContent>
          </Carousel>
        </div>
      </div>
    </section>
  )
}

export default Testmonials
