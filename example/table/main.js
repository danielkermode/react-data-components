import React from 'react';
import ReactDOM from 'react-dom';
import { DataTable } from 'react-data-components';

function buildTable(data) {
  const renderMapUrl =
    (val, row) =>
      <a href={`https://www.google.com/maps?q=${row['lat']},${row['long']}`}>
        Google Maps
      </a>;


  const tableColumns = [
    { title: 'Name', prop: 'name', headerstyle:
      {
        backgroundColor: 'red'
      }
    },
    { title: 'City', prop: 'city', headerstyle:
      {
        backgroundColor: 'yellow'
      }},
    { title: 'Street address', prop: 'street', headerstyle:
      {
        backgroundColor: 'blue'
      }},
    { title: 'Phone', prop: 'phone', defaultContent: '<no phone>', headerstyle:
      {
        backgroundColor: 'green'
      }},
    { title: 'Map', render: renderMapUrl, className: 'text-center', headerstyle:
      {
        backgroundColor: 'gray'
      }},
  ];

  return (
    <DataTable
      className="container"
      keys="id"
      columns={tableColumns}
      initialData={data}
      initialPageLength={5}
      initialSortBy={{ prop: 'city', order: 'descending' }}
      pageLengthOptions={[ 5, 20, 50 ]}
    />
  );
}

fetch('/data.json')
  .then(res => res.json())
  .then((rows) => {
    ReactDOM.render(buildTable(rows), document.getElementById('root'));
  });
