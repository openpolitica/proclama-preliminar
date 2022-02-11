const formatDate = date => {
  const options = {
    day: 'numeric',
    year: 'numeric',
    month: 'long',
  };

  return new Date(date).toLocaleDateString('ES-pe', options);
};

export default formatDate;
