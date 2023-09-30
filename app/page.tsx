"use client"
import CreateTemplateForm, { CreateTemplateFormType } from "@/components/CreateTemplateForm";
import TemplatePreview from "@/components/TemplatePreview";
import Image from "next/image";

export default function Home() {

const handleSubmit =(data:CreateTemplateFormType) => {
  console.log(data)
}

  return (
    <main className="container flex min-h-screen flex-col items-center  p-24">
      <p>AI WhatsApp Template Generator</p>
      <CreateTemplateForm onSubmit={handleSubmit} />
      {/* <TemplatePreview/> */}
    </main>
  );
}
