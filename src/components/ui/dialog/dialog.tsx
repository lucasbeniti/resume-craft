import { ReactNode } from "react";
import {
  Dialog as DialogRoot,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./primitive"

export type BaseDialogProps = {
  open?: boolean;
  setOpen?: (open: boolean) => void;
  children?: ReactNode;
}

type DialogProps = BaseDialogProps & {
  title: string;
  description?: string;
  content: ReactNode;
}

const Dialog = ({ children, title, description, content, open, setOpen }: DialogProps) => {
  return (
    <DialogRoot open={open} onOpenChange={setOpen}>
      {children &&
        <DialogTrigger asChild>
          {children}
        </DialogTrigger>
      }

      <DialogContent>
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          {description &&
            <DialogDescription>
              {description}
            </DialogDescription>
          }
        </DialogHeader>
        {content}
      </DialogContent>
    </DialogRoot>
  );
}

export default Dialog;