import CreateTemplateForm from "@/components/CreateTemplateForm";
import Image from "next/image";

export default function Home() {
  return (
    <main className="container flex min-h-screen flex-col items-center  p-24">
      <p>AI WhatsApp Template Generator</p>
      <CreateTemplateForm />
    </main>
  );
}
