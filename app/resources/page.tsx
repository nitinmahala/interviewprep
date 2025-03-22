"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { FileText, Code, Brain, Calculator, Download, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"

export default function ResourcesPage() {
  const [activeTab, setActiveTab] = useState("pdfs")

  const resources = {
    pdfs: [
      {
        title: "Data Structures & Algorithms Cheat Sheet",
        description: "A comprehensive guide covering all essential DS&A concepts for technical interviews.",
        type: "PDF",
        size: "2.4 MB",
        tags: ["Technical", "Coding"],
      },
      {
        title: "System Design Interview Guide",
        description: "Learn how to approach and solve system design questions with real-world examples.",
        type: "PDF",
        size: "3.8 MB",
        tags: ["System Design", "Architecture"],
      },
      {
        title: "Object-Oriented Programming Concepts",
        description: "Master OOP principles with examples in Java, Python, and C++.",
        type: "PDF",
        size: "1.7 MB",
        tags: ["OOP", "Programming"],
      },
      {
        title: "SQL Interview Questions & Answers",
        description: "200+ SQL questions with detailed explanations and sample queries.",
        type: "PDF",
        size: "2.1 MB",
        tags: ["Database", "SQL"],
      },
      {
        title: "Behavioral Interview Preparation",
        description: "Framework for answering behavioral questions using the STAR method with examples.",
        type: "PDF",
        size: "1.5 MB",
        tags: ["Behavioral", "Soft Skills"],
      },
    ],
    coding: [
      {
        title: "LeetCode Top 100 Questions",
        description: "Curated list of the most frequently asked coding interview questions.",
        link: "https://leetcode.com/problemset/top-100-liked-questions/",
        tags: ["Algorithms", "Data Structures"],
      },
      {
        title: "GeeksforGeeks Practice",
        description: "Company-wise coding questions and interview experiences.",
        link: "https://practice.geeksforgeeks.org/company-tags",
        tags: ["Company-specific", "Practice"],
      },
      {
        title: "HackerRank Interview Preparation Kit",
        description: "Structured practice problems covering all interview topics.",
        link: "https://www.hackerrank.com/interview/interview-preparation-kit",
        tags: ["Practice", "Challenges"],
      },
      {
        title: "CodeSignal",
        description: "Practice assessments similar to those used by top tech companies.",
        link: "https://codesignal.com/",
        tags: ["Assessments", "Practice Tests"],
      },
    ],
    aptitude: [
      {
        title: "Quantitative Aptitude Guide",
        description: "Comprehensive coverage of mathematical concepts for aptitude tests.",
        type: "PDF",
        size: "3.2 MB",
        tags: ["Math", "Quantitative"],
      },
      {
        title: "Logical Reasoning Practice Set",
        description: "500+ logical reasoning questions with detailed solutions.",
        type: "PDF",
        size: "2.8 MB",
        tags: ["Logic", "Reasoning"],
      },
      {
        title: "Verbal Ability & Reading Comprehension",
        description: "Improve your verbal reasoning and English language skills for interviews.",
        type: "PDF",
        size: "2.3 MB",
        tags: ["Verbal", "English"],
      },
      {
        title: "IndiaBix Aptitude Questions",
        description: "Online resource for practicing aptitude questions with explanations.",
        link: "https://www.indiabix.com/",
        tags: ["Practice", "Online Tests"],
      },
    ],
    technical: [
      {
        title: "Operating Systems Concepts",
        description: "Key OS concepts frequently asked in technical interviews.",
        type: "PDF",
        size: "2.7 MB",
        tags: ["OS", "Technical"],
      },
      {
        title: "Computer Networks Fundamentals",
        description: "Networking concepts explained with diagrams and examples.",
        type: "PDF",
        size: "3.5 MB",
        tags: ["Networking", "Technical"],
      },
      {
        title: "Database Management Systems",
        description: "DBMS concepts, normalization, and transaction management explained.",
        type: "PDF",
        size: "2.9 MB",
        tags: ["Database", "DBMS"],
      },
      {
        title: "Web Development Interview Questions",
        description: "Frontend and backend concepts with practical examples.",
        type: "PDF",
        size: "2.4 MB",
        tags: ["Web Dev", "Frontend", "Backend"],
      },
    ],
  }

  const tabIcons = {
    pdfs: <FileText className="h-4 w-4" />,
    coding: <Code className="h-4 w-4" />,
    aptitude: <Calculator className="h-4 w-4" />,
    technical: <Brain className="h-4 w-4" />,
  }

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

  return (
    <div className="container mx-auto px-4 py-24">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl font-bold mb-4 gradient-text">Resources</h1>
        <p className="text-xl text-gray-400 max-w-2xl mx-auto">
          Access free PDFs, technical MCQs, aptitude guides, and coding practice links.
        </p>
      </motion.div>

      <Tabs defaultValue="pdfs" className="w-full" onValueChange={setActiveTab}>
        <TabsList className="grid grid-cols-2 md:grid-cols-4 mb-8">
          <TabsTrigger value="pdfs" className="data-[state=active]:bg-red-600">
            {tabIcons.pdfs} PDFs & Guides
          </TabsTrigger>
          <TabsTrigger value="coding" className="data-[state=active]:bg-red-600">
            {tabIcons.coding} Coding Practice
          </TabsTrigger>
          <TabsTrigger value="aptitude" className="data-[state=active]:bg-red-600">
            {tabIcons.aptitude} Aptitude
          </TabsTrigger>
          <TabsTrigger value="technical" className="data-[state=active]:bg-red-600">
            {tabIcons.technical} Technical MCQs
          </TabsTrigger>
        </TabsList>

        {Object.keys(resources).map((category) => (
          <TabsContent key={category} value={category}>
            <motion.div
              variants={container}
              initial="hidden"
              animate={activeTab === category ? "show" : "hidden"}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {resources[category].map((resource, index) => (
                <motion.div key={index} variants={item}>
                  <Card className="border border-gray-800 bg-gray-900/50 h-full flex flex-col">
                    <CardHeader>
                      <CardTitle className="text-xl font-bold">{resource.title}</CardTitle>
                      <CardDescription>{resource.description}</CardDescription>
                    </CardHeader>
                    <CardContent className="flex-grow">
                      <div className="flex flex-wrap gap-2 mb-4">
                        {resource.tags.map((tag, i) => (
                          <Badge key={i} variant="outline" className="bg-red-900/20 text-red-400 border-red-800">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                      {resource.type && (
                        <div className="text-sm text-gray-400">
                          {resource.type} • {resource.size}
                        </div>
                      )}
                    </CardContent>
                    <CardFooter>
                      {resource.type ? (
                        <Button className="w-full bg-red-600 hover:bg-red-700">
                          <Download className="mr-2 h-4 w-4" /> Download
                        </Button>
                      ) : (
                        <Button className="w-full bg-red-600 hover:bg-red-700" asChild>
                          <a href={resource.link} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="mr-2 h-4 w-4" /> Visit Resource
                          </a>
                        </Button>
                      )}
                    </CardFooter>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  )
}

