export interface ModalConfirmationProps {
  showModalConfirmation: boolean;
  setShowModalConfirmation: (value: boolean) => void;
  removeTask: (value: string) => void;
  idTask: string;
}
