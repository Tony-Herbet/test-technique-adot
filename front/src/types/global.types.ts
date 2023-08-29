export interface ObjectType {
    [key: string]: BasicType | ObjectType | ArrayType | undefined | null;
}

export type BasicType = number | string | boolean;
export type ArrayType = Array<BasicType> | Array<ObjectType>;
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type SafeMap<T = any> = {
    [key: string]: T | undefined;
};