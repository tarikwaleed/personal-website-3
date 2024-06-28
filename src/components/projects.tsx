import React from 'react'
import { Card, CardContent, CardTitle, CardDescription } from "@/components/ui/card"

type Props = {}

const Projects = (props: Props) => {
  return (
    <section id="projects" className="w-full h-screen overflow-auto py-12 md:py-24 lg:py-32 bg-muted ">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">My Projects</h2>
            <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Here are some of the projects I&apos;ve worked on. Click on the images to learn more.
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
                  <img src="/logo.png" width="50" />
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
                  <img src="/logo.png" width="50" />
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
                  <img src="/logo.png" width="50" />
                </div>

              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects
