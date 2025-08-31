const Logo = () => {
  return (
    <div className="flex items-center space-x-3 cursor-pointer group select-none">
      {/* Code symbol */}
      <div className="text-3xl font-extrabold text-indigo-600 group-hover:text-indigo-400 transition-colors duration-300">
        &lt;/&gt;
      </div>

      {/* Brand Name */}
      <span className="text-2xl font-semibold text-gray-800 group-hover:text-indigo-600 transition-colors duration-300">
        Alvin
      </span>
    </div>
  );
};

export default Logo;
