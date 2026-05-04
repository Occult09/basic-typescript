// utility type

type Product = {
    id: number;
    name: string;
    price: string;
    stock: string;
    color?: string;
};

type ProductSummary = Pick<Product, "id" | "name">;

type ProductWithoutStock = Omit<Product, "stock">;

type ProductWithColor = Required<Product>;

type OptionalProduct = Partial<Product>;

type ReadOnlyProduct = Readonly<Product>;

const emptyObj: Record<string, unknown> = {};