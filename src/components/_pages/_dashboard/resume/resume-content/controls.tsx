import { Button } from "@/components/ui/button";
import Tooltip from "@/components/ui/tooltip";
import { Download, RotateCcw, ZoomIn, ZoomOut } from "lucide-react";
import { useControls } from "react-zoom-pan-pinch";

const TransformControls = () => {
  const { zoomIn, zoomOut, centerView } = useControls();
  const controls = [
    {
      icon: ZoomIn,
      label: "Aumentar Zoom",
      onClick: () => zoomIn(0.2)
    },
    {
      icon: ZoomOut,
      label: "Diminuir Zoom",
      onClick: () => zoomOut(0.2)
    },
    {
      icon: RotateCcw,
      label: "Restar Posição",
      onClick: () => centerView(0.5)
    },
    {
      icon: Download,
      label: "Baixar PDF",
      onClick: () => console.log('oi')
    }
  ]
  return (
    <div className="absolute left-1/2 -translate-x-1/2 bottom-4 z-10 bg-background border border-muted py-3 px-4 rounded-full flex items-center gap-2">
      {controls.map((control) => (
        <Tooltip key={control.label} content={control.label}>
          <Button
            size={"icon"}
            variant={"secondary"}
            className="h-6 w-6 bg-transparent"
            onClick={control.onClick}
          >
            <control.icon size={16} />
          </Button>
        </Tooltip>
      ))}
    </div>
  );
}

export default TransformControls;