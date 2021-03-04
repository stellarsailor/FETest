export type PricingType = Array<{
    type: string;
    color: string;
    duration: string;
    price: number;
    features: Array<string>
}>

export const PricingArray = [
    {
        type: 'BASIC',
        color: 'var(--red)',
        duration: 'MONTHLY',
        price: 9,
        features: [
            'Very good',
            'Amazing',
            'Perfect job',
            'Love this',
            'It’s so good',
            'Features'
        ]
    },
    {
        type: 'ADVANCED',
        color: 'var(--yellow)',
        duration: 'YEARLY',
        price: 99,
        features: [
            'Very very good',
            'Even amazing',
            'Perfect job',
            'Love this more',
            'It’s so so good',
            'More Features'
        ]
    },
    {
        type: 'PRO',
        color: 'var(--skyblue)',
        duration: 'YEARLY',
        price: 120,
        features: [
            'Very very good',
            'Even amazing',
            'Perfect job',
            'Love this more',
            'It’s so so good',
            'More Features'
        ]
    },
]