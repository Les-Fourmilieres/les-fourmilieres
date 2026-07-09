import {
  ListBox as AriaListBox,
  ListBoxItem as AriaListBoxItem,
  ListBoxSection as AriaListBoxSection,
  Header,
  Text,
  type ListBoxItemProps,
  type ListBoxProps,
  type ListBoxSectionProps,
} from "react-aria-components/ListBox";
import { composeRenderProps } from "react-aria-components/composeRenderProps";
import { Check } from "lucide-react";
import styled from "styled-components";

export function ListBox<T extends object>({
  children,
  ...props
}: ListBoxProps<T>) {
  return <AriaListBox {...props}>{children}</AriaListBox>;
}

const StyledListBoxItem = styled(AriaListBoxItem)`
  background-color: var(--headerBg);
  padding: 4px 8px;
  display: flex;
  align-items: center;
  gap: 4px;
  justify-content: flex-start;
  &:hover {
    background-color: var(--accent-dark);
    color: var(--accent-contrast);
  }
`;

export function ListBoxItem(props: ListBoxItemProps) {
  const textValue =
    props.textValue ||
    (typeof props.children === "string" ? props.children : undefined);
  return (
    <StyledListBoxItem {...props} textValue={textValue}>
      {composeRenderProps(props.children, (children) =>
        typeof children === "string" ? (
          <Text slot="label">{children}</Text>
        ) : (
          children
        ),
      )}
    </StyledListBoxItem>
  );
}

export function ListBoxSection<T extends object>(
  props: ListBoxSectionProps<T>,
) {
  return <AriaListBoxSection {...props} />;
}

export function DropdownListBox<T extends object>(props: ListBoxProps<T>) {
  return <AriaListBox {...props} />;
}

export function DropdownItem(props: ListBoxItemProps) {
  const textValue =
    props.textValue ||
    (typeof props.children === "string" ? props.children : undefined);
  return (
    <ListBoxItem {...props} textValue={textValue}>
      {composeRenderProps(props.children, (children, { isSelected }) => (
        <>
          {isSelected && <Check />}
          {typeof children === "string" ? (
            <Text slot="label">{children}</Text>
          ) : (
            children
          )}
        </>
      ))}
    </ListBoxItem>
  );
}

export { Text, Header };
