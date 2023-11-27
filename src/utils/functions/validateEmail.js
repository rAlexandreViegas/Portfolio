import validateInput from "./validateInput";

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Validation de l'email
const validateEmail = (email) => {
  const isNotEmpty = validateInput(email);

  return {
    isValid: isNotEmpty && emailRegex.test(email),
    errorMessage: isNotEmpty
      ? "L'e-mail doit être valide"
      : "Le champ ne doit pas être vide",
  };
};

export default validateEmail;
