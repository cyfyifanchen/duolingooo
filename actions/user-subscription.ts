import { getUserSubscription } from '@/db/queries';
import { userSubscription } from './../db/schema';
'use server'

import { absoluteUrl } from '@/lib/utils'
import { auth, currentUser } from '@clerk/nextjs'
import { stripe } from

const returnUrl = absoluteUrl('/shop')

export const createStripeUrl = async () => {
  const { userId } = await auth()
  const user = await currentUser()

  if (!userId || !user) {
    throw new Error('Unauthorized')
  }

  const userSubscription = await getUserSubscription()

  if (userSubscription && userSubscription.stripeCustomerId) {
    const stripeSession = await stripe.BillingPortal.SessionsResource.create({
      customer: userSubscription.stri
    })

  }
}
