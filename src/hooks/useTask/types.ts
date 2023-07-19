import { ReactNode } from "react";
import { Task } from "../../interfaces/tasks";

export type DashboardLayoutProps = {
  children: ReactNode;
};

export type TaskContextProps = {
  listTasks?: Task[];
  handleGetTasks: () => void;
  handleAddTask: (task: Task) => void;
  handleRemoveTask: (idTask: string) => void;
  handleUpdateTask: (task: Task) => void;
  task: Task;
  setTask: (value: Task) => void;
  showModal: boolean;
  setShowModal: (value: boolean) => void;
  handleLoadForm: (task: Task) => void;
  handleSetShowModal: () => void;
  editMode: boolean;
  showModalConfirmation: boolean;
  setShowModalConfirmation: (value: boolean) => void;
  handleSetShowModalConfirmation: (open: boolean, idTask?: string) => void;
  idTask: string;
};
