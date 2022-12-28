import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useDispatch } from 'react-redux';
import { addTodo } from '@/features/TodoList';
import { Icon } from '@/components';
import { MdQueue } from 'react-icons/md';
import type { FC } from 'react';

const TodoListFormSchema = z.object({ content: z.string().min(1) });
type TTodoListFormSchema = z.infer<typeof TodoListFormSchema>;

export interface ITodoListFormProps {}

const TodoListForm: FC<ITodoListFormProps> = (props) => {
  const dispatch = useDispatch();
  const { handleSubmit, register, reset } = useForm<TTodoListFormSchema>({
    resolver: zodResolver(TodoListFormSchema),
  });

  const onAddFormSubmit = (data: TTodoListFormSchema) => {
    const { content } = data;
    dispatch(addTodo({ content }));
    reset();
  };

  return (
    <div className="p-4 m-4 shadow-md bg-white">
      <form onSubmit={handleSubmit(onAddFormSubmit)}>
        <div className="flex flex-row justify-between items-center gap-2">
          <input
            type="text"
            {...register('content')}
            autoComplete="off"
            className="flex-1 p-2 rounded-md border border-1 border-slate-500/75"
          />
          <Icon>
            <MdQueue />
          </Icon>
        </div>
      </form>
    </div>
  );
};

export default TodoListForm;
