import React from 'react'

function SelectSort(props) {
    return (
      <select defaultValue="sort" onChange={(e) => props.handleSorting(e)}>
        <option value="sort_by">Sort By</option>
        <option value="likes">Likes</option>
        <option value="createdDate">Created Date</option>
      </select>
    )
}

export default SelectSort
