import bcrypt from "bcrypt";

export const hashPassword = async (password: string, saltRounds = 10): Promise<string> => {
  if (!password) {
    throw new Error('Password cannot be empty');
  }

  const hashedPassword = await bcrypt.hash(password, saltRounds);
  return hashedPassword;
};

export default hashPassword;