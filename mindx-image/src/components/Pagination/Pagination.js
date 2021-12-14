import React from 'react';

export default function Pagination({
  total,
  pageSize,
  currentPage,
  handleClickPage
}) {
  const maxPage = Math.ceil(total / pageSize)

  const renderPagination = () => {
    const listPageItem = [];
    for (let i = 1; i <= maxPage; i++) {
      const isActive = currentPage === i
      const cls = isActive ? 'page-item active' : 'page-item';
      const pageItem = (
        <li
          className={cls}
          key={i}
          onClick={() => { handleClickPage(i) }}
        >
          <span className='page-link'>{i}</span>
        </li>
      )
      listPageItem.push(pageItem);
    }
    return listPageItem
  }

  return (
    <ul className='pagination'>
      {renderPagination()}
    </ul>
  )
}