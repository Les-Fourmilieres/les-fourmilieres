import { ToggleButtonGroup } from "react-aria-components";
import styled from "styled-components";

import { ToggleButton } from "../ToggleButton/ToggleButton";
import type { LivingAreaSelectValue } from "./LivingAreaFilter.types";
import { DepartementsByCode } from "../../core/Departements";
import type { LivingAreaI } from "../../core/LivingArea";

const StyledToggleButtonGroup = styled(ToggleButtonGroup)`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: stretch;
  gap: 4px 0px;
`;

interface Props {
  value: LivingAreaSelectValue;
  onChange: (value: LivingAreaSelectValue) => void;
  postalCodeFacets: string[];
  livingAreaFacets: LivingAreaI[];
}

export function LivingAreaFilter({
  value,
  onChange,
  postalCodeFacets,
  livingAreaFacets,
}: Props) {
  return (
    <>
      <StyledToggleButtonGroup>
        {postalCodeFacets.map((postalCode) => (
          <ToggleButton
            key={postalCode}
            isSelected={postalCode === value.department}
            onChange={(isSelected) => {
              onChange({
                livingArea: null,
                department: isSelected ? postalCode : null,
              });
            }}
          >
            {DepartementsByCode[postalCode]}
          </ToggleButton>
        ))}
      </StyledToggleButtonGroup>
      {value.department && (
        <StyledToggleButtonGroup>
          {livingAreaFacets
            .filter((livingArea) =>
              livingArea.code.startsWith(value.department!),
            )
            .map((livingArea) => (
              <ToggleButton
                key={livingArea.code}
                isSelected={livingArea.code === value.livingArea}
                onChange={(isSelected) =>
                  onChange({
                    department: value.department!,
                    livingArea: isSelected ? livingArea.code : null,
                  })
                }
              >
                {livingArea.name}
              </ToggleButton>
            ))}
        </StyledToggleButtonGroup>
      )}
    </>
  );
}
