import { stripe } from '@/lib/stripe';
import { createOrRetrieveCustomer } from '@/lib/stripe/adminTasks';
import { getURL } from '@/lib/utils';
import { createRouteHandlerClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';
export async function POST() {
  try {
    const supabse = createRouteHandlerClient({ cookies });
    const {
      data: { user },
    } = await supabse.auth.getUser();

    if (!user) throw new Error('could not find the user');

    const customer = await createOrRetrieveCustomer({
      email: user.email || '',
      uuid: user.id || '',
    });

    if (!customer) throw new Error('No Customer');
    const { url } = await stripe.billingPortal.sessions.create({
      customer,
      return_url: `${getURL()}/dashboard`,
    });
    return NextResponse.json({ url });
  } catch (error) {
    console.log('ERROR', error);
    return new NextResponse('Internal Error', { status: 500 });
  }
}
