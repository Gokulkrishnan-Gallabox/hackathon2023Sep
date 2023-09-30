"use client";
import React from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Loader2 } from "lucide-react";

const formSchema = z.object({
  bioOfCompany: z.string().min(8).max(500),
  businessName: z.string().min(5).max(500),
  topic: z.string().min(5).max(200),
  tone: z.enum(["professional", "formal", "humour", "creative", "minimal"], {
    required_error: "You need to select a notification type.",
  }),
  language: z.string().nonempty("This field is Required"),
});

interface CreateTemplateFormProps {
  handleSubmit:(value:CreateTemplateFormType) => Promise<void>
}

export type CreateTemplateFormType = z.infer<typeof formSchema>

const CreateTemplateForm:React.FC<CreateTemplateFormProps> = ({handleSubmit}) => {
  const [isLoading,setLoading] =React.useState<boolean>(false)
  const getStorage = localStorage.getItem("templateBio")
  const {bioOfCompany,businessName} = typeof getStorage === "string" && JSON.parse(getStorage)

  const form = useForm<CreateTemplateFormType>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      bioOfCompany: bioOfCompany ?? "",
      businessName: businessName ?? "",
      topic: "",
      tone: "professional",
      language: "",
    },
  });


  const  onSubmit =async (data:CreateTemplateFormType) => {
    setLoading(true);
    await handleSubmit(data)
    setLoading(false)
  
  }

  

  return (
    <div className="w-full lg:w-1/2 lg:flex  lg:flex-col lg:gap-8  lg:py-16'">
    <Form {...form} >
      <form  onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="bioOfCompany"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Bio of you company</FormLabel>
              <FormControl>
                <Textarea placeholder="Enter Bio of your Company" {...field} />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="businessName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Business Name</FormLabel>
              <FormControl>
                <Input placeholder="shadcn" {...field} />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="topic"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Topic</FormLabel>
              <FormControl>
                <Input placeholder="shadcn" {...field} />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="tone"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Tone</FormLabel>
              <FormControl className="flex lg:flex-row">
                <RadioGroup
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                  className="flex flex-col space-y-1"
                >
                  <FormItem className="flex items-center space-x-3 space-y-0">
                    <FormControl>
                      <RadioGroupItem value="professional" />
                    </FormControl>
                    <FormLabel className="font-normal">Professional</FormLabel>
                  </FormItem>
                  <FormItem className="flex items-center space-x-3 space-y-0">
                    <FormControl>
                      <RadioGroupItem value="formal" />
                    </FormControl>
                    <FormLabel className="font-normal">Formal</FormLabel>
                  </FormItem>
                  <FormItem className="flex items-center space-x-3 space-y-0">
                    <FormControl>
                      <RadioGroupItem value="humour" />
                    </FormControl>
                    <FormLabel className="font-normal">Humor</FormLabel>
                  </FormItem>
                  <FormItem className="flex items-center space-x-3 space-y-0">
                    <FormControl>
                      <RadioGroupItem value="creative" />
                    </FormControl>
                    <FormLabel className="font-normal">Creative</FormLabel>
                  </FormItem>
                  <FormItem className="flex items-center space-x-3 space-y-0">
                    <FormControl>
                      <RadioGroupItem value="minimal" />
                    </FormControl>
                    <FormLabel className="font-normal">Minimal</FormLabel>
                  </FormItem>
                </RadioGroup>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="language"
          render={({ field }) => (
            <FormItem className="lg:w-48">
              <FormLabel>Language</FormLabel>
              <FormControl>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select language" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="english">English</SelectItem>
                    <SelectItem value="tamil">Tamil</SelectItem>
                  </SelectContent>
                </Select>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="lg:w-full flex justify-center items-center" >
       {isLoading ? <Button  className="w-60" disabled>
      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          Generating Template
    </Button> :<Button className="w-60"type="submit">Create Template</Button> }
    </div>
      </form>
    </Form>
    </div>
  );
};

export default CreateTemplateForm;
