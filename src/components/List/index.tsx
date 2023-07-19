import { useTask } from "../../hooks/useTask";

import Button from "../Button";

import { ListProps } from "./types";
import { Task } from "../../interfaces/tasks";
import ModalConfirmation from "../ModalConfirmation";

export default function List({ listTask }: ListProps) {
  const {
    handleRemoveTask,
    handleLoadForm,
    showModalConfirmation,
    setShowModalConfirmation,
    handleSetShowModalConfirmation,
    idTask,
  } = useTask();

  return (
    <>
      <div className="mt-5 block rounded-lg bg-white p-6 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
        <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
          <div className="">
            <table className="min-w-full text-left text-sm font-light">
              <thead className="border-b font-medium dark:border-neutral-500">
                <tr>
                  <th scope="col" className="px-6 py-4">
                    Title
                  </th>
                  <th scope="col" className="px-6 py-4">
                    Descrição
                  </th>
                  <th scope="col" className="px-6 py-4">
                    Handle
                  </th>
                </tr>
              </thead>

              <tbody>
                {!!listTask?.length &&
                  listTask.map((task: Task) => (
                    <tr
                      className="border-b dark:border-neutral-500"
                      key={task.id}
                    >
                      <td className="whitespace-nowrap px-6 py-4">
                        {task.title}
                      </td>
                      <td className="px-6 py-4 max-w-lg">{task.description}</td>
                      <td className="whitespace-nowrap">
                        <Button
                          variant="success"
                          onClick={() => handleLoadForm(task)}
                        >
                          Editar
                        </Button>
                        <Button
                          variant="danger"
                          onClick={() =>
                            handleSetShowModalConfirmation(true, task.id)
                          }
                        >
                          Excluir
                        </Button>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <ModalConfirmation
        showModalConfirmation={showModalConfirmation}
        setShowModalConfirmation={setShowModalConfirmation}
        removeTask={handleRemoveTask}
        idTask={idTask}
      />
    </>
  );
}
