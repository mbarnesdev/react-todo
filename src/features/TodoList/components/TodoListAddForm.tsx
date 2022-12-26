import { useContext } from 'react';
import { TodoListContext } from '../context/todoListContext';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { MdOutlineAddCircleOutline } from 'react-icons/md';
import type { FC } from 'react';

const TodoListAddFormSchema = z.object({ content: z.string().min(1) });
type TTodoListAddFormSchema = z.infer<typeof TodoListAddFormSchema>;

export interface ITodoListAddFormProps {}

const TodoListAddForm: FC<ITodoListAddFormProps> = (props) => {
  const { mutateAdd } = useContext<any>(TodoListContext);

  const { handleSubmit, register, reset } = useForm<TTodoListAddFormSchema>({
    resolver: zodResolver(TodoListAddFormSchema),
  });

  const onAddFormSubmit = (data: TTodoListAddFormSchema) => {
    mutateAdd(data);
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onAddFormSubmit)}>
      <input type="text" {...register('content')} />
      <button>
        <MdOutlineAddCircleOutline />
      </button>
    </form>
  );
};

export default TodoListAddForm;
