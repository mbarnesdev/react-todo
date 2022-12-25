import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { addTodo } from '@/features/TodoList';
import { TbPlus } from 'react-icons/tb';
import type { Todo } from '@/features/TodoList';

const FormSchema = z.object({ content: z.string().min(1) });
type FormSchemaType = z.infer<typeof FormSchema>;

const TodoForm = () => {
  const { register, handleSubmit, reset } = useForm<FormSchemaType>({
    resolver: zodResolver(FormSchema),
  });

  const queryClient = useQueryClient();
  const { mutate } = useMutation((newTodo: Partial<Todo>) => addTodo(newTodo), {
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['fetch-all-todos'] });
    },
  });

  const onSubmit = (data: FormSchemaType) => {
    mutate(data);
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

export default TodoForm;
