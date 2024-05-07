import * as Dialog from "@radix-ui/react-dialog";
import { Login } from "../Login/Login";
export const LoginTriger = () => {
  return (
    <>
      <Dialog.Root>
        <Dialog.Trigger>
          <button className="flex items-center justify-center w-36 h-14 bg-primary text-alt  rounded-[10px]  left-8 right-12">
            {" "}
            Login
          </button>
        </Dialog.Trigger>
        <Login />
      </Dialog.Root>
    </>
  );
};
