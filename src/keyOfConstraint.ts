// keyof : type operator

type richPeoplesVehicle = {
    car: string;
    bike: string;
    cng: string;
};

type MyVehicle1 = "bike" | "car" | "cng";
type MyVehicle2 = keyof richPeoplesVehicle;

type User = {
    id: number;
    name: string;
    address: {
        city: string;
    };
};

const user = {
    id: 222,
    name: "Maheer",
    address: {
        city: 'dhaka'
    }
};

const myId = user["id"];
const myName = user["name"];
const myAddress = user["address"];

const getPropertyFromObj = <X>(obj: X, key: keyof X) => {
    return obj[key];
}

const result1 = getPropertyFromObj(user, "name");
console.log(result1);

const product = {
    brand: 'Apple'
};

const result2 = getPropertyFromObj(product, 'brand');
console.log(result2);