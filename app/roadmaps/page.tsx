"use client"

import { motion } from "framer-motion"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, Code, Database, Shield, Briefcase } from "lucide-react"

export default function RoadmapsPage() {
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

  const roadmaps = {
    "software-engineer": [
      {
        title: "Foundation",
        items: [
          "Computer Science Fundamentals",
          "Data Structures & Algorithms",
          "Operating Systems Basics",
          "Database Fundamentals",
          "Network Basics",
        ],
      },
      {
        title: "Programming Languages",
        items: [
          "Learn a strongly-typed language (Java, C++)",
          "Learn a scripting language (Python, JavaScript)",
          "Object-Oriented Programming",
          "Functional Programming Concepts",
        ],
      },
      {
        title: "Web Development",
        items: [
          "HTML, CSS, JavaScript",
          "Frontend Frameworks (React, Angular, Vue)",
          "Backend Development (Node.js, Spring, Django)",
          "RESTful APIs & GraphQL",
          "Authentication & Authorization",
        ],
      },
      {
        title: "Advanced Topics",
        items: [
          "System Design",
          "Microservices Architecture",
          "Cloud Computing (AWS, Azure, GCP)",
          "DevOps & CI/CD",
          "Testing Methodologies",
        ],
      },
    ],
    "data-analyst": [
      {
        title: "Foundation",
        items: [
          "Statistics & Probability",
          "Linear Algebra",
          "Database Concepts & SQL",
          "Data Cleaning & Preprocessing",
          "Excel Advanced Features",
        ],
      },
      {
        title: "Programming & Tools",
        items: [
          "Python for Data Analysis",
          "R Programming",
          "Pandas, NumPy, SciPy",
          "Jupyter Notebooks",
          "Data Visualization Tools (Tableau, Power BI)",
        ],
      },
      {
        title: "Analysis Techniques",
        items: [
          "Exploratory Data Analysis",
          "Hypothesis Testing",
          "Regression Analysis",
          "Time Series Analysis",
          "A/B Testing",
        ],
      },
      {
        title: "Advanced Topics",
        items: [
          "Machine Learning Basics",
          "Big Data Technologies",
          "Data Warehousing",
          "Business Intelligence",
          "Data Storytelling",
        ],
      },
    ],
    "cybersecurity-specialist": [
      {
        title: "Foundation",
        items: [
          "Networking Fundamentals",
          "Operating Systems Security",
          "Cryptography Basics",
          "Security Principles & Frameworks",
          "Risk Assessment",
        ],
      },
      {
        title: "Technical Skills",
        items: [
          "Network Security & Firewalls",
          "Vulnerability Assessment",
          "Penetration Testing",
          "Security Information & Event Management",
          "Incident Response",
        ],
      },
      {
        title: "Specialized Areas",
        items: [
          "Application Security",
          "Cloud Security",
          "Identity & Access Management",
          "Security Architecture",
          "Digital Forensics",
        ],
      },
      {
        title: "Advanced Topics",
        items: [
          "Threat Intelligence",
          "Security Automation",
          "Compliance & Regulations",
          "Ethical Hacking",
          "Security Operations Center",
        ],
      },
    ],
    "business-analyst": [
      {
        title: "Foundation",
        items: [
          "Business Process Modeling",
          "Requirements Engineering",
          "Data Analysis Basics",
          "Project Management Fundamentals",
          "Communication Skills",
        ],
      },
      {
        title: "Technical Skills",
        items: [
          "SQL & Database Concepts",
          "Data Visualization",
          "Excel Advanced Features",
          "Business Intelligence Tools",
          "Process Mapping Tools",
        ],
      },
      {
        title: "Domain Knowledge",
        items: [
          "Industry-Specific Knowledge",
          "Enterprise Architecture",
          "Change Management",
          "Stakeholder Management",
          "Cost-Benefit Analysis",
        ],
      },
      {
        title: "Advanced Topics",
        items: [
          "Agile Methodologies",
          "Product Management",
          "Data-Driven Decision Making",
          "Strategic Planning",
          "Digital Transformation",
        ],
      },
    ],
  }

  const roleIcons = {
    "software-engineer": <Code className="h-5 w-5" />,
    "data-analyst": <Database className="h-5 w-5" />,
    "cybersecurity-specialist": <Shield className="h-5 w-5" />,
    "business-analyst": <Briefcase className="h-5 w-5" />,
  }

  return (
    <div className="container mx-auto px-4 py-24">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl font-bold mb-4 gradient-text">Role-Based Roadmaps</h1>
        <p className="text-xl text-gray-400 max-w-2xl mx-auto">
          Follow structured learning paths designed for different tech career roles.
        </p>
      </motion.div>

      <Tabs defaultValue="software-engineer" className="w-full">
        <TabsList className="grid grid-cols-2 md:grid-cols-4 mb-8">
          <TabsTrigger value="software-engineer" className="data-[state=active]:bg-red-600">
            <Code className="mr-2 h-4 w-4" /> Software Engineer
          </TabsTrigger>
          <TabsTrigger value="data-analyst" className="data-[state=active]:bg-red-600">
            <Database className="mr-2 h-4 w-4" /> Data Analyst
          </TabsTrigger>
          <TabsTrigger value="cybersecurity-specialist" className="data-[state=active]:bg-red-600">
            <Shield className="mr-2 h-4 w-4" /> Cybersecurity Specialist
          </TabsTrigger>
          <TabsTrigger value="business-analyst" className="data-[state=active]:bg-red-600">
            <Briefcase className="mr-2 h-4 w-4" /> Business Analyst
          </TabsTrigger>
        </TabsList>

        {Object.keys(roadmaps).map((role) => (
          <TabsContent key={role} value={role}>
            <motion.div
              variants={container}
              initial="hidden"
              animate="show"
              className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
            >
              {roadmaps[role].map((section, index) => (
                <motion.div key={index} variants={item}>
                  <Card className="border border-gray-800 bg-gray-900/50 h-full">
                    <CardHeader>
                      <CardTitle className="text-xl font-bold text-red-500">{section.title}</CardTitle>
                      <CardDescription>Stage {index + 1} of your journey</CardDescription>
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
        ))}
      </Tabs>
    </div>
  )
}

