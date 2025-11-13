export default function Playground() {
  return (
    <div className="min-h-screen bg-linear-to-br from-purple-50 to-blue-50 p-8">
   
      <div className="mb-8">
        <a href="/" className="text-blue-600 hover:underline mb-4 inline-block">← Back to Home</a>
        <h1 className="text-4xl font-bold text-gray-900">Script Playground</h1>
        <p className="text-gray-600 mt-2">Generate your custom scripts here</p>
      </div>

      <div className="max-w-2xl mx-auto">
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Script Generator</h2>
          <p className="text-gray-600 mb-6">
            Click the button below to generate your script. Our AI will create a custom script based on your preferences.
          </p>
          
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Script Description (Optional)
            </label>
            <textarea 
              className="w-full border border-gray-300 rounded-lg p-3 h-32 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Describe what kind of script you want to generate..."
            ></textarea>
          </div>

          <button className="w-full bg-linear-to-r from-blue-600 to-purple-600 text-white rounded-lg p-4 text-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition transform hover:scale-105 shadow-lg">
            ✨ Generate Script
          </button>

          <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
            <p className="text-sm text-blue-800">
              💡 <strong>Tip:</strong> The more specific your description, the better the generated script will be!
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}