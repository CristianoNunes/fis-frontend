import {
  TERipple,
  TEModal,
  TEModalDialog,
  TEModalContent,
  TEModalHeader,
  TEModalBody,
  TEModalFooter,
} from "tw-elements-react";

import { useTask } from "../../hooks/useTask";

import Button from "../Button";
import Input from "../Input";

export default function Form() {
  const {
    handleAddTask,
    handleUpdateTask,
    task,
    setTask,
    showModal,
    setShowModal,
    handleSetShowModal,
    editMode,
  } = useTask();

  const handleChange = (e: { target: { name: string; value: string } }) => {
    const { name, value } = e.target;
    setTask({ ...task, [name]: value });
  };

  const handleForm = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    if (editMode) {
      return handleUpdateTask(task);
    }
    handleAddTask(task);
  };

  return (
    <>
      <Button onClick={() => setShowModal(true)}>Adicionar Tarefa</Button>
      <TEModal show={showModal} setShow={setShowModal} className="">
        <TEModalDialog>
          <TEModalContent>
            <TEModalHeader>
              <h5 className="text-xl font-medium leading-normal text-neutral-800 dark:text-neutral-200">
                {editMode ? "Editar Tarefa" : "Cadastrar Tarefa"}
              </h5>

              <button
                type="button"
                className="box-content rounded-none border-none hover:no-underline hover:opacity-75 focus:opacity-100 focus:shadow-none focus:outline-none"
                onClick={handleSetShowModal}
                aria-label="Close"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="h-6 w-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </TEModalHeader>

            <form
              className="space-y-6"
              action="#"
              method="POST"
              onSubmit={(e) => handleForm(e)}
            >
              <TEModalBody>
                <div>
                  <div className="flex items-center justify-between">
                    <Input
                      id="title"
                      name="title"
                      label="Título"
                      value={task.title}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="mt-5">
                  <div className="mt-2">
                    <Input
                      id="description"
                      name="description"
                      label="Descrição"
                      value={task.description}
                      onChange={handleChange}
                    />
                  </div>
                </div>
              </TEModalBody>
              <TEModalFooter className="gap-3">
                <TERipple rippleColor="light">
                  <Button
                    type="button"
                    variant="danger"
                    onClick={handleSetShowModal}
                  >
                    Cancelar
                  </Button>
                </TERipple>
                <TERipple rippleColor="light">
                  <Button
                    type="submit"
                    disabled={!task.title && !task.description}
                  >
                    Salvar
                  </Button>
                </TERipple>
              </TEModalFooter>
            </form>
          </TEModalContent>
        </TEModalDialog>
      </TEModal>
    </>
  );
}
