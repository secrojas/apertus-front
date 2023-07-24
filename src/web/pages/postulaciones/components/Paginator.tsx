import { Pagination } from "react-bootstrap"
import { useSearch } from '../../../hooks/useSearch';


export const Paginator = () => {

  const { next , prev  , totalPage , page} = useSearch();

  return (
    <Pagination>
      <Pagination.Prev onClick={prev}  />
      <Pagination.Item disabled >{1}</Pagination.Item>
     
      <Pagination.Ellipsis disabled />

      <Pagination.Item active>{page}</Pagination.Item>

      <Pagination.Ellipsis disabled />
      <Pagination.Item disabled >{totalPage()}</Pagination.Item>
      <Pagination.Next onClick={next}  />

    </Pagination>
  )
}
