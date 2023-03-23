import protobuf from 'protobufjs'
const ResultProto = require('../proto/result.json')
const ResultRoot = protobuf.Root.fromJSON(ResultProto)
export function isArrayBuffer(obj) {
  return Object.prototype.toString.call(obj) === '[object ArrayBuffer]'
}
export function transformPBReq(params, headers, reqType, protoRoot) {
  // 加载 proto json，初始化 protobuf 对象
  const Root = protobuf.Root.fromJSON(protoRoot)
  // 获取消息体类型
  const Message = Root.lookupType(reqType)
  // 创建新消息
  const message = Message.create(params)
  // headers.params = params
  // 将消息编码到 Uint8Array（浏览器）或 Buffer（节点）
  const data = Message.encode(message).finish()
  return data;
}
export function transformPBRes(data, resType, protoRoot) {
  if (data === null || !isArrayBuffer(data)) {
    return data
  }
  const Root = protobuf.Root.fromJSON(protoRoot)

  // 获取消息体类型
  const Message = Root.lookup(resType)

  // 创建新消息
  const buffer = protobuf.util.newBuffer(data)
  
  // 获取消息体类型 Result
  const Result = ResultRoot.lookup('Result')

  // 将消息 Uint8Array（浏览器）或 Buffer（节点）编码到 result object
  const result = Result.decode(buffer)
  
  if (result.data){
    result.data.value = Message.decode(result.data.value)
    result.data.value = Message.toObject(result.data.value, {
      defaults: true, // includes default values
      arrays: true, // populates empty arrays (repeated fields) even if defaults=false
      objects: true, // populates empty objects (map fields) even if defaults=false
      oneofs: true // includes virtual oneof fields set to the present field's name
    })
  }
  return result
}