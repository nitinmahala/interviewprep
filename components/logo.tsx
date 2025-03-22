import { Briefcase } from "lucide-react"
import Link from "next/link"

export default function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2">
      <div className="relative flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-red-500 to-red-700 shadow-lg">
        <Briefcase className="h-5 w-5 text-white" />
        <div className="absolute -right-1 -top-1 h-3 w-3 rounded-full bg-white" />
      </div>
      <span className="text-xl font-bold bg-gradient-to-r from-red-500 to-red-700 bg-clip-text text-transparent">
        Interview Prep Hub
      </span>
    </Link>
  )
}

