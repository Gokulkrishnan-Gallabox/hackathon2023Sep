"use client"
import React from 'react'
import { Form } from './ui/form'
import { useForm } from 'react-hook-form'
import { Input } from './ui/input'
import { Textarea } from './ui/textarea'
import { useCopyToClipboard } from '@/lib/useCopyClipBoard'
import { Button } from './ui/button'
import {CopyIcon,CopyCheck} from "lucide-react"

const TemplatePreview = () => {
  const [headerCopied,onHeaderCopy] = useCopyToClipboard()
  const [bodyCopied,onBodyCopy] = useCopyToClipboard()
  const [footerCopied,onFooterCopy] = useCopyToClipboard()
  const [categoryCopied,onCategoryCopy] = useCopyToClipboard()

   
   
   
  return (
    <div className='w-full lg:w-1/2 lg:flex  lg:flex-col lg:gap-8  lg:py-16'>
       <div className='w-full lg:flex lg:justify-between'><h1>Template Name</h1></div>
        <div className='w-full lg:flex lg:justify-between'>
            <h1>Header</h1>
            <div className='flex gap-2 '>
            <Input className='lg:w-60' name='header'  value="value" readOnly/>
            <Button variant="outline" size="icon" onClick={() => onHeaderCopy("value")}>
               {headerCopied ? <CopyCheck className='w-4 h-4' />: <CopyIcon className='h-4 w-4' />}</Button>
            </div>
        </div>
        <div className='w-full lg:flex lg:justify-between'>
            <h1>Body</h1>
            <div className='flex gap-2 '>
            <Textarea className='lg:w-60' name='body'   value="value" readOnly/>
            <Button variant="outline" size="icon" onClick={() => onBodyCopy("value")}>
               {bodyCopied ? <CopyCheck className='w-4 h-4' />: <CopyIcon className='h-4 w-4' />}</Button>
            </div>
        </div>
        <div className='w-full lg:flex lg:justify-between'>
            <h1>Footer</h1>
            <div className='flex gap-2 '>
            <Input className='lg:w-60' name='footer'  value="value" readOnly/>
            <Button variant="outline" size="icon" onClick={() => onFooterCopy("value")}>
               {footerCopied ? <CopyCheck className='w-4 h-4' />: <CopyIcon className='h-4 w-4' />}</Button>
            </div>
        </div>
        <div className='w-full lg:flex lg:justify-between'>
            <h1>Category</h1>
            <div className='flex gap-2 '>
            <Input className='lg:w-60' name='category'  value="value" readOnly/>
            <Button variant="outline" size="icon" onClick={() => onCategoryCopy("value")}>
               {categoryCopied ? <CopyCheck className='w-4 h-4' />: <CopyIcon className='h-4 w-4' />}</Button>
            </div>
        </div>
    </div>
  )
}

export default TemplatePreview