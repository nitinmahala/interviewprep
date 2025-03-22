import Link from "next/link"
import { Facebook, Twitter, Linkedin, Github, Mail, Heart } from "lucide-react"
import Logo from "./logo"

export default function Footer() {
  return (
    <footer className="border-t border-gray-800 bg-black">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div className="space-y-4">
            <Logo />
            <p className="text-sm text-gray-400 mt-4">
              Your one-stop destination for comprehensive interview preparation resources, roadmaps, and practice tools.
            </p>
            <div className="flex space-x-4">
              
              
              <Link href="https://www.linkedin.com/in/mahalanitin/" className="text-gray-400 hover:text-red-500 transition-colors">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link href="https://github.com/nitinmahala" className="text-gray-400 hover:text-red-500 transition-colors">
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-400 hover:text-red-500 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/company-wise" className="text-gray-400 hover:text-red-500 transition-colors">
                  Company-Wise Prep
                </Link>
              </li>
              <li>
                <Link href="/roadmaps" className="text-gray-400 hover:text-red-500 transition-colors">
                  Career Roadmaps
                </Link>
              </li>
              <li>
                <Link href="/resources" className="text-gray-400 hover:text-red-500 transition-colors">
                  Resources
                </Link>
              </li>
              <li>
                <Link href="/mock-interviews" className="text-gray-400 hover:text-red-500 transition-colors">
                  Mock Interviews
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/resume-guide" className="text-gray-400 hover:text-red-500 transition-colors">
                  Resume Guide
                </Link>
              </li>
              <li>
                <Link href="/interview-tips" className="text-gray-400 hover:text-red-500 transition-colors">
                  Interview Tips
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-red-500 transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-red-500 transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-red-500 transition-colors">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Contact Us</h3>
            <ul className="space-y-2">
              <li className="flex items-center gap-2 text-gray-400">
                <Mail className="h-4 w-4 text-red-500" />
                <span>support@interviewprephub.com</span>
              </li>
            </ul>
            <div className="mt-6">
              <h4 className="text-sm font-semibold mb-2 text-white">Subscribe to our newsletter</h4>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your email"
                  className="w-full rounded-l-md border border-gray-800 bg-gray-900 px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-red-500"
                />
                <button className="rounded-r-md bg-red-600 px-3 py-2 text-sm font-medium text-white hover:bg-red-700">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-800 pt-6 text-center">
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} Interview Prep Hub. All rights reserved. Made with{" "}
            <Heart className="inline h-4 w-4 text-red-500" /> for job seekers.
          </p>
        </div>
      </div>
    </footer>
  )
}

