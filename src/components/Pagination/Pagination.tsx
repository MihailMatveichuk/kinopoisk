import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { useState } from 'react';

const DEFAULT_PAGE_VALUE = 1;

export default function CustomPagination() {
  const [page, setPage] = useState(DEFAULT_PAGE_VALUE);
  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    event.preventDefault();
    setPage(value);
  };

  return (
    <Stack spacing={2}>
      <Pagination count={10} page={page} onChange={handleChange} />
    </Stack>
  );
}
