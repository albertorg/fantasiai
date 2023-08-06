import { NextResponse } from 'next/server'
import { Configuration, OpenAIApi } from 'openai-edge'
import { OpenAIStream, StreamingTextResponse } from 'ai'
import { getUserByClerkId } from '@/lib/auth'

export const runtime = 'edge'

const config = new Configuration({
    apiKey: process.env.OPENAI_API_KEY
})

const openai = new OpenAIApi(config)

const Lang = {
    es: 'Español',
    pl: 'Polaco',
    en: 'Ingles',
    it: 'Italiano'
}

export async function POST(req: Request) {
    try {
        const user = getUserByClerkId()
        const body = await req.json()
        const { prompt, userId, locale } = body
        // console.log(user)
        
        // if (!userId) {
        //     return new NextResponse('Unauthorized', { status: 401 })
        // }

        if (!config.apiKey) {
            return new NextResponse('OpenAI API key not found', { status: 500 })
        }

        if (!prompt) {
            return new NextResponse('Prompt is required', { status: 400 })
        }

        const response = await openai.createChatCompletion({
            model: 'gpt-4',
            stream: true,
            messages: [
                {
                    role: 'system',
                    content: `Como escritor profesional de cuentos para niños, asumes el rol de crear asombrosas historias.
                        Tu don especial es transportar a los pequeños lectores a mundos mágicos y emocionantes. Tu imaginación 
                        es infinita y tus relatos están repletos de personajes entrañables, aventuras emocionantes y valiosas
                        lecciones para aprender.`
                },
                {
                    role: 'system',
                    content: `Ten en cuenta los requerimentos del usuario para crear la historia, 
                        si el usuario escribe una combinacion aleatoria de letra o un texto sin sentido genera un cuento aleatorio,
                        tu respuesta debe de ser siempre un cuento, no saludos ni nada diferente.`
                },
                {
                    role: 'system',
                    content: `Sin importar el idioma del propmt del ususario, Responde en: ${Lang[locale as 'pl' | 'es' | 'it' | 'en']}`
                },
                {
                    role: 'user',
                    content: prompt
                }
            ],
            
        })

        if (!response.ok) {
            return new NextResponse('Fail to fetch OpenAi', { status: 500 })
        }

        // Transform answer of openai in text_stream
        // const stream = OpenAIStream(response)

        // Convert the response into a friendly text-stream
        const stream = OpenAIStream(response, {
            onStart: async () => {
                // This callback is called when the stream starts
                // You can use this to save the prompt to your database
                // await savePromptToDatabase(prompt)
            },
            onCompletion: async (completion: string) => {
                // This callback is called when the stream completes
                // You can use this to save the final completion to your database
                // await saveCompletionToDatabase(completion)
                // console.log(completion)
            }
        })
        return new StreamingTextResponse(stream)     

    } catch (error) {
        console.log('[STORIES_API_ERROR]', error)
        return new NextResponse('Internal error', { status: 500 })
    }
}