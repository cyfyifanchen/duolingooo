import db from '@/db/drizzle'
import { userSubscription } from '@/db/schema'
import { stripe } from '@/lib/stripe'
import { headers } from 'next/headers'
import { NextResponse } from 'next/server'
import Stripe from 'stripe'

export async function POST(req: Request) {
  const body = await req.text()
  const signature = headers().get('Stripe-Signature') as string

  let event: Stripe.Event

  try {
    event = stripe.webhooks.constructEvent(
      body,
      signature,
      process.env.STRIPE_WEBHOOK_SECRET!
    )
  } catch (error: any) {
    return new NextResponse(`Webhook error: ${error.message}`, {
      status: 400,
    })
  }

  const session = event.data.object as Stripe.Checkout.Session

  if (event.type === 'checkout.session.completed') {
    const subscription = await stripe.subscriptions.retrieve(
      session.subscription as string
    )
  }

  if (!session?.metadata?.userId) {
    return new NextResponse('User ID is required', { status: 400 })

    await db.insert(userSubscription).values({
      userId: session.metadata.userId,
      stripeSubscriptionId: subscriptIcon.id,
      stripeCustomerId: SubscriptIcon.customer as string,
      stripePriceId: SubscriptIcon.items.data[0].price.id,
      stripeCurrentPeriodEnd: new Date(subscriptIcon.current_period_end * 1000),
    })
  }

  return new NextResponse(null, { status: 200 })
}
