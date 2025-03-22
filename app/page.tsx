"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowRight, BookOpen, Code, FileText, Lightbulb, Map } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import HeroSection from "@/components/hero-section"

export default function Home() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  }

  const sections = [
    {
      title: "Roadmaps",
      description: "Follow structured learning paths for different tech roles",
      icon: <Map className="h-10 w-10 text-red-500" />,
      link: "/roadmaps",
    },
    {
      title: "Resources",
      description: "Access free PDFs, technical MCQs, and aptitude guides",
      icon: <BookOpen className="h-10 w-10 text-red-500" />,
      link: "/resources",
    },
    {
      title: "Mock Interviews",
      description: "Practice with our random question generator",
      icon: <Code className="h-10 w-10 text-red-500" />,
      link: "/mock-interviews",
    },
    {
      title: "Resume Guide",
      description: "Create the perfect resume with our templates and tips",
      icon: <FileText className="h-10 w-10 text-red-500" />,
      link: "/resume-guide",
    },
    {
      title: "Interview Tips",
      description: "Keep track of your interview preparation with notes and to-do lists.",
      icon: <Lightbulb className="h-10 w-10 text-red-500" />,
      link: "/interview-tips",
    },
    {
      title: "Notes & Todos",
      description: "Learn the do's and don'ts for acing your interviews",
      icon: <Lightbulb className="h-10 w-10 text-red-500" />,
      link: "/notes",
    },
    
  ]

  return (
    <div>
      <HeroSection />

      <div className="container mx-auto px-4 py-24">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold mb-4">Explore Our Resources</h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Everything you need to prepare for your next interview, all in one place.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {sections.map((section, index) => (
            <motion.div key={index} variants={item}>
              <Card className="border border-gray-800 bg-gray-900/50 hover:bg-gray-800/50 transition-all duration-300 h-full">
                <CardHeader>
                  <div className="mb-4">{section.icon}</div>
                  <CardTitle className="text-2xl font-bold">{section.title}</CardTitle>
                  <CardDescription className="text-gray-400">{section.description}</CardDescription>
                </CardHeader>
                <CardFooter>
                  <Link href={section.link} className="w-full">
                    <Button className="w-full bg-red-600 hover:bg-red-700">
                      Explore <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="mt-20 text-center"
        >
          <h2 className="text-3xl font-bold mb-6">Ready to ace your next interview?</h2>
          <Link href="/company-wise">
            <Button size="lg" className="bg-red-600 hover:bg-red-700">
              Start with Company-Specific Prep
            </Button>
          </Link>
        </motion.div>
      </div>
    </div>
  )
}

