"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight, CheckCircle, Briefcase, Code, FileText } from "lucide-react"
import CounterAnimation from "./counter-animation"

export default function HeroSection() {
  return (
    <div className="relative overflow-hidden">
      {/* Geometric shapes in background */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute -top-24 -right-24 h-96 w-96 rounded-full bg-red-600/10 blur-3xl" />
        <div className="absolute top-1/2 left-1/4 h-64 w-64 rounded-full bg-red-600/5 blur-3xl" />
        <div className="absolute bottom-0 right-1/3 h-64 w-64 rounded-full bg-red-600/10 blur-3xl" />

        {/* Animated grid lines */}
        <svg className="absolute inset-0 h-full w-full opacity-20" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(255, 59, 59, 0.3)" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="container relative z-10 mx-auto px-4 py-32 sm:py-40">
        <div className="grid gap-12 md:grid-cols-2 md:items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center md:text-left"
          >
            <div className="inline-block rounded-full bg-red-600/10 px-4 py-1.5 mb-6">
              <span className="text-sm font-medium text-red-500">Your Career Success Starts Here</span>
            </div>
            <h1 className="mb-6 text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl md:text-6xl">
              Ace Your Next <br />
              <span className="bg-gradient-to-r from-red-500 to-red-700 bg-clip-text text-transparent">
                Tech Interview
              </span>
            </h1>
            <p className="mb-8 text-xl text-gray-400">
              Comprehensive resources, practice tools, and expert guidance to help you land your dream job in tech.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Button size="lg" className="bg-red-600 hover:bg-red-700">
                <Link href="/roadmaps" className="flex items-center">
                  Get Started <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="border-red-700 text-red-500 hover:bg-red-950/30">
                <Link href="/mock-interviews">Try Mock Interview</Link>
              </Button>
            </div>

            <div className="mt-8 flex flex-wrap justify-center md:justify-start gap-x-8 gap-y-4">
              <div className="flex items-center">
                <CheckCircle className="mr-2 h-5 w-5 text-red-500" />
                <span className="text-sm">Company-specific prep</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="mr-2 h-5 w-5 text-red-500" />
                <span className="text-sm">Role-based roadmaps</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="mr-2 h-5 w-5 text-red-500" />
                <span className="text-sm">Resume templates</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative mx-auto max-w-md"
          >
            {/* Hero image with floating elements */}
            <div className="relative rounded-2xl bg-gradient-to-br from-gray-900 to-gray-800 p-1">
              <div className="rounded-xl bg-gray-950 p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    <div className="h-10 w-10 rounded-full bg-red-600 flex items-center justify-center">
                      <Briefcase className="h-5 w-5 text-white" />
                    </div>
                    <div className="ml-3">
                      <h3 className="text-lg font-bold">Interview Prep</h3>
                      <p className="text-xs text-gray-400">Technical & HR rounds</p>
                    </div>
                  </div>
                  <div className="rounded-full bg-red-600/10 px-3 py-1">
                    <span className="text-xs font-medium text-red-500">Popular</span>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="rounded-lg border border-gray-800 p-4">
                    <div className="flex items-start">
                      <Code className="h-5 w-5 text-red-500 mr-3 flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="font-medium">Technical Question</h4>
                        <p className="mt-1 text-sm text-gray-400">
                          Explain the difference between a stack and a queue. When would you use one over the other?
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="rounded-lg border border-gray-800 p-4">
                    <div className="flex items-start">
                      <FileText className="h-5 w-5 text-red-500 mr-3 flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="font-medium">Resume Tip</h4>
                        <p className="mt-1 text-sm text-gray-400">
                          Quantify your achievements with metrics to make your experience more impactful.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <Button className="mt-6 w-full bg-red-600 hover:bg-red-700">Start Practicing</Button>
              </div>
            </div>

            {/* Floating elements */}
            <motion.div
              initial={{ x: -20, y: -10 }}
              animate={{ x: -30, y: -20 }}
              transition={{
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "reverse",
                duration: 2,
              }}
              className="absolute -left-10 -top-10 h-20 w-20 rounded-lg bg-gradient-to-br from-red-500 to-red-700 p-0.5"
            >
              <div className="h-full w-full rounded-[7px] bg-black p-3">
                <Code className="h-6 w-6 text-red-500" />
                <p className="mt-1 text-xs">Data Structures</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ x: 10, y: 10 }}
              animate={{ x: 20, y: 20 }}
              transition={{
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "reverse",
                duration: 2.5,
              }}
              className="absolute -bottom-8 -right-8 h-16 w-16 rounded-full bg-gradient-to-br from-red-500 to-red-700 p-0.5"
            >
              <div className="flex h-full w-full items-center justify-center rounded-full bg-black">
                <CheckCircle className="h-6 w-6 text-red-500" />
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Stats section with animated counters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-20 grid grid-cols-2 gap-8 rounded-xl border border-gray-800 bg-gray-900/50 p-8 md:grid-cols-4"
        >
          <div className="text-center">
            <CounterAnimation end={500} suffix="+" />
            <p className="mt-2 text-sm text-gray-400">Interview Questions</p>
          </div>
          <div className="text-center">
            <CounterAnimation end={50} suffix="+" />
            <p className="mt-2 text-sm text-gray-400">Company Profiles</p>
          </div>
          <div className="text-center">
            <CounterAnimation end={4} />
            <p className="mt-2 text-sm text-gray-400">Career Roadmaps</p>
          </div>
          <div className="text-center">
            <CounterAnimation end={100} suffix="%" />
            <p className="mt-2 text-sm text-gray-400">Free Resources</p>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

