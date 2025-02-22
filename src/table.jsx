import React, { Component } from "react";
import TableHeader from "./tableHeaderForSort";
import TableBody from "./tableBody";
import "./App.css";

const Table = props => {
  const { columns, sortColumn, onSort, data } = props;
  return (
    <table className="table">
      <TableHeader columns={columns} sortColumn={sortColumn} onSort={onSort} />

      <TableBody data={data} columns={columns} />
    </table>
  );
};

export default Table;
