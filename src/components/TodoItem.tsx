type TodoItemProps = {
  id: string;
  title: string;
  complete: boolean;
};

export function TodoItem({ id, title, complete }: TodoItemProps) {
  console.log(title, complete)
  return (
    <li className="flex gap-1 items-center">
      <input id={id} type="checkbox" className="cursor-pointer peer" />{" "}
      <label htmlFor={id} className="peer-checked:line-through peer-checked:text-slate-500">{title}</label>
    </li>
  );
}
