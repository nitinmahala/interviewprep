"use client"

import { motion } from "framer-motion"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { CheckCircle, Download, FileText } from "lucide-react"
import Image from "next/image"

export default function ResumeGuidePage() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  }

  const resumeChecklist = [
    {
      section: "Header",
      items: [
        "Full name in a larger font size",
        "Professional email address",
        "Phone number with country code",
        "LinkedIn profile URL",
        "GitHub/Portfolio link (for technical roles)",
        "Location (city, state/province, country)",
      ],
    },
    {
      section: "Professional Summary",
      items: [
        "Brief 2-3 sentence overview of your experience and skills",
        "Tailored to the specific job you're applying for",
        "Highlights your unique value proposition",
        "Includes relevant keywords from the job description",
      ],
    },
    {
      section: "Skills",
      items: [
        "Organized by categories (Technical, Soft Skills, Languages, etc.)",
        "Listed in order of proficiency",
        "Includes specific technologies, tools, and methodologies",
        "Quantifies skill level where possible (e.g., years of experience)",
      ],
    },
    {
      section: "Work Experience",
      items: [
        "Company name, location, and dates of employment",
        "Job title and brief description of role",
        "3-5 bullet points highlighting achievements (not just responsibilities)",
        "Quantifiable results with metrics where possible",
        "Action verbs at the beginning of each bullet point",
        "Relevant keywords from the job description",
      ],
    },
    {
      section: "Education",
      items: [
        "Degree, major, university name, and graduation date",
        "GPA if above 3.5/4.0 or equivalent",
        "Relevant coursework for entry-level positions",
        "Academic achievements, honors, or scholarships",
        "Certifications and additional training",
      ],
    },
    {
      section: "Projects",
      items: [
        "Project name and brief description",
        "Technologies and tools used",
        "Your specific contribution and role",
        "Problem solved and impact created",
        "Link to GitHub repository or live demo",
      ],
    },
    {
      section: "Formatting & Style",
      items: [
        "Clean, professional design with consistent formatting",
        "1-2 pages maximum (1 page preferred for less than 10 years of experience)",
        "Easy-to-read font (Arial, Calibri, Helvetica) in 10-12pt size",
        "Proper use of white space and margins (0.5-1 inch)",
        "Saved as PDF with your name in the filename",
        "Proofread for spelling and grammar errors",
      ],
    },
  ]

  const sampleResumes = [
    {
      title: "Software Engineer Resume",
      description: "Perfect for roles in web development, mobile app development, and software engineering.",
      image: "/placeholder.svg?height=300&width=220",
      features: [
        "Highlights technical skills and programming languages",
        "Showcases projects with GitHub links",
        "Emphasizes problem-solving abilities",
      ],
    },
    {
      title: "Data Analyst Resume",
      description: "Ideal for roles in data analysis, business intelligence, and data science.",
      image: "/placeholder.svg?height=300&width=220",
      features: [
        "Emphasizes analytical and statistical skills",
        "Highlights experience with data visualization tools",
        "Showcases SQL and database knowledge",
      ],
    },
    {
      title: "Cybersecurity Specialist Resume",
      description: "Tailored for roles in information security, network security, and security analysis.",
      image: "/placeholder.svg?height=300&width=220",
      features: [
        "Highlights security certifications and credentials",
        "Emphasizes experience with security tools and frameworks",
        "Showcases incident response and threat analysis skills",
      ],
    },
    {
      title: "Business Analyst Resume",
      description: "Perfect for roles in business analysis, project management, and consulting.",
      image: "/placeholder.svg?height=300&width=220",
      features: [
        "Emphasizes requirements gathering and documentation skills",
        "Highlights experience with business process modeling",
        "Showcases stakeholder management abilities",
      ],
    },
  ]

  return (
    <div className="container mx-auto px-4 py-24">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl font-bold mb-4 gradient-text">Resume Guide</h1>
        <p className="text-xl text-gray-400 max-w-2xl mx-auto">
          Create the perfect resume with our comprehensive checklist and sample templates.
        </p>
      </motion.div>

      <Tabs defaultValue="checklist" className="w-full">
        <TabsList className="grid grid-cols-2 mb-8">
          <TabsTrigger value="checklist" className="data-[state=active]:bg-red-600">
            <CheckCircle className="mr-2 h-4 w-4" /> Resume Checklist
          </TabsTrigger>
          <TabsTrigger value="samples" className="data-[state=active]:bg-red-600">
            <FileText className="mr-2 h-4 w-4" /> Sample Resumes
          </TabsTrigger>
        </TabsList>

        <TabsContent value="checklist">
          <motion.div variants={container} initial="hidden" animate="show" className="grid gap-6">
            {resumeChecklist.map((section, index) => (
              <motion.div key={index} variants={item}>
                <Card className="border border-gray-800 bg-gray-900/50">
                  <CardHeader>
                    <CardTitle className="text-xl font-bold text-red-500">{section.section}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {section.items.map((item, i) => (
                        <li key={i} className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-red-500 mr-2 flex-shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </TabsContent>

        <TabsContent value="samples">
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {sampleResumes.map((resume, index) => (
              <motion.div key={index} variants={item}>
                <Card className="border border-gray-800 bg-gray-900/50 h-full flex flex-col">
                  <CardHeader>
                    <CardTitle className="text-lg font-bold">{resume.title}</CardTitle>
                    <CardDescription>{resume.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <div className="mb-4 flex justify-center">
                      <div className="relative w-[220px] h-[300px] border border-gray-700 rounded-md overflow-hidden">
                        <Image
                          src={resume.image || "/placeholder.svg"}
                          alt={resume.title}
                          fill
                          className="object-cover"
                        />
                      </div>
                    </div>
                    <div className="mt-4">
                      <h4 className="font-semibold mb-2">Key Features:</h4>
                      <ul className="space-y-1 text-sm">
                        {resume.features.map((feature, i) => (
                          <li key={i} className="flex items-start">
                            <CheckCircle className="h-4 w-4 text-red-500 mr-2 flex-shrink-0 mt-0.5" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                  <div className="p-4 mt-auto">
                    <Button className="w-full bg-red-600 hover:bg-red-700">
                      <Download className="mr-2 h-4 w-4" /> Download Template
                    </Button>
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </TabsContent>
      </Tabs>
    </div>
  )
}

