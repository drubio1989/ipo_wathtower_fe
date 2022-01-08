import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

const BasicPagination = (props) => {
  const goToPage = (number) => {
    let params = {page: '5' }
    props.setSearchParams(params, { replace: true });
  }

  return (
    <Stack spacing={2}>
      <Pagination onClick={() => goToPage(props.pageNumber)} count={props.total} color="primary" />
    </Stack>
  );
}

export default BasicPagination;
