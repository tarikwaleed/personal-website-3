import React from 'react'
import Link from "next/link"
import {InstagramIcon, LinkedinIcon} from 'lucide-react'


type Props = {}

const Contact = (props: Props) => {
  return (
    <section id="contact" className="w-full h-10 py-12 md:py-24 lg:py-32 bg-gray-300">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Follow Me</h2>
          </div>
          <div className="flex gap-4">
            <Link
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              prefetch={false}
            >
              <LinkedinIcon className="h-6 w-6 " />
            </Link>
            <Link
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              prefetch={false}
            >
              <LinkedinIcon className="h-6 w-6 " />
            </Link>
            <Link
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              prefetch={false}
            >
              <LinkedinIcon className="h-6 w-6 " />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}





export default Contact

