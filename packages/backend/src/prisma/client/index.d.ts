
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
 * Model Replicant
 * 
 */
export type Replicant = $Result.DefaultSelection<Prisma.$ReplicantPayload>
/**
 * Model Interview
 * 
 */
export type Interview = $Result.DefaultSelection<Prisma.$InterviewPayload>
/**
 * Model InterviewTopic
 * 
 */
export type InterviewTopic = $Result.DefaultSelection<Prisma.$InterviewTopicPayload>
/**
 * Model Question
 * 
 */
export type Question = $Result.DefaultSelection<Prisma.$QuestionPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Replicants
 * const replicants = await prisma.replicant.findMany()
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
   * // Fetch zero or more Replicants
   * const replicants = await prisma.replicant.findMany()
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
   * `prisma.replicant`: Exposes CRUD operations for the **Replicant** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Replicants
    * const replicants = await prisma.replicant.findMany()
    * ```
    */
  get replicant(): Prisma.ReplicantDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.interview`: Exposes CRUD operations for the **Interview** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Interviews
    * const interviews = await prisma.interview.findMany()
    * ```
    */
  get interview(): Prisma.InterviewDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.interviewTopic`: Exposes CRUD operations for the **InterviewTopic** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more InterviewTopics
    * const interviewTopics = await prisma.interviewTopic.findMany()
    * ```
    */
  get interviewTopic(): Prisma.InterviewTopicDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.question`: Exposes CRUD operations for the **Question** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Questions
    * const questions = await prisma.question.findMany()
    * ```
    */
  get question(): Prisma.QuestionDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.7.0
   * Query Engine version: 3cff47a7f5d65c3ea74883f1d736e41d68ce91ed
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
    Replicant: 'Replicant',
    Interview: 'Interview',
    InterviewTopic: 'InterviewTopic',
    Question: 'Question'
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
      modelProps: "replicant" | "interview" | "interviewTopic" | "question"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Replicant: {
        payload: Prisma.$ReplicantPayload<ExtArgs>
        fields: Prisma.ReplicantFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ReplicantFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReplicantPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ReplicantFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReplicantPayload>
          }
          findFirst: {
            args: Prisma.ReplicantFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReplicantPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ReplicantFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReplicantPayload>
          }
          findMany: {
            args: Prisma.ReplicantFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReplicantPayload>[]
          }
          create: {
            args: Prisma.ReplicantCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReplicantPayload>
          }
          createMany: {
            args: Prisma.ReplicantCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ReplicantCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReplicantPayload>[]
          }
          delete: {
            args: Prisma.ReplicantDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReplicantPayload>
          }
          update: {
            args: Prisma.ReplicantUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReplicantPayload>
          }
          deleteMany: {
            args: Prisma.ReplicantDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ReplicantUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ReplicantUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReplicantPayload>[]
          }
          upsert: {
            args: Prisma.ReplicantUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReplicantPayload>
          }
          aggregate: {
            args: Prisma.ReplicantAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateReplicant>
          }
          groupBy: {
            args: Prisma.ReplicantGroupByArgs<ExtArgs>
            result: $Utils.Optional<ReplicantGroupByOutputType>[]
          }
          count: {
            args: Prisma.ReplicantCountArgs<ExtArgs>
            result: $Utils.Optional<ReplicantCountAggregateOutputType> | number
          }
        }
      }
      Interview: {
        payload: Prisma.$InterviewPayload<ExtArgs>
        fields: Prisma.InterviewFieldRefs
        operations: {
          findUnique: {
            args: Prisma.InterviewFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InterviewPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.InterviewFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InterviewPayload>
          }
          findFirst: {
            args: Prisma.InterviewFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InterviewPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.InterviewFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InterviewPayload>
          }
          findMany: {
            args: Prisma.InterviewFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InterviewPayload>[]
          }
          create: {
            args: Prisma.InterviewCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InterviewPayload>
          }
          createMany: {
            args: Prisma.InterviewCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.InterviewCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InterviewPayload>[]
          }
          delete: {
            args: Prisma.InterviewDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InterviewPayload>
          }
          update: {
            args: Prisma.InterviewUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InterviewPayload>
          }
          deleteMany: {
            args: Prisma.InterviewDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.InterviewUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.InterviewUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InterviewPayload>[]
          }
          upsert: {
            args: Prisma.InterviewUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InterviewPayload>
          }
          aggregate: {
            args: Prisma.InterviewAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateInterview>
          }
          groupBy: {
            args: Prisma.InterviewGroupByArgs<ExtArgs>
            result: $Utils.Optional<InterviewGroupByOutputType>[]
          }
          count: {
            args: Prisma.InterviewCountArgs<ExtArgs>
            result: $Utils.Optional<InterviewCountAggregateOutputType> | number
          }
        }
      }
      InterviewTopic: {
        payload: Prisma.$InterviewTopicPayload<ExtArgs>
        fields: Prisma.InterviewTopicFieldRefs
        operations: {
          findUnique: {
            args: Prisma.InterviewTopicFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InterviewTopicPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.InterviewTopicFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InterviewTopicPayload>
          }
          findFirst: {
            args: Prisma.InterviewTopicFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InterviewTopicPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.InterviewTopicFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InterviewTopicPayload>
          }
          findMany: {
            args: Prisma.InterviewTopicFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InterviewTopicPayload>[]
          }
          create: {
            args: Prisma.InterviewTopicCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InterviewTopicPayload>
          }
          createMany: {
            args: Prisma.InterviewTopicCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.InterviewTopicCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InterviewTopicPayload>[]
          }
          delete: {
            args: Prisma.InterviewTopicDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InterviewTopicPayload>
          }
          update: {
            args: Prisma.InterviewTopicUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InterviewTopicPayload>
          }
          deleteMany: {
            args: Prisma.InterviewTopicDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.InterviewTopicUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.InterviewTopicUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InterviewTopicPayload>[]
          }
          upsert: {
            args: Prisma.InterviewTopicUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InterviewTopicPayload>
          }
          aggregate: {
            args: Prisma.InterviewTopicAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateInterviewTopic>
          }
          groupBy: {
            args: Prisma.InterviewTopicGroupByArgs<ExtArgs>
            result: $Utils.Optional<InterviewTopicGroupByOutputType>[]
          }
          count: {
            args: Prisma.InterviewTopicCountArgs<ExtArgs>
            result: $Utils.Optional<InterviewTopicCountAggregateOutputType> | number
          }
        }
      }
      Question: {
        payload: Prisma.$QuestionPayload<ExtArgs>
        fields: Prisma.QuestionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.QuestionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.QuestionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload>
          }
          findFirst: {
            args: Prisma.QuestionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.QuestionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload>
          }
          findMany: {
            args: Prisma.QuestionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload>[]
          }
          create: {
            args: Prisma.QuestionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload>
          }
          createMany: {
            args: Prisma.QuestionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.QuestionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload>[]
          }
          delete: {
            args: Prisma.QuestionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload>
          }
          update: {
            args: Prisma.QuestionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload>
          }
          deleteMany: {
            args: Prisma.QuestionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.QuestionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.QuestionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload>[]
          }
          upsert: {
            args: Prisma.QuestionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload>
          }
          aggregate: {
            args: Prisma.QuestionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateQuestion>
          }
          groupBy: {
            args: Prisma.QuestionGroupByArgs<ExtArgs>
            result: $Utils.Optional<QuestionGroupByOutputType>[]
          }
          count: {
            args: Prisma.QuestionCountArgs<ExtArgs>
            result: $Utils.Optional<QuestionCountAggregateOutputType> | number
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
    replicant?: ReplicantOmit
    interview?: InterviewOmit
    interviewTopic?: InterviewTopicOmit
    question?: QuestionOmit
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
   * Count Type InterviewCountOutputType
   */

  export type InterviewCountOutputType = {
    topics: number
  }

  export type InterviewCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    topics?: boolean | InterviewCountOutputTypeCountTopicsArgs
  }

  // Custom InputTypes
  /**
   * InterviewCountOutputType without action
   */
  export type InterviewCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InterviewCountOutputType
     */
    select?: InterviewCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * InterviewCountOutputType without action
   */
  export type InterviewCountOutputTypeCountTopicsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InterviewTopicWhereInput
  }


  /**
   * Count Type InterviewTopicCountOutputType
   */

  export type InterviewTopicCountOutputType = {
    questions: number
  }

  export type InterviewTopicCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    questions?: boolean | InterviewTopicCountOutputTypeCountQuestionsArgs
  }

  // Custom InputTypes
  /**
   * InterviewTopicCountOutputType without action
   */
  export type InterviewTopicCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InterviewTopicCountOutputType
     */
    select?: InterviewTopicCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * InterviewTopicCountOutputType without action
   */
  export type InterviewTopicCountOutputTypeCountQuestionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: QuestionWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Replicant
   */

  export type AggregateReplicant = {
    _count: ReplicantCountAggregateOutputType | null
    _avg: ReplicantAvgAggregateOutputType | null
    _sum: ReplicantSumAggregateOutputType | null
    _min: ReplicantMinAggregateOutputType | null
    _max: ReplicantMaxAggregateOutputType | null
  }

  export type ReplicantAvgAggregateOutputType = {
    id: number | null
  }

  export type ReplicantSumAggregateOutputType = {
    id: number | null
  }

  export type ReplicantMinAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
    createdAt: Date | null
    snapshot: string | null
  }

  export type ReplicantMaxAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
    createdAt: Date | null
    snapshot: string | null
  }

  export type ReplicantCountAggregateOutputType = {
    id: number
    name: number
    description: number
    createdAt: number
    snapshot: number
    _all: number
  }


  export type ReplicantAvgAggregateInputType = {
    id?: true
  }

  export type ReplicantSumAggregateInputType = {
    id?: true
  }

  export type ReplicantMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    createdAt?: true
    snapshot?: true
  }

  export type ReplicantMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    createdAt?: true
    snapshot?: true
  }

  export type ReplicantCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    createdAt?: true
    snapshot?: true
    _all?: true
  }

  export type ReplicantAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Replicant to aggregate.
     */
    where?: ReplicantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Replicants to fetch.
     */
    orderBy?: ReplicantOrderByWithRelationInput | ReplicantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ReplicantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Replicants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Replicants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Replicants
    **/
    _count?: true | ReplicantCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ReplicantAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ReplicantSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ReplicantMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ReplicantMaxAggregateInputType
  }

  export type GetReplicantAggregateType<T extends ReplicantAggregateArgs> = {
        [P in keyof T & keyof AggregateReplicant]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateReplicant[P]>
      : GetScalarType<T[P], AggregateReplicant[P]>
  }




  export type ReplicantGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReplicantWhereInput
    orderBy?: ReplicantOrderByWithAggregationInput | ReplicantOrderByWithAggregationInput[]
    by: ReplicantScalarFieldEnum[] | ReplicantScalarFieldEnum
    having?: ReplicantScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ReplicantCountAggregateInputType | true
    _avg?: ReplicantAvgAggregateInputType
    _sum?: ReplicantSumAggregateInputType
    _min?: ReplicantMinAggregateInputType
    _max?: ReplicantMaxAggregateInputType
  }

  export type ReplicantGroupByOutputType = {
    id: number
    name: string
    description: string | null
    createdAt: Date
    snapshot: string
    _count: ReplicantCountAggregateOutputType | null
    _avg: ReplicantAvgAggregateOutputType | null
    _sum: ReplicantSumAggregateOutputType | null
    _min: ReplicantMinAggregateOutputType | null
    _max: ReplicantMaxAggregateOutputType | null
  }

  type GetReplicantGroupByPayload<T extends ReplicantGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ReplicantGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ReplicantGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ReplicantGroupByOutputType[P]>
            : GetScalarType<T[P], ReplicantGroupByOutputType[P]>
        }
      >
    >


  export type ReplicantSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    createdAt?: boolean
    snapshot?: boolean
    interview?: boolean | Replicant$interviewArgs<ExtArgs>
  }, ExtArgs["result"]["replicant"]>

  export type ReplicantSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    createdAt?: boolean
    snapshot?: boolean
  }, ExtArgs["result"]["replicant"]>

  export type ReplicantSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    createdAt?: boolean
    snapshot?: boolean
  }, ExtArgs["result"]["replicant"]>

  export type ReplicantSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    createdAt?: boolean
    snapshot?: boolean
  }

  export type ReplicantOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description" | "createdAt" | "snapshot", ExtArgs["result"]["replicant"]>
  export type ReplicantInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    interview?: boolean | Replicant$interviewArgs<ExtArgs>
  }
  export type ReplicantIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ReplicantIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ReplicantPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Replicant"
    objects: {
      interview: Prisma.$InterviewPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      description: string | null
      createdAt: Date
      snapshot: string
    }, ExtArgs["result"]["replicant"]>
    composites: {}
  }

  type ReplicantGetPayload<S extends boolean | null | undefined | ReplicantDefaultArgs> = $Result.GetResult<Prisma.$ReplicantPayload, S>

  type ReplicantCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ReplicantFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ReplicantCountAggregateInputType | true
    }

  export interface ReplicantDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Replicant'], meta: { name: 'Replicant' } }
    /**
     * Find zero or one Replicant that matches the filter.
     * @param {ReplicantFindUniqueArgs} args - Arguments to find a Replicant
     * @example
     * // Get one Replicant
     * const replicant = await prisma.replicant.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ReplicantFindUniqueArgs>(args: SelectSubset<T, ReplicantFindUniqueArgs<ExtArgs>>): Prisma__ReplicantClient<$Result.GetResult<Prisma.$ReplicantPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Replicant that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ReplicantFindUniqueOrThrowArgs} args - Arguments to find a Replicant
     * @example
     * // Get one Replicant
     * const replicant = await prisma.replicant.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ReplicantFindUniqueOrThrowArgs>(args: SelectSubset<T, ReplicantFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ReplicantClient<$Result.GetResult<Prisma.$ReplicantPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Replicant that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReplicantFindFirstArgs} args - Arguments to find a Replicant
     * @example
     * // Get one Replicant
     * const replicant = await prisma.replicant.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ReplicantFindFirstArgs>(args?: SelectSubset<T, ReplicantFindFirstArgs<ExtArgs>>): Prisma__ReplicantClient<$Result.GetResult<Prisma.$ReplicantPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Replicant that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReplicantFindFirstOrThrowArgs} args - Arguments to find a Replicant
     * @example
     * // Get one Replicant
     * const replicant = await prisma.replicant.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ReplicantFindFirstOrThrowArgs>(args?: SelectSubset<T, ReplicantFindFirstOrThrowArgs<ExtArgs>>): Prisma__ReplicantClient<$Result.GetResult<Prisma.$ReplicantPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Replicants that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReplicantFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Replicants
     * const replicants = await prisma.replicant.findMany()
     * 
     * // Get first 10 Replicants
     * const replicants = await prisma.replicant.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const replicantWithIdOnly = await prisma.replicant.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ReplicantFindManyArgs>(args?: SelectSubset<T, ReplicantFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReplicantPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Replicant.
     * @param {ReplicantCreateArgs} args - Arguments to create a Replicant.
     * @example
     * // Create one Replicant
     * const Replicant = await prisma.replicant.create({
     *   data: {
     *     // ... data to create a Replicant
     *   }
     * })
     * 
     */
    create<T extends ReplicantCreateArgs>(args: SelectSubset<T, ReplicantCreateArgs<ExtArgs>>): Prisma__ReplicantClient<$Result.GetResult<Prisma.$ReplicantPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Replicants.
     * @param {ReplicantCreateManyArgs} args - Arguments to create many Replicants.
     * @example
     * // Create many Replicants
     * const replicant = await prisma.replicant.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ReplicantCreateManyArgs>(args?: SelectSubset<T, ReplicantCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Replicants and returns the data saved in the database.
     * @param {ReplicantCreateManyAndReturnArgs} args - Arguments to create many Replicants.
     * @example
     * // Create many Replicants
     * const replicant = await prisma.replicant.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Replicants and only return the `id`
     * const replicantWithIdOnly = await prisma.replicant.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ReplicantCreateManyAndReturnArgs>(args?: SelectSubset<T, ReplicantCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReplicantPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Replicant.
     * @param {ReplicantDeleteArgs} args - Arguments to delete one Replicant.
     * @example
     * // Delete one Replicant
     * const Replicant = await prisma.replicant.delete({
     *   where: {
     *     // ... filter to delete one Replicant
     *   }
     * })
     * 
     */
    delete<T extends ReplicantDeleteArgs>(args: SelectSubset<T, ReplicantDeleteArgs<ExtArgs>>): Prisma__ReplicantClient<$Result.GetResult<Prisma.$ReplicantPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Replicant.
     * @param {ReplicantUpdateArgs} args - Arguments to update one Replicant.
     * @example
     * // Update one Replicant
     * const replicant = await prisma.replicant.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ReplicantUpdateArgs>(args: SelectSubset<T, ReplicantUpdateArgs<ExtArgs>>): Prisma__ReplicantClient<$Result.GetResult<Prisma.$ReplicantPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Replicants.
     * @param {ReplicantDeleteManyArgs} args - Arguments to filter Replicants to delete.
     * @example
     * // Delete a few Replicants
     * const { count } = await prisma.replicant.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ReplicantDeleteManyArgs>(args?: SelectSubset<T, ReplicantDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Replicants.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReplicantUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Replicants
     * const replicant = await prisma.replicant.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ReplicantUpdateManyArgs>(args: SelectSubset<T, ReplicantUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Replicants and returns the data updated in the database.
     * @param {ReplicantUpdateManyAndReturnArgs} args - Arguments to update many Replicants.
     * @example
     * // Update many Replicants
     * const replicant = await prisma.replicant.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Replicants and only return the `id`
     * const replicantWithIdOnly = await prisma.replicant.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ReplicantUpdateManyAndReturnArgs>(args: SelectSubset<T, ReplicantUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReplicantPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Replicant.
     * @param {ReplicantUpsertArgs} args - Arguments to update or create a Replicant.
     * @example
     * // Update or create a Replicant
     * const replicant = await prisma.replicant.upsert({
     *   create: {
     *     // ... data to create a Replicant
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Replicant we want to update
     *   }
     * })
     */
    upsert<T extends ReplicantUpsertArgs>(args: SelectSubset<T, ReplicantUpsertArgs<ExtArgs>>): Prisma__ReplicantClient<$Result.GetResult<Prisma.$ReplicantPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Replicants.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReplicantCountArgs} args - Arguments to filter Replicants to count.
     * @example
     * // Count the number of Replicants
     * const count = await prisma.replicant.count({
     *   where: {
     *     // ... the filter for the Replicants we want to count
     *   }
     * })
    **/
    count<T extends ReplicantCountArgs>(
      args?: Subset<T, ReplicantCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ReplicantCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Replicant.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReplicantAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ReplicantAggregateArgs>(args: Subset<T, ReplicantAggregateArgs>): Prisma.PrismaPromise<GetReplicantAggregateType<T>>

    /**
     * Group by Replicant.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReplicantGroupByArgs} args - Group by arguments.
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
      T extends ReplicantGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ReplicantGroupByArgs['orderBy'] }
        : { orderBy?: ReplicantGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ReplicantGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetReplicantGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Replicant model
   */
  readonly fields: ReplicantFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Replicant.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ReplicantClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    interview<T extends Replicant$interviewArgs<ExtArgs> = {}>(args?: Subset<T, Replicant$interviewArgs<ExtArgs>>): Prisma__InterviewClient<$Result.GetResult<Prisma.$InterviewPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Replicant model
   */
  interface ReplicantFieldRefs {
    readonly id: FieldRef<"Replicant", 'Int'>
    readonly name: FieldRef<"Replicant", 'String'>
    readonly description: FieldRef<"Replicant", 'String'>
    readonly createdAt: FieldRef<"Replicant", 'DateTime'>
    readonly snapshot: FieldRef<"Replicant", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Replicant findUnique
   */
  export type ReplicantFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Replicant
     */
    select?: ReplicantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Replicant
     */
    omit?: ReplicantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReplicantInclude<ExtArgs> | null
    /**
     * Filter, which Replicant to fetch.
     */
    where: ReplicantWhereUniqueInput
  }

  /**
   * Replicant findUniqueOrThrow
   */
  export type ReplicantFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Replicant
     */
    select?: ReplicantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Replicant
     */
    omit?: ReplicantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReplicantInclude<ExtArgs> | null
    /**
     * Filter, which Replicant to fetch.
     */
    where: ReplicantWhereUniqueInput
  }

  /**
   * Replicant findFirst
   */
  export type ReplicantFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Replicant
     */
    select?: ReplicantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Replicant
     */
    omit?: ReplicantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReplicantInclude<ExtArgs> | null
    /**
     * Filter, which Replicant to fetch.
     */
    where?: ReplicantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Replicants to fetch.
     */
    orderBy?: ReplicantOrderByWithRelationInput | ReplicantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Replicants.
     */
    cursor?: ReplicantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Replicants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Replicants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Replicants.
     */
    distinct?: ReplicantScalarFieldEnum | ReplicantScalarFieldEnum[]
  }

  /**
   * Replicant findFirstOrThrow
   */
  export type ReplicantFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Replicant
     */
    select?: ReplicantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Replicant
     */
    omit?: ReplicantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReplicantInclude<ExtArgs> | null
    /**
     * Filter, which Replicant to fetch.
     */
    where?: ReplicantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Replicants to fetch.
     */
    orderBy?: ReplicantOrderByWithRelationInput | ReplicantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Replicants.
     */
    cursor?: ReplicantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Replicants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Replicants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Replicants.
     */
    distinct?: ReplicantScalarFieldEnum | ReplicantScalarFieldEnum[]
  }

  /**
   * Replicant findMany
   */
  export type ReplicantFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Replicant
     */
    select?: ReplicantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Replicant
     */
    omit?: ReplicantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReplicantInclude<ExtArgs> | null
    /**
     * Filter, which Replicants to fetch.
     */
    where?: ReplicantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Replicants to fetch.
     */
    orderBy?: ReplicantOrderByWithRelationInput | ReplicantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Replicants.
     */
    cursor?: ReplicantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Replicants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Replicants.
     */
    skip?: number
    distinct?: ReplicantScalarFieldEnum | ReplicantScalarFieldEnum[]
  }

  /**
   * Replicant create
   */
  export type ReplicantCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Replicant
     */
    select?: ReplicantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Replicant
     */
    omit?: ReplicantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReplicantInclude<ExtArgs> | null
    /**
     * The data needed to create a Replicant.
     */
    data: XOR<ReplicantCreateInput, ReplicantUncheckedCreateInput>
  }

  /**
   * Replicant createMany
   */
  export type ReplicantCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Replicants.
     */
    data: ReplicantCreateManyInput | ReplicantCreateManyInput[]
  }

  /**
   * Replicant createManyAndReturn
   */
  export type ReplicantCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Replicant
     */
    select?: ReplicantSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Replicant
     */
    omit?: ReplicantOmit<ExtArgs> | null
    /**
     * The data used to create many Replicants.
     */
    data: ReplicantCreateManyInput | ReplicantCreateManyInput[]
  }

  /**
   * Replicant update
   */
  export type ReplicantUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Replicant
     */
    select?: ReplicantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Replicant
     */
    omit?: ReplicantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReplicantInclude<ExtArgs> | null
    /**
     * The data needed to update a Replicant.
     */
    data: XOR<ReplicantUpdateInput, ReplicantUncheckedUpdateInput>
    /**
     * Choose, which Replicant to update.
     */
    where: ReplicantWhereUniqueInput
  }

  /**
   * Replicant updateMany
   */
  export type ReplicantUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Replicants.
     */
    data: XOR<ReplicantUpdateManyMutationInput, ReplicantUncheckedUpdateManyInput>
    /**
     * Filter which Replicants to update
     */
    where?: ReplicantWhereInput
    /**
     * Limit how many Replicants to update.
     */
    limit?: number
  }

  /**
   * Replicant updateManyAndReturn
   */
  export type ReplicantUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Replicant
     */
    select?: ReplicantSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Replicant
     */
    omit?: ReplicantOmit<ExtArgs> | null
    /**
     * The data used to update Replicants.
     */
    data: XOR<ReplicantUpdateManyMutationInput, ReplicantUncheckedUpdateManyInput>
    /**
     * Filter which Replicants to update
     */
    where?: ReplicantWhereInput
    /**
     * Limit how many Replicants to update.
     */
    limit?: number
  }

  /**
   * Replicant upsert
   */
  export type ReplicantUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Replicant
     */
    select?: ReplicantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Replicant
     */
    omit?: ReplicantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReplicantInclude<ExtArgs> | null
    /**
     * The filter to search for the Replicant to update in case it exists.
     */
    where: ReplicantWhereUniqueInput
    /**
     * In case the Replicant found by the `where` argument doesn't exist, create a new Replicant with this data.
     */
    create: XOR<ReplicantCreateInput, ReplicantUncheckedCreateInput>
    /**
     * In case the Replicant was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ReplicantUpdateInput, ReplicantUncheckedUpdateInput>
  }

  /**
   * Replicant delete
   */
  export type ReplicantDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Replicant
     */
    select?: ReplicantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Replicant
     */
    omit?: ReplicantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReplicantInclude<ExtArgs> | null
    /**
     * Filter which Replicant to delete.
     */
    where: ReplicantWhereUniqueInput
  }

  /**
   * Replicant deleteMany
   */
  export type ReplicantDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Replicants to delete
     */
    where?: ReplicantWhereInput
    /**
     * Limit how many Replicants to delete.
     */
    limit?: number
  }

  /**
   * Replicant.interview
   */
  export type Replicant$interviewArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Interview
     */
    select?: InterviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Interview
     */
    omit?: InterviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InterviewInclude<ExtArgs> | null
    where?: InterviewWhereInput
  }

  /**
   * Replicant without action
   */
  export type ReplicantDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Replicant
     */
    select?: ReplicantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Replicant
     */
    omit?: ReplicantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReplicantInclude<ExtArgs> | null
  }


  /**
   * Model Interview
   */

  export type AggregateInterview = {
    _count: InterviewCountAggregateOutputType | null
    _avg: InterviewAvgAggregateOutputType | null
    _sum: InterviewSumAggregateOutputType | null
    _min: InterviewMinAggregateOutputType | null
    _max: InterviewMaxAggregateOutputType | null
  }

  export type InterviewAvgAggregateOutputType = {
    id: number | null
    replicantId: number | null
  }

  export type InterviewSumAggregateOutputType = {
    id: number | null
    replicantId: number | null
  }

  export type InterviewMinAggregateOutputType = {
    id: number | null
    replicantId: number | null
    createdAt: Date | null
    summary: string | null
  }

  export type InterviewMaxAggregateOutputType = {
    id: number | null
    replicantId: number | null
    createdAt: Date | null
    summary: string | null
  }

  export type InterviewCountAggregateOutputType = {
    id: number
    replicantId: number
    createdAt: number
    summary: number
    _all: number
  }


  export type InterviewAvgAggregateInputType = {
    id?: true
    replicantId?: true
  }

  export type InterviewSumAggregateInputType = {
    id?: true
    replicantId?: true
  }

  export type InterviewMinAggregateInputType = {
    id?: true
    replicantId?: true
    createdAt?: true
    summary?: true
  }

  export type InterviewMaxAggregateInputType = {
    id?: true
    replicantId?: true
    createdAt?: true
    summary?: true
  }

  export type InterviewCountAggregateInputType = {
    id?: true
    replicantId?: true
    createdAt?: true
    summary?: true
    _all?: true
  }

  export type InterviewAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Interview to aggregate.
     */
    where?: InterviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Interviews to fetch.
     */
    orderBy?: InterviewOrderByWithRelationInput | InterviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: InterviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Interviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Interviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Interviews
    **/
    _count?: true | InterviewCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: InterviewAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: InterviewSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: InterviewMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: InterviewMaxAggregateInputType
  }

  export type GetInterviewAggregateType<T extends InterviewAggregateArgs> = {
        [P in keyof T & keyof AggregateInterview]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateInterview[P]>
      : GetScalarType<T[P], AggregateInterview[P]>
  }




  export type InterviewGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InterviewWhereInput
    orderBy?: InterviewOrderByWithAggregationInput | InterviewOrderByWithAggregationInput[]
    by: InterviewScalarFieldEnum[] | InterviewScalarFieldEnum
    having?: InterviewScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: InterviewCountAggregateInputType | true
    _avg?: InterviewAvgAggregateInputType
    _sum?: InterviewSumAggregateInputType
    _min?: InterviewMinAggregateInputType
    _max?: InterviewMaxAggregateInputType
  }

  export type InterviewGroupByOutputType = {
    id: number
    replicantId: number
    createdAt: Date
    summary: string
    _count: InterviewCountAggregateOutputType | null
    _avg: InterviewAvgAggregateOutputType | null
    _sum: InterviewSumAggregateOutputType | null
    _min: InterviewMinAggregateOutputType | null
    _max: InterviewMaxAggregateOutputType | null
  }

  type GetInterviewGroupByPayload<T extends InterviewGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<InterviewGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof InterviewGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], InterviewGroupByOutputType[P]>
            : GetScalarType<T[P], InterviewGroupByOutputType[P]>
        }
      >
    >


  export type InterviewSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    replicantId?: boolean
    createdAt?: boolean
    summary?: boolean
    replicant?: boolean | ReplicantDefaultArgs<ExtArgs>
    topics?: boolean | Interview$topicsArgs<ExtArgs>
    _count?: boolean | InterviewCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["interview"]>

  export type InterviewSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    replicantId?: boolean
    createdAt?: boolean
    summary?: boolean
    replicant?: boolean | ReplicantDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["interview"]>

  export type InterviewSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    replicantId?: boolean
    createdAt?: boolean
    summary?: boolean
    replicant?: boolean | ReplicantDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["interview"]>

  export type InterviewSelectScalar = {
    id?: boolean
    replicantId?: boolean
    createdAt?: boolean
    summary?: boolean
  }

  export type InterviewOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "replicantId" | "createdAt" | "summary", ExtArgs["result"]["interview"]>
  export type InterviewInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    replicant?: boolean | ReplicantDefaultArgs<ExtArgs>
    topics?: boolean | Interview$topicsArgs<ExtArgs>
    _count?: boolean | InterviewCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type InterviewIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    replicant?: boolean | ReplicantDefaultArgs<ExtArgs>
  }
  export type InterviewIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    replicant?: boolean | ReplicantDefaultArgs<ExtArgs>
  }

  export type $InterviewPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Interview"
    objects: {
      replicant: Prisma.$ReplicantPayload<ExtArgs>
      topics: Prisma.$InterviewTopicPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      replicantId: number
      createdAt: Date
      summary: string
    }, ExtArgs["result"]["interview"]>
    composites: {}
  }

  type InterviewGetPayload<S extends boolean | null | undefined | InterviewDefaultArgs> = $Result.GetResult<Prisma.$InterviewPayload, S>

  type InterviewCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<InterviewFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: InterviewCountAggregateInputType | true
    }

  export interface InterviewDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Interview'], meta: { name: 'Interview' } }
    /**
     * Find zero or one Interview that matches the filter.
     * @param {InterviewFindUniqueArgs} args - Arguments to find a Interview
     * @example
     * // Get one Interview
     * const interview = await prisma.interview.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends InterviewFindUniqueArgs>(args: SelectSubset<T, InterviewFindUniqueArgs<ExtArgs>>): Prisma__InterviewClient<$Result.GetResult<Prisma.$InterviewPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Interview that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {InterviewFindUniqueOrThrowArgs} args - Arguments to find a Interview
     * @example
     * // Get one Interview
     * const interview = await prisma.interview.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends InterviewFindUniqueOrThrowArgs>(args: SelectSubset<T, InterviewFindUniqueOrThrowArgs<ExtArgs>>): Prisma__InterviewClient<$Result.GetResult<Prisma.$InterviewPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Interview that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InterviewFindFirstArgs} args - Arguments to find a Interview
     * @example
     * // Get one Interview
     * const interview = await prisma.interview.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends InterviewFindFirstArgs>(args?: SelectSubset<T, InterviewFindFirstArgs<ExtArgs>>): Prisma__InterviewClient<$Result.GetResult<Prisma.$InterviewPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Interview that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InterviewFindFirstOrThrowArgs} args - Arguments to find a Interview
     * @example
     * // Get one Interview
     * const interview = await prisma.interview.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends InterviewFindFirstOrThrowArgs>(args?: SelectSubset<T, InterviewFindFirstOrThrowArgs<ExtArgs>>): Prisma__InterviewClient<$Result.GetResult<Prisma.$InterviewPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Interviews that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InterviewFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Interviews
     * const interviews = await prisma.interview.findMany()
     * 
     * // Get first 10 Interviews
     * const interviews = await prisma.interview.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const interviewWithIdOnly = await prisma.interview.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends InterviewFindManyArgs>(args?: SelectSubset<T, InterviewFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InterviewPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Interview.
     * @param {InterviewCreateArgs} args - Arguments to create a Interview.
     * @example
     * // Create one Interview
     * const Interview = await prisma.interview.create({
     *   data: {
     *     // ... data to create a Interview
     *   }
     * })
     * 
     */
    create<T extends InterviewCreateArgs>(args: SelectSubset<T, InterviewCreateArgs<ExtArgs>>): Prisma__InterviewClient<$Result.GetResult<Prisma.$InterviewPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Interviews.
     * @param {InterviewCreateManyArgs} args - Arguments to create many Interviews.
     * @example
     * // Create many Interviews
     * const interview = await prisma.interview.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends InterviewCreateManyArgs>(args?: SelectSubset<T, InterviewCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Interviews and returns the data saved in the database.
     * @param {InterviewCreateManyAndReturnArgs} args - Arguments to create many Interviews.
     * @example
     * // Create many Interviews
     * const interview = await prisma.interview.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Interviews and only return the `id`
     * const interviewWithIdOnly = await prisma.interview.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends InterviewCreateManyAndReturnArgs>(args?: SelectSubset<T, InterviewCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InterviewPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Interview.
     * @param {InterviewDeleteArgs} args - Arguments to delete one Interview.
     * @example
     * // Delete one Interview
     * const Interview = await prisma.interview.delete({
     *   where: {
     *     // ... filter to delete one Interview
     *   }
     * })
     * 
     */
    delete<T extends InterviewDeleteArgs>(args: SelectSubset<T, InterviewDeleteArgs<ExtArgs>>): Prisma__InterviewClient<$Result.GetResult<Prisma.$InterviewPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Interview.
     * @param {InterviewUpdateArgs} args - Arguments to update one Interview.
     * @example
     * // Update one Interview
     * const interview = await prisma.interview.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends InterviewUpdateArgs>(args: SelectSubset<T, InterviewUpdateArgs<ExtArgs>>): Prisma__InterviewClient<$Result.GetResult<Prisma.$InterviewPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Interviews.
     * @param {InterviewDeleteManyArgs} args - Arguments to filter Interviews to delete.
     * @example
     * // Delete a few Interviews
     * const { count } = await prisma.interview.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends InterviewDeleteManyArgs>(args?: SelectSubset<T, InterviewDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Interviews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InterviewUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Interviews
     * const interview = await prisma.interview.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends InterviewUpdateManyArgs>(args: SelectSubset<T, InterviewUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Interviews and returns the data updated in the database.
     * @param {InterviewUpdateManyAndReturnArgs} args - Arguments to update many Interviews.
     * @example
     * // Update many Interviews
     * const interview = await prisma.interview.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Interviews and only return the `id`
     * const interviewWithIdOnly = await prisma.interview.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends InterviewUpdateManyAndReturnArgs>(args: SelectSubset<T, InterviewUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InterviewPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Interview.
     * @param {InterviewUpsertArgs} args - Arguments to update or create a Interview.
     * @example
     * // Update or create a Interview
     * const interview = await prisma.interview.upsert({
     *   create: {
     *     // ... data to create a Interview
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Interview we want to update
     *   }
     * })
     */
    upsert<T extends InterviewUpsertArgs>(args: SelectSubset<T, InterviewUpsertArgs<ExtArgs>>): Prisma__InterviewClient<$Result.GetResult<Prisma.$InterviewPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Interviews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InterviewCountArgs} args - Arguments to filter Interviews to count.
     * @example
     * // Count the number of Interviews
     * const count = await prisma.interview.count({
     *   where: {
     *     // ... the filter for the Interviews we want to count
     *   }
     * })
    **/
    count<T extends InterviewCountArgs>(
      args?: Subset<T, InterviewCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], InterviewCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Interview.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InterviewAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends InterviewAggregateArgs>(args: Subset<T, InterviewAggregateArgs>): Prisma.PrismaPromise<GetInterviewAggregateType<T>>

    /**
     * Group by Interview.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InterviewGroupByArgs} args - Group by arguments.
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
      T extends InterviewGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: InterviewGroupByArgs['orderBy'] }
        : { orderBy?: InterviewGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, InterviewGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetInterviewGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Interview model
   */
  readonly fields: InterviewFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Interview.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__InterviewClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    replicant<T extends ReplicantDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ReplicantDefaultArgs<ExtArgs>>): Prisma__ReplicantClient<$Result.GetResult<Prisma.$ReplicantPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    topics<T extends Interview$topicsArgs<ExtArgs> = {}>(args?: Subset<T, Interview$topicsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InterviewTopicPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Interview model
   */
  interface InterviewFieldRefs {
    readonly id: FieldRef<"Interview", 'Int'>
    readonly replicantId: FieldRef<"Interview", 'Int'>
    readonly createdAt: FieldRef<"Interview", 'DateTime'>
    readonly summary: FieldRef<"Interview", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Interview findUnique
   */
  export type InterviewFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Interview
     */
    select?: InterviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Interview
     */
    omit?: InterviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InterviewInclude<ExtArgs> | null
    /**
     * Filter, which Interview to fetch.
     */
    where: InterviewWhereUniqueInput
  }

  /**
   * Interview findUniqueOrThrow
   */
  export type InterviewFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Interview
     */
    select?: InterviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Interview
     */
    omit?: InterviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InterviewInclude<ExtArgs> | null
    /**
     * Filter, which Interview to fetch.
     */
    where: InterviewWhereUniqueInput
  }

  /**
   * Interview findFirst
   */
  export type InterviewFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Interview
     */
    select?: InterviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Interview
     */
    omit?: InterviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InterviewInclude<ExtArgs> | null
    /**
     * Filter, which Interview to fetch.
     */
    where?: InterviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Interviews to fetch.
     */
    orderBy?: InterviewOrderByWithRelationInput | InterviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Interviews.
     */
    cursor?: InterviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Interviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Interviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Interviews.
     */
    distinct?: InterviewScalarFieldEnum | InterviewScalarFieldEnum[]
  }

  /**
   * Interview findFirstOrThrow
   */
  export type InterviewFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Interview
     */
    select?: InterviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Interview
     */
    omit?: InterviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InterviewInclude<ExtArgs> | null
    /**
     * Filter, which Interview to fetch.
     */
    where?: InterviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Interviews to fetch.
     */
    orderBy?: InterviewOrderByWithRelationInput | InterviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Interviews.
     */
    cursor?: InterviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Interviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Interviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Interviews.
     */
    distinct?: InterviewScalarFieldEnum | InterviewScalarFieldEnum[]
  }

  /**
   * Interview findMany
   */
  export type InterviewFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Interview
     */
    select?: InterviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Interview
     */
    omit?: InterviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InterviewInclude<ExtArgs> | null
    /**
     * Filter, which Interviews to fetch.
     */
    where?: InterviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Interviews to fetch.
     */
    orderBy?: InterviewOrderByWithRelationInput | InterviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Interviews.
     */
    cursor?: InterviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Interviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Interviews.
     */
    skip?: number
    distinct?: InterviewScalarFieldEnum | InterviewScalarFieldEnum[]
  }

  /**
   * Interview create
   */
  export type InterviewCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Interview
     */
    select?: InterviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Interview
     */
    omit?: InterviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InterviewInclude<ExtArgs> | null
    /**
     * The data needed to create a Interview.
     */
    data: XOR<InterviewCreateInput, InterviewUncheckedCreateInput>
  }

  /**
   * Interview createMany
   */
  export type InterviewCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Interviews.
     */
    data: InterviewCreateManyInput | InterviewCreateManyInput[]
  }

  /**
   * Interview createManyAndReturn
   */
  export type InterviewCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Interview
     */
    select?: InterviewSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Interview
     */
    omit?: InterviewOmit<ExtArgs> | null
    /**
     * The data used to create many Interviews.
     */
    data: InterviewCreateManyInput | InterviewCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InterviewIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Interview update
   */
  export type InterviewUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Interview
     */
    select?: InterviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Interview
     */
    omit?: InterviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InterviewInclude<ExtArgs> | null
    /**
     * The data needed to update a Interview.
     */
    data: XOR<InterviewUpdateInput, InterviewUncheckedUpdateInput>
    /**
     * Choose, which Interview to update.
     */
    where: InterviewWhereUniqueInput
  }

  /**
   * Interview updateMany
   */
  export type InterviewUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Interviews.
     */
    data: XOR<InterviewUpdateManyMutationInput, InterviewUncheckedUpdateManyInput>
    /**
     * Filter which Interviews to update
     */
    where?: InterviewWhereInput
    /**
     * Limit how many Interviews to update.
     */
    limit?: number
  }

  /**
   * Interview updateManyAndReturn
   */
  export type InterviewUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Interview
     */
    select?: InterviewSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Interview
     */
    omit?: InterviewOmit<ExtArgs> | null
    /**
     * The data used to update Interviews.
     */
    data: XOR<InterviewUpdateManyMutationInput, InterviewUncheckedUpdateManyInput>
    /**
     * Filter which Interviews to update
     */
    where?: InterviewWhereInput
    /**
     * Limit how many Interviews to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InterviewIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Interview upsert
   */
  export type InterviewUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Interview
     */
    select?: InterviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Interview
     */
    omit?: InterviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InterviewInclude<ExtArgs> | null
    /**
     * The filter to search for the Interview to update in case it exists.
     */
    where: InterviewWhereUniqueInput
    /**
     * In case the Interview found by the `where` argument doesn't exist, create a new Interview with this data.
     */
    create: XOR<InterviewCreateInput, InterviewUncheckedCreateInput>
    /**
     * In case the Interview was found with the provided `where` argument, update it with this data.
     */
    update: XOR<InterviewUpdateInput, InterviewUncheckedUpdateInput>
  }

  /**
   * Interview delete
   */
  export type InterviewDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Interview
     */
    select?: InterviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Interview
     */
    omit?: InterviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InterviewInclude<ExtArgs> | null
    /**
     * Filter which Interview to delete.
     */
    where: InterviewWhereUniqueInput
  }

  /**
   * Interview deleteMany
   */
  export type InterviewDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Interviews to delete
     */
    where?: InterviewWhereInput
    /**
     * Limit how many Interviews to delete.
     */
    limit?: number
  }

  /**
   * Interview.topics
   */
  export type Interview$topicsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InterviewTopic
     */
    select?: InterviewTopicSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InterviewTopic
     */
    omit?: InterviewTopicOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InterviewTopicInclude<ExtArgs> | null
    where?: InterviewTopicWhereInput
    orderBy?: InterviewTopicOrderByWithRelationInput | InterviewTopicOrderByWithRelationInput[]
    cursor?: InterviewTopicWhereUniqueInput
    take?: number
    skip?: number
    distinct?: InterviewTopicScalarFieldEnum | InterviewTopicScalarFieldEnum[]
  }

  /**
   * Interview without action
   */
  export type InterviewDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Interview
     */
    select?: InterviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Interview
     */
    omit?: InterviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InterviewInclude<ExtArgs> | null
  }


  /**
   * Model InterviewTopic
   */

  export type AggregateInterviewTopic = {
    _count: InterviewTopicCountAggregateOutputType | null
    _avg: InterviewTopicAvgAggregateOutputType | null
    _sum: InterviewTopicSumAggregateOutputType | null
    _min: InterviewTopicMinAggregateOutputType | null
    _max: InterviewTopicMaxAggregateOutputType | null
  }

  export type InterviewTopicAvgAggregateOutputType = {
    id: number | null
    interviewId: number | null
  }

  export type InterviewTopicSumAggregateOutputType = {
    id: number | null
    interviewId: number | null
  }

  export type InterviewTopicMinAggregateOutputType = {
    id: number | null
    interviewId: number | null
    name: string | null
    summary: string | null
    type: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type InterviewTopicMaxAggregateOutputType = {
    id: number | null
    interviewId: number | null
    name: string | null
    summary: string | null
    type: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type InterviewTopicCountAggregateOutputType = {
    id: number
    interviewId: number
    name: number
    summary: number
    type: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type InterviewTopicAvgAggregateInputType = {
    id?: true
    interviewId?: true
  }

  export type InterviewTopicSumAggregateInputType = {
    id?: true
    interviewId?: true
  }

  export type InterviewTopicMinAggregateInputType = {
    id?: true
    interviewId?: true
    name?: true
    summary?: true
    type?: true
    createdAt?: true
    updatedAt?: true
  }

  export type InterviewTopicMaxAggregateInputType = {
    id?: true
    interviewId?: true
    name?: true
    summary?: true
    type?: true
    createdAt?: true
    updatedAt?: true
  }

  export type InterviewTopicCountAggregateInputType = {
    id?: true
    interviewId?: true
    name?: true
    summary?: true
    type?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type InterviewTopicAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which InterviewTopic to aggregate.
     */
    where?: InterviewTopicWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InterviewTopics to fetch.
     */
    orderBy?: InterviewTopicOrderByWithRelationInput | InterviewTopicOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: InterviewTopicWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InterviewTopics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InterviewTopics.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned InterviewTopics
    **/
    _count?: true | InterviewTopicCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: InterviewTopicAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: InterviewTopicSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: InterviewTopicMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: InterviewTopicMaxAggregateInputType
  }

  export type GetInterviewTopicAggregateType<T extends InterviewTopicAggregateArgs> = {
        [P in keyof T & keyof AggregateInterviewTopic]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateInterviewTopic[P]>
      : GetScalarType<T[P], AggregateInterviewTopic[P]>
  }




  export type InterviewTopicGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InterviewTopicWhereInput
    orderBy?: InterviewTopicOrderByWithAggregationInput | InterviewTopicOrderByWithAggregationInput[]
    by: InterviewTopicScalarFieldEnum[] | InterviewTopicScalarFieldEnum
    having?: InterviewTopicScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: InterviewTopicCountAggregateInputType | true
    _avg?: InterviewTopicAvgAggregateInputType
    _sum?: InterviewTopicSumAggregateInputType
    _min?: InterviewTopicMinAggregateInputType
    _max?: InterviewTopicMaxAggregateInputType
  }

  export type InterviewTopicGroupByOutputType = {
    id: number
    interviewId: number
    name: string
    summary: string
    type: string | null
    createdAt: Date
    updatedAt: Date
    _count: InterviewTopicCountAggregateOutputType | null
    _avg: InterviewTopicAvgAggregateOutputType | null
    _sum: InterviewTopicSumAggregateOutputType | null
    _min: InterviewTopicMinAggregateOutputType | null
    _max: InterviewTopicMaxAggregateOutputType | null
  }

  type GetInterviewTopicGroupByPayload<T extends InterviewTopicGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<InterviewTopicGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof InterviewTopicGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], InterviewTopicGroupByOutputType[P]>
            : GetScalarType<T[P], InterviewTopicGroupByOutputType[P]>
        }
      >
    >


  export type InterviewTopicSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    interviewId?: boolean
    name?: boolean
    summary?: boolean
    type?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    questions?: boolean | InterviewTopic$questionsArgs<ExtArgs>
    interview?: boolean | InterviewDefaultArgs<ExtArgs>
    _count?: boolean | InterviewTopicCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["interviewTopic"]>

  export type InterviewTopicSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    interviewId?: boolean
    name?: boolean
    summary?: boolean
    type?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    interview?: boolean | InterviewDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["interviewTopic"]>

  export type InterviewTopicSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    interviewId?: boolean
    name?: boolean
    summary?: boolean
    type?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    interview?: boolean | InterviewDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["interviewTopic"]>

  export type InterviewTopicSelectScalar = {
    id?: boolean
    interviewId?: boolean
    name?: boolean
    summary?: boolean
    type?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type InterviewTopicOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "interviewId" | "name" | "summary" | "type" | "createdAt" | "updatedAt", ExtArgs["result"]["interviewTopic"]>
  export type InterviewTopicInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    questions?: boolean | InterviewTopic$questionsArgs<ExtArgs>
    interview?: boolean | InterviewDefaultArgs<ExtArgs>
    _count?: boolean | InterviewTopicCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type InterviewTopicIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    interview?: boolean | InterviewDefaultArgs<ExtArgs>
  }
  export type InterviewTopicIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    interview?: boolean | InterviewDefaultArgs<ExtArgs>
  }

  export type $InterviewTopicPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "InterviewTopic"
    objects: {
      questions: Prisma.$QuestionPayload<ExtArgs>[]
      interview: Prisma.$InterviewPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      interviewId: number
      name: string
      summary: string
      type: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["interviewTopic"]>
    composites: {}
  }

  type InterviewTopicGetPayload<S extends boolean | null | undefined | InterviewTopicDefaultArgs> = $Result.GetResult<Prisma.$InterviewTopicPayload, S>

  type InterviewTopicCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<InterviewTopicFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: InterviewTopicCountAggregateInputType | true
    }

  export interface InterviewTopicDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['InterviewTopic'], meta: { name: 'InterviewTopic' } }
    /**
     * Find zero or one InterviewTopic that matches the filter.
     * @param {InterviewTopicFindUniqueArgs} args - Arguments to find a InterviewTopic
     * @example
     * // Get one InterviewTopic
     * const interviewTopic = await prisma.interviewTopic.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends InterviewTopicFindUniqueArgs>(args: SelectSubset<T, InterviewTopicFindUniqueArgs<ExtArgs>>): Prisma__InterviewTopicClient<$Result.GetResult<Prisma.$InterviewTopicPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one InterviewTopic that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {InterviewTopicFindUniqueOrThrowArgs} args - Arguments to find a InterviewTopic
     * @example
     * // Get one InterviewTopic
     * const interviewTopic = await prisma.interviewTopic.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends InterviewTopicFindUniqueOrThrowArgs>(args: SelectSubset<T, InterviewTopicFindUniqueOrThrowArgs<ExtArgs>>): Prisma__InterviewTopicClient<$Result.GetResult<Prisma.$InterviewTopicPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first InterviewTopic that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InterviewTopicFindFirstArgs} args - Arguments to find a InterviewTopic
     * @example
     * // Get one InterviewTopic
     * const interviewTopic = await prisma.interviewTopic.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends InterviewTopicFindFirstArgs>(args?: SelectSubset<T, InterviewTopicFindFirstArgs<ExtArgs>>): Prisma__InterviewTopicClient<$Result.GetResult<Prisma.$InterviewTopicPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first InterviewTopic that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InterviewTopicFindFirstOrThrowArgs} args - Arguments to find a InterviewTopic
     * @example
     * // Get one InterviewTopic
     * const interviewTopic = await prisma.interviewTopic.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends InterviewTopicFindFirstOrThrowArgs>(args?: SelectSubset<T, InterviewTopicFindFirstOrThrowArgs<ExtArgs>>): Prisma__InterviewTopicClient<$Result.GetResult<Prisma.$InterviewTopicPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more InterviewTopics that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InterviewTopicFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all InterviewTopics
     * const interviewTopics = await prisma.interviewTopic.findMany()
     * 
     * // Get first 10 InterviewTopics
     * const interviewTopics = await prisma.interviewTopic.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const interviewTopicWithIdOnly = await prisma.interviewTopic.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends InterviewTopicFindManyArgs>(args?: SelectSubset<T, InterviewTopicFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InterviewTopicPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a InterviewTopic.
     * @param {InterviewTopicCreateArgs} args - Arguments to create a InterviewTopic.
     * @example
     * // Create one InterviewTopic
     * const InterviewTopic = await prisma.interviewTopic.create({
     *   data: {
     *     // ... data to create a InterviewTopic
     *   }
     * })
     * 
     */
    create<T extends InterviewTopicCreateArgs>(args: SelectSubset<T, InterviewTopicCreateArgs<ExtArgs>>): Prisma__InterviewTopicClient<$Result.GetResult<Prisma.$InterviewTopicPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many InterviewTopics.
     * @param {InterviewTopicCreateManyArgs} args - Arguments to create many InterviewTopics.
     * @example
     * // Create many InterviewTopics
     * const interviewTopic = await prisma.interviewTopic.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends InterviewTopicCreateManyArgs>(args?: SelectSubset<T, InterviewTopicCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many InterviewTopics and returns the data saved in the database.
     * @param {InterviewTopicCreateManyAndReturnArgs} args - Arguments to create many InterviewTopics.
     * @example
     * // Create many InterviewTopics
     * const interviewTopic = await prisma.interviewTopic.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many InterviewTopics and only return the `id`
     * const interviewTopicWithIdOnly = await prisma.interviewTopic.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends InterviewTopicCreateManyAndReturnArgs>(args?: SelectSubset<T, InterviewTopicCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InterviewTopicPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a InterviewTopic.
     * @param {InterviewTopicDeleteArgs} args - Arguments to delete one InterviewTopic.
     * @example
     * // Delete one InterviewTopic
     * const InterviewTopic = await prisma.interviewTopic.delete({
     *   where: {
     *     // ... filter to delete one InterviewTopic
     *   }
     * })
     * 
     */
    delete<T extends InterviewTopicDeleteArgs>(args: SelectSubset<T, InterviewTopicDeleteArgs<ExtArgs>>): Prisma__InterviewTopicClient<$Result.GetResult<Prisma.$InterviewTopicPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one InterviewTopic.
     * @param {InterviewTopicUpdateArgs} args - Arguments to update one InterviewTopic.
     * @example
     * // Update one InterviewTopic
     * const interviewTopic = await prisma.interviewTopic.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends InterviewTopicUpdateArgs>(args: SelectSubset<T, InterviewTopicUpdateArgs<ExtArgs>>): Prisma__InterviewTopicClient<$Result.GetResult<Prisma.$InterviewTopicPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more InterviewTopics.
     * @param {InterviewTopicDeleteManyArgs} args - Arguments to filter InterviewTopics to delete.
     * @example
     * // Delete a few InterviewTopics
     * const { count } = await prisma.interviewTopic.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends InterviewTopicDeleteManyArgs>(args?: SelectSubset<T, InterviewTopicDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more InterviewTopics.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InterviewTopicUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many InterviewTopics
     * const interviewTopic = await prisma.interviewTopic.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends InterviewTopicUpdateManyArgs>(args: SelectSubset<T, InterviewTopicUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more InterviewTopics and returns the data updated in the database.
     * @param {InterviewTopicUpdateManyAndReturnArgs} args - Arguments to update many InterviewTopics.
     * @example
     * // Update many InterviewTopics
     * const interviewTopic = await prisma.interviewTopic.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more InterviewTopics and only return the `id`
     * const interviewTopicWithIdOnly = await prisma.interviewTopic.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends InterviewTopicUpdateManyAndReturnArgs>(args: SelectSubset<T, InterviewTopicUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InterviewTopicPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one InterviewTopic.
     * @param {InterviewTopicUpsertArgs} args - Arguments to update or create a InterviewTopic.
     * @example
     * // Update or create a InterviewTopic
     * const interviewTopic = await prisma.interviewTopic.upsert({
     *   create: {
     *     // ... data to create a InterviewTopic
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the InterviewTopic we want to update
     *   }
     * })
     */
    upsert<T extends InterviewTopicUpsertArgs>(args: SelectSubset<T, InterviewTopicUpsertArgs<ExtArgs>>): Prisma__InterviewTopicClient<$Result.GetResult<Prisma.$InterviewTopicPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of InterviewTopics.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InterviewTopicCountArgs} args - Arguments to filter InterviewTopics to count.
     * @example
     * // Count the number of InterviewTopics
     * const count = await prisma.interviewTopic.count({
     *   where: {
     *     // ... the filter for the InterviewTopics we want to count
     *   }
     * })
    **/
    count<T extends InterviewTopicCountArgs>(
      args?: Subset<T, InterviewTopicCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], InterviewTopicCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a InterviewTopic.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InterviewTopicAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends InterviewTopicAggregateArgs>(args: Subset<T, InterviewTopicAggregateArgs>): Prisma.PrismaPromise<GetInterviewTopicAggregateType<T>>

    /**
     * Group by InterviewTopic.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InterviewTopicGroupByArgs} args - Group by arguments.
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
      T extends InterviewTopicGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: InterviewTopicGroupByArgs['orderBy'] }
        : { orderBy?: InterviewTopicGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, InterviewTopicGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetInterviewTopicGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the InterviewTopic model
   */
  readonly fields: InterviewTopicFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for InterviewTopic.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__InterviewTopicClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    questions<T extends InterviewTopic$questionsArgs<ExtArgs> = {}>(args?: Subset<T, InterviewTopic$questionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    interview<T extends InterviewDefaultArgs<ExtArgs> = {}>(args?: Subset<T, InterviewDefaultArgs<ExtArgs>>): Prisma__InterviewClient<$Result.GetResult<Prisma.$InterviewPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the InterviewTopic model
   */
  interface InterviewTopicFieldRefs {
    readonly id: FieldRef<"InterviewTopic", 'Int'>
    readonly interviewId: FieldRef<"InterviewTopic", 'Int'>
    readonly name: FieldRef<"InterviewTopic", 'String'>
    readonly summary: FieldRef<"InterviewTopic", 'String'>
    readonly type: FieldRef<"InterviewTopic", 'String'>
    readonly createdAt: FieldRef<"InterviewTopic", 'DateTime'>
    readonly updatedAt: FieldRef<"InterviewTopic", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * InterviewTopic findUnique
   */
  export type InterviewTopicFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InterviewTopic
     */
    select?: InterviewTopicSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InterviewTopic
     */
    omit?: InterviewTopicOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InterviewTopicInclude<ExtArgs> | null
    /**
     * Filter, which InterviewTopic to fetch.
     */
    where: InterviewTopicWhereUniqueInput
  }

  /**
   * InterviewTopic findUniqueOrThrow
   */
  export type InterviewTopicFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InterviewTopic
     */
    select?: InterviewTopicSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InterviewTopic
     */
    omit?: InterviewTopicOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InterviewTopicInclude<ExtArgs> | null
    /**
     * Filter, which InterviewTopic to fetch.
     */
    where: InterviewTopicWhereUniqueInput
  }

  /**
   * InterviewTopic findFirst
   */
  export type InterviewTopicFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InterviewTopic
     */
    select?: InterviewTopicSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InterviewTopic
     */
    omit?: InterviewTopicOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InterviewTopicInclude<ExtArgs> | null
    /**
     * Filter, which InterviewTopic to fetch.
     */
    where?: InterviewTopicWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InterviewTopics to fetch.
     */
    orderBy?: InterviewTopicOrderByWithRelationInput | InterviewTopicOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for InterviewTopics.
     */
    cursor?: InterviewTopicWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InterviewTopics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InterviewTopics.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of InterviewTopics.
     */
    distinct?: InterviewTopicScalarFieldEnum | InterviewTopicScalarFieldEnum[]
  }

  /**
   * InterviewTopic findFirstOrThrow
   */
  export type InterviewTopicFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InterviewTopic
     */
    select?: InterviewTopicSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InterviewTopic
     */
    omit?: InterviewTopicOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InterviewTopicInclude<ExtArgs> | null
    /**
     * Filter, which InterviewTopic to fetch.
     */
    where?: InterviewTopicWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InterviewTopics to fetch.
     */
    orderBy?: InterviewTopicOrderByWithRelationInput | InterviewTopicOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for InterviewTopics.
     */
    cursor?: InterviewTopicWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InterviewTopics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InterviewTopics.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of InterviewTopics.
     */
    distinct?: InterviewTopicScalarFieldEnum | InterviewTopicScalarFieldEnum[]
  }

  /**
   * InterviewTopic findMany
   */
  export type InterviewTopicFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InterviewTopic
     */
    select?: InterviewTopicSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InterviewTopic
     */
    omit?: InterviewTopicOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InterviewTopicInclude<ExtArgs> | null
    /**
     * Filter, which InterviewTopics to fetch.
     */
    where?: InterviewTopicWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InterviewTopics to fetch.
     */
    orderBy?: InterviewTopicOrderByWithRelationInput | InterviewTopicOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing InterviewTopics.
     */
    cursor?: InterviewTopicWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InterviewTopics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InterviewTopics.
     */
    skip?: number
    distinct?: InterviewTopicScalarFieldEnum | InterviewTopicScalarFieldEnum[]
  }

  /**
   * InterviewTopic create
   */
  export type InterviewTopicCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InterviewTopic
     */
    select?: InterviewTopicSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InterviewTopic
     */
    omit?: InterviewTopicOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InterviewTopicInclude<ExtArgs> | null
    /**
     * The data needed to create a InterviewTopic.
     */
    data: XOR<InterviewTopicCreateInput, InterviewTopicUncheckedCreateInput>
  }

  /**
   * InterviewTopic createMany
   */
  export type InterviewTopicCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many InterviewTopics.
     */
    data: InterviewTopicCreateManyInput | InterviewTopicCreateManyInput[]
  }

  /**
   * InterviewTopic createManyAndReturn
   */
  export type InterviewTopicCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InterviewTopic
     */
    select?: InterviewTopicSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the InterviewTopic
     */
    omit?: InterviewTopicOmit<ExtArgs> | null
    /**
     * The data used to create many InterviewTopics.
     */
    data: InterviewTopicCreateManyInput | InterviewTopicCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InterviewTopicIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * InterviewTopic update
   */
  export type InterviewTopicUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InterviewTopic
     */
    select?: InterviewTopicSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InterviewTopic
     */
    omit?: InterviewTopicOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InterviewTopicInclude<ExtArgs> | null
    /**
     * The data needed to update a InterviewTopic.
     */
    data: XOR<InterviewTopicUpdateInput, InterviewTopicUncheckedUpdateInput>
    /**
     * Choose, which InterviewTopic to update.
     */
    where: InterviewTopicWhereUniqueInput
  }

  /**
   * InterviewTopic updateMany
   */
  export type InterviewTopicUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update InterviewTopics.
     */
    data: XOR<InterviewTopicUpdateManyMutationInput, InterviewTopicUncheckedUpdateManyInput>
    /**
     * Filter which InterviewTopics to update
     */
    where?: InterviewTopicWhereInput
    /**
     * Limit how many InterviewTopics to update.
     */
    limit?: number
  }

  /**
   * InterviewTopic updateManyAndReturn
   */
  export type InterviewTopicUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InterviewTopic
     */
    select?: InterviewTopicSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the InterviewTopic
     */
    omit?: InterviewTopicOmit<ExtArgs> | null
    /**
     * The data used to update InterviewTopics.
     */
    data: XOR<InterviewTopicUpdateManyMutationInput, InterviewTopicUncheckedUpdateManyInput>
    /**
     * Filter which InterviewTopics to update
     */
    where?: InterviewTopicWhereInput
    /**
     * Limit how many InterviewTopics to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InterviewTopicIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * InterviewTopic upsert
   */
  export type InterviewTopicUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InterviewTopic
     */
    select?: InterviewTopicSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InterviewTopic
     */
    omit?: InterviewTopicOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InterviewTopicInclude<ExtArgs> | null
    /**
     * The filter to search for the InterviewTopic to update in case it exists.
     */
    where: InterviewTopicWhereUniqueInput
    /**
     * In case the InterviewTopic found by the `where` argument doesn't exist, create a new InterviewTopic with this data.
     */
    create: XOR<InterviewTopicCreateInput, InterviewTopicUncheckedCreateInput>
    /**
     * In case the InterviewTopic was found with the provided `where` argument, update it with this data.
     */
    update: XOR<InterviewTopicUpdateInput, InterviewTopicUncheckedUpdateInput>
  }

  /**
   * InterviewTopic delete
   */
  export type InterviewTopicDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InterviewTopic
     */
    select?: InterviewTopicSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InterviewTopic
     */
    omit?: InterviewTopicOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InterviewTopicInclude<ExtArgs> | null
    /**
     * Filter which InterviewTopic to delete.
     */
    where: InterviewTopicWhereUniqueInput
  }

  /**
   * InterviewTopic deleteMany
   */
  export type InterviewTopicDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which InterviewTopics to delete
     */
    where?: InterviewTopicWhereInput
    /**
     * Limit how many InterviewTopics to delete.
     */
    limit?: number
  }

  /**
   * InterviewTopic.questions
   */
  export type InterviewTopic$questionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
    where?: QuestionWhereInput
    orderBy?: QuestionOrderByWithRelationInput | QuestionOrderByWithRelationInput[]
    cursor?: QuestionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: QuestionScalarFieldEnum | QuestionScalarFieldEnum[]
  }

  /**
   * InterviewTopic without action
   */
  export type InterviewTopicDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InterviewTopic
     */
    select?: InterviewTopicSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InterviewTopic
     */
    omit?: InterviewTopicOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InterviewTopicInclude<ExtArgs> | null
  }


  /**
   * Model Question
   */

  export type AggregateQuestion = {
    _count: QuestionCountAggregateOutputType | null
    _avg: QuestionAvgAggregateOutputType | null
    _sum: QuestionSumAggregateOutputType | null
    _min: QuestionMinAggregateOutputType | null
    _max: QuestionMaxAggregateOutputType | null
  }

  export type QuestionAvgAggregateOutputType = {
    id: number | null
    topicId: number | null
  }

  export type QuestionSumAggregateOutputType = {
    id: number | null
    topicId: number | null
  }

  export type QuestionMinAggregateOutputType = {
    id: number | null
    topicId: number | null
    questionText: string | null
    answerText: string | null
    emotion: string | null
    createdAt: Date | null
  }

  export type QuestionMaxAggregateOutputType = {
    id: number | null
    topicId: number | null
    questionText: string | null
    answerText: string | null
    emotion: string | null
    createdAt: Date | null
  }

  export type QuestionCountAggregateOutputType = {
    id: number
    topicId: number
    questionText: number
    answerText: number
    emotion: number
    createdAt: number
    _all: number
  }


  export type QuestionAvgAggregateInputType = {
    id?: true
    topicId?: true
  }

  export type QuestionSumAggregateInputType = {
    id?: true
    topicId?: true
  }

  export type QuestionMinAggregateInputType = {
    id?: true
    topicId?: true
    questionText?: true
    answerText?: true
    emotion?: true
    createdAt?: true
  }

  export type QuestionMaxAggregateInputType = {
    id?: true
    topicId?: true
    questionText?: true
    answerText?: true
    emotion?: true
    createdAt?: true
  }

  export type QuestionCountAggregateInputType = {
    id?: true
    topicId?: true
    questionText?: true
    answerText?: true
    emotion?: true
    createdAt?: true
    _all?: true
  }

  export type QuestionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Question to aggregate.
     */
    where?: QuestionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Questions to fetch.
     */
    orderBy?: QuestionOrderByWithRelationInput | QuestionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: QuestionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Questions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Questions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Questions
    **/
    _count?: true | QuestionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: QuestionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: QuestionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: QuestionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: QuestionMaxAggregateInputType
  }

  export type GetQuestionAggregateType<T extends QuestionAggregateArgs> = {
        [P in keyof T & keyof AggregateQuestion]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateQuestion[P]>
      : GetScalarType<T[P], AggregateQuestion[P]>
  }




  export type QuestionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: QuestionWhereInput
    orderBy?: QuestionOrderByWithAggregationInput | QuestionOrderByWithAggregationInput[]
    by: QuestionScalarFieldEnum[] | QuestionScalarFieldEnum
    having?: QuestionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: QuestionCountAggregateInputType | true
    _avg?: QuestionAvgAggregateInputType
    _sum?: QuestionSumAggregateInputType
    _min?: QuestionMinAggregateInputType
    _max?: QuestionMaxAggregateInputType
  }

  export type QuestionGroupByOutputType = {
    id: number
    topicId: number
    questionText: string
    answerText: string | null
    emotion: string
    createdAt: Date
    _count: QuestionCountAggregateOutputType | null
    _avg: QuestionAvgAggregateOutputType | null
    _sum: QuestionSumAggregateOutputType | null
    _min: QuestionMinAggregateOutputType | null
    _max: QuestionMaxAggregateOutputType | null
  }

  type GetQuestionGroupByPayload<T extends QuestionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<QuestionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof QuestionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], QuestionGroupByOutputType[P]>
            : GetScalarType<T[P], QuestionGroupByOutputType[P]>
        }
      >
    >


  export type QuestionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    topicId?: boolean
    questionText?: boolean
    answerText?: boolean
    emotion?: boolean
    createdAt?: boolean
    topic?: boolean | InterviewTopicDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["question"]>

  export type QuestionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    topicId?: boolean
    questionText?: boolean
    answerText?: boolean
    emotion?: boolean
    createdAt?: boolean
    topic?: boolean | InterviewTopicDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["question"]>

  export type QuestionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    topicId?: boolean
    questionText?: boolean
    answerText?: boolean
    emotion?: boolean
    createdAt?: boolean
    topic?: boolean | InterviewTopicDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["question"]>

  export type QuestionSelectScalar = {
    id?: boolean
    topicId?: boolean
    questionText?: boolean
    answerText?: boolean
    emotion?: boolean
    createdAt?: boolean
  }

  export type QuestionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "topicId" | "questionText" | "answerText" | "emotion" | "createdAt", ExtArgs["result"]["question"]>
  export type QuestionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    topic?: boolean | InterviewTopicDefaultArgs<ExtArgs>
  }
  export type QuestionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    topic?: boolean | InterviewTopicDefaultArgs<ExtArgs>
  }
  export type QuestionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    topic?: boolean | InterviewTopicDefaultArgs<ExtArgs>
  }

  export type $QuestionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Question"
    objects: {
      topic: Prisma.$InterviewTopicPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      topicId: number
      questionText: string
      answerText: string | null
      emotion: string
      createdAt: Date
    }, ExtArgs["result"]["question"]>
    composites: {}
  }

  type QuestionGetPayload<S extends boolean | null | undefined | QuestionDefaultArgs> = $Result.GetResult<Prisma.$QuestionPayload, S>

  type QuestionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<QuestionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: QuestionCountAggregateInputType | true
    }

  export interface QuestionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Question'], meta: { name: 'Question' } }
    /**
     * Find zero or one Question that matches the filter.
     * @param {QuestionFindUniqueArgs} args - Arguments to find a Question
     * @example
     * // Get one Question
     * const question = await prisma.question.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends QuestionFindUniqueArgs>(args: SelectSubset<T, QuestionFindUniqueArgs<ExtArgs>>): Prisma__QuestionClient<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Question that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {QuestionFindUniqueOrThrowArgs} args - Arguments to find a Question
     * @example
     * // Get one Question
     * const question = await prisma.question.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends QuestionFindUniqueOrThrowArgs>(args: SelectSubset<T, QuestionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__QuestionClient<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Question that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionFindFirstArgs} args - Arguments to find a Question
     * @example
     * // Get one Question
     * const question = await prisma.question.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends QuestionFindFirstArgs>(args?: SelectSubset<T, QuestionFindFirstArgs<ExtArgs>>): Prisma__QuestionClient<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Question that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionFindFirstOrThrowArgs} args - Arguments to find a Question
     * @example
     * // Get one Question
     * const question = await prisma.question.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends QuestionFindFirstOrThrowArgs>(args?: SelectSubset<T, QuestionFindFirstOrThrowArgs<ExtArgs>>): Prisma__QuestionClient<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Questions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Questions
     * const questions = await prisma.question.findMany()
     * 
     * // Get first 10 Questions
     * const questions = await prisma.question.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const questionWithIdOnly = await prisma.question.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends QuestionFindManyArgs>(args?: SelectSubset<T, QuestionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Question.
     * @param {QuestionCreateArgs} args - Arguments to create a Question.
     * @example
     * // Create one Question
     * const Question = await prisma.question.create({
     *   data: {
     *     // ... data to create a Question
     *   }
     * })
     * 
     */
    create<T extends QuestionCreateArgs>(args: SelectSubset<T, QuestionCreateArgs<ExtArgs>>): Prisma__QuestionClient<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Questions.
     * @param {QuestionCreateManyArgs} args - Arguments to create many Questions.
     * @example
     * // Create many Questions
     * const question = await prisma.question.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends QuestionCreateManyArgs>(args?: SelectSubset<T, QuestionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Questions and returns the data saved in the database.
     * @param {QuestionCreateManyAndReturnArgs} args - Arguments to create many Questions.
     * @example
     * // Create many Questions
     * const question = await prisma.question.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Questions and only return the `id`
     * const questionWithIdOnly = await prisma.question.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends QuestionCreateManyAndReturnArgs>(args?: SelectSubset<T, QuestionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Question.
     * @param {QuestionDeleteArgs} args - Arguments to delete one Question.
     * @example
     * // Delete one Question
     * const Question = await prisma.question.delete({
     *   where: {
     *     // ... filter to delete one Question
     *   }
     * })
     * 
     */
    delete<T extends QuestionDeleteArgs>(args: SelectSubset<T, QuestionDeleteArgs<ExtArgs>>): Prisma__QuestionClient<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Question.
     * @param {QuestionUpdateArgs} args - Arguments to update one Question.
     * @example
     * // Update one Question
     * const question = await prisma.question.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends QuestionUpdateArgs>(args: SelectSubset<T, QuestionUpdateArgs<ExtArgs>>): Prisma__QuestionClient<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Questions.
     * @param {QuestionDeleteManyArgs} args - Arguments to filter Questions to delete.
     * @example
     * // Delete a few Questions
     * const { count } = await prisma.question.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends QuestionDeleteManyArgs>(args?: SelectSubset<T, QuestionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Questions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Questions
     * const question = await prisma.question.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends QuestionUpdateManyArgs>(args: SelectSubset<T, QuestionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Questions and returns the data updated in the database.
     * @param {QuestionUpdateManyAndReturnArgs} args - Arguments to update many Questions.
     * @example
     * // Update many Questions
     * const question = await prisma.question.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Questions and only return the `id`
     * const questionWithIdOnly = await prisma.question.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends QuestionUpdateManyAndReturnArgs>(args: SelectSubset<T, QuestionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Question.
     * @param {QuestionUpsertArgs} args - Arguments to update or create a Question.
     * @example
     * // Update or create a Question
     * const question = await prisma.question.upsert({
     *   create: {
     *     // ... data to create a Question
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Question we want to update
     *   }
     * })
     */
    upsert<T extends QuestionUpsertArgs>(args: SelectSubset<T, QuestionUpsertArgs<ExtArgs>>): Prisma__QuestionClient<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Questions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionCountArgs} args - Arguments to filter Questions to count.
     * @example
     * // Count the number of Questions
     * const count = await prisma.question.count({
     *   where: {
     *     // ... the filter for the Questions we want to count
     *   }
     * })
    **/
    count<T extends QuestionCountArgs>(
      args?: Subset<T, QuestionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], QuestionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Question.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends QuestionAggregateArgs>(args: Subset<T, QuestionAggregateArgs>): Prisma.PrismaPromise<GetQuestionAggregateType<T>>

    /**
     * Group by Question.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionGroupByArgs} args - Group by arguments.
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
      T extends QuestionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: QuestionGroupByArgs['orderBy'] }
        : { orderBy?: QuestionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, QuestionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetQuestionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Question model
   */
  readonly fields: QuestionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Question.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__QuestionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    topic<T extends InterviewTopicDefaultArgs<ExtArgs> = {}>(args?: Subset<T, InterviewTopicDefaultArgs<ExtArgs>>): Prisma__InterviewTopicClient<$Result.GetResult<Prisma.$InterviewTopicPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Question model
   */
  interface QuestionFieldRefs {
    readonly id: FieldRef<"Question", 'Int'>
    readonly topicId: FieldRef<"Question", 'Int'>
    readonly questionText: FieldRef<"Question", 'String'>
    readonly answerText: FieldRef<"Question", 'String'>
    readonly emotion: FieldRef<"Question", 'String'>
    readonly createdAt: FieldRef<"Question", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Question findUnique
   */
  export type QuestionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
    /**
     * Filter, which Question to fetch.
     */
    where: QuestionWhereUniqueInput
  }

  /**
   * Question findUniqueOrThrow
   */
  export type QuestionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
    /**
     * Filter, which Question to fetch.
     */
    where: QuestionWhereUniqueInput
  }

  /**
   * Question findFirst
   */
  export type QuestionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
    /**
     * Filter, which Question to fetch.
     */
    where?: QuestionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Questions to fetch.
     */
    orderBy?: QuestionOrderByWithRelationInput | QuestionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Questions.
     */
    cursor?: QuestionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Questions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Questions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Questions.
     */
    distinct?: QuestionScalarFieldEnum | QuestionScalarFieldEnum[]
  }

  /**
   * Question findFirstOrThrow
   */
  export type QuestionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
    /**
     * Filter, which Question to fetch.
     */
    where?: QuestionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Questions to fetch.
     */
    orderBy?: QuestionOrderByWithRelationInput | QuestionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Questions.
     */
    cursor?: QuestionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Questions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Questions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Questions.
     */
    distinct?: QuestionScalarFieldEnum | QuestionScalarFieldEnum[]
  }

  /**
   * Question findMany
   */
  export type QuestionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
    /**
     * Filter, which Questions to fetch.
     */
    where?: QuestionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Questions to fetch.
     */
    orderBy?: QuestionOrderByWithRelationInput | QuestionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Questions.
     */
    cursor?: QuestionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Questions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Questions.
     */
    skip?: number
    distinct?: QuestionScalarFieldEnum | QuestionScalarFieldEnum[]
  }

  /**
   * Question create
   */
  export type QuestionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
    /**
     * The data needed to create a Question.
     */
    data: XOR<QuestionCreateInput, QuestionUncheckedCreateInput>
  }

  /**
   * Question createMany
   */
  export type QuestionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Questions.
     */
    data: QuestionCreateManyInput | QuestionCreateManyInput[]
  }

  /**
   * Question createManyAndReturn
   */
  export type QuestionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * The data used to create many Questions.
     */
    data: QuestionCreateManyInput | QuestionCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Question update
   */
  export type QuestionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
    /**
     * The data needed to update a Question.
     */
    data: XOR<QuestionUpdateInput, QuestionUncheckedUpdateInput>
    /**
     * Choose, which Question to update.
     */
    where: QuestionWhereUniqueInput
  }

  /**
   * Question updateMany
   */
  export type QuestionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Questions.
     */
    data: XOR<QuestionUpdateManyMutationInput, QuestionUncheckedUpdateManyInput>
    /**
     * Filter which Questions to update
     */
    where?: QuestionWhereInput
    /**
     * Limit how many Questions to update.
     */
    limit?: number
  }

  /**
   * Question updateManyAndReturn
   */
  export type QuestionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * The data used to update Questions.
     */
    data: XOR<QuestionUpdateManyMutationInput, QuestionUncheckedUpdateManyInput>
    /**
     * Filter which Questions to update
     */
    where?: QuestionWhereInput
    /**
     * Limit how many Questions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Question upsert
   */
  export type QuestionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
    /**
     * The filter to search for the Question to update in case it exists.
     */
    where: QuestionWhereUniqueInput
    /**
     * In case the Question found by the `where` argument doesn't exist, create a new Question with this data.
     */
    create: XOR<QuestionCreateInput, QuestionUncheckedCreateInput>
    /**
     * In case the Question was found with the provided `where` argument, update it with this data.
     */
    update: XOR<QuestionUpdateInput, QuestionUncheckedUpdateInput>
  }

  /**
   * Question delete
   */
  export type QuestionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
    /**
     * Filter which Question to delete.
     */
    where: QuestionWhereUniqueInput
  }

  /**
   * Question deleteMany
   */
  export type QuestionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Questions to delete
     */
    where?: QuestionWhereInput
    /**
     * Limit how many Questions to delete.
     */
    limit?: number
  }

  /**
   * Question without action
   */
  export type QuestionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const ReplicantScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    createdAt: 'createdAt',
    snapshot: 'snapshot'
  };

  export type ReplicantScalarFieldEnum = (typeof ReplicantScalarFieldEnum)[keyof typeof ReplicantScalarFieldEnum]


  export const InterviewScalarFieldEnum: {
    id: 'id',
    replicantId: 'replicantId',
    createdAt: 'createdAt',
    summary: 'summary'
  };

  export type InterviewScalarFieldEnum = (typeof InterviewScalarFieldEnum)[keyof typeof InterviewScalarFieldEnum]


  export const InterviewTopicScalarFieldEnum: {
    id: 'id',
    interviewId: 'interviewId',
    name: 'name',
    summary: 'summary',
    type: 'type',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type InterviewTopicScalarFieldEnum = (typeof InterviewTopicScalarFieldEnum)[keyof typeof InterviewTopicScalarFieldEnum]


  export const QuestionScalarFieldEnum: {
    id: 'id',
    topicId: 'topicId',
    questionText: 'questionText',
    answerText: 'answerText',
    emotion: 'emotion',
    createdAt: 'createdAt'
  };

  export type QuestionScalarFieldEnum = (typeof QuestionScalarFieldEnum)[keyof typeof QuestionScalarFieldEnum]


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
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type ReplicantWhereInput = {
    AND?: ReplicantWhereInput | ReplicantWhereInput[]
    OR?: ReplicantWhereInput[]
    NOT?: ReplicantWhereInput | ReplicantWhereInput[]
    id?: IntFilter<"Replicant"> | number
    name?: StringFilter<"Replicant"> | string
    description?: StringNullableFilter<"Replicant"> | string | null
    createdAt?: DateTimeFilter<"Replicant"> | Date | string
    snapshot?: StringFilter<"Replicant"> | string
    interview?: XOR<InterviewNullableScalarRelationFilter, InterviewWhereInput> | null
  }

  export type ReplicantOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    snapshot?: SortOrder
    interview?: InterviewOrderByWithRelationInput
  }

  export type ReplicantWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ReplicantWhereInput | ReplicantWhereInput[]
    OR?: ReplicantWhereInput[]
    NOT?: ReplicantWhereInput | ReplicantWhereInput[]
    name?: StringFilter<"Replicant"> | string
    description?: StringNullableFilter<"Replicant"> | string | null
    createdAt?: DateTimeFilter<"Replicant"> | Date | string
    snapshot?: StringFilter<"Replicant"> | string
    interview?: XOR<InterviewNullableScalarRelationFilter, InterviewWhereInput> | null
  }, "id">

  export type ReplicantOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    snapshot?: SortOrder
    _count?: ReplicantCountOrderByAggregateInput
    _avg?: ReplicantAvgOrderByAggregateInput
    _max?: ReplicantMaxOrderByAggregateInput
    _min?: ReplicantMinOrderByAggregateInput
    _sum?: ReplicantSumOrderByAggregateInput
  }

  export type ReplicantScalarWhereWithAggregatesInput = {
    AND?: ReplicantScalarWhereWithAggregatesInput | ReplicantScalarWhereWithAggregatesInput[]
    OR?: ReplicantScalarWhereWithAggregatesInput[]
    NOT?: ReplicantScalarWhereWithAggregatesInput | ReplicantScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Replicant"> | number
    name?: StringWithAggregatesFilter<"Replicant"> | string
    description?: StringNullableWithAggregatesFilter<"Replicant"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Replicant"> | Date | string
    snapshot?: StringWithAggregatesFilter<"Replicant"> | string
  }

  export type InterviewWhereInput = {
    AND?: InterviewWhereInput | InterviewWhereInput[]
    OR?: InterviewWhereInput[]
    NOT?: InterviewWhereInput | InterviewWhereInput[]
    id?: IntFilter<"Interview"> | number
    replicantId?: IntFilter<"Interview"> | number
    createdAt?: DateTimeFilter<"Interview"> | Date | string
    summary?: StringFilter<"Interview"> | string
    replicant?: XOR<ReplicantScalarRelationFilter, ReplicantWhereInput>
    topics?: InterviewTopicListRelationFilter
  }

  export type InterviewOrderByWithRelationInput = {
    id?: SortOrder
    replicantId?: SortOrder
    createdAt?: SortOrder
    summary?: SortOrder
    replicant?: ReplicantOrderByWithRelationInput
    topics?: InterviewTopicOrderByRelationAggregateInput
  }

  export type InterviewWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    replicantId?: number
    AND?: InterviewWhereInput | InterviewWhereInput[]
    OR?: InterviewWhereInput[]
    NOT?: InterviewWhereInput | InterviewWhereInput[]
    createdAt?: DateTimeFilter<"Interview"> | Date | string
    summary?: StringFilter<"Interview"> | string
    replicant?: XOR<ReplicantScalarRelationFilter, ReplicantWhereInput>
    topics?: InterviewTopicListRelationFilter
  }, "id" | "replicantId">

  export type InterviewOrderByWithAggregationInput = {
    id?: SortOrder
    replicantId?: SortOrder
    createdAt?: SortOrder
    summary?: SortOrder
    _count?: InterviewCountOrderByAggregateInput
    _avg?: InterviewAvgOrderByAggregateInput
    _max?: InterviewMaxOrderByAggregateInput
    _min?: InterviewMinOrderByAggregateInput
    _sum?: InterviewSumOrderByAggregateInput
  }

  export type InterviewScalarWhereWithAggregatesInput = {
    AND?: InterviewScalarWhereWithAggregatesInput | InterviewScalarWhereWithAggregatesInput[]
    OR?: InterviewScalarWhereWithAggregatesInput[]
    NOT?: InterviewScalarWhereWithAggregatesInput | InterviewScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Interview"> | number
    replicantId?: IntWithAggregatesFilter<"Interview"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Interview"> | Date | string
    summary?: StringWithAggregatesFilter<"Interview"> | string
  }

  export type InterviewTopicWhereInput = {
    AND?: InterviewTopicWhereInput | InterviewTopicWhereInput[]
    OR?: InterviewTopicWhereInput[]
    NOT?: InterviewTopicWhereInput | InterviewTopicWhereInput[]
    id?: IntFilter<"InterviewTopic"> | number
    interviewId?: IntFilter<"InterviewTopic"> | number
    name?: StringFilter<"InterviewTopic"> | string
    summary?: StringFilter<"InterviewTopic"> | string
    type?: StringNullableFilter<"InterviewTopic"> | string | null
    createdAt?: DateTimeFilter<"InterviewTopic"> | Date | string
    updatedAt?: DateTimeFilter<"InterviewTopic"> | Date | string
    questions?: QuestionListRelationFilter
    interview?: XOR<InterviewScalarRelationFilter, InterviewWhereInput>
  }

  export type InterviewTopicOrderByWithRelationInput = {
    id?: SortOrder
    interviewId?: SortOrder
    name?: SortOrder
    summary?: SortOrder
    type?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    questions?: QuestionOrderByRelationAggregateInput
    interview?: InterviewOrderByWithRelationInput
  }

  export type InterviewTopicWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: InterviewTopicWhereInput | InterviewTopicWhereInput[]
    OR?: InterviewTopicWhereInput[]
    NOT?: InterviewTopicWhereInput | InterviewTopicWhereInput[]
    interviewId?: IntFilter<"InterviewTopic"> | number
    name?: StringFilter<"InterviewTopic"> | string
    summary?: StringFilter<"InterviewTopic"> | string
    type?: StringNullableFilter<"InterviewTopic"> | string | null
    createdAt?: DateTimeFilter<"InterviewTopic"> | Date | string
    updatedAt?: DateTimeFilter<"InterviewTopic"> | Date | string
    questions?: QuestionListRelationFilter
    interview?: XOR<InterviewScalarRelationFilter, InterviewWhereInput>
  }, "id">

  export type InterviewTopicOrderByWithAggregationInput = {
    id?: SortOrder
    interviewId?: SortOrder
    name?: SortOrder
    summary?: SortOrder
    type?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: InterviewTopicCountOrderByAggregateInput
    _avg?: InterviewTopicAvgOrderByAggregateInput
    _max?: InterviewTopicMaxOrderByAggregateInput
    _min?: InterviewTopicMinOrderByAggregateInput
    _sum?: InterviewTopicSumOrderByAggregateInput
  }

  export type InterviewTopicScalarWhereWithAggregatesInput = {
    AND?: InterviewTopicScalarWhereWithAggregatesInput | InterviewTopicScalarWhereWithAggregatesInput[]
    OR?: InterviewTopicScalarWhereWithAggregatesInput[]
    NOT?: InterviewTopicScalarWhereWithAggregatesInput | InterviewTopicScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"InterviewTopic"> | number
    interviewId?: IntWithAggregatesFilter<"InterviewTopic"> | number
    name?: StringWithAggregatesFilter<"InterviewTopic"> | string
    summary?: StringWithAggregatesFilter<"InterviewTopic"> | string
    type?: StringNullableWithAggregatesFilter<"InterviewTopic"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"InterviewTopic"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"InterviewTopic"> | Date | string
  }

  export type QuestionWhereInput = {
    AND?: QuestionWhereInput | QuestionWhereInput[]
    OR?: QuestionWhereInput[]
    NOT?: QuestionWhereInput | QuestionWhereInput[]
    id?: IntFilter<"Question"> | number
    topicId?: IntFilter<"Question"> | number
    questionText?: StringFilter<"Question"> | string
    answerText?: StringNullableFilter<"Question"> | string | null
    emotion?: StringFilter<"Question"> | string
    createdAt?: DateTimeFilter<"Question"> | Date | string
    topic?: XOR<InterviewTopicScalarRelationFilter, InterviewTopicWhereInput>
  }

  export type QuestionOrderByWithRelationInput = {
    id?: SortOrder
    topicId?: SortOrder
    questionText?: SortOrder
    answerText?: SortOrderInput | SortOrder
    emotion?: SortOrder
    createdAt?: SortOrder
    topic?: InterviewTopicOrderByWithRelationInput
  }

  export type QuestionWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: QuestionWhereInput | QuestionWhereInput[]
    OR?: QuestionWhereInput[]
    NOT?: QuestionWhereInput | QuestionWhereInput[]
    topicId?: IntFilter<"Question"> | number
    questionText?: StringFilter<"Question"> | string
    answerText?: StringNullableFilter<"Question"> | string | null
    emotion?: StringFilter<"Question"> | string
    createdAt?: DateTimeFilter<"Question"> | Date | string
    topic?: XOR<InterviewTopicScalarRelationFilter, InterviewTopicWhereInput>
  }, "id">

  export type QuestionOrderByWithAggregationInput = {
    id?: SortOrder
    topicId?: SortOrder
    questionText?: SortOrder
    answerText?: SortOrderInput | SortOrder
    emotion?: SortOrder
    createdAt?: SortOrder
    _count?: QuestionCountOrderByAggregateInput
    _avg?: QuestionAvgOrderByAggregateInput
    _max?: QuestionMaxOrderByAggregateInput
    _min?: QuestionMinOrderByAggregateInput
    _sum?: QuestionSumOrderByAggregateInput
  }

  export type QuestionScalarWhereWithAggregatesInput = {
    AND?: QuestionScalarWhereWithAggregatesInput | QuestionScalarWhereWithAggregatesInput[]
    OR?: QuestionScalarWhereWithAggregatesInput[]
    NOT?: QuestionScalarWhereWithAggregatesInput | QuestionScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Question"> | number
    topicId?: IntWithAggregatesFilter<"Question"> | number
    questionText?: StringWithAggregatesFilter<"Question"> | string
    answerText?: StringNullableWithAggregatesFilter<"Question"> | string | null
    emotion?: StringWithAggregatesFilter<"Question"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Question"> | Date | string
  }

  export type ReplicantCreateInput = {
    name: string
    description?: string | null
    createdAt?: Date | string
    snapshot: string
    interview?: InterviewCreateNestedOneWithoutReplicantInput
  }

  export type ReplicantUncheckedCreateInput = {
    id?: number
    name: string
    description?: string | null
    createdAt?: Date | string
    snapshot: string
    interview?: InterviewUncheckedCreateNestedOneWithoutReplicantInput
  }

  export type ReplicantUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    snapshot?: StringFieldUpdateOperationsInput | string
    interview?: InterviewUpdateOneWithoutReplicantNestedInput
  }

  export type ReplicantUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    snapshot?: StringFieldUpdateOperationsInput | string
    interview?: InterviewUncheckedUpdateOneWithoutReplicantNestedInput
  }

  export type ReplicantCreateManyInput = {
    id?: number
    name: string
    description?: string | null
    createdAt?: Date | string
    snapshot: string
  }

  export type ReplicantUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    snapshot?: StringFieldUpdateOperationsInput | string
  }

  export type ReplicantUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    snapshot?: StringFieldUpdateOperationsInput | string
  }

  export type InterviewCreateInput = {
    createdAt?: Date | string
    summary: string
    replicant: ReplicantCreateNestedOneWithoutInterviewInput
    topics?: InterviewTopicCreateNestedManyWithoutInterviewInput
  }

  export type InterviewUncheckedCreateInput = {
    id?: number
    replicantId: number
    createdAt?: Date | string
    summary: string
    topics?: InterviewTopicUncheckedCreateNestedManyWithoutInterviewInput
  }

  export type InterviewUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    summary?: StringFieldUpdateOperationsInput | string
    replicant?: ReplicantUpdateOneRequiredWithoutInterviewNestedInput
    topics?: InterviewTopicUpdateManyWithoutInterviewNestedInput
  }

  export type InterviewUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    replicantId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    summary?: StringFieldUpdateOperationsInput | string
    topics?: InterviewTopicUncheckedUpdateManyWithoutInterviewNestedInput
  }

  export type InterviewCreateManyInput = {
    id?: number
    replicantId: number
    createdAt?: Date | string
    summary: string
  }

  export type InterviewUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    summary?: StringFieldUpdateOperationsInput | string
  }

  export type InterviewUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    replicantId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    summary?: StringFieldUpdateOperationsInput | string
  }

  export type InterviewTopicCreateInput = {
    name: string
    summary: string
    type?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    questions?: QuestionCreateNestedManyWithoutTopicInput
    interview: InterviewCreateNestedOneWithoutTopicsInput
  }

  export type InterviewTopicUncheckedCreateInput = {
    id?: number
    interviewId: number
    name: string
    summary: string
    type?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    questions?: QuestionUncheckedCreateNestedManyWithoutTopicInput
  }

  export type InterviewTopicUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    summary?: StringFieldUpdateOperationsInput | string
    type?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    questions?: QuestionUpdateManyWithoutTopicNestedInput
    interview?: InterviewUpdateOneRequiredWithoutTopicsNestedInput
  }

  export type InterviewTopicUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    interviewId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    summary?: StringFieldUpdateOperationsInput | string
    type?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    questions?: QuestionUncheckedUpdateManyWithoutTopicNestedInput
  }

  export type InterviewTopicCreateManyInput = {
    id?: number
    interviewId: number
    name: string
    summary: string
    type?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type InterviewTopicUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    summary?: StringFieldUpdateOperationsInput | string
    type?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InterviewTopicUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    interviewId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    summary?: StringFieldUpdateOperationsInput | string
    type?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QuestionCreateInput = {
    questionText: string
    answerText?: string | null
    emotion: string
    createdAt?: Date | string
    topic: InterviewTopicCreateNestedOneWithoutQuestionsInput
  }

  export type QuestionUncheckedCreateInput = {
    id?: number
    topicId: number
    questionText: string
    answerText?: string | null
    emotion: string
    createdAt?: Date | string
  }

  export type QuestionUpdateInput = {
    questionText?: StringFieldUpdateOperationsInput | string
    answerText?: NullableStringFieldUpdateOperationsInput | string | null
    emotion?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    topic?: InterviewTopicUpdateOneRequiredWithoutQuestionsNestedInput
  }

  export type QuestionUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    topicId?: IntFieldUpdateOperationsInput | number
    questionText?: StringFieldUpdateOperationsInput | string
    answerText?: NullableStringFieldUpdateOperationsInput | string | null
    emotion?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QuestionCreateManyInput = {
    id?: number
    topicId: number
    questionText: string
    answerText?: string | null
    emotion: string
    createdAt?: Date | string
  }

  export type QuestionUpdateManyMutationInput = {
    questionText?: StringFieldUpdateOperationsInput | string
    answerText?: NullableStringFieldUpdateOperationsInput | string | null
    emotion?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QuestionUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    topicId?: IntFieldUpdateOperationsInput | number
    questionText?: StringFieldUpdateOperationsInput | string
    answerText?: NullableStringFieldUpdateOperationsInput | string | null
    emotion?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
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
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type InterviewNullableScalarRelationFilter = {
    is?: InterviewWhereInput | null
    isNot?: InterviewWhereInput | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type ReplicantCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    snapshot?: SortOrder
  }

  export type ReplicantAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ReplicantMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    snapshot?: SortOrder
  }

  export type ReplicantMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    snapshot?: SortOrder
  }

  export type ReplicantSumOrderByAggregateInput = {
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
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type ReplicantScalarRelationFilter = {
    is?: ReplicantWhereInput
    isNot?: ReplicantWhereInput
  }

  export type InterviewTopicListRelationFilter = {
    every?: InterviewTopicWhereInput
    some?: InterviewTopicWhereInput
    none?: InterviewTopicWhereInput
  }

  export type InterviewTopicOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type InterviewCountOrderByAggregateInput = {
    id?: SortOrder
    replicantId?: SortOrder
    createdAt?: SortOrder
    summary?: SortOrder
  }

  export type InterviewAvgOrderByAggregateInput = {
    id?: SortOrder
    replicantId?: SortOrder
  }

  export type InterviewMaxOrderByAggregateInput = {
    id?: SortOrder
    replicantId?: SortOrder
    createdAt?: SortOrder
    summary?: SortOrder
  }

  export type InterviewMinOrderByAggregateInput = {
    id?: SortOrder
    replicantId?: SortOrder
    createdAt?: SortOrder
    summary?: SortOrder
  }

  export type InterviewSumOrderByAggregateInput = {
    id?: SortOrder
    replicantId?: SortOrder
  }

  export type QuestionListRelationFilter = {
    every?: QuestionWhereInput
    some?: QuestionWhereInput
    none?: QuestionWhereInput
  }

  export type InterviewScalarRelationFilter = {
    is?: InterviewWhereInput
    isNot?: InterviewWhereInput
  }

  export type QuestionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type InterviewTopicCountOrderByAggregateInput = {
    id?: SortOrder
    interviewId?: SortOrder
    name?: SortOrder
    summary?: SortOrder
    type?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type InterviewTopicAvgOrderByAggregateInput = {
    id?: SortOrder
    interviewId?: SortOrder
  }

  export type InterviewTopicMaxOrderByAggregateInput = {
    id?: SortOrder
    interviewId?: SortOrder
    name?: SortOrder
    summary?: SortOrder
    type?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type InterviewTopicMinOrderByAggregateInput = {
    id?: SortOrder
    interviewId?: SortOrder
    name?: SortOrder
    summary?: SortOrder
    type?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type InterviewTopicSumOrderByAggregateInput = {
    id?: SortOrder
    interviewId?: SortOrder
  }

  export type InterviewTopicScalarRelationFilter = {
    is?: InterviewTopicWhereInput
    isNot?: InterviewTopicWhereInput
  }

  export type QuestionCountOrderByAggregateInput = {
    id?: SortOrder
    topicId?: SortOrder
    questionText?: SortOrder
    answerText?: SortOrder
    emotion?: SortOrder
    createdAt?: SortOrder
  }

  export type QuestionAvgOrderByAggregateInput = {
    id?: SortOrder
    topicId?: SortOrder
  }

  export type QuestionMaxOrderByAggregateInput = {
    id?: SortOrder
    topicId?: SortOrder
    questionText?: SortOrder
    answerText?: SortOrder
    emotion?: SortOrder
    createdAt?: SortOrder
  }

  export type QuestionMinOrderByAggregateInput = {
    id?: SortOrder
    topicId?: SortOrder
    questionText?: SortOrder
    answerText?: SortOrder
    emotion?: SortOrder
    createdAt?: SortOrder
  }

  export type QuestionSumOrderByAggregateInput = {
    id?: SortOrder
    topicId?: SortOrder
  }

  export type InterviewCreateNestedOneWithoutReplicantInput = {
    create?: XOR<InterviewCreateWithoutReplicantInput, InterviewUncheckedCreateWithoutReplicantInput>
    connectOrCreate?: InterviewCreateOrConnectWithoutReplicantInput
    connect?: InterviewWhereUniqueInput
  }

  export type InterviewUncheckedCreateNestedOneWithoutReplicantInput = {
    create?: XOR<InterviewCreateWithoutReplicantInput, InterviewUncheckedCreateWithoutReplicantInput>
    connectOrCreate?: InterviewCreateOrConnectWithoutReplicantInput
    connect?: InterviewWhereUniqueInput
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type InterviewUpdateOneWithoutReplicantNestedInput = {
    create?: XOR<InterviewCreateWithoutReplicantInput, InterviewUncheckedCreateWithoutReplicantInput>
    connectOrCreate?: InterviewCreateOrConnectWithoutReplicantInput
    upsert?: InterviewUpsertWithoutReplicantInput
    disconnect?: InterviewWhereInput | boolean
    delete?: InterviewWhereInput | boolean
    connect?: InterviewWhereUniqueInput
    update?: XOR<XOR<InterviewUpdateToOneWithWhereWithoutReplicantInput, InterviewUpdateWithoutReplicantInput>, InterviewUncheckedUpdateWithoutReplicantInput>
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type InterviewUncheckedUpdateOneWithoutReplicantNestedInput = {
    create?: XOR<InterviewCreateWithoutReplicantInput, InterviewUncheckedCreateWithoutReplicantInput>
    connectOrCreate?: InterviewCreateOrConnectWithoutReplicantInput
    upsert?: InterviewUpsertWithoutReplicantInput
    disconnect?: InterviewWhereInput | boolean
    delete?: InterviewWhereInput | boolean
    connect?: InterviewWhereUniqueInput
    update?: XOR<XOR<InterviewUpdateToOneWithWhereWithoutReplicantInput, InterviewUpdateWithoutReplicantInput>, InterviewUncheckedUpdateWithoutReplicantInput>
  }

  export type ReplicantCreateNestedOneWithoutInterviewInput = {
    create?: XOR<ReplicantCreateWithoutInterviewInput, ReplicantUncheckedCreateWithoutInterviewInput>
    connectOrCreate?: ReplicantCreateOrConnectWithoutInterviewInput
    connect?: ReplicantWhereUniqueInput
  }

  export type InterviewTopicCreateNestedManyWithoutInterviewInput = {
    create?: XOR<InterviewTopicCreateWithoutInterviewInput, InterviewTopicUncheckedCreateWithoutInterviewInput> | InterviewTopicCreateWithoutInterviewInput[] | InterviewTopicUncheckedCreateWithoutInterviewInput[]
    connectOrCreate?: InterviewTopicCreateOrConnectWithoutInterviewInput | InterviewTopicCreateOrConnectWithoutInterviewInput[]
    createMany?: InterviewTopicCreateManyInterviewInputEnvelope
    connect?: InterviewTopicWhereUniqueInput | InterviewTopicWhereUniqueInput[]
  }

  export type InterviewTopicUncheckedCreateNestedManyWithoutInterviewInput = {
    create?: XOR<InterviewTopicCreateWithoutInterviewInput, InterviewTopicUncheckedCreateWithoutInterviewInput> | InterviewTopicCreateWithoutInterviewInput[] | InterviewTopicUncheckedCreateWithoutInterviewInput[]
    connectOrCreate?: InterviewTopicCreateOrConnectWithoutInterviewInput | InterviewTopicCreateOrConnectWithoutInterviewInput[]
    createMany?: InterviewTopicCreateManyInterviewInputEnvelope
    connect?: InterviewTopicWhereUniqueInput | InterviewTopicWhereUniqueInput[]
  }

  export type ReplicantUpdateOneRequiredWithoutInterviewNestedInput = {
    create?: XOR<ReplicantCreateWithoutInterviewInput, ReplicantUncheckedCreateWithoutInterviewInput>
    connectOrCreate?: ReplicantCreateOrConnectWithoutInterviewInput
    upsert?: ReplicantUpsertWithoutInterviewInput
    connect?: ReplicantWhereUniqueInput
    update?: XOR<XOR<ReplicantUpdateToOneWithWhereWithoutInterviewInput, ReplicantUpdateWithoutInterviewInput>, ReplicantUncheckedUpdateWithoutInterviewInput>
  }

  export type InterviewTopicUpdateManyWithoutInterviewNestedInput = {
    create?: XOR<InterviewTopicCreateWithoutInterviewInput, InterviewTopicUncheckedCreateWithoutInterviewInput> | InterviewTopicCreateWithoutInterviewInput[] | InterviewTopicUncheckedCreateWithoutInterviewInput[]
    connectOrCreate?: InterviewTopicCreateOrConnectWithoutInterviewInput | InterviewTopicCreateOrConnectWithoutInterviewInput[]
    upsert?: InterviewTopicUpsertWithWhereUniqueWithoutInterviewInput | InterviewTopicUpsertWithWhereUniqueWithoutInterviewInput[]
    createMany?: InterviewTopicCreateManyInterviewInputEnvelope
    set?: InterviewTopicWhereUniqueInput | InterviewTopicWhereUniqueInput[]
    disconnect?: InterviewTopicWhereUniqueInput | InterviewTopicWhereUniqueInput[]
    delete?: InterviewTopicWhereUniqueInput | InterviewTopicWhereUniqueInput[]
    connect?: InterviewTopicWhereUniqueInput | InterviewTopicWhereUniqueInput[]
    update?: InterviewTopicUpdateWithWhereUniqueWithoutInterviewInput | InterviewTopicUpdateWithWhereUniqueWithoutInterviewInput[]
    updateMany?: InterviewTopicUpdateManyWithWhereWithoutInterviewInput | InterviewTopicUpdateManyWithWhereWithoutInterviewInput[]
    deleteMany?: InterviewTopicScalarWhereInput | InterviewTopicScalarWhereInput[]
  }

  export type InterviewTopicUncheckedUpdateManyWithoutInterviewNestedInput = {
    create?: XOR<InterviewTopicCreateWithoutInterviewInput, InterviewTopicUncheckedCreateWithoutInterviewInput> | InterviewTopicCreateWithoutInterviewInput[] | InterviewTopicUncheckedCreateWithoutInterviewInput[]
    connectOrCreate?: InterviewTopicCreateOrConnectWithoutInterviewInput | InterviewTopicCreateOrConnectWithoutInterviewInput[]
    upsert?: InterviewTopicUpsertWithWhereUniqueWithoutInterviewInput | InterviewTopicUpsertWithWhereUniqueWithoutInterviewInput[]
    createMany?: InterviewTopicCreateManyInterviewInputEnvelope
    set?: InterviewTopicWhereUniqueInput | InterviewTopicWhereUniqueInput[]
    disconnect?: InterviewTopicWhereUniqueInput | InterviewTopicWhereUniqueInput[]
    delete?: InterviewTopicWhereUniqueInput | InterviewTopicWhereUniqueInput[]
    connect?: InterviewTopicWhereUniqueInput | InterviewTopicWhereUniqueInput[]
    update?: InterviewTopicUpdateWithWhereUniqueWithoutInterviewInput | InterviewTopicUpdateWithWhereUniqueWithoutInterviewInput[]
    updateMany?: InterviewTopicUpdateManyWithWhereWithoutInterviewInput | InterviewTopicUpdateManyWithWhereWithoutInterviewInput[]
    deleteMany?: InterviewTopicScalarWhereInput | InterviewTopicScalarWhereInput[]
  }

  export type QuestionCreateNestedManyWithoutTopicInput = {
    create?: XOR<QuestionCreateWithoutTopicInput, QuestionUncheckedCreateWithoutTopicInput> | QuestionCreateWithoutTopicInput[] | QuestionUncheckedCreateWithoutTopicInput[]
    connectOrCreate?: QuestionCreateOrConnectWithoutTopicInput | QuestionCreateOrConnectWithoutTopicInput[]
    createMany?: QuestionCreateManyTopicInputEnvelope
    connect?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
  }

  export type InterviewCreateNestedOneWithoutTopicsInput = {
    create?: XOR<InterviewCreateWithoutTopicsInput, InterviewUncheckedCreateWithoutTopicsInput>
    connectOrCreate?: InterviewCreateOrConnectWithoutTopicsInput
    connect?: InterviewWhereUniqueInput
  }

  export type QuestionUncheckedCreateNestedManyWithoutTopicInput = {
    create?: XOR<QuestionCreateWithoutTopicInput, QuestionUncheckedCreateWithoutTopicInput> | QuestionCreateWithoutTopicInput[] | QuestionUncheckedCreateWithoutTopicInput[]
    connectOrCreate?: QuestionCreateOrConnectWithoutTopicInput | QuestionCreateOrConnectWithoutTopicInput[]
    createMany?: QuestionCreateManyTopicInputEnvelope
    connect?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
  }

  export type QuestionUpdateManyWithoutTopicNestedInput = {
    create?: XOR<QuestionCreateWithoutTopicInput, QuestionUncheckedCreateWithoutTopicInput> | QuestionCreateWithoutTopicInput[] | QuestionUncheckedCreateWithoutTopicInput[]
    connectOrCreate?: QuestionCreateOrConnectWithoutTopicInput | QuestionCreateOrConnectWithoutTopicInput[]
    upsert?: QuestionUpsertWithWhereUniqueWithoutTopicInput | QuestionUpsertWithWhereUniqueWithoutTopicInput[]
    createMany?: QuestionCreateManyTopicInputEnvelope
    set?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
    disconnect?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
    delete?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
    connect?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
    update?: QuestionUpdateWithWhereUniqueWithoutTopicInput | QuestionUpdateWithWhereUniqueWithoutTopicInput[]
    updateMany?: QuestionUpdateManyWithWhereWithoutTopicInput | QuestionUpdateManyWithWhereWithoutTopicInput[]
    deleteMany?: QuestionScalarWhereInput | QuestionScalarWhereInput[]
  }

  export type InterviewUpdateOneRequiredWithoutTopicsNestedInput = {
    create?: XOR<InterviewCreateWithoutTopicsInput, InterviewUncheckedCreateWithoutTopicsInput>
    connectOrCreate?: InterviewCreateOrConnectWithoutTopicsInput
    upsert?: InterviewUpsertWithoutTopicsInput
    connect?: InterviewWhereUniqueInput
    update?: XOR<XOR<InterviewUpdateToOneWithWhereWithoutTopicsInput, InterviewUpdateWithoutTopicsInput>, InterviewUncheckedUpdateWithoutTopicsInput>
  }

  export type QuestionUncheckedUpdateManyWithoutTopicNestedInput = {
    create?: XOR<QuestionCreateWithoutTopicInput, QuestionUncheckedCreateWithoutTopicInput> | QuestionCreateWithoutTopicInput[] | QuestionUncheckedCreateWithoutTopicInput[]
    connectOrCreate?: QuestionCreateOrConnectWithoutTopicInput | QuestionCreateOrConnectWithoutTopicInput[]
    upsert?: QuestionUpsertWithWhereUniqueWithoutTopicInput | QuestionUpsertWithWhereUniqueWithoutTopicInput[]
    createMany?: QuestionCreateManyTopicInputEnvelope
    set?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
    disconnect?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
    delete?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
    connect?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
    update?: QuestionUpdateWithWhereUniqueWithoutTopicInput | QuestionUpdateWithWhereUniqueWithoutTopicInput[]
    updateMany?: QuestionUpdateManyWithWhereWithoutTopicInput | QuestionUpdateManyWithWhereWithoutTopicInput[]
    deleteMany?: QuestionScalarWhereInput | QuestionScalarWhereInput[]
  }

  export type InterviewTopicCreateNestedOneWithoutQuestionsInput = {
    create?: XOR<InterviewTopicCreateWithoutQuestionsInput, InterviewTopicUncheckedCreateWithoutQuestionsInput>
    connectOrCreate?: InterviewTopicCreateOrConnectWithoutQuestionsInput
    connect?: InterviewTopicWhereUniqueInput
  }

  export type InterviewTopicUpdateOneRequiredWithoutQuestionsNestedInput = {
    create?: XOR<InterviewTopicCreateWithoutQuestionsInput, InterviewTopicUncheckedCreateWithoutQuestionsInput>
    connectOrCreate?: InterviewTopicCreateOrConnectWithoutQuestionsInput
    upsert?: InterviewTopicUpsertWithoutQuestionsInput
    connect?: InterviewTopicWhereUniqueInput
    update?: XOR<XOR<InterviewTopicUpdateToOneWithWhereWithoutQuestionsInput, InterviewTopicUpdateWithoutQuestionsInput>, InterviewTopicUncheckedUpdateWithoutQuestionsInput>
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
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
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

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type InterviewCreateWithoutReplicantInput = {
    createdAt?: Date | string
    summary: string
    topics?: InterviewTopicCreateNestedManyWithoutInterviewInput
  }

  export type InterviewUncheckedCreateWithoutReplicantInput = {
    id?: number
    createdAt?: Date | string
    summary: string
    topics?: InterviewTopicUncheckedCreateNestedManyWithoutInterviewInput
  }

  export type InterviewCreateOrConnectWithoutReplicantInput = {
    where: InterviewWhereUniqueInput
    create: XOR<InterviewCreateWithoutReplicantInput, InterviewUncheckedCreateWithoutReplicantInput>
  }

  export type InterviewUpsertWithoutReplicantInput = {
    update: XOR<InterviewUpdateWithoutReplicantInput, InterviewUncheckedUpdateWithoutReplicantInput>
    create: XOR<InterviewCreateWithoutReplicantInput, InterviewUncheckedCreateWithoutReplicantInput>
    where?: InterviewWhereInput
  }

  export type InterviewUpdateToOneWithWhereWithoutReplicantInput = {
    where?: InterviewWhereInput
    data: XOR<InterviewUpdateWithoutReplicantInput, InterviewUncheckedUpdateWithoutReplicantInput>
  }

  export type InterviewUpdateWithoutReplicantInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    summary?: StringFieldUpdateOperationsInput | string
    topics?: InterviewTopicUpdateManyWithoutInterviewNestedInput
  }

  export type InterviewUncheckedUpdateWithoutReplicantInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    summary?: StringFieldUpdateOperationsInput | string
    topics?: InterviewTopicUncheckedUpdateManyWithoutInterviewNestedInput
  }

  export type ReplicantCreateWithoutInterviewInput = {
    name: string
    description?: string | null
    createdAt?: Date | string
    snapshot: string
  }

  export type ReplicantUncheckedCreateWithoutInterviewInput = {
    id?: number
    name: string
    description?: string | null
    createdAt?: Date | string
    snapshot: string
  }

  export type ReplicantCreateOrConnectWithoutInterviewInput = {
    where: ReplicantWhereUniqueInput
    create: XOR<ReplicantCreateWithoutInterviewInput, ReplicantUncheckedCreateWithoutInterviewInput>
  }

  export type InterviewTopicCreateWithoutInterviewInput = {
    name: string
    summary: string
    type?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    questions?: QuestionCreateNestedManyWithoutTopicInput
  }

  export type InterviewTopicUncheckedCreateWithoutInterviewInput = {
    id?: number
    name: string
    summary: string
    type?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    questions?: QuestionUncheckedCreateNestedManyWithoutTopicInput
  }

  export type InterviewTopicCreateOrConnectWithoutInterviewInput = {
    where: InterviewTopicWhereUniqueInput
    create: XOR<InterviewTopicCreateWithoutInterviewInput, InterviewTopicUncheckedCreateWithoutInterviewInput>
  }

  export type InterviewTopicCreateManyInterviewInputEnvelope = {
    data: InterviewTopicCreateManyInterviewInput | InterviewTopicCreateManyInterviewInput[]
  }

  export type ReplicantUpsertWithoutInterviewInput = {
    update: XOR<ReplicantUpdateWithoutInterviewInput, ReplicantUncheckedUpdateWithoutInterviewInput>
    create: XOR<ReplicantCreateWithoutInterviewInput, ReplicantUncheckedCreateWithoutInterviewInput>
    where?: ReplicantWhereInput
  }

  export type ReplicantUpdateToOneWithWhereWithoutInterviewInput = {
    where?: ReplicantWhereInput
    data: XOR<ReplicantUpdateWithoutInterviewInput, ReplicantUncheckedUpdateWithoutInterviewInput>
  }

  export type ReplicantUpdateWithoutInterviewInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    snapshot?: StringFieldUpdateOperationsInput | string
  }

  export type ReplicantUncheckedUpdateWithoutInterviewInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    snapshot?: StringFieldUpdateOperationsInput | string
  }

  export type InterviewTopicUpsertWithWhereUniqueWithoutInterviewInput = {
    where: InterviewTopicWhereUniqueInput
    update: XOR<InterviewTopicUpdateWithoutInterviewInput, InterviewTopicUncheckedUpdateWithoutInterviewInput>
    create: XOR<InterviewTopicCreateWithoutInterviewInput, InterviewTopicUncheckedCreateWithoutInterviewInput>
  }

  export type InterviewTopicUpdateWithWhereUniqueWithoutInterviewInput = {
    where: InterviewTopicWhereUniqueInput
    data: XOR<InterviewTopicUpdateWithoutInterviewInput, InterviewTopicUncheckedUpdateWithoutInterviewInput>
  }

  export type InterviewTopicUpdateManyWithWhereWithoutInterviewInput = {
    where: InterviewTopicScalarWhereInput
    data: XOR<InterviewTopicUpdateManyMutationInput, InterviewTopicUncheckedUpdateManyWithoutInterviewInput>
  }

  export type InterviewTopicScalarWhereInput = {
    AND?: InterviewTopicScalarWhereInput | InterviewTopicScalarWhereInput[]
    OR?: InterviewTopicScalarWhereInput[]
    NOT?: InterviewTopicScalarWhereInput | InterviewTopicScalarWhereInput[]
    id?: IntFilter<"InterviewTopic"> | number
    interviewId?: IntFilter<"InterviewTopic"> | number
    name?: StringFilter<"InterviewTopic"> | string
    summary?: StringFilter<"InterviewTopic"> | string
    type?: StringNullableFilter<"InterviewTopic"> | string | null
    createdAt?: DateTimeFilter<"InterviewTopic"> | Date | string
    updatedAt?: DateTimeFilter<"InterviewTopic"> | Date | string
  }

  export type QuestionCreateWithoutTopicInput = {
    questionText: string
    answerText?: string | null
    emotion: string
    createdAt?: Date | string
  }

  export type QuestionUncheckedCreateWithoutTopicInput = {
    id?: number
    questionText: string
    answerText?: string | null
    emotion: string
    createdAt?: Date | string
  }

  export type QuestionCreateOrConnectWithoutTopicInput = {
    where: QuestionWhereUniqueInput
    create: XOR<QuestionCreateWithoutTopicInput, QuestionUncheckedCreateWithoutTopicInput>
  }

  export type QuestionCreateManyTopicInputEnvelope = {
    data: QuestionCreateManyTopicInput | QuestionCreateManyTopicInput[]
  }

  export type InterviewCreateWithoutTopicsInput = {
    createdAt?: Date | string
    summary: string
    replicant: ReplicantCreateNestedOneWithoutInterviewInput
  }

  export type InterviewUncheckedCreateWithoutTopicsInput = {
    id?: number
    replicantId: number
    createdAt?: Date | string
    summary: string
  }

  export type InterviewCreateOrConnectWithoutTopicsInput = {
    where: InterviewWhereUniqueInput
    create: XOR<InterviewCreateWithoutTopicsInput, InterviewUncheckedCreateWithoutTopicsInput>
  }

  export type QuestionUpsertWithWhereUniqueWithoutTopicInput = {
    where: QuestionWhereUniqueInput
    update: XOR<QuestionUpdateWithoutTopicInput, QuestionUncheckedUpdateWithoutTopicInput>
    create: XOR<QuestionCreateWithoutTopicInput, QuestionUncheckedCreateWithoutTopicInput>
  }

  export type QuestionUpdateWithWhereUniqueWithoutTopicInput = {
    where: QuestionWhereUniqueInput
    data: XOR<QuestionUpdateWithoutTopicInput, QuestionUncheckedUpdateWithoutTopicInput>
  }

  export type QuestionUpdateManyWithWhereWithoutTopicInput = {
    where: QuestionScalarWhereInput
    data: XOR<QuestionUpdateManyMutationInput, QuestionUncheckedUpdateManyWithoutTopicInput>
  }

  export type QuestionScalarWhereInput = {
    AND?: QuestionScalarWhereInput | QuestionScalarWhereInput[]
    OR?: QuestionScalarWhereInput[]
    NOT?: QuestionScalarWhereInput | QuestionScalarWhereInput[]
    id?: IntFilter<"Question"> | number
    topicId?: IntFilter<"Question"> | number
    questionText?: StringFilter<"Question"> | string
    answerText?: StringNullableFilter<"Question"> | string | null
    emotion?: StringFilter<"Question"> | string
    createdAt?: DateTimeFilter<"Question"> | Date | string
  }

  export type InterviewUpsertWithoutTopicsInput = {
    update: XOR<InterviewUpdateWithoutTopicsInput, InterviewUncheckedUpdateWithoutTopicsInput>
    create: XOR<InterviewCreateWithoutTopicsInput, InterviewUncheckedCreateWithoutTopicsInput>
    where?: InterviewWhereInput
  }

  export type InterviewUpdateToOneWithWhereWithoutTopicsInput = {
    where?: InterviewWhereInput
    data: XOR<InterviewUpdateWithoutTopicsInput, InterviewUncheckedUpdateWithoutTopicsInput>
  }

  export type InterviewUpdateWithoutTopicsInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    summary?: StringFieldUpdateOperationsInput | string
    replicant?: ReplicantUpdateOneRequiredWithoutInterviewNestedInput
  }

  export type InterviewUncheckedUpdateWithoutTopicsInput = {
    id?: IntFieldUpdateOperationsInput | number
    replicantId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    summary?: StringFieldUpdateOperationsInput | string
  }

  export type InterviewTopicCreateWithoutQuestionsInput = {
    name: string
    summary: string
    type?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    interview: InterviewCreateNestedOneWithoutTopicsInput
  }

  export type InterviewTopicUncheckedCreateWithoutQuestionsInput = {
    id?: number
    interviewId: number
    name: string
    summary: string
    type?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type InterviewTopicCreateOrConnectWithoutQuestionsInput = {
    where: InterviewTopicWhereUniqueInput
    create: XOR<InterviewTopicCreateWithoutQuestionsInput, InterviewTopicUncheckedCreateWithoutQuestionsInput>
  }

  export type InterviewTopicUpsertWithoutQuestionsInput = {
    update: XOR<InterviewTopicUpdateWithoutQuestionsInput, InterviewTopicUncheckedUpdateWithoutQuestionsInput>
    create: XOR<InterviewTopicCreateWithoutQuestionsInput, InterviewTopicUncheckedCreateWithoutQuestionsInput>
    where?: InterviewTopicWhereInput
  }

  export type InterviewTopicUpdateToOneWithWhereWithoutQuestionsInput = {
    where?: InterviewTopicWhereInput
    data: XOR<InterviewTopicUpdateWithoutQuestionsInput, InterviewTopicUncheckedUpdateWithoutQuestionsInput>
  }

  export type InterviewTopicUpdateWithoutQuestionsInput = {
    name?: StringFieldUpdateOperationsInput | string
    summary?: StringFieldUpdateOperationsInput | string
    type?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    interview?: InterviewUpdateOneRequiredWithoutTopicsNestedInput
  }

  export type InterviewTopicUncheckedUpdateWithoutQuestionsInput = {
    id?: IntFieldUpdateOperationsInput | number
    interviewId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    summary?: StringFieldUpdateOperationsInput | string
    type?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InterviewTopicCreateManyInterviewInput = {
    id?: number
    name: string
    summary: string
    type?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type InterviewTopicUpdateWithoutInterviewInput = {
    name?: StringFieldUpdateOperationsInput | string
    summary?: StringFieldUpdateOperationsInput | string
    type?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    questions?: QuestionUpdateManyWithoutTopicNestedInput
  }

  export type InterviewTopicUncheckedUpdateWithoutInterviewInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    summary?: StringFieldUpdateOperationsInput | string
    type?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    questions?: QuestionUncheckedUpdateManyWithoutTopicNestedInput
  }

  export type InterviewTopicUncheckedUpdateManyWithoutInterviewInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    summary?: StringFieldUpdateOperationsInput | string
    type?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QuestionCreateManyTopicInput = {
    id?: number
    questionText: string
    answerText?: string | null
    emotion: string
    createdAt?: Date | string
  }

  export type QuestionUpdateWithoutTopicInput = {
    questionText?: StringFieldUpdateOperationsInput | string
    answerText?: NullableStringFieldUpdateOperationsInput | string | null
    emotion?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QuestionUncheckedUpdateWithoutTopicInput = {
    id?: IntFieldUpdateOperationsInput | number
    questionText?: StringFieldUpdateOperationsInput | string
    answerText?: NullableStringFieldUpdateOperationsInput | string | null
    emotion?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QuestionUncheckedUpdateManyWithoutTopicInput = {
    id?: IntFieldUpdateOperationsInput | number
    questionText?: StringFieldUpdateOperationsInput | string
    answerText?: NullableStringFieldUpdateOperationsInput | string | null
    emotion?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
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