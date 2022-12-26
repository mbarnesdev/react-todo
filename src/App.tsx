import cn from 'classnames';
import { TodoList } from './features/TodoList';
import { useAtom } from 'jotai';
import { isAppBlurredAtom } from '@/atoms';

const App = () => {
  const [isAppBlurred] = useAtom(isAppBlurredAtom);
  const appContainerClassnames = cn({ 'blur-md': isAppBlurred });

  return (
    <div className={appContainerClassnames}>
      <TodoList>
        <TodoList.AddForm />
        <TodoList.Items />
      </TodoList>
    </div>
  );
};

export default App;
