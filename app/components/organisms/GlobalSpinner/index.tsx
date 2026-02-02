import styled from "styled-components";
import Spinner from "@/app/components/atoms/Spinner";
import { useGlobalSpinnerContext } from "@/app/contexts/GlobalSpinnerContext";
import { Activity } from "react";

const GlobalSpinnerWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(255, 255, 255, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1200;
`;

/**
 * 글로벌 스피너
 */
const GlobalSpinner = () => {
  const isGlobalSpinnerOn = useGlobalSpinnerContext();
  return (
    <>
      <Activity mode={isGlobalSpinnerOn ? "visible" : "hidden"}>
        <GlobalSpinnerWrapper data-testid="global-spinner">
          <Spinner />
        </GlobalSpinnerWrapper>
      </Activity>
    </>
  );
};

export default GlobalSpinner;
