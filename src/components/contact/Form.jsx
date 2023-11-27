import { useState } from "react";
import { TextField, Button, Alert } from "@mui/material";
import validateInput from "../../utils/functions/validateInput";
import validateEmail from "../../utils/functions/validateEmail";
import initialFormData from "../../utils/data/contact/initialFormData";
import fieldsForm from "../../utils/data/contact/fieldsForm";

export default function Form() {
  const [formData, setFormData] = useState(initialFormData);
  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState(false);

  // Mise à jour des champs
  const handleChange = (e, fieldName) => {
    const value = e.target.value;

    const newFormData = { ...formData, [fieldName]: value };
    setFormData(newFormData);

    const newErrors = {
      ...errors,
      [fieldName]:
        // Si le champ est l'email
        fieldName === "email"
          ? // Valider le champ de l'email separément
            !validateEmail(value).isValid
          : !validateInput(value),
    };
    setErrors(newErrors);
  };

  // Soumission du formulaire
  const handleSubmit = (e) => {
    e.preventDefault();
    setSuccess(false);

    let isFormValid = true;
    const newErrors = {};

    for (const fieldName in formData) {
      const isValid =
        // Si le champ est l'email
        fieldName === "email"
          ? // Valider le champ de l'email séparément
            validateEmail(formData[fieldName]).isValid
          : validateInput(formData[fieldName]);

      isFormValid = isValid;
      newErrors[fieldName] = !isValid;
    }

    setErrors(newErrors);

    if (isFormValid) {
      setSuccess(true);
    }
  };

  return (
    <section className="contact">
      <h1 className="contact__title">Contactez-moi</h1>
      <form className="contact__form" onSubmit={handleSubmit}>
        {fieldsForm.map((field) => (
          <TextField
            key={field.name}
            className="contact__form-input"
            type="text"
            label={field.label}
            variant="standard"
            value={formData[field.name]}
            error={errors[field.name]}
            helperText={
              errors[field.name]
                ? // Si le champ est l'email
                  field.name === "email"
                  ? // Afficher le message d'erreur personnalisé pour l'email
                    validateEmail(formData[field.name]).errorMessage
                  : // Sinon afficher le message d'erreur général
                    "Le champ ne doit pas être vide"
                : ""
            }
            onChange={(e) => handleChange(e, field.name)}
            multiline={field.multiline}
            rows={field.multiline ? 4 : 1}
          />
        ))}
        <Button
          className="contact__form-button"
          type="submit"
          variant="contained"
          disabled={Object.values(errors).some((error) => error)}
        >
          Envoyer
        </Button>
      </form>
      <Alert
        className="contact__form-alert"
        color="success"
        sx={{ visibility: success ? "visible" : "hidden" }}
      >
        Votre message a bien été envoyé !
      </Alert>
    </section>
  );
}
