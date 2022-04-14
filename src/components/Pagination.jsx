import styled from "styled-components";
import { Button } from "./";

const PaginationWrapper = styled.div`
  ${Button} {
    margin: 8px;
  }
`;

export const Pagination = ({ page, setPage, maxPages }) => (
  <PaginationWrapper>
    <Button onClick={() => setPage(page - 1)} disabled={page === 1}>
      Previous Section
    </Button>
    <Button onClick={() => setPage(page + 1)} disabled={page === maxPages}>
      Next Section
    </Button>
  </PaginationWrapper>
);
