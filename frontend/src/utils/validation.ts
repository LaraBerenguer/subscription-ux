export const emailValidation = (email: string) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export const codeValidation = ({ code, codeLength }: {code:string, codeLength: number}) => {
  const codeRegex = new RegExp (`^\\d{${codeLength}}$`);
  return codeRegex.test(code);
};
