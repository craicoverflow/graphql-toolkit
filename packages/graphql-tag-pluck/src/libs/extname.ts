export const getExtNameFromFilePath = (filePath: string): string => {
  const partials = filePath.split('.');
  let ext = '.' + partials.pop();

  if (partials.length > 1 && partials[partials.length - 1] == 'flow') {
    ext = '.' + partials.pop() + ext;
  }

  return ext;
};
