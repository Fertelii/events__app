import React, { useRef } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/router'

const SingleEvent = ({ data }) => {
    const inputEmail = useRef()

    const router = useRouter()

    const onSubmit = async (e) => {
        e.preventDefault()
        const emailValue = inputEmail.current.value
        const eventId = router?.query.id
        try {
            const response = await fetch('/api/email-registration', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ email: emailValue, eventId })
            })
            if (!response.ok) throw new Error(`Error: ${response.status}`)
            const data = await response.json()

        } catch (e) {
            console.log('ERROR', e)
        }

    }
    return (
        <div className='event_single_page'>
            <Image
                src={data.image}
                width={800}
                height={500}
                alt={data.title}
            />
            <h1>{data.title}</h1>
            <p>{data.description}</p>
            <form onSubmit={onSubmit}
                className='email_registration'>
                <label>Get Registered For This Event!</label>
                <input
                    ref={inputEmail}
                    type='email'
                    id='email'
                    placeholder='Please insert your email' />
                <button type='submit'>Submit</button>
            </form>

        </div>
    )
}

export default SingleEvent