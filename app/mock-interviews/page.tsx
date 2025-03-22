"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Shuffle, ChevronRight, RefreshCw, MessageSquare, CodeIcon, User } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function MockInterviewsPage() {
  const [currentQuestion, setCurrentQuestion] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const [activeTab, setActiveTab] = useState("technical")

  const questions = {
    technical: [
      "Explain the difference between a stack and a queue. When would you use one over the other?",
      "What is the time complexity of searching in a balanced binary search tree?",
      "Explain the concept of recursion and provide an example where it would be useful.",
      "What is the difference between a process and a thread?",
      "Explain the concept of database normalization.",
      "What is the difference between HTTP and HTTPS?",
      "Explain the concept of REST API and its principles.",
      "What is the difference between SQL and NoSQL databases?",
      "Explain the concept of inheritance in object-oriented programming.",
      "What is the difference between a shallow copy and a deep copy?",
      "Explain the concept of a hash table and its time complexity for different operations.",
      "What is the difference between synchronous and asynchronous programming?",
      "Explain the concept of a deadlock and how to prevent it.",
      "What is the difference between a compiler and an interpreter?",
      "Explain the concept of a virtual machine.",
      "What is the difference between a primary key and a foreign key in a database?",
      "Explain the concept of a load balancer and its importance in system design.",
      "What is the difference between a monolithic and a microservices architecture?",
      "Explain the concept of caching and its benefits.",
      "What is the difference between a GET and a POST request?",
    ],
    coding: [
      "Write a function to check if a string is a palindrome.",
      "Implement a function to find the maximum subarray sum.",
      "Write a function to reverse a linked list.",
      "Implement a binary search algorithm.",
      "Write a function to check if a binary tree is balanced.",
      "Implement a function to find the first non-repeating character in a string.",
      "Write a function to detect a cycle in a linked list.",
      "Implement a function to find the kth largest element in an array.",
      "Write a function to check if two strings are anagrams.",
      "Implement a function to merge two sorted arrays.",
      "Write a function to find all permutations of a string.",
      "Implement a function to find the longest common subsequence of two strings.",
      "Write a function to implement a queue using two stacks.",
      "Implement a function to find the lowest common ancestor in a binary tree.",
      "Write a function to implement a trie data structure.",
    ],
    hr: [
      "Tell me about yourself.",
      "Why do you want to work for our company?",
      "What are your strengths and weaknesses?",
      "Where do you see yourself in 5 years?",
      "Describe a challenging situation you faced at work and how you handled it.",
      "How do you handle stress and pressure?",
      "Why should we hire you?",
      "What is your greatest professional achievement?",
      "How do you work in a team?",
      "Describe a time when you had to deal with a difficult coworker.",
      "What are your salary expectations?",
      "Why are you leaving your current job?",
      "How do you stay updated with the latest technologies?",
      "What questions do you have for us?",
      "Describe a time when you had to learn something new in a short amount of time.",
      "How do you prioritize your work?",
      "What is your management style?",
      "How do you handle criticism?",
      "What motivates you?",
      "How do you define success?",
    ],
  }

  const generateRandomQuestion = () => {
    setIsLoading(true)

    // Simulate loading
    setTimeout(() => {
      const categoryQuestions = questions[activeTab]
      const randomIndex = Math.floor(Math.random() * categoryQuestions.length)
      setCurrentQuestion(categoryQuestions[randomIndex])
      setIsLoading(false)
    }, 800)
  }

  useEffect(() => {
    generateRandomQuestion()
  }, [activeTab])

  return (
    <div className="container mx-auto px-4 py-24">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl font-bold mb-4 gradient-text">Mock Interviews</h1>
        <p className="text-xl text-gray-400 max-w-2xl mx-auto">
          Practice with our random question generator to prepare for technical and HR interviews.
        </p>
      </motion.div>

      <Tabs defaultValue="technical" className="w-full" onValueChange={setActiveTab}>
        <TabsList className="grid grid-cols-3 mb-8">
          <TabsTrigger value="technical" className="data-[state=active]:bg-red-600">
            <CodeIcon className="mr-2 h-4 w-4" /> Technical
          </TabsTrigger>
          <TabsTrigger value="coding" className="data-[state=active]:bg-red-600">
            <CodeIcon className="mr-2 h-4 w-4" /> Coding
          </TabsTrigger>
          <TabsTrigger value="hr" className="data-[state=active]:bg-red-600">
            <User className="mr-2 h-4 w-4" /> HR
          </TabsTrigger>
        </TabsList>

        {Object.keys(questions).map((category) => (
          <TabsContent key={category} value={category} className="mt-0">
            <Card className="border border-gray-800 bg-gray-900/50">
              <CardHeader>
                <CardTitle className="text-xl font-bold">
                  {category === "technical" && "Technical Questions"}
                  {category === "coding" && "Coding Challenges"}
                  {category === "hr" && "HR & Behavioral Questions"}
                </CardTitle>
                <CardDescription>
                  {category === "technical" &&
                    "Test your knowledge of computer science fundamentals and system design."}
                  {category === "coding" &&
                    "Practice algorithm and data structure problems commonly asked in interviews."}
                  {category === "hr" && "Prepare for behavioral questions and company culture fit assessment."}
                </CardDescription>
              </CardHeader>
              <CardContent className="min-h-[200px] flex items-center justify-center">
                <AnimatePresence mode="wait">
                  {isLoading ? (
                    <motion.div
                      key="loading"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="flex flex-col items-center"
                    >
                      <RefreshCw className="h-10 w-10 text-red-500 animate-spin mb-4" />
                      <p className="text-gray-400">Generating question...</p>
                    </motion.div>
                  ) : (
                    <motion.div
                      key="question"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      className="text-center"
                    >
                      <div className="flex items-start mb-4">
                        <MessageSquare className="h-6 w-6 text-red-500 mr-3 flex-shrink-0 mt-1" />
                        <p className="text-xl font-medium text-left">{currentQuestion}</p>
                      </div>
                      {category === "coding" && (
                        <div className="mt-6 p-4 bg-gray-800 rounded-md text-left">
                          <p className="text-gray-400 text-sm mb-2">// Write your solution here</p>
                          <p className="text-gray-300 font-mono">function solution() {"{"}</p>
                          <p className="text-gray-300 font-mono ml-4">// Your code here</p>
                          <p className="text-gray-300 font-mono">{"}"}</p>
                        </div>
                      )}
                    </motion.div>
                  )}
                </AnimatePresence>
              </CardContent>
              <CardFooter className="flex justify-center">
                <Button onClick={generateRandomQuestion} className="bg-red-600 hover:bg-red-700" disabled={isLoading}>
                  <Shuffle className="mr-2 h-4 w-4" />
                  Generate New Question
                </Button>
              </CardFooter>
            </Card>

            <div className="mt-8">
              <h3 className="text-xl font-bold mb-4">Interview Tips</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="border border-gray-800 bg-gray-900/50">
                  <CardHeader>
                    <CardTitle className="text-lg font-bold text-red-500">Do's</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {category === "technical" && (
                        <>
                          <li className="flex items-start">
                            <ChevronRight className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                            <span>Think out loud and explain your thought process</span>
                          </li>
                          <li className="flex items-start">
                            <ChevronRight className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                            <span>Ask clarifying questions when needed</span>
                          </li>
                          <li className="flex items-start">
                            <ChevronRight className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                            <span>Relate concepts to real-world applications</span>
                          </li>
                        </>
                      )}
                      {category === "coding" && (
                        <>
                          <li className="flex items-start">
                            <ChevronRight className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                            <span>Understand the problem before coding</span>
                          </li>
                          <li className="flex items-start">
                            <ChevronRight className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                            <span>Discuss time and space complexity</span>
                          </li>
                          <li className="flex items-start">
                            <ChevronRight className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                            <span>Test your solution with examples</span>
                          </li>
                        </>
                      )}
                      {category === "hr" && (
                        <>
                          <li className="flex items-start">
                            <ChevronRight className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                            <span>Use the STAR method for behavioral questions</span>
                          </li>
                          <li className="flex items-start">
                            <ChevronRight className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                            <span>Research the company beforehand</span>
                          </li>
                          <li className="flex items-start">
                            <ChevronRight className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                            <span>Prepare specific examples from your experience</span>
                          </li>
                        </>
                      )}
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border border-gray-800 bg-gray-900/50">
                  <CardHeader>
                    <CardTitle className="text-lg font-bold text-red-500">Don'ts</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {category === "technical" && (
                        <>
                          <li className="flex items-start">
                            <ChevronRight className="h-5 w-5 text-red-500 mr-2 flex-shrink-0 mt-0.5" />
                            <span>Give one-word answers without explanation</span>
                          </li>
                          <li className="flex items-start">
                            <ChevronRight className="h-5 w-5 text-red-500 mr-2 flex-shrink-0 mt-0.5" />
                            <span>Pretend to know something you don't</span>
                          </li>
                          <li className="flex items-start">
                            <ChevronRight className="h-5 w-5 text-red-500 mr-2 flex-shrink-0 mt-0.5" />
                            <span>Rush through answers without proper thought</span>
                          </li>
                        </>
                      )}
                      {category === "coding" && (
                        <>
                          <li className="flex items-start">
                            <ChevronRight className="h-5 w-5 text-red-500 mr-2 flex-shrink-0 mt-0.5" />
                            <span>Start coding without a plan</span>
                          </li>
                          <li className="flex items-start">
                            <ChevronRight className="h-5 w-5 text-red-500 mr-2 flex-shrink-0 mt-0.5" />
                            <span>Ignore edge cases</span>
                          </li>
                          <li className="flex items-start">
                            <ChevronRight className="h-5 w-5 text-red-500 mr-2 flex-shrink-0 mt-0.5" />
                            <span>Write code without explaining your approach</span>
                          </li>
                        </>
                      )}
                      {category === "hr" && (
                        <>
                          <li className="flex items-start">
                            <ChevronRight className="h-5 w-5 text-red-500 mr-2 flex-shrink-0 mt-0.5" />
                            <span>Speak negatively about previous employers</span>
                          </li>
                          <li className="flex items-start">
                            <ChevronRight className="h-5 w-5 text-red-500 mr-2 flex-shrink-0 mt-0.5" />
                            <span>Give generic answers without personal examples</span>
                          </li>
                          <li className="flex items-start">
                            <ChevronRight className="h-5 w-5 text-red-500 mr-2 flex-shrink-0 mt-0.5" />
                            <span>Appear unprepared for common questions</span>
                          </li>
                        </>
                      )}
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  )
}

