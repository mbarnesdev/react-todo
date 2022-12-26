import { useTodoListContext } from '@/features/TodoList';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { MdOutlineAddCircleOutline } from 'react-icons/md';
import type { FC } from 'react';

const TodoListFormSchema = z.object({ content: z.string().min(1) });
type TTodoListFormSchema = z.infer<typeof TodoListFormSchema>;

export interface ITodoListFormProps {}

const TodoListForm: FC<ITodoListFormProps> = (props) => {
  const { mutateAdd } = useTodoListContext();

  const { handleSubmit, register, reset } = useForm<TTodoListFormSchema>({
    resolver: zodResolver(TodoListFormSchema),
  });

  const onAddFormSubmit = (data: TTodoListFormSchema) => {
    mutateAdd(data);
    reset();
  };

  return (
    <div className="p-4 m-8 shadow-md">
      <form onSubmit={handleSubmit(onAddFormSubmit)}>
        <div className="flex flex-row justify-between items-center gap-2">
          <input
            type="text"
            {...register('content')}
            autoComplete="off"
            className="flex-1 p-2 rounded-md border border-1 border-slate-500/75"
          />
          <button>
            <MdOutlineAddCircleOutline size={35} />
          </button>
        </div>
      </form>
    </div>
  );
};

export default TodoListForm;
