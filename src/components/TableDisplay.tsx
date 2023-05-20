import { TodoDataWId } from "../interfaces";
import TableItem from "./TableItem";

const TableDisplay = ({
  todoList,
  removeItem,
}: {
  todoList: Array<TodoDataWId>;
  removeItem: (id: string) => void;
}) => {
  return (
    <table className="border-separate border border-slate-500 w-1/2 mx-auto">
      <thead className="text-white">
        <tr>
          <th className="border border-slate-600">Todo</th>
          <th className="border border-slate-600">State</th>
        </tr>
      </thead>
      <tbody className="text-yellow-200">
        {todoList.map((item) => (
          <TableItem item={item} removeItem={removeItem} key={item.id} />
        ))}
      </tbody>
    </table>
  );
};

export default TableDisplay;
