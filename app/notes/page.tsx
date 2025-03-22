"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Plus, Search, Trash2, Edit, Filter } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Checkbox } from "@/components/ui/checkbox"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

// Define types
type Category = {
  id: string
  name: string
  color: string
}

type Note = {
  id: string
  title: string
  content: string
  categories: string[]
  createdAt: Date
  isPinned: boolean
}

type Todo = {
  id: string
  text: string
  completed: boolean
  categories: string[]
  createdAt: Date
}

export default function NotesPage() {
  // State for notes and todos
  const [notes, setNotes] = useState<Note[]>([])
  const [todos, setTodos] = useState<Todo[]>([])
  const [categories, setCategories] = useState<Category[]>([
    { id: "1", name: "Algorithm", color: "bg-blue-500" },
    { id: "2", name: "Database", color: "bg-green-500" },
    { id: "3", name: "DSA", color: "bg-yellow-500" },
    { id: "4", name: "System Design", color: "bg-purple-500" },
    { id: "5", name: "Interview Questions", color: "bg-red-500" },
    { id: "6", name: "General", color: "bg-gray-500" },
  ])

  // State for filters
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategories, setSelectedCategories] = useState<string[]>([])
  const [showFilters, setShowFilters] = useState(false)

  // State for editing
  const [editingNote, setEditingNote] = useState<Note | null>(null)
  const [newNoteTitle, setNewNoteTitle] = useState("")
  const [newNoteContent, setNewNoteContent] = useState("")
  const [newNoteCategories, setNewNoteCategories] = useState<string[]>([])

  // State for todos
  const [newTodoText, setNewTodoText] = useState("")
  const [newTodoCategories, setNewTodoCategories] = useState<string[]>([])

  // Load data from localStorage on component mount
  useEffect(() => {
    const savedNotes = localStorage.getItem("notes")
    const savedTodos = localStorage.getItem("todos")

    if (savedNotes) {
      try {
        const parsedNotes = JSON.parse(savedNotes)
        // Convert string dates back to Date objects
        setNotes(
          parsedNotes.map((note: any) => ({
            ...note,
            createdAt: new Date(note.createdAt),
          })),
        )
      } catch (error) {
        console.error("Error parsing saved notes:", error)
      }
    }

    if (savedTodos) {
      try {
        const parsedTodos = JSON.parse(savedTodos)
        setTodos(
          parsedTodos.map((todo: any) => ({
            ...todo,
            createdAt: new Date(todo.createdAt),
          })),
        )
      } catch (error) {
        console.error("Error parsing saved todos:", error)
      }
    }
  }, [])

  // Save data to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes))
  }, [notes])

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }, [todos])

  // Filter notes based on search term and selected categories
  const filteredNotes = notes.filter((note) => {
    const matchesSearch =
      note.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      note.content.toLowerCase().includes(searchTerm.toLowerCase())

    const matchesCategories =
      selectedCategories.length === 0 || selectedCategories.some((catId) => note.categories.includes(catId))

    return matchesSearch && matchesCategories
  })

  // Filter todos based on search term and selected categories
  const filteredTodos = todos.filter((todo) => {
    const matchesSearch = todo.text.toLowerCase().includes(searchTerm.toLowerCase())

    const matchesCategories =
      selectedCategories.length === 0 || selectedCategories.some((catId) => todo.categories.includes(catId))

    return matchesSearch && matchesCategories
  })

  // Sort notes with pinned notes first, then by date
  const sortedNotes = [...filteredNotes].sort((a, b) => {
    if (a.isPinned && !b.isPinned) return -1
    if (!a.isPinned && b.isPinned) return 1
    return b.createdAt.getTime() - a.createdAt.getTime()
  })

  // Add a new note
  const addNote = () => {
    if (!newNoteTitle.trim()) return

    const newNote: Note = {
      id: Date.now().toString(),
      title: newNoteTitle,
      content: newNoteContent,
      categories: newNoteCategories,
      createdAt: new Date(),
      isPinned: false,
    }

    setNotes([...notes, newNote])
    setNewNoteTitle("")
    setNewNoteContent("")
    setNewNoteCategories([])
  }

  // Update an existing note
  const updateNote = () => {
    if (!editingNote || !newNoteTitle.trim()) return

    setNotes(
      notes.map((note) =>
        note.id === editingNote.id
          ? {
              ...note,
              title: newNoteTitle,
              content: newNoteContent,
              categories: newNoteCategories,
            }
          : note,
      ),
    )

    setEditingNote(null)
    setNewNoteTitle("")
    setNewNoteContent("")
    setNewNoteCategories([])
  }

  // Delete a note
  const deleteNote = (id: string) => {
    setNotes(notes.filter((note) => note.id !== id))
  }

  // Toggle pin status of a note
  const togglePinNote = (id: string) => {
    setNotes(notes.map((note) => (note.id === id ? { ...note, isPinned: !note.isPinned } : note)))
  }

  // Start editing a note
  const startEditingNote = (note: Note) => {
    setEditingNote(note)
    setNewNoteTitle(note.title)
    setNewNoteContent(note.content)
    setNewNoteCategories([...note.categories])
  }

  // Add a new todo
  const addTodo = () => {
    if (!newTodoText.trim()) return

    const newTodo: Todo = {
      id: Date.now().toString(),
      text: newTodoText,
      completed: false,
      categories: newTodoCategories,
      createdAt: new Date(),
    }

    setTodos([...todos, newTodo])
    setNewTodoText("")
    setNewTodoCategories([])
  }

  // Toggle todo completion status
  const toggleTodoCompleted = (id: string) => {
    setTodos(todos.map((todo) => (todo.id === id ? { ...todo, completed: !todo.completed } : todo)))
  }

  // Delete a todo
  const deleteTodo = (id: string) => {
    setTodos(todos.filter((todo) => todo.id !== id))
  }

  // Toggle category selection for filtering
  const toggleCategoryFilter = (categoryId: string) => {
    setSelectedCategories((prev) =>
      prev.includes(categoryId) ? prev.filter((id) => id !== categoryId) : [...prev, categoryId],
    )
  }

  // Toggle category selection for a new note
  const toggleNoteCategory = (categoryId: string) => {
    setNewNoteCategories((prev) =>
      prev.includes(categoryId) ? prev.filter((id) => id !== categoryId) : [...prev, categoryId],
    )
  }

  // Toggle category selection for a new todo
  const toggleTodoCategory = (categoryId: string) => {
    setNewTodoCategories((prev) =>
      prev.includes(categoryId) ? prev.filter((id) => id !== categoryId) : [...prev, categoryId],
    )
  }

  // Get category name by ID
  const getCategoryName = (categoryId: string) => {
    return categories.find((cat) => cat.id === categoryId)?.name || "Unknown"
  }

  // Get category color by ID
  const getCategoryColor = (categoryId: string) => {
    return categories.find((cat) => cat.id === categoryId)?.color || "bg-gray-500"
  }

  return (
    <div className="container mx-auto px-4 py-24">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl font-bold mb-4 gradient-text">Notes & Todos</h1>
        <p className="text-xl text-gray-400 max-w-2xl mx-auto">
          Keep track of your interview preparation with notes and to-do lists.
        </p>
      </motion.div>

      {/* Search and Filter Bar */}
      <div className="flex flex-col md:flex-row gap-4 mb-8">
        <div className="relative flex-grow">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
          <Input
            type="text"
            placeholder="Search notes and todos..."
            className="pl-10 bg-gray-900 border-gray-700"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <Button
          variant="outline"
          className="border-gray-700 text-gray-300"
          onClick={() => setShowFilters(!showFilters)}
        >
          <Filter className="mr-2 h-4 w-4" />
          Filter by Category
        </Button>
      </div>

      {/* Category Filters */}
      {showFilters && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="mb-8 p-4 border border-gray-800 rounded-lg bg-gray-900/50"
        >
          <h3 className="text-lg font-semibold mb-4">Filter by Categories</h3>
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <Badge
                key={category.id}
                variant={selectedCategories.includes(category.id) ? "default" : "outline"}
                className={`cursor-pointer ${selectedCategories.includes(category.id) ? category.color : "bg-transparent"}`}
                onClick={() => toggleCategoryFilter(category.id)}
              >
                {category.name}
              </Badge>
            ))}
          </div>
          {selectedCategories.length > 0 && (
            <Button variant="ghost" size="sm" className="mt-2 text-gray-400" onClick={() => setSelectedCategories([])}>
              Clear Filters
            </Button>
          )}
        </motion.div>
      )}

      <Tabs defaultValue="notes" className="w-full">
        <TabsList className="grid grid-cols-2 mb-8">
          <TabsTrigger value="notes" className="data-[state=active]:bg-red-600">
            Notes
          </TabsTrigger>
          <TabsTrigger value="todos" className="data-[state=active]:bg-red-600">
            To-Do List
          </TabsTrigger>
        </TabsList>

        {/* Notes Tab */}
        <TabsContent value="notes">
          <div className="mb-8">
            <Dialog>
              <DialogTrigger asChild>
                <Button className="w-full bg-red-600 hover:bg-red-700">
                  <Plus className="mr-2 h-4 w-4" /> Add New Note
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[525px] bg-gray-900 border-gray-800">
                <DialogHeader>
                  <DialogTitle>Add New Note</DialogTitle>
                  <DialogDescription>Create a new note for your interview preparation.</DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                  <div className="grid gap-2">
                    <label htmlFor="title" className="text-sm font-medium">
                      Title
                    </label>
                    <Input
                      id="title"
                      placeholder="Note title"
                      className="bg-gray-800 border-gray-700"
                      value={newNoteTitle}
                      onChange={(e) => setNewNoteTitle(e.target.value)}
                    />
                  </div>
                  <div className="grid gap-2">
                    <label htmlFor="content" className="text-sm font-medium">
                      Content
                    </label>
                    <Textarea
                      id="content"
                      placeholder="Note content"
                      className="min-h-[150px] bg-gray-800 border-gray-700"
                      value={newNoteContent}
                      onChange={(e) => setNewNoteContent(e.target.value)}
                    />
                  </div>
                  <div className="grid gap-2">
                    <label className="text-sm font-medium">Categories</label>
                    <div className="flex flex-wrap gap-2">
                      {categories.map((category) => (
                        <Badge
                          key={category.id}
                          variant={newNoteCategories.includes(category.id) ? "default" : "outline"}
                          className={`cursor-pointer ${newNoteCategories.includes(category.id) ? category.color : "bg-transparent"}`}
                          onClick={() => toggleNoteCategory(category.id)}
                        >
                          {category.name}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
                <DialogFooter>
                  <Button type="submit" className="bg-red-600 hover:bg-red-700" onClick={addNote}>
                    Save Note
                  </Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </div>

          {/* Edit Note Dialog */}
          {editingNote && (
            <Dialog open={!!editingNote} onOpenChange={(open) => !open && setEditingNote(null)}>
              <DialogContent className="sm:max-w-[525px] bg-gray-900 border-gray-800">
                <DialogHeader>
                  <DialogTitle>Edit Note</DialogTitle>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                  <div className="grid gap-2">
                    <label htmlFor="edit-title" className="text-sm font-medium">
                      Title
                    </label>
                    <Input
                      id="edit-title"
                      placeholder="Note title"
                      className="bg-gray-800 border-gray-700"
                      value={newNoteTitle}
                      onChange={(e) => setNewNoteTitle(e.target.value)}
                    />
                  </div>
                  <div className="grid gap-2">
                    <label htmlFor="edit-content" className="text-sm font-medium">
                      Content
                    </label>
                    <Textarea
                      id="edit-content"
                      placeholder="Note content"
                      className="min-h-[150px] bg-gray-800 border-gray-700"
                      value={newNoteContent}
                      onChange={(e) => setNewNoteContent(e.target.value)}
                    />
                  </div>
                  <div className="grid gap-2">
                    <label className="text-sm font-medium">Categories</label>
                    <div className="flex flex-wrap gap-2">
                      {categories.map((category) => (
                        <Badge
                          key={category.id}
                          variant={newNoteCategories.includes(category.id) ? "default" : "outline"}
                          className={`cursor-pointer ${newNoteCategories.includes(category.id) ? category.color : "bg-transparent"}`}
                          onClick={() => toggleNoteCategory(category.id)}
                        >
                          {category.name}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
                <DialogFooter>
                  <Button variant="outline" onClick={() => setEditingNote(null)}>
                    Cancel
                  </Button>
                  <Button className="bg-red-600 hover:bg-red-700" onClick={updateNote}>
                    Update Note
                  </Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          )}

          {/* Notes List */}
          {sortedNotes.length > 0 ? (
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {sortedNotes.map((note) => (
                <Card
                  key={note.id}
                  className={`border border-gray-800 ${note.isPinned ? "bg-gray-800/50" : "bg-gray-900/50"}`}
                >
                  <CardHeader className="pb-2">
                    <div className="flex justify-between items-start">
                      <CardTitle className="text-xl">{note.title}</CardTitle>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="icon" className="h-8 w-8">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <circle cx="12" cy="12" r="1" />
                              <circle cx="12" cy="5" r="1" />
                              <circle cx="12" cy="19" r="1" />
                            </svg>
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end" className="bg-gray-900 border-gray-800">
                          <DropdownMenuItem onClick={() => startEditingNote(note)} className="cursor-pointer">
                            <Edit className="mr-2 h-4 w-4" /> Edit
                          </DropdownMenuItem>
                          <DropdownMenuItem onClick={() => togglePinNote(note.id)} className="cursor-pointer">
                            {note.isPinned ? (
                              <>
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="16"
                                  height="16"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="currentColor"
                                  strokeWidth="2"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  className="mr-2"
                                >
                                  <line x1="18" y1="6" x2="6" y2="18" />
                                  <line x1="6" y1="6" x2="18" y2="18" />
                                </svg>{" "}
                                Unpin
                              </>
                            ) : (
                              <>
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="16"
                                  height="16"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="currentColor"
                                  strokeWidth="2"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  className="mr-2"
                                >
                                  <line x1="12" y1="17" x2="12" y2="22" />
                                  <path d="M5 17h14v-1.76a2 2 0 0 0-1.11-1.79l-1.78-.9A2 2 0 0 1 15 10.76V6h1a2 2 0 0 0 0-4H8a2 2 0 0 0 0 4h1v4.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24Z" />
                                </svg>{" "}
                                Pin
                              </>
                            )}
                          </DropdownMenuItem>
                          <DropdownMenuItem onClick={() => deleteNote(note.id)} className="cursor-pointer text-red-500">
                            <Trash2 className="mr-2 h-4 w-4" /> Delete
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </div>
                    <CardDescription className="text-xs text-gray-400">
                      {new Date(note.createdAt).toLocaleDateString()}{" "}
                      {note.isPinned && <span className="text-red-500 ml-2">• Pinned</span>}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm whitespace-pre-line">{note.content}</p>
                    {note.categories.length > 0 && (
                      <div className="flex flex-wrap gap-1 mt-4">
                        {note.categories.map((categoryId) => (
                          <Badge key={categoryId} className={`${getCategoryColor(categoryId)} text-xs`}>
                            {getCategoryName(categoryId)}
                          </Badge>
                        ))}
                      </div>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <div className="text-center py-12 border border-dashed border-gray-700 rounded-lg">
              <p className="text-gray-400">No notes found. Create your first note!</p>
            </div>
          )}
        </TabsContent>

        {/* Todos Tab */}
        <TabsContent value="todos">
          <div className="mb-8">
            <Card className="border border-gray-800 bg-gray-900/50">
              <CardHeader>
                <CardTitle>Add New Todo</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col gap-4">
                  <Input
                    placeholder="What do you need to do?"
                    className="bg-gray-800 border-gray-700"
                    value={newTodoText}
                    onChange={(e) => setNewTodoText(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && addTodo()}
                  />
                  <div className="flex flex-wrap gap-2">
                    {categories.map((category) => (
                      <Badge
                        key={category.id}
                        variant={newTodoCategories.includes(category.id) ? "default" : "outline"}
                        className={`cursor-pointer ${newTodoCategories.includes(category.id) ? category.color : "bg-transparent"}`}
                        onClick={() => toggleTodoCategory(category.id)}
                      >
                        {category.name}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full bg-red-600 hover:bg-red-700" onClick={addTodo}>
                  <Plus className="mr-2 h-4 w-4" /> Add Todo
                </Button>
              </CardFooter>
            </Card>
          </div>

          {/* Todos List */}
          {filteredTodos.length > 0 ? (
            <div className="space-y-2">
              {filteredTodos.map((todo) => (
                <div
                  key={todo.id}
                  className={`flex items-start gap-3 p-4 border border-gray-800 rounded-lg ${
                    todo.completed ? "bg-gray-800/30" : "bg-gray-900/50"
                  }`}
                >
                  <Checkbox
                    checked={todo.completed}
                    onCheckedChange={() => toggleTodoCompleted(todo.id)}
                    className="mt-1"
                  />
                  <div className="flex-grow">
                    <p className={`${todo.completed ? "line-through text-gray-500" : "text-gray-200"}`}>{todo.text}</p>
                    {todo.categories.length > 0 && (
                      <div className="flex flex-wrap gap-1 mt-2">
                        {todo.categories.map((categoryId) => (
                          <Badge key={categoryId} className={`${getCategoryColor(categoryId)} text-xs`}>
                            {getCategoryName(categoryId)}
                          </Badge>
                        ))}
                      </div>
                    )}
                    <p className="text-xs text-gray-500 mt-1">{new Date(todo.createdAt).toLocaleDateString()}</p>
                  </div>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-8 w-8 text-red-500 hover:text-red-400"
                    onClick={() => deleteTodo(todo.id)}
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12 border border-dashed border-gray-700 rounded-lg">
              <p className="text-gray-400">No todos found. Add your first todo!</p>
            </div>
          )}
        </TabsContent>
      </Tabs>
    </div>
  )
}

