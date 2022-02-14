const Link = ({ to, children, ...props }) => {
  if (to) {
    return (
      <a href={to} target="_blank" rel="noopener noreferrer" {...props}>
        {children}
      </a>
    );
  }
  return <div {...props}>{children}</div>;
};

export default Link;
