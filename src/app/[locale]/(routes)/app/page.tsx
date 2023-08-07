'use client'

import * as z from 'zod'
import { useForm } from "react-hook-form"
import { formSchema } from './const'
import { zodResolver } from '@hookform/resolvers/zod'
import { Form, FormControl, FormField, FormItem } from '@/components/ui/form'
import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'
import { useCompletion } from 'ai/react'
import { useAuth } from '@clerk/nextjs'

interface Props {
    params: { locale: string }
}

const AppPage = ({ params }: Props) => {
    const { userId } = useAuth()

    const {
        completion,
        input,
        error,
        isLoading,
        handleInputChange,
        handleSubmit,
    } = useCompletion({
        api: '/es/api/stories',
        body: {
            userId,
            locale: params.locale
        }
    })

    // !isLoading && console.log(completion)

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            prompt: ''
        }
    })

    return (
        <main className='flex flex-col items-center h-full mt-20 max-w-4xl mx-auto px-4'>
            <div className='mt-12 flex justify-center w-full'>
                <Form {...form}>
                    <form
                        onSubmit={handleSubmit}
                        className='w-full max-w-lg'
                    >
                        <FormField
                            name='prompt'
                            render={({ field }) => (
                                <FormItem>
                                    <FormControl>
                                        <Textarea
                                            disabled={isLoading}
                                            {...field}
                                            value={input}
                                            onChange={handleInputChange}
                                            placeholder='Write some instructions'
                                        />
                                    </FormControl>
                                </FormItem>
                            )}
                        />

                        <Button
                            className='w-full max-w-lg mt-4' 
                            disabled={isLoading}>
                            Generate
                        </Button>
                    </form>
                </Form>
            </div>

            <div className='mt-12'>
                {completion}
            </div>
        </main>
    )
}

export default AppPage