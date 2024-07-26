// src/components/Alert/Alert.styles.js
import styled from 'styled-components';

export const AlertWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  margin-top: 20px;
  box-shadow: 4px 4px 10px -10px rgba(0, 0, 0, 1);
  z-index: 1000;
`;

export const Popup = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
  font-weight: 300;
  background-color: ${({ type }) =>
    type === 'success' ? '#edfbd8' :
      type === 'alert' ? '#fefce8' :
        type === 'error' ? '#fef2f2' :
          '#eff6ff'};
  border: 1px solid ${({ type }) =>
    type === 'success' ? '#84d65a' :
      type === 'alert' ? '#facc15' :
        type === 'error' ? '#f87171' :
          '#1d4ed8'};
  color: ${({ type }) =>
    type === 'success' ? '#2b641e' :
      type === 'alert' ? '#ca8a04' :
        type === 'error' ? '#991b1b' :
          '#1d4ed8'};
  margin-bottom: 10px;
`;

export const Message = styled.div`
  flex-grow: 1;
`;

export const CloseIcon = styled.div`
  margin-left: auto;
  cursor: pointer;
  margin-top: 5px;
  svg {
    width: 1.25rem;
    height: 1.25rem;
  }

  .close-button {
    fill: grey;
  }
`;
