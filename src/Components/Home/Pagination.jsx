import { Button, HStack } from '@chakra-ui/react';
import React from 'react'

const Pagination = ({totalPages, currentPage , handlePageChange}) => {
  let pages =  new Array(totalPages).fill(0).map((a, i) => (
    <Button
    onClick={()=>handlePageChange(i+1)}
    disabled={currentPage === i + 1}
    key = {i+1}
    data-testid="page-btn">{i+1}</Button>
  ));
  return <HStack spacing={5} >
    <Button disabled={currentPage===1} onClick={()=>handlePageChange(currentPage-1)} >PREV</Button>
    {pages}
    <Button disabled={currentPage===totalPages} onClick={()=>handlePageChange(currentPage+1)} >NEXT</Button>
    </HStack>;
}

export default Pagination