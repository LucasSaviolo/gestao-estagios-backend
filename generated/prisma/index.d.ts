
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Empresa
 * 
 */
export type Empresa = $Result.DefaultSelection<Prisma.$EmpresaPayload>
/**
 * Model Estagiario
 * 
 */
export type Estagiario = $Result.DefaultSelection<Prisma.$EstagiarioPayload>
/**
 * Model Relatorio
 * 
 */
export type Relatorio = $Result.DefaultSelection<Prisma.$RelatorioPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Empresas
 * const empresas = await prisma.empresa.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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
   * // Fetch zero or more Empresas
   * const empresas = await prisma.empresa.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

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


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.empresa`: Exposes CRUD operations for the **Empresa** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Empresas
    * const empresas = await prisma.empresa.findMany()
    * ```
    */
  get empresa(): Prisma.EmpresaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.estagiario`: Exposes CRUD operations for the **Estagiario** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Estagiarios
    * const estagiarios = await prisma.estagiario.findMany()
    * ```
    */
  get estagiario(): Prisma.EstagiarioDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.relatorio`: Exposes CRUD operations for the **Relatorio** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Relatorios
    * const relatorios = await prisma.relatorio.findMany()
    * ```
    */
  get relatorio(): Prisma.RelatorioDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.10.1
   * Query Engine version: 9b628578b3b7cae625e8c927178f15a170e74a9c
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

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

  type SelectAndOmit = {
    select: any
    omit: any
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
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
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
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
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
    Empresa: 'Empresa',
    Estagiario: 'Estagiario',
    Relatorio: 'Relatorio'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "empresa" | "estagiario" | "relatorio"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Empresa: {
        payload: Prisma.$EmpresaPayload<ExtArgs>
        fields: Prisma.EmpresaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EmpresaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmpresaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EmpresaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmpresaPayload>
          }
          findFirst: {
            args: Prisma.EmpresaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmpresaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EmpresaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmpresaPayload>
          }
          findMany: {
            args: Prisma.EmpresaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmpresaPayload>[]
          }
          create: {
            args: Prisma.EmpresaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmpresaPayload>
          }
          createMany: {
            args: Prisma.EmpresaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.EmpresaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmpresaPayload>
          }
          update: {
            args: Prisma.EmpresaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmpresaPayload>
          }
          deleteMany: {
            args: Prisma.EmpresaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EmpresaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.EmpresaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmpresaPayload>
          }
          aggregate: {
            args: Prisma.EmpresaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEmpresa>
          }
          groupBy: {
            args: Prisma.EmpresaGroupByArgs<ExtArgs>
            result: $Utils.Optional<EmpresaGroupByOutputType>[]
          }
          count: {
            args: Prisma.EmpresaCountArgs<ExtArgs>
            result: $Utils.Optional<EmpresaCountAggregateOutputType> | number
          }
        }
      }
      Estagiario: {
        payload: Prisma.$EstagiarioPayload<ExtArgs>
        fields: Prisma.EstagiarioFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EstagiarioFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EstagiarioPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EstagiarioFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EstagiarioPayload>
          }
          findFirst: {
            args: Prisma.EstagiarioFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EstagiarioPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EstagiarioFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EstagiarioPayload>
          }
          findMany: {
            args: Prisma.EstagiarioFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EstagiarioPayload>[]
          }
          create: {
            args: Prisma.EstagiarioCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EstagiarioPayload>
          }
          createMany: {
            args: Prisma.EstagiarioCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.EstagiarioDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EstagiarioPayload>
          }
          update: {
            args: Prisma.EstagiarioUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EstagiarioPayload>
          }
          deleteMany: {
            args: Prisma.EstagiarioDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EstagiarioUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.EstagiarioUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EstagiarioPayload>
          }
          aggregate: {
            args: Prisma.EstagiarioAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEstagiario>
          }
          groupBy: {
            args: Prisma.EstagiarioGroupByArgs<ExtArgs>
            result: $Utils.Optional<EstagiarioGroupByOutputType>[]
          }
          count: {
            args: Prisma.EstagiarioCountArgs<ExtArgs>
            result: $Utils.Optional<EstagiarioCountAggregateOutputType> | number
          }
        }
      }
      Relatorio: {
        payload: Prisma.$RelatorioPayload<ExtArgs>
        fields: Prisma.RelatorioFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RelatorioFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RelatorioPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RelatorioFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RelatorioPayload>
          }
          findFirst: {
            args: Prisma.RelatorioFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RelatorioPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RelatorioFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RelatorioPayload>
          }
          findMany: {
            args: Prisma.RelatorioFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RelatorioPayload>[]
          }
          create: {
            args: Prisma.RelatorioCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RelatorioPayload>
          }
          createMany: {
            args: Prisma.RelatorioCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.RelatorioDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RelatorioPayload>
          }
          update: {
            args: Prisma.RelatorioUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RelatorioPayload>
          }
          deleteMany: {
            args: Prisma.RelatorioDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RelatorioUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.RelatorioUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RelatorioPayload>
          }
          aggregate: {
            args: Prisma.RelatorioAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRelatorio>
          }
          groupBy: {
            args: Prisma.RelatorioGroupByArgs<ExtArgs>
            result: $Utils.Optional<RelatorioGroupByOutputType>[]
          }
          count: {
            args: Prisma.RelatorioCountArgs<ExtArgs>
            result: $Utils.Optional<RelatorioCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
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
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    empresa?: EmpresaOmit
    estagiario?: EstagiarioOmit
    relatorio?: RelatorioOmit
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
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
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
   * Count Type EmpresaCountOutputType
   */

  export type EmpresaCountOutputType = {
    estagiarios: number
  }

  export type EmpresaCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    estagiarios?: boolean | EmpresaCountOutputTypeCountEstagiariosArgs
  }

  // Custom InputTypes
  /**
   * EmpresaCountOutputType without action
   */
  export type EmpresaCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmpresaCountOutputType
     */
    select?: EmpresaCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * EmpresaCountOutputType without action
   */
  export type EmpresaCountOutputTypeCountEstagiariosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EstagiarioWhereInput
  }


  /**
   * Count Type EstagiarioCountOutputType
   */

  export type EstagiarioCountOutputType = {
    relatorio: number
  }

  export type EstagiarioCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    relatorio?: boolean | EstagiarioCountOutputTypeCountRelatorioArgs
  }

  // Custom InputTypes
  /**
   * EstagiarioCountOutputType without action
   */
  export type EstagiarioCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EstagiarioCountOutputType
     */
    select?: EstagiarioCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * EstagiarioCountOutputType without action
   */
  export type EstagiarioCountOutputTypeCountRelatorioArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RelatorioWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Empresa
   */

  export type AggregateEmpresa = {
    _count: EmpresaCountAggregateOutputType | null
    _avg: EmpresaAvgAggregateOutputType | null
    _sum: EmpresaSumAggregateOutputType | null
    _min: EmpresaMinAggregateOutputType | null
    _max: EmpresaMaxAggregateOutputType | null
  }

  export type EmpresaAvgAggregateOutputType = {
    id: number | null
  }

  export type EmpresaSumAggregateOutputType = {
    id: number | null
  }

  export type EmpresaMinAggregateOutputType = {
    id: number | null
    ramo: string | null
    nome: string | null
    cnpj: string | null
    telefone: string | null
  }

  export type EmpresaMaxAggregateOutputType = {
    id: number | null
    ramo: string | null
    nome: string | null
    cnpj: string | null
    telefone: string | null
  }

  export type EmpresaCountAggregateOutputType = {
    id: number
    ramo: number
    nome: number
    cnpj: number
    telefone: number
    _all: number
  }


  export type EmpresaAvgAggregateInputType = {
    id?: true
  }

  export type EmpresaSumAggregateInputType = {
    id?: true
  }

  export type EmpresaMinAggregateInputType = {
    id?: true
    ramo?: true
    nome?: true
    cnpj?: true
    telefone?: true
  }

  export type EmpresaMaxAggregateInputType = {
    id?: true
    ramo?: true
    nome?: true
    cnpj?: true
    telefone?: true
  }

  export type EmpresaCountAggregateInputType = {
    id?: true
    ramo?: true
    nome?: true
    cnpj?: true
    telefone?: true
    _all?: true
  }

  export type EmpresaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Empresa to aggregate.
     */
    where?: EmpresaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Empresas to fetch.
     */
    orderBy?: EmpresaOrderByWithRelationInput | EmpresaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EmpresaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Empresas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Empresas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Empresas
    **/
    _count?: true | EmpresaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EmpresaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EmpresaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EmpresaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EmpresaMaxAggregateInputType
  }

  export type GetEmpresaAggregateType<T extends EmpresaAggregateArgs> = {
        [P in keyof T & keyof AggregateEmpresa]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEmpresa[P]>
      : GetScalarType<T[P], AggregateEmpresa[P]>
  }




  export type EmpresaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EmpresaWhereInput
    orderBy?: EmpresaOrderByWithAggregationInput | EmpresaOrderByWithAggregationInput[]
    by: EmpresaScalarFieldEnum[] | EmpresaScalarFieldEnum
    having?: EmpresaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EmpresaCountAggregateInputType | true
    _avg?: EmpresaAvgAggregateInputType
    _sum?: EmpresaSumAggregateInputType
    _min?: EmpresaMinAggregateInputType
    _max?: EmpresaMaxAggregateInputType
  }

  export type EmpresaGroupByOutputType = {
    id: number
    ramo: string
    nome: string
    cnpj: string | null
    telefone: string | null
    _count: EmpresaCountAggregateOutputType | null
    _avg: EmpresaAvgAggregateOutputType | null
    _sum: EmpresaSumAggregateOutputType | null
    _min: EmpresaMinAggregateOutputType | null
    _max: EmpresaMaxAggregateOutputType | null
  }

  type GetEmpresaGroupByPayload<T extends EmpresaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EmpresaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EmpresaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EmpresaGroupByOutputType[P]>
            : GetScalarType<T[P], EmpresaGroupByOutputType[P]>
        }
      >
    >


  export type EmpresaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    ramo?: boolean
    nome?: boolean
    cnpj?: boolean
    telefone?: boolean
    estagiarios?: boolean | Empresa$estagiariosArgs<ExtArgs>
    _count?: boolean | EmpresaCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["empresa"]>



  export type EmpresaSelectScalar = {
    id?: boolean
    ramo?: boolean
    nome?: boolean
    cnpj?: boolean
    telefone?: boolean
  }

  export type EmpresaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "ramo" | "nome" | "cnpj" | "telefone", ExtArgs["result"]["empresa"]>
  export type EmpresaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    estagiarios?: boolean | Empresa$estagiariosArgs<ExtArgs>
    _count?: boolean | EmpresaCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $EmpresaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Empresa"
    objects: {
      estagiarios: Prisma.$EstagiarioPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      ramo: string
      nome: string
      cnpj: string | null
      telefone: string | null
    }, ExtArgs["result"]["empresa"]>
    composites: {}
  }

  type EmpresaGetPayload<S extends boolean | null | undefined | EmpresaDefaultArgs> = $Result.GetResult<Prisma.$EmpresaPayload, S>

  type EmpresaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EmpresaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EmpresaCountAggregateInputType | true
    }

  export interface EmpresaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Empresa'], meta: { name: 'Empresa' } }
    /**
     * Find zero or one Empresa that matches the filter.
     * @param {EmpresaFindUniqueArgs} args - Arguments to find a Empresa
     * @example
     * // Get one Empresa
     * const empresa = await prisma.empresa.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EmpresaFindUniqueArgs>(args: SelectSubset<T, EmpresaFindUniqueArgs<ExtArgs>>): Prisma__EmpresaClient<$Result.GetResult<Prisma.$EmpresaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Empresa that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EmpresaFindUniqueOrThrowArgs} args - Arguments to find a Empresa
     * @example
     * // Get one Empresa
     * const empresa = await prisma.empresa.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EmpresaFindUniqueOrThrowArgs>(args: SelectSubset<T, EmpresaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EmpresaClient<$Result.GetResult<Prisma.$EmpresaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Empresa that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmpresaFindFirstArgs} args - Arguments to find a Empresa
     * @example
     * // Get one Empresa
     * const empresa = await prisma.empresa.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EmpresaFindFirstArgs>(args?: SelectSubset<T, EmpresaFindFirstArgs<ExtArgs>>): Prisma__EmpresaClient<$Result.GetResult<Prisma.$EmpresaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Empresa that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmpresaFindFirstOrThrowArgs} args - Arguments to find a Empresa
     * @example
     * // Get one Empresa
     * const empresa = await prisma.empresa.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EmpresaFindFirstOrThrowArgs>(args?: SelectSubset<T, EmpresaFindFirstOrThrowArgs<ExtArgs>>): Prisma__EmpresaClient<$Result.GetResult<Prisma.$EmpresaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Empresas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmpresaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Empresas
     * const empresas = await prisma.empresa.findMany()
     * 
     * // Get first 10 Empresas
     * const empresas = await prisma.empresa.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const empresaWithIdOnly = await prisma.empresa.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EmpresaFindManyArgs>(args?: SelectSubset<T, EmpresaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmpresaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Empresa.
     * @param {EmpresaCreateArgs} args - Arguments to create a Empresa.
     * @example
     * // Create one Empresa
     * const Empresa = await prisma.empresa.create({
     *   data: {
     *     // ... data to create a Empresa
     *   }
     * })
     * 
     */
    create<T extends EmpresaCreateArgs>(args: SelectSubset<T, EmpresaCreateArgs<ExtArgs>>): Prisma__EmpresaClient<$Result.GetResult<Prisma.$EmpresaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Empresas.
     * @param {EmpresaCreateManyArgs} args - Arguments to create many Empresas.
     * @example
     * // Create many Empresas
     * const empresa = await prisma.empresa.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EmpresaCreateManyArgs>(args?: SelectSubset<T, EmpresaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Empresa.
     * @param {EmpresaDeleteArgs} args - Arguments to delete one Empresa.
     * @example
     * // Delete one Empresa
     * const Empresa = await prisma.empresa.delete({
     *   where: {
     *     // ... filter to delete one Empresa
     *   }
     * })
     * 
     */
    delete<T extends EmpresaDeleteArgs>(args: SelectSubset<T, EmpresaDeleteArgs<ExtArgs>>): Prisma__EmpresaClient<$Result.GetResult<Prisma.$EmpresaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Empresa.
     * @param {EmpresaUpdateArgs} args - Arguments to update one Empresa.
     * @example
     * // Update one Empresa
     * const empresa = await prisma.empresa.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EmpresaUpdateArgs>(args: SelectSubset<T, EmpresaUpdateArgs<ExtArgs>>): Prisma__EmpresaClient<$Result.GetResult<Prisma.$EmpresaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Empresas.
     * @param {EmpresaDeleteManyArgs} args - Arguments to filter Empresas to delete.
     * @example
     * // Delete a few Empresas
     * const { count } = await prisma.empresa.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EmpresaDeleteManyArgs>(args?: SelectSubset<T, EmpresaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Empresas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmpresaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Empresas
     * const empresa = await prisma.empresa.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EmpresaUpdateManyArgs>(args: SelectSubset<T, EmpresaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Empresa.
     * @param {EmpresaUpsertArgs} args - Arguments to update or create a Empresa.
     * @example
     * // Update or create a Empresa
     * const empresa = await prisma.empresa.upsert({
     *   create: {
     *     // ... data to create a Empresa
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Empresa we want to update
     *   }
     * })
     */
    upsert<T extends EmpresaUpsertArgs>(args: SelectSubset<T, EmpresaUpsertArgs<ExtArgs>>): Prisma__EmpresaClient<$Result.GetResult<Prisma.$EmpresaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Empresas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmpresaCountArgs} args - Arguments to filter Empresas to count.
     * @example
     * // Count the number of Empresas
     * const count = await prisma.empresa.count({
     *   where: {
     *     // ... the filter for the Empresas we want to count
     *   }
     * })
    **/
    count<T extends EmpresaCountArgs>(
      args?: Subset<T, EmpresaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EmpresaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Empresa.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmpresaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends EmpresaAggregateArgs>(args: Subset<T, EmpresaAggregateArgs>): Prisma.PrismaPromise<GetEmpresaAggregateType<T>>

    /**
     * Group by Empresa.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmpresaGroupByArgs} args - Group by arguments.
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
      T extends EmpresaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EmpresaGroupByArgs['orderBy'] }
        : { orderBy?: EmpresaGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, EmpresaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEmpresaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Empresa model
   */
  readonly fields: EmpresaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Empresa.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EmpresaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    estagiarios<T extends Empresa$estagiariosArgs<ExtArgs> = {}>(args?: Subset<T, Empresa$estagiariosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EstagiarioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Empresa model
   */
  interface EmpresaFieldRefs {
    readonly id: FieldRef<"Empresa", 'Int'>
    readonly ramo: FieldRef<"Empresa", 'String'>
    readonly nome: FieldRef<"Empresa", 'String'>
    readonly cnpj: FieldRef<"Empresa", 'String'>
    readonly telefone: FieldRef<"Empresa", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Empresa findUnique
   */
  export type EmpresaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Empresa
     */
    select?: EmpresaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Empresa
     */
    omit?: EmpresaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmpresaInclude<ExtArgs> | null
    /**
     * Filter, which Empresa to fetch.
     */
    where: EmpresaWhereUniqueInput
  }

  /**
   * Empresa findUniqueOrThrow
   */
  export type EmpresaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Empresa
     */
    select?: EmpresaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Empresa
     */
    omit?: EmpresaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmpresaInclude<ExtArgs> | null
    /**
     * Filter, which Empresa to fetch.
     */
    where: EmpresaWhereUniqueInput
  }

  /**
   * Empresa findFirst
   */
  export type EmpresaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Empresa
     */
    select?: EmpresaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Empresa
     */
    omit?: EmpresaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmpresaInclude<ExtArgs> | null
    /**
     * Filter, which Empresa to fetch.
     */
    where?: EmpresaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Empresas to fetch.
     */
    orderBy?: EmpresaOrderByWithRelationInput | EmpresaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Empresas.
     */
    cursor?: EmpresaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Empresas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Empresas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Empresas.
     */
    distinct?: EmpresaScalarFieldEnum | EmpresaScalarFieldEnum[]
  }

  /**
   * Empresa findFirstOrThrow
   */
  export type EmpresaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Empresa
     */
    select?: EmpresaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Empresa
     */
    omit?: EmpresaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmpresaInclude<ExtArgs> | null
    /**
     * Filter, which Empresa to fetch.
     */
    where?: EmpresaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Empresas to fetch.
     */
    orderBy?: EmpresaOrderByWithRelationInput | EmpresaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Empresas.
     */
    cursor?: EmpresaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Empresas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Empresas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Empresas.
     */
    distinct?: EmpresaScalarFieldEnum | EmpresaScalarFieldEnum[]
  }

  /**
   * Empresa findMany
   */
  export type EmpresaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Empresa
     */
    select?: EmpresaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Empresa
     */
    omit?: EmpresaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmpresaInclude<ExtArgs> | null
    /**
     * Filter, which Empresas to fetch.
     */
    where?: EmpresaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Empresas to fetch.
     */
    orderBy?: EmpresaOrderByWithRelationInput | EmpresaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Empresas.
     */
    cursor?: EmpresaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Empresas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Empresas.
     */
    skip?: number
    distinct?: EmpresaScalarFieldEnum | EmpresaScalarFieldEnum[]
  }

  /**
   * Empresa create
   */
  export type EmpresaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Empresa
     */
    select?: EmpresaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Empresa
     */
    omit?: EmpresaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmpresaInclude<ExtArgs> | null
    /**
     * The data needed to create a Empresa.
     */
    data: XOR<EmpresaCreateInput, EmpresaUncheckedCreateInput>
  }

  /**
   * Empresa createMany
   */
  export type EmpresaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Empresas.
     */
    data: EmpresaCreateManyInput | EmpresaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Empresa update
   */
  export type EmpresaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Empresa
     */
    select?: EmpresaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Empresa
     */
    omit?: EmpresaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmpresaInclude<ExtArgs> | null
    /**
     * The data needed to update a Empresa.
     */
    data: XOR<EmpresaUpdateInput, EmpresaUncheckedUpdateInput>
    /**
     * Choose, which Empresa to update.
     */
    where: EmpresaWhereUniqueInput
  }

  /**
   * Empresa updateMany
   */
  export type EmpresaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Empresas.
     */
    data: XOR<EmpresaUpdateManyMutationInput, EmpresaUncheckedUpdateManyInput>
    /**
     * Filter which Empresas to update
     */
    where?: EmpresaWhereInput
    /**
     * Limit how many Empresas to update.
     */
    limit?: number
  }

  /**
   * Empresa upsert
   */
  export type EmpresaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Empresa
     */
    select?: EmpresaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Empresa
     */
    omit?: EmpresaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmpresaInclude<ExtArgs> | null
    /**
     * The filter to search for the Empresa to update in case it exists.
     */
    where: EmpresaWhereUniqueInput
    /**
     * In case the Empresa found by the `where` argument doesn't exist, create a new Empresa with this data.
     */
    create: XOR<EmpresaCreateInput, EmpresaUncheckedCreateInput>
    /**
     * In case the Empresa was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EmpresaUpdateInput, EmpresaUncheckedUpdateInput>
  }

  /**
   * Empresa delete
   */
  export type EmpresaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Empresa
     */
    select?: EmpresaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Empresa
     */
    omit?: EmpresaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmpresaInclude<ExtArgs> | null
    /**
     * Filter which Empresa to delete.
     */
    where: EmpresaWhereUniqueInput
  }

  /**
   * Empresa deleteMany
   */
  export type EmpresaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Empresas to delete
     */
    where?: EmpresaWhereInput
    /**
     * Limit how many Empresas to delete.
     */
    limit?: number
  }

  /**
   * Empresa.estagiarios
   */
  export type Empresa$estagiariosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Estagiario
     */
    select?: EstagiarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Estagiario
     */
    omit?: EstagiarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EstagiarioInclude<ExtArgs> | null
    where?: EstagiarioWhereInput
    orderBy?: EstagiarioOrderByWithRelationInput | EstagiarioOrderByWithRelationInput[]
    cursor?: EstagiarioWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EstagiarioScalarFieldEnum | EstagiarioScalarFieldEnum[]
  }

  /**
   * Empresa without action
   */
  export type EmpresaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Empresa
     */
    select?: EmpresaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Empresa
     */
    omit?: EmpresaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmpresaInclude<ExtArgs> | null
  }


  /**
   * Model Estagiario
   */

  export type AggregateEstagiario = {
    _count: EstagiarioCountAggregateOutputType | null
    _avg: EstagiarioAvgAggregateOutputType | null
    _sum: EstagiarioSumAggregateOutputType | null
    _min: EstagiarioMinAggregateOutputType | null
    _max: EstagiarioMaxAggregateOutputType | null
  }

  export type EstagiarioAvgAggregateOutputType = {
    id: number | null
    empresaId: number | null
  }

  export type EstagiarioSumAggregateOutputType = {
    id: number | null
    empresaId: number | null
  }

  export type EstagiarioMinAggregateOutputType = {
    id: number | null
    nome: string | null
    telefone: string | null
    curso: string | null
    email: string | null
    empresaId: number | null
  }

  export type EstagiarioMaxAggregateOutputType = {
    id: number | null
    nome: string | null
    telefone: string | null
    curso: string | null
    email: string | null
    empresaId: number | null
  }

  export type EstagiarioCountAggregateOutputType = {
    id: number
    nome: number
    telefone: number
    curso: number
    email: number
    empresaId: number
    _all: number
  }


  export type EstagiarioAvgAggregateInputType = {
    id?: true
    empresaId?: true
  }

  export type EstagiarioSumAggregateInputType = {
    id?: true
    empresaId?: true
  }

  export type EstagiarioMinAggregateInputType = {
    id?: true
    nome?: true
    telefone?: true
    curso?: true
    email?: true
    empresaId?: true
  }

  export type EstagiarioMaxAggregateInputType = {
    id?: true
    nome?: true
    telefone?: true
    curso?: true
    email?: true
    empresaId?: true
  }

  export type EstagiarioCountAggregateInputType = {
    id?: true
    nome?: true
    telefone?: true
    curso?: true
    email?: true
    empresaId?: true
    _all?: true
  }

  export type EstagiarioAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Estagiario to aggregate.
     */
    where?: EstagiarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Estagiarios to fetch.
     */
    orderBy?: EstagiarioOrderByWithRelationInput | EstagiarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EstagiarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Estagiarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Estagiarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Estagiarios
    **/
    _count?: true | EstagiarioCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EstagiarioAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EstagiarioSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EstagiarioMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EstagiarioMaxAggregateInputType
  }

  export type GetEstagiarioAggregateType<T extends EstagiarioAggregateArgs> = {
        [P in keyof T & keyof AggregateEstagiario]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEstagiario[P]>
      : GetScalarType<T[P], AggregateEstagiario[P]>
  }




  export type EstagiarioGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EstagiarioWhereInput
    orderBy?: EstagiarioOrderByWithAggregationInput | EstagiarioOrderByWithAggregationInput[]
    by: EstagiarioScalarFieldEnum[] | EstagiarioScalarFieldEnum
    having?: EstagiarioScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EstagiarioCountAggregateInputType | true
    _avg?: EstagiarioAvgAggregateInputType
    _sum?: EstagiarioSumAggregateInputType
    _min?: EstagiarioMinAggregateInputType
    _max?: EstagiarioMaxAggregateInputType
  }

  export type EstagiarioGroupByOutputType = {
    id: number
    nome: string
    telefone: string
    curso: string
    email: string | null
    empresaId: number
    _count: EstagiarioCountAggregateOutputType | null
    _avg: EstagiarioAvgAggregateOutputType | null
    _sum: EstagiarioSumAggregateOutputType | null
    _min: EstagiarioMinAggregateOutputType | null
    _max: EstagiarioMaxAggregateOutputType | null
  }

  type GetEstagiarioGroupByPayload<T extends EstagiarioGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EstagiarioGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EstagiarioGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EstagiarioGroupByOutputType[P]>
            : GetScalarType<T[P], EstagiarioGroupByOutputType[P]>
        }
      >
    >


  export type EstagiarioSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    telefone?: boolean
    curso?: boolean
    email?: boolean
    empresaId?: boolean
    empresa?: boolean | EmpresaDefaultArgs<ExtArgs>
    relatorio?: boolean | Estagiario$relatorioArgs<ExtArgs>
    _count?: boolean | EstagiarioCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["estagiario"]>



  export type EstagiarioSelectScalar = {
    id?: boolean
    nome?: boolean
    telefone?: boolean
    curso?: boolean
    email?: boolean
    empresaId?: boolean
  }

  export type EstagiarioOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nome" | "telefone" | "curso" | "email" | "empresaId", ExtArgs["result"]["estagiario"]>
  export type EstagiarioInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    empresa?: boolean | EmpresaDefaultArgs<ExtArgs>
    relatorio?: boolean | Estagiario$relatorioArgs<ExtArgs>
    _count?: boolean | EstagiarioCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $EstagiarioPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Estagiario"
    objects: {
      empresa: Prisma.$EmpresaPayload<ExtArgs>
      relatorio: Prisma.$RelatorioPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nome: string
      telefone: string
      curso: string
      email: string | null
      empresaId: number
    }, ExtArgs["result"]["estagiario"]>
    composites: {}
  }

  type EstagiarioGetPayload<S extends boolean | null | undefined | EstagiarioDefaultArgs> = $Result.GetResult<Prisma.$EstagiarioPayload, S>

  type EstagiarioCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EstagiarioFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EstagiarioCountAggregateInputType | true
    }

  export interface EstagiarioDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Estagiario'], meta: { name: 'Estagiario' } }
    /**
     * Find zero or one Estagiario that matches the filter.
     * @param {EstagiarioFindUniqueArgs} args - Arguments to find a Estagiario
     * @example
     * // Get one Estagiario
     * const estagiario = await prisma.estagiario.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EstagiarioFindUniqueArgs>(args: SelectSubset<T, EstagiarioFindUniqueArgs<ExtArgs>>): Prisma__EstagiarioClient<$Result.GetResult<Prisma.$EstagiarioPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Estagiario that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EstagiarioFindUniqueOrThrowArgs} args - Arguments to find a Estagiario
     * @example
     * // Get one Estagiario
     * const estagiario = await prisma.estagiario.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EstagiarioFindUniqueOrThrowArgs>(args: SelectSubset<T, EstagiarioFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EstagiarioClient<$Result.GetResult<Prisma.$EstagiarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Estagiario that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EstagiarioFindFirstArgs} args - Arguments to find a Estagiario
     * @example
     * // Get one Estagiario
     * const estagiario = await prisma.estagiario.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EstagiarioFindFirstArgs>(args?: SelectSubset<T, EstagiarioFindFirstArgs<ExtArgs>>): Prisma__EstagiarioClient<$Result.GetResult<Prisma.$EstagiarioPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Estagiario that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EstagiarioFindFirstOrThrowArgs} args - Arguments to find a Estagiario
     * @example
     * // Get one Estagiario
     * const estagiario = await prisma.estagiario.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EstagiarioFindFirstOrThrowArgs>(args?: SelectSubset<T, EstagiarioFindFirstOrThrowArgs<ExtArgs>>): Prisma__EstagiarioClient<$Result.GetResult<Prisma.$EstagiarioPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Estagiarios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EstagiarioFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Estagiarios
     * const estagiarios = await prisma.estagiario.findMany()
     * 
     * // Get first 10 Estagiarios
     * const estagiarios = await prisma.estagiario.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const estagiarioWithIdOnly = await prisma.estagiario.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EstagiarioFindManyArgs>(args?: SelectSubset<T, EstagiarioFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EstagiarioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Estagiario.
     * @param {EstagiarioCreateArgs} args - Arguments to create a Estagiario.
     * @example
     * // Create one Estagiario
     * const Estagiario = await prisma.estagiario.create({
     *   data: {
     *     // ... data to create a Estagiario
     *   }
     * })
     * 
     */
    create<T extends EstagiarioCreateArgs>(args: SelectSubset<T, EstagiarioCreateArgs<ExtArgs>>): Prisma__EstagiarioClient<$Result.GetResult<Prisma.$EstagiarioPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Estagiarios.
     * @param {EstagiarioCreateManyArgs} args - Arguments to create many Estagiarios.
     * @example
     * // Create many Estagiarios
     * const estagiario = await prisma.estagiario.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EstagiarioCreateManyArgs>(args?: SelectSubset<T, EstagiarioCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Estagiario.
     * @param {EstagiarioDeleteArgs} args - Arguments to delete one Estagiario.
     * @example
     * // Delete one Estagiario
     * const Estagiario = await prisma.estagiario.delete({
     *   where: {
     *     // ... filter to delete one Estagiario
     *   }
     * })
     * 
     */
    delete<T extends EstagiarioDeleteArgs>(args: SelectSubset<T, EstagiarioDeleteArgs<ExtArgs>>): Prisma__EstagiarioClient<$Result.GetResult<Prisma.$EstagiarioPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Estagiario.
     * @param {EstagiarioUpdateArgs} args - Arguments to update one Estagiario.
     * @example
     * // Update one Estagiario
     * const estagiario = await prisma.estagiario.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EstagiarioUpdateArgs>(args: SelectSubset<T, EstagiarioUpdateArgs<ExtArgs>>): Prisma__EstagiarioClient<$Result.GetResult<Prisma.$EstagiarioPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Estagiarios.
     * @param {EstagiarioDeleteManyArgs} args - Arguments to filter Estagiarios to delete.
     * @example
     * // Delete a few Estagiarios
     * const { count } = await prisma.estagiario.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EstagiarioDeleteManyArgs>(args?: SelectSubset<T, EstagiarioDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Estagiarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EstagiarioUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Estagiarios
     * const estagiario = await prisma.estagiario.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EstagiarioUpdateManyArgs>(args: SelectSubset<T, EstagiarioUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Estagiario.
     * @param {EstagiarioUpsertArgs} args - Arguments to update or create a Estagiario.
     * @example
     * // Update or create a Estagiario
     * const estagiario = await prisma.estagiario.upsert({
     *   create: {
     *     // ... data to create a Estagiario
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Estagiario we want to update
     *   }
     * })
     */
    upsert<T extends EstagiarioUpsertArgs>(args: SelectSubset<T, EstagiarioUpsertArgs<ExtArgs>>): Prisma__EstagiarioClient<$Result.GetResult<Prisma.$EstagiarioPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Estagiarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EstagiarioCountArgs} args - Arguments to filter Estagiarios to count.
     * @example
     * // Count the number of Estagiarios
     * const count = await prisma.estagiario.count({
     *   where: {
     *     // ... the filter for the Estagiarios we want to count
     *   }
     * })
    **/
    count<T extends EstagiarioCountArgs>(
      args?: Subset<T, EstagiarioCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EstagiarioCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Estagiario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EstagiarioAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends EstagiarioAggregateArgs>(args: Subset<T, EstagiarioAggregateArgs>): Prisma.PrismaPromise<GetEstagiarioAggregateType<T>>

    /**
     * Group by Estagiario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EstagiarioGroupByArgs} args - Group by arguments.
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
      T extends EstagiarioGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EstagiarioGroupByArgs['orderBy'] }
        : { orderBy?: EstagiarioGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, EstagiarioGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEstagiarioGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Estagiario model
   */
  readonly fields: EstagiarioFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Estagiario.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EstagiarioClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    empresa<T extends EmpresaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EmpresaDefaultArgs<ExtArgs>>): Prisma__EmpresaClient<$Result.GetResult<Prisma.$EmpresaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    relatorio<T extends Estagiario$relatorioArgs<ExtArgs> = {}>(args?: Subset<T, Estagiario$relatorioArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RelatorioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Estagiario model
   */
  interface EstagiarioFieldRefs {
    readonly id: FieldRef<"Estagiario", 'Int'>
    readonly nome: FieldRef<"Estagiario", 'String'>
    readonly telefone: FieldRef<"Estagiario", 'String'>
    readonly curso: FieldRef<"Estagiario", 'String'>
    readonly email: FieldRef<"Estagiario", 'String'>
    readonly empresaId: FieldRef<"Estagiario", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Estagiario findUnique
   */
  export type EstagiarioFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Estagiario
     */
    select?: EstagiarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Estagiario
     */
    omit?: EstagiarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EstagiarioInclude<ExtArgs> | null
    /**
     * Filter, which Estagiario to fetch.
     */
    where: EstagiarioWhereUniqueInput
  }

  /**
   * Estagiario findUniqueOrThrow
   */
  export type EstagiarioFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Estagiario
     */
    select?: EstagiarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Estagiario
     */
    omit?: EstagiarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EstagiarioInclude<ExtArgs> | null
    /**
     * Filter, which Estagiario to fetch.
     */
    where: EstagiarioWhereUniqueInput
  }

  /**
   * Estagiario findFirst
   */
  export type EstagiarioFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Estagiario
     */
    select?: EstagiarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Estagiario
     */
    omit?: EstagiarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EstagiarioInclude<ExtArgs> | null
    /**
     * Filter, which Estagiario to fetch.
     */
    where?: EstagiarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Estagiarios to fetch.
     */
    orderBy?: EstagiarioOrderByWithRelationInput | EstagiarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Estagiarios.
     */
    cursor?: EstagiarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Estagiarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Estagiarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Estagiarios.
     */
    distinct?: EstagiarioScalarFieldEnum | EstagiarioScalarFieldEnum[]
  }

  /**
   * Estagiario findFirstOrThrow
   */
  export type EstagiarioFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Estagiario
     */
    select?: EstagiarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Estagiario
     */
    omit?: EstagiarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EstagiarioInclude<ExtArgs> | null
    /**
     * Filter, which Estagiario to fetch.
     */
    where?: EstagiarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Estagiarios to fetch.
     */
    orderBy?: EstagiarioOrderByWithRelationInput | EstagiarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Estagiarios.
     */
    cursor?: EstagiarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Estagiarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Estagiarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Estagiarios.
     */
    distinct?: EstagiarioScalarFieldEnum | EstagiarioScalarFieldEnum[]
  }

  /**
   * Estagiario findMany
   */
  export type EstagiarioFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Estagiario
     */
    select?: EstagiarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Estagiario
     */
    omit?: EstagiarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EstagiarioInclude<ExtArgs> | null
    /**
     * Filter, which Estagiarios to fetch.
     */
    where?: EstagiarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Estagiarios to fetch.
     */
    orderBy?: EstagiarioOrderByWithRelationInput | EstagiarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Estagiarios.
     */
    cursor?: EstagiarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Estagiarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Estagiarios.
     */
    skip?: number
    distinct?: EstagiarioScalarFieldEnum | EstagiarioScalarFieldEnum[]
  }

  /**
   * Estagiario create
   */
  export type EstagiarioCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Estagiario
     */
    select?: EstagiarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Estagiario
     */
    omit?: EstagiarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EstagiarioInclude<ExtArgs> | null
    /**
     * The data needed to create a Estagiario.
     */
    data: XOR<EstagiarioCreateInput, EstagiarioUncheckedCreateInput>
  }

  /**
   * Estagiario createMany
   */
  export type EstagiarioCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Estagiarios.
     */
    data: EstagiarioCreateManyInput | EstagiarioCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Estagiario update
   */
  export type EstagiarioUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Estagiario
     */
    select?: EstagiarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Estagiario
     */
    omit?: EstagiarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EstagiarioInclude<ExtArgs> | null
    /**
     * The data needed to update a Estagiario.
     */
    data: XOR<EstagiarioUpdateInput, EstagiarioUncheckedUpdateInput>
    /**
     * Choose, which Estagiario to update.
     */
    where: EstagiarioWhereUniqueInput
  }

  /**
   * Estagiario updateMany
   */
  export type EstagiarioUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Estagiarios.
     */
    data: XOR<EstagiarioUpdateManyMutationInput, EstagiarioUncheckedUpdateManyInput>
    /**
     * Filter which Estagiarios to update
     */
    where?: EstagiarioWhereInput
    /**
     * Limit how many Estagiarios to update.
     */
    limit?: number
  }

  /**
   * Estagiario upsert
   */
  export type EstagiarioUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Estagiario
     */
    select?: EstagiarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Estagiario
     */
    omit?: EstagiarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EstagiarioInclude<ExtArgs> | null
    /**
     * The filter to search for the Estagiario to update in case it exists.
     */
    where: EstagiarioWhereUniqueInput
    /**
     * In case the Estagiario found by the `where` argument doesn't exist, create a new Estagiario with this data.
     */
    create: XOR<EstagiarioCreateInput, EstagiarioUncheckedCreateInput>
    /**
     * In case the Estagiario was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EstagiarioUpdateInput, EstagiarioUncheckedUpdateInput>
  }

  /**
   * Estagiario delete
   */
  export type EstagiarioDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Estagiario
     */
    select?: EstagiarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Estagiario
     */
    omit?: EstagiarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EstagiarioInclude<ExtArgs> | null
    /**
     * Filter which Estagiario to delete.
     */
    where: EstagiarioWhereUniqueInput
  }

  /**
   * Estagiario deleteMany
   */
  export type EstagiarioDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Estagiarios to delete
     */
    where?: EstagiarioWhereInput
    /**
     * Limit how many Estagiarios to delete.
     */
    limit?: number
  }

  /**
   * Estagiario.relatorio
   */
  export type Estagiario$relatorioArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Relatorio
     */
    select?: RelatorioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Relatorio
     */
    omit?: RelatorioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RelatorioInclude<ExtArgs> | null
    where?: RelatorioWhereInput
    orderBy?: RelatorioOrderByWithRelationInput | RelatorioOrderByWithRelationInput[]
    cursor?: RelatorioWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RelatorioScalarFieldEnum | RelatorioScalarFieldEnum[]
  }

  /**
   * Estagiario without action
   */
  export type EstagiarioDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Estagiario
     */
    select?: EstagiarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Estagiario
     */
    omit?: EstagiarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EstagiarioInclude<ExtArgs> | null
  }


  /**
   * Model Relatorio
   */

  export type AggregateRelatorio = {
    _count: RelatorioCountAggregateOutputType | null
    _avg: RelatorioAvgAggregateOutputType | null
    _sum: RelatorioSumAggregateOutputType | null
    _min: RelatorioMinAggregateOutputType | null
    _max: RelatorioMaxAggregateOutputType | null
  }

  export type RelatorioAvgAggregateOutputType = {
    id: number | null
    estagiarioId: number | null
  }

  export type RelatorioSumAggregateOutputType = {
    id: number | null
    estagiarioId: number | null
  }

  export type RelatorioMinAggregateOutputType = {
    id: number | null
    titulo: string | null
    descricao: string | null
    dataEnvio: string | null
    estagiarioId: number | null
  }

  export type RelatorioMaxAggregateOutputType = {
    id: number | null
    titulo: string | null
    descricao: string | null
    dataEnvio: string | null
    estagiarioId: number | null
  }

  export type RelatorioCountAggregateOutputType = {
    id: number
    titulo: number
    descricao: number
    dataEnvio: number
    estagiarioId: number
    _all: number
  }


  export type RelatorioAvgAggregateInputType = {
    id?: true
    estagiarioId?: true
  }

  export type RelatorioSumAggregateInputType = {
    id?: true
    estagiarioId?: true
  }

  export type RelatorioMinAggregateInputType = {
    id?: true
    titulo?: true
    descricao?: true
    dataEnvio?: true
    estagiarioId?: true
  }

  export type RelatorioMaxAggregateInputType = {
    id?: true
    titulo?: true
    descricao?: true
    dataEnvio?: true
    estagiarioId?: true
  }

  export type RelatorioCountAggregateInputType = {
    id?: true
    titulo?: true
    descricao?: true
    dataEnvio?: true
    estagiarioId?: true
    _all?: true
  }

  export type RelatorioAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Relatorio to aggregate.
     */
    where?: RelatorioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Relatorios to fetch.
     */
    orderBy?: RelatorioOrderByWithRelationInput | RelatorioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RelatorioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Relatorios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Relatorios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Relatorios
    **/
    _count?: true | RelatorioCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RelatorioAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RelatorioSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RelatorioMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RelatorioMaxAggregateInputType
  }

  export type GetRelatorioAggregateType<T extends RelatorioAggregateArgs> = {
        [P in keyof T & keyof AggregateRelatorio]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRelatorio[P]>
      : GetScalarType<T[P], AggregateRelatorio[P]>
  }




  export type RelatorioGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RelatorioWhereInput
    orderBy?: RelatorioOrderByWithAggregationInput | RelatorioOrderByWithAggregationInput[]
    by: RelatorioScalarFieldEnum[] | RelatorioScalarFieldEnum
    having?: RelatorioScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RelatorioCountAggregateInputType | true
    _avg?: RelatorioAvgAggregateInputType
    _sum?: RelatorioSumAggregateInputType
    _min?: RelatorioMinAggregateInputType
    _max?: RelatorioMaxAggregateInputType
  }

  export type RelatorioGroupByOutputType = {
    id: number
    titulo: string
    descricao: string
    dataEnvio: string
    estagiarioId: number
    _count: RelatorioCountAggregateOutputType | null
    _avg: RelatorioAvgAggregateOutputType | null
    _sum: RelatorioSumAggregateOutputType | null
    _min: RelatorioMinAggregateOutputType | null
    _max: RelatorioMaxAggregateOutputType | null
  }

  type GetRelatorioGroupByPayload<T extends RelatorioGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RelatorioGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RelatorioGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RelatorioGroupByOutputType[P]>
            : GetScalarType<T[P], RelatorioGroupByOutputType[P]>
        }
      >
    >


  export type RelatorioSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    titulo?: boolean
    descricao?: boolean
    dataEnvio?: boolean
    estagiarioId?: boolean
    estagiario?: boolean | EstagiarioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["relatorio"]>



  export type RelatorioSelectScalar = {
    id?: boolean
    titulo?: boolean
    descricao?: boolean
    dataEnvio?: boolean
    estagiarioId?: boolean
  }

  export type RelatorioOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "titulo" | "descricao" | "dataEnvio" | "estagiarioId", ExtArgs["result"]["relatorio"]>
  export type RelatorioInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    estagiario?: boolean | EstagiarioDefaultArgs<ExtArgs>
  }

  export type $RelatorioPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Relatorio"
    objects: {
      estagiario: Prisma.$EstagiarioPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      titulo: string
      descricao: string
      dataEnvio: string
      estagiarioId: number
    }, ExtArgs["result"]["relatorio"]>
    composites: {}
  }

  type RelatorioGetPayload<S extends boolean | null | undefined | RelatorioDefaultArgs> = $Result.GetResult<Prisma.$RelatorioPayload, S>

  type RelatorioCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RelatorioFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RelatorioCountAggregateInputType | true
    }

  export interface RelatorioDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Relatorio'], meta: { name: 'Relatorio' } }
    /**
     * Find zero or one Relatorio that matches the filter.
     * @param {RelatorioFindUniqueArgs} args - Arguments to find a Relatorio
     * @example
     * // Get one Relatorio
     * const relatorio = await prisma.relatorio.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RelatorioFindUniqueArgs>(args: SelectSubset<T, RelatorioFindUniqueArgs<ExtArgs>>): Prisma__RelatorioClient<$Result.GetResult<Prisma.$RelatorioPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Relatorio that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RelatorioFindUniqueOrThrowArgs} args - Arguments to find a Relatorio
     * @example
     * // Get one Relatorio
     * const relatorio = await prisma.relatorio.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RelatorioFindUniqueOrThrowArgs>(args: SelectSubset<T, RelatorioFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RelatorioClient<$Result.GetResult<Prisma.$RelatorioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Relatorio that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RelatorioFindFirstArgs} args - Arguments to find a Relatorio
     * @example
     * // Get one Relatorio
     * const relatorio = await prisma.relatorio.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RelatorioFindFirstArgs>(args?: SelectSubset<T, RelatorioFindFirstArgs<ExtArgs>>): Prisma__RelatorioClient<$Result.GetResult<Prisma.$RelatorioPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Relatorio that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RelatorioFindFirstOrThrowArgs} args - Arguments to find a Relatorio
     * @example
     * // Get one Relatorio
     * const relatorio = await prisma.relatorio.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RelatorioFindFirstOrThrowArgs>(args?: SelectSubset<T, RelatorioFindFirstOrThrowArgs<ExtArgs>>): Prisma__RelatorioClient<$Result.GetResult<Prisma.$RelatorioPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Relatorios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RelatorioFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Relatorios
     * const relatorios = await prisma.relatorio.findMany()
     * 
     * // Get first 10 Relatorios
     * const relatorios = await prisma.relatorio.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const relatorioWithIdOnly = await prisma.relatorio.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RelatorioFindManyArgs>(args?: SelectSubset<T, RelatorioFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RelatorioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Relatorio.
     * @param {RelatorioCreateArgs} args - Arguments to create a Relatorio.
     * @example
     * // Create one Relatorio
     * const Relatorio = await prisma.relatorio.create({
     *   data: {
     *     // ... data to create a Relatorio
     *   }
     * })
     * 
     */
    create<T extends RelatorioCreateArgs>(args: SelectSubset<T, RelatorioCreateArgs<ExtArgs>>): Prisma__RelatorioClient<$Result.GetResult<Prisma.$RelatorioPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Relatorios.
     * @param {RelatorioCreateManyArgs} args - Arguments to create many Relatorios.
     * @example
     * // Create many Relatorios
     * const relatorio = await prisma.relatorio.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RelatorioCreateManyArgs>(args?: SelectSubset<T, RelatorioCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Relatorio.
     * @param {RelatorioDeleteArgs} args - Arguments to delete one Relatorio.
     * @example
     * // Delete one Relatorio
     * const Relatorio = await prisma.relatorio.delete({
     *   where: {
     *     // ... filter to delete one Relatorio
     *   }
     * })
     * 
     */
    delete<T extends RelatorioDeleteArgs>(args: SelectSubset<T, RelatorioDeleteArgs<ExtArgs>>): Prisma__RelatorioClient<$Result.GetResult<Prisma.$RelatorioPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Relatorio.
     * @param {RelatorioUpdateArgs} args - Arguments to update one Relatorio.
     * @example
     * // Update one Relatorio
     * const relatorio = await prisma.relatorio.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RelatorioUpdateArgs>(args: SelectSubset<T, RelatorioUpdateArgs<ExtArgs>>): Prisma__RelatorioClient<$Result.GetResult<Prisma.$RelatorioPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Relatorios.
     * @param {RelatorioDeleteManyArgs} args - Arguments to filter Relatorios to delete.
     * @example
     * // Delete a few Relatorios
     * const { count } = await prisma.relatorio.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RelatorioDeleteManyArgs>(args?: SelectSubset<T, RelatorioDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Relatorios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RelatorioUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Relatorios
     * const relatorio = await prisma.relatorio.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RelatorioUpdateManyArgs>(args: SelectSubset<T, RelatorioUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Relatorio.
     * @param {RelatorioUpsertArgs} args - Arguments to update or create a Relatorio.
     * @example
     * // Update or create a Relatorio
     * const relatorio = await prisma.relatorio.upsert({
     *   create: {
     *     // ... data to create a Relatorio
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Relatorio we want to update
     *   }
     * })
     */
    upsert<T extends RelatorioUpsertArgs>(args: SelectSubset<T, RelatorioUpsertArgs<ExtArgs>>): Prisma__RelatorioClient<$Result.GetResult<Prisma.$RelatorioPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Relatorios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RelatorioCountArgs} args - Arguments to filter Relatorios to count.
     * @example
     * // Count the number of Relatorios
     * const count = await prisma.relatorio.count({
     *   where: {
     *     // ... the filter for the Relatorios we want to count
     *   }
     * })
    **/
    count<T extends RelatorioCountArgs>(
      args?: Subset<T, RelatorioCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RelatorioCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Relatorio.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RelatorioAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RelatorioAggregateArgs>(args: Subset<T, RelatorioAggregateArgs>): Prisma.PrismaPromise<GetRelatorioAggregateType<T>>

    /**
     * Group by Relatorio.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RelatorioGroupByArgs} args - Group by arguments.
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
      T extends RelatorioGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RelatorioGroupByArgs['orderBy'] }
        : { orderBy?: RelatorioGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, RelatorioGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRelatorioGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Relatorio model
   */
  readonly fields: RelatorioFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Relatorio.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RelatorioClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    estagiario<T extends EstagiarioDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EstagiarioDefaultArgs<ExtArgs>>): Prisma__EstagiarioClient<$Result.GetResult<Prisma.$EstagiarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Relatorio model
   */
  interface RelatorioFieldRefs {
    readonly id: FieldRef<"Relatorio", 'Int'>
    readonly titulo: FieldRef<"Relatorio", 'String'>
    readonly descricao: FieldRef<"Relatorio", 'String'>
    readonly dataEnvio: FieldRef<"Relatorio", 'String'>
    readonly estagiarioId: FieldRef<"Relatorio", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Relatorio findUnique
   */
  export type RelatorioFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Relatorio
     */
    select?: RelatorioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Relatorio
     */
    omit?: RelatorioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RelatorioInclude<ExtArgs> | null
    /**
     * Filter, which Relatorio to fetch.
     */
    where: RelatorioWhereUniqueInput
  }

  /**
   * Relatorio findUniqueOrThrow
   */
  export type RelatorioFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Relatorio
     */
    select?: RelatorioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Relatorio
     */
    omit?: RelatorioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RelatorioInclude<ExtArgs> | null
    /**
     * Filter, which Relatorio to fetch.
     */
    where: RelatorioWhereUniqueInput
  }

  /**
   * Relatorio findFirst
   */
  export type RelatorioFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Relatorio
     */
    select?: RelatorioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Relatorio
     */
    omit?: RelatorioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RelatorioInclude<ExtArgs> | null
    /**
     * Filter, which Relatorio to fetch.
     */
    where?: RelatorioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Relatorios to fetch.
     */
    orderBy?: RelatorioOrderByWithRelationInput | RelatorioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Relatorios.
     */
    cursor?: RelatorioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Relatorios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Relatorios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Relatorios.
     */
    distinct?: RelatorioScalarFieldEnum | RelatorioScalarFieldEnum[]
  }

  /**
   * Relatorio findFirstOrThrow
   */
  export type RelatorioFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Relatorio
     */
    select?: RelatorioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Relatorio
     */
    omit?: RelatorioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RelatorioInclude<ExtArgs> | null
    /**
     * Filter, which Relatorio to fetch.
     */
    where?: RelatorioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Relatorios to fetch.
     */
    orderBy?: RelatorioOrderByWithRelationInput | RelatorioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Relatorios.
     */
    cursor?: RelatorioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Relatorios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Relatorios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Relatorios.
     */
    distinct?: RelatorioScalarFieldEnum | RelatorioScalarFieldEnum[]
  }

  /**
   * Relatorio findMany
   */
  export type RelatorioFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Relatorio
     */
    select?: RelatorioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Relatorio
     */
    omit?: RelatorioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RelatorioInclude<ExtArgs> | null
    /**
     * Filter, which Relatorios to fetch.
     */
    where?: RelatorioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Relatorios to fetch.
     */
    orderBy?: RelatorioOrderByWithRelationInput | RelatorioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Relatorios.
     */
    cursor?: RelatorioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Relatorios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Relatorios.
     */
    skip?: number
    distinct?: RelatorioScalarFieldEnum | RelatorioScalarFieldEnum[]
  }

  /**
   * Relatorio create
   */
  export type RelatorioCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Relatorio
     */
    select?: RelatorioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Relatorio
     */
    omit?: RelatorioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RelatorioInclude<ExtArgs> | null
    /**
     * The data needed to create a Relatorio.
     */
    data: XOR<RelatorioCreateInput, RelatorioUncheckedCreateInput>
  }

  /**
   * Relatorio createMany
   */
  export type RelatorioCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Relatorios.
     */
    data: RelatorioCreateManyInput | RelatorioCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Relatorio update
   */
  export type RelatorioUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Relatorio
     */
    select?: RelatorioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Relatorio
     */
    omit?: RelatorioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RelatorioInclude<ExtArgs> | null
    /**
     * The data needed to update a Relatorio.
     */
    data: XOR<RelatorioUpdateInput, RelatorioUncheckedUpdateInput>
    /**
     * Choose, which Relatorio to update.
     */
    where: RelatorioWhereUniqueInput
  }

  /**
   * Relatorio updateMany
   */
  export type RelatorioUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Relatorios.
     */
    data: XOR<RelatorioUpdateManyMutationInput, RelatorioUncheckedUpdateManyInput>
    /**
     * Filter which Relatorios to update
     */
    where?: RelatorioWhereInput
    /**
     * Limit how many Relatorios to update.
     */
    limit?: number
  }

  /**
   * Relatorio upsert
   */
  export type RelatorioUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Relatorio
     */
    select?: RelatorioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Relatorio
     */
    omit?: RelatorioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RelatorioInclude<ExtArgs> | null
    /**
     * The filter to search for the Relatorio to update in case it exists.
     */
    where: RelatorioWhereUniqueInput
    /**
     * In case the Relatorio found by the `where` argument doesn't exist, create a new Relatorio with this data.
     */
    create: XOR<RelatorioCreateInput, RelatorioUncheckedCreateInput>
    /**
     * In case the Relatorio was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RelatorioUpdateInput, RelatorioUncheckedUpdateInput>
  }

  /**
   * Relatorio delete
   */
  export type RelatorioDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Relatorio
     */
    select?: RelatorioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Relatorio
     */
    omit?: RelatorioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RelatorioInclude<ExtArgs> | null
    /**
     * Filter which Relatorio to delete.
     */
    where: RelatorioWhereUniqueInput
  }

  /**
   * Relatorio deleteMany
   */
  export type RelatorioDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Relatorios to delete
     */
    where?: RelatorioWhereInput
    /**
     * Limit how many Relatorios to delete.
     */
    limit?: number
  }

  /**
   * Relatorio without action
   */
  export type RelatorioDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Relatorio
     */
    select?: RelatorioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Relatorio
     */
    omit?: RelatorioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RelatorioInclude<ExtArgs> | null
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


  export const EmpresaScalarFieldEnum: {
    id: 'id',
    ramo: 'ramo',
    nome: 'nome',
    cnpj: 'cnpj',
    telefone: 'telefone'
  };

  export type EmpresaScalarFieldEnum = (typeof EmpresaScalarFieldEnum)[keyof typeof EmpresaScalarFieldEnum]


  export const EstagiarioScalarFieldEnum: {
    id: 'id',
    nome: 'nome',
    telefone: 'telefone',
    curso: 'curso',
    email: 'email',
    empresaId: 'empresaId'
  };

  export type EstagiarioScalarFieldEnum = (typeof EstagiarioScalarFieldEnum)[keyof typeof EstagiarioScalarFieldEnum]


  export const RelatorioScalarFieldEnum: {
    id: 'id',
    titulo: 'titulo',
    descricao: 'descricao',
    dataEnvio: 'dataEnvio',
    estagiarioId: 'estagiarioId'
  };

  export type RelatorioScalarFieldEnum = (typeof RelatorioScalarFieldEnum)[keyof typeof RelatorioScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const EmpresaOrderByRelevanceFieldEnum: {
    ramo: 'ramo',
    nome: 'nome',
    cnpj: 'cnpj',
    telefone: 'telefone'
  };

  export type EmpresaOrderByRelevanceFieldEnum = (typeof EmpresaOrderByRelevanceFieldEnum)[keyof typeof EmpresaOrderByRelevanceFieldEnum]


  export const EstagiarioOrderByRelevanceFieldEnum: {
    nome: 'nome',
    telefone: 'telefone',
    curso: 'curso',
    email: 'email'
  };

  export type EstagiarioOrderByRelevanceFieldEnum = (typeof EstagiarioOrderByRelevanceFieldEnum)[keyof typeof EstagiarioOrderByRelevanceFieldEnum]


  export const RelatorioOrderByRelevanceFieldEnum: {
    titulo: 'titulo',
    descricao: 'descricao',
    dataEnvio: 'dataEnvio'
  };

  export type RelatorioOrderByRelevanceFieldEnum = (typeof RelatorioOrderByRelevanceFieldEnum)[keyof typeof RelatorioOrderByRelevanceFieldEnum]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type EmpresaWhereInput = {
    AND?: EmpresaWhereInput | EmpresaWhereInput[]
    OR?: EmpresaWhereInput[]
    NOT?: EmpresaWhereInput | EmpresaWhereInput[]
    id?: IntFilter<"Empresa"> | number
    ramo?: StringFilter<"Empresa"> | string
    nome?: StringFilter<"Empresa"> | string
    cnpj?: StringNullableFilter<"Empresa"> | string | null
    telefone?: StringNullableFilter<"Empresa"> | string | null
    estagiarios?: EstagiarioListRelationFilter
  }

  export type EmpresaOrderByWithRelationInput = {
    id?: SortOrder
    ramo?: SortOrder
    nome?: SortOrder
    cnpj?: SortOrderInput | SortOrder
    telefone?: SortOrderInput | SortOrder
    estagiarios?: EstagiarioOrderByRelationAggregateInput
    _relevance?: EmpresaOrderByRelevanceInput
  }

  export type EmpresaWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: EmpresaWhereInput | EmpresaWhereInput[]
    OR?: EmpresaWhereInput[]
    NOT?: EmpresaWhereInput | EmpresaWhereInput[]
    ramo?: StringFilter<"Empresa"> | string
    nome?: StringFilter<"Empresa"> | string
    cnpj?: StringNullableFilter<"Empresa"> | string | null
    telefone?: StringNullableFilter<"Empresa"> | string | null
    estagiarios?: EstagiarioListRelationFilter
  }, "id">

  export type EmpresaOrderByWithAggregationInput = {
    id?: SortOrder
    ramo?: SortOrder
    nome?: SortOrder
    cnpj?: SortOrderInput | SortOrder
    telefone?: SortOrderInput | SortOrder
    _count?: EmpresaCountOrderByAggregateInput
    _avg?: EmpresaAvgOrderByAggregateInput
    _max?: EmpresaMaxOrderByAggregateInput
    _min?: EmpresaMinOrderByAggregateInput
    _sum?: EmpresaSumOrderByAggregateInput
  }

  export type EmpresaScalarWhereWithAggregatesInput = {
    AND?: EmpresaScalarWhereWithAggregatesInput | EmpresaScalarWhereWithAggregatesInput[]
    OR?: EmpresaScalarWhereWithAggregatesInput[]
    NOT?: EmpresaScalarWhereWithAggregatesInput | EmpresaScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Empresa"> | number
    ramo?: StringWithAggregatesFilter<"Empresa"> | string
    nome?: StringWithAggregatesFilter<"Empresa"> | string
    cnpj?: StringNullableWithAggregatesFilter<"Empresa"> | string | null
    telefone?: StringNullableWithAggregatesFilter<"Empresa"> | string | null
  }

  export type EstagiarioWhereInput = {
    AND?: EstagiarioWhereInput | EstagiarioWhereInput[]
    OR?: EstagiarioWhereInput[]
    NOT?: EstagiarioWhereInput | EstagiarioWhereInput[]
    id?: IntFilter<"Estagiario"> | number
    nome?: StringFilter<"Estagiario"> | string
    telefone?: StringFilter<"Estagiario"> | string
    curso?: StringFilter<"Estagiario"> | string
    email?: StringNullableFilter<"Estagiario"> | string | null
    empresaId?: IntFilter<"Estagiario"> | number
    empresa?: XOR<EmpresaScalarRelationFilter, EmpresaWhereInput>
    relatorio?: RelatorioListRelationFilter
  }

  export type EstagiarioOrderByWithRelationInput = {
    id?: SortOrder
    nome?: SortOrder
    telefone?: SortOrder
    curso?: SortOrder
    email?: SortOrderInput | SortOrder
    empresaId?: SortOrder
    empresa?: EmpresaOrderByWithRelationInput
    relatorio?: RelatorioOrderByRelationAggregateInput
    _relevance?: EstagiarioOrderByRelevanceInput
  }

  export type EstagiarioWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: EstagiarioWhereInput | EstagiarioWhereInput[]
    OR?: EstagiarioWhereInput[]
    NOT?: EstagiarioWhereInput | EstagiarioWhereInput[]
    nome?: StringFilter<"Estagiario"> | string
    telefone?: StringFilter<"Estagiario"> | string
    curso?: StringFilter<"Estagiario"> | string
    email?: StringNullableFilter<"Estagiario"> | string | null
    empresaId?: IntFilter<"Estagiario"> | number
    empresa?: XOR<EmpresaScalarRelationFilter, EmpresaWhereInput>
    relatorio?: RelatorioListRelationFilter
  }, "id">

  export type EstagiarioOrderByWithAggregationInput = {
    id?: SortOrder
    nome?: SortOrder
    telefone?: SortOrder
    curso?: SortOrder
    email?: SortOrderInput | SortOrder
    empresaId?: SortOrder
    _count?: EstagiarioCountOrderByAggregateInput
    _avg?: EstagiarioAvgOrderByAggregateInput
    _max?: EstagiarioMaxOrderByAggregateInput
    _min?: EstagiarioMinOrderByAggregateInput
    _sum?: EstagiarioSumOrderByAggregateInput
  }

  export type EstagiarioScalarWhereWithAggregatesInput = {
    AND?: EstagiarioScalarWhereWithAggregatesInput | EstagiarioScalarWhereWithAggregatesInput[]
    OR?: EstagiarioScalarWhereWithAggregatesInput[]
    NOT?: EstagiarioScalarWhereWithAggregatesInput | EstagiarioScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Estagiario"> | number
    nome?: StringWithAggregatesFilter<"Estagiario"> | string
    telefone?: StringWithAggregatesFilter<"Estagiario"> | string
    curso?: StringWithAggregatesFilter<"Estagiario"> | string
    email?: StringNullableWithAggregatesFilter<"Estagiario"> | string | null
    empresaId?: IntWithAggregatesFilter<"Estagiario"> | number
  }

  export type RelatorioWhereInput = {
    AND?: RelatorioWhereInput | RelatorioWhereInput[]
    OR?: RelatorioWhereInput[]
    NOT?: RelatorioWhereInput | RelatorioWhereInput[]
    id?: IntFilter<"Relatorio"> | number
    titulo?: StringFilter<"Relatorio"> | string
    descricao?: StringFilter<"Relatorio"> | string
    dataEnvio?: StringFilter<"Relatorio"> | string
    estagiarioId?: IntFilter<"Relatorio"> | number
    estagiario?: XOR<EstagiarioScalarRelationFilter, EstagiarioWhereInput>
  }

  export type RelatorioOrderByWithRelationInput = {
    id?: SortOrder
    titulo?: SortOrder
    descricao?: SortOrder
    dataEnvio?: SortOrder
    estagiarioId?: SortOrder
    estagiario?: EstagiarioOrderByWithRelationInput
    _relevance?: RelatorioOrderByRelevanceInput
  }

  export type RelatorioWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: RelatorioWhereInput | RelatorioWhereInput[]
    OR?: RelatorioWhereInput[]
    NOT?: RelatorioWhereInput | RelatorioWhereInput[]
    titulo?: StringFilter<"Relatorio"> | string
    descricao?: StringFilter<"Relatorio"> | string
    dataEnvio?: StringFilter<"Relatorio"> | string
    estagiarioId?: IntFilter<"Relatorio"> | number
    estagiario?: XOR<EstagiarioScalarRelationFilter, EstagiarioWhereInput>
  }, "id">

  export type RelatorioOrderByWithAggregationInput = {
    id?: SortOrder
    titulo?: SortOrder
    descricao?: SortOrder
    dataEnvio?: SortOrder
    estagiarioId?: SortOrder
    _count?: RelatorioCountOrderByAggregateInput
    _avg?: RelatorioAvgOrderByAggregateInput
    _max?: RelatorioMaxOrderByAggregateInput
    _min?: RelatorioMinOrderByAggregateInput
    _sum?: RelatorioSumOrderByAggregateInput
  }

  export type RelatorioScalarWhereWithAggregatesInput = {
    AND?: RelatorioScalarWhereWithAggregatesInput | RelatorioScalarWhereWithAggregatesInput[]
    OR?: RelatorioScalarWhereWithAggregatesInput[]
    NOT?: RelatorioScalarWhereWithAggregatesInput | RelatorioScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Relatorio"> | number
    titulo?: StringWithAggregatesFilter<"Relatorio"> | string
    descricao?: StringWithAggregatesFilter<"Relatorio"> | string
    dataEnvio?: StringWithAggregatesFilter<"Relatorio"> | string
    estagiarioId?: IntWithAggregatesFilter<"Relatorio"> | number
  }

  export type EmpresaCreateInput = {
    ramo: string
    nome: string
    cnpj?: string | null
    telefone?: string | null
    estagiarios?: EstagiarioCreateNestedManyWithoutEmpresaInput
  }

  export type EmpresaUncheckedCreateInput = {
    id?: number
    ramo: string
    nome: string
    cnpj?: string | null
    telefone?: string | null
    estagiarios?: EstagiarioUncheckedCreateNestedManyWithoutEmpresaInput
  }

  export type EmpresaUpdateInput = {
    ramo?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    cnpj?: NullableStringFieldUpdateOperationsInput | string | null
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    estagiarios?: EstagiarioUpdateManyWithoutEmpresaNestedInput
  }

  export type EmpresaUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    ramo?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    cnpj?: NullableStringFieldUpdateOperationsInput | string | null
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    estagiarios?: EstagiarioUncheckedUpdateManyWithoutEmpresaNestedInput
  }

  export type EmpresaCreateManyInput = {
    id?: number
    ramo: string
    nome: string
    cnpj?: string | null
    telefone?: string | null
  }

  export type EmpresaUpdateManyMutationInput = {
    ramo?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    cnpj?: NullableStringFieldUpdateOperationsInput | string | null
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type EmpresaUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    ramo?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    cnpj?: NullableStringFieldUpdateOperationsInput | string | null
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type EstagiarioCreateInput = {
    nome: string
    telefone: string
    curso: string
    email?: string | null
    empresa: EmpresaCreateNestedOneWithoutEstagiariosInput
    relatorio?: RelatorioCreateNestedManyWithoutEstagiarioInput
  }

  export type EstagiarioUncheckedCreateInput = {
    id?: number
    nome: string
    telefone: string
    curso: string
    email?: string | null
    empresaId: number
    relatorio?: RelatorioUncheckedCreateNestedManyWithoutEstagiarioInput
  }

  export type EstagiarioUpdateInput = {
    nome?: StringFieldUpdateOperationsInput | string
    telefone?: StringFieldUpdateOperationsInput | string
    curso?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    empresa?: EmpresaUpdateOneRequiredWithoutEstagiariosNestedInput
    relatorio?: RelatorioUpdateManyWithoutEstagiarioNestedInput
  }

  export type EstagiarioUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    telefone?: StringFieldUpdateOperationsInput | string
    curso?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    empresaId?: IntFieldUpdateOperationsInput | number
    relatorio?: RelatorioUncheckedUpdateManyWithoutEstagiarioNestedInput
  }

  export type EstagiarioCreateManyInput = {
    id?: number
    nome: string
    telefone: string
    curso: string
    email?: string | null
    empresaId: number
  }

  export type EstagiarioUpdateManyMutationInput = {
    nome?: StringFieldUpdateOperationsInput | string
    telefone?: StringFieldUpdateOperationsInput | string
    curso?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type EstagiarioUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    telefone?: StringFieldUpdateOperationsInput | string
    curso?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    empresaId?: IntFieldUpdateOperationsInput | number
  }

  export type RelatorioCreateInput = {
    titulo: string
    descricao: string
    dataEnvio: string
    estagiario: EstagiarioCreateNestedOneWithoutRelatorioInput
  }

  export type RelatorioUncheckedCreateInput = {
    id?: number
    titulo: string
    descricao: string
    dataEnvio: string
    estagiarioId: number
  }

  export type RelatorioUpdateInput = {
    titulo?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    dataEnvio?: StringFieldUpdateOperationsInput | string
    estagiario?: EstagiarioUpdateOneRequiredWithoutRelatorioNestedInput
  }

  export type RelatorioUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    titulo?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    dataEnvio?: StringFieldUpdateOperationsInput | string
    estagiarioId?: IntFieldUpdateOperationsInput | number
  }

  export type RelatorioCreateManyInput = {
    id?: number
    titulo: string
    descricao: string
    dataEnvio: string
    estagiarioId: number
  }

  export type RelatorioUpdateManyMutationInput = {
    titulo?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    dataEnvio?: StringFieldUpdateOperationsInput | string
  }

  export type RelatorioUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    titulo?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    dataEnvio?: StringFieldUpdateOperationsInput | string
    estagiarioId?: IntFieldUpdateOperationsInput | number
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type EstagiarioListRelationFilter = {
    every?: EstagiarioWhereInput
    some?: EstagiarioWhereInput
    none?: EstagiarioWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type EstagiarioOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type EmpresaOrderByRelevanceInput = {
    fields: EmpresaOrderByRelevanceFieldEnum | EmpresaOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type EmpresaCountOrderByAggregateInput = {
    id?: SortOrder
    ramo?: SortOrder
    nome?: SortOrder
    cnpj?: SortOrder
    telefone?: SortOrder
  }

  export type EmpresaAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type EmpresaMaxOrderByAggregateInput = {
    id?: SortOrder
    ramo?: SortOrder
    nome?: SortOrder
    cnpj?: SortOrder
    telefone?: SortOrder
  }

  export type EmpresaMinOrderByAggregateInput = {
    id?: SortOrder
    ramo?: SortOrder
    nome?: SortOrder
    cnpj?: SortOrder
    telefone?: SortOrder
  }

  export type EmpresaSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type EmpresaScalarRelationFilter = {
    is?: EmpresaWhereInput
    isNot?: EmpresaWhereInput
  }

  export type RelatorioListRelationFilter = {
    every?: RelatorioWhereInput
    some?: RelatorioWhereInput
    none?: RelatorioWhereInput
  }

  export type RelatorioOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type EstagiarioOrderByRelevanceInput = {
    fields: EstagiarioOrderByRelevanceFieldEnum | EstagiarioOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type EstagiarioCountOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    telefone?: SortOrder
    curso?: SortOrder
    email?: SortOrder
    empresaId?: SortOrder
  }

  export type EstagiarioAvgOrderByAggregateInput = {
    id?: SortOrder
    empresaId?: SortOrder
  }

  export type EstagiarioMaxOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    telefone?: SortOrder
    curso?: SortOrder
    email?: SortOrder
    empresaId?: SortOrder
  }

  export type EstagiarioMinOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    telefone?: SortOrder
    curso?: SortOrder
    email?: SortOrder
    empresaId?: SortOrder
  }

  export type EstagiarioSumOrderByAggregateInput = {
    id?: SortOrder
    empresaId?: SortOrder
  }

  export type EstagiarioScalarRelationFilter = {
    is?: EstagiarioWhereInput
    isNot?: EstagiarioWhereInput
  }

  export type RelatorioOrderByRelevanceInput = {
    fields: RelatorioOrderByRelevanceFieldEnum | RelatorioOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type RelatorioCountOrderByAggregateInput = {
    id?: SortOrder
    titulo?: SortOrder
    descricao?: SortOrder
    dataEnvio?: SortOrder
    estagiarioId?: SortOrder
  }

  export type RelatorioAvgOrderByAggregateInput = {
    id?: SortOrder
    estagiarioId?: SortOrder
  }

  export type RelatorioMaxOrderByAggregateInput = {
    id?: SortOrder
    titulo?: SortOrder
    descricao?: SortOrder
    dataEnvio?: SortOrder
    estagiarioId?: SortOrder
  }

  export type RelatorioMinOrderByAggregateInput = {
    id?: SortOrder
    titulo?: SortOrder
    descricao?: SortOrder
    dataEnvio?: SortOrder
    estagiarioId?: SortOrder
  }

  export type RelatorioSumOrderByAggregateInput = {
    id?: SortOrder
    estagiarioId?: SortOrder
  }

  export type EstagiarioCreateNestedManyWithoutEmpresaInput = {
    create?: XOR<EstagiarioCreateWithoutEmpresaInput, EstagiarioUncheckedCreateWithoutEmpresaInput> | EstagiarioCreateWithoutEmpresaInput[] | EstagiarioUncheckedCreateWithoutEmpresaInput[]
    connectOrCreate?: EstagiarioCreateOrConnectWithoutEmpresaInput | EstagiarioCreateOrConnectWithoutEmpresaInput[]
    createMany?: EstagiarioCreateManyEmpresaInputEnvelope
    connect?: EstagiarioWhereUniqueInput | EstagiarioWhereUniqueInput[]
  }

  export type EstagiarioUncheckedCreateNestedManyWithoutEmpresaInput = {
    create?: XOR<EstagiarioCreateWithoutEmpresaInput, EstagiarioUncheckedCreateWithoutEmpresaInput> | EstagiarioCreateWithoutEmpresaInput[] | EstagiarioUncheckedCreateWithoutEmpresaInput[]
    connectOrCreate?: EstagiarioCreateOrConnectWithoutEmpresaInput | EstagiarioCreateOrConnectWithoutEmpresaInput[]
    createMany?: EstagiarioCreateManyEmpresaInputEnvelope
    connect?: EstagiarioWhereUniqueInput | EstagiarioWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type EstagiarioUpdateManyWithoutEmpresaNestedInput = {
    create?: XOR<EstagiarioCreateWithoutEmpresaInput, EstagiarioUncheckedCreateWithoutEmpresaInput> | EstagiarioCreateWithoutEmpresaInput[] | EstagiarioUncheckedCreateWithoutEmpresaInput[]
    connectOrCreate?: EstagiarioCreateOrConnectWithoutEmpresaInput | EstagiarioCreateOrConnectWithoutEmpresaInput[]
    upsert?: EstagiarioUpsertWithWhereUniqueWithoutEmpresaInput | EstagiarioUpsertWithWhereUniqueWithoutEmpresaInput[]
    createMany?: EstagiarioCreateManyEmpresaInputEnvelope
    set?: EstagiarioWhereUniqueInput | EstagiarioWhereUniqueInput[]
    disconnect?: EstagiarioWhereUniqueInput | EstagiarioWhereUniqueInput[]
    delete?: EstagiarioWhereUniqueInput | EstagiarioWhereUniqueInput[]
    connect?: EstagiarioWhereUniqueInput | EstagiarioWhereUniqueInput[]
    update?: EstagiarioUpdateWithWhereUniqueWithoutEmpresaInput | EstagiarioUpdateWithWhereUniqueWithoutEmpresaInput[]
    updateMany?: EstagiarioUpdateManyWithWhereWithoutEmpresaInput | EstagiarioUpdateManyWithWhereWithoutEmpresaInput[]
    deleteMany?: EstagiarioScalarWhereInput | EstagiarioScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type EstagiarioUncheckedUpdateManyWithoutEmpresaNestedInput = {
    create?: XOR<EstagiarioCreateWithoutEmpresaInput, EstagiarioUncheckedCreateWithoutEmpresaInput> | EstagiarioCreateWithoutEmpresaInput[] | EstagiarioUncheckedCreateWithoutEmpresaInput[]
    connectOrCreate?: EstagiarioCreateOrConnectWithoutEmpresaInput | EstagiarioCreateOrConnectWithoutEmpresaInput[]
    upsert?: EstagiarioUpsertWithWhereUniqueWithoutEmpresaInput | EstagiarioUpsertWithWhereUniqueWithoutEmpresaInput[]
    createMany?: EstagiarioCreateManyEmpresaInputEnvelope
    set?: EstagiarioWhereUniqueInput | EstagiarioWhereUniqueInput[]
    disconnect?: EstagiarioWhereUniqueInput | EstagiarioWhereUniqueInput[]
    delete?: EstagiarioWhereUniqueInput | EstagiarioWhereUniqueInput[]
    connect?: EstagiarioWhereUniqueInput | EstagiarioWhereUniqueInput[]
    update?: EstagiarioUpdateWithWhereUniqueWithoutEmpresaInput | EstagiarioUpdateWithWhereUniqueWithoutEmpresaInput[]
    updateMany?: EstagiarioUpdateManyWithWhereWithoutEmpresaInput | EstagiarioUpdateManyWithWhereWithoutEmpresaInput[]
    deleteMany?: EstagiarioScalarWhereInput | EstagiarioScalarWhereInput[]
  }

  export type EmpresaCreateNestedOneWithoutEstagiariosInput = {
    create?: XOR<EmpresaCreateWithoutEstagiariosInput, EmpresaUncheckedCreateWithoutEstagiariosInput>
    connectOrCreate?: EmpresaCreateOrConnectWithoutEstagiariosInput
    connect?: EmpresaWhereUniqueInput
  }

  export type RelatorioCreateNestedManyWithoutEstagiarioInput = {
    create?: XOR<RelatorioCreateWithoutEstagiarioInput, RelatorioUncheckedCreateWithoutEstagiarioInput> | RelatorioCreateWithoutEstagiarioInput[] | RelatorioUncheckedCreateWithoutEstagiarioInput[]
    connectOrCreate?: RelatorioCreateOrConnectWithoutEstagiarioInput | RelatorioCreateOrConnectWithoutEstagiarioInput[]
    createMany?: RelatorioCreateManyEstagiarioInputEnvelope
    connect?: RelatorioWhereUniqueInput | RelatorioWhereUniqueInput[]
  }

  export type RelatorioUncheckedCreateNestedManyWithoutEstagiarioInput = {
    create?: XOR<RelatorioCreateWithoutEstagiarioInput, RelatorioUncheckedCreateWithoutEstagiarioInput> | RelatorioCreateWithoutEstagiarioInput[] | RelatorioUncheckedCreateWithoutEstagiarioInput[]
    connectOrCreate?: RelatorioCreateOrConnectWithoutEstagiarioInput | RelatorioCreateOrConnectWithoutEstagiarioInput[]
    createMany?: RelatorioCreateManyEstagiarioInputEnvelope
    connect?: RelatorioWhereUniqueInput | RelatorioWhereUniqueInput[]
  }

  export type EmpresaUpdateOneRequiredWithoutEstagiariosNestedInput = {
    create?: XOR<EmpresaCreateWithoutEstagiariosInput, EmpresaUncheckedCreateWithoutEstagiariosInput>
    connectOrCreate?: EmpresaCreateOrConnectWithoutEstagiariosInput
    upsert?: EmpresaUpsertWithoutEstagiariosInput
    connect?: EmpresaWhereUniqueInput
    update?: XOR<XOR<EmpresaUpdateToOneWithWhereWithoutEstagiariosInput, EmpresaUpdateWithoutEstagiariosInput>, EmpresaUncheckedUpdateWithoutEstagiariosInput>
  }

  export type RelatorioUpdateManyWithoutEstagiarioNestedInput = {
    create?: XOR<RelatorioCreateWithoutEstagiarioInput, RelatorioUncheckedCreateWithoutEstagiarioInput> | RelatorioCreateWithoutEstagiarioInput[] | RelatorioUncheckedCreateWithoutEstagiarioInput[]
    connectOrCreate?: RelatorioCreateOrConnectWithoutEstagiarioInput | RelatorioCreateOrConnectWithoutEstagiarioInput[]
    upsert?: RelatorioUpsertWithWhereUniqueWithoutEstagiarioInput | RelatorioUpsertWithWhereUniqueWithoutEstagiarioInput[]
    createMany?: RelatorioCreateManyEstagiarioInputEnvelope
    set?: RelatorioWhereUniqueInput | RelatorioWhereUniqueInput[]
    disconnect?: RelatorioWhereUniqueInput | RelatorioWhereUniqueInput[]
    delete?: RelatorioWhereUniqueInput | RelatorioWhereUniqueInput[]
    connect?: RelatorioWhereUniqueInput | RelatorioWhereUniqueInput[]
    update?: RelatorioUpdateWithWhereUniqueWithoutEstagiarioInput | RelatorioUpdateWithWhereUniqueWithoutEstagiarioInput[]
    updateMany?: RelatorioUpdateManyWithWhereWithoutEstagiarioInput | RelatorioUpdateManyWithWhereWithoutEstagiarioInput[]
    deleteMany?: RelatorioScalarWhereInput | RelatorioScalarWhereInput[]
  }

  export type RelatorioUncheckedUpdateManyWithoutEstagiarioNestedInput = {
    create?: XOR<RelatorioCreateWithoutEstagiarioInput, RelatorioUncheckedCreateWithoutEstagiarioInput> | RelatorioCreateWithoutEstagiarioInput[] | RelatorioUncheckedCreateWithoutEstagiarioInput[]
    connectOrCreate?: RelatorioCreateOrConnectWithoutEstagiarioInput | RelatorioCreateOrConnectWithoutEstagiarioInput[]
    upsert?: RelatorioUpsertWithWhereUniqueWithoutEstagiarioInput | RelatorioUpsertWithWhereUniqueWithoutEstagiarioInput[]
    createMany?: RelatorioCreateManyEstagiarioInputEnvelope
    set?: RelatorioWhereUniqueInput | RelatorioWhereUniqueInput[]
    disconnect?: RelatorioWhereUniqueInput | RelatorioWhereUniqueInput[]
    delete?: RelatorioWhereUniqueInput | RelatorioWhereUniqueInput[]
    connect?: RelatorioWhereUniqueInput | RelatorioWhereUniqueInput[]
    update?: RelatorioUpdateWithWhereUniqueWithoutEstagiarioInput | RelatorioUpdateWithWhereUniqueWithoutEstagiarioInput[]
    updateMany?: RelatorioUpdateManyWithWhereWithoutEstagiarioInput | RelatorioUpdateManyWithWhereWithoutEstagiarioInput[]
    deleteMany?: RelatorioScalarWhereInput | RelatorioScalarWhereInput[]
  }

  export type EstagiarioCreateNestedOneWithoutRelatorioInput = {
    create?: XOR<EstagiarioCreateWithoutRelatorioInput, EstagiarioUncheckedCreateWithoutRelatorioInput>
    connectOrCreate?: EstagiarioCreateOrConnectWithoutRelatorioInput
    connect?: EstagiarioWhereUniqueInput
  }

  export type EstagiarioUpdateOneRequiredWithoutRelatorioNestedInput = {
    create?: XOR<EstagiarioCreateWithoutRelatorioInput, EstagiarioUncheckedCreateWithoutRelatorioInput>
    connectOrCreate?: EstagiarioCreateOrConnectWithoutRelatorioInput
    upsert?: EstagiarioUpsertWithoutRelatorioInput
    connect?: EstagiarioWhereUniqueInput
    update?: XOR<XOR<EstagiarioUpdateToOneWithWhereWithoutRelatorioInput, EstagiarioUpdateWithoutRelatorioInput>, EstagiarioUncheckedUpdateWithoutRelatorioInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type EstagiarioCreateWithoutEmpresaInput = {
    nome: string
    telefone: string
    curso: string
    email?: string | null
    relatorio?: RelatorioCreateNestedManyWithoutEstagiarioInput
  }

  export type EstagiarioUncheckedCreateWithoutEmpresaInput = {
    id?: number
    nome: string
    telefone: string
    curso: string
    email?: string | null
    relatorio?: RelatorioUncheckedCreateNestedManyWithoutEstagiarioInput
  }

  export type EstagiarioCreateOrConnectWithoutEmpresaInput = {
    where: EstagiarioWhereUniqueInput
    create: XOR<EstagiarioCreateWithoutEmpresaInput, EstagiarioUncheckedCreateWithoutEmpresaInput>
  }

  export type EstagiarioCreateManyEmpresaInputEnvelope = {
    data: EstagiarioCreateManyEmpresaInput | EstagiarioCreateManyEmpresaInput[]
    skipDuplicates?: boolean
  }

  export type EstagiarioUpsertWithWhereUniqueWithoutEmpresaInput = {
    where: EstagiarioWhereUniqueInput
    update: XOR<EstagiarioUpdateWithoutEmpresaInput, EstagiarioUncheckedUpdateWithoutEmpresaInput>
    create: XOR<EstagiarioCreateWithoutEmpresaInput, EstagiarioUncheckedCreateWithoutEmpresaInput>
  }

  export type EstagiarioUpdateWithWhereUniqueWithoutEmpresaInput = {
    where: EstagiarioWhereUniqueInput
    data: XOR<EstagiarioUpdateWithoutEmpresaInput, EstagiarioUncheckedUpdateWithoutEmpresaInput>
  }

  export type EstagiarioUpdateManyWithWhereWithoutEmpresaInput = {
    where: EstagiarioScalarWhereInput
    data: XOR<EstagiarioUpdateManyMutationInput, EstagiarioUncheckedUpdateManyWithoutEmpresaInput>
  }

  export type EstagiarioScalarWhereInput = {
    AND?: EstagiarioScalarWhereInput | EstagiarioScalarWhereInput[]
    OR?: EstagiarioScalarWhereInput[]
    NOT?: EstagiarioScalarWhereInput | EstagiarioScalarWhereInput[]
    id?: IntFilter<"Estagiario"> | number
    nome?: StringFilter<"Estagiario"> | string
    telefone?: StringFilter<"Estagiario"> | string
    curso?: StringFilter<"Estagiario"> | string
    email?: StringNullableFilter<"Estagiario"> | string | null
    empresaId?: IntFilter<"Estagiario"> | number
  }

  export type EmpresaCreateWithoutEstagiariosInput = {
    ramo: string
    nome: string
    cnpj?: string | null
    telefone?: string | null
  }

  export type EmpresaUncheckedCreateWithoutEstagiariosInput = {
    id?: number
    ramo: string
    nome: string
    cnpj?: string | null
    telefone?: string | null
  }

  export type EmpresaCreateOrConnectWithoutEstagiariosInput = {
    where: EmpresaWhereUniqueInput
    create: XOR<EmpresaCreateWithoutEstagiariosInput, EmpresaUncheckedCreateWithoutEstagiariosInput>
  }

  export type RelatorioCreateWithoutEstagiarioInput = {
    titulo: string
    descricao: string
    dataEnvio: string
  }

  export type RelatorioUncheckedCreateWithoutEstagiarioInput = {
    id?: number
    titulo: string
    descricao: string
    dataEnvio: string
  }

  export type RelatorioCreateOrConnectWithoutEstagiarioInput = {
    where: RelatorioWhereUniqueInput
    create: XOR<RelatorioCreateWithoutEstagiarioInput, RelatorioUncheckedCreateWithoutEstagiarioInput>
  }

  export type RelatorioCreateManyEstagiarioInputEnvelope = {
    data: RelatorioCreateManyEstagiarioInput | RelatorioCreateManyEstagiarioInput[]
    skipDuplicates?: boolean
  }

  export type EmpresaUpsertWithoutEstagiariosInput = {
    update: XOR<EmpresaUpdateWithoutEstagiariosInput, EmpresaUncheckedUpdateWithoutEstagiariosInput>
    create: XOR<EmpresaCreateWithoutEstagiariosInput, EmpresaUncheckedCreateWithoutEstagiariosInput>
    where?: EmpresaWhereInput
  }

  export type EmpresaUpdateToOneWithWhereWithoutEstagiariosInput = {
    where?: EmpresaWhereInput
    data: XOR<EmpresaUpdateWithoutEstagiariosInput, EmpresaUncheckedUpdateWithoutEstagiariosInput>
  }

  export type EmpresaUpdateWithoutEstagiariosInput = {
    ramo?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    cnpj?: NullableStringFieldUpdateOperationsInput | string | null
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type EmpresaUncheckedUpdateWithoutEstagiariosInput = {
    id?: IntFieldUpdateOperationsInput | number
    ramo?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    cnpj?: NullableStringFieldUpdateOperationsInput | string | null
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type RelatorioUpsertWithWhereUniqueWithoutEstagiarioInput = {
    where: RelatorioWhereUniqueInput
    update: XOR<RelatorioUpdateWithoutEstagiarioInput, RelatorioUncheckedUpdateWithoutEstagiarioInput>
    create: XOR<RelatorioCreateWithoutEstagiarioInput, RelatorioUncheckedCreateWithoutEstagiarioInput>
  }

  export type RelatorioUpdateWithWhereUniqueWithoutEstagiarioInput = {
    where: RelatorioWhereUniqueInput
    data: XOR<RelatorioUpdateWithoutEstagiarioInput, RelatorioUncheckedUpdateWithoutEstagiarioInput>
  }

  export type RelatorioUpdateManyWithWhereWithoutEstagiarioInput = {
    where: RelatorioScalarWhereInput
    data: XOR<RelatorioUpdateManyMutationInput, RelatorioUncheckedUpdateManyWithoutEstagiarioInput>
  }

  export type RelatorioScalarWhereInput = {
    AND?: RelatorioScalarWhereInput | RelatorioScalarWhereInput[]
    OR?: RelatorioScalarWhereInput[]
    NOT?: RelatorioScalarWhereInput | RelatorioScalarWhereInput[]
    id?: IntFilter<"Relatorio"> | number
    titulo?: StringFilter<"Relatorio"> | string
    descricao?: StringFilter<"Relatorio"> | string
    dataEnvio?: StringFilter<"Relatorio"> | string
    estagiarioId?: IntFilter<"Relatorio"> | number
  }

  export type EstagiarioCreateWithoutRelatorioInput = {
    nome: string
    telefone: string
    curso: string
    email?: string | null
    empresa: EmpresaCreateNestedOneWithoutEstagiariosInput
  }

  export type EstagiarioUncheckedCreateWithoutRelatorioInput = {
    id?: number
    nome: string
    telefone: string
    curso: string
    email?: string | null
    empresaId: number
  }

  export type EstagiarioCreateOrConnectWithoutRelatorioInput = {
    where: EstagiarioWhereUniqueInput
    create: XOR<EstagiarioCreateWithoutRelatorioInput, EstagiarioUncheckedCreateWithoutRelatorioInput>
  }

  export type EstagiarioUpsertWithoutRelatorioInput = {
    update: XOR<EstagiarioUpdateWithoutRelatorioInput, EstagiarioUncheckedUpdateWithoutRelatorioInput>
    create: XOR<EstagiarioCreateWithoutRelatorioInput, EstagiarioUncheckedCreateWithoutRelatorioInput>
    where?: EstagiarioWhereInput
  }

  export type EstagiarioUpdateToOneWithWhereWithoutRelatorioInput = {
    where?: EstagiarioWhereInput
    data: XOR<EstagiarioUpdateWithoutRelatorioInput, EstagiarioUncheckedUpdateWithoutRelatorioInput>
  }

  export type EstagiarioUpdateWithoutRelatorioInput = {
    nome?: StringFieldUpdateOperationsInput | string
    telefone?: StringFieldUpdateOperationsInput | string
    curso?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    empresa?: EmpresaUpdateOneRequiredWithoutEstagiariosNestedInput
  }

  export type EstagiarioUncheckedUpdateWithoutRelatorioInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    telefone?: StringFieldUpdateOperationsInput | string
    curso?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    empresaId?: IntFieldUpdateOperationsInput | number
  }

  export type EstagiarioCreateManyEmpresaInput = {
    id?: number
    nome: string
    telefone: string
    curso: string
    email?: string | null
  }

  export type EstagiarioUpdateWithoutEmpresaInput = {
    nome?: StringFieldUpdateOperationsInput | string
    telefone?: StringFieldUpdateOperationsInput | string
    curso?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    relatorio?: RelatorioUpdateManyWithoutEstagiarioNestedInput
  }

  export type EstagiarioUncheckedUpdateWithoutEmpresaInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    telefone?: StringFieldUpdateOperationsInput | string
    curso?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    relatorio?: RelatorioUncheckedUpdateManyWithoutEstagiarioNestedInput
  }

  export type EstagiarioUncheckedUpdateManyWithoutEmpresaInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    telefone?: StringFieldUpdateOperationsInput | string
    curso?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type RelatorioCreateManyEstagiarioInput = {
    id?: number
    titulo: string
    descricao: string
    dataEnvio: string
  }

  export type RelatorioUpdateWithoutEstagiarioInput = {
    titulo?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    dataEnvio?: StringFieldUpdateOperationsInput | string
  }

  export type RelatorioUncheckedUpdateWithoutEstagiarioInput = {
    id?: IntFieldUpdateOperationsInput | number
    titulo?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    dataEnvio?: StringFieldUpdateOperationsInput | string
  }

  export type RelatorioUncheckedUpdateManyWithoutEstagiarioInput = {
    id?: IntFieldUpdateOperationsInput | number
    titulo?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    dataEnvio?: StringFieldUpdateOperationsInput | string
  }



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