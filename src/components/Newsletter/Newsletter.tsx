import { useState, type SubmitEvent } from "react";
import { TextField } from "../TextField";
import { Check } from "lucide-react";
import { Checkbox, Text } from "react-aria-components";
import styled from "styled-components";
import { Description } from "../Description";
import { Button } from "../Button";
import { Loader } from "../Loader";

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
`;

const StyledCheckbox = styled(Checkbox)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  align-self: stretch;
`;

const StyledTextField = styled(TextField)`
  align-self: stretch;
`;

const Indicator = styled.div`
  width: 24px;
  height: 24px;
  box-sizing: border-box;
  border-radius: 3px;
  border: 2px solid var(--text-l);
  transition: all 200ms;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
`;

const StyledDescription = styled(Description)`
  flex: 1 1 auto;
`;

interface Props {
  disableTitle?: boolean;
}

export function Newsletter({ disableTitle }: Props) {
  const [email, setEmail] = useState("");
  const [checked, setChecked] = useState(false);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const onSubmit = async (event: SubmitEvent) => {
    event.preventDefault();
    if (!checked) return;
    setLoading(true);
    const response = await fetch("https://api.les-fourmilieres.org/brevo", {
      method: "POST",
      body: JSON.stringify({ email }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (response.ok) {
      setSuccess(true);
      setEmail("");
    }
    setLoading(false);
  };
  return (
    <Form method="POST" onSubmit={onSubmit}>
      {!disableTitle && (
        <h2>
          Inscrivez-vous à notre newsletter pour recevoir le programme du
          festival.
        </h2>
      )}
      {success && (
        <Text style={{ textAlign: "center" }}>
          Merci pour votre inscripton à la newsletter ! <br />
          Vous pouvez vous désinscrire à tout moment en cliquant sur le lien
          présent dans nos emails.
        </Text>
      )}
      <StyledTextField
        label="E-mail"
        type="email"
        description="Veuillez renseigner votre adresse email pour vous inscrire"
        isRequired
        value={email}
        onChange={setEmail}
        placeholder="louise.michel@la-commune.paris"
      />
      <StyledCheckbox isSelected={checked} onChange={setChecked}>
        <Indicator>{checked ? <Check /> : null}</Indicator>
        <StyledDescription>
          J'accepte de recevoir vos e-mails et confirme avoir pris connaissance
          de votre politique de confidentialité et mentions légales
        </StyledDescription>
      </StyledCheckbox>
      {loading ? (
        <Loader />
      ) : (
        <Button type="submit" aria-disabled={!checked || !email}>
          Je m'inscris
        </Button>
      )}
    </Form>
  );
}
