export const puse = (duration: any) => {
  return new Promise((resolve) => {
    setTimeout(resolve, duration);
  });
};
