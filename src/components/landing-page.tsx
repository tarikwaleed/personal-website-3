/**
* This code was generated by v0 by Vercel.
* @see https://v0.dev/t/clnFsl72oIO
* Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
*/

/** Add fonts into your Next.js project:

import { Libre_Franklin } from 'next/font/google'

libre_franklin({
  subsets: ['latin'],
  display: 'swap',
})

To read more about using these font, please visit the Next.js documentation:
- App Directory: https://nextjs.org/docs/app/building-your-application/optimizing/fonts
- Pages Directory: https://nextjs.org/docs/pages/building-your-application/optimizing/fonts
**/
import Link from "next/link"
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel"
import { Card, CardContent, CardTitle, CardDescription } from "@/components/ui/card"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { VideoIcon } from "lucide-react"

export function LandingPage() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <nav className="flex justify-center gap-4 py-4 bg-muted ">
        <Link href="#projects"
          className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}
        >
          Work
        </Link>
        <Link
          href="#clients"
          className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}
        >
          Testmonials
        </Link>
        <Link
          href="https://blog.tarikwaleed.tech"
          target="_blank"
          className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}
        >
          Blog
        </Link>
        <Link href="#contact" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
          Contact
        </Link>
      </nav>
      <header className="w-full min-h-screen flex items-center justify-center bg-muted">
        <div className="container flex flex-col md:flex-row items-center justify-between gap-8 px-4 md:px-6">
          <div className="flex flex-col md:flex-row items-center gap-4">
            <img
              src="/logo.png"
              width="40"
              height="40"
              alt="Logo"
              className="object-contain md:absolute md:top-4 md:left-4 ml-4"
            />

            <div className="space-y-4">
              <div className="flex flex-row">

                <img src="/wave.gif" width="50" />
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
                  Hello, it's Tarik
                </h1>
              </div>
              <div className="text-muted-foreground md:text-xl lg:text-base/relaxed xl:text-xl/relaxed">
                A Highly Productive Full-Stack Engineer
              </div>
              <div className="flex items-center gap-4">
                <img src="https://skillicons.dev/icons?i=next,react,ts,js,nodejs,mongodb,docker,linux,bash,tailwindcss,html,css," />
              </div>
              <div className="flex gap-4">
                <Link
                  href="https://wa.me/1065590159?text=I%20have%20a%20project%20idea"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full inline-flex items-center justify-center bg-[#25D366] px-4 py-2 text-sm font-medium text-white shadow transition-colors hover:bg-[#21cb60] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                  prefetch={false}
                >
                  <PhoneIcon className="mr-2 h-4 w-4 fill-[#ffff00]" />
                  What's App
                </Link>
                <Link
                  href="https://cal.com/tarikwaleed"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full inline-flex items-center justify-center bg-primary px-8 py-4 text-base font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-yello-800"
                  prefetch={false}
                >
                  <VideoIcon className="mr-2 h-4 w-4 " />
                  Schedule a meeting
                </Link>
              </div>
            </div>
          </div>
          <img
            src="/personal2.png"
            width="600"
            height="600"
            alt="Tarik"
            className="rounded-full md:w-1/2 md:h-auto object-cover"
          />
        </div>
      </header>

      <main className="flex-1">
        <section id="projects" className="w-full py-12 md:py-24 lg:py-32 ">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">My Projects</h2>
                <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Here are some of the projects I've worked on. Click on the images to learn more.
                </p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                <Card className="w-full max-w-md overflow-hidden rounded-lg bg-background shadow-lg transition-transform duration-300 ease-in-out hover:shadow-xl hover:-translate-y-2">
                  <img src="/mockup.webp" alt="Project Image" width={800} height={450} className="w-full object-cover" />
                  <CardContent className="p-6">
                    <CardTitle className="text-2xl font-bold">Project Name</CardTitle>
                    <CardDescription className="text-muted-foreground">
                      A brief description of the project, highlighting its key features and purpose.
                    </CardDescription>
                    <div className="mt-4 flex items-center gap-2">
                      <img src="https://skillicons.dev/icons?i=next,react" />
                      <img src="/logo.png"  width="50" />
                    </div>
                  </CardContent>
                </Card>
                <Card className="w-full max-w-md overflow-hidden rounded-lg bg-background shadow-lg transition-transform duration-300 ease-in-out hover:shadow-xl hover:-translate-y-2">
                  <img src="/dashboard.avif" alt="Project Image" width={800} height={450} className="w-full object-cover" />
                  <CardContent className="p-6">
                    <CardTitle className="text-2xl font-bold">Project Name</CardTitle>
                    <CardDescription className="text-muted-foreground">
                      A brief description of the project, highlighting its key features and purpose.
                    </CardDescription>
                    <div className="mt-4 flex items-center gap-2">

                      <img src="https://skillicons.dev/icons?i=next,react" />
                      <img src="/logo.png"  width="50" />
                    </div>
                  </CardContent>
                </Card>
                <Card className="w-full max-w-md overflow-hidden rounded-lg bg-background shadow-lg transition-transform duration-300 ease-in-out hover:shadow-xl hover:-translate-y-2">
                  <img src="/mockup2.jpg" alt="Project Image" width={800} height={450} className="w-full object-cover" />
                  <CardContent className="p-6">
                    <CardTitle className="text-2xl font-bold">Project Name</CardTitle>
                    <CardDescription className="text-muted-foreground">
                      A brief description of the project, highlighting its key features and purpose.
                    </CardDescription>
                    <div className="mt-4 flex items-center gap-2">
                      <img src="https://skillicons.dev/icons?i=next,react" />
                      <img src="/logo.png"  width="50" />
                    </div>

                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
        <section id="clients" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Client Testimonials</h2>
                <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Here's what some of my clients have to say about my work.
                </p>
              </div>
              <Carousel opts={{ loop: true, autoplay: true, autoplaySpeed: 3000 }} className="w-full h-full">
                <CarouselContent >
                  <CarouselItem>
                    <Card className="p-4 ">
                      <section className="bg-white dark:bg-gray-900">
                        <div className="max-w-screen-xl px-4 py-8 mx-auto text-center lg:py-16 lg:px-6">
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
                            <blockquote>
                              <p className="text-2xl font-medium text-gray-900 dark:text-white">
                                "Flowbite is just awesome. It contains tons of predesigned components
                                and pages starting from login screen to complex dashboard. Perfect
                                choice for your next SaaS application."
                              </p>
                            </blockquote>
                            <figcaption className="flex items-center justify-center mt-6 space-x-3">
                              <img
                                className="w-6 h-6 rounded-full"
                                src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gouch.png"
                                alt="profile picture"
                              />
                              <div className="flex items-center divide-x-2 divide-gray-500 dark:divide-gray-700">
                                <div className="pr-3 font-medium text-gray-900 dark:text-white">
                                  Micheal Gough
                                </div>
                                <div className="pl-3 text-sm font-light text-gray-500 dark:text-gray-400">
                                  CEO at Google
                                </div>
                              </div>
                            </figcaption>
                          </figure>
                        </div>
                      </section>
                    </Card>
                  </CarouselItem>
                  <CarouselItem>
                    <Card className="p-4 ">
                      <section className="bg-white dark:bg-gray-900">
                        <div className="max-w-screen-xl px-4 py-8 mx-auto text-center lg:py-16 lg:px-6">
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
                            <blockquote>
                              <p className="text-2xl font-medium text-gray-900 dark:text-white">
                                "Flowbite is just awesome. It contains tons of predesigned components
                                and pages starting from login screen to complex dashboard. Perfect
                                choice for your next SaaS application."
                              </p>
                            </blockquote>
                            <figcaption className="flex items-center justify-center mt-6 space-x-3">
                              <img
                                className="w-6 h-6 rounded-full"
                                src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gouch.png"
                                alt="profile picture"
                              />
                              <div className="flex items-center divide-x-2 divide-gray-500 dark:divide-gray-700">
                                <div className="pr-3 font-medium text-gray-900 dark:text-white">
                                  Micheal Gough
                                </div>
                                <div className="pl-3 text-sm font-light text-gray-500 dark:text-gray-400">
                                  CEO at Google
                                </div>
                              </div>
                            </figcaption>
                          </figure>
                        </div>
                      </section>
                    </Card>
                  </CarouselItem>
                  <CarouselItem>
                    <Card className="p-4 ">
                      <section className="bg-white dark:bg-gray-900">
                        <div className="max-w-screen-xl px-4 py-8 mx-auto text-center lg:py-16 lg:px-6">
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
                            <blockquote>
                              <p className="text-2xl font-medium text-gray-900 dark:text-white">
                                "Flowbite is just awesome. It contains tons of predesigned components
                                and pages starting from login screen to complex dashboard. Perfect
                                choice for your next SaaS application."
                              </p>
                            </blockquote>
                            <figcaption className="flex items-center justify-center mt-6 space-x-3">
                              <img
                                className="w-6 h-6 rounded-full"
                                src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gouch.png"
                                alt="profile picture"
                              />
                              <div className="flex items-center divide-x-2 divide-gray-500 dark:divide-gray-700">
                                <div className="pr-3 font-medium text-gray-900 dark:text-white">
                                  Micheal Gough
                                </div>
                                <div className="pl-3 text-sm font-light text-gray-500 dark:text-gray-400">
                                  CEO at Google
                                </div>
                              </div>
                            </figcaption>
                          </figure>
                        </div>
                      </section>
                    </Card>
                  </CarouselItem>


                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
              </Carousel>
            </div>
          </div>
        </section>
        <section id="contact" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Contact Me</h2>
                <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Feel free to reach out to me if you have any questions or would like to collaborate on a project.
                </p>
              </div>
              <div className="flex gap-4">
                <Link
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-md bg-[#25D366] p-4 text-white shadow transition-colors hover:bg-[#21cb60] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                  prefetch={false}
                >
                  <PhoneIcon className="h-6 w-6 fill-[#ffff00]" />
                </Link>
                <Link
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-md bg-[#1DA1F2] p-4 text-white shadow transition-colors hover:bg-[#1A91DA] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                  prefetch={false}
                >
                  <TwitterIcon className="h-6 w-6 fill-[#ffff00]" />
                </Link>
                <Link
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-md bg-[#0077B5] p-4 text-white shadow transition-colors hover:bg-[#005D8A] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                  prefetch={false}
                >
                  <LinkedinIcon className="h-6 w-6 fill-[#ffff00]" />
                </Link>
                <Link
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-md bg-[#E4405F] p-4 text-white shadow transition-colors hover:bg-[#D63446] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                  prefetch={false}
                >
                  <InstagramIcon className="h-6 w-6 fill-[#ffff00]" />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap" />
    </div>
  )
}

function CheckIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 6 9 17l-5-5" />
    </svg>
  )
}


function InstagramIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  )
}


function LinkedinIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  )
}


function PhoneIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  )
}


function TwitterIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
    </svg>
  )
}
