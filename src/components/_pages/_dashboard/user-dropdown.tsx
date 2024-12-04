import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { AvatarImage } from "@radix-ui/react-avatar";
import { LogOut, SquareUser } from "lucide-react";
import Link from "next/link";

const UserDropdown = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant={"ghost"} className="w-full gap-2 justify-start px-2">
          <Avatar className="w-7 h-7 block">
            <AvatarImage src="https://github.com/lucasbeniti.png" />
            <AvatarFallback>LB</AvatarFallback>
          </Avatar>
          <p>Lucas Bernardo</p>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="center">
        <Link href={"/dashboard/account"} passHref>
          <DropdownMenuItem>
            <SquareUser size={16} />
            Configurações da Conta
          </DropdownMenuItem>
        </Link>
        <DropdownMenuItem className="text-red-500 gap-2">
          <LogOut />
          Sair
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default UserDropdown;