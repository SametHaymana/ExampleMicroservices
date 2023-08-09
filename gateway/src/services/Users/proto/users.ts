/* eslint-disable */
import {
  CallOptions,
  ChannelCredentials,
  Client,
  ClientOptions,
  ClientUnaryCall,
  handleUnaryCall,
  makeGenericClientConstructor,
  Metadata,
  ServiceError,
  UntypedServiceImplementation,
} from "@grpc/grpc-js";
import _m0 from "protobufjs/minimal";

export interface Users {
  id: string;
  name: string;
  surname: string;
  email: string;
  password: string;
  type: number;
}

export interface getAllIput {
  page: number;
  pageSize: number;
}

export interface getAllOutput {
  users: Users[];
}

export interface getByIdInput {
  id: string;
}

export interface getByIdOutput {
  user?: Users | undefined;
}

function createBaseUsers(): Users {
  return { id: "", name: "", surname: "", email: "", password: "", type: 0 };
}

export const Users = {
  encode(message: Users, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.surname !== "") {
      writer.uint32(26).string(message.surname);
    }
    if (message.email !== "") {
      writer.uint32(34).string(message.email);
    }
    if (message.password !== "") {
      writer.uint32(42).string(message.password);
    }
    if (message.type !== 0) {
      writer.uint32(48).int32(message.type);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Users {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUsers();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.id = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.name = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.surname = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.email = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.password = reader.string();
          continue;
        case 6:
          if (tag !== 48) {
            break;
          }

          message.type = reader.int32();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Users {
    return {
      id: isSet(object.id) ? String(object.id) : "",
      name: isSet(object.name) ? String(object.name) : "",
      surname: isSet(object.surname) ? String(object.surname) : "",
      email: isSet(object.email) ? String(object.email) : "",
      password: isSet(object.password) ? String(object.password) : "",
      type: isSet(object.type) ? Number(object.type) : 0,
    };
  },

  toJSON(message: Users): unknown {
    const obj: any = {};
    if (message.id !== "") {
      obj.id = message.id;
    }
    if (message.name !== "") {
      obj.name = message.name;
    }
    if (message.surname !== "") {
      obj.surname = message.surname;
    }
    if (message.email !== "") {
      obj.email = message.email;
    }
    if (message.password !== "") {
      obj.password = message.password;
    }
    if (message.type !== 0) {
      obj.type = Math.round(message.type);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Users>, I>>(base?: I): Users {
    return Users.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Users>, I>>(object: I): Users {
    const message = createBaseUsers();
    message.id = object.id ?? "";
    message.name = object.name ?? "";
    message.surname = object.surname ?? "";
    message.email = object.email ?? "";
    message.password = object.password ?? "";
    message.type = object.type ?? 0;
    return message;
  },
};

function createBasegetAllIput(): getAllIput {
  return { page: 0, pageSize: 0 };
}

export const getAllIput = {
  encode(message: getAllIput, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.page !== 0) {
      writer.uint32(8).int32(message.page);
    }
    if (message.pageSize !== 0) {
      writer.uint32(16).int32(message.pageSize);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): getAllIput {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasegetAllIput();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.page = reader.int32();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.pageSize = reader.int32();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): getAllIput {
    return {
      page: isSet(object.page) ? Number(object.page) : 0,
      pageSize: isSet(object.pageSize) ? Number(object.pageSize) : 0,
    };
  },

  toJSON(message: getAllIput): unknown {
    const obj: any = {};
    if (message.page !== 0) {
      obj.page = Math.round(message.page);
    }
    if (message.pageSize !== 0) {
      obj.pageSize = Math.round(message.pageSize);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<getAllIput>, I>>(base?: I): getAllIput {
    return getAllIput.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<getAllIput>, I>>(object: I): getAllIput {
    const message = createBasegetAllIput();
    message.page = object.page ?? 0;
    message.pageSize = object.pageSize ?? 0;
    return message;
  },
};

function createBasegetAllOutput(): getAllOutput {
  return { users: [] };
}

export const getAllOutput = {
  encode(message: getAllOutput, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.users) {
      Users.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): getAllOutput {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasegetAllOutput();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.users.push(Users.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): getAllOutput {
    return { users: Array.isArray(object?.users) ? object.users.map((e: any) => Users.fromJSON(e)) : [] };
  },

  toJSON(message: getAllOutput): unknown {
    const obj: any = {};
    if (message.users?.length) {
      obj.users = message.users.map((e) => Users.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<getAllOutput>, I>>(base?: I): getAllOutput {
    return getAllOutput.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<getAllOutput>, I>>(object: I): getAllOutput {
    const message = createBasegetAllOutput();
    message.users = object.users?.map((e) => Users.fromPartial(e)) || [];
    return message;
  },
};

function createBasegetByIdInput(): getByIdInput {
  return { id: "" };
}

export const getByIdInput = {
  encode(message: getByIdInput, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): getByIdInput {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasegetByIdInput();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.id = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): getByIdInput {
    return { id: isSet(object.id) ? String(object.id) : "" };
  },

  toJSON(message: getByIdInput): unknown {
    const obj: any = {};
    if (message.id !== "") {
      obj.id = message.id;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<getByIdInput>, I>>(base?: I): getByIdInput {
    return getByIdInput.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<getByIdInput>, I>>(object: I): getByIdInput {
    const message = createBasegetByIdInput();
    message.id = object.id ?? "";
    return message;
  },
};

function createBasegetByIdOutput(): getByIdOutput {
  return { user: undefined };
}

export const getByIdOutput = {
  encode(message: getByIdOutput, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.user !== undefined) {
      Users.encode(message.user, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): getByIdOutput {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasegetByIdOutput();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.user = Users.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): getByIdOutput {
    return { user: isSet(object.user) ? Users.fromJSON(object.user) : undefined };
  },

  toJSON(message: getByIdOutput): unknown {
    const obj: any = {};
    if (message.user !== undefined) {
      obj.user = Users.toJSON(message.user);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<getByIdOutput>, I>>(base?: I): getByIdOutput {
    return getByIdOutput.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<getByIdOutput>, I>>(object: I): getByIdOutput {
    const message = createBasegetByIdOutput();
    message.user = (object.user !== undefined && object.user !== null) ? Users.fromPartial(object.user) : undefined;
    return message;
  },
};

export type UserServiceService = typeof UserServiceService;
export const UserServiceService = {
  getAll: {
    path: "/UserService/getAll",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: getAllIput) => Buffer.from(getAllIput.encode(value).finish()),
    requestDeserialize: (value: Buffer) => getAllIput.decode(value),
    responseSerialize: (value: getAllOutput) => Buffer.from(getAllOutput.encode(value).finish()),
    responseDeserialize: (value: Buffer) => getAllOutput.decode(value),
  },
  getById: {
    path: "/UserService/getById",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: getByIdInput) => Buffer.from(getByIdInput.encode(value).finish()),
    requestDeserialize: (value: Buffer) => getByIdInput.decode(value),
    responseSerialize: (value: getByIdOutput) => Buffer.from(getByIdOutput.encode(value).finish()),
    responseDeserialize: (value: Buffer) => getByIdOutput.decode(value),
  },
} as const;

export interface UserServiceServer extends UntypedServiceImplementation {
  getAll: handleUnaryCall<getAllIput, getAllOutput>;
  getById: handleUnaryCall<getByIdInput, getByIdOutput>;
}

export interface UserServiceClient extends Client {
  getAll(request: getAllIput, callback: (error: ServiceError | null, response: getAllOutput) => void): ClientUnaryCall;
  getAll(
    request: getAllIput,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: getAllOutput) => void,
  ): ClientUnaryCall;
  getAll(
    request: getAllIput,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: getAllOutput) => void,
  ): ClientUnaryCall;
  getById(
    request: getByIdInput,
    callback: (error: ServiceError | null, response: getByIdOutput) => void,
  ): ClientUnaryCall;
  getById(
    request: getByIdInput,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: getByIdOutput) => void,
  ): ClientUnaryCall;
  getById(
    request: getByIdInput,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: getByIdOutput) => void,
  ): ClientUnaryCall;
}

export const UserServiceClient = makeGenericClientConstructor(UserServiceService, "UserService") as unknown as {
  new (address: string, credentials: ChannelCredentials, options?: Partial<ClientOptions>): UserServiceClient;
  service: typeof UserServiceService;
};

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

type DeepPartial<T> = T extends Builtin ? T
  : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
type Exact<P, I extends P> = P extends Builtin ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & { [K in Exclude<keyof I, KeysOfUnion<P>>]: never };

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
