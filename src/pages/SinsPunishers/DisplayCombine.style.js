import styled from 'styled-components';

export const CharacterContainer = styled.div`
  margin-bottom: 20px;
`;

export const CharacterDescription = styled.p`
  font-size: 16px;
  margin-bottom: 10px;
`;

export const CharacterImage = styled.img`
  width: 100px;
`;

export const CombinedTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 10px;
`;

export const TableHeader = styled.th`
  background-color: #f2f2f2;
  border: 1px solid #ccc;
  padding: 8px;
  text-align: left;
`;

export const TableCell = styled.td`
  border: 1px solid #ccc;
  padding: 8px;
  text-align: left;
`;

export const CombineButton = styled.button`
  cursor: pointer;
  background-color: #007bff;
  color: white;
  border: none;
  padding: 8px 16px;
  border-radius: 4px;

  &:hover {
    background-color: #0056b3;
  }
`;

export const ActiveCombination = styled.div`
  margin-top: 20px;
`;

export const ActiveCombinationTitle = styled.h3`
  font-size: 18px;
  margin-bottom: 10px;
`;

export const ActiveCombinationText = styled.p`
  font-size: 16px;
  line-height: 1.6;
`;
