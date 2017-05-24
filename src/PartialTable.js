import React, {Component} from 'react';
import Table from './Table';
import Pagination from './Pagination';

export default class PartialTable extends Component {

  render() {
    const {
      onFilter, onPageSizeChange, onPageNumberChange, onSort,
      pageLengthOptions, columns, keys, buildRowOptions, isFetching
    } = this.props;

    const {
      page, pageSize, pageNumber,
      totalPages, sortBy, filterValues,
    } = this.props.data;

    return (
      <div className="container">
        <div className="top-bar-contents">
          <div className="left-half-row">
            <div className="search-bar-container">
              <div className="search-icon-container">
                <i className="search-icon material-icons">search</i>
              </div>
              <input
                id="search-field"
                type="search"
                value={filterValues.globalSearch}
                onChange={onFilter.bind(null, 'globalSearch')}
              />
            </div>
            <div className="page-size-container">
              <div className="page-size-text" htmlFor="page-menu">Page size</div>
              <select
                id="page-menu"
                value={pageSize}
                onChange={onPageSizeChange}
              >
                {pageLengthOptions.map(opt =>
                  <option key={opt} value={opt}>
                    {opt === 0 ? 'All' : opt}
                  </option>
                )}
                <i className="material-icons">search</i>
              </select>
            </div>
          </div>
          <div className="right-half-row">
            <Pagination
              className="pagination"
              currentPage={pageNumber}
              totalPages={totalPages}
              onChangePage={onPageNumberChange}
            />
          </div>
        </div>
        <Table
          className="table table-bordered"
          dataArray={page}
          columns={columns}
          keys={keys}
          buildRowOptions={buildRowOptions}
          sortBy={sortBy}
          onSort={onSort}
          isFetching={isFetching}
        />
      </div>
    );
  }

}
