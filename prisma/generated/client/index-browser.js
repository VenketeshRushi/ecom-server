
Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal,
  objectEnumValues,
  makeStrictEnum,
  Public,
  detectRuntime,
} = require('./runtime/index-browser')


const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 5.5.2
 * Query Engine version: aebc046ce8b88ebbcb45efe31cbe7d06fd6abc0a
 */
Prisma.prismaVersion = {
  client: "5.5.2",
  engine: "aebc046ce8b88ebbcb45efe31cbe7d06fd6abc0a"
}

Prisma.PrismaClientKnownRequestError = () => {
  throw new Error(`PrismaClientKnownRequestError is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)};
Prisma.PrismaClientUnknownRequestError = () => {
  throw new Error(`PrismaClientUnknownRequestError is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientRustPanicError = () => {
  throw new Error(`PrismaClientRustPanicError is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientInitializationError = () => {
  throw new Error(`PrismaClientInitializationError is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientValidationError = () => {
  throw new Error(`PrismaClientValidationError is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.NotFoundError = () => {
  throw new Error(`NotFoundError is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = () => {
  throw new Error(`sqltag is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.empty = () => {
  throw new Error(`empty is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.join = () => {
  throw new Error(`join is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.raw = () => {
  throw new Error(`raw is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = () => {
  throw new Error(`Extensions.getExtensionContext is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.defineExtension = () => {
  throw new Error(`Extensions.defineExtension is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}

/**
 * Enums
 */

exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});

exports.Prisma.UserScalarFieldEnum = {
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

exports.Prisma.AddressScalarFieldEnum = {
  id: 'id',
  street: 'street',
  city: 'city',
  state: 'state',
  zipCode: 'zipCode',
  userId: 'userId'
};

exports.Prisma.ProductScalarFieldEnum = {
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

exports.Prisma.CartProductScalarFieldEnum = {
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

exports.Prisma.FavoriteScalarFieldEnum = {
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

exports.Prisma.OrderScalarFieldEnum = {
  id: 'id',
  subTotal: 'subTotal',
  quantity: 'quantity',
  shipping: 'shipping',
  discount: 'discount',
  total: 'total',
  userId: 'userId',
  createdAt: 'createdAt'
};

exports.Prisma.OrderedProductScalarFieldEnum = {
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

exports.Prisma.PaymentDetailScalarFieldEnum = {
  id: 'id',
  razorpayOrderId: 'razorpayOrderId',
  razorpayPaymentId: 'razorpayPaymentId',
  orderId: 'orderId'
};

exports.Prisma.ShippingDetailScalarFieldEnum = {
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

exports.Prisma.LocationScalarFieldEnum = {
  id: 'id',
  lat: 'lat',
  long: 'long'
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.JsonNullValueInput = {
  JsonNull: Prisma.JsonNull
};

exports.Prisma.QueryMode = {
  default: 'default',
  insensitive: 'insensitive'
};

exports.Prisma.NullsOrder = {
  first: 'first',
  last: 'last'
};

exports.Prisma.JsonNullValueFilter = {
  DbNull: Prisma.DbNull,
  JsonNull: Prisma.JsonNull,
  AnyNull: Prisma.AnyNull
};


exports.Prisma.ModelName = {
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

/**
 * This is a stub Prisma Client that will error at runtime if called.
 */
class PrismaClient {
  constructor() {
    return new Proxy(this, {
      get(target, prop) {
        const runtime = detectRuntime()
        const edgeRuntimeName = {
          'workerd': 'Cloudflare Workers',
          'deno': 'Deno and Deno Deploy',
          'netlify': 'Netlify Edge Functions',
          'edge-light': 'Vercel Edge Functions',
        }[runtime]

        let message = 'PrismaClient is unable to run in '
        if (edgeRuntimeName !== undefined) {
          message += edgeRuntimeName + '. As an alternative, try Accelerate: https://pris.ly/d/accelerate.'
        } else {
          message += 'this browser environment, or has been bundled for the browser (running in `' + runtime + '`).'
        }
        
        message += `
If this is unexpected, please open an issue: https://github.com/prisma/prisma/issues`

        throw new Error(message)
      }
    })
  }
}

exports.PrismaClient = PrismaClient

Object.assign(exports, Prisma)
