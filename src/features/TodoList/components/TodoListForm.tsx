import { useContext } from 'react';
import { TodoListContext } from '@/features/TodoList';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { TbPlus } from 'react-icons/tb';
import type { FC } from 'react';

const FormSchema = z.object({ content: z.string().min(1) });
type FormSchemaType = z.infer<typeof FormSchema>;

const TodoListForm: FC = (props) => {
  const { register, handleSubmit, reset } = useForm<FormSchemaType>({
    resolver: zodResolver(FormSchema),
  });

  const { addTodo } = useContext<any>(TodoListContext);

  const onSubmit = (data: FormSchemaType) => {
    addTodo({
      id: Date.now(),
      content: data.content,
      completed: false,
    });
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="todo-content">
        Todo Content:
        <input type="text" id="todo-content" {...register('content')} />
      </label>
      <button>
        <TbPlus />
      </button>
    </form>
  );
};

export default TodoListForm;
