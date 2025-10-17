// Utility Types là các kiểu dựng sẵn (built-in types) trong TypeScript giúp thao tác, biến đổi hoặc trích xuất kiểu dữ liệu khác.

//Partial<T> vs Required<T>
interface Student {
    name: string;
    age: number;
}

type PartialStudent = Partial<Student>;

const u1: PartialStudent = { name: "Alice" };

//=======
interface Config {
    url?: string;
    timeout?: number;
}

type StrictConfig = Required<Config>;

const c1: StrictConfig = { url: "api.com", timeout: 2000 };

// Pick<T, K> vs Omit<T, K>
interface User {
    id: number;
    name: string;
    email: string;
}

type BasicUser = Pick<User, "id" | "name">;

const u: BasicUser = { id: 1, name: "Alice" }; // OK

//=============
type PrivateUser = Omit<User, "email">;

const u2: PrivateUser = { id: 1, name: "Bob" }; // OK

// Extract<T, U> vs Exclude<T, U>
type All = "a" | "b" | "c";
type Filtered = Extract<All, "a" | "b" | "x">; // Kết quả: "a" | "b"

type Removed = Exclude<All, "a" | "x">; // Kết quả: "b" | "c"
