import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { updateTodoContent, useTodoListContext } from '@/features/TodoList';
import { z } from 'zod';
import { useDispatch } from 'react-redux';
import { Icon } from '@/components';
import { MdDone } from 'react-icons/md';

const TodoListFormSchema = z.object({ content: z.string().min(1) });
type TTodoListFormSchema = z.infer<typeof TodoListFormSchema>;

const TodoListForm = () => {
  const { closeModal, currentEditingTodo } = useTodoListContext();
  const dispatch = useDispatch();

  const { handleSubmit, register, reset } = useForm<TTodoListFormSchema>({
    resolver: zodResolver(TodoListFormSchema),
  });

  const onEditFormSubmit = (data: TTodoListFormSchema) => {
    const { content } = data;
    if (currentEditingTodo) {
      dispatch(
        updateTodoContent({
          id: currentEditingTodo.id,
          content,
        }),
      );
    }
    reset();
    closeModal();
  };

  const defaultValue = currentEditingTodo?.content;

  return (
    <div className="p-4 m-4 bg-white">
      <form onSubmit={handleSubmit(onEditFormSubmit)}>
        <div className="flex flex-row justify-between items-center gap-2">
          <input
            type="text"
            defaultValue={defaultValue}
            {...register('content')}
            autoComplete="off"
            className="flex-1 p-2 rounded-md border border-1 border-slate-500/75"
          />
          <Icon>
            <MdDone />
          </Icon>
        </div>
      </form>
    </div>
  );
};

export default TodoListForm;
