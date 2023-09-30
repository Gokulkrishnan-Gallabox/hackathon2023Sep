"use client"
import React from 'react'
import { Form } from './ui/form'
import { useForm } from 'react-hook-form'
import { Input } from './ui/input'
import { Textarea } from './ui/textarea'
import { useCopyToClipboard } from '@/lib/useCopyClipBoard'
import { Button } from './ui/button'
import {CopyIcon,CopyCheck} from "lucide-react"
import { TemplateResponse } from '@/app/page'

interface TemplatePreviewProps {
data:TemplateResponse
}

const TemplatePreview:React.FC<TemplatePreviewProps> = ({data}) => {
    const {body,button,category,footer,header,language,template_name} =data?? {};
  const [headerCopied,onHeaderCopy] = useCopyToClipboard()
  const [bodyCopied,onBodyCopy] = useCopyToClipboard()
  const [footerCopied,onFooterCopy] = useCopyToClipboard()
  const [categoryCopied,onCategoryCopy] = useCopyToClipboard()


   
   
   
  return (
    <div className='w-full flex lg:flex-row lg:gap-8 lg:justify-between'>
    <div className='w-full lg:w-1/2 lg:flex lg:flex-col lg:gap-8 '>
       <div className='w-full lg:flex lg:justify-between lg:items-start'><h1>{template_name}</h1></div>
        <div className='w-full lg:flex lg:justify-between'>
            <h1>Header</h1>
            <div className='flex gap-2 '>
            <Input className='lg:w-60' name='header'  value={header.text} readOnly/>
            <Button variant="outline" size="icon" onClick={() => onHeaderCopy(header.text)}>
               {headerCopied ? <CopyCheck className='w-4 h-4' />: <CopyIcon className='h-4 w-4' />}</Button>
            </div>
        </div>
        <div className='w-full lg:flex lg:justify-between'>
            <h1>Body</h1>
            <div className='flex gap-2 '>
            <Textarea className='lg:w-60' name='body'   value={body} readOnly/>
            <Button variant="outline" size="icon" onClick={() => onBodyCopy(body)}>
               {bodyCopied ? <CopyCheck className='w-4 h-4' />: <CopyIcon className='h-4 w-4' />}</Button>
            </div>
        </div>
        <div className='w-full lg:flex lg:justify-between'>
            <h1>Footer</h1>
            <div className='flex gap-2 '>
            <Input className='lg:w-60' name='footer'  value={footer}readOnly/>
            <Button variant="outline" size="icon" onClick={() => onFooterCopy(footer)}>
               {footerCopied ? <CopyCheck className='w-4 h-4' />: <CopyIcon className='h-4 w-4' />}</Button>
            </div>
        </div>
        <div className='w-full lg:flex lg:justify-between'>
            <h1>Category</h1>
            <div className='flex gap-2 '>
            <Input className='lg:w-60' name='category'  value={category} readOnly/>
            <Button variant="outline" size="icon" onClick={() => onCategoryCopy(category)}>
               {categoryCopied ? <CopyCheck className='w-4 h-4' />: <CopyIcon className='h-4 w-4' />}</Button>
            </div>
        </div>
    </div>
    <div className='w-80 h-96 rounded-sm bg-blue-300'>
        <div className='flex flex-col w-full h-full'>
     <h1>{header}</h1>
        </div>

    </div>
    </div>
  )
}

export default TemplatePreview