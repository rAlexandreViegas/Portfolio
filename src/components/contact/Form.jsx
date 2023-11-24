import { useState } from "react";
import { TextField, Button, Alert } from "@mui/material";
import initialFormData from "../../utils/data/formData";
import fieldsForm from "../../utils/data/fieldsForm";

// Validation des champs
const validateInput = (input) => input.trim() !== "";

// Validation de l'email
const validateEmail = (email) => {
  const isNotEmpty = validateInput(email);
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  return {
    isValid: isNotEmpty && emailRegex.test(email),
    errorMessage: isNotEmpty
      ? "L'e-mail doit être valide"
      : "Le champ ne doit pas être vide",
  };
};

export default function Form() {
  const [formData, setFormData] = useState(initialFormData);
  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState(false);

  // Mise à jour des champs
  function handleChange(e, fieldName) {
    const value = e.target.value;

    const newFormData = { ...formData, [fieldName]: value };
    setFormData(newFormData);

    const newErrors = {
      ...errors,
      [fieldName]:
        fieldName === "email"
          ? !validateEmail(value).isValid
          : !validateInput(value),
    };
    setErrors(newErrors);
  }

  // Soumission du formulaire
  function handleSubmit(e) {
    e.preventDefault();
    setSuccess(false);

    let isFormValid = true;
    const newErrors = {};

    Object.keys(formData).forEach((fieldName) => {
      const isValid =
        fieldName === "email"
          ? validateEmail(formData[fieldName]).isValid
          : validateInput(formData[fieldName]);

      isFormValid = isValid;
      newErrors[fieldName] = !isValid;
    });

    setErrors(newErrors);

    if (isFormValid) {
      setSuccess(true);
    }
  }

  return (
    <section className="contact">
      <h1 className="contact__title">Contactez-moi</h1>
      <form className="form" onSubmit={handleSubmit}>
        {fieldsForm.map((field) => (
          <TextField
            key={field.name}
            className="form__input"
            type="text"
            label={field.label}
            variant="standard"
            value={formData[field.name]}
            error={errors[field.name]}
            helperText={
              errors[field.name]
                ? field.name === "email"
                  ? validateEmail(formData[field.name]).errorMessage
                  : "Le champ ne doit pas être vide"
                : ""
            }
            onChange={(e) => handleChange(e, field.name)}
            multiline={field.multiline}
            rows={field.multiline ? 4 : 1}
          />
        ))}
        <Button
          className="form__button"
          type="submit"
          variant="contained"
          disabled={Object.values(errors).some((error) => error)}
        >
          Envoyer
        </Button>
      </form>
      <Alert
        className="form__alert"
        color="success"
        sx={{ visibility: success ? "visible" : "hidden" }}
      >
        Votre message a bien été envoyé !
      </Alert>
    </section>
  );
}
