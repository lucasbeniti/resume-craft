"use client";

import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch"
import TransformControls from "./controls";
import NavigationHeader from "./header";
import { useFormContext } from "react-hook-form";
import { ResumeTemplate } from "./templates";

const ResumeContent = () => {
  const { watch } = useFormContext<ResumeData>();
  const data = watch();

  return (
    <section className="overflow-hidden w-full h-full flex items-center justifty-center relative bg-muted dark:bg-background">
      <TransformWrapper
        initialScale={0.5}
        minScale={0.4}
        centerOnInit
        centerZoomedOut
        limitToBounds={false}
      >
        <>
          <NavigationHeader />
          <TransformComponent>
            <ResumeTemplate data={data} />
          </TransformComponent>
          <TransformControls />
        </>
      </TransformWrapper>
    </section>
  );
}

export default ResumeContent;