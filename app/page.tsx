"use client"
import CreateTemplateForm, { CreateTemplateFormType } from "@/components/CreateTemplateForm";
import TemplatePreview from "@/components/TemplatePreview";
import Image from "next/image";
import React from "react";
import { Skeleton } from "@/components/ui/skeleton"
import  Logo from "@/public/logo_ai.png"



export interface TemplateResponse {
  template_name: string
  category: string
  language: string
  header: Header
  body: string
  footer: string
  buttons: Buttons
}

export interface Header {
  type: string
  text: string
}

export interface Buttons {
  type: string
  buttons: Button[]
}

export interface Button {
  type: string
  text: string
  url?: string
  phone_number?: string
}



export default function Home() {

  const [data,setData] =React.useState<TemplateResponse|null>(null)


 

const handleSubmit =async (data:CreateTemplateFormType) => {
   localStorage.setItem("templateBio", JSON.stringify(data))
  setData(null);
  const response = await fetch("/api/template",{
    method:"POST",
    body:JSON.stringify(data),
    headers:{
      "Content-Type":"application/json",
    },
  })
  const res =await response.json();
  setData(JSON.parse(res))
}



  return (
    <main className="container flex min-h-screen flex-col items-center">
      <Image src={Logo} alt="ai_icon" width="200" height="160" />
      <p>AI WhatsApp Template Generator</p>
      <div className=" w-full flex justify-center items-center lg:flex-col gap-8">
        <CreateTemplateForm handleSubmit={handleSubmit} />
      {!!data && <TemplatePreview data={data}/> }
       </div>
    </main>
  );
}
