
/**
 * Client
**/

import * as runtime from './runtime/library';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Address
 * 
 */
export type Address = $Result.DefaultSelection<Prisma.$AddressPayload>
/**
 * Model Product
 * 
 */
export type Product = $Result.DefaultSelection<Prisma.$ProductPayload>
/**
 * Model CartProduct
 * 
 */
export type CartProduct = $Result.DefaultSelection<Prisma.$CartProductPayload>
/**
 * Model Favorite
 * 
 */
export type Favorite = $Result.DefaultSelection<Prisma.$FavoritePayload>
/**
 * Model Order
 * 
 */
export type Order = $Result.DefaultSelection<Prisma.$OrderPayload>
/**
 * Model OrderedProduct
 * 
 */
export type OrderedProduct = $Result.DefaultSelection<Prisma.$OrderedProductPayload>
/**
 * Model PaymentDetail
 * 
 */
export type PaymentDetail = $Result.DefaultSelection<Prisma.$PaymentDetailPayload>
/**
 * Model ShippingDetail
 * 
 */
export type ShippingDetail = $Result.DefaultSelection<Prisma.$ShippingDetailPayload>
/**
 * Model Location
 * 
 */
export type Location = $Result.DefaultSelection<Prisma.$LocationPayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<'extends', Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs>;

  /**
   * `prisma.address`: Exposes CRUD operations for the **Address** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Addresses
    * const addresses = await prisma.address.findMany()
    * ```
    */
  get address(): Prisma.AddressDelegate<ExtArgs>;

  /**
   * `prisma.product`: Exposes CRUD operations for the **Product** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Products
    * const products = await prisma.product.findMany()
    * ```
    */
  get product(): Prisma.ProductDelegate<ExtArgs>;

  /**
   * `prisma.cartProduct`: Exposes CRUD operations for the **CartProduct** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CartProducts
    * const cartProducts = await prisma.cartProduct.findMany()
    * ```
    */
  get cartProduct(): Prisma.CartProductDelegate<ExtArgs>;

  /**
   * `prisma.favorite`: Exposes CRUD operations for the **Favorite** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Favorites
    * const favorites = await prisma.favorite.findMany()
    * ```
    */
  get favorite(): Prisma.FavoriteDelegate<ExtArgs>;

  /**
   * `prisma.order`: Exposes CRUD operations for the **Order** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Orders
    * const orders = await prisma.order.findMany()
    * ```
    */
  get order(): Prisma.OrderDelegate<ExtArgs>;

  /**
   * `prisma.orderedProduct`: Exposes CRUD operations for the **OrderedProduct** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more OrderedProducts
    * const orderedProducts = await prisma.orderedProduct.findMany()
    * ```
    */
  get orderedProduct(): Prisma.OrderedProductDelegate<ExtArgs>;

  /**
   * `prisma.paymentDetail`: Exposes CRUD operations for the **PaymentDetail** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PaymentDetails
    * const paymentDetails = await prisma.paymentDetail.findMany()
    * ```
    */
  get paymentDetail(): Prisma.PaymentDetailDelegate<ExtArgs>;

  /**
   * `prisma.shippingDetail`: Exposes CRUD operations for the **ShippingDetail** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ShippingDetails
    * const shippingDetails = await prisma.shippingDetail.findMany()
    * ```
    */
  get shippingDetail(): Prisma.ShippingDetailDelegate<ExtArgs>;

  /**
   * `prisma.location`: Exposes CRUD operations for the **Location** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Locations
    * const locations = await prisma.location.findMany()
    * ```
    */
  get location(): Prisma.LocationDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 5.5.2
   * Query Engine version: aebc046ce8b88ebbcb45efe31cbe7d06fd6abc0a
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray | { toJSON(): unknown }

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Address: 'Address',
    Product: 'Product',
    CartProduct: 'CartProduct',
    Favorite: 'Favorite',
    Order: 'Order',
    OrderedProduct: 'OrderedProduct',
    PaymentDetail: 'PaymentDetail',
    ShippingDetail: 'ShippingDetail',
    Location: 'Location'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }


  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs}, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meta: {
      modelProps: 'user' | 'address' | 'product' | 'cartProduct' | 'favorite' | 'order' | 'orderedProduct' | 'paymentDetail' | 'shippingDetail' | 'location'
      txIsolationLevel: Prisma.TransactionIsolationLevel
    },
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>,
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>,
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Address: {
        payload: Prisma.$AddressPayload<ExtArgs>
        fields: Prisma.AddressFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AddressFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AddressPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AddressFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AddressPayload>
          }
          findFirst: {
            args: Prisma.AddressFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AddressPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AddressFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AddressPayload>
          }
          findMany: {
            args: Prisma.AddressFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AddressPayload>[]
          }
          create: {
            args: Prisma.AddressCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AddressPayload>
          }
          createMany: {
            args: Prisma.AddressCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.AddressDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AddressPayload>
          }
          update: {
            args: Prisma.AddressUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AddressPayload>
          }
          deleteMany: {
            args: Prisma.AddressDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.AddressUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.AddressUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AddressPayload>
          }
          aggregate: {
            args: Prisma.AddressAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateAddress>
          }
          groupBy: {
            args: Prisma.AddressGroupByArgs<ExtArgs>,
            result: $Utils.Optional<AddressGroupByOutputType>[]
          }
          count: {
            args: Prisma.AddressCountArgs<ExtArgs>,
            result: $Utils.Optional<AddressCountAggregateOutputType> | number
          }
        }
      }
      Product: {
        payload: Prisma.$ProductPayload<ExtArgs>
        fields: Prisma.ProductFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProductFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProductPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProductFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          findFirst: {
            args: Prisma.ProductFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProductPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProductFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          findMany: {
            args: Prisma.ProductFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>[]
          }
          create: {
            args: Prisma.ProductCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          createMany: {
            args: Prisma.ProductCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.ProductDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          update: {
            args: Prisma.ProductUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          deleteMany: {
            args: Prisma.ProductDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.ProductUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.ProductUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          aggregate: {
            args: Prisma.ProductAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateProduct>
          }
          groupBy: {
            args: Prisma.ProductGroupByArgs<ExtArgs>,
            result: $Utils.Optional<ProductGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProductCountArgs<ExtArgs>,
            result: $Utils.Optional<ProductCountAggregateOutputType> | number
          }
        }
      }
      CartProduct: {
        payload: Prisma.$CartProductPayload<ExtArgs>
        fields: Prisma.CartProductFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CartProductFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CartProductPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CartProductFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CartProductPayload>
          }
          findFirst: {
            args: Prisma.CartProductFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CartProductPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CartProductFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CartProductPayload>
          }
          findMany: {
            args: Prisma.CartProductFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CartProductPayload>[]
          }
          create: {
            args: Prisma.CartProductCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CartProductPayload>
          }
          createMany: {
            args: Prisma.CartProductCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.CartProductDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CartProductPayload>
          }
          update: {
            args: Prisma.CartProductUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CartProductPayload>
          }
          deleteMany: {
            args: Prisma.CartProductDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.CartProductUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.CartProductUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CartProductPayload>
          }
          aggregate: {
            args: Prisma.CartProductAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateCartProduct>
          }
          groupBy: {
            args: Prisma.CartProductGroupByArgs<ExtArgs>,
            result: $Utils.Optional<CartProductGroupByOutputType>[]
          }
          count: {
            args: Prisma.CartProductCountArgs<ExtArgs>,
            result: $Utils.Optional<CartProductCountAggregateOutputType> | number
          }
        }
      }
      Favorite: {
        payload: Prisma.$FavoritePayload<ExtArgs>
        fields: Prisma.FavoriteFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FavoriteFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FavoritePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FavoriteFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FavoritePayload>
          }
          findFirst: {
            args: Prisma.FavoriteFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FavoritePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FavoriteFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FavoritePayload>
          }
          findMany: {
            args: Prisma.FavoriteFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FavoritePayload>[]
          }
          create: {
            args: Prisma.FavoriteCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FavoritePayload>
          }
          createMany: {
            args: Prisma.FavoriteCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.FavoriteDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FavoritePayload>
          }
          update: {
            args: Prisma.FavoriteUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FavoritePayload>
          }
          deleteMany: {
            args: Prisma.FavoriteDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.FavoriteUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.FavoriteUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FavoritePayload>
          }
          aggregate: {
            args: Prisma.FavoriteAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateFavorite>
          }
          groupBy: {
            args: Prisma.FavoriteGroupByArgs<ExtArgs>,
            result: $Utils.Optional<FavoriteGroupByOutputType>[]
          }
          count: {
            args: Prisma.FavoriteCountArgs<ExtArgs>,
            result: $Utils.Optional<FavoriteCountAggregateOutputType> | number
          }
        }
      }
      Order: {
        payload: Prisma.$OrderPayload<ExtArgs>
        fields: Prisma.OrderFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OrderFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$OrderPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OrderFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          findFirst: {
            args: Prisma.OrderFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$OrderPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OrderFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          findMany: {
            args: Prisma.OrderFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>[]
          }
          create: {
            args: Prisma.OrderCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          createMany: {
            args: Prisma.OrderCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.OrderDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          update: {
            args: Prisma.OrderUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          deleteMany: {
            args: Prisma.OrderDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.OrderUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.OrderUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          aggregate: {
            args: Prisma.OrderAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateOrder>
          }
          groupBy: {
            args: Prisma.OrderGroupByArgs<ExtArgs>,
            result: $Utils.Optional<OrderGroupByOutputType>[]
          }
          count: {
            args: Prisma.OrderCountArgs<ExtArgs>,
            result: $Utils.Optional<OrderCountAggregateOutputType> | number
          }
        }
      }
      OrderedProduct: {
        payload: Prisma.$OrderedProductPayload<ExtArgs>
        fields: Prisma.OrderedProductFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OrderedProductFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$OrderedProductPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OrderedProductFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$OrderedProductPayload>
          }
          findFirst: {
            args: Prisma.OrderedProductFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$OrderedProductPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OrderedProductFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$OrderedProductPayload>
          }
          findMany: {
            args: Prisma.OrderedProductFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$OrderedProductPayload>[]
          }
          create: {
            args: Prisma.OrderedProductCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$OrderedProductPayload>
          }
          createMany: {
            args: Prisma.OrderedProductCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.OrderedProductDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$OrderedProductPayload>
          }
          update: {
            args: Prisma.OrderedProductUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$OrderedProductPayload>
          }
          deleteMany: {
            args: Prisma.OrderedProductDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.OrderedProductUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.OrderedProductUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$OrderedProductPayload>
          }
          aggregate: {
            args: Prisma.OrderedProductAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateOrderedProduct>
          }
          groupBy: {
            args: Prisma.OrderedProductGroupByArgs<ExtArgs>,
            result: $Utils.Optional<OrderedProductGroupByOutputType>[]
          }
          count: {
            args: Prisma.OrderedProductCountArgs<ExtArgs>,
            result: $Utils.Optional<OrderedProductCountAggregateOutputType> | number
          }
        }
      }
      PaymentDetail: {
        payload: Prisma.$PaymentDetailPayload<ExtArgs>
        fields: Prisma.PaymentDetailFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PaymentDetailFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PaymentDetailPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PaymentDetailFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PaymentDetailPayload>
          }
          findFirst: {
            args: Prisma.PaymentDetailFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PaymentDetailPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PaymentDetailFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PaymentDetailPayload>
          }
          findMany: {
            args: Prisma.PaymentDetailFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PaymentDetailPayload>[]
          }
          create: {
            args: Prisma.PaymentDetailCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PaymentDetailPayload>
          }
          createMany: {
            args: Prisma.PaymentDetailCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.PaymentDetailDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PaymentDetailPayload>
          }
          update: {
            args: Prisma.PaymentDetailUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PaymentDetailPayload>
          }
          deleteMany: {
            args: Prisma.PaymentDetailDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.PaymentDetailUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.PaymentDetailUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PaymentDetailPayload>
          }
          aggregate: {
            args: Prisma.PaymentDetailAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregatePaymentDetail>
          }
          groupBy: {
            args: Prisma.PaymentDetailGroupByArgs<ExtArgs>,
            result: $Utils.Optional<PaymentDetailGroupByOutputType>[]
          }
          count: {
            args: Prisma.PaymentDetailCountArgs<ExtArgs>,
            result: $Utils.Optional<PaymentDetailCountAggregateOutputType> | number
          }
        }
      }
      ShippingDetail: {
        payload: Prisma.$ShippingDetailPayload<ExtArgs>
        fields: Prisma.ShippingDetailFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ShippingDetailFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ShippingDetailPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ShippingDetailFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ShippingDetailPayload>
          }
          findFirst: {
            args: Prisma.ShippingDetailFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ShippingDetailPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ShippingDetailFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ShippingDetailPayload>
          }
          findMany: {
            args: Prisma.ShippingDetailFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ShippingDetailPayload>[]
          }
          create: {
            args: Prisma.ShippingDetailCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ShippingDetailPayload>
          }
          createMany: {
            args: Prisma.ShippingDetailCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.ShippingDetailDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ShippingDetailPayload>
          }
          update: {
            args: Prisma.ShippingDetailUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ShippingDetailPayload>
          }
          deleteMany: {
            args: Prisma.ShippingDetailDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.ShippingDetailUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.ShippingDetailUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ShippingDetailPayload>
          }
          aggregate: {
            args: Prisma.ShippingDetailAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateShippingDetail>
          }
          groupBy: {
            args: Prisma.ShippingDetailGroupByArgs<ExtArgs>,
            result: $Utils.Optional<ShippingDetailGroupByOutputType>[]
          }
          count: {
            args: Prisma.ShippingDetailCountArgs<ExtArgs>,
            result: $Utils.Optional<ShippingDetailCountAggregateOutputType> | number
          }
        }
      }
      Location: {
        payload: Prisma.$LocationPayload<ExtArgs>
        fields: Prisma.LocationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LocationFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$LocationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LocationFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$LocationPayload>
          }
          findFirst: {
            args: Prisma.LocationFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$LocationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LocationFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$LocationPayload>
          }
          findMany: {
            args: Prisma.LocationFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$LocationPayload>[]
          }
          create: {
            args: Prisma.LocationCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$LocationPayload>
          }
          createMany: {
            args: Prisma.LocationCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.LocationDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$LocationPayload>
          }
          update: {
            args: Prisma.LocationUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$LocationPayload>
          }
          deleteMany: {
            args: Prisma.LocationDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.LocationUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.LocationUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$LocationPayload>
          }
          aggregate: {
            args: Prisma.LocationAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateLocation>
          }
          groupBy: {
            args: Prisma.LocationGroupByArgs<ExtArgs>,
            result: $Utils.Optional<LocationGroupByOutputType>[]
          }
          count: {
            args: Prisma.LocationCountArgs<ExtArgs>,
            result: $Utils.Optional<LocationCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<'define', Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    addresses: number
    orders: number
    CartProducts: number
    favoriteItems: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    addresses?: boolean | UserCountOutputTypeCountAddressesArgs
    orders?: boolean | UserCountOutputTypeCountOrdersArgs
    CartProducts?: boolean | UserCountOutputTypeCountCartProductsArgs
    favoriteItems?: boolean | UserCountOutputTypeCountFavoriteItemsArgs
  }

  // Custom InputTypes

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountAddressesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AddressWhereInput
  }


  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountOrdersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderWhereInput
  }


  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountCartProductsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CartProductWhereInput
  }


  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountFavoriteItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FavoriteWhereInput
  }



  /**
   * Count Type OrderCountOutputType
   */

  export type OrderCountOutputType = {
    PaymentDetails: number
    ShippingDetails: number
    OrderedProducts: number
  }

  export type OrderCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    PaymentDetails?: boolean | OrderCountOutputTypeCountPaymentDetailsArgs
    ShippingDetails?: boolean | OrderCountOutputTypeCountShippingDetailsArgs
    OrderedProducts?: boolean | OrderCountOutputTypeCountOrderedProductsArgs
  }

  // Custom InputTypes

  /**
   * OrderCountOutputType without action
   */
  export type OrderCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderCountOutputType
     */
    select?: OrderCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * OrderCountOutputType without action
   */
  export type OrderCountOutputTypeCountPaymentDetailsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PaymentDetailWhereInput
  }


  /**
   * OrderCountOutputType without action
   */
  export type OrderCountOutputTypeCountShippingDetailsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ShippingDetailWhereInput
  }


  /**
   * OrderCountOutputType without action
   */
  export type OrderCountOutputTypeCountOrderedProductsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderedProductWhereInput
  }



  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    email: string | null
    password: string | null
    firstName: string | null
    lastName: string | null
    profilePic: string | null
    notification: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
    isAdmin: boolean | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    email: string | null
    password: string | null
    firstName: string | null
    lastName: string | null
    profilePic: string | null
    notification: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
    isAdmin: boolean | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    password: number
    firstName: number
    lastName: number
    profilePic: number
    notification: number
    createdAt: number
    updatedAt: number
    isAdmin: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    password?: true
    firstName?: true
    lastName?: true
    profilePic?: true
    notification?: true
    createdAt?: true
    updatedAt?: true
    isAdmin?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    password?: true
    firstName?: true
    lastName?: true
    profilePic?: true
    notification?: true
    createdAt?: true
    updatedAt?: true
    isAdmin?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    password?: true
    firstName?: true
    lastName?: true
    profilePic?: true
    notification?: true
    createdAt?: true
    updatedAt?: true
    isAdmin?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: number
    email: string
    password: string
    firstName: string | null
    lastName: string | null
    profilePic: string | null
    notification: boolean
    createdAt: Date
    updatedAt: Date
    isAdmin: boolean
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    firstName?: boolean
    lastName?: boolean
    profilePic?: boolean
    notification?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    isAdmin?: boolean
    addresses?: boolean | User$addressesArgs<ExtArgs>
    orders?: boolean | User$ordersArgs<ExtArgs>
    CartProducts?: boolean | User$CartProductsArgs<ExtArgs>
    favoriteItems?: boolean | User$favoriteItemsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    password?: boolean
    firstName?: boolean
    lastName?: boolean
    profilePic?: boolean
    notification?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    isAdmin?: boolean
  }

  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    addresses?: boolean | User$addressesArgs<ExtArgs>
    orders?: boolean | User$ordersArgs<ExtArgs>
    CartProducts?: boolean | User$CartProductsArgs<ExtArgs>
    favoriteItems?: boolean | User$favoriteItemsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      addresses: Prisma.$AddressPayload<ExtArgs>[]
      orders: Prisma.$OrderPayload<ExtArgs>[]
      CartProducts: Prisma.$CartProductPayload<ExtArgs>[]
      favoriteItems: Prisma.$FavoritePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      email: string
      password: string
      firstName: string | null
      lastName: string | null
      profilePic: string | null
      notification: boolean
      createdAt: Date
      updatedAt: Date
      isAdmin: boolean
    }, ExtArgs["result"]["user"]>
    composites: {}
  }


  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends UserFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one User that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends UserFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends UserFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
    **/
    create<T extends UserCreateArgs<ExtArgs>>(
      args: SelectSubset<T, UserCreateArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Users.
     *     @param {UserCreateManyArgs} args - Arguments to create many Users.
     *     @example
     *     // Create many Users
     *     const user = await prisma.user.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends UserCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
    **/
    delete<T extends UserDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, UserDeleteArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends UserUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, UserUpdateArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends UserDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends UserUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
    **/
    upsert<T extends UserUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, UserUpsertArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    addresses<T extends User$addressesArgs<ExtArgs> = {}>(args?: Subset<T, User$addressesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, 'findMany'> | Null>;

    orders<T extends User$ordersArgs<ExtArgs> = {}>(args?: Subset<T, User$ordersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, 'findMany'> | Null>;

    CartProducts<T extends User$CartProductsArgs<ExtArgs> = {}>(args?: Subset<T, User$CartProductsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CartProductPayload<ExtArgs>, T, 'findMany'> | Null>;

    favoriteItems<T extends User$favoriteItemsArgs<ExtArgs> = {}>(args?: Subset<T, User$favoriteItemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FavoritePayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the User model
   */ 
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'Int'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly firstName: FieldRef<"User", 'String'>
    readonly lastName: FieldRef<"User", 'String'>
    readonly profilePic: FieldRef<"User", 'String'>
    readonly notification: FieldRef<"User", 'Boolean'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
    readonly isAdmin: FieldRef<"User", 'Boolean'>
  }
    

  // Custom InputTypes

  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }


  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }


  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }


  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }


  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }


  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }


  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }


  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
  }


  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }


  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }


  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
  }


  /**
   * User.addresses
   */
  export type User$addressesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AddressInclude<ExtArgs> | null
    where?: AddressWhereInput
    orderBy?: AddressOrderByWithRelationInput | AddressOrderByWithRelationInput[]
    cursor?: AddressWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AddressScalarFieldEnum | AddressScalarFieldEnum[]
  }


  /**
   * User.orders
   */
  export type User$ordersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OrderInclude<ExtArgs> | null
    where?: OrderWhereInput
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    cursor?: OrderWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[]
  }


  /**
   * User.CartProducts
   */
  export type User$CartProductsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CartProduct
     */
    select?: CartProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CartProductInclude<ExtArgs> | null
    where?: CartProductWhereInput
    orderBy?: CartProductOrderByWithRelationInput | CartProductOrderByWithRelationInput[]
    cursor?: CartProductWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CartProductScalarFieldEnum | CartProductScalarFieldEnum[]
  }


  /**
   * User.favoriteItems
   */
  export type User$favoriteItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Favorite
     */
    select?: FavoriteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FavoriteInclude<ExtArgs> | null
    where?: FavoriteWhereInput
    orderBy?: FavoriteOrderByWithRelationInput | FavoriteOrderByWithRelationInput[]
    cursor?: FavoriteWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FavoriteScalarFieldEnum | FavoriteScalarFieldEnum[]
  }


  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
  }



  /**
   * Model Address
   */

  export type AggregateAddress = {
    _count: AddressCountAggregateOutputType | null
    _avg: AddressAvgAggregateOutputType | null
    _sum: AddressSumAggregateOutputType | null
    _min: AddressMinAggregateOutputType | null
    _max: AddressMaxAggregateOutputType | null
  }

  export type AddressAvgAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type AddressSumAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type AddressMinAggregateOutputType = {
    id: number | null
    street: string | null
    city: string | null
    state: string | null
    zipCode: string | null
    userId: number | null
  }

  export type AddressMaxAggregateOutputType = {
    id: number | null
    street: string | null
    city: string | null
    state: string | null
    zipCode: string | null
    userId: number | null
  }

  export type AddressCountAggregateOutputType = {
    id: number
    street: number
    city: number
    state: number
    zipCode: number
    userId: number
    _all: number
  }


  export type AddressAvgAggregateInputType = {
    id?: true
    userId?: true
  }

  export type AddressSumAggregateInputType = {
    id?: true
    userId?: true
  }

  export type AddressMinAggregateInputType = {
    id?: true
    street?: true
    city?: true
    state?: true
    zipCode?: true
    userId?: true
  }

  export type AddressMaxAggregateInputType = {
    id?: true
    street?: true
    city?: true
    state?: true
    zipCode?: true
    userId?: true
  }

  export type AddressCountAggregateInputType = {
    id?: true
    street?: true
    city?: true
    state?: true
    zipCode?: true
    userId?: true
    _all?: true
  }

  export type AddressAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Address to aggregate.
     */
    where?: AddressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Addresses to fetch.
     */
    orderBy?: AddressOrderByWithRelationInput | AddressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AddressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Addresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Addresses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Addresses
    **/
    _count?: true | AddressCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AddressAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AddressSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AddressMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AddressMaxAggregateInputType
  }

  export type GetAddressAggregateType<T extends AddressAggregateArgs> = {
        [P in keyof T & keyof AggregateAddress]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAddress[P]>
      : GetScalarType<T[P], AggregateAddress[P]>
  }




  export type AddressGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AddressWhereInput
    orderBy?: AddressOrderByWithAggregationInput | AddressOrderByWithAggregationInput[]
    by: AddressScalarFieldEnum[] | AddressScalarFieldEnum
    having?: AddressScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AddressCountAggregateInputType | true
    _avg?: AddressAvgAggregateInputType
    _sum?: AddressSumAggregateInputType
    _min?: AddressMinAggregateInputType
    _max?: AddressMaxAggregateInputType
  }

  export type AddressGroupByOutputType = {
    id: number
    street: string
    city: string
    state: string
    zipCode: string
    userId: number
    _count: AddressCountAggregateOutputType | null
    _avg: AddressAvgAggregateOutputType | null
    _sum: AddressSumAggregateOutputType | null
    _min: AddressMinAggregateOutputType | null
    _max: AddressMaxAggregateOutputType | null
  }

  type GetAddressGroupByPayload<T extends AddressGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AddressGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AddressGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AddressGroupByOutputType[P]>
            : GetScalarType<T[P], AddressGroupByOutputType[P]>
        }
      >
    >


  export type AddressSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    street?: boolean
    city?: boolean
    state?: boolean
    zipCode?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["address"]>

  export type AddressSelectScalar = {
    id?: boolean
    street?: boolean
    city?: boolean
    state?: boolean
    zipCode?: boolean
    userId?: boolean
  }

  export type AddressInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }


  export type $AddressPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Address"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      street: string
      city: string
      state: string
      zipCode: string
      userId: number
    }, ExtArgs["result"]["address"]>
    composites: {}
  }


  type AddressGetPayload<S extends boolean | null | undefined | AddressDefaultArgs> = $Result.GetResult<Prisma.$AddressPayload, S>

  type AddressCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<AddressFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: AddressCountAggregateInputType | true
    }

  export interface AddressDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Address'], meta: { name: 'Address' } }
    /**
     * Find zero or one Address that matches the filter.
     * @param {AddressFindUniqueArgs} args - Arguments to find a Address
     * @example
     * // Get one Address
     * const address = await prisma.address.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends AddressFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, AddressFindUniqueArgs<ExtArgs>>
    ): Prisma__AddressClient<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Address that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {AddressFindUniqueOrThrowArgs} args - Arguments to find a Address
     * @example
     * // Get one Address
     * const address = await prisma.address.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends AddressFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, AddressFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__AddressClient<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Address that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddressFindFirstArgs} args - Arguments to find a Address
     * @example
     * // Get one Address
     * const address = await prisma.address.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends AddressFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, AddressFindFirstArgs<ExtArgs>>
    ): Prisma__AddressClient<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Address that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddressFindFirstOrThrowArgs} args - Arguments to find a Address
     * @example
     * // Get one Address
     * const address = await prisma.address.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends AddressFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, AddressFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__AddressClient<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Addresses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddressFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Addresses
     * const addresses = await prisma.address.findMany()
     * 
     * // Get first 10 Addresses
     * const addresses = await prisma.address.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const addressWithIdOnly = await prisma.address.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends AddressFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, AddressFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Address.
     * @param {AddressCreateArgs} args - Arguments to create a Address.
     * @example
     * // Create one Address
     * const Address = await prisma.address.create({
     *   data: {
     *     // ... data to create a Address
     *   }
     * })
     * 
    **/
    create<T extends AddressCreateArgs<ExtArgs>>(
      args: SelectSubset<T, AddressCreateArgs<ExtArgs>>
    ): Prisma__AddressClient<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Addresses.
     *     @param {AddressCreateManyArgs} args - Arguments to create many Addresses.
     *     @example
     *     // Create many Addresses
     *     const address = await prisma.address.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends AddressCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, AddressCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Address.
     * @param {AddressDeleteArgs} args - Arguments to delete one Address.
     * @example
     * // Delete one Address
     * const Address = await prisma.address.delete({
     *   where: {
     *     // ... filter to delete one Address
     *   }
     * })
     * 
    **/
    delete<T extends AddressDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, AddressDeleteArgs<ExtArgs>>
    ): Prisma__AddressClient<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Address.
     * @param {AddressUpdateArgs} args - Arguments to update one Address.
     * @example
     * // Update one Address
     * const address = await prisma.address.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends AddressUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, AddressUpdateArgs<ExtArgs>>
    ): Prisma__AddressClient<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Addresses.
     * @param {AddressDeleteManyArgs} args - Arguments to filter Addresses to delete.
     * @example
     * // Delete a few Addresses
     * const { count } = await prisma.address.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends AddressDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, AddressDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Addresses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddressUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Addresses
     * const address = await prisma.address.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends AddressUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, AddressUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Address.
     * @param {AddressUpsertArgs} args - Arguments to update or create a Address.
     * @example
     * // Update or create a Address
     * const address = await prisma.address.upsert({
     *   create: {
     *     // ... data to create a Address
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Address we want to update
     *   }
     * })
    **/
    upsert<T extends AddressUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, AddressUpsertArgs<ExtArgs>>
    ): Prisma__AddressClient<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Addresses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddressCountArgs} args - Arguments to filter Addresses to count.
     * @example
     * // Count the number of Addresses
     * const count = await prisma.address.count({
     *   where: {
     *     // ... the filter for the Addresses we want to count
     *   }
     * })
    **/
    count<T extends AddressCountArgs>(
      args?: Subset<T, AddressCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AddressCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Address.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddressAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AddressAggregateArgs>(args: Subset<T, AddressAggregateArgs>): Prisma.PrismaPromise<GetAddressAggregateType<T>>

    /**
     * Group by Address.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddressGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AddressGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AddressGroupByArgs['orderBy'] }
        : { orderBy?: AddressGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AddressGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAddressGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Address model
   */
  readonly fields: AddressFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Address.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AddressClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Address model
   */ 
  interface AddressFieldRefs {
    readonly id: FieldRef<"Address", 'Int'>
    readonly street: FieldRef<"Address", 'String'>
    readonly city: FieldRef<"Address", 'String'>
    readonly state: FieldRef<"Address", 'String'>
    readonly zipCode: FieldRef<"Address", 'String'>
    readonly userId: FieldRef<"Address", 'Int'>
  }
    

  // Custom InputTypes

  /**
   * Address findUnique
   */
  export type AddressFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AddressInclude<ExtArgs> | null
    /**
     * Filter, which Address to fetch.
     */
    where: AddressWhereUniqueInput
  }


  /**
   * Address findUniqueOrThrow
   */
  export type AddressFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AddressInclude<ExtArgs> | null
    /**
     * Filter, which Address to fetch.
     */
    where: AddressWhereUniqueInput
  }


  /**
   * Address findFirst
   */
  export type AddressFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AddressInclude<ExtArgs> | null
    /**
     * Filter, which Address to fetch.
     */
    where?: AddressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Addresses to fetch.
     */
    orderBy?: AddressOrderByWithRelationInput | AddressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Addresses.
     */
    cursor?: AddressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Addresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Addresses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Addresses.
     */
    distinct?: AddressScalarFieldEnum | AddressScalarFieldEnum[]
  }


  /**
   * Address findFirstOrThrow
   */
  export type AddressFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AddressInclude<ExtArgs> | null
    /**
     * Filter, which Address to fetch.
     */
    where?: AddressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Addresses to fetch.
     */
    orderBy?: AddressOrderByWithRelationInput | AddressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Addresses.
     */
    cursor?: AddressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Addresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Addresses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Addresses.
     */
    distinct?: AddressScalarFieldEnum | AddressScalarFieldEnum[]
  }


  /**
   * Address findMany
   */
  export type AddressFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AddressInclude<ExtArgs> | null
    /**
     * Filter, which Addresses to fetch.
     */
    where?: AddressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Addresses to fetch.
     */
    orderBy?: AddressOrderByWithRelationInput | AddressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Addresses.
     */
    cursor?: AddressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Addresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Addresses.
     */
    skip?: number
    distinct?: AddressScalarFieldEnum | AddressScalarFieldEnum[]
  }


  /**
   * Address create
   */
  export type AddressCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AddressInclude<ExtArgs> | null
    /**
     * The data needed to create a Address.
     */
    data: XOR<AddressCreateInput, AddressUncheckedCreateInput>
  }


  /**
   * Address createMany
   */
  export type AddressCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Addresses.
     */
    data: AddressCreateManyInput | AddressCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Address update
   */
  export type AddressUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AddressInclude<ExtArgs> | null
    /**
     * The data needed to update a Address.
     */
    data: XOR<AddressUpdateInput, AddressUncheckedUpdateInput>
    /**
     * Choose, which Address to update.
     */
    where: AddressWhereUniqueInput
  }


  /**
   * Address updateMany
   */
  export type AddressUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Addresses.
     */
    data: XOR<AddressUpdateManyMutationInput, AddressUncheckedUpdateManyInput>
    /**
     * Filter which Addresses to update
     */
    where?: AddressWhereInput
  }


  /**
   * Address upsert
   */
  export type AddressUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AddressInclude<ExtArgs> | null
    /**
     * The filter to search for the Address to update in case it exists.
     */
    where: AddressWhereUniqueInput
    /**
     * In case the Address found by the `where` argument doesn't exist, create a new Address with this data.
     */
    create: XOR<AddressCreateInput, AddressUncheckedCreateInput>
    /**
     * In case the Address was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AddressUpdateInput, AddressUncheckedUpdateInput>
  }


  /**
   * Address delete
   */
  export type AddressDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AddressInclude<ExtArgs> | null
    /**
     * Filter which Address to delete.
     */
    where: AddressWhereUniqueInput
  }


  /**
   * Address deleteMany
   */
  export type AddressDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Addresses to delete
     */
    where?: AddressWhereInput
  }


  /**
   * Address without action
   */
  export type AddressDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AddressInclude<ExtArgs> | null
  }



  /**
   * Model Product
   */

  export type AggregateProduct = {
    _count: ProductCountAggregateOutputType | null
    _avg: ProductAvgAggregateOutputType | null
    _sum: ProductSumAggregateOutputType | null
    _min: ProductMinAggregateOutputType | null
    _max: ProductMaxAggregateOutputType | null
  }

  export type ProductAvgAggregateOutputType = {
    id: number | null
    price: number | null
  }

  export type ProductSumAggregateOutputType = {
    id: number | null
    price: number | null
  }

  export type ProductMinAggregateOutputType = {
    id: number | null
    title: string | null
    gender: string | null
    description: string | null
    category: string | null
    price: number | null
    color: string | null
  }

  export type ProductMaxAggregateOutputType = {
    id: number | null
    title: string | null
    gender: string | null
    description: string | null
    category: string | null
    price: number | null
    color: string | null
  }

  export type ProductCountAggregateOutputType = {
    id: number
    title: number
    gender: number
    description: number
    category: number
    price: number
    size: number
    color: number
    ratings: number
    img: number
    _all: number
  }


  export type ProductAvgAggregateInputType = {
    id?: true
    price?: true
  }

  export type ProductSumAggregateInputType = {
    id?: true
    price?: true
  }

  export type ProductMinAggregateInputType = {
    id?: true
    title?: true
    gender?: true
    description?: true
    category?: true
    price?: true
    color?: true
  }

  export type ProductMaxAggregateInputType = {
    id?: true
    title?: true
    gender?: true
    description?: true
    category?: true
    price?: true
    color?: true
  }

  export type ProductCountAggregateInputType = {
    id?: true
    title?: true
    gender?: true
    description?: true
    category?: true
    price?: true
    size?: true
    color?: true
    ratings?: true
    img?: true
    _all?: true
  }

  export type ProductAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Product to aggregate.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Products
    **/
    _count?: true | ProductCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProductAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProductSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProductMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProductMaxAggregateInputType
  }

  export type GetProductAggregateType<T extends ProductAggregateArgs> = {
        [P in keyof T & keyof AggregateProduct]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProduct[P]>
      : GetScalarType<T[P], AggregateProduct[P]>
  }




  export type ProductGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductWhereInput
    orderBy?: ProductOrderByWithAggregationInput | ProductOrderByWithAggregationInput[]
    by: ProductScalarFieldEnum[] | ProductScalarFieldEnum
    having?: ProductScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProductCountAggregateInputType | true
    _avg?: ProductAvgAggregateInputType
    _sum?: ProductSumAggregateInputType
    _min?: ProductMinAggregateInputType
    _max?: ProductMaxAggregateInputType
  }

  export type ProductGroupByOutputType = {
    id: number
    title: string
    gender: string
    description: string
    category: string
    price: number
    size: string[]
    color: string
    ratings: JsonValue
    img: string[]
    _count: ProductCountAggregateOutputType | null
    _avg: ProductAvgAggregateOutputType | null
    _sum: ProductSumAggregateOutputType | null
    _min: ProductMinAggregateOutputType | null
    _max: ProductMaxAggregateOutputType | null
  }

  type GetProductGroupByPayload<T extends ProductGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProductGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProductGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProductGroupByOutputType[P]>
            : GetScalarType<T[P], ProductGroupByOutputType[P]>
        }
      >
    >


  export type ProductSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    gender?: boolean
    description?: boolean
    category?: boolean
    price?: boolean
    size?: boolean
    color?: boolean
    ratings?: boolean
    img?: boolean
  }, ExtArgs["result"]["product"]>

  export type ProductSelectScalar = {
    id?: boolean
    title?: boolean
    gender?: boolean
    description?: boolean
    category?: boolean
    price?: boolean
    size?: boolean
    color?: boolean
    ratings?: boolean
    img?: boolean
  }


  export type $ProductPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Product"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      title: string
      gender: string
      description: string
      category: string
      price: number
      size: string[]
      color: string
      ratings: Prisma.JsonValue
      img: string[]
    }, ExtArgs["result"]["product"]>
    composites: {}
  }


  type ProductGetPayload<S extends boolean | null | undefined | ProductDefaultArgs> = $Result.GetResult<Prisma.$ProductPayload, S>

  type ProductCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ProductFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: ProductCountAggregateInputType | true
    }

  export interface ProductDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Product'], meta: { name: 'Product' } }
    /**
     * Find zero or one Product that matches the filter.
     * @param {ProductFindUniqueArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ProductFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, ProductFindUniqueArgs<ExtArgs>>
    ): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Product that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {ProductFindUniqueOrThrowArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends ProductFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ProductFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Product that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductFindFirstArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ProductFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, ProductFindFirstArgs<ExtArgs>>
    ): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Product that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductFindFirstOrThrowArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends ProductFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ProductFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Products that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Products
     * const products = await prisma.product.findMany()
     * 
     * // Get first 10 Products
     * const products = await prisma.product.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const productWithIdOnly = await prisma.product.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends ProductFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ProductFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Product.
     * @param {ProductCreateArgs} args - Arguments to create a Product.
     * @example
     * // Create one Product
     * const Product = await prisma.product.create({
     *   data: {
     *     // ... data to create a Product
     *   }
     * })
     * 
    **/
    create<T extends ProductCreateArgs<ExtArgs>>(
      args: SelectSubset<T, ProductCreateArgs<ExtArgs>>
    ): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Products.
     *     @param {ProductCreateManyArgs} args - Arguments to create many Products.
     *     @example
     *     // Create many Products
     *     const product = await prisma.product.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends ProductCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ProductCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Product.
     * @param {ProductDeleteArgs} args - Arguments to delete one Product.
     * @example
     * // Delete one Product
     * const Product = await prisma.product.delete({
     *   where: {
     *     // ... filter to delete one Product
     *   }
     * })
     * 
    **/
    delete<T extends ProductDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, ProductDeleteArgs<ExtArgs>>
    ): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Product.
     * @param {ProductUpdateArgs} args - Arguments to update one Product.
     * @example
     * // Update one Product
     * const product = await prisma.product.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ProductUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, ProductUpdateArgs<ExtArgs>>
    ): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Products.
     * @param {ProductDeleteManyArgs} args - Arguments to filter Products to delete.
     * @example
     * // Delete a few Products
     * const { count } = await prisma.product.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ProductDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ProductDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Products
     * const product = await prisma.product.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ProductUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, ProductUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Product.
     * @param {ProductUpsertArgs} args - Arguments to update or create a Product.
     * @example
     * // Update or create a Product
     * const product = await prisma.product.upsert({
     *   create: {
     *     // ... data to create a Product
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Product we want to update
     *   }
     * })
    **/
    upsert<T extends ProductUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, ProductUpsertArgs<ExtArgs>>
    ): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductCountArgs} args - Arguments to filter Products to count.
     * @example
     * // Count the number of Products
     * const count = await prisma.product.count({
     *   where: {
     *     // ... the filter for the Products we want to count
     *   }
     * })
    **/
    count<T extends ProductCountArgs>(
      args?: Subset<T, ProductCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProductCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Product.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProductAggregateArgs>(args: Subset<T, ProductAggregateArgs>): Prisma.PrismaPromise<GetProductAggregateType<T>>

    /**
     * Group by Product.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ProductGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProductGroupByArgs['orderBy'] }
        : { orderBy?: ProductGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ProductGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProductGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Product model
   */
  readonly fields: ProductFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Product.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProductClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';


    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Product model
   */ 
  interface ProductFieldRefs {
    readonly id: FieldRef<"Product", 'Int'>
    readonly title: FieldRef<"Product", 'String'>
    readonly gender: FieldRef<"Product", 'String'>
    readonly description: FieldRef<"Product", 'String'>
    readonly category: FieldRef<"Product", 'String'>
    readonly price: FieldRef<"Product", 'Int'>
    readonly size: FieldRef<"Product", 'String[]'>
    readonly color: FieldRef<"Product", 'String'>
    readonly ratings: FieldRef<"Product", 'Json'>
    readonly img: FieldRef<"Product", 'String[]'>
  }
    

  // Custom InputTypes

  /**
   * Product findUnique
   */
  export type ProductFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where: ProductWhereUniqueInput
  }


  /**
   * Product findUniqueOrThrow
   */
  export type ProductFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where: ProductWhereUniqueInput
  }


  /**
   * Product findFirst
   */
  export type ProductFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Products.
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Products.
     */
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }


  /**
   * Product findFirstOrThrow
   */
  export type ProductFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Products.
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Products.
     */
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }


  /**
   * Product findMany
   */
  export type ProductFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Filter, which Products to fetch.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Products.
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }


  /**
   * Product create
   */
  export type ProductCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * The data needed to create a Product.
     */
    data: XOR<ProductCreateInput, ProductUncheckedCreateInput>
  }


  /**
   * Product createMany
   */
  export type ProductCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Products.
     */
    data: ProductCreateManyInput | ProductCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Product update
   */
  export type ProductUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * The data needed to update a Product.
     */
    data: XOR<ProductUpdateInput, ProductUncheckedUpdateInput>
    /**
     * Choose, which Product to update.
     */
    where: ProductWhereUniqueInput
  }


  /**
   * Product updateMany
   */
  export type ProductUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Products.
     */
    data: XOR<ProductUpdateManyMutationInput, ProductUncheckedUpdateManyInput>
    /**
     * Filter which Products to update
     */
    where?: ProductWhereInput
  }


  /**
   * Product upsert
   */
  export type ProductUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * The filter to search for the Product to update in case it exists.
     */
    where: ProductWhereUniqueInput
    /**
     * In case the Product found by the `where` argument doesn't exist, create a new Product with this data.
     */
    create: XOR<ProductCreateInput, ProductUncheckedCreateInput>
    /**
     * In case the Product was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProductUpdateInput, ProductUncheckedUpdateInput>
  }


  /**
   * Product delete
   */
  export type ProductDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Filter which Product to delete.
     */
    where: ProductWhereUniqueInput
  }


  /**
   * Product deleteMany
   */
  export type ProductDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Products to delete
     */
    where?: ProductWhereInput
  }


  /**
   * Product without action
   */
  export type ProductDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
  }



  /**
   * Model CartProduct
   */

  export type AggregateCartProduct = {
    _count: CartProductCountAggregateOutputType | null
    _avg: CartProductAvgAggregateOutputType | null
    _sum: CartProductSumAggregateOutputType | null
    _min: CartProductMinAggregateOutputType | null
    _max: CartProductMaxAggregateOutputType | null
  }

  export type CartProductAvgAggregateOutputType = {
    cartProductId: number | null
    id: number | null
    price: number | null
    quantity: number | null
    userId: number | null
  }

  export type CartProductSumAggregateOutputType = {
    cartProductId: number | null
    id: number | null
    price: number | null
    quantity: number | null
    userId: number | null
  }

  export type CartProductMinAggregateOutputType = {
    cartProductId: number | null
    id: number | null
    title: string | null
    gender: string | null
    description: string | null
    category: string | null
    price: number | null
    size: string | null
    color: string | null
    quantity: number | null
    userId: number | null
  }

  export type CartProductMaxAggregateOutputType = {
    cartProductId: number | null
    id: number | null
    title: string | null
    gender: string | null
    description: string | null
    category: string | null
    price: number | null
    size: string | null
    color: string | null
    quantity: number | null
    userId: number | null
  }

  export type CartProductCountAggregateOutputType = {
    cartProductId: number
    id: number
    title: number
    gender: number
    description: number
    category: number
    price: number
    size: number
    color: number
    ratings: number
    img: number
    quantity: number
    userId: number
    _all: number
  }


  export type CartProductAvgAggregateInputType = {
    cartProductId?: true
    id?: true
    price?: true
    quantity?: true
    userId?: true
  }

  export type CartProductSumAggregateInputType = {
    cartProductId?: true
    id?: true
    price?: true
    quantity?: true
    userId?: true
  }

  export type CartProductMinAggregateInputType = {
    cartProductId?: true
    id?: true
    title?: true
    gender?: true
    description?: true
    category?: true
    price?: true
    size?: true
    color?: true
    quantity?: true
    userId?: true
  }

  export type CartProductMaxAggregateInputType = {
    cartProductId?: true
    id?: true
    title?: true
    gender?: true
    description?: true
    category?: true
    price?: true
    size?: true
    color?: true
    quantity?: true
    userId?: true
  }

  export type CartProductCountAggregateInputType = {
    cartProductId?: true
    id?: true
    title?: true
    gender?: true
    description?: true
    category?: true
    price?: true
    size?: true
    color?: true
    ratings?: true
    img?: true
    quantity?: true
    userId?: true
    _all?: true
  }

  export type CartProductAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CartProduct to aggregate.
     */
    where?: CartProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CartProducts to fetch.
     */
    orderBy?: CartProductOrderByWithRelationInput | CartProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CartProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CartProducts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CartProducts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CartProducts
    **/
    _count?: true | CartProductCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CartProductAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CartProductSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CartProductMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CartProductMaxAggregateInputType
  }

  export type GetCartProductAggregateType<T extends CartProductAggregateArgs> = {
        [P in keyof T & keyof AggregateCartProduct]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCartProduct[P]>
      : GetScalarType<T[P], AggregateCartProduct[P]>
  }




  export type CartProductGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CartProductWhereInput
    orderBy?: CartProductOrderByWithAggregationInput | CartProductOrderByWithAggregationInput[]
    by: CartProductScalarFieldEnum[] | CartProductScalarFieldEnum
    having?: CartProductScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CartProductCountAggregateInputType | true
    _avg?: CartProductAvgAggregateInputType
    _sum?: CartProductSumAggregateInputType
    _min?: CartProductMinAggregateInputType
    _max?: CartProductMaxAggregateInputType
  }

  export type CartProductGroupByOutputType = {
    cartProductId: number
    id: number
    title: string
    gender: string
    description: string
    category: string
    price: number
    size: string
    color: string
    ratings: JsonValue
    img: string[]
    quantity: number
    userId: number
    _count: CartProductCountAggregateOutputType | null
    _avg: CartProductAvgAggregateOutputType | null
    _sum: CartProductSumAggregateOutputType | null
    _min: CartProductMinAggregateOutputType | null
    _max: CartProductMaxAggregateOutputType | null
  }

  type GetCartProductGroupByPayload<T extends CartProductGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CartProductGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CartProductGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CartProductGroupByOutputType[P]>
            : GetScalarType<T[P], CartProductGroupByOutputType[P]>
        }
      >
    >


  export type CartProductSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    cartProductId?: boolean
    id?: boolean
    title?: boolean
    gender?: boolean
    description?: boolean
    category?: boolean
    price?: boolean
    size?: boolean
    color?: boolean
    ratings?: boolean
    img?: boolean
    quantity?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cartProduct"]>

  export type CartProductSelectScalar = {
    cartProductId?: boolean
    id?: boolean
    title?: boolean
    gender?: boolean
    description?: boolean
    category?: boolean
    price?: boolean
    size?: boolean
    color?: boolean
    ratings?: boolean
    img?: boolean
    quantity?: boolean
    userId?: boolean
  }

  export type CartProductInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }


  export type $CartProductPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CartProduct"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      cartProductId: number
      id: number
      title: string
      gender: string
      description: string
      category: string
      price: number
      size: string
      color: string
      ratings: Prisma.JsonValue
      img: string[]
      quantity: number
      userId: number
    }, ExtArgs["result"]["cartProduct"]>
    composites: {}
  }


  type CartProductGetPayload<S extends boolean | null | undefined | CartProductDefaultArgs> = $Result.GetResult<Prisma.$CartProductPayload, S>

  type CartProductCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<CartProductFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: CartProductCountAggregateInputType | true
    }

  export interface CartProductDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CartProduct'], meta: { name: 'CartProduct' } }
    /**
     * Find zero or one CartProduct that matches the filter.
     * @param {CartProductFindUniqueArgs} args - Arguments to find a CartProduct
     * @example
     * // Get one CartProduct
     * const cartProduct = await prisma.cartProduct.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends CartProductFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, CartProductFindUniqueArgs<ExtArgs>>
    ): Prisma__CartProductClient<$Result.GetResult<Prisma.$CartProductPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one CartProduct that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {CartProductFindUniqueOrThrowArgs} args - Arguments to find a CartProduct
     * @example
     * // Get one CartProduct
     * const cartProduct = await prisma.cartProduct.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends CartProductFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, CartProductFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__CartProductClient<$Result.GetResult<Prisma.$CartProductPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first CartProduct that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CartProductFindFirstArgs} args - Arguments to find a CartProduct
     * @example
     * // Get one CartProduct
     * const cartProduct = await prisma.cartProduct.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends CartProductFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, CartProductFindFirstArgs<ExtArgs>>
    ): Prisma__CartProductClient<$Result.GetResult<Prisma.$CartProductPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first CartProduct that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CartProductFindFirstOrThrowArgs} args - Arguments to find a CartProduct
     * @example
     * // Get one CartProduct
     * const cartProduct = await prisma.cartProduct.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends CartProductFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, CartProductFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__CartProductClient<$Result.GetResult<Prisma.$CartProductPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more CartProducts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CartProductFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CartProducts
     * const cartProducts = await prisma.cartProduct.findMany()
     * 
     * // Get first 10 CartProducts
     * const cartProducts = await prisma.cartProduct.findMany({ take: 10 })
     * 
     * // Only select the `cartProductId`
     * const cartProductWithCartProductIdOnly = await prisma.cartProduct.findMany({ select: { cartProductId: true } })
     * 
    **/
    findMany<T extends CartProductFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, CartProductFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CartProductPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a CartProduct.
     * @param {CartProductCreateArgs} args - Arguments to create a CartProduct.
     * @example
     * // Create one CartProduct
     * const CartProduct = await prisma.cartProduct.create({
     *   data: {
     *     // ... data to create a CartProduct
     *   }
     * })
     * 
    **/
    create<T extends CartProductCreateArgs<ExtArgs>>(
      args: SelectSubset<T, CartProductCreateArgs<ExtArgs>>
    ): Prisma__CartProductClient<$Result.GetResult<Prisma.$CartProductPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many CartProducts.
     *     @param {CartProductCreateManyArgs} args - Arguments to create many CartProducts.
     *     @example
     *     // Create many CartProducts
     *     const cartProduct = await prisma.cartProduct.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends CartProductCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, CartProductCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a CartProduct.
     * @param {CartProductDeleteArgs} args - Arguments to delete one CartProduct.
     * @example
     * // Delete one CartProduct
     * const CartProduct = await prisma.cartProduct.delete({
     *   where: {
     *     // ... filter to delete one CartProduct
     *   }
     * })
     * 
    **/
    delete<T extends CartProductDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, CartProductDeleteArgs<ExtArgs>>
    ): Prisma__CartProductClient<$Result.GetResult<Prisma.$CartProductPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one CartProduct.
     * @param {CartProductUpdateArgs} args - Arguments to update one CartProduct.
     * @example
     * // Update one CartProduct
     * const cartProduct = await prisma.cartProduct.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends CartProductUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, CartProductUpdateArgs<ExtArgs>>
    ): Prisma__CartProductClient<$Result.GetResult<Prisma.$CartProductPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more CartProducts.
     * @param {CartProductDeleteManyArgs} args - Arguments to filter CartProducts to delete.
     * @example
     * // Delete a few CartProducts
     * const { count } = await prisma.cartProduct.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends CartProductDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, CartProductDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CartProducts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CartProductUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CartProducts
     * const cartProduct = await prisma.cartProduct.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends CartProductUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, CartProductUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one CartProduct.
     * @param {CartProductUpsertArgs} args - Arguments to update or create a CartProduct.
     * @example
     * // Update or create a CartProduct
     * const cartProduct = await prisma.cartProduct.upsert({
     *   create: {
     *     // ... data to create a CartProduct
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CartProduct we want to update
     *   }
     * })
    **/
    upsert<T extends CartProductUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, CartProductUpsertArgs<ExtArgs>>
    ): Prisma__CartProductClient<$Result.GetResult<Prisma.$CartProductPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of CartProducts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CartProductCountArgs} args - Arguments to filter CartProducts to count.
     * @example
     * // Count the number of CartProducts
     * const count = await prisma.cartProduct.count({
     *   where: {
     *     // ... the filter for the CartProducts we want to count
     *   }
     * })
    **/
    count<T extends CartProductCountArgs>(
      args?: Subset<T, CartProductCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CartProductCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CartProduct.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CartProductAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CartProductAggregateArgs>(args: Subset<T, CartProductAggregateArgs>): Prisma.PrismaPromise<GetCartProductAggregateType<T>>

    /**
     * Group by CartProduct.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CartProductGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CartProductGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CartProductGroupByArgs['orderBy'] }
        : { orderBy?: CartProductGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CartProductGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCartProductGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CartProduct model
   */
  readonly fields: CartProductFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CartProduct.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CartProductClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the CartProduct model
   */ 
  interface CartProductFieldRefs {
    readonly cartProductId: FieldRef<"CartProduct", 'Int'>
    readonly id: FieldRef<"CartProduct", 'Int'>
    readonly title: FieldRef<"CartProduct", 'String'>
    readonly gender: FieldRef<"CartProduct", 'String'>
    readonly description: FieldRef<"CartProduct", 'String'>
    readonly category: FieldRef<"CartProduct", 'String'>
    readonly price: FieldRef<"CartProduct", 'Float'>
    readonly size: FieldRef<"CartProduct", 'String'>
    readonly color: FieldRef<"CartProduct", 'String'>
    readonly ratings: FieldRef<"CartProduct", 'Json'>
    readonly img: FieldRef<"CartProduct", 'String[]'>
    readonly quantity: FieldRef<"CartProduct", 'Int'>
    readonly userId: FieldRef<"CartProduct", 'Int'>
  }
    

  // Custom InputTypes

  /**
   * CartProduct findUnique
   */
  export type CartProductFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CartProduct
     */
    select?: CartProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CartProductInclude<ExtArgs> | null
    /**
     * Filter, which CartProduct to fetch.
     */
    where: CartProductWhereUniqueInput
  }


  /**
   * CartProduct findUniqueOrThrow
   */
  export type CartProductFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CartProduct
     */
    select?: CartProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CartProductInclude<ExtArgs> | null
    /**
     * Filter, which CartProduct to fetch.
     */
    where: CartProductWhereUniqueInput
  }


  /**
   * CartProduct findFirst
   */
  export type CartProductFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CartProduct
     */
    select?: CartProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CartProductInclude<ExtArgs> | null
    /**
     * Filter, which CartProduct to fetch.
     */
    where?: CartProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CartProducts to fetch.
     */
    orderBy?: CartProductOrderByWithRelationInput | CartProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CartProducts.
     */
    cursor?: CartProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CartProducts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CartProducts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CartProducts.
     */
    distinct?: CartProductScalarFieldEnum | CartProductScalarFieldEnum[]
  }


  /**
   * CartProduct findFirstOrThrow
   */
  export type CartProductFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CartProduct
     */
    select?: CartProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CartProductInclude<ExtArgs> | null
    /**
     * Filter, which CartProduct to fetch.
     */
    where?: CartProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CartProducts to fetch.
     */
    orderBy?: CartProductOrderByWithRelationInput | CartProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CartProducts.
     */
    cursor?: CartProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CartProducts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CartProducts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CartProducts.
     */
    distinct?: CartProductScalarFieldEnum | CartProductScalarFieldEnum[]
  }


  /**
   * CartProduct findMany
   */
  export type CartProductFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CartProduct
     */
    select?: CartProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CartProductInclude<ExtArgs> | null
    /**
     * Filter, which CartProducts to fetch.
     */
    where?: CartProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CartProducts to fetch.
     */
    orderBy?: CartProductOrderByWithRelationInput | CartProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CartProducts.
     */
    cursor?: CartProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CartProducts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CartProducts.
     */
    skip?: number
    distinct?: CartProductScalarFieldEnum | CartProductScalarFieldEnum[]
  }


  /**
   * CartProduct create
   */
  export type CartProductCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CartProduct
     */
    select?: CartProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CartProductInclude<ExtArgs> | null
    /**
     * The data needed to create a CartProduct.
     */
    data: XOR<CartProductCreateInput, CartProductUncheckedCreateInput>
  }


  /**
   * CartProduct createMany
   */
  export type CartProductCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CartProducts.
     */
    data: CartProductCreateManyInput | CartProductCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * CartProduct update
   */
  export type CartProductUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CartProduct
     */
    select?: CartProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CartProductInclude<ExtArgs> | null
    /**
     * The data needed to update a CartProduct.
     */
    data: XOR<CartProductUpdateInput, CartProductUncheckedUpdateInput>
    /**
     * Choose, which CartProduct to update.
     */
    where: CartProductWhereUniqueInput
  }


  /**
   * CartProduct updateMany
   */
  export type CartProductUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CartProducts.
     */
    data: XOR<CartProductUpdateManyMutationInput, CartProductUncheckedUpdateManyInput>
    /**
     * Filter which CartProducts to update
     */
    where?: CartProductWhereInput
  }


  /**
   * CartProduct upsert
   */
  export type CartProductUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CartProduct
     */
    select?: CartProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CartProductInclude<ExtArgs> | null
    /**
     * The filter to search for the CartProduct to update in case it exists.
     */
    where: CartProductWhereUniqueInput
    /**
     * In case the CartProduct found by the `where` argument doesn't exist, create a new CartProduct with this data.
     */
    create: XOR<CartProductCreateInput, CartProductUncheckedCreateInput>
    /**
     * In case the CartProduct was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CartProductUpdateInput, CartProductUncheckedUpdateInput>
  }


  /**
   * CartProduct delete
   */
  export type CartProductDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CartProduct
     */
    select?: CartProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CartProductInclude<ExtArgs> | null
    /**
     * Filter which CartProduct to delete.
     */
    where: CartProductWhereUniqueInput
  }


  /**
   * CartProduct deleteMany
   */
  export type CartProductDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CartProducts to delete
     */
    where?: CartProductWhereInput
  }


  /**
   * CartProduct without action
   */
  export type CartProductDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CartProduct
     */
    select?: CartProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CartProductInclude<ExtArgs> | null
  }



  /**
   * Model Favorite
   */

  export type AggregateFavorite = {
    _count: FavoriteCountAggregateOutputType | null
    _avg: FavoriteAvgAggregateOutputType | null
    _sum: FavoriteSumAggregateOutputType | null
    _min: FavoriteMinAggregateOutputType | null
    _max: FavoriteMaxAggregateOutputType | null
  }

  export type FavoriteAvgAggregateOutputType = {
    favoriteId: number | null
    id: number | null
    price: number | null
    userId: number | null
  }

  export type FavoriteSumAggregateOutputType = {
    favoriteId: number | null
    id: number | null
    price: number | null
    userId: number | null
  }

  export type FavoriteMinAggregateOutputType = {
    favoriteId: number | null
    id: number | null
    title: string | null
    gender: string | null
    description: string | null
    category: string | null
    price: number | null
    color: string | null
    userId: number | null
    createdAt: Date | null
  }

  export type FavoriteMaxAggregateOutputType = {
    favoriteId: number | null
    id: number | null
    title: string | null
    gender: string | null
    description: string | null
    category: string | null
    price: number | null
    color: string | null
    userId: number | null
    createdAt: Date | null
  }

  export type FavoriteCountAggregateOutputType = {
    favoriteId: number
    id: number
    title: number
    gender: number
    description: number
    category: number
    price: number
    size: number
    color: number
    ratings: number
    img: number
    userId: number
    createdAt: number
    _all: number
  }


  export type FavoriteAvgAggregateInputType = {
    favoriteId?: true
    id?: true
    price?: true
    userId?: true
  }

  export type FavoriteSumAggregateInputType = {
    favoriteId?: true
    id?: true
    price?: true
    userId?: true
  }

  export type FavoriteMinAggregateInputType = {
    favoriteId?: true
    id?: true
    title?: true
    gender?: true
    description?: true
    category?: true
    price?: true
    color?: true
    userId?: true
    createdAt?: true
  }

  export type FavoriteMaxAggregateInputType = {
    favoriteId?: true
    id?: true
    title?: true
    gender?: true
    description?: true
    category?: true
    price?: true
    color?: true
    userId?: true
    createdAt?: true
  }

  export type FavoriteCountAggregateInputType = {
    favoriteId?: true
    id?: true
    title?: true
    gender?: true
    description?: true
    category?: true
    price?: true
    size?: true
    color?: true
    ratings?: true
    img?: true
    userId?: true
    createdAt?: true
    _all?: true
  }

  export type FavoriteAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Favorite to aggregate.
     */
    where?: FavoriteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Favorites to fetch.
     */
    orderBy?: FavoriteOrderByWithRelationInput | FavoriteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FavoriteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Favorites from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Favorites.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Favorites
    **/
    _count?: true | FavoriteCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FavoriteAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FavoriteSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FavoriteMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FavoriteMaxAggregateInputType
  }

  export type GetFavoriteAggregateType<T extends FavoriteAggregateArgs> = {
        [P in keyof T & keyof AggregateFavorite]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFavorite[P]>
      : GetScalarType<T[P], AggregateFavorite[P]>
  }




  export type FavoriteGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FavoriteWhereInput
    orderBy?: FavoriteOrderByWithAggregationInput | FavoriteOrderByWithAggregationInput[]
    by: FavoriteScalarFieldEnum[] | FavoriteScalarFieldEnum
    having?: FavoriteScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FavoriteCountAggregateInputType | true
    _avg?: FavoriteAvgAggregateInputType
    _sum?: FavoriteSumAggregateInputType
    _min?: FavoriteMinAggregateInputType
    _max?: FavoriteMaxAggregateInputType
  }

  export type FavoriteGroupByOutputType = {
    favoriteId: number
    id: number
    title: string
    gender: string
    description: string
    category: string
    price: number
    size: string[]
    color: string
    ratings: JsonValue
    img: string[]
    userId: number
    createdAt: Date
    _count: FavoriteCountAggregateOutputType | null
    _avg: FavoriteAvgAggregateOutputType | null
    _sum: FavoriteSumAggregateOutputType | null
    _min: FavoriteMinAggregateOutputType | null
    _max: FavoriteMaxAggregateOutputType | null
  }

  type GetFavoriteGroupByPayload<T extends FavoriteGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FavoriteGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FavoriteGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FavoriteGroupByOutputType[P]>
            : GetScalarType<T[P], FavoriteGroupByOutputType[P]>
        }
      >
    >


  export type FavoriteSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    favoriteId?: boolean
    id?: boolean
    title?: boolean
    gender?: boolean
    description?: boolean
    category?: boolean
    price?: boolean
    size?: boolean
    color?: boolean
    ratings?: boolean
    img?: boolean
    userId?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["favorite"]>

  export type FavoriteSelectScalar = {
    favoriteId?: boolean
    id?: boolean
    title?: boolean
    gender?: boolean
    description?: boolean
    category?: boolean
    price?: boolean
    size?: boolean
    color?: boolean
    ratings?: boolean
    img?: boolean
    userId?: boolean
    createdAt?: boolean
  }

  export type FavoriteInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }


  export type $FavoritePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Favorite"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      favoriteId: number
      id: number
      title: string
      gender: string
      description: string
      category: string
      price: number
      size: string[]
      color: string
      ratings: Prisma.JsonValue
      img: string[]
      userId: number
      createdAt: Date
    }, ExtArgs["result"]["favorite"]>
    composites: {}
  }


  type FavoriteGetPayload<S extends boolean | null | undefined | FavoriteDefaultArgs> = $Result.GetResult<Prisma.$FavoritePayload, S>

  type FavoriteCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<FavoriteFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: FavoriteCountAggregateInputType | true
    }

  export interface FavoriteDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Favorite'], meta: { name: 'Favorite' } }
    /**
     * Find zero or one Favorite that matches the filter.
     * @param {FavoriteFindUniqueArgs} args - Arguments to find a Favorite
     * @example
     * // Get one Favorite
     * const favorite = await prisma.favorite.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends FavoriteFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, FavoriteFindUniqueArgs<ExtArgs>>
    ): Prisma__FavoriteClient<$Result.GetResult<Prisma.$FavoritePayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Favorite that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {FavoriteFindUniqueOrThrowArgs} args - Arguments to find a Favorite
     * @example
     * // Get one Favorite
     * const favorite = await prisma.favorite.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends FavoriteFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, FavoriteFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__FavoriteClient<$Result.GetResult<Prisma.$FavoritePayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Favorite that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FavoriteFindFirstArgs} args - Arguments to find a Favorite
     * @example
     * // Get one Favorite
     * const favorite = await prisma.favorite.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends FavoriteFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, FavoriteFindFirstArgs<ExtArgs>>
    ): Prisma__FavoriteClient<$Result.GetResult<Prisma.$FavoritePayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Favorite that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FavoriteFindFirstOrThrowArgs} args - Arguments to find a Favorite
     * @example
     * // Get one Favorite
     * const favorite = await prisma.favorite.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends FavoriteFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, FavoriteFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__FavoriteClient<$Result.GetResult<Prisma.$FavoritePayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Favorites that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FavoriteFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Favorites
     * const favorites = await prisma.favorite.findMany()
     * 
     * // Get first 10 Favorites
     * const favorites = await prisma.favorite.findMany({ take: 10 })
     * 
     * // Only select the `favoriteId`
     * const favoriteWithFavoriteIdOnly = await prisma.favorite.findMany({ select: { favoriteId: true } })
     * 
    **/
    findMany<T extends FavoriteFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, FavoriteFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FavoritePayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Favorite.
     * @param {FavoriteCreateArgs} args - Arguments to create a Favorite.
     * @example
     * // Create one Favorite
     * const Favorite = await prisma.favorite.create({
     *   data: {
     *     // ... data to create a Favorite
     *   }
     * })
     * 
    **/
    create<T extends FavoriteCreateArgs<ExtArgs>>(
      args: SelectSubset<T, FavoriteCreateArgs<ExtArgs>>
    ): Prisma__FavoriteClient<$Result.GetResult<Prisma.$FavoritePayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Favorites.
     *     @param {FavoriteCreateManyArgs} args - Arguments to create many Favorites.
     *     @example
     *     // Create many Favorites
     *     const favorite = await prisma.favorite.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends FavoriteCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, FavoriteCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Favorite.
     * @param {FavoriteDeleteArgs} args - Arguments to delete one Favorite.
     * @example
     * // Delete one Favorite
     * const Favorite = await prisma.favorite.delete({
     *   where: {
     *     // ... filter to delete one Favorite
     *   }
     * })
     * 
    **/
    delete<T extends FavoriteDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, FavoriteDeleteArgs<ExtArgs>>
    ): Prisma__FavoriteClient<$Result.GetResult<Prisma.$FavoritePayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Favorite.
     * @param {FavoriteUpdateArgs} args - Arguments to update one Favorite.
     * @example
     * // Update one Favorite
     * const favorite = await prisma.favorite.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends FavoriteUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, FavoriteUpdateArgs<ExtArgs>>
    ): Prisma__FavoriteClient<$Result.GetResult<Prisma.$FavoritePayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Favorites.
     * @param {FavoriteDeleteManyArgs} args - Arguments to filter Favorites to delete.
     * @example
     * // Delete a few Favorites
     * const { count } = await prisma.favorite.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends FavoriteDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, FavoriteDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Favorites.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FavoriteUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Favorites
     * const favorite = await prisma.favorite.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends FavoriteUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, FavoriteUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Favorite.
     * @param {FavoriteUpsertArgs} args - Arguments to update or create a Favorite.
     * @example
     * // Update or create a Favorite
     * const favorite = await prisma.favorite.upsert({
     *   create: {
     *     // ... data to create a Favorite
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Favorite we want to update
     *   }
     * })
    **/
    upsert<T extends FavoriteUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, FavoriteUpsertArgs<ExtArgs>>
    ): Prisma__FavoriteClient<$Result.GetResult<Prisma.$FavoritePayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Favorites.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FavoriteCountArgs} args - Arguments to filter Favorites to count.
     * @example
     * // Count the number of Favorites
     * const count = await prisma.favorite.count({
     *   where: {
     *     // ... the filter for the Favorites we want to count
     *   }
     * })
    **/
    count<T extends FavoriteCountArgs>(
      args?: Subset<T, FavoriteCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FavoriteCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Favorite.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FavoriteAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends FavoriteAggregateArgs>(args: Subset<T, FavoriteAggregateArgs>): Prisma.PrismaPromise<GetFavoriteAggregateType<T>>

    /**
     * Group by Favorite.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FavoriteGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends FavoriteGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FavoriteGroupByArgs['orderBy'] }
        : { orderBy?: FavoriteGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, FavoriteGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFavoriteGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Favorite model
   */
  readonly fields: FavoriteFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Favorite.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FavoriteClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Favorite model
   */ 
  interface FavoriteFieldRefs {
    readonly favoriteId: FieldRef<"Favorite", 'Int'>
    readonly id: FieldRef<"Favorite", 'Int'>
    readonly title: FieldRef<"Favorite", 'String'>
    readonly gender: FieldRef<"Favorite", 'String'>
    readonly description: FieldRef<"Favorite", 'String'>
    readonly category: FieldRef<"Favorite", 'String'>
    readonly price: FieldRef<"Favorite", 'Float'>
    readonly size: FieldRef<"Favorite", 'String[]'>
    readonly color: FieldRef<"Favorite", 'String'>
    readonly ratings: FieldRef<"Favorite", 'Json'>
    readonly img: FieldRef<"Favorite", 'String[]'>
    readonly userId: FieldRef<"Favorite", 'Int'>
    readonly createdAt: FieldRef<"Favorite", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * Favorite findUnique
   */
  export type FavoriteFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Favorite
     */
    select?: FavoriteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FavoriteInclude<ExtArgs> | null
    /**
     * Filter, which Favorite to fetch.
     */
    where: FavoriteWhereUniqueInput
  }


  /**
   * Favorite findUniqueOrThrow
   */
  export type FavoriteFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Favorite
     */
    select?: FavoriteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FavoriteInclude<ExtArgs> | null
    /**
     * Filter, which Favorite to fetch.
     */
    where: FavoriteWhereUniqueInput
  }


  /**
   * Favorite findFirst
   */
  export type FavoriteFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Favorite
     */
    select?: FavoriteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FavoriteInclude<ExtArgs> | null
    /**
     * Filter, which Favorite to fetch.
     */
    where?: FavoriteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Favorites to fetch.
     */
    orderBy?: FavoriteOrderByWithRelationInput | FavoriteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Favorites.
     */
    cursor?: FavoriteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Favorites from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Favorites.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Favorites.
     */
    distinct?: FavoriteScalarFieldEnum | FavoriteScalarFieldEnum[]
  }


  /**
   * Favorite findFirstOrThrow
   */
  export type FavoriteFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Favorite
     */
    select?: FavoriteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FavoriteInclude<ExtArgs> | null
    /**
     * Filter, which Favorite to fetch.
     */
    where?: FavoriteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Favorites to fetch.
     */
    orderBy?: FavoriteOrderByWithRelationInput | FavoriteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Favorites.
     */
    cursor?: FavoriteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Favorites from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Favorites.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Favorites.
     */
    distinct?: FavoriteScalarFieldEnum | FavoriteScalarFieldEnum[]
  }


  /**
   * Favorite findMany
   */
  export type FavoriteFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Favorite
     */
    select?: FavoriteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FavoriteInclude<ExtArgs> | null
    /**
     * Filter, which Favorites to fetch.
     */
    where?: FavoriteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Favorites to fetch.
     */
    orderBy?: FavoriteOrderByWithRelationInput | FavoriteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Favorites.
     */
    cursor?: FavoriteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Favorites from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Favorites.
     */
    skip?: number
    distinct?: FavoriteScalarFieldEnum | FavoriteScalarFieldEnum[]
  }


  /**
   * Favorite create
   */
  export type FavoriteCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Favorite
     */
    select?: FavoriteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FavoriteInclude<ExtArgs> | null
    /**
     * The data needed to create a Favorite.
     */
    data: XOR<FavoriteCreateInput, FavoriteUncheckedCreateInput>
  }


  /**
   * Favorite createMany
   */
  export type FavoriteCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Favorites.
     */
    data: FavoriteCreateManyInput | FavoriteCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Favorite update
   */
  export type FavoriteUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Favorite
     */
    select?: FavoriteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FavoriteInclude<ExtArgs> | null
    /**
     * The data needed to update a Favorite.
     */
    data: XOR<FavoriteUpdateInput, FavoriteUncheckedUpdateInput>
    /**
     * Choose, which Favorite to update.
     */
    where: FavoriteWhereUniqueInput
  }


  /**
   * Favorite updateMany
   */
  export type FavoriteUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Favorites.
     */
    data: XOR<FavoriteUpdateManyMutationInput, FavoriteUncheckedUpdateManyInput>
    /**
     * Filter which Favorites to update
     */
    where?: FavoriteWhereInput
  }


  /**
   * Favorite upsert
   */
  export type FavoriteUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Favorite
     */
    select?: FavoriteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FavoriteInclude<ExtArgs> | null
    /**
     * The filter to search for the Favorite to update in case it exists.
     */
    where: FavoriteWhereUniqueInput
    /**
     * In case the Favorite found by the `where` argument doesn't exist, create a new Favorite with this data.
     */
    create: XOR<FavoriteCreateInput, FavoriteUncheckedCreateInput>
    /**
     * In case the Favorite was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FavoriteUpdateInput, FavoriteUncheckedUpdateInput>
  }


  /**
   * Favorite delete
   */
  export type FavoriteDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Favorite
     */
    select?: FavoriteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FavoriteInclude<ExtArgs> | null
    /**
     * Filter which Favorite to delete.
     */
    where: FavoriteWhereUniqueInput
  }


  /**
   * Favorite deleteMany
   */
  export type FavoriteDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Favorites to delete
     */
    where?: FavoriteWhereInput
  }


  /**
   * Favorite without action
   */
  export type FavoriteDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Favorite
     */
    select?: FavoriteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FavoriteInclude<ExtArgs> | null
  }



  /**
   * Model Order
   */

  export type AggregateOrder = {
    _count: OrderCountAggregateOutputType | null
    _avg: OrderAvgAggregateOutputType | null
    _sum: OrderSumAggregateOutputType | null
    _min: OrderMinAggregateOutputType | null
    _max: OrderMaxAggregateOutputType | null
  }

  export type OrderAvgAggregateOutputType = {
    id: number | null
    subTotal: number | null
    quantity: number | null
    shipping: number | null
    discount: number | null
    total: number | null
    userId: number | null
  }

  export type OrderSumAggregateOutputType = {
    id: number | null
    subTotal: number | null
    quantity: number | null
    shipping: number | null
    discount: number | null
    total: number | null
    userId: number | null
  }

  export type OrderMinAggregateOutputType = {
    id: number | null
    subTotal: number | null
    quantity: number | null
    shipping: number | null
    discount: number | null
    total: number | null
    userId: number | null
    createdAt: Date | null
  }

  export type OrderMaxAggregateOutputType = {
    id: number | null
    subTotal: number | null
    quantity: number | null
    shipping: number | null
    discount: number | null
    total: number | null
    userId: number | null
    createdAt: Date | null
  }

  export type OrderCountAggregateOutputType = {
    id: number
    subTotal: number
    quantity: number
    shipping: number
    discount: number
    total: number
    userId: number
    createdAt: number
    _all: number
  }


  export type OrderAvgAggregateInputType = {
    id?: true
    subTotal?: true
    quantity?: true
    shipping?: true
    discount?: true
    total?: true
    userId?: true
  }

  export type OrderSumAggregateInputType = {
    id?: true
    subTotal?: true
    quantity?: true
    shipping?: true
    discount?: true
    total?: true
    userId?: true
  }

  export type OrderMinAggregateInputType = {
    id?: true
    subTotal?: true
    quantity?: true
    shipping?: true
    discount?: true
    total?: true
    userId?: true
    createdAt?: true
  }

  export type OrderMaxAggregateInputType = {
    id?: true
    subTotal?: true
    quantity?: true
    shipping?: true
    discount?: true
    total?: true
    userId?: true
    createdAt?: true
  }

  export type OrderCountAggregateInputType = {
    id?: true
    subTotal?: true
    quantity?: true
    shipping?: true
    discount?: true
    total?: true
    userId?: true
    createdAt?: true
    _all?: true
  }

  export type OrderAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Order to aggregate.
     */
    where?: OrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Orders
    **/
    _count?: true | OrderCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: OrderAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: OrderSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OrderMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OrderMaxAggregateInputType
  }

  export type GetOrderAggregateType<T extends OrderAggregateArgs> = {
        [P in keyof T & keyof AggregateOrder]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOrder[P]>
      : GetScalarType<T[P], AggregateOrder[P]>
  }




  export type OrderGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderWhereInput
    orderBy?: OrderOrderByWithAggregationInput | OrderOrderByWithAggregationInput[]
    by: OrderScalarFieldEnum[] | OrderScalarFieldEnum
    having?: OrderScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OrderCountAggregateInputType | true
    _avg?: OrderAvgAggregateInputType
    _sum?: OrderSumAggregateInputType
    _min?: OrderMinAggregateInputType
    _max?: OrderMaxAggregateInputType
  }

  export type OrderGroupByOutputType = {
    id: number
    subTotal: number
    quantity: number
    shipping: number
    discount: number
    total: number
    userId: number
    createdAt: Date
    _count: OrderCountAggregateOutputType | null
    _avg: OrderAvgAggregateOutputType | null
    _sum: OrderSumAggregateOutputType | null
    _min: OrderMinAggregateOutputType | null
    _max: OrderMaxAggregateOutputType | null
  }

  type GetOrderGroupByPayload<T extends OrderGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OrderGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OrderGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OrderGroupByOutputType[P]>
            : GetScalarType<T[P], OrderGroupByOutputType[P]>
        }
      >
    >


  export type OrderSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    subTotal?: boolean
    quantity?: boolean
    shipping?: boolean
    discount?: boolean
    total?: boolean
    userId?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    PaymentDetails?: boolean | Order$PaymentDetailsArgs<ExtArgs>
    ShippingDetails?: boolean | Order$ShippingDetailsArgs<ExtArgs>
    OrderedProducts?: boolean | Order$OrderedProductsArgs<ExtArgs>
    _count?: boolean | OrderCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["order"]>

  export type OrderSelectScalar = {
    id?: boolean
    subTotal?: boolean
    quantity?: boolean
    shipping?: boolean
    discount?: boolean
    total?: boolean
    userId?: boolean
    createdAt?: boolean
  }

  export type OrderInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    PaymentDetails?: boolean | Order$PaymentDetailsArgs<ExtArgs>
    ShippingDetails?: boolean | Order$ShippingDetailsArgs<ExtArgs>
    OrderedProducts?: boolean | Order$OrderedProductsArgs<ExtArgs>
    _count?: boolean | OrderCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $OrderPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Order"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      PaymentDetails: Prisma.$PaymentDetailPayload<ExtArgs>[]
      ShippingDetails: Prisma.$ShippingDetailPayload<ExtArgs>[]
      OrderedProducts: Prisma.$OrderedProductPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      subTotal: number
      quantity: number
      shipping: number
      discount: number
      total: number
      userId: number
      createdAt: Date
    }, ExtArgs["result"]["order"]>
    composites: {}
  }


  type OrderGetPayload<S extends boolean | null | undefined | OrderDefaultArgs> = $Result.GetResult<Prisma.$OrderPayload, S>

  type OrderCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<OrderFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: OrderCountAggregateInputType | true
    }

  export interface OrderDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Order'], meta: { name: 'Order' } }
    /**
     * Find zero or one Order that matches the filter.
     * @param {OrderFindUniqueArgs} args - Arguments to find a Order
     * @example
     * // Get one Order
     * const order = await prisma.order.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends OrderFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, OrderFindUniqueArgs<ExtArgs>>
    ): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Order that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {OrderFindUniqueOrThrowArgs} args - Arguments to find a Order
     * @example
     * // Get one Order
     * const order = await prisma.order.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends OrderFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, OrderFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Order that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderFindFirstArgs} args - Arguments to find a Order
     * @example
     * // Get one Order
     * const order = await prisma.order.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends OrderFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, OrderFindFirstArgs<ExtArgs>>
    ): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Order that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderFindFirstOrThrowArgs} args - Arguments to find a Order
     * @example
     * // Get one Order
     * const order = await prisma.order.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends OrderFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, OrderFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Orders that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Orders
     * const orders = await prisma.order.findMany()
     * 
     * // Get first 10 Orders
     * const orders = await prisma.order.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const orderWithIdOnly = await prisma.order.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends OrderFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, OrderFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Order.
     * @param {OrderCreateArgs} args - Arguments to create a Order.
     * @example
     * // Create one Order
     * const Order = await prisma.order.create({
     *   data: {
     *     // ... data to create a Order
     *   }
     * })
     * 
    **/
    create<T extends OrderCreateArgs<ExtArgs>>(
      args: SelectSubset<T, OrderCreateArgs<ExtArgs>>
    ): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Orders.
     *     @param {OrderCreateManyArgs} args - Arguments to create many Orders.
     *     @example
     *     // Create many Orders
     *     const order = await prisma.order.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends OrderCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, OrderCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Order.
     * @param {OrderDeleteArgs} args - Arguments to delete one Order.
     * @example
     * // Delete one Order
     * const Order = await prisma.order.delete({
     *   where: {
     *     // ... filter to delete one Order
     *   }
     * })
     * 
    **/
    delete<T extends OrderDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, OrderDeleteArgs<ExtArgs>>
    ): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Order.
     * @param {OrderUpdateArgs} args - Arguments to update one Order.
     * @example
     * // Update one Order
     * const order = await prisma.order.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends OrderUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, OrderUpdateArgs<ExtArgs>>
    ): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Orders.
     * @param {OrderDeleteManyArgs} args - Arguments to filter Orders to delete.
     * @example
     * // Delete a few Orders
     * const { count } = await prisma.order.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends OrderDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, OrderDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Orders
     * const order = await prisma.order.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends OrderUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, OrderUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Order.
     * @param {OrderUpsertArgs} args - Arguments to update or create a Order.
     * @example
     * // Update or create a Order
     * const order = await prisma.order.upsert({
     *   create: {
     *     // ... data to create a Order
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Order we want to update
     *   }
     * })
    **/
    upsert<T extends OrderUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, OrderUpsertArgs<ExtArgs>>
    ): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderCountArgs} args - Arguments to filter Orders to count.
     * @example
     * // Count the number of Orders
     * const count = await prisma.order.count({
     *   where: {
     *     // ... the filter for the Orders we want to count
     *   }
     * })
    **/
    count<T extends OrderCountArgs>(
      args?: Subset<T, OrderCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OrderCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Order.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends OrderAggregateArgs>(args: Subset<T, OrderAggregateArgs>): Prisma.PrismaPromise<GetOrderAggregateType<T>>

    /**
     * Group by Order.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends OrderGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OrderGroupByArgs['orderBy'] }
        : { orderBy?: OrderGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, OrderGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOrderGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Order model
   */
  readonly fields: OrderFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Order.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OrderClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    PaymentDetails<T extends Order$PaymentDetailsArgs<ExtArgs> = {}>(args?: Subset<T, Order$PaymentDetailsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentDetailPayload<ExtArgs>, T, 'findMany'> | Null>;

    ShippingDetails<T extends Order$ShippingDetailsArgs<ExtArgs> = {}>(args?: Subset<T, Order$ShippingDetailsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ShippingDetailPayload<ExtArgs>, T, 'findMany'> | Null>;

    OrderedProducts<T extends Order$OrderedProductsArgs<ExtArgs> = {}>(args?: Subset<T, Order$OrderedProductsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderedProductPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Order model
   */ 
  interface OrderFieldRefs {
    readonly id: FieldRef<"Order", 'Int'>
    readonly subTotal: FieldRef<"Order", 'Float'>
    readonly quantity: FieldRef<"Order", 'Int'>
    readonly shipping: FieldRef<"Order", 'Float'>
    readonly discount: FieldRef<"Order", 'Float'>
    readonly total: FieldRef<"Order", 'Float'>
    readonly userId: FieldRef<"Order", 'Int'>
    readonly createdAt: FieldRef<"Order", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * Order findUnique
   */
  export type OrderFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter, which Order to fetch.
     */
    where: OrderWhereUniqueInput
  }


  /**
   * Order findUniqueOrThrow
   */
  export type OrderFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter, which Order to fetch.
     */
    where: OrderWhereUniqueInput
  }


  /**
   * Order findFirst
   */
  export type OrderFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter, which Order to fetch.
     */
    where?: OrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Orders.
     */
    cursor?: OrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Orders.
     */
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[]
  }


  /**
   * Order findFirstOrThrow
   */
  export type OrderFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter, which Order to fetch.
     */
    where?: OrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Orders.
     */
    cursor?: OrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Orders.
     */
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[]
  }


  /**
   * Order findMany
   */
  export type OrderFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter, which Orders to fetch.
     */
    where?: OrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Orders.
     */
    cursor?: OrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     */
    skip?: number
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[]
  }


  /**
   * Order create
   */
  export type OrderCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * The data needed to create a Order.
     */
    data: XOR<OrderCreateInput, OrderUncheckedCreateInput>
  }


  /**
   * Order createMany
   */
  export type OrderCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Orders.
     */
    data: OrderCreateManyInput | OrderCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Order update
   */
  export type OrderUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * The data needed to update a Order.
     */
    data: XOR<OrderUpdateInput, OrderUncheckedUpdateInput>
    /**
     * Choose, which Order to update.
     */
    where: OrderWhereUniqueInput
  }


  /**
   * Order updateMany
   */
  export type OrderUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Orders.
     */
    data: XOR<OrderUpdateManyMutationInput, OrderUncheckedUpdateManyInput>
    /**
     * Filter which Orders to update
     */
    where?: OrderWhereInput
  }


  /**
   * Order upsert
   */
  export type OrderUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * The filter to search for the Order to update in case it exists.
     */
    where: OrderWhereUniqueInput
    /**
     * In case the Order found by the `where` argument doesn't exist, create a new Order with this data.
     */
    create: XOR<OrderCreateInput, OrderUncheckedCreateInput>
    /**
     * In case the Order was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OrderUpdateInput, OrderUncheckedUpdateInput>
  }


  /**
   * Order delete
   */
  export type OrderDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter which Order to delete.
     */
    where: OrderWhereUniqueInput
  }


  /**
   * Order deleteMany
   */
  export type OrderDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Orders to delete
     */
    where?: OrderWhereInput
  }


  /**
   * Order.PaymentDetails
   */
  export type Order$PaymentDetailsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentDetail
     */
    select?: PaymentDetailSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PaymentDetailInclude<ExtArgs> | null
    where?: PaymentDetailWhereInput
    orderBy?: PaymentDetailOrderByWithRelationInput | PaymentDetailOrderByWithRelationInput[]
    cursor?: PaymentDetailWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PaymentDetailScalarFieldEnum | PaymentDetailScalarFieldEnum[]
  }


  /**
   * Order.ShippingDetails
   */
  export type Order$ShippingDetailsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShippingDetail
     */
    select?: ShippingDetailSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ShippingDetailInclude<ExtArgs> | null
    where?: ShippingDetailWhereInput
    orderBy?: ShippingDetailOrderByWithRelationInput | ShippingDetailOrderByWithRelationInput[]
    cursor?: ShippingDetailWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ShippingDetailScalarFieldEnum | ShippingDetailScalarFieldEnum[]
  }


  /**
   * Order.OrderedProducts
   */
  export type Order$OrderedProductsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderedProduct
     */
    select?: OrderedProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OrderedProductInclude<ExtArgs> | null
    where?: OrderedProductWhereInput
    orderBy?: OrderedProductOrderByWithRelationInput | OrderedProductOrderByWithRelationInput[]
    cursor?: OrderedProductWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OrderedProductScalarFieldEnum | OrderedProductScalarFieldEnum[]
  }


  /**
   * Order without action
   */
  export type OrderDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OrderInclude<ExtArgs> | null
  }



  /**
   * Model OrderedProduct
   */

  export type AggregateOrderedProduct = {
    _count: OrderedProductCountAggregateOutputType | null
    _avg: OrderedProductAvgAggregateOutputType | null
    _sum: OrderedProductSumAggregateOutputType | null
    _min: OrderedProductMinAggregateOutputType | null
    _max: OrderedProductMaxAggregateOutputType | null
  }

  export type OrderedProductAvgAggregateOutputType = {
    OrderedProductId: number | null
    id: number | null
    price: number | null
    quantity: number | null
    orderId: number | null
  }

  export type OrderedProductSumAggregateOutputType = {
    OrderedProductId: number | null
    id: number | null
    price: number | null
    quantity: number | null
    orderId: number | null
  }

  export type OrderedProductMinAggregateOutputType = {
    OrderedProductId: number | null
    id: number | null
    title: string | null
    gender: string | null
    description: string | null
    category: string | null
    price: number | null
    size: string | null
    color: string | null
    quantity: number | null
    orderId: number | null
  }

  export type OrderedProductMaxAggregateOutputType = {
    OrderedProductId: number | null
    id: number | null
    title: string | null
    gender: string | null
    description: string | null
    category: string | null
    price: number | null
    size: string | null
    color: string | null
    quantity: number | null
    orderId: number | null
  }

  export type OrderedProductCountAggregateOutputType = {
    OrderedProductId: number
    id: number
    title: number
    gender: number
    description: number
    category: number
    price: number
    size: number
    color: number
    ratings: number
    img: number
    quantity: number
    orderId: number
    _all: number
  }


  export type OrderedProductAvgAggregateInputType = {
    OrderedProductId?: true
    id?: true
    price?: true
    quantity?: true
    orderId?: true
  }

  export type OrderedProductSumAggregateInputType = {
    OrderedProductId?: true
    id?: true
    price?: true
    quantity?: true
    orderId?: true
  }

  export type OrderedProductMinAggregateInputType = {
    OrderedProductId?: true
    id?: true
    title?: true
    gender?: true
    description?: true
    category?: true
    price?: true
    size?: true
    color?: true
    quantity?: true
    orderId?: true
  }

  export type OrderedProductMaxAggregateInputType = {
    OrderedProductId?: true
    id?: true
    title?: true
    gender?: true
    description?: true
    category?: true
    price?: true
    size?: true
    color?: true
    quantity?: true
    orderId?: true
  }

  export type OrderedProductCountAggregateInputType = {
    OrderedProductId?: true
    id?: true
    title?: true
    gender?: true
    description?: true
    category?: true
    price?: true
    size?: true
    color?: true
    ratings?: true
    img?: true
    quantity?: true
    orderId?: true
    _all?: true
  }

  export type OrderedProductAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OrderedProduct to aggregate.
     */
    where?: OrderedProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrderedProducts to fetch.
     */
    orderBy?: OrderedProductOrderByWithRelationInput | OrderedProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OrderedProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrderedProducts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrderedProducts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned OrderedProducts
    **/
    _count?: true | OrderedProductCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: OrderedProductAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: OrderedProductSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OrderedProductMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OrderedProductMaxAggregateInputType
  }

  export type GetOrderedProductAggregateType<T extends OrderedProductAggregateArgs> = {
        [P in keyof T & keyof AggregateOrderedProduct]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOrderedProduct[P]>
      : GetScalarType<T[P], AggregateOrderedProduct[P]>
  }




  export type OrderedProductGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderedProductWhereInput
    orderBy?: OrderedProductOrderByWithAggregationInput | OrderedProductOrderByWithAggregationInput[]
    by: OrderedProductScalarFieldEnum[] | OrderedProductScalarFieldEnum
    having?: OrderedProductScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OrderedProductCountAggregateInputType | true
    _avg?: OrderedProductAvgAggregateInputType
    _sum?: OrderedProductSumAggregateInputType
    _min?: OrderedProductMinAggregateInputType
    _max?: OrderedProductMaxAggregateInputType
  }

  export type OrderedProductGroupByOutputType = {
    OrderedProductId: number
    id: number
    title: string
    gender: string
    description: string
    category: string
    price: number
    size: string
    color: string
    ratings: JsonValue
    img: string[]
    quantity: number
    orderId: number | null
    _count: OrderedProductCountAggregateOutputType | null
    _avg: OrderedProductAvgAggregateOutputType | null
    _sum: OrderedProductSumAggregateOutputType | null
    _min: OrderedProductMinAggregateOutputType | null
    _max: OrderedProductMaxAggregateOutputType | null
  }

  type GetOrderedProductGroupByPayload<T extends OrderedProductGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OrderedProductGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OrderedProductGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OrderedProductGroupByOutputType[P]>
            : GetScalarType<T[P], OrderedProductGroupByOutputType[P]>
        }
      >
    >


  export type OrderedProductSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    OrderedProductId?: boolean
    id?: boolean
    title?: boolean
    gender?: boolean
    description?: boolean
    category?: boolean
    price?: boolean
    size?: boolean
    color?: boolean
    ratings?: boolean
    img?: boolean
    quantity?: boolean
    orderId?: boolean
    order?: boolean | OrderedProduct$orderArgs<ExtArgs>
  }, ExtArgs["result"]["orderedProduct"]>

  export type OrderedProductSelectScalar = {
    OrderedProductId?: boolean
    id?: boolean
    title?: boolean
    gender?: boolean
    description?: boolean
    category?: boolean
    price?: boolean
    size?: boolean
    color?: boolean
    ratings?: boolean
    img?: boolean
    quantity?: boolean
    orderId?: boolean
  }

  export type OrderedProductInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    order?: boolean | OrderedProduct$orderArgs<ExtArgs>
  }


  export type $OrderedProductPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "OrderedProduct"
    objects: {
      order: Prisma.$OrderPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      OrderedProductId: number
      id: number
      title: string
      gender: string
      description: string
      category: string
      price: number
      size: string
      color: string
      ratings: Prisma.JsonValue
      img: string[]
      quantity: number
      orderId: number | null
    }, ExtArgs["result"]["orderedProduct"]>
    composites: {}
  }


  type OrderedProductGetPayload<S extends boolean | null | undefined | OrderedProductDefaultArgs> = $Result.GetResult<Prisma.$OrderedProductPayload, S>

  type OrderedProductCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<OrderedProductFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: OrderedProductCountAggregateInputType | true
    }

  export interface OrderedProductDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['OrderedProduct'], meta: { name: 'OrderedProduct' } }
    /**
     * Find zero or one OrderedProduct that matches the filter.
     * @param {OrderedProductFindUniqueArgs} args - Arguments to find a OrderedProduct
     * @example
     * // Get one OrderedProduct
     * const orderedProduct = await prisma.orderedProduct.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends OrderedProductFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, OrderedProductFindUniqueArgs<ExtArgs>>
    ): Prisma__OrderedProductClient<$Result.GetResult<Prisma.$OrderedProductPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one OrderedProduct that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {OrderedProductFindUniqueOrThrowArgs} args - Arguments to find a OrderedProduct
     * @example
     * // Get one OrderedProduct
     * const orderedProduct = await prisma.orderedProduct.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends OrderedProductFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, OrderedProductFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__OrderedProductClient<$Result.GetResult<Prisma.$OrderedProductPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first OrderedProduct that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderedProductFindFirstArgs} args - Arguments to find a OrderedProduct
     * @example
     * // Get one OrderedProduct
     * const orderedProduct = await prisma.orderedProduct.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends OrderedProductFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, OrderedProductFindFirstArgs<ExtArgs>>
    ): Prisma__OrderedProductClient<$Result.GetResult<Prisma.$OrderedProductPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first OrderedProduct that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderedProductFindFirstOrThrowArgs} args - Arguments to find a OrderedProduct
     * @example
     * // Get one OrderedProduct
     * const orderedProduct = await prisma.orderedProduct.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends OrderedProductFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, OrderedProductFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__OrderedProductClient<$Result.GetResult<Prisma.$OrderedProductPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more OrderedProducts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderedProductFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all OrderedProducts
     * const orderedProducts = await prisma.orderedProduct.findMany()
     * 
     * // Get first 10 OrderedProducts
     * const orderedProducts = await prisma.orderedProduct.findMany({ take: 10 })
     * 
     * // Only select the `OrderedProductId`
     * const orderedProductWithOrderedProductIdOnly = await prisma.orderedProduct.findMany({ select: { OrderedProductId: true } })
     * 
    **/
    findMany<T extends OrderedProductFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, OrderedProductFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderedProductPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a OrderedProduct.
     * @param {OrderedProductCreateArgs} args - Arguments to create a OrderedProduct.
     * @example
     * // Create one OrderedProduct
     * const OrderedProduct = await prisma.orderedProduct.create({
     *   data: {
     *     // ... data to create a OrderedProduct
     *   }
     * })
     * 
    **/
    create<T extends OrderedProductCreateArgs<ExtArgs>>(
      args: SelectSubset<T, OrderedProductCreateArgs<ExtArgs>>
    ): Prisma__OrderedProductClient<$Result.GetResult<Prisma.$OrderedProductPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many OrderedProducts.
     *     @param {OrderedProductCreateManyArgs} args - Arguments to create many OrderedProducts.
     *     @example
     *     // Create many OrderedProducts
     *     const orderedProduct = await prisma.orderedProduct.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends OrderedProductCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, OrderedProductCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a OrderedProduct.
     * @param {OrderedProductDeleteArgs} args - Arguments to delete one OrderedProduct.
     * @example
     * // Delete one OrderedProduct
     * const OrderedProduct = await prisma.orderedProduct.delete({
     *   where: {
     *     // ... filter to delete one OrderedProduct
     *   }
     * })
     * 
    **/
    delete<T extends OrderedProductDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, OrderedProductDeleteArgs<ExtArgs>>
    ): Prisma__OrderedProductClient<$Result.GetResult<Prisma.$OrderedProductPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one OrderedProduct.
     * @param {OrderedProductUpdateArgs} args - Arguments to update one OrderedProduct.
     * @example
     * // Update one OrderedProduct
     * const orderedProduct = await prisma.orderedProduct.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends OrderedProductUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, OrderedProductUpdateArgs<ExtArgs>>
    ): Prisma__OrderedProductClient<$Result.GetResult<Prisma.$OrderedProductPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more OrderedProducts.
     * @param {OrderedProductDeleteManyArgs} args - Arguments to filter OrderedProducts to delete.
     * @example
     * // Delete a few OrderedProducts
     * const { count } = await prisma.orderedProduct.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends OrderedProductDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, OrderedProductDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more OrderedProducts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderedProductUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many OrderedProducts
     * const orderedProduct = await prisma.orderedProduct.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends OrderedProductUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, OrderedProductUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one OrderedProduct.
     * @param {OrderedProductUpsertArgs} args - Arguments to update or create a OrderedProduct.
     * @example
     * // Update or create a OrderedProduct
     * const orderedProduct = await prisma.orderedProduct.upsert({
     *   create: {
     *     // ... data to create a OrderedProduct
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the OrderedProduct we want to update
     *   }
     * })
    **/
    upsert<T extends OrderedProductUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, OrderedProductUpsertArgs<ExtArgs>>
    ): Prisma__OrderedProductClient<$Result.GetResult<Prisma.$OrderedProductPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of OrderedProducts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderedProductCountArgs} args - Arguments to filter OrderedProducts to count.
     * @example
     * // Count the number of OrderedProducts
     * const count = await prisma.orderedProduct.count({
     *   where: {
     *     // ... the filter for the OrderedProducts we want to count
     *   }
     * })
    **/
    count<T extends OrderedProductCountArgs>(
      args?: Subset<T, OrderedProductCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OrderedProductCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a OrderedProduct.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderedProductAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends OrderedProductAggregateArgs>(args: Subset<T, OrderedProductAggregateArgs>): Prisma.PrismaPromise<GetOrderedProductAggregateType<T>>

    /**
     * Group by OrderedProduct.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderedProductGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends OrderedProductGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OrderedProductGroupByArgs['orderBy'] }
        : { orderBy?: OrderedProductGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, OrderedProductGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOrderedProductGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the OrderedProduct model
   */
  readonly fields: OrderedProductFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for OrderedProduct.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OrderedProductClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    order<T extends OrderedProduct$orderArgs<ExtArgs> = {}>(args?: Subset<T, OrderedProduct$orderArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the OrderedProduct model
   */ 
  interface OrderedProductFieldRefs {
    readonly OrderedProductId: FieldRef<"OrderedProduct", 'Int'>
    readonly id: FieldRef<"OrderedProduct", 'Int'>
    readonly title: FieldRef<"OrderedProduct", 'String'>
    readonly gender: FieldRef<"OrderedProduct", 'String'>
    readonly description: FieldRef<"OrderedProduct", 'String'>
    readonly category: FieldRef<"OrderedProduct", 'String'>
    readonly price: FieldRef<"OrderedProduct", 'Float'>
    readonly size: FieldRef<"OrderedProduct", 'String'>
    readonly color: FieldRef<"OrderedProduct", 'String'>
    readonly ratings: FieldRef<"OrderedProduct", 'Json'>
    readonly img: FieldRef<"OrderedProduct", 'String[]'>
    readonly quantity: FieldRef<"OrderedProduct", 'Int'>
    readonly orderId: FieldRef<"OrderedProduct", 'Int'>
  }
    

  // Custom InputTypes

  /**
   * OrderedProduct findUnique
   */
  export type OrderedProductFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderedProduct
     */
    select?: OrderedProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OrderedProductInclude<ExtArgs> | null
    /**
     * Filter, which OrderedProduct to fetch.
     */
    where: OrderedProductWhereUniqueInput
  }


  /**
   * OrderedProduct findUniqueOrThrow
   */
  export type OrderedProductFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderedProduct
     */
    select?: OrderedProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OrderedProductInclude<ExtArgs> | null
    /**
     * Filter, which OrderedProduct to fetch.
     */
    where: OrderedProductWhereUniqueInput
  }


  /**
   * OrderedProduct findFirst
   */
  export type OrderedProductFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderedProduct
     */
    select?: OrderedProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OrderedProductInclude<ExtArgs> | null
    /**
     * Filter, which OrderedProduct to fetch.
     */
    where?: OrderedProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrderedProducts to fetch.
     */
    orderBy?: OrderedProductOrderByWithRelationInput | OrderedProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OrderedProducts.
     */
    cursor?: OrderedProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrderedProducts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrderedProducts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OrderedProducts.
     */
    distinct?: OrderedProductScalarFieldEnum | OrderedProductScalarFieldEnum[]
  }


  /**
   * OrderedProduct findFirstOrThrow
   */
  export type OrderedProductFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderedProduct
     */
    select?: OrderedProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OrderedProductInclude<ExtArgs> | null
    /**
     * Filter, which OrderedProduct to fetch.
     */
    where?: OrderedProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrderedProducts to fetch.
     */
    orderBy?: OrderedProductOrderByWithRelationInput | OrderedProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OrderedProducts.
     */
    cursor?: OrderedProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrderedProducts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrderedProducts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OrderedProducts.
     */
    distinct?: OrderedProductScalarFieldEnum | OrderedProductScalarFieldEnum[]
  }


  /**
   * OrderedProduct findMany
   */
  export type OrderedProductFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderedProduct
     */
    select?: OrderedProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OrderedProductInclude<ExtArgs> | null
    /**
     * Filter, which OrderedProducts to fetch.
     */
    where?: OrderedProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrderedProducts to fetch.
     */
    orderBy?: OrderedProductOrderByWithRelationInput | OrderedProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing OrderedProducts.
     */
    cursor?: OrderedProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrderedProducts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrderedProducts.
     */
    skip?: number
    distinct?: OrderedProductScalarFieldEnum | OrderedProductScalarFieldEnum[]
  }


  /**
   * OrderedProduct create
   */
  export type OrderedProductCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderedProduct
     */
    select?: OrderedProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OrderedProductInclude<ExtArgs> | null
    /**
     * The data needed to create a OrderedProduct.
     */
    data: XOR<OrderedProductCreateInput, OrderedProductUncheckedCreateInput>
  }


  /**
   * OrderedProduct createMany
   */
  export type OrderedProductCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many OrderedProducts.
     */
    data: OrderedProductCreateManyInput | OrderedProductCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * OrderedProduct update
   */
  export type OrderedProductUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderedProduct
     */
    select?: OrderedProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OrderedProductInclude<ExtArgs> | null
    /**
     * The data needed to update a OrderedProduct.
     */
    data: XOR<OrderedProductUpdateInput, OrderedProductUncheckedUpdateInput>
    /**
     * Choose, which OrderedProduct to update.
     */
    where: OrderedProductWhereUniqueInput
  }


  /**
   * OrderedProduct updateMany
   */
  export type OrderedProductUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update OrderedProducts.
     */
    data: XOR<OrderedProductUpdateManyMutationInput, OrderedProductUncheckedUpdateManyInput>
    /**
     * Filter which OrderedProducts to update
     */
    where?: OrderedProductWhereInput
  }


  /**
   * OrderedProduct upsert
   */
  export type OrderedProductUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderedProduct
     */
    select?: OrderedProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OrderedProductInclude<ExtArgs> | null
    /**
     * The filter to search for the OrderedProduct to update in case it exists.
     */
    where: OrderedProductWhereUniqueInput
    /**
     * In case the OrderedProduct found by the `where` argument doesn't exist, create a new OrderedProduct with this data.
     */
    create: XOR<OrderedProductCreateInput, OrderedProductUncheckedCreateInput>
    /**
     * In case the OrderedProduct was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OrderedProductUpdateInput, OrderedProductUncheckedUpdateInput>
  }


  /**
   * OrderedProduct delete
   */
  export type OrderedProductDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderedProduct
     */
    select?: OrderedProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OrderedProductInclude<ExtArgs> | null
    /**
     * Filter which OrderedProduct to delete.
     */
    where: OrderedProductWhereUniqueInput
  }


  /**
   * OrderedProduct deleteMany
   */
  export type OrderedProductDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OrderedProducts to delete
     */
    where?: OrderedProductWhereInput
  }


  /**
   * OrderedProduct.order
   */
  export type OrderedProduct$orderArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OrderInclude<ExtArgs> | null
    where?: OrderWhereInput
  }


  /**
   * OrderedProduct without action
   */
  export type OrderedProductDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderedProduct
     */
    select?: OrderedProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OrderedProductInclude<ExtArgs> | null
  }



  /**
   * Model PaymentDetail
   */

  export type AggregatePaymentDetail = {
    _count: PaymentDetailCountAggregateOutputType | null
    _avg: PaymentDetailAvgAggregateOutputType | null
    _sum: PaymentDetailSumAggregateOutputType | null
    _min: PaymentDetailMinAggregateOutputType | null
    _max: PaymentDetailMaxAggregateOutputType | null
  }

  export type PaymentDetailAvgAggregateOutputType = {
    id: number | null
    orderId: number | null
  }

  export type PaymentDetailSumAggregateOutputType = {
    id: number | null
    orderId: number | null
  }

  export type PaymentDetailMinAggregateOutputType = {
    id: number | null
    razorpayOrderId: string | null
    razorpayPaymentId: string | null
    orderId: number | null
  }

  export type PaymentDetailMaxAggregateOutputType = {
    id: number | null
    razorpayOrderId: string | null
    razorpayPaymentId: string | null
    orderId: number | null
  }

  export type PaymentDetailCountAggregateOutputType = {
    id: number
    razorpayOrderId: number
    razorpayPaymentId: number
    orderId: number
    _all: number
  }


  export type PaymentDetailAvgAggregateInputType = {
    id?: true
    orderId?: true
  }

  export type PaymentDetailSumAggregateInputType = {
    id?: true
    orderId?: true
  }

  export type PaymentDetailMinAggregateInputType = {
    id?: true
    razorpayOrderId?: true
    razorpayPaymentId?: true
    orderId?: true
  }

  export type PaymentDetailMaxAggregateInputType = {
    id?: true
    razorpayOrderId?: true
    razorpayPaymentId?: true
    orderId?: true
  }

  export type PaymentDetailCountAggregateInputType = {
    id?: true
    razorpayOrderId?: true
    razorpayPaymentId?: true
    orderId?: true
    _all?: true
  }

  export type PaymentDetailAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PaymentDetail to aggregate.
     */
    where?: PaymentDetailWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PaymentDetails to fetch.
     */
    orderBy?: PaymentDetailOrderByWithRelationInput | PaymentDetailOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PaymentDetailWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PaymentDetails from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PaymentDetails.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PaymentDetails
    **/
    _count?: true | PaymentDetailCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PaymentDetailAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PaymentDetailSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PaymentDetailMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PaymentDetailMaxAggregateInputType
  }

  export type GetPaymentDetailAggregateType<T extends PaymentDetailAggregateArgs> = {
        [P in keyof T & keyof AggregatePaymentDetail]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePaymentDetail[P]>
      : GetScalarType<T[P], AggregatePaymentDetail[P]>
  }




  export type PaymentDetailGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PaymentDetailWhereInput
    orderBy?: PaymentDetailOrderByWithAggregationInput | PaymentDetailOrderByWithAggregationInput[]
    by: PaymentDetailScalarFieldEnum[] | PaymentDetailScalarFieldEnum
    having?: PaymentDetailScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PaymentDetailCountAggregateInputType | true
    _avg?: PaymentDetailAvgAggregateInputType
    _sum?: PaymentDetailSumAggregateInputType
    _min?: PaymentDetailMinAggregateInputType
    _max?: PaymentDetailMaxAggregateInputType
  }

  export type PaymentDetailGroupByOutputType = {
    id: number
    razorpayOrderId: string
    razorpayPaymentId: string
    orderId: number | null
    _count: PaymentDetailCountAggregateOutputType | null
    _avg: PaymentDetailAvgAggregateOutputType | null
    _sum: PaymentDetailSumAggregateOutputType | null
    _min: PaymentDetailMinAggregateOutputType | null
    _max: PaymentDetailMaxAggregateOutputType | null
  }

  type GetPaymentDetailGroupByPayload<T extends PaymentDetailGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PaymentDetailGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PaymentDetailGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PaymentDetailGroupByOutputType[P]>
            : GetScalarType<T[P], PaymentDetailGroupByOutputType[P]>
        }
      >
    >


  export type PaymentDetailSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    razorpayOrderId?: boolean
    razorpayPaymentId?: boolean
    orderId?: boolean
    order?: boolean | PaymentDetail$orderArgs<ExtArgs>
  }, ExtArgs["result"]["paymentDetail"]>

  export type PaymentDetailSelectScalar = {
    id?: boolean
    razorpayOrderId?: boolean
    razorpayPaymentId?: boolean
    orderId?: boolean
  }

  export type PaymentDetailInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    order?: boolean | PaymentDetail$orderArgs<ExtArgs>
  }


  export type $PaymentDetailPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PaymentDetail"
    objects: {
      order: Prisma.$OrderPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      razorpayOrderId: string
      razorpayPaymentId: string
      orderId: number | null
    }, ExtArgs["result"]["paymentDetail"]>
    composites: {}
  }


  type PaymentDetailGetPayload<S extends boolean | null | undefined | PaymentDetailDefaultArgs> = $Result.GetResult<Prisma.$PaymentDetailPayload, S>

  type PaymentDetailCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<PaymentDetailFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: PaymentDetailCountAggregateInputType | true
    }

  export interface PaymentDetailDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PaymentDetail'], meta: { name: 'PaymentDetail' } }
    /**
     * Find zero or one PaymentDetail that matches the filter.
     * @param {PaymentDetailFindUniqueArgs} args - Arguments to find a PaymentDetail
     * @example
     * // Get one PaymentDetail
     * const paymentDetail = await prisma.paymentDetail.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends PaymentDetailFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, PaymentDetailFindUniqueArgs<ExtArgs>>
    ): Prisma__PaymentDetailClient<$Result.GetResult<Prisma.$PaymentDetailPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one PaymentDetail that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {PaymentDetailFindUniqueOrThrowArgs} args - Arguments to find a PaymentDetail
     * @example
     * // Get one PaymentDetail
     * const paymentDetail = await prisma.paymentDetail.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends PaymentDetailFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, PaymentDetailFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__PaymentDetailClient<$Result.GetResult<Prisma.$PaymentDetailPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first PaymentDetail that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentDetailFindFirstArgs} args - Arguments to find a PaymentDetail
     * @example
     * // Get one PaymentDetail
     * const paymentDetail = await prisma.paymentDetail.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends PaymentDetailFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, PaymentDetailFindFirstArgs<ExtArgs>>
    ): Prisma__PaymentDetailClient<$Result.GetResult<Prisma.$PaymentDetailPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first PaymentDetail that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentDetailFindFirstOrThrowArgs} args - Arguments to find a PaymentDetail
     * @example
     * // Get one PaymentDetail
     * const paymentDetail = await prisma.paymentDetail.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends PaymentDetailFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, PaymentDetailFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__PaymentDetailClient<$Result.GetResult<Prisma.$PaymentDetailPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more PaymentDetails that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentDetailFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PaymentDetails
     * const paymentDetails = await prisma.paymentDetail.findMany()
     * 
     * // Get first 10 PaymentDetails
     * const paymentDetails = await prisma.paymentDetail.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const paymentDetailWithIdOnly = await prisma.paymentDetail.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends PaymentDetailFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, PaymentDetailFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentDetailPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a PaymentDetail.
     * @param {PaymentDetailCreateArgs} args - Arguments to create a PaymentDetail.
     * @example
     * // Create one PaymentDetail
     * const PaymentDetail = await prisma.paymentDetail.create({
     *   data: {
     *     // ... data to create a PaymentDetail
     *   }
     * })
     * 
    **/
    create<T extends PaymentDetailCreateArgs<ExtArgs>>(
      args: SelectSubset<T, PaymentDetailCreateArgs<ExtArgs>>
    ): Prisma__PaymentDetailClient<$Result.GetResult<Prisma.$PaymentDetailPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many PaymentDetails.
     *     @param {PaymentDetailCreateManyArgs} args - Arguments to create many PaymentDetails.
     *     @example
     *     // Create many PaymentDetails
     *     const paymentDetail = await prisma.paymentDetail.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends PaymentDetailCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, PaymentDetailCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a PaymentDetail.
     * @param {PaymentDetailDeleteArgs} args - Arguments to delete one PaymentDetail.
     * @example
     * // Delete one PaymentDetail
     * const PaymentDetail = await prisma.paymentDetail.delete({
     *   where: {
     *     // ... filter to delete one PaymentDetail
     *   }
     * })
     * 
    **/
    delete<T extends PaymentDetailDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, PaymentDetailDeleteArgs<ExtArgs>>
    ): Prisma__PaymentDetailClient<$Result.GetResult<Prisma.$PaymentDetailPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one PaymentDetail.
     * @param {PaymentDetailUpdateArgs} args - Arguments to update one PaymentDetail.
     * @example
     * // Update one PaymentDetail
     * const paymentDetail = await prisma.paymentDetail.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends PaymentDetailUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, PaymentDetailUpdateArgs<ExtArgs>>
    ): Prisma__PaymentDetailClient<$Result.GetResult<Prisma.$PaymentDetailPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more PaymentDetails.
     * @param {PaymentDetailDeleteManyArgs} args - Arguments to filter PaymentDetails to delete.
     * @example
     * // Delete a few PaymentDetails
     * const { count } = await prisma.paymentDetail.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends PaymentDetailDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, PaymentDetailDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PaymentDetails.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentDetailUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PaymentDetails
     * const paymentDetail = await prisma.paymentDetail.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends PaymentDetailUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, PaymentDetailUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one PaymentDetail.
     * @param {PaymentDetailUpsertArgs} args - Arguments to update or create a PaymentDetail.
     * @example
     * // Update or create a PaymentDetail
     * const paymentDetail = await prisma.paymentDetail.upsert({
     *   create: {
     *     // ... data to create a PaymentDetail
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PaymentDetail we want to update
     *   }
     * })
    **/
    upsert<T extends PaymentDetailUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, PaymentDetailUpsertArgs<ExtArgs>>
    ): Prisma__PaymentDetailClient<$Result.GetResult<Prisma.$PaymentDetailPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of PaymentDetails.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentDetailCountArgs} args - Arguments to filter PaymentDetails to count.
     * @example
     * // Count the number of PaymentDetails
     * const count = await prisma.paymentDetail.count({
     *   where: {
     *     // ... the filter for the PaymentDetails we want to count
     *   }
     * })
    **/
    count<T extends PaymentDetailCountArgs>(
      args?: Subset<T, PaymentDetailCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PaymentDetailCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PaymentDetail.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentDetailAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PaymentDetailAggregateArgs>(args: Subset<T, PaymentDetailAggregateArgs>): Prisma.PrismaPromise<GetPaymentDetailAggregateType<T>>

    /**
     * Group by PaymentDetail.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentDetailGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PaymentDetailGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PaymentDetailGroupByArgs['orderBy'] }
        : { orderBy?: PaymentDetailGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PaymentDetailGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPaymentDetailGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PaymentDetail model
   */
  readonly fields: PaymentDetailFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PaymentDetail.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PaymentDetailClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    order<T extends PaymentDetail$orderArgs<ExtArgs> = {}>(args?: Subset<T, PaymentDetail$orderArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the PaymentDetail model
   */ 
  interface PaymentDetailFieldRefs {
    readonly id: FieldRef<"PaymentDetail", 'Int'>
    readonly razorpayOrderId: FieldRef<"PaymentDetail", 'String'>
    readonly razorpayPaymentId: FieldRef<"PaymentDetail", 'String'>
    readonly orderId: FieldRef<"PaymentDetail", 'Int'>
  }
    

  // Custom InputTypes

  /**
   * PaymentDetail findUnique
   */
  export type PaymentDetailFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentDetail
     */
    select?: PaymentDetailSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PaymentDetailInclude<ExtArgs> | null
    /**
     * Filter, which PaymentDetail to fetch.
     */
    where: PaymentDetailWhereUniqueInput
  }


  /**
   * PaymentDetail findUniqueOrThrow
   */
  export type PaymentDetailFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentDetail
     */
    select?: PaymentDetailSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PaymentDetailInclude<ExtArgs> | null
    /**
     * Filter, which PaymentDetail to fetch.
     */
    where: PaymentDetailWhereUniqueInput
  }


  /**
   * PaymentDetail findFirst
   */
  export type PaymentDetailFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentDetail
     */
    select?: PaymentDetailSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PaymentDetailInclude<ExtArgs> | null
    /**
     * Filter, which PaymentDetail to fetch.
     */
    where?: PaymentDetailWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PaymentDetails to fetch.
     */
    orderBy?: PaymentDetailOrderByWithRelationInput | PaymentDetailOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PaymentDetails.
     */
    cursor?: PaymentDetailWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PaymentDetails from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PaymentDetails.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PaymentDetails.
     */
    distinct?: PaymentDetailScalarFieldEnum | PaymentDetailScalarFieldEnum[]
  }


  /**
   * PaymentDetail findFirstOrThrow
   */
  export type PaymentDetailFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentDetail
     */
    select?: PaymentDetailSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PaymentDetailInclude<ExtArgs> | null
    /**
     * Filter, which PaymentDetail to fetch.
     */
    where?: PaymentDetailWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PaymentDetails to fetch.
     */
    orderBy?: PaymentDetailOrderByWithRelationInput | PaymentDetailOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PaymentDetails.
     */
    cursor?: PaymentDetailWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PaymentDetails from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PaymentDetails.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PaymentDetails.
     */
    distinct?: PaymentDetailScalarFieldEnum | PaymentDetailScalarFieldEnum[]
  }


  /**
   * PaymentDetail findMany
   */
  export type PaymentDetailFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentDetail
     */
    select?: PaymentDetailSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PaymentDetailInclude<ExtArgs> | null
    /**
     * Filter, which PaymentDetails to fetch.
     */
    where?: PaymentDetailWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PaymentDetails to fetch.
     */
    orderBy?: PaymentDetailOrderByWithRelationInput | PaymentDetailOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PaymentDetails.
     */
    cursor?: PaymentDetailWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PaymentDetails from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PaymentDetails.
     */
    skip?: number
    distinct?: PaymentDetailScalarFieldEnum | PaymentDetailScalarFieldEnum[]
  }


  /**
   * PaymentDetail create
   */
  export type PaymentDetailCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentDetail
     */
    select?: PaymentDetailSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PaymentDetailInclude<ExtArgs> | null
    /**
     * The data needed to create a PaymentDetail.
     */
    data: XOR<PaymentDetailCreateInput, PaymentDetailUncheckedCreateInput>
  }


  /**
   * PaymentDetail createMany
   */
  export type PaymentDetailCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PaymentDetails.
     */
    data: PaymentDetailCreateManyInput | PaymentDetailCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * PaymentDetail update
   */
  export type PaymentDetailUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentDetail
     */
    select?: PaymentDetailSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PaymentDetailInclude<ExtArgs> | null
    /**
     * The data needed to update a PaymentDetail.
     */
    data: XOR<PaymentDetailUpdateInput, PaymentDetailUncheckedUpdateInput>
    /**
     * Choose, which PaymentDetail to update.
     */
    where: PaymentDetailWhereUniqueInput
  }


  /**
   * PaymentDetail updateMany
   */
  export type PaymentDetailUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PaymentDetails.
     */
    data: XOR<PaymentDetailUpdateManyMutationInput, PaymentDetailUncheckedUpdateManyInput>
    /**
     * Filter which PaymentDetails to update
     */
    where?: PaymentDetailWhereInput
  }


  /**
   * PaymentDetail upsert
   */
  export type PaymentDetailUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentDetail
     */
    select?: PaymentDetailSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PaymentDetailInclude<ExtArgs> | null
    /**
     * The filter to search for the PaymentDetail to update in case it exists.
     */
    where: PaymentDetailWhereUniqueInput
    /**
     * In case the PaymentDetail found by the `where` argument doesn't exist, create a new PaymentDetail with this data.
     */
    create: XOR<PaymentDetailCreateInput, PaymentDetailUncheckedCreateInput>
    /**
     * In case the PaymentDetail was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PaymentDetailUpdateInput, PaymentDetailUncheckedUpdateInput>
  }


  /**
   * PaymentDetail delete
   */
  export type PaymentDetailDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentDetail
     */
    select?: PaymentDetailSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PaymentDetailInclude<ExtArgs> | null
    /**
     * Filter which PaymentDetail to delete.
     */
    where: PaymentDetailWhereUniqueInput
  }


  /**
   * PaymentDetail deleteMany
   */
  export type PaymentDetailDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PaymentDetails to delete
     */
    where?: PaymentDetailWhereInput
  }


  /**
   * PaymentDetail.order
   */
  export type PaymentDetail$orderArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OrderInclude<ExtArgs> | null
    where?: OrderWhereInput
  }


  /**
   * PaymentDetail without action
   */
  export type PaymentDetailDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentDetail
     */
    select?: PaymentDetailSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PaymentDetailInclude<ExtArgs> | null
  }



  /**
   * Model ShippingDetail
   */

  export type AggregateShippingDetail = {
    _count: ShippingDetailCountAggregateOutputType | null
    _avg: ShippingDetailAvgAggregateOutputType | null
    _sum: ShippingDetailSumAggregateOutputType | null
    _min: ShippingDetailMinAggregateOutputType | null
    _max: ShippingDetailMaxAggregateOutputType | null
  }

  export type ShippingDetailAvgAggregateOutputType = {
    id: number | null
    orderId: number | null
  }

  export type ShippingDetailSumAggregateOutputType = {
    id: number | null
    orderId: number | null
  }

  export type ShippingDetailMinAggregateOutputType = {
    id: number | null
    firstName: string | null
    lastName: string | null
    addressLine1: string | null
    addressLine2: string | null
    locality: string | null
    pinCode: string | null
    state: string | null
    country: string | null
    email: string | null
    mobile: string | null
    orderId: number | null
  }

  export type ShippingDetailMaxAggregateOutputType = {
    id: number | null
    firstName: string | null
    lastName: string | null
    addressLine1: string | null
    addressLine2: string | null
    locality: string | null
    pinCode: string | null
    state: string | null
    country: string | null
    email: string | null
    mobile: string | null
    orderId: number | null
  }

  export type ShippingDetailCountAggregateOutputType = {
    id: number
    firstName: number
    lastName: number
    addressLine1: number
    addressLine2: number
    locality: number
    pinCode: number
    state: number
    country: number
    email: number
    mobile: number
    orderId: number
    _all: number
  }


  export type ShippingDetailAvgAggregateInputType = {
    id?: true
    orderId?: true
  }

  export type ShippingDetailSumAggregateInputType = {
    id?: true
    orderId?: true
  }

  export type ShippingDetailMinAggregateInputType = {
    id?: true
    firstName?: true
    lastName?: true
    addressLine1?: true
    addressLine2?: true
    locality?: true
    pinCode?: true
    state?: true
    country?: true
    email?: true
    mobile?: true
    orderId?: true
  }

  export type ShippingDetailMaxAggregateInputType = {
    id?: true
    firstName?: true
    lastName?: true
    addressLine1?: true
    addressLine2?: true
    locality?: true
    pinCode?: true
    state?: true
    country?: true
    email?: true
    mobile?: true
    orderId?: true
  }

  export type ShippingDetailCountAggregateInputType = {
    id?: true
    firstName?: true
    lastName?: true
    addressLine1?: true
    addressLine2?: true
    locality?: true
    pinCode?: true
    state?: true
    country?: true
    email?: true
    mobile?: true
    orderId?: true
    _all?: true
  }

  export type ShippingDetailAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ShippingDetail to aggregate.
     */
    where?: ShippingDetailWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ShippingDetails to fetch.
     */
    orderBy?: ShippingDetailOrderByWithRelationInput | ShippingDetailOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ShippingDetailWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ShippingDetails from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ShippingDetails.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ShippingDetails
    **/
    _count?: true | ShippingDetailCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ShippingDetailAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ShippingDetailSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ShippingDetailMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ShippingDetailMaxAggregateInputType
  }

  export type GetShippingDetailAggregateType<T extends ShippingDetailAggregateArgs> = {
        [P in keyof T & keyof AggregateShippingDetail]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateShippingDetail[P]>
      : GetScalarType<T[P], AggregateShippingDetail[P]>
  }




  export type ShippingDetailGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ShippingDetailWhereInput
    orderBy?: ShippingDetailOrderByWithAggregationInput | ShippingDetailOrderByWithAggregationInput[]
    by: ShippingDetailScalarFieldEnum[] | ShippingDetailScalarFieldEnum
    having?: ShippingDetailScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ShippingDetailCountAggregateInputType | true
    _avg?: ShippingDetailAvgAggregateInputType
    _sum?: ShippingDetailSumAggregateInputType
    _min?: ShippingDetailMinAggregateInputType
    _max?: ShippingDetailMaxAggregateInputType
  }

  export type ShippingDetailGroupByOutputType = {
    id: number
    firstName: string
    lastName: string
    addressLine1: string
    addressLine2: string | null
    locality: string
    pinCode: string
    state: string
    country: string
    email: string
    mobile: string
    orderId: number | null
    _count: ShippingDetailCountAggregateOutputType | null
    _avg: ShippingDetailAvgAggregateOutputType | null
    _sum: ShippingDetailSumAggregateOutputType | null
    _min: ShippingDetailMinAggregateOutputType | null
    _max: ShippingDetailMaxAggregateOutputType | null
  }

  type GetShippingDetailGroupByPayload<T extends ShippingDetailGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ShippingDetailGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ShippingDetailGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ShippingDetailGroupByOutputType[P]>
            : GetScalarType<T[P], ShippingDetailGroupByOutputType[P]>
        }
      >
    >


  export type ShippingDetailSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    firstName?: boolean
    lastName?: boolean
    addressLine1?: boolean
    addressLine2?: boolean
    locality?: boolean
    pinCode?: boolean
    state?: boolean
    country?: boolean
    email?: boolean
    mobile?: boolean
    orderId?: boolean
    order?: boolean | ShippingDetail$orderArgs<ExtArgs>
  }, ExtArgs["result"]["shippingDetail"]>

  export type ShippingDetailSelectScalar = {
    id?: boolean
    firstName?: boolean
    lastName?: boolean
    addressLine1?: boolean
    addressLine2?: boolean
    locality?: boolean
    pinCode?: boolean
    state?: boolean
    country?: boolean
    email?: boolean
    mobile?: boolean
    orderId?: boolean
  }

  export type ShippingDetailInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    order?: boolean | ShippingDetail$orderArgs<ExtArgs>
  }


  export type $ShippingDetailPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ShippingDetail"
    objects: {
      order: Prisma.$OrderPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      firstName: string
      lastName: string
      addressLine1: string
      addressLine2: string | null
      locality: string
      pinCode: string
      state: string
      country: string
      email: string
      mobile: string
      orderId: number | null
    }, ExtArgs["result"]["shippingDetail"]>
    composites: {}
  }


  type ShippingDetailGetPayload<S extends boolean | null | undefined | ShippingDetailDefaultArgs> = $Result.GetResult<Prisma.$ShippingDetailPayload, S>

  type ShippingDetailCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ShippingDetailFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: ShippingDetailCountAggregateInputType | true
    }

  export interface ShippingDetailDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ShippingDetail'], meta: { name: 'ShippingDetail' } }
    /**
     * Find zero or one ShippingDetail that matches the filter.
     * @param {ShippingDetailFindUniqueArgs} args - Arguments to find a ShippingDetail
     * @example
     * // Get one ShippingDetail
     * const shippingDetail = await prisma.shippingDetail.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ShippingDetailFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, ShippingDetailFindUniqueArgs<ExtArgs>>
    ): Prisma__ShippingDetailClient<$Result.GetResult<Prisma.$ShippingDetailPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one ShippingDetail that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {ShippingDetailFindUniqueOrThrowArgs} args - Arguments to find a ShippingDetail
     * @example
     * // Get one ShippingDetail
     * const shippingDetail = await prisma.shippingDetail.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends ShippingDetailFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ShippingDetailFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__ShippingDetailClient<$Result.GetResult<Prisma.$ShippingDetailPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first ShippingDetail that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShippingDetailFindFirstArgs} args - Arguments to find a ShippingDetail
     * @example
     * // Get one ShippingDetail
     * const shippingDetail = await prisma.shippingDetail.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ShippingDetailFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, ShippingDetailFindFirstArgs<ExtArgs>>
    ): Prisma__ShippingDetailClient<$Result.GetResult<Prisma.$ShippingDetailPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first ShippingDetail that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShippingDetailFindFirstOrThrowArgs} args - Arguments to find a ShippingDetail
     * @example
     * // Get one ShippingDetail
     * const shippingDetail = await prisma.shippingDetail.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends ShippingDetailFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ShippingDetailFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__ShippingDetailClient<$Result.GetResult<Prisma.$ShippingDetailPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more ShippingDetails that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShippingDetailFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ShippingDetails
     * const shippingDetails = await prisma.shippingDetail.findMany()
     * 
     * // Get first 10 ShippingDetails
     * const shippingDetails = await prisma.shippingDetail.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const shippingDetailWithIdOnly = await prisma.shippingDetail.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends ShippingDetailFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ShippingDetailFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ShippingDetailPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a ShippingDetail.
     * @param {ShippingDetailCreateArgs} args - Arguments to create a ShippingDetail.
     * @example
     * // Create one ShippingDetail
     * const ShippingDetail = await prisma.shippingDetail.create({
     *   data: {
     *     // ... data to create a ShippingDetail
     *   }
     * })
     * 
    **/
    create<T extends ShippingDetailCreateArgs<ExtArgs>>(
      args: SelectSubset<T, ShippingDetailCreateArgs<ExtArgs>>
    ): Prisma__ShippingDetailClient<$Result.GetResult<Prisma.$ShippingDetailPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many ShippingDetails.
     *     @param {ShippingDetailCreateManyArgs} args - Arguments to create many ShippingDetails.
     *     @example
     *     // Create many ShippingDetails
     *     const shippingDetail = await prisma.shippingDetail.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends ShippingDetailCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ShippingDetailCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a ShippingDetail.
     * @param {ShippingDetailDeleteArgs} args - Arguments to delete one ShippingDetail.
     * @example
     * // Delete one ShippingDetail
     * const ShippingDetail = await prisma.shippingDetail.delete({
     *   where: {
     *     // ... filter to delete one ShippingDetail
     *   }
     * })
     * 
    **/
    delete<T extends ShippingDetailDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, ShippingDetailDeleteArgs<ExtArgs>>
    ): Prisma__ShippingDetailClient<$Result.GetResult<Prisma.$ShippingDetailPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one ShippingDetail.
     * @param {ShippingDetailUpdateArgs} args - Arguments to update one ShippingDetail.
     * @example
     * // Update one ShippingDetail
     * const shippingDetail = await prisma.shippingDetail.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ShippingDetailUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, ShippingDetailUpdateArgs<ExtArgs>>
    ): Prisma__ShippingDetailClient<$Result.GetResult<Prisma.$ShippingDetailPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more ShippingDetails.
     * @param {ShippingDetailDeleteManyArgs} args - Arguments to filter ShippingDetails to delete.
     * @example
     * // Delete a few ShippingDetails
     * const { count } = await prisma.shippingDetail.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ShippingDetailDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ShippingDetailDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ShippingDetails.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShippingDetailUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ShippingDetails
     * const shippingDetail = await prisma.shippingDetail.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ShippingDetailUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, ShippingDetailUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ShippingDetail.
     * @param {ShippingDetailUpsertArgs} args - Arguments to update or create a ShippingDetail.
     * @example
     * // Update or create a ShippingDetail
     * const shippingDetail = await prisma.shippingDetail.upsert({
     *   create: {
     *     // ... data to create a ShippingDetail
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ShippingDetail we want to update
     *   }
     * })
    **/
    upsert<T extends ShippingDetailUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, ShippingDetailUpsertArgs<ExtArgs>>
    ): Prisma__ShippingDetailClient<$Result.GetResult<Prisma.$ShippingDetailPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of ShippingDetails.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShippingDetailCountArgs} args - Arguments to filter ShippingDetails to count.
     * @example
     * // Count the number of ShippingDetails
     * const count = await prisma.shippingDetail.count({
     *   where: {
     *     // ... the filter for the ShippingDetails we want to count
     *   }
     * })
    **/
    count<T extends ShippingDetailCountArgs>(
      args?: Subset<T, ShippingDetailCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ShippingDetailCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ShippingDetail.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShippingDetailAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ShippingDetailAggregateArgs>(args: Subset<T, ShippingDetailAggregateArgs>): Prisma.PrismaPromise<GetShippingDetailAggregateType<T>>

    /**
     * Group by ShippingDetail.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShippingDetailGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ShippingDetailGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ShippingDetailGroupByArgs['orderBy'] }
        : { orderBy?: ShippingDetailGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ShippingDetailGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetShippingDetailGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ShippingDetail model
   */
  readonly fields: ShippingDetailFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ShippingDetail.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ShippingDetailClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    order<T extends ShippingDetail$orderArgs<ExtArgs> = {}>(args?: Subset<T, ShippingDetail$orderArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the ShippingDetail model
   */ 
  interface ShippingDetailFieldRefs {
    readonly id: FieldRef<"ShippingDetail", 'Int'>
    readonly firstName: FieldRef<"ShippingDetail", 'String'>
    readonly lastName: FieldRef<"ShippingDetail", 'String'>
    readonly addressLine1: FieldRef<"ShippingDetail", 'String'>
    readonly addressLine2: FieldRef<"ShippingDetail", 'String'>
    readonly locality: FieldRef<"ShippingDetail", 'String'>
    readonly pinCode: FieldRef<"ShippingDetail", 'String'>
    readonly state: FieldRef<"ShippingDetail", 'String'>
    readonly country: FieldRef<"ShippingDetail", 'String'>
    readonly email: FieldRef<"ShippingDetail", 'String'>
    readonly mobile: FieldRef<"ShippingDetail", 'String'>
    readonly orderId: FieldRef<"ShippingDetail", 'Int'>
  }
    

  // Custom InputTypes

  /**
   * ShippingDetail findUnique
   */
  export type ShippingDetailFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShippingDetail
     */
    select?: ShippingDetailSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ShippingDetailInclude<ExtArgs> | null
    /**
     * Filter, which ShippingDetail to fetch.
     */
    where: ShippingDetailWhereUniqueInput
  }


  /**
   * ShippingDetail findUniqueOrThrow
   */
  export type ShippingDetailFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShippingDetail
     */
    select?: ShippingDetailSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ShippingDetailInclude<ExtArgs> | null
    /**
     * Filter, which ShippingDetail to fetch.
     */
    where: ShippingDetailWhereUniqueInput
  }


  /**
   * ShippingDetail findFirst
   */
  export type ShippingDetailFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShippingDetail
     */
    select?: ShippingDetailSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ShippingDetailInclude<ExtArgs> | null
    /**
     * Filter, which ShippingDetail to fetch.
     */
    where?: ShippingDetailWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ShippingDetails to fetch.
     */
    orderBy?: ShippingDetailOrderByWithRelationInput | ShippingDetailOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ShippingDetails.
     */
    cursor?: ShippingDetailWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ShippingDetails from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ShippingDetails.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ShippingDetails.
     */
    distinct?: ShippingDetailScalarFieldEnum | ShippingDetailScalarFieldEnum[]
  }


  /**
   * ShippingDetail findFirstOrThrow
   */
  export type ShippingDetailFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShippingDetail
     */
    select?: ShippingDetailSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ShippingDetailInclude<ExtArgs> | null
    /**
     * Filter, which ShippingDetail to fetch.
     */
    where?: ShippingDetailWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ShippingDetails to fetch.
     */
    orderBy?: ShippingDetailOrderByWithRelationInput | ShippingDetailOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ShippingDetails.
     */
    cursor?: ShippingDetailWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ShippingDetails from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ShippingDetails.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ShippingDetails.
     */
    distinct?: ShippingDetailScalarFieldEnum | ShippingDetailScalarFieldEnum[]
  }


  /**
   * ShippingDetail findMany
   */
  export type ShippingDetailFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShippingDetail
     */
    select?: ShippingDetailSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ShippingDetailInclude<ExtArgs> | null
    /**
     * Filter, which ShippingDetails to fetch.
     */
    where?: ShippingDetailWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ShippingDetails to fetch.
     */
    orderBy?: ShippingDetailOrderByWithRelationInput | ShippingDetailOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ShippingDetails.
     */
    cursor?: ShippingDetailWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ShippingDetails from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ShippingDetails.
     */
    skip?: number
    distinct?: ShippingDetailScalarFieldEnum | ShippingDetailScalarFieldEnum[]
  }


  /**
   * ShippingDetail create
   */
  export type ShippingDetailCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShippingDetail
     */
    select?: ShippingDetailSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ShippingDetailInclude<ExtArgs> | null
    /**
     * The data needed to create a ShippingDetail.
     */
    data: XOR<ShippingDetailCreateInput, ShippingDetailUncheckedCreateInput>
  }


  /**
   * ShippingDetail createMany
   */
  export type ShippingDetailCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ShippingDetails.
     */
    data: ShippingDetailCreateManyInput | ShippingDetailCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * ShippingDetail update
   */
  export type ShippingDetailUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShippingDetail
     */
    select?: ShippingDetailSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ShippingDetailInclude<ExtArgs> | null
    /**
     * The data needed to update a ShippingDetail.
     */
    data: XOR<ShippingDetailUpdateInput, ShippingDetailUncheckedUpdateInput>
    /**
     * Choose, which ShippingDetail to update.
     */
    where: ShippingDetailWhereUniqueInput
  }


  /**
   * ShippingDetail updateMany
   */
  export type ShippingDetailUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ShippingDetails.
     */
    data: XOR<ShippingDetailUpdateManyMutationInput, ShippingDetailUncheckedUpdateManyInput>
    /**
     * Filter which ShippingDetails to update
     */
    where?: ShippingDetailWhereInput
  }


  /**
   * ShippingDetail upsert
   */
  export type ShippingDetailUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShippingDetail
     */
    select?: ShippingDetailSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ShippingDetailInclude<ExtArgs> | null
    /**
     * The filter to search for the ShippingDetail to update in case it exists.
     */
    where: ShippingDetailWhereUniqueInput
    /**
     * In case the ShippingDetail found by the `where` argument doesn't exist, create a new ShippingDetail with this data.
     */
    create: XOR<ShippingDetailCreateInput, ShippingDetailUncheckedCreateInput>
    /**
     * In case the ShippingDetail was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ShippingDetailUpdateInput, ShippingDetailUncheckedUpdateInput>
  }


  /**
   * ShippingDetail delete
   */
  export type ShippingDetailDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShippingDetail
     */
    select?: ShippingDetailSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ShippingDetailInclude<ExtArgs> | null
    /**
     * Filter which ShippingDetail to delete.
     */
    where: ShippingDetailWhereUniqueInput
  }


  /**
   * ShippingDetail deleteMany
   */
  export type ShippingDetailDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ShippingDetails to delete
     */
    where?: ShippingDetailWhereInput
  }


  /**
   * ShippingDetail.order
   */
  export type ShippingDetail$orderArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OrderInclude<ExtArgs> | null
    where?: OrderWhereInput
  }


  /**
   * ShippingDetail without action
   */
  export type ShippingDetailDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShippingDetail
     */
    select?: ShippingDetailSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ShippingDetailInclude<ExtArgs> | null
  }



  /**
   * Model Location
   */

  export type AggregateLocation = {
    _count: LocationCountAggregateOutputType | null
    _avg: LocationAvgAggregateOutputType | null
    _sum: LocationSumAggregateOutputType | null
    _min: LocationMinAggregateOutputType | null
    _max: LocationMaxAggregateOutputType | null
  }

  export type LocationAvgAggregateOutputType = {
    id: number | null
    lat: number | null
    long: number | null
  }

  export type LocationSumAggregateOutputType = {
    id: number | null
    lat: number | null
    long: number | null
  }

  export type LocationMinAggregateOutputType = {
    id: number | null
    lat: number | null
    long: number | null
  }

  export type LocationMaxAggregateOutputType = {
    id: number | null
    lat: number | null
    long: number | null
  }

  export type LocationCountAggregateOutputType = {
    id: number
    lat: number
    long: number
    _all: number
  }


  export type LocationAvgAggregateInputType = {
    id?: true
    lat?: true
    long?: true
  }

  export type LocationSumAggregateInputType = {
    id?: true
    lat?: true
    long?: true
  }

  export type LocationMinAggregateInputType = {
    id?: true
    lat?: true
    long?: true
  }

  export type LocationMaxAggregateInputType = {
    id?: true
    lat?: true
    long?: true
  }

  export type LocationCountAggregateInputType = {
    id?: true
    lat?: true
    long?: true
    _all?: true
  }

  export type LocationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Location to aggregate.
     */
    where?: LocationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Locations to fetch.
     */
    orderBy?: LocationOrderByWithRelationInput | LocationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LocationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Locations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Locations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Locations
    **/
    _count?: true | LocationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: LocationAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: LocationSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LocationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LocationMaxAggregateInputType
  }

  export type GetLocationAggregateType<T extends LocationAggregateArgs> = {
        [P in keyof T & keyof AggregateLocation]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLocation[P]>
      : GetScalarType<T[P], AggregateLocation[P]>
  }




  export type LocationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LocationWhereInput
    orderBy?: LocationOrderByWithAggregationInput | LocationOrderByWithAggregationInput[]
    by: LocationScalarFieldEnum[] | LocationScalarFieldEnum
    having?: LocationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LocationCountAggregateInputType | true
    _avg?: LocationAvgAggregateInputType
    _sum?: LocationSumAggregateInputType
    _min?: LocationMinAggregateInputType
    _max?: LocationMaxAggregateInputType
  }

  export type LocationGroupByOutputType = {
    id: number
    lat: number
    long: number
    _count: LocationCountAggregateOutputType | null
    _avg: LocationAvgAggregateOutputType | null
    _sum: LocationSumAggregateOutputType | null
    _min: LocationMinAggregateOutputType | null
    _max: LocationMaxAggregateOutputType | null
  }

  type GetLocationGroupByPayload<T extends LocationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LocationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LocationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LocationGroupByOutputType[P]>
            : GetScalarType<T[P], LocationGroupByOutputType[P]>
        }
      >
    >


  export type LocationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    lat?: boolean
    long?: boolean
  }, ExtArgs["result"]["location"]>

  export type LocationSelectScalar = {
    id?: boolean
    lat?: boolean
    long?: boolean
  }


  export type $LocationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Location"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      lat: number
      long: number
    }, ExtArgs["result"]["location"]>
    composites: {}
  }


  type LocationGetPayload<S extends boolean | null | undefined | LocationDefaultArgs> = $Result.GetResult<Prisma.$LocationPayload, S>

  type LocationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<LocationFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: LocationCountAggregateInputType | true
    }

  export interface LocationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Location'], meta: { name: 'Location' } }
    /**
     * Find zero or one Location that matches the filter.
     * @param {LocationFindUniqueArgs} args - Arguments to find a Location
     * @example
     * // Get one Location
     * const location = await prisma.location.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends LocationFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, LocationFindUniqueArgs<ExtArgs>>
    ): Prisma__LocationClient<$Result.GetResult<Prisma.$LocationPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Location that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {LocationFindUniqueOrThrowArgs} args - Arguments to find a Location
     * @example
     * // Get one Location
     * const location = await prisma.location.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends LocationFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, LocationFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__LocationClient<$Result.GetResult<Prisma.$LocationPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Location that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocationFindFirstArgs} args - Arguments to find a Location
     * @example
     * // Get one Location
     * const location = await prisma.location.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends LocationFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, LocationFindFirstArgs<ExtArgs>>
    ): Prisma__LocationClient<$Result.GetResult<Prisma.$LocationPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Location that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocationFindFirstOrThrowArgs} args - Arguments to find a Location
     * @example
     * // Get one Location
     * const location = await prisma.location.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends LocationFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, LocationFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__LocationClient<$Result.GetResult<Prisma.$LocationPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Locations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocationFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Locations
     * const locations = await prisma.location.findMany()
     * 
     * // Get first 10 Locations
     * const locations = await prisma.location.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const locationWithIdOnly = await prisma.location.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends LocationFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, LocationFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LocationPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Location.
     * @param {LocationCreateArgs} args - Arguments to create a Location.
     * @example
     * // Create one Location
     * const Location = await prisma.location.create({
     *   data: {
     *     // ... data to create a Location
     *   }
     * })
     * 
    **/
    create<T extends LocationCreateArgs<ExtArgs>>(
      args: SelectSubset<T, LocationCreateArgs<ExtArgs>>
    ): Prisma__LocationClient<$Result.GetResult<Prisma.$LocationPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Locations.
     *     @param {LocationCreateManyArgs} args - Arguments to create many Locations.
     *     @example
     *     // Create many Locations
     *     const location = await prisma.location.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends LocationCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, LocationCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Location.
     * @param {LocationDeleteArgs} args - Arguments to delete one Location.
     * @example
     * // Delete one Location
     * const Location = await prisma.location.delete({
     *   where: {
     *     // ... filter to delete one Location
     *   }
     * })
     * 
    **/
    delete<T extends LocationDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, LocationDeleteArgs<ExtArgs>>
    ): Prisma__LocationClient<$Result.GetResult<Prisma.$LocationPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Location.
     * @param {LocationUpdateArgs} args - Arguments to update one Location.
     * @example
     * // Update one Location
     * const location = await prisma.location.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends LocationUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, LocationUpdateArgs<ExtArgs>>
    ): Prisma__LocationClient<$Result.GetResult<Prisma.$LocationPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Locations.
     * @param {LocationDeleteManyArgs} args - Arguments to filter Locations to delete.
     * @example
     * // Delete a few Locations
     * const { count } = await prisma.location.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends LocationDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, LocationDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Locations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Locations
     * const location = await prisma.location.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends LocationUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, LocationUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Location.
     * @param {LocationUpsertArgs} args - Arguments to update or create a Location.
     * @example
     * // Update or create a Location
     * const location = await prisma.location.upsert({
     *   create: {
     *     // ... data to create a Location
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Location we want to update
     *   }
     * })
    **/
    upsert<T extends LocationUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, LocationUpsertArgs<ExtArgs>>
    ): Prisma__LocationClient<$Result.GetResult<Prisma.$LocationPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Locations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocationCountArgs} args - Arguments to filter Locations to count.
     * @example
     * // Count the number of Locations
     * const count = await prisma.location.count({
     *   where: {
     *     // ... the filter for the Locations we want to count
     *   }
     * })
    **/
    count<T extends LocationCountArgs>(
      args?: Subset<T, LocationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LocationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Location.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends LocationAggregateArgs>(args: Subset<T, LocationAggregateArgs>): Prisma.PrismaPromise<GetLocationAggregateType<T>>

    /**
     * Group by Location.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocationGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends LocationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LocationGroupByArgs['orderBy'] }
        : { orderBy?: LocationGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, LocationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLocationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Location model
   */
  readonly fields: LocationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Location.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LocationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';


    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Location model
   */ 
  interface LocationFieldRefs {
    readonly id: FieldRef<"Location", 'Int'>
    readonly lat: FieldRef<"Location", 'Float'>
    readonly long: FieldRef<"Location", 'Float'>
  }
    

  // Custom InputTypes

  /**
   * Location findUnique
   */
  export type LocationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Location
     */
    select?: LocationSelect<ExtArgs> | null
    /**
     * Filter, which Location to fetch.
     */
    where: LocationWhereUniqueInput
  }


  /**
   * Location findUniqueOrThrow
   */
  export type LocationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Location
     */
    select?: LocationSelect<ExtArgs> | null
    /**
     * Filter, which Location to fetch.
     */
    where: LocationWhereUniqueInput
  }


  /**
   * Location findFirst
   */
  export type LocationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Location
     */
    select?: LocationSelect<ExtArgs> | null
    /**
     * Filter, which Location to fetch.
     */
    where?: LocationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Locations to fetch.
     */
    orderBy?: LocationOrderByWithRelationInput | LocationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Locations.
     */
    cursor?: LocationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Locations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Locations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Locations.
     */
    distinct?: LocationScalarFieldEnum | LocationScalarFieldEnum[]
  }


  /**
   * Location findFirstOrThrow
   */
  export type LocationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Location
     */
    select?: LocationSelect<ExtArgs> | null
    /**
     * Filter, which Location to fetch.
     */
    where?: LocationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Locations to fetch.
     */
    orderBy?: LocationOrderByWithRelationInput | LocationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Locations.
     */
    cursor?: LocationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Locations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Locations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Locations.
     */
    distinct?: LocationScalarFieldEnum | LocationScalarFieldEnum[]
  }


  /**
   * Location findMany
   */
  export type LocationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Location
     */
    select?: LocationSelect<ExtArgs> | null
    /**
     * Filter, which Locations to fetch.
     */
    where?: LocationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Locations to fetch.
     */
    orderBy?: LocationOrderByWithRelationInput | LocationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Locations.
     */
    cursor?: LocationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Locations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Locations.
     */
    skip?: number
    distinct?: LocationScalarFieldEnum | LocationScalarFieldEnum[]
  }


  /**
   * Location create
   */
  export type LocationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Location
     */
    select?: LocationSelect<ExtArgs> | null
    /**
     * The data needed to create a Location.
     */
    data: XOR<LocationCreateInput, LocationUncheckedCreateInput>
  }


  /**
   * Location createMany
   */
  export type LocationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Locations.
     */
    data: LocationCreateManyInput | LocationCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Location update
   */
  export type LocationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Location
     */
    select?: LocationSelect<ExtArgs> | null
    /**
     * The data needed to update a Location.
     */
    data: XOR<LocationUpdateInput, LocationUncheckedUpdateInput>
    /**
     * Choose, which Location to update.
     */
    where: LocationWhereUniqueInput
  }


  /**
   * Location updateMany
   */
  export type LocationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Locations.
     */
    data: XOR<LocationUpdateManyMutationInput, LocationUncheckedUpdateManyInput>
    /**
     * Filter which Locations to update
     */
    where?: LocationWhereInput
  }


  /**
   * Location upsert
   */
  export type LocationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Location
     */
    select?: LocationSelect<ExtArgs> | null
    /**
     * The filter to search for the Location to update in case it exists.
     */
    where: LocationWhereUniqueInput
    /**
     * In case the Location found by the `where` argument doesn't exist, create a new Location with this data.
     */
    create: XOR<LocationCreateInput, LocationUncheckedCreateInput>
    /**
     * In case the Location was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LocationUpdateInput, LocationUncheckedUpdateInput>
  }


  /**
   * Location delete
   */
  export type LocationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Location
     */
    select?: LocationSelect<ExtArgs> | null
    /**
     * Filter which Location to delete.
     */
    where: LocationWhereUniqueInput
  }


  /**
   * Location deleteMany
   */
  export type LocationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Locations to delete
     */
    where?: LocationWhereInput
  }


  /**
   * Location without action
   */
  export type LocationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Location
     */
    select?: LocationSelect<ExtArgs> | null
  }



  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    password: 'password',
    firstName: 'firstName',
    lastName: 'lastName',
    profilePic: 'profilePic',
    notification: 'notification',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    isAdmin: 'isAdmin'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const AddressScalarFieldEnum: {
    id: 'id',
    street: 'street',
    city: 'city',
    state: 'state',
    zipCode: 'zipCode',
    userId: 'userId'
  };

  export type AddressScalarFieldEnum = (typeof AddressScalarFieldEnum)[keyof typeof AddressScalarFieldEnum]


  export const ProductScalarFieldEnum: {
    id: 'id',
    title: 'title',
    gender: 'gender',
    description: 'description',
    category: 'category',
    price: 'price',
    size: 'size',
    color: 'color',
    ratings: 'ratings',
    img: 'img'
  };

  export type ProductScalarFieldEnum = (typeof ProductScalarFieldEnum)[keyof typeof ProductScalarFieldEnum]


  export const CartProductScalarFieldEnum: {
    cartProductId: 'cartProductId',
    id: 'id',
    title: 'title',
    gender: 'gender',
    description: 'description',
    category: 'category',
    price: 'price',
    size: 'size',
    color: 'color',
    ratings: 'ratings',
    img: 'img',
    quantity: 'quantity',
    userId: 'userId'
  };

  export type CartProductScalarFieldEnum = (typeof CartProductScalarFieldEnum)[keyof typeof CartProductScalarFieldEnum]


  export const FavoriteScalarFieldEnum: {
    favoriteId: 'favoriteId',
    id: 'id',
    title: 'title',
    gender: 'gender',
    description: 'description',
    category: 'category',
    price: 'price',
    size: 'size',
    color: 'color',
    ratings: 'ratings',
    img: 'img',
    userId: 'userId',
    createdAt: 'createdAt'
  };

  export type FavoriteScalarFieldEnum = (typeof FavoriteScalarFieldEnum)[keyof typeof FavoriteScalarFieldEnum]


  export const OrderScalarFieldEnum: {
    id: 'id',
    subTotal: 'subTotal',
    quantity: 'quantity',
    shipping: 'shipping',
    discount: 'discount',
    total: 'total',
    userId: 'userId',
    createdAt: 'createdAt'
  };

  export type OrderScalarFieldEnum = (typeof OrderScalarFieldEnum)[keyof typeof OrderScalarFieldEnum]


  export const OrderedProductScalarFieldEnum: {
    OrderedProductId: 'OrderedProductId',
    id: 'id',
    title: 'title',
    gender: 'gender',
    description: 'description',
    category: 'category',
    price: 'price',
    size: 'size',
    color: 'color',
    ratings: 'ratings',
    img: 'img',
    quantity: 'quantity',
    orderId: 'orderId'
  };

  export type OrderedProductScalarFieldEnum = (typeof OrderedProductScalarFieldEnum)[keyof typeof OrderedProductScalarFieldEnum]


  export const PaymentDetailScalarFieldEnum: {
    id: 'id',
    razorpayOrderId: 'razorpayOrderId',
    razorpayPaymentId: 'razorpayPaymentId',
    orderId: 'orderId'
  };

  export type PaymentDetailScalarFieldEnum = (typeof PaymentDetailScalarFieldEnum)[keyof typeof PaymentDetailScalarFieldEnum]


  export const ShippingDetailScalarFieldEnum: {
    id: 'id',
    firstName: 'firstName',
    lastName: 'lastName',
    addressLine1: 'addressLine1',
    addressLine2: 'addressLine2',
    locality: 'locality',
    pinCode: 'pinCode',
    state: 'state',
    country: 'country',
    email: 'email',
    mobile: 'mobile',
    orderId: 'orderId'
  };

  export type ShippingDetailScalarFieldEnum = (typeof ShippingDetailScalarFieldEnum)[keyof typeof ShippingDetailScalarFieldEnum]


  export const LocationScalarFieldEnum: {
    id: 'id',
    lat: 'lat',
    long: 'long'
  };

  export type LocationScalarFieldEnum = (typeof LocationScalarFieldEnum)[keyof typeof LocationScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const JsonNullValueInput: {
    JsonNull: typeof JsonNull
  };

  export type JsonNullValueInput = (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: IntFilter<"User"> | number
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    firstName?: StringNullableFilter<"User"> | string | null
    lastName?: StringNullableFilter<"User"> | string | null
    profilePic?: StringNullableFilter<"User"> | string | null
    notification?: BoolFilter<"User"> | boolean
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    isAdmin?: BoolFilter<"User"> | boolean
    addresses?: AddressListRelationFilter
    orders?: OrderListRelationFilter
    CartProducts?: CartProductListRelationFilter
    favoriteItems?: FavoriteListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    firstName?: SortOrderInput | SortOrder
    lastName?: SortOrderInput | SortOrder
    profilePic?: SortOrderInput | SortOrder
    notification?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    isAdmin?: SortOrder
    addresses?: AddressOrderByRelationAggregateInput
    orders?: OrderOrderByRelationAggregateInput
    CartProducts?: CartProductOrderByRelationAggregateInput
    favoriteItems?: FavoriteOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    password?: StringFilter<"User"> | string
    firstName?: StringNullableFilter<"User"> | string | null
    lastName?: StringNullableFilter<"User"> | string | null
    profilePic?: StringNullableFilter<"User"> | string | null
    notification?: BoolFilter<"User"> | boolean
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    isAdmin?: BoolFilter<"User"> | boolean
    addresses?: AddressListRelationFilter
    orders?: OrderListRelationFilter
    CartProducts?: CartProductListRelationFilter
    favoriteItems?: FavoriteListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    firstName?: SortOrderInput | SortOrder
    lastName?: SortOrderInput | SortOrder
    profilePic?: SortOrderInput | SortOrder
    notification?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    isAdmin?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"User"> | number
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    firstName?: StringNullableWithAggregatesFilter<"User"> | string | null
    lastName?: StringNullableWithAggregatesFilter<"User"> | string | null
    profilePic?: StringNullableWithAggregatesFilter<"User"> | string | null
    notification?: BoolWithAggregatesFilter<"User"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    isAdmin?: BoolWithAggregatesFilter<"User"> | boolean
  }

  export type AddressWhereInput = {
    AND?: AddressWhereInput | AddressWhereInput[]
    OR?: AddressWhereInput[]
    NOT?: AddressWhereInput | AddressWhereInput[]
    id?: IntFilter<"Address"> | number
    street?: StringFilter<"Address"> | string
    city?: StringFilter<"Address"> | string
    state?: StringFilter<"Address"> | string
    zipCode?: StringFilter<"Address"> | string
    userId?: IntFilter<"Address"> | number
    user?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type AddressOrderByWithRelationInput = {
    id?: SortOrder
    street?: SortOrder
    city?: SortOrder
    state?: SortOrder
    zipCode?: SortOrder
    userId?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type AddressWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: AddressWhereInput | AddressWhereInput[]
    OR?: AddressWhereInput[]
    NOT?: AddressWhereInput | AddressWhereInput[]
    street?: StringFilter<"Address"> | string
    city?: StringFilter<"Address"> | string
    state?: StringFilter<"Address"> | string
    zipCode?: StringFilter<"Address"> | string
    userId?: IntFilter<"Address"> | number
    user?: XOR<UserRelationFilter, UserWhereInput>
  }, "id">

  export type AddressOrderByWithAggregationInput = {
    id?: SortOrder
    street?: SortOrder
    city?: SortOrder
    state?: SortOrder
    zipCode?: SortOrder
    userId?: SortOrder
    _count?: AddressCountOrderByAggregateInput
    _avg?: AddressAvgOrderByAggregateInput
    _max?: AddressMaxOrderByAggregateInput
    _min?: AddressMinOrderByAggregateInput
    _sum?: AddressSumOrderByAggregateInput
  }

  export type AddressScalarWhereWithAggregatesInput = {
    AND?: AddressScalarWhereWithAggregatesInput | AddressScalarWhereWithAggregatesInput[]
    OR?: AddressScalarWhereWithAggregatesInput[]
    NOT?: AddressScalarWhereWithAggregatesInput | AddressScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Address"> | number
    street?: StringWithAggregatesFilter<"Address"> | string
    city?: StringWithAggregatesFilter<"Address"> | string
    state?: StringWithAggregatesFilter<"Address"> | string
    zipCode?: StringWithAggregatesFilter<"Address"> | string
    userId?: IntWithAggregatesFilter<"Address"> | number
  }

  export type ProductWhereInput = {
    AND?: ProductWhereInput | ProductWhereInput[]
    OR?: ProductWhereInput[]
    NOT?: ProductWhereInput | ProductWhereInput[]
    id?: IntFilter<"Product"> | number
    title?: StringFilter<"Product"> | string
    gender?: StringFilter<"Product"> | string
    description?: StringFilter<"Product"> | string
    category?: StringFilter<"Product"> | string
    price?: IntFilter<"Product"> | number
    size?: StringNullableListFilter<"Product">
    color?: StringFilter<"Product"> | string
    ratings?: JsonFilter<"Product">
    img?: StringNullableListFilter<"Product">
  }

  export type ProductOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    gender?: SortOrder
    description?: SortOrder
    category?: SortOrder
    price?: SortOrder
    size?: SortOrder
    color?: SortOrder
    ratings?: SortOrder
    img?: SortOrder
  }

  export type ProductWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ProductWhereInput | ProductWhereInput[]
    OR?: ProductWhereInput[]
    NOT?: ProductWhereInput | ProductWhereInput[]
    title?: StringFilter<"Product"> | string
    gender?: StringFilter<"Product"> | string
    description?: StringFilter<"Product"> | string
    category?: StringFilter<"Product"> | string
    price?: IntFilter<"Product"> | number
    size?: StringNullableListFilter<"Product">
    color?: StringFilter<"Product"> | string
    ratings?: JsonFilter<"Product">
    img?: StringNullableListFilter<"Product">
  }, "id">

  export type ProductOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    gender?: SortOrder
    description?: SortOrder
    category?: SortOrder
    price?: SortOrder
    size?: SortOrder
    color?: SortOrder
    ratings?: SortOrder
    img?: SortOrder
    _count?: ProductCountOrderByAggregateInput
    _avg?: ProductAvgOrderByAggregateInput
    _max?: ProductMaxOrderByAggregateInput
    _min?: ProductMinOrderByAggregateInput
    _sum?: ProductSumOrderByAggregateInput
  }

  export type ProductScalarWhereWithAggregatesInput = {
    AND?: ProductScalarWhereWithAggregatesInput | ProductScalarWhereWithAggregatesInput[]
    OR?: ProductScalarWhereWithAggregatesInput[]
    NOT?: ProductScalarWhereWithAggregatesInput | ProductScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Product"> | number
    title?: StringWithAggregatesFilter<"Product"> | string
    gender?: StringWithAggregatesFilter<"Product"> | string
    description?: StringWithAggregatesFilter<"Product"> | string
    category?: StringWithAggregatesFilter<"Product"> | string
    price?: IntWithAggregatesFilter<"Product"> | number
    size?: StringNullableListFilter<"Product">
    color?: StringWithAggregatesFilter<"Product"> | string
    ratings?: JsonWithAggregatesFilter<"Product">
    img?: StringNullableListFilter<"Product">
  }

  export type CartProductWhereInput = {
    AND?: CartProductWhereInput | CartProductWhereInput[]
    OR?: CartProductWhereInput[]
    NOT?: CartProductWhereInput | CartProductWhereInput[]
    cartProductId?: IntFilter<"CartProduct"> | number
    id?: IntFilter<"CartProduct"> | number
    title?: StringFilter<"CartProduct"> | string
    gender?: StringFilter<"CartProduct"> | string
    description?: StringFilter<"CartProduct"> | string
    category?: StringFilter<"CartProduct"> | string
    price?: FloatFilter<"CartProduct"> | number
    size?: StringFilter<"CartProduct"> | string
    color?: StringFilter<"CartProduct"> | string
    ratings?: JsonFilter<"CartProduct">
    img?: StringNullableListFilter<"CartProduct">
    quantity?: IntFilter<"CartProduct"> | number
    userId?: IntFilter<"CartProduct"> | number
    user?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type CartProductOrderByWithRelationInput = {
    cartProductId?: SortOrder
    id?: SortOrder
    title?: SortOrder
    gender?: SortOrder
    description?: SortOrder
    category?: SortOrder
    price?: SortOrder
    size?: SortOrder
    color?: SortOrder
    ratings?: SortOrder
    img?: SortOrder
    quantity?: SortOrder
    userId?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type CartProductWhereUniqueInput = Prisma.AtLeast<{
    cartProductId?: number
    AND?: CartProductWhereInput | CartProductWhereInput[]
    OR?: CartProductWhereInput[]
    NOT?: CartProductWhereInput | CartProductWhereInput[]
    id?: IntFilter<"CartProduct"> | number
    title?: StringFilter<"CartProduct"> | string
    gender?: StringFilter<"CartProduct"> | string
    description?: StringFilter<"CartProduct"> | string
    category?: StringFilter<"CartProduct"> | string
    price?: FloatFilter<"CartProduct"> | number
    size?: StringFilter<"CartProduct"> | string
    color?: StringFilter<"CartProduct"> | string
    ratings?: JsonFilter<"CartProduct">
    img?: StringNullableListFilter<"CartProduct">
    quantity?: IntFilter<"CartProduct"> | number
    userId?: IntFilter<"CartProduct"> | number
    user?: XOR<UserRelationFilter, UserWhereInput>
  }, "cartProductId">

  export type CartProductOrderByWithAggregationInput = {
    cartProductId?: SortOrder
    id?: SortOrder
    title?: SortOrder
    gender?: SortOrder
    description?: SortOrder
    category?: SortOrder
    price?: SortOrder
    size?: SortOrder
    color?: SortOrder
    ratings?: SortOrder
    img?: SortOrder
    quantity?: SortOrder
    userId?: SortOrder
    _count?: CartProductCountOrderByAggregateInput
    _avg?: CartProductAvgOrderByAggregateInput
    _max?: CartProductMaxOrderByAggregateInput
    _min?: CartProductMinOrderByAggregateInput
    _sum?: CartProductSumOrderByAggregateInput
  }

  export type CartProductScalarWhereWithAggregatesInput = {
    AND?: CartProductScalarWhereWithAggregatesInput | CartProductScalarWhereWithAggregatesInput[]
    OR?: CartProductScalarWhereWithAggregatesInput[]
    NOT?: CartProductScalarWhereWithAggregatesInput | CartProductScalarWhereWithAggregatesInput[]
    cartProductId?: IntWithAggregatesFilter<"CartProduct"> | number
    id?: IntWithAggregatesFilter<"CartProduct"> | number
    title?: StringWithAggregatesFilter<"CartProduct"> | string
    gender?: StringWithAggregatesFilter<"CartProduct"> | string
    description?: StringWithAggregatesFilter<"CartProduct"> | string
    category?: StringWithAggregatesFilter<"CartProduct"> | string
    price?: FloatWithAggregatesFilter<"CartProduct"> | number
    size?: StringWithAggregatesFilter<"CartProduct"> | string
    color?: StringWithAggregatesFilter<"CartProduct"> | string
    ratings?: JsonWithAggregatesFilter<"CartProduct">
    img?: StringNullableListFilter<"CartProduct">
    quantity?: IntWithAggregatesFilter<"CartProduct"> | number
    userId?: IntWithAggregatesFilter<"CartProduct"> | number
  }

  export type FavoriteWhereInput = {
    AND?: FavoriteWhereInput | FavoriteWhereInput[]
    OR?: FavoriteWhereInput[]
    NOT?: FavoriteWhereInput | FavoriteWhereInput[]
    favoriteId?: IntFilter<"Favorite"> | number
    id?: IntFilter<"Favorite"> | number
    title?: StringFilter<"Favorite"> | string
    gender?: StringFilter<"Favorite"> | string
    description?: StringFilter<"Favorite"> | string
    category?: StringFilter<"Favorite"> | string
    price?: FloatFilter<"Favorite"> | number
    size?: StringNullableListFilter<"Favorite">
    color?: StringFilter<"Favorite"> | string
    ratings?: JsonFilter<"Favorite">
    img?: StringNullableListFilter<"Favorite">
    userId?: IntFilter<"Favorite"> | number
    createdAt?: DateTimeFilter<"Favorite"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type FavoriteOrderByWithRelationInput = {
    favoriteId?: SortOrder
    id?: SortOrder
    title?: SortOrder
    gender?: SortOrder
    description?: SortOrder
    category?: SortOrder
    price?: SortOrder
    size?: SortOrder
    color?: SortOrder
    ratings?: SortOrder
    img?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type FavoriteWhereUniqueInput = Prisma.AtLeast<{
    favoriteId?: number
    AND?: FavoriteWhereInput | FavoriteWhereInput[]
    OR?: FavoriteWhereInput[]
    NOT?: FavoriteWhereInput | FavoriteWhereInput[]
    id?: IntFilter<"Favorite"> | number
    title?: StringFilter<"Favorite"> | string
    gender?: StringFilter<"Favorite"> | string
    description?: StringFilter<"Favorite"> | string
    category?: StringFilter<"Favorite"> | string
    price?: FloatFilter<"Favorite"> | number
    size?: StringNullableListFilter<"Favorite">
    color?: StringFilter<"Favorite"> | string
    ratings?: JsonFilter<"Favorite">
    img?: StringNullableListFilter<"Favorite">
    userId?: IntFilter<"Favorite"> | number
    createdAt?: DateTimeFilter<"Favorite"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
  }, "favoriteId">

  export type FavoriteOrderByWithAggregationInput = {
    favoriteId?: SortOrder
    id?: SortOrder
    title?: SortOrder
    gender?: SortOrder
    description?: SortOrder
    category?: SortOrder
    price?: SortOrder
    size?: SortOrder
    color?: SortOrder
    ratings?: SortOrder
    img?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    _count?: FavoriteCountOrderByAggregateInput
    _avg?: FavoriteAvgOrderByAggregateInput
    _max?: FavoriteMaxOrderByAggregateInput
    _min?: FavoriteMinOrderByAggregateInput
    _sum?: FavoriteSumOrderByAggregateInput
  }

  export type FavoriteScalarWhereWithAggregatesInput = {
    AND?: FavoriteScalarWhereWithAggregatesInput | FavoriteScalarWhereWithAggregatesInput[]
    OR?: FavoriteScalarWhereWithAggregatesInput[]
    NOT?: FavoriteScalarWhereWithAggregatesInput | FavoriteScalarWhereWithAggregatesInput[]
    favoriteId?: IntWithAggregatesFilter<"Favorite"> | number
    id?: IntWithAggregatesFilter<"Favorite"> | number
    title?: StringWithAggregatesFilter<"Favorite"> | string
    gender?: StringWithAggregatesFilter<"Favorite"> | string
    description?: StringWithAggregatesFilter<"Favorite"> | string
    category?: StringWithAggregatesFilter<"Favorite"> | string
    price?: FloatWithAggregatesFilter<"Favorite"> | number
    size?: StringNullableListFilter<"Favorite">
    color?: StringWithAggregatesFilter<"Favorite"> | string
    ratings?: JsonWithAggregatesFilter<"Favorite">
    img?: StringNullableListFilter<"Favorite">
    userId?: IntWithAggregatesFilter<"Favorite"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Favorite"> | Date | string
  }

  export type OrderWhereInput = {
    AND?: OrderWhereInput | OrderWhereInput[]
    OR?: OrderWhereInput[]
    NOT?: OrderWhereInput | OrderWhereInput[]
    id?: IntFilter<"Order"> | number
    subTotal?: FloatFilter<"Order"> | number
    quantity?: IntFilter<"Order"> | number
    shipping?: FloatFilter<"Order"> | number
    discount?: FloatFilter<"Order"> | number
    total?: FloatFilter<"Order"> | number
    userId?: IntFilter<"Order"> | number
    createdAt?: DateTimeFilter<"Order"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
    PaymentDetails?: PaymentDetailListRelationFilter
    ShippingDetails?: ShippingDetailListRelationFilter
    OrderedProducts?: OrderedProductListRelationFilter
  }

  export type OrderOrderByWithRelationInput = {
    id?: SortOrder
    subTotal?: SortOrder
    quantity?: SortOrder
    shipping?: SortOrder
    discount?: SortOrder
    total?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
    PaymentDetails?: PaymentDetailOrderByRelationAggregateInput
    ShippingDetails?: ShippingDetailOrderByRelationAggregateInput
    OrderedProducts?: OrderedProductOrderByRelationAggregateInput
  }

  export type OrderWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: OrderWhereInput | OrderWhereInput[]
    OR?: OrderWhereInput[]
    NOT?: OrderWhereInput | OrderWhereInput[]
    subTotal?: FloatFilter<"Order"> | number
    quantity?: IntFilter<"Order"> | number
    shipping?: FloatFilter<"Order"> | number
    discount?: FloatFilter<"Order"> | number
    total?: FloatFilter<"Order"> | number
    userId?: IntFilter<"Order"> | number
    createdAt?: DateTimeFilter<"Order"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
    PaymentDetails?: PaymentDetailListRelationFilter
    ShippingDetails?: ShippingDetailListRelationFilter
    OrderedProducts?: OrderedProductListRelationFilter
  }, "id">

  export type OrderOrderByWithAggregationInput = {
    id?: SortOrder
    subTotal?: SortOrder
    quantity?: SortOrder
    shipping?: SortOrder
    discount?: SortOrder
    total?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    _count?: OrderCountOrderByAggregateInput
    _avg?: OrderAvgOrderByAggregateInput
    _max?: OrderMaxOrderByAggregateInput
    _min?: OrderMinOrderByAggregateInput
    _sum?: OrderSumOrderByAggregateInput
  }

  export type OrderScalarWhereWithAggregatesInput = {
    AND?: OrderScalarWhereWithAggregatesInput | OrderScalarWhereWithAggregatesInput[]
    OR?: OrderScalarWhereWithAggregatesInput[]
    NOT?: OrderScalarWhereWithAggregatesInput | OrderScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Order"> | number
    subTotal?: FloatWithAggregatesFilter<"Order"> | number
    quantity?: IntWithAggregatesFilter<"Order"> | number
    shipping?: FloatWithAggregatesFilter<"Order"> | number
    discount?: FloatWithAggregatesFilter<"Order"> | number
    total?: FloatWithAggregatesFilter<"Order"> | number
    userId?: IntWithAggregatesFilter<"Order"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Order"> | Date | string
  }

  export type OrderedProductWhereInput = {
    AND?: OrderedProductWhereInput | OrderedProductWhereInput[]
    OR?: OrderedProductWhereInput[]
    NOT?: OrderedProductWhereInput | OrderedProductWhereInput[]
    OrderedProductId?: IntFilter<"OrderedProduct"> | number
    id?: IntFilter<"OrderedProduct"> | number
    title?: StringFilter<"OrderedProduct"> | string
    gender?: StringFilter<"OrderedProduct"> | string
    description?: StringFilter<"OrderedProduct"> | string
    category?: StringFilter<"OrderedProduct"> | string
    price?: FloatFilter<"OrderedProduct"> | number
    size?: StringFilter<"OrderedProduct"> | string
    color?: StringFilter<"OrderedProduct"> | string
    ratings?: JsonFilter<"OrderedProduct">
    img?: StringNullableListFilter<"OrderedProduct">
    quantity?: IntFilter<"OrderedProduct"> | number
    orderId?: IntNullableFilter<"OrderedProduct"> | number | null
    order?: XOR<OrderNullableRelationFilter, OrderWhereInput> | null
  }

  export type OrderedProductOrderByWithRelationInput = {
    OrderedProductId?: SortOrder
    id?: SortOrder
    title?: SortOrder
    gender?: SortOrder
    description?: SortOrder
    category?: SortOrder
    price?: SortOrder
    size?: SortOrder
    color?: SortOrder
    ratings?: SortOrder
    img?: SortOrder
    quantity?: SortOrder
    orderId?: SortOrderInput | SortOrder
    order?: OrderOrderByWithRelationInput
  }

  export type OrderedProductWhereUniqueInput = Prisma.AtLeast<{
    OrderedProductId?: number
    AND?: OrderedProductWhereInput | OrderedProductWhereInput[]
    OR?: OrderedProductWhereInput[]
    NOT?: OrderedProductWhereInput | OrderedProductWhereInput[]
    id?: IntFilter<"OrderedProduct"> | number
    title?: StringFilter<"OrderedProduct"> | string
    gender?: StringFilter<"OrderedProduct"> | string
    description?: StringFilter<"OrderedProduct"> | string
    category?: StringFilter<"OrderedProduct"> | string
    price?: FloatFilter<"OrderedProduct"> | number
    size?: StringFilter<"OrderedProduct"> | string
    color?: StringFilter<"OrderedProduct"> | string
    ratings?: JsonFilter<"OrderedProduct">
    img?: StringNullableListFilter<"OrderedProduct">
    quantity?: IntFilter<"OrderedProduct"> | number
    orderId?: IntNullableFilter<"OrderedProduct"> | number | null
    order?: XOR<OrderNullableRelationFilter, OrderWhereInput> | null
  }, "OrderedProductId">

  export type OrderedProductOrderByWithAggregationInput = {
    OrderedProductId?: SortOrder
    id?: SortOrder
    title?: SortOrder
    gender?: SortOrder
    description?: SortOrder
    category?: SortOrder
    price?: SortOrder
    size?: SortOrder
    color?: SortOrder
    ratings?: SortOrder
    img?: SortOrder
    quantity?: SortOrder
    orderId?: SortOrderInput | SortOrder
    _count?: OrderedProductCountOrderByAggregateInput
    _avg?: OrderedProductAvgOrderByAggregateInput
    _max?: OrderedProductMaxOrderByAggregateInput
    _min?: OrderedProductMinOrderByAggregateInput
    _sum?: OrderedProductSumOrderByAggregateInput
  }

  export type OrderedProductScalarWhereWithAggregatesInput = {
    AND?: OrderedProductScalarWhereWithAggregatesInput | OrderedProductScalarWhereWithAggregatesInput[]
    OR?: OrderedProductScalarWhereWithAggregatesInput[]
    NOT?: OrderedProductScalarWhereWithAggregatesInput | OrderedProductScalarWhereWithAggregatesInput[]
    OrderedProductId?: IntWithAggregatesFilter<"OrderedProduct"> | number
    id?: IntWithAggregatesFilter<"OrderedProduct"> | number
    title?: StringWithAggregatesFilter<"OrderedProduct"> | string
    gender?: StringWithAggregatesFilter<"OrderedProduct"> | string
    description?: StringWithAggregatesFilter<"OrderedProduct"> | string
    category?: StringWithAggregatesFilter<"OrderedProduct"> | string
    price?: FloatWithAggregatesFilter<"OrderedProduct"> | number
    size?: StringWithAggregatesFilter<"OrderedProduct"> | string
    color?: StringWithAggregatesFilter<"OrderedProduct"> | string
    ratings?: JsonWithAggregatesFilter<"OrderedProduct">
    img?: StringNullableListFilter<"OrderedProduct">
    quantity?: IntWithAggregatesFilter<"OrderedProduct"> | number
    orderId?: IntNullableWithAggregatesFilter<"OrderedProduct"> | number | null
  }

  export type PaymentDetailWhereInput = {
    AND?: PaymentDetailWhereInput | PaymentDetailWhereInput[]
    OR?: PaymentDetailWhereInput[]
    NOT?: PaymentDetailWhereInput | PaymentDetailWhereInput[]
    id?: IntFilter<"PaymentDetail"> | number
    razorpayOrderId?: StringFilter<"PaymentDetail"> | string
    razorpayPaymentId?: StringFilter<"PaymentDetail"> | string
    orderId?: IntNullableFilter<"PaymentDetail"> | number | null
    order?: XOR<OrderNullableRelationFilter, OrderWhereInput> | null
  }

  export type PaymentDetailOrderByWithRelationInput = {
    id?: SortOrder
    razorpayOrderId?: SortOrder
    razorpayPaymentId?: SortOrder
    orderId?: SortOrderInput | SortOrder
    order?: OrderOrderByWithRelationInput
  }

  export type PaymentDetailWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: PaymentDetailWhereInput | PaymentDetailWhereInput[]
    OR?: PaymentDetailWhereInput[]
    NOT?: PaymentDetailWhereInput | PaymentDetailWhereInput[]
    razorpayOrderId?: StringFilter<"PaymentDetail"> | string
    razorpayPaymentId?: StringFilter<"PaymentDetail"> | string
    orderId?: IntNullableFilter<"PaymentDetail"> | number | null
    order?: XOR<OrderNullableRelationFilter, OrderWhereInput> | null
  }, "id">

  export type PaymentDetailOrderByWithAggregationInput = {
    id?: SortOrder
    razorpayOrderId?: SortOrder
    razorpayPaymentId?: SortOrder
    orderId?: SortOrderInput | SortOrder
    _count?: PaymentDetailCountOrderByAggregateInput
    _avg?: PaymentDetailAvgOrderByAggregateInput
    _max?: PaymentDetailMaxOrderByAggregateInput
    _min?: PaymentDetailMinOrderByAggregateInput
    _sum?: PaymentDetailSumOrderByAggregateInput
  }

  export type PaymentDetailScalarWhereWithAggregatesInput = {
    AND?: PaymentDetailScalarWhereWithAggregatesInput | PaymentDetailScalarWhereWithAggregatesInput[]
    OR?: PaymentDetailScalarWhereWithAggregatesInput[]
    NOT?: PaymentDetailScalarWhereWithAggregatesInput | PaymentDetailScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"PaymentDetail"> | number
    razorpayOrderId?: StringWithAggregatesFilter<"PaymentDetail"> | string
    razorpayPaymentId?: StringWithAggregatesFilter<"PaymentDetail"> | string
    orderId?: IntNullableWithAggregatesFilter<"PaymentDetail"> | number | null
  }

  export type ShippingDetailWhereInput = {
    AND?: ShippingDetailWhereInput | ShippingDetailWhereInput[]
    OR?: ShippingDetailWhereInput[]
    NOT?: ShippingDetailWhereInput | ShippingDetailWhereInput[]
    id?: IntFilter<"ShippingDetail"> | number
    firstName?: StringFilter<"ShippingDetail"> | string
    lastName?: StringFilter<"ShippingDetail"> | string
    addressLine1?: StringFilter<"ShippingDetail"> | string
    addressLine2?: StringNullableFilter<"ShippingDetail"> | string | null
    locality?: StringFilter<"ShippingDetail"> | string
    pinCode?: StringFilter<"ShippingDetail"> | string
    state?: StringFilter<"ShippingDetail"> | string
    country?: StringFilter<"ShippingDetail"> | string
    email?: StringFilter<"ShippingDetail"> | string
    mobile?: StringFilter<"ShippingDetail"> | string
    orderId?: IntNullableFilter<"ShippingDetail"> | number | null
    order?: XOR<OrderNullableRelationFilter, OrderWhereInput> | null
  }

  export type ShippingDetailOrderByWithRelationInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    addressLine1?: SortOrder
    addressLine2?: SortOrderInput | SortOrder
    locality?: SortOrder
    pinCode?: SortOrder
    state?: SortOrder
    country?: SortOrder
    email?: SortOrder
    mobile?: SortOrder
    orderId?: SortOrderInput | SortOrder
    order?: OrderOrderByWithRelationInput
  }

  export type ShippingDetailWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ShippingDetailWhereInput | ShippingDetailWhereInput[]
    OR?: ShippingDetailWhereInput[]
    NOT?: ShippingDetailWhereInput | ShippingDetailWhereInput[]
    firstName?: StringFilter<"ShippingDetail"> | string
    lastName?: StringFilter<"ShippingDetail"> | string
    addressLine1?: StringFilter<"ShippingDetail"> | string
    addressLine2?: StringNullableFilter<"ShippingDetail"> | string | null
    locality?: StringFilter<"ShippingDetail"> | string
    pinCode?: StringFilter<"ShippingDetail"> | string
    state?: StringFilter<"ShippingDetail"> | string
    country?: StringFilter<"ShippingDetail"> | string
    email?: StringFilter<"ShippingDetail"> | string
    mobile?: StringFilter<"ShippingDetail"> | string
    orderId?: IntNullableFilter<"ShippingDetail"> | number | null
    order?: XOR<OrderNullableRelationFilter, OrderWhereInput> | null
  }, "id">

  export type ShippingDetailOrderByWithAggregationInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    addressLine1?: SortOrder
    addressLine2?: SortOrderInput | SortOrder
    locality?: SortOrder
    pinCode?: SortOrder
    state?: SortOrder
    country?: SortOrder
    email?: SortOrder
    mobile?: SortOrder
    orderId?: SortOrderInput | SortOrder
    _count?: ShippingDetailCountOrderByAggregateInput
    _avg?: ShippingDetailAvgOrderByAggregateInput
    _max?: ShippingDetailMaxOrderByAggregateInput
    _min?: ShippingDetailMinOrderByAggregateInput
    _sum?: ShippingDetailSumOrderByAggregateInput
  }

  export type ShippingDetailScalarWhereWithAggregatesInput = {
    AND?: ShippingDetailScalarWhereWithAggregatesInput | ShippingDetailScalarWhereWithAggregatesInput[]
    OR?: ShippingDetailScalarWhereWithAggregatesInput[]
    NOT?: ShippingDetailScalarWhereWithAggregatesInput | ShippingDetailScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"ShippingDetail"> | number
    firstName?: StringWithAggregatesFilter<"ShippingDetail"> | string
    lastName?: StringWithAggregatesFilter<"ShippingDetail"> | string
    addressLine1?: StringWithAggregatesFilter<"ShippingDetail"> | string
    addressLine2?: StringNullableWithAggregatesFilter<"ShippingDetail"> | string | null
    locality?: StringWithAggregatesFilter<"ShippingDetail"> | string
    pinCode?: StringWithAggregatesFilter<"ShippingDetail"> | string
    state?: StringWithAggregatesFilter<"ShippingDetail"> | string
    country?: StringWithAggregatesFilter<"ShippingDetail"> | string
    email?: StringWithAggregatesFilter<"ShippingDetail"> | string
    mobile?: StringWithAggregatesFilter<"ShippingDetail"> | string
    orderId?: IntNullableWithAggregatesFilter<"ShippingDetail"> | number | null
  }

  export type LocationWhereInput = {
    AND?: LocationWhereInput | LocationWhereInput[]
    OR?: LocationWhereInput[]
    NOT?: LocationWhereInput | LocationWhereInput[]
    id?: IntFilter<"Location"> | number
    lat?: FloatFilter<"Location"> | number
    long?: FloatFilter<"Location"> | number
  }

  export type LocationOrderByWithRelationInput = {
    id?: SortOrder
    lat?: SortOrder
    long?: SortOrder
  }

  export type LocationWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: LocationWhereInput | LocationWhereInput[]
    OR?: LocationWhereInput[]
    NOT?: LocationWhereInput | LocationWhereInput[]
    lat?: FloatFilter<"Location"> | number
    long?: FloatFilter<"Location"> | number
  }, "id">

  export type LocationOrderByWithAggregationInput = {
    id?: SortOrder
    lat?: SortOrder
    long?: SortOrder
    _count?: LocationCountOrderByAggregateInput
    _avg?: LocationAvgOrderByAggregateInput
    _max?: LocationMaxOrderByAggregateInput
    _min?: LocationMinOrderByAggregateInput
    _sum?: LocationSumOrderByAggregateInput
  }

  export type LocationScalarWhereWithAggregatesInput = {
    AND?: LocationScalarWhereWithAggregatesInput | LocationScalarWhereWithAggregatesInput[]
    OR?: LocationScalarWhereWithAggregatesInput[]
    NOT?: LocationScalarWhereWithAggregatesInput | LocationScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Location"> | number
    lat?: FloatWithAggregatesFilter<"Location"> | number
    long?: FloatWithAggregatesFilter<"Location"> | number
  }

  export type UserCreateInput = {
    email: string
    password: string
    firstName?: string | null
    lastName?: string | null
    profilePic?: string | null
    notification?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    isAdmin?: boolean
    addresses?: AddressCreateNestedManyWithoutUserInput
    orders?: OrderCreateNestedManyWithoutUserInput
    CartProducts?: CartProductCreateNestedManyWithoutUserInput
    favoriteItems?: FavoriteCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    email: string
    password: string
    firstName?: string | null
    lastName?: string | null
    profilePic?: string | null
    notification?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    isAdmin?: boolean
    addresses?: AddressUncheckedCreateNestedManyWithoutUserInput
    orders?: OrderUncheckedCreateNestedManyWithoutUserInput
    CartProducts?: CartProductUncheckedCreateNestedManyWithoutUserInput
    favoriteItems?: FavoriteUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    profilePic?: NullableStringFieldUpdateOperationsInput | string | null
    notification?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    addresses?: AddressUpdateManyWithoutUserNestedInput
    orders?: OrderUpdateManyWithoutUserNestedInput
    CartProducts?: CartProductUpdateManyWithoutUserNestedInput
    favoriteItems?: FavoriteUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    profilePic?: NullableStringFieldUpdateOperationsInput | string | null
    notification?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    addresses?: AddressUncheckedUpdateManyWithoutUserNestedInput
    orders?: OrderUncheckedUpdateManyWithoutUserNestedInput
    CartProducts?: CartProductUncheckedUpdateManyWithoutUserNestedInput
    favoriteItems?: FavoriteUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: number
    email: string
    password: string
    firstName?: string | null
    lastName?: string | null
    profilePic?: string | null
    notification?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    isAdmin?: boolean
  }

  export type UserUpdateManyMutationInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    profilePic?: NullableStringFieldUpdateOperationsInput | string | null
    notification?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    profilePic?: NullableStringFieldUpdateOperationsInput | string | null
    notification?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
  }

  export type AddressCreateInput = {
    street: string
    city: string
    state: string
    zipCode: string
    user: UserCreateNestedOneWithoutAddressesInput
  }

  export type AddressUncheckedCreateInput = {
    id?: number
    street: string
    city: string
    state: string
    zipCode: string
    userId: number
  }

  export type AddressUpdateInput = {
    street?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    zipCode?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneRequiredWithoutAddressesNestedInput
  }

  export type AddressUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    street?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    zipCode?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type AddressCreateManyInput = {
    id?: number
    street: string
    city: string
    state: string
    zipCode: string
    userId: number
  }

  export type AddressUpdateManyMutationInput = {
    street?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    zipCode?: StringFieldUpdateOperationsInput | string
  }

  export type AddressUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    street?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    zipCode?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type ProductCreateInput = {
    title: string
    gender: string
    description: string
    category: string
    price: number
    size?: ProductCreatesizeInput | string[]
    color: string
    ratings: JsonNullValueInput | InputJsonValue
    img?: ProductCreateimgInput | string[]
  }

  export type ProductUncheckedCreateInput = {
    id?: number
    title: string
    gender: string
    description: string
    category: string
    price: number
    size?: ProductCreatesizeInput | string[]
    color: string
    ratings: JsonNullValueInput | InputJsonValue
    img?: ProductCreateimgInput | string[]
  }

  export type ProductUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    size?: ProductUpdatesizeInput | string[]
    color?: StringFieldUpdateOperationsInput | string
    ratings?: JsonNullValueInput | InputJsonValue
    img?: ProductUpdateimgInput | string[]
  }

  export type ProductUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    size?: ProductUpdatesizeInput | string[]
    color?: StringFieldUpdateOperationsInput | string
    ratings?: JsonNullValueInput | InputJsonValue
    img?: ProductUpdateimgInput | string[]
  }

  export type ProductCreateManyInput = {
    id?: number
    title: string
    gender: string
    description: string
    category: string
    price: number
    size?: ProductCreatesizeInput | string[]
    color: string
    ratings: JsonNullValueInput | InputJsonValue
    img?: ProductCreateimgInput | string[]
  }

  export type ProductUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    size?: ProductUpdatesizeInput | string[]
    color?: StringFieldUpdateOperationsInput | string
    ratings?: JsonNullValueInput | InputJsonValue
    img?: ProductUpdateimgInput | string[]
  }

  export type ProductUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    size?: ProductUpdatesizeInput | string[]
    color?: StringFieldUpdateOperationsInput | string
    ratings?: JsonNullValueInput | InputJsonValue
    img?: ProductUpdateimgInput | string[]
  }

  export type CartProductCreateInput = {
    id: number
    title: string
    gender: string
    description: string
    category: string
    price: number
    size: string
    color: string
    ratings: JsonNullValueInput | InputJsonValue
    img?: CartProductCreateimgInput | string[]
    quantity: number
    user: UserCreateNestedOneWithoutCartProductsInput
  }

  export type CartProductUncheckedCreateInput = {
    cartProductId?: number
    id: number
    title: string
    gender: string
    description: string
    category: string
    price: number
    size: string
    color: string
    ratings: JsonNullValueInput | InputJsonValue
    img?: CartProductCreateimgInput | string[]
    quantity: number
    userId: number
  }

  export type CartProductUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    size?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    ratings?: JsonNullValueInput | InputJsonValue
    img?: CartProductUpdateimgInput | string[]
    quantity?: IntFieldUpdateOperationsInput | number
    user?: UserUpdateOneRequiredWithoutCartProductsNestedInput
  }

  export type CartProductUncheckedUpdateInput = {
    cartProductId?: IntFieldUpdateOperationsInput | number
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    size?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    ratings?: JsonNullValueInput | InputJsonValue
    img?: CartProductUpdateimgInput | string[]
    quantity?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type CartProductCreateManyInput = {
    cartProductId?: number
    id: number
    title: string
    gender: string
    description: string
    category: string
    price: number
    size: string
    color: string
    ratings: JsonNullValueInput | InputJsonValue
    img?: CartProductCreateimgInput | string[]
    quantity: number
    userId: number
  }

  export type CartProductUpdateManyMutationInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    size?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    ratings?: JsonNullValueInput | InputJsonValue
    img?: CartProductUpdateimgInput | string[]
    quantity?: IntFieldUpdateOperationsInput | number
  }

  export type CartProductUncheckedUpdateManyInput = {
    cartProductId?: IntFieldUpdateOperationsInput | number
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    size?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    ratings?: JsonNullValueInput | InputJsonValue
    img?: CartProductUpdateimgInput | string[]
    quantity?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type FavoriteCreateInput = {
    id: number
    title: string
    gender: string
    description: string
    category: string
    price: number
    size?: FavoriteCreatesizeInput | string[]
    color: string
    ratings: JsonNullValueInput | InputJsonValue
    img?: FavoriteCreateimgInput | string[]
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutFavoriteItemsInput
  }

  export type FavoriteUncheckedCreateInput = {
    favoriteId?: number
    id: number
    title: string
    gender: string
    description: string
    category: string
    price: number
    size?: FavoriteCreatesizeInput | string[]
    color: string
    ratings: JsonNullValueInput | InputJsonValue
    img?: FavoriteCreateimgInput | string[]
    userId: number
    createdAt?: Date | string
  }

  export type FavoriteUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    size?: FavoriteUpdatesizeInput | string[]
    color?: StringFieldUpdateOperationsInput | string
    ratings?: JsonNullValueInput | InputJsonValue
    img?: FavoriteUpdateimgInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutFavoriteItemsNestedInput
  }

  export type FavoriteUncheckedUpdateInput = {
    favoriteId?: IntFieldUpdateOperationsInput | number
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    size?: FavoriteUpdatesizeInput | string[]
    color?: StringFieldUpdateOperationsInput | string
    ratings?: JsonNullValueInput | InputJsonValue
    img?: FavoriteUpdateimgInput | string[]
    userId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FavoriteCreateManyInput = {
    favoriteId?: number
    id: number
    title: string
    gender: string
    description: string
    category: string
    price: number
    size?: FavoriteCreatesizeInput | string[]
    color: string
    ratings: JsonNullValueInput | InputJsonValue
    img?: FavoriteCreateimgInput | string[]
    userId: number
    createdAt?: Date | string
  }

  export type FavoriteUpdateManyMutationInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    size?: FavoriteUpdatesizeInput | string[]
    color?: StringFieldUpdateOperationsInput | string
    ratings?: JsonNullValueInput | InputJsonValue
    img?: FavoriteUpdateimgInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FavoriteUncheckedUpdateManyInput = {
    favoriteId?: IntFieldUpdateOperationsInput | number
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    size?: FavoriteUpdatesizeInput | string[]
    color?: StringFieldUpdateOperationsInput | string
    ratings?: JsonNullValueInput | InputJsonValue
    img?: FavoriteUpdateimgInput | string[]
    userId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderCreateInput = {
    subTotal: number
    quantity: number
    shipping: number
    discount: number
    total: number
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutOrdersInput
    PaymentDetails?: PaymentDetailCreateNestedManyWithoutOrderInput
    ShippingDetails?: ShippingDetailCreateNestedManyWithoutOrderInput
    OrderedProducts?: OrderedProductCreateNestedManyWithoutOrderInput
  }

  export type OrderUncheckedCreateInput = {
    id?: number
    subTotal: number
    quantity: number
    shipping: number
    discount: number
    total: number
    userId: number
    createdAt?: Date | string
    PaymentDetails?: PaymentDetailUncheckedCreateNestedManyWithoutOrderInput
    ShippingDetails?: ShippingDetailUncheckedCreateNestedManyWithoutOrderInput
    OrderedProducts?: OrderedProductUncheckedCreateNestedManyWithoutOrderInput
  }

  export type OrderUpdateInput = {
    subTotal?: FloatFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    shipping?: FloatFieldUpdateOperationsInput | number
    discount?: FloatFieldUpdateOperationsInput | number
    total?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutOrdersNestedInput
    PaymentDetails?: PaymentDetailUpdateManyWithoutOrderNestedInput
    ShippingDetails?: ShippingDetailUpdateManyWithoutOrderNestedInput
    OrderedProducts?: OrderedProductUpdateManyWithoutOrderNestedInput
  }

  export type OrderUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    subTotal?: FloatFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    shipping?: FloatFieldUpdateOperationsInput | number
    discount?: FloatFieldUpdateOperationsInput | number
    total?: FloatFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    PaymentDetails?: PaymentDetailUncheckedUpdateManyWithoutOrderNestedInput
    ShippingDetails?: ShippingDetailUncheckedUpdateManyWithoutOrderNestedInput
    OrderedProducts?: OrderedProductUncheckedUpdateManyWithoutOrderNestedInput
  }

  export type OrderCreateManyInput = {
    id?: number
    subTotal: number
    quantity: number
    shipping: number
    discount: number
    total: number
    userId: number
    createdAt?: Date | string
  }

  export type OrderUpdateManyMutationInput = {
    subTotal?: FloatFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    shipping?: FloatFieldUpdateOperationsInput | number
    discount?: FloatFieldUpdateOperationsInput | number
    total?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    subTotal?: FloatFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    shipping?: FloatFieldUpdateOperationsInput | number
    discount?: FloatFieldUpdateOperationsInput | number
    total?: FloatFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderedProductCreateInput = {
    id: number
    title: string
    gender: string
    description: string
    category: string
    price: number
    size: string
    color: string
    ratings: JsonNullValueInput | InputJsonValue
    img?: OrderedProductCreateimgInput | string[]
    quantity: number
    order?: OrderCreateNestedOneWithoutOrderedProductsInput
  }

  export type OrderedProductUncheckedCreateInput = {
    OrderedProductId?: number
    id: number
    title: string
    gender: string
    description: string
    category: string
    price: number
    size: string
    color: string
    ratings: JsonNullValueInput | InputJsonValue
    img?: OrderedProductCreateimgInput | string[]
    quantity: number
    orderId?: number | null
  }

  export type OrderedProductUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    size?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    ratings?: JsonNullValueInput | InputJsonValue
    img?: OrderedProductUpdateimgInput | string[]
    quantity?: IntFieldUpdateOperationsInput | number
    order?: OrderUpdateOneWithoutOrderedProductsNestedInput
  }

  export type OrderedProductUncheckedUpdateInput = {
    OrderedProductId?: IntFieldUpdateOperationsInput | number
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    size?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    ratings?: JsonNullValueInput | InputJsonValue
    img?: OrderedProductUpdateimgInput | string[]
    quantity?: IntFieldUpdateOperationsInput | number
    orderId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type OrderedProductCreateManyInput = {
    OrderedProductId?: number
    id: number
    title: string
    gender: string
    description: string
    category: string
    price: number
    size: string
    color: string
    ratings: JsonNullValueInput | InputJsonValue
    img?: OrderedProductCreateimgInput | string[]
    quantity: number
    orderId?: number | null
  }

  export type OrderedProductUpdateManyMutationInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    size?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    ratings?: JsonNullValueInput | InputJsonValue
    img?: OrderedProductUpdateimgInput | string[]
    quantity?: IntFieldUpdateOperationsInput | number
  }

  export type OrderedProductUncheckedUpdateManyInput = {
    OrderedProductId?: IntFieldUpdateOperationsInput | number
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    size?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    ratings?: JsonNullValueInput | InputJsonValue
    img?: OrderedProductUpdateimgInput | string[]
    quantity?: IntFieldUpdateOperationsInput | number
    orderId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type PaymentDetailCreateInput = {
    razorpayOrderId: string
    razorpayPaymentId: string
    order?: OrderCreateNestedOneWithoutPaymentDetailsInput
  }

  export type PaymentDetailUncheckedCreateInput = {
    id?: number
    razorpayOrderId: string
    razorpayPaymentId: string
    orderId?: number | null
  }

  export type PaymentDetailUpdateInput = {
    razorpayOrderId?: StringFieldUpdateOperationsInput | string
    razorpayPaymentId?: StringFieldUpdateOperationsInput | string
    order?: OrderUpdateOneWithoutPaymentDetailsNestedInput
  }

  export type PaymentDetailUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    razorpayOrderId?: StringFieldUpdateOperationsInput | string
    razorpayPaymentId?: StringFieldUpdateOperationsInput | string
    orderId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type PaymentDetailCreateManyInput = {
    id?: number
    razorpayOrderId: string
    razorpayPaymentId: string
    orderId?: number | null
  }

  export type PaymentDetailUpdateManyMutationInput = {
    razorpayOrderId?: StringFieldUpdateOperationsInput | string
    razorpayPaymentId?: StringFieldUpdateOperationsInput | string
  }

  export type PaymentDetailUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    razorpayOrderId?: StringFieldUpdateOperationsInput | string
    razorpayPaymentId?: StringFieldUpdateOperationsInput | string
    orderId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type ShippingDetailCreateInput = {
    firstName: string
    lastName: string
    addressLine1: string
    addressLine2?: string | null
    locality: string
    pinCode: string
    state: string
    country: string
    email: string
    mobile: string
    order?: OrderCreateNestedOneWithoutShippingDetailsInput
  }

  export type ShippingDetailUncheckedCreateInput = {
    id?: number
    firstName: string
    lastName: string
    addressLine1: string
    addressLine2?: string | null
    locality: string
    pinCode: string
    state: string
    country: string
    email: string
    mobile: string
    orderId?: number | null
  }

  export type ShippingDetailUpdateInput = {
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    addressLine1?: StringFieldUpdateOperationsInput | string
    addressLine2?: NullableStringFieldUpdateOperationsInput | string | null
    locality?: StringFieldUpdateOperationsInput | string
    pinCode?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    mobile?: StringFieldUpdateOperationsInput | string
    order?: OrderUpdateOneWithoutShippingDetailsNestedInput
  }

  export type ShippingDetailUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    addressLine1?: StringFieldUpdateOperationsInput | string
    addressLine2?: NullableStringFieldUpdateOperationsInput | string | null
    locality?: StringFieldUpdateOperationsInput | string
    pinCode?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    mobile?: StringFieldUpdateOperationsInput | string
    orderId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type ShippingDetailCreateManyInput = {
    id?: number
    firstName: string
    lastName: string
    addressLine1: string
    addressLine2?: string | null
    locality: string
    pinCode: string
    state: string
    country: string
    email: string
    mobile: string
    orderId?: number | null
  }

  export type ShippingDetailUpdateManyMutationInput = {
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    addressLine1?: StringFieldUpdateOperationsInput | string
    addressLine2?: NullableStringFieldUpdateOperationsInput | string | null
    locality?: StringFieldUpdateOperationsInput | string
    pinCode?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    mobile?: StringFieldUpdateOperationsInput | string
  }

  export type ShippingDetailUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    addressLine1?: StringFieldUpdateOperationsInput | string
    addressLine2?: NullableStringFieldUpdateOperationsInput | string | null
    locality?: StringFieldUpdateOperationsInput | string
    pinCode?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    mobile?: StringFieldUpdateOperationsInput | string
    orderId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type LocationCreateInput = {
    lat: number
    long: number
  }

  export type LocationUncheckedCreateInput = {
    id?: number
    lat: number
    long: number
  }

  export type LocationUpdateInput = {
    lat?: FloatFieldUpdateOperationsInput | number
    long?: FloatFieldUpdateOperationsInput | number
  }

  export type LocationUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    lat?: FloatFieldUpdateOperationsInput | number
    long?: FloatFieldUpdateOperationsInput | number
  }

  export type LocationCreateManyInput = {
    id?: number
    lat: number
    long: number
  }

  export type LocationUpdateManyMutationInput = {
    lat?: FloatFieldUpdateOperationsInput | number
    long?: FloatFieldUpdateOperationsInput | number
  }

  export type LocationUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    lat?: FloatFieldUpdateOperationsInput | number
    long?: FloatFieldUpdateOperationsInput | number
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type AddressListRelationFilter = {
    every?: AddressWhereInput
    some?: AddressWhereInput
    none?: AddressWhereInput
  }

  export type OrderListRelationFilter = {
    every?: OrderWhereInput
    some?: OrderWhereInput
    none?: OrderWhereInput
  }

  export type CartProductListRelationFilter = {
    every?: CartProductWhereInput
    some?: CartProductWhereInput
    none?: CartProductWhereInput
  }

  export type FavoriteListRelationFilter = {
    every?: FavoriteWhereInput
    some?: FavoriteWhereInput
    none?: FavoriteWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type AddressOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type OrderOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CartProductOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type FavoriteOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    profilePic?: SortOrder
    notification?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    isAdmin?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    profilePic?: SortOrder
    notification?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    isAdmin?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    profilePic?: SortOrder
    notification?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    isAdmin?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type UserRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type AddressCountOrderByAggregateInput = {
    id?: SortOrder
    street?: SortOrder
    city?: SortOrder
    state?: SortOrder
    zipCode?: SortOrder
    userId?: SortOrder
  }

  export type AddressAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type AddressMaxOrderByAggregateInput = {
    id?: SortOrder
    street?: SortOrder
    city?: SortOrder
    state?: SortOrder
    zipCode?: SortOrder
    userId?: SortOrder
  }

  export type AddressMinOrderByAggregateInput = {
    id?: SortOrder
    street?: SortOrder
    city?: SortOrder
    state?: SortOrder
    zipCode?: SortOrder
    userId?: SortOrder
  }

  export type AddressSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }
  export type JsonFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<JsonFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonFilterBase<$PrismaModel>>, 'path'>>

  export type JsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type ProductCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    gender?: SortOrder
    description?: SortOrder
    category?: SortOrder
    price?: SortOrder
    size?: SortOrder
    color?: SortOrder
    ratings?: SortOrder
    img?: SortOrder
  }

  export type ProductAvgOrderByAggregateInput = {
    id?: SortOrder
    price?: SortOrder
  }

  export type ProductMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    gender?: SortOrder
    description?: SortOrder
    category?: SortOrder
    price?: SortOrder
    color?: SortOrder
  }

  export type ProductMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    gender?: SortOrder
    description?: SortOrder
    category?: SortOrder
    price?: SortOrder
    color?: SortOrder
  }

  export type ProductSumOrderByAggregateInput = {
    id?: SortOrder
    price?: SortOrder
  }
  export type JsonWithAggregatesFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedJsonFilter<$PrismaModel>
    _max?: NestedJsonFilter<$PrismaModel>
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type CartProductCountOrderByAggregateInput = {
    cartProductId?: SortOrder
    id?: SortOrder
    title?: SortOrder
    gender?: SortOrder
    description?: SortOrder
    category?: SortOrder
    price?: SortOrder
    size?: SortOrder
    color?: SortOrder
    ratings?: SortOrder
    img?: SortOrder
    quantity?: SortOrder
    userId?: SortOrder
  }

  export type CartProductAvgOrderByAggregateInput = {
    cartProductId?: SortOrder
    id?: SortOrder
    price?: SortOrder
    quantity?: SortOrder
    userId?: SortOrder
  }

  export type CartProductMaxOrderByAggregateInput = {
    cartProductId?: SortOrder
    id?: SortOrder
    title?: SortOrder
    gender?: SortOrder
    description?: SortOrder
    category?: SortOrder
    price?: SortOrder
    size?: SortOrder
    color?: SortOrder
    quantity?: SortOrder
    userId?: SortOrder
  }

  export type CartProductMinOrderByAggregateInput = {
    cartProductId?: SortOrder
    id?: SortOrder
    title?: SortOrder
    gender?: SortOrder
    description?: SortOrder
    category?: SortOrder
    price?: SortOrder
    size?: SortOrder
    color?: SortOrder
    quantity?: SortOrder
    userId?: SortOrder
  }

  export type CartProductSumOrderByAggregateInput = {
    cartProductId?: SortOrder
    id?: SortOrder
    price?: SortOrder
    quantity?: SortOrder
    userId?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type FavoriteCountOrderByAggregateInput = {
    favoriteId?: SortOrder
    id?: SortOrder
    title?: SortOrder
    gender?: SortOrder
    description?: SortOrder
    category?: SortOrder
    price?: SortOrder
    size?: SortOrder
    color?: SortOrder
    ratings?: SortOrder
    img?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
  }

  export type FavoriteAvgOrderByAggregateInput = {
    favoriteId?: SortOrder
    id?: SortOrder
    price?: SortOrder
    userId?: SortOrder
  }

  export type FavoriteMaxOrderByAggregateInput = {
    favoriteId?: SortOrder
    id?: SortOrder
    title?: SortOrder
    gender?: SortOrder
    description?: SortOrder
    category?: SortOrder
    price?: SortOrder
    color?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
  }

  export type FavoriteMinOrderByAggregateInput = {
    favoriteId?: SortOrder
    id?: SortOrder
    title?: SortOrder
    gender?: SortOrder
    description?: SortOrder
    category?: SortOrder
    price?: SortOrder
    color?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
  }

  export type FavoriteSumOrderByAggregateInput = {
    favoriteId?: SortOrder
    id?: SortOrder
    price?: SortOrder
    userId?: SortOrder
  }

  export type PaymentDetailListRelationFilter = {
    every?: PaymentDetailWhereInput
    some?: PaymentDetailWhereInput
    none?: PaymentDetailWhereInput
  }

  export type ShippingDetailListRelationFilter = {
    every?: ShippingDetailWhereInput
    some?: ShippingDetailWhereInput
    none?: ShippingDetailWhereInput
  }

  export type OrderedProductListRelationFilter = {
    every?: OrderedProductWhereInput
    some?: OrderedProductWhereInput
    none?: OrderedProductWhereInput
  }

  export type PaymentDetailOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ShippingDetailOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type OrderedProductOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type OrderCountOrderByAggregateInput = {
    id?: SortOrder
    subTotal?: SortOrder
    quantity?: SortOrder
    shipping?: SortOrder
    discount?: SortOrder
    total?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
  }

  export type OrderAvgOrderByAggregateInput = {
    id?: SortOrder
    subTotal?: SortOrder
    quantity?: SortOrder
    shipping?: SortOrder
    discount?: SortOrder
    total?: SortOrder
    userId?: SortOrder
  }

  export type OrderMaxOrderByAggregateInput = {
    id?: SortOrder
    subTotal?: SortOrder
    quantity?: SortOrder
    shipping?: SortOrder
    discount?: SortOrder
    total?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
  }

  export type OrderMinOrderByAggregateInput = {
    id?: SortOrder
    subTotal?: SortOrder
    quantity?: SortOrder
    shipping?: SortOrder
    discount?: SortOrder
    total?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
  }

  export type OrderSumOrderByAggregateInput = {
    id?: SortOrder
    subTotal?: SortOrder
    quantity?: SortOrder
    shipping?: SortOrder
    discount?: SortOrder
    total?: SortOrder
    userId?: SortOrder
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type OrderNullableRelationFilter = {
    is?: OrderWhereInput | null
    isNot?: OrderWhereInput | null
  }

  export type OrderedProductCountOrderByAggregateInput = {
    OrderedProductId?: SortOrder
    id?: SortOrder
    title?: SortOrder
    gender?: SortOrder
    description?: SortOrder
    category?: SortOrder
    price?: SortOrder
    size?: SortOrder
    color?: SortOrder
    ratings?: SortOrder
    img?: SortOrder
    quantity?: SortOrder
    orderId?: SortOrder
  }

  export type OrderedProductAvgOrderByAggregateInput = {
    OrderedProductId?: SortOrder
    id?: SortOrder
    price?: SortOrder
    quantity?: SortOrder
    orderId?: SortOrder
  }

  export type OrderedProductMaxOrderByAggregateInput = {
    OrderedProductId?: SortOrder
    id?: SortOrder
    title?: SortOrder
    gender?: SortOrder
    description?: SortOrder
    category?: SortOrder
    price?: SortOrder
    size?: SortOrder
    color?: SortOrder
    quantity?: SortOrder
    orderId?: SortOrder
  }

  export type OrderedProductMinOrderByAggregateInput = {
    OrderedProductId?: SortOrder
    id?: SortOrder
    title?: SortOrder
    gender?: SortOrder
    description?: SortOrder
    category?: SortOrder
    price?: SortOrder
    size?: SortOrder
    color?: SortOrder
    quantity?: SortOrder
    orderId?: SortOrder
  }

  export type OrderedProductSumOrderByAggregateInput = {
    OrderedProductId?: SortOrder
    id?: SortOrder
    price?: SortOrder
    quantity?: SortOrder
    orderId?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type PaymentDetailCountOrderByAggregateInput = {
    id?: SortOrder
    razorpayOrderId?: SortOrder
    razorpayPaymentId?: SortOrder
    orderId?: SortOrder
  }

  export type PaymentDetailAvgOrderByAggregateInput = {
    id?: SortOrder
    orderId?: SortOrder
  }

  export type PaymentDetailMaxOrderByAggregateInput = {
    id?: SortOrder
    razorpayOrderId?: SortOrder
    razorpayPaymentId?: SortOrder
    orderId?: SortOrder
  }

  export type PaymentDetailMinOrderByAggregateInput = {
    id?: SortOrder
    razorpayOrderId?: SortOrder
    razorpayPaymentId?: SortOrder
    orderId?: SortOrder
  }

  export type PaymentDetailSumOrderByAggregateInput = {
    id?: SortOrder
    orderId?: SortOrder
  }

  export type ShippingDetailCountOrderByAggregateInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    addressLine1?: SortOrder
    addressLine2?: SortOrder
    locality?: SortOrder
    pinCode?: SortOrder
    state?: SortOrder
    country?: SortOrder
    email?: SortOrder
    mobile?: SortOrder
    orderId?: SortOrder
  }

  export type ShippingDetailAvgOrderByAggregateInput = {
    id?: SortOrder
    orderId?: SortOrder
  }

  export type ShippingDetailMaxOrderByAggregateInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    addressLine1?: SortOrder
    addressLine2?: SortOrder
    locality?: SortOrder
    pinCode?: SortOrder
    state?: SortOrder
    country?: SortOrder
    email?: SortOrder
    mobile?: SortOrder
    orderId?: SortOrder
  }

  export type ShippingDetailMinOrderByAggregateInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    addressLine1?: SortOrder
    addressLine2?: SortOrder
    locality?: SortOrder
    pinCode?: SortOrder
    state?: SortOrder
    country?: SortOrder
    email?: SortOrder
    mobile?: SortOrder
    orderId?: SortOrder
  }

  export type ShippingDetailSumOrderByAggregateInput = {
    id?: SortOrder
    orderId?: SortOrder
  }

  export type LocationCountOrderByAggregateInput = {
    id?: SortOrder
    lat?: SortOrder
    long?: SortOrder
  }

  export type LocationAvgOrderByAggregateInput = {
    id?: SortOrder
    lat?: SortOrder
    long?: SortOrder
  }

  export type LocationMaxOrderByAggregateInput = {
    id?: SortOrder
    lat?: SortOrder
    long?: SortOrder
  }

  export type LocationMinOrderByAggregateInput = {
    id?: SortOrder
    lat?: SortOrder
    long?: SortOrder
  }

  export type LocationSumOrderByAggregateInput = {
    id?: SortOrder
    lat?: SortOrder
    long?: SortOrder
  }

  export type AddressCreateNestedManyWithoutUserInput = {
    create?: XOR<AddressCreateWithoutUserInput, AddressUncheckedCreateWithoutUserInput> | AddressCreateWithoutUserInput[] | AddressUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AddressCreateOrConnectWithoutUserInput | AddressCreateOrConnectWithoutUserInput[]
    createMany?: AddressCreateManyUserInputEnvelope
    connect?: AddressWhereUniqueInput | AddressWhereUniqueInput[]
  }

  export type OrderCreateNestedManyWithoutUserInput = {
    create?: XOR<OrderCreateWithoutUserInput, OrderUncheckedCreateWithoutUserInput> | OrderCreateWithoutUserInput[] | OrderUncheckedCreateWithoutUserInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutUserInput | OrderCreateOrConnectWithoutUserInput[]
    createMany?: OrderCreateManyUserInputEnvelope
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
  }

  export type CartProductCreateNestedManyWithoutUserInput = {
    create?: XOR<CartProductCreateWithoutUserInput, CartProductUncheckedCreateWithoutUserInput> | CartProductCreateWithoutUserInput[] | CartProductUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CartProductCreateOrConnectWithoutUserInput | CartProductCreateOrConnectWithoutUserInput[]
    createMany?: CartProductCreateManyUserInputEnvelope
    connect?: CartProductWhereUniqueInput | CartProductWhereUniqueInput[]
  }

  export type FavoriteCreateNestedManyWithoutUserInput = {
    create?: XOR<FavoriteCreateWithoutUserInput, FavoriteUncheckedCreateWithoutUserInput> | FavoriteCreateWithoutUserInput[] | FavoriteUncheckedCreateWithoutUserInput[]
    connectOrCreate?: FavoriteCreateOrConnectWithoutUserInput | FavoriteCreateOrConnectWithoutUserInput[]
    createMany?: FavoriteCreateManyUserInputEnvelope
    connect?: FavoriteWhereUniqueInput | FavoriteWhereUniqueInput[]
  }

  export type AddressUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<AddressCreateWithoutUserInput, AddressUncheckedCreateWithoutUserInput> | AddressCreateWithoutUserInput[] | AddressUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AddressCreateOrConnectWithoutUserInput | AddressCreateOrConnectWithoutUserInput[]
    createMany?: AddressCreateManyUserInputEnvelope
    connect?: AddressWhereUniqueInput | AddressWhereUniqueInput[]
  }

  export type OrderUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<OrderCreateWithoutUserInput, OrderUncheckedCreateWithoutUserInput> | OrderCreateWithoutUserInput[] | OrderUncheckedCreateWithoutUserInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutUserInput | OrderCreateOrConnectWithoutUserInput[]
    createMany?: OrderCreateManyUserInputEnvelope
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
  }

  export type CartProductUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<CartProductCreateWithoutUserInput, CartProductUncheckedCreateWithoutUserInput> | CartProductCreateWithoutUserInput[] | CartProductUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CartProductCreateOrConnectWithoutUserInput | CartProductCreateOrConnectWithoutUserInput[]
    createMany?: CartProductCreateManyUserInputEnvelope
    connect?: CartProductWhereUniqueInput | CartProductWhereUniqueInput[]
  }

  export type FavoriteUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<FavoriteCreateWithoutUserInput, FavoriteUncheckedCreateWithoutUserInput> | FavoriteCreateWithoutUserInput[] | FavoriteUncheckedCreateWithoutUserInput[]
    connectOrCreate?: FavoriteCreateOrConnectWithoutUserInput | FavoriteCreateOrConnectWithoutUserInput[]
    createMany?: FavoriteCreateManyUserInputEnvelope
    connect?: FavoriteWhereUniqueInput | FavoriteWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type AddressUpdateManyWithoutUserNestedInput = {
    create?: XOR<AddressCreateWithoutUserInput, AddressUncheckedCreateWithoutUserInput> | AddressCreateWithoutUserInput[] | AddressUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AddressCreateOrConnectWithoutUserInput | AddressCreateOrConnectWithoutUserInput[]
    upsert?: AddressUpsertWithWhereUniqueWithoutUserInput | AddressUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AddressCreateManyUserInputEnvelope
    set?: AddressWhereUniqueInput | AddressWhereUniqueInput[]
    disconnect?: AddressWhereUniqueInput | AddressWhereUniqueInput[]
    delete?: AddressWhereUniqueInput | AddressWhereUniqueInput[]
    connect?: AddressWhereUniqueInput | AddressWhereUniqueInput[]
    update?: AddressUpdateWithWhereUniqueWithoutUserInput | AddressUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AddressUpdateManyWithWhereWithoutUserInput | AddressUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AddressScalarWhereInput | AddressScalarWhereInput[]
  }

  export type OrderUpdateManyWithoutUserNestedInput = {
    create?: XOR<OrderCreateWithoutUserInput, OrderUncheckedCreateWithoutUserInput> | OrderCreateWithoutUserInput[] | OrderUncheckedCreateWithoutUserInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutUserInput | OrderCreateOrConnectWithoutUserInput[]
    upsert?: OrderUpsertWithWhereUniqueWithoutUserInput | OrderUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: OrderCreateManyUserInputEnvelope
    set?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    disconnect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    delete?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    update?: OrderUpdateWithWhereUniqueWithoutUserInput | OrderUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: OrderUpdateManyWithWhereWithoutUserInput | OrderUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: OrderScalarWhereInput | OrderScalarWhereInput[]
  }

  export type CartProductUpdateManyWithoutUserNestedInput = {
    create?: XOR<CartProductCreateWithoutUserInput, CartProductUncheckedCreateWithoutUserInput> | CartProductCreateWithoutUserInput[] | CartProductUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CartProductCreateOrConnectWithoutUserInput | CartProductCreateOrConnectWithoutUserInput[]
    upsert?: CartProductUpsertWithWhereUniqueWithoutUserInput | CartProductUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: CartProductCreateManyUserInputEnvelope
    set?: CartProductWhereUniqueInput | CartProductWhereUniqueInput[]
    disconnect?: CartProductWhereUniqueInput | CartProductWhereUniqueInput[]
    delete?: CartProductWhereUniqueInput | CartProductWhereUniqueInput[]
    connect?: CartProductWhereUniqueInput | CartProductWhereUniqueInput[]
    update?: CartProductUpdateWithWhereUniqueWithoutUserInput | CartProductUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: CartProductUpdateManyWithWhereWithoutUserInput | CartProductUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: CartProductScalarWhereInput | CartProductScalarWhereInput[]
  }

  export type FavoriteUpdateManyWithoutUserNestedInput = {
    create?: XOR<FavoriteCreateWithoutUserInput, FavoriteUncheckedCreateWithoutUserInput> | FavoriteCreateWithoutUserInput[] | FavoriteUncheckedCreateWithoutUserInput[]
    connectOrCreate?: FavoriteCreateOrConnectWithoutUserInput | FavoriteCreateOrConnectWithoutUserInput[]
    upsert?: FavoriteUpsertWithWhereUniqueWithoutUserInput | FavoriteUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: FavoriteCreateManyUserInputEnvelope
    set?: FavoriteWhereUniqueInput | FavoriteWhereUniqueInput[]
    disconnect?: FavoriteWhereUniqueInput | FavoriteWhereUniqueInput[]
    delete?: FavoriteWhereUniqueInput | FavoriteWhereUniqueInput[]
    connect?: FavoriteWhereUniqueInput | FavoriteWhereUniqueInput[]
    update?: FavoriteUpdateWithWhereUniqueWithoutUserInput | FavoriteUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: FavoriteUpdateManyWithWhereWithoutUserInput | FavoriteUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: FavoriteScalarWhereInput | FavoriteScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type AddressUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<AddressCreateWithoutUserInput, AddressUncheckedCreateWithoutUserInput> | AddressCreateWithoutUserInput[] | AddressUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AddressCreateOrConnectWithoutUserInput | AddressCreateOrConnectWithoutUserInput[]
    upsert?: AddressUpsertWithWhereUniqueWithoutUserInput | AddressUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AddressCreateManyUserInputEnvelope
    set?: AddressWhereUniqueInput | AddressWhereUniqueInput[]
    disconnect?: AddressWhereUniqueInput | AddressWhereUniqueInput[]
    delete?: AddressWhereUniqueInput | AddressWhereUniqueInput[]
    connect?: AddressWhereUniqueInput | AddressWhereUniqueInput[]
    update?: AddressUpdateWithWhereUniqueWithoutUserInput | AddressUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AddressUpdateManyWithWhereWithoutUserInput | AddressUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AddressScalarWhereInput | AddressScalarWhereInput[]
  }

  export type OrderUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<OrderCreateWithoutUserInput, OrderUncheckedCreateWithoutUserInput> | OrderCreateWithoutUserInput[] | OrderUncheckedCreateWithoutUserInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutUserInput | OrderCreateOrConnectWithoutUserInput[]
    upsert?: OrderUpsertWithWhereUniqueWithoutUserInput | OrderUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: OrderCreateManyUserInputEnvelope
    set?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    disconnect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    delete?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    update?: OrderUpdateWithWhereUniqueWithoutUserInput | OrderUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: OrderUpdateManyWithWhereWithoutUserInput | OrderUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: OrderScalarWhereInput | OrderScalarWhereInput[]
  }

  export type CartProductUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<CartProductCreateWithoutUserInput, CartProductUncheckedCreateWithoutUserInput> | CartProductCreateWithoutUserInput[] | CartProductUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CartProductCreateOrConnectWithoutUserInput | CartProductCreateOrConnectWithoutUserInput[]
    upsert?: CartProductUpsertWithWhereUniqueWithoutUserInput | CartProductUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: CartProductCreateManyUserInputEnvelope
    set?: CartProductWhereUniqueInput | CartProductWhereUniqueInput[]
    disconnect?: CartProductWhereUniqueInput | CartProductWhereUniqueInput[]
    delete?: CartProductWhereUniqueInput | CartProductWhereUniqueInput[]
    connect?: CartProductWhereUniqueInput | CartProductWhereUniqueInput[]
    update?: CartProductUpdateWithWhereUniqueWithoutUserInput | CartProductUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: CartProductUpdateManyWithWhereWithoutUserInput | CartProductUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: CartProductScalarWhereInput | CartProductScalarWhereInput[]
  }

  export type FavoriteUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<FavoriteCreateWithoutUserInput, FavoriteUncheckedCreateWithoutUserInput> | FavoriteCreateWithoutUserInput[] | FavoriteUncheckedCreateWithoutUserInput[]
    connectOrCreate?: FavoriteCreateOrConnectWithoutUserInput | FavoriteCreateOrConnectWithoutUserInput[]
    upsert?: FavoriteUpsertWithWhereUniqueWithoutUserInput | FavoriteUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: FavoriteCreateManyUserInputEnvelope
    set?: FavoriteWhereUniqueInput | FavoriteWhereUniqueInput[]
    disconnect?: FavoriteWhereUniqueInput | FavoriteWhereUniqueInput[]
    delete?: FavoriteWhereUniqueInput | FavoriteWhereUniqueInput[]
    connect?: FavoriteWhereUniqueInput | FavoriteWhereUniqueInput[]
    update?: FavoriteUpdateWithWhereUniqueWithoutUserInput | FavoriteUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: FavoriteUpdateManyWithWhereWithoutUserInput | FavoriteUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: FavoriteScalarWhereInput | FavoriteScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutAddressesInput = {
    create?: XOR<UserCreateWithoutAddressesInput, UserUncheckedCreateWithoutAddressesInput>
    connectOrCreate?: UserCreateOrConnectWithoutAddressesInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutAddressesNestedInput = {
    create?: XOR<UserCreateWithoutAddressesInput, UserUncheckedCreateWithoutAddressesInput>
    connectOrCreate?: UserCreateOrConnectWithoutAddressesInput
    upsert?: UserUpsertWithoutAddressesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAddressesInput, UserUpdateWithoutAddressesInput>, UserUncheckedUpdateWithoutAddressesInput>
  }

  export type ProductCreatesizeInput = {
    set: string[]
  }

  export type ProductCreateimgInput = {
    set: string[]
  }

  export type ProductUpdatesizeInput = {
    set?: string[]
    push?: string | string[]
  }

  export type ProductUpdateimgInput = {
    set?: string[]
    push?: string | string[]
  }

  export type CartProductCreateimgInput = {
    set: string[]
  }

  export type UserCreateNestedOneWithoutCartProductsInput = {
    create?: XOR<UserCreateWithoutCartProductsInput, UserUncheckedCreateWithoutCartProductsInput>
    connectOrCreate?: UserCreateOrConnectWithoutCartProductsInput
    connect?: UserWhereUniqueInput
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type CartProductUpdateimgInput = {
    set?: string[]
    push?: string | string[]
  }

  export type UserUpdateOneRequiredWithoutCartProductsNestedInput = {
    create?: XOR<UserCreateWithoutCartProductsInput, UserUncheckedCreateWithoutCartProductsInput>
    connectOrCreate?: UserCreateOrConnectWithoutCartProductsInput
    upsert?: UserUpsertWithoutCartProductsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutCartProductsInput, UserUpdateWithoutCartProductsInput>, UserUncheckedUpdateWithoutCartProductsInput>
  }

  export type FavoriteCreatesizeInput = {
    set: string[]
  }

  export type FavoriteCreateimgInput = {
    set: string[]
  }

  export type UserCreateNestedOneWithoutFavoriteItemsInput = {
    create?: XOR<UserCreateWithoutFavoriteItemsInput, UserUncheckedCreateWithoutFavoriteItemsInput>
    connectOrCreate?: UserCreateOrConnectWithoutFavoriteItemsInput
    connect?: UserWhereUniqueInput
  }

  export type FavoriteUpdatesizeInput = {
    set?: string[]
    push?: string | string[]
  }

  export type FavoriteUpdateimgInput = {
    set?: string[]
    push?: string | string[]
  }

  export type UserUpdateOneRequiredWithoutFavoriteItemsNestedInput = {
    create?: XOR<UserCreateWithoutFavoriteItemsInput, UserUncheckedCreateWithoutFavoriteItemsInput>
    connectOrCreate?: UserCreateOrConnectWithoutFavoriteItemsInput
    upsert?: UserUpsertWithoutFavoriteItemsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutFavoriteItemsInput, UserUpdateWithoutFavoriteItemsInput>, UserUncheckedUpdateWithoutFavoriteItemsInput>
  }

  export type UserCreateNestedOneWithoutOrdersInput = {
    create?: XOR<UserCreateWithoutOrdersInput, UserUncheckedCreateWithoutOrdersInput>
    connectOrCreate?: UserCreateOrConnectWithoutOrdersInput
    connect?: UserWhereUniqueInput
  }

  export type PaymentDetailCreateNestedManyWithoutOrderInput = {
    create?: XOR<PaymentDetailCreateWithoutOrderInput, PaymentDetailUncheckedCreateWithoutOrderInput> | PaymentDetailCreateWithoutOrderInput[] | PaymentDetailUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: PaymentDetailCreateOrConnectWithoutOrderInput | PaymentDetailCreateOrConnectWithoutOrderInput[]
    createMany?: PaymentDetailCreateManyOrderInputEnvelope
    connect?: PaymentDetailWhereUniqueInput | PaymentDetailWhereUniqueInput[]
  }

  export type ShippingDetailCreateNestedManyWithoutOrderInput = {
    create?: XOR<ShippingDetailCreateWithoutOrderInput, ShippingDetailUncheckedCreateWithoutOrderInput> | ShippingDetailCreateWithoutOrderInput[] | ShippingDetailUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: ShippingDetailCreateOrConnectWithoutOrderInput | ShippingDetailCreateOrConnectWithoutOrderInput[]
    createMany?: ShippingDetailCreateManyOrderInputEnvelope
    connect?: ShippingDetailWhereUniqueInput | ShippingDetailWhereUniqueInput[]
  }

  export type OrderedProductCreateNestedManyWithoutOrderInput = {
    create?: XOR<OrderedProductCreateWithoutOrderInput, OrderedProductUncheckedCreateWithoutOrderInput> | OrderedProductCreateWithoutOrderInput[] | OrderedProductUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: OrderedProductCreateOrConnectWithoutOrderInput | OrderedProductCreateOrConnectWithoutOrderInput[]
    createMany?: OrderedProductCreateManyOrderInputEnvelope
    connect?: OrderedProductWhereUniqueInput | OrderedProductWhereUniqueInput[]
  }

  export type PaymentDetailUncheckedCreateNestedManyWithoutOrderInput = {
    create?: XOR<PaymentDetailCreateWithoutOrderInput, PaymentDetailUncheckedCreateWithoutOrderInput> | PaymentDetailCreateWithoutOrderInput[] | PaymentDetailUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: PaymentDetailCreateOrConnectWithoutOrderInput | PaymentDetailCreateOrConnectWithoutOrderInput[]
    createMany?: PaymentDetailCreateManyOrderInputEnvelope
    connect?: PaymentDetailWhereUniqueInput | PaymentDetailWhereUniqueInput[]
  }

  export type ShippingDetailUncheckedCreateNestedManyWithoutOrderInput = {
    create?: XOR<ShippingDetailCreateWithoutOrderInput, ShippingDetailUncheckedCreateWithoutOrderInput> | ShippingDetailCreateWithoutOrderInput[] | ShippingDetailUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: ShippingDetailCreateOrConnectWithoutOrderInput | ShippingDetailCreateOrConnectWithoutOrderInput[]
    createMany?: ShippingDetailCreateManyOrderInputEnvelope
    connect?: ShippingDetailWhereUniqueInput | ShippingDetailWhereUniqueInput[]
  }

  export type OrderedProductUncheckedCreateNestedManyWithoutOrderInput = {
    create?: XOR<OrderedProductCreateWithoutOrderInput, OrderedProductUncheckedCreateWithoutOrderInput> | OrderedProductCreateWithoutOrderInput[] | OrderedProductUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: OrderedProductCreateOrConnectWithoutOrderInput | OrderedProductCreateOrConnectWithoutOrderInput[]
    createMany?: OrderedProductCreateManyOrderInputEnvelope
    connect?: OrderedProductWhereUniqueInput | OrderedProductWhereUniqueInput[]
  }

  export type UserUpdateOneRequiredWithoutOrdersNestedInput = {
    create?: XOR<UserCreateWithoutOrdersInput, UserUncheckedCreateWithoutOrdersInput>
    connectOrCreate?: UserCreateOrConnectWithoutOrdersInput
    upsert?: UserUpsertWithoutOrdersInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutOrdersInput, UserUpdateWithoutOrdersInput>, UserUncheckedUpdateWithoutOrdersInput>
  }

  export type PaymentDetailUpdateManyWithoutOrderNestedInput = {
    create?: XOR<PaymentDetailCreateWithoutOrderInput, PaymentDetailUncheckedCreateWithoutOrderInput> | PaymentDetailCreateWithoutOrderInput[] | PaymentDetailUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: PaymentDetailCreateOrConnectWithoutOrderInput | PaymentDetailCreateOrConnectWithoutOrderInput[]
    upsert?: PaymentDetailUpsertWithWhereUniqueWithoutOrderInput | PaymentDetailUpsertWithWhereUniqueWithoutOrderInput[]
    createMany?: PaymentDetailCreateManyOrderInputEnvelope
    set?: PaymentDetailWhereUniqueInput | PaymentDetailWhereUniqueInput[]
    disconnect?: PaymentDetailWhereUniqueInput | PaymentDetailWhereUniqueInput[]
    delete?: PaymentDetailWhereUniqueInput | PaymentDetailWhereUniqueInput[]
    connect?: PaymentDetailWhereUniqueInput | PaymentDetailWhereUniqueInput[]
    update?: PaymentDetailUpdateWithWhereUniqueWithoutOrderInput | PaymentDetailUpdateWithWhereUniqueWithoutOrderInput[]
    updateMany?: PaymentDetailUpdateManyWithWhereWithoutOrderInput | PaymentDetailUpdateManyWithWhereWithoutOrderInput[]
    deleteMany?: PaymentDetailScalarWhereInput | PaymentDetailScalarWhereInput[]
  }

  export type ShippingDetailUpdateManyWithoutOrderNestedInput = {
    create?: XOR<ShippingDetailCreateWithoutOrderInput, ShippingDetailUncheckedCreateWithoutOrderInput> | ShippingDetailCreateWithoutOrderInput[] | ShippingDetailUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: ShippingDetailCreateOrConnectWithoutOrderInput | ShippingDetailCreateOrConnectWithoutOrderInput[]
    upsert?: ShippingDetailUpsertWithWhereUniqueWithoutOrderInput | ShippingDetailUpsertWithWhereUniqueWithoutOrderInput[]
    createMany?: ShippingDetailCreateManyOrderInputEnvelope
    set?: ShippingDetailWhereUniqueInput | ShippingDetailWhereUniqueInput[]
    disconnect?: ShippingDetailWhereUniqueInput | ShippingDetailWhereUniqueInput[]
    delete?: ShippingDetailWhereUniqueInput | ShippingDetailWhereUniqueInput[]
    connect?: ShippingDetailWhereUniqueInput | ShippingDetailWhereUniqueInput[]
    update?: ShippingDetailUpdateWithWhereUniqueWithoutOrderInput | ShippingDetailUpdateWithWhereUniqueWithoutOrderInput[]
    updateMany?: ShippingDetailUpdateManyWithWhereWithoutOrderInput | ShippingDetailUpdateManyWithWhereWithoutOrderInput[]
    deleteMany?: ShippingDetailScalarWhereInput | ShippingDetailScalarWhereInput[]
  }

  export type OrderedProductUpdateManyWithoutOrderNestedInput = {
    create?: XOR<OrderedProductCreateWithoutOrderInput, OrderedProductUncheckedCreateWithoutOrderInput> | OrderedProductCreateWithoutOrderInput[] | OrderedProductUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: OrderedProductCreateOrConnectWithoutOrderInput | OrderedProductCreateOrConnectWithoutOrderInput[]
    upsert?: OrderedProductUpsertWithWhereUniqueWithoutOrderInput | OrderedProductUpsertWithWhereUniqueWithoutOrderInput[]
    createMany?: OrderedProductCreateManyOrderInputEnvelope
    set?: OrderedProductWhereUniqueInput | OrderedProductWhereUniqueInput[]
    disconnect?: OrderedProductWhereUniqueInput | OrderedProductWhereUniqueInput[]
    delete?: OrderedProductWhereUniqueInput | OrderedProductWhereUniqueInput[]
    connect?: OrderedProductWhereUniqueInput | OrderedProductWhereUniqueInput[]
    update?: OrderedProductUpdateWithWhereUniqueWithoutOrderInput | OrderedProductUpdateWithWhereUniqueWithoutOrderInput[]
    updateMany?: OrderedProductUpdateManyWithWhereWithoutOrderInput | OrderedProductUpdateManyWithWhereWithoutOrderInput[]
    deleteMany?: OrderedProductScalarWhereInput | OrderedProductScalarWhereInput[]
  }

  export type PaymentDetailUncheckedUpdateManyWithoutOrderNestedInput = {
    create?: XOR<PaymentDetailCreateWithoutOrderInput, PaymentDetailUncheckedCreateWithoutOrderInput> | PaymentDetailCreateWithoutOrderInput[] | PaymentDetailUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: PaymentDetailCreateOrConnectWithoutOrderInput | PaymentDetailCreateOrConnectWithoutOrderInput[]
    upsert?: PaymentDetailUpsertWithWhereUniqueWithoutOrderInput | PaymentDetailUpsertWithWhereUniqueWithoutOrderInput[]
    createMany?: PaymentDetailCreateManyOrderInputEnvelope
    set?: PaymentDetailWhereUniqueInput | PaymentDetailWhereUniqueInput[]
    disconnect?: PaymentDetailWhereUniqueInput | PaymentDetailWhereUniqueInput[]
    delete?: PaymentDetailWhereUniqueInput | PaymentDetailWhereUniqueInput[]
    connect?: PaymentDetailWhereUniqueInput | PaymentDetailWhereUniqueInput[]
    update?: PaymentDetailUpdateWithWhereUniqueWithoutOrderInput | PaymentDetailUpdateWithWhereUniqueWithoutOrderInput[]
    updateMany?: PaymentDetailUpdateManyWithWhereWithoutOrderInput | PaymentDetailUpdateManyWithWhereWithoutOrderInput[]
    deleteMany?: PaymentDetailScalarWhereInput | PaymentDetailScalarWhereInput[]
  }

  export type ShippingDetailUncheckedUpdateManyWithoutOrderNestedInput = {
    create?: XOR<ShippingDetailCreateWithoutOrderInput, ShippingDetailUncheckedCreateWithoutOrderInput> | ShippingDetailCreateWithoutOrderInput[] | ShippingDetailUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: ShippingDetailCreateOrConnectWithoutOrderInput | ShippingDetailCreateOrConnectWithoutOrderInput[]
    upsert?: ShippingDetailUpsertWithWhereUniqueWithoutOrderInput | ShippingDetailUpsertWithWhereUniqueWithoutOrderInput[]
    createMany?: ShippingDetailCreateManyOrderInputEnvelope
    set?: ShippingDetailWhereUniqueInput | ShippingDetailWhereUniqueInput[]
    disconnect?: ShippingDetailWhereUniqueInput | ShippingDetailWhereUniqueInput[]
    delete?: ShippingDetailWhereUniqueInput | ShippingDetailWhereUniqueInput[]
    connect?: ShippingDetailWhereUniqueInput | ShippingDetailWhereUniqueInput[]
    update?: ShippingDetailUpdateWithWhereUniqueWithoutOrderInput | ShippingDetailUpdateWithWhereUniqueWithoutOrderInput[]
    updateMany?: ShippingDetailUpdateManyWithWhereWithoutOrderInput | ShippingDetailUpdateManyWithWhereWithoutOrderInput[]
    deleteMany?: ShippingDetailScalarWhereInput | ShippingDetailScalarWhereInput[]
  }

  export type OrderedProductUncheckedUpdateManyWithoutOrderNestedInput = {
    create?: XOR<OrderedProductCreateWithoutOrderInput, OrderedProductUncheckedCreateWithoutOrderInput> | OrderedProductCreateWithoutOrderInput[] | OrderedProductUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: OrderedProductCreateOrConnectWithoutOrderInput | OrderedProductCreateOrConnectWithoutOrderInput[]
    upsert?: OrderedProductUpsertWithWhereUniqueWithoutOrderInput | OrderedProductUpsertWithWhereUniqueWithoutOrderInput[]
    createMany?: OrderedProductCreateManyOrderInputEnvelope
    set?: OrderedProductWhereUniqueInput | OrderedProductWhereUniqueInput[]
    disconnect?: OrderedProductWhereUniqueInput | OrderedProductWhereUniqueInput[]
    delete?: OrderedProductWhereUniqueInput | OrderedProductWhereUniqueInput[]
    connect?: OrderedProductWhereUniqueInput | OrderedProductWhereUniqueInput[]
    update?: OrderedProductUpdateWithWhereUniqueWithoutOrderInput | OrderedProductUpdateWithWhereUniqueWithoutOrderInput[]
    updateMany?: OrderedProductUpdateManyWithWhereWithoutOrderInput | OrderedProductUpdateManyWithWhereWithoutOrderInput[]
    deleteMany?: OrderedProductScalarWhereInput | OrderedProductScalarWhereInput[]
  }

  export type OrderedProductCreateimgInput = {
    set: string[]
  }

  export type OrderCreateNestedOneWithoutOrderedProductsInput = {
    create?: XOR<OrderCreateWithoutOrderedProductsInput, OrderUncheckedCreateWithoutOrderedProductsInput>
    connectOrCreate?: OrderCreateOrConnectWithoutOrderedProductsInput
    connect?: OrderWhereUniqueInput
  }

  export type OrderedProductUpdateimgInput = {
    set?: string[]
    push?: string | string[]
  }

  export type OrderUpdateOneWithoutOrderedProductsNestedInput = {
    create?: XOR<OrderCreateWithoutOrderedProductsInput, OrderUncheckedCreateWithoutOrderedProductsInput>
    connectOrCreate?: OrderCreateOrConnectWithoutOrderedProductsInput
    upsert?: OrderUpsertWithoutOrderedProductsInput
    disconnect?: OrderWhereInput | boolean
    delete?: OrderWhereInput | boolean
    connect?: OrderWhereUniqueInput
    update?: XOR<XOR<OrderUpdateToOneWithWhereWithoutOrderedProductsInput, OrderUpdateWithoutOrderedProductsInput>, OrderUncheckedUpdateWithoutOrderedProductsInput>
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type OrderCreateNestedOneWithoutPaymentDetailsInput = {
    create?: XOR<OrderCreateWithoutPaymentDetailsInput, OrderUncheckedCreateWithoutPaymentDetailsInput>
    connectOrCreate?: OrderCreateOrConnectWithoutPaymentDetailsInput
    connect?: OrderWhereUniqueInput
  }

  export type OrderUpdateOneWithoutPaymentDetailsNestedInput = {
    create?: XOR<OrderCreateWithoutPaymentDetailsInput, OrderUncheckedCreateWithoutPaymentDetailsInput>
    connectOrCreate?: OrderCreateOrConnectWithoutPaymentDetailsInput
    upsert?: OrderUpsertWithoutPaymentDetailsInput
    disconnect?: OrderWhereInput | boolean
    delete?: OrderWhereInput | boolean
    connect?: OrderWhereUniqueInput
    update?: XOR<XOR<OrderUpdateToOneWithWhereWithoutPaymentDetailsInput, OrderUpdateWithoutPaymentDetailsInput>, OrderUncheckedUpdateWithoutPaymentDetailsInput>
  }

  export type OrderCreateNestedOneWithoutShippingDetailsInput = {
    create?: XOR<OrderCreateWithoutShippingDetailsInput, OrderUncheckedCreateWithoutShippingDetailsInput>
    connectOrCreate?: OrderCreateOrConnectWithoutShippingDetailsInput
    connect?: OrderWhereUniqueInput
  }

  export type OrderUpdateOneWithoutShippingDetailsNestedInput = {
    create?: XOR<OrderCreateWithoutShippingDetailsInput, OrderUncheckedCreateWithoutShippingDetailsInput>
    connectOrCreate?: OrderCreateOrConnectWithoutShippingDetailsInput
    upsert?: OrderUpsertWithoutShippingDetailsInput
    disconnect?: OrderWhereInput | boolean
    delete?: OrderWhereInput | boolean
    connect?: OrderWhereUniqueInput
    update?: XOR<XOR<OrderUpdateToOneWithWhereWithoutShippingDetailsInput, OrderUpdateWithoutShippingDetailsInput>, OrderUncheckedUpdateWithoutShippingDetailsInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }
  export type NestedJsonFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<NestedJsonFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type AddressCreateWithoutUserInput = {
    street: string
    city: string
    state: string
    zipCode: string
  }

  export type AddressUncheckedCreateWithoutUserInput = {
    id?: number
    street: string
    city: string
    state: string
    zipCode: string
  }

  export type AddressCreateOrConnectWithoutUserInput = {
    where: AddressWhereUniqueInput
    create: XOR<AddressCreateWithoutUserInput, AddressUncheckedCreateWithoutUserInput>
  }

  export type AddressCreateManyUserInputEnvelope = {
    data: AddressCreateManyUserInput | AddressCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type OrderCreateWithoutUserInput = {
    subTotal: number
    quantity: number
    shipping: number
    discount: number
    total: number
    createdAt?: Date | string
    PaymentDetails?: PaymentDetailCreateNestedManyWithoutOrderInput
    ShippingDetails?: ShippingDetailCreateNestedManyWithoutOrderInput
    OrderedProducts?: OrderedProductCreateNestedManyWithoutOrderInput
  }

  export type OrderUncheckedCreateWithoutUserInput = {
    id?: number
    subTotal: number
    quantity: number
    shipping: number
    discount: number
    total: number
    createdAt?: Date | string
    PaymentDetails?: PaymentDetailUncheckedCreateNestedManyWithoutOrderInput
    ShippingDetails?: ShippingDetailUncheckedCreateNestedManyWithoutOrderInput
    OrderedProducts?: OrderedProductUncheckedCreateNestedManyWithoutOrderInput
  }

  export type OrderCreateOrConnectWithoutUserInput = {
    where: OrderWhereUniqueInput
    create: XOR<OrderCreateWithoutUserInput, OrderUncheckedCreateWithoutUserInput>
  }

  export type OrderCreateManyUserInputEnvelope = {
    data: OrderCreateManyUserInput | OrderCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type CartProductCreateWithoutUserInput = {
    id: number
    title: string
    gender: string
    description: string
    category: string
    price: number
    size: string
    color: string
    ratings: JsonNullValueInput | InputJsonValue
    img?: CartProductCreateimgInput | string[]
    quantity: number
  }

  export type CartProductUncheckedCreateWithoutUserInput = {
    cartProductId?: number
    id: number
    title: string
    gender: string
    description: string
    category: string
    price: number
    size: string
    color: string
    ratings: JsonNullValueInput | InputJsonValue
    img?: CartProductCreateimgInput | string[]
    quantity: number
  }

  export type CartProductCreateOrConnectWithoutUserInput = {
    where: CartProductWhereUniqueInput
    create: XOR<CartProductCreateWithoutUserInput, CartProductUncheckedCreateWithoutUserInput>
  }

  export type CartProductCreateManyUserInputEnvelope = {
    data: CartProductCreateManyUserInput | CartProductCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type FavoriteCreateWithoutUserInput = {
    id: number
    title: string
    gender: string
    description: string
    category: string
    price: number
    size?: FavoriteCreatesizeInput | string[]
    color: string
    ratings: JsonNullValueInput | InputJsonValue
    img?: FavoriteCreateimgInput | string[]
    createdAt?: Date | string
  }

  export type FavoriteUncheckedCreateWithoutUserInput = {
    favoriteId?: number
    id: number
    title: string
    gender: string
    description: string
    category: string
    price: number
    size?: FavoriteCreatesizeInput | string[]
    color: string
    ratings: JsonNullValueInput | InputJsonValue
    img?: FavoriteCreateimgInput | string[]
    createdAt?: Date | string
  }

  export type FavoriteCreateOrConnectWithoutUserInput = {
    where: FavoriteWhereUniqueInput
    create: XOR<FavoriteCreateWithoutUserInput, FavoriteUncheckedCreateWithoutUserInput>
  }

  export type FavoriteCreateManyUserInputEnvelope = {
    data: FavoriteCreateManyUserInput | FavoriteCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type AddressUpsertWithWhereUniqueWithoutUserInput = {
    where: AddressWhereUniqueInput
    update: XOR<AddressUpdateWithoutUserInput, AddressUncheckedUpdateWithoutUserInput>
    create: XOR<AddressCreateWithoutUserInput, AddressUncheckedCreateWithoutUserInput>
  }

  export type AddressUpdateWithWhereUniqueWithoutUserInput = {
    where: AddressWhereUniqueInput
    data: XOR<AddressUpdateWithoutUserInput, AddressUncheckedUpdateWithoutUserInput>
  }

  export type AddressUpdateManyWithWhereWithoutUserInput = {
    where: AddressScalarWhereInput
    data: XOR<AddressUpdateManyMutationInput, AddressUncheckedUpdateManyWithoutUserInput>
  }

  export type AddressScalarWhereInput = {
    AND?: AddressScalarWhereInput | AddressScalarWhereInput[]
    OR?: AddressScalarWhereInput[]
    NOT?: AddressScalarWhereInput | AddressScalarWhereInput[]
    id?: IntFilter<"Address"> | number
    street?: StringFilter<"Address"> | string
    city?: StringFilter<"Address"> | string
    state?: StringFilter<"Address"> | string
    zipCode?: StringFilter<"Address"> | string
    userId?: IntFilter<"Address"> | number
  }

  export type OrderUpsertWithWhereUniqueWithoutUserInput = {
    where: OrderWhereUniqueInput
    update: XOR<OrderUpdateWithoutUserInput, OrderUncheckedUpdateWithoutUserInput>
    create: XOR<OrderCreateWithoutUserInput, OrderUncheckedCreateWithoutUserInput>
  }

  export type OrderUpdateWithWhereUniqueWithoutUserInput = {
    where: OrderWhereUniqueInput
    data: XOR<OrderUpdateWithoutUserInput, OrderUncheckedUpdateWithoutUserInput>
  }

  export type OrderUpdateManyWithWhereWithoutUserInput = {
    where: OrderScalarWhereInput
    data: XOR<OrderUpdateManyMutationInput, OrderUncheckedUpdateManyWithoutUserInput>
  }

  export type OrderScalarWhereInput = {
    AND?: OrderScalarWhereInput | OrderScalarWhereInput[]
    OR?: OrderScalarWhereInput[]
    NOT?: OrderScalarWhereInput | OrderScalarWhereInput[]
    id?: IntFilter<"Order"> | number
    subTotal?: FloatFilter<"Order"> | number
    quantity?: IntFilter<"Order"> | number
    shipping?: FloatFilter<"Order"> | number
    discount?: FloatFilter<"Order"> | number
    total?: FloatFilter<"Order"> | number
    userId?: IntFilter<"Order"> | number
    createdAt?: DateTimeFilter<"Order"> | Date | string
  }

  export type CartProductUpsertWithWhereUniqueWithoutUserInput = {
    where: CartProductWhereUniqueInput
    update: XOR<CartProductUpdateWithoutUserInput, CartProductUncheckedUpdateWithoutUserInput>
    create: XOR<CartProductCreateWithoutUserInput, CartProductUncheckedCreateWithoutUserInput>
  }

  export type CartProductUpdateWithWhereUniqueWithoutUserInput = {
    where: CartProductWhereUniqueInput
    data: XOR<CartProductUpdateWithoutUserInput, CartProductUncheckedUpdateWithoutUserInput>
  }

  export type CartProductUpdateManyWithWhereWithoutUserInput = {
    where: CartProductScalarWhereInput
    data: XOR<CartProductUpdateManyMutationInput, CartProductUncheckedUpdateManyWithoutUserInput>
  }

  export type CartProductScalarWhereInput = {
    AND?: CartProductScalarWhereInput | CartProductScalarWhereInput[]
    OR?: CartProductScalarWhereInput[]
    NOT?: CartProductScalarWhereInput | CartProductScalarWhereInput[]
    cartProductId?: IntFilter<"CartProduct"> | number
    id?: IntFilter<"CartProduct"> | number
    title?: StringFilter<"CartProduct"> | string
    gender?: StringFilter<"CartProduct"> | string
    description?: StringFilter<"CartProduct"> | string
    category?: StringFilter<"CartProduct"> | string
    price?: FloatFilter<"CartProduct"> | number
    size?: StringFilter<"CartProduct"> | string
    color?: StringFilter<"CartProduct"> | string
    ratings?: JsonFilter<"CartProduct">
    img?: StringNullableListFilter<"CartProduct">
    quantity?: IntFilter<"CartProduct"> | number
    userId?: IntFilter<"CartProduct"> | number
  }

  export type FavoriteUpsertWithWhereUniqueWithoutUserInput = {
    where: FavoriteWhereUniqueInput
    update: XOR<FavoriteUpdateWithoutUserInput, FavoriteUncheckedUpdateWithoutUserInput>
    create: XOR<FavoriteCreateWithoutUserInput, FavoriteUncheckedCreateWithoutUserInput>
  }

  export type FavoriteUpdateWithWhereUniqueWithoutUserInput = {
    where: FavoriteWhereUniqueInput
    data: XOR<FavoriteUpdateWithoutUserInput, FavoriteUncheckedUpdateWithoutUserInput>
  }

  export type FavoriteUpdateManyWithWhereWithoutUserInput = {
    where: FavoriteScalarWhereInput
    data: XOR<FavoriteUpdateManyMutationInput, FavoriteUncheckedUpdateManyWithoutUserInput>
  }

  export type FavoriteScalarWhereInput = {
    AND?: FavoriteScalarWhereInput | FavoriteScalarWhereInput[]
    OR?: FavoriteScalarWhereInput[]
    NOT?: FavoriteScalarWhereInput | FavoriteScalarWhereInput[]
    favoriteId?: IntFilter<"Favorite"> | number
    id?: IntFilter<"Favorite"> | number
    title?: StringFilter<"Favorite"> | string
    gender?: StringFilter<"Favorite"> | string
    description?: StringFilter<"Favorite"> | string
    category?: StringFilter<"Favorite"> | string
    price?: FloatFilter<"Favorite"> | number
    size?: StringNullableListFilter<"Favorite">
    color?: StringFilter<"Favorite"> | string
    ratings?: JsonFilter<"Favorite">
    img?: StringNullableListFilter<"Favorite">
    userId?: IntFilter<"Favorite"> | number
    createdAt?: DateTimeFilter<"Favorite"> | Date | string
  }

  export type UserCreateWithoutAddressesInput = {
    email: string
    password: string
    firstName?: string | null
    lastName?: string | null
    profilePic?: string | null
    notification?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    isAdmin?: boolean
    orders?: OrderCreateNestedManyWithoutUserInput
    CartProducts?: CartProductCreateNestedManyWithoutUserInput
    favoriteItems?: FavoriteCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutAddressesInput = {
    id?: number
    email: string
    password: string
    firstName?: string | null
    lastName?: string | null
    profilePic?: string | null
    notification?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    isAdmin?: boolean
    orders?: OrderUncheckedCreateNestedManyWithoutUserInput
    CartProducts?: CartProductUncheckedCreateNestedManyWithoutUserInput
    favoriteItems?: FavoriteUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutAddressesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAddressesInput, UserUncheckedCreateWithoutAddressesInput>
  }

  export type UserUpsertWithoutAddressesInput = {
    update: XOR<UserUpdateWithoutAddressesInput, UserUncheckedUpdateWithoutAddressesInput>
    create: XOR<UserCreateWithoutAddressesInput, UserUncheckedCreateWithoutAddressesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAddressesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAddressesInput, UserUncheckedUpdateWithoutAddressesInput>
  }

  export type UserUpdateWithoutAddressesInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    profilePic?: NullableStringFieldUpdateOperationsInput | string | null
    notification?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    orders?: OrderUpdateManyWithoutUserNestedInput
    CartProducts?: CartProductUpdateManyWithoutUserNestedInput
    favoriteItems?: FavoriteUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutAddressesInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    profilePic?: NullableStringFieldUpdateOperationsInput | string | null
    notification?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    orders?: OrderUncheckedUpdateManyWithoutUserNestedInput
    CartProducts?: CartProductUncheckedUpdateManyWithoutUserNestedInput
    favoriteItems?: FavoriteUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutCartProductsInput = {
    email: string
    password: string
    firstName?: string | null
    lastName?: string | null
    profilePic?: string | null
    notification?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    isAdmin?: boolean
    addresses?: AddressCreateNestedManyWithoutUserInput
    orders?: OrderCreateNestedManyWithoutUserInput
    favoriteItems?: FavoriteCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutCartProductsInput = {
    id?: number
    email: string
    password: string
    firstName?: string | null
    lastName?: string | null
    profilePic?: string | null
    notification?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    isAdmin?: boolean
    addresses?: AddressUncheckedCreateNestedManyWithoutUserInput
    orders?: OrderUncheckedCreateNestedManyWithoutUserInput
    favoriteItems?: FavoriteUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutCartProductsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCartProductsInput, UserUncheckedCreateWithoutCartProductsInput>
  }

  export type UserUpsertWithoutCartProductsInput = {
    update: XOR<UserUpdateWithoutCartProductsInput, UserUncheckedUpdateWithoutCartProductsInput>
    create: XOR<UserCreateWithoutCartProductsInput, UserUncheckedCreateWithoutCartProductsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutCartProductsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutCartProductsInput, UserUncheckedUpdateWithoutCartProductsInput>
  }

  export type UserUpdateWithoutCartProductsInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    profilePic?: NullableStringFieldUpdateOperationsInput | string | null
    notification?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    addresses?: AddressUpdateManyWithoutUserNestedInput
    orders?: OrderUpdateManyWithoutUserNestedInput
    favoriteItems?: FavoriteUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutCartProductsInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    profilePic?: NullableStringFieldUpdateOperationsInput | string | null
    notification?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    addresses?: AddressUncheckedUpdateManyWithoutUserNestedInput
    orders?: OrderUncheckedUpdateManyWithoutUserNestedInput
    favoriteItems?: FavoriteUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutFavoriteItemsInput = {
    email: string
    password: string
    firstName?: string | null
    lastName?: string | null
    profilePic?: string | null
    notification?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    isAdmin?: boolean
    addresses?: AddressCreateNestedManyWithoutUserInput
    orders?: OrderCreateNestedManyWithoutUserInput
    CartProducts?: CartProductCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutFavoriteItemsInput = {
    id?: number
    email: string
    password: string
    firstName?: string | null
    lastName?: string | null
    profilePic?: string | null
    notification?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    isAdmin?: boolean
    addresses?: AddressUncheckedCreateNestedManyWithoutUserInput
    orders?: OrderUncheckedCreateNestedManyWithoutUserInput
    CartProducts?: CartProductUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutFavoriteItemsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutFavoriteItemsInput, UserUncheckedCreateWithoutFavoriteItemsInput>
  }

  export type UserUpsertWithoutFavoriteItemsInput = {
    update: XOR<UserUpdateWithoutFavoriteItemsInput, UserUncheckedUpdateWithoutFavoriteItemsInput>
    create: XOR<UserCreateWithoutFavoriteItemsInput, UserUncheckedCreateWithoutFavoriteItemsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutFavoriteItemsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutFavoriteItemsInput, UserUncheckedUpdateWithoutFavoriteItemsInput>
  }

  export type UserUpdateWithoutFavoriteItemsInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    profilePic?: NullableStringFieldUpdateOperationsInput | string | null
    notification?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    addresses?: AddressUpdateManyWithoutUserNestedInput
    orders?: OrderUpdateManyWithoutUserNestedInput
    CartProducts?: CartProductUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutFavoriteItemsInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    profilePic?: NullableStringFieldUpdateOperationsInput | string | null
    notification?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    addresses?: AddressUncheckedUpdateManyWithoutUserNestedInput
    orders?: OrderUncheckedUpdateManyWithoutUserNestedInput
    CartProducts?: CartProductUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutOrdersInput = {
    email: string
    password: string
    firstName?: string | null
    lastName?: string | null
    profilePic?: string | null
    notification?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    isAdmin?: boolean
    addresses?: AddressCreateNestedManyWithoutUserInput
    CartProducts?: CartProductCreateNestedManyWithoutUserInput
    favoriteItems?: FavoriteCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutOrdersInput = {
    id?: number
    email: string
    password: string
    firstName?: string | null
    lastName?: string | null
    profilePic?: string | null
    notification?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    isAdmin?: boolean
    addresses?: AddressUncheckedCreateNestedManyWithoutUserInput
    CartProducts?: CartProductUncheckedCreateNestedManyWithoutUserInput
    favoriteItems?: FavoriteUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutOrdersInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutOrdersInput, UserUncheckedCreateWithoutOrdersInput>
  }

  export type PaymentDetailCreateWithoutOrderInput = {
    razorpayOrderId: string
    razorpayPaymentId: string
  }

  export type PaymentDetailUncheckedCreateWithoutOrderInput = {
    id?: number
    razorpayOrderId: string
    razorpayPaymentId: string
  }

  export type PaymentDetailCreateOrConnectWithoutOrderInput = {
    where: PaymentDetailWhereUniqueInput
    create: XOR<PaymentDetailCreateWithoutOrderInput, PaymentDetailUncheckedCreateWithoutOrderInput>
  }

  export type PaymentDetailCreateManyOrderInputEnvelope = {
    data: PaymentDetailCreateManyOrderInput | PaymentDetailCreateManyOrderInput[]
    skipDuplicates?: boolean
  }

  export type ShippingDetailCreateWithoutOrderInput = {
    firstName: string
    lastName: string
    addressLine1: string
    addressLine2?: string | null
    locality: string
    pinCode: string
    state: string
    country: string
    email: string
    mobile: string
  }

  export type ShippingDetailUncheckedCreateWithoutOrderInput = {
    id?: number
    firstName: string
    lastName: string
    addressLine1: string
    addressLine2?: string | null
    locality: string
    pinCode: string
    state: string
    country: string
    email: string
    mobile: string
  }

  export type ShippingDetailCreateOrConnectWithoutOrderInput = {
    where: ShippingDetailWhereUniqueInput
    create: XOR<ShippingDetailCreateWithoutOrderInput, ShippingDetailUncheckedCreateWithoutOrderInput>
  }

  export type ShippingDetailCreateManyOrderInputEnvelope = {
    data: ShippingDetailCreateManyOrderInput | ShippingDetailCreateManyOrderInput[]
    skipDuplicates?: boolean
  }

  export type OrderedProductCreateWithoutOrderInput = {
    id: number
    title: string
    gender: string
    description: string
    category: string
    price: number
    size: string
    color: string
    ratings: JsonNullValueInput | InputJsonValue
    img?: OrderedProductCreateimgInput | string[]
    quantity: number
  }

  export type OrderedProductUncheckedCreateWithoutOrderInput = {
    OrderedProductId?: number
    id: number
    title: string
    gender: string
    description: string
    category: string
    price: number
    size: string
    color: string
    ratings: JsonNullValueInput | InputJsonValue
    img?: OrderedProductCreateimgInput | string[]
    quantity: number
  }

  export type OrderedProductCreateOrConnectWithoutOrderInput = {
    where: OrderedProductWhereUniqueInput
    create: XOR<OrderedProductCreateWithoutOrderInput, OrderedProductUncheckedCreateWithoutOrderInput>
  }

  export type OrderedProductCreateManyOrderInputEnvelope = {
    data: OrderedProductCreateManyOrderInput | OrderedProductCreateManyOrderInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutOrdersInput = {
    update: XOR<UserUpdateWithoutOrdersInput, UserUncheckedUpdateWithoutOrdersInput>
    create: XOR<UserCreateWithoutOrdersInput, UserUncheckedCreateWithoutOrdersInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutOrdersInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutOrdersInput, UserUncheckedUpdateWithoutOrdersInput>
  }

  export type UserUpdateWithoutOrdersInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    profilePic?: NullableStringFieldUpdateOperationsInput | string | null
    notification?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    addresses?: AddressUpdateManyWithoutUserNestedInput
    CartProducts?: CartProductUpdateManyWithoutUserNestedInput
    favoriteItems?: FavoriteUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutOrdersInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    profilePic?: NullableStringFieldUpdateOperationsInput | string | null
    notification?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    addresses?: AddressUncheckedUpdateManyWithoutUserNestedInput
    CartProducts?: CartProductUncheckedUpdateManyWithoutUserNestedInput
    favoriteItems?: FavoriteUncheckedUpdateManyWithoutUserNestedInput
  }

  export type PaymentDetailUpsertWithWhereUniqueWithoutOrderInput = {
    where: PaymentDetailWhereUniqueInput
    update: XOR<PaymentDetailUpdateWithoutOrderInput, PaymentDetailUncheckedUpdateWithoutOrderInput>
    create: XOR<PaymentDetailCreateWithoutOrderInput, PaymentDetailUncheckedCreateWithoutOrderInput>
  }

  export type PaymentDetailUpdateWithWhereUniqueWithoutOrderInput = {
    where: PaymentDetailWhereUniqueInput
    data: XOR<PaymentDetailUpdateWithoutOrderInput, PaymentDetailUncheckedUpdateWithoutOrderInput>
  }

  export type PaymentDetailUpdateManyWithWhereWithoutOrderInput = {
    where: PaymentDetailScalarWhereInput
    data: XOR<PaymentDetailUpdateManyMutationInput, PaymentDetailUncheckedUpdateManyWithoutOrderInput>
  }

  export type PaymentDetailScalarWhereInput = {
    AND?: PaymentDetailScalarWhereInput | PaymentDetailScalarWhereInput[]
    OR?: PaymentDetailScalarWhereInput[]
    NOT?: PaymentDetailScalarWhereInput | PaymentDetailScalarWhereInput[]
    id?: IntFilter<"PaymentDetail"> | number
    razorpayOrderId?: StringFilter<"PaymentDetail"> | string
    razorpayPaymentId?: StringFilter<"PaymentDetail"> | string
    orderId?: IntNullableFilter<"PaymentDetail"> | number | null
  }

  export type ShippingDetailUpsertWithWhereUniqueWithoutOrderInput = {
    where: ShippingDetailWhereUniqueInput
    update: XOR<ShippingDetailUpdateWithoutOrderInput, ShippingDetailUncheckedUpdateWithoutOrderInput>
    create: XOR<ShippingDetailCreateWithoutOrderInput, ShippingDetailUncheckedCreateWithoutOrderInput>
  }

  export type ShippingDetailUpdateWithWhereUniqueWithoutOrderInput = {
    where: ShippingDetailWhereUniqueInput
    data: XOR<ShippingDetailUpdateWithoutOrderInput, ShippingDetailUncheckedUpdateWithoutOrderInput>
  }

  export type ShippingDetailUpdateManyWithWhereWithoutOrderInput = {
    where: ShippingDetailScalarWhereInput
    data: XOR<ShippingDetailUpdateManyMutationInput, ShippingDetailUncheckedUpdateManyWithoutOrderInput>
  }

  export type ShippingDetailScalarWhereInput = {
    AND?: ShippingDetailScalarWhereInput | ShippingDetailScalarWhereInput[]
    OR?: ShippingDetailScalarWhereInput[]
    NOT?: ShippingDetailScalarWhereInput | ShippingDetailScalarWhereInput[]
    id?: IntFilter<"ShippingDetail"> | number
    firstName?: StringFilter<"ShippingDetail"> | string
    lastName?: StringFilter<"ShippingDetail"> | string
    addressLine1?: StringFilter<"ShippingDetail"> | string
    addressLine2?: StringNullableFilter<"ShippingDetail"> | string | null
    locality?: StringFilter<"ShippingDetail"> | string
    pinCode?: StringFilter<"ShippingDetail"> | string
    state?: StringFilter<"ShippingDetail"> | string
    country?: StringFilter<"ShippingDetail"> | string
    email?: StringFilter<"ShippingDetail"> | string
    mobile?: StringFilter<"ShippingDetail"> | string
    orderId?: IntNullableFilter<"ShippingDetail"> | number | null
  }

  export type OrderedProductUpsertWithWhereUniqueWithoutOrderInput = {
    where: OrderedProductWhereUniqueInput
    update: XOR<OrderedProductUpdateWithoutOrderInput, OrderedProductUncheckedUpdateWithoutOrderInput>
    create: XOR<OrderedProductCreateWithoutOrderInput, OrderedProductUncheckedCreateWithoutOrderInput>
  }

  export type OrderedProductUpdateWithWhereUniqueWithoutOrderInput = {
    where: OrderedProductWhereUniqueInput
    data: XOR<OrderedProductUpdateWithoutOrderInput, OrderedProductUncheckedUpdateWithoutOrderInput>
  }

  export type OrderedProductUpdateManyWithWhereWithoutOrderInput = {
    where: OrderedProductScalarWhereInput
    data: XOR<OrderedProductUpdateManyMutationInput, OrderedProductUncheckedUpdateManyWithoutOrderInput>
  }

  export type OrderedProductScalarWhereInput = {
    AND?: OrderedProductScalarWhereInput | OrderedProductScalarWhereInput[]
    OR?: OrderedProductScalarWhereInput[]
    NOT?: OrderedProductScalarWhereInput | OrderedProductScalarWhereInput[]
    OrderedProductId?: IntFilter<"OrderedProduct"> | number
    id?: IntFilter<"OrderedProduct"> | number
    title?: StringFilter<"OrderedProduct"> | string
    gender?: StringFilter<"OrderedProduct"> | string
    description?: StringFilter<"OrderedProduct"> | string
    category?: StringFilter<"OrderedProduct"> | string
    price?: FloatFilter<"OrderedProduct"> | number
    size?: StringFilter<"OrderedProduct"> | string
    color?: StringFilter<"OrderedProduct"> | string
    ratings?: JsonFilter<"OrderedProduct">
    img?: StringNullableListFilter<"OrderedProduct">
    quantity?: IntFilter<"OrderedProduct"> | number
    orderId?: IntNullableFilter<"OrderedProduct"> | number | null
  }

  export type OrderCreateWithoutOrderedProductsInput = {
    subTotal: number
    quantity: number
    shipping: number
    discount: number
    total: number
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutOrdersInput
    PaymentDetails?: PaymentDetailCreateNestedManyWithoutOrderInput
    ShippingDetails?: ShippingDetailCreateNestedManyWithoutOrderInput
  }

  export type OrderUncheckedCreateWithoutOrderedProductsInput = {
    id?: number
    subTotal: number
    quantity: number
    shipping: number
    discount: number
    total: number
    userId: number
    createdAt?: Date | string
    PaymentDetails?: PaymentDetailUncheckedCreateNestedManyWithoutOrderInput
    ShippingDetails?: ShippingDetailUncheckedCreateNestedManyWithoutOrderInput
  }

  export type OrderCreateOrConnectWithoutOrderedProductsInput = {
    where: OrderWhereUniqueInput
    create: XOR<OrderCreateWithoutOrderedProductsInput, OrderUncheckedCreateWithoutOrderedProductsInput>
  }

  export type OrderUpsertWithoutOrderedProductsInput = {
    update: XOR<OrderUpdateWithoutOrderedProductsInput, OrderUncheckedUpdateWithoutOrderedProductsInput>
    create: XOR<OrderCreateWithoutOrderedProductsInput, OrderUncheckedCreateWithoutOrderedProductsInput>
    where?: OrderWhereInput
  }

  export type OrderUpdateToOneWithWhereWithoutOrderedProductsInput = {
    where?: OrderWhereInput
    data: XOR<OrderUpdateWithoutOrderedProductsInput, OrderUncheckedUpdateWithoutOrderedProductsInput>
  }

  export type OrderUpdateWithoutOrderedProductsInput = {
    subTotal?: FloatFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    shipping?: FloatFieldUpdateOperationsInput | number
    discount?: FloatFieldUpdateOperationsInput | number
    total?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutOrdersNestedInput
    PaymentDetails?: PaymentDetailUpdateManyWithoutOrderNestedInput
    ShippingDetails?: ShippingDetailUpdateManyWithoutOrderNestedInput
  }

  export type OrderUncheckedUpdateWithoutOrderedProductsInput = {
    id?: IntFieldUpdateOperationsInput | number
    subTotal?: FloatFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    shipping?: FloatFieldUpdateOperationsInput | number
    discount?: FloatFieldUpdateOperationsInput | number
    total?: FloatFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    PaymentDetails?: PaymentDetailUncheckedUpdateManyWithoutOrderNestedInput
    ShippingDetails?: ShippingDetailUncheckedUpdateManyWithoutOrderNestedInput
  }

  export type OrderCreateWithoutPaymentDetailsInput = {
    subTotal: number
    quantity: number
    shipping: number
    discount: number
    total: number
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutOrdersInput
    ShippingDetails?: ShippingDetailCreateNestedManyWithoutOrderInput
    OrderedProducts?: OrderedProductCreateNestedManyWithoutOrderInput
  }

  export type OrderUncheckedCreateWithoutPaymentDetailsInput = {
    id?: number
    subTotal: number
    quantity: number
    shipping: number
    discount: number
    total: number
    userId: number
    createdAt?: Date | string
    ShippingDetails?: ShippingDetailUncheckedCreateNestedManyWithoutOrderInput
    OrderedProducts?: OrderedProductUncheckedCreateNestedManyWithoutOrderInput
  }

  export type OrderCreateOrConnectWithoutPaymentDetailsInput = {
    where: OrderWhereUniqueInput
    create: XOR<OrderCreateWithoutPaymentDetailsInput, OrderUncheckedCreateWithoutPaymentDetailsInput>
  }

  export type OrderUpsertWithoutPaymentDetailsInput = {
    update: XOR<OrderUpdateWithoutPaymentDetailsInput, OrderUncheckedUpdateWithoutPaymentDetailsInput>
    create: XOR<OrderCreateWithoutPaymentDetailsInput, OrderUncheckedCreateWithoutPaymentDetailsInput>
    where?: OrderWhereInput
  }

  export type OrderUpdateToOneWithWhereWithoutPaymentDetailsInput = {
    where?: OrderWhereInput
    data: XOR<OrderUpdateWithoutPaymentDetailsInput, OrderUncheckedUpdateWithoutPaymentDetailsInput>
  }

  export type OrderUpdateWithoutPaymentDetailsInput = {
    subTotal?: FloatFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    shipping?: FloatFieldUpdateOperationsInput | number
    discount?: FloatFieldUpdateOperationsInput | number
    total?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutOrdersNestedInput
    ShippingDetails?: ShippingDetailUpdateManyWithoutOrderNestedInput
    OrderedProducts?: OrderedProductUpdateManyWithoutOrderNestedInput
  }

  export type OrderUncheckedUpdateWithoutPaymentDetailsInput = {
    id?: IntFieldUpdateOperationsInput | number
    subTotal?: FloatFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    shipping?: FloatFieldUpdateOperationsInput | number
    discount?: FloatFieldUpdateOperationsInput | number
    total?: FloatFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ShippingDetails?: ShippingDetailUncheckedUpdateManyWithoutOrderNestedInput
    OrderedProducts?: OrderedProductUncheckedUpdateManyWithoutOrderNestedInput
  }

  export type OrderCreateWithoutShippingDetailsInput = {
    subTotal: number
    quantity: number
    shipping: number
    discount: number
    total: number
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutOrdersInput
    PaymentDetails?: PaymentDetailCreateNestedManyWithoutOrderInput
    OrderedProducts?: OrderedProductCreateNestedManyWithoutOrderInput
  }

  export type OrderUncheckedCreateWithoutShippingDetailsInput = {
    id?: number
    subTotal: number
    quantity: number
    shipping: number
    discount: number
    total: number
    userId: number
    createdAt?: Date | string
    PaymentDetails?: PaymentDetailUncheckedCreateNestedManyWithoutOrderInput
    OrderedProducts?: OrderedProductUncheckedCreateNestedManyWithoutOrderInput
  }

  export type OrderCreateOrConnectWithoutShippingDetailsInput = {
    where: OrderWhereUniqueInput
    create: XOR<OrderCreateWithoutShippingDetailsInput, OrderUncheckedCreateWithoutShippingDetailsInput>
  }

  export type OrderUpsertWithoutShippingDetailsInput = {
    update: XOR<OrderUpdateWithoutShippingDetailsInput, OrderUncheckedUpdateWithoutShippingDetailsInput>
    create: XOR<OrderCreateWithoutShippingDetailsInput, OrderUncheckedCreateWithoutShippingDetailsInput>
    where?: OrderWhereInput
  }

  export type OrderUpdateToOneWithWhereWithoutShippingDetailsInput = {
    where?: OrderWhereInput
    data: XOR<OrderUpdateWithoutShippingDetailsInput, OrderUncheckedUpdateWithoutShippingDetailsInput>
  }

  export type OrderUpdateWithoutShippingDetailsInput = {
    subTotal?: FloatFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    shipping?: FloatFieldUpdateOperationsInput | number
    discount?: FloatFieldUpdateOperationsInput | number
    total?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutOrdersNestedInput
    PaymentDetails?: PaymentDetailUpdateManyWithoutOrderNestedInput
    OrderedProducts?: OrderedProductUpdateManyWithoutOrderNestedInput
  }

  export type OrderUncheckedUpdateWithoutShippingDetailsInput = {
    id?: IntFieldUpdateOperationsInput | number
    subTotal?: FloatFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    shipping?: FloatFieldUpdateOperationsInput | number
    discount?: FloatFieldUpdateOperationsInput | number
    total?: FloatFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    PaymentDetails?: PaymentDetailUncheckedUpdateManyWithoutOrderNestedInput
    OrderedProducts?: OrderedProductUncheckedUpdateManyWithoutOrderNestedInput
  }

  export type AddressCreateManyUserInput = {
    id?: number
    street: string
    city: string
    state: string
    zipCode: string
  }

  export type OrderCreateManyUserInput = {
    id?: number
    subTotal: number
    quantity: number
    shipping: number
    discount: number
    total: number
    createdAt?: Date | string
  }

  export type CartProductCreateManyUserInput = {
    cartProductId?: number
    id: number
    title: string
    gender: string
    description: string
    category: string
    price: number
    size: string
    color: string
    ratings: JsonNullValueInput | InputJsonValue
    img?: CartProductCreateimgInput | string[]
    quantity: number
  }

  export type FavoriteCreateManyUserInput = {
    favoriteId?: number
    id: number
    title: string
    gender: string
    description: string
    category: string
    price: number
    size?: FavoriteCreatesizeInput | string[]
    color: string
    ratings: JsonNullValueInput | InputJsonValue
    img?: FavoriteCreateimgInput | string[]
    createdAt?: Date | string
  }

  export type AddressUpdateWithoutUserInput = {
    street?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    zipCode?: StringFieldUpdateOperationsInput | string
  }

  export type AddressUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    street?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    zipCode?: StringFieldUpdateOperationsInput | string
  }

  export type AddressUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    street?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    zipCode?: StringFieldUpdateOperationsInput | string
  }

  export type OrderUpdateWithoutUserInput = {
    subTotal?: FloatFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    shipping?: FloatFieldUpdateOperationsInput | number
    discount?: FloatFieldUpdateOperationsInput | number
    total?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    PaymentDetails?: PaymentDetailUpdateManyWithoutOrderNestedInput
    ShippingDetails?: ShippingDetailUpdateManyWithoutOrderNestedInput
    OrderedProducts?: OrderedProductUpdateManyWithoutOrderNestedInput
  }

  export type OrderUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    subTotal?: FloatFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    shipping?: FloatFieldUpdateOperationsInput | number
    discount?: FloatFieldUpdateOperationsInput | number
    total?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    PaymentDetails?: PaymentDetailUncheckedUpdateManyWithoutOrderNestedInput
    ShippingDetails?: ShippingDetailUncheckedUpdateManyWithoutOrderNestedInput
    OrderedProducts?: OrderedProductUncheckedUpdateManyWithoutOrderNestedInput
  }

  export type OrderUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    subTotal?: FloatFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    shipping?: FloatFieldUpdateOperationsInput | number
    discount?: FloatFieldUpdateOperationsInput | number
    total?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CartProductUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    size?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    ratings?: JsonNullValueInput | InputJsonValue
    img?: CartProductUpdateimgInput | string[]
    quantity?: IntFieldUpdateOperationsInput | number
  }

  export type CartProductUncheckedUpdateWithoutUserInput = {
    cartProductId?: IntFieldUpdateOperationsInput | number
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    size?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    ratings?: JsonNullValueInput | InputJsonValue
    img?: CartProductUpdateimgInput | string[]
    quantity?: IntFieldUpdateOperationsInput | number
  }

  export type CartProductUncheckedUpdateManyWithoutUserInput = {
    cartProductId?: IntFieldUpdateOperationsInput | number
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    size?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    ratings?: JsonNullValueInput | InputJsonValue
    img?: CartProductUpdateimgInput | string[]
    quantity?: IntFieldUpdateOperationsInput | number
  }

  export type FavoriteUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    size?: FavoriteUpdatesizeInput | string[]
    color?: StringFieldUpdateOperationsInput | string
    ratings?: JsonNullValueInput | InputJsonValue
    img?: FavoriteUpdateimgInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FavoriteUncheckedUpdateWithoutUserInput = {
    favoriteId?: IntFieldUpdateOperationsInput | number
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    size?: FavoriteUpdatesizeInput | string[]
    color?: StringFieldUpdateOperationsInput | string
    ratings?: JsonNullValueInput | InputJsonValue
    img?: FavoriteUpdateimgInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FavoriteUncheckedUpdateManyWithoutUserInput = {
    favoriteId?: IntFieldUpdateOperationsInput | number
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    size?: FavoriteUpdatesizeInput | string[]
    color?: StringFieldUpdateOperationsInput | string
    ratings?: JsonNullValueInput | InputJsonValue
    img?: FavoriteUpdateimgInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentDetailCreateManyOrderInput = {
    id?: number
    razorpayOrderId: string
    razorpayPaymentId: string
  }

  export type ShippingDetailCreateManyOrderInput = {
    id?: number
    firstName: string
    lastName: string
    addressLine1: string
    addressLine2?: string | null
    locality: string
    pinCode: string
    state: string
    country: string
    email: string
    mobile: string
  }

  export type OrderedProductCreateManyOrderInput = {
    OrderedProductId?: number
    id: number
    title: string
    gender: string
    description: string
    category: string
    price: number
    size: string
    color: string
    ratings: JsonNullValueInput | InputJsonValue
    img?: OrderedProductCreateimgInput | string[]
    quantity: number
  }

  export type PaymentDetailUpdateWithoutOrderInput = {
    razorpayOrderId?: StringFieldUpdateOperationsInput | string
    razorpayPaymentId?: StringFieldUpdateOperationsInput | string
  }

  export type PaymentDetailUncheckedUpdateWithoutOrderInput = {
    id?: IntFieldUpdateOperationsInput | number
    razorpayOrderId?: StringFieldUpdateOperationsInput | string
    razorpayPaymentId?: StringFieldUpdateOperationsInput | string
  }

  export type PaymentDetailUncheckedUpdateManyWithoutOrderInput = {
    id?: IntFieldUpdateOperationsInput | number
    razorpayOrderId?: StringFieldUpdateOperationsInput | string
    razorpayPaymentId?: StringFieldUpdateOperationsInput | string
  }

  export type ShippingDetailUpdateWithoutOrderInput = {
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    addressLine1?: StringFieldUpdateOperationsInput | string
    addressLine2?: NullableStringFieldUpdateOperationsInput | string | null
    locality?: StringFieldUpdateOperationsInput | string
    pinCode?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    mobile?: StringFieldUpdateOperationsInput | string
  }

  export type ShippingDetailUncheckedUpdateWithoutOrderInput = {
    id?: IntFieldUpdateOperationsInput | number
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    addressLine1?: StringFieldUpdateOperationsInput | string
    addressLine2?: NullableStringFieldUpdateOperationsInput | string | null
    locality?: StringFieldUpdateOperationsInput | string
    pinCode?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    mobile?: StringFieldUpdateOperationsInput | string
  }

  export type ShippingDetailUncheckedUpdateManyWithoutOrderInput = {
    id?: IntFieldUpdateOperationsInput | number
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    addressLine1?: StringFieldUpdateOperationsInput | string
    addressLine2?: NullableStringFieldUpdateOperationsInput | string | null
    locality?: StringFieldUpdateOperationsInput | string
    pinCode?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    mobile?: StringFieldUpdateOperationsInput | string
  }

  export type OrderedProductUpdateWithoutOrderInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    size?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    ratings?: JsonNullValueInput | InputJsonValue
    img?: OrderedProductUpdateimgInput | string[]
    quantity?: IntFieldUpdateOperationsInput | number
  }

  export type OrderedProductUncheckedUpdateWithoutOrderInput = {
    OrderedProductId?: IntFieldUpdateOperationsInput | number
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    size?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    ratings?: JsonNullValueInput | InputJsonValue
    img?: OrderedProductUpdateimgInput | string[]
    quantity?: IntFieldUpdateOperationsInput | number
  }

  export type OrderedProductUncheckedUpdateManyWithoutOrderInput = {
    OrderedProductId?: IntFieldUpdateOperationsInput | number
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    size?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    ratings?: JsonNullValueInput | InputJsonValue
    img?: OrderedProductUpdateimgInput | string[]
    quantity?: IntFieldUpdateOperationsInput | number
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use UserCountOutputTypeDefaultArgs instead
     */
    export type UserCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use OrderCountOutputTypeDefaultArgs instead
     */
    export type OrderCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = OrderCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UserDefaultArgs instead
     */
    export type UserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserDefaultArgs<ExtArgs>
    /**
     * @deprecated Use AddressDefaultArgs instead
     */
    export type AddressArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = AddressDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ProductDefaultArgs instead
     */
    export type ProductArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ProductDefaultArgs<ExtArgs>
    /**
     * @deprecated Use CartProductDefaultArgs instead
     */
    export type CartProductArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CartProductDefaultArgs<ExtArgs>
    /**
     * @deprecated Use FavoriteDefaultArgs instead
     */
    export type FavoriteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = FavoriteDefaultArgs<ExtArgs>
    /**
     * @deprecated Use OrderDefaultArgs instead
     */
    export type OrderArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = OrderDefaultArgs<ExtArgs>
    /**
     * @deprecated Use OrderedProductDefaultArgs instead
     */
    export type OrderedProductArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = OrderedProductDefaultArgs<ExtArgs>
    /**
     * @deprecated Use PaymentDetailDefaultArgs instead
     */
    export type PaymentDetailArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = PaymentDetailDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ShippingDetailDefaultArgs instead
     */
    export type ShippingDetailArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ShippingDetailDefaultArgs<ExtArgs>
    /**
     * @deprecated Use LocationDefaultArgs instead
     */
    export type LocationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = LocationDefaultArgs<ExtArgs>

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}