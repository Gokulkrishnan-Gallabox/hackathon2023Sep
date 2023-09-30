"use client"
import React from 'react'
import { Form } from './ui/form'
import { useForm } from 'react-hook-form'
import { Input } from './ui/input'
import { Textarea } from './ui/textarea'
import { useCopyToClipboard } from '@/lib/useCopyClipBoard'
import { Button } from './ui/button'
import {CopyIcon,CopyCheck,PhoneCallIcon,Link} from "lucide-react"
import { TemplateResponse } from '@/app/page'

interface TemplatePreviewProps {
data:TemplateResponse
}


const TemplatePreview:React.FC<TemplatePreviewProps> = ({data}) => {
    const {body,buttons,category,footer,header,language,template_name} =data;
  const [headerCopied,onHeaderCopy] = useCopyToClipboard()
  const [bodyCopied,onBodyCopy] = useCopyToClipboard()
  const [footerCopied,onFooterCopy] = useCopyToClipboard()
  const [categoryCopied,onCategoryCopy] = useCopyToClipboard()

 
   
  return (
    <div className='w-full lg:w-1/2 lg:flex lg:flex-col lg:gap-8 '>
       <div className='w-full lg:flex lg:justify-between lg:items-start'><h1>{template_name}</h1></div>
        <div className='w-full lg:flex lg:justify-between'>
            <h1 className='text-lg font-medium'>Header</h1>
            <div className='flex gap-2 '>
            <Input className='lg:w-60' name='header'  value={header?.text} readOnly/>
            <Button variant="outline" size="icon" onClick={() => onHeaderCopy(header.text)}>
               {headerCopied ? <CopyCheck className='w-4 h-4' />: <CopyIcon className='h-4 w-4' />}</Button>
            </div>
        </div>
        <div className='w-full lg:flex lg:flex-col lg:justify-between lg:gap-2'>
            <h1 className='text-lg font-medium'>Body</h1>
            <div className='flex gap-2 '>
            <div className='w-full h-full'>{body}</div>
            <Button variant="outline" size="icon" onClick={() => onBodyCopy(body)}>
               {bodyCopied ? <CopyCheck className='w-4 h-4' />: <CopyIcon className='h-4 w-4' />}</Button>
            </div>
        </div>
        <div className='w-full lg:flex lg:justify-between'>
            <h1 className='text-lg font-medium'>Footer</h1>
            <div className='flex gap-2 '>
            <Input className='lg:w-60' name='footer'  value={footer}readOnly/>
            <Button variant="outline" size="icon" onClick={() => onFooterCopy(footer)}>
               {footerCopied ? <CopyCheck className='w-4 h-4' />: <CopyIcon className='h-4 w-4' />}</Button>
            </div>
        </div>
        <div className='w-full lg:flex lg:justify-between'>
            <h1 className='text-lg font-medium'>Category</h1>
            <div className='flex gap-2 '>
            <Input className='lg:w-60' name='category'  value={category} readOnly/>
            <Button variant="outline" size="icon" onClick={() => onCategoryCopy(category)}>
               {categoryCopied ? <CopyCheck className='w-4 h-4' />: <CopyIcon className='h-4 w-4' />}</Button>
            </div>
        </div>
        <div className='w-full lg:flex lg:justify-between'>
            <h1 className='text-lg font-medium'>Buttons</h1>
            <div className='flex gap-2'>
                {buttons?.buttons?.map((c) => {
                    return (
                    <Button  className='gap-2 hover:bg-blue-500 hover:text-white ' size="sm" variant="outline" key={c.text} >
                       {c.type ==="url" ? <Link className='w-4 h-4' /> : <PhoneCallIcon className='h-4 w-4' /> }
                        {c.text}</Button>
                    )
                })}
            </div>
        </div>
    </div>
  )
}

export default TemplatePreview