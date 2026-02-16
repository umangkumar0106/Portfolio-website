
const SectionHeader = ({ title, subtitle }) => {
  return (
    <div className="mb-16 text-center">
      <h2 className="mb-4 text-4xl font-bold text-transparent md:text-5xl bg-linear-to-r from-blue-500 to-blue-600 bg-clip-text">
        {title}
      </h2>
      {subtitle && (
        <p className="text-lg text-gray-600">
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionHeader;
