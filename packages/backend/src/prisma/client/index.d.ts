
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
 * Represents a digital replica entity.
 * Stores basic metadata, snapshot data, related interview, user cards, and chats.
 */
export type Replicant = $Result.DefaultSelection<Prisma.$ReplicantPayload>
/**
 * Model Interview
 * Represents an interview associated with a replicant.
 * Contains summary and a set of interview topics.
 */
export type Interview = $Result.DefaultSelection<Prisma.$InterviewPayload>
/**
 * Model InterviewTopic
 * Represents a topic within an interview.
 * Contains questions, summary, and metadata about the topic.
 */
export type InterviewTopic = $Result.DefaultSelection<Prisma.$InterviewTopicPayload>
/**
 * Model Question
 * Represents a question within an interview topic.
 * Stores question text, optional answer, associated emotion, and timestamp.
 */
export type Question = $Result.DefaultSelection<Prisma.$QuestionPayload>
/**
 * Model UserCard
 * Represents a user card related to a replicant.
 * Contains information about a person (e.g., role, description) and their chats.
 */
export type UserCard = $Result.DefaultSelection<Prisma.$UserCardPayload>
/**
 * Model Chat
 * Represents a chat/conversation.
 * Links to a replicant and optionally to a user card, contains messages.
 */
export type Chat = $Result.DefaultSelection<Prisma.$ChatPayload>
/**
 * Model Message
 * Represents a single message within a chat.
 * Indicates whether author is replicant or not, with content and timestamp.
 */
export type Message = $Result.DefaultSelection<Prisma.$MessagePayload>

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

  /**
   * `prisma.userCard`: Exposes CRUD operations for the **UserCard** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserCards
    * const userCards = await prisma.userCard.findMany()
    * ```
    */
  get userCard(): Prisma.UserCardDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.chat`: Exposes CRUD operations for the **Chat** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Chats
    * const chats = await prisma.chat.findMany()
    * ```
    */
  get chat(): Prisma.ChatDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.message`: Exposes CRUD operations for the **Message** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Messages
    * const messages = await prisma.message.findMany()
    * ```
    */
  get message(): Prisma.MessageDelegate<ExtArgs, ClientOptions>;
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
    Question: 'Question',
    UserCard: 'UserCard',
    Chat: 'Chat',
    Message: 'Message'
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
      modelProps: "replicant" | "interview" | "interviewTopic" | "question" | "userCard" | "chat" | "message"
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
      UserCard: {
        payload: Prisma.$UserCardPayload<ExtArgs>
        fields: Prisma.UserCardFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserCardFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserCardPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserCardFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserCardPayload>
          }
          findFirst: {
            args: Prisma.UserCardFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserCardPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserCardFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserCardPayload>
          }
          findMany: {
            args: Prisma.UserCardFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserCardPayload>[]
          }
          create: {
            args: Prisma.UserCardCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserCardPayload>
          }
          createMany: {
            args: Prisma.UserCardCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCardCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserCardPayload>[]
          }
          delete: {
            args: Prisma.UserCardDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserCardPayload>
          }
          update: {
            args: Prisma.UserCardUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserCardPayload>
          }
          deleteMany: {
            args: Prisma.UserCardDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserCardUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserCardUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserCardPayload>[]
          }
          upsert: {
            args: Prisma.UserCardUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserCardPayload>
          }
          aggregate: {
            args: Prisma.UserCardAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserCard>
          }
          groupBy: {
            args: Prisma.UserCardGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserCardGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCardCountArgs<ExtArgs>
            result: $Utils.Optional<UserCardCountAggregateOutputType> | number
          }
        }
      }
      Chat: {
        payload: Prisma.$ChatPayload<ExtArgs>
        fields: Prisma.ChatFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ChatFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ChatFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatPayload>
          }
          findFirst: {
            args: Prisma.ChatFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ChatFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatPayload>
          }
          findMany: {
            args: Prisma.ChatFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatPayload>[]
          }
          create: {
            args: Prisma.ChatCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatPayload>
          }
          createMany: {
            args: Prisma.ChatCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ChatCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatPayload>[]
          }
          delete: {
            args: Prisma.ChatDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatPayload>
          }
          update: {
            args: Prisma.ChatUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatPayload>
          }
          deleteMany: {
            args: Prisma.ChatDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ChatUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ChatUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatPayload>[]
          }
          upsert: {
            args: Prisma.ChatUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatPayload>
          }
          aggregate: {
            args: Prisma.ChatAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateChat>
          }
          groupBy: {
            args: Prisma.ChatGroupByArgs<ExtArgs>
            result: $Utils.Optional<ChatGroupByOutputType>[]
          }
          count: {
            args: Prisma.ChatCountArgs<ExtArgs>
            result: $Utils.Optional<ChatCountAggregateOutputType> | number
          }
        }
      }
      Message: {
        payload: Prisma.$MessagePayload<ExtArgs>
        fields: Prisma.MessageFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MessageFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MessageFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>
          }
          findFirst: {
            args: Prisma.MessageFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MessageFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>
          }
          findMany: {
            args: Prisma.MessageFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>[]
          }
          create: {
            args: Prisma.MessageCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>
          }
          createMany: {
            args: Prisma.MessageCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MessageCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>[]
          }
          delete: {
            args: Prisma.MessageDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>
          }
          update: {
            args: Prisma.MessageUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>
          }
          deleteMany: {
            args: Prisma.MessageDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MessageUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MessageUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>[]
          }
          upsert: {
            args: Prisma.MessageUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>
          }
          aggregate: {
            args: Prisma.MessageAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMessage>
          }
          groupBy: {
            args: Prisma.MessageGroupByArgs<ExtArgs>
            result: $Utils.Optional<MessageGroupByOutputType>[]
          }
          count: {
            args: Prisma.MessageCountArgs<ExtArgs>
            result: $Utils.Optional<MessageCountAggregateOutputType> | number
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
    userCard?: UserCardOmit
    chat?: ChatOmit
    message?: MessageOmit
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
   * Count Type ReplicantCountOutputType
   */

  export type ReplicantCountOutputType = {
    chats: number
    userCards: number
  }

  export type ReplicantCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    chats?: boolean | ReplicantCountOutputTypeCountChatsArgs
    userCards?: boolean | ReplicantCountOutputTypeCountUserCardsArgs
  }

  // Custom InputTypes
  /**
   * ReplicantCountOutputType without action
   */
  export type ReplicantCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReplicantCountOutputType
     */
    select?: ReplicantCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ReplicantCountOutputType without action
   */
  export type ReplicantCountOutputTypeCountChatsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChatWhereInput
  }

  /**
   * ReplicantCountOutputType without action
   */
  export type ReplicantCountOutputTypeCountUserCardsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserCardWhereInput
  }


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
   * Count Type UserCardCountOutputType
   */

  export type UserCardCountOutputType = {
    chats: number
  }

  export type UserCardCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    chats?: boolean | UserCardCountOutputTypeCountChatsArgs
  }

  // Custom InputTypes
  /**
   * UserCardCountOutputType without action
   */
  export type UserCardCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCardCountOutputType
     */
    select?: UserCardCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCardCountOutputType without action
   */
  export type UserCardCountOutputTypeCountChatsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChatWhereInput
  }


  /**
   * Count Type ChatCountOutputType
   */

  export type ChatCountOutputType = {
    messages: number
  }

  export type ChatCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    messages?: boolean | ChatCountOutputTypeCountMessagesArgs
  }

  // Custom InputTypes
  /**
   * ChatCountOutputType without action
   */
  export type ChatCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatCountOutputType
     */
    select?: ChatCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ChatCountOutputType without action
   */
  export type ChatCountOutputTypeCountMessagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MessageWhereInput
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
    chats?: boolean | Replicant$chatsArgs<ExtArgs>
    interview?: boolean | Replicant$interviewArgs<ExtArgs>
    userCards?: boolean | Replicant$userCardsArgs<ExtArgs>
    _count?: boolean | ReplicantCountOutputTypeDefaultArgs<ExtArgs>
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
    chats?: boolean | Replicant$chatsArgs<ExtArgs>
    interview?: boolean | Replicant$interviewArgs<ExtArgs>
    userCards?: boolean | Replicant$userCardsArgs<ExtArgs>
    _count?: boolean | ReplicantCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ReplicantIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ReplicantIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ReplicantPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Replicant"
    objects: {
      chats: Prisma.$ChatPayload<ExtArgs>[]
      interview: Prisma.$InterviewPayload<ExtArgs> | null
      userCards: Prisma.$UserCardPayload<ExtArgs>[]
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
    chats<T extends Replicant$chatsArgs<ExtArgs> = {}>(args?: Subset<T, Replicant$chatsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    interview<T extends Replicant$interviewArgs<ExtArgs> = {}>(args?: Subset<T, Replicant$interviewArgs<ExtArgs>>): Prisma__InterviewClient<$Result.GetResult<Prisma.$InterviewPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    userCards<T extends Replicant$userCardsArgs<ExtArgs> = {}>(args?: Subset<T, Replicant$userCardsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserCardPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Replicant.chats
   */
  export type Replicant$chatsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chat
     */
    select?: ChatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chat
     */
    omit?: ChatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatInclude<ExtArgs> | null
    where?: ChatWhereInput
    orderBy?: ChatOrderByWithRelationInput | ChatOrderByWithRelationInput[]
    cursor?: ChatWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ChatScalarFieldEnum | ChatScalarFieldEnum[]
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
   * Replicant.userCards
   */
  export type Replicant$userCardsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCard
     */
    select?: UserCardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserCard
     */
    omit?: UserCardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserCardInclude<ExtArgs> | null
    where?: UserCardWhereInput
    orderBy?: UserCardOrderByWithRelationInput | UserCardOrderByWithRelationInput[]
    cursor?: UserCardWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserCardScalarFieldEnum | UserCardScalarFieldEnum[]
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
    interview?: boolean | InterviewDefaultArgs<ExtArgs>
    questions?: boolean | InterviewTopic$questionsArgs<ExtArgs>
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
    interview?: boolean | InterviewDefaultArgs<ExtArgs>
    questions?: boolean | InterviewTopic$questionsArgs<ExtArgs>
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
      interview: Prisma.$InterviewPayload<ExtArgs>
      questions: Prisma.$QuestionPayload<ExtArgs>[]
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
    interview<T extends InterviewDefaultArgs<ExtArgs> = {}>(args?: Subset<T, InterviewDefaultArgs<ExtArgs>>): Prisma__InterviewClient<$Result.GetResult<Prisma.$InterviewPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    questions<T extends InterviewTopic$questionsArgs<ExtArgs> = {}>(args?: Subset<T, InterviewTopic$questionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Model UserCard
   */

  export type AggregateUserCard = {
    _count: UserCardCountAggregateOutputType | null
    _avg: UserCardAvgAggregateOutputType | null
    _sum: UserCardSumAggregateOutputType | null
    _min: UserCardMinAggregateOutputType | null
    _max: UserCardMaxAggregateOutputType | null
  }

  export type UserCardAvgAggregateOutputType = {
    id: number | null
    replicantId: number | null
  }

  export type UserCardSumAggregateOutputType = {
    id: number | null
    replicantId: number | null
  }

  export type UserCardMinAggregateOutputType = {
    id: number | null
    replicantId: number | null
    name: string | null
    role: string | null
    description: string | null
    snapshot: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCardMaxAggregateOutputType = {
    id: number | null
    replicantId: number | null
    name: string | null
    role: string | null
    description: string | null
    snapshot: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCardCountAggregateOutputType = {
    id: number
    replicantId: number
    name: number
    role: number
    description: number
    snapshot: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserCardAvgAggregateInputType = {
    id?: true
    replicantId?: true
  }

  export type UserCardSumAggregateInputType = {
    id?: true
    replicantId?: true
  }

  export type UserCardMinAggregateInputType = {
    id?: true
    replicantId?: true
    name?: true
    role?: true
    description?: true
    snapshot?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCardMaxAggregateInputType = {
    id?: true
    replicantId?: true
    name?: true
    role?: true
    description?: true
    snapshot?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCardCountAggregateInputType = {
    id?: true
    replicantId?: true
    name?: true
    role?: true
    description?: true
    snapshot?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserCardAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserCard to aggregate.
     */
    where?: UserCardWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserCards to fetch.
     */
    orderBy?: UserCardOrderByWithRelationInput | UserCardOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserCardWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserCards from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserCards.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserCards
    **/
    _count?: true | UserCardCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserCardAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserCardSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserCardMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserCardMaxAggregateInputType
  }

  export type GetUserCardAggregateType<T extends UserCardAggregateArgs> = {
        [P in keyof T & keyof AggregateUserCard]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserCard[P]>
      : GetScalarType<T[P], AggregateUserCard[P]>
  }




  export type UserCardGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserCardWhereInput
    orderBy?: UserCardOrderByWithAggregationInput | UserCardOrderByWithAggregationInput[]
    by: UserCardScalarFieldEnum[] | UserCardScalarFieldEnum
    having?: UserCardScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCardCountAggregateInputType | true
    _avg?: UserCardAvgAggregateInputType
    _sum?: UserCardSumAggregateInputType
    _min?: UserCardMinAggregateInputType
    _max?: UserCardMaxAggregateInputType
  }

  export type UserCardGroupByOutputType = {
    id: number
    replicantId: number
    name: string
    role: string | null
    description: string | null
    snapshot: string
    createdAt: Date
    updatedAt: Date
    _count: UserCardCountAggregateOutputType | null
    _avg: UserCardAvgAggregateOutputType | null
    _sum: UserCardSumAggregateOutputType | null
    _min: UserCardMinAggregateOutputType | null
    _max: UserCardMaxAggregateOutputType | null
  }

  type GetUserCardGroupByPayload<T extends UserCardGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserCardGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserCardGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserCardGroupByOutputType[P]>
            : GetScalarType<T[P], UserCardGroupByOutputType[P]>
        }
      >
    >


  export type UserCardSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    replicantId?: boolean
    name?: boolean
    role?: boolean
    description?: boolean
    snapshot?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    chats?: boolean | UserCard$chatsArgs<ExtArgs>
    replicant?: boolean | ReplicantDefaultArgs<ExtArgs>
    _count?: boolean | UserCardCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userCard"]>

  export type UserCardSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    replicantId?: boolean
    name?: boolean
    role?: boolean
    description?: boolean
    snapshot?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    replicant?: boolean | ReplicantDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userCard"]>

  export type UserCardSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    replicantId?: boolean
    name?: boolean
    role?: boolean
    description?: boolean
    snapshot?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    replicant?: boolean | ReplicantDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userCard"]>

  export type UserCardSelectScalar = {
    id?: boolean
    replicantId?: boolean
    name?: boolean
    role?: boolean
    description?: boolean
    snapshot?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserCardOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "replicantId" | "name" | "role" | "description" | "snapshot" | "createdAt" | "updatedAt", ExtArgs["result"]["userCard"]>
  export type UserCardInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    chats?: boolean | UserCard$chatsArgs<ExtArgs>
    replicant?: boolean | ReplicantDefaultArgs<ExtArgs>
    _count?: boolean | UserCardCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserCardIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    replicant?: boolean | ReplicantDefaultArgs<ExtArgs>
  }
  export type UserCardIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    replicant?: boolean | ReplicantDefaultArgs<ExtArgs>
  }

  export type $UserCardPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserCard"
    objects: {
      chats: Prisma.$ChatPayload<ExtArgs>[]
      replicant: Prisma.$ReplicantPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      replicantId: number
      name: string
      role: string | null
      description: string | null
      snapshot: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["userCard"]>
    composites: {}
  }

  type UserCardGetPayload<S extends boolean | null | undefined | UserCardDefaultArgs> = $Result.GetResult<Prisma.$UserCardPayload, S>

  type UserCardCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserCardFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCardCountAggregateInputType | true
    }

  export interface UserCardDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserCard'], meta: { name: 'UserCard' } }
    /**
     * Find zero or one UserCard that matches the filter.
     * @param {UserCardFindUniqueArgs} args - Arguments to find a UserCard
     * @example
     * // Get one UserCard
     * const userCard = await prisma.userCard.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserCardFindUniqueArgs>(args: SelectSubset<T, UserCardFindUniqueArgs<ExtArgs>>): Prisma__UserCardClient<$Result.GetResult<Prisma.$UserCardPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UserCard that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserCardFindUniqueOrThrowArgs} args - Arguments to find a UserCard
     * @example
     * // Get one UserCard
     * const userCard = await prisma.userCard.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserCardFindUniqueOrThrowArgs>(args: SelectSubset<T, UserCardFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserCardClient<$Result.GetResult<Prisma.$UserCardPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserCard that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCardFindFirstArgs} args - Arguments to find a UserCard
     * @example
     * // Get one UserCard
     * const userCard = await prisma.userCard.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserCardFindFirstArgs>(args?: SelectSubset<T, UserCardFindFirstArgs<ExtArgs>>): Prisma__UserCardClient<$Result.GetResult<Prisma.$UserCardPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserCard that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCardFindFirstOrThrowArgs} args - Arguments to find a UserCard
     * @example
     * // Get one UserCard
     * const userCard = await prisma.userCard.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserCardFindFirstOrThrowArgs>(args?: SelectSubset<T, UserCardFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserCardClient<$Result.GetResult<Prisma.$UserCardPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UserCards that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCardFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserCards
     * const userCards = await prisma.userCard.findMany()
     * 
     * // Get first 10 UserCards
     * const userCards = await prisma.userCard.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userCardWithIdOnly = await prisma.userCard.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserCardFindManyArgs>(args?: SelectSubset<T, UserCardFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserCardPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UserCard.
     * @param {UserCardCreateArgs} args - Arguments to create a UserCard.
     * @example
     * // Create one UserCard
     * const UserCard = await prisma.userCard.create({
     *   data: {
     *     // ... data to create a UserCard
     *   }
     * })
     * 
     */
    create<T extends UserCardCreateArgs>(args: SelectSubset<T, UserCardCreateArgs<ExtArgs>>): Prisma__UserCardClient<$Result.GetResult<Prisma.$UserCardPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UserCards.
     * @param {UserCardCreateManyArgs} args - Arguments to create many UserCards.
     * @example
     * // Create many UserCards
     * const userCard = await prisma.userCard.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCardCreateManyArgs>(args?: SelectSubset<T, UserCardCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UserCards and returns the data saved in the database.
     * @param {UserCardCreateManyAndReturnArgs} args - Arguments to create many UserCards.
     * @example
     * // Create many UserCards
     * const userCard = await prisma.userCard.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UserCards and only return the `id`
     * const userCardWithIdOnly = await prisma.userCard.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCardCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCardCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserCardPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a UserCard.
     * @param {UserCardDeleteArgs} args - Arguments to delete one UserCard.
     * @example
     * // Delete one UserCard
     * const UserCard = await prisma.userCard.delete({
     *   where: {
     *     // ... filter to delete one UserCard
     *   }
     * })
     * 
     */
    delete<T extends UserCardDeleteArgs>(args: SelectSubset<T, UserCardDeleteArgs<ExtArgs>>): Prisma__UserCardClient<$Result.GetResult<Prisma.$UserCardPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UserCard.
     * @param {UserCardUpdateArgs} args - Arguments to update one UserCard.
     * @example
     * // Update one UserCard
     * const userCard = await prisma.userCard.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserCardUpdateArgs>(args: SelectSubset<T, UserCardUpdateArgs<ExtArgs>>): Prisma__UserCardClient<$Result.GetResult<Prisma.$UserCardPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UserCards.
     * @param {UserCardDeleteManyArgs} args - Arguments to filter UserCards to delete.
     * @example
     * // Delete a few UserCards
     * const { count } = await prisma.userCard.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserCardDeleteManyArgs>(args?: SelectSubset<T, UserCardDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserCards.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCardUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserCards
     * const userCard = await prisma.userCard.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserCardUpdateManyArgs>(args: SelectSubset<T, UserCardUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserCards and returns the data updated in the database.
     * @param {UserCardUpdateManyAndReturnArgs} args - Arguments to update many UserCards.
     * @example
     * // Update many UserCards
     * const userCard = await prisma.userCard.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more UserCards and only return the `id`
     * const userCardWithIdOnly = await prisma.userCard.updateManyAndReturn({
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
    updateManyAndReturn<T extends UserCardUpdateManyAndReturnArgs>(args: SelectSubset<T, UserCardUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserCardPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one UserCard.
     * @param {UserCardUpsertArgs} args - Arguments to update or create a UserCard.
     * @example
     * // Update or create a UserCard
     * const userCard = await prisma.userCard.upsert({
     *   create: {
     *     // ... data to create a UserCard
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserCard we want to update
     *   }
     * })
     */
    upsert<T extends UserCardUpsertArgs>(args: SelectSubset<T, UserCardUpsertArgs<ExtArgs>>): Prisma__UserCardClient<$Result.GetResult<Prisma.$UserCardPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of UserCards.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCardCountArgs} args - Arguments to filter UserCards to count.
     * @example
     * // Count the number of UserCards
     * const count = await prisma.userCard.count({
     *   where: {
     *     // ... the filter for the UserCards we want to count
     *   }
     * })
    **/
    count<T extends UserCardCountArgs>(
      args?: Subset<T, UserCardCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCardCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserCard.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCardAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserCardAggregateArgs>(args: Subset<T, UserCardAggregateArgs>): Prisma.PrismaPromise<GetUserCardAggregateType<T>>

    /**
     * Group by UserCard.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCardGroupByArgs} args - Group by arguments.
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
      T extends UserCardGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserCardGroupByArgs['orderBy'] }
        : { orderBy?: UserCardGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserCardGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserCardGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserCard model
   */
  readonly fields: UserCardFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserCard.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserCardClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    chats<T extends UserCard$chatsArgs<ExtArgs> = {}>(args?: Subset<T, UserCard$chatsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    replicant<T extends ReplicantDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ReplicantDefaultArgs<ExtArgs>>): Prisma__ReplicantClient<$Result.GetResult<Prisma.$ReplicantPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the UserCard model
   */
  interface UserCardFieldRefs {
    readonly id: FieldRef<"UserCard", 'Int'>
    readonly replicantId: FieldRef<"UserCard", 'Int'>
    readonly name: FieldRef<"UserCard", 'String'>
    readonly role: FieldRef<"UserCard", 'String'>
    readonly description: FieldRef<"UserCard", 'String'>
    readonly snapshot: FieldRef<"UserCard", 'String'>
    readonly createdAt: FieldRef<"UserCard", 'DateTime'>
    readonly updatedAt: FieldRef<"UserCard", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * UserCard findUnique
   */
  export type UserCardFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCard
     */
    select?: UserCardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserCard
     */
    omit?: UserCardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserCardInclude<ExtArgs> | null
    /**
     * Filter, which UserCard to fetch.
     */
    where: UserCardWhereUniqueInput
  }

  /**
   * UserCard findUniqueOrThrow
   */
  export type UserCardFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCard
     */
    select?: UserCardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserCard
     */
    omit?: UserCardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserCardInclude<ExtArgs> | null
    /**
     * Filter, which UserCard to fetch.
     */
    where: UserCardWhereUniqueInput
  }

  /**
   * UserCard findFirst
   */
  export type UserCardFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCard
     */
    select?: UserCardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserCard
     */
    omit?: UserCardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserCardInclude<ExtArgs> | null
    /**
     * Filter, which UserCard to fetch.
     */
    where?: UserCardWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserCards to fetch.
     */
    orderBy?: UserCardOrderByWithRelationInput | UserCardOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserCards.
     */
    cursor?: UserCardWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserCards from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserCards.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserCards.
     */
    distinct?: UserCardScalarFieldEnum | UserCardScalarFieldEnum[]
  }

  /**
   * UserCard findFirstOrThrow
   */
  export type UserCardFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCard
     */
    select?: UserCardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserCard
     */
    omit?: UserCardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserCardInclude<ExtArgs> | null
    /**
     * Filter, which UserCard to fetch.
     */
    where?: UserCardWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserCards to fetch.
     */
    orderBy?: UserCardOrderByWithRelationInput | UserCardOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserCards.
     */
    cursor?: UserCardWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserCards from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserCards.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserCards.
     */
    distinct?: UserCardScalarFieldEnum | UserCardScalarFieldEnum[]
  }

  /**
   * UserCard findMany
   */
  export type UserCardFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCard
     */
    select?: UserCardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserCard
     */
    omit?: UserCardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserCardInclude<ExtArgs> | null
    /**
     * Filter, which UserCards to fetch.
     */
    where?: UserCardWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserCards to fetch.
     */
    orderBy?: UserCardOrderByWithRelationInput | UserCardOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserCards.
     */
    cursor?: UserCardWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserCards from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserCards.
     */
    skip?: number
    distinct?: UserCardScalarFieldEnum | UserCardScalarFieldEnum[]
  }

  /**
   * UserCard create
   */
  export type UserCardCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCard
     */
    select?: UserCardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserCard
     */
    omit?: UserCardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserCardInclude<ExtArgs> | null
    /**
     * The data needed to create a UserCard.
     */
    data: XOR<UserCardCreateInput, UserCardUncheckedCreateInput>
  }

  /**
   * UserCard createMany
   */
  export type UserCardCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserCards.
     */
    data: UserCardCreateManyInput | UserCardCreateManyInput[]
  }

  /**
   * UserCard createManyAndReturn
   */
  export type UserCardCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCard
     */
    select?: UserCardSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserCard
     */
    omit?: UserCardOmit<ExtArgs> | null
    /**
     * The data used to create many UserCards.
     */
    data: UserCardCreateManyInput | UserCardCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserCardIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserCard update
   */
  export type UserCardUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCard
     */
    select?: UserCardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserCard
     */
    omit?: UserCardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserCardInclude<ExtArgs> | null
    /**
     * The data needed to update a UserCard.
     */
    data: XOR<UserCardUpdateInput, UserCardUncheckedUpdateInput>
    /**
     * Choose, which UserCard to update.
     */
    where: UserCardWhereUniqueInput
  }

  /**
   * UserCard updateMany
   */
  export type UserCardUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserCards.
     */
    data: XOR<UserCardUpdateManyMutationInput, UserCardUncheckedUpdateManyInput>
    /**
     * Filter which UserCards to update
     */
    where?: UserCardWhereInput
    /**
     * Limit how many UserCards to update.
     */
    limit?: number
  }

  /**
   * UserCard updateManyAndReturn
   */
  export type UserCardUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCard
     */
    select?: UserCardSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserCard
     */
    omit?: UserCardOmit<ExtArgs> | null
    /**
     * The data used to update UserCards.
     */
    data: XOR<UserCardUpdateManyMutationInput, UserCardUncheckedUpdateManyInput>
    /**
     * Filter which UserCards to update
     */
    where?: UserCardWhereInput
    /**
     * Limit how many UserCards to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserCardIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserCard upsert
   */
  export type UserCardUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCard
     */
    select?: UserCardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserCard
     */
    omit?: UserCardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserCardInclude<ExtArgs> | null
    /**
     * The filter to search for the UserCard to update in case it exists.
     */
    where: UserCardWhereUniqueInput
    /**
     * In case the UserCard found by the `where` argument doesn't exist, create a new UserCard with this data.
     */
    create: XOR<UserCardCreateInput, UserCardUncheckedCreateInput>
    /**
     * In case the UserCard was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserCardUpdateInput, UserCardUncheckedUpdateInput>
  }

  /**
   * UserCard delete
   */
  export type UserCardDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCard
     */
    select?: UserCardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserCard
     */
    omit?: UserCardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserCardInclude<ExtArgs> | null
    /**
     * Filter which UserCard to delete.
     */
    where: UserCardWhereUniqueInput
  }

  /**
   * UserCard deleteMany
   */
  export type UserCardDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserCards to delete
     */
    where?: UserCardWhereInput
    /**
     * Limit how many UserCards to delete.
     */
    limit?: number
  }

  /**
   * UserCard.chats
   */
  export type UserCard$chatsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chat
     */
    select?: ChatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chat
     */
    omit?: ChatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatInclude<ExtArgs> | null
    where?: ChatWhereInput
    orderBy?: ChatOrderByWithRelationInput | ChatOrderByWithRelationInput[]
    cursor?: ChatWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ChatScalarFieldEnum | ChatScalarFieldEnum[]
  }

  /**
   * UserCard without action
   */
  export type UserCardDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCard
     */
    select?: UserCardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserCard
     */
    omit?: UserCardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserCardInclude<ExtArgs> | null
  }


  /**
   * Model Chat
   */

  export type AggregateChat = {
    _count: ChatCountAggregateOutputType | null
    _avg: ChatAvgAggregateOutputType | null
    _sum: ChatSumAggregateOutputType | null
    _min: ChatMinAggregateOutputType | null
    _max: ChatMaxAggregateOutputType | null
  }

  export type ChatAvgAggregateOutputType = {
    id: number | null
    replicantId: number | null
    userCardId: number | null
  }

  export type ChatSumAggregateOutputType = {
    id: number | null
    replicantId: number | null
    userCardId: number | null
  }

  export type ChatMinAggregateOutputType = {
    id: number | null
    replicantId: number | null
    userCardId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ChatMaxAggregateOutputType = {
    id: number | null
    replicantId: number | null
    userCardId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ChatCountAggregateOutputType = {
    id: number
    replicantId: number
    userCardId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ChatAvgAggregateInputType = {
    id?: true
    replicantId?: true
    userCardId?: true
  }

  export type ChatSumAggregateInputType = {
    id?: true
    replicantId?: true
    userCardId?: true
  }

  export type ChatMinAggregateInputType = {
    id?: true
    replicantId?: true
    userCardId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ChatMaxAggregateInputType = {
    id?: true
    replicantId?: true
    userCardId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ChatCountAggregateInputType = {
    id?: true
    replicantId?: true
    userCardId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ChatAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Chat to aggregate.
     */
    where?: ChatWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Chats to fetch.
     */
    orderBy?: ChatOrderByWithRelationInput | ChatOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ChatWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Chats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Chats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Chats
    **/
    _count?: true | ChatCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ChatAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ChatSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ChatMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ChatMaxAggregateInputType
  }

  export type GetChatAggregateType<T extends ChatAggregateArgs> = {
        [P in keyof T & keyof AggregateChat]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateChat[P]>
      : GetScalarType<T[P], AggregateChat[P]>
  }




  export type ChatGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChatWhereInput
    orderBy?: ChatOrderByWithAggregationInput | ChatOrderByWithAggregationInput[]
    by: ChatScalarFieldEnum[] | ChatScalarFieldEnum
    having?: ChatScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ChatCountAggregateInputType | true
    _avg?: ChatAvgAggregateInputType
    _sum?: ChatSumAggregateInputType
    _min?: ChatMinAggregateInputType
    _max?: ChatMaxAggregateInputType
  }

  export type ChatGroupByOutputType = {
    id: number
    replicantId: number
    userCardId: number | null
    createdAt: Date
    updatedAt: Date
    _count: ChatCountAggregateOutputType | null
    _avg: ChatAvgAggregateOutputType | null
    _sum: ChatSumAggregateOutputType | null
    _min: ChatMinAggregateOutputType | null
    _max: ChatMaxAggregateOutputType | null
  }

  type GetChatGroupByPayload<T extends ChatGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ChatGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ChatGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ChatGroupByOutputType[P]>
            : GetScalarType<T[P], ChatGroupByOutputType[P]>
        }
      >
    >


  export type ChatSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    replicantId?: boolean
    userCardId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userCard?: boolean | Chat$userCardArgs<ExtArgs>
    replicant?: boolean | ReplicantDefaultArgs<ExtArgs>
    messages?: boolean | Chat$messagesArgs<ExtArgs>
    _count?: boolean | ChatCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["chat"]>

  export type ChatSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    replicantId?: boolean
    userCardId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userCard?: boolean | Chat$userCardArgs<ExtArgs>
    replicant?: boolean | ReplicantDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["chat"]>

  export type ChatSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    replicantId?: boolean
    userCardId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userCard?: boolean | Chat$userCardArgs<ExtArgs>
    replicant?: boolean | ReplicantDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["chat"]>

  export type ChatSelectScalar = {
    id?: boolean
    replicantId?: boolean
    userCardId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ChatOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "replicantId" | "userCardId" | "createdAt" | "updatedAt", ExtArgs["result"]["chat"]>
  export type ChatInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    userCard?: boolean | Chat$userCardArgs<ExtArgs>
    replicant?: boolean | ReplicantDefaultArgs<ExtArgs>
    messages?: boolean | Chat$messagesArgs<ExtArgs>
    _count?: boolean | ChatCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ChatIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    userCard?: boolean | Chat$userCardArgs<ExtArgs>
    replicant?: boolean | ReplicantDefaultArgs<ExtArgs>
  }
  export type ChatIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    userCard?: boolean | Chat$userCardArgs<ExtArgs>
    replicant?: boolean | ReplicantDefaultArgs<ExtArgs>
  }

  export type $ChatPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Chat"
    objects: {
      userCard: Prisma.$UserCardPayload<ExtArgs> | null
      replicant: Prisma.$ReplicantPayload<ExtArgs>
      messages: Prisma.$MessagePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      replicantId: number
      userCardId: number | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["chat"]>
    composites: {}
  }

  type ChatGetPayload<S extends boolean | null | undefined | ChatDefaultArgs> = $Result.GetResult<Prisma.$ChatPayload, S>

  type ChatCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ChatFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ChatCountAggregateInputType | true
    }

  export interface ChatDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Chat'], meta: { name: 'Chat' } }
    /**
     * Find zero or one Chat that matches the filter.
     * @param {ChatFindUniqueArgs} args - Arguments to find a Chat
     * @example
     * // Get one Chat
     * const chat = await prisma.chat.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ChatFindUniqueArgs>(args: SelectSubset<T, ChatFindUniqueArgs<ExtArgs>>): Prisma__ChatClient<$Result.GetResult<Prisma.$ChatPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Chat that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ChatFindUniqueOrThrowArgs} args - Arguments to find a Chat
     * @example
     * // Get one Chat
     * const chat = await prisma.chat.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ChatFindUniqueOrThrowArgs>(args: SelectSubset<T, ChatFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ChatClient<$Result.GetResult<Prisma.$ChatPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Chat that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatFindFirstArgs} args - Arguments to find a Chat
     * @example
     * // Get one Chat
     * const chat = await prisma.chat.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ChatFindFirstArgs>(args?: SelectSubset<T, ChatFindFirstArgs<ExtArgs>>): Prisma__ChatClient<$Result.GetResult<Prisma.$ChatPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Chat that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatFindFirstOrThrowArgs} args - Arguments to find a Chat
     * @example
     * // Get one Chat
     * const chat = await prisma.chat.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ChatFindFirstOrThrowArgs>(args?: SelectSubset<T, ChatFindFirstOrThrowArgs<ExtArgs>>): Prisma__ChatClient<$Result.GetResult<Prisma.$ChatPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Chats that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Chats
     * const chats = await prisma.chat.findMany()
     * 
     * // Get first 10 Chats
     * const chats = await prisma.chat.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const chatWithIdOnly = await prisma.chat.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ChatFindManyArgs>(args?: SelectSubset<T, ChatFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Chat.
     * @param {ChatCreateArgs} args - Arguments to create a Chat.
     * @example
     * // Create one Chat
     * const Chat = await prisma.chat.create({
     *   data: {
     *     // ... data to create a Chat
     *   }
     * })
     * 
     */
    create<T extends ChatCreateArgs>(args: SelectSubset<T, ChatCreateArgs<ExtArgs>>): Prisma__ChatClient<$Result.GetResult<Prisma.$ChatPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Chats.
     * @param {ChatCreateManyArgs} args - Arguments to create many Chats.
     * @example
     * // Create many Chats
     * const chat = await prisma.chat.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ChatCreateManyArgs>(args?: SelectSubset<T, ChatCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Chats and returns the data saved in the database.
     * @param {ChatCreateManyAndReturnArgs} args - Arguments to create many Chats.
     * @example
     * // Create many Chats
     * const chat = await prisma.chat.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Chats and only return the `id`
     * const chatWithIdOnly = await prisma.chat.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ChatCreateManyAndReturnArgs>(args?: SelectSubset<T, ChatCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Chat.
     * @param {ChatDeleteArgs} args - Arguments to delete one Chat.
     * @example
     * // Delete one Chat
     * const Chat = await prisma.chat.delete({
     *   where: {
     *     // ... filter to delete one Chat
     *   }
     * })
     * 
     */
    delete<T extends ChatDeleteArgs>(args: SelectSubset<T, ChatDeleteArgs<ExtArgs>>): Prisma__ChatClient<$Result.GetResult<Prisma.$ChatPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Chat.
     * @param {ChatUpdateArgs} args - Arguments to update one Chat.
     * @example
     * // Update one Chat
     * const chat = await prisma.chat.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ChatUpdateArgs>(args: SelectSubset<T, ChatUpdateArgs<ExtArgs>>): Prisma__ChatClient<$Result.GetResult<Prisma.$ChatPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Chats.
     * @param {ChatDeleteManyArgs} args - Arguments to filter Chats to delete.
     * @example
     * // Delete a few Chats
     * const { count } = await prisma.chat.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ChatDeleteManyArgs>(args?: SelectSubset<T, ChatDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Chats.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Chats
     * const chat = await prisma.chat.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ChatUpdateManyArgs>(args: SelectSubset<T, ChatUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Chats and returns the data updated in the database.
     * @param {ChatUpdateManyAndReturnArgs} args - Arguments to update many Chats.
     * @example
     * // Update many Chats
     * const chat = await prisma.chat.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Chats and only return the `id`
     * const chatWithIdOnly = await prisma.chat.updateManyAndReturn({
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
    updateManyAndReturn<T extends ChatUpdateManyAndReturnArgs>(args: SelectSubset<T, ChatUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Chat.
     * @param {ChatUpsertArgs} args - Arguments to update or create a Chat.
     * @example
     * // Update or create a Chat
     * const chat = await prisma.chat.upsert({
     *   create: {
     *     // ... data to create a Chat
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Chat we want to update
     *   }
     * })
     */
    upsert<T extends ChatUpsertArgs>(args: SelectSubset<T, ChatUpsertArgs<ExtArgs>>): Prisma__ChatClient<$Result.GetResult<Prisma.$ChatPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Chats.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatCountArgs} args - Arguments to filter Chats to count.
     * @example
     * // Count the number of Chats
     * const count = await prisma.chat.count({
     *   where: {
     *     // ... the filter for the Chats we want to count
     *   }
     * })
    **/
    count<T extends ChatCountArgs>(
      args?: Subset<T, ChatCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ChatCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Chat.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ChatAggregateArgs>(args: Subset<T, ChatAggregateArgs>): Prisma.PrismaPromise<GetChatAggregateType<T>>

    /**
     * Group by Chat.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatGroupByArgs} args - Group by arguments.
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
      T extends ChatGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ChatGroupByArgs['orderBy'] }
        : { orderBy?: ChatGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ChatGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetChatGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Chat model
   */
  readonly fields: ChatFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Chat.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ChatClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    userCard<T extends Chat$userCardArgs<ExtArgs> = {}>(args?: Subset<T, Chat$userCardArgs<ExtArgs>>): Prisma__UserCardClient<$Result.GetResult<Prisma.$UserCardPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    replicant<T extends ReplicantDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ReplicantDefaultArgs<ExtArgs>>): Prisma__ReplicantClient<$Result.GetResult<Prisma.$ReplicantPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    messages<T extends Chat$messagesArgs<ExtArgs> = {}>(args?: Subset<T, Chat$messagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Chat model
   */
  interface ChatFieldRefs {
    readonly id: FieldRef<"Chat", 'Int'>
    readonly replicantId: FieldRef<"Chat", 'Int'>
    readonly userCardId: FieldRef<"Chat", 'Int'>
    readonly createdAt: FieldRef<"Chat", 'DateTime'>
    readonly updatedAt: FieldRef<"Chat", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Chat findUnique
   */
  export type ChatFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chat
     */
    select?: ChatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chat
     */
    omit?: ChatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatInclude<ExtArgs> | null
    /**
     * Filter, which Chat to fetch.
     */
    where: ChatWhereUniqueInput
  }

  /**
   * Chat findUniqueOrThrow
   */
  export type ChatFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chat
     */
    select?: ChatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chat
     */
    omit?: ChatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatInclude<ExtArgs> | null
    /**
     * Filter, which Chat to fetch.
     */
    where: ChatWhereUniqueInput
  }

  /**
   * Chat findFirst
   */
  export type ChatFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chat
     */
    select?: ChatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chat
     */
    omit?: ChatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatInclude<ExtArgs> | null
    /**
     * Filter, which Chat to fetch.
     */
    where?: ChatWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Chats to fetch.
     */
    orderBy?: ChatOrderByWithRelationInput | ChatOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Chats.
     */
    cursor?: ChatWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Chats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Chats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Chats.
     */
    distinct?: ChatScalarFieldEnum | ChatScalarFieldEnum[]
  }

  /**
   * Chat findFirstOrThrow
   */
  export type ChatFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chat
     */
    select?: ChatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chat
     */
    omit?: ChatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatInclude<ExtArgs> | null
    /**
     * Filter, which Chat to fetch.
     */
    where?: ChatWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Chats to fetch.
     */
    orderBy?: ChatOrderByWithRelationInput | ChatOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Chats.
     */
    cursor?: ChatWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Chats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Chats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Chats.
     */
    distinct?: ChatScalarFieldEnum | ChatScalarFieldEnum[]
  }

  /**
   * Chat findMany
   */
  export type ChatFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chat
     */
    select?: ChatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chat
     */
    omit?: ChatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatInclude<ExtArgs> | null
    /**
     * Filter, which Chats to fetch.
     */
    where?: ChatWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Chats to fetch.
     */
    orderBy?: ChatOrderByWithRelationInput | ChatOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Chats.
     */
    cursor?: ChatWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Chats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Chats.
     */
    skip?: number
    distinct?: ChatScalarFieldEnum | ChatScalarFieldEnum[]
  }

  /**
   * Chat create
   */
  export type ChatCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chat
     */
    select?: ChatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chat
     */
    omit?: ChatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatInclude<ExtArgs> | null
    /**
     * The data needed to create a Chat.
     */
    data: XOR<ChatCreateInput, ChatUncheckedCreateInput>
  }

  /**
   * Chat createMany
   */
  export type ChatCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Chats.
     */
    data: ChatCreateManyInput | ChatCreateManyInput[]
  }

  /**
   * Chat createManyAndReturn
   */
  export type ChatCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chat
     */
    select?: ChatSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Chat
     */
    omit?: ChatOmit<ExtArgs> | null
    /**
     * The data used to create many Chats.
     */
    data: ChatCreateManyInput | ChatCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Chat update
   */
  export type ChatUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chat
     */
    select?: ChatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chat
     */
    omit?: ChatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatInclude<ExtArgs> | null
    /**
     * The data needed to update a Chat.
     */
    data: XOR<ChatUpdateInput, ChatUncheckedUpdateInput>
    /**
     * Choose, which Chat to update.
     */
    where: ChatWhereUniqueInput
  }

  /**
   * Chat updateMany
   */
  export type ChatUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Chats.
     */
    data: XOR<ChatUpdateManyMutationInput, ChatUncheckedUpdateManyInput>
    /**
     * Filter which Chats to update
     */
    where?: ChatWhereInput
    /**
     * Limit how many Chats to update.
     */
    limit?: number
  }

  /**
   * Chat updateManyAndReturn
   */
  export type ChatUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chat
     */
    select?: ChatSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Chat
     */
    omit?: ChatOmit<ExtArgs> | null
    /**
     * The data used to update Chats.
     */
    data: XOR<ChatUpdateManyMutationInput, ChatUncheckedUpdateManyInput>
    /**
     * Filter which Chats to update
     */
    where?: ChatWhereInput
    /**
     * Limit how many Chats to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Chat upsert
   */
  export type ChatUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chat
     */
    select?: ChatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chat
     */
    omit?: ChatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatInclude<ExtArgs> | null
    /**
     * The filter to search for the Chat to update in case it exists.
     */
    where: ChatWhereUniqueInput
    /**
     * In case the Chat found by the `where` argument doesn't exist, create a new Chat with this data.
     */
    create: XOR<ChatCreateInput, ChatUncheckedCreateInput>
    /**
     * In case the Chat was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ChatUpdateInput, ChatUncheckedUpdateInput>
  }

  /**
   * Chat delete
   */
  export type ChatDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chat
     */
    select?: ChatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chat
     */
    omit?: ChatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatInclude<ExtArgs> | null
    /**
     * Filter which Chat to delete.
     */
    where: ChatWhereUniqueInput
  }

  /**
   * Chat deleteMany
   */
  export type ChatDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Chats to delete
     */
    where?: ChatWhereInput
    /**
     * Limit how many Chats to delete.
     */
    limit?: number
  }

  /**
   * Chat.userCard
   */
  export type Chat$userCardArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCard
     */
    select?: UserCardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserCard
     */
    omit?: UserCardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserCardInclude<ExtArgs> | null
    where?: UserCardWhereInput
  }

  /**
   * Chat.messages
   */
  export type Chat$messagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    where?: MessageWhereInput
    orderBy?: MessageOrderByWithRelationInput | MessageOrderByWithRelationInput[]
    cursor?: MessageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MessageScalarFieldEnum | MessageScalarFieldEnum[]
  }

  /**
   * Chat without action
   */
  export type ChatDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chat
     */
    select?: ChatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chat
     */
    omit?: ChatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatInclude<ExtArgs> | null
  }


  /**
   * Model Message
   */

  export type AggregateMessage = {
    _count: MessageCountAggregateOutputType | null
    _avg: MessageAvgAggregateOutputType | null
    _sum: MessageSumAggregateOutputType | null
    _min: MessageMinAggregateOutputType | null
    _max: MessageMaxAggregateOutputType | null
  }

  export type MessageAvgAggregateOutputType = {
    id: number | null
    chatId: number | null
  }

  export type MessageSumAggregateOutputType = {
    id: number | null
    chatId: number | null
  }

  export type MessageMinAggregateOutputType = {
    id: number | null
    chatId: number | null
    authorIsReplicant: boolean | null
    content: string | null
    createdAt: Date | null
  }

  export type MessageMaxAggregateOutputType = {
    id: number | null
    chatId: number | null
    authorIsReplicant: boolean | null
    content: string | null
    createdAt: Date | null
  }

  export type MessageCountAggregateOutputType = {
    id: number
    chatId: number
    authorIsReplicant: number
    content: number
    createdAt: number
    _all: number
  }


  export type MessageAvgAggregateInputType = {
    id?: true
    chatId?: true
  }

  export type MessageSumAggregateInputType = {
    id?: true
    chatId?: true
  }

  export type MessageMinAggregateInputType = {
    id?: true
    chatId?: true
    authorIsReplicant?: true
    content?: true
    createdAt?: true
  }

  export type MessageMaxAggregateInputType = {
    id?: true
    chatId?: true
    authorIsReplicant?: true
    content?: true
    createdAt?: true
  }

  export type MessageCountAggregateInputType = {
    id?: true
    chatId?: true
    authorIsReplicant?: true
    content?: true
    createdAt?: true
    _all?: true
  }

  export type MessageAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Message to aggregate.
     */
    where?: MessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Messages to fetch.
     */
    orderBy?: MessageOrderByWithRelationInput | MessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Messages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Messages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Messages
    **/
    _count?: true | MessageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MessageAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MessageSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MessageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MessageMaxAggregateInputType
  }

  export type GetMessageAggregateType<T extends MessageAggregateArgs> = {
        [P in keyof T & keyof AggregateMessage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMessage[P]>
      : GetScalarType<T[P], AggregateMessage[P]>
  }




  export type MessageGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MessageWhereInput
    orderBy?: MessageOrderByWithAggregationInput | MessageOrderByWithAggregationInput[]
    by: MessageScalarFieldEnum[] | MessageScalarFieldEnum
    having?: MessageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MessageCountAggregateInputType | true
    _avg?: MessageAvgAggregateInputType
    _sum?: MessageSumAggregateInputType
    _min?: MessageMinAggregateInputType
    _max?: MessageMaxAggregateInputType
  }

  export type MessageGroupByOutputType = {
    id: number
    chatId: number
    authorIsReplicant: boolean
    content: string
    createdAt: Date
    _count: MessageCountAggregateOutputType | null
    _avg: MessageAvgAggregateOutputType | null
    _sum: MessageSumAggregateOutputType | null
    _min: MessageMinAggregateOutputType | null
    _max: MessageMaxAggregateOutputType | null
  }

  type GetMessageGroupByPayload<T extends MessageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MessageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MessageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MessageGroupByOutputType[P]>
            : GetScalarType<T[P], MessageGroupByOutputType[P]>
        }
      >
    >


  export type MessageSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    chatId?: boolean
    authorIsReplicant?: boolean
    content?: boolean
    createdAt?: boolean
    chat?: boolean | ChatDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["message"]>

  export type MessageSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    chatId?: boolean
    authorIsReplicant?: boolean
    content?: boolean
    createdAt?: boolean
    chat?: boolean | ChatDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["message"]>

  export type MessageSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    chatId?: boolean
    authorIsReplicant?: boolean
    content?: boolean
    createdAt?: boolean
    chat?: boolean | ChatDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["message"]>

  export type MessageSelectScalar = {
    id?: boolean
    chatId?: boolean
    authorIsReplicant?: boolean
    content?: boolean
    createdAt?: boolean
  }

  export type MessageOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "chatId" | "authorIsReplicant" | "content" | "createdAt", ExtArgs["result"]["message"]>
  export type MessageInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    chat?: boolean | ChatDefaultArgs<ExtArgs>
  }
  export type MessageIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    chat?: boolean | ChatDefaultArgs<ExtArgs>
  }
  export type MessageIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    chat?: boolean | ChatDefaultArgs<ExtArgs>
  }

  export type $MessagePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Message"
    objects: {
      chat: Prisma.$ChatPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      chatId: number
      authorIsReplicant: boolean
      content: string
      createdAt: Date
    }, ExtArgs["result"]["message"]>
    composites: {}
  }

  type MessageGetPayload<S extends boolean | null | undefined | MessageDefaultArgs> = $Result.GetResult<Prisma.$MessagePayload, S>

  type MessageCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MessageFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MessageCountAggregateInputType | true
    }

  export interface MessageDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Message'], meta: { name: 'Message' } }
    /**
     * Find zero or one Message that matches the filter.
     * @param {MessageFindUniqueArgs} args - Arguments to find a Message
     * @example
     * // Get one Message
     * const message = await prisma.message.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MessageFindUniqueArgs>(args: SelectSubset<T, MessageFindUniqueArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Message that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MessageFindUniqueOrThrowArgs} args - Arguments to find a Message
     * @example
     * // Get one Message
     * const message = await prisma.message.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MessageFindUniqueOrThrowArgs>(args: SelectSubset<T, MessageFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Message that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageFindFirstArgs} args - Arguments to find a Message
     * @example
     * // Get one Message
     * const message = await prisma.message.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MessageFindFirstArgs>(args?: SelectSubset<T, MessageFindFirstArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Message that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageFindFirstOrThrowArgs} args - Arguments to find a Message
     * @example
     * // Get one Message
     * const message = await prisma.message.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MessageFindFirstOrThrowArgs>(args?: SelectSubset<T, MessageFindFirstOrThrowArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Messages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Messages
     * const messages = await prisma.message.findMany()
     * 
     * // Get first 10 Messages
     * const messages = await prisma.message.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const messageWithIdOnly = await prisma.message.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MessageFindManyArgs>(args?: SelectSubset<T, MessageFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Message.
     * @param {MessageCreateArgs} args - Arguments to create a Message.
     * @example
     * // Create one Message
     * const Message = await prisma.message.create({
     *   data: {
     *     // ... data to create a Message
     *   }
     * })
     * 
     */
    create<T extends MessageCreateArgs>(args: SelectSubset<T, MessageCreateArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Messages.
     * @param {MessageCreateManyArgs} args - Arguments to create many Messages.
     * @example
     * // Create many Messages
     * const message = await prisma.message.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MessageCreateManyArgs>(args?: SelectSubset<T, MessageCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Messages and returns the data saved in the database.
     * @param {MessageCreateManyAndReturnArgs} args - Arguments to create many Messages.
     * @example
     * // Create many Messages
     * const message = await prisma.message.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Messages and only return the `id`
     * const messageWithIdOnly = await prisma.message.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MessageCreateManyAndReturnArgs>(args?: SelectSubset<T, MessageCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Message.
     * @param {MessageDeleteArgs} args - Arguments to delete one Message.
     * @example
     * // Delete one Message
     * const Message = await prisma.message.delete({
     *   where: {
     *     // ... filter to delete one Message
     *   }
     * })
     * 
     */
    delete<T extends MessageDeleteArgs>(args: SelectSubset<T, MessageDeleteArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Message.
     * @param {MessageUpdateArgs} args - Arguments to update one Message.
     * @example
     * // Update one Message
     * const message = await prisma.message.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MessageUpdateArgs>(args: SelectSubset<T, MessageUpdateArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Messages.
     * @param {MessageDeleteManyArgs} args - Arguments to filter Messages to delete.
     * @example
     * // Delete a few Messages
     * const { count } = await prisma.message.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MessageDeleteManyArgs>(args?: SelectSubset<T, MessageDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Messages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Messages
     * const message = await prisma.message.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MessageUpdateManyArgs>(args: SelectSubset<T, MessageUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Messages and returns the data updated in the database.
     * @param {MessageUpdateManyAndReturnArgs} args - Arguments to update many Messages.
     * @example
     * // Update many Messages
     * const message = await prisma.message.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Messages and only return the `id`
     * const messageWithIdOnly = await prisma.message.updateManyAndReturn({
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
    updateManyAndReturn<T extends MessageUpdateManyAndReturnArgs>(args: SelectSubset<T, MessageUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Message.
     * @param {MessageUpsertArgs} args - Arguments to update or create a Message.
     * @example
     * // Update or create a Message
     * const message = await prisma.message.upsert({
     *   create: {
     *     // ... data to create a Message
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Message we want to update
     *   }
     * })
     */
    upsert<T extends MessageUpsertArgs>(args: SelectSubset<T, MessageUpsertArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Messages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageCountArgs} args - Arguments to filter Messages to count.
     * @example
     * // Count the number of Messages
     * const count = await prisma.message.count({
     *   where: {
     *     // ... the filter for the Messages we want to count
     *   }
     * })
    **/
    count<T extends MessageCountArgs>(
      args?: Subset<T, MessageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MessageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Message.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MessageAggregateArgs>(args: Subset<T, MessageAggregateArgs>): Prisma.PrismaPromise<GetMessageAggregateType<T>>

    /**
     * Group by Message.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageGroupByArgs} args - Group by arguments.
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
      T extends MessageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MessageGroupByArgs['orderBy'] }
        : { orderBy?: MessageGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, MessageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMessageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Message model
   */
  readonly fields: MessageFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Message.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MessageClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    chat<T extends ChatDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ChatDefaultArgs<ExtArgs>>): Prisma__ChatClient<$Result.GetResult<Prisma.$ChatPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Message model
   */
  interface MessageFieldRefs {
    readonly id: FieldRef<"Message", 'Int'>
    readonly chatId: FieldRef<"Message", 'Int'>
    readonly authorIsReplicant: FieldRef<"Message", 'Boolean'>
    readonly content: FieldRef<"Message", 'String'>
    readonly createdAt: FieldRef<"Message", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Message findUnique
   */
  export type MessageFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * Filter, which Message to fetch.
     */
    where: MessageWhereUniqueInput
  }

  /**
   * Message findUniqueOrThrow
   */
  export type MessageFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * Filter, which Message to fetch.
     */
    where: MessageWhereUniqueInput
  }

  /**
   * Message findFirst
   */
  export type MessageFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * Filter, which Message to fetch.
     */
    where?: MessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Messages to fetch.
     */
    orderBy?: MessageOrderByWithRelationInput | MessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Messages.
     */
    cursor?: MessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Messages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Messages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Messages.
     */
    distinct?: MessageScalarFieldEnum | MessageScalarFieldEnum[]
  }

  /**
   * Message findFirstOrThrow
   */
  export type MessageFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * Filter, which Message to fetch.
     */
    where?: MessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Messages to fetch.
     */
    orderBy?: MessageOrderByWithRelationInput | MessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Messages.
     */
    cursor?: MessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Messages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Messages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Messages.
     */
    distinct?: MessageScalarFieldEnum | MessageScalarFieldEnum[]
  }

  /**
   * Message findMany
   */
  export type MessageFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * Filter, which Messages to fetch.
     */
    where?: MessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Messages to fetch.
     */
    orderBy?: MessageOrderByWithRelationInput | MessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Messages.
     */
    cursor?: MessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Messages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Messages.
     */
    skip?: number
    distinct?: MessageScalarFieldEnum | MessageScalarFieldEnum[]
  }

  /**
   * Message create
   */
  export type MessageCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * The data needed to create a Message.
     */
    data: XOR<MessageCreateInput, MessageUncheckedCreateInput>
  }

  /**
   * Message createMany
   */
  export type MessageCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Messages.
     */
    data: MessageCreateManyInput | MessageCreateManyInput[]
  }

  /**
   * Message createManyAndReturn
   */
  export type MessageCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * The data used to create many Messages.
     */
    data: MessageCreateManyInput | MessageCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Message update
   */
  export type MessageUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * The data needed to update a Message.
     */
    data: XOR<MessageUpdateInput, MessageUncheckedUpdateInput>
    /**
     * Choose, which Message to update.
     */
    where: MessageWhereUniqueInput
  }

  /**
   * Message updateMany
   */
  export type MessageUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Messages.
     */
    data: XOR<MessageUpdateManyMutationInput, MessageUncheckedUpdateManyInput>
    /**
     * Filter which Messages to update
     */
    where?: MessageWhereInput
    /**
     * Limit how many Messages to update.
     */
    limit?: number
  }

  /**
   * Message updateManyAndReturn
   */
  export type MessageUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * The data used to update Messages.
     */
    data: XOR<MessageUpdateManyMutationInput, MessageUncheckedUpdateManyInput>
    /**
     * Filter which Messages to update
     */
    where?: MessageWhereInput
    /**
     * Limit how many Messages to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Message upsert
   */
  export type MessageUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * The filter to search for the Message to update in case it exists.
     */
    where: MessageWhereUniqueInput
    /**
     * In case the Message found by the `where` argument doesn't exist, create a new Message with this data.
     */
    create: XOR<MessageCreateInput, MessageUncheckedCreateInput>
    /**
     * In case the Message was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MessageUpdateInput, MessageUncheckedUpdateInput>
  }

  /**
   * Message delete
   */
  export type MessageDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * Filter which Message to delete.
     */
    where: MessageWhereUniqueInput
  }

  /**
   * Message deleteMany
   */
  export type MessageDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Messages to delete
     */
    where?: MessageWhereInput
    /**
     * Limit how many Messages to delete.
     */
    limit?: number
  }

  /**
   * Message without action
   */
  export type MessageDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
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


  export const UserCardScalarFieldEnum: {
    id: 'id',
    replicantId: 'replicantId',
    name: 'name',
    role: 'role',
    description: 'description',
    snapshot: 'snapshot',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserCardScalarFieldEnum = (typeof UserCardScalarFieldEnum)[keyof typeof UserCardScalarFieldEnum]


  export const ChatScalarFieldEnum: {
    id: 'id',
    replicantId: 'replicantId',
    userCardId: 'userCardId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ChatScalarFieldEnum = (typeof ChatScalarFieldEnum)[keyof typeof ChatScalarFieldEnum]


  export const MessageScalarFieldEnum: {
    id: 'id',
    chatId: 'chatId',
    authorIsReplicant: 'authorIsReplicant',
    content: 'content',
    createdAt: 'createdAt'
  };

  export type MessageScalarFieldEnum = (typeof MessageScalarFieldEnum)[keyof typeof MessageScalarFieldEnum]


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
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


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
    chats?: ChatListRelationFilter
    interview?: XOR<InterviewNullableScalarRelationFilter, InterviewWhereInput> | null
    userCards?: UserCardListRelationFilter
  }

  export type ReplicantOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    snapshot?: SortOrder
    chats?: ChatOrderByRelationAggregateInput
    interview?: InterviewOrderByWithRelationInput
    userCards?: UserCardOrderByRelationAggregateInput
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
    chats?: ChatListRelationFilter
    interview?: XOR<InterviewNullableScalarRelationFilter, InterviewWhereInput> | null
    userCards?: UserCardListRelationFilter
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
    interview?: XOR<InterviewScalarRelationFilter, InterviewWhereInput>
    questions?: QuestionListRelationFilter
  }

  export type InterviewTopicOrderByWithRelationInput = {
    id?: SortOrder
    interviewId?: SortOrder
    name?: SortOrder
    summary?: SortOrder
    type?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    interview?: InterviewOrderByWithRelationInput
    questions?: QuestionOrderByRelationAggregateInput
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
    interview?: XOR<InterviewScalarRelationFilter, InterviewWhereInput>
    questions?: QuestionListRelationFilter
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

  export type UserCardWhereInput = {
    AND?: UserCardWhereInput | UserCardWhereInput[]
    OR?: UserCardWhereInput[]
    NOT?: UserCardWhereInput | UserCardWhereInput[]
    id?: IntFilter<"UserCard"> | number
    replicantId?: IntFilter<"UserCard"> | number
    name?: StringFilter<"UserCard"> | string
    role?: StringNullableFilter<"UserCard"> | string | null
    description?: StringNullableFilter<"UserCard"> | string | null
    snapshot?: StringFilter<"UserCard"> | string
    createdAt?: DateTimeFilter<"UserCard"> | Date | string
    updatedAt?: DateTimeFilter<"UserCard"> | Date | string
    chats?: ChatListRelationFilter
    replicant?: XOR<ReplicantScalarRelationFilter, ReplicantWhereInput>
  }

  export type UserCardOrderByWithRelationInput = {
    id?: SortOrder
    replicantId?: SortOrder
    name?: SortOrder
    role?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    snapshot?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    chats?: ChatOrderByRelationAggregateInput
    replicant?: ReplicantOrderByWithRelationInput
  }

  export type UserCardWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: UserCardWhereInput | UserCardWhereInput[]
    OR?: UserCardWhereInput[]
    NOT?: UserCardWhereInput | UserCardWhereInput[]
    replicantId?: IntFilter<"UserCard"> | number
    name?: StringFilter<"UserCard"> | string
    role?: StringNullableFilter<"UserCard"> | string | null
    description?: StringNullableFilter<"UserCard"> | string | null
    snapshot?: StringFilter<"UserCard"> | string
    createdAt?: DateTimeFilter<"UserCard"> | Date | string
    updatedAt?: DateTimeFilter<"UserCard"> | Date | string
    chats?: ChatListRelationFilter
    replicant?: XOR<ReplicantScalarRelationFilter, ReplicantWhereInput>
  }, "id">

  export type UserCardOrderByWithAggregationInput = {
    id?: SortOrder
    replicantId?: SortOrder
    name?: SortOrder
    role?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    snapshot?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCardCountOrderByAggregateInput
    _avg?: UserCardAvgOrderByAggregateInput
    _max?: UserCardMaxOrderByAggregateInput
    _min?: UserCardMinOrderByAggregateInput
    _sum?: UserCardSumOrderByAggregateInput
  }

  export type UserCardScalarWhereWithAggregatesInput = {
    AND?: UserCardScalarWhereWithAggregatesInput | UserCardScalarWhereWithAggregatesInput[]
    OR?: UserCardScalarWhereWithAggregatesInput[]
    NOT?: UserCardScalarWhereWithAggregatesInput | UserCardScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"UserCard"> | number
    replicantId?: IntWithAggregatesFilter<"UserCard"> | number
    name?: StringWithAggregatesFilter<"UserCard"> | string
    role?: StringNullableWithAggregatesFilter<"UserCard"> | string | null
    description?: StringNullableWithAggregatesFilter<"UserCard"> | string | null
    snapshot?: StringWithAggregatesFilter<"UserCard"> | string
    createdAt?: DateTimeWithAggregatesFilter<"UserCard"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"UserCard"> | Date | string
  }

  export type ChatWhereInput = {
    AND?: ChatWhereInput | ChatWhereInput[]
    OR?: ChatWhereInput[]
    NOT?: ChatWhereInput | ChatWhereInput[]
    id?: IntFilter<"Chat"> | number
    replicantId?: IntFilter<"Chat"> | number
    userCardId?: IntNullableFilter<"Chat"> | number | null
    createdAt?: DateTimeFilter<"Chat"> | Date | string
    updatedAt?: DateTimeFilter<"Chat"> | Date | string
    userCard?: XOR<UserCardNullableScalarRelationFilter, UserCardWhereInput> | null
    replicant?: XOR<ReplicantScalarRelationFilter, ReplicantWhereInput>
    messages?: MessageListRelationFilter
  }

  export type ChatOrderByWithRelationInput = {
    id?: SortOrder
    replicantId?: SortOrder
    userCardId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userCard?: UserCardOrderByWithRelationInput
    replicant?: ReplicantOrderByWithRelationInput
    messages?: MessageOrderByRelationAggregateInput
  }

  export type ChatWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ChatWhereInput | ChatWhereInput[]
    OR?: ChatWhereInput[]
    NOT?: ChatWhereInput | ChatWhereInput[]
    replicantId?: IntFilter<"Chat"> | number
    userCardId?: IntNullableFilter<"Chat"> | number | null
    createdAt?: DateTimeFilter<"Chat"> | Date | string
    updatedAt?: DateTimeFilter<"Chat"> | Date | string
    userCard?: XOR<UserCardNullableScalarRelationFilter, UserCardWhereInput> | null
    replicant?: XOR<ReplicantScalarRelationFilter, ReplicantWhereInput>
    messages?: MessageListRelationFilter
  }, "id">

  export type ChatOrderByWithAggregationInput = {
    id?: SortOrder
    replicantId?: SortOrder
    userCardId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ChatCountOrderByAggregateInput
    _avg?: ChatAvgOrderByAggregateInput
    _max?: ChatMaxOrderByAggregateInput
    _min?: ChatMinOrderByAggregateInput
    _sum?: ChatSumOrderByAggregateInput
  }

  export type ChatScalarWhereWithAggregatesInput = {
    AND?: ChatScalarWhereWithAggregatesInput | ChatScalarWhereWithAggregatesInput[]
    OR?: ChatScalarWhereWithAggregatesInput[]
    NOT?: ChatScalarWhereWithAggregatesInput | ChatScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Chat"> | number
    replicantId?: IntWithAggregatesFilter<"Chat"> | number
    userCardId?: IntNullableWithAggregatesFilter<"Chat"> | number | null
    createdAt?: DateTimeWithAggregatesFilter<"Chat"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Chat"> | Date | string
  }

  export type MessageWhereInput = {
    AND?: MessageWhereInput | MessageWhereInput[]
    OR?: MessageWhereInput[]
    NOT?: MessageWhereInput | MessageWhereInput[]
    id?: IntFilter<"Message"> | number
    chatId?: IntFilter<"Message"> | number
    authorIsReplicant?: BoolFilter<"Message"> | boolean
    content?: StringFilter<"Message"> | string
    createdAt?: DateTimeFilter<"Message"> | Date | string
    chat?: XOR<ChatScalarRelationFilter, ChatWhereInput>
  }

  export type MessageOrderByWithRelationInput = {
    id?: SortOrder
    chatId?: SortOrder
    authorIsReplicant?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    chat?: ChatOrderByWithRelationInput
  }

  export type MessageWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: MessageWhereInput | MessageWhereInput[]
    OR?: MessageWhereInput[]
    NOT?: MessageWhereInput | MessageWhereInput[]
    chatId?: IntFilter<"Message"> | number
    authorIsReplicant?: BoolFilter<"Message"> | boolean
    content?: StringFilter<"Message"> | string
    createdAt?: DateTimeFilter<"Message"> | Date | string
    chat?: XOR<ChatScalarRelationFilter, ChatWhereInput>
  }, "id">

  export type MessageOrderByWithAggregationInput = {
    id?: SortOrder
    chatId?: SortOrder
    authorIsReplicant?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    _count?: MessageCountOrderByAggregateInput
    _avg?: MessageAvgOrderByAggregateInput
    _max?: MessageMaxOrderByAggregateInput
    _min?: MessageMinOrderByAggregateInput
    _sum?: MessageSumOrderByAggregateInput
  }

  export type MessageScalarWhereWithAggregatesInput = {
    AND?: MessageScalarWhereWithAggregatesInput | MessageScalarWhereWithAggregatesInput[]
    OR?: MessageScalarWhereWithAggregatesInput[]
    NOT?: MessageScalarWhereWithAggregatesInput | MessageScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Message"> | number
    chatId?: IntWithAggregatesFilter<"Message"> | number
    authorIsReplicant?: BoolWithAggregatesFilter<"Message"> | boolean
    content?: StringWithAggregatesFilter<"Message"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Message"> | Date | string
  }

  export type ReplicantCreateInput = {
    name: string
    description?: string | null
    createdAt?: Date | string
    snapshot: string
    chats?: ChatCreateNestedManyWithoutReplicantInput
    interview?: InterviewCreateNestedOneWithoutReplicantInput
    userCards?: UserCardCreateNestedManyWithoutReplicantInput
  }

  export type ReplicantUncheckedCreateInput = {
    id?: number
    name: string
    description?: string | null
    createdAt?: Date | string
    snapshot: string
    chats?: ChatUncheckedCreateNestedManyWithoutReplicantInput
    interview?: InterviewUncheckedCreateNestedOneWithoutReplicantInput
    userCards?: UserCardUncheckedCreateNestedManyWithoutReplicantInput
  }

  export type ReplicantUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    snapshot?: StringFieldUpdateOperationsInput | string
    chats?: ChatUpdateManyWithoutReplicantNestedInput
    interview?: InterviewUpdateOneWithoutReplicantNestedInput
    userCards?: UserCardUpdateManyWithoutReplicantNestedInput
  }

  export type ReplicantUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    snapshot?: StringFieldUpdateOperationsInput | string
    chats?: ChatUncheckedUpdateManyWithoutReplicantNestedInput
    interview?: InterviewUncheckedUpdateOneWithoutReplicantNestedInput
    userCards?: UserCardUncheckedUpdateManyWithoutReplicantNestedInput
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
    interview: InterviewCreateNestedOneWithoutTopicsInput
    questions?: QuestionCreateNestedManyWithoutTopicInput
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
    interview?: InterviewUpdateOneRequiredWithoutTopicsNestedInput
    questions?: QuestionUpdateManyWithoutTopicNestedInput
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

  export type UserCardCreateInput = {
    name: string
    role?: string | null
    description?: string | null
    snapshot: string
    createdAt?: Date | string
    updatedAt?: Date | string
    chats?: ChatCreateNestedManyWithoutUserCardInput
    replicant: ReplicantCreateNestedOneWithoutUserCardsInput
  }

  export type UserCardUncheckedCreateInput = {
    id?: number
    replicantId: number
    name: string
    role?: string | null
    description?: string | null
    snapshot: string
    createdAt?: Date | string
    updatedAt?: Date | string
    chats?: ChatUncheckedCreateNestedManyWithoutUserCardInput
  }

  export type UserCardUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    role?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    snapshot?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    chats?: ChatUpdateManyWithoutUserCardNestedInput
    replicant?: ReplicantUpdateOneRequiredWithoutUserCardsNestedInput
  }

  export type UserCardUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    replicantId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    role?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    snapshot?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    chats?: ChatUncheckedUpdateManyWithoutUserCardNestedInput
  }

  export type UserCardCreateManyInput = {
    id?: number
    replicantId: number
    name: string
    role?: string | null
    description?: string | null
    snapshot: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserCardUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    role?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    snapshot?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCardUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    replicantId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    role?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    snapshot?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChatCreateInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    userCard?: UserCardCreateNestedOneWithoutChatsInput
    replicant: ReplicantCreateNestedOneWithoutChatsInput
    messages?: MessageCreateNestedManyWithoutChatInput
  }

  export type ChatUncheckedCreateInput = {
    id?: number
    replicantId: number
    userCardId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    messages?: MessageUncheckedCreateNestedManyWithoutChatInput
  }

  export type ChatUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userCard?: UserCardUpdateOneWithoutChatsNestedInput
    replicant?: ReplicantUpdateOneRequiredWithoutChatsNestedInput
    messages?: MessageUpdateManyWithoutChatNestedInput
  }

  export type ChatUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    replicantId?: IntFieldUpdateOperationsInput | number
    userCardId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    messages?: MessageUncheckedUpdateManyWithoutChatNestedInput
  }

  export type ChatCreateManyInput = {
    id?: number
    replicantId: number
    userCardId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ChatUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChatUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    replicantId?: IntFieldUpdateOperationsInput | number
    userCardId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MessageCreateInput = {
    authorIsReplicant: boolean
    content: string
    createdAt?: Date | string
    chat: ChatCreateNestedOneWithoutMessagesInput
  }

  export type MessageUncheckedCreateInput = {
    id?: number
    chatId: number
    authorIsReplicant: boolean
    content: string
    createdAt?: Date | string
  }

  export type MessageUpdateInput = {
    authorIsReplicant?: BoolFieldUpdateOperationsInput | boolean
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    chat?: ChatUpdateOneRequiredWithoutMessagesNestedInput
  }

  export type MessageUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    chatId?: IntFieldUpdateOperationsInput | number
    authorIsReplicant?: BoolFieldUpdateOperationsInput | boolean
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MessageCreateManyInput = {
    id?: number
    chatId: number
    authorIsReplicant: boolean
    content: string
    createdAt?: Date | string
  }

  export type MessageUpdateManyMutationInput = {
    authorIsReplicant?: BoolFieldUpdateOperationsInput | boolean
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MessageUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    chatId?: IntFieldUpdateOperationsInput | number
    authorIsReplicant?: BoolFieldUpdateOperationsInput | boolean
    content?: StringFieldUpdateOperationsInput | string
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

  export type ChatListRelationFilter = {
    every?: ChatWhereInput
    some?: ChatWhereInput
    none?: ChatWhereInput
  }

  export type InterviewNullableScalarRelationFilter = {
    is?: InterviewWhereInput | null
    isNot?: InterviewWhereInput | null
  }

  export type UserCardListRelationFilter = {
    every?: UserCardWhereInput
    some?: UserCardWhereInput
    none?: UserCardWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type ChatOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCardOrderByRelationAggregateInput = {
    _count?: SortOrder
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

  export type InterviewScalarRelationFilter = {
    is?: InterviewWhereInput
    isNot?: InterviewWhereInput
  }

  export type QuestionListRelationFilter = {
    every?: QuestionWhereInput
    some?: QuestionWhereInput
    none?: QuestionWhereInput
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

  export type UserCardCountOrderByAggregateInput = {
    id?: SortOrder
    replicantId?: SortOrder
    name?: SortOrder
    role?: SortOrder
    description?: SortOrder
    snapshot?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserCardAvgOrderByAggregateInput = {
    id?: SortOrder
    replicantId?: SortOrder
  }

  export type UserCardMaxOrderByAggregateInput = {
    id?: SortOrder
    replicantId?: SortOrder
    name?: SortOrder
    role?: SortOrder
    description?: SortOrder
    snapshot?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserCardMinOrderByAggregateInput = {
    id?: SortOrder
    replicantId?: SortOrder
    name?: SortOrder
    role?: SortOrder
    description?: SortOrder
    snapshot?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserCardSumOrderByAggregateInput = {
    id?: SortOrder
    replicantId?: SortOrder
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type UserCardNullableScalarRelationFilter = {
    is?: UserCardWhereInput | null
    isNot?: UserCardWhereInput | null
  }

  export type MessageListRelationFilter = {
    every?: MessageWhereInput
    some?: MessageWhereInput
    none?: MessageWhereInput
  }

  export type MessageOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ChatCountOrderByAggregateInput = {
    id?: SortOrder
    replicantId?: SortOrder
    userCardId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ChatAvgOrderByAggregateInput = {
    id?: SortOrder
    replicantId?: SortOrder
    userCardId?: SortOrder
  }

  export type ChatMaxOrderByAggregateInput = {
    id?: SortOrder
    replicantId?: SortOrder
    userCardId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ChatMinOrderByAggregateInput = {
    id?: SortOrder
    replicantId?: SortOrder
    userCardId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ChatSumOrderByAggregateInput = {
    id?: SortOrder
    replicantId?: SortOrder
    userCardId?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
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

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type ChatScalarRelationFilter = {
    is?: ChatWhereInput
    isNot?: ChatWhereInput
  }

  export type MessageCountOrderByAggregateInput = {
    id?: SortOrder
    chatId?: SortOrder
    authorIsReplicant?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
  }

  export type MessageAvgOrderByAggregateInput = {
    id?: SortOrder
    chatId?: SortOrder
  }

  export type MessageMaxOrderByAggregateInput = {
    id?: SortOrder
    chatId?: SortOrder
    authorIsReplicant?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
  }

  export type MessageMinOrderByAggregateInput = {
    id?: SortOrder
    chatId?: SortOrder
    authorIsReplicant?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
  }

  export type MessageSumOrderByAggregateInput = {
    id?: SortOrder
    chatId?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type ChatCreateNestedManyWithoutReplicantInput = {
    create?: XOR<ChatCreateWithoutReplicantInput, ChatUncheckedCreateWithoutReplicantInput> | ChatCreateWithoutReplicantInput[] | ChatUncheckedCreateWithoutReplicantInput[]
    connectOrCreate?: ChatCreateOrConnectWithoutReplicantInput | ChatCreateOrConnectWithoutReplicantInput[]
    createMany?: ChatCreateManyReplicantInputEnvelope
    connect?: ChatWhereUniqueInput | ChatWhereUniqueInput[]
  }

  export type InterviewCreateNestedOneWithoutReplicantInput = {
    create?: XOR<InterviewCreateWithoutReplicantInput, InterviewUncheckedCreateWithoutReplicantInput>
    connectOrCreate?: InterviewCreateOrConnectWithoutReplicantInput
    connect?: InterviewWhereUniqueInput
  }

  export type UserCardCreateNestedManyWithoutReplicantInput = {
    create?: XOR<UserCardCreateWithoutReplicantInput, UserCardUncheckedCreateWithoutReplicantInput> | UserCardCreateWithoutReplicantInput[] | UserCardUncheckedCreateWithoutReplicantInput[]
    connectOrCreate?: UserCardCreateOrConnectWithoutReplicantInput | UserCardCreateOrConnectWithoutReplicantInput[]
    createMany?: UserCardCreateManyReplicantInputEnvelope
    connect?: UserCardWhereUniqueInput | UserCardWhereUniqueInput[]
  }

  export type ChatUncheckedCreateNestedManyWithoutReplicantInput = {
    create?: XOR<ChatCreateWithoutReplicantInput, ChatUncheckedCreateWithoutReplicantInput> | ChatCreateWithoutReplicantInput[] | ChatUncheckedCreateWithoutReplicantInput[]
    connectOrCreate?: ChatCreateOrConnectWithoutReplicantInput | ChatCreateOrConnectWithoutReplicantInput[]
    createMany?: ChatCreateManyReplicantInputEnvelope
    connect?: ChatWhereUniqueInput | ChatWhereUniqueInput[]
  }

  export type InterviewUncheckedCreateNestedOneWithoutReplicantInput = {
    create?: XOR<InterviewCreateWithoutReplicantInput, InterviewUncheckedCreateWithoutReplicantInput>
    connectOrCreate?: InterviewCreateOrConnectWithoutReplicantInput
    connect?: InterviewWhereUniqueInput
  }

  export type UserCardUncheckedCreateNestedManyWithoutReplicantInput = {
    create?: XOR<UserCardCreateWithoutReplicantInput, UserCardUncheckedCreateWithoutReplicantInput> | UserCardCreateWithoutReplicantInput[] | UserCardUncheckedCreateWithoutReplicantInput[]
    connectOrCreate?: UserCardCreateOrConnectWithoutReplicantInput | UserCardCreateOrConnectWithoutReplicantInput[]
    createMany?: UserCardCreateManyReplicantInputEnvelope
    connect?: UserCardWhereUniqueInput | UserCardWhereUniqueInput[]
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

  export type ChatUpdateManyWithoutReplicantNestedInput = {
    create?: XOR<ChatCreateWithoutReplicantInput, ChatUncheckedCreateWithoutReplicantInput> | ChatCreateWithoutReplicantInput[] | ChatUncheckedCreateWithoutReplicantInput[]
    connectOrCreate?: ChatCreateOrConnectWithoutReplicantInput | ChatCreateOrConnectWithoutReplicantInput[]
    upsert?: ChatUpsertWithWhereUniqueWithoutReplicantInput | ChatUpsertWithWhereUniqueWithoutReplicantInput[]
    createMany?: ChatCreateManyReplicantInputEnvelope
    set?: ChatWhereUniqueInput | ChatWhereUniqueInput[]
    disconnect?: ChatWhereUniqueInput | ChatWhereUniqueInput[]
    delete?: ChatWhereUniqueInput | ChatWhereUniqueInput[]
    connect?: ChatWhereUniqueInput | ChatWhereUniqueInput[]
    update?: ChatUpdateWithWhereUniqueWithoutReplicantInput | ChatUpdateWithWhereUniqueWithoutReplicantInput[]
    updateMany?: ChatUpdateManyWithWhereWithoutReplicantInput | ChatUpdateManyWithWhereWithoutReplicantInput[]
    deleteMany?: ChatScalarWhereInput | ChatScalarWhereInput[]
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

  export type UserCardUpdateManyWithoutReplicantNestedInput = {
    create?: XOR<UserCardCreateWithoutReplicantInput, UserCardUncheckedCreateWithoutReplicantInput> | UserCardCreateWithoutReplicantInput[] | UserCardUncheckedCreateWithoutReplicantInput[]
    connectOrCreate?: UserCardCreateOrConnectWithoutReplicantInput | UserCardCreateOrConnectWithoutReplicantInput[]
    upsert?: UserCardUpsertWithWhereUniqueWithoutReplicantInput | UserCardUpsertWithWhereUniqueWithoutReplicantInput[]
    createMany?: UserCardCreateManyReplicantInputEnvelope
    set?: UserCardWhereUniqueInput | UserCardWhereUniqueInput[]
    disconnect?: UserCardWhereUniqueInput | UserCardWhereUniqueInput[]
    delete?: UserCardWhereUniqueInput | UserCardWhereUniqueInput[]
    connect?: UserCardWhereUniqueInput | UserCardWhereUniqueInput[]
    update?: UserCardUpdateWithWhereUniqueWithoutReplicantInput | UserCardUpdateWithWhereUniqueWithoutReplicantInput[]
    updateMany?: UserCardUpdateManyWithWhereWithoutReplicantInput | UserCardUpdateManyWithWhereWithoutReplicantInput[]
    deleteMany?: UserCardScalarWhereInput | UserCardScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ChatUncheckedUpdateManyWithoutReplicantNestedInput = {
    create?: XOR<ChatCreateWithoutReplicantInput, ChatUncheckedCreateWithoutReplicantInput> | ChatCreateWithoutReplicantInput[] | ChatUncheckedCreateWithoutReplicantInput[]
    connectOrCreate?: ChatCreateOrConnectWithoutReplicantInput | ChatCreateOrConnectWithoutReplicantInput[]
    upsert?: ChatUpsertWithWhereUniqueWithoutReplicantInput | ChatUpsertWithWhereUniqueWithoutReplicantInput[]
    createMany?: ChatCreateManyReplicantInputEnvelope
    set?: ChatWhereUniqueInput | ChatWhereUniqueInput[]
    disconnect?: ChatWhereUniqueInput | ChatWhereUniqueInput[]
    delete?: ChatWhereUniqueInput | ChatWhereUniqueInput[]
    connect?: ChatWhereUniqueInput | ChatWhereUniqueInput[]
    update?: ChatUpdateWithWhereUniqueWithoutReplicantInput | ChatUpdateWithWhereUniqueWithoutReplicantInput[]
    updateMany?: ChatUpdateManyWithWhereWithoutReplicantInput | ChatUpdateManyWithWhereWithoutReplicantInput[]
    deleteMany?: ChatScalarWhereInput | ChatScalarWhereInput[]
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

  export type UserCardUncheckedUpdateManyWithoutReplicantNestedInput = {
    create?: XOR<UserCardCreateWithoutReplicantInput, UserCardUncheckedCreateWithoutReplicantInput> | UserCardCreateWithoutReplicantInput[] | UserCardUncheckedCreateWithoutReplicantInput[]
    connectOrCreate?: UserCardCreateOrConnectWithoutReplicantInput | UserCardCreateOrConnectWithoutReplicantInput[]
    upsert?: UserCardUpsertWithWhereUniqueWithoutReplicantInput | UserCardUpsertWithWhereUniqueWithoutReplicantInput[]
    createMany?: UserCardCreateManyReplicantInputEnvelope
    set?: UserCardWhereUniqueInput | UserCardWhereUniqueInput[]
    disconnect?: UserCardWhereUniqueInput | UserCardWhereUniqueInput[]
    delete?: UserCardWhereUniqueInput | UserCardWhereUniqueInput[]
    connect?: UserCardWhereUniqueInput | UserCardWhereUniqueInput[]
    update?: UserCardUpdateWithWhereUniqueWithoutReplicantInput | UserCardUpdateWithWhereUniqueWithoutReplicantInput[]
    updateMany?: UserCardUpdateManyWithWhereWithoutReplicantInput | UserCardUpdateManyWithWhereWithoutReplicantInput[]
    deleteMany?: UserCardScalarWhereInput | UserCardScalarWhereInput[]
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

  export type InterviewCreateNestedOneWithoutTopicsInput = {
    create?: XOR<InterviewCreateWithoutTopicsInput, InterviewUncheckedCreateWithoutTopicsInput>
    connectOrCreate?: InterviewCreateOrConnectWithoutTopicsInput
    connect?: InterviewWhereUniqueInput
  }

  export type QuestionCreateNestedManyWithoutTopicInput = {
    create?: XOR<QuestionCreateWithoutTopicInput, QuestionUncheckedCreateWithoutTopicInput> | QuestionCreateWithoutTopicInput[] | QuestionUncheckedCreateWithoutTopicInput[]
    connectOrCreate?: QuestionCreateOrConnectWithoutTopicInput | QuestionCreateOrConnectWithoutTopicInput[]
    createMany?: QuestionCreateManyTopicInputEnvelope
    connect?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
  }

  export type QuestionUncheckedCreateNestedManyWithoutTopicInput = {
    create?: XOR<QuestionCreateWithoutTopicInput, QuestionUncheckedCreateWithoutTopicInput> | QuestionCreateWithoutTopicInput[] | QuestionUncheckedCreateWithoutTopicInput[]
    connectOrCreate?: QuestionCreateOrConnectWithoutTopicInput | QuestionCreateOrConnectWithoutTopicInput[]
    createMany?: QuestionCreateManyTopicInputEnvelope
    connect?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
  }

  export type InterviewUpdateOneRequiredWithoutTopicsNestedInput = {
    create?: XOR<InterviewCreateWithoutTopicsInput, InterviewUncheckedCreateWithoutTopicsInput>
    connectOrCreate?: InterviewCreateOrConnectWithoutTopicsInput
    upsert?: InterviewUpsertWithoutTopicsInput
    connect?: InterviewWhereUniqueInput
    update?: XOR<XOR<InterviewUpdateToOneWithWhereWithoutTopicsInput, InterviewUpdateWithoutTopicsInput>, InterviewUncheckedUpdateWithoutTopicsInput>
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

  export type ChatCreateNestedManyWithoutUserCardInput = {
    create?: XOR<ChatCreateWithoutUserCardInput, ChatUncheckedCreateWithoutUserCardInput> | ChatCreateWithoutUserCardInput[] | ChatUncheckedCreateWithoutUserCardInput[]
    connectOrCreate?: ChatCreateOrConnectWithoutUserCardInput | ChatCreateOrConnectWithoutUserCardInput[]
    createMany?: ChatCreateManyUserCardInputEnvelope
    connect?: ChatWhereUniqueInput | ChatWhereUniqueInput[]
  }

  export type ReplicantCreateNestedOneWithoutUserCardsInput = {
    create?: XOR<ReplicantCreateWithoutUserCardsInput, ReplicantUncheckedCreateWithoutUserCardsInput>
    connectOrCreate?: ReplicantCreateOrConnectWithoutUserCardsInput
    connect?: ReplicantWhereUniqueInput
  }

  export type ChatUncheckedCreateNestedManyWithoutUserCardInput = {
    create?: XOR<ChatCreateWithoutUserCardInput, ChatUncheckedCreateWithoutUserCardInput> | ChatCreateWithoutUserCardInput[] | ChatUncheckedCreateWithoutUserCardInput[]
    connectOrCreate?: ChatCreateOrConnectWithoutUserCardInput | ChatCreateOrConnectWithoutUserCardInput[]
    createMany?: ChatCreateManyUserCardInputEnvelope
    connect?: ChatWhereUniqueInput | ChatWhereUniqueInput[]
  }

  export type ChatUpdateManyWithoutUserCardNestedInput = {
    create?: XOR<ChatCreateWithoutUserCardInput, ChatUncheckedCreateWithoutUserCardInput> | ChatCreateWithoutUserCardInput[] | ChatUncheckedCreateWithoutUserCardInput[]
    connectOrCreate?: ChatCreateOrConnectWithoutUserCardInput | ChatCreateOrConnectWithoutUserCardInput[]
    upsert?: ChatUpsertWithWhereUniqueWithoutUserCardInput | ChatUpsertWithWhereUniqueWithoutUserCardInput[]
    createMany?: ChatCreateManyUserCardInputEnvelope
    set?: ChatWhereUniqueInput | ChatWhereUniqueInput[]
    disconnect?: ChatWhereUniqueInput | ChatWhereUniqueInput[]
    delete?: ChatWhereUniqueInput | ChatWhereUniqueInput[]
    connect?: ChatWhereUniqueInput | ChatWhereUniqueInput[]
    update?: ChatUpdateWithWhereUniqueWithoutUserCardInput | ChatUpdateWithWhereUniqueWithoutUserCardInput[]
    updateMany?: ChatUpdateManyWithWhereWithoutUserCardInput | ChatUpdateManyWithWhereWithoutUserCardInput[]
    deleteMany?: ChatScalarWhereInput | ChatScalarWhereInput[]
  }

  export type ReplicantUpdateOneRequiredWithoutUserCardsNestedInput = {
    create?: XOR<ReplicantCreateWithoutUserCardsInput, ReplicantUncheckedCreateWithoutUserCardsInput>
    connectOrCreate?: ReplicantCreateOrConnectWithoutUserCardsInput
    upsert?: ReplicantUpsertWithoutUserCardsInput
    connect?: ReplicantWhereUniqueInput
    update?: XOR<XOR<ReplicantUpdateToOneWithWhereWithoutUserCardsInput, ReplicantUpdateWithoutUserCardsInput>, ReplicantUncheckedUpdateWithoutUserCardsInput>
  }

  export type ChatUncheckedUpdateManyWithoutUserCardNestedInput = {
    create?: XOR<ChatCreateWithoutUserCardInput, ChatUncheckedCreateWithoutUserCardInput> | ChatCreateWithoutUserCardInput[] | ChatUncheckedCreateWithoutUserCardInput[]
    connectOrCreate?: ChatCreateOrConnectWithoutUserCardInput | ChatCreateOrConnectWithoutUserCardInput[]
    upsert?: ChatUpsertWithWhereUniqueWithoutUserCardInput | ChatUpsertWithWhereUniqueWithoutUserCardInput[]
    createMany?: ChatCreateManyUserCardInputEnvelope
    set?: ChatWhereUniqueInput | ChatWhereUniqueInput[]
    disconnect?: ChatWhereUniqueInput | ChatWhereUniqueInput[]
    delete?: ChatWhereUniqueInput | ChatWhereUniqueInput[]
    connect?: ChatWhereUniqueInput | ChatWhereUniqueInput[]
    update?: ChatUpdateWithWhereUniqueWithoutUserCardInput | ChatUpdateWithWhereUniqueWithoutUserCardInput[]
    updateMany?: ChatUpdateManyWithWhereWithoutUserCardInput | ChatUpdateManyWithWhereWithoutUserCardInput[]
    deleteMany?: ChatScalarWhereInput | ChatScalarWhereInput[]
  }

  export type UserCardCreateNestedOneWithoutChatsInput = {
    create?: XOR<UserCardCreateWithoutChatsInput, UserCardUncheckedCreateWithoutChatsInput>
    connectOrCreate?: UserCardCreateOrConnectWithoutChatsInput
    connect?: UserCardWhereUniqueInput
  }

  export type ReplicantCreateNestedOneWithoutChatsInput = {
    create?: XOR<ReplicantCreateWithoutChatsInput, ReplicantUncheckedCreateWithoutChatsInput>
    connectOrCreate?: ReplicantCreateOrConnectWithoutChatsInput
    connect?: ReplicantWhereUniqueInput
  }

  export type MessageCreateNestedManyWithoutChatInput = {
    create?: XOR<MessageCreateWithoutChatInput, MessageUncheckedCreateWithoutChatInput> | MessageCreateWithoutChatInput[] | MessageUncheckedCreateWithoutChatInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutChatInput | MessageCreateOrConnectWithoutChatInput[]
    createMany?: MessageCreateManyChatInputEnvelope
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
  }

  export type MessageUncheckedCreateNestedManyWithoutChatInput = {
    create?: XOR<MessageCreateWithoutChatInput, MessageUncheckedCreateWithoutChatInput> | MessageCreateWithoutChatInput[] | MessageUncheckedCreateWithoutChatInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutChatInput | MessageCreateOrConnectWithoutChatInput[]
    createMany?: MessageCreateManyChatInputEnvelope
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
  }

  export type UserCardUpdateOneWithoutChatsNestedInput = {
    create?: XOR<UserCardCreateWithoutChatsInput, UserCardUncheckedCreateWithoutChatsInput>
    connectOrCreate?: UserCardCreateOrConnectWithoutChatsInput
    upsert?: UserCardUpsertWithoutChatsInput
    disconnect?: UserCardWhereInput | boolean
    delete?: UserCardWhereInput | boolean
    connect?: UserCardWhereUniqueInput
    update?: XOR<XOR<UserCardUpdateToOneWithWhereWithoutChatsInput, UserCardUpdateWithoutChatsInput>, UserCardUncheckedUpdateWithoutChatsInput>
  }

  export type ReplicantUpdateOneRequiredWithoutChatsNestedInput = {
    create?: XOR<ReplicantCreateWithoutChatsInput, ReplicantUncheckedCreateWithoutChatsInput>
    connectOrCreate?: ReplicantCreateOrConnectWithoutChatsInput
    upsert?: ReplicantUpsertWithoutChatsInput
    connect?: ReplicantWhereUniqueInput
    update?: XOR<XOR<ReplicantUpdateToOneWithWhereWithoutChatsInput, ReplicantUpdateWithoutChatsInput>, ReplicantUncheckedUpdateWithoutChatsInput>
  }

  export type MessageUpdateManyWithoutChatNestedInput = {
    create?: XOR<MessageCreateWithoutChatInput, MessageUncheckedCreateWithoutChatInput> | MessageCreateWithoutChatInput[] | MessageUncheckedCreateWithoutChatInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutChatInput | MessageCreateOrConnectWithoutChatInput[]
    upsert?: MessageUpsertWithWhereUniqueWithoutChatInput | MessageUpsertWithWhereUniqueWithoutChatInput[]
    createMany?: MessageCreateManyChatInputEnvelope
    set?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    disconnect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    delete?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    update?: MessageUpdateWithWhereUniqueWithoutChatInput | MessageUpdateWithWhereUniqueWithoutChatInput[]
    updateMany?: MessageUpdateManyWithWhereWithoutChatInput | MessageUpdateManyWithWhereWithoutChatInput[]
    deleteMany?: MessageScalarWhereInput | MessageScalarWhereInput[]
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type MessageUncheckedUpdateManyWithoutChatNestedInput = {
    create?: XOR<MessageCreateWithoutChatInput, MessageUncheckedCreateWithoutChatInput> | MessageCreateWithoutChatInput[] | MessageUncheckedCreateWithoutChatInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutChatInput | MessageCreateOrConnectWithoutChatInput[]
    upsert?: MessageUpsertWithWhereUniqueWithoutChatInput | MessageUpsertWithWhereUniqueWithoutChatInput[]
    createMany?: MessageCreateManyChatInputEnvelope
    set?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    disconnect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    delete?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    update?: MessageUpdateWithWhereUniqueWithoutChatInput | MessageUpdateWithWhereUniqueWithoutChatInput[]
    updateMany?: MessageUpdateManyWithWhereWithoutChatInput | MessageUpdateManyWithWhereWithoutChatInput[]
    deleteMany?: MessageScalarWhereInput | MessageScalarWhereInput[]
  }

  export type ChatCreateNestedOneWithoutMessagesInput = {
    create?: XOR<ChatCreateWithoutMessagesInput, ChatUncheckedCreateWithoutMessagesInput>
    connectOrCreate?: ChatCreateOrConnectWithoutMessagesInput
    connect?: ChatWhereUniqueInput
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type ChatUpdateOneRequiredWithoutMessagesNestedInput = {
    create?: XOR<ChatCreateWithoutMessagesInput, ChatUncheckedCreateWithoutMessagesInput>
    connectOrCreate?: ChatCreateOrConnectWithoutMessagesInput
    upsert?: ChatUpsertWithoutMessagesInput
    connect?: ChatWhereUniqueInput
    update?: XOR<XOR<ChatUpdateToOneWithWhereWithoutMessagesInput, ChatUpdateWithoutMessagesInput>, ChatUncheckedUpdateWithoutMessagesInput>
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

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
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
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type ChatCreateWithoutReplicantInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    userCard?: UserCardCreateNestedOneWithoutChatsInput
    messages?: MessageCreateNestedManyWithoutChatInput
  }

  export type ChatUncheckedCreateWithoutReplicantInput = {
    id?: number
    userCardId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    messages?: MessageUncheckedCreateNestedManyWithoutChatInput
  }

  export type ChatCreateOrConnectWithoutReplicantInput = {
    where: ChatWhereUniqueInput
    create: XOR<ChatCreateWithoutReplicantInput, ChatUncheckedCreateWithoutReplicantInput>
  }

  export type ChatCreateManyReplicantInputEnvelope = {
    data: ChatCreateManyReplicantInput | ChatCreateManyReplicantInput[]
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

  export type UserCardCreateWithoutReplicantInput = {
    name: string
    role?: string | null
    description?: string | null
    snapshot: string
    createdAt?: Date | string
    updatedAt?: Date | string
    chats?: ChatCreateNestedManyWithoutUserCardInput
  }

  export type UserCardUncheckedCreateWithoutReplicantInput = {
    id?: number
    name: string
    role?: string | null
    description?: string | null
    snapshot: string
    createdAt?: Date | string
    updatedAt?: Date | string
    chats?: ChatUncheckedCreateNestedManyWithoutUserCardInput
  }

  export type UserCardCreateOrConnectWithoutReplicantInput = {
    where: UserCardWhereUniqueInput
    create: XOR<UserCardCreateWithoutReplicantInput, UserCardUncheckedCreateWithoutReplicantInput>
  }

  export type UserCardCreateManyReplicantInputEnvelope = {
    data: UserCardCreateManyReplicantInput | UserCardCreateManyReplicantInput[]
  }

  export type ChatUpsertWithWhereUniqueWithoutReplicantInput = {
    where: ChatWhereUniqueInput
    update: XOR<ChatUpdateWithoutReplicantInput, ChatUncheckedUpdateWithoutReplicantInput>
    create: XOR<ChatCreateWithoutReplicantInput, ChatUncheckedCreateWithoutReplicantInput>
  }

  export type ChatUpdateWithWhereUniqueWithoutReplicantInput = {
    where: ChatWhereUniqueInput
    data: XOR<ChatUpdateWithoutReplicantInput, ChatUncheckedUpdateWithoutReplicantInput>
  }

  export type ChatUpdateManyWithWhereWithoutReplicantInput = {
    where: ChatScalarWhereInput
    data: XOR<ChatUpdateManyMutationInput, ChatUncheckedUpdateManyWithoutReplicantInput>
  }

  export type ChatScalarWhereInput = {
    AND?: ChatScalarWhereInput | ChatScalarWhereInput[]
    OR?: ChatScalarWhereInput[]
    NOT?: ChatScalarWhereInput | ChatScalarWhereInput[]
    id?: IntFilter<"Chat"> | number
    replicantId?: IntFilter<"Chat"> | number
    userCardId?: IntNullableFilter<"Chat"> | number | null
    createdAt?: DateTimeFilter<"Chat"> | Date | string
    updatedAt?: DateTimeFilter<"Chat"> | Date | string
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

  export type UserCardUpsertWithWhereUniqueWithoutReplicantInput = {
    where: UserCardWhereUniqueInput
    update: XOR<UserCardUpdateWithoutReplicantInput, UserCardUncheckedUpdateWithoutReplicantInput>
    create: XOR<UserCardCreateWithoutReplicantInput, UserCardUncheckedCreateWithoutReplicantInput>
  }

  export type UserCardUpdateWithWhereUniqueWithoutReplicantInput = {
    where: UserCardWhereUniqueInput
    data: XOR<UserCardUpdateWithoutReplicantInput, UserCardUncheckedUpdateWithoutReplicantInput>
  }

  export type UserCardUpdateManyWithWhereWithoutReplicantInput = {
    where: UserCardScalarWhereInput
    data: XOR<UserCardUpdateManyMutationInput, UserCardUncheckedUpdateManyWithoutReplicantInput>
  }

  export type UserCardScalarWhereInput = {
    AND?: UserCardScalarWhereInput | UserCardScalarWhereInput[]
    OR?: UserCardScalarWhereInput[]
    NOT?: UserCardScalarWhereInput | UserCardScalarWhereInput[]
    id?: IntFilter<"UserCard"> | number
    replicantId?: IntFilter<"UserCard"> | number
    name?: StringFilter<"UserCard"> | string
    role?: StringNullableFilter<"UserCard"> | string | null
    description?: StringNullableFilter<"UserCard"> | string | null
    snapshot?: StringFilter<"UserCard"> | string
    createdAt?: DateTimeFilter<"UserCard"> | Date | string
    updatedAt?: DateTimeFilter<"UserCard"> | Date | string
  }

  export type ReplicantCreateWithoutInterviewInput = {
    name: string
    description?: string | null
    createdAt?: Date | string
    snapshot: string
    chats?: ChatCreateNestedManyWithoutReplicantInput
    userCards?: UserCardCreateNestedManyWithoutReplicantInput
  }

  export type ReplicantUncheckedCreateWithoutInterviewInput = {
    id?: number
    name: string
    description?: string | null
    createdAt?: Date | string
    snapshot: string
    chats?: ChatUncheckedCreateNestedManyWithoutReplicantInput
    userCards?: UserCardUncheckedCreateNestedManyWithoutReplicantInput
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
    chats?: ChatUpdateManyWithoutReplicantNestedInput
    userCards?: UserCardUpdateManyWithoutReplicantNestedInput
  }

  export type ReplicantUncheckedUpdateWithoutInterviewInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    snapshot?: StringFieldUpdateOperationsInput | string
    chats?: ChatUncheckedUpdateManyWithoutReplicantNestedInput
    userCards?: UserCardUncheckedUpdateManyWithoutReplicantNestedInput
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

  export type ChatCreateWithoutUserCardInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    replicant: ReplicantCreateNestedOneWithoutChatsInput
    messages?: MessageCreateNestedManyWithoutChatInput
  }

  export type ChatUncheckedCreateWithoutUserCardInput = {
    id?: number
    replicantId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    messages?: MessageUncheckedCreateNestedManyWithoutChatInput
  }

  export type ChatCreateOrConnectWithoutUserCardInput = {
    where: ChatWhereUniqueInput
    create: XOR<ChatCreateWithoutUserCardInput, ChatUncheckedCreateWithoutUserCardInput>
  }

  export type ChatCreateManyUserCardInputEnvelope = {
    data: ChatCreateManyUserCardInput | ChatCreateManyUserCardInput[]
  }

  export type ReplicantCreateWithoutUserCardsInput = {
    name: string
    description?: string | null
    createdAt?: Date | string
    snapshot: string
    chats?: ChatCreateNestedManyWithoutReplicantInput
    interview?: InterviewCreateNestedOneWithoutReplicantInput
  }

  export type ReplicantUncheckedCreateWithoutUserCardsInput = {
    id?: number
    name: string
    description?: string | null
    createdAt?: Date | string
    snapshot: string
    chats?: ChatUncheckedCreateNestedManyWithoutReplicantInput
    interview?: InterviewUncheckedCreateNestedOneWithoutReplicantInput
  }

  export type ReplicantCreateOrConnectWithoutUserCardsInput = {
    where: ReplicantWhereUniqueInput
    create: XOR<ReplicantCreateWithoutUserCardsInput, ReplicantUncheckedCreateWithoutUserCardsInput>
  }

  export type ChatUpsertWithWhereUniqueWithoutUserCardInput = {
    where: ChatWhereUniqueInput
    update: XOR<ChatUpdateWithoutUserCardInput, ChatUncheckedUpdateWithoutUserCardInput>
    create: XOR<ChatCreateWithoutUserCardInput, ChatUncheckedCreateWithoutUserCardInput>
  }

  export type ChatUpdateWithWhereUniqueWithoutUserCardInput = {
    where: ChatWhereUniqueInput
    data: XOR<ChatUpdateWithoutUserCardInput, ChatUncheckedUpdateWithoutUserCardInput>
  }

  export type ChatUpdateManyWithWhereWithoutUserCardInput = {
    where: ChatScalarWhereInput
    data: XOR<ChatUpdateManyMutationInput, ChatUncheckedUpdateManyWithoutUserCardInput>
  }

  export type ReplicantUpsertWithoutUserCardsInput = {
    update: XOR<ReplicantUpdateWithoutUserCardsInput, ReplicantUncheckedUpdateWithoutUserCardsInput>
    create: XOR<ReplicantCreateWithoutUserCardsInput, ReplicantUncheckedCreateWithoutUserCardsInput>
    where?: ReplicantWhereInput
  }

  export type ReplicantUpdateToOneWithWhereWithoutUserCardsInput = {
    where?: ReplicantWhereInput
    data: XOR<ReplicantUpdateWithoutUserCardsInput, ReplicantUncheckedUpdateWithoutUserCardsInput>
  }

  export type ReplicantUpdateWithoutUserCardsInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    snapshot?: StringFieldUpdateOperationsInput | string
    chats?: ChatUpdateManyWithoutReplicantNestedInput
    interview?: InterviewUpdateOneWithoutReplicantNestedInput
  }

  export type ReplicantUncheckedUpdateWithoutUserCardsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    snapshot?: StringFieldUpdateOperationsInput | string
    chats?: ChatUncheckedUpdateManyWithoutReplicantNestedInput
    interview?: InterviewUncheckedUpdateOneWithoutReplicantNestedInput
  }

  export type UserCardCreateWithoutChatsInput = {
    name: string
    role?: string | null
    description?: string | null
    snapshot: string
    createdAt?: Date | string
    updatedAt?: Date | string
    replicant: ReplicantCreateNestedOneWithoutUserCardsInput
  }

  export type UserCardUncheckedCreateWithoutChatsInput = {
    id?: number
    replicantId: number
    name: string
    role?: string | null
    description?: string | null
    snapshot: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserCardCreateOrConnectWithoutChatsInput = {
    where: UserCardWhereUniqueInput
    create: XOR<UserCardCreateWithoutChatsInput, UserCardUncheckedCreateWithoutChatsInput>
  }

  export type ReplicantCreateWithoutChatsInput = {
    name: string
    description?: string | null
    createdAt?: Date | string
    snapshot: string
    interview?: InterviewCreateNestedOneWithoutReplicantInput
    userCards?: UserCardCreateNestedManyWithoutReplicantInput
  }

  export type ReplicantUncheckedCreateWithoutChatsInput = {
    id?: number
    name: string
    description?: string | null
    createdAt?: Date | string
    snapshot: string
    interview?: InterviewUncheckedCreateNestedOneWithoutReplicantInput
    userCards?: UserCardUncheckedCreateNestedManyWithoutReplicantInput
  }

  export type ReplicantCreateOrConnectWithoutChatsInput = {
    where: ReplicantWhereUniqueInput
    create: XOR<ReplicantCreateWithoutChatsInput, ReplicantUncheckedCreateWithoutChatsInput>
  }

  export type MessageCreateWithoutChatInput = {
    authorIsReplicant: boolean
    content: string
    createdAt?: Date | string
  }

  export type MessageUncheckedCreateWithoutChatInput = {
    id?: number
    authorIsReplicant: boolean
    content: string
    createdAt?: Date | string
  }

  export type MessageCreateOrConnectWithoutChatInput = {
    where: MessageWhereUniqueInput
    create: XOR<MessageCreateWithoutChatInput, MessageUncheckedCreateWithoutChatInput>
  }

  export type MessageCreateManyChatInputEnvelope = {
    data: MessageCreateManyChatInput | MessageCreateManyChatInput[]
  }

  export type UserCardUpsertWithoutChatsInput = {
    update: XOR<UserCardUpdateWithoutChatsInput, UserCardUncheckedUpdateWithoutChatsInput>
    create: XOR<UserCardCreateWithoutChatsInput, UserCardUncheckedCreateWithoutChatsInput>
    where?: UserCardWhereInput
  }

  export type UserCardUpdateToOneWithWhereWithoutChatsInput = {
    where?: UserCardWhereInput
    data: XOR<UserCardUpdateWithoutChatsInput, UserCardUncheckedUpdateWithoutChatsInput>
  }

  export type UserCardUpdateWithoutChatsInput = {
    name?: StringFieldUpdateOperationsInput | string
    role?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    snapshot?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    replicant?: ReplicantUpdateOneRequiredWithoutUserCardsNestedInput
  }

  export type UserCardUncheckedUpdateWithoutChatsInput = {
    id?: IntFieldUpdateOperationsInput | number
    replicantId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    role?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    snapshot?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReplicantUpsertWithoutChatsInput = {
    update: XOR<ReplicantUpdateWithoutChatsInput, ReplicantUncheckedUpdateWithoutChatsInput>
    create: XOR<ReplicantCreateWithoutChatsInput, ReplicantUncheckedCreateWithoutChatsInput>
    where?: ReplicantWhereInput
  }

  export type ReplicantUpdateToOneWithWhereWithoutChatsInput = {
    where?: ReplicantWhereInput
    data: XOR<ReplicantUpdateWithoutChatsInput, ReplicantUncheckedUpdateWithoutChatsInput>
  }

  export type ReplicantUpdateWithoutChatsInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    snapshot?: StringFieldUpdateOperationsInput | string
    interview?: InterviewUpdateOneWithoutReplicantNestedInput
    userCards?: UserCardUpdateManyWithoutReplicantNestedInput
  }

  export type ReplicantUncheckedUpdateWithoutChatsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    snapshot?: StringFieldUpdateOperationsInput | string
    interview?: InterviewUncheckedUpdateOneWithoutReplicantNestedInput
    userCards?: UserCardUncheckedUpdateManyWithoutReplicantNestedInput
  }

  export type MessageUpsertWithWhereUniqueWithoutChatInput = {
    where: MessageWhereUniqueInput
    update: XOR<MessageUpdateWithoutChatInput, MessageUncheckedUpdateWithoutChatInput>
    create: XOR<MessageCreateWithoutChatInput, MessageUncheckedCreateWithoutChatInput>
  }

  export type MessageUpdateWithWhereUniqueWithoutChatInput = {
    where: MessageWhereUniqueInput
    data: XOR<MessageUpdateWithoutChatInput, MessageUncheckedUpdateWithoutChatInput>
  }

  export type MessageUpdateManyWithWhereWithoutChatInput = {
    where: MessageScalarWhereInput
    data: XOR<MessageUpdateManyMutationInput, MessageUncheckedUpdateManyWithoutChatInput>
  }

  export type MessageScalarWhereInput = {
    AND?: MessageScalarWhereInput | MessageScalarWhereInput[]
    OR?: MessageScalarWhereInput[]
    NOT?: MessageScalarWhereInput | MessageScalarWhereInput[]
    id?: IntFilter<"Message"> | number
    chatId?: IntFilter<"Message"> | number
    authorIsReplicant?: BoolFilter<"Message"> | boolean
    content?: StringFilter<"Message"> | string
    createdAt?: DateTimeFilter<"Message"> | Date | string
  }

  export type ChatCreateWithoutMessagesInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    userCard?: UserCardCreateNestedOneWithoutChatsInput
    replicant: ReplicantCreateNestedOneWithoutChatsInput
  }

  export type ChatUncheckedCreateWithoutMessagesInput = {
    id?: number
    replicantId: number
    userCardId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ChatCreateOrConnectWithoutMessagesInput = {
    where: ChatWhereUniqueInput
    create: XOR<ChatCreateWithoutMessagesInput, ChatUncheckedCreateWithoutMessagesInput>
  }

  export type ChatUpsertWithoutMessagesInput = {
    update: XOR<ChatUpdateWithoutMessagesInput, ChatUncheckedUpdateWithoutMessagesInput>
    create: XOR<ChatCreateWithoutMessagesInput, ChatUncheckedCreateWithoutMessagesInput>
    where?: ChatWhereInput
  }

  export type ChatUpdateToOneWithWhereWithoutMessagesInput = {
    where?: ChatWhereInput
    data: XOR<ChatUpdateWithoutMessagesInput, ChatUncheckedUpdateWithoutMessagesInput>
  }

  export type ChatUpdateWithoutMessagesInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userCard?: UserCardUpdateOneWithoutChatsNestedInput
    replicant?: ReplicantUpdateOneRequiredWithoutChatsNestedInput
  }

  export type ChatUncheckedUpdateWithoutMessagesInput = {
    id?: IntFieldUpdateOperationsInput | number
    replicantId?: IntFieldUpdateOperationsInput | number
    userCardId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChatCreateManyReplicantInput = {
    id?: number
    userCardId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserCardCreateManyReplicantInput = {
    id?: number
    name: string
    role?: string | null
    description?: string | null
    snapshot: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ChatUpdateWithoutReplicantInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userCard?: UserCardUpdateOneWithoutChatsNestedInput
    messages?: MessageUpdateManyWithoutChatNestedInput
  }

  export type ChatUncheckedUpdateWithoutReplicantInput = {
    id?: IntFieldUpdateOperationsInput | number
    userCardId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    messages?: MessageUncheckedUpdateManyWithoutChatNestedInput
  }

  export type ChatUncheckedUpdateManyWithoutReplicantInput = {
    id?: IntFieldUpdateOperationsInput | number
    userCardId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCardUpdateWithoutReplicantInput = {
    name?: StringFieldUpdateOperationsInput | string
    role?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    snapshot?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    chats?: ChatUpdateManyWithoutUserCardNestedInput
  }

  export type UserCardUncheckedUpdateWithoutReplicantInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    role?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    snapshot?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    chats?: ChatUncheckedUpdateManyWithoutUserCardNestedInput
  }

  export type UserCardUncheckedUpdateManyWithoutReplicantInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    role?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    snapshot?: StringFieldUpdateOperationsInput | string
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

  export type ChatCreateManyUserCardInput = {
    id?: number
    replicantId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ChatUpdateWithoutUserCardInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    replicant?: ReplicantUpdateOneRequiredWithoutChatsNestedInput
    messages?: MessageUpdateManyWithoutChatNestedInput
  }

  export type ChatUncheckedUpdateWithoutUserCardInput = {
    id?: IntFieldUpdateOperationsInput | number
    replicantId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    messages?: MessageUncheckedUpdateManyWithoutChatNestedInput
  }

  export type ChatUncheckedUpdateManyWithoutUserCardInput = {
    id?: IntFieldUpdateOperationsInput | number
    replicantId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MessageCreateManyChatInput = {
    id?: number
    authorIsReplicant: boolean
    content: string
    createdAt?: Date | string
  }

  export type MessageUpdateWithoutChatInput = {
    authorIsReplicant?: BoolFieldUpdateOperationsInput | boolean
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MessageUncheckedUpdateWithoutChatInput = {
    id?: IntFieldUpdateOperationsInput | number
    authorIsReplicant?: BoolFieldUpdateOperationsInput | boolean
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MessageUncheckedUpdateManyWithoutChatInput = {
    id?: IntFieldUpdateOperationsInput | number
    authorIsReplicant?: BoolFieldUpdateOperationsInput | boolean
    content?: StringFieldUpdateOperationsInput | string
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