"use client"

import { motion } from "framer-motion"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, X, Clock, Lightbulb, Shirt } from "lucide-react"

export default function InterviewTipsPage() {
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

  const tips = {
    dos: [
      {
        title: "Research the Company",
        description: "Thoroughly research the company's products, services, culture, and recent news.",
        icon: <CheckCircle className="h-10 w-10 text-green-500" />,
      },
      {
        title: "Prepare Questions",
        description: "Prepare thoughtful questions that demonstrate your interest in the role and company.",
        icon: <CheckCircle className="h-10 w-10 text-green-500" />,
      },
      {
        title: "Practice Common Questions",
        description: "Practice answering common interview questions using the STAR method for behavioral questions.",
        icon: <CheckCircle className="h-10 w-10 text-green-500" />,
      },
      {
        title: "Arrive Early",
        description:
          "Aim to arrive 10-15 minutes early for in-person interviews or log in 5 minutes early for virtual ones.",
        icon: <CheckCircle className="h-10 w-10 text-green-500" />,
      },
      {
        title: "Show Enthusiasm",
        description: "Demonstrate genuine interest and enthusiasm for the role and company throughout the interview.",
        icon: <CheckCircle className="h-10 w-10 text-green-500" />,
      },
      {
        title: "Follow Up",
        description: "Send a thank-you email within 24 hours of the interview to express your appreciation.",
        icon: <CheckCircle className="h-10 w-10 text-green-500" />,
      },
    ],
    donts: [
      {
        title: "Don't Be Late",
        description: "Being late creates a negative first impression that's difficult to overcome.",
        icon: <X className="h-10 w-10 text-red-500" />,
      },
      {
        title: "Don't Badmouth Previous Employers",
        description: "Speaking negatively about past employers raises red flags about your professionalism.",
        icon: <X className="h-10 w-10 text-red-500" />,
      },
      {
        title: "Don't Lie or Exaggerate",
        description:
          "Be honest about your experience and skills. Lies are often discovered and lead to disqualification.",
        icon: <X className="h-10 w-10 text-red-500" />,
      },
      {
        title: "Don't Appear Disinterested",
        description: "Avoid checking your phone, looking at the clock, or appearing bored during the interview.",
        icon: <X className="h-10 w-10 text-red-500" />,
      },
      {
        title: "Don't Interrupt",
        description: "Let the interviewer finish their questions before responding. Active listening is crucial.",
        icon: <X className="h-10 w-10 text-red-500" />,
      },
      {
        title: "Don't Focus Only on Salary",
        description: "Avoid making compensation the main focus of early interview stages.",
        icon: <X className="h-10 w-10 text-red-500" />,
      },
    ],
    lastMinute: [
      {
        title: "Review Job Description",
        description: "Refresh your memory on the key requirements and responsibilities of the role.",
        icon: <Clock className="h-10 w-10 text-yellow-500" />,
      },
      {
        title: "Company Research Recap",
        description: "Review key facts about the company, including mission, values, and recent news.",
        icon: <Clock className="h-10 w-10 text-yellow-500" />,
      },
      {
        title: "Technical Concepts",
        description: "Review fundamental concepts related to your field that might come up in technical discussions.",
        icon: <Clock className="h-10 w-10 text-yellow-500" />,
      },
      {
        title: "Prepare Your Introduction",
        description: "Practice your response to 'Tell me about yourself' one more time.",
        icon: <Clock className="h-10 w-10 text-yellow-500" />,
      },
      {
        title: "Check Your Setup",
        description: "For virtual interviews, test your camera, microphone, and internet connection.",
        icon: <Clock className="h-10 w-10 text-yellow-500" />,
      },
      {
        title: "Prepare Your Environment",
        description: "Ensure your interview space is clean, quiet, and professional-looking.",
        icon: <Clock className="h-10 w-10 text-yellow-500" />,
      },
    ],
    dressing: [
      {
        title: "Research Company Culture",
        description: "Research the company's dress code and culture to determine appropriate attire.",
        icon: <Shirt className="h-10 w-10 text-blue-500" />,
      },
      {
        title: "Business Professional",
        description: "For formal companies: suit and tie for men; business suit or dress with blazer for women.",
        icon: <Shirt className="h-10 w-10 text-blue-500" />,
      },
      {
        title: "Business Casual",
        description:
          "For most tech companies: button-down shirt and slacks for men; blouse with slacks or skirt for women.",
        icon: <Shirt className="h-10 w-10 text-blue-500" />,
      },
      {
        title: "Startup Casual",
        description:
          "For startups: clean, neat casual clothing that's still professional (no jeans with holes or graphic tees).",
        icon: <Shirt className="h-10 w-10 text-blue-500" />,
      },
      {
        title: "Virtual Interview Attire",
        description: "Dress professionally from head to waist (at minimum) for video interviews.",
        icon: <Shirt className="h-10 w-10 text-blue-500" />,
      },
      {
        title: "Grooming",
        description: "Ensure neat, clean appearance with well-groomed hair and minimal cologne/perfume.",
        icon: <Shirt className="h-10 w-10 text-blue-500" />,
      },
    ],
  }

  return (
    <div className="container mx-auto px-4 py-24">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl font-bold mb-4 gradient-text">Interview Tips</h1>
        <p className="text-xl text-gray-400 max-w-2xl mx-auto">
          Master the art of interviewing with our comprehensive guide to do's, don'ts, and preparation tips.
        </p>
      </motion.div>

      <Tabs defaultValue="dos" className="w-full">
        <TabsList className="grid grid-cols-2 md:grid-cols-4 mb-8">
          <TabsTrigger value="dos" className="data-[state=active]:bg-red-600">
            <CheckCircle className="mr-2 h-4 w-4" /> Do's
          </TabsTrigger>
          <TabsTrigger value="donts" className="data-[state=active]:bg-red-600">
            <X className="mr-2 h-4 w-4" /> Don'ts
          </TabsTrigger>
          <TabsTrigger value="lastMinute" className="data-[state=active]:bg-red-600">
            <Clock className="mr-2 h-4 w-4" /> Last-Minute Prep
          </TabsTrigger>
          <TabsTrigger value="dressing" className="data-[state=active]:bg-red-600">
            <Shirt className="mr-2 h-4 w-4" /> Dressing Guide
          </TabsTrigger>
        </TabsList>

        {Object.keys(tips).map((category) => (
          <TabsContent key={category} value={category}>
            <motion.div
              variants={container}
              initial="hidden"
              animate="show"
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {tips[category].map((tip, index) => (
                <motion.div key={index} variants={item}>
                  <Card className="border border-gray-800 bg-gray-900/50 h-full">
                    <CardHeader className="flex flex-row items-center gap-4">
                      <div className="flex-shrink-0">{tip.icon}</div>
                      <div>
                        <CardTitle className="text-xl font-bold">{tip.title}</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-300">{tip.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>

            {category === "dos" && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                className="mt-12"
              >
                <Card className="border border-gray-800 bg-gray-900/50">
                  <CardHeader>
                    <CardTitle className="text-xl font-bold flex items-center">
                      <Lightbulb className="h-6 w-6 text-yellow-500 mr-2" />
                      Pro Tip: The STAR Method
                    </CardTitle>
                    <CardDescription>
                      Use this framework to structure your answers to behavioral interview questions.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h3 className="font-bold text-red-500 mb-2">S - Situation</h3>
                        <p className="text-gray-300 mb-4">
                          Describe the context or background. What was the scenario, problem, or challenge?
                        </p>
                        <h3 className="font-bold text-red-500 mb-2">T - Task</h3>
                        <p className="text-gray-300">
                          Explain your responsibility or role in that situation. What were you tasked with?
                        </p>
                      </div>
                      <div>
                        <h3 className="font-bold text-red-500 mb-2">A - Action</h3>
                        <p className="text-gray-300 mb-4">
                          Describe the specific actions you took to address the situation. What did you do and how?
                        </p>
                        <h3 className="font-bold text-red-500 mb-2">R - Result</h3>
                        <p className="text-gray-300">
                          Share the outcomes of your actions. Quantify results when possible and highlight what you
                          learned.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            )}
          </TabsContent>
        ))}
      </Tabs>
    </div>
  )
}

