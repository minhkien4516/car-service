module.exports = (information) => {
  if (typeof information !== 'object') {
    throw new Error('Information must be an object!');
  }

  const params = Object.keys(information)
    .map((key) => `@${key}='${information[key]}'`)
    .join(', ');

  return params;
};
