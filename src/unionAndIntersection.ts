// union |

type UserRole = 'admin' | 'user';

const getDashboard = (role: UserRole) => {
    if (role === 'admin') {
        return 'Admin Dashboard';
    }
    else if (role === 'user') {
        return 'User Dashboard';
    }
    else {
        return 'Guest Dashboard';
    }
};

getDashboard("user");

// intersection &

type Employee = {
    id: string;
    name: string;
    phoneNo: string;
};

type Manager = {
    designation: string;
    teamSize: number;
}

type EmployeeManager = Employee & Manager;

const obito: EmployeeManager = {
    id: '01',
    name: 'obito',
    phoneNo: '018',
    designation: 'manager',
    teamSize: 10
};

