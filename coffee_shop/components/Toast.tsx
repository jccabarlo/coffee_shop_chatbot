import { toast } from "sonner-native";

const show = (message: string) => {
  return toast.info(message, { icon: <></> });
};

export const Toast = {
  show,
};
