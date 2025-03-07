'use client'

import React, { useState } from 'react'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import * as z from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { LoginSchema } from '@/schema'
import { Loader2 } from 'lucide-react'
import { FcGoogle } from 'react-icons/fc';
import { FaGithub } from 'react-icons/fa';

export default function LoginForm() {

    const [isGoogleLoading, setGoogleLoading] = useState(false);
    const [isGithubLoading, setGithubLoading] = useState(false);

    //Formulaire React Hook Form
    const form = useForm<z.infer<typeof LoginSchema>>({
        resolver: zodResolver(LoginSchema),
        defaultValues: {
            email: "",
        }
    })


    const isPending = form.formState.isSubmitting


    //Validation des données
    const onSubmit = async (data: z.infer<typeof LoginSchema>) => {
        console.log(data);
    }

    const onClick = async (provider: 'google' | 'github') => {
        console.log(provider);
    }
    return (
        <Card className='w-full max-w-sm'>
            <CardHeader>
                <CardTitle className='text-2xl'>Sign in</CardTitle>
                <CardDescription>
                    Veuillez remplir vos informations
                </CardDescription>
            </CardHeader>

            <CardContent className='space-y-4'>
                <Form {...form}>
                    <form
                        className='space-y-6'
                        onSubmit={form.handleSubmit(onSubmit)}>
                        <FormField
                            name="email"
                            control={form.control}
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Email</FormLabel>
                                    <FormControl>
                                        <Input {...field} id="email" type="email" placeholder='contact@muthu.ch' disabled={isPending} />
                                    </FormControl>
                                </FormItem>
                            )}
                        />
                        <Button className='w-full'>
                            {
                                isPending ? <Loader2 className='w-5 h-8 animate-spin' /> : 'Sign In'
                            }
                        </Button>
                    </form>
                </Form>

                <div className='w-full flex items-center space-x-2'>
                    <div className='h-[1px] w-full border' />
                    <span className='flex-1'>Or</span>
                    <div className='h-[1px] w-full border' />
                </div>

                <Button variant={'outline'} className='w-full space-x-2 flex' onClick={() => {
                    setGoogleLoading(true)
                    onClick('google');
                }}
                    disabled={isPending}>
                    {
                        isGoogleLoading ? <Loader2 className='w-5 h-8 animate-spin' /> : <>
                            <FcGoogle className='w-6 h-6' />
                            <span>Sign in with Google</span>
                        </>
                    }

                </Button>

                <Button variant={'outline'} className='w-full space-x-2 flex' onClick={() => {
                    setGithubLoading(true)
                    onClick('github');
                }}
                    disabled={isPending}>
                    {
                        isGithubLoading ? <Loader2 className='w-5 h-8 animate-spin' /> : <>
                            <FaGithub className='w-6 h-6' />
                            <span>Sign in with Github</span>
                        </>
                    }

                </Button>

            </CardContent>
        </Card>
    )
}
