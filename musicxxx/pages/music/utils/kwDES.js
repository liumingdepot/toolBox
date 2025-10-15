
// 64位整数处理工具（兼容浏览器）
const Long = (n) => {
  const bN = BigInt(n);

  return {
    low: Number(bN),
    valueOf: () => bN.valueOf(),
    toString: () => bN.toString(),
    not: () => Long(~bN),
    isNegative: () => bN < 0,
    or: (x) => Long(bN | BigInt(x)),
    and: (x) => Long(bN & BigInt(x)),
    xor: (x) => Long(bN ^ BigInt(x)),
    equals: (x) => bN === BigInt(x),
    multiply: (x) => Long(bN * BigInt(x)),
    shiftLeft: (x) => Long(bN << BigInt(x)),
    shiftRight: (x) => Long(bN >> BigInt(x)),
  };
};

// 工具函数：生成 0~n-1 的数组
const range = (n) => Array.from(new Array(n).keys());

// 工具函数：计算幂（base 的 index 次方，返回 Long 类型）
const power = (base, index) =>
  Array(index)
    .fill(null)
    .reduce((result) => result.multiply(base), Long(1));

// 工具函数：将数组转为 Long 类型数组（处理 -1 特殊值）
const LongArray = (...array) =>
  array.map((n) => (n === -1 ? Long(-1) : Long(n)));

// ------------------------------ DES 算法核心常量 ------------------------------
// E盒扩展表
const arrayE = LongArray(
  31, 0, 1, 2, 3, 4, -1, -1, 3, 4, 5, 6, 7, 8, -1, -1,
  7, 8, 9, 10, 11, 12, -1, -1, 11, 12, 13, 14, 15, 16, -1, -1,
  15, 16, 17, 18, 19, 20, -1, -1, 19, 20, 21, 22, 23, 24, -1, -1,
  23, 24, 25, 26, 27, 28, -1, -1, 27, 28, 29, 30, 31, 30, -1, -1
);

// IP初始置换表
const arrayIP = LongArray(
  57, 49, 41, 33, 25, 17, 9, 1, 59, 51, 43, 35, 27, 19, 11, 3,
  61, 53, 45, 37, 29, 21, 13, 5, 63, 55, 47, 39, 31, 23, 15, 7,
  56, 48, 40, 32, 24, 16, 8, 0, 58, 50, 42, 34, 26, 18, 10, 2,
  60, 52, 44, 36, 28, 20, 12, 4, 62, 54, 46, 38, 30, 22, 14, 6
);

// IP逆置换表
const arrayIP_1 = LongArray(
  39, 7, 47, 15, 55, 23, 63, 31, 38, 6, 46, 14, 54, 22, 62, 30,
  37, 5, 45, 13, 53, 21, 61, 29, 36, 4, 44, 12, 52, 20, 60, 28,
  35, 3, 43, 11, 51, 19, 59, 27, 34, 2, 42, 10, 50, 18, 58, 26,
  33, 1, 41, 9, 49, 17, 57, 25, 32, 0, 40, 8, 48, 16, 56, 24
);

// 子密钥循环左移位数表
const arrayLs = [1, 1, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 1];

// 循环左移掩码表
const arrayLsMask = LongArray(0, 0x100001, 0x300003);

// 64位掩码数组（用于位运算）
const arrayMask = range(64).map((n) => power(2, n));
arrayMask[arrayMask.length - 1] = arrayMask[arrayMask.length - 1].multiply(-1);

// P盒置换表
const arrayP = LongArray(
  15, 6, 19, 20, 28, 11, 27, 16, 0, 14, 22, 25, 4, 17, 30, 9,
  1, 7, 23, 13, 31, 26, 2, 8, 18, 12, 29, 5, 21, 10, 3, 24
);

// PC-1密钥置换表（56位）
const arrayPC_1 = LongArray(
  56, 48, 40, 32, 24, 16, 8, 0, 57, 49, 41, 33, 25, 17, 9, 1,
  58, 50, 42, 34, 26, 18, 10, 2, 59, 51, 43, 35, 62, 54, 46, 38,
  30, 22, 14, 6, 61, 53, 45, 37, 29, 21, 13, 5, 60, 52, 44, 36,
  28, 20, 12, 4, 27, 19, 11, 3
);

// PC-2密钥置换表（48位）
const arrayPC_2 = LongArray(
  13, 16, 10, 23, 0, 4, -1, -1, 2, 27, 14, 5, 20, 9, -1, -1,
  22, 18, 11, 3, 25, 7, -1, -1, 15, 6, 26, 19, 12, 1, -1, -1,
  40, 51, 30, 36, 46, 54, -1, -1, 29, 39, 50, 44, 32, 47, -1, -1,
  43, 48, 38, 55, 33, 52, -1, -1, 45, 41, 49, 35, 28, 31, -1, -1
);

// S盒矩阵（8个S盒，用于非线性变换）
const matrixNSBox = [
  [14,4,3,15,2,13,5,3,13,14,6,9,11,2,0,5,4,1,10,12,15,6,9,10,1,8,12,7,8,11,7,0,0,15,10,5,14,4,9,10,7,8,12,3,13,1,3,6,15,12,6,11,2,9,5,0,4,2,11,14,1,7,8,13],
  [15,0,9,5,6,10,12,9,8,7,2,12,3,13,5,2,1,14,7,8,11,4,0,3,14,11,13,6,4,1,10,15,3,13,12,11,15,3,6,0,4,10,1,7,8,4,11,14,13,8,0,6,2,15,9,5,7,1,10,12,14,2,5,9],
  [10,13,1,11,6,8,11,5,9,4,12,2,15,3,2,14,0,6,13,1,3,15,4,10,14,9,7,12,5,0,8,7,13,1,2,4,3,6,12,11,0,13,5,14,6,8,15,2,7,10,8,15,4,9,11,5,9,0,14,3,10,7,1,12],
  [7,10,1,15,0,12,11,5,14,9,8,3,9,7,4,8,13,6,2,1,6,11,12,2,3,0,5,14,10,13,15,4,13,3,4,9,6,10,1,12,11,0,2,5,0,13,14,2,8,15,7,4,15,1,10,7,5,6,12,11,3,8,9,14],
  [2,4,8,15,7,10,13,6,4,1,3,12,11,7,14,0,12,2,5,9,10,13,0,3,1,11,15,5,6,8,9,14,14,11,5,6,4,1,3,10,2,12,15,0,13,2,8,5,11,8,0,15,7,14,9,4,12,7,10,9,1,13,6,3],
  [12,9,0,7,9,2,14,1,10,15,3,4,6,12,5,11,1,14,13,0,2,8,7,13,15,5,4,10,8,3,11,6,10,4,6,11,7,9,0,6,4,2,13,1,9,15,3,8,15,3,1,14,12,5,11,0,2,12,14,7,5,10,8,13],
  [4,1,3,10,15,12,5,0,2,11,9,6,8,7,6,9,11,4,12,15,0,3,10,5,14,13,7,8,13,14,1,2,13,6,14,9,4,1,2,14,11,13,5,0,1,10,8,3,0,11,3,5,9,4,15,2,7,8,12,15,10,7,6,12],
  [13,7,10,0,6,9,5,15,8,4,3,10,11,14,12,5,2,11,9,6,15,12,0,3,4,1,14,13,1,2,7,8,1,2,12,15,10,4,0,3,13,14,6,9,7,8,9,6,15,1,5,12,3,10,14,5,8,7,11,0,4,13,2,11]
];

// ------------------------------ 浏览器工具函数（替代 Buffer） ------------------------------
/**
 * 字符串转 Uint8Array（替代 Buffer.from(str)）
 * @param {string} str - 输入字符串
 * @returns {Uint8Array} 对应的字节数组
 */
const strToUint8Array = (str) => {
  return new TextEncoder().encode(str);
};

/**
 * Uint8Array 转字符串（替代 buffer.toString()）
 * @param {Uint8Array} uint8Arr - 输入字节数组
 * @returns {string} 对应的字符串
 */
const uint8ArrayToStr = (uint8Arr) => {
  return new TextDecoder().decode(uint8Arr);
};


function base64_encode(str) {
  var c1, c2, c3;
  var base64EncodeChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
  var i = 0, len = str.length, string = '';

  while (i < len) {
    c1 = str.charCodeAt(i++) & 0xff;
    if (i == len) {
      string += base64EncodeChars.charAt(c1 >> 2);
      string += base64EncodeChars.charAt((c1 & 0x3) << 4);
      string += "==";
      break;
    }
    c2 = str.charCodeAt(i++);
    if (i == len) {
      string += base64EncodeChars.charAt(c1 >> 2);
      string += base64EncodeChars.charAt(((c1 & 0x3) << 4) | ((c2 & 0xF0) >> 4));
      string += base64EncodeChars.charAt((c2 & 0xF) << 2);
      string += "=";
      break;
    }
    c3 = str.charCodeAt(i++);
    string += base64EncodeChars.charAt(c1 >> 2);
    string += base64EncodeChars.charAt(((c1 & 0x3) << 4) | ((c2 & 0xF0) >> 4));
    string += base64EncodeChars.charAt(((c2 & 0xF) << 2) | ((c3 & 0xC0) >> 6));
    string += base64EncodeChars.charAt(c3 & 0x3F)
  }
  return string
}


/**
 * Uint8Array 转 Base64（替代 buffer.toString('base64')）
 * @param {Uint8Array} uint8Arr - 输入字节数组
 * @returns {string} Base64 编码字符串
 */
const uint8ArrayToBase64 = (uint8Arr) => {
  // 先转成二进制字符串
  const binaryStr = Array.from(uint8Arr).map(byte => String.fromCharCode(byte)).join('');
  // 再转 Base64（浏览器原生 btoa）
  return base64_encode(binaryStr);
};

/**
 * Base64 转 Uint8Array（替代 Buffer.from(base64, 'base64')）
 * @param {string} base64Str - 输入 Base64 字符串
 * @returns {Uint8Array} 对应的字节数组
 */
const base64ToUint8Array = (base64Str) => {
  // 先解码 Base64 成二进制字符串（浏览器原生 atob）
  const binaryStr = atob(base64Str);
  // 再转 Uint8Array
  const uint8Arr = new Uint8Array(binaryStr.length);
  for (let i = 0; i < binaryStr.length; i++) {
    uint8Arr[i] = binaryStr.charCodeAt(i);
  }
  return uint8Arr;
};

// ------------------------------ DES 算法核心函数 ------------------------------
/**
 * 位变换：根据置换表对输入进行位重排
 * @param {Long[]} arrInt - 置换表（元素为 Long 类型）
 * @param {number} n - 置换表长度
 * @param {Long} l - 输入的 64 位数据（Long 类型）
 * @returns {Long} 变换后的 64 位数据
 */
const bitTransform = (arrInt, n, l) => {
  let l2 = Long(0);
  range(n).forEach((i) => {
    // 跳过置换表中的 -1（无效位）
    if (arrInt[i].isNegative() || l.and(arrayMask[arrInt[i].low]).equals(0)) {
      return;
    }
    l2 = l2.or(arrayMask[i]);
  });
  return l2;
};

/**
 * DES 单轮 64 位加密/解密
 * @param {Long[]} longs - 子密钥数组
 * @param {Long} l - 64位输入数据
 * @returns {Long} 64位输出数据
 */
const DES64 = (longs, l) => {
  const pR = range(8).map(() => Long(0));
  const pSource = [Long(0), Long(0)];
  let L = Long(0);
  let R = Long(0);
  let out = bitTransform(arrayIP, 64, l);
  pSource[0] = out.and(0xffffffff);
  pSource[1] = out.and(-4294967296).shiftRight(32);

  range(16).forEach((i) => {
    let SOut = Long(0);

    R = Long(pSource[1]);
    R = bitTransform(arrayE, 64, R);
    R = R.xor(longs[i]);
    range(8).forEach((j) => {
      pR[j] = R.shiftRight(j * 8).and(255);
    });
    range(8)
      .reverse()
      .forEach((sbi) => {
        SOut = SOut.shiftLeft(4).or(matrixNSBox[sbi][pR[sbi]]);
      });
    R = bitTransform(arrayP, 32, SOut);
    L = Long(pSource[0]);
    pSource[0] = Long(pSource[1]);
    pSource[1] = L.xor(R);
  });
  pSource.reverse();
  out = pSource[1]
    .shiftLeft(32)
    .and(-4294967296)
    .or(pSource[0].and(0xffffffff));
  out = bitTransform(arrayIP_1, 64, out);
  return out;
};

/**
 * 生成子密钥
 * @param {Long} l - 64位密钥
 * @param {Long[]} longs - 存储子密钥的数组
 * @param {number} n - 模式：0-加密，1-解密
 */
const subKeys = (l, longs, n) => {
  let l2 = bitTransform(arrayPC_1, 56, l);
  range(16).forEach((i) => {
    l2 = l2
      .and(arrayLsMask[arrayLs[i]])
      .shiftLeft(28 - arrayLs[i])
      .or(l2.and(arrayLsMask[arrayLs[i]].not()).shiftRight(arrayLs[i]));
    longs[i] = bitTransform(arrayPC_2, 64, l2);
  });
  if (n === 1) {
    range(8).forEach((j) => {
      [longs[j], longs[15 - j]] = [longs[15 - j], longs[j]];
    });
  }
};

/**
 * 加密/解密核心函数
 * @param {Uint8Array} msg - 输入数据（字节数组）
 * @param {Uint8Array} key - 密钥（字节数组）
 * @param {number} mode - 模式：0-加密，1-解密
 * @returns {Uint8Array} 处理后的字节数组
 */
const crypt = (msg, key, mode) => {
  // 处理密钥块
  let l = Long(0);
  range(8).forEach((i) => {
    l = Long(key[i])
      .shiftLeft(i * 8)
      .or(l);
  });

  const j = Math.floor(msg.length / 8);
  // arrLong1 存放的是转换后的密钥块, 在解密时只需要把这个密钥块反转就行了
  const arrLong1 = range(16).map(() => Long(0));
  subKeys(l, arrLong1, mode);

  // arrLong2 存放的是前部分的明文
  const arrLong2 = range(j).map(() => Long(0));

  range(j).forEach((m) => {
    range(8).forEach((n) => {
      arrLong2[m] = Long(msg[n + m * 8])
        .shiftLeft(n * 8)
        .or(arrLong2[m]);
    });
  });

  // 用于存放密文
  const arrLong3 = range(Math.floor((1 + 8 * (j + 1)) / 8)).map(() =>
    Long(0)
  );

  // 计算前部的数据块(除了最后一部分)
  range(j).forEach((i1) => {
    arrLong3[i1] = DES64(arrLong1, arrLong2[i1]);
  });

  // 保存多出来的字节
  const arrByte1 = msg.slice(j * 8);
  let l2 = Long(0);

  range(msg.length % 8).forEach((i1) => {
    l2 = Long(arrByte1[i1])
      .shiftLeft(i1 * 8)
      .or(l2);
  });

  // 计算多出的那一位(最后一位)
  if (arrByte1.length || mode === 0) arrLong3[j] = DES64(arrLong1, l2); // 解密不需要

  // 将密文转为字节型
  const arrByte2 = range(8 * arrLong3.length).map(() => 0);
  let i4 = 0;
  arrLong3.forEach((l3) => {
    range(8).forEach((i6) => {
      arrByte2[i4] = l3.shiftRight(i6 * 8).and(255).low;
      i4 += 1;
    });
  });

  // 转换为Uint8Array并返回
  return new Uint8Array(arrByte2);
};

// 固定密钥（原Buffer.from('ylzsxkwm')转换为Uint8Array）
const SECRET_KEY = strToUint8Array('ylzsxkwm');

/**
 * 加密函数
 * @param {string|Uint8Array} msg - 要加密的字符串或字节数组
 * @returns {Uint8Array} 加密后的字节数组
 */
const encrypt = (msg) => {
  const uint8Msg = typeof msg === 'string' ? strToUint8Array(msg) : msg;
  return crypt(uint8Msg, SECRET_KEY, 0);
};

/**
 * 解密函数
 * @param {Uint8Array|string} msg - 要解密的字节数组或Base64字符串
 * @returns {string} 解密后的字符串
 */
const decrypt = (msg) => {
  const uint8Msg = msg instanceof Uint8Array ? msg : base64ToUint8Array(msg);
  const decryptedBytes = crypt(uint8Msg, SECRET_KEY, 1);
  return uint8ArrayToStr(decryptedBytes);
};

/**
 * 加密查询参数并转为Base64
 * @param {string} query - 要加密的查询字符串
 * @returns {string} 加密后的Base64字符串
 */
const encryptQuery = (query) => {
  const encryptedBytes = encrypt(query);
  return uint8ArrayToBase64(encryptedBytes);
};

function parseParamsToJson(paramsStr) {
  // 按行分割字符串
  const lines = paramsStr.split('\n');
  const result = {};

  // 遍历每一行，解析键值对
  lines.forEach(line => {
    // 分割键和值
    const [key, ...valueParts] = line.split('=');
    if (key && valueParts.length > 0) {
      const value = valueParts.join('='); // 处理值中可能包含的=

      // 尝试将数值字符串转换为实际数值类型
      if (!isNaN(value) && value !== '') {
        result[key] = Number(value);
      } else {
        result[key] = value;
      }
    }
  });

  return result;
}

console.log(decrypt(`
QTTCEVWADWjGHNKyqOt6peSJECe9IlwYOThEXM42tOPYqExp4opZfbWJ5C0gNFa1OkW4nGMSzsheIv12vGKYxEQJdVWvLULOFLKP5pzBz7HwnFbScG9nzEqYy7ziI0POZX6HtnsjmNyAHKTLkfgT5/wbpgl7Nxa5/IZ+aOO5B24p3UvMNTjIzYKkGkJuUGsCeCIG8+Oaf1aZ+A4aT7or9hsRpGv5EZZnXu7we7ZPNj7MBuIYy+OSnyQ7h9PBpTpCvN5Wm7nYA5652W77PsEkq0AyTjnXztdYpv2gWTB2SyIRwzfRMnIiU2yxs2+btb06Y90o3XTg2o+34gBfrnUd7w==
`));

// 导出供浏览器使用的函数
export default {
  encrypt,
  decrypt,
  encryptQuery,
  parseParamsToJson,
};
