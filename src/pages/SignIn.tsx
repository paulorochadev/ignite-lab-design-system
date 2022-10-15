import { FormEvent, useState } from "react";
import { Envelope, Lock } from "phosphor-react";
import { Checkbox } from "@radix-ui/react-checkbox";
import axios from 'axios';

import { Logo } from "../Logo";

import { Button } from "../components/Button";
import { Heading } from "../components/Heading";
import { TextInput } from "../components/TextInput";
import { Text } from "../components/Text";


export function SignIn() {
    const [isUserSignIn, setIsUserSignIn] = useState(false)

    async function handleSingIn(event: FormEvent) {
        event.preventDefault()

        await axios.post('./sessios', {
            email: 'teste@email.com',
            password: '123456',
        })

        setIsUserSignIn(true)
    }

    return (
        <div className='w-screen h-screen bg-gray-900 flex flex-col items-center justify-center text-gray-100'>
            <header className='flex flex-col items-center'>
                <Logo />

                <Heading size="lg" className='mt-4'>
                Ignite Lab
                </Heading>

                <Text size='lg' className='text-gray-400 mt-3'>
                Faça login e comece a usar!
                </Text>
            </header>

            <form onSubmit={handleSingIn} className='flex flex-col gap-4 items-stretch w-full max-w-sm mt-10'>
                { isUserSignIn && <Text>Login realizado!</Text> }

                <label htmlFor='email' className='flex flex-col gap-3'>
                <Text className='font-semibold'>
                    Endereço de e-mail
                </Text>

                <TextInput.Root>
                    <TextInput.Icon>
                    <Envelope />
                    </TextInput.Icon>

                    <TextInput.Input type="email" id='email' placeholder='Digite seu e-mail' />
                </TextInput.Root>
                </label>

                <label htmlFor='password' className='flex flex-col gap-3'>
                <Text className='font-semibold'>
                    Sua senha
                </Text>

                <TextInput.Root>
                    <TextInput.Icon>
                    <Lock />
                    </TextInput.Icon>

                    <TextInput.Input type="password" id='password' placeholder='******' />
                </TextInput.Root>
                </label>

                <label htmlFor='remenber' className='flex items-center gap-2'>
                <Checkbox id='remenber' />
                <Text size='sm' className='text-gray-200'>
                    Lembrar-me de mim por 30 dias.
                </Text>
                </label>

                <Button type='submit' className='mt-4'>
                Entrar na plataforma
                </Button>
            </form>

            <footer className='flex flex-col items-center gap-4 mt-8'>
                <Text asChild size='sm'>
                <a href='' className='text-gray-400 underline hover:text-gray-200'>Esqueceu sua senha?</a>
                </Text>

                <Text asChild size='sm'>
                <a href='' className='text-gray-400 underline hover:text-gray-200'>Não possui conta? Crie uma agora!</a>
                </Text>
            </footer>
        </div>
    )
}