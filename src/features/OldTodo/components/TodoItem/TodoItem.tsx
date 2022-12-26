export {};
// import { useRemoveTodo, useUpdateTodo } from '@/features/TodoList';
// import { TbTrash } from 'react-icons/tb';
// import cn from 'classnames';
// import type { FC } from 'react';
// import type { Todo } from '@/features/TodoList';

// const TodoItem: FC<{ todo: Todo }> = ({ todo }) => {
//   const titleClassnames = cn('cursor-pointer', {
//     'todo-completed': todo.completed,
//   });

//   const { mutateRemove } = useRemoveTodo(todo);
//   const { mutateUpdate } = useUpdateTodo(todo);

//   const handleRemoveTodo = () => mutateRemove();
//   const handleUpdateTodo = () => mutateUpdate();

//   return (
//     <div className="flex flex-row justify-between items-center py-4-">
//       <p className={titleClassnames} onClick={handleUpdateTodo}>
//         {todo.content}
//       </p>

//       <button onClick={handleRemoveTodo}>
//         <TbTrash size={25} />
//       </button>
//     </div>
//   );
// };

// {
//   /* <TodoList data={data}>
//   {data?.map(({id, completed, content}) => (
//     <TodoList.Item
//       deletable
//       editable
//     >
//       {content}
//     </TodoList.Item>
//   ))}
// </TodoList> */
// }

// export default TodoItem;
