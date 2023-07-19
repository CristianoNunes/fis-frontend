/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-floating-promises */
/* eslint-disable react-refresh/only-export-components */
/* eslint-disable @typescript-eslint/no-misused-promises */
import {
  useState,
  createContext,
  useContext,
  useEffect,
  useCallback,
} from "react";
import { toast } from "react-toastify";

import { TaskContextProps, DashboardLayoutProps } from "./types";
import { Task } from "../../interfaces/tasks";
import { addTask, getTasks, removeTask, updateTask } from "../../services/api";

const TaskContext = createContext({} as TaskContextProps);

export const useTask = () => useContext(TaskContext);

export const TaskProvider = ({ children }: DashboardLayoutProps) => {
  const initiaValue = {
    title: "",
    description: "",
  } as Task;

  const [listTasks, setListTasks] = useState<Task[]>();
  const [idTask, setIdTask] = useState("");
  const [task, setTask] = useState<Task>(initiaValue);
  const [showModal, setShowModal] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [showModalConfirmation, setShowModalConfirmation] = useState(false);

  const handleGetTasks = useCallback(async () => {
    try {
      const response = await getTasks();
      if (response.status !== 200) {
        throw new Error();
      }
      setListTasks(response.data as Task[]);
    } catch (error) {
      if (error instanceof Error) {
        toast.error("Ocorreu um erro ao buscar as tarefas", {
          theme: "colored",
        });
      }
    }
  }, []);

  const handleAddTask = useCallback(async (task: Task) => {
    try {
      const response = await addTask(task);
      if (response.status !== 200) {
        throw new Error();
      }
      handleGetTasks();
      setTask(initiaValue);
      setShowModal(false);
      toast.success("Tarefa adicionada com sucesso!", {
        theme: "colored",
      });
    } catch (error) {
      if (error instanceof Error) {
        toast.error("Ocorreu um erro ao adicionar a tarefa", {
          theme: "colored",
        });
      }
    }
  }, []);

  const handleRemoveTask = useCallback(async (idTask: string) => {
    try {
      const response = await removeTask(idTask);
      if (response.status !== 204) {
        throw new Error();
      }
      handleGetTasks();
      toast.success("Tarefa removida com sucesso!", {
        theme: "colored",
      });
      handleSetShowModalConfirmation(false, "");
    } catch (error) {
      if (error instanceof Error) {
        toast.error("Ocorreu um erro ao remover a tarefa", {
          theme: "colored",
        });
      }
    }
  }, []);

  const handleUpdateTask = useCallback(async (task: Task) => {
    const payload = {
      id: task.id,
      title: task.title,
      description: task.description,
    };

    try {
      const response = await updateTask(payload);
      if (response.status !== 200) {
        throw new Error();
      }
      handleSetShowModal();
      handleGetTasks();
      toast.success("Tarefa editada com sucesso!", {
        theme: "colored",
      });
    } catch (error) {
      if (error instanceof Error) {
        toast.error("Ocorreu um erro ao editar a tarefa", {
          theme: "colored",
        });
      }
    }
  }, []);

  const handleLoadForm = useCallback((task: Task) => {
    setTask(task);
    setEditMode(true);
    setShowModal(true);
  }, []);

  const handleSetShowModal = useCallback(() => {
    setEditMode(false);
    setShowModal(false);
    setTask(initiaValue);
  }, []);

  const handleSetShowModalConfirmation = useCallback(
    (open: boolean, idTask?: string) => {
      setShowModalConfirmation(open);
      idTask && setIdTask(idTask);
    },
    []
  );

  useEffect(() => {
    handleGetTasks();
  }, []);

  return (
    <TaskContext.Provider
      value={{
        listTasks,
        handleGetTasks,
        handleAddTask,
        handleRemoveTask,
        handleUpdateTask,
        task,
        setTask,
        showModal,
        setShowModal,
        handleLoadForm,
        handleSetShowModal,
        editMode,
        showModalConfirmation,
        setShowModalConfirmation,
        handleSetShowModalConfirmation,
        idTask,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
};
