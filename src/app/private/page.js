import { getSession } from '@/actions'
import { redirect } from 'next/navigation'
import React from 'react'
import CarForm from '../components/CarForm'

const Private = async () => {
  const session = await getSession()
  if (!session?.jwt) {
    redirect("/login")
  }
  return (
    <div className='p-4'>
      <h1>Private Page</h1>
      <CarForm />
    </div>
  )
}

export default Private