import React from 'react'
import Link from "next/link"
import { VideoIcon,PhoneIcon } from "lucide-react"

type Props = {}

const Header = (props: Props) => {
  return (
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
                Hello, it&apos;s Tarik
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
                What&apos;s App
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
  )
}

export default Header
