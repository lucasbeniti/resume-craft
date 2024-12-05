import { Button } from "@/components/ui/button";
import { BotIcon } from "lucide-react";

const AiGenerationDropdown = () => {
  return (
    <Button className="gap-2 text-xs px-2.5 py-1 h-9">
      <BotIcon size={20} />
      Inteligência Artificial
    </Button>
  );
}

export default AiGenerationDropdown;