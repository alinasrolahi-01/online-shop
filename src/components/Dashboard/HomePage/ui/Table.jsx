import React from "react";

/**
 * Generic, reusable table.
 *
 * columns: [{
 *   header: string,
 *   accessor: string,            // key in each row object
 *   render?: (row) => ReactNode, // optional custom cell renderer
 *   hideOnMobile?: boolean,
 * }]
 *
 * Usage:
 *   <Table
 *     columns={[
 *       { header: "شناسه", accessor: "id" },
 *       { header: "وضعیت", accessor: "status", render: (row) => <StatusBadge .../> },
 *     ]}
 *     data={orders}
 *     keyField="id"
 *     maxRows={5}
 *   />
 */
export default function Table({ columns, data, keyField = "id", maxRows, emptyText = "موردی یافت نشد" }) {
  const rows = maxRows ? data.slice(0, maxRows) : data;

  return (
    <div className="overflow-x-auto">
      <table className="w-full">
        <thead className="bg-slate-50">
          <tr>
            {columns.map((col) => (
              <th
                key={col.accessor}
                className={`text-right text-xs text-slate-400 font-medium px-6 py-3 ${
                  col.hideOnMobile ? "hidden md:table-cell" : ""
                }`}
              >
                {col.header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-50">
          {rows.length === 0 && (
            <tr>
              <td colSpan={columns.length} className="px-6 py-8 text-center text-sm text-slate-400">
                {emptyText}
              </td>
            </tr>
          )}
          {rows.map((row) => (
            <tr key={row[keyField]} className="hover:bg-slate-50 transition-colors">
              {columns.map((col) => (
                <td
                  key={col.accessor}
                  className={`px-6 py-4 text-sm text-slate-600 ${col.hideOnMobile ? "hidden md:table-cell" : ""}`}
                >
                  {col.render ? col.render(row) : row[col.accessor]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
