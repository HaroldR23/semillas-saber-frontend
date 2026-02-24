const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1 className="text-4xl font-bold mb-4">Welcome to the Landing Page</h1>
      <p className="text-lg text-gray-600 mb-8">This is a simple landing page built with Next.js and Tailwind CSS.</p>
      <a href="/dashboard" className="px-6 py-3 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-300">Go to Dashboard</a>
    </div>
  );
};

export default Home;
