import { useState } from "react";
import { TextField, Button, Alert } from "@mui/material";
import fieldsForm from "../../utils/data/fieldsForm";

export default function Form() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState(false);

  // Validation du champ
  function validateInput(value) {
    return value.trim() !== "";
  }

  // Validation de l'e-mail
  function validateEmail(value) {
    const isNotEmpty = validateInput(value);
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!isNotEmpty) {
      return {
        isValid: false,
        errorMessage: "Le champ ne doit pas être vide",
      };
    }

    return {
      isValid: emailRegex.test(value),
      errorMessage: "L'e-mail doit être valide",
    };
  }

  // Mise à jour des champs
  function handleChange(e, fieldName) {
    const value = e.target.value;
    const updatedData = { ...formData, [fieldName]: value };
    setFormData(updatedData);

    // Mise à jour des erreurs
    const updatedErrors = {
      ...errors,
      [fieldName]:
        fieldName === "email"
          ? !validateEmail(value).isValid
          : !validateInput(value),
    };
    setErrors(updatedErrors);
  }

  // Soumission du formulaire
  function handleSubmit(e) {
    e.preventDefault();
    setSuccess(false);

    // Vérification des erreurs
    const isFormValid = Object.keys(formData).every((fieldName) => {
      if (fieldName === "email") {
        return validateEmail(formData[fieldName]).isValid;
      }
      return validateInput(formData[fieldName]);
    });

    // Mise à jour des erreurs
    setErrors(() => {
      const newErrors = {};
      Object.keys(formData).forEach((fieldName) => {
        if (fieldName === "email") {
          newErrors[fieldName] = !validateEmail(formData[fieldName]).isValid;
        } else {
          newErrors[fieldName] = !validateInput(formData[fieldName]);
        }
      });
      return newErrors;
    });

    if (isFormValid) {
      setSuccess(true);
    }
  }

  return (
    <section className="form__container">
      <h1 className="form__title">Contactez-moi</h1>
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
            rows={field.multiline ? 5 : 1}
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
