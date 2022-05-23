import styled from "styled-components";

export const ServicesItemsStyles = styled.div`
padding: 10rem 0;
.services__allItems {
  display: flex;
  gap: 10rem;
  justify-content: space-between;
  margin-top: 5rem;
}
@media only screen and (max-width: 768px) {
  .services__allItems {
    flex-direction: column;
    max-width: 350px;
    margin: 0 auto;
    margin-top: 5rem;
    gap: 5rem;
  }
}
`;