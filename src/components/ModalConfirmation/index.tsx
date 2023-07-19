import {
  TERipple,
  TEModal,
  TEModalDialog,
  TEModalContent,
  TEModalHeader,
  TEModalBody,
  TEModalFooter,
} from "tw-elements-react";
import Button from "../Button";
import { ModalConfirmationProps } from "./types";

export default function ModalConfirmation({
  showModalConfirmation,
  setShowModalConfirmation,
  removeTask,
  idTask,
}: ModalConfirmationProps): JSX.Element {
  return (
    <TEModal show={showModalConfirmation} setShow={setShowModalConfirmation}>
      <TEModalDialog>
        <TEModalContent>
          <TEModalHeader>
            <h5 className="text-xl font-medium leading-normal text-neutral-800 dark:text-neutral-200">
              ATENÇÃO
            </h5>

            <button
              type="button"
              className="box-content rounded-none border-none hover:no-underline hover:opacity-75 focus:opacity-100 focus:shadow-none focus:outline-none"
              onClick={() => setShowModalConfirmation(false)}
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

          <TEModalBody>Deseja realmente excluir esta tarefa? </TEModalBody>
          <TEModalFooter className="gap-3">
            <TERipple rippleColor="light">
              <Button
                type="button"
                onClick={() => setShowModalConfirmation(false)}
              >
                Não
              </Button>
            </TERipple>
            <TERipple rippleColor="light">
              <Button
                variant="danger"
                type="button"
                onClick={() => removeTask(idTask)}
              >
                Sim
              </Button>
            </TERipple>
          </TEModalFooter>
        </TEModalContent>
      </TEModalDialog>
    </TEModal>
  );
}
