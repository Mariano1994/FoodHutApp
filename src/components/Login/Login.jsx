import React, { useContext } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { X } from "lucide-react";
import { UserContext } from "../../context/UserContext";

export const Login = () => {
  const {
    userName,
    handlerLogin,
    userPassWord,
    onSetUserName,
    onSetUserPassword,
  } = useContext(UserContext);

  return (
    <>
      <Dialog.Portal>
        <Dialog.Overlay className="bg-blackA6 data-[state=open]:animate-overlayShow fixed inset-0" />
        <Dialog.Content className="data-[state=open]:animate-contentShow fixed top-[50%] left-[50%] h-[60vh] w-[90vw] max-w-[450px] translate-x-[-50%] translate-y-[-50%] rounded-[6px] bg-alt p-[25px] shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none">
          <Dialog.Title className="text-mauve12 m-0 text-[2rem] font-semibold ">
            Login
          </Dialog.Title>
          <Dialog.Description className="text-mauve11 mt-[10px] mb-8 text-[15px] leading-normal">
            Log into your account you proceed
          </Dialog.Description>

          <form className="mb-[15px] flex flex-col items-center justify-center gap-[2.5rem] h-[21rem] mt-[5rem] ">
            <input
              className="w-[80%] text-base text-[2rem] shadow-gradient focus:shadow-gradient inline-flex flex-1 items-center justify-center rounded-[4px] px-[10px] leading-none shadow-[0_0_0_1px] outline-none focus:shadow-[0_0_0_2px] placeholder:text-[1.5rem] h-[2rem]"
              id="name"
              type="text"
              placeholder="User name"
              value={userName}
              required
              onChange={onSetUserName}
            />
            <input
              className="w-[80%] text-base text-[2rem] shadow-gradient focus:shadow-gradient inline-flex flex-1 items-center justify-center rounded-[4px] px-[10px] leading-none shadow-[0_0_0_1px] outline-none focus:shadow-[0_0_0_2px] placeholder:text-[1.5rem]"
              id="username"
              type="email"
              placeholder="Email"
              required
            />

            <input
              className="w-[80%] text-base text-2xl shadow-gradient focus:shadow-gradient inline-flex flex-1 items-center justify-center rounded-[4px] px-[10px] leading-none shadow-[0_0_0_1px] outline-none focus:shadow-[0_0_0_2px] placeholder:text-[1.5rem]"
              id="username"
              type="password"
              placeholder="Password"
              value={userPassWord}
              onChange={onSetUserPassword}
              readOnly
            />
          </form>

          <div className="mt-[40px] flex justify-center items-center">
            <Dialog.Close asChild>
              <button
                onClick={handlerLogin}
                className="bg-secondary text-white text-[1.5r
   text-[1.5rem] focus:shadow-gradient inline-flex h-[40px] items-center justify-center rounded-[4px] px-16 font-medium leading-none focus:shadow-[0_0_0_2px] focus:outline-none hover:brightness-95"
              >
                Login
              </button>
            </Dialog.Close>
          </div>
          <Dialog.Close asChild>
            <button
              className=" text-primary opacity-50 absolute top-[10px] right-[10px] inline-flex h-[25px] w-[25px] appearance-none items-center justify-center rounded-full focus:shadow-[0_0_0_2px] focus:outline-none hover:opacity-100"
              aria-label="Close"
            >
              <X />
            </button>
          </Dialog.Close>
          <div className="mt-[6rem] flex justify-center">
            <span className="text-[1.2rem] font-light">
              Note:{" "}
              <span className="text-primary">
                Do not change the password to proceed successfuly
              </span>
            </span>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </>
  );
};
