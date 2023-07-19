import Form from "../../components/Form";
import List from "../../components/List";
import { useTask } from "../../hooks/useTask";

export function Home() {
  const { listTasks } = useTask();
  return (
    <div className="flex flex-col w-screen items-center justify-center">
      <h1>Gerenciador de Tarefas</h1>
      <Form />
      <List listTask={listTasks} />
    </div>
  );
}
