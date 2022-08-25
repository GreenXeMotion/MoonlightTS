// @generated by protobuf-ts 2.7.0
// @generated from protobuf file "additional.proto" (syntax proto3)
// tslint:disable
import { WireType } from "@protobuf-ts/runtime";
import type { BinaryWriteOptions } from "@protobuf-ts/runtime";
import type { IBinaryWriter } from "@protobuf-ts/runtime";
import { UnknownFieldHandler } from "@protobuf-ts/runtime";
import type { BinaryReadOptions } from "@protobuf-ts/runtime";
import type { IBinaryReader } from "@protobuf-ts/runtime";
import type { PartialMessage } from "@protobuf-ts/runtime";
import { reflectionMergePartial } from "@protobuf-ts/runtime";
import { MESSAGE_TYPE } from "@protobuf-ts/runtime";
import { MessageType } from "@protobuf-ts/runtime";
/**
 * CmdId = 4076
 *
 * @generated from protobuf message GetPlayerBlacklistReq
 */
export interface GetPlayerBlacklistReq {
}
/**
 * CmdId = 4009
 *
 * @generated from protobuf message GetPlayerFriendListReq
 */
export interface GetPlayerFriendListReq {
}
/**
 * CmdId = 279
 *
 * @generated from protobuf message EnterSceneDoneReq
 */
export interface EnterSceneDoneReq {
    /**
     * @generated from protobuf field: uint32 enter_scene_token = 13;
     */
    enterSceneToken: number;
}
/**
 * CmdId = 244
 *
 * @generated from protobuf message EnterSceneReadyReq
 */
export interface EnterSceneReadyReq {
    /**
     * @generated from protobuf field: uint32 enter_scene_token = 14;
     */
    enterSceneToken: number;
}
/**
 * CmdId = 3097
 *
 * @generated from protobuf message PostEnterSceneReq
 */
export interface PostEnterSceneReq {
    /**
     * @generated from protobuf field: uint32 enter_scene_token = 11;
     */
    enterSceneToken: number;
}
/**
 * CmdId = 3117
 *
 * @generated from protobuf message SceneDataNotify
 */
export interface SceneDataNotify {
    /**
     * @generated from protobuf field: repeated string level_config_name_list = 2;
     */
    levelConfigNameList: string[];
}
/**
 * CmdId = 237
 *
 * @generated from protobuf message SceneInitFinishReq
 */
export interface SceneInitFinishReq {
    /**
     * @generated from protobuf field: uint32 enter_scene_token = 13;
     */
    enterSceneToken: number;
}
// @generated message type with reflection information, may provide speed optimized methods
class GetPlayerBlacklistReq$Type extends MessageType<GetPlayerBlacklistReq> {
    constructor() {
        super("GetPlayerBlacklistReq", []);
    }
    create(value?: PartialMessage<GetPlayerBlacklistReq>): GetPlayerBlacklistReq {
        const message = {};
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<GetPlayerBlacklistReq>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: GetPlayerBlacklistReq): GetPlayerBlacklistReq {
        return target ?? this.create();
    }
    internalBinaryWrite(message: GetPlayerBlacklistReq, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message GetPlayerBlacklistReq
 */
export const GetPlayerBlacklistReq = new GetPlayerBlacklistReq$Type();
// @generated message type with reflection information, may provide speed optimized methods
class GetPlayerFriendListReq$Type extends MessageType<GetPlayerFriendListReq> {
    constructor() {
        super("GetPlayerFriendListReq", []);
    }
    create(value?: PartialMessage<GetPlayerFriendListReq>): GetPlayerFriendListReq {
        const message = {};
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<GetPlayerFriendListReq>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: GetPlayerFriendListReq): GetPlayerFriendListReq {
        return target ?? this.create();
    }
    internalBinaryWrite(message: GetPlayerFriendListReq, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message GetPlayerFriendListReq
 */
export const GetPlayerFriendListReq = new GetPlayerFriendListReq$Type();
// @generated message type with reflection information, may provide speed optimized methods
class EnterSceneDoneReq$Type extends MessageType<EnterSceneDoneReq> {
    constructor() {
        super("EnterSceneDoneReq", [
            { no: 13, name: "enter_scene_token", kind: "scalar", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value?: PartialMessage<EnterSceneDoneReq>): EnterSceneDoneReq {
        const message = { enterSceneToken: 0 };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<EnterSceneDoneReq>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: EnterSceneDoneReq): EnterSceneDoneReq {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* uint32 enter_scene_token */ 13:
                    message.enterSceneToken = reader.uint32();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message: EnterSceneDoneReq, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* uint32 enter_scene_token = 13; */
        if (message.enterSceneToken !== 0)
            writer.tag(13, WireType.Varint).uint32(message.enterSceneToken);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message EnterSceneDoneReq
 */
export const EnterSceneDoneReq = new EnterSceneDoneReq$Type();
// @generated message type with reflection information, may provide speed optimized methods
class EnterSceneReadyReq$Type extends MessageType<EnterSceneReadyReq> {
    constructor() {
        super("EnterSceneReadyReq", [
            { no: 14, name: "enter_scene_token", kind: "scalar", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value?: PartialMessage<EnterSceneReadyReq>): EnterSceneReadyReq {
        const message = { enterSceneToken: 0 };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<EnterSceneReadyReq>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: EnterSceneReadyReq): EnterSceneReadyReq {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* uint32 enter_scene_token */ 14:
                    message.enterSceneToken = reader.uint32();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message: EnterSceneReadyReq, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* uint32 enter_scene_token = 14; */
        if (message.enterSceneToken !== 0)
            writer.tag(14, WireType.Varint).uint32(message.enterSceneToken);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message EnterSceneReadyReq
 */
export const EnterSceneReadyReq = new EnterSceneReadyReq$Type();
// @generated message type with reflection information, may provide speed optimized methods
class PostEnterSceneReq$Type extends MessageType<PostEnterSceneReq> {
    constructor() {
        super("PostEnterSceneReq", [
            { no: 11, name: "enter_scene_token", kind: "scalar", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value?: PartialMessage<PostEnterSceneReq>): PostEnterSceneReq {
        const message = { enterSceneToken: 0 };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<PostEnterSceneReq>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: PostEnterSceneReq): PostEnterSceneReq {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* uint32 enter_scene_token */ 11:
                    message.enterSceneToken = reader.uint32();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message: PostEnterSceneReq, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* uint32 enter_scene_token = 11; */
        if (message.enterSceneToken !== 0)
            writer.tag(11, WireType.Varint).uint32(message.enterSceneToken);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message PostEnterSceneReq
 */
export const PostEnterSceneReq = new PostEnterSceneReq$Type();
// @generated message type with reflection information, may provide speed optimized methods
class SceneDataNotify$Type extends MessageType<SceneDataNotify> {
    constructor() {
        super("SceneDataNotify", [
            { no: 2, name: "level_config_name_list", kind: "scalar", repeat: 2 /*RepeatType.UNPACKED*/, T: 9 /*ScalarType.STRING*/ }
        ]);
    }
    create(value?: PartialMessage<SceneDataNotify>): SceneDataNotify {
        const message = { levelConfigNameList: [] };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<SceneDataNotify>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: SceneDataNotify): SceneDataNotify {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* repeated string level_config_name_list */ 2:
                    message.levelConfigNameList.push(reader.string());
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message: SceneDataNotify, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* repeated string level_config_name_list = 2; */
        for (let i = 0; i < message.levelConfigNameList.length; i++)
            writer.tag(2, WireType.LengthDelimited).string(message.levelConfigNameList[i]);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message SceneDataNotify
 */
export const SceneDataNotify = new SceneDataNotify$Type();
// @generated message type with reflection information, may provide speed optimized methods
class SceneInitFinishReq$Type extends MessageType<SceneInitFinishReq> {
    constructor() {
        super("SceneInitFinishReq", [
            { no: 13, name: "enter_scene_token", kind: "scalar", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value?: PartialMessage<SceneInitFinishReq>): SceneInitFinishReq {
        const message = { enterSceneToken: 0 };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<SceneInitFinishReq>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: SceneInitFinishReq): SceneInitFinishReq {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* uint32 enter_scene_token */ 13:
                    message.enterSceneToken = reader.uint32();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message: SceneInitFinishReq, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* uint32 enter_scene_token = 13; */
        if (message.enterSceneToken !== 0)
            writer.tag(13, WireType.Varint).uint32(message.enterSceneToken);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message SceneInitFinishReq
 */
export const SceneInitFinishReq = new SceneInitFinishReq$Type();
