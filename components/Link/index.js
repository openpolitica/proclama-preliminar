const Link = ({ to, children }) => {
  if (to) {
    return (
      <a href={to} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    );
  }
  return <div>{children}</div>;
};

export default Link;
