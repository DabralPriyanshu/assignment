const Loader = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="flex flex-col items-center gap-4">
        <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
        <p className="text-gray-600 font-medium tracking-wide">
          Checking authentication...
        </p>
      </div>
    </div>
  );
};

export default Loader;
