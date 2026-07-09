import styled from "styled-components";
import { Dialog } from "../Dialog";
import { Modal } from "../Modal";
import { Button } from "react-aria-components";
import { TextField } from "../TextField";
import { useState, type SubmitEvent } from "react";
import { addParticipant } from "./api";

const ParticipateForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 8px;
  justify-content: stretch;
  margin: 0 0 16px;
`;

const ButtonStyle = `
  border: none;
  background: var(--accent);
  color: var(--accent-contrast);
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border-radius: 3px;
  box-sizing: border-box;
  font-size: 18px;
  padding: 8px 16px;
  font-weight: 500;
  &:hover {
    background-color: var(--accent-dark);
  }`;

const CancelButton = styled(Button)`
  border: 1px solid var(--border);
  background: var(--bg);
  color: var(--text);
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border-radius: 3px;
  box-sizing: border-box;
  font-size: 18px;
  padding: 8px 16px;
  font-weight: 500;
  &:hover {
    background-color: var(--headerBg);
  }
`;

const Footer = styled.footer`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 8px;
`;

const StyledButton = styled(Button)`
  ${ButtonStyle}
`;

interface Props {
  eventId: string;
  isOpen: boolean;
  close: () => void;
}

export function JoinEventModal({ isOpen, close, eventId }: Props) {
  const [participantEmail, setParticipantEmail] = useState("");
  const confirmParticipation = async (event: SubmitEvent) => {
    event.preventDefault();
    const response = await addParticipant(eventId, participantEmail, "");
    console.log(response);
    close();
  };
  return (
    <Modal isDismissable isKeyboardDismissDisabled isOpen={isOpen}>
      <Dialog>
        <h2>Participer à l'évènement</h2>
        <p>
          Pour vous inscrire en tant que participant·e à l'évènement, merci de
          renseigner votre e-mail dans le champ ci-dessous afin de confirmer que
          vous êtes bien une personne réelle. Un lien de confirmation vous sera
          envoyé. Votre email ne sera pas transmis aux organisateur·trices de
          l'évènement.
        </p>

        <ParticipateForm onSubmit={confirmParticipation}>
          <TextField
            type="email"
            value={participantEmail}
            onChange={setParticipantEmail}
            placeholder="louise.michel@la-commune.paris"
          />
          <Footer>
            <CancelButton onClick={close}>Annuler</CancelButton>
            <StyledButton type="submit">Je participe !</StyledButton>
          </Footer>
        </ParticipateForm>
      </Dialog>
    </Modal>
  );
}
