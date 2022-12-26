import { useContext } from 'react';
import { TodoListContext } from '../context/todoListContext';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import type { FC } from 'react';

const TodoListEditFormSchema = z.object({ content: z.string().min(1) });
type TTodoListEditFormSchema = z.infer<typeof TodoListEditFormSchema>;

export interface ITodoListEditFormProps {}

const TodoListEditForm: FC<ITodoListEditFormProps> = (props) => {
  const { mutateUpdateContent, editingTodo, handleModalClose } =
    useContext<any>(TodoListContext);

  const { handleSubmit, register, reset } = useForm<TTodoListEditFormSchema>({
    resolver: zodResolver(TodoListEditFormSchema),
  });

  const onEditFormSubmit = (data: TTodoListEditFormSchema) => {
    mutateUpdateContent({ id: editingTodo.id, content: data.content });
    reset();
    handleModalClose();
  };

  return (
    <form onSubmit={handleSubmit(onEditFormSubmit)}>
      <input type="text" {...register('content')} />
      <button>Edit</button>
    </form>
  );
};

export default TodoListEditForm;
