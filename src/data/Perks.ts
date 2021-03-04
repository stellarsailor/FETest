export type PerksType = Array<{
    title: Array<string>;
    description: string;
    color: string;
}>

export const PerksArray: PerksType = [
    {
        title: ['Subscription', 'Payment', 'Model'], 
        description: 'No commitment, cancel anytime. Never worry about forgetting a payment again!',
        color: 'var(--red)'
    },
    {
        title: ['No Fee', 'Cancelation', 'Policy'], 
        description: 'No commitment, cancel anytime. Never worry about forgetting a payment again!',
        color: 'var(--skyblue)'
    },
    {
        title: ['Subscription', 'Payment', 'Model'],
        description: 'No commitment, cancel anytime. Never worry about forgetting a payment again!',
        color: 'var(--yellow)'
    },
]