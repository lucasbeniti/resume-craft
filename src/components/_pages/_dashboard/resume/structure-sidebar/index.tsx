import { Separator } from "@/components/ui/separator";
import TemplatesListSection from "./sections/template-list";
import LayoutSection from "./sections/layout";
import ThemeSection from "./sections/theme";
import LanguageSection from "./sections/language";

const StructureSidebar = () => {
  return (
    <aside className="overflow-y-auto w-full h-full p-6">
      <TemplatesListSection />
      <Separator className="my-5" />
      <LayoutSection />
      <Separator className="my-5" />
      <ThemeSection />
      <Separator className="my-5" />
      <LanguageSection />
    </aside>
  );
}

export default StructureSidebar;