const HeadingSection = ({ tagline, title, children, className = "" }) => {
  return (
    <div className={className}>
      {tagline && (
        <p className="text-(length:--tag-size)! font-medium">{tagline}</p>
      )}
      <div className="flex flex-col gap-4">
        <h3>{title}</h3>
        {children}
      </div>
    </div>
  );
};

export default HeadingSection;
