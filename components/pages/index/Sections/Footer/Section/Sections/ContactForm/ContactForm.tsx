import { css } from "@emotion/core";
import { Box, Button, CircularProgress, TextField } from "@material-ui/core";
import axios from "axios";
import { useSnackbar } from "notistack";
import { FC, useState } from "react";
import { useForm } from "react-hook-form";
import { importantData } from "../../../../../../../../importantData";
import { FieldType } from "../../../../../../../../interfaces and types/FieldType";
import { Section } from "../../Section";

export const ContactForm: FC = () => {
  const styles = {
    form: css`
      text-align: center;
    `,
  };

  const fields: FieldType[] = [
    {
      label: "Imię i Nazwisko",
      name: "sender",
      type: "text",
      multiline: false,
    },
    {
      label: "Email",
      name: "email",
      type: "email",
    },
    {
      label: "Numer telefonu",
      name: "phoneNumber",
      type: "text",
    },
    {
      label: "Wiadomość",
      name: "message",
      type: "text",
      multiline: true,
      rows: 8,
      rowsMax: 12,
    },
  ];
  const { register, handleSubmit: handleSubmitHookForm } = useForm();
  const [loading, setLoading] = useState(false);

  const { enqueueSnackbar } = useSnackbar();

  const handleSubmit = handleSubmitHookForm(async (data) => {
    setLoading(true);
    try {
      await axios({
        url: `${importantData.apiUrl}/contact-form`,
        method: "POST",
        data: data,
      });
      enqueueSnackbar("Pomyślnie wysłano wiadomość", {
        variant: "success",
      });
    } catch (error) {
      if (!error.request) {
        throw error;
      }

      if (error.response) {
        if (error.response.status === 500) {
          enqueueSnackbar("Błąd serwera", {
            variant: "error",
          });
        } else if (error.response.status === 400) {
          enqueueSnackbar("Sprawdź poprawność wypełnionych pól.", {
            variant: "error",
          });
        } else {
          enqueueSnackbar("Wystąpił błąd", {
            variant: "error",
          });
        }
      } else {
        enqueueSnackbar("Wystąpił błąd podczas łączenia z serwerem", {
          variant: "error",
        });
      }
    }
    setLoading(false);
  });

  return (
    <Section title="Formularz kontaktowy" gridProps={{ md: 3 }}>
      <form css={styles.form} onSubmit={handleSubmit}>
        {fields.map((field) => (
          <TextField
            inputRef={register}
            label={field.label}
            name={field.name}
            type={field.type}
            fullWidth
            margin="normal"
            size="small"
            {...(field.type === "text"
              ? {
                  multiline: field.multiline,
                  rows: field.rows,
                  rowsMax: field.rowsMax,
                }
              : {})}
            variant="outlined"
          />
        ))}
        <Box mt={1.5}>
          {loading ? (
            <CircularProgress />
          ) : (
            <Button fullWidth variant="outlined" type="submit">
              Wyślij
            </Button>
          )}
        </Box>
      </form>
    </Section>
  );
};
