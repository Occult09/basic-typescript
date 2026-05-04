interface Developer<T, X = null> {
    name: string;
    salary: number;
    device: {
        brand: string;
        model: string;
        releasedYear: string;
    };
    smartWatch: T;
    bike?: X;
}

const poorDeveloper: Developer<{
    calculator: boolean;
}, {
    brand: string;
    engineCapacity: number;
}> = {
    name: 'Mr. Poor',
    salary: 20,
    device: {
        brand: 'lenevo',
        model: 'A21',
        releasedYear: '2010'
    },
    smartWatch: {
        calculator: true
    },
    bike: {
        brand: 'Honda',
        engineCapacity: 100
    }
}

const richDeveloper: Developer<{
    calculator: boolean;
    heartRate: boolean;
    call: boolean;
}> = {
    name: 'Mr. Roor',
    salary: 200,
    device: {
        brand: 'apple',
        model: 'A21',
        releasedYear: '2025'
    },
    smartWatch: {
        calculator: true,
        heartRate: true,
        call: true
    }
}