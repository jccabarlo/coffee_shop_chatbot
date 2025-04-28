import { toast } from "sonner";

const show = (message: string) => {
  return toast.info(message, { icon: <></> });
};

export const Toast = {
  show,
};
