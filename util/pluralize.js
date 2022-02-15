export const pluralize = (count, noun, suffix = 's') =>
  `${noun}${count !== 1 ? suffix : ''}`;

export const pluralizeAndCount = (count, noun, suffix = 's') => `
 ${count} ${pluralize(count, noun, suffix)}
`;
