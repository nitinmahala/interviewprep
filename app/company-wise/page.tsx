"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Search, Building } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function CompanyWisePage() {
  const [searchTerm, setSearchTerm] = useState("")

  const companies = [
    {
      name: "Amazon",
      logo: "/placeholder.svg?height=80&width=80",
      description: "One of the Big Five tech companies focused on e-commerce, cloud computing, and AI.",
      interviewProcess: [
        "Online Assessment (OA) with coding questions",
        "1-2 Phone Screens",
        "4-5 Onsite interviews focusing on Leadership Principles",
      ],
      commonQuestions: [
        "Design a system that can handle millions of transactions per second",
        "Implement an LRU cache",
        "Tell me about a time you had to make a decision with incomplete information",
        "How would you design Amazon's recommendation system?",
        "Explain how you would implement a distributed key-value store",
      ],
      hiringCriteria: [
        "Strong problem-solving skills",
        "Experience with scalable systems",
        "Alignment with Amazon's Leadership Principles",
        "Ability to work backwards from customer needs",
        "Data-driven decision making",
      ],
    },
    {
      name: "Google",
      logo: "/placeholder.svg?height=80&width=80",
      description:
        "A multinational technology company specializing in search engine, online advertising, and cloud computing.",
      interviewProcess: [
        "Phone Screen with a recruiter",
        "1-2 Technical Phone Interviews",
        "4-5 Onsite interviews (coding, system design, behavioral)",
        "Hiring committee review",
      ],
      commonQuestions: [
        "Design Google's search autocomplete feature",
        "Implement a data structure for a LeetCode problem",
        "How would you improve Google Maps?",
        "Design a distributed file system",
        "Implement a garbage collection system",
      ],
      hiringCriteria: [
        "Strong coding skills",
        "System design knowledge",
        "Problem-solving approach",
        "Googleyness (culture fit)",
        "Leadership and collaboration skills",
      ],
    },
    {
      name: "Microsoft",
      logo: "/placeholder.svg?height=80&width=80",
      description:
        "A multinational technology company developing computer software, consumer electronics, and related services.",
      interviewProcess: [
        "Initial HR screening",
        "1-2 Technical Phone Interviews",
        "4-5 Onsite interviews (coding, design, behavioral)",
        "As-appropriate interviews with hiring manager",
      ],
      commonQuestions: [
        "Design a distributed file system",
        "Implement a function to check if a binary tree is balanced",
        "Tell me about a time you had to deal with a difficult team member",
        "How would you design Microsoft Teams?",
        "Explain virtual memory and paging",
      ],
      hiringCriteria: [
        "Technical expertise",
        "Problem-solving skills",
        "Communication abilities",
        "Growth mindset",
        "Collaborative approach",
      ],
    },
    {
      name: "TCS",
      logo: "/placeholder.svg?height=80&width=80",
      description:
        "India's largest IT services company providing business solutions, consulting, and outsourcing services.",
      interviewProcess: [
        "TCS National Qualifier Test (NQT)",
        "Technical Interview",
        "Managerial Round",
        "HR Interview",
      ],
      commonQuestions: [
        "Basic programming questions (arrays, strings, linked lists)",
        "SQL queries and database concepts",
        "OOPS concepts and design patterns",
        "Project discussions from resume",
        "Questions on SDLC methodologies",
      ],
      hiringCriteria: [
        "Consistent academic record (usually 60% or above)",
        "Problem-solving abilities",
        "Communication skills",
        "Adaptability and willingness to learn",
        "Team player mentality",
      ],
    },
    {
      name: "Infosys",
      logo: "/placeholder.svg?height=80&width=80",
      description: "A global leader in next-generation digital services and consulting.",
      interviewProcess: ["Infosys Online Test (aptitude, reasoning, verbal)", "Technical Interview", "HR Interview"],
      commonQuestions: [
        "Basic programming concepts and data structures",
        "Puzzles and logical reasoning questions",
        "Database and SQL queries",
        "SDLC and project management methodologies",
        "Questions on your final year project",
      ],
      hiringCriteria: [
        "Minimum 60% throughout academics",
        "Problem-solving skills",
        "Communication abilities",
        "Adaptability to different technologies",
        "Willingness to relocate",
      ],
    },
    {
      name: "Apple",
      logo: "/placeholder.svg?height=80&width=80",
      description:
        "A multinational technology company that designs, develops, and sells consumer electronics, software, and online services.",
      interviewProcess: [
        "Initial phone screen with recruiter",
        "Technical phone interview",
        "On-site interviews (4-6 rounds)",
        "Team fit assessment",
      ],
      commonQuestions: [
        "Design an elevator system",
        "How would you improve Apple Music?",
        "Implement a thread-safe singleton pattern",
        "Design a distributed cache",
        "Tell me about a time you had to make a difficult technical decision",
      ],
      hiringCriteria: [
        "Deep technical expertise",
        "Attention to detail",
        "Passion for user experience",
        "Innovation mindset",
        "Collaborative problem-solving",
      ],
    },
    {
      name: "Meta (Facebook)",
      logo: "/placeholder.svg?height=80&width=80",
      description: "A social technology company focused on building products that enable people to connect and share.",
      interviewProcess: [
        "Initial technical screen",
        "1-2 technical phone interviews",
        "On-site interviews (coding, design, behavioral)",
        "Ninja round (additional technical challenge)",
      ],
      commonQuestions: [
        "Design Facebook's News Feed",
        "Implement a function to detect cycles in a linked list",
        "How would you scale Instagram to handle millions of uploads per day?",
        "Tell me about a project you're most proud of",
        "Design a real-time chat system",
      ],
      hiringCriteria: [
        "Strong coding fundamentals",
        "System design expertise",
        "Fast execution mindset",
        "Focus on impact",
        "Ability to thrive in a fast-paced environment",
      ],
    },
    {
      name: "Netflix",
      logo: "/placeholder.svg?height=80&width=80",
      description:
        "A streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more.",
      interviewProcess: [
        "Recruiter screen",
        "Technical phone interview",
        "Technical assessment",
        "On-site interviews (4-5 rounds)",
      ],
      commonQuestions: [
        "Design Netflix's recommendation system",
        "How would you handle global content delivery?",
        "Implement a rate limiter",
        "Design a system to handle millions of concurrent video streams",
        "Tell me about a time you had to make a trade-off between quality and speed",
      ],
      hiringCriteria: [
        "Technical excellence",
        "Freedom and responsibility mindset",
        "Strong communication skills",
        "Context over control approach",
        "Passion for innovation",
      ],
    },
    {
      name: "Wipro",
      logo: "/placeholder.svg?height=80&width=80",
      description: "A leading global information technology, consulting and business process services company.",
      interviewProcess: [
        "Online aptitude test",
        "Technical interview",
        "HR interview",
        "Final round with project manager (for experienced candidates)",
      ],
      commonQuestions: [
        "Basic data structures and algorithms",
        "OOPS concepts and design patterns",
        "Database and SQL queries",
        "Project experience and technologies used",
        "Questions on SDLC and Agile methodologies",
      ],
      hiringCriteria: [
        "Consistent academic record",
        "Technical fundamentals",
        "Communication skills",
        "Adaptability and learning ability",
        "Team collaboration",
      ],
    },
    {
      name: "Cognizant",
      logo: "/placeholder.svg?height=80&width=80",
      description:
        "A multinational IT services and consulting company providing digital, technology, consulting, and operations services.",
      interviewProcess: [
        "Online aptitude and coding test",
        "Technical interview",
        "HR interview",
        "Final discussion with delivery manager",
      ],
      commonQuestions: [
        "Programming fundamentals and problem-solving",
        "Database concepts and SQL queries",
        "Web technologies and frameworks",
        "Project discussions from resume",
        "Scenario-based problem-solving questions",
      ],
      hiringCriteria: [
        "Minimum academic criteria (usually 60%)",
        "Technical aptitude",
        "Communication skills",
        "Analytical thinking",
        "Client-focused mindset",
      ],
    },
    {
      name: "Adobe",
      logo: "/placeholder.svg?height=80&width=80",
      description: "A multinational computer software company focused on creativity and multimedia products.",
      interviewProcess: [
        "Initial HR screening",
        "Technical phone interview",
        "Coding assessment",
        "On-site interviews (3-5 rounds)",
      ],
      commonQuestions: [
        "Design a PDF rendering system",
        "Implement an LRU cache",
        "How would you optimize Adobe Photoshop for performance?",
        "Design a distributed image processing system",
        "Tell me about a time you improved a product's user experience",
      ],
      hiringCriteria: [
        "Strong technical skills",
        "Creative problem-solving",
        "User-centric thinking",
        "Collaborative approach",
        "Passion for innovation",
      ],
    },
    {
      name: "Salesforce",
      logo: "/placeholder.svg?height=80&width=80",
      description:
        "A cloud-based software company that provides customer relationship management services and enterprise applications.",
      interviewProcess: [
        "Initial phone screen",
        "Technical assessment",
        "Virtual or on-site interviews (3-5 rounds)",
        "Team fit assessment",
      ],
      commonQuestions: [
        "Design a multi-tenant architecture",
        "How would you implement a custom field in Salesforce?",
        "Explain SOQL vs SQL",
        "Design a system to handle high-volume data processing",
        "Tell me about a time you had to learn a new technology quickly",
      ],
      hiringCriteria: [
        "Technical expertise",
        "Customer-centric mindset",
        "Adaptability and learning agility",
        "Collaborative approach",
        "Values alignment (trust, customer success, innovation, equality)",
      ],
    },
    {
  name: "Spotify",
  logo: "/placeholder.svg?height=80&width=80",
  description: "A digital music, podcast, and video service that gives you access to millions of songs and other content from creators all over the world.",
  interviewProcess: [
    "Initial HR screening",
    "Technical phone interview",
    "Coding assessment",
    "On-site interviews (3-5 rounds)",
  ],
  commonQuestions: [
    "Design a music recommendation system",
    "Implement a playlist shuffle algorithm",
    "How would you improve Spotify's search functionality?",
    "Explain the difference between SQL and NoSQL databases",
    "Tell me about a time you worked on a scalable system",
  ],
  hiringCriteria: [
    "Strong technical skills",
    "Problem-solving abilities",
    "Collaboration and teamwork",
    "Adaptability to new technologies",
    "Customer-focused mindset",
  ],
},
  {
    name: "IBM",
    logo: "/placeholder.svg?height=80&width=80",
    description: "A global technology and innovation company specializing in cloud computing, AI, and enterprise solutions.",
    interviewProcess: [
      "Initial HR screening",
      "Technical phone interview",
      "Coding assessment",
      "On-site interviews (3-5 rounds)",
    ],
    commonQuestions: [
      "Design a scalable cloud architecture",
      "Implement a binary search algorithm",
      "How would you improve IBM Watson?",
      "Explain the CAP theorem",
      "Tell me about a time you worked on a cross-functional team",
    ],
    hiringCriteria: [
      "Technical expertise",
      "Problem-solving skills",
      "Collaboration and teamwork",
      "Adaptability to new technologies",
      "Customer-focused mindset",
    ],
  },
  {
    name: "Oracle",
    logo: "/placeholder.svg?height=80&width=80",
    description: "A multinational computer technology corporation specializing in database software, cloud systems, and enterprise software.",
    interviewProcess: [
      "Initial HR screening",
      "Technical phone interview",
      "Coding assessment",
      "On-site interviews (3-5 rounds)",
    ],
    commonQuestions: [
      "Design a database schema for a large-scale application",
      "Implement a query optimizer",
      "How would you improve Oracle Cloud?",
      "Explain the difference between SQL and NoSQL",
      "Tell me about a time you optimized a database query",
    ],
    hiringCriteria: [
      "Strong database knowledge",
      "Problem-solving skills",
      "Communication abilities",
      "Adaptability to new technologies",
      "Customer-focused mindset",
    ],
  },
  {
    name: "Intel",
    logo: "/placeholder.svg?height=80&width=80",
    description: "A multinational corporation and technology company specializing in semiconductor chips and computing technologies.",
    interviewProcess: [
      "Initial HR screening",
      "Technical phone interview",
      "Coding assessment",
      "On-site interviews (3-5 rounds)",
    ],
    commonQuestions: [
      "Design a CPU pipeline",
      "Implement a memory management system",
      "How would you improve Intel's chip design process?",
      "Explain the difference between RISC and CISC architectures",
      "Tell me about a time you worked on a hardware-software co-design project",
    ],
    hiringCriteria: [
      "Strong technical skills",
      "Problem-solving abilities",
      "Collaboration and teamwork",
      "Adaptability to new technologies",
      "Innovation mindset",
    ],
  },
  {
    name: "NVIDIA",
    logo: "/placeholder.svg?height=80&width=80",
    description: "A multinational technology company specializing in graphics processing units (GPUs) and AI computing.",
    interviewProcess: [
      "Initial HR screening",
      "Technical phone interview",
      "Coding assessment",
      "On-site interviews (3-5 rounds)",
    ],
    commonQuestions: [
      "Design a GPU architecture",
      "Implement a parallel computing algorithm",
      "How would you improve NVIDIA's AI capabilities?",
      "Explain the difference between CUDA and OpenCL",
      "Tell me about a time you optimized a GPU-accelerated application",
    ],
    hiringCriteria: [
      "Strong technical skills",
      "Problem-solving abilities",
      "Collaboration and teamwork",
      "Adaptability to new technologies",
      "Innovation mindset",
    ],
  },
  {
    name: "Tesla",
    logo: "/placeholder.svg?height=80&width=80",
    description: "A multinational automotive and clean energy company specializing in electric vehicles and renewable energy solutions.",
    interviewProcess: [
      "Initial HR screening",
      "Technical phone interview",
      "Coding assessment",
      "On-site interviews (3-5 rounds)",
    ],
    commonQuestions: [
      "Design an autonomous driving system",
      "Implement a battery management system",
      "How would you improve Tesla's energy storage solutions?",
      "Explain the difference between AC and DC motors",
      "Tell me about a time you worked on a cross-functional team",
    ],
    hiringCriteria: [
      "Strong technical skills",
      "Problem-solving abilities",
      "Collaboration and teamwork",
      "Adaptability to new technologies",
      "Innovation mindset",
    ],
  },
  {
    name: "SpaceX",
    logo: "/placeholder.svg?height=80&width=80",
    description: "A private aerospace manufacturer and space transportation company founded by Elon Musk.",
    interviewProcess: [
      "Initial HR screening",
      "Technical phone interview",
      "Coding assessment",
      "On-site interviews (3-5 rounds)",
    ],
    commonQuestions: [
      "Design a rocket propulsion system",
      "Implement a trajectory optimization algorithm",
      "How would you improve SpaceX's satellite deployment process?",
      "Explain the difference between liquid and solid rocket fuels",
      "Tell me about a time you worked on a high-stakes project",
    ],
    hiringCriteria: [
      "Strong technical skills",
      "Problem-solving abilities",
      "Collaboration and teamwork",
      "Adaptability to new technologies",
      "Innovation mindset",
    ],
  },
  {
    name: "Uber",
    logo: "/placeholder.svg?height=80&width=80",
    description: "A multinational ride-hailing company offering services including peer-to-peer ridesharing, ride service hailing, and food delivery.",
    interviewProcess: [
      "Initial HR screening",
      "Technical phone interview",
      "Coding assessment",
      "On-site interviews (3-5 rounds)",
    ],
    commonQuestions: [
      "Design a ride-matching algorithm",
      "Implement a surge pricing system",
      "How would you improve Uber's driver-rider matching system?",
      "Explain the difference between microservices and monolithic architecture",
      "Tell me about a time you worked on a scalable system",
    ],
    hiringCriteria: [
      "Strong technical skills",
      "Problem-solving abilities",
      "Collaboration and teamwork",
      "Adaptability to new technologies",
      "Customer-focused mindset",
    ],
  },
  {
    name: "Airbnb",
    logo: "/placeholder.svg?height=80&width=80",
    description: "A global online marketplace for lodging, primarily homestays for vacation rentals, and tourism activities.",
    interviewProcess: [
      "Initial HR screening",
      "Technical phone interview",
      "Coding assessment",
      "On-site interviews (3-5 rounds)",
    ],
    commonQuestions: [
      "Design a booking system",
      "Implement a recommendation system",
      "How would you improve Airbnb's search functionality?",
      "Explain the difference between SQL and NoSQL databases",
      "Tell me about a time you worked on a user-facing feature",
    ],
    hiringCriteria: [
      "Strong technical skills",
      "Problem-solving abilities",
      "Collaboration and teamwork",
      "Adaptability to new technologies",
      "Customer-focused mindset",
    ],
  },
  {
    name: "LinkedIn",
    logo: "/placeholder.svg?height=80&width=80",
    description: "A business and employment-focused social media platform that works through websites and mobile apps.",
    interviewProcess: [
      "Initial HR screening",
      "Technical phone interview",
      "Coding assessment",
      "On-site interviews (3-5 rounds)",
    ],
    commonQuestions: [
      "Design a social network graph",
      "Implement a recommendation system",
      "How would you improve LinkedIn's news feed?",
      "Explain the difference between SQL and NoSQL databases",
      "Tell me about a time you worked on a scalable system",
    ],
    hiringCriteria: [
      "Strong technical skills",
      "Problem-solving abilities",
      "Collaboration and teamwork",
      "Adaptability to new technologies",
      "Customer-focused mindset",
    ],
  },
  {
    name: "Twitter",
    logo: "/placeholder.svg?height=80&width=80",
    description: "A microblogging and social networking service on which users post and interact with messages known as tweets.",
    interviewProcess: [
      "Initial HR screening",
      "Technical phone interview",
      "Coding assessment",
      "On-site interviews (3-5 rounds)",
    ],
    commonQuestions: [
      "Design a tweet recommendation system",
      "Implement a rate limiter",
      "How would you improve Twitter's search functionality?",
      "Explain the difference between SQL and NoSQL databases",
      "Tell me about a time you worked on a scalable system",
    ],
    hiringCriteria: [
      "Strong technical skills",
      "Problem-solving abilities",
      "Collaboration and teamwork",
      "Adaptability to new technologies",
      "Customer-focused mindset",
    ],
  },
  
];
  

  const filteredCompanies = companies.filter((company) => company.name.toLowerCase().includes(searchTerm.toLowerCase()))

  return (
    <div className="container mx-auto px-4 py-24">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl font-bold mb-4 gradient-text">Company-Wise Preparation</h1>
        <p className="text-xl text-gray-400 max-w-2xl mx-auto">
          Explore interview experiences, common questions, and hiring criteria for top companies.
        </p>
      </motion.div>

      <div className="relative max-w-md mx-auto mb-12">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
        <Input
          type="text"
          placeholder="Search companies..."
          className="pl-10 bg-gray-900 border-gray-700"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="grid gap-6"
      >
        {filteredCompanies.length > 0 ? (
          filteredCompanies.map((company, index) => (
            <motion.div
              key={company.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className="border border-gray-800 rounded-lg overflow-hidden bg-gray-900/50"
            >
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value={company.name} className="border-b-0">
                  <AccordionTrigger className="px-6 py-4 hover:bg-gray-800/50">
                    <div className="flex items-center text-left">
                      <div className="flex-shrink-0 mr-4">
                        <div className="w-12 h-12 rounded-full bg-gray-800 flex items-center justify-center">
                          <Building className="h-6 w-6 text-red-500" />
                        </div>
                      </div>
                      <div>
                        <h3 className="text-xl font-bold">{company.name}</h3>
                        <p className="text-sm text-gray-400">{company.description}</p>
                      </div>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-6">
                    <div className="grid md:grid-cols-2 gap-6 mt-4">
                      <div>
                        <h4 className="text-lg font-semibold mb-3 text-red-500">Interview Process</h4>
                        <ul className="space-y-2 list-disc list-inside text-gray-300">
                          {company.interviewProcess.map((step, i) => (
                            <li key={i}>{step}</li>
                          ))}
                        </ul>

                        <h4 className="text-lg font-semibold mb-3 mt-6 text-red-500">Hiring Criteria</h4>
                        <ul className="space-y-2 list-disc list-inside text-gray-300">
                          {company.hiringCriteria.map((criteria, i) => (
                            <li key={i}>{criteria}</li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h4 className="text-lg font-semibold mb-3 text-red-500">Common Questions</h4>
                        <ul className="space-y-2 list-disc list-inside text-gray-300">
                          {company.commonQuestions.map((question, i) => (
                            <li key={i}>{question}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </motion.div>
          ))
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-400">No companies found matching your search.</p>
          </div>
        )}
      </motion.div>
    </div>
  )
}

