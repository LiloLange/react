import { TodoDataWId } from "../interfaces";
const TableItem = ({
  item,
  removeItem,
}: {
  item: TodoDataWId;
  removeItem: (id: string) => void;
}) => {
  return (
    <>
      <tr>
        <td className="border border-slate-700 w-1/2">{item.title}</td>
        <td className="border border-slate-700 w-1/2">{item.state}</td>
        <td>
          <button
            onClick={() => removeItem(item.id)}
            className="bg-blue-700 hover:opacity-40 w-24 rounded-lg active:bg-blue-900 active:rounded-3xl"
          >
            delete
          </button>
        </td>
      </tr>
    </>
  );
};

export default TableItem;
