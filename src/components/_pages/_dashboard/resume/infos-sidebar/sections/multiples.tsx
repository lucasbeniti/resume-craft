import { Share2, BriefcaseBusiness, GraduationCap, BicepsFlexed, Languages, FileBadge2, Globe } from "lucide-react";
import { Fragment, useState } from "react";
import MultipleDragList, { MultipleDragItemData } from "../multiple-drag-list";
import ManageMultipleItemDialog from "../multiple-drag-list/manage-multiple-item-dialog";
import { useFormContext } from "react-hook-form";
import { Separator } from "@/components/ui/separator";

const MultiplesSections = () => {
  const { getValues } = useFormContext();

  const [sectionToAdd, setSectionToAdd] = useState<MultipleDragItemData | null>(null)
  const sectionsKeys: MultipleDragItemData[] = [
    {
      formKey: "socialMedias",
      title: "Redes Sociais",
      icon: Share2,
      titleKey: "name",
      descriptionKey: "username",
    },
    {
      formKey: "experiences",
      title: "Experiências",
      icon: BriefcaseBusiness,
      titleKey: "company",
      descriptionKey: "position",
    },
    {
      formKey: "educations",
      title: "Educação",
      icon: GraduationCap,
      titleKey: "institution",
      descriptionKey: "degree",
    },
    {
      formKey: "skills",
      title: "Habilidades",
      icon: BicepsFlexed,
      titleKey: "name",
      descriptionKey: "description",
    },
    {
      formKey: "languages",
      title: "Idiomas",
      icon: Languages,
      titleKey: "name",
      descriptionKey: "description",
    },
    {
      formKey: "certifications",
      title: "Certificações",
      icon: FileBadge2,
      titleKey: "name",
      descriptionKey: "institution",
    },
    {
      formKey: "projects",
      title: "Projetos",
      icon: Globe,
      titleKey: "name",
      descriptionKey: "description",
    },
  ];

  const [initialData, setInitialData] = useState<MultipleDragItemData | null>(null);
  const onEdit = (section: MultipleDragItemData, index: number) => {
    const currentValues = getValues();
    const currentItems = currentValues.content[section.formKey]

    setSectionToAdd(section);
    setInitialData(currentItems[index]);
  }

  return (
    <div>
      {sectionsKeys.map((section) => (
        <Fragment key={`multiple-section-${section.title}`}>
          <Separator className="my-4" />
          <MultipleDragList
            data={section}
            onAdd={() => { setSectionToAdd(section) }}
            onEdit={(index) => { onEdit(section, index) }}
          />
        </Fragment>
      ))}

      {sectionToAdd && (
        <ManageMultipleItemDialog
          initialData={initialData}
          data={sectionToAdd}
          open={!!sectionToAdd}
          setOpen={(value) => {
            if (!value) {
              setInitialData(null)
              setSectionToAdd(null);
            }
          }}
        />
      )}
    </div>
  );
}

export default MultiplesSections;