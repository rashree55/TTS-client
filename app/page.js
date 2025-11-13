export default function Home() {
  return (
    <div className="min-h-screen bg-linear-to-br from-purple-50 to-blue-50">
      {/* Navigation */}
      <nav className="p-6 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-800">ScriptGen</h1>
        <div className="space-x-4">
          <a href="/login" className="text-gray-600 hover:text-gray-900">Login</a>
          <a href="/signup" className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">Sign Up</a>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="flex flex-col items-center justify-center text-center px-4" style={{minHeight: 'calc(100vh - 88px)'}}>
        <h1 className="text-6xl font-bold text-gray-900 mb-6">
          Generate Amazing Scripts
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl">
          Create professional scripts instantly with our AI-powered platform
        </p>
        <a href="/playground" className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition">
          Try Playground →
        </a>
      </div>
    </div>
  )
}