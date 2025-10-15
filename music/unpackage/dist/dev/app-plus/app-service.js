if (typeof Promise !== "undefined" && !Promise.prototype.finally) {
  Promise.prototype.finally = function(callback) {
    const promise = this.constructor;
    return this.then(
      (value) => promise.resolve(callback()).then(() => value),
      (reason) => promise.resolve(callback()).then(() => {
        throw reason;
      })
    );
  };
}
;
if (typeof uni !== "undefined" && uni && uni.requireGlobal) {
  const global2 = uni.requireGlobal();
  ArrayBuffer = global2.ArrayBuffer;
  Int8Array = global2.Int8Array;
  Uint8Array = global2.Uint8Array;
  Uint8ClampedArray = global2.Uint8ClampedArray;
  Int16Array = global2.Int16Array;
  Uint16Array = global2.Uint16Array;
  Int32Array = global2.Int32Array;
  Uint32Array = global2.Uint32Array;
  Float32Array = global2.Float32Array;
  Float64Array = global2.Float64Array;
  BigInt64Array = global2.BigInt64Array;
  BigUint64Array = global2.BigUint64Array;
}
;
if (uni.restoreGlobal) {
  uni.restoreGlobal(Vue, weex, plus, setTimeout, clearTimeout, setInterval, clearInterval);
}
(function(vue) {
  "use strict";
  const ON_HIDE = "onHide";
  const ON_LOAD = "onLoad";
  const ON_UNLOAD = "onUnload";
  function formatAppLog(type, filename, ...args) {
    if (uni.__log__) {
      uni.__log__(type, filename, ...args);
    } else {
      console[type].apply(console, [...args, filename]);
    }
  }
  function resolveEasycom(component, easycom) {
    return typeof component === "string" ? easycom : component;
  }
  const createLifeCycleHook = (lifecycle, flag = 0) => (hook, target = vue.getCurrentInstance()) => {
    !vue.isInSSRComponentSetup && vue.injectHook(lifecycle, hook, target);
  };
  const onHide = /* @__PURE__ */ createLifeCycleHook(
    ON_HIDE,
    1 | 2
    /* HookFlags.PAGE */
  );
  const onLoad = /* @__PURE__ */ createLifeCycleHook(
    ON_LOAD,
    2
    /* HookFlags.PAGE */
  );
  const onUnload = /* @__PURE__ */ createLifeCycleHook(
    ON_UNLOAD,
    2
    /* HookFlags.PAGE */
  );
  const _export_sfc = (sfc, props) => {
    const target = sfc.__vccOpts || sfc;
    for (const [key, val] of props) {
      target[key] = val;
    }
    return target;
  };
  const _sfc_main$w = {
    __name: "header",
    props: {
      "modelValue": {},
      "modelModifiers": {}
    },
    emits: ["update:modelValue"],
    setup(__props, { expose: __expose }) {
      __expose();
      const model = vue.useModel(__props, "modelValue");
      const navs2 = [
        { name: "搜索", id: 0 },
        { name: "推荐", id: 1 },
        { name: "排行榜", id: 2 },
        { name: "歌单", id: 3 }
      ];
      const __returned__ = { model, navs: navs2 };
      Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
      return __returned__;
    }
  };
  function _sfc_render$v(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "header" }, [
      vue.createElementVNode("view", { class: "status_bar" }),
      vue.createElementVNode("view", { class: "navs" }, [
        (vue.openBlock(), vue.createElementBlock(
          vue.Fragment,
          null,
          vue.renderList($setup.navs, (item) => {
            return vue.createElementVNode("view", {
              key: item.id,
              class: vue.normalizeClass(["item", { active: $setup.model === item.id }]),
              onClick: ($event) => $setup.model = item.id
            }, vue.toDisplayString(item.name), 11, ["onClick"]);
          }),
          64
          /* STABLE_FRAGMENT */
        ))
      ])
    ]);
  }
  const Header$1 = /* @__PURE__ */ _export_sfc(_sfc_main$w, [["render", _sfc_render$v], ["__scopeId", "data-v-d64c3fe4"], ["__file", "E:/dome/music/pages/music/model/header.vue"]]);
  const axios = (option) => {
    return uni.request({
      url: option.url,
      data: option.data,
      header: option.header,
      method: option.method || "GET",
      dataType: "json"
    }).then((res) => {
      return res.data;
    });
  };
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
      shiftRight: (x) => Long(bN >> BigInt(x))
    };
  };
  const range = (n) => Array.from(new Array(n).keys());
  const power = (base, index) => Array(index).fill(null).reduce((result) => result.multiply(base), Long(1));
  const LongArray = (...array) => array.map((n) => n === -1 ? Long(-1) : Long(n));
  const arrayE = LongArray(
    31,
    0,
    1,
    2,
    3,
    4,
    -1,
    -1,
    3,
    4,
    5,
    6,
    7,
    8,
    -1,
    -1,
    7,
    8,
    9,
    10,
    11,
    12,
    -1,
    -1,
    11,
    12,
    13,
    14,
    15,
    16,
    -1,
    -1,
    15,
    16,
    17,
    18,
    19,
    20,
    -1,
    -1,
    19,
    20,
    21,
    22,
    23,
    24,
    -1,
    -1,
    23,
    24,
    25,
    26,
    27,
    28,
    -1,
    -1,
    27,
    28,
    29,
    30,
    31,
    30,
    -1,
    -1
  );
  const arrayIP = LongArray(
    57,
    49,
    41,
    33,
    25,
    17,
    9,
    1,
    59,
    51,
    43,
    35,
    27,
    19,
    11,
    3,
    61,
    53,
    45,
    37,
    29,
    21,
    13,
    5,
    63,
    55,
    47,
    39,
    31,
    23,
    15,
    7,
    56,
    48,
    40,
    32,
    24,
    16,
    8,
    0,
    58,
    50,
    42,
    34,
    26,
    18,
    10,
    2,
    60,
    52,
    44,
    36,
    28,
    20,
    12,
    4,
    62,
    54,
    46,
    38,
    30,
    22,
    14,
    6
  );
  const arrayIP_1 = LongArray(
    39,
    7,
    47,
    15,
    55,
    23,
    63,
    31,
    38,
    6,
    46,
    14,
    54,
    22,
    62,
    30,
    37,
    5,
    45,
    13,
    53,
    21,
    61,
    29,
    36,
    4,
    44,
    12,
    52,
    20,
    60,
    28,
    35,
    3,
    43,
    11,
    51,
    19,
    59,
    27,
    34,
    2,
    42,
    10,
    50,
    18,
    58,
    26,
    33,
    1,
    41,
    9,
    49,
    17,
    57,
    25,
    32,
    0,
    40,
    8,
    48,
    16,
    56,
    24
  );
  const arrayLs = [1, 1, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 1];
  const arrayLsMask = LongArray(0, 1048577, 3145731);
  const arrayMask = range(64).map((n) => power(2, n));
  arrayMask[arrayMask.length - 1] = arrayMask[arrayMask.length - 1].multiply(-1);
  const arrayP = LongArray(
    15,
    6,
    19,
    20,
    28,
    11,
    27,
    16,
    0,
    14,
    22,
    25,
    4,
    17,
    30,
    9,
    1,
    7,
    23,
    13,
    31,
    26,
    2,
    8,
    18,
    12,
    29,
    5,
    21,
    10,
    3,
    24
  );
  const arrayPC_1 = LongArray(
    56,
    48,
    40,
    32,
    24,
    16,
    8,
    0,
    57,
    49,
    41,
    33,
    25,
    17,
    9,
    1,
    58,
    50,
    42,
    34,
    26,
    18,
    10,
    2,
    59,
    51,
    43,
    35,
    62,
    54,
    46,
    38,
    30,
    22,
    14,
    6,
    61,
    53,
    45,
    37,
    29,
    21,
    13,
    5,
    60,
    52,
    44,
    36,
    28,
    20,
    12,
    4,
    27,
    19,
    11,
    3
  );
  const arrayPC_2 = LongArray(
    13,
    16,
    10,
    23,
    0,
    4,
    -1,
    -1,
    2,
    27,
    14,
    5,
    20,
    9,
    -1,
    -1,
    22,
    18,
    11,
    3,
    25,
    7,
    -1,
    -1,
    15,
    6,
    26,
    19,
    12,
    1,
    -1,
    -1,
    40,
    51,
    30,
    36,
    46,
    54,
    -1,
    -1,
    29,
    39,
    50,
    44,
    32,
    47,
    -1,
    -1,
    43,
    48,
    38,
    55,
    33,
    52,
    -1,
    -1,
    45,
    41,
    49,
    35,
    28,
    31,
    -1,
    -1
  );
  const matrixNSBox = [
    [14, 4, 3, 15, 2, 13, 5, 3, 13, 14, 6, 9, 11, 2, 0, 5, 4, 1, 10, 12, 15, 6, 9, 10, 1, 8, 12, 7, 8, 11, 7, 0, 0, 15, 10, 5, 14, 4, 9, 10, 7, 8, 12, 3, 13, 1, 3, 6, 15, 12, 6, 11, 2, 9, 5, 0, 4, 2, 11, 14, 1, 7, 8, 13],
    [15, 0, 9, 5, 6, 10, 12, 9, 8, 7, 2, 12, 3, 13, 5, 2, 1, 14, 7, 8, 11, 4, 0, 3, 14, 11, 13, 6, 4, 1, 10, 15, 3, 13, 12, 11, 15, 3, 6, 0, 4, 10, 1, 7, 8, 4, 11, 14, 13, 8, 0, 6, 2, 15, 9, 5, 7, 1, 10, 12, 14, 2, 5, 9],
    [10, 13, 1, 11, 6, 8, 11, 5, 9, 4, 12, 2, 15, 3, 2, 14, 0, 6, 13, 1, 3, 15, 4, 10, 14, 9, 7, 12, 5, 0, 8, 7, 13, 1, 2, 4, 3, 6, 12, 11, 0, 13, 5, 14, 6, 8, 15, 2, 7, 10, 8, 15, 4, 9, 11, 5, 9, 0, 14, 3, 10, 7, 1, 12],
    [7, 10, 1, 15, 0, 12, 11, 5, 14, 9, 8, 3, 9, 7, 4, 8, 13, 6, 2, 1, 6, 11, 12, 2, 3, 0, 5, 14, 10, 13, 15, 4, 13, 3, 4, 9, 6, 10, 1, 12, 11, 0, 2, 5, 0, 13, 14, 2, 8, 15, 7, 4, 15, 1, 10, 7, 5, 6, 12, 11, 3, 8, 9, 14],
    [2, 4, 8, 15, 7, 10, 13, 6, 4, 1, 3, 12, 11, 7, 14, 0, 12, 2, 5, 9, 10, 13, 0, 3, 1, 11, 15, 5, 6, 8, 9, 14, 14, 11, 5, 6, 4, 1, 3, 10, 2, 12, 15, 0, 13, 2, 8, 5, 11, 8, 0, 15, 7, 14, 9, 4, 12, 7, 10, 9, 1, 13, 6, 3],
    [12, 9, 0, 7, 9, 2, 14, 1, 10, 15, 3, 4, 6, 12, 5, 11, 1, 14, 13, 0, 2, 8, 7, 13, 15, 5, 4, 10, 8, 3, 11, 6, 10, 4, 6, 11, 7, 9, 0, 6, 4, 2, 13, 1, 9, 15, 3, 8, 15, 3, 1, 14, 12, 5, 11, 0, 2, 12, 14, 7, 5, 10, 8, 13],
    [4, 1, 3, 10, 15, 12, 5, 0, 2, 11, 9, 6, 8, 7, 6, 9, 11, 4, 12, 15, 0, 3, 10, 5, 14, 13, 7, 8, 13, 14, 1, 2, 13, 6, 14, 9, 4, 1, 2, 14, 11, 13, 5, 0, 1, 10, 8, 3, 0, 11, 3, 5, 9, 4, 15, 2, 7, 8, 12, 15, 10, 7, 6, 12],
    [13, 7, 10, 0, 6, 9, 5, 15, 8, 4, 3, 10, 11, 14, 12, 5, 2, 11, 9, 6, 15, 12, 0, 3, 4, 1, 14, 13, 1, 2, 7, 8, 1, 2, 12, 15, 10, 4, 0, 3, 13, 14, 6, 9, 7, 8, 9, 6, 15, 1, 5, 12, 3, 10, 14, 5, 8, 7, 11, 0, 4, 13, 2, 11]
  ];
  const strToUint8Array = (str) => {
    return new TextEncoder().encode(str);
  };
  const uint8ArrayToStr = (uint8Arr) => {
    return new TextDecoder().decode(uint8Arr);
  };
  function base64_encode(str) {
    var c1, c2, c3;
    var base64EncodeChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
    var i = 0, len = str.length, string = "";
    while (i < len) {
      c1 = str.charCodeAt(i++) & 255;
      if (i == len) {
        string += base64EncodeChars.charAt(c1 >> 2);
        string += base64EncodeChars.charAt((c1 & 3) << 4);
        string += "==";
        break;
      }
      c2 = str.charCodeAt(i++);
      if (i == len) {
        string += base64EncodeChars.charAt(c1 >> 2);
        string += base64EncodeChars.charAt((c1 & 3) << 4 | (c2 & 240) >> 4);
        string += base64EncodeChars.charAt((c2 & 15) << 2);
        string += "=";
        break;
      }
      c3 = str.charCodeAt(i++);
      string += base64EncodeChars.charAt(c1 >> 2);
      string += base64EncodeChars.charAt((c1 & 3) << 4 | (c2 & 240) >> 4);
      string += base64EncodeChars.charAt((c2 & 15) << 2 | (c3 & 192) >> 6);
      string += base64EncodeChars.charAt(c3 & 63);
    }
    return string;
  }
  const uint8ArrayToBase64 = (uint8Arr) => {
    const binaryStr = Array.from(uint8Arr).map((byte) => String.fromCharCode(byte)).join("");
    return base64_encode(binaryStr);
  };
  const base64ToUint8Array = (base64Str) => {
    const binaryStr = atob(base64Str);
    const uint8Arr = new Uint8Array(binaryStr.length);
    for (let i = 0; i < binaryStr.length; i++) {
      uint8Arr[i] = binaryStr.charCodeAt(i);
    }
    return uint8Arr;
  };
  const bitTransform = (arrInt, n, l) => {
    let l2 = Long(0);
    range(n).forEach((i) => {
      if (arrInt[i].isNegative() || l.and(arrayMask[arrInt[i].low]).equals(0)) {
        return;
      }
      l2 = l2.or(arrayMask[i]);
    });
    return l2;
  };
  const DES64 = (longs, l) => {
    const pR = range(8).map(() => Long(0));
    const pSource = [Long(0), Long(0)];
    let L = Long(0);
    let R = Long(0);
    let out = bitTransform(arrayIP, 64, l);
    pSource[0] = out.and(4294967295);
    pSource[1] = out.and(-4294967296).shiftRight(32);
    range(16).forEach((i) => {
      let SOut = Long(0);
      R = Long(pSource[1]);
      R = bitTransform(arrayE, 64, R);
      R = R.xor(longs[i]);
      range(8).forEach((j) => {
        pR[j] = R.shiftRight(j * 8).and(255);
      });
      range(8).reverse().forEach((sbi) => {
        SOut = SOut.shiftLeft(4).or(matrixNSBox[sbi][pR[sbi]]);
      });
      R = bitTransform(arrayP, 32, SOut);
      L = Long(pSource[0]);
      pSource[0] = Long(pSource[1]);
      pSource[1] = L.xor(R);
    });
    pSource.reverse();
    out = pSource[1].shiftLeft(32).and(-4294967296).or(pSource[0].and(4294967295));
    out = bitTransform(arrayIP_1, 64, out);
    return out;
  };
  const subKeys = (l, longs, n) => {
    let l2 = bitTransform(arrayPC_1, 56, l);
    range(16).forEach((i) => {
      l2 = l2.and(arrayLsMask[arrayLs[i]]).shiftLeft(28 - arrayLs[i]).or(l2.and(arrayLsMask[arrayLs[i]].not()).shiftRight(arrayLs[i]));
      longs[i] = bitTransform(arrayPC_2, 64, l2);
    });
    if (n === 1) {
      range(8).forEach((j) => {
        [longs[j], longs[15 - j]] = [longs[15 - j], longs[j]];
      });
    }
  };
  const crypt = (msg, key, mode) => {
    let l = Long(0);
    range(8).forEach((i) => {
      l = Long(key[i]).shiftLeft(i * 8).or(l);
    });
    const j = Math.floor(msg.length / 8);
    const arrLong1 = range(16).map(() => Long(0));
    subKeys(l, arrLong1, mode);
    const arrLong2 = range(j).map(() => Long(0));
    range(j).forEach((m) => {
      range(8).forEach((n) => {
        arrLong2[m] = Long(msg[n + m * 8]).shiftLeft(n * 8).or(arrLong2[m]);
      });
    });
    const arrLong3 = range(Math.floor((1 + 8 * (j + 1)) / 8)).map(
      () => Long(0)
    );
    range(j).forEach((i1) => {
      arrLong3[i1] = DES64(arrLong1, arrLong2[i1]);
    });
    const arrByte1 = msg.slice(j * 8);
    let l2 = Long(0);
    range(msg.length % 8).forEach((i1) => {
      l2 = Long(arrByte1[i1]).shiftLeft(i1 * 8).or(l2);
    });
    if (arrByte1.length || mode === 0)
      arrLong3[j] = DES64(arrLong1, l2);
    const arrByte2 = range(8 * arrLong3.length).map(() => 0);
    let i4 = 0;
    arrLong3.forEach((l3) => {
      range(8).forEach((i6) => {
        arrByte2[i4] = l3.shiftRight(i6 * 8).and(255).low;
        i4 += 1;
      });
    });
    return new Uint8Array(arrByte2);
  };
  const SECRET_KEY = strToUint8Array("ylzsxkwm");
  const encrypt = (msg) => {
    const uint8Msg = typeof msg === "string" ? strToUint8Array(msg) : msg;
    return crypt(uint8Msg, SECRET_KEY, 0);
  };
  const decrypt = (msg) => {
    const uint8Msg = msg instanceof Uint8Array ? msg : base64ToUint8Array(msg);
    const decryptedBytes = crypt(uint8Msg, SECRET_KEY, 1);
    return uint8ArrayToStr(decryptedBytes);
  };
  const encryptQuery = (query) => {
    const encryptedBytes = encrypt(query);
    return uint8ArrayToBase64(encryptedBytes);
  };
  function parseParamsToJson(paramsStr) {
    const lines = paramsStr.split("\n");
    const result = {};
    lines.forEach((line) => {
      const [key, ...valueParts] = line.split("=");
      if (key && valueParts.length > 0) {
        const value = valueParts.join("=");
        if (!isNaN(value) && value !== "") {
          result[key] = Number(value);
        } else {
          result[key] = value;
        }
      }
    });
    return result;
  }
  formatAppLog("log", "at pages/music/utils/kwDES.js:395", decrypt(`
QTTCEVWADWjGHNKyqOt6peSJECe9IlwYOThEXM42tOPYqExp4opZfbWJ5C0gNFa1OkW4nGMSzsheIv12vGKYxEQJdVWvLULOFLKP5pzBz7HwnFbScG9nzEqYy7ziI0POZX6HtnsjmNyAHKTLkfgT5/wbpgl7Nxa5/IZ+aOO5B24p3UvMNTjIzYKkGkJuUGsCeCIG8+Oaf1aZ+A4aT7or9hsRpGv5EZZnXu7we7ZPNj7MBuIYy+OSnyQ7h9PBpTpCvN5Wm7nYA5652W77PsEkq0AyTjnXztdYpv2gWTB2SyIRwzfRMnIiU2yxs2+btb06Y90o3XTg2o+34gBfrnUd7w==
`));
  const kwDES = {
    encrypt,
    decrypt,
    encryptQuery,
    parseParamsToJson
  };
  const musicList = (params) => {
    return axios({
      url: `https://www.kuwo.cn/search/searchMusicBykeyWord?vipver=1&client=kt&ft=music&cluster=0&strategy=2012&encoding=utf8&rformat=json&mobi=1&issubtitle=1&show_copyright_off=1&pn=${params.num}&rn=20&all=${params.key}`
    });
  };
  const musicPhbListAll = () => {
    return axios({
      url: `http://wapi.kuwo.cn/api/pc/bang/list`
    });
  };
  const musicPhbListItem = (params) => {
    return axios({
      url: `http://kbangserver.kuwo.cn/ksong.s?from=pc&type=bang&id=${params.id}&pn=0&rn=30`
    });
  };
  const musicTjList = () => {
    return axios({
      url: `http://wapi.kuwo.cn/api/pc/classify/playlist/getRcmPlayList?pn=1&rn=99&order=hot`
    });
  };
  const musicTjListItem = (params) => {
    return axios({
      url: `https://mobilist.kuwo.cn/list.s?type=songlist&id=${params.id}&pn=0&rn=1000`
    });
  };
  const musictagList = () => {
    return axios({
      url: `https://wapi.kuwo.cn/api/pc/classify/playlist/getTagList`
    });
  };
  const musictagListDetail = (params) => {
    return axios({
      url: `http://wapi.kuwo.cn/api/pc/classify/playlist/getTagPlayList?pn=1&rn=30&id=${params.id}`
    });
  };
  const musictagListItem = (params) => {
    return axios({
      url: `https://mobilist.kuwo.cn/list.s?type=songlist&id=${params.id}&pn=0&rn=1000`
    });
  };
  const musicItem = (params) => {
    const q = kwDES.encryptQuery(`user=0&android_id=0&prod=kwplayerhd_ar_4.3.0.8&corp=kuwo&vipver=4.3.0.8&source=kwplayerhd_ar_4.3.0.8_tianbao_T1A_qirui.apk&notrace=0&type=convert_url2&br=2000&format=flac&sig=0&rid=${params.rid}&priority=bitrate&loginUid=0&network=WIFI&loginSid=0&mode=down`);
    return axios({
      url: `https://nmobi.kuwo.cn/mobi.s?f=kuwo&q=${q}`
    }).then((res) => {
      return kwDES.parseParamsToJson(res);
    });
  };
  const getlyric = (params) => {
    return axios({
      url: `https://www.kuwo.cn/openapi/v1/www/lyric/getlyric?musicId=${params.rid}&httpsStatus=1&reqId=d21938f0-9cd9-11f0-9861-2369cae1e1cc&plat=web_www&from=`
    });
  };
  class AbortablePromise {
    constructor(executor) {
      this._reject = null;
      this.promise = new Promise((resolve, reject) => {
        executor(resolve, reject);
        this._reject = reject;
      });
    }
    // 提供abort方法来中止Promise
    abort(error) {
      if (this._reject) {
        this._reject(error);
      }
    }
    then(onfulfilled, onrejected) {
      return this.promise.then(onfulfilled, onrejected);
    }
    catch(onrejected) {
      return this.promise.catch(onrejected);
    }
  }
  function addUnit$1(num) {
    return Number.isNaN(Number(num)) ? `${num}` : `${num}px`;
  }
  function isObj(value) {
    return Object.prototype.toString.call(value) === "[object Object]" || typeof value === "object";
  }
  function getType(target) {
    const typeStr = Object.prototype.toString.call(target);
    const match = typeStr.match(/\[object (\w+)\]/);
    const type = match && match.length ? match[1].toLowerCase() : "";
    return type;
  }
  const isDef = (value) => value !== void 0 && value !== null;
  function rgbToHex(r, g, b) {
    const hex = (r << 16 | g << 8 | b).toString(16);
    const paddedHex = "#" + "0".repeat(Math.max(0, 6 - hex.length)) + hex;
    return paddedHex;
  }
  function hexToRgb(hex) {
    const rgb = [];
    for (let i = 1; i < 7; i += 2) {
      rgb.push(parseInt("0x" + hex.slice(i, i + 2), 16));
    }
    return rgb;
  }
  const gradient = (startColor, endColor, step = 2) => {
    const sColor = hexToRgb(startColor);
    const eColor = hexToRgb(endColor);
    const rStep = (eColor[0] - sColor[0]) / step;
    const gStep = (eColor[1] - sColor[1]) / step;
    const bStep = (eColor[2] - sColor[2]) / step;
    const gradientColorArr = [];
    for (let i = 0; i < step; i++) {
      gradientColorArr.push(
        rgbToHex(parseInt(String(rStep * i + sColor[0])), parseInt(String(gStep * i + sColor[1])), parseInt(String(bStep * i + sColor[2])))
      );
    }
    return gradientColorArr;
  };
  const isEqual = (value1, value2) => {
    if (value1 === value2) {
      return true;
    }
    if (!Array.isArray(value1) || !Array.isArray(value2)) {
      return false;
    }
    if (value1.length !== value2.length) {
      return false;
    }
    for (let i = 0; i < value1.length; ++i) {
      if (value1[i] !== value2[i]) {
        return false;
      }
    }
    return true;
  };
  const context = {
    id: 1e3
  };
  function kebabCase(word) {
    const newWord = word.replace(/[A-Z]/g, function(match) {
      return "-" + match;
    }).toLowerCase();
    return newWord;
  }
  function camelCase(word) {
    return word.replace(/-(\w)/g, (_, c2) => c2.toUpperCase());
  }
  function isArray(value) {
    if (typeof Array.isArray === "function") {
      return Array.isArray(value);
    }
    return Object.prototype.toString.call(value) === "[object Array]";
  }
  function isFunction(value) {
    return getType(value) === "function" || getType(value) === "asyncfunction";
  }
  function isString(value) {
    return getType(value) === "string";
  }
  function isPromise$1(value) {
    if (isObj(value) && isDef(value)) {
      return isFunction(value.then) && isFunction(value.catch);
    }
    return false;
  }
  function objToStyle(styles) {
    if (isArray(styles)) {
      const result = styles.filter(function(item) {
        return item != null && item !== "";
      }).map(function(item) {
        return objToStyle(item);
      }).join(";");
      return result ? result.endsWith(";") ? result : result + ";" : "";
    }
    if (isString(styles)) {
      return styles ? styles.endsWith(";") ? styles : styles + ";" : "";
    }
    if (isObj(styles)) {
      const result = Object.keys(styles).filter(function(key) {
        return styles[key] != null && styles[key] !== "";
      }).map(function(key) {
        return [kebabCase(key), styles[key]].join(":");
      }).join(";");
      return result ? result.endsWith(";") ? result : result + ";" : "";
    }
    return "";
  }
  const pause = (ms = 1e3 / 30) => {
    return new AbortablePromise((resolve) => {
      const timer = setTimeout(() => {
        clearTimeout(timer);
        resolve(true);
      }, ms);
    });
  };
  function deepAssign(target, source) {
    Object.keys(source).forEach((key) => {
      const targetValue = target[key];
      const newObjValue = source[key];
      if (isObj(targetValue) && isObj(newObjValue)) {
        deepAssign(targetValue, newObjValue);
      } else {
        target[key] = newObjValue;
      }
    });
    return target;
  }
  const getPropByPath = (obj, path) => {
    const keys = path.split(".");
    try {
      return keys.reduce((acc, key) => acc !== void 0 && acc !== null ? acc[key] : void 0, obj);
    } catch (error) {
      return void 0;
    }
  };
  const numericProp = [Number, String];
  const makeRequiredProp = (type) => ({
    type,
    required: true
  });
  const makeArrayProp = () => ({
    type: Array,
    default: () => []
  });
  const makeBooleanProp = (defaultVal) => ({
    type: Boolean,
    default: defaultVal
  });
  const makeNumberProp = (defaultVal) => ({
    type: Number,
    default: defaultVal
  });
  const makeNumericProp = (defaultVal) => ({
    type: numericProp,
    default: defaultVal
  });
  const makeStringProp = (defaultVal) => ({
    type: String,
    default: defaultVal
  });
  const baseProps = {
    /**
     * 自定义根节点样式
     */
    customStyle: makeStringProp(""),
    /**
     * 自定义根节点样式类
     */
    customClass: makeStringProp("")
  };
  const iconProps = {
    ...baseProps,
    /**
     * 使用的图标名字，可以使用链接图片
     */
    name: makeRequiredProp(String),
    /**
     * 图标的颜色
     */
    color: String,
    /**
     * 图标的字体大小
     */
    size: numericProp,
    /**
     * 类名前缀，用于使用自定义图标
     */
    classPrefix: makeStringProp("wd-icon")
  };
  const __default__$6 = {
    name: "wd-icon",
    options: {
      virtualHost: true,
      addGlobalClass: true,
      styleIsolation: "shared"
    }
  };
  const _sfc_main$v = /* @__PURE__ */ vue.defineComponent({
    ...__default__$6,
    props: iconProps,
    emits: ["click", "touch"],
    setup(__props, { expose: __expose, emit: __emit }) {
      __expose();
      const props = __props;
      const emit = __emit;
      const isImage = vue.computed(() => {
        return isDef(props.name) && props.name.includes("/");
      });
      const rootClass = vue.computed(() => {
        const prefix = props.classPrefix;
        return `${prefix} ${props.customClass} ${isImage.value ? "wd-icon--image" : prefix + "-" + props.name}`;
      });
      const rootStyle = vue.computed(() => {
        const style = {};
        if (props.color) {
          style["color"] = props.color;
        }
        if (props.size) {
          style["font-size"] = addUnit$1(props.size);
        }
        return `${objToStyle(style)} ${props.customStyle}`;
      });
      function handleClick(event) {
        emit("click", event);
      }
      const __returned__ = { props, emit, isImage, rootClass, rootStyle, handleClick };
      Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
      return __returned__;
    }
  });
  function _sfc_render$u(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock(
      "view",
      {
        onClick: $setup.handleClick,
        class: vue.normalizeClass($setup.rootClass),
        style: vue.normalizeStyle($setup.rootStyle)
      },
      [
        $setup.isImage ? (vue.openBlock(), vue.createElementBlock("image", {
          key: 0,
          class: "wd-icon__image",
          src: _ctx.name
        }, null, 8, ["src"])) : vue.createCommentVNode("v-if", true)
      ],
      6
      /* CLASS, STYLE */
    );
  }
  const wdIcon = /* @__PURE__ */ _export_sfc(_sfc_main$v, [["render", _sfc_render$u], ["__scopeId", "data-v-24906af6"], ["__file", "E:/dome/music/uni_modules/wot-design-uni/components/wd-icon/wd-icon.vue"]]);
  const transitionProps = {
    ...baseProps,
    /**
     * 是否展示组件
     * 类型：boolean
     * 默认值：false
     */
    show: makeBooleanProp(false),
    /**
     * 动画执行时间
     * 类型：number | boolean | Record<string, number>
     * 默认值：300 (毫秒)
     */
    duration: {
      type: [Object, Number, Boolean],
      default: 300
    },
    /**
     * 弹层内容懒渲染，触发展示时才渲染内容
     * 类型：boolean
     * 默认值：false
     */
    lazyRender: makeBooleanProp(false),
    /**
     * 动画类型
     * 类型：string
     * 可选值：fade / fade-up / fade-down / fade-left / fade-right / slide-up / slide-down / slide-left / slide-right / zoom-in
     * 默认值：'fade'
     */
    name: [String, Array],
    /**
     * 是否在动画结束时销毁子节点（display: none)
     * 类型：boolean
     * 默认值：false
     */
    destroy: makeBooleanProp(true),
    /**
     * 进入过渡的开始状态
     * 类型：string
     */
    enterClass: makeStringProp(""),
    /**
     * 进入过渡的激活状态
     * 类型：string
     */
    enterActiveClass: makeStringProp(""),
    /**
     * 进入过渡的结束状态
     * 类型：string
     */
    enterToClass: makeStringProp(""),
    /**
     * 离开过渡的开始状态
     * 类型：string
     */
    leaveClass: makeStringProp(""),
    /**
     * 离开过渡的激活状态
     * 类型：string
     */
    leaveActiveClass: makeStringProp(""),
    /**
     * 离开过渡的结束状态
     * 类型：string
     */
    leaveToClass: makeStringProp(""),
    /**
     * 是否阻止触摸滚动
     * 类型：boolean
     * 默认值：false
     */
    disableTouchMove: makeBooleanProp(false)
  };
  const __default__$5 = {
    name: "wd-transition",
    options: {
      addGlobalClass: true,
      virtualHost: true,
      styleIsolation: "shared"
    }
  };
  const _sfc_main$u = /* @__PURE__ */ vue.defineComponent({
    ...__default__$5,
    props: transitionProps,
    emits: ["click", "before-enter", "enter", "before-leave", "leave", "after-leave", "after-enter"],
    setup(__props, { expose: __expose, emit: __emit }) {
      __expose();
      const getClassNames = (name) => {
        let enter2 = `${props.enterClass} ${props.enterActiveClass}`;
        let enterTo = `${props.enterToClass} ${props.enterActiveClass}`;
        let leave2 = `${props.leaveClass} ${props.leaveActiveClass}`;
        let leaveTo = `${props.leaveToClass} ${props.leaveActiveClass}`;
        if (Array.isArray(name)) {
          for (let index = 0; index < name.length; index++) {
            enter2 = `wd-${name[index]}-enter wd-${name[index]}-enter-active ${enter2}`;
            enterTo = `wd-${name[index]}-enter-to wd-${name[index]}-enter-active ${enterTo}`;
            leave2 = `wd-${name[index]}-leave wd-${name[index]}-leave-active ${leave2}`;
            leaveTo = `wd-${name[index]}-leave-to wd-${name[index]}-leave-active ${leaveTo}`;
          }
        } else if (name) {
          enter2 = `wd-${name}-enter wd-${name}-enter-active ${enter2}`;
          enterTo = `wd-${name}-enter-to wd-${name}-enter-active ${enterTo}`;
          leave2 = `wd-${name}-leave wd-${name}-leave-active ${leave2}`;
          leaveTo = `wd-${name}-leave-to wd-${name}-leave-active ${leaveTo}`;
        }
        return {
          enter: enter2,
          "enter-to": enterTo,
          leave: leave2,
          "leave-to": leaveTo
        };
      };
      const props = __props;
      const emit = __emit;
      const inited = vue.ref(false);
      const display = vue.ref(false);
      const status = vue.ref("");
      const transitionEnded = vue.ref(false);
      const currentDuration = vue.ref(300);
      const classes = vue.ref("");
      const enterPromise = vue.ref(null);
      const enterLifeCyclePromises = vue.ref(null);
      const leaveLifeCyclePromises = vue.ref(null);
      const style = vue.computed(() => {
        return `-webkit-transition-duration:${currentDuration.value}ms;transition-duration:${currentDuration.value}ms;${display.value || !props.destroy ? "" : "display: none;"}${props.customStyle}`;
      });
      const rootClass = vue.computed(() => {
        return `wd-transition ${props.customClass}  ${classes.value}`;
      });
      const isShow = vue.computed(() => {
        return !props.lazyRender || inited.value;
      });
      vue.onBeforeMount(() => {
        if (props.show) {
          enter();
        }
      });
      vue.watch(
        () => props.show,
        (newVal) => {
          handleShow(newVal);
        },
        { deep: true }
      );
      function handleClick() {
        emit("click");
      }
      function handleShow(value) {
        if (value) {
          handleAbortPromise();
          enter();
        } else {
          leave();
        }
      }
      function handleAbortPromise() {
        isPromise$1(enterPromise.value) && enterPromise.value.abort();
        isPromise$1(enterLifeCyclePromises.value) && enterLifeCyclePromises.value.abort();
        isPromise$1(leaveLifeCyclePromises.value) && leaveLifeCyclePromises.value.abort();
        enterPromise.value = null;
        enterLifeCyclePromises.value = null;
        leaveLifeCyclePromises.value = null;
      }
      function enter() {
        enterPromise.value = new AbortablePromise(async (resolve) => {
          try {
            const classNames = getClassNames(props.name);
            const duration = isObj(props.duration) ? props.duration.enter : props.duration;
            status.value = "enter";
            emit("before-enter");
            enterLifeCyclePromises.value = pause();
            await enterLifeCyclePromises.value;
            emit("enter");
            classes.value = classNames.enter;
            currentDuration.value = duration;
            enterLifeCyclePromises.value = pause();
            await enterLifeCyclePromises.value;
            inited.value = true;
            display.value = true;
            enterLifeCyclePromises.value = pause();
            await enterLifeCyclePromises.value;
            enterLifeCyclePromises.value = null;
            transitionEnded.value = false;
            classes.value = classNames["enter-to"];
            resolve();
          } catch (error) {
          }
        });
      }
      async function leave() {
        if (!enterPromise.value) {
          transitionEnded.value = false;
          return onTransitionEnd();
        }
        try {
          await enterPromise.value;
          if (!display.value)
            return;
          const classNames = getClassNames(props.name);
          const duration = isObj(props.duration) ? props.duration.leave : props.duration;
          status.value = "leave";
          emit("before-leave");
          currentDuration.value = duration;
          leaveLifeCyclePromises.value = pause();
          await leaveLifeCyclePromises.value;
          emit("leave");
          classes.value = classNames.leave;
          leaveLifeCyclePromises.value = pause();
          await leaveLifeCyclePromises.value;
          transitionEnded.value = false;
          classes.value = classNames["leave-to"];
          leaveLifeCyclePromises.value = setPromise(currentDuration.value);
          await leaveLifeCyclePromises.value;
          leaveLifeCyclePromises.value = null;
          onTransitionEnd();
          enterPromise.value = null;
        } catch (error) {
        }
      }
      function setPromise(duration) {
        return new AbortablePromise((resolve) => {
          const timer = setTimeout(() => {
            clearTimeout(timer);
            resolve();
          }, duration);
        });
      }
      function onTransitionEnd() {
        if (transitionEnded.value)
          return;
        transitionEnded.value = true;
        if (status.value === "leave") {
          emit("after-leave");
        } else if (status.value === "enter") {
          emit("after-enter");
        }
        if (!props.show && display.value) {
          display.value = false;
        }
      }
      function noop() {
      }
      const __returned__ = { getClassNames, props, emit, inited, display, status, transitionEnded, currentDuration, classes, enterPromise, enterLifeCyclePromises, leaveLifeCyclePromises, style, rootClass, isShow, handleClick, handleShow, handleAbortPromise, enter, leave, setPromise, onTransitionEnd, noop };
      Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
      return __returned__;
    }
  });
  function _sfc_render$t(_ctx, _cache, $props, $setup, $data, $options) {
    return $setup.isShow && _ctx.disableTouchMove ? (vue.openBlock(), vue.createElementBlock(
      "view",
      {
        key: 0,
        class: vue.normalizeClass($setup.rootClass),
        style: vue.normalizeStyle($setup.style),
        onTransitionend: $setup.onTransitionEnd,
        onClick: $setup.handleClick,
        onTouchmove: vue.withModifiers($setup.noop, ["stop", "prevent"])
      },
      [
        vue.renderSlot(_ctx.$slots, "default", {}, void 0, true)
      ],
      38
      /* CLASS, STYLE, NEED_HYDRATION */
    )) : $setup.isShow && !_ctx.disableTouchMove ? (vue.openBlock(), vue.createElementBlock(
      "view",
      {
        key: 1,
        class: vue.normalizeClass($setup.rootClass),
        style: vue.normalizeStyle($setup.style),
        onTransitionend: $setup.onTransitionEnd,
        onClick: $setup.handleClick
      },
      [
        vue.renderSlot(_ctx.$slots, "default", {}, void 0, true)
      ],
      38
      /* CLASS, STYLE, NEED_HYDRATION */
    )) : vue.createCommentVNode("v-if", true);
  }
  const wdTransition = /* @__PURE__ */ _export_sfc(_sfc_main$u, [["render", _sfc_render$t], ["__scopeId", "data-v-af59a128"], ["__file", "E:/dome/music/uni_modules/wot-design-uni/components/wd-transition/wd-transition.vue"]]);
  const overlayProps = {
    ...baseProps,
    /**
     * 是否展示遮罩层
     */
    show: makeBooleanProp(false),
    /**
     * 动画时长，单位毫秒
     */
    duration: {
      type: [Object, Number, Boolean],
      default: 300
    },
    /**
     * 是否锁定滚动
     */
    lockScroll: makeBooleanProp(true),
    /**
     * 层级
     */
    zIndex: makeNumberProp(10)
  };
  const __default__$4 = {
    name: "wd-overlay",
    options: {
      virtualHost: true,
      addGlobalClass: true,
      styleIsolation: "shared"
    }
  };
  const _sfc_main$t = /* @__PURE__ */ vue.defineComponent({
    ...__default__$4,
    props: overlayProps,
    emits: ["click"],
    setup(__props, { expose: __expose, emit: __emit }) {
      __expose();
      const props = __props;
      const emit = __emit;
      function handleClick() {
        emit("click");
      }
      const __returned__ = { props, emit, handleClick, wdTransition };
      Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
      return __returned__;
    }
  });
  function _sfc_render$s(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createBlock($setup["wdTransition"], {
      show: _ctx.show,
      name: "fade",
      "custom-class": "wd-overlay",
      duration: _ctx.duration,
      "custom-style": `z-index: ${_ctx.zIndex}; ${_ctx.customStyle}`,
      "disable-touch-move": _ctx.lockScroll,
      onClick: $setup.handleClick
    }, {
      default: vue.withCtx(() => [
        vue.renderSlot(_ctx.$slots, "default", {}, void 0, true)
      ]),
      _: 3
      /* FORWARDED */
    }, 8, ["show", "duration", "custom-style", "disable-touch-move"]);
  }
  const wdOverlay = /* @__PURE__ */ _export_sfc(_sfc_main$t, [["render", _sfc_render$s], ["__scopeId", "data-v-6e0d1141"], ["__file", "E:/dome/music/uni_modules/wot-design-uni/components/wd-overlay/wd-overlay.vue"]]);
  const block0$1 = (Comp) => {
    (Comp.$renderjs || (Comp.$renderjs = [])).push("render");
    (Comp.$renderjsModules || (Comp.$renderjsModules = {}))["render"] = "78afd58a";
  };
  const _sfc_main$s = {
    name: "wd-root-portal",
    options: {
      virtualHost: true,
      addGlobalClass: true,
      styleIsolation: "shared"
    }
  };
  function _sfc_render$r(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.renderSlot(_ctx.$slots, "default");
  }
  if (typeof block0$1 === "function")
    block0$1(_sfc_main$s);
  const wdRootPortal = /* @__PURE__ */ _export_sfc(_sfc_main$s, [["render", _sfc_render$r], ["__file", "E:/dome/music/uni_modules/wot-design-uni/components/wd-root-portal/wd-root-portal.vue"]]);
  const popupProps = {
    ...baseProps,
    /**
     * 动画类型，参见 wd-transition 组件的name
     * 类型：string
     * 可选值：fade / fade-up / fade-down / fade-left / fade-right / slide-up / slide-down / slide-left / slide-right / zoom-in
     */
    transition: String,
    /**
     * 关闭按钮
     * 类型：boolean
     * 默认值：false
     */
    closable: makeBooleanProp(false),
    /**
     * 弹出框的位置
     * 类型：string
     * 默认值：center
     * 可选值：center / top / right / bottom / left
     */
    position: makeStringProp("center"),
    /**
     * 点击遮罩是否关闭
     * 类型：boolean
     * 默认值：true
     */
    closeOnClickModal: makeBooleanProp(true),
    /**
     * 动画持续时间
     * 类型：number | boolean
     * 默认值：300
     */
    duration: {
      type: [Number, Boolean],
      default: 300
    },
    /**
     * 是否显示遮罩
     * 类型：boolean
     * 默认值：true
     */
    modal: makeBooleanProp(true),
    /**
     * 设置层级
     * 类型：number
     * 默认值：10
     */
    zIndex: makeNumberProp(10),
    /**
     * 是否当关闭时将弹出层隐藏（display: none)
     * 类型：boolean
     * 默认值：true
     */
    hideWhenClose: makeBooleanProp(true),
    /**
     * 遮罩样式
     * 类型：string
     * 默认值：''
     */
    modalStyle: makeStringProp(""),
    /**
     * 弹出面板是否设置底部安全距离（iphone X 类型的机型）
     * 类型：boolean
     * 默认值：false
     */
    safeAreaInsetBottom: makeBooleanProp(false),
    /**
     * 弹出层是否显示
     */
    modelValue: makeBooleanProp(false),
    /**
     * 弹层内容懒渲染，触发展示时才渲染内容
     * 类型：boolean
     * 默认值：true
     */
    lazyRender: makeBooleanProp(true),
    /**
     * 是否锁定滚动
     * 类型：boolean
     * 默认值：true
     */
    lockScroll: makeBooleanProp(true),
    /**
     * 是否从页面中脱离出来，用于解决各种 fixed 失效问题 (H5: teleport, APP: renderjs, 小程序: root-portal)
     * 类型：boolean
     * 默认值：false
     */
    rootPortal: makeBooleanProp(false)
  };
  const __default__$3 = {
    name: "wd-popup",
    options: {
      virtualHost: true,
      addGlobalClass: true,
      styleIsolation: "shared"
    }
  };
  const _sfc_main$r = /* @__PURE__ */ vue.defineComponent({
    ...__default__$3,
    props: popupProps,
    emits: [
      "update:modelValue",
      "before-enter",
      "enter",
      "before-leave",
      "leave",
      "after-leave",
      "after-enter",
      "click-modal",
      "close"
    ],
    setup(__props, { expose: __expose, emit: __emit }) {
      __expose();
      const props = __props;
      const emit = __emit;
      const transitionName = vue.computed(() => {
        if (props.transition) {
          return props.transition;
        }
        if (props.position === "center") {
          return ["zoom-in", "fade"];
        }
        if (props.position === "left") {
          return "slide-left";
        }
        if (props.position === "right") {
          return "slide-right";
        }
        if (props.position === "bottom") {
          return "slide-up";
        }
        if (props.position === "top") {
          return "slide-down";
        }
        return "slide-up";
      });
      const safeBottom = vue.ref(0);
      const style = vue.computed(() => {
        return `z-index:${props.zIndex}; padding-bottom: ${safeBottom.value}px;${props.customStyle}`;
      });
      const rootClass = vue.computed(() => {
        return `wd-popup wd-popup--${props.position} ${!props.transition && props.position === "center" ? "is-deep" : ""} ${props.customClass || ""}`;
      });
      vue.onBeforeMount(() => {
        if (props.safeAreaInsetBottom) {
          const { safeArea, screenHeight, safeAreaInsets } = uni.getSystemInfoSync();
          if (safeArea) {
            safeBottom.value = safeAreaInsets ? safeAreaInsets.bottom : 0;
          } else {
            safeBottom.value = 0;
          }
        }
      });
      function handleClickModal() {
        emit("click-modal");
        if (props.closeOnClickModal) {
          close();
        }
      }
      function close() {
        emit("close");
        emit("update:modelValue", false);
      }
      function noop() {
      }
      const __returned__ = { props, emit, transitionName, safeBottom, style, rootClass, handleClickModal, close, noop, wdIcon, wdOverlay, wdTransition, wdRootPortal };
      Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
      return __returned__;
    }
  });
  function _sfc_render$q(_ctx, _cache, $props, $setup, $data, $options) {
    return _ctx.rootPortal ? (vue.openBlock(), vue.createBlock($setup["wdRootPortal"], { key: 0 }, {
      default: vue.withCtx(() => [
        vue.createElementVNode("view", { class: "wd-popup-wrapper" }, [
          _ctx.modal ? (vue.openBlock(), vue.createBlock($setup["wdOverlay"], {
            key: 0,
            show: _ctx.modelValue,
            "z-index": _ctx.zIndex,
            "lock-scroll": _ctx.lockScroll,
            duration: _ctx.duration,
            "custom-style": _ctx.modalStyle,
            onClick: $setup.handleClickModal,
            onTouchmove: $setup.noop
          }, null, 8, ["show", "z-index", "lock-scroll", "duration", "custom-style"])) : vue.createCommentVNode("v-if", true),
          vue.createVNode($setup["wdTransition"], {
            "lazy-render": _ctx.lazyRender,
            "custom-class": $setup.rootClass,
            "custom-style": $setup.style,
            duration: _ctx.duration,
            show: _ctx.modelValue,
            name: $setup.transitionName,
            destroy: _ctx.hideWhenClose,
            onBeforeEnter: _cache[0] || (_cache[0] = ($event) => $setup.emit("before-enter")),
            onEnter: _cache[1] || (_cache[1] = ($event) => $setup.emit("enter")),
            onAfterEnter: _cache[2] || (_cache[2] = ($event) => $setup.emit("after-enter")),
            onBeforeLeave: _cache[3] || (_cache[3] = ($event) => $setup.emit("before-leave")),
            onLeave: _cache[4] || (_cache[4] = ($event) => $setup.emit("leave")),
            onAfterLeave: _cache[5] || (_cache[5] = ($event) => $setup.emit("after-leave"))
          }, {
            default: vue.withCtx(() => [
              vue.renderSlot(_ctx.$slots, "default", {}, void 0, true),
              _ctx.closable ? (vue.openBlock(), vue.createBlock($setup["wdIcon"], {
                key: 0,
                "custom-class": "wd-popup__close",
                name: "add",
                onClick: $setup.close
              })) : vue.createCommentVNode("v-if", true)
            ]),
            _: 3
            /* FORWARDED */
          }, 8, ["lazy-render", "custom-class", "custom-style", "duration", "show", "name", "destroy"])
        ])
      ]),
      _: 3
      /* FORWARDED */
    })) : (vue.openBlock(), vue.createElementBlock(
      vue.Fragment,
      { key: 1 },
      [
        vue.createCommentVNode(" 非传送模式 "),
        vue.createElementVNode("view", { class: "wd-popup-wrapper" }, [
          _ctx.modal ? (vue.openBlock(), vue.createBlock($setup["wdOverlay"], {
            key: 0,
            show: _ctx.modelValue,
            "z-index": _ctx.zIndex,
            "lock-scroll": _ctx.lockScroll,
            duration: _ctx.duration,
            "custom-style": _ctx.modalStyle,
            onClick: $setup.handleClickModal,
            onTouchmove: $setup.noop
          }, null, 8, ["show", "z-index", "lock-scroll", "duration", "custom-style"])) : vue.createCommentVNode("v-if", true),
          vue.createVNode($setup["wdTransition"], {
            "lazy-render": _ctx.lazyRender,
            "custom-class": $setup.rootClass,
            "custom-style": $setup.style,
            duration: _ctx.duration,
            show: _ctx.modelValue,
            name: $setup.transitionName,
            destroy: _ctx.hideWhenClose,
            onBeforeEnter: _cache[6] || (_cache[6] = ($event) => $setup.emit("before-enter")),
            onEnter: _cache[7] || (_cache[7] = ($event) => $setup.emit("enter")),
            onAfterEnter: _cache[8] || (_cache[8] = ($event) => $setup.emit("after-enter")),
            onBeforeLeave: _cache[9] || (_cache[9] = ($event) => $setup.emit("before-leave")),
            onLeave: _cache[10] || (_cache[10] = ($event) => $setup.emit("leave")),
            onAfterLeave: _cache[11] || (_cache[11] = ($event) => $setup.emit("after-leave"))
          }, {
            default: vue.withCtx(() => [
              vue.renderSlot(_ctx.$slots, "default", {}, void 0, true),
              _ctx.closable ? (vue.openBlock(), vue.createBlock($setup["wdIcon"], {
                key: 0,
                "custom-class": "wd-popup__close",
                name: "add",
                onClick: $setup.close
              })) : vue.createCommentVNode("v-if", true)
            ]),
            _: 3
            /* FORWARDED */
          }, 8, ["lazy-render", "custom-class", "custom-style", "duration", "show", "name", "destroy"])
        ])
      ],
      2112
      /* STABLE_FRAGMENT, DEV_ROOT_FRAGMENT */
    ));
  }
  const wdPopup = /* @__PURE__ */ _export_sfc(_sfc_main$r, [["render", _sfc_render$q], ["__scopeId", "data-v-25a8a9f7"], ["__file", "E:/dome/music/uni_modules/wot-design-uni/components/wd-popup/wd-popup.vue"]]);
  const _b64chars = [..."ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"];
  const _mkUriSafe = (src) => src.replace(/[+/]/g, (m0) => m0 === "+" ? "-" : "_").replace(/=+\$/m, "");
  const fromUint8Array = (src, rfc4648 = false) => {
    let b64 = "";
    for (let i = 0, l = src.length; i < l; i += 3) {
      const [a0, a1, a2] = [src[i], src[i + 1], src[i + 2]];
      const ord = a0 << 16 | a1 << 8 | a2;
      b64 += _b64chars[ord >>> 18];
      b64 += _b64chars[ord >>> 12 & 63];
      b64 += typeof a1 !== "undefined" ? _b64chars[ord >>> 6 & 63] : "=";
      b64 += typeof a2 !== "undefined" ? _b64chars[ord & 63] : "=";
    }
    return rfc4648 ? _mkUriSafe(b64) : b64;
  };
  const _btoa = typeof btoa === "function" ? (s) => btoa(s) : (s) => {
    if (s.charCodeAt(0) > 255) {
      throw new RangeError("The string contains invalid characters.");
    }
    return fromUint8Array(Uint8Array.from(s, (c2) => c2.charCodeAt(0)));
  };
  const utob = (src) => unescape(encodeURIComponent(src));
  function encode(src, rfc4648 = false) {
    const b64 = _btoa(utob(src));
    return rfc4648 ? _mkUriSafe(b64) : b64;
  }
  const loadingProps = {
    ...baseProps,
    /**
     * 加载指示器类型，可选值：'outline' | 'ring'
     */
    type: makeStringProp("ring"),
    /**
     * 设置加载指示器颜色
     */
    color: makeStringProp("#4D80F0"),
    /**
     * 设置加载指示器大小
     */
    size: makeNumericProp("")
  };
  const __default__$2 = {
    name: "wd-loading",
    options: {
      virtualHost: true,
      addGlobalClass: true,
      styleIsolation: "shared"
    }
  };
  const _sfc_main$q = /* @__PURE__ */ vue.defineComponent({
    ...__default__$2,
    props: loadingProps,
    setup(__props, { expose: __expose }) {
      __expose();
      const svgDefineId = context.id++;
      const svgDefineId1 = context.id++;
      const svgDefineId2 = context.id++;
      const icon = {
        outline(color = "#4D80F0") {
          return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 42 42"><defs><linearGradient x1="100%" y1="0%" x2="0%" y2="0%" id="${svgDefineId}"><stop stop-color="#FFF" offset="0%" stop-opacity="0"/><stop stop-color="#FFF" offset="100%"/></linearGradient></defs><g fill="none" fill-rule="evenodd"><path d="M21 1c11.046 0 20 8.954 20 20s-8.954 20-20 20S1 32.046 1 21 9.954 1 21 1zm0 7C13.82 8 8 13.82 8 21s5.82 13 13 13 13-5.82 13-13S28.18 8 21 8z" fill="${color}"/><path d="M4.599 21c0 9.044 7.332 16.376 16.376 16.376 9.045 0 16.376-7.332 16.376-16.376" stroke="url(#${svgDefineId}) " stroke-width="3.5" stroke-linecap="round"/></g></svg>`;
        },
        ring(color = "#4D80F0", intermediateColor2 = "#a6bff7") {
          return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200"><linearGradient id="${svgDefineId1}" gradientUnits="userSpaceOnUse" x1="50" x2="50" y2="180"><stop offset="0" stop-color="${color}"></stop> <stop offset="1" stop-color="${intermediateColor2}"></stop></linearGradient> <path fill="url(#${svgDefineId1})" d="M20 100c0-44.1 35.9-80 80-80V0C44.8 0 0 44.8 0 100s44.8 100 100 100v-20c-44.1 0-80-35.9-80-80z"></path> <linearGradient id="${svgDefineId2}" gradientUnits="userSpaceOnUse" x1="150" y1="20" x2="150" y2="180"><stop offset="0" stop-color="#fff" stop-opacity="0"></stop> <stop offset="1" stop-color="${intermediateColor2}"></stop></linearGradient> <path fill="url(#${svgDefineId2})" d="M100 0v20c44.1 0 80 35.9 80 80s-35.9 80-80 80v20c55.2 0 100-44.8 100-100S155.2 0 100 0z"></path> <circle cx="100" cy="10" r="10" fill="${color}"></circle></svg>`;
        }
      };
      const props = __props;
      const svg = vue.ref("");
      const intermediateColor = vue.ref("");
      const iconSize = vue.ref(null);
      vue.watch(
        () => props.size,
        (newVal) => {
          iconSize.value = addUnit$1(newVal);
        },
        {
          deep: true,
          immediate: true
        }
      );
      vue.watch(
        () => props.type,
        () => {
          buildSvg();
        },
        {
          deep: true,
          immediate: true
        }
      );
      const rootStyle = vue.computed(() => {
        const style = {};
        if (isDef(iconSize.value)) {
          style.height = addUnit$1(iconSize.value);
          style.width = addUnit$1(iconSize.value);
        }
        return `${objToStyle(style)} ${props.customStyle}`;
      });
      vue.onBeforeMount(() => {
        intermediateColor.value = gradient(props.color, "#ffffff", 2)[1];
        buildSvg();
      });
      function buildSvg() {
        const { type, color } = props;
        let ringType = isDef(type) ? type : "ring";
        const svgStr = `"data:image/svg+xml;base64,${encode(ringType === "ring" ? icon[ringType](color, intermediateColor.value) : icon[ringType](color))}"`;
        svg.value = svgStr;
      }
      const __returned__ = { svgDefineId, svgDefineId1, svgDefineId2, icon, props, svg, intermediateColor, iconSize, rootStyle, buildSvg };
      Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
      return __returned__;
    }
  });
  function _sfc_render$p(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock(
      "view",
      {
        class: vue.normalizeClass(`wd-loading ${$setup.props.customClass}`),
        style: vue.normalizeStyle($setup.rootStyle)
      },
      [
        vue.createElementVNode("view", { class: "wd-loading__body" }, [
          vue.createElementVNode(
            "view",
            {
              class: "wd-loading__svg",
              style: vue.normalizeStyle(`background-image: url(${$setup.svg});`)
            },
            null,
            4
            /* STYLE */
          )
        ])
      ],
      6
      /* CLASS, STYLE */
    );
  }
  const wdLoading = /* @__PURE__ */ _export_sfc(_sfc_main$q, [["render", _sfc_render$p], ["__scopeId", "data-v-f2b508ee"], ["__file", "E:/dome/music/uni_modules/wot-design-uni/components/wd-loading/wd-loading.vue"]]);
  const actionSheetProps = {
    ...baseProps,
    /**
     * header 头部样式
     * @default ''
     * @type {string}
     */
    customHeaderClass: makeStringProp(""),
    /**
     * 设置菜单显示隐藏
     * @default false
     * @type {boolean}
     */
    modelValue: { ...makeBooleanProp(false), ...makeRequiredProp(Boolean) },
    /**
     * 菜单选项
     * @default []
     * @type {Action[]}
     */
    actions: makeArrayProp(),
    /**
     * 自定义面板项,可以为字符串数组，也可以为对象数组，如果为二维数组，则为多行展示
     * @default []
     * @type {Array<Panel | Panel[]>}
     */
    panels: makeArrayProp(),
    /**
     * 标题
     * @type {string}
     */
    title: String,
    /**
     * 取消按钮文案
     * @type {string}
     */
    cancelText: String,
    /**
     * 点击选项后是否关闭菜单
     * @default true
     * @type {boolean}
     */
    closeOnClickAction: makeBooleanProp(true),
    /**
     * 点击遮罩是否关闭
     * @default true
     * @type {boolean}
     */
    closeOnClickModal: makeBooleanProp(true),
    /**
     * 弹框动画持续时间
     * @default 200
     * @type {number}
     */
    duration: makeNumberProp(200),
    /**
     * 菜单层级
     * @default 10
     * @type {number}
     */
    zIndex: makeNumberProp(10),
    /**
     * 弹层内容懒渲染，触发展示时才渲染内容
     * @default true
     * @type {boolean}
     */
    lazyRender: makeBooleanProp(true),
    /**
     * 弹出面板是否设置底部安全距离（iphone X 类型的机型）
     * @default true
     * @type {boolean}
     */
    safeAreaInsetBottom: makeBooleanProp(true),
    /**
     * 是否从页面中脱离出来，用于解决各种 fixed 失效问题 (H5: teleport, APP: renderjs, 小程序: root-portal)
     * 类型：boolean
     * 默认值：false
     */
    rootPortal: makeBooleanProp(false)
  };
  const __default__$1 = {
    name: "wd-action-sheet",
    options: {
      addGlobalClass: true,
      virtualHost: true,
      styleIsolation: "shared"
    }
  };
  const _sfc_main$p = /* @__PURE__ */ vue.defineComponent({
    ...__default__$1,
    props: actionSheetProps,
    emits: ["select", "click-modal", "cancel", "closed", "close", "open", "opened", "update:modelValue"],
    setup(__props, { expose: __expose, emit: __emit }) {
      __expose();
      const props = __props;
      const emit = __emit;
      const formatPanels = vue.ref([]);
      const showPopup = vue.ref(false);
      vue.watch(() => props.panels, computedValue, { deep: true, immediate: true });
      vue.watch(
        () => props.modelValue,
        (newValue) => {
          showPopup.value = newValue;
        },
        { deep: true, immediate: true }
      );
      function isPanelArray() {
        return props.panels.length && !isArray(props.panels[0]);
      }
      function computedValue() {
        formatPanels.value = isPanelArray() ? [props.panels] : props.panels;
      }
      function select(rowIndex, type, colIndex) {
        if (type === "action") {
          if (props.actions[rowIndex].disabled || props.actions[rowIndex].loading) {
            return;
          }
          emit("select", {
            item: props.actions[rowIndex],
            index: rowIndex
          });
        } else if (isPanelArray()) {
          emit("select", {
            item: props.panels[Number(colIndex)],
            index: colIndex
          });
        } else {
          emit("select", {
            item: props.panels[rowIndex][Number(colIndex)],
            rowIndex,
            colIndex
          });
        }
        if (props.closeOnClickAction) {
          close();
        }
      }
      function handleClickModal() {
        emit("click-modal");
      }
      function handleCancel() {
        emit("cancel");
        close();
      }
      function close() {
        emit("update:modelValue", false);
        emit("close");
      }
      function handleOpen() {
        emit("open");
      }
      function handleOpened() {
        emit("opened");
      }
      function handleClosed() {
        emit("closed");
      }
      const __returned__ = { props, emit, formatPanels, showPopup, isPanelArray, computedValue, select, handleClickModal, handleCancel, close, handleOpen, handleOpened, handleClosed, wdPopup, wdIcon, wdLoading };
      Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
      return __returned__;
    }
  });
  function _sfc_render$o(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", null, [
      vue.createVNode($setup["wdPopup"], {
        "custom-class": "wd-action-sheet__popup",
        "custom-style": `${_ctx.actions && _ctx.actions.length || _ctx.panels && _ctx.panels.length ? "background: transparent;" : ""}`,
        modelValue: $setup.showPopup,
        "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $setup.showPopup = $event),
        duration: _ctx.duration,
        position: "bottom",
        "close-on-click-modal": _ctx.closeOnClickModal,
        "safe-area-inset-bottom": _ctx.safeAreaInsetBottom,
        "lazy-render": _ctx.lazyRender,
        "root-portal": _ctx.rootPortal,
        onEnter: $setup.handleOpen,
        onClose: $setup.close,
        onAfterEnter: $setup.handleOpened,
        onAfterLeave: $setup.handleClosed,
        onClickModal: $setup.handleClickModal,
        "z-index": _ctx.zIndex
      }, {
        default: vue.withCtx(() => [
          vue.createElementVNode(
            "view",
            {
              class: vue.normalizeClass(`wd-action-sheet ${_ctx.customClass}`),
              style: vue.normalizeStyle(`${_ctx.actions && _ctx.actions.length || _ctx.panels && _ctx.panels.length ? "margin: 0 10px calc(var(--window-bottom) + 10px) 10px; border-radius: 16px;" : "margin-bottom: var(--window-bottom);"} ${_ctx.customStyle}`)
            },
            [
              _ctx.title ? (vue.openBlock(), vue.createElementBlock(
                "view",
                {
                  key: 0,
                  class: vue.normalizeClass(`wd-action-sheet__header ${_ctx.customHeaderClass}`)
                },
                [
                  vue.createTextVNode(
                    vue.toDisplayString(_ctx.title) + " ",
                    1
                    /* TEXT */
                  ),
                  vue.createVNode($setup["wdIcon"], {
                    "custom-class": "wd-action-sheet__close",
                    name: "add",
                    onClick: $setup.close
                  })
                ],
                2
                /* CLASS */
              )) : vue.createCommentVNode("v-if", true),
              _ctx.actions && _ctx.actions.length ? (vue.openBlock(), vue.createElementBlock("view", {
                key: 1,
                class: "wd-action-sheet__actions"
              }, [
                (vue.openBlock(true), vue.createElementBlock(
                  vue.Fragment,
                  null,
                  vue.renderList(_ctx.actions, (action, rowIndex) => {
                    return vue.openBlock(), vue.createElementBlock("button", {
                      key: rowIndex,
                      class: vue.normalizeClass(`wd-action-sheet__action ${action.disabled ? "wd-action-sheet__action--disabled" : ""}  ${action.loading ? "wd-action-sheet__action--loading" : ""}`),
                      style: vue.normalizeStyle(`color: ${action.color}`),
                      onClick: ($event) => $setup.select(rowIndex, "action")
                    }, [
                      action.loading ? (vue.openBlock(), vue.createBlock($setup["wdLoading"], {
                        key: 0,
                        "custom-class": "`wd-action-sheet__action-loading"
                      })) : (vue.openBlock(), vue.createElementBlock(
                        "view",
                        {
                          key: 1,
                          class: "wd-action-sheet__name"
                        },
                        vue.toDisplayString(action.name),
                        1
                        /* TEXT */
                      )),
                      !action.loading && action.subname ? (vue.openBlock(), vue.createElementBlock(
                        "view",
                        {
                          key: 2,
                          class: "wd-action-sheet__subname"
                        },
                        vue.toDisplayString(action.subname),
                        1
                        /* TEXT */
                      )) : vue.createCommentVNode("v-if", true)
                    ], 14, ["onClick"]);
                  }),
                  128
                  /* KEYED_FRAGMENT */
                ))
              ])) : vue.createCommentVNode("v-if", true),
              $setup.formatPanels && $setup.formatPanels.length ? (vue.openBlock(), vue.createElementBlock("view", { key: 2 }, [
                (vue.openBlock(true), vue.createElementBlock(
                  vue.Fragment,
                  null,
                  vue.renderList($setup.formatPanels, (panel, rowIndex) => {
                    return vue.openBlock(), vue.createElementBlock("view", {
                      key: rowIndex,
                      class: "wd-action-sheet__panels"
                    }, [
                      vue.createElementVNode("view", { class: "wd-action-sheet__panels-content" }, [
                        (vue.openBlock(true), vue.createElementBlock(
                          vue.Fragment,
                          null,
                          vue.renderList(panel, (col, colIndex) => {
                            return vue.openBlock(), vue.createElementBlock("view", {
                              key: colIndex,
                              class: "wd-action-sheet__panel",
                              onClick: ($event) => $setup.select(rowIndex, "panels", colIndex)
                            }, [
                              vue.createElementVNode("image", {
                                class: "wd-action-sheet__panel-img",
                                src: col.iconUrl
                              }, null, 8, ["src"]),
                              vue.createElementVNode(
                                "view",
                                { class: "wd-action-sheet__panel-title" },
                                vue.toDisplayString(col.title),
                                1
                                /* TEXT */
                              )
                            ], 8, ["onClick"]);
                          }),
                          128
                          /* KEYED_FRAGMENT */
                        ))
                      ])
                    ]);
                  }),
                  128
                  /* KEYED_FRAGMENT */
                ))
              ])) : vue.createCommentVNode("v-if", true),
              vue.renderSlot(_ctx.$slots, "default", {}, void 0, true),
              _ctx.cancelText ? (vue.openBlock(), vue.createElementBlock(
                "button",
                {
                  key: 3,
                  class: "wd-action-sheet__cancel",
                  onClick: $setup.handleCancel
                },
                vue.toDisplayString(_ctx.cancelText),
                1
                /* TEXT */
              )) : vue.createCommentVNode("v-if", true)
            ],
            6
            /* CLASS, STYLE */
          )
        ]),
        _: 3
        /* FORWARDED */
      }, 8, ["custom-style", "modelValue", "duration", "close-on-click-modal", "safe-area-inset-bottom", "lazy-render", "root-portal", "z-index"])
    ]);
  }
  const __easycom_0$3 = /* @__PURE__ */ _export_sfc(_sfc_main$p, [["render", _sfc_render$o], ["__scopeId", "data-v-03619ba9"], ["__file", "E:/dome/music/uni_modules/wot-design-uni/components/wd-action-sheet/wd-action-sheet.vue"]]);
  const _sfc_main$o = {
    props: {
      img: {
        type: String,
        default: ""
      },
      filter: {
        type: [Number, String],
        default: 0
      },
      showMask: {
        type: Boolean,
        default: true
      }
    },
    computed: {
      wrapStyle() {
        return { backgroundImage: "url(" + this.img + ")", filter: "blur(" + this.filter + "px)" };
      }
    },
    data() {
      return {};
    }
  };
  function _sfc_render$n(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "bg" }, [
      vue.createElementVNode(
        "view",
        {
          class: "bg-image",
          style: vue.normalizeStyle($options.wrapStyle)
        },
        null,
        4
        /* STYLE */
      ),
      vue.createElementVNode("view", { class: "bg-mask" })
    ]);
  }
  const CoverImgBackground = /* @__PURE__ */ _export_sfc(_sfc_main$o, [["render", _sfc_render$n], ["__scopeId", "data-v-dbcf1712"], ["__file", "E:/dome/music/pages/music/model/components/cover-img-background.vue"]]);
  const _sfc_main$n = {
    name: "u-line-progress",
    props: {
      // 两端是否显示半圆形
      round: {
        type: Boolean,
        default: true
      },
      // 主题颜色
      type: {
        type: String,
        default: ""
      },
      // 激活部分的颜色
      activeColor: {
        type: String,
        default: "#19be6b"
      },
      inactiveColor: {
        type: String,
        default: "#ececec"
      },
      // 进度百分比，数值
      percent: {
        type: Number,
        default: 0
      },
      // 是否在进度条内部显示百分比的值
      showPercent: {
        type: Boolean,
        default: true
      },
      // 进度条的高度，单位rpx
      height: {
        type: [Number, String],
        default: 28
      },
      // 是否显示条纹
      striped: {
        type: Boolean,
        default: false
      },
      // 条纹是否显示活动状态
      stripedActive: {
        type: Boolean,
        default: false
      }
    },
    data() {
      return {};
    },
    computed: {
      progressStyle() {
        let style = {};
        style.width = this.percent + "%";
        if (this.activeColor)
          style.backgroundColor = this.activeColor;
        return style;
      }
    },
    methods: {}
  };
  function _sfc_render$m(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock(
      "view",
      {
        class: "u-progress",
        style: vue.normalizeStyle({
          borderRadius: $props.round ? "100rpx" : 0,
          height: $props.height + "rpx",
          backgroundColor: $props.inactiveColor
        })
      },
      [
        vue.createElementVNode(
          "view",
          {
            class: vue.normalizeClass([[
              $props.type ? `u-type-${$props.type}-bg` : "",
              $props.striped ? "u-striped" : "",
              $props.striped && $props.stripedActive ? "u-striped-active" : ""
            ], "u-active"]),
            style: vue.normalizeStyle([$options.progressStyle])
          },
          [
            _ctx.$slots.default || _ctx.$slots.$default ? vue.renderSlot(_ctx.$slots, "default", { key: 0 }, void 0, true) : $props.showPercent ? (vue.openBlock(), vue.createElementBlock(
              vue.Fragment,
              { key: 1 },
              [
                vue.createTextVNode(
                  vue.toDisplayString($props.percent + "%"),
                  1
                  /* TEXT */
                )
              ],
              64
              /* STABLE_FRAGMENT */
            )) : vue.createCommentVNode("v-if", true)
          ],
          6
          /* CLASS, STYLE */
        )
      ],
      4
      /* STYLE */
    );
  }
  const Progress = /* @__PURE__ */ _export_sfc(_sfc_main$n, [["render", _sfc_render$m], ["__scopeId", "data-v-c2055721"], ["__file", "E:/dome/music/pages/music/model/components/progress.vue"]]);
  const _sfc_main$m = {
    data() {
      return {
        font2line4height: 2.5,
        selectAllStatus: false,
        selects: {},
        // 选择状态下选中的歌词id
        scrollStatus: false,
        // 用于判断是否是在拖动歌词，是否应该开启选择歌词模式
        touchIndex: 0,
        curLyricId: "lrc-0",
        // 时间进度控制
        showLyricId: "lrc-0",
        // 界面显示，时间和touch控制
        curLyricIndex: 0,
        selectStatus: false,
        touchStatus: false,
        showCenterView: false,
        spaceLineNum: 0,
        timeout: {
          centerViewHide: null,
          goCenter: null
        },
        cuSelectControlStyle: {
          height: "40px",
          backgroundColor: "grey",
          itemFontSize: "16px",
          itemBorderRadius: "99px",
          itemBackgroundColor: "#00ffff"
        },
        cuLyricStyle: {
          color: "#000000",
          activeColor: "#ffffff",
          fontSize: "16px",
          activeFontSize: "16px",
          lineHeight: "40px",
          activeLineHeight: "40px",
          selectedBGColor: "inherit"
        },
        cuAreaStyle: {
          width: "100vw",
          height: "80vh"
        },
        cuCenterStyle: {
          btnImg: "",
          btnText: "确定",
          color: "#ffffff",
          lineHeight: "1px",
          height: "16px",
          fontSize: "14px"
        },
        scrollView: {
          height: "100%",
          top: 0
        },
        screen: {
          width: 0,
          height: 0,
          px2rpxscale: 1
        }
      };
    },
    beforeMount() {
      const res = uni.getSystemInfoSync();
      this.screen.width = res.windowWidth;
      this.screen.height = res.windowHeight;
      this.screen.px2rpxscale = 750 / res.windowWidth;
      this.cuAreaStyle = Object.assign(this.cuAreaStyle, this.areaStyle);
      this.cuLyricStyle = Object.assign(this.cuLyricStyle, this.lyricStyle);
      this.cuCenterStyle = Object.assign(this.cuCenterStyle, this.centerStyle);
      this.cuSelectControlStyle = Object.assign(this.cuSelectControlStyle, this.selectControlStyle);
      if (this.lyricStyle) {
        if (!("activeFontSize" in this.lyricStyle)) {
          this.cuLyricStyle["activeFontSize"] = this.cuLyricStyle["fontSize"];
        }
        if (!("lineHeight" in this.lyricStyle)) {
          let s = this.sizeDeal(this.cuLyricStyle["fontSize"]);
          this.cuLyricStyle["lineHeight"] = s[0] * this.font2line4height + s[1];
        }
        if (!("activeLineHeight" in this.lyricStyle)) {
          let s = this.sizeDeal(this.cuLyricStyle["activeFontSize"]);
          this.cuLyricStyle["activeLineHeight"] = s[0] * this.font2line4height + s[1];
        }
      }
      if (this.centerStyle) {
        if (!("height" in this.centerStyle)) {
          let s = this.sizeDeal(this.cuCenterStyle["fontSize"]);
          this.cuCenterStyle["height"] = s[0] * 1.2 + s[1];
        }
      }
    },
    mounted() {
      this.$nextTick(() => {
        const query = uni.createSelectorQuery().in(this);
        query.select(".lyric-main").boundingClientRect((res) => {
          this.cuAreaStyle.height = res.height + "px";
          let size = this.sizeDeal(this.cuLyricStyle.lineHeight);
          let asize = this.sizeDeal(this.cuLyricStyle.activeLineHeight);
          let sumLine = Math.floor((res.height - asize[0]) / size[0]);
          if (sumLine % 2 !== 0) {
            sumLine -= 1;
          }
          this.spaceLineNum = Math.floor(sumLine / 2);
          this.scrollView.height = sumLine * size[0] + asize[0] + "px";
          this.scrollView.top = (res.height - (sumLine * size[0] + asize[0])) / 2 + "px";
        }).exec();
      });
    },
    props: {
      selectControlStyle: {
        default: () => {
        },
        type: Object
      },
      centerStyle: {
        default: () => {
        },
        type: Object
      },
      lyrics: {
        default: () => [],
        type: Array
      },
      curTime: {
        default: 0,
        type: [Number, String]
      },
      lyricStyle: {
        default: () => {
        },
        type: Object
      },
      areaStyle: {
        default: () => {
        },
        type: Object
      }
    },
    watch: {
      curTime(t2) {
        let index = this.getIndex(t2, this.mLyrics.times);
        this.curLyricIndex = index + this.spaceLineNum;
        this.curLyricId = "lrc-" + index;
        if (!this.touchStatus && !this.selectStatus) {
          this.showLyricId = this.curLyricId;
        }
      }
    },
    computed: {
      lineHeightNum() {
        let size = this.sizeDeal(this.cuLyricStyle.fontSize);
        return size[0] * this.font2line4height;
      },
      centerTime() {
        let index = this.touchIndex - this.spaceLineNum;
        let s = this.mLyrics.times[index];
        return this.timeFormat(s);
      },
      centerLineTop() {
        let h = this.sizeDeal(this.cuAreaStyle.height);
        h = h[0] / 2 - this.sizeDeal(this.cuCenterStyle.height)[0] / 2 + h[1];
        return h;
      },
      lineHeight() {
        let size = this.sizeDeal(this.cuLyricStyle.fontSize);
        return size[0] * 2 + size[1];
      },
      activeLineHeight() {
        let size = this.sizeDeal(this.cuLyricStyle.activeFontSize);
        return size[0] * 2 + size[1];
      },
      mLyrics() {
        return this.lrcDeal(this.lyrics);
      }
    },
    methods: {
      selectAll() {
        this.selectAllStatus = !this.selectAllStatus;
        this.$nextTick(() => {
          if (this.selectAllStatus) {
            for (let i = 0; i < this.mLyrics.lrcs.length; i++) {
              let lrc = this.mLyrics.lrcs[i];
              if (lrc) {
                this.selects[i] = lrc;
              }
            }
          } else {
            this.selects = {};
          }
          this.$forceUpdate();
        });
      },
      copyLyric() {
        let datas = {};
        for (let k in this.selects) {
          datas[this.mLyrics.times[k - this.spaceLineNum]] = this.selects[k];
        }
        this.$emit("copyLyrics", { lyrics: datas });
        this.selectCancel();
      },
      selectCancel() {
        this.selectStatus = false;
        this.touchStatus = false;
        this.selectAllStatus = false;
        this.selects = {};
      },
      itemLongpress(v, i) {
        if (!this.scrollStatus && !this.selectStatus) {
          this.selects = {};
          this.selectModel();
          if (v) {
            if (this.selects[i]) {
              delete this.selects[i];
            } else {
              this.selects[i] = v;
            }
          }
          this.$forceUpdate();
        }
      },
      select(v, i) {
        if (this.selects[i]) {
          delete this.selects[i];
        } else {
          this.selects[i] = v;
        }
        this.$forceUpdate();
      },
      selectModel() {
        this.showCenterView = false;
        this.touchStatus = false;
        this.selectStatus = true;
      },
      centerBtnClick() {
        let lrc = this.mLyrics.lrcs[this.touchIndex];
        let ctime = Number(this.mLyrics.times[this.touchIndex - this.spaceLineNum]);
        this.$emit("centerBtnClick", { centerTime: ctime, centerLyric: lrc });
      },
      textTouchstart() {
        clearTimeout(this.timeout.goCenter);
        clearTimeout(this.timeout.centerViewHide);
        this.touchStatus = true;
      },
      textTouchEnd() {
      },
      clearTouch() {
        this.touchStatus = false;
        this.showLyricId = this.curLyricId;
        this.showCenterView = false;
      },
      lyricScroll(e) {
        let top = e.detail.scrollTop;
        let topIndex = Math.round(top / this.lineHeightNum);
        this.touchIndex = topIndex + this.spaceLineNum;
        if (this.touchStatus === true && !this.selectStatus) {
          this.scrollStatus = true;
        }
        if (this.touchStatus && !this.selectStatus && !this.showCenterView) {
          this.showCenterView = true;
        }
        this.$forceUpdate();
      },
      getIndex(t2, items) {
        t2 = Number(t2);
        let index = 0;
        for (var k_ in items) {
          let k = Number(items[k_]);
          if (t2 == k) {
            return index;
          } else if (t2 < k) {
            return index - 1;
          } else if (index == items.length - 1) {
            return items.length - 1;
          }
          index += 1;
        }
      },
      timeFormat(t2) {
        t2 = Number(t2);
        if (t2 >= 0) {
          let h = parseInt(t2 / 3600);
          let m = parseInt(t2 / 60) - h * 60;
          let s = parseInt(t2) - m * 60;
          if (h.toString().length == 1) {
            h = "0" + h;
          }
          if (m.toString().length == 1) {
            m = "0" + m;
          }
          if (s.toString().length == 1) {
            s = "0" + s;
          }
          if (h != "00") {
            return h + ":" + m + ":" + s;
          } else {
            return m + ":" + s;
          }
        } else {
          return "";
        }
      },
      sizeDeal(size) {
        let s = Number.isNaN(parseFloat(size)) ? 0 : parseFloat(size);
        let u2 = size.toString().replace(/[0-9\.]/g, "");
        if (u2 == "rpx") {
          s /= this.screen.px2rpxscale;
          u2 = "px";
        } else if (u2 == "") {
          u2 = "px";
        } else if (u2 == "vw") {
          u2 = "px";
          s = s / 100 * 750 / this.screen.px2rpxscale;
        }
        return [s, u2, s + u2];
      },
      lrcDeal(lrcl) {
        let lrcj = { lrcs: [], times: [] };
        if (lrcl.length < 1) {
          lrcj.lrcs.push("还没有歌词...");
        } else {
          for (let i = 0; i < lrcl.length; i++) {
            let lrc = lrcl[i].toString();
            let tl = lrc.split("]");
            if (tl.length > 1) {
              let t_ = tl[0].replace("[", "");
              let t2 = t_.split(":");
              if (t2.length > 1) {
                let treverse = t2.reverse();
                let ts = 0;
                if (treverse[0].indexOf(".") != -1) {
                  for (let j = 0; j < treverse.length; j++) {
                    ts += Number(treverse[j]) * 60 ** j;
                  }
                } else {
                  for (let j = 0; j < treverse.length; j++) {
                    if (j == 0) {
                      ts += Number(treverse[j]) / 1e3;
                    } else {
                      ts += Number(treverse[j]) * 60 ** (j - 1);
                    }
                  }
                }
                ts = ts.toFixed(2);
                let l = tl.splice(1, 1e3).join("]").trim();
                if (l.length > 0) {
                  lrcj.times.push(ts);
                  lrcj.lrcs.push(l);
                }
              } else {
                let l = tl.splice(1, 1e3).join("]").trim();
                if (l.length > 0) {
                  lrcj.times.push(Number(t_).toFixed(2));
                  lrcj.lrcs.push(l);
                }
              }
            }
          }
        }
        for (let i = 0; i < this.spaceLineNum; i++) {
          lrcj.lrcs.push("");
          lrcj.lrcs.splice(0, 0, "");
        }
        return lrcj;
      }
    }
  };
  function _sfc_render$l(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock(
      "view",
      {
        class: "lyric-main",
        style: vue.normalizeStyle({
          width: $data.cuAreaStyle.width,
          height: $data.cuAreaStyle.height,
          background: $data.cuAreaStyle.background
        })
      },
      [
        vue.createElementVNode("scroll-view", {
          id: "lyric-show",
          class: "lyric-show",
          "scroll-with-animation": "true",
          "scroll-y": true,
          "scroll-into-view": $data.showLyricId,
          onScroll: _cache[3] || (_cache[3] = (...args) => $options.lyricScroll && $options.lyricScroll(...args)),
          style: vue.normalizeStyle({
            top: $data.scrollView.top,
            width: $data.cuAreaStyle.width,
            height: $data.scrollView.height
          })
        }, [
          (vue.openBlock(true), vue.createElementBlock(
            vue.Fragment,
            null,
            vue.renderList($options.mLyrics.lrcs, (v, i) => {
              return vue.openBlock(), vue.createElementBlock("view", {
                class: "lrc-item",
                key: i,
                onClick: ($event) => $options.select(v, i),
                onLongpress: ($event) => $options.itemLongpress(v, i),
                onTouchstart: _cache[0] || (_cache[0] = (...args) => $options.textTouchstart && $options.textTouchstart(...args)),
                onTouchcancel: _cache[1] || (_cache[1] = (...args) => $options.textTouchEnd && $options.textTouchEnd(...args)),
                onTouchend: _cache[2] || (_cache[2] = (...args) => $options.textTouchEnd && $options.textTouchEnd(...args))
              }, [
                $data.selectStatus && $data.selects[i] && v ? (vue.openBlock(), vue.createElementBlock("text", {
                  key: 0,
                  class: "check",
                  value: "[v,i]"
                }, "✔")) : vue.createCommentVNode("v-if", true),
                vue.createElementVNode("text", {
                  class: "lrc",
                  id: "lrc-" + i,
                  style: vue.normalizeStyle({
                    opacity: $data.touchIndex == i && $data.touchStatus && !$data.selectStatus ? 0.8 : 1,
                    color: ($data.curLyricIndex == i || $data.touchIndex == i && $data.touchStatus) && !$data.selectStatus ? $data.cuLyricStyle.activeColor : $data.cuLyricStyle.color,
                    fontSize: ($data.curLyricIndex == i || $data.touchIndex == i && $data.touchStatus) && !$data.selectStatus ? $data.cuLyricStyle.activeFontSize : $data.cuLyricStyle.fontSize,
                    height: ($data.curLyricIndex == i || $data.touchIndex == i && $data.touchStatus) && !$data.selectStatus ? $data.cuLyricStyle.activeLineHeight : $data.cuLyricStyle.lineHeight,
                    backgroundColor: $data.selectStatus && $data.selects[i] && v ? $data.cuLyricStyle.selectBGColor : "inherit"
                  })
                }, vue.toDisplayString(v), 13, ["id"])
              ], 40, ["onClick", "onLongpress"]);
            }),
            128
            /* KEYED_FRAGMENT */
          ))
        ], 44, ["scroll-into-view"]),
        vue.createElementVNode(
          "view",
          {
            class: "center-view",
            style: vue.normalizeStyle({ top: $options.centerLineTop, display: $data.showCenterView ? "flex" : "none", fontSize: $data.cuCenterStyle.fontSize, height: $data.cuCenterStyle.height })
          },
          [
            $data.cuCenterStyle.btnImg ? (vue.openBlock(), vue.createElementBlock("image", {
              key: 0,
              class: "center-btn",
              onClick: _cache[4] || (_cache[4] = (...args) => $options.centerBtnClick && $options.centerBtnClick(...args)),
              src: $data.cuCenterStyle.btnImg,
              style: vue.normalizeStyle({ width: $data.cuCenterStyle.height, height: $data.cuCenterStyle.height })
            }, null, 12, ["src"])) : (vue.openBlock(), vue.createElementBlock(
              "view",
              {
                key: 1,
                class: "center-btn",
                onClick: _cache[5] || (_cache[5] = (...args) => $options.centerBtnClick && $options.centerBtnClick(...args))
              },
              vue.toDisplayString($data.cuCenterStyle.btnText),
              1
              /* TEXT */
            )),
            vue.createElementVNode(
              "view",
              {
                class: "center-line",
                style: vue.normalizeStyle({ height: $data.cuCenterStyle.lineHeight, backgroundColor: $data.cuCenterStyle.color })
              },
              null,
              4
              /* STYLE */
            ),
            vue.createElementVNode(
              "view",
              { class: "center-time" },
              vue.toDisplayString($options.centerTime),
              1
              /* TEXT */
            )
          ],
          4
          /* STYLE */
        ),
        $data.selectStatus ? (vue.openBlock(), vue.createElementBlock(
          "view",
          {
            key: 0,
            class: "selectControl",
            style: vue.normalizeStyle({ color: $data.cuSelectControlStyle.color, backgroundColor: $data.cuSelectControlStyle.backgroundColor, fontSize: $data.cuSelectControlStyle.itemFontSize })
          },
          [
            vue.createElementVNode(
              "view",
              {
                class: "selectAll",
                onClick: _cache[6] || (_cache[6] = (...args) => $options.selectAll && $options.selectAll(...args)),
                style: vue.normalizeStyle({ borderRadius: $data.cuSelectControlStyle.itemBorderRadius, backgroundColor: $data.cuSelectControlStyle.itemBackgroundColor })
              },
              vue.toDisplayString($data.selectAllStatus ? "全不选" : "全选"),
              5
              /* TEXT, STYLE */
            ),
            vue.createElementVNode(
              "view",
              {
                class: "copy",
                onClick: _cache[7] || (_cache[7] = (...args) => $options.copyLyric && $options.copyLyric(...args)),
                style: vue.normalizeStyle({ borderRadius: $data.cuSelectControlStyle.itemBorderRadius, backgroundColor: $data.cuSelectControlStyle.itemBackgroundColor })
              },
              "复制歌词",
              4
              /* STYLE */
            ),
            vue.createElementVNode(
              "view",
              {
                class: "cancel",
                onClick: _cache[8] || (_cache[8] = (...args) => $options.selectCancel && $options.selectCancel(...args)),
                style: vue.normalizeStyle({ borderRadius: $data.cuSelectControlStyle.itemBorderRadius, backgroundColor: $data.cuSelectControlStyle.itemBackgroundColor })
              },
              "取消",
              4
              /* STYLE */
            )
          ],
          4
          /* STYLE */
        )) : vue.createCommentVNode("v-if", true)
      ],
      4
      /* STYLE */
    );
  }
  const LrcView = /* @__PURE__ */ _export_sfc(_sfc_main$m, [["render", _sfc_render$l], ["__scopeId", "data-v-04064baa"], ["__file", "E:/dome/music/pages/music/model/components/bing-lyric/bing-lyric.vue"]]);
  function convertToLRC(lyricsArray, options = {}) {
    const {
      padZero = true,
      decimalPlaces = 2
    } = options;
    if (!Array.isArray(lyricsArray)) {
      throw new Error("输入必须是一个数组");
    }
    if (lyricsArray.length === 0) {
      return "";
    }
    const lrcLines = lyricsArray.map((item) => {
      if (!item.lineLyric || item.time === void 0) {
        formatAppLog("warn", "at pages/music/utils/convertToLRC.js:28", "跳过无效的歌词项:", item);
        return null;
      }
      const time = parseFloat(item.time);
      if (isNaN(time)) {
        formatAppLog("warn", "at pages/music/utils/convertToLRC.js:34", "跳过时间格式错误的歌词项:", item);
        return null;
      }
      const minutes = Math.floor(time / 60);
      const seconds = time % 60;
      let timeString;
      if (padZero) {
        const minStr = String(minutes).padStart(2, "0");
        const secStr = seconds.toFixed(decimalPlaces).padStart(5, "0");
        timeString = `[${minStr}:${secStr}]`;
      } else {
        const secStr = seconds.toFixed(decimalPlaces);
        timeString = `[${minutes}:${secStr}]`;
      }
      return `${timeString}${item.lineLyric}`;
    }).filter((line) => line !== null);
    return lrcLines.join("\r\n");
  }
  function parseFromLRC(lrcString) {
    if (typeof lrcString !== "string") {
      throw new Error("输入必须是一个字符串");
    }
    const lines = lrcString.split("\n");
    const result = [];
    const timeRegex = /\[(\d+):(\d+\.?\d*)\]/;
    lines.forEach((line) => {
      const match = line.match(timeRegex);
      if (match) {
        const minutes = parseInt(match[1]);
        const seconds = parseFloat(match[2]);
        const totalTime = minutes * 60 + seconds;
        const lyric = line.replace(timeRegex, "").trim();
        if (lyric) {
          result.push({
            lineLyric: lyric,
            time: totalTime.toFixed(2)
          });
        }
      }
    });
    return result.sort((a, b) => parseFloat(a.time) - parseFloat(b.time));
  }
  const _imports_0$3 = "/static/music/icon.png";
  const _imports_0$2 = "/static/music/i2.png";
  const _imports_1$2 = "/static/music/ii.png";
  const _imports_2$1 = "/static/music/iis.png";
  const _sfc_main$l = {
    __name: "musicGc",
    props: /* @__PURE__ */ vue.mergeModels(["playItem", "progress", "totalDuration", "playSeconds"], {
      "modelValue": {},
      "modelModifiers": {}
    }),
    emits: ["update:modelValue"],
    setup(__props, { expose: __expose }) {
      __expose();
      const lyricStyle = {
        color: "#ffffff",
        activeColor: "#4cd964",
        fontSize: "14px",
        activeFontSize: "14px",
        lineHeight: "40px",
        activeLineHeight: "32px",
        selectedBGColor: "inherit"
      };
      let systemInfo2 = uni.getSystemInfoSync();
      const visible = vue.useModel(__props, "modelValue");
      const props = __props;
      formatAppLog("log", "at pages/music/model/components/musicGc.vue:78", props.playItem);
      const state = vue.reactive({
        bodyHeight: systemInfo2.windowHeight - systemInfo2.statusBarHeight - 44,
        currentSwiper: 0,
        isLoop: false,
        lrcStrs: ""
      });
      vue.watch(() => props.playItem, (val) => {
        getgetlyric();
      });
      function getgetlyric() {
        getlyric({
          rid: props.playItem.DC_TARGETID
        }).then((res) => {
          state.lrcStrs = parseFromLRC(convertToLRC(res.data.lrclist)).map((e) => `[${e.time}]${e.lineLyric}`);
        });
      }
      function show() {
      }
      function centerBtnClick(e) {
        formatAppLog("log", "at pages/music/model/components/musicGc.vue:108", e);
      }
      function hide() {
        setStatusBarStyle("dark");
        visible.value = false;
      }
      function bindOnPlayViewSwiperChange(e) {
        state.currentSwiper = e.detail.current;
      }
      function bindOnFavoritesMusic() {
        this.$refs.songListSelector.show();
      }
      function bindOnShowPlayList() {
        this.$refs.playListPopup.show();
      }
      function bindOnControllerPlay(type) {
        this.controllerPlay(type);
      }
      function setStatusBarStyle(color) {
        plus.navigator.setStatusBarStyle(color);
      }
      function bindOnSelectSongList(data) {
        let songList = data.data;
        this.songListService.addMusic(songList, this.music);
      }
      function bindOnAddSongList(data) {
        const name = data.data;
        this.songListService.add(name, [this.music]);
      }
      const __returned__ = { lyricStyle, get systemInfo() {
        return systemInfo2;
      }, set systemInfo(v) {
        systemInfo2 = v;
      }, visible, props, state, getgetlyric, show, centerBtnClick, hide, bindOnPlayViewSwiperChange, bindOnFavoritesMusic, bindOnShowPlayList, bindOnControllerPlay, setStatusBarStyle, bindOnSelectSongList, bindOnAddSongList, computed: vue.computed, defineModel: vue.defineModel, reactive: vue.reactive, watch: vue.watch, CoverImgBackground, Progress, LrcView, get getlyric() {
        return getlyric;
      }, get convertToLRC() {
        return convertToLRC;
      }, get parseFromLRC() {
        return parseFromLRC;
      } };
      Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
      return __returned__;
    }
  };
  function _sfc_render$k(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_wd_action_sheet = resolveEasycom(vue.resolveDynamicComponent("wd-action-sheet"), __easycom_0$3);
    return vue.openBlock(), vue.createBlock(_component_wd_action_sheet, {
      modelValue: $setup.visible,
      "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $setup.visible = $event)
    }, {
      default: vue.withCtx(() => [
        vue.createElementVNode("view", { class: "play-view" }, [
          vue.createVNode($setup["CoverImgBackground"], { img: "/static/music/musicBg.png" }),
          vue.createElementVNode("view", {
            "is-back": false,
            "border-bottom": false,
            background: "backgroundColor:transparent",
            "z-index": 999
          }, [
            vue.createElementVNode("view", { class: "slot-wrap view-header" }, [
              vue.createElementVNode("view", { class: "header-left" }, [
                vue.createElementVNode("image", {
                  src: _imports_0$3,
                  onClick: $setup.hide,
                  style: { "width": "40rpx", "height": "40rpx" }
                })
              ]),
              vue.createElementVNode("view", { class: "header-content" }, [
                vue.createElementVNode(
                  "view",
                  {
                    class: vue.normalizeClass(["view-item", $setup.state.currentSwiper == 0 ? "view-active" : ""])
                  },
                  "歌曲",
                  2
                  /* CLASS */
                ),
                vue.createElementVNode(
                  "view",
                  {
                    class: vue.normalizeClass(["view-item", $setup.state.currentSwiper == 1 ? "view-active" : ""])
                  },
                  "歌词",
                  2
                  /* CLASS */
                )
              ])
            ])
          ]),
          vue.createElementVNode(
            "view",
            {
              class: "view-body",
              style: vue.normalizeStyle({ height: $setup.state.bodyHeight + "px" })
            },
            [
              vue.createElementVNode("view", { class: "play-view-content" }, [
                vue.createElementVNode("swiper", {
                  class: "swiper",
                  current: $setup.state.currentSwiper,
                  onChange: $setup.bindOnPlayViewSwiperChange
                }, [
                  vue.createElementVNode("swiper-item", { class: "music-info-view" }, [
                    vue.createElementVNode("view", { class: "music-cover" }, [
                      vue.createElementVNode("image", {
                        src: $props.playItem.web_albumpic_short,
                        style: { "width": "100%", "height": "100%" }
                      }, null, 8, ["src"])
                    ]),
                    vue.createElementVNode("view", { class: "music-info flex-v-center" }, [
                      vue.createElementVNode(
                        "view",
                        { class: "music-name text-line-1" },
                        vue.toDisplayString($props.playItem.NAME),
                        1
                        /* TEXT */
                      ),
                      vue.createElementVNode(
                        "view",
                        { class: "music-singer text-line-1" },
                        vue.toDisplayString($props.playItem.ARTIST),
                        1
                        /* TEXT */
                      )
                    ]),
                    vue.createElementVNode("view", {
                      class: "play-progress flex-v-center",
                      style: { "margin-top": "250rpx" }
                    }, [
                      vue.createVNode($setup["Progress"], {
                        "active-color": "#fff",
                        "inactive-color": "#f40",
                        percent: $props.progress,
                        "show-percent": false,
                        round: true,
                        height: 6
                      }, null, 8, ["percent"]),
                      vue.createElementVNode("view", { class: "progress-time" }, [
                        vue.createElementVNode(
                          "text",
                          null,
                          vue.toDisplayString(_ctx.playDuration),
                          1
                          /* TEXT */
                        ),
                        vue.createElementVNode(
                          "text",
                          null,
                          vue.toDisplayString($props.totalDuration),
                          1
                          /* TEXT */
                        )
                      ])
                    ]),
                    vue.createElementVNode("view", { class: "music-bars flex-v-center" }, [
                      vue.createElementVNode("image", {
                        src: _imports_0$2,
                        class: "i1"
                      }),
                      !$setup.state.playState ? (vue.openBlock(), vue.createElementBlock("image", {
                        key: 0,
                        src: _imports_1$2,
                        class: "ii"
                      })) : (vue.openBlock(), vue.createElementBlock("image", {
                        key: 1,
                        src: _imports_2$1,
                        class: "ii"
                      })),
                      vue.createElementVNode("image", {
                        src: _imports_0$2,
                        class: "i2"
                      })
                    ])
                  ]),
                  vue.createElementVNode("swiper-item", { class: "music-lrc-view" }, [
                    vue.createVNode($setup["LrcView"], {
                      "lyric-style": $setup.lyricStyle,
                      lyrics: $setup.state.lrcStrs,
                      "cur-time": $props.playSeconds,
                      onCenterBtnClick: $setup.centerBtnClick
                    }, null, 8, ["lyrics", "cur-time"])
                  ])
                ], 40, ["current"])
              ])
            ],
            4
            /* STYLE */
          )
        ])
      ]),
      _: 1
      /* STABLE */
    }, 8, ["modelValue"]);
  }
  const MusicGc = /* @__PURE__ */ _export_sfc(_sfc_main$l, [["render", _sfc_render$k], ["__scopeId", "data-v-7fab789c"], ["__file", "E:/dome/music/pages/music/model/components/musicGc.vue"]]);
  const _imports_1$1 = "/static/music/play.png";
  const _sfc_main$k = {
    __name: "musicList",
    props: /* @__PURE__ */ vue.mergeModels(["playListData", "playIndex"], {
      "modelValue": {},
      "modelModifiers": {}
    }),
    emits: /* @__PURE__ */ vue.mergeModels(["playItem"], ["update:modelValue"]),
    setup(__props, { expose: __expose, emit: __emit }) {
      __expose();
      const model = vue.useModel(__props, "modelValue");
      const emit = __emit;
      const __returned__ = { model, emit };
      Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
      return __returned__;
    }
  };
  function _sfc_render$j(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_wd_action_sheet = resolveEasycom(vue.resolveDynamicComponent("wd-action-sheet"), __easycom_0$3);
    return vue.openBlock(), vue.createBlock(_component_wd_action_sheet, {
      modelValue: $setup.model,
      "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $setup.model = $event)
    }, {
      default: vue.withCtx(() => [
        vue.createElementVNode("view", { class: "title" }, "播放列表"),
        vue.createElementVNode("view", { class: "list" }, [
          (vue.openBlock(true), vue.createElementBlock(
            vue.Fragment,
            null,
            vue.renderList($props.playListData, (item, index) => {
              return vue.openBlock(), vue.createElementBlock("view", {
                class: vue.normalizeClass(["item", { active: $props.playIndex == index }]),
                key: index,
                onClick: ($event) => $setup.emit("playItem", { item, index })
              }, [
                vue.createElementVNode("view", null, [
                  vue.createElementVNode(
                    "view",
                    null,
                    vue.toDisplayString(item.NAME),
                    1
                    /* TEXT */
                  ),
                  vue.createElementVNode(
                    "view",
                    { class: "ARTIST" },
                    vue.toDisplayString(item.ARTIST),
                    1
                    /* TEXT */
                  )
                ]),
                vue.createElementVNode("image", {
                  src: _imports_1$1,
                  class: "play"
                })
              ], 10, ["onClick"]);
            }),
            128
            /* KEYED_FRAGMENT */
          ))
        ])
      ]),
      _: 1
      /* STABLE */
    }, 8, ["modelValue"]);
  }
  const MusicList = /* @__PURE__ */ _export_sfc(_sfc_main$k, [["render", _sfc_render$j], ["__scopeId", "data-v-4ac51c5e"], ["__file", "E:/dome/music/pages/music/model/components/musicList.vue"]]);
  const _imports_3$1 = "/static/music/i1.png";
  const _sfc_main$j = {
    __name: "music",
    props: ["playList"],
    setup(__props, { expose: __expose }) {
      let innerAudioContext = null;
      innerAudioContext = uni.getBackgroundAudioManager();
      innerAudioContext.autoplay = false;
      const props = __props;
      const state = vue.reactive({
        show: false,
        playState: false,
        playIndex: 0,
        playListData: [],
        playItem: {},
        progress: 0,
        playDuration: 0,
        totalDuration: 0
      });
      function initPlayList(e, op) {
        state.show = op.show;
        state.playListData = e.list;
        if (op.play) {
          playItem(e.list[e.index], e.index);
        }
      }
      function changePlayState() {
        state.playState = !state.playState;
        if (state.playState) {
          innerAudioContext.play();
        } else {
          innerAudioContext.pause();
        }
      }
      function playItemFunc({ item, index }) {
        playItem(item, index);
      }
      function playItem(item, index) {
        innerAudioContext.pause();
        state.playItem = item;
        state.playIndex = index;
        musicItem({ rid: item.DC_TARGETID }).then((res) => {
          innerAudioContext.src = res.url;
          state.playState = true;
          innerAudioContext.play();
          setTimeout(() => {
            innerAudioContext.onTimeUpdate((e) => {
              let progress = innerAudioContext.currentTime / innerAudioContext.duration * 100;
              if (progress) {
                state.progress = progress;
              }
              state.playDuration = innerAudioContext.currentTime;
              state.totalDuration = innerAudioContext.duration;
            });
          }, 1e3);
        });
      }
      function changeShow() {
        state.show = true;
      }
      function changeShow2() {
        state.show2 = true;
      }
      function changeIndex(type) {
        if (type == 1) {
          if (state.playIndex > 0) {
            playItem(state.playListData[state.playIndex - 1], state.playIndex - 1);
          } else {
            playItem(state.playListData[state.playListData.length - 1], state.playListData.length - 1);
          }
        } else {
          if (state.playIndex < state.playListData.length - 1) {
            playItem(state.playListData[state.playIndex + 1], state.playIndex + 1);
          } else {
            playItem(state.playListData[0], 0);
          }
        }
      }
      function closeFunc() {
        innerAudioContext.stop();
      }
      __expose({
        initPlayList,
        closeFunc
      });
      const __returned__ = { get innerAudioContext() {
        return innerAudioContext;
      }, set innerAudioContext(v) {
        innerAudioContext = v;
      }, props, state, initPlayList, changePlayState, playItemFunc, playItem, changeShow, changeShow2, changeIndex, closeFunc, reactive: vue.reactive, get musicItem() {
        return musicItem;
      }, MusicGc, MusicList };
      Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
      return __returned__;
    }
  };
  function _sfc_render$i(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", null, [
      vue.createCommentVNode(" 播放列表 "),
      vue.createVNode($setup["MusicList"], {
        modelValue: $setup.state.show,
        "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $setup.state.show = $event),
        playIndex: $setup.state.playIndex,
        playListData: $setup.state.playListData,
        onPlayItem: $setup.playItemFunc
      }, null, 8, ["modelValue", "playIndex", "playListData"]),
      vue.createCommentVNode(" 播放控件 "),
      vue.createVNode($setup["MusicGc"], {
        progress: $setup.state.progress,
        playDuration: $setup.state.playDuration,
        totalDuration: $setup.state.totalDuration,
        playItem: $setup.state.playItem,
        modelValue: $setup.state.show2,
        "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => $setup.state.show2 = $event)
      }, null, 8, ["progress", "playDuration", "totalDuration", "playItem", "modelValue"]),
      vue.createCommentVNode(" 底部播放栏 "),
      vue.withDirectives(vue.createElementVNode(
        "view",
        {
          class: "play-bar",
          onClick: $setup.changeShow2
        },
        [
          vue.createElementVNode("image", {
            src: $setup.state.playItem.web_albumpic_short,
            class: vue.normalizeClass(["image", { rotate: $setup.state.playState }])
          }, null, 10, ["src"]),
          vue.createElementVNode("view", { class: "music-info" }, [
            vue.createElementVNode(
              "view",
              { class: "music-name" },
              vue.toDisplayString($setup.state.playItem.NAME),
              1
              /* TEXT */
            ),
            vue.createElementVNode(
              "view",
              { class: "music-singer" },
              vue.toDisplayString($setup.state.playItem.ARTIST),
              1
              /* TEXT */
            )
          ]),
          vue.createElementVNode("view", { class: "bars" }, [
            vue.createElementVNode("image", {
              src: _imports_0$2,
              class: "i1",
              onClick: _cache[2] || (_cache[2] = vue.withModifiers(($event) => $setup.changeIndex(1), ["stop"]))
            }),
            !$setup.state.playState ? (vue.openBlock(), vue.createElementBlock("image", {
              key: 0,
              src: _imports_1$2,
              class: "ii",
              onClick: vue.withModifiers($setup.changePlayState, ["stop"])
            })) : (vue.openBlock(), vue.createElementBlock("image", {
              key: 1,
              src: _imports_2$1,
              class: "ii",
              onClick: vue.withModifiers($setup.changePlayState, ["stop"])
            })),
            vue.createElementVNode("image", {
              src: _imports_0$2,
              class: "i2",
              onClick: _cache[3] || (_cache[3] = vue.withModifiers(($event) => $setup.changeIndex(2), ["stop"]))
            }),
            vue.createElementVNode("image", {
              src: _imports_3$1,
              class: "i3",
              onClick: vue.withModifiers($setup.changeShow, ["stop"])
            })
          ])
        ],
        512
        /* NEED_PATCH */
      ), [
        [vue.vShow, !$setup.state.show && !$setup.state.show2]
      ])
    ]);
  }
  const Music = /* @__PURE__ */ _export_sfc(_sfc_main$j, [["render", _sfc_render$i], ["__scopeId", "data-v-fed10efa"], ["__file", "E:/dome/music/pages/music/model/music.vue"]]);
  function useParent(key) {
    const parent = vue.inject(key, null);
    if (parent) {
      const instance = vue.getCurrentInstance();
      const { link, unlink, internalChildren } = parent;
      link(instance);
      vue.onUnmounted(() => unlink(instance));
      const index = vue.computed(() => internalChildren.indexOf(instance));
      return {
        parent,
        index
      };
    }
    return {
      parent: null,
      index: vue.ref(-1)
    };
  }
  const CELL_GROUP_KEY = Symbol("wd-cell-group");
  function useCell() {
    const { parent: cellGroup, index } = useParent(CELL_GROUP_KEY);
    const border = vue.computed(() => {
      return cellGroup && cellGroup.props.border && index.value;
    });
    return { border };
  }
  const FORM_KEY = Symbol("wd-form");
  const zhCN = {
    calendar: {
      placeholder: "请选择",
      title: "选择日期",
      day: "日",
      week: "周",
      month: "月",
      confirm: "确定",
      startTime: "开始时间",
      endTime: "结束时间",
      to: "至",
      timeFormat: "YY年MM月DD日 HH:mm:ss",
      dateFormat: "YYYY年MM月DD日",
      weekFormat: (year, week) => `${year} 第 ${week} 周`,
      startWeek: "开始周",
      endWeek: "结束周",
      startMonth: "开始月",
      endMonth: "结束月",
      monthFormat: "YYYY年MM月"
    },
    calendarView: {
      startTime: "开始",
      endTime: "结束",
      weeks: {
        sun: "日",
        mon: "一",
        tue: "二",
        wed: "三",
        thu: "四",
        fri: "五",
        sat: "六"
      },
      rangePrompt: (maxRange) => `选择天数不能超过${maxRange}天`,
      rangePromptWeek: (maxRange) => `选择周数不能超过${maxRange}周`,
      rangePromptMonth: (maxRange) => `选择月份不能超过${maxRange}个月`,
      monthTitle: "YYYY年M月",
      yearTitle: "YYYY年",
      month: "M月",
      hour: (value) => `${value}时`,
      minute: (value) => `${value}分`,
      second: (value) => `${value}秒`
    },
    collapse: {
      expand: "展开",
      retract: "收起"
    },
    colPicker: {
      title: "请选择",
      placeholder: "请选择",
      select: "请选择"
    },
    datetimePicker: {
      start: "开始时间",
      end: "结束时间",
      to: "至",
      placeholder: "请选择",
      confirm: "完成",
      cancel: "取消"
    },
    loadmore: {
      loading: "正在努力加载中...",
      finished: "已加载完毕",
      error: "加载失败",
      retry: "点击重试"
    },
    messageBox: {
      inputPlaceholder: "请输入",
      confirm: "确定",
      cancel: "取消",
      inputNoValidate: "输入的数据不合法"
    },
    numberKeyboard: {
      confirm: "完成"
    },
    pagination: {
      prev: "上一页",
      next: "下一页",
      page: (value) => `当前页：${value}`,
      total: (total) => `当前数据：${total}条`,
      size: (size) => `分页大小：${size}`
    },
    picker: {
      cancel: "取消",
      done: "完成",
      placeholder: "请选择"
    },
    imgCropper: {
      confirm: "完成",
      cancel: "取消"
    },
    search: {
      search: "搜索",
      cancel: "取消"
    },
    steps: {
      wait: "未开始",
      finished: "已完成",
      process: "进行中",
      failed: "失败"
    },
    tabs: {
      all: "全部"
    },
    upload: {
      error: "上传失败"
    },
    input: {
      placeholder: "请输入..."
    },
    selectPicker: {
      title: "请选择",
      placeholder: "请选择",
      select: "请选择",
      confirm: "确认",
      filterPlaceholder: "搜索"
    },
    tag: {
      placeholder: "请输入",
      add: "新增标签"
    },
    textarea: {
      placeholder: "请输入..."
    },
    tableCol: {
      indexLabel: "序号"
    },
    signature: {
      confirmText: "确认",
      clearText: "清空",
      revokeText: "撤销",
      restoreText: "恢复"
    }
  };
  const lang = vue.ref("zh-CN");
  const messages$1 = vue.reactive({
    "zh-CN": zhCN
  });
  const Locale = {
    messages() {
      return messages$1[lang.value];
    },
    use(newLang, newMessage) {
      lang.value = newLang;
      if (newMessage) {
        this.add({ [newLang]: newMessage });
      }
    },
    add(newMessages = {}) {
      deepAssign(messages$1, newMessages);
    }
  };
  const useTranslate = (name) => {
    const prefix = name ? camelCase(name) + "." : "";
    const translate = (key, ...args) => {
      const currentMessages = Locale.messages();
      const message = getPropByPath(currentMessages, prefix + key);
      return isFunction(message) ? message(...args) : isDef(message) ? message : `${prefix}${key}`;
    };
    return { translate };
  };
  const inputProps = {
    ...baseProps,
    customInputClass: makeStringProp(""),
    customLabelClass: makeStringProp(""),
    // 原生属性
    /**
     * 占位文本
     */
    placeholder: String,
    /**
     * 原生属性，指定 placeholder 的样式，目前仅支持color,font-size和font-weight
     */
    placeholderStyle: String,
    /**
     * 原生属性，指定 placeholder 的样式类
     */
    placeholderClass: makeStringProp(""),
    /**
     * 原生属性，指定光标与键盘的距离。取 input 距离底部的距离和cursor-spacing指定的距离的最小值作为光标与键盘的距离
     */
    cursorSpacing: makeNumberProp(0),
    /**
     * 原生属性，指定focus时的光标位置
     */
    cursor: makeNumberProp(-1),
    /**
     * 原生属性，光标起始位置，自动聚集时有效，需与selection-end搭配使用
     */
    selectionStart: makeNumberProp(-1),
    /**
     * 原生属性，光标结束位置，自动聚集时有效，需与selection-start搭配使用
     */
    selectionEnd: makeNumberProp(-1),
    /**
     * 原生属性，键盘弹起时，是否自动上推页面
     */
    adjustPosition: makeBooleanProp(true),
    /**
     * focus时，点击页面的时候不收起键盘
     */
    holdKeyboard: makeBooleanProp(false),
    /**
     * 设置键盘右下角按钮的文字，仅在type='text'时生效，可选值：done / go / next / search / send
     */
    confirmType: makeStringProp("done"),
    /**
     * 点击键盘右下角按钮时是否保持键盘不收起
     */
    confirmHold: makeBooleanProp(false),
    /**
     * 原生属性，获取焦点
     */
    focus: makeBooleanProp(false),
    /**
     * 类型，可选值：text / number / digit / idcard / safe-password / nickname / tel
     */
    type: makeStringProp("text"),
    /**
     * 原生属性，最大长度
     */
    maxlength: {
      type: Number,
      default: -1
    },
    /**
     * 原生属性，禁用
     */
    disabled: makeBooleanProp(false),
    /**
     * 微信小程序原生属性，强制 input 处于同层状态，默认 focus 时 input 会切到非同层状态 (仅在 iOS 下生效)
     */
    alwaysEmbed: makeBooleanProp(false),
    // 原生属性结束
    /**
     * 输入框的值靠右展示
     */
    alignRight: makeBooleanProp(false),
    /**
     * 绑定值
     */
    modelValue: makeNumericProp(""),
    /**
     * 显示为密码框
     */
    showPassword: makeBooleanProp(false),
    /**
     * 显示清空按钮
     */
    clearable: makeBooleanProp(false),
    /**
     * 只读
     */
    readonly: makeBooleanProp(false),
    /**
     * 前置图标，icon组件中的图标类名
     */
    prefixIcon: String,
    /**
     * 后置图标，icon组件中的图标类名
     */
    suffixIcon: String,
    /**
     * 显示字数限制，需要同时设置 maxlength
     */
    showWordLimit: makeBooleanProp(false),
    /**
     * 设置左侧标题
     */
    label: String,
    /**
     * 设置左侧标题宽度
     */
    labelWidth: makeStringProp(""),
    /**
     * 设置输入框大小，可选值：large
     */
    size: String,
    /**
     * 设置输入框错误状态，错误状态时为红色
     */
    error: makeBooleanProp(false),
    /**
     * 当有label属性时，设置标题和输入框垂直居中，默认为顶部居中
     */
    center: makeBooleanProp(false),
    /**
     * 非 cell 类型下是否隐藏下划线
     */
    noBorder: makeBooleanProp(false),
    /**
     * 是否必填
     */
    required: makeBooleanProp(false),
    /**
     * 表单域 model 字段名，在使用表单校验功能的情况下，该属性是必填的
     */
    prop: String,
    /**
     * 表单验证规则，结合wd-form组件使用
     */
    rules: makeArrayProp(),
    /**
     * 显示清除图标的时机，always 表示输入框不为空时展示，focus 表示输入框聚焦且不为空时展示
     * 类型: "focus" | "always"
     * 默认值: "always"
     */
    clearTrigger: makeStringProp("always"),
    /**
     * 是否在点击清除按钮时聚焦输入框
     * 类型: boolean
     * 默认值: true
     */
    focusWhenClear: makeBooleanProp(true),
    /**
     * 是否忽略组件内对文本合成系统事件的处理。为 false 时将触发 compositionstart、compositionend、compositionupdate 事件，且在文本合成期间会触发 input 事件
     * 类型: boolean
     * 默认值: true
     */
    ignoreCompositionEvent: makeBooleanProp(true),
    /**
     * 它提供了用户在编辑元素或其内容时可能输入的数据类型的提示。在符合条件的高版本webview里，uni-app的web和app-vue平台中可使用本属性。
     * 类型: InputMode
     * 可选值: "none" | "text" | "tel" | "url" | "email" | "numeric" | "decimal" | "search" | "password"
     * 默认值: "text"
     */
    inputmode: makeStringProp("text"),
    /**
     * 必填标记位置，可选值：before（标签前）、after（标签后）
     */
    markerSide: makeStringProp("before")
  };
  const __default__ = {
    name: "wd-input",
    options: {
      virtualHost: true,
      addGlobalClass: true,
      styleIsolation: "shared"
    }
  };
  const _sfc_main$i = /* @__PURE__ */ vue.defineComponent({
    ...__default__,
    props: inputProps,
    emits: [
      "update:modelValue",
      "clear",
      "blur",
      "focus",
      "input",
      "keyboardheightchange",
      "confirm",
      "clicksuffixicon",
      "clickprefixicon",
      "click"
    ],
    setup(__props, { expose: __expose, emit: __emit }) {
      __expose();
      const props = __props;
      const emit = __emit;
      const slots = vue.useSlots();
      const { translate } = useTranslate("input");
      const isPwdVisible = vue.ref(false);
      const clearing = vue.ref(false);
      const focused = vue.ref(false);
      const focusing = vue.ref(false);
      const inputValue = vue.ref(getInitValue());
      const cell = useCell();
      vue.watch(
        () => props.focus,
        (newValue) => {
          focused.value = newValue;
        },
        { immediate: true, deep: true }
      );
      vue.watch(
        () => props.modelValue,
        (newValue) => {
          inputValue.value = isDef(newValue) ? String(newValue) : "";
        }
      );
      const { parent: form } = useParent(FORM_KEY);
      const placeholderValue = vue.computed(() => {
        return isDef(props.placeholder) ? props.placeholder : translate("placeholder");
      });
      const showClear = vue.computed(() => {
        const { disabled, readonly, clearable, clearTrigger } = props;
        if (clearable && !readonly && !disabled && inputValue.value && (clearTrigger === "always" || props.clearTrigger === "focus" && focusing.value)) {
          return true;
        } else {
          return false;
        }
      });
      const showWordCount = vue.computed(() => {
        const { disabled, readonly, maxlength, showWordLimit } = props;
        return Boolean(!disabled && !readonly && isDef(maxlength) && maxlength > -1 && showWordLimit);
      });
      const errorMessage = vue.computed(() => {
        if (form && props.prop && form.errorMessages && form.errorMessages[props.prop]) {
          return form.errorMessages[props.prop];
        } else {
          return "";
        }
      });
      const isRequired = vue.computed(() => {
        let formRequired = false;
        if (form && form.props.rules) {
          const rules = form.props.rules;
          for (const key in rules) {
            if (Object.prototype.hasOwnProperty.call(rules, key) && key === props.prop && Array.isArray(rules[key])) {
              formRequired = rules[key].some((rule) => rule.required);
            }
          }
        }
        return props.required || props.rules.some((rule) => rule.required) || formRequired;
      });
      const rootClass = vue.computed(() => {
        return `wd-input  ${props.label || slots.label ? "is-cell" : ""} ${props.center ? "is-center" : ""} ${cell.border.value ? "is-border" : ""} ${props.size ? "is-" + props.size : ""} ${props.error ? "is-error" : ""} ${props.disabled ? "is-disabled" : ""}  ${inputValue.value && String(inputValue.value).length > 0 ? "is-not-empty" : ""}  ${props.noBorder ? "is-no-border" : ""} ${props.customClass}`;
      });
      const labelClass = vue.computed(() => {
        return `wd-input__label ${props.customLabelClass}`;
      });
      const inputPlaceholderClass = vue.computed(() => {
        return `wd-input__placeholder  ${props.placeholderClass}`;
      });
      const labelStyle = vue.computed(() => {
        return props.labelWidth ? objToStyle({
          "min-width": props.labelWidth,
          "max-width": props.labelWidth
        }) : "";
      });
      function getInitValue() {
        const formatted = formatValue(props.modelValue);
        if (!isValueEqual(formatted, props.modelValue)) {
          emit("update:modelValue", formatted);
        }
        return formatted;
      }
      function formatValue(value) {
        const { maxlength } = props;
        if (isDef(maxlength) && maxlength !== -1 && String(value).length > maxlength) {
          return value.toString().slice(0, maxlength);
        }
        return value;
      }
      function togglePwdVisible() {
        isPwdVisible.value = !isPwdVisible.value;
      }
      async function handleClear() {
        focusing.value = false;
        inputValue.value = "";
        if (props.focusWhenClear) {
          clearing.value = true;
          focused.value = false;
        }
        await pause();
        if (props.focusWhenClear) {
          focused.value = true;
          focusing.value = true;
        }
        emit("update:modelValue", inputValue.value);
        emit("clear");
      }
      async function handleBlur() {
        await pause(150);
        if (clearing.value) {
          clearing.value = false;
          return;
        }
        focusing.value = false;
        emit("blur", {
          value: inputValue.value
        });
      }
      function handleFocus({ detail }) {
        focusing.value = true;
        emit("focus", detail);
      }
      function handleInput({ detail }) {
        emit("update:modelValue", inputValue.value);
        emit("input", detail);
      }
      function handleKeyboardheightchange({ detail }) {
        emit("keyboardheightchange", detail);
      }
      function handleConfirm({ detail }) {
        emit("confirm", detail);
      }
      function onClickSuffixIcon() {
        emit("clicksuffixicon");
      }
      function onClickPrefixIcon() {
        emit("clickprefixicon");
      }
      function handleClick(event) {
        emit("click", event);
      }
      function isValueEqual(value1, value2) {
        return isEqual(String(value1), String(value2));
      }
      const __returned__ = { props, emit, slots, translate, isPwdVisible, clearing, focused, focusing, inputValue, cell, form, placeholderValue, showClear, showWordCount, errorMessage, isRequired, rootClass, labelClass, inputPlaceholderClass, labelStyle, getInitValue, formatValue, togglePwdVisible, handleClear, handleBlur, handleFocus, handleInput, handleKeyboardheightchange, handleConfirm, onClickSuffixIcon, onClickPrefixIcon, handleClick, isValueEqual, wdIcon };
      Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
      return __returned__;
    }
  });
  function _sfc_render$h(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock(
      "view",
      {
        class: vue.normalizeClass($setup.rootClass),
        style: vue.normalizeStyle(_ctx.customStyle),
        onClick: $setup.handleClick
      },
      [
        _ctx.label || _ctx.$slots.label ? (vue.openBlock(), vue.createElementBlock(
          "view",
          {
            key: 0,
            class: vue.normalizeClass($setup.labelClass),
            style: vue.normalizeStyle($setup.labelStyle)
          },
          [
            $setup.isRequired && _ctx.markerSide === "before" ? (vue.openBlock(), vue.createElementBlock("text", {
              key: 0,
              class: "wd-input__required wd-input__required--left"
            }, "*")) : vue.createCommentVNode("v-if", true),
            _ctx.prefixIcon || _ctx.$slots.prefix ? (vue.openBlock(), vue.createElementBlock("view", {
              key: 1,
              class: "wd-input__prefix"
            }, [
              _ctx.prefixIcon && !_ctx.$slots.prefix ? (vue.openBlock(), vue.createBlock($setup["wdIcon"], {
                key: 0,
                "custom-class": "wd-input__icon",
                name: _ctx.prefixIcon,
                onClick: $setup.onClickPrefixIcon
              }, null, 8, ["name"])) : vue.renderSlot(_ctx.$slots, "prefix", { key: 1 }, void 0, true)
            ])) : vue.createCommentVNode("v-if", true),
            vue.createElementVNode("view", { class: "wd-input__label-inner" }, [
              _ctx.label && !_ctx.$slots.label ? (vue.openBlock(), vue.createElementBlock(
                "text",
                { key: 0 },
                vue.toDisplayString(_ctx.label),
                1
                /* TEXT */
              )) : _ctx.$slots.label ? vue.renderSlot(_ctx.$slots, "label", { key: 1 }, void 0, true) : vue.createCommentVNode("v-if", true)
            ]),
            $setup.isRequired && _ctx.markerSide === "after" ? (vue.openBlock(), vue.createElementBlock("text", {
              key: 2,
              class: "wd-input__required"
            }, "*")) : vue.createCommentVNode("v-if", true)
          ],
          6
          /* CLASS, STYLE */
        )) : vue.createCommentVNode("v-if", true),
        vue.createElementVNode("view", { class: "wd-input__body" }, [
          vue.createElementVNode("view", { class: "wd-input__value" }, [
            (_ctx.prefixIcon || _ctx.$slots.prefix) && !_ctx.label ? (vue.openBlock(), vue.createElementBlock("view", {
              key: 0,
              class: "wd-input__prefix"
            }, [
              _ctx.prefixIcon && !_ctx.$slots.prefix ? (vue.openBlock(), vue.createBlock($setup["wdIcon"], {
                key: 0,
                "custom-class": "wd-input__icon",
                name: _ctx.prefixIcon,
                onClick: $setup.onClickPrefixIcon
              }, null, 8, ["name"])) : vue.renderSlot(_ctx.$slots, "prefix", { key: 1 }, void 0, true)
            ])) : vue.createCommentVNode("v-if", true),
            vue.withDirectives(vue.createElementVNode("input", {
              class: vue.normalizeClass([
                "wd-input__inner",
                _ctx.prefixIcon ? "wd-input__inner--prefix" : "",
                $setup.showWordCount ? "wd-input__inner--count" : "",
                _ctx.alignRight ? "is-align-right" : "",
                _ctx.customInputClass
              ]),
              type: _ctx.type,
              password: _ctx.showPassword && !$setup.isPwdVisible,
              "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $setup.inputValue = $event),
              placeholder: $setup.placeholderValue,
              disabled: _ctx.disabled || _ctx.readonly,
              maxlength: _ctx.maxlength,
              focus: $setup.focused,
              "confirm-type": _ctx.confirmType,
              "confirm-hold": _ctx.confirmHold,
              cursor: _ctx.cursor,
              "cursor-spacing": _ctx.cursorSpacing,
              "placeholder-style": _ctx.placeholderStyle,
              "selection-start": _ctx.selectionStart,
              "selection-end": _ctx.selectionEnd,
              "adjust-position": _ctx.adjustPosition,
              "hold-keyboard": _ctx.holdKeyboard,
              "always-embed": _ctx.alwaysEmbed,
              "placeholder-class": $setup.inputPlaceholderClass,
              ignoreCompositionEvent: _ctx.ignoreCompositionEvent,
              inputmode: _ctx.inputmode,
              onInput: $setup.handleInput,
              onFocus: $setup.handleFocus,
              onBlur: $setup.handleBlur,
              onConfirm: $setup.handleConfirm,
              onKeyboardheightchange: $setup.handleKeyboardheightchange
            }, null, 42, ["type", "password", "placeholder", "disabled", "maxlength", "focus", "confirm-type", "confirm-hold", "cursor", "cursor-spacing", "placeholder-style", "selection-start", "selection-end", "adjust-position", "hold-keyboard", "always-embed", "placeholder-class", "ignoreCompositionEvent", "inputmode"]), [
              [vue.vModelDynamic, $setup.inputValue]
            ]),
            $setup.props.readonly ? (vue.openBlock(), vue.createElementBlock("view", {
              key: 1,
              class: "wd-input__readonly-mask"
            })) : vue.createCommentVNode("v-if", true),
            $setup.showClear || _ctx.showPassword || _ctx.suffixIcon || $setup.showWordCount || _ctx.$slots.suffix ? (vue.openBlock(), vue.createElementBlock("view", {
              key: 2,
              class: "wd-input__suffix"
            }, [
              $setup.showClear ? (vue.openBlock(), vue.createBlock($setup["wdIcon"], {
                key: 0,
                "custom-class": "wd-input__clear",
                name: "error-fill",
                onClick: $setup.handleClear
              })) : vue.createCommentVNode("v-if", true),
              _ctx.showPassword ? (vue.openBlock(), vue.createBlock($setup["wdIcon"], {
                key: 1,
                "custom-class": "wd-input__icon",
                name: $setup.isPwdVisible ? "view" : "eye-close",
                onClick: $setup.togglePwdVisible
              }, null, 8, ["name"])) : vue.createCommentVNode("v-if", true),
              $setup.showWordCount ? (vue.openBlock(), vue.createElementBlock("view", {
                key: 2,
                class: "wd-input__count"
              }, [
                vue.createElementVNode(
                  "text",
                  {
                    class: vue.normalizeClass([
                      $setup.inputValue && String($setup.inputValue).length > 0 ? "wd-input__count-current" : "",
                      String($setup.inputValue).length > _ctx.maxlength ? "is-error" : ""
                    ])
                  },
                  vue.toDisplayString(String($setup.inputValue).length),
                  3
                  /* TEXT, CLASS */
                ),
                vue.createTextVNode(
                  " /" + vue.toDisplayString(_ctx.maxlength),
                  1
                  /* TEXT */
                )
              ])) : vue.createCommentVNode("v-if", true),
              _ctx.suffixIcon && !_ctx.$slots.suffix ? (vue.openBlock(), vue.createBlock($setup["wdIcon"], {
                key: 3,
                "custom-class": "wd-input__icon",
                name: _ctx.suffixIcon,
                onClick: $setup.onClickSuffixIcon
              }, null, 8, ["name"])) : vue.renderSlot(_ctx.$slots, "suffix", { key: 4 }, void 0, true)
            ])) : vue.createCommentVNode("v-if", true)
          ]),
          $setup.errorMessage ? (vue.openBlock(), vue.createElementBlock(
            "view",
            {
              key: 0,
              class: "wd-input__error-message"
            },
            vue.toDisplayString($setup.errorMessage),
            1
            /* TEXT */
          )) : vue.createCommentVNode("v-if", true)
        ])
      ],
      6
      /* CLASS, STYLE */
    );
  }
  const __easycom_0$2 = /* @__PURE__ */ _export_sfc(_sfc_main$i, [["render", _sfc_render$h], ["__scopeId", "data-v-4e0c9774"], ["__file", "E:/dome/music/uni_modules/wot-design-uni/components/wd-input/wd-input.vue"]]);
  const zStatic = {
    base64Arrow: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkBAMAAACCzIhnAAAAD1BMVEVHcExRUVFMTExRUVFRUVE9CdWsAAAABHRSTlMAjjrY9ZnUjwAAAQFJREFUWMPt2MsNgzAMgGEEE1B1gKJmAIRYoCH7z9RCXrabh33iYktcIv35EEg5ZBh07pvxJU6MFSPOSRnjnBUjUsaciRUjMsb4xIoRCWNiYsUInzE5sWKEyxiYWDbyefqHx1zIeiYTk7mQYziTYecxHvEJjwmIT3hMQELCYSISEg4TkZj0mYTEpM8kJCU9JiMp6TEZyUmbAUhO2gxAQNJiIAKSFgMRmNQZhMCkziAEJTUGIyipMRjBSZkhCE7KDEFIUmTeGCHJxWz0zXaE0GTCG8ZFtEaS347r/1fe11YyHYVfubxayfjoHmc0YYwmmmiiiSaaaKLJ7ckyz5ve+dw3Xw2emdwm9xSbAAAAAElFTkSuQmCC",
    base64ArrowWhite: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkBAMAAACCzIhnAAAAElBMVEVHcEz///////////////////+IGTx/AAAABnRSTlMA/dAkXZOhASU/AAABYElEQVRYw+2YwXLCIBCGsdAHWGbyAKZ4zxi9O017rxLf/1UaWFAgA1m8dcpedNSPf/l/Vh0Ya/Wn6hN0JcGvoCqRM4C8VBFiDwBqqNuJKV0rAnCgy3AUqZE57x0iqTL8Br4U3WBf/YWaIlTKfAcELU/h9w72CSVPa3C3OCDvhpHbRp/s2vq4fHhCeiCl2A3m4Qd71DQR257mFBlMcTlbFnFWzNtHxewYEfSiaLS4el8d8nyhmKJd1CF4eOS0keLMAuSxubLBIeIGQW8YHCFFo7EH9+YDcQt9FMZEswTheaNxTHwHT8SZorJjMrEVwo4Zo0U8HSEyZvJMOg4RjnmmRr8nDYeIz3OMkbfE/QhBo+U9RnZJxjGCRh/WKmHEMWLNkfPKsGh/CWJk1JjG0kcuJggTt34VDP8aWAFhp4nybVb5+9qQhjSkIQ1pSEMa8k+Q5U9rV3dF8MpFBK+/7miVq1/HZ2qmo9D+pAAAAABJRU5ErkJggg==",
    base64Flower: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkBAMAAACCzIhnAAAAKlBMVEVHcEzDw8Ovr6+pqamUlJTCwsKenp61tbWxsbGysrLNzc2bm5u5ubmjo6MpovhuAAAACnRSTlMA/P79/sHDhiZS0DxZowAABBBJREFUWMPtl89rE0EUx7ctTXatB3MI1SWnDbUKPUgXqh4ED8Uf7KUVSm3ooVSpSii0Fn/gD4j4o+APiEoVmos9FO2celiqZVgwgaKHPQiCCkv+F99kM7Ozm5kxq1dfD91k9pPve9/3ZjbRNHHok/mKli4eIPNgSuRObuN9SqSEzM20iGnm0yIbqCuV7NSSSIV7uyPM6JMBYdeTOanh/QihJYZsUCSby+VkMj2AvOt0rAeQAwqE3lfKMZVlQCZk1QOCKkkVPadITCfIRNKxfoJI5+0OIFtJx14CMSg1mRSDko7VAfksRQzEbGYqxOJcVTWMCH2I1/IACNW0PWU2M8cmAVHtnH5mM1VRWtwKZjOd5JbF6s1IbaYqaotjNlPHgDAnlAizubTR6ovMYn052g/U5qcmOpi0WL8xTS/3IfSet5m8MEr5ajjF5le6dq/OJpobrdY0t3i9QgefWrxW9/1BLhk0E9m8FeUMhhXal499iD0eQRfDF+ts/tttORRerfp+oV7f4xJj82iUYm1Yzod+ZQEAlS/8mMBwKebVmCVp1f0JLS6zKd17+iwRKTARVg2SHtz3iEbBH+Q+U28zW2Jiza8Tjb1YFoYZMsJyjDqp3M9XBQdSdPLFdxEpvOB37JrHcmR/y9+LgoTlCFGZEa2sc6d4PGlweEa2JSVPoVm+IfGG3ZL037iV9oH+P+Jxc4HGVflNq1M0pivao/EopO4b/ojVCP9GjmiXOeS0DOn1o/iiccT4ORnyvBGF3yUywkQajW4Ti0SGuiy/wVSg/L8w+X/8Q+hvUx8Xd90z4oV5a1i88MbFWHz0WZZ1UrTwBGPX3Rat9AFiXRMRjoMdIdJLEOt2h7jrYOzgOamKZSWSNspOS0X8SAqRYmxRL7sg4eLzYmNehcxh3uoyud/BH2Udux4ywxFTc1xC7Mgf4vMhc5S+kSH3Y7yj+qpwIWSoPTVCOOPVthGx9FbGqrwFw6wSFxJr+17zeKcztt3u+2roAEVgUjDd+AHGuxHy2rZHaa8JMkTHEeyi85ANPO9j9BVuBRD2FY5LDMo/Sz/2hReqGIs/KiFin+CsPsYO/yvM3jL2vE8EbX7/Bf8ejtr2GLN65bioAdgLd8Bis/mD5GmP2qeqyo2ZwQEOtAjRIDH7mBKpUcMoApbZJ5UIxkEwxyMZyMxW/uKFvHCFR3SSmerHyDNQ2dF4JG6zIMpBgLfjSF9x1D6smFcYnGApjmSLICO3ecCDWrQ48geba9DI3STy2i7ax6WIB62fSyIZIiO3GFQqSURp8wCo7GhJBGwuSovJBNjb7kT6FPVnIa9qJ2Ko+l9mefGIdinaMp0yC1URYiwsdfNE45EuA5Cx9EhalfvN5s+UyItm81vaB3p4joniN+SCP7Qc1hblAAAAAElFTkSuQmCC",
    base64FlowerWhite: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkBAMAAACCzIhnAAAAElBMVEX///9HcEz///////////////84chYNAAAABnRSTlP/AGzCOYZj5g1nAAACfklEQVRYw+2YTVPDIBCGtza9Jw25a0bvcax30o73OOr//yvma2F3YWlpPTijXNpAHrK8LLALVPFium2vNIFSbwGKTGQA2GUiHcD29yDNy3sMIdUBQl7r2H8mOEVqAHgPkYZUS6Qc2zYhQqtjyDZEximCZwWZLIBeIgYShs2NzxKpSUehYpMJhURGb+O+w5BpMCAREKPnCDHbIY20SzhM5yxziAXpOiBXydrekT9i5XDEq4NIIHHgyU5mRGqviII4mREJJA4QJzMiILwlRJzpKxJKvCBm8OsBBbLux0tsPl4RKYm5aPu6jw1U4mGxEUR9g8M1PcqBEp/WJliNgYOXueBzS4jZSIcgY5lCtevgDSgyzE+rAfuOTQMq0yzvoGH18qju27Mayzs4fPyMziCx81NJa5RNfW7vPYK9KOfDiVkBxFHG8hAj9txuoBuSWORsFfkpBf7xKFLSeaOefEojh5jz22DJEqMP8fUyaKdQx+RnG+yXMpe8Aars8ueR1pVH/bW3FyyvPRw90upLDHwpgBDtg4aUBNkxRLXMAi03IhcZtr1m+FeI/O/JNyDmmL1djLOauSlNflBpW18RQ2bPqXI22MXXEk75KRHTnkPkYbESbdKP2ZFk0r5sIwffAjy1lx+vx7NLjB6/E7Jfv5ERKhzpN0w8IDE8IGFDv5dhz10s7GFiXRZcUeLCEG5P5nDq9k4PFDcoMpE3GY4OuxuCXhmuyNB6k0RsLIAvqp9NE5r8ZCSS8gxnUp7ODdYhZTqxuiJ9uyJJtPmpqJ7wVj+XVieS903iViHziqAhchLEJAyb7jWU647EpUofQ0ziUuXXXhDddtlllSwjgSQu7r4BRWhQqfDPMVwAAAAASUVORK5CYII=",
    base64Success: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkBAMAAACCzIhnAAAAElBMVEVRUVFHcExTU1NRUVFRUVFRUVFOSlSUAAAABnRSTlP/AI6+VySB3ZENAAACcElEQVRYw+2YyYKCMAyGI8hdpdxdZu7gcpdZ7jL6/s8yYheSNi0aPdqbwOffpGmaFOYPD3gj4bisN7vddv17N/JVgxn5x12IWgIaWTuO/IE3PseQbwjGPo2cgRmHFLJwdm/X643zwiqOKPPJ1nj3sjEP2iiifZWj5bhopSyGaEO2HX5fbQJzwJ+W7x/jw5ZFjsEU0PMph9xE8i5EqprKALW95eJQURkgzw98uJ/JvwGecR7bIjWWsUgVrrIfFZ2HlLy3sKETD1mmRLRMRhGVssRa0xJkdn3SpJBymBkM8+pSSDXMDNyDaToVHd2fgpNt0sjwiUZO19+jGQ+gQEg9Oq+bufmAVGihomNmjQG7UG3020vrlm7lkFnKFGU3kZ0KGAdmKe821pipQ+qEKcrZeTL2g5FsUks4cStjEZWwXg0b0n4GxmEpkWwIs5VBynjgK7xZaz1/0D7OxkVuLpsY5BQNFyLS84VBjjbg0iL2r2EQHBOxBhikuUOkdxODVF1cxHoWtPPsiyXO455Iv34hssCO8EV4ZIYTjS8SR4qYSHRiTiYQ4ZFbHi0iIhhBTi6dTCgSWRcnw4h4yGTuyTAiOGBIWGoZTgSHJQl+LcOJ4OCnW6yX2bMnJ9pidCOXtkTkTrIGpYuOynAiOF14SamMiOCk5Ke+mq8BcOrrvym8d0zKIQnWT+M1WwOQNO4fFiWb18hhERxJPx2fblbPHHyC41VyiAtKBUFBIih7JMWVoIQTFIr3lKPN80WvoLSWFPC653ioTZA0I0FrQ7qU6asaK0H7JmkSJa2ooOGVtNUsc3j9FYHkIkJy3SG6VHnfXKXGP9t4N9Q4Ye98AAAAAElFTkSuQmCC",
    base64SuccessWhite: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkBAMAAACCzIhnAAAAGFBMVEVHcEz///////////////////////////8dS1W+AAAAB3RSTlMAiVYk6KvDHLfaegAAAo1JREFUWMPtWEtzmzAQNhCTq910ytXpiyvxTNOr60zrayepx9d02gnX4sTm7xcEiJX2gdnkGJ1A4tOnfWqXyeR1vMRYzrcPD9v5h5MBl3/Ldvx4cxIg/FWC8X0xjLjalM54uhhCfCrRuJURX0pi3EmIqZV7O59vrRZmguStHL9b7S7ftfLwOtiZDw7AHMtmquAQ12b5Wwbnordm8g9zLLO49qc/m2n6aKnhwPOGZ08hAiNHhheiHae1lOUPGZpQkPKa3q0mOUjaRzSRaGUjpy/mmWSwySSpllcEteBKAT52KEnSbblA51pJEPxBQoiH1FP4E3s5+FJv07h6/ylD6ui7B+9fq/ehrFB98ghec9EoVtyjK8pqCHLmCBOwMWSCeWFNN4MbPAk55NhsvoFHSSVR0k5TCTTEzlUGcqV/nVp7n9oIVkmtaqbAEqEgfdgHJPwsEAyZ9r4VAZXFjpEwyaw3+H2v42KYxKhs1XvY/gSSGv+IHyUSuHXCeZhLAgVI3EjgSGo1Fb3xO0tGGU9S2/KAIbtjxpJASG73qox6w5LUq0cEOa+iIONIWIilQSQ0pPa2jgaRQAgQP7c0mITRWGxpMAmEQFN2NAQJNCV0mI6GIIEO47hlQ0ORQLd0nL+hoUjg1m6I1TRr8uYEAriBHLcVFQ5UEMiBe3XkTBEG04WXlGKGxPnMS305XQPA1Ocn2JiuAZwE66fxnKwBnDTuXxZTMq85lwW6kt5ndLqZPefiU1yvmktcUSooChJF2aMprhQlnKJQ5FxRKkcVRa+itNYU8Io2oVkY14w0NMWYlqft91Bj9VHq+ca3b43BxjWJmla0sfKohlfTVpPN+93L/yLQ/IjQ/O5Q/VR5HdL4D7mlxmjwVdELAAAAAElFTkSuQmCC",
    base64Empty: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJYAAACWCAMAAAAL34HQAAALeGlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNi4wLWMwMDIgNzkuMTY0NDg4LCAyMDIwLzA3LzEwLTIyOjA2OjUzICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0RXZ0PSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VFdmVudCMiIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczpwaG90b3Nob3A9Imh0dHA6Ly9ucy5hZG9iZS5jb20vcGhvdG9zaG9wLzEuMC8iIHhtbG5zOnRpZmY9Imh0dHA6Ly9ucy5hZG9iZS5jb20vdGlmZi8xLjAvIiB4bWxuczpleGlmPSJodHRwOi8vbnMuYWRvYmUuY29tL2V4aWYvMS4wLyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOSAoV2luZG93cykiIHhtcDpDcmVhdGVEYXRlPSIyMDIyLTAyLTIyVDIxOjIxOjQ1KzA4OjAwIiB4bXA6TWV0YWRhdGFEYXRlPSIyMDI0LTAxLTEzVDE5OjA5OjQwKzA4OjAwIiB4bXA6TW9kaWZ5RGF0ZT0iMjAyNC0wMS0xM1QxOTowOTo0MCswODowMCIgZGM6Zm9ybWF0PSJpbWFnZS9wbmciIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6ZWQwMWYzNWQtOWRjOC00MDBiLWEyMmQtNjM5OGZiNzVhNGRiIiB4bXBNTTpEb2N1bWVudElEPSJhZG9iZTpkb2NpZDpwaG90b3Nob3A6ZDhlMzQ3ZmEtMDY2My1jYTRiLTgzNTctNTk4YjBkNGIzOTU2IiB4bXBNTTpPcmlnaW5hbERvY3VtZW50SUQ9InhtcC5kaWQ6ZDA4MDI4MDItMzUyYS04NTRhLTkxYjctNmRlNmQ1MmViM2QwIiBwaG90b3Nob3A6Q29sb3JNb2RlPSIzIiBwaG90b3Nob3A6SUNDUHJvZmlsZT0ic1JHQiBJRUM2MTk2Ni0yLjEiIHRpZmY6T3JpZW50YXRpb249IjEiIHRpZmY6WFJlc29sdXRpb249IjMwMDAwMDAvMTAwMDAiIHRpZmY6WVJlc29sdXRpb249IjMwMDAwMDAvMTAwMDAiIHRpZmY6UmVzb2x1dGlvblVuaXQ9IjIiIGV4aWY6Q29sb3JTcGFjZT0iMSIgZXhpZjpQaXhlbFhEaW1lbnNpb249IjMwMCIgZXhpZjpQaXhlbFlEaW1lbnNpb249IjMwMCI+IDx4bXBNTTpIaXN0b3J5PiA8cmRmOlNlcT4gPHJkZjpsaSBzdEV2dDphY3Rpb249ImNyZWF0ZWQiIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6ZDA4MDI4MDItMzUyYS04NTRhLTkxYjctNmRlNmQ1MmViM2QwIiBzdEV2dDp3aGVuPSIyMDIyLTAyLTIyVDIxOjIxOjQ1KzA4OjAwIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOSAoV2luZG93cykiLz4gPHJkZjpsaSBzdEV2dDphY3Rpb249InNhdmVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOjQwNjg2NzJkLWY5NDMtOTU0Mi1iMDBiLTVlMDExNmE1NmIzZSIgc3RFdnQ6d2hlbj0iMjAyNC0wMS0xM1QxMDoyNjoxNiswODowMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTkgKFdpbmRvd3MpIiBzdEV2dDpjaGFuZ2VkPSIvIi8+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJzYXZlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDphYmJkZmUyZC0xY2Q2LTJiNDgtYjUyNS05YzlhZjdlNjA4NDMiIHN0RXZ0OndoZW49IjIwMjQtMDEtMTNUMTE6MjM6NDArMDg6MDAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE5IChXaW5kb3dzKSIgc3RFdnQ6Y2hhbmdlZD0iLyIvPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0iY29udmVydGVkIiBzdEV2dDpwYXJhbWV0ZXJzPSJmcm9tIGFwcGxpY2F0aW9uL3ZuZC5hZG9iZS5waG90b3Nob3AgdG8gaW1hZ2UvcG5nIi8+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJkZXJpdmVkIiBzdEV2dDpwYXJhbWV0ZXJzPSJjb252ZXJ0ZWQgZnJvbSBhcHBsaWNhdGlvbi92bmQuYWRvYmUucGhvdG9zaG9wIHRvIGltYWdlL3BuZyIvPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0ic2F2ZWQiIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6YTQ5MjM5MDAtNDhiZC03YTQ1LWI4NGItYmVlZTVjOWUxYTM1IiBzdEV2dDp3aGVuPSIyMDI0LTAxLTEzVDExOjIzOjQwKzA4OjAwIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOSAoV2luZG93cykiIHN0RXZ0OmNoYW5nZWQ9Ii8iLz4gPHJkZjpsaSBzdEV2dDphY3Rpb249InNhdmVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOmVkMDFmMzVkLTlkYzgtNDAwYi1hMjJkLTYzOThmYjc1YTRkYiIgc3RFdnQ6d2hlbj0iMjAyNC0wMS0xM1QxOTowOTo0MCswODowMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIDIyLjAgKE1hY2ludG9zaCkiIHN0RXZ0OmNoYW5nZWQ9Ii8iLz4gPC9yZGY6U2VxPiA8L3htcE1NOkhpc3Rvcnk+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOmFiYmRmZTJkLTFjZDYtMmI0OC1iNTI1LTljOWFmN2U2MDg0MyIgc3RSZWY6ZG9jdW1lbnRJRD0iYWRvYmU6ZG9jaWQ6cGhvdG9zaG9wOjM2ZGQ4NTQxLWQ0MWEtYmY0Yy1iZjA3LWNmNjZhNjZhMDg2MSIgc3RSZWY6b3JpZ2luYWxEb2N1bWVudElEPSJ4bXAuZGlkOmQwODAyODAyLTM1MmEtODU0YS05MWI3LTZkZTZkNTJlYjNkMCIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pm30U/gAAAAJcEhZcwAALiMAAC4jAXilP3YAAAA/UExURUdwTODg4O3t7e7u7unp6d7e3uTk5M/Pz8nJyePj4+jo6Pj4+MrKyszMzO7u7unp6fb29vLy8vr6+v7+/sHBweag3xAAAAAOdFJOUwAxia5pF0n+/vzX3KbULQ2DYQAACG1JREFUeNrtm4l2o7gShi20IWFrAd7/WUc7EosDWKZ976Hc7WTmdMKXv0qlqpLyeNx222233Xbbbbfddtv/mOHn8xexSNsiRH5PrbFtW4p+DetpsF4v8Gs+HA3WEwOAfwzriYxaLTVsP8X1QK0z+vqQCzewYogi60aL9SEX5oyxphYVCFTGjfSJCTmN1jBruN5KTGCUS8bhySQGHRaohmW4glwtldbOeYJYKlgvbyUuA8aFFEKc++aIM4hrRnyiMnIZKq1PrihcM3GNKboMF1Naa9X9+8T1KrxIlVbGjv3cAEHOYYMqqgUsVuJqqehV3+sjDwB+DTJp0lYtMCyZpxqjF4e+74+sRcQSFZO8UonUSEFzuUY+DKo59A2kZDatGCjzCauy/2AmhSyCq0WHEj0KTNJDmVeNhErMt1Q8W4xti4/FwMJ4jaxl05TKFiNtD3kBGrHnhiph9V0eXQc6DkyE2xX830AlKshFTErXeuCZXK/9m41wFsGSfZ4lcGeyZ98PrylJ7MWCojQZ3qSukL2QslgdngqJnTEPdTJhXvbNBoR/+7wabIxWduN/Ja5dWEivm4XSZ2uQckNzmRlHrn2lc6eiafvS4V2Hd12tesau8toZW0CtWoZYb9t+OqxdCYKYjVPF16pVbILIy/gR7MVaWMHYPCoa2VkzkX4Iry2rirXbumGyAjGC1h62YLw6ApsNKZph3fpIWHt08JovRWD62sejpXhTrhWrPpl6zZ6PW2oTG5ltlvgtF6weNYCWKeJJSfg4W6PNJlj3sVZgOXV4lc8n4RlkMTLEBDVoYc3nI09kpyzzfgWsjyzBZSNDKF2/wjh+sxYvn8Y1scxlfLF9T1RBO3wVHsnq8Fk4oGkEh/0KJPSa8T2CeWE5X9BPmgLsaRIGeNL2kshCsWoLBmdPJW5Wbz1ndAKUXjPwxXYAUpSV3fy5BJg1aa1tyVXHHMgVH31ewDVrleHr9XqC684SUF4mecR3+wW5SC2QNvxUizRv98mLDhPgYiMDb+v8g0OADxqxcnf9w01mZYJF0fUVP5LcdswbsMmy1DVs5PlE5NpNiTR8M8qAWZkOy6aN13VcoOF2/s3xn3Mes8Xza05tgR/BuNz69nlNzMR0fH45p+G4R9oxh2mKt9MF4J7K/lvWUojwF5nCgCpuRUptnZMQ3au0nSo2UsHgV3xpmeLYzGml3ZFBBzYGPCpOQRwXs1/GG1J74dlZc6JKUOtjBAz9XjVxucGWHbZVJDPJQGYDRl1Qmf1ovk2Sbghb6MQlnF7mBzM1bgOqJAPpoOQaVe+4Skcit3uqHMyG/Sh1rHNN0gAfM0nnPrmulfLVBSm20TSZSdWa0LJl2ukVyE4vTYCgP3uQkwv1TKtQWgxDzBSg80OQjCs4klKvuUzHLCfIbDKIE/S5VIGqD1iD2819pkAqTWdmeina+oZABi7X5B1MGoTJqJSchuk6JNHcgUPAcsVFk0+N0oDN68Vo7FQSmCXjx46OEtUk1lpY2ZFQGr/AcpqVato4wPUD+RhfAeyQI5sJ6l2sDwnKqNFSJvpiyJbFl3kTOjZ2ievwCR7hkUoWeV2vOLAXvB39AJoyqYa81A5cvaAidXYTFTycKDBcalVK5f3XS89kzLVl9txfL+K+p6NUnitz5KkKm7D3DrRPNq4bk7l20aFRppNilmuQI+uzTtj9wPBkTsVwM7HbJ5pwGgujyRyZDzQLNoiRFluRtQ+GzEguqRxUL+ZMFqulMzIfaP3ARj2k/txB8c+2HyjmDizCaVWtNoE5MvMlKs/4VQ7HUJZCrU6qCKcNJ2aSWUZhJZu4VI0LB4CHFdj77DRuGi28WKAxoRyZyzGVrmc0jmk1nP5QaxZo1puqq1YIAqgZb8e/rABZJWNCNxV7DSTpOO7Aail9J9nYHtua/4ouE/aS0X1qtXQzwGx+rnbi2vhF/TfZG52oc6DPo1WCi3RTDnRk7TEntoEp38gg+DjYs2opkR3JW5EpL9rU0XSK5/6LOTAVS+72x7pm60zSf5HMdldjhzJqw1FRcxXdS3ZNZp0s92FiyluUvBPoD9ynZNkBiu2NF11ofnlnQbZgKqvusj9R/f6DOzgVsahbNlXxlsxU8y7qrbTupitRyxFBKG6H3aEPUqj7YrzAymq41FXlZLlO4WLbvG2Kg4vYB+wPfWS2B5Rq8TW9ROpAZbiF6MmCTsx1NLLsx7NOoOiZup2CNbZ36xc96ErcxzuILGrmmFhimjtwKo/yTm7feTVwB61IzbnW4967Kt3cDDotGt8JKrTiUyO3Uy2PZZt9tapXEfXhWmTgcoB+JchFWsiCKvYnhmn/tKuJDbgly897FnFfkE1rQLKy810OU7xW3bEJHCD5gERtuTGuxoJqA6qI9TNMa6MbvZomsiubbPYx78YXDaaRqqsyqfSaLZdjYGHLu65rDgydXCWm1P5EvcQ828f9pcBapTILSMv1nZCAc0WzFIFsGfUi/kmAxc6cFqDSYuPSMIbs1OVrwITTQM9HVRFJ5JL56qcoFzzT1uVcd2v9jFw8BHlcWtmEI86hp5Dy/zOlK8cUp/rVseRUBqawz6kmAcPLM9l5m8h4V53Iz/2mFJaTCvF8JbsMvPjU/7crbUXart0v4WyE0LnDPcAX95Knj4VUE8HCdNdUP8BDcOXKdPl4uSWbh4LfOV0HDdfipOmu+eIRrDsNPkIT7np/8ZAzVdOd1u8wHIqeXt8VqtgiO50ePeNaGG+uO9rHiKdL71pnIun8jxEKXv2r2HYBzO/mz96vFKoMM5WLk7tQXS9U5kwCu5lk7n6++kdCFWRaTUzm0/5fClWGWTrM/AGhCrJO/ZBQhTPFLwmV7ebgcdttt91222233Xbbbf+H9h+2WEtdHVinLAAAAABJRU5ErkJggg==",
    base64Error: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJYAAACWCAMAAAAL34HQAAALeGlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNi4wLWMwMDIgNzkuMTY0NDg4LCAyMDIwLzA3LzEwLTIyOjA2OjUzICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0RXZ0PSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VFdmVudCMiIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczpwaG90b3Nob3A9Imh0dHA6Ly9ucy5hZG9iZS5jb20vcGhvdG9zaG9wLzEuMC8iIHhtbG5zOnRpZmY9Imh0dHA6Ly9ucy5hZG9iZS5jb20vdGlmZi8xLjAvIiB4bWxuczpleGlmPSJodHRwOi8vbnMuYWRvYmUuY29tL2V4aWYvMS4wLyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOSAoV2luZG93cykiIHhtcDpDcmVhdGVEYXRlPSIyMDIyLTAyLTIyVDIxOjIxOjQ1KzA4OjAwIiB4bXA6TWV0YWRhdGFEYXRlPSIyMDI0LTAxLTEzVDE5OjEwOjEwKzA4OjAwIiB4bXA6TW9kaWZ5RGF0ZT0iMjAyNC0wMS0xM1QxOToxMDoxMCswODowMCIgZGM6Zm9ybWF0PSJpbWFnZS9wbmciIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MTQ3NTExNjAtZDY5MC00ZTkzLWFhNGUtNGMwYTViNGU1ZGFjIiB4bXBNTTpEb2N1bWVudElEPSJhZG9iZTpkb2NpZDpwaG90b3Nob3A6YzRiNzlkYWMtZTJmYS1iNzQ0LWIxM2ItOWU1N2VjMDhhM2YwIiB4bXBNTTpPcmlnaW5hbERvY3VtZW50SUQ9InhtcC5kaWQ6ZDA4MDI4MDItMzUyYS04NTRhLTkxYjctNmRlNmQ1MmViM2QwIiBwaG90b3Nob3A6Q29sb3JNb2RlPSIzIiBwaG90b3Nob3A6SUNDUHJvZmlsZT0ic1JHQiBJRUM2MTk2Ni0yLjEiIHRpZmY6T3JpZW50YXRpb249IjEiIHRpZmY6WFJlc29sdXRpb249IjMwMDAwMDAvMTAwMDAiIHRpZmY6WVJlc29sdXRpb249IjMwMDAwMDAvMTAwMDAiIHRpZmY6UmVzb2x1dGlvblVuaXQ9IjIiIGV4aWY6Q29sb3JTcGFjZT0iMSIgZXhpZjpQaXhlbFhEaW1lbnNpb249IjMwMCIgZXhpZjpQaXhlbFlEaW1lbnNpb249IjMwMCI+IDx4bXBNTTpIaXN0b3J5PiA8cmRmOlNlcT4gPHJkZjpsaSBzdEV2dDphY3Rpb249ImNyZWF0ZWQiIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6ZDA4MDI4MDItMzUyYS04NTRhLTkxYjctNmRlNmQ1MmViM2QwIiBzdEV2dDp3aGVuPSIyMDIyLTAyLTIyVDIxOjIxOjQ1KzA4OjAwIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOSAoV2luZG93cykiLz4gPHJkZjpsaSBzdEV2dDphY3Rpb249InNhdmVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOjQwNjg2NzJkLWY5NDMtOTU0Mi1iMDBiLTVlMDExNmE1NmIzZSIgc3RFdnQ6d2hlbj0iMjAyNC0wMS0xM1QxMDoyNjoxNiswODowMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTkgKFdpbmRvd3MpIiBzdEV2dDpjaGFuZ2VkPSIvIi8+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJzYXZlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDpjZjk1NTE1OC04MjFiLTA4NDUtYWJmNS05YTE1NGM1ZTY4NjEiIHN0RXZ0OndoZW49IjIwMjQtMDEtMTNUMTE6MDQ6MDQrMDg6MDAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE5IChXaW5kb3dzKSIgc3RFdnQ6Y2hhbmdlZD0iLyIvPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0iY29udmVydGVkIiBzdEV2dDpwYXJhbWV0ZXJzPSJmcm9tIGFwcGxpY2F0aW9uL3ZuZC5hZG9iZS5waG90b3Nob3AgdG8gaW1hZ2UvcG5nIi8+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJkZXJpdmVkIiBzdEV2dDpwYXJhbWV0ZXJzPSJjb252ZXJ0ZWQgZnJvbSBhcHBsaWNhdGlvbi92bmQuYWRvYmUucGhvdG9zaG9wIHRvIGltYWdlL3BuZyIvPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0ic2F2ZWQiIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6ZGM1Y2IyNWItZDZlNC0yZjQ2LTgyODQtZmUwOTNlY2M2ZTkxIiBzdEV2dDp3aGVuPSIyMDI0LTAxLTEzVDExOjA0OjA0KzA4OjAwIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOSAoV2luZG93cykiIHN0RXZ0OmNoYW5nZWQ9Ii8iLz4gPHJkZjpsaSBzdEV2dDphY3Rpb249InNhdmVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOjE0NzUxMTYwLWQ2OTAtNGU5My1hYTRlLTRjMGE1YjRlNWRhYyIgc3RFdnQ6d2hlbj0iMjAyNC0wMS0xM1QxOToxMDoxMCswODowMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIDIyLjAgKE1hY2ludG9zaCkiIHN0RXZ0OmNoYW5nZWQ9Ii8iLz4gPC9yZGY6U2VxPiA8L3htcE1NOkhpc3Rvcnk+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOmNmOTU1MTU4LTgyMWItMDg0NS1hYmY1LTlhMTU0YzVlNjg2MSIgc3RSZWY6ZG9jdW1lbnRJRD0iYWRvYmU6ZG9jaWQ6cGhvdG9zaG9wOjM2ZGQ4NTQxLWQ0MWEtYmY0Yy1iZjA3LWNmNjZhNjZhMDg2MSIgc3RSZWY6b3JpZ2luYWxEb2N1bWVudElEPSJ4bXAuZGlkOmQwODAyODAyLTM1MmEtODU0YS05MWI3LTZkZTZkNTJlYjNkMCIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Ph2LDQsAAAAJcEhZcwAACxMAAAsTAQCanBgAAAA5UExURUdwTNra2s7Ozq2tre3t7dPT087OzuPj4+3t7dbW1u/v79bW1vz8/MrKytDQ0Nzc3MPDw/X19bi4uMZQDnEAAAAKdFJOUwBqEPywotz+wzqApqiTAAAHW0lEQVR42u1b25akIAwcbx2UFoj//7HLTQVBRcSZfTDnbM/uTl/KSlEkwf75eeONN95444033njjjTduR9/0/yOsbqoevObL7101tYX1HFs9QFtfZalRP+rpQVgdAFx990ZnT8L6eZItUl99jeGpf1DxdV/VP9fV1f/PFlF1bYHoVFSRC60IyVjrFRnuB8IoxpExSrstsErKHpJw1eqybNLbAQvAYkKjUrjoBgKRqAaeIjG5+qaps6hKcMWmcdSwqAJWBbAgCZZaIYbsqggqqlHNbFFa5yVR4jKvrKEErOEjNCqNSwHrfE8lpLsod/u+cOPPMPBJ+Gz5dM0cXNgclre+pSxhYI1WW5Tf9ENSMIdLCiWs6q9hwQprBVYKFqyPlx4WtoSvrT9lC/wkGt8qlkQooC3hi6sgW3Bb8gtdpSV/za/mn49pC0oYhONbfyd5hzDLFivKFpTS1gKM0we0tQCEncfgQn7Rt+DC/299i1MSRJcBC0r7VviG5KZvwV5WIUobxHyrJKy8VRjXVgFYsPu5kOtbxdhycCDuihziXVLoW7xwEiUmDgd544B46luWLW+nugMLB2BimmC3cxTNxCDg8xFtuUSNqoFsDKzY8psa+XtBNWXr74N6qxwsS5T6VL5robKl10+ZRu5S9qBvUYuJwVHzjwjrE3G33qKh+WXBgmkmCvHYquTvZ8oo7rLFA4PJgYW0MdePIRQIGUPNbSMw5lubJMKtJI6+Wk6cVFMmACO+VVryeL7ZgI8MhwS2fnNPPK0geHBRd11eJSiyL4KjrL2umm1XIpRii1MKB/mU/iCZwF+pt5z3UJ7UiF3nQqadAXC3T3xEW2IyuDBe3yDTe0+A64it2WTyYSGVHymUI/EduvSWKJ80Dtv2NbYSoQxbMkVC7yzNGIWFvDF7gRD79RYrWW/BDGti4wwLtgvO7gWKUZ8Mt94qX8vLJE70+xVNwzDm9ghNM+FX7p/jlZUId2HJD+Tf79hMe3WNrAK/30E+C8/6xOCqbqxE5JNMYrNbnaLUvJAewfCg8zF0Ba/tbviWLvPYfsGFA1PVD8ZdnjlVc/DS/o7LK4NHjOjKKbfCTSCo5XmwKbaZM4jlc9NGEYd9Ijd0QS5ZGaOR2O+DPlGyRb2nXZzgnI1GdFWF+0gh3ifyTRqvzpXI2eElk58FeHziCF5hY+hSMV9Ge/mohUTGuQ4vzHYe8bW5sNdFQ58St22Vcf5zzJbtcGT4iYQ7iz8dFuxoWRYMjAM7KCnypHOTLSqdUwYIFpndOD/6B2FBzNQxYmW/zxYE4j8yLHga1s2Rbm/O5PXtGcuNDIW1dTj5hpjGsO+7z2Kk9NP1JWDlnWKAM4H6zCUNM05KyVPHBclYzUbgjE3N3tP2JWHBmbqD4GLeCs2jhMT13lMVljwcEbetwZgtHUxVQ21ho3fE7inf2s8vzMWq0EWpfOBg5hcDSGwaF2+LaysRIzNFqRgBv2sMhi/Ix0WiW8rBKNBv4ExBI7eorx9ANazsPCb5FkSNH+Reacos+AYxaFzX76KMH65c8ytzZ40YvpFAqtgC/otn1eCmMI5K8yVRQVVwq3aVtU+jJktwjyP7x+BKv8vtoH098vXYSJcrWGJcAW11r8WVRxe5vgcuFbXqwnaEZejS6mrLwYKUg1ch2RJswTFYgMOwoau+AQsSp/FuDhVZi7J402ifgGla/GJIzGLYG5H4rnKMCUydL9wcsmZSuPikR2QmjQbWqaV2ob2RdMvaLEvFlRiXpYeTwqVOtMZF+qi0dS4uEjJKMvWuYK3S0jHZwaq7BylYp/O2uu3q04lNqudLWEJQd/3paTBz12IaLIPtzE5P1AUuW9TB8NVzaG9/TIfV+eXsWeezz6HWlptEbo4SIAeWur/Y/RZC/gmZTiLzUY2j5ct6fjKsFvxqgyQxE9sbmfYtnJMIciEKo6+FL0wziJmtkzspIcUl0PgWrL7VCKP7hl61U4WLeN+7Ieli2vZhmq0VgjDOgIyhJ62sSpDkWNZa1wiB8WoLlxzy29XpGVPgn1ut5VYcGyRLK7OCiJaDYMrAneJUkZWdw0yDgNm5nDowqLc0Kp581FO7QS4pC9S/YRW9xkVdNOj0ZHCp9anEZw3VEK/fopiDrkMObkcdJtT1g6+uzQ60bIdUPztdWZWy53m+v/zFYPOGHO4AZsalmtJNkyHrCAx1RXX7mt5g1L1pDezpkXv8wJwpVRSSaf2c26Y0rrXXxyWBptu/ovdak+VhkqjGBZUdvKygqANKA/MqZ/36kcGwFn90RnWp66ksKuHgitLFY8BU+F2ZvqpxpMY9qR3YwOUJ12fc0KUHVKdswcKXuwetErCnwvMKuXxfc/3RVJ2yFc+iosQd3X+WGSVz1UiuN2J156FyVyHbsOUp3krezaPUT/VxXqdfwvknb/Zgp+idTxTbrkLqYuKreRnhy65Gf4W0NsDoYiqf6uZsvr8V9eo6XWc5+3TVf/3N1TfeeOONN95444033njjjTfeSI1/IeOYOeO4fGAAAAAASUVORK5CYII=",
    base64BackToTop: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADIBAMAAABfdrOtAAAAElBMVEVRUVH+/v5HcEyZmZlRUVFRUVGm1ByOAAAABnRSTlPMzADMTZAJBBGsAAAEnElEQVR42t2cS27jMAyGf7/2U+QCQeDsbeQCgZDujaC5/1UmkzaJn+JDFGcw3LdfflKibJkkDnxrL7dbg7sNt6+L4O8OYBM+B0ys+QrGkHZG+OEEQ8g6go8Bx1GIGMdpNOQyIG6XdMgnSPtKhLQDGEZFBgYMkhKFtGBb0EIEjDgFRowoBVaMGAWpMedEfxMiZtwpUsgZCqtlkCNUdpVAWigtCCCDFtLwIWeoreZCWiRYYEKGFEjDg+yRZCUH0iLRAgNyToXUNCRZyMqWhGnUN2IPm3wSlwJ7IUspyCBkIQUZhCykIIeQuRTkEDKXAuM9srrtYbrZN7Y98giZSoFd+t1OxmMITG0dcrSFXFchZ1tIvQZpYWxhBbK3hpQrkMEa0iwh5t4a+QvZvDXyF7J5a+Qv5PPW21/I5623v5DPW29/IaO3Xv5Clrw1y1/Ikrdm+Qs5svw83yNnSJ5BQb4F/F7EIEJSnThGBAXxkFQfLOviQUE8JAUPsosHBfGQfDAtHhREQ1JxIV00KIgmrnRI84S0yAd5BAXxxJUck0f6Qnwr9qmr6xF5xLMjcwn/iudIEAdWnyjkEXlQKZiRVzoqRyLbgeUKKR8Q4alY7cSnoxzSf2ggsqehKr6YVpcXpOd7H93f60cKhOd7Re2LteUF4eLqiVS1mr0ge4io6C2+soaFkJ7MuuuQs1yITEp9hwwKISIpzR2iESKSIoT0rLNwuVHQqoSIpAQJpGce60vIUSdEIuUqgPTsJ5QFZK8UIpBS8iG94GFrDjlrhfCl8CG96Llxmle4kEr6vKWBPIVo9kqDQSRk9/3cWoikcCFPAd33v4dIChPyEvLzBA6RlEYWke4JEUnhKXkLeUEKxRHJFfKCQHGucIW8IdZSRkLeEGMpYyEjiK2UsZARxFTKRMgYYillImQMMZQyFTKB2EmZCplAuFLIHT8TMoWwpQwiIVMIUwqpZP5bp5CCvCTiQKr5f5lCQN+tPCBn2ZvVDFJwIDUP0m1BYAfZYRNSsCB7BqTbhoARePIxtZ9tgwWkoJcwCalmv3MBAemtO4R6dah2HaKQqj8Zvp9sQDjvJ21+SPCBHPJDDk6QITekEV7gqCC19CpKAym9IMfckKv4olMBCeIrWwVEfvkshzQekO9r9P1/ALk+IG1eSPCDiCJfyG+FyU+A6ZCa/piZDinpz7LpkCv5gdkAEshP5emQhv7onw6pGeULyZCSUYiRDAmMkpJkCKs4JhFSq8p8hJBSVbAkhARV6ZUQoisik0FqXTmcDHLVFfbJIEFXoiiCNMpiSxGkVJaNiiBBWQArgTTaUl4JpNQWJUsgQVteXQg+AKkLxQWFGKW+5J2+eVp4S168X3CF1CltCKdTJ8lb84YK2bUBO+wZW0Pqv9nk4tKu49N45NJC5dMM5tLW5tOg59Jq6NM06dL+abFXwr/RkuvTXJwae1abtE/Dt0/ruksTvs84AZ/BCC4jHnyGVfiM3VBQFANEXEah+Ax18RlP4zNox2dkkM/wI58xTn8yDCXGYCDV3W5RGSajtXyGhG1jbpbjzpwGt/0MJft8jqC7iUbQ/QZaxdnKqcIftwAAAABJRU5ErkJggg=="
  };
  const _sfc_main$h = {
    name: "z-paging-empty-view",
    data() {
      return {};
    },
    props: {
      // 空数据描述文字
      emptyViewText: {
        type: String,
        default: "没有数据哦~"
      },
      // 空数据图片
      emptyViewImg: {
        type: String,
        default: ""
      },
      // 是否显示空数据图重新加载按钮
      showEmptyViewReload: {
        type: Boolean,
        default: false
      },
      // 空数据点击重新加载文字
      emptyViewReloadText: {
        type: String,
        default: "重新加载"
      },
      // 是否是加载失败
      isLoadFailed: {
        type: Boolean,
        default: false
      },
      // 空数据图样式
      emptyViewStyle: {
        type: Object,
        default: function() {
          return {};
        }
      },
      // 空数据图img样式
      emptyViewImgStyle: {
        type: Object,
        default: function() {
          return {};
        }
      },
      // 空数据图描述文字样式
      emptyViewTitleStyle: {
        type: Object,
        default: function() {
          return {};
        }
      },
      // 空数据图重新加载按钮样式
      emptyViewReloadStyle: {
        type: Object,
        default: function() {
          return {};
        }
      },
      // 空数据图z-index
      emptyViewZIndex: {
        type: Number,
        default: 9
      },
      // 空数据图片是否使用fixed布局并铺满z-paging
      emptyViewFixed: {
        type: Boolean,
        default: true
      },
      // 空数据图中布局的单位，默认为rpx
      unit: {
        type: String,
        default: "rpx"
      }
    },
    computed: {
      emptyImg() {
        return this.isLoadFailed ? zStatic.base64Error : zStatic.base64Empty;
      },
      finalEmptyViewStyle() {
        this.emptyViewStyle["z-index"] = this.emptyViewZIndex;
        return this.emptyViewStyle;
      }
    },
    methods: {
      // 点击了reload按钮
      reloadClick() {
        this.$emit("reload");
      },
      // 点击了空数据view
      emptyViewClick() {
        this.$emit("viewClick");
      }
    }
  };
  function _sfc_render$g(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock(
      "view",
      {
        class: vue.normalizeClass({ "zp-container": true, "zp-container-fixed": $props.emptyViewFixed }),
        style: vue.normalizeStyle([$options.finalEmptyViewStyle]),
        onClick: _cache[1] || (_cache[1] = (...args) => $options.emptyViewClick && $options.emptyViewClick(...args))
      },
      [
        vue.createElementVNode("view", { class: "zp-main" }, [
          !$props.emptyViewImg.length ? (vue.openBlock(), vue.createElementBlock("image", {
            key: 0,
            class: vue.normalizeClass({ "zp-main-image-rpx": $props.unit === "rpx", "zp-main-image-px": $props.unit === "px" }),
            style: vue.normalizeStyle([$props.emptyViewImgStyle]),
            src: $options.emptyImg
          }, null, 14, ["src"])) : (vue.openBlock(), vue.createElementBlock("image", {
            key: 1,
            class: vue.normalizeClass({ "zp-main-image-rpx": $props.unit === "rpx", "zp-main-image-px": $props.unit === "px" }),
            mode: "aspectFit",
            style: vue.normalizeStyle([$props.emptyViewImgStyle]),
            src: $props.emptyViewImg
          }, null, 14, ["src"])),
          vue.createElementVNode(
            "text",
            {
              class: vue.normalizeClass(["zp-main-title", { "zp-main-title-rpx": $props.unit === "rpx", "zp-main-title-px": $props.unit === "px" }]),
              style: vue.normalizeStyle([$props.emptyViewTitleStyle])
            },
            vue.toDisplayString($props.emptyViewText),
            7
            /* TEXT, CLASS, STYLE */
          ),
          $props.showEmptyViewReload ? (vue.openBlock(), vue.createElementBlock(
            "text",
            {
              key: 2,
              class: vue.normalizeClass({ "zp-main-error-btn": true, "zp-main-error-btn-rpx": $props.unit === "rpx", "zp-main-error-btn-px": $props.unit === "px" }),
              style: vue.normalizeStyle([$props.emptyViewReloadStyle]),
              onClick: _cache[0] || (_cache[0] = vue.withModifiers((...args) => $options.reloadClick && $options.reloadClick(...args), ["stop"]))
            },
            vue.toDisplayString($props.emptyViewReloadText),
            7
            /* TEXT, CLASS, STYLE */
          )) : vue.createCommentVNode("v-if", true)
        ])
      ],
      6
      /* CLASS, STYLE */
    );
  }
  const __easycom_0$1 = /* @__PURE__ */ _export_sfc(_sfc_main$h, [["render", _sfc_render$g], ["__scopeId", "data-v-b7999e14"], ["__file", "E:/dome/music/uni_modules/z-paging/components/z-paging-empty-view/z-paging-empty-view.vue"]]);
  const c = {
    // 当前版本号
    version: "2.8.8",
    // 延迟操作的通用时间
    delayTime: 100,
    // 请求失败时候全局emit使用的key
    errorUpdateKey: "z-paging-error-emit",
    // 全局emit complete的key
    completeUpdateKey: "z-paging-complete-emit",
    // z-paging缓存的前缀key
    cachePrefixKey: "z-paging-cache",
    // 虚拟列表中列表index的key
    listCellIndexKey: "zp_index",
    // 虚拟列表中列表的唯一key
    listCellIndexUniqueKey: "zp_unique_index"
  };
  const zLocalConfig = {};
  const storageKey = "Z-PAGING-REFRESHER-TIME-STORAGE-KEY";
  let config = null;
  let configLoaded = false;
  let cachedSystemInfo = null;
  const timeoutMap = {};
  function gc(key, defaultValue) {
    return () => {
      _handleDefaultConfig();
      if (!config)
        return defaultValue;
      const value = config[key];
      return value === void 0 ? defaultValue : value;
    };
  }
  function getTouch(e) {
    let touch = null;
    if (e.touches && e.touches.length) {
      touch = e.touches[0];
    } else if (e.changedTouches && e.changedTouches.length) {
      touch = e.changedTouches[0];
    } else if (e.datail && e.datail != {}) {
      touch = e.datail;
    } else {
      return { touchX: 0, touchY: 0 };
    }
    return {
      touchX: touch.clientX,
      touchY: touch.clientY
    };
  }
  function getTouchFromZPaging(target) {
    if (target && target.tagName && target.tagName !== "BODY" && target.tagName !== "UNI-PAGE-BODY") {
      const classList = target.classList;
      if (classList && classList.contains("z-paging-content")) {
        return {
          isFromZp: true,
          isPageScroll: classList.contains("z-paging-content-page"),
          isReachedTop: classList.contains("z-paging-reached-top"),
          isUseChatRecordMode: classList.contains("z-paging-use-chat-record-mode")
        };
      } else {
        return getTouchFromZPaging(target.parentNode);
      }
    } else {
      return { isFromZp: false };
    }
  }
  function getParent(parent) {
    if (!parent)
      return null;
    if (parent.$refs.paging)
      return parent;
    return getParent(parent.$parent);
  }
  function consoleErr(err) {
    formatAppLog("error", "at uni_modules/z-paging/components/z-paging/js/z-paging-utils.js:73", `[z-paging]${err}`);
  }
  function delay(callback, ms = c.delayTime, key) {
    const timeout = setTimeout(callback, ms);
    if (!!key) {
      timeoutMap[key] && clearTimeout(timeoutMap[key]);
      timeoutMap[key] = timeout;
    }
    return timeout;
  }
  function setRefesrherTime(time, key) {
    const datas = getRefesrherTime() || {};
    datas[key] = time;
    uni.setStorageSync(storageKey, datas);
  }
  function getRefesrherTime() {
    return uni.getStorageSync(storageKey);
  }
  function getRefesrherTimeByKey(key) {
    const datas = getRefesrherTime();
    return datas && datas[key] ? datas[key] : null;
  }
  function getRefesrherFormatTimeByKey(key, textMap) {
    const time = getRefesrherTimeByKey(key);
    const timeText = time ? _timeFormat(time, textMap) : textMap.none;
    return `${textMap.title}${timeText}`;
  }
  function convertToPx(text) {
    const dataType = Object.prototype.toString.call(text);
    if (dataType === "[object Number]")
      return text;
    let isRpx = false;
    if (text.indexOf("rpx") !== -1 || text.indexOf("upx") !== -1) {
      text = text.replace("rpx", "").replace("upx", "");
      isRpx = true;
    } else if (text.indexOf("px") !== -1) {
      text = text.replace("px", "");
    }
    if (!isNaN(text)) {
      if (isRpx)
        return Number(rpx2px(text));
      return Number(text);
    }
    return 0;
  }
  function rpx2px(rpx) {
    return uni.upx2px(rpx);
  }
  function getSystemInfoSync(useCache = false) {
    if (useCache && cachedSystemInfo) {
      return cachedSystemInfo;
    }
    const infoTypes = ["DeviceInfo", "AppBaseInfo", "WindowInfo"];
    const { deviceInfo, appBaseInfo, windowInfo } = infoTypes.reduce((acc, key) => {
      const method = `get${key}`;
      if (uni[method] && uni.canIUse(method)) {
        acc[key.charAt(0).toLowerCase() + key.slice(1)] = uni[method]();
      }
      return acc;
    }, {});
    if (deviceInfo && appBaseInfo && windowInfo) {
      cachedSystemInfo = { ...deviceInfo, ...appBaseInfo, ...windowInfo };
    } else {
      cachedSystemInfo = uni.getSystemInfoSync();
    }
    return cachedSystemInfo;
  }
  function getTime() {
    return (/* @__PURE__ */ new Date()).getTime();
  }
  function getInstanceId() {
    const s = [];
    const hexDigits = "0123456789abcdef";
    for (let i = 0; i < 10; i++) {
      s[i] = hexDigits.substr(Math.floor(Math.random() * 16), 1);
    }
    return s.join("") + getTime();
  }
  function wait(ms) {
    return new Promise((resolve) => {
      setTimeout(resolve, ms);
    });
  }
  function isPromise(func) {
    return Object.prototype.toString.call(func) === "[object Promise]";
  }
  function addUnit(value, unit) {
    if (Object.prototype.toString.call(value) === "[object String]") {
      let tempValue = value;
      tempValue = tempValue.replace("rpx", "").replace("upx", "").replace("px", "");
      if (value.indexOf("rpx") === -1 && value.indexOf("upx") === -1 && value.indexOf("px") !== -1) {
        tempValue = parseFloat(tempValue) * 2;
      }
      value = tempValue;
    }
    return unit === "rpx" ? value + "rpx" : value / 2 + "px";
  }
  function deepCopy(obj) {
    if (typeof obj !== "object" || obj === null)
      return obj;
    let newObj = Array.isArray(obj) ? [] : {};
    for (let key in obj) {
      if (obj.hasOwnProperty(key)) {
        newObj[key] = deepCopy(obj[key]);
      }
    }
    return newObj;
  }
  function useBufferedInsert(fn, delay2 = 50) {
    let buffer = [];
    let timer = null;
    let latestArgs = [];
    return function insertBuffered(data, ...args) {
      const newData = Object.prototype.toString.call(data) !== "[object Array]" ? [data] : data;
      buffer.push(...newData);
      latestArgs = args;
      if (!timer) {
        timer = setTimeout(() => {
          fn(buffer.length === 1 ? buffer[0] : buffer, ...latestArgs);
          buffer = [];
          timer = null;
        }, buffer.length === 1 ? 10 : delay2);
      }
    };
  }
  function _handleDefaultConfig() {
    if (configLoaded)
      return;
    if (zLocalConfig && Object.keys(zLocalConfig).length) {
      config = zLocalConfig;
    }
    if (!config && uni.$zp) {
      config = uni.$zp.config;
    }
    config = config ? Object.keys(config).reduce((result, key) => {
      result[_toCamelCase(key)] = config[key];
      return result;
    }, {}) : null;
    configLoaded = true;
  }
  function _timeFormat(time, textMap) {
    const date = new Date(time);
    const currentDate = /* @__PURE__ */ new Date();
    const dateDay = new Date(time).setHours(0, 0, 0, 0);
    const currentDateDay = (/* @__PURE__ */ new Date()).setHours(0, 0, 0, 0);
    const disTime = dateDay - currentDateDay;
    let dayStr = "";
    const timeStr = _dateTimeFormat(date);
    if (disTime === 0) {
      dayStr = textMap.today;
    } else if (disTime === -864e5) {
      dayStr = textMap.yesterday;
    } else {
      dayStr = _dateDayFormat(date, date.getFullYear() !== currentDate.getFullYear());
    }
    return `${dayStr} ${timeStr}`;
  }
  function _dateDayFormat(date, showYear = true) {
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    return showYear ? `${year}-${_fullZeroToTwo(month)}-${_fullZeroToTwo(day)}` : `${_fullZeroToTwo(month)}-${_fullZeroToTwo(day)}`;
  }
  function _dateTimeFormat(date) {
    const hour = date.getHours();
    const minute = date.getMinutes();
    return `${_fullZeroToTwo(hour)}:${_fullZeroToTwo(minute)}`;
  }
  function _fullZeroToTwo(str) {
    str = str.toString();
    return str.length === 1 ? "0" + str : str;
  }
  function _toCamelCase(value) {
    return value.replace(/-([a-z])/g, (_, group1) => group1.toUpperCase());
  }
  const u = {
    gc,
    setRefesrherTime,
    getRefesrherFormatTimeByKey,
    getTouch,
    getTouchFromZPaging,
    getParent,
    convertToPx,
    getTime,
    getInstanceId,
    consoleErr,
    delay,
    wait,
    isPromise,
    addUnit,
    deepCopy,
    rpx2px,
    getSystemInfoSync,
    useBufferedInsert
  };
  const Enum = {
    // 当前加载类型 refresher:下拉刷新 load-more:上拉加载更多
    LoadingType: {
      Refresher: "refresher",
      LoadMore: "load-more"
    },
    // 下拉刷新状态 default:默认状态 release-to-refresh:松手立即刷新 loading:刷新中 complete:刷新结束 go-f2:松手进入二楼
    Refresher: {
      Default: "default",
      ReleaseToRefresh: "release-to-refresh",
      Loading: "loading",
      Complete: "complete",
      GoF2: "go-f2"
    },
    // 底部加载更多状态 default:默认状态 loading:加载中 no-more:没有更多数据 fail:加载失败
    More: {
      Default: "default",
      Loading: "loading",
      NoMore: "no-more",
      Fail: "fail"
    },
    // @query触发来源 user-pull-down:用户主动下拉刷新 reload:通过reload触发 refresh:通过refresh触发 load-more:通过滚动到底部加载更多或点击底部加载更多触发
    QueryFrom: {
      UserPullDown: "user-pull-down",
      Reload: "reload",
      Refresh: "refresh",
      LoadMore: "load-more"
    },
    // 虚拟列表cell高度模式
    CellHeightMode: {
      // 固定高度
      Fixed: "fixed",
      // 动态高度
      Dynamic: "dynamic"
    },
    // 列表缓存模式
    CacheMode: {
      // 默认模式，只会缓存一次
      Default: "default",
      // 总是缓存，每次列表刷新(下拉刷新、调用reload等)都会更新缓存
      Always: "always"
    }
  };
  const _sfc_main$g = {
    name: "z-paging-refresh",
    data() {
      return {
        R: Enum.Refresher,
        refresherTimeText: "",
        zTheme: {
          title: { white: "#efefef", black: "#555555" },
          arrow: { white: zStatic.base64ArrowWhite, black: zStatic.base64Arrow },
          flower: { white: zStatic.base64FlowerWhite, black: zStatic.base64Flower },
          success: { white: zStatic.base64SuccessWhite, black: zStatic.base64Success },
          indicator: { white: "#eeeeee", black: "#777777" }
        }
      };
    },
    props: [
      "status",
      "defaultThemeStyle",
      "defaultText",
      "pullingText",
      "refreshingText",
      "completeText",
      "goF2Text",
      "defaultImg",
      "pullingImg",
      "refreshingImg",
      "completeImg",
      "refreshingAnimated",
      "showUpdateTime",
      "updateTimeKey",
      "imgStyle",
      "titleStyle",
      "updateTimeStyle",
      "updateTimeTextMap",
      "unit",
      "isIos"
    ],
    computed: {
      ts() {
        return this.defaultThemeStyle;
      },
      // 当前状态Map
      statusTextMap() {
        this.updateTime();
        const { R, defaultText, pullingText, refreshingText, completeText, goF2Text } = this;
        return {
          [R.Default]: defaultText,
          [R.ReleaseToRefresh]: pullingText,
          [R.Loading]: refreshingText,
          [R.Complete]: completeText,
          [R.GoF2]: goF2Text
        };
      },
      // 当前状态文字
      currentTitle() {
        return this.statusTextMap[this.status] || this.defaultText;
      },
      // 左侧图片class
      leftImageClass() {
        const preSizeClass = `zp-r-left-image-pre-size-${this.unit}`;
        if (this.status === this.R.Complete)
          return preSizeClass;
        return `zp-r-left-image ${preSizeClass} ${this.status === this.R.Default ? "zp-r-arrow-down" : "zp-r-arrow-top"}`;
      },
      // 左侧图片style
      leftImageStyle() {
        const showUpdateTime = this.showUpdateTime;
        const size = showUpdateTime ? u.addUnit(36, this.unit) : u.addUnit(34, this.unit);
        return { width: size, height: size, "margin-right": showUpdateTime ? u.addUnit(20, this.unit) : u.addUnit(9, this.unit) };
      },
      // 左侧图片src
      leftImageSrc() {
        const R = this.R;
        const status = this.status;
        if (status === R.Default) {
          if (!!this.defaultImg)
            return this.defaultImg;
          return this.zTheme.arrow[this.ts];
        } else if (status === R.ReleaseToRefresh) {
          if (!!this.pullingImg)
            return this.pullingImg;
          if (!!this.defaultImg)
            return this.defaultImg;
          return this.zTheme.arrow[this.ts];
        } else if (status === R.Loading) {
          if (!!this.refreshingImg)
            return this.refreshingImg;
          return this.zTheme.flower[this.ts];
        } else if (status === R.Complete) {
          if (!!this.completeImg)
            return this.completeImg;
          return this.zTheme.success[this.ts];
        } else if (status === R.GoF2) {
          return this.zTheme.arrow[this.ts];
        }
        return "";
      },
      // 右侧文字style
      rightTextStyle() {
        let stl = {};
        stl["color"] = this.zTheme.title[this.ts];
        stl["font-size"] = u.addUnit(30, this.unit);
        return stl;
      }
    },
    methods: {
      // 添加单位
      addUnit(value, unit) {
        return u.addUnit(value, unit);
      },
      // 更新下拉刷新时间
      updateTime() {
        if (this.showUpdateTime) {
          this.refresherTimeText = u.getRefesrherFormatTimeByKey(this.updateTimeKey, this.updateTimeTextMap);
        }
      }
    }
  };
  function _sfc_render$f(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", { style: { "height": "100%" } }, [
      vue.createElementVNode(
        "view",
        {
          class: vue.normalizeClass($props.showUpdateTime ? "zp-r-container zp-r-container-padding" : "zp-r-container")
        },
        [
          vue.createElementVNode("view", { class: "zp-r-left" }, [
            vue.createCommentVNode(" 非加载中(继续下拉刷新、松手立即刷新状态图片) "),
            $props.status !== $data.R.Loading ? (vue.openBlock(), vue.createElementBlock("image", {
              key: 0,
              class: vue.normalizeClass($options.leftImageClass),
              style: vue.normalizeStyle([$options.leftImageStyle, $props.imgStyle]),
              src: $options.leftImageSrc
            }, null, 14, ["src"])) : (vue.openBlock(), vue.createElementBlock(
              vue.Fragment,
              { key: 1 },
              [
                vue.createCommentVNode(" 加载状态图片 "),
                vue.createElementVNode("image", {
                  class: vue.normalizeClass({ "zp-line-loading-image": $props.refreshingAnimated, "zp-r-left-image": true, "zp-r-left-image-pre-size-rpx": $props.unit === "rpx", "zp-r-left-image-pre-size-px": $props.unit === "px" }),
                  style: vue.normalizeStyle([$options.leftImageStyle, $props.imgStyle]),
                  src: $options.leftImageSrc
                }, null, 14, ["src"])
              ],
              2112
              /* STABLE_FRAGMENT, DEV_ROOT_FRAGMENT */
            )),
            vue.createCommentVNode(" 在nvue中，加载状态loading使用系统loading ")
          ]),
          vue.createCommentVNode(" 右侧文字内容 "),
          vue.createElementVNode("view", { class: "zp-r-right" }, [
            vue.createCommentVNode(" 右侧下拉刷新状态文字 "),
            vue.createElementVNode(
              "text",
              {
                class: "zp-r-right-text",
                style: vue.normalizeStyle([$options.rightTextStyle, $props.titleStyle])
              },
              vue.toDisplayString($options.currentTitle),
              5
              /* TEXT, STYLE */
            ),
            vue.createCommentVNode(" 右侧下拉刷新时间文字 "),
            $props.showUpdateTime && $data.refresherTimeText.length ? (vue.openBlock(), vue.createElementBlock(
              "text",
              {
                key: 0,
                class: vue.normalizeClass(["zp-r-right-text", { "zp-r-right-time-text-rpx": $props.unit === "rpx", "zp-r-right-time-text-px": $props.unit === "px" }]),
                style: vue.normalizeStyle([{ color: $data.zTheme.title[$options.ts] }, $props.updateTimeStyle])
              },
              vue.toDisplayString($data.refresherTimeText),
              7
              /* TEXT, CLASS, STYLE */
            )) : vue.createCommentVNode("v-if", true)
          ])
        ],
        2
        /* CLASS */
      )
    ]);
  }
  const zPagingRefresh = /* @__PURE__ */ _export_sfc(_sfc_main$g, [["render", _sfc_render$f], ["__scopeId", "data-v-00a16504"], ["__file", "E:/dome/music/uni_modules/z-paging/components/z-paging/components/z-paging-refresh.vue"]]);
  const _sfc_main$f = {
    name: "z-paging-load-more",
    data() {
      return {
        M: Enum.More,
        zTheme: {
          title: { white: "#efefef", black: "#a4a4a4" },
          line: { white: "#efefef", black: "#eeeeee" },
          circleBorder: { white: "#aaaaaa", black: "#c8c8c8" },
          circleBorderTop: { white: "#ffffff", black: "#444444" },
          flower: { white: zStatic.base64FlowerWhite, black: zStatic.base64Flower },
          indicator: { white: "#eeeeee", black: "#777777" }
        }
      };
    },
    props: ["zConfig"],
    computed: {
      ts() {
        return this.c.defaultThemeStyle;
      },
      // 底部加载更多配置
      c() {
        return this.zConfig || {};
      },
      // 底部加载更多文字
      ownLoadingMoreText() {
        return {
          [this.M.Default]: this.c.defaultText,
          [this.M.Loading]: this.c.loadingText,
          [this.M.NoMore]: this.c.noMoreText,
          [this.M.Fail]: this.c.failText
        }[this.finalStatus];
      },
      // 底部加载更多状态
      finalStatus() {
        if (this.c.defaultAsLoading && this.c.status === this.M.Default)
          return this.M.Loading;
        return this.c.status;
      },
      // 加载更多icon类型
      finalLoadingIconType() {
        return this.c.loadingIconType;
      }
    },
    methods: {
      // 点击了加载更多
      doClick() {
        this.$emit("doClick");
      }
    }
  };
  function _sfc_render$e(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock(
      "view",
      {
        class: vue.normalizeClass(["zp-l-container", { "zp-l-container-rpx": $options.c.unit === "rpx", "zp-l-container-px": $options.c.unit === "px" }]),
        style: vue.normalizeStyle([$options.c.customStyle]),
        onClick: _cache[0] || (_cache[0] = (...args) => $options.doClick && $options.doClick(...args))
      },
      [
        !$options.c.hideContent ? (vue.openBlock(), vue.createElementBlock(
          vue.Fragment,
          { key: 0 },
          [
            vue.createCommentVNode(" 底部加载更多没有更多数据分割线 "),
            $options.c.showNoMoreLine && $options.finalStatus === $data.M.NoMore ? (vue.openBlock(), vue.createElementBlock(
              "text",
              {
                key: 0,
                class: vue.normalizeClass({ "zp-l-line-rpx": $options.c.unit === "rpx", "zp-l-line-px": $options.c.unit === "px" }),
                style: vue.normalizeStyle([{ backgroundColor: $data.zTheme.line[$options.ts] }, $options.c.noMoreLineCustomStyle])
              },
              null,
              6
              /* CLASS, STYLE */
            )) : vue.createCommentVNode("v-if", true),
            vue.createCommentVNode(" 底部加载更多loading "),
            $options.finalStatus === $data.M.Loading && !!$options.c.loadingIconCustomImage ? (vue.openBlock(), vue.createElementBlock("image", {
              key: 1,
              src: $options.c.loadingIconCustomImage,
              style: vue.normalizeStyle([$options.c.iconCustomStyle]),
              class: vue.normalizeClass({ "zp-l-line-loading-custom-image": true, "zp-l-line-loading-custom-image-animated": $options.c.loadingAnimated, "zp-l-line-loading-custom-image-rpx": $options.c.unit === "rpx", "zp-l-line-loading-custom-image-px": $options.c.unit === "px" })
            }, null, 14, ["src"])) : vue.createCommentVNode("v-if", true),
            $options.finalStatus === $data.M.Loading && $options.finalLoadingIconType === "flower" && !$options.c.loadingIconCustomImage.length ? (vue.openBlock(), vue.createElementBlock("image", {
              key: 2,
              class: vue.normalizeClass({ "zp-line-loading-image": true, "zp-line-loading-image-rpx": $options.c.unit === "rpx", "zp-line-loading-image-px": $options.c.unit === "px" }),
              style: vue.normalizeStyle([$options.c.iconCustomStyle]),
              src: $data.zTheme.flower[$options.ts]
            }, null, 14, ["src"])) : vue.createCommentVNode("v-if", true),
            vue.createCommentVNode(" 底部加载更多文字 "),
            $options.finalStatus === $data.M.Loading && $options.finalLoadingIconType === "circle" && !$options.c.loadingIconCustomImage.length ? (vue.openBlock(), vue.createElementBlock(
              "text",
              {
                key: 3,
                class: vue.normalizeClass(["zp-l-circle-loading-view", { "zp-l-circle-loading-view-rpx": $options.c.unit === "rpx", "zp-l-circle-loading-view-px": $options.c.unit === "px" }]),
                style: vue.normalizeStyle([{ borderColor: $data.zTheme.circleBorder[$options.ts], borderTopColor: $data.zTheme.circleBorderTop[$options.ts] }, $options.c.iconCustomStyle])
              },
              null,
              6
              /* CLASS, STYLE */
            )) : vue.createCommentVNode("v-if", true),
            !$options.c.isChat || !$options.c.chatDefaultAsLoading && $options.finalStatus === $data.M.Default || $options.finalStatus === $data.M.Fail ? (vue.openBlock(), vue.createElementBlock(
              "text",
              {
                key: 4,
                class: vue.normalizeClass({ "zp-l-text-rpx": $options.c.unit === "rpx", "zp-l-text-px": $options.c.unit === "px" }),
                style: vue.normalizeStyle([{ color: $data.zTheme.title[$options.ts] }, $options.c.titleCustomStyle])
              },
              vue.toDisplayString($options.ownLoadingMoreText),
              7
              /* TEXT, CLASS, STYLE */
            )) : vue.createCommentVNode("v-if", true),
            vue.createCommentVNode(" 底部加载更多没有更多数据分割线 "),
            $options.c.showNoMoreLine && $options.finalStatus === $data.M.NoMore ? (vue.openBlock(), vue.createElementBlock(
              "text",
              {
                key: 5,
                class: vue.normalizeClass({ "zp-l-line-rpx": $options.c.unit === "rpx", "zp-l-line-px": $options.c.unit === "px" }),
                style: vue.normalizeStyle([{ backgroundColor: $data.zTheme.line[$options.ts] }, $options.c.noMoreLineCustomStyle])
              },
              null,
              6
              /* CLASS, STYLE */
            )) : vue.createCommentVNode("v-if", true)
          ],
          64
          /* STABLE_FRAGMENT */
        )) : vue.createCommentVNode("v-if", true)
      ],
      6
      /* CLASS, STYLE */
    );
  }
  const zPagingLoadMore = /* @__PURE__ */ _export_sfc(_sfc_main$f, [["render", _sfc_render$e], ["__scopeId", "data-v-8cc5c400"], ["__file", "E:/dome/music/uni_modules/z-paging/components/z-paging/components/z-paging-load-more.vue"]]);
  const commonLayoutModule = {
    data() {
      return {
        systemInfo: null,
        cssSafeAreaInsetBottom: -1,
        isReadyDestroy: false
      };
    },
    computed: {
      // 顶部可用距离
      windowTop() {
        if (!this.systemInfo)
          return 0;
        return this.systemInfo.windowTop || 0;
      },
      // 底部安全区域高度
      safeAreaBottom() {
        if (!this.systemInfo)
          return 0;
        let safeAreaBottom = 0;
        safeAreaBottom = this.systemInfo.safeAreaInsets.bottom || 0;
        return safeAreaBottom;
      },
      // 是否是比较老的webview，在一些老的webview中，需要进行一些特殊处理
      isOldWebView() {
        try {
          const systemInfos = u.getSystemInfoSync(true).system.split(" ");
          const deviceType = systemInfos[0];
          const version = parseInt(systemInfos[1]);
          if (deviceType === "iOS" && version <= 10 || deviceType === "Android" && version <= 6) {
            return true;
          }
        } catch (e) {
          return false;
        }
        return false;
      },
      // 当前组件的$slots，兼容不同平台
      zSlots() {
        return this.$slots;
      }
    },
    beforeDestroy() {
      this.isReadyDestroy = true;
    },
    unmounted() {
      this.isReadyDestroy = true;
    },
    methods: {
      // 更新fixed模式下z-paging的布局
      updateFixedLayout() {
        this.fixed && this.$nextTick(() => {
          this.systemInfo = u.getSystemInfoSync();
        });
      },
      // 获取节点尺寸
      _getNodeClientRect(select, inDom = true, scrollOffset = false) {
        if (this.isReadyDestroy) {
          return Promise.resolve(false);
        }
        let res = !!inDom ? uni.createSelectorQuery().in(inDom === true ? this : inDom) : uni.createSelectorQuery();
        scrollOffset ? res.select(select).scrollOffset() : res.select(select).boundingClientRect();
        return new Promise((resolve, reject) => {
          res.exec((data) => {
            resolve(data && data != "" && data != void 0 && data.length ? data : false);
          });
        });
      },
      // 获取slot="left"和slot="right"宽度并且更新布局
      _updateLeftAndRightWidth(targetStyle, parentNodePrefix) {
        this.$nextTick(() => {
          let delayTime = 0;
          setTimeout(() => {
            ["left", "right"].map((position) => {
              this._getNodeClientRect(`.${parentNodePrefix}-${position}`).then((res) => {
                this.$set(targetStyle, position, res ? res[0].width + "px" : "0px");
              });
            });
          }, delayTime);
        });
      },
      // 通过获取css设置的底部安全区域占位view高度设置bottom距离（直接通过systemInfo在部分平台上无法获取到底部安全区域）
      _getCssSafeAreaInsetBottom(success) {
        this._getNodeClientRect(".zp-safe-area-inset-bottom").then((res) => {
          this.cssSafeAreaInsetBottom = res ? res[0].height : -1;
          res && success && success();
        });
      },
      // 同步获取系统信息，兼容不同平台（供z-paging-swiper使用）
      _getSystemInfoSync(useCache = false) {
        return u.getSystemInfoSync(useCache);
      }
    }
  };
  const queryKey = "Query";
  const fetchParamsKey = "FetchParams";
  const fetchResultKey = "FetchResult";
  const language2LocalKey = "Language2Local";
  function handleQuery(callback) {
    _addHandleByKey(queryKey, callback);
    return this;
  }
  function _handleQuery(pageNo, pageSize, from, lastItem) {
    const callback = _getHandleByKey(queryKey);
    return callback ? callback(pageNo, pageSize, from, lastItem) : [pageNo, pageSize, from];
  }
  function handleFetchParams(callback) {
    _addHandleByKey(fetchParamsKey, callback);
    return this;
  }
  function _handleFetchParams(parmas, extraParams) {
    const callback = _getHandleByKey(fetchParamsKey);
    return callback ? callback(parmas, extraParams || {}) : { pageNo: parmas.pageNo, pageSize: parmas.pageSize, ...extraParams || {} };
  }
  function handleFetchResult(callback) {
    _addHandleByKey(fetchResultKey, callback);
    return this;
  }
  function _handleFetchResult(result, paging, params) {
    const callback = _getHandleByKey(fetchResultKey);
    callback && callback(result, paging, params);
    return callback ? true : false;
  }
  function handleLanguage2Local(callback) {
    _addHandleByKey(language2LocalKey, callback);
    return this;
  }
  function _handleLanguage2Local(language, local) {
    const callback = _getHandleByKey(language2LocalKey);
    return callback ? callback(language, local) : local;
  }
  function _getApp() {
    return getApp();
  }
  function _hasGlobalData() {
    return _getApp() && _getApp().globalData;
  }
  function _addHandleByKey(key, callback) {
    try {
      setTimeout(function() {
        if (_hasGlobalData()) {
          _getApp().globalData[`zp_handle${key}Callback`] = callback;
        }
      }, 1);
    } catch (_) {
    }
  }
  function _getHandleByKey(key) {
    return _hasGlobalData() ? _getApp().globalData[`zp_handle${key}Callback`] : null;
  }
  const interceptor = {
    handleQuery,
    _handleQuery,
    handleFetchParams,
    _handleFetchParams,
    handleFetchResult,
    _handleFetchResult,
    handleLanguage2Local,
    _handleLanguage2Local
  };
  const dataHandleModule = {
    props: {
      // 自定义初始的pageNo，默认为1
      defaultPageNo: {
        type: Number,
        default: u.gc("defaultPageNo", 1),
        observer: function(newVal) {
          this.pageNo = newVal;
        }
      },
      // 自定义pageSize，默认为10
      defaultPageSize: {
        type: Number,
        default: u.gc("defaultPageSize", 10),
        validator: (value) => {
          if (value <= 0)
            u.consoleErr("default-page-size必须大于0！");
          return value > 0;
        }
      },
      // 为保证数据一致，设置当前tab切换时的标识key，并在complete中传递相同key，若二者不一致，则complete将不会生效
      dataKey: {
        type: [Number, String, Object],
        default: u.gc("dataKey", null)
      },
      // 使用缓存，若开启将自动缓存第一页的数据，默认为否。请注意，因考虑到切换tab时不同tab数据不同的情况，默认仅会缓存组件首次加载时第一次请求到的数据，后续的下拉刷新操作不会更新缓存。
      useCache: {
        type: Boolean,
        default: u.gc("useCache", false)
      },
      // 使用缓存时缓存的key，用于区分不同列表的缓存数据，useCache为true时必须设置，否则缓存无效
      cacheKey: {
        type: String,
        default: u.gc("cacheKey", null)
      },
      // 缓存模式，默认仅会缓存组件首次加载时第一次请求到的数据，可设置为always，即代表总是缓存，每次列表刷新(下拉刷新、调用reload等)都会更新缓存
      cacheMode: {
        type: String,
        default: u.gc("cacheMode", Enum.CacheMode.Default)
      },
      // 自动注入的list名，可自动修改父view(包含ref="paging")中对应name的list值
      autowireListName: {
        type: String,
        default: u.gc("autowireListName", "")
      },
      // 自动注入的query名，可自动调用父view(包含ref="paging")中的query方法
      autowireQueryName: {
        type: String,
        default: u.gc("autowireQueryName", "")
      },
      // 获取分页数据Function，功能与@query类似。若设置了fetch则@query将不再触发
      fetch: {
        type: Function,
        default: null
      },
      // fetch的附加参数，fetch配置后有效
      fetchParams: {
        type: Object,
        default: u.gc("fetchParams", null)
      },
      // z-paging mounted后自动调用reload方法(mounted后自动调用接口)，默认为是
      auto: {
        type: Boolean,
        default: u.gc("auto", true)
      },
      // 用户下拉刷新时是否触发reload方法，默认为是
      reloadWhenRefresh: {
        type: Boolean,
        default: u.gc("reloadWhenRefresh", true)
      },
      // reload时自动滚动到顶部，默认为是
      autoScrollToTopWhenReload: {
        type: Boolean,
        default: u.gc("autoScrollToTopWhenReload", true)
      },
      // reload时立即自动清空原list，默认为是，若立即自动清空，则在reload之后、请求回调之前页面是空白的
      autoCleanListWhenReload: {
        type: Boolean,
        default: u.gc("autoCleanListWhenReload", true)
      },
      // 列表刷新时自动显示下拉刷新view，默认为否
      showRefresherWhenReload: {
        type: Boolean,
        default: u.gc("showRefresherWhenReload", false)
      },
      // 列表刷新时自动显示加载更多view，且为加载中状态，默认为否
      showLoadingMoreWhenReload: {
        type: Boolean,
        default: u.gc("showLoadingMoreWhenReload", false)
      },
      // 组件created时立即触发reload(可解决一些情况下先看到页面再看到loading的问题)，auto为true时有效。为否时将在mounted+nextTick后触发reload，默认为否
      createdReload: {
        type: Boolean,
        default: u.gc("createdReload", false)
      },
      // 本地分页时上拉加载更多延迟时间，单位为毫秒，默认200毫秒
      localPagingLoadingTime: {
        type: [Number, String],
        default: u.gc("localPagingLoadingTime", 200)
      },
      // 自动拼接complete中传过来的数组(使用聊天记录模式时无效)
      concat: {
        type: Boolean,
        default: u.gc("concat", true)
      },
      // 请求失败是否触发reject，默认为是
      callNetworkReject: {
        type: Boolean,
        default: u.gc("callNetworkReject", true)
      },
      // 父组件v-model所绑定的list的值
      value: {
        type: Array,
        default: function() {
          return [];
        }
      },
      modelValue: {
        type: Array,
        default: function() {
          return [];
        }
      }
    },
    data() {
      return {
        currentData: [],
        totalData: [],
        realTotalData: [],
        totalLocalPagingList: [],
        dataPromiseResultMap: {
          reload: null,
          complete: null,
          localPaging: null
        },
        isSettingCacheList: false,
        pageNo: 1,
        currentRefreshPageSize: 0,
        isLocalPaging: false,
        isAddedData: false,
        isTotalChangeFromAddData: false,
        privateConcat: true,
        myParentQuery: -1,
        firstPageLoaded: false,
        pagingLoaded: false,
        loaded: false,
        isUserReload: true,
        fromEmptyViewReload: false,
        queryFrom: "",
        listRendering: false,
        isHandlingRefreshToPage: false,
        isFirstPageAndNoMore: false,
        totalDataChangeThrow: true,
        addDataFromTopBufferedInsert: u.useBufferedInsert(this._addDataFromTop)
      };
    },
    computed: {
      pageSize() {
        return this.defaultPageSize;
      },
      finalConcat() {
        return this.concat && this.privateConcat;
      },
      finalUseCache() {
        if (this.useCache && !this.cacheKey) {
          u.consoleErr("use-cache为true时，必须设置cache-key，否则缓存无效！");
        }
        return this.useCache && !!this.cacheKey;
      },
      finalCacheKey() {
        return this.cacheKey ? `${c.cachePrefixKey}-${this.cacheKey}` : null;
      },
      isFirstPage() {
        return this.pageNo === this.defaultPageNo;
      }
    },
    watch: {
      totalData(newVal, oldVal) {
        const eventThrow = this.isSettingCacheList ? true : this.totalDataChangeThrow;
        this._totalDataChange(newVal, oldVal, eventThrow);
        this.totalDataChangeThrow = true;
      },
      currentData(newVal, oldVal) {
        this._currentDataChange(newVal, oldVal);
      },
      useChatRecordMode(newVal, oldVal) {
        if (newVal) {
          this.nLoadingMoreFixedHeight = false;
        }
      },
      value: {
        handler(newVal) {
          if (newVal !== this.totalData) {
            this.totalDataChangeThrow = false;
            this.totalData = newVal;
          }
        },
        immediate: true
      },
      modelValue: {
        handler(newVal) {
          if (newVal !== this.totalData) {
            this.totalDataChangeThrow = false;
            this.totalData = newVal;
          }
        },
        immediate: true
      }
    },
    methods: {
      // 请求结束(成功或者失败)调用此方法，将请求的结果传递给z-paging处理，第一个参数为请求结果数组，第二个参数为是否成功(默认为是）
      complete(data, success = true) {
        this.customNoMore = -1;
        return this.addData(data, success);
      },
      //【保证数据一致】请求结束(成功或者失败)调用此方法，将请求的结果传递给z-paging处理，第一个参数为请求结果数组，第二个参数为dataKey，需与:data-key绑定的一致，第三个参数为是否成功(默认为是）
      completeByKey(data, dataKey = null, success = true) {
        if (dataKey !== null && this.dataKey !== null && dataKey !== this.dataKey) {
          this.isFirstPage && this.endRefresh();
          return new Promise((resolve) => resolve());
        }
        this.customNoMore = -1;
        return this.addData(data, success);
      },
      //【通过total判断是否有更多数据】请求结束(成功或者失败)调用此方法，将请求的结果传递给z-paging处理，第一个参数为请求结果数组，第二个参数为total(列表总数)，第三个参数为是否成功(默认为是）
      completeByTotal(data, total, success = true) {
        if (total == "undefined") {
          this.customNoMore = -1;
        } else {
          const dataTypeRes = this._checkDataType(data, success, false);
          data = dataTypeRes.data;
          success = dataTypeRes.success;
          if (total >= 0 && success) {
            return new Promise((resolve, reject) => {
              this.$nextTick(() => {
                let nomore = false;
                const realTotalDataCount = this.pageNo == this.defaultPageNo ? 0 : this.realTotalData.length;
                const dataLength = this.privateConcat ? data.length : 0;
                let exceedCount = realTotalDataCount + dataLength - total;
                if (exceedCount >= 0) {
                  nomore = true;
                  exceedCount = this.defaultPageSize - exceedCount;
                  if (this.privateConcat && exceedCount > 0 && exceedCount < data.length) {
                    data = data.splice(0, exceedCount);
                  }
                }
                this.completeByNoMore(data, nomore, success).then((res) => resolve(res)).catch(() => reject());
              });
            });
          }
        }
        return this.addData(data, success);
      },
      //【自行判断是否有更多数据】请求结束(成功或者失败)调用此方法，将请求的结果传递给z-paging处理，第一个参数为请求结果数组，第二个参数为是否没有更多数据，第三个参数为是否成功(默认是是）
      completeByNoMore(data, nomore, success = true) {
        if (nomore != "undefined") {
          this.customNoMore = nomore == true ? 1 : 0;
        }
        return this.addData(data, success);
      },
      // 请求结束且请求失败时调用，支持传入请求失败原因
      completeByError(errorMsg) {
        this.customerEmptyViewErrorText = errorMsg;
        return this.complete(false);
      },
      // 与上方complete方法功能一致，新版本中设置服务端回调数组请使用complete方法
      addData(data, success = true) {
        if (!this.fromCompleteEmit) {
          this.disabledCompleteEmit = true;
          this.fromCompleteEmit = false;
        }
        const currentTimeStamp = u.getTime();
        const disTime = currentTimeStamp - this.requestTimeStamp;
        let minDelay = this.minDelay;
        if (this.isFirstPage && this.finalShowRefresherWhenReload) {
          minDelay = Math.max(400, minDelay);
        }
        const addDataDalay = this.requestTimeStamp > 0 && disTime < minDelay ? minDelay - disTime : 0;
        this.$nextTick(() => {
          u.delay(() => {
            this._addData(data, success, false);
          }, this.delay > 0 ? this.delay : addDataDalay);
        });
        return new Promise((resolve, reject) => {
          this.dataPromiseResultMap.complete = { resolve, reject };
        });
      },
      // 从顶部添加数据，不会影响分页的pageNo和pageSize
      addDataFromTop(data, toTop = true, toTopWithAnimate = true) {
        (this.finalUseVirtualList ? this.addDataFromTopBufferedInsert : this._addDataFromTop)(
          data,
          toTop,
          toTopWithAnimate
        );
      },
      // 重新设置列表数据，调用此方法不会影响pageNo和pageSize，也不会触发请求。适用场景：当需要删除列表中某一项时，将删除对应项后的数组通过此方法传递给z-paging。(当出现类似的需要修改列表数组的场景时，请使用此方法，请勿直接修改page中:list.sync绑定的数组)
      resetTotalData(data) {
        this.isTotalChangeFromAddData = true;
        data = Object.prototype.toString.call(data) !== "[object Array]" ? [data] : data;
        this.totalData = data;
      },
      // 设置本地分页数据，请求结束(成功或者失败)调用此方法，将请求的结果传递给z-paging作分页处理（若调用了此方法，则上拉加载更多时内部会自动分页，不会触发@query所绑定的事件）
      setLocalPaging(data, success = true) {
        this.isLocalPaging = true;
        this.$nextTick(() => {
          this._addData(data, success, true);
        });
        return new Promise((resolve, reject) => {
          this.dataPromiseResultMap.localPaging = { resolve, reject };
        });
      },
      // 重新加载分页数据，pageNo会恢复为默认值，相当于下拉刷新的效果(animate为true时会展示下拉刷新动画，默认为false)
      reload(animate = this.showRefresherWhenReload) {
        if (animate) {
          this.privateShowRefresherWhenReload = animate;
          this.isUserPullDown = true;
        }
        if (!this.showLoadingMoreWhenReload) {
          this.listRendering = true;
        }
        this.$nextTick(() => {
          this._preReload(animate, false);
        });
        return new Promise((resolve, reject) => {
          this.dataPromiseResultMap.reload = { resolve, reject };
        });
      },
      // 刷新列表数据，pageNo和pageSize不会重置，列表数据会重新从服务端获取。必须保证@query绑定的方法中的pageNo和pageSize和传给服务端的一致
      refresh() {
        return this._handleRefreshWithDisPageNo(this.pageNo - this.defaultPageNo + 1);
      },
      // 刷新列表数据至指定页，例如pageNo=5时则代表刷新列表至第5页，此时pageNo会变为5，列表会展示前5页的数据。必须保证@query绑定的方法中的pageNo和pageSize和传给服务端的一致
      refreshToPage(pageNo) {
        this.isHandlingRefreshToPage = true;
        return this._handleRefreshWithDisPageNo(pageNo + this.defaultPageNo - 1);
      },
      // 手动更新列表缓存数据，将自动截取v-model绑定的list中的前pageSize条覆盖缓存，请确保在list数据更新到预期结果后再调用此方法
      updateCache() {
        if (this.finalUseCache && this.totalData.length) {
          this._saveLocalCache(this.totalData.slice(0, Math.min(this.totalData.length, this.pageSize)));
        }
      },
      // 清空分页数据
      clean() {
        this._reload(true);
        this._addData([], true, false);
      },
      // 清空分页数据
      clear() {
        this.clean();
      },
      // reload之前的一些处理
      _preReload(animate = this.showRefresherWhenReload, isFromMounted = true, retryCount = 0) {
        const showRefresher = this.finalRefresherEnabled && this.useCustomRefresher;
        if (this.customRefresherHeight === -1 && showRefresher) {
          u.delay(() => {
            retryCount++;
            if (retryCount % 10 === 0) {
              this._updateCustomRefresherHeight();
            }
            this._preReload(animate, isFromMounted, retryCount);
          }, c.delayTime / 2);
          return;
        }
        this.isUserReload = true;
        this.loadingType = Enum.LoadingType.Refresher;
        if (animate) {
          this.privateShowRefresherWhenReload = animate;
          if (this.useCustomRefresher) {
            this._doRefresherRefreshAnimate();
          } else {
            this.refresherTriggered = true;
          }
        } else {
          this._refresherEnd(false, false, false, false);
        }
        this._reload(false, isFromMounted);
      },
      // 重新加载分页数据
      _reload(isClean = false, isFromMounted = false, isUserPullDown = false) {
        this.isAddedData = false;
        this.insideOfPaging = -1;
        this.cacheScrollNodeHeight = -1;
        this.pageNo = this.defaultPageNo;
        this._cleanRefresherEndTimeout();
        !this.privateShowRefresherWhenReload && !isClean && this._startLoading(true);
        this.firstPageLoaded = true;
        this.isTotalChangeFromAddData = false;
        if (!this.isSettingCacheList) {
          this.totalData = [];
        }
        if (!isClean) {
          this._emitQuery(this.pageNo, this.defaultPageSize, isUserPullDown ? Enum.QueryFrom.UserPullDown : Enum.QueryFrom.Reload);
          let delay2 = 0;
          u.delay(this._callMyParentQuery, delay2);
          if (!isFromMounted && this.autoScrollToTopWhenReload) {
            this._scrollToTop(false);
          }
        }
      },
      // 处理服务端返回的数组
      _addData(data, success, isLocal) {
        this.isAddedData = true;
        this.fromEmptyViewReload = false;
        this.isTotalChangeFromAddData = true;
        this.refresherTriggered = false;
        this._endSystemLoadingAndRefresh();
        const tempIsUserPullDown = this.isUserPullDown;
        if (this.showRefresherUpdateTime && this.isFirstPage) {
          u.setRefesrherTime(u.getTime(), this.refresherUpdateTimeKey);
          this.$refs.refresh && this.$refs.refresh.updateTime();
        }
        if (!isLocal && tempIsUserPullDown && this.isFirstPage) {
          this.isUserPullDown = false;
        }
        this.listRendering = true;
        this.$nextTick(() => {
          u.delay(() => this.listRendering = false);
        });
        let dataTypeRes = this._checkDataType(data, success, isLocal);
        data = dataTypeRes.data;
        success = dataTypeRes.success;
        let delayTime = c.delayTime;
        if (this.useChatRecordMode)
          delayTime = 0;
        this.loadingForNow = false;
        u.delay(() => {
          this.pagingLoaded = true;
          this.$nextTick(() => {
            !isLocal && this._refresherEnd(delayTime > 0, true, tempIsUserPullDown);
          });
        });
        if (this.isFirstPage) {
          this.isLoadFailed = !success;
          this.$emit("isLoadFailedChange", this.isLoadFailed);
          if (this.finalUseCache && success && (this.cacheMode === Enum.CacheMode.Always ? true : this.isSettingCacheList)) {
            this._saveLocalCache(data);
          }
        }
        this.isSettingCacheList = false;
        if (success) {
          if (!(this.privateConcat === false && !this.isHandlingRefreshToPage && this.loadingStatus === Enum.More.NoMore)) {
            this.loadingStatus = Enum.More.Default;
          }
          if (isLocal) {
            this.totalLocalPagingList = data;
            const localPageNo = this.defaultPageNo;
            const localPageSize = this.queryFrom !== Enum.QueryFrom.Refresh ? this.defaultPageSize : this.currentRefreshPageSize;
            this._localPagingQueryList(localPageNo, localPageSize, 0, (res) => {
              u.delay(() => {
                this.completeByTotal(res, this.totalLocalPagingList.length);
              }, 0);
            });
          } else {
            let dataChangeDelayTime = 0;
            u.delay(() => {
              this._currentDataChange(data, this.currentData);
              this._callDataPromise(true, this.totalData);
            }, dataChangeDelayTime);
          }
          if (this.isHandlingRefreshToPage) {
            this.isHandlingRefreshToPage = false;
            this.pageNo = this.defaultPageNo + Math.ceil(data.length / this.pageSize) - 1;
            if (data.length % this.pageSize !== 0) {
              this.customNoMore = 1;
            }
          }
        } else {
          this._currentDataChange(data, this.currentData);
          this._callDataPromise(false);
          this.loadingStatus = Enum.More.Fail;
          this.isHandlingRefreshToPage = false;
          if (this.loadingType === Enum.LoadingType.LoadMore) {
            this.pageNo--;
          }
        }
      },
      // 所有数据改变时调用
      _totalDataChange(newVal, oldVal, eventThrow = true) {
        if ((!this.isUserReload || !this.autoCleanListWhenReload) && this.firstPageLoaded && !newVal.length && oldVal.length) {
          return;
        }
        this._doCheckScrollViewShouldFullHeight(newVal);
        if (!this.realTotalData.length && !newVal.length) {
          eventThrow = false;
        }
        this.realTotalData = newVal;
        if (eventThrow) {
          this.$emit("input", newVal);
          this.$emit("update:modelValue", newVal);
          this.$emit("update:list", newVal);
          this.$emit("listChange", newVal);
          this._callMyParentList(newVal);
        }
        this.firstPageLoaded = false;
        this.isTotalChangeFromAddData = false;
        this.$nextTick(() => {
          u.delay(() => {
            this._getNodeClientRect(".zp-paging-container-content").then((res) => {
              res && this.$emit("contentHeightChanged", res[0].height);
            });
          }, c.delayTime * (this.isIos ? 1 : 3));
        });
      },
      // 当前数据改变时调用
      _currentDataChange(newVal, oldVal) {
        newVal = [...newVal];
        this.finalUseVirtualList && this._setCellIndex(newVal, "bottom");
        if (this.isFirstPage && this.finalConcat) {
          this.totalData = [];
        }
        if (this.customNoMore !== -1) {
          if (this.customNoMore === 1 || this.customNoMore !== 0 && !newVal.length) {
            this.loadingStatus = Enum.More.NoMore;
          }
        } else {
          if (!newVal.length || newVal.length && newVal.length < this.defaultPageSize) {
            this.loadingStatus = Enum.More.NoMore;
          }
        }
        if (!this.totalData.length) {
          this.totalData = newVal;
        } else {
          if (this.finalConcat) {
            this.oldScrollTop;
            this.totalData = [...this.totalData, ...newVal];
          } else {
            this.totalData = newVal;
          }
        }
        this.privateConcat = true;
      },
      // 根据pageNo处理refresh操作
      _handleRefreshWithDisPageNo(pageNo) {
        if (!this.isHandlingRefreshToPage && !this.realTotalData.length)
          return this.reload();
        if (pageNo >= 1) {
          this.loading = true;
          this.privateConcat = false;
          const totalPageSize = pageNo * this.pageSize;
          this.currentRefreshPageSize = totalPageSize;
          if (this.isLocalPaging && this.isHandlingRefreshToPage) {
            this._localPagingQueryList(this.defaultPageNo, totalPageSize, 0, (res) => {
              this.complete(res);
            });
          } else {
            this._emitQuery(this.defaultPageNo, totalPageSize, Enum.QueryFrom.Refresh);
            this._callMyParentQuery(this.defaultPageNo, totalPageSize);
          }
        }
        return new Promise((resolve, reject) => {
          this.dataPromiseResultMap.reload = { resolve, reject };
        });
      },
      // 本地分页请求
      _localPagingQueryList(pageNo, pageSize, localPagingLoadingTime, callback) {
        pageNo = Math.max(1, pageNo);
        pageSize = Math.max(1, pageSize);
        const totalPagingList = [...this.totalLocalPagingList];
        const pageNoIndex = (pageNo - 1) * pageSize;
        const finalPageNoIndex = Math.min(totalPagingList.length, pageNoIndex + pageSize);
        const resultPagingList = totalPagingList.splice(pageNoIndex, finalPageNoIndex - pageNoIndex);
        u.delay(() => callback(resultPagingList), localPagingLoadingTime);
      },
      // 从顶部添加数据，不会影响分页的pageNo和pageSize
      _addDataFromTop(data, toTop = true, toTopWithAnimate = true) {
        let addFromTop = !this.isChatRecordModeAndNotInversion;
        data = Object.prototype.toString.call(data) !== "[object Array]" ? [data] : addFromTop ? data.reverse() : data;
        this.finalUseVirtualList && this._setCellIndex(data, "top");
        this.totalData = addFromTop ? [...data, ...this.totalData] : [...this.totalData, ...data];
        if (toTop) {
          u.delay(() => this.useChatRecordMode ? this.scrollToBottom(toTopWithAnimate) : this.scrollToTop(toTopWithAnimate));
        }
      },
      // 存储列表缓存数据
      _saveLocalCache(data) {
        uni.setStorageSync(this.finalCacheKey, data);
      },
      // 通过缓存数据填充列表数据
      _setListByLocalCache() {
        this.totalData = uni.getStorageSync(this.finalCacheKey) || [];
        this.isSettingCacheList = true;
      },
      // 修改父view的list
      _callMyParentList(newVal) {
        if (this.autowireListName.length) {
          const myParent = u.getParent(this.$parent);
          if (myParent && myParent[this.autowireListName]) {
            myParent[this.autowireListName] = newVal;
          }
        }
      },
      // 调用父view的query
      _callMyParentQuery(customPageNo = 0, customPageSize = 0) {
        if (this.autowireQueryName) {
          if (this.myParentQuery === -1) {
            const myParent = u.getParent(this.$parent);
            if (myParent && myParent[this.autowireQueryName]) {
              this.myParentQuery = myParent[this.autowireQueryName];
            }
          }
          if (this.myParentQuery !== -1) {
            customPageSize > 0 ? this.myParentQuery(customPageNo, customPageSize) : this.myParentQuery(this.pageNo, this.defaultPageSize);
          }
        }
      },
      // emit query事件
      _emitQuery(pageNo, pageSize, from) {
        this.queryFrom = from;
        this.requestTimeStamp = u.getTime();
        const [lastItem] = this.realTotalData.slice(-1);
        if (this.fetch) {
          const fetchParams = interceptor._handleFetchParams({ pageNo, pageSize, from, lastItem: lastItem || null }, this.fetchParams);
          const fetchResult = this.fetch(fetchParams);
          if (!interceptor._handleFetchResult(fetchResult, this, fetchParams)) {
            u.isPromise(fetchResult) ? fetchResult.then((res) => {
              this.complete(res);
            }).catch((err) => {
              this.complete(false);
            }) : this.complete(fetchResult);
          }
        } else {
          this.$emit("query", ...interceptor._handleQuery(pageNo, pageSize, from, lastItem || null));
        }
      },
      // 触发数据改变promise
      _callDataPromise(success, totalList) {
        for (const key in this.dataPromiseResultMap) {
          const obj = this.dataPromiseResultMap[key];
          if (!obj)
            continue;
          success ? obj.resolve({ totalList, noMore: this.loadingStatus === Enum.More.NoMore }) : this.callNetworkReject && obj.reject(`z-paging-${key}-error`);
        }
      },
      // 检查complete data的类型
      _checkDataType(data, success, isLocal) {
        const dataType = Object.prototype.toString.call(data);
        if (dataType === "[object Boolean]") {
          success = data;
          data = [];
        } else if (dataType !== "[object Array]") {
          data = [];
          if (dataType !== "[object Undefined]" && dataType !== "[object Null]") {
            u.consoleErr(`${isLocal ? "setLocalPaging" : "complete"}参数类型不正确，第一个参数类型必须为Array!`);
          }
        }
        return { data, success };
      }
    }
  };
  const isObject = (val) => val !== null && typeof val === "object";
  const defaultDelimiters = ["{", "}"];
  class BaseFormatter {
    constructor() {
      this._caches = /* @__PURE__ */ Object.create(null);
    }
    interpolate(message, values, delimiters = defaultDelimiters) {
      if (!values) {
        return [message];
      }
      let tokens = this._caches[message];
      if (!tokens) {
        tokens = parse(message, delimiters);
        this._caches[message] = tokens;
      }
      return compile(tokens, values);
    }
  }
  const RE_TOKEN_LIST_VALUE = /^(?:\d)+/;
  const RE_TOKEN_NAMED_VALUE = /^(?:\w)+/;
  function parse(format, [startDelimiter, endDelimiter]) {
    const tokens = [];
    let position = 0;
    let text = "";
    while (position < format.length) {
      let char = format[position++];
      if (char === startDelimiter) {
        if (text) {
          tokens.push({ type: "text", value: text });
        }
        text = "";
        let sub = "";
        char = format[position++];
        while (char !== void 0 && char !== endDelimiter) {
          sub += char;
          char = format[position++];
        }
        const isClosed = char === endDelimiter;
        const type = RE_TOKEN_LIST_VALUE.test(sub) ? "list" : isClosed && RE_TOKEN_NAMED_VALUE.test(sub) ? "named" : "unknown";
        tokens.push({ value: sub, type });
      } else {
        text += char;
      }
    }
    text && tokens.push({ type: "text", value: text });
    return tokens;
  }
  function compile(tokens, values) {
    const compiled = [];
    let index = 0;
    const mode = Array.isArray(values) ? "list" : isObject(values) ? "named" : "unknown";
    if (mode === "unknown") {
      return compiled;
    }
    while (index < tokens.length) {
      const token = tokens[index];
      switch (token.type) {
        case "text":
          compiled.push(token.value);
          break;
        case "list":
          compiled.push(values[parseInt(token.value, 10)]);
          break;
        case "named":
          if (mode === "named") {
            compiled.push(values[token.value]);
          } else {
            {
              console.warn(`Type of token '${token.type}' and format of value '${mode}' don't match!`);
            }
          }
          break;
        case "unknown":
          {
            console.warn(`Detect 'unknown' type of token!`);
          }
          break;
      }
      index++;
    }
    return compiled;
  }
  const LOCALE_ZH_HANS = "zh-Hans";
  const LOCALE_ZH_HANT = "zh-Hant";
  const LOCALE_EN = "en";
  const LOCALE_FR = "fr";
  const LOCALE_ES = "es";
  const hasOwnProperty = Object.prototype.hasOwnProperty;
  const hasOwn = (val, key) => hasOwnProperty.call(val, key);
  const defaultFormatter = new BaseFormatter();
  function include(str, parts) {
    return !!parts.find((part) => str.indexOf(part) !== -1);
  }
  function startsWith(str, parts) {
    return parts.find((part) => str.indexOf(part) === 0);
  }
  function normalizeLocale(locale, messages2) {
    if (!locale) {
      return;
    }
    locale = locale.trim().replace(/_/g, "-");
    if (messages2 && messages2[locale]) {
      return locale;
    }
    locale = locale.toLowerCase();
    if (locale === "chinese") {
      return LOCALE_ZH_HANS;
    }
    if (locale.indexOf("zh") === 0) {
      if (locale.indexOf("-hans") > -1) {
        return LOCALE_ZH_HANS;
      }
      if (locale.indexOf("-hant") > -1) {
        return LOCALE_ZH_HANT;
      }
      if (include(locale, ["-tw", "-hk", "-mo", "-cht"])) {
        return LOCALE_ZH_HANT;
      }
      return LOCALE_ZH_HANS;
    }
    let locales = [LOCALE_EN, LOCALE_FR, LOCALE_ES];
    if (messages2 && Object.keys(messages2).length > 0) {
      locales = Object.keys(messages2);
    }
    const lang2 = startsWith(locale, locales);
    if (lang2) {
      return lang2;
    }
  }
  class I18n {
    constructor({ locale, fallbackLocale, messages: messages2, watcher, formater: formater2 }) {
      this.locale = LOCALE_EN;
      this.fallbackLocale = LOCALE_EN;
      this.message = {};
      this.messages = {};
      this.watchers = [];
      if (fallbackLocale) {
        this.fallbackLocale = fallbackLocale;
      }
      this.formater = formater2 || defaultFormatter;
      this.messages = messages2 || {};
      this.setLocale(locale || LOCALE_EN);
      if (watcher) {
        this.watchLocale(watcher);
      }
    }
    setLocale(locale) {
      const oldLocale = this.locale;
      this.locale = normalizeLocale(locale, this.messages) || this.fallbackLocale;
      if (!this.messages[this.locale]) {
        this.messages[this.locale] = {};
      }
      this.message = this.messages[this.locale];
      if (oldLocale !== this.locale) {
        this.watchers.forEach((watcher) => {
          watcher(this.locale, oldLocale);
        });
      }
    }
    getLocale() {
      return this.locale;
    }
    watchLocale(fn) {
      const index = this.watchers.push(fn) - 1;
      return () => {
        this.watchers.splice(index, 1);
      };
    }
    add(locale, message, override = true) {
      const curMessages = this.messages[locale];
      if (curMessages) {
        if (override) {
          Object.assign(curMessages, message);
        } else {
          Object.keys(message).forEach((key) => {
            if (!hasOwn(curMessages, key)) {
              curMessages[key] = message[key];
            }
          });
        }
      } else {
        this.messages[locale] = message;
      }
    }
    f(message, values, delimiters) {
      return this.formater.interpolate(message, values, delimiters).join("");
    }
    t(key, locale, values) {
      let message = this.message;
      if (typeof locale === "string") {
        locale = normalizeLocale(locale, this.messages);
        locale && (message = this.messages[locale]);
      } else {
        values = locale;
      }
      if (!hasOwn(message, key)) {
        console.warn(`Cannot translate the value of keypath ${key}. Use the value of keypath as default.`);
        return key;
      }
      return this.formater.interpolate(message[key], values).join("");
    }
  }
  function watchAppLocale(appVm, i18n) {
    if (appVm.$watchLocale) {
      appVm.$watchLocale((newLocale) => {
        i18n.setLocale(newLocale);
      });
    } else {
      appVm.$watch(() => appVm.$locale, (newLocale) => {
        i18n.setLocale(newLocale);
      });
    }
  }
  function getDefaultLocale() {
    if (typeof uni !== "undefined" && uni.getLocale) {
      return uni.getLocale();
    }
    if (typeof global !== "undefined" && global.getLocale) {
      return global.getLocale();
    }
    return LOCALE_EN;
  }
  function initVueI18n(locale, messages2 = {}, fallbackLocale, watcher) {
    if (typeof locale !== "string") {
      const options = [
        messages2,
        locale
      ];
      locale = options[0];
      messages2 = options[1];
    }
    if (typeof locale !== "string") {
      locale = getDefaultLocale();
    }
    if (typeof fallbackLocale !== "string") {
      fallbackLocale = typeof __uniConfig !== "undefined" && __uniConfig.fallbackLocale || LOCALE_EN;
    }
    const i18n = new I18n({
      locale,
      fallbackLocale,
      messages: messages2,
      watcher
    });
    let t2 = (key, values) => {
      if (typeof getApp !== "function") {
        t2 = function(key2, values2) {
          return i18n.t(key2, values2);
        };
      } else {
        let isWatchedAppLocale = false;
        t2 = function(key2, values2) {
          const appVm = getApp().$vm;
          if (appVm) {
            appVm.$locale;
            if (!isWatchedAppLocale) {
              isWatchedAppLocale = true;
              watchAppLocale(appVm, i18n);
            }
          }
          return i18n.t(key2, values2);
        };
      }
      return t2(key, values);
    };
    return {
      i18n,
      f(message, values, delimiters) {
        return i18n.f(message, values, delimiters);
      },
      t(key, values) {
        return t2(key, values);
      },
      add(locale2, message, override = true) {
        return i18n.add(locale2, message, override);
      },
      watch(fn) {
        return i18n.watchLocale(fn);
      },
      getLocale() {
        return i18n.getLocale();
      },
      setLocale(newLocale) {
        return i18n.setLocale(newLocale);
      }
    };
  }
  const en = {
    "zp.refresher.default": "Pull down to refresh",
    "zp.refresher.pulling": "Release to refresh",
    "zp.refresher.refreshing": "Refreshing...",
    "zp.refresher.complete": "Refresh succeeded",
    "zp.refresher.f2": "Refresh to enter 2f",
    "zp.loadingMore.default": "Click to load more",
    "zp.loadingMore.loading": "Loading...",
    "zp.loadingMore.noMore": "No more data",
    "zp.loadingMore.fail": "Load failed,click to reload",
    "zp.emptyView.title": "No data",
    "zp.emptyView.reload": "Reload",
    "zp.emptyView.error": "Sorry,load failed",
    "zp.refresherUpdateTime.title": "Last update: ",
    "zp.refresherUpdateTime.none": "None",
    "zp.refresherUpdateTime.today": "Today",
    "zp.refresherUpdateTime.yesterday": "Yesterday",
    "zp.systemLoading.title": "Loading..."
  };
  const zhHans = {
    "zp.refresher.default": "继续下拉刷新",
    "zp.refresher.pulling": "松开立即刷新",
    "zp.refresher.refreshing": "正在刷新...",
    "zp.refresher.complete": "刷新成功",
    "zp.refresher.f2": "松手进入二楼",
    "zp.loadingMore.default": "点击加载更多",
    "zp.loadingMore.loading": "正在加载...",
    "zp.loadingMore.noMore": "没有更多了",
    "zp.loadingMore.fail": "加载失败，点击重新加载",
    "zp.emptyView.title": "没有数据哦~",
    "zp.emptyView.reload": "重新加载",
    "zp.emptyView.error": "很抱歉，加载失败",
    "zp.refresherUpdateTime.title": "最后更新：",
    "zp.refresherUpdateTime.none": "无",
    "zp.refresherUpdateTime.today": "今天",
    "zp.refresherUpdateTime.yesterday": "昨天",
    "zp.systemLoading.title": "加载中..."
  };
  const zhHant = {
    "zp.refresher.default": "繼續下拉重繪",
    "zp.refresher.pulling": "鬆開立即重繪",
    "zp.refresher.refreshing": "正在重繪...",
    "zp.refresher.complete": "重繪成功",
    "zp.refresher.f2": "鬆手進入二樓",
    "zp.loadingMore.default": "點擊加載更多",
    "zp.loadingMore.loading": "正在加載...",
    "zp.loadingMore.noMore": "沒有更多了",
    "zp.loadingMore.fail": "加載失敗，點擊重新加載",
    "zp.emptyView.title": "沒有數據哦~",
    "zp.emptyView.reload": "重新加載",
    "zp.emptyView.error": "很抱歉，加載失敗",
    "zp.refresherUpdateTime.title": "最後更新：",
    "zp.refresherUpdateTime.none": "無",
    "zp.refresherUpdateTime.today": "今天",
    "zp.refresherUpdateTime.yesterday": "昨天",
    "zp.systemLoading.title": "加載中..."
  };
  const messages = {
    en,
    "zh-Hans": zhHans,
    "zh-Hant": zhHant
  };
  const { t } = initVueI18n(messages);
  const i18nModule = {
    computed: {
      finalLanguage() {
        try {
          const local = uni.getLocale();
          const language = this.systemInfo.appLanguage;
          return local === "auto" ? interceptor._handleLanguage2Local(language, this._language2Local(language)) : local;
        } catch (e) {
          return "zh-Hans";
        }
      },
      // 最终的下拉刷新默认状态的文字
      finalRefresherDefaultText() {
        return this._getI18nText("zp.refresher.default", this.refresherDefaultText);
      },
      // 最终的下拉刷新下拉中的文字
      finalRefresherPullingText() {
        return this._getI18nText("zp.refresher.pulling", this.refresherPullingText);
      },
      // 最终的下拉刷新中文字
      finalRefresherRefreshingText() {
        return this._getI18nText("zp.refresher.refreshing", this.refresherRefreshingText);
      },
      // 最终的下拉刷新完成文字
      finalRefresherCompleteText() {
        return this._getI18nText("zp.refresher.complete", this.refresherCompleteText);
      },
      // 最终的下拉刷新上次更新时间文字
      finalRefresherUpdateTimeTextMap() {
        return {
          title: t("zp.refresherUpdateTime.title"),
          none: t("zp.refresherUpdateTime.none"),
          today: t("zp.refresherUpdateTime.today"),
          yesterday: t("zp.refresherUpdateTime.yesterday")
        };
      },
      // 最终的继续下拉进入二楼文字
      finalRefresherGoF2Text() {
        return this._getI18nText("zp.refresher.f2", this.refresherGoF2Text);
      },
      // 最终的底部加载更多默认状态文字
      finalLoadingMoreDefaultText() {
        return this._getI18nText("zp.loadingMore.default", this.loadingMoreDefaultText);
      },
      // 最终的底部加载更多加载中文字
      finalLoadingMoreLoadingText() {
        return this._getI18nText("zp.loadingMore.loading", this.loadingMoreLoadingText);
      },
      // 最终的底部加载更多没有更多数据文字
      finalLoadingMoreNoMoreText() {
        return this._getI18nText("zp.loadingMore.noMore", this.loadingMoreNoMoreText);
      },
      // 最终的底部加载更多加载失败文字
      finalLoadingMoreFailText() {
        return this._getI18nText("zp.loadingMore.fail", this.loadingMoreFailText);
      },
      // 最终的空数据图title
      finalEmptyViewText() {
        return this.isLoadFailed ? this.finalEmptyViewErrorText : this._getI18nText("zp.emptyView.title", this.emptyViewText);
      },
      // 最终的空数据图reload title
      finalEmptyViewReloadText() {
        return this._getI18nText("zp.emptyView.reload", this.emptyViewReloadText);
      },
      // 最终的空数据图加载失败文字
      finalEmptyViewErrorText() {
        return this.customerEmptyViewErrorText || this._getI18nText("zp.emptyView.error", this.emptyViewErrorText);
      },
      // 最终的系统loading title
      finalSystemLoadingText() {
        return this._getI18nText("zp.systemLoading.title", this.systemLoadingText);
      }
    },
    methods: {
      // 获取当前z-paging的语言
      getLanguage() {
        return this.finalLanguage;
      },
      // 获取国际化转换后的文本
      _getI18nText(key, value) {
        const dataType = Object.prototype.toString.call(value);
        if (dataType === "[object Object]") {
          const nextValue = value[this.finalLanguage];
          if (nextValue)
            return nextValue;
        } else if (dataType === "[object String]") {
          return value;
        }
        return t(key);
      },
      // 系统language转i18n local
      _language2Local(language) {
        const formatedLanguage = language.toLowerCase().replace(new RegExp("_", ""), "-");
        if (formatedLanguage.indexOf("zh") !== -1) {
          if (formatedLanguage === "zh" || formatedLanguage === "zh-cn" || formatedLanguage.indexOf("zh-hans") !== -1) {
            return "zh-Hans";
          }
          return "zh-Hant";
        }
        if (formatedLanguage.indexOf("en") !== -1)
          return "en";
        return language;
      }
    }
  };
  const nvueModule = {
    props: {},
    data() {
      return {
        nRefresherLoading: false,
        nListIsDragging: false,
        nShowBottom: true,
        nFixFreezing: false,
        nShowRefresherReveal: false,
        nLoadingMoreFixedHeight: false,
        nShowRefresherRevealHeight: 0,
        nOldShowRefresherRevealHeight: -1,
        nRefresherWidth: u.rpx2px(750),
        nListHeight: 0,
        nF2Opacity: 0
      };
    },
    computed: {},
    mounted() {
    },
    methods: {}
  };
  const emptyModule = {
    props: {
      // 是否强制隐藏空数据图，默认为否
      hideEmptyView: {
        type: Boolean,
        default: u.gc("hideEmptyView", false)
      },
      // 空数据图描述文字，默认为“没有数据哦~”
      emptyViewText: {
        type: [String, Object],
        default: u.gc("emptyViewText", null)
      },
      // 是否显示空数据图重新加载按钮(无数据时)，默认为否
      showEmptyViewReload: {
        type: Boolean,
        default: u.gc("showEmptyViewReload", false)
      },
      // 加载失败时是否显示空数据图重新加载按钮，默认为是
      showEmptyViewReloadWhenError: {
        type: Boolean,
        default: u.gc("showEmptyViewReloadWhenError", true)
      },
      // 空数据图点击重新加载文字，默认为“重新加载”
      emptyViewReloadText: {
        type: [String, Object],
        default: u.gc("emptyViewReloadText", null)
      },
      // 空数据图图片，默认使用z-paging内置的图片
      emptyViewImg: {
        type: String,
        default: u.gc("emptyViewImg", "")
      },
      // 空数据图“加载失败”描述文字，默认为“很抱歉，加载失败”
      emptyViewErrorText: {
        type: [String, Object],
        default: u.gc("emptyViewErrorText", null)
      },
      // 空数据图“加载失败”图片，默认使用z-paging内置的图片
      emptyViewErrorImg: {
        type: String,
        default: u.gc("emptyViewErrorImg", "")
      },
      // 空数据图样式
      emptyViewStyle: {
        type: Object,
        default: u.gc("emptyViewStyle", {})
      },
      // 空数据图容器样式
      emptyViewSuperStyle: {
        type: Object,
        default: u.gc("emptyViewSuperStyle", {})
      },
      // 空数据图img样式
      emptyViewImgStyle: {
        type: Object,
        default: u.gc("emptyViewImgStyle", {})
      },
      // 空数据图描述文字样式
      emptyViewTitleStyle: {
        type: Object,
        default: u.gc("emptyViewTitleStyle", {})
      },
      // 空数据图重新加载按钮样式
      emptyViewReloadStyle: {
        type: Object,
        default: u.gc("emptyViewReloadStyle", {})
      },
      // 空数据图片是否铺满z-paging，默认为否，即填充满z-paging内列表(滚动区域)部分。若设置为否，则为填铺满整个z-paging
      emptyViewFixed: {
        type: Boolean,
        default: u.gc("emptyViewFixed", false)
      },
      // 空数据图片是否垂直居中，默认为是，若设置为否即为从空数据容器顶部开始显示。emptyViewFixed为false时有效
      emptyViewCenter: {
        type: Boolean,
        default: u.gc("emptyViewCenter", true)
      },
      // 加载中时是否自动隐藏空数据图，默认为是
      autoHideEmptyViewWhenLoading: {
        type: Boolean,
        default: u.gc("autoHideEmptyViewWhenLoading", true)
      },
      // 用户下拉列表触发下拉刷新加载中时是否自动隐藏空数据图，默认为是
      autoHideEmptyViewWhenPull: {
        type: Boolean,
        default: u.gc("autoHideEmptyViewWhenPull", true)
      },
      // 空数据view的z-index，默认为9
      emptyViewZIndex: {
        type: Number,
        default: u.gc("emptyViewZIndex", 9)
      }
    },
    data() {
      return {
        customerEmptyViewErrorText: ""
      };
    },
    computed: {
      finalEmptyViewImg() {
        return this.isLoadFailed ? this.emptyViewErrorImg : this.emptyViewImg;
      },
      finalShowEmptyViewReload() {
        return this.isLoadFailed ? this.showEmptyViewReloadWhenError : this.showEmptyViewReload;
      },
      // 是否展示空数据图
      showEmpty() {
        if (this.isOnly || this.hideEmptyView || this.realTotalData.length)
          return false;
        if (this.autoHideEmptyViewWhenLoading) {
          if (this.isAddedData && !this.firstPageLoaded && !this.loading)
            return true;
        } else {
          return true;
        }
        return !this.autoHideEmptyViewWhenPull && !this.isUserReload;
      }
    },
    methods: {
      // 点击了空数据view重新加载按钮
      _emptyViewReload() {
        let callbacked = false;
        this.$emit("emptyViewReload", (reload) => {
          if (reload === void 0 || reload === true) {
            this.fromEmptyViewReload = true;
            this.reload().catch(() => {
            });
          }
          callbacked = true;
        });
        this.$nextTick(() => {
          if (!callbacked) {
            this.fromEmptyViewReload = true;
            this.reload().catch(() => {
            });
          }
        });
      },
      // 点击了空数据view
      _emptyViewClick() {
        this.$emit("emptyViewClick");
      }
    }
  };
  const refresherModule = {
    props: {
      // 下拉刷新的主题样式，支持black，white，默认black
      refresherThemeStyle: {
        type: String,
        default: u.gc("refresherThemeStyle", "")
      },
      // 自定义下拉刷新中左侧图标的样式
      refresherImgStyle: {
        type: Object,
        default: u.gc("refresherImgStyle", {})
      },
      // 自定义下拉刷新中右侧状态描述文字的样式
      refresherTitleStyle: {
        type: Object,
        default: u.gc("refresherTitleStyle", {})
      },
      // 自定义下拉刷新中右侧最后更新时间文字的样式(show-refresher-update-time为true时有效)
      refresherUpdateTimeStyle: {
        type: Object,
        default: u.gc("refresherUpdateTimeStyle", {})
      },
      // 在微信小程序和QQ小程序中，是否实时监听下拉刷新中进度，默认为否
      watchRefresherTouchmove: {
        type: Boolean,
        default: u.gc("watchRefresherTouchmove", false)
      },
      // 底部加载更多的主题样式，支持black，white，默认black
      loadingMoreThemeStyle: {
        type: String,
        default: u.gc("loadingMoreThemeStyle", "")
      },
      // 是否只使用下拉刷新，设置为true后将关闭mounted自动请求数据、关闭滚动到底部加载更多，强制隐藏空数据图。默认为否
      refresherOnly: {
        type: Boolean,
        default: u.gc("refresherOnly", false)
      },
      // 自定义下拉刷新默认状态下回弹动画时间，单位为毫秒，默认为100毫秒，nvue无效
      refresherDefaultDuration: {
        type: [Number, String],
        default: u.gc("refresherDefaultDuration", 100)
      },
      // 自定义下拉刷新结束以后延迟回弹的时间，单位为毫秒，默认为0
      refresherCompleteDelay: {
        type: [Number, String],
        default: u.gc("refresherCompleteDelay", 0)
      },
      // 自定义下拉刷新结束回弹动画时间，单位为毫秒，默认为300毫秒(refresherEndBounceEnabled为false时，refresherCompleteDuration为设定值的1/3)，nvue无效
      refresherCompleteDuration: {
        type: [Number, String],
        default: u.gc("refresherCompleteDuration", 300)
      },
      // 自定义下拉刷新中是否允许列表滚动，默认为是
      refresherRefreshingScrollable: {
        type: Boolean,
        default: u.gc("refresherRefreshingScrollable", true)
      },
      // 自定义下拉刷新结束状态下是否允许列表滚动，默认为否
      refresherCompleteScrollable: {
        type: Boolean,
        default: u.gc("refresherCompleteScrollable", false)
      },
      // 是否使用自定义的下拉刷新，默认为是，即使用z-paging的下拉刷新。设置为false即代表使用uni scroll-view自带的下拉刷新，h5、App、微信小程序以外的平台不支持uni scroll-view自带的下拉刷新
      useCustomRefresher: {
        type: Boolean,
        default: u.gc("useCustomRefresher", true)
      },
      // 自定义下拉刷新下拉帧率，默认为40，过高可能会出现抖动问题
      refresherFps: {
        type: [Number, String],
        default: u.gc("refresherFps", 40)
      },
      // 自定义下拉刷新允许触发的最大下拉角度，默认为40度，当下拉角度小于设定值时，自定义下拉刷新动画不会被触发
      refresherMaxAngle: {
        type: [Number, String],
        default: u.gc("refresherMaxAngle", 40)
      },
      // 自定义下拉刷新的角度由未达到最大角度变到达到最大角度时，是否继续下拉刷新手势，默认为否
      refresherAngleEnableChangeContinued: {
        type: Boolean,
        default: u.gc("refresherAngleEnableChangeContinued", false)
      },
      // 自定义下拉刷新默认状态下的文字
      refresherDefaultText: {
        type: [String, Object],
        default: u.gc("refresherDefaultText", null)
      },
      // 自定义下拉刷新松手立即刷新状态下的文字
      refresherPullingText: {
        type: [String, Object],
        default: u.gc("refresherPullingText", null)
      },
      // 自定义下拉刷新刷新中状态下的文字
      refresherRefreshingText: {
        type: [String, Object],
        default: u.gc("refresherRefreshingText", null)
      },
      // 自定义下拉刷新刷新结束状态下的文字
      refresherCompleteText: {
        type: [String, Object],
        default: u.gc("refresherCompleteText", null)
      },
      // 自定义继续下拉进入二楼文字
      refresherGoF2Text: {
        type: [String, Object],
        default: u.gc("refresherGoF2Text", null)
      },
      // 自定义下拉刷新默认状态下的图片
      refresherDefaultImg: {
        type: String,
        default: u.gc("refresherDefaultImg", null)
      },
      // 自定义下拉刷新松手立即刷新状态下的图片，默认与refresherDefaultImg一致
      refresherPullingImg: {
        type: String,
        default: u.gc("refresherPullingImg", null)
      },
      // 自定义下拉刷新刷新中状态下的图片
      refresherRefreshingImg: {
        type: String,
        default: u.gc("refresherRefreshingImg", null)
      },
      // 自定义下拉刷新刷新结束状态下的图片
      refresherCompleteImg: {
        type: String,
        default: u.gc("refresherCompleteImg", null)
      },
      // 自定义下拉刷新刷新中状态下是否展示旋转动画
      refresherRefreshingAnimated: {
        type: Boolean,
        default: u.gc("refresherRefreshingAnimated", true)
      },
      // 是否开启自定义下拉刷新刷新结束回弹效果，默认为是
      refresherEndBounceEnabled: {
        type: Boolean,
        default: u.gc("refresherEndBounceEnabled", true)
      },
      // 是否开启自定义下拉刷新，默认为是
      refresherEnabled: {
        type: Boolean,
        default: u.gc("refresherEnabled", true)
      },
      // 设置自定义下拉刷新阈值，默认为80rpx
      refresherThreshold: {
        type: [Number, String],
        default: u.gc("refresherThreshold", "80rpx")
      },
      // 设置系统下拉刷新默认样式，支持设置 black，white，none，none 表示不使用默认样式，默认为black
      refresherDefaultStyle: {
        type: String,
        default: u.gc("refresherDefaultStyle", "black")
      },
      // 设置自定义下拉刷新区域背景
      refresherBackground: {
        type: String,
        default: u.gc("refresherBackground", "transparent")
      },
      // 设置固定的自定义下拉刷新区域背景
      refresherFixedBackground: {
        type: String,
        default: u.gc("refresherFixedBackground", "transparent")
      },
      // 设置固定的自定义下拉刷新区域高度，默认为0
      refresherFixedBacHeight: {
        type: [Number, String],
        default: u.gc("refresherFixedBacHeight", 0)
      },
      // 设置自定义下拉刷新下拉超出阈值后继续下拉位移衰减的比例，范围0-1，值越大代表衰减越多。默认为0.65(nvue无效)
      refresherOutRate: {
        type: Number,
        default: u.gc("refresherOutRate", 0.65)
      },
      // 是否开启下拉进入二楼功能，默认为否
      refresherF2Enabled: {
        type: Boolean,
        default: u.gc("refresherF2Enabled", false)
      },
      // 下拉进入二楼阈值，默认为200rpx
      refresherF2Threshold: {
        type: [Number, String],
        default: u.gc("refresherF2Threshold", "200rpx")
      },
      // 下拉进入二楼动画时间，单位为毫秒，默认为200毫秒
      refresherF2Duration: {
        type: [Number, String],
        default: u.gc("refresherF2Duration", 200)
      },
      // 下拉进入二楼状态松手后是否弹出二楼，默认为是
      showRefresherF2: {
        type: Boolean,
        default: u.gc("showRefresherF2", true)
      },
      // 设置自定义下拉刷新下拉时实际下拉位移与用户下拉距离的比值，默认为0.75，即代表若用户下拉10px，则实际位移为7.5px(nvue无效)
      refresherPullRate: {
        type: Number,
        default: u.gc("refresherPullRate", 0.75)
      },
      // 是否显示最后更新时间，默认为否
      showRefresherUpdateTime: {
        type: Boolean,
        default: u.gc("showRefresherUpdateTime", false)
      },
      // 如果需要区别不同页面的最后更新时间，请为不同页面的z-paging的`refresher-update-time-key`设置不同的字符串
      refresherUpdateTimeKey: {
        type: String,
        default: u.gc("refresherUpdateTimeKey", "default")
      },
      // 下拉刷新时下拉到“松手立即刷新”或“松手进入二楼”状态时是否使手机短振动，默认为否（h5无效）
      refresherVibrate: {
        type: Boolean,
        default: u.gc("refresherVibrate", false)
      },
      // 下拉刷新时是否禁止下拉刷新view跟随用户触摸竖直移动，默认为否。注意此属性只是禁止下拉刷新view移动，其他下拉刷新逻辑依然会正常触发
      refresherNoTransform: {
        type: Boolean,
        default: u.gc("refresherNoTransform", false)
      },
      // 是否开启下拉刷新状态栏占位，适用于隐藏导航栏时，下拉刷新需要避开状态栏高度的情况，默认为否
      useRefresherStatusBarPlaceholder: {
        type: Boolean,
        default: u.gc("useRefresherStatusBarPlaceholder", false)
      }
    },
    data() {
      return {
        R: Enum.Refresher,
        //下拉刷新状态
        refresherStatus: Enum.Refresher.Default,
        refresherTouchstartY: 0,
        lastRefresherTouchmove: null,
        refresherReachMaxAngle: true,
        refresherTransform: "translateY(0px)",
        refresherTransition: "",
        finalRefresherDefaultStyle: "black",
        refresherRevealStackCount: 0,
        refresherCompleteTimeout: null,
        refresherCompleteSubTimeout: null,
        refresherEndTimeout: null,
        isTouchmovingTimeout: null,
        refresherTriggered: false,
        isTouchmoving: false,
        isTouchEnded: false,
        isUserPullDown: false,
        privateRefresherEnabled: -1,
        privateShowRefresherWhenReload: false,
        customRefresherHeight: -1,
        showCustomRefresher: false,
        doRefreshAnimateAfter: false,
        isRefresherInComplete: false,
        showF2: false,
        f2Transform: "",
        pullDownTimeStamp: 0,
        moveDis: 0,
        oldMoveDis: 0,
        currentDis: 0,
        oldCurrentMoveDis: 0,
        oldRefresherTouchmoveY: 0,
        oldTouchDirection: "",
        oldEmitedTouchDirection: "",
        oldPullingDistance: -1,
        refresherThresholdUpdateTag: 0
      };
    },
    watch: {
      refresherDefaultStyle: {
        handler(newVal) {
          if (newVal.length) {
            this.finalRefresherDefaultStyle = newVal;
          }
        },
        immediate: true
      },
      refresherStatus(newVal) {
        newVal === Enum.Refresher.Loading && this._cleanRefresherEndTimeout();
        this.refresherVibrate && (newVal === Enum.Refresher.ReleaseToRefresh || newVal === Enum.Refresher.GoF2) && this._doVibrateShort();
        this.$emit("refresherStatusChange", newVal);
        this.$emit("update:refresherStatus", newVal);
      },
      // 监听当前下拉刷新启用/禁用状态
      refresherEnabled(newVal) {
        !newVal && this.endRefresh();
      }
    },
    computed: {
      pullDownDisTimeStamp() {
        return 1e3 / this.refresherFps;
      },
      refresherThresholdUnitConverted() {
        return u.addUnit(this.refresherThreshold, this.unit);
      },
      finalRefresherEnabled() {
        if (this.layoutOnly || this.useChatRecordMode)
          return false;
        if (this.privateRefresherEnabled === -1)
          return this.refresherEnabled;
        return this.privateRefresherEnabled === 1;
      },
      finalRefresherThreshold() {
        let refresherThreshold = this.refresherThresholdUnitConverted;
        let idDefault = false;
        if (refresherThreshold === u.addUnit(80, this.unit)) {
          idDefault = true;
          if (this.showRefresherUpdateTime) {
            refresherThreshold = u.addUnit(120, this.unit);
          }
        }
        if (idDefault && this.customRefresherHeight > 0)
          return this.customRefresherHeight + this.finalRefresherThresholdPlaceholder;
        return u.convertToPx(refresherThreshold) + this.finalRefresherThresholdPlaceholder;
      },
      finalRefresherF2Threshold() {
        return u.convertToPx(u.addUnit(this.refresherF2Threshold, this.unit));
      },
      finalRefresherThresholdPlaceholder() {
        return this.useRefresherStatusBarPlaceholder ? this.statusBarHeight : 0;
      },
      finalRefresherFixedBacHeight() {
        return u.convertToPx(this.refresherFixedBacHeight);
      },
      finalRefresherThemeStyle() {
        return this.refresherThemeStyle.length ? this.refresherThemeStyle : this.defaultThemeStyle;
      },
      finalRefresherOutRate() {
        let rate = this.refresherOutRate;
        rate = Math.max(0, rate);
        rate = Math.min(1, rate);
        return rate;
      },
      finalRefresherPullRate() {
        let rate = this.refresherPullRate;
        rate = Math.max(0, rate);
        return rate;
      },
      finalRefresherTransform() {
        if (this.refresherNoTransform || this.refresherTransform === "translateY(0px)")
          return "none";
        return this.refresherTransform;
      },
      finalShowRefresherWhenReload() {
        return this.showRefresherWhenReload || this.privateShowRefresherWhenReload;
      },
      finalRefresherTriggered() {
        if (!(this.finalRefresherEnabled && !this.useCustomRefresher))
          return false;
        return this.refresherTriggered;
      },
      showRefresher() {
        const showRefresher = this.finalRefresherEnabled || this.useCustomRefresher && !this.useChatRecordMode;
        this.active && this.customRefresherHeight === -1 && showRefresher && this.updateCustomRefresherHeight();
        return showRefresher;
      },
      hasTouchmove() {
        return this.watchRefresherTouchmove;
      }
    },
    methods: {
      // 终止下拉刷新状态
      endRefresh() {
        this.totalData = this.realTotalData;
        this._refresherEnd();
        this._endSystemLoadingAndRefresh();
        this._handleScrollViewBounce({ bounce: true });
        this.$nextTick(() => {
          this.refresherTriggered = false;
        });
      },
      // 手动更新自定义下拉刷新view高度
      updateCustomRefresherHeight() {
        u.delay(() => this.$nextTick(this._updateCustomRefresherHeight));
      },
      // 进入二楼
      goF2() {
        this._handleGoF2();
      },
      // 关闭二楼
      closeF2() {
        this._handleCloseF2();
      },
      // 自定义下拉刷新被触发
      _onRefresh(fromScrollView = false, isUserPullDown = true) {
        if (fromScrollView && !(this.finalRefresherEnabled && !this.useCustomRefresher))
          return;
        this.$emit("onRefresh");
        this.$emit("Refresh");
        if (this.loading || this.isRefresherInComplete)
          return;
        this.loadingType = Enum.LoadingType.Refresher;
        if (this.nShowRefresherReveal)
          return;
        this.isUserPullDown = isUserPullDown;
        this.isUserReload = !isUserPullDown;
        this._startLoading(true);
        this.refresherTriggered = true;
        if (this.reloadWhenRefresh && isUserPullDown) {
          this.useChatRecordMode ? this._onLoadingMore("click") : this._reload(false, false, isUserPullDown);
        }
      },
      // 自定义下拉刷新被复位
      _onRestore() {
        this.refresherTriggered = "restore";
        this.$emit("onRestore");
        this.$emit("Restore");
      },
      // 进一步处理touch开始结果
      _handleRefresherTouchstart(touch) {
        if (!this.loading && this.isTouchEnded) {
          this.isTouchmoving = false;
        }
        this.loadingType = Enum.LoadingType.Refresher;
        this.isTouchmovingTimeout && clearTimeout(this.isTouchmovingTimeout);
        this.isTouchEnded = false;
        this.refresherTransition = "";
        this.refresherTouchstartY = touch.touchY;
        this.$emit("refresherTouchstart", this.refresherTouchstartY);
        this.lastRefresherTouchmove = touch;
        this._cleanRefresherCompleteTimeout();
        this._cleanRefresherEndTimeout();
      },
      // 非app-vue或微信小程序或QQ小程序或h5平台，使用js控制下拉刷新
      // 进一步处理touch中结果
      _handleRefresherTouchmove(moveDis, touch) {
        this.refresherReachMaxAngle = true;
        this.isTouchmovingTimeout && clearTimeout(this.isTouchmovingTimeout);
        this.isTouchmoving = true;
        this.isTouchEnded = false;
        if (moveDis >= this.finalRefresherThreshold) {
          this.refresherStatus = this.refresherF2Enabled && moveDis >= this.finalRefresherF2Threshold ? Enum.Refresher.GoF2 : Enum.Refresher.ReleaseToRefresh;
        } else {
          this.refresherStatus = Enum.Refresher.Default;
        }
        this.moveDis = moveDis;
      },
      // 进一步处理touch结束结果
      _handleRefresherTouchend(moveDis) {
        this.isTouchmovingTimeout && clearTimeout(this.isTouchmovingTimeout);
        this.refresherReachMaxAngle = true;
        this.isTouchEnded = true;
        const refresherThreshold = this.finalRefresherThreshold;
        if (moveDis >= refresherThreshold && [Enum.Refresher.ReleaseToRefresh, Enum.Refresher.GoF2].indexOf(this.refresherStatus) >= 0) {
          if (this.refresherStatus === Enum.Refresher.GoF2) {
            this._handleGoF2();
            this._refresherEnd();
          } else {
            u.delay(() => {
              this._emitTouchmove({ pullingDistance: refresherThreshold, dy: this.moveDis - refresherThreshold });
            }, 0.1);
            this.moveDis = refresherThreshold;
            this.refresherStatus = Enum.Refresher.Loading;
            this._doRefresherLoad();
          }
        } else {
          this._refresherEnd();
          this.isTouchmovingTimeout = u.delay(() => {
            this.isTouchmoving = false;
          }, this.refresherDefaultDuration);
        }
        this.scrollEnable = true;
        this.$emit("refresherTouchend", moveDis);
      },
      // 处理列表触摸开始事件
      _handleListTouchstart() {
        if (this.useChatRecordMode && this.autoHideKeyboardWhenChat) {
          uni.hideKeyboard();
          this.$emit("hidedKeyboard");
        }
      },
      // 处理scroll-view bounce是否生效
      _handleScrollViewBounce({ bounce }) {
        if (!this.usePageScroll && !this.scrollToTopBounceEnabled) {
          if (this.wxsScrollTop <= 5) {
            this.refresherTransition = "";
            this.scrollEnable = bounce;
          } else if (bounce) {
            this.scrollEnable = bounce;
          }
        }
      },
      // wxs正在下拉状态改变处理
      _handleWxsPullingDownStatusChange(onPullingDown) {
        this.wxsOnPullingDown = onPullingDown;
        if (onPullingDown && !this.useChatRecordMode) {
          this.renderPropScrollTop = 0;
        }
      },
      // wxs正在下拉处理
      _handleWxsPullingDown({ moveDis, diffDis }) {
        this._emitTouchmove({ pullingDistance: moveDis, dy: diffDis });
      },
      // wxs触摸方向改变
      _handleTouchDirectionChange({ direction }) {
        this.$emit("touchDirectionChange", direction);
      },
      // wxs通知更新其props
      _handlePropUpdate() {
        this.wxsPropType = u.getTime().toString();
      },
      // 下拉刷新结束
      _refresherEnd(shouldEndLoadingDelay = true, fromAddData = false, isUserPullDown = false, setLoading = true) {
        if (this.loadingType === Enum.LoadingType.Refresher) {
          const refresherCompleteDelay = fromAddData && (isUserPullDown || this.finalShowRefresherWhenReload) ? this.refresherCompleteDelay : 0;
          const refresherStatus = refresherCompleteDelay > 0 ? Enum.Refresher.Complete : Enum.Refresher.Default;
          if (this.finalShowRefresherWhenReload) {
            const stackCount = this.refresherRevealStackCount;
            this.refresherRevealStackCount--;
            if (stackCount > 1)
              return;
          }
          this._cleanRefresherEndTimeout();
          this.refresherEndTimeout = u.delay(() => {
            this.refresherStatus = refresherStatus;
            if (refresherStatus !== Enum.Refresher.Complete) {
              this.isRefresherInComplete = false;
            }
          }, this.refresherStatus !== Enum.Refresher.Default && refresherStatus === Enum.Refresher.Default ? this.refresherCompleteDuration : 0);
          if (refresherCompleteDelay > 0) {
            this.isRefresherInComplete = true;
          }
          this._cleanRefresherCompleteTimeout();
          this.refresherCompleteTimeout = u.delay(() => {
            let animateDuration = 1;
            const animateType = this.refresherEndBounceEnabled && fromAddData ? "cubic-bezier(0.19,1.64,0.42,0.72)" : "linear";
            if (fromAddData) {
              animateDuration = this.refresherEndBounceEnabled ? this.refresherCompleteDuration / 1e3 : this.refresherCompleteDuration / 3e3;
            }
            this.refresherTransition = `transform ${fromAddData ? animateDuration : this.refresherDefaultDuration / 1e3}s ${animateType}`;
            this.wxsPropType = this.refresherTransition + "end" + u.getTime();
            this.moveDis = 0;
            if (refresherStatus === Enum.Refresher.Complete) {
              if (this.refresherCompleteSubTimeout) {
                clearTimeout(this.refresherCompleteSubTimeout);
                this.refresherCompleteSubTimeout = null;
              }
              this.refresherCompleteSubTimeout = u.delay(() => {
                this.$nextTick(() => {
                  this.refresherStatus = Enum.Refresher.Default;
                  this.isRefresherInComplete = false;
                });
              }, animateDuration * 800);
            }
            this._emitTouchmove({ pullingDistance: 0, dy: this.moveDis });
          }, refresherCompleteDelay);
        }
        if (setLoading) {
          u.delay(() => this.loading = false, shouldEndLoadingDelay ? 10 : 0);
          isUserPullDown && this._onRestore();
        }
      },
      // 处理进入二楼
      _handleGoF2() {
        if (this.showF2 || !this.refresherF2Enabled)
          return;
        this.$emit("refresherF2Change", "go");
        if (!this.showRefresherF2)
          return;
        this.f2Transform = `translateY(${-this.superContentHeight}px)`;
        this.showF2 = true;
        u.delay(() => {
          this.f2Transform = "translateY(0px)";
        }, 100, "f2ShowDelay");
      },
      // 处理退出二楼
      _handleCloseF2() {
        if (!this.showF2 || !this.refresherF2Enabled)
          return;
        this.$emit("refresherF2Change", "close");
        if (!this.showRefresherF2)
          return;
        this.f2Transform = `translateY(${-this.superContentHeight}px)`;
        u.delay(() => {
          this.showF2 = false;
          this.nF2Opacity = 0;
        }, this.refresherF2Duration, "f2CloseDelay");
      },
      // 模拟用户手动触发下拉刷新
      _doRefresherRefreshAnimate() {
        this._cleanRefresherCompleteTimeout();
        const doRefreshAnimateAfter = !this.doRefreshAnimateAfter && this.finalShowRefresherWhenReload && this.customRefresherHeight === -1 && this.refresherThreshold === u.addUnit(80, this.unit);
        if (doRefreshAnimateAfter) {
          this.doRefreshAnimateAfter = true;
          return;
        }
        this.refresherRevealStackCount++;
        this.wxsPropType = "begin" + u.getTime();
        this.moveDis = this.finalRefresherThreshold;
        this.refresherStatus = Enum.Refresher.Loading;
        this.isTouchmoving = true;
        this.isTouchmovingTimeout && clearTimeout(this.isTouchmovingTimeout);
        this._doRefresherLoad(false);
      },
      // 触发下拉刷新
      _doRefresherLoad(isUserPullDown = true) {
        this._onRefresh(false, isUserPullDown);
        this.loading = true;
      },
      // 更新自定义下拉刷新view高度
      _updateCustomRefresherHeight() {
        this._getNodeClientRect(".zp-custom-refresher-slot-view").then((res) => {
          this.customRefresherHeight = res ? res[0].height : 0;
          this.showCustomRefresher = this.customRefresherHeight > 0;
          if (this.doRefreshAnimateAfter) {
            this.doRefreshAnimateAfter = false;
            this._doRefresherRefreshAnimate();
          }
        });
      },
      // emit pullingDown事件
      _emitTouchmove(e) {
        e.viewHeight = this.finalRefresherThreshold;
        e.rate = e.viewHeight > 0 ? e.pullingDistance / e.viewHeight : 0;
        this.hasTouchmove && this.oldPullingDistance !== e.pullingDistance && this.$emit("refresherTouchmove", e);
        this.oldPullingDistance = e.pullingDistance;
      },
      // 清除refresherCompleteTimeout
      _cleanRefresherCompleteTimeout() {
        this.refresherCompleteTimeout = this._cleanTimeout(this.refresherCompleteTimeout);
      },
      // 清除refresherEndTimeout
      _cleanRefresherEndTimeout() {
        this.refresherEndTimeout = this._cleanTimeout(this.refresherEndTimeout);
      }
    }
  };
  const loadMoreModule = {
    props: {
      // 自定义底部加载更多样式
      loadingMoreCustomStyle: {
        type: Object,
        default: u.gc("loadingMoreCustomStyle", {})
      },
      // 自定义底部加载更多文字样式
      loadingMoreTitleCustomStyle: {
        type: Object,
        default: u.gc("loadingMoreTitleCustomStyle", {})
      },
      // 自定义底部加载更多加载中动画样式
      loadingMoreLoadingIconCustomStyle: {
        type: Object,
        default: u.gc("loadingMoreLoadingIconCustomStyle", {})
      },
      // 自定义底部加载更多加载中动画图标类型，可选flower或circle，默认为flower
      loadingMoreLoadingIconType: {
        type: String,
        default: u.gc("loadingMoreLoadingIconType", "flower")
      },
      // 自定义底部加载更多加载中动画图标图片
      loadingMoreLoadingIconCustomImage: {
        type: String,
        default: u.gc("loadingMoreLoadingIconCustomImage", "")
      },
      // 底部加载更多加载中view是否展示旋转动画，默认为是
      loadingMoreLoadingAnimated: {
        type: Boolean,
        default: u.gc("loadingMoreLoadingAnimated", true)
      },
      // 是否启用加载更多数据(含滑动到底部加载更多数据和点击加载更多数据)，默认为是
      loadingMoreEnabled: {
        type: Boolean,
        default: u.gc("loadingMoreEnabled", true)
      },
      // 是否启用滑动到底部加载更多数据，默认为是
      toBottomLoadingMoreEnabled: {
        type: Boolean,
        default: u.gc("toBottomLoadingMoreEnabled", true)
      },
      // 滑动到底部状态为默认状态时，以加载中的状态展示，默认为否。若设置为是，可避免滚动到底部看到默认状态然后立刻变为加载中状态的问题，但分页数量未超过一屏时，不会显示【点击加载更多】
      loadingMoreDefaultAsLoading: {
        type: Boolean,
        default: u.gc("loadingMoreDefaultAsLoading", false)
      },
      // 滑动到底部"默认"文字，默认为【点击加载更多】
      loadingMoreDefaultText: {
        type: [String, Object],
        default: u.gc("loadingMoreDefaultText", null)
      },
      // 滑动到底部"加载中"文字，默认为【正在加载...】
      loadingMoreLoadingText: {
        type: [String, Object],
        default: u.gc("loadingMoreLoadingText", null)
      },
      // 滑动到底部"没有更多"文字，默认为【没有更多了】
      loadingMoreNoMoreText: {
        type: [String, Object],
        default: u.gc("loadingMoreNoMoreText", null)
      },
      // 滑动到底部"加载失败"文字，默认为【加载失败，点击重新加载】
      loadingMoreFailText: {
        type: [String, Object],
        default: u.gc("loadingMoreFailText", null)
      },
      // 当没有更多数据且分页内容未超出z-paging时是否隐藏没有更多数据的view，默认为否
      hideNoMoreInside: {
        type: Boolean,
        default: u.gc("hideNoMoreInside", false)
      },
      // 当没有更多数据且分页数组长度少于这个值时，隐藏没有更多数据的view，默认为0，代表不限制。
      hideNoMoreByLimit: {
        type: Number,
        default: u.gc("hideNoMoreByLimit", 0)
      },
      // 是否显示默认的加载更多text，默认为是
      showDefaultLoadingMoreText: {
        type: Boolean,
        default: u.gc("showDefaultLoadingMoreText", true)
      },
      // 是否显示没有更多数据的view
      showLoadingMoreNoMoreView: {
        type: Boolean,
        default: u.gc("showLoadingMoreNoMoreView", true)
      },
      // 是否显示没有更多数据的分割线，默认为是
      showLoadingMoreNoMoreLine: {
        type: Boolean,
        default: u.gc("showLoadingMoreNoMoreLine", true)
      },
      // 自定义底部没有更多数据的分割线样式
      loadingMoreNoMoreLineCustomStyle: {
        type: Object,
        default: u.gc("loadingMoreNoMoreLineCustomStyle", {})
      },
      // 当分页未满一屏时，是否自动加载更多，默认为否(nvue无效)
      insideMore: {
        type: Boolean,
        default: u.gc("insideMore", false)
      },
      // 距底部/右边多远时（单位px），触发 scrolltolower 事件，默认为100rpx
      lowerThreshold: {
        type: [Number, String],
        default: u.gc("lowerThreshold", "100rpx")
      }
    },
    data() {
      return {
        M: Enum.More,
        // 底部加载更多状态
        loadingStatus: Enum.More.Default,
        // 在渲染之后的底部加载更多状态
        loadingStatusAfterRender: Enum.More.Default,
        // 底部加载更多时间戳
        loadingMoreTimeStamp: 0,
        // 底部加载更多slot
        loadingMoreDefaultSlot: null,
        // 是否展示底部加载更多
        showLoadingMore: false,
        // 是否是开发者自定义的加载更多，-1代表交由z-paging自行判断；1代表没有更多了；0代表还有更多数据
        customNoMore: -1
      };
    },
    computed: {
      // 底部加载更多配置
      zLoadMoreConfig() {
        return {
          status: this.loadingStatusAfterRender,
          defaultAsLoading: this.loadingMoreDefaultAsLoading || this.useChatRecordMode && this.chatLoadingMoreDefaultAsLoading,
          defaultThemeStyle: this.finalLoadingMoreThemeStyle,
          customStyle: this.loadingMoreCustomStyle,
          titleCustomStyle: this.loadingMoreTitleCustomStyle,
          iconCustomStyle: this.loadingMoreLoadingIconCustomStyle,
          loadingIconType: this.loadingMoreLoadingIconType,
          loadingIconCustomImage: this.loadingMoreLoadingIconCustomImage,
          loadingAnimated: this.loadingMoreLoadingAnimated,
          showNoMoreLine: this.showLoadingMoreNoMoreLine,
          noMoreLineCustomStyle: this.loadingMoreNoMoreLineCustomStyle,
          defaultText: this.finalLoadingMoreDefaultText,
          loadingText: this.finalLoadingMoreLoadingText,
          noMoreText: this.finalLoadingMoreNoMoreText,
          failText: this.finalLoadingMoreFailText,
          hideContent: !this.loadingMoreDefaultAsLoading && this.listRendering,
          unit: this.unit,
          isChat: this.useChatRecordMode,
          chatDefaultAsLoading: this.chatLoadingMoreDefaultAsLoading
        };
      },
      // 最终的底部加载更多主题
      finalLoadingMoreThemeStyle() {
        return this.loadingMoreThemeStyle.length ? this.loadingMoreThemeStyle : this.defaultThemeStyle;
      },
      // 最终的底部加载更多触发阈值
      finalLowerThreshold() {
        return u.convertToPx(this.lowerThreshold);
      },
      // 是否显示默认状态下的底部加载更多
      showLoadingMoreDefault() {
        return this._showLoadingMore("Default");
      },
      // 是否显示加载中状态下的底部加载更多
      showLoadingMoreLoading() {
        return this._showLoadingMore("Loading");
      },
      // 是否显示没有更多了状态下的底部加载更多
      showLoadingMoreNoMore() {
        return this._showLoadingMore("NoMore");
      },
      // 是否显示加载失败状态下的底部加载更多
      showLoadingMoreFail() {
        return this._showLoadingMore("Fail");
      },
      // 是否显示自定义状态下的底部加载更多
      showLoadingMoreCustom() {
        return this._showLoadingMore("Custom");
      },
      // 底部加载更多固定高度
      loadingMoreFixedHeight() {
        return u.addUnit("80rpx", this.unit);
      }
    },
    methods: {
      // 页面滚动到底部时通知z-paging进行进一步处理
      pageReachBottom() {
        !this.useChatRecordMode && this.toBottomLoadingMoreEnabled && this._onLoadingMore("toBottom");
      },
      // 手动触发上拉加载更多(非必须，可依据具体需求使用)
      doLoadMore(type) {
        this._onLoadingMore(type);
      },
      // 通过@scroll事件检测是否滚动到了底部(顺带检测下是否滚动到了顶部)
      _checkScrolledToBottom(scrollDiff, checked = false) {
        if (this.cacheScrollNodeHeight === -1) {
          this._getNodeClientRect(".zp-scroll-view").then((res) => {
            if (res) {
              const scrollNodeHeight = res[0].height;
              this.cacheScrollNodeHeight = scrollNodeHeight;
              if (scrollDiff - scrollNodeHeight <= this.finalLowerThreshold) {
                this._onLoadingMore("toBottom");
              }
            }
          });
        } else {
          if (scrollDiff - this.cacheScrollNodeHeight <= this.finalLowerThreshold) {
            this._onLoadingMore("toBottom");
          } else if (scrollDiff - this.cacheScrollNodeHeight <= 500 && !checked) {
            u.delay(() => {
              this._getNodeClientRect(".zp-scroll-view", true, true).then((res) => {
                if (res) {
                  this.oldScrollTop = res[0].scrollTop;
                  const newScrollDiff = res[0].scrollHeight - this.oldScrollTop;
                  this._checkScrolledToBottom(newScrollDiff, true);
                }
              });
            }, 150, "checkScrolledToBottomDelay");
          }
          if (this.oldScrollTop <= 150 && this.oldScrollTop !== 0) {
            u.delay(() => {
              if (this.oldScrollTop !== 0) {
                this._getNodeClientRect(".zp-scroll-view", true, true).then((res) => {
                  if (res && res[0].scrollTop === 0 && this.oldScrollTop !== 0) {
                    this._onScrollToUpper();
                  }
                });
              }
            }, 150, "checkScrolledToTopDelay");
          }
        }
      },
      // 触发加载更多时调用,from:toBottom-滑动到底部触发；click-点击加载更多触发
      _onLoadingMore(from = "click") {
        if (this.isIos && from === "toBottom" && !this.scrollToBottomBounceEnabled && this.scrollEnable) {
          this.scrollEnable = false;
          this.$nextTick(() => {
            this.scrollEnable = true;
          });
        }
        this._emitScrollEvent("scrolltolower");
        if (this.isOnly || !this.loadingMoreEnabled || !(this.loadingStatus === Enum.More.Default || this.loadingStatus === Enum.More.Fail) || this.loading || this.showEmpty)
          return;
        this._doLoadingMore();
      },
      // 处理开始加载更多
      _doLoadingMore() {
        if (this.pageNo >= this.defaultPageNo && this.loadingStatus !== Enum.More.NoMore) {
          this.pageNo++;
          this._startLoading(false);
          if (this.isLocalPaging) {
            this._localPagingQueryList(this.pageNo, this.defaultPageSize, this.localPagingLoadingTime, (res) => {
              this.completeByTotal(res, this.totalLocalPagingList.length);
              this.queryFrom = Enum.QueryFrom.LoadMore;
            });
          } else {
            this._emitQuery(this.pageNo, this.defaultPageSize, Enum.QueryFrom.LoadMore);
            this._callMyParentQuery();
          }
          this.loadingType = Enum.LoadingType.LoadMore;
        }
      },
      // (预处理)判断当没有更多数据且分页内容未超出z-paging时是否显示没有更多数据的view
      _preCheckShowNoMoreInside(newVal, scrollViewNode, pagingContainerNode) {
        if (this.loadingStatus === Enum.More.NoMore && this.hideNoMoreByLimit > 0 && newVal.length) {
          this.showLoadingMore = newVal.length > this.hideNoMoreByLimit;
        } else if (this.loadingStatus === Enum.More.NoMore && this.hideNoMoreInside && newVal.length || this.insideMore && this.insideOfPaging !== false && newVal.length) {
          this.$nextTick(() => {
            this._checkShowNoMoreInside(newVal, scrollViewNode, pagingContainerNode);
          });
          if (this.insideMore && this.insideOfPaging !== false && newVal.length) {
            this.showLoadingMore = newVal.length;
          }
        } else {
          this.showLoadingMore = newVal.length;
        }
      },
      // 判断当没有更多数据且分页内容未超出z-paging时是否显示没有更多数据的view
      async _checkShowNoMoreInside(totalData, oldScrollViewNode, oldPagingContainerNode) {
        try {
          const scrollViewNode = oldScrollViewNode || await this._getNodeClientRect(".zp-scroll-view");
          if (this.usePageScroll) {
            if (scrollViewNode) {
              const scrollViewTotalH = scrollViewNode[0].top + scrollViewNode[0].height;
              this.insideOfPaging = scrollViewTotalH < this.windowHeight;
              if (this.hideNoMoreInside) {
                this.showLoadingMore = !this.insideOfPaging;
              }
              this._updateInsideOfPaging();
            }
          } else {
            const pagingContainerNode = oldPagingContainerNode || await this._getNodeClientRect(".zp-paging-container-content");
            const pagingContainerH = pagingContainerNode ? pagingContainerNode[0].height : 0;
            const scrollViewH = scrollViewNode ? scrollViewNode[0].height : 0;
            this.insideOfPaging = pagingContainerH < scrollViewH;
            if (this.hideNoMoreInside) {
              this.showLoadingMore = !this.insideOfPaging;
            }
            this._updateInsideOfPaging();
          }
        } catch (e) {
          this.insideOfPaging = !totalData.length;
          if (this.hideNoMoreInside) {
            this.showLoadingMore = !this.insideOfPaging;
          }
          this._updateInsideOfPaging();
        }
      },
      // 是否要展示上拉加载更多view
      _showLoadingMore(type) {
        if (!this.showLoadingMoreWhenReload && (!(this.loadingStatus === Enum.More.Default ? this.nShowBottom : true) || !this.realTotalData.length))
          return false;
        if ((!this.showLoadingMoreWhenReload || this.isUserPullDown || this.loadingStatus !== Enum.More.Loading) && !this.showLoadingMore || !this.loadingMoreEnabled && (!this.showLoadingMoreWhenReload || this.isUserPullDown || this.loadingStatus !== Enum.More.Loading) || this.isOnly) {
          return false;
        }
        if (this.useChatRecordMode && type !== "Loading")
          return false;
        if (!this.zSlots)
          return false;
        if (type === "Custom") {
          return this.showDefaultLoadingMoreText && !(this.loadingStatus === Enum.More.NoMore && !this.showLoadingMoreNoMoreView);
        }
        const res = this.loadingStatus === Enum.More[type] && this.zSlots[`loadingMore${type}`] && (type === "NoMore" ? this.showLoadingMoreNoMoreView : true);
        return res;
      }
    }
  };
  const loadingModule = {
    props: {
      // 第一次加载后自动隐藏loading slot，默认为是
      autoHideLoadingAfterFirstLoaded: {
        type: Boolean,
        default: u.gc("autoHideLoadingAfterFirstLoaded", true)
      },
      // loading slot是否铺满屏幕并固定，默认为否
      loadingFullFixed: {
        type: Boolean,
        default: u.gc("loadingFullFixed", false)
      },
      // 是否自动显示系统Loading：即uni.showLoading，若开启则将在刷新列表时(调用reload、refresh时)显示，下拉刷新和滚动到底部加载更多不会显示，默认为false。
      autoShowSystemLoading: {
        type: Boolean,
        default: u.gc("autoShowSystemLoading", false)
      },
      // 显示系统Loading时是否显示透明蒙层，防止触摸穿透，默认为是(H5、App、微信小程序、百度小程序有效)
      systemLoadingMask: {
        type: Boolean,
        default: u.gc("systemLoadingMask", true)
      },
      // 显示系统Loading时显示的文字，默认为"加载中"
      systemLoadingText: {
        type: [String, Object],
        default: u.gc("systemLoadingText", null)
      }
    },
    data() {
      return {
        loading: false,
        loadingForNow: false
      };
    },
    watch: {
      // loading状态
      loadingStatus(newVal) {
        this.$emit("loadingStatusChange", newVal);
        this.$nextTick(() => {
          this.loadingStatusAfterRender = newVal;
        });
        if (this.useChatRecordMode) {
          if (this.isFirstPage && (newVal === Enum.More.NoMore || newVal === Enum.More.Fail)) {
            this.isFirstPageAndNoMore = true;
            return;
          }
        }
        this.isFirstPageAndNoMore = false;
      },
      loading(newVal) {
        if (newVal) {
          this.loadingForNow = newVal;
        }
      }
    },
    computed: {
      // 是否显示loading
      showLoading() {
        if (this.firstPageLoaded || !this.loading || !this.loadingForNow)
          return false;
        if (this.finalShowSystemLoading) {
          uni.showLoading({
            title: this.finalSystemLoadingText,
            mask: this.systemLoadingMask
          });
        }
        return this.autoHideLoadingAfterFirstLoaded ? this.fromEmptyViewReload ? true : !this.pagingLoaded : this.loadingType === Enum.LoadingType.Refresher;
      },
      // 最终的是否显示系统loading
      finalShowSystemLoading() {
        return this.autoShowSystemLoading && this.loadingType === Enum.LoadingType.Refresher;
      }
    },
    methods: {
      // 处理开始加载更多状态
      _startLoading(isReload = false) {
        if (this.showLoadingMoreWhenReload && !this.isUserPullDown || !isReload) {
          this.loadingStatus = Enum.More.Loading;
        }
        this.loading = true;
      },
      // 停止系统loading和refresh
      _endSystemLoadingAndRefresh() {
        this.finalShowSystemLoading && uni.hideLoading();
        !this.useCustomRefresher && uni.stopPullDownRefresh();
      }
    }
  };
  const chatRecordModerModule = {
    props: {
      // 使用聊天记录模式，默认为否
      useChatRecordMode: {
        type: Boolean,
        default: u.gc("useChatRecordMode", false)
      },
      // 使用聊天记录模式时滚动到顶部后，列表垂直移动偏移距离。默认0rpx。单位px（暂时无效）
      chatRecordMoreOffset: {
        type: [Number, String],
        default: u.gc("chatRecordMoreOffset", "0rpx")
      },
      // 使用聊天记录模式时是否自动隐藏键盘：在用户触摸列表时候自动隐藏键盘，默认为是
      autoHideKeyboardWhenChat: {
        type: Boolean,
        default: u.gc("autoHideKeyboardWhenChat", true)
      },
      // 使用聊天记录模式中键盘弹出时是否自动调整slot="bottom"高度，默认为是
      autoAdjustPositionWhenChat: {
        type: Boolean,
        default: u.gc("autoAdjustPositionWhenChat", true)
      },
      // 使用聊天记录模式中键盘弹出时占位高度偏移距离。默认0rpx。单位px
      chatAdjustPositionOffset: {
        type: [Number, String],
        default: u.gc("chatAdjustPositionOffset", "0rpx")
      },
      // 使用聊天记录模式中键盘弹出时是否自动滚动到底部，默认为否
      autoToBottomWhenChat: {
        type: Boolean,
        default: u.gc("autoToBottomWhenChat", false)
      },
      // 使用聊天记录模式中reload时是否显示chatLoading，默认为否
      showChatLoadingWhenReload: {
        type: Boolean,
        default: u.gc("showChatLoadingWhenReload", false)
      },
      // 在聊天记录模式中滑动到顶部状态为默认状态时，以加载中的状态展示，默认为是。若设置为否，则默认会显示【点击加载更多】，然后才会显示loading
      chatLoadingMoreDefaultAsLoading: {
        type: Boolean,
        default: u.gc("chatLoadingMoreDefaultAsLoading", true)
      }
    },
    data() {
      return {
        // 键盘高度
        keyboardHeight: 0,
        // 键盘高度是否未改变，此时占位高度变化不需要动画效果
        isKeyboardHeightChanged: false
      };
    },
    computed: {
      finalChatRecordMoreOffset() {
        return u.convertToPx(this.chatRecordMoreOffset);
      },
      finalChatAdjustPositionOffset() {
        return u.convertToPx(this.chatAdjustPositionOffset);
      },
      // 聊天记录模式旋转180度style
      chatRecordRotateStyle() {
        let cellStyle;
        cellStyle = this.useChatRecordMode ? { transform: "scaleY(-1)" } : {};
        this.$emit("update:cellStyle", cellStyle);
        this.$emit("cellStyleChange", cellStyle);
        this.$nextTick(() => {
          if (this.isFirstPage && this.isChatRecordModeAndNotInversion) {
            this.$nextTick(() => {
              this._scrollToBottom(false);
              u.delay(() => {
                this._scrollToBottom(false);
                u.delay(() => {
                  this._scrollToBottom(false);
                }, 50);
              }, 50);
            });
          }
        });
        return cellStyle;
      },
      // 是否是聊天记录列表并且有配置transform
      isChatRecordModeHasTransform() {
        return this.useChatRecordMode && this.chatRecordRotateStyle && this.chatRecordRotateStyle.transform;
      },
      // 是否是聊天记录列表并且列表未倒置
      isChatRecordModeAndNotInversion() {
        return this.isChatRecordModeHasTransform && this.chatRecordRotateStyle.transform === "scaleY(1)";
      },
      // 是否是聊天记录列表并且列表倒置
      isChatRecordModeAndInversion() {
        return this.isChatRecordModeHasTransform && this.chatRecordRotateStyle.transform === "scaleY(-1)";
      },
      // 最终的聊天记录模式中底部安全区域的高度，如果开启了底部安全区域并且键盘未弹出，则添加底部区域高度
      chatRecordModeSafeAreaBottom() {
        return this.safeAreaInsetBottom && !this.keyboardHeight ? this.safeAreaBottom : 0;
      }
    },
    mounted() {
      this.addKeyboardHeightChangeListener();
    },
    methods: {
      // 添加聊天记录
      addChatRecordData(data, toBottom = true, toBottomWithAnimate = true) {
        if (!this.useChatRecordMode)
          return;
        this.isTotalChangeFromAddData = true;
        this.addDataFromTop(data, toBottom, toBottomWithAnimate);
      },
      // 手动触发滚动到顶部加载更多，聊天记录模式时有效
      doChatRecordLoadMore() {
        this.useChatRecordMode && this._onLoadingMore("click");
      },
      // 手动添加键盘高度变化监听
      addKeyboardHeightChangeListener() {
        if (this.useChatRecordMode) {
          uni.onKeyboardHeightChange(this._handleKeyboardHeightChange);
        }
      },
      // 处理键盘高度变化
      _handleKeyboardHeightChange(res) {
        this.$emit("keyboardHeightChange", res);
        if (this.autoAdjustPositionWhenChat) {
          this.isKeyboardHeightChanged = true;
          this.keyboardHeight = res.height > 0 ? res.height + this.finalChatAdjustPositionOffset : res.height;
        }
        if (this.autoToBottomWhenChat && this.keyboardHeight > 0) {
          u.delay(() => {
            this.scrollToBottom(false);
            u.delay(() => {
              this.scrollToBottom(false);
            });
          });
        }
      }
    }
  };
  const scrollerModule = {
    props: {
      // 使用页面滚动，默认为否，当设置为是时则使用页面的滚动而非此组件内部的scroll-view的滚动，使用页面滚动时z-paging无需设置确定的高度且对于长列表展示性能更高，但配置会略微繁琐
      usePageScroll: {
        type: Boolean,
        default: u.gc("usePageScroll", false)
      },
      // 是否可以滚动，使用内置scroll-view和nvue时有效，默认为是
      scrollable: {
        type: Boolean,
        default: u.gc("scrollable", true)
      },
      // 控制是否出现滚动条，默认为是
      showScrollbar: {
        type: Boolean,
        default: u.gc("showScrollbar", true)
      },
      // 是否允许横向滚动，默认为否
      scrollX: {
        type: Boolean,
        default: u.gc("scrollX", false)
      },
      // iOS设备上滚动到顶部时是否允许回弹效果，默认为否。关闭回弹效果后可使滚动到顶部与下拉刷新更连贯，但是有吸顶view时滚动到顶部时可能出现抖动。
      scrollToTopBounceEnabled: {
        type: Boolean,
        default: u.gc("scrollToTopBounceEnabled", false)
      },
      // iOS设备上滚动到底部时是否允许回弹效果，默认为是。
      scrollToBottomBounceEnabled: {
        type: Boolean,
        default: u.gc("scrollToBottomBounceEnabled", true)
      },
      // 在设置滚动条位置时使用动画过渡，默认为否
      scrollWithAnimation: {
        type: Boolean,
        default: u.gc("scrollWithAnimation", false)
      },
      // 值应为某子元素id（id不能以数字开头）。设置哪个方向可滚动，则在哪个方向滚动到该元素
      scrollIntoView: {
        type: String,
        default: u.gc("scrollIntoView", "")
      },
      // z-paging是否使用swiper-item或其他父组件包裹，默认为否，此属性为了解决vue3+(微信小程序或QQ小程序)中，scrollIntoViewById和scrollIntoViewByIndex因无法获取节点信息导致滚动到指定view无效的问题
      inSwiperSlot: {
        type: Boolean,
        default: false
      }
    },
    data() {
      return {
        scrollTop: 0,
        oldScrollTop: 0,
        scrollLeft: 0,
        oldScrollLeft: 0,
        scrollViewStyle: {},
        scrollViewContainerStyle: {},
        scrollViewInStyle: {},
        pageScrollTop: -1,
        scrollEnable: true,
        privateScrollWithAnimation: -1,
        cacheScrollNodeHeight: -1,
        superContentHeight: 0,
        lastScrollHeight: 0,
        lastScrollDirection: "",
        setContentHeightPending: false
      };
    },
    watch: {
      oldScrollTop(newVal) {
        !this.usePageScroll && this._scrollTopChange(newVal, false);
      },
      pageScrollTop(newVal) {
        this.usePageScroll && this._scrollTopChange(newVal, true);
      },
      usePageScroll: {
        handler(newVal) {
          this.loaded && this.autoHeight && this._setAutoHeight(!newVal);
        },
        immediate: true
      },
      finalScrollTop(newVal) {
        this.renderPropScrollTop = newVal < 6 ? 0 : 10;
      }
    },
    computed: {
      finalScrollWithAnimation() {
        if (this.privateScrollWithAnimation !== -1) {
          return this.privateScrollWithAnimation === 1;
        }
        return this.scrollWithAnimation;
      },
      finalScrollViewStyle() {
        if (this.superContentZIndex != 1) {
          this.scrollViewStyle["z-index"] = this.superContentZIndex;
          this.scrollViewStyle["position"] = "relative";
        }
        return this.scrollViewStyle;
      },
      finalScrollTop() {
        return this.usePageScroll ? this.pageScrollTop : this.oldScrollTop;
      },
      // 当前是否是旧版webview
      finalIsOldWebView() {
        return this.isOldWebView && !this.usePageScroll;
      },
      // 当前scroll-view/list-view是否允许滚动
      finalScrollable() {
        return this.scrollable && !this.usePageScroll && this.scrollEnable && (this.refresherCompleteScrollable ? true : this.refresherStatus !== Enum.Refresher.Complete) && (this.refresherRefreshingScrollable ? true : this.refresherStatus !== Enum.Refresher.Loading);
      }
    },
    methods: {
      // 滚动到顶部，animate为是否展示滚动动画，默认为是
      scrollToTop(animate, checkReverse = true) {
        if (this.useChatRecordMode && checkReverse && !this.isChatRecordModeAndNotInversion) {
          this.scrollToBottom(animate, false);
          return;
        }
        this.$nextTick(() => {
          this._scrollToTop(animate, false);
        });
      },
      // 滚动到底部，animate为是否展示滚动动画，默认为是
      scrollToBottom(animate, checkReverse = true) {
        if (this.useChatRecordMode && checkReverse && !this.isChatRecordModeAndNotInversion) {
          this.scrollToTop(animate, false);
          return;
        }
        this.$nextTick(() => {
          this._scrollToBottom(animate);
        });
      },
      // 滚动到指定view(vue中有效)。sel为需要滚动的view的id值，不包含"#"；offset为偏移量，单位为px；animate为是否展示滚动动画，默认为否
      scrollIntoViewById(sel, offset, animate) {
        this._scrollIntoView(sel, offset, animate);
      },
      // 滚动到指定view(vue中有效)。nodeTop为需要滚动的view的top值(通过uni.createSelectorQuery()获取)；offset为偏移量，单位为px；animate为是否展示滚动动画，默认为否
      scrollIntoViewByNodeTop(nodeTop, offset, animate) {
        this.scrollTop = this.oldScrollTop;
        this.$nextTick(() => {
          this._scrollIntoViewByNodeTop(nodeTop, offset, animate);
        });
      },
      // y轴滚动到指定位置(vue中有效)。y为与顶部的距离，单位为px；offset为偏移量，单位为px；animate为是否展示滚动动画，默认为否
      scrollToY(y, offset, animate) {
        this.scrollTop = this.oldScrollTop;
        this.$nextTick(() => {
          this._scrollToY(y, offset, animate);
        });
      },
      // x轴滚动到指定位置(非页面滚动且在vue中有效)。x为与左侧的距离，单位为px；offset为偏移量，单位为px；animate为是否展示滚动动画，默认为否
      scrollToX(x, offset, animate) {
        this.scrollLeft = this.oldScrollLeft;
        this.$nextTick(() => {
          this._scrollToX(x, offset, animate);
        });
      },
      // 滚动到指定view(nvue中和虚拟列表中有效)。index为需要滚动的view的index(第几个，从0开始)；offset为偏移量，单位为px；animate为是否展示滚动动画，默认为否
      scrollIntoViewByIndex(index, offset, animate) {
        if (index >= this.realTotalData.length) {
          u.consoleErr("当前滚动的index超出已渲染列表长度，请先通过refreshToPage加载到对应index页并等待渲染成功后再调用此方法！");
          return;
        }
        this.$nextTick(() => {
          if (this.finalUseVirtualList) {
            const isCellFixed = this.cellHeightMode === Enum.CellHeightMode.Fixed;
            u.delay(() => {
              if (this.finalUseVirtualList) {
                const scrollTop = isCellFixed ? this.virtualCellHeight * index : this.virtualHeightCacheList[index].lastTotalHeight;
                this.scrollToY(scrollTop, offset, animate);
              }
            }, isCellFixed ? 0 : 100);
          }
        });
      },
      // 滚动到指定view(nvue中有效)。view为需要滚动的view(通过`this.$refs.xxx`获取)，不包含"#"；offset为偏移量，单位为px；animate为是否展示滚动动画，默认为否
      scrollIntoViewByView(view, offset, animate) {
        this._scrollIntoView(view, offset, animate);
      },
      // 当使用页面滚动并且自定义下拉刷新时，请在页面的onPageScroll中调用此方法，告知z-paging当前的pageScrollTop，否则会导致在任意位置都可以下拉刷新
      updatePageScrollTop(value) {
        this.pageScrollTop = value;
      },
      // 当使用页面滚动并且设置了slot="top"时，默认初次加载会自动获取其高度，并使内部容器下移，当slot="top"的view高度动态改变时，在其高度需要更新时调用此方法
      updatePageScrollTopHeight() {
        this._updatePageScrollTopOrBottomHeight("top");
      },
      // 当使用页面滚动并且设置了slot="bottom"时，默认初次加载会自动获取其高度，并使内部容器下移，当slot="bottom"的view高度动态改变时，在其高度需要更新时调用此方法
      updatePageScrollBottomHeight() {
        this._updatePageScrollTopOrBottomHeight("bottom");
      },
      // 更新slot="left"和slot="right"宽度，当slot="left"或slot="right"宽度动态改变时调用
      updateLeftAndRightWidth() {
        if (!this.finalIsOldWebView)
          return;
        this.$nextTick(() => this._updateLeftAndRightWidth(this.scrollViewContainerStyle, "zp-page"));
      },
      // 更新z-paging内置scroll-view的scrollTop
      updateScrollViewScrollTop(scrollTop, animate = true) {
        this._updatePrivateScrollWithAnimation(animate);
        this.scrollTop = this.oldScrollTop;
        this.$nextTick(() => {
          this.scrollTop = scrollTop;
          this.oldScrollTop = this.scrollTop;
        });
      },
      // 当滚动到顶部时
      _onScrollToUpper() {
        this._emitScrollEvent("scrolltoupper");
        this.$emit("scrollTopChange", 0);
        this.$nextTick(() => {
          this.oldScrollTop = 0;
        });
      },
      // 当滚动到底部时
      _onScrollToLower(e) {
        (!e.detail || !e.detail.direction || e.detail.direction === "bottom") && this.toBottomLoadingMoreEnabled && this._onLoadingMore(this.useChatRecordMode ? "click" : "toBottom");
      },
      // 滚动到顶部
      _scrollToTop(animate = true, isPrivate = true) {
        if (this.usePageScroll) {
          this.$nextTick(() => {
            uni.pageScrollTo({
              scrollTop: 0,
              duration: animate ? 100 : 0
            });
          });
          return;
        }
        this._updatePrivateScrollWithAnimation(animate);
        this.scrollTop = this.oldScrollTop;
        this.$nextTick(() => {
          this.scrollTop = 0;
          this.oldScrollTop = this.scrollTop;
        });
        u.delay(() => {
          this.scrollTop = this.oldScrollTop;
          this.$nextTick(() => {
            this.scrollTop = 0;
            this.oldScrollTop = this.scrollTop;
          });
        }, 500);
      },
      // 滚动到底部
      async _scrollToBottom(animate = true) {
        if (this.usePageScroll) {
          this.$nextTick(() => {
            uni.pageScrollTo({
              scrollTop: Number.MAX_VALUE,
              duration: animate ? 100 : 0
            });
          });
          return;
        }
        try {
          this._updatePrivateScrollWithAnimation(animate);
          const pagingContainerNode = await this._getNodeClientRect(".zp-paging-container");
          const scrollViewNode = await this._getNodeClientRect(".zp-scroll-view");
          const pagingContainerH = pagingContainerNode ? pagingContainerNode[0].height : 0;
          const scrollViewH = scrollViewNode ? scrollViewNode[0].height : 0;
          if (pagingContainerH > scrollViewH) {
            this.scrollTop = this.oldScrollTop;
            this.$nextTick(() => {
              this.scrollTop = pagingContainerH - scrollViewH + this.virtualPlaceholderTopHeight;
              this.oldScrollTop = this.scrollTop;
            });
          }
        } catch (e) {
        }
      },
      // 滚动到指定view
      _scrollIntoView(sel, offset = 0, animate = false, finishCallback) {
        try {
          this.scrollTop = this.oldScrollTop;
          this.$nextTick(() => {
            let inDom = false;
            this._getNodeClientRect("#" + sel.replace("#", ""), inDom).then((node) => {
              if (node) {
                this._getNodeClientRect(".zp-scroll-view-container").then((svContainerNode) => {
                  if (svContainerNode) {
                    this._scrollIntoViewByNodeTop(node[0].top - svContainerNode[0].top, offset, animate);
                    finishCallback && finishCallback();
                  }
                });
              } else {
                u.consoleErr(`无法获取${sel}的节点信息，请检查！`);
              }
            });
          });
        } catch (e) {
        }
      },
      // 通过nodeTop滚动到指定view
      _scrollIntoViewByNodeTop(nodeTop, offset = 0, animate = false) {
        if (this.isChatRecordModeAndInversion) {
          this._getNodeClientRect(".zp-scroll-view").then((sNode) => {
            if (sNode) {
              this._scrollToY(sNode[0].height - nodeTop, offset, animate, true);
            }
          });
        } else {
          this._scrollToY(nodeTop, offset, animate, true);
        }
      },
      // y轴滚动到指定位置
      _scrollToY(y, offset = 0, animate = false, addScrollTop = false) {
        this._updatePrivateScrollWithAnimation(animate);
        u.delay(() => {
          if (this.usePageScroll) {
            if (addScrollTop && this.pageScrollTop !== -1) {
              y += this.pageScrollTop;
            }
            const scrollTop = y - offset;
            uni.pageScrollTo({
              scrollTop,
              duration: animate ? 100 : 0
            });
          } else {
            if (addScrollTop) {
              y += this.oldScrollTop;
            }
            this.scrollTop = y - offset;
          }
        }, 10);
      },
      // x轴滚动到指定位置
      _scrollToX(x, offset = 0, animate = false) {
        this._updatePrivateScrollWithAnimation(animate);
        u.delay(() => {
          if (!this.usePageScroll) {
            this.scrollLeft = x - offset;
          } else {
            u.consoleErr("使用页面滚动时不支持scrollToX");
          }
        }, 10);
      },
      // scroll-view滚动中
      _scroll(e) {
        this.$emit("scroll", e);
        const { scrollTop, scrollLeft, scrollHeight } = e.detail;
        if (this.watchScrollDirectionChange) {
          let direction = this.oldScrollTop > scrollTop ? "top" : "bottom";
          if (scrollTop <= 0 || !this.scrollEnable) {
            direction = "top";
          }
          if (scrollTop > this.lastScrollHeight - this.scrollViewHeight - 1 && this.scrollEnable) {
            direction = "bottom";
          }
          if (direction !== this.lastScrollDirection) {
            this.$emit("scrollDirectionChange", direction);
            this.lastScrollDirection = direction;
          }
          if (this.lastScrollHeight !== scrollHeight && !this.setContentHeightPending) {
            this.setContentHeightPending = true;
            u.delay(() => {
              this.lastScrollHeight = scrollHeight;
              this.setContentHeightPending = false;
            });
          }
        }
        this.finalUseVirtualList && this._updateVirtualScroll(scrollTop, this.oldScrollTop - scrollTop);
        this.oldScrollTop = scrollTop;
        this.oldScrollLeft = scrollLeft;
        if (!this.isIos) {
          const scrollDiff = e.detail.scrollHeight - this.oldScrollTop;
          this._checkScrolledToBottom(scrollDiff);
        }
      },
      // emit scrolltolower/scrolltoupper事件
      _emitScrollEvent(type) {
        const reversedType = type === "scrolltolower" ? "scrolltoupper" : "scrolltolower";
        const eventType = this.useChatRecordMode && !this.isChatRecordModeAndNotInversion ? reversedType : type;
        this.$emit(eventType);
      },
      // 更新内置的scroll-view是否启用滚动动画
      _updatePrivateScrollWithAnimation(animate) {
        this.privateScrollWithAnimation = animate ? 1 : 0;
        u.delay(() => this.$nextTick(() => {
          this.privateScrollWithAnimation = -1;
        }), 100, "updateScrollWithAnimationDelay");
      },
      // 检测scrollView是否要铺满屏幕
      _doCheckScrollViewShouldFullHeight(totalData) {
        if (this.autoFullHeight && this.usePageScroll && this.isTotalChangeFromAddData) {
          this.$nextTick(() => {
            this._checkScrollViewShouldFullHeight((scrollViewNode, pagingContainerNode) => {
              this._preCheckShowNoMoreInside(totalData, scrollViewNode, pagingContainerNode);
            });
          });
        } else {
          this._preCheckShowNoMoreInside(totalData);
        }
      },
      // 检测z-paging是否要全屏覆盖(当使用页面滚动并且不满全屏时，默认z-paging需要铺满全屏，避免数据过少时内部的empty-view无法正确展示)
      async _checkScrollViewShouldFullHeight(callback) {
        try {
          const scrollViewNode = await this._getNodeClientRect(".zp-scroll-view");
          const pagingContainerNode = await this._getNodeClientRect(".zp-paging-container-content");
          if (!scrollViewNode || !pagingContainerNode)
            return;
          const scrollViewHeight = pagingContainerNode[0].height;
          const scrollViewTop = scrollViewNode[0].top;
          if (this.isAddedData && scrollViewHeight + scrollViewTop <= this.windowHeight) {
            this._setAutoHeight(true, scrollViewNode);
            callback(scrollViewNode, pagingContainerNode);
          } else {
            this._setAutoHeight(false);
            callback(null, null);
          }
        } catch (e) {
          callback(null, null);
        }
      },
      // 更新缓存中z-paging整个内容容器高度
      async _updateCachedSuperContentHeight() {
        const superContentNode = await this._getNodeClientRect(".z-paging-content");
        if (superContentNode) {
          this.superContentHeight = superContentNode[0].height;
        }
      },
      // scrollTop改变时触发
      _scrollTopChange(newVal, isPageScrollTop) {
        this.$emit("scrollTopChange", newVal);
        this.$emit("update:scrollTop", newVal);
        this._checkShouldShowBackToTop(newVal);
        const scrollTop = newVal > 5 ? 6 : 0;
        if (isPageScrollTop && this.wxsPageScrollTop !== scrollTop) {
          this.wxsPageScrollTop = scrollTop;
        } else if (!isPageScrollTop && this.wxsScrollTop !== scrollTop) {
          this.wxsScrollTop = scrollTop;
          if (scrollTop > 6) {
            this.scrollEnable = true;
          }
        }
      },
      // 更新使用页面滚动时slot="top"或"bottom"插入view的高度
      _updatePageScrollTopOrBottomHeight(type) {
        if (!this.usePageScroll)
          return;
        this._doCheckScrollViewShouldFullHeight(this.realTotalData);
        const node = `.zp-page-${type}`;
        const marginText = `margin${type.slice(0, 1).toUpperCase() + type.slice(1)}`;
        const safeAreaInsetBottomAdd = this.safeAreaInsetBottom && !this.zSlots.bottom && !this.useSafeAreaPlaceholder;
        this.$nextTick(() => {
          let delayTime = 0;
          u.delay(() => {
            this._getNodeClientRect(node).then((res) => {
              if (res) {
                let pageScrollNodeHeight = res[0].height;
                if (type === "bottom") {
                  if (safeAreaInsetBottomAdd) {
                    pageScrollNodeHeight += this.safeAreaBottom;
                  }
                } else {
                  this.cacheTopHeight = pageScrollNodeHeight;
                }
                this.$set(this.scrollViewStyle, marginText, `${pageScrollNodeHeight}px`);
              } else if (safeAreaInsetBottomAdd) {
                this.$set(this.scrollViewStyle, marginText, `${this.safeAreaBottom}px`);
              }
            });
          }, delayTime);
        });
      }
    }
  };
  const backToTopModule = {
    props: {
      // 自动显示点击返回顶部按钮，默认为否
      autoShowBackToTop: {
        type: Boolean,
        default: u.gc("autoShowBackToTop", false)
      },
      // 点击返回顶部按钮显示/隐藏的阈值(滚动距离)，单位为px，默认为400rpx
      backToTopThreshold: {
        type: [Number, String],
        default: u.gc("backToTopThreshold", "400rpx")
      },
      // 点击返回顶部按钮的自定义图片地址，默认使用z-paging内置的图片
      backToTopImg: {
        type: String,
        default: u.gc("backToTopImg", "")
      },
      // 点击返回顶部按钮返回到顶部时是否展示过渡动画，默认为是
      backToTopWithAnimate: {
        type: Boolean,
        default: u.gc("backToTopWithAnimate", true)
      },
      // 点击返回顶部按钮与底部的距离，注意添加单位px或rpx，默认为160rpx
      backToTopBottom: {
        type: [Number, String],
        default: u.gc("backToTopBottom", "160rpx")
      },
      // 点击返回顶部按钮的自定义样式
      backToTopStyle: {
        type: Object,
        default: u.gc("backToTopStyle", {})
      },
      // iOS点击顶部状态栏、安卓双击标题栏时，滚动条返回顶部，只支持竖向，默认为是
      enableBackToTop: {
        type: Boolean,
        default: u.gc("enableBackToTop", true)
      }
    },
    data() {
      return {
        // 点击返回顶部的class
        backToTopClass: "zp-back-to-top zp-back-to-top-hide",
        // 上次点击返回顶部的时间
        lastBackToTopShowTime: 0,
        // 点击返回顶部显示的class是否在展示中，使得按钮展示/隐藏过度效果更自然
        showBackToTopClass: false
      };
    },
    computed: {
      backToTopThresholdUnitConverted() {
        return u.addUnit(this.backToTopThreshold, this.unit);
      },
      backToTopBottomUnitConverted() {
        return u.addUnit(this.backToTopBottom, this.unit);
      },
      finalEnableBackToTop() {
        return this.usePageScroll ? false : this.enableBackToTop;
      },
      finalBackToTopThreshold() {
        return u.convertToPx(this.backToTopThresholdUnitConverted);
      },
      finalBackToTopStyle() {
        const backToTopStyle = this.backToTopStyle;
        if (!backToTopStyle.bottom) {
          backToTopStyle.bottom = this.windowBottom + u.convertToPx(this.backToTopBottomUnitConverted) + "px";
        }
        if (!backToTopStyle.position) {
          backToTopStyle.position = this.usePageScroll ? "fixed" : "absolute";
        }
        return backToTopStyle;
      },
      finalBackToTopClass() {
        return `${this.backToTopClass} zp-back-to-top-${this.unit}`;
      }
    },
    methods: {
      // 点击了返回顶部
      _backToTopClick() {
        let callbacked = false;
        this.$emit("backToTopClick", (toTop) => {
          (toTop === void 0 || toTop === true) && this._handleToTop();
          callbacked = true;
        });
        this.$nextTick(() => {
          !callbacked && this._handleToTop();
        });
      },
      // 处理滚动到顶部（聊天记录模式中为滚动到底部）
      _handleToTop() {
        !this.backToTopWithAnimate && this._checkShouldShowBackToTop(0);
        !this.useChatRecordMode ? this.scrollToTop(this.backToTopWithAnimate) : this.scrollToBottom(this.backToTopWithAnimate);
      },
      // 判断是否要显示返回顶部按钮
      _checkShouldShowBackToTop(scrollTop) {
        if (!this.autoShowBackToTop) {
          this.showBackToTopClass = false;
          return;
        }
        if (scrollTop > this.finalBackToTopThreshold) {
          if (!this.showBackToTopClass) {
            this.showBackToTopClass = true;
            this.lastBackToTopShowTime = (/* @__PURE__ */ new Date()).getTime();
            u.delay(() => {
              this.backToTopClass = "zp-back-to-top zp-back-to-top-show";
            }, 300);
          }
        } else {
          if (this.showBackToTopClass) {
            this.backToTopClass = "zp-back-to-top zp-back-to-top-hide";
            u.delay(() => {
              this.showBackToTopClass = false;
            }, (/* @__PURE__ */ new Date()).getTime() - this.lastBackToTopShowTime < 500 ? 0 : 300);
          }
        }
      }
    }
  };
  const virtualListModule = {
    props: {
      // 是否使用虚拟列表，默认为否
      useVirtualList: {
        type: Boolean,
        default: u.gc("useVirtualList", false)
      },
      // 在使用虚拟列表时，是否使用兼容模式，默认为否
      useCompatibilityMode: {
        type: Boolean,
        default: u.gc("useCompatibilityMode", false)
      },
      // 使用兼容模式时传递的附加数据
      extraData: {
        type: Object,
        default: u.gc("extraData", {})
      },
      // 是否在z-paging内部循环渲染列表(内置列表)，默认为否。若use-virtual-list为true，则此项恒为true
      useInnerList: {
        type: Boolean,
        default: u.gc("useInnerList", false)
      },
      // 强制关闭inner-list，默认为false，如果为true将强制关闭innerList，适用于开启了虚拟列表后需要强制关闭inner-list的情况
      forceCloseInnerList: {
        type: Boolean,
        default: u.gc("forceCloseInnerList", false)
      },
      // 内置列表cell的key名称，仅nvue有效，在nvue中开启use-inner-list时必须填此项
      cellKeyName: {
        type: String,
        default: u.gc("cellKeyName", "")
      },
      // innerList样式
      innerListStyle: {
        type: Object,
        default: u.gc("innerListStyle", {})
      },
      // innerCell样式
      innerCellStyle: {
        type: Object,
        default: u.gc("innerCellStyle", {})
      },
      // 预加载的列表可视范围(列表高度)页数，默认为12，即预加载当前页及上下各12页的cell。此数值越大，则虚拟列表中加载的dom越多，内存消耗越大(会维持在一个稳定值)，但增加预加载页面数量可缓解快速滚动短暂白屏问题
      preloadPage: {
        type: [Number, String],
        default: u.gc("preloadPage", 12),
        validator: (value) => {
          if (value <= 0)
            u.consoleErr("preload-page必须大于0！");
          return value > 0;
        }
      },
      // 虚拟列表cell高度模式，默认为fixed，也就是每个cell高度完全相同，将以第一个cell高度为准进行计算。可选值【dynamic】，即代表高度是动态非固定的，【dynamic】性能低于【fixed】。
      cellHeightMode: {
        type: String,
        default: u.gc("cellHeightMode", Enum.CellHeightMode.Fixed)
      },
      // 固定的cell高度，cellHeightMode=fixed才有效，若设置了值，则不计算第一个cell高度而使用设置的cell高度
      fixedCellHeight: {
        type: [Number, String],
        default: u.gc("fixedCellHeight", 0)
      },
      // 虚拟列表列数，默认为1。常用于每行有多列的情况，例如每行有2列数据，需要将此值设置为2
      virtualListCol: {
        type: [Number, String],
        default: u.gc("virtualListCol", 1)
      },
      // 虚拟列表scroll取样帧率，默认为80，过低容易出现白屏问题，过高容易出现卡顿问题
      virtualScrollFps: {
        type: [Number, String],
        default: u.gc("virtualScrollFps", 80)
      },
      // 虚拟列表cell id的前缀，适用于一个页面有多个虚拟列表的情况，用以区分不同虚拟列表cell的id，注意：请勿传数字或以数字开头的字符串。如设置为list1，则cell的id应为：list1-zp-id-${item.zp_index}
      virtualCellIdPrefix: {
        type: String,
        default: u.gc("virtualCellIdPrefix", "")
      },
      // 虚拟列表是否使用swiper-item或其他父组件包裹，默认为否，此属性为了解决vue3+(微信小程序或QQ小程序)中，使用非内置列表写法时，若z-paging在swiper-item内存在无法获取slot插入的cell高度进而导致虚拟列表失败的问题
      // 仅vue3+(微信小程序或QQ小程序)+非内置列表写法虚拟列表有效，其他情况此属性设置任何值都无效，所以如果您在swiper-item内使用z-paging的非内置虚拟列表写法，将此属性设置为true即可
      virtualInSwiperSlot: {
        type: Boolean,
        default: false
      }
    },
    data() {
      return {
        virtualListKey: u.getInstanceId(),
        virtualCellHeight: 0,
        virtualScrollTimeStamp: 0,
        virtualList: [],
        virtualPlaceholderTopHeight: 0,
        virtualPlaceholderBottomHeight: 0,
        virtualTopRangeIndex: 0,
        virtualBottomRangeIndex: 0,
        lastVirtualTopRangeIndex: 0,
        lastVirtualBottomRangeIndex: 0,
        virtualItemInsertedCount: 0,
        virtualHeightCacheList: [],
        getCellHeightRetryCount: {
          fixed: 0,
          dynamic: 0
        },
        updateVirtualListFromDataChange: false
      };
    },
    watch: {
      // 监听总数据的改变，刷新虚拟列表布局
      realTotalData() {
        this.updateVirtualListRender();
      },
      // 监听虚拟列表渲染数组的改变并emit
      virtualList(newVal) {
        this.$emit("update:virtualList", newVal);
        this.$emit("virtualListChange", newVal);
      },
      // 监听虚拟列表顶部占位高度改变并emit
      virtualPlaceholderTopHeight(newVal) {
        this.$emit("virtualTopHeightChange", newVal);
      }
    },
    computed: {
      virtualCellIndexKey() {
        return c.listCellIndexKey;
      },
      finalUseVirtualList() {
        if (this.useVirtualList && this.usePageScroll) {
          u.consoleErr("使用页面滚动时，开启虚拟列表无效！");
        }
        return this.useVirtualList && !this.usePageScroll;
      },
      finalUseInnerList() {
        return this.useInnerList || this.finalUseVirtualList && !this.forceCloseInnerList;
      },
      finalCellKeyName() {
        return this.cellKeyName;
      },
      finalVirtualPageHeight() {
        return this.scrollViewHeight > 0 ? this.scrollViewHeight : this.windowHeight;
      },
      finalFixedCellHeight() {
        return u.convertToPx(this.fixedCellHeight);
      },
      fianlVirtualCellIdPrefix() {
        const prefix = this.virtualCellIdPrefix ? this.virtualCellIdPrefix + "-" : "";
        return prefix + "zp-id";
      },
      finalPlaceholderTopHeightStyle() {
        return {};
      },
      virtualRangePageHeight() {
        return this.finalVirtualPageHeight * this.preloadPage;
      },
      virtualScrollDisTimeStamp() {
        return 1e3 / this.virtualScrollFps;
      }
    },
    methods: {
      // 在使用动态高度虚拟列表时，若在列表数组中需要插入某个item，需要调用此方法；item:需要插入的item，index:插入的cell位置，若index为2，则插入的item在原list的index=1之后，index从0开始
      doInsertVirtualListItem(item, index) {
        if (this.cellHeightMode !== Enum.CellHeightMode.Dynamic)
          return;
        this.realTotalData.splice(index, 0, item);
        this.realTotalData = [...this.realTotalData];
        this.virtualItemInsertedCount++;
        if (!item || Object.prototype.toString.call(item) !== "[object Object]") {
          item = { item };
        }
        const cellIndexKey = this.virtualCellIndexKey;
        item[cellIndexKey] = `custom-${this.virtualItemInsertedCount}`;
        item[c.listCellIndexUniqueKey] = `${this.virtualListKey}-${item[cellIndexKey]}`;
        this.$nextTick(async () => {
          let retryCount = 0;
          while (retryCount <= 10) {
            await u.wait(c.delayTime);
            const cellNode = await this._getVirtualCellNodeByIndex(item[cellIndexKey]);
            if (!cellNode) {
              retryCount++;
              continue;
            }
            const currentHeight = cellNode ? cellNode[0].height : 0;
            const lastHeightCache = this.virtualHeightCacheList[index - 1];
            const lastTotalHeight = lastHeightCache ? lastHeightCache.totalHeight : 0;
            this.virtualHeightCacheList.splice(index, 0, {
              height: currentHeight,
              lastTotalHeight,
              totalHeight: lastTotalHeight + currentHeight
            });
            for (let i = index + 1; i < this.virtualHeightCacheList.length; i++) {
              const thisNode = this.virtualHeightCacheList[i];
              thisNode.lastTotalHeight += currentHeight;
              thisNode.totalHeight += currentHeight;
            }
            this._updateVirtualScroll(this.oldScrollTop);
            break;
          }
        });
      },
      // 在使用动态高度虚拟列表时，手动更新指定cell的缓存高度(当cell高度在初始化之后再次改变后调用)；index:需要更新的cell在列表中的位置，从0开始
      didUpdateVirtualListCell(index) {
        if (this.cellHeightMode !== Enum.CellHeightMode.Dynamic)
          return;
        const currentNode = this.virtualHeightCacheList[index];
        this.$nextTick(() => {
          this._getVirtualCellNodeByIndex(index).then((cellNode) => {
            const cellNodeHeight = cellNode ? cellNode[0].height : 0;
            const heightDis = cellNodeHeight - currentNode.height;
            currentNode.height = cellNodeHeight;
            currentNode.totalHeight = currentNode.lastTotalHeight + cellNodeHeight;
            for (let i = index + 1; i < this.virtualHeightCacheList.length; i++) {
              const thisNode = this.virtualHeightCacheList[i];
              thisNode.totalHeight += heightDis;
              thisNode.lastTotalHeight += heightDis;
            }
          });
        });
      },
      // 在使用动态高度虚拟列表时，若删除了列表数组中的某个item，需要调用此方法以更新高度缓存数组；index:删除的cell在列表中的位置，从0开始
      didDeleteVirtualListCell(index) {
        if (this.cellHeightMode !== Enum.CellHeightMode.Dynamic)
          return;
        const currentNode = this.virtualHeightCacheList[index];
        for (let i = index + 1; i < this.virtualHeightCacheList.length; i++) {
          const thisNode = this.virtualHeightCacheList[i];
          thisNode.totalHeight -= currentNode.height;
          thisNode.lastTotalHeight -= currentNode.height;
        }
        this.virtualHeightCacheList.splice(index, 1);
      },
      // 手动触发虚拟列表渲染更新，可用于解决例如修改了虚拟列表数组中元素，但展示未更新的情况
      updateVirtualListRender() {
        if (this.finalUseVirtualList) {
          this.updateVirtualListFromDataChange = true;
          this.$nextTick(() => {
            this.getCellHeightRetryCount.fixed = 0;
            if (this.realTotalData.length) {
              this.cellHeightMode === Enum.CellHeightMode.Fixed && this.isFirstPage && this._updateFixedCellHeight();
            } else {
              this._resetDynamicListState(!this.isUserPullDown);
            }
            this._updateVirtualScroll(this.oldScrollTop);
          });
        }
      },
      // cellHeightMode为fixed时获取第一个cell高度
      _updateFixedCellHeight() {
        if (!this.finalFixedCellHeight) {
          this.$nextTick(() => {
            u.delay(() => {
              this._getVirtualCellNodeByIndex(0).then((cellNode) => {
                if (!cellNode) {
                  if (this.getCellHeightRetryCount.fixed > 10)
                    return;
                  this.getCellHeightRetryCount.fixed++;
                  this._updateFixedCellHeight();
                } else {
                  this.virtualCellHeight = cellNode[0].height;
                  this._updateVirtualScroll(this.oldScrollTop);
                }
              });
            }, c.delayTime, "updateFixedCellHeightDelay");
          });
        } else {
          this.virtualCellHeight = this.finalFixedCellHeight;
        }
      },
      // cellHeightMode为dynamic时获取每个cell高度
      _updateDynamicCellHeight(list, dataFrom = "bottom") {
        const dataFromTop = dataFrom === "top";
        const heightCacheList = this.virtualHeightCacheList;
        const currentCacheList = dataFromTop ? [] : heightCacheList;
        let listTotalHeight = 0;
        this.$nextTick(() => {
          u.delay(async () => {
            for (let i = 0; i < list.length; i++) {
              const cellNode = await this._getVirtualCellNodeByIndex(list[i][this.virtualCellIndexKey]);
              const currentHeight = cellNode ? cellNode[0].height : 0;
              if (!cellNode) {
                if (this.getCellHeightRetryCount.dynamic <= 10) {
                  heightCacheList.splice(heightCacheList.length - i, i);
                  this.getCellHeightRetryCount.dynamic++;
                  this._updateDynamicCellHeight(list, dataFrom);
                }
                return;
              }
              const lastHeightCache = currentCacheList.length ? currentCacheList.slice(-1)[0] : null;
              const lastTotalHeight = lastHeightCache ? lastHeightCache.totalHeight : 0;
              currentCacheList.push({
                height: currentHeight,
                lastTotalHeight,
                totalHeight: lastTotalHeight + currentHeight
              });
              if (dataFromTop) {
                listTotalHeight += currentHeight;
              }
            }
            if (dataFromTop && list.length) {
              for (let i = 0; i < heightCacheList.length; i++) {
                const heightCacheItem = heightCacheList[i];
                heightCacheItem.lastTotalHeight += listTotalHeight;
                heightCacheItem.totalHeight += listTotalHeight;
              }
              this.virtualHeightCacheList = currentCacheList.concat(heightCacheList);
            }
            this._updateVirtualScroll(this.oldScrollTop);
          }, c.delayTime, "updateDynamicCellHeightDelay");
        });
      },
      // 设置cellItem的index
      _setCellIndex(list, dataFrom = "bottom") {
        let currentItemIndex = 0;
        const cellIndexKey = this.virtualCellIndexKey;
        dataFrom === "bottom" && [Enum.QueryFrom.Refresh, Enum.QueryFrom.Reload].indexOf(this.queryFrom) >= 0 && this._resetDynamicListState();
        if (this.totalData.length && this.queryFrom !== Enum.QueryFrom.Refresh) {
          if (dataFrom === "bottom") {
            currentItemIndex = this.realTotalData.length;
            const lastItem = this.realTotalData.length ? this.realTotalData.slice(-1)[0] : null;
            if (lastItem && lastItem[cellIndexKey] !== void 0) {
              currentItemIndex = lastItem[cellIndexKey] + 1;
            }
          } else if (dataFrom === "top") {
            const firstItem = this.realTotalData.length ? this.realTotalData[0] : null;
            if (firstItem && firstItem[cellIndexKey] !== void 0) {
              currentItemIndex = firstItem[cellIndexKey] - list.length;
            }
          }
        } else {
          this._resetDynamicListState();
        }
        for (let i = 0; i < list.length; i++) {
          let item = list[i];
          if (!item || Object.prototype.toString.call(item) !== "[object Object]") {
            item = { item };
          }
          if (item[c.listCellIndexUniqueKey]) {
            item = u.deepCopy(item);
          }
          item[cellIndexKey] = currentItemIndex + i;
          item[c.listCellIndexUniqueKey] = `${this.virtualListKey}-${item[cellIndexKey]}`;
          list[i] = item;
        }
        this.getCellHeightRetryCount.dynamic = 0;
        this.cellHeightMode === Enum.CellHeightMode.Dynamic && this._updateDynamicCellHeight(list, dataFrom);
      },
      // 更新scroll滚动（虚拟列表滚动时触发）
      _updateVirtualScroll(scrollTop, scrollDiff = 0) {
        const currentTimeStamp = u.getTime();
        scrollTop === 0 && this._resetTopRange();
        if (scrollTop !== 0 && this.virtualScrollTimeStamp && currentTimeStamp - this.virtualScrollTimeStamp <= this.virtualScrollDisTimeStamp) {
          return;
        }
        this.virtualScrollTimeStamp = currentTimeStamp;
        let scrollIndex = 0;
        const cellHeightMode = this.cellHeightMode;
        if (cellHeightMode === Enum.CellHeightMode.Fixed) {
          scrollIndex = parseInt(scrollTop / this.virtualCellHeight) || 0;
          this._updateFixedTopRangeIndex(scrollIndex);
          this._updateFixedBottomRangeIndex(scrollIndex);
        } else if (cellHeightMode === Enum.CellHeightMode.Dynamic) {
          const scrollDirection = scrollDiff > 0 ? "top" : "bottom";
          const rangePageHeight = this.virtualRangePageHeight;
          const topRangePageOffset = scrollTop - rangePageHeight;
          const bottomRangePageOffset = scrollTop + this.finalVirtualPageHeight + rangePageHeight;
          let virtualBottomRangeIndex = 0;
          let virtualPlaceholderBottomHeight = 0;
          let reachedLimitBottom = false;
          const heightCacheList = this.virtualHeightCacheList;
          const lastHeightCache = !!heightCacheList ? heightCacheList.slice(-1)[0] : null;
          let startTopRangeIndex = this.virtualTopRangeIndex;
          if (scrollDirection === "bottom") {
            for (let i = startTopRangeIndex; i < heightCacheList.length; i++) {
              const heightCacheItem = heightCacheList[i];
              if (heightCacheItem && heightCacheItem.totalHeight > topRangePageOffset) {
                this.virtualTopRangeIndex = i;
                this.virtualPlaceholderTopHeight = heightCacheItem.lastTotalHeight;
                break;
              }
            }
          } else {
            let topRangeMatched = false;
            for (let i = startTopRangeIndex; i >= 0; i--) {
              const heightCacheItem = heightCacheList[i];
              if (heightCacheItem && heightCacheItem.totalHeight < topRangePageOffset) {
                this.virtualTopRangeIndex = i;
                this.virtualPlaceholderTopHeight = heightCacheItem.lastTotalHeight;
                topRangeMatched = true;
                break;
              }
            }
            !topRangeMatched && this._resetTopRange();
          }
          for (let i = this.virtualTopRangeIndex; i < heightCacheList.length; i++) {
            const heightCacheItem = heightCacheList[i];
            if (heightCacheItem && heightCacheItem.totalHeight > bottomRangePageOffset) {
              virtualBottomRangeIndex = i;
              virtualPlaceholderBottomHeight = lastHeightCache.totalHeight - heightCacheItem.totalHeight;
              reachedLimitBottom = true;
              break;
            }
          }
          if (!reachedLimitBottom || this.virtualBottomRangeIndex === 0) {
            this.virtualBottomRangeIndex = this.realTotalData.length ? this.realTotalData.length - 1 : this.pageSize;
            this.virtualPlaceholderBottomHeight = 0;
          } else {
            this.virtualBottomRangeIndex = virtualBottomRangeIndex;
            this.virtualPlaceholderBottomHeight = virtualPlaceholderBottomHeight;
          }
          this._updateVirtualList();
        }
      },
      // 更新fixedCell模式下topRangeIndex&placeholderTopHeight
      _updateFixedTopRangeIndex(scrollIndex) {
        let virtualTopRangeIndex = this.virtualCellHeight === 0 ? 0 : scrollIndex - (parseInt(this.finalVirtualPageHeight / this.virtualCellHeight) || 1) * this.preloadPage;
        virtualTopRangeIndex *= this.virtualListCol;
        virtualTopRangeIndex = Math.max(0, virtualTopRangeIndex);
        this.virtualTopRangeIndex = virtualTopRangeIndex;
        this.virtualPlaceholderTopHeight = virtualTopRangeIndex / this.virtualListCol * this.virtualCellHeight;
      },
      // 更新fixedCell模式下bottomRangeIndex&placeholderBottomHeight
      _updateFixedBottomRangeIndex(scrollIndex) {
        let virtualBottomRangeIndex = this.virtualCellHeight === 0 ? this.pageSize : scrollIndex + (parseInt(this.finalVirtualPageHeight / this.virtualCellHeight) || 1) * (this.preloadPage + 1);
        virtualBottomRangeIndex *= this.virtualListCol;
        virtualBottomRangeIndex = Math.min(this.realTotalData.length, virtualBottomRangeIndex);
        this.virtualBottomRangeIndex = virtualBottomRangeIndex;
        this.virtualPlaceholderBottomHeight = (this.realTotalData.length - virtualBottomRangeIndex) * this.virtualCellHeight / this.virtualListCol;
        this._updateVirtualList();
      },
      // 更新virtualList
      _updateVirtualList() {
        const shouldUpdateList = this.updateVirtualListFromDataChange || (this.lastVirtualTopRangeIndex !== this.virtualTopRangeIndex || this.lastVirtualBottomRangeIndex !== this.virtualBottomRangeIndex);
        if (shouldUpdateList) {
          this.updateVirtualListFromDataChange = false;
          this.lastVirtualTopRangeIndex = this.virtualTopRangeIndex;
          this.lastVirtualBottomRangeIndex = this.virtualBottomRangeIndex;
          this.virtualList = this.realTotalData.slice(this.virtualTopRangeIndex, this.virtualBottomRangeIndex + 1);
        }
      },
      // 重置动态cell模式下的高度缓存数据、虚拟列表和滚动状态
      _resetDynamicListState(resetVirtualList = false) {
        this.virtualHeightCacheList = [];
        if (resetVirtualList) {
          this.virtualList = [];
        }
        this.virtualTopRangeIndex = 0;
        this.virtualPlaceholderTopHeight = 0;
      },
      // 重置topRangeIndex和placeholderTopHeight
      _resetTopRange() {
        this.virtualTopRangeIndex = 0;
        this.virtualPlaceholderTopHeight = 0;
        this._updateVirtualList();
      },
      // 检测虚拟列表当前滚动位置，如发现滚动位置不正确则重新计算虚拟列表相关参数(为解决在App中可能出现的长时间进入后台后打开App白屏的问题)
      _checkVirtualListScroll() {
        if (this.finalUseVirtualList) {
          this.$nextTick(() => {
            this._getNodeClientRect(".zp-paging-touch-view").then((node) => {
              const currentTop = node ? node[0].top : 0;
              if (!node || currentTop === this.pagingOrgTop && this.virtualPlaceholderTopHeight !== 0) {
                this._updateVirtualScroll(0);
              }
            });
          });
        }
      },
      // 获取对应index的虚拟列表cell节点信息
      _getVirtualCellNodeByIndex(index) {
        let inDom = this.finalUseInnerList;
        return this._getNodeClientRect(`#${this.fianlVirtualCellIdPrefix}-${index}`, inDom);
      },
      // 处理使用内置列表时点击了cell事件
      _innerCellClick(item, index) {
        this.$emit("innerCellClick", item, index);
      }
    }
  };
  const systemInfo = u.getSystemInfoSync();
  const _sfc_main$e = {
    name: "z-paging",
    components: {
      zPagingRefresh,
      zPagingLoadMore,
      zPagingEmptyView: __easycom_0$1
    },
    mixins: [
      commonLayoutModule,
      dataHandleModule,
      i18nModule,
      nvueModule,
      emptyModule,
      refresherModule,
      loadMoreModule,
      loadingModule,
      chatRecordModerModule,
      scrollerModule,
      backToTopModule,
      virtualListModule
    ],
    data() {
      return {
        // --------------静态资源---------------
        base64BackToTop: zStatic.base64BackToTop,
        // -------------全局数据相关--------------
        // 当前加载类型
        loadingType: Enum.LoadingType.Refresher,
        requestTimeStamp: 0,
        wxsPropType: "",
        renderPropScrollTop: -1,
        checkScrolledToBottomTimeOut: null,
        cacheTopHeight: -1,
        statusBarHeight: systemInfo.statusBarHeight,
        scrollViewHeight: 0,
        pagingOrgTop: -1,
        // --------------状态&判断---------------
        insideOfPaging: -1,
        isLoadFailed: false,
        isIos: systemInfo.platform === "ios",
        disabledBounce: false,
        fromCompleteEmit: false,
        disabledCompleteEmit: false,
        pageLaunched: false,
        active: false,
        // ---------------wxs相关---------------
        wxsIsScrollTopInTopRange: true,
        wxsScrollTop: 0,
        wxsPageScrollTop: 0,
        wxsOnPullingDown: false
      };
    },
    props: {
      // 调用complete后延迟处理的时间，单位为毫秒，默认0毫秒，优先级高于minDelay
      delay: {
        type: [Number, String],
        default: u.gc("delay", 0)
      },
      // 触发@query后最小延迟处理的时间，单位为毫秒，默认0毫秒，优先级低于delay（假设设置为300毫秒，若分页请求时间小于300毫秒，则在调用complete后延迟[300毫秒-请求时长]；若请求时长大于300毫秒，则不延迟），当show-refresher-when-reload为true或reload(true)时，其最小值为400
      minDelay: {
        type: [Number, String],
        default: u.gc("minDelay", 0)
      },
      // 设置z-paging的style，部分平台(如微信小程序)无法直接修改组件的style，可使用此属性代替
      pagingStyle: {
        type: Object,
        default: u.gc("pagingStyle", {})
      },
      // 设置z-paging的class，优先级低于pagingStyle和height、width、maxWidth、bgColor
      pagingClass: {
        type: [String, Array, Object],
        default: u.gc("pagingClass", "")
      },
      // z-paging的高度，优先级低于pagingStyle中设置的height；传字符串，如100px、100rpx、100%
      height: {
        type: String,
        default: u.gc("height", "")
      },
      // z-paging的宽度，优先级低于pagingStyle中设置的width；传字符串，如100px、100rpx、100%
      width: {
        type: String,
        default: u.gc("width", "")
      },
      // z-paging的最大宽度，优先级低于pagingStyle中设置的max-width；传字符串，如100px、100rpx、100%。默认为空，也就是铺满窗口宽度，若设置了特定值则会自动添加margin: 0 auto
      maxWidth: {
        type: String,
        default: u.gc("maxWidth", "")
      },
      // z-paging的背景色，优先级低于pagingStyle中设置的background。传字符串，如"#ffffff"
      bgColor: {
        type: String,
        default: u.gc("bgColor", "")
      },
      // 设置z-paging的容器(插槽的父view)的style
      pagingContentStyle: {
        type: Object,
        default: u.gc("pagingContentStyle", {})
      },
      // z-paging是否自动高度，若自动高度则会自动铺满屏幕
      autoHeight: {
        type: Boolean,
        default: u.gc("autoHeight", false)
      },
      // z-paging是否自动高度时，附加的高度，注意添加单位px或rpx，若需要减少高度，则传负数
      autoHeightAddition: {
        type: [Number, String],
        default: u.gc("autoHeightAddition", "0px")
      },
      // loading(下拉刷新、上拉加载更多)的主题样式，支持black，white，默认black
      defaultThemeStyle: {
        type: String,
        default: u.gc("defaultThemeStyle", "black")
      },
      // z-paging是否使用fixed布局，若使用fixed布局，则z-paging的父view无需固定高度，z-paging高度默认为100%，默认为是(当使用内置scroll-view滚动时有效)
      fixed: {
        type: Boolean,
        default: u.gc("fixed", true)
      },
      // 是否开启底部安全区域适配
      safeAreaInsetBottom: {
        type: Boolean,
        default: u.gc("safeAreaInsetBottom", false)
      },
      // 开启底部安全区域适配后，是否使用placeholder形式实现，默认为否。为否时滚动区域会自动避开底部安全区域，也就是所有滚动内容都不会挡住底部安全区域，若设置为是，则滚动时滚动内容会挡住底部安全区域，但是当滚动到底部时才会避开底部安全区域
      useSafeAreaPlaceholder: {
        type: Boolean,
        default: u.gc("useSafeAreaPlaceholder", false)
      },
      // z-paging bottom的背景色，默认透明，传字符串，如"#ffffff"
      bottomBgColor: {
        type: String,
        default: u.gc("bottomBgColor", "")
      },
      // slot="top"的view的z-index，默认为99，仅使用页面滚动时有效
      topZIndex: {
        type: Number,
        default: u.gc("topZIndex", 99)
      },
      // z-paging内容容器父view的z-index，默认为1
      superContentZIndex: {
        type: Number,
        default: u.gc("superContentZIndex", 1)
      },
      // z-paging内容容器部分的z-index，默认为1
      contentZIndex: {
        type: Number,
        default: u.gc("contentZIndex", 1)
      },
      // z-paging二楼的z-index，默认为100
      f2ZIndex: {
        type: Number,
        default: u.gc("f2ZIndex", 100)
      },
      // 使用页面滚动时，是否在不满屏时自动填充满屏幕，默认为是
      autoFullHeight: {
        type: Boolean,
        default: u.gc("autoFullHeight", true)
      },
      // 是否监听列表触摸方向改变，默认为否
      watchTouchDirectionChange: {
        type: Boolean,
        default: u.gc("watchTouchDirectionChange", false)
      },
      // 是否监听列表滚动方向改变，默认为否
      watchScrollDirectionChange: {
        type: Boolean,
        default: u.gc("watchScrollDirectionChange", false)
      },
      // 是否只使用基础布局，设置为true后将关闭mounted自动请求数据、关闭下拉刷新和滚动到底部加载更多，强制隐藏空数据图。默认为否
      layoutOnly: {
        type: Boolean,
        default: u.gc("layoutOnly", false)
      },
      // z-paging中布局的单位，默认为rpx
      unit: {
        type: String,
        default: u.gc("unit", "rpx")
      }
    },
    created() {
      if (this.createdReload && !this.isOnly && this.auto) {
        this._startLoading();
        this.$nextTick(this._preReload);
      }
    },
    mounted() {
      this.active = true;
      this.wxsPropType = u.getTime().toString();
      this.renderJsIgnore;
      if (!this.createdReload && !this.isOnly && this.auto) {
        u.delay(() => this.$nextTick(this._preReload), 0);
      }
      this.finalUseCache && this._setListByLocalCache();
      this.systemInfo = u.getSystemInfoSync();
      this.$nextTick(() => {
        this.systemInfo = u.getSystemInfoSync();
        !this.usePageScroll && this.autoHeight && this._setAutoHeight();
        this.loaded = true;
        u.delay(() => {
          this.updateFixedLayout();
          this._updateCachedSuperContentHeight();
          this._updateScrollViewHeight();
        });
      });
      this.updatePageScrollTopHeight();
      this.updatePageScrollBottomHeight();
      this.updateLeftAndRightWidth();
      if (this.finalRefresherEnabled && this.useCustomRefresher) {
        this.$nextTick(() => {
          this.isTouchmoving = true;
        });
      }
      if (!this.layoutOnly) {
        this._onEmit();
      }
    },
    destroyed() {
      this._handleUnmounted();
    },
    unmounted() {
      this._handleUnmounted();
    },
    watch: {
      defaultThemeStyle: {
        handler(newVal) {
          if (newVal.length) {
            this.finalRefresherDefaultStyle = newVal;
          }
        },
        immediate: true
      },
      autoHeight(newVal) {
        this.loaded && !this.usePageScroll && this._setAutoHeight(newVal);
      },
      autoHeightAddition(newVal) {
        this.loaded && !this.usePageScroll && this.autoHeight && this._setAutoHeight(newVal);
      }
    },
    computed: {
      // 当前z-paging的内置样式
      finalPagingStyle() {
        const pagingStyle = { ...this.pagingStyle };
        if (!this.systemInfo)
          return pagingStyle;
        const { windowTop, windowBottom } = this;
        if (!this.usePageScroll && this.fixed) {
          if (windowTop && !pagingStyle.top) {
            pagingStyle.top = windowTop + "px";
          }
          if (windowBottom && !pagingStyle.bottom) {
            pagingStyle.bottom = windowBottom + "px";
          }
        }
        if (this.bgColor.length && !pagingStyle["background"]) {
          pagingStyle["background"] = this.bgColor;
        }
        if (this.height.length && !pagingStyle["height"]) {
          pagingStyle["height"] = this.height;
        }
        if (this.width.length && !pagingStyle["width"]) {
          pagingStyle["width"] = this.width;
        }
        if (this.maxWidth.length && !pagingStyle["max-width"]) {
          pagingStyle["max-width"] = this.maxWidth;
          pagingStyle["margin"] = "0 auto";
        }
        return pagingStyle;
      },
      // 当前z-paging内容的样式
      finalPagingContentStyle() {
        if (this.contentZIndex != 1) {
          this.pagingContentStyle["z-index"] = this.contentZIndex;
          this.pagingContentStyle["position"] = "relative";
        }
        return this.pagingContentStyle;
      },
      // 最终的当前开启安全区域适配后，是否使用placeholder形式实现。如果slot=bottom存在，则应当交由固定在底部的view处理，因此需排除此情况
      finalUseSafeAreaPlaceholder() {
        return this.useSafeAreaPlaceholder && !this.zSlots.bottom;
      },
      renderJsIgnore() {
        if (this.usePageScroll && this.useChatRecordMode || !this.refresherEnabled && this.scrollable || !this.useCustomRefresher) {
          this.$nextTick(() => {
            this.renderPropScrollTop = 10;
          });
        }
        return 0;
      },
      windowHeight() {
        if (!this.systemInfo)
          return 0;
        return this.systemInfo.windowHeight || 0;
      },
      windowBottom() {
        if (!this.systemInfo)
          return 0;
        return this.systemInfo.windowBottom || 0;
      },
      // 是否是ios+h5
      isIosAndH5() {
        return false;
      },
      // 是否是只使用基础布局或者只使用下拉刷新
      isOnly() {
        return this.layoutOnly || this.refresherOnly;
      }
    },
    methods: {
      // 当前版本号
      getVersion() {
        return `z-paging v${c.version}`;
      },
      // 设置nvue List的specialEffects
      setSpecialEffects(args) {
        this.setListSpecialEffects(args);
      },
      // 与setSpecialEffects等效，兼容旧版本
      setListSpecialEffects(args) {
        this.nFixFreezing = args && Object.keys(args).length;
        if (this.isIos) {
          this.privateRefresherEnabled = 0;
        }
        !this.usePageScroll && this.$refs["zp-n-list"].setSpecialEffects(args);
      },
      // 当app长时间进入后台后进入前台，因系统内存管理导致app重新加载时，进行一些适配处理
      _handlePageLaunch() {
        if (this.pageLaunched) {
          this.refresherThresholdUpdateTag = 1;
          this.$nextTick(() => {
            this.refresherThresholdUpdateTag = 0;
          });
          this._checkVirtualListScroll();
        }
        this.pageLaunched = true;
      },
      // 使手机发生较短时间的振动（15ms）
      _doVibrateShort() {
        if (this.isIos) {
          const UISelectionFeedbackGenerator = plus.ios.importClass("UISelectionFeedbackGenerator");
          const feedbackGenerator = new UISelectionFeedbackGenerator();
          feedbackGenerator.init();
          setTimeout(() => {
            feedbackGenerator.selectionChanged();
          }, 0);
        } else {
          plus.device.vibrate(15);
        }
      },
      // 设置z-paging高度
      async _setAutoHeight(shouldFullHeight = true, scrollViewNode = null) {
        const heightKey = "min-height";
        try {
          if (shouldFullHeight) {
            let finalScrollViewNode = scrollViewNode || await this._getNodeClientRect(".zp-scroll-view");
            let finalScrollBottomNode = await this._getNodeClientRect(".zp-page-bottom");
            if (finalScrollViewNode) {
              const scrollViewTop = finalScrollViewNode[0].top;
              let scrollViewHeight = this.windowHeight - scrollViewTop;
              scrollViewHeight -= finalScrollBottomNode ? finalScrollBottomNode[0].height : 0;
              const additionHeight = u.convertToPx(this.autoHeightAddition);
              let importantSuffix = " !important";
              const finalHeight = scrollViewHeight + additionHeight - (this.insideMore ? 1 : 0) + "px" + importantSuffix;
              this.$set(this.scrollViewStyle, heightKey, finalHeight);
              this.$set(this.scrollViewInStyle, heightKey, finalHeight);
            }
          } else {
            this.$delete(this.scrollViewStyle, heightKey);
            this.$delete(this.scrollViewInStyle, heightKey);
          }
        } catch (e) {
        }
      },
      // 更新scroll-view高度
      async _updateScrollViewHeight() {
        const scrollViewNode = await this._getNodeClientRect(".zp-scroll-view");
        if (scrollViewNode) {
          const scrollViewNodeHeight = scrollViewNode[0].height;
          this.scrollViewHeight = scrollViewNodeHeight;
          this.pagingOrgTop = scrollViewNode[0].top;
        }
      },
      // 组件销毁后续处理
      _handleUnmounted() {
        this.active = false;
        if (!this.layoutOnly) {
          this._offEmit();
        }
        this.useChatRecordMode && uni.offKeyboardHeightChange(this._handleKeyboardHeightChange);
      },
      // 触发更新是否超出页面状态
      _updateInsideOfPaging() {
        this.insideMore && this.insideOfPaging === true && setTimeout(this.doLoadMore, 200);
      },
      // 清除timeout
      _cleanTimeout(timeout) {
        if (timeout) {
          clearTimeout(timeout);
          timeout = null;
        }
        return timeout;
      },
      // 添加全局emit监听
      _onEmit() {
        uni.$on(c.errorUpdateKey, (errorMsg) => {
          if (this.loading) {
            if (!!errorMsg) {
              this.customerEmptyViewErrorText = errorMsg;
            }
            this.complete(false).catch(() => {
            });
          }
        });
        uni.$on(c.completeUpdateKey, (data) => {
          setTimeout(() => {
            if (this.loading) {
              if (!this.disabledCompleteEmit) {
                const type = data.type || "normal";
                const list = data.list || data;
                const rule = data.rule;
                this.fromCompleteEmit = true;
                switch (type) {
                  case "normal":
                    this.complete(list);
                    break;
                  case "total":
                    this.completeByTotal(list, rule);
                    break;
                  case "nomore":
                    this.completeByNoMore(list, rule);
                    break;
                  case "key":
                    this.completeByKey(list, rule);
                    break;
                }
              } else {
                this.disabledCompleteEmit = false;
              }
            }
          }, 1);
        });
      },
      // 销毁全局emit和listener监听
      _offEmit() {
        uni.$off(c.errorUpdateKey);
        uni.$off(c.completeUpdateKey);
      }
    }
  };
  const block0 = (Comp) => {
    (Comp.$renderjs || (Comp.$renderjs = [])).push("pagingRenderjs");
    (Comp.$renderjsModules || (Comp.$renderjsModules = {}))["pagingRenderjs"] = "463e3cc3";
  };
  const block1 = (Comp) => {
    (Comp.$wxs || (Comp.$wxs = [])).push("pagingWxs");
    (Comp.$wxsModules || (Comp.$wxsModules = {}))["pagingWxs"] = "42613348";
  };
  function _sfc_render$d(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_z_paging_refresh = vue.resolveComponent("z-paging-refresh");
    const _component_z_paging_load_more = vue.resolveComponent("z-paging-load-more");
    const _component_z_paging_empty_view = resolveEasycom(vue.resolveDynamicComponent("z-paging-empty-view"), __easycom_0$1);
    return vue.openBlock(), vue.createElementBlock(
      "view",
      {
        class: vue.normalizeClass([{ "z-paging-content": true, "z-paging-content-full": !_ctx.usePageScroll, "z-paging-content-fixed": !_ctx.usePageScroll && _ctx.fixed, "z-paging-content-page": _ctx.usePageScroll, "z-paging-reached-top": _ctx.renderPropScrollTop < 1, "z-paging-use-chat-record-mode": _ctx.useChatRecordMode }, _ctx.pagingClass]),
        style: vue.normalizeStyle([_ctx.finalPagingStyle])
      },
      [
        vue.createCommentVNode(" 二楼view "),
        _ctx.showF2 && _ctx.showRefresherF2 ? (vue.openBlock(), vue.createElementBlock(
          "view",
          {
            key: 0,
            onTouchmove: _cache[0] || (_cache[0] = vue.withModifiers(() => {
            }, ["stop", "prevent"])),
            class: "zp-f2-content",
            style: vue.normalizeStyle([{ "transform": _ctx.f2Transform, "transition": `transform .2s linear`, "height": _ctx.superContentHeight + "px", "z-index": _ctx.f2ZIndex }])
          },
          [
            vue.renderSlot(_ctx.$slots, "f2", {}, void 0, true)
          ],
          36
          /* STYLE, NEED_HYDRATION */
        )) : vue.createCommentVNode("v-if", true),
        vue.createCommentVNode(" 顶部固定的slot "),
        _ctx.zSlots.top ? (vue.openBlock(), vue.createElementBlock(
          vue.Fragment,
          { key: 1 },
          [
            !_ctx.usePageScroll ? vue.renderSlot(_ctx.$slots, "top", { key: 0 }, void 0, true) : (vue.openBlock(), vue.createElementBlock(
              "view",
              {
                key: 1,
                class: "zp-page-top",
                onTouchmove: _cache[1] || (_cache[1] = vue.withModifiers(() => {
                }, ["stop", "prevent"])),
                style: vue.normalizeStyle([{ "top": `${_ctx.windowTop}px`, "z-index": _ctx.topZIndex }])
              },
              [
                vue.renderSlot(_ctx.$slots, "top", {}, void 0, true)
              ],
              36
              /* STYLE, NEED_HYDRATION */
            ))
          ],
          64
          /* STABLE_FRAGMENT */
        )) : vue.createCommentVNode("v-if", true),
        vue.createElementVNode(
          "view",
          {
            class: vue.normalizeClass({ "zp-view-super": true, "zp-scroll-view-super": !_ctx.usePageScroll }),
            style: vue.normalizeStyle([_ctx.finalScrollViewStyle])
          },
          [
            _ctx.zSlots.left ? (vue.openBlock(), vue.createElementBlock(
              "view",
              {
                key: 0,
                class: vue.normalizeClass({ "zp-page-left": true, "zp-absoulte": _ctx.finalIsOldWebView })
              },
              [
                vue.renderSlot(_ctx.$slots, "left", {}, void 0, true)
              ],
              2
              /* CLASS */
            )) : vue.createCommentVNode("v-if", true),
            vue.createElementVNode(
              "view",
              {
                class: vue.normalizeClass({ "zp-scroll-view-container": true, "zp-absoulte": _ctx.finalIsOldWebView }),
                style: vue.normalizeStyle([_ctx.scrollViewContainerStyle])
              },
              [
                vue.createElementVNode("scroll-view", {
                  ref: "zp-scroll-view",
                  class: vue.normalizeClass({ "zp-scroll-view": true, "zp-scroll-view-absolute": !_ctx.usePageScroll, "zp-scroll-view-hide-scrollbar": !_ctx.showScrollbar }),
                  style: vue.normalizeStyle([_ctx.chatRecordRotateStyle]),
                  "scroll-top": _ctx.scrollTop,
                  "scroll-left": _ctx.scrollLeft,
                  "scroll-x": _ctx.scrollX,
                  "scroll-y": _ctx.finalScrollable,
                  "enable-back-to-top": _ctx.finalEnableBackToTop,
                  "show-scrollbar": _ctx.showScrollbar,
                  "scroll-with-animation": _ctx.finalScrollWithAnimation,
                  "scroll-into-view": _ctx.scrollIntoView,
                  "lower-threshold": _ctx.finalLowerThreshold,
                  "upper-threshold": 5,
                  "refresher-enabled": _ctx.finalRefresherEnabled && !_ctx.useCustomRefresher,
                  "refresher-threshold": _ctx.finalRefresherThreshold,
                  "refresher-default-style": _ctx.finalRefresherDefaultStyle,
                  "refresher-background": _ctx.refresherBackground,
                  "refresher-triggered": _ctx.finalRefresherTriggered,
                  onScroll: _cache[12] || (_cache[12] = (...args) => _ctx._scroll && _ctx._scroll(...args)),
                  onScrolltolower: _cache[13] || (_cache[13] = (...args) => _ctx._onScrollToLower && _ctx._onScrollToLower(...args)),
                  onScrolltoupper: _cache[14] || (_cache[14] = (...args) => _ctx._onScrollToUpper && _ctx._onScrollToUpper(...args)),
                  onRefresherrestore: _cache[15] || (_cache[15] = (...args) => _ctx._onRestore && _ctx._onRestore(...args)),
                  onRefresherrefresh: _cache[16] || (_cache[16] = ($event) => _ctx._onRefresh(true))
                }, [
                  vue.createElementVNode(
                    "view",
                    {
                      class: "zp-paging-touch-view",
                      onTouchstart: _cache[4] || (_cache[4] = (...args) => _ctx.pagingWxs.touchstart && _ctx.pagingWxs.touchstart(...args)),
                      onTouchmove: _cache[5] || (_cache[5] = (...args) => _ctx.pagingWxs.touchmove && _ctx.pagingWxs.touchmove(...args)),
                      onTouchend: _cache[6] || (_cache[6] = (...args) => _ctx.pagingWxs.touchend && _ctx.pagingWxs.touchend(...args)),
                      onTouchcancel: _cache[7] || (_cache[7] = (...args) => _ctx.pagingWxs.touchend && _ctx.pagingWxs.touchend(...args)),
                      onMousedown: _cache[8] || (_cache[8] = (...args) => _ctx.pagingWxs.mousedown && _ctx.pagingWxs.mousedown(...args)),
                      onMousemove: _cache[9] || (_cache[9] = (...args) => _ctx.pagingWxs.mousemove && _ctx.pagingWxs.mousemove(...args)),
                      onMouseup: _cache[10] || (_cache[10] = (...args) => _ctx.pagingWxs.mouseup && _ctx.pagingWxs.mouseup(...args)),
                      onMouseleave: _cache[11] || (_cache[11] = (...args) => _ctx.pagingWxs.mouseleave && _ctx.pagingWxs.mouseleave(...args))
                    },
                    [
                      _ctx.finalRefresherFixedBacHeight > 0 ? (vue.openBlock(), vue.createElementBlock(
                        "view",
                        {
                          key: 0,
                          class: "zp-fixed-bac-view",
                          style: vue.normalizeStyle([{ "background": _ctx.refresherFixedBackground, "height": `${_ctx.finalRefresherFixedBacHeight}px` }])
                        },
                        null,
                        4
                        /* STYLE */
                      )) : vue.createCommentVNode("v-if", true),
                      vue.createElementVNode("view", {
                        class: "zp-paging-main",
                        style: vue.normalizeStyle([_ctx.scrollViewInStyle, { "transform": _ctx.finalRefresherTransform, "transition": _ctx.refresherTransition }]),
                        "change:prop": _ctx.pagingWxs.propObserver,
                        prop: vue.wp(_ctx.wxsPropType),
                        "data-refresherThreshold": _ctx.finalRefresherThreshold,
                        "data-refresherF2Enabled": _ctx.refresherF2Enabled,
                        "data-refresherF2Threshold": _ctx.finalRefresherF2Threshold,
                        "data-isIos": _ctx.isIos,
                        "data-loading": _ctx.loading || _ctx.isRefresherInComplete,
                        "data-useChatRecordMode": _ctx.useChatRecordMode,
                        "data-refresherEnabled": _ctx.finalRefresherEnabled,
                        "data-useCustomRefresher": _ctx.useCustomRefresher,
                        "data-pageScrollTop": _ctx.wxsPageScrollTop,
                        "data-scrollTop": _ctx.wxsScrollTop,
                        "data-refresherMaxAngle": _ctx.refresherMaxAngle,
                        "data-refresherNoTransform": _ctx.refresherNoTransform,
                        "data-refresherAecc": _ctx.refresherAngleEnableChangeContinued,
                        "data-usePageScroll": _ctx.usePageScroll,
                        "data-watchTouchDirectionChange": _ctx.watchTouchDirectionChange,
                        "data-oldIsTouchmoving": _ctx.isTouchmoving,
                        "data-refresherOutRate": _ctx.finalRefresherOutRate,
                        "data-refresherPullRate": _ctx.finalRefresherPullRate,
                        "data-hasTouchmove": _ctx.hasTouchmove,
                        "change:renderPropIsIosAndH5": _ctx.pagingRenderjs.renderPropIsIosAndH5Change,
                        renderPropIsIosAndH5: vue.wp(_ctx.isIosAndH5)
                      }, [
                        _ctx.showRefresher ? (vue.openBlock(), vue.createElementBlock(
                          "view",
                          {
                            key: 0,
                            class: "zp-custom-refresher-view",
                            style: vue.normalizeStyle([{ "margin-top": `-${_ctx.finalRefresherThreshold + _ctx.refresherThresholdUpdateTag}px`, "background": _ctx.refresherBackground, "opacity": _ctx.isTouchmoving ? 1 : 0 }])
                          },
                          [
                            vue.createElementVNode(
                              "view",
                              {
                                class: "zp-custom-refresher-container",
                                style: vue.normalizeStyle([{ "height": `${_ctx.finalRefresherThreshold}px`, "background": _ctx.refresherBackground }])
                              },
                              [
                                _ctx.useRefresherStatusBarPlaceholder ? (vue.openBlock(), vue.createElementBlock(
                                  "view",
                                  {
                                    key: 0,
                                    class: "zp-custom-refresher-status-bar-placeholder",
                                    style: vue.normalizeStyle([{ "height": `${_ctx.statusBarHeight}px` }])
                                  },
                                  null,
                                  4
                                  /* STYLE */
                                )) : vue.createCommentVNode("v-if", true),
                                vue.createCommentVNode(" 下拉刷新view "),
                                vue.createElementVNode("view", { class: "zp-custom-refresher-slot-view" }, [
                                  !(_ctx.zSlots.refresherComplete && _ctx.refresherStatus === _ctx.R.Complete) && !(_ctx.zSlots.refresherF2 && _ctx.refresherStatus === _ctx.R.GoF2) ? vue.renderSlot(_ctx.$slots, "refresher", {
                                    key: 0,
                                    refresherStatus: _ctx.refresherStatus
                                  }, void 0, true) : vue.createCommentVNode("v-if", true)
                                ]),
                                _ctx.zSlots.refresherComplete && _ctx.refresherStatus === _ctx.R.Complete ? vue.renderSlot(_ctx.$slots, "refresherComplete", { key: 1 }, void 0, true) : _ctx.zSlots.refresherF2 && _ctx.refresherStatus === _ctx.R.GoF2 ? vue.renderSlot(_ctx.$slots, "refresherF2", { key: 2 }, void 0, true) : !_ctx.showCustomRefresher ? (vue.openBlock(), vue.createBlock(_component_z_paging_refresh, {
                                  key: 3,
                                  ref: "refresh",
                                  class: "zp-custom-refresher-refresh",
                                  style: vue.normalizeStyle([{ "height": `${_ctx.finalRefresherThreshold - _ctx.finalRefresherThresholdPlaceholder}px` }]),
                                  status: _ctx.refresherStatus,
                                  defaultThemeStyle: _ctx.finalRefresherThemeStyle,
                                  defaultText: _ctx.finalRefresherDefaultText,
                                  isIos: _ctx.isIos,
                                  pullingText: _ctx.finalRefresherPullingText,
                                  refreshingText: _ctx.finalRefresherRefreshingText,
                                  completeText: _ctx.finalRefresherCompleteText,
                                  goF2Text: _ctx.finalRefresherGoF2Text,
                                  defaultImg: _ctx.refresherDefaultImg,
                                  pullingImg: _ctx.refresherPullingImg,
                                  refreshingImg: _ctx.refresherRefreshingImg,
                                  completeImg: _ctx.refresherCompleteImg,
                                  refreshingAnimated: _ctx.refresherRefreshingAnimated,
                                  showUpdateTime: _ctx.showRefresherUpdateTime,
                                  updateTimeKey: _ctx.refresherUpdateTimeKey,
                                  updateTimeTextMap: _ctx.finalRefresherUpdateTimeTextMap,
                                  imgStyle: _ctx.refresherImgStyle,
                                  titleStyle: _ctx.refresherTitleStyle,
                                  updateTimeStyle: _ctx.refresherUpdateTimeStyle,
                                  unit: _ctx.unit
                                }, null, 8, ["style", "status", "defaultThemeStyle", "defaultText", "isIos", "pullingText", "refreshingText", "completeText", "goF2Text", "defaultImg", "pullingImg", "refreshingImg", "completeImg", "refreshingAnimated", "showUpdateTime", "updateTimeKey", "updateTimeTextMap", "imgStyle", "titleStyle", "updateTimeStyle", "unit"])) : vue.createCommentVNode("v-if", true)
                              ],
                              4
                              /* STYLE */
                            )
                          ],
                          4
                          /* STYLE */
                        )) : vue.createCommentVNode("v-if", true),
                        vue.createElementVNode(
                          "view",
                          {
                            class: "zp-paging-container",
                            style: vue.normalizeStyle([{ justifyContent: _ctx.useChatRecordMode ? "flex-end" : "flex-start" }])
                          },
                          [
                            vue.createCommentVNode(" 全屏Loading "),
                            _ctx.showLoading && _ctx.zSlots.loading && !_ctx.loadingFullFixed ? vue.renderSlot(_ctx.$slots, "loading", { key: 0 }, void 0, true) : vue.createCommentVNode("v-if", true),
                            vue.createCommentVNode(" 主体内容 "),
                            vue.createElementVNode(
                              "view",
                              {
                                class: "zp-paging-container-content",
                                style: vue.normalizeStyle([_ctx.finalPlaceholderTopHeightStyle, _ctx.finalPagingContentStyle])
                              },
                              [
                                vue.createCommentVNode(" 虚拟列表顶部占位view "),
                                _ctx.useVirtualList ? (vue.openBlock(), vue.createElementBlock(
                                  "view",
                                  {
                                    key: 0,
                                    class: "zp-virtual-placeholder",
                                    style: vue.normalizeStyle([{ height: _ctx.virtualPlaceholderTopHeight + "px" }])
                                  },
                                  null,
                                  4
                                  /* STYLE */
                                )) : vue.createCommentVNode("v-if", true),
                                vue.renderSlot(_ctx.$slots, "default", {}, void 0, true),
                                vue.createCommentVNode(" 内置列表&虚拟列表 "),
                                _ctx.finalUseInnerList ? (vue.openBlock(), vue.createElementBlock(
                                  vue.Fragment,
                                  { key: 1 },
                                  [
                                    vue.renderSlot(_ctx.$slots, "header", {}, void 0, true),
                                    vue.createElementVNode(
                                      "view",
                                      {
                                        class: "zp-list-container",
                                        style: vue.normalizeStyle([_ctx.innerListStyle])
                                      },
                                      [
                                        _ctx.finalUseVirtualList ? (vue.openBlock(true), vue.createElementBlock(
                                          vue.Fragment,
                                          { key: 0 },
                                          vue.renderList(_ctx.virtualList, (item, index) => {
                                            return vue.openBlock(), vue.createElementBlock("view", {
                                              class: "zp-list-cell",
                                              style: vue.normalizeStyle([_ctx.innerCellStyle]),
                                              id: `${_ctx.fianlVirtualCellIdPrefix}-${item[_ctx.virtualCellIndexKey]}`,
                                              key: item["zp_unique_index"],
                                              onClick: ($event) => _ctx._innerCellClick(item, _ctx.virtualTopRangeIndex + index)
                                            }, [
                                              _ctx.useCompatibilityMode ? (vue.openBlock(), vue.createElementBlock("view", { key: 0 }, "使用兼容模式请在组件源码z-paging.vue第105行中注释这一行，并打开下面一行注释")) : (vue.openBlock(), vue.createElementBlock(
                                                vue.Fragment,
                                                { key: 1 },
                                                [
                                                  vue.createCommentVNode(' <zp-public-virtual-cell v-if="useCompatibilityMode" :extraData="extraData" :item="item" :index="virtualTopRangeIndex+index" /> '),
                                                  vue.renderSlot(_ctx.$slots, "cell", {
                                                    item,
                                                    index: _ctx.virtualTopRangeIndex + index
                                                  }, void 0, true)
                                                ],
                                                2112
                                                /* STABLE_FRAGMENT, DEV_ROOT_FRAGMENT */
                                              ))
                                            ], 12, ["id", "onClick"]);
                                          }),
                                          128
                                          /* KEYED_FRAGMENT */
                                        )) : (vue.openBlock(true), vue.createElementBlock(
                                          vue.Fragment,
                                          { key: 1 },
                                          vue.renderList(_ctx.realTotalData, (item, index) => {
                                            return vue.openBlock(), vue.createElementBlock("view", {
                                              class: "zp-list-cell",
                                              key: index,
                                              onClick: ($event) => _ctx._innerCellClick(item, index)
                                            }, [
                                              vue.renderSlot(_ctx.$slots, "cell", {
                                                item,
                                                index
                                              }, void 0, true)
                                            ], 8, ["onClick"]);
                                          }),
                                          128
                                          /* KEYED_FRAGMENT */
                                        ))
                                      ],
                                      4
                                      /* STYLE */
                                    ),
                                    vue.renderSlot(_ctx.$slots, "footer", {}, void 0, true)
                                  ],
                                  64
                                  /* STABLE_FRAGMENT */
                                )) : vue.createCommentVNode("v-if", true),
                                vue.createCommentVNode(" 聊天记录模式加载更多loading "),
                                _ctx.useChatRecordMode && _ctx.realTotalData.length >= _ctx.defaultPageSize && (_ctx.loadingStatus !== _ctx.M.NoMore || _ctx.zSlots.chatNoMore) && (_ctx.realTotalData.length || _ctx.showChatLoadingWhenReload && _ctx.showLoading) && !_ctx.isFirstPageAndNoMore ? (vue.openBlock(), vue.createElementBlock(
                                  "view",
                                  {
                                    key: 2,
                                    style: vue.normalizeStyle([_ctx.chatRecordRotateStyle])
                                  },
                                  [
                                    _ctx.loadingStatus === _ctx.M.NoMore && _ctx.zSlots.chatNoMore ? vue.renderSlot(_ctx.$slots, "chatNoMore", { key: 0 }, void 0, true) : (vue.openBlock(), vue.createElementBlock(
                                      vue.Fragment,
                                      { key: 1 },
                                      [
                                        _ctx.zSlots.chatLoading ? vue.renderSlot(_ctx.$slots, "chatLoading", {
                                          key: 0,
                                          loadingMoreStatus: _ctx.loadingStatus
                                        }, void 0, true) : (vue.openBlock(), vue.createBlock(_component_z_paging_load_more, {
                                          key: 1,
                                          onDoClick: _cache[2] || (_cache[2] = ($event) => _ctx._onLoadingMore("click")),
                                          zConfig: _ctx.zLoadMoreConfig
                                        }, null, 8, ["zConfig"]))
                                      ],
                                      64
                                      /* STABLE_FRAGMENT */
                                    ))
                                  ],
                                  4
                                  /* STYLE */
                                )) : vue.createCommentVNode("v-if", true),
                                vue.createCommentVNode(" 虚拟列表底部占位view "),
                                _ctx.useVirtualList ? (vue.openBlock(), vue.createElementBlock(
                                  "view",
                                  {
                                    key: 3,
                                    class: "zp-virtual-placeholder",
                                    style: vue.normalizeStyle([{ height: _ctx.virtualPlaceholderBottomHeight + "px" }])
                                  },
                                  null,
                                  4
                                  /* STYLE */
                                )) : vue.createCommentVNode("v-if", true),
                                vue.createCommentVNode(" 上拉加载更多view "),
                                _ctx.showLoadingMoreDefault ? vue.renderSlot(_ctx.$slots, "loadingMoreDefault", { key: 4 }, void 0, true) : _ctx.showLoadingMoreLoading ? vue.renderSlot(_ctx.$slots, "loadingMoreLoading", { key: 5 }, void 0, true) : _ctx.showLoadingMoreNoMore ? vue.renderSlot(_ctx.$slots, "loadingMoreNoMore", { key: 6 }, void 0, true) : _ctx.showLoadingMoreFail ? vue.renderSlot(_ctx.$slots, "loadingMoreFail", { key: 7 }, void 0, true) : _ctx.showLoadingMoreCustom ? (vue.openBlock(), vue.createBlock(_component_z_paging_load_more, {
                                  key: 8,
                                  onDoClick: _cache[3] || (_cache[3] = ($event) => _ctx._onLoadingMore("click")),
                                  zConfig: _ctx.zLoadMoreConfig
                                }, null, 8, ["zConfig"])) : vue.createCommentVNode("v-if", true),
                                vue.createCommentVNode(" 底部安全区域useSafeAreaPlaceholder模式占位，此时占位不再固定在底部而是跟随页面一起滚动 "),
                                vue.createCommentVNode(" 如果底部slot=bottom存在，占位区域会插入在slot=bottom下方，不再跟随页面滚动，因此这里就没必要显示了 "),
                                vue.createCommentVNode(" 聊天记录模式因为列表倒置，此处不需要显示底部安全区域，另行处理 "),
                                _ctx.safeAreaInsetBottom && _ctx.finalUseSafeAreaPlaceholder && !_ctx.useChatRecordMode ? (vue.openBlock(), vue.createElementBlock(
                                  "view",
                                  {
                                    key: 9,
                                    class: "zp-safe-area-placeholder",
                                    style: vue.normalizeStyle([{ height: _ctx.safeAreaBottom + "px" }])
                                  },
                                  null,
                                  4
                                  /* STYLE */
                                )) : vue.createCommentVNode("v-if", true)
                              ],
                              4
                              /* STYLE */
                            ),
                            vue.createCommentVNode(" 空数据图 "),
                            _ctx.showEmpty ? (vue.openBlock(), vue.createElementBlock(
                              "view",
                              {
                                key: 1,
                                class: vue.normalizeClass({ "zp-empty-view": true, "zp-empty-view-center": _ctx.emptyViewCenter }),
                                style: vue.normalizeStyle([_ctx.emptyViewSuperStyle, _ctx.chatRecordRotateStyle])
                              },
                              [
                                _ctx.zSlots.empty ? vue.renderSlot(_ctx.$slots, "empty", {
                                  key: 0,
                                  isLoadFailed: _ctx.isLoadFailed
                                }, void 0, true) : (vue.openBlock(), vue.createBlock(_component_z_paging_empty_view, {
                                  key: 1,
                                  emptyViewImg: _ctx.finalEmptyViewImg,
                                  emptyViewText: _ctx.finalEmptyViewText,
                                  showEmptyViewReload: _ctx.finalShowEmptyViewReload,
                                  emptyViewReloadText: _ctx.finalEmptyViewReloadText,
                                  isLoadFailed: _ctx.isLoadFailed,
                                  emptyViewStyle: _ctx.emptyViewStyle,
                                  emptyViewTitleStyle: _ctx.emptyViewTitleStyle,
                                  emptyViewImgStyle: _ctx.emptyViewImgStyle,
                                  emptyViewReloadStyle: _ctx.emptyViewReloadStyle,
                                  emptyViewZIndex: _ctx.emptyViewZIndex,
                                  emptyViewFixed: _ctx.emptyViewFixed,
                                  unit: _ctx.unit,
                                  onReload: _ctx._emptyViewReload,
                                  onViewClick: _ctx._emptyViewClick
                                }, null, 8, ["emptyViewImg", "emptyViewText", "showEmptyViewReload", "emptyViewReloadText", "isLoadFailed", "emptyViewStyle", "emptyViewTitleStyle", "emptyViewImgStyle", "emptyViewReloadStyle", "emptyViewZIndex", "emptyViewFixed", "unit", "onReload", "onViewClick"]))
                              ],
                              6
                              /* CLASS, STYLE */
                            )) : vue.createCommentVNode("v-if", true)
                          ],
                          4
                          /* STYLE */
                        )
                      ], 12, ["change:prop", "prop", "data-refresherThreshold", "data-refresherF2Enabled", "data-refresherF2Threshold", "data-isIos", "data-loading", "data-useChatRecordMode", "data-refresherEnabled", "data-useCustomRefresher", "data-pageScrollTop", "data-scrollTop", "data-refresherMaxAngle", "data-refresherNoTransform", "data-refresherAecc", "data-usePageScroll", "data-watchTouchDirectionChange", "data-oldIsTouchmoving", "data-refresherOutRate", "data-refresherPullRate", "data-hasTouchmove", "change:renderPropIsIosAndH5", "renderPropIsIosAndH5"])
                    ],
                    32
                    /* NEED_HYDRATION */
                  )
                ], 46, ["scroll-top", "scroll-left", "scroll-x", "scroll-y", "enable-back-to-top", "show-scrollbar", "scroll-with-animation", "scroll-into-view", "lower-threshold", "refresher-enabled", "refresher-threshold", "refresher-default-style", "refresher-background", "refresher-triggered"])
              ],
              6
              /* CLASS, STYLE */
            ),
            _ctx.zSlots.right ? (vue.openBlock(), vue.createElementBlock(
              "view",
              {
                key: 1,
                class: vue.normalizeClass({ "zp-page-right": true, "zp-absoulte zp-right": _ctx.finalIsOldWebView })
              },
              [
                vue.renderSlot(_ctx.$slots, "right", {}, void 0, true)
              ],
              2
              /* CLASS */
            )) : vue.createCommentVNode("v-if", true)
          ],
          6
          /* CLASS, STYLE */
        ),
        vue.createCommentVNode(" 底部固定的slot "),
        vue.createElementVNode(
          "view",
          {
            class: "zp-page-bottom-container",
            style: vue.normalizeStyle({ "background": _ctx.bottomBgColor })
          },
          [
            _ctx.zSlots.bottom ? (vue.openBlock(), vue.createElementBlock(
              vue.Fragment,
              { key: 0 },
              [
                vue.createCommentVNode(" 非页面滚动底部插槽(父容器开启flex，中间列表设置了flex:1，通过中间列表撑开固定在底部) "),
                !_ctx.usePageScroll ? vue.renderSlot(_ctx.$slots, "bottom", { key: 0 }, void 0, true) : (vue.openBlock(), vue.createElementBlock(
                  vue.Fragment,
                  { key: 1 },
                  [
                    vue.createCommentVNode(" 页面滚动底部插槽(通过position: fixed固定在底部) "),
                    vue.createElementVNode(
                      "view",
                      {
                        class: "zp-page-bottom",
                        onTouchmove: _cache[17] || (_cache[17] = vue.withModifiers(() => {
                        }, ["stop", "prevent"])),
                        style: vue.normalizeStyle([{ "bottom": `${_ctx.windowBottom}px`, "background": _ctx.bottomBgColor }])
                      },
                      [
                        vue.renderSlot(_ctx.$slots, "bottom", {}, void 0, true),
                        vue.createCommentVNode(" 页面滚动底部安全区域占位(仅slot=bottom存在时展示在slot=bottom插入的view下方，当slot=bottom不存在时，通过控制容器的marginBottom设置底部安全区域间距) "),
                        _ctx.safeAreaInsetBottom ? (vue.openBlock(), vue.createElementBlock(
                          vue.Fragment,
                          { key: 0 },
                          [
                            vue.createCommentVNode(" 如果是App，则使用style中的safeAreaBottom设置高度，非APP使用class，因为class中的env(safe-area-inset-bottom)在部分app中无效 "),
                            vue.createElementVNode(
                              "view",
                              {
                                style: vue.normalizeStyle([{ height: _ctx.safeAreaBottom + "px" }])
                              },
                              null,
                              4
                              /* STYLE */
                            )
                          ],
                          64
                          /* STABLE_FRAGMENT */
                        )) : vue.createCommentVNode("v-if", true)
                      ],
                      36
                      /* STYLE, NEED_HYDRATION */
                    )
                  ],
                  2112
                  /* STABLE_FRAGMENT, DEV_ROOT_FRAGMENT */
                ))
              ],
              64
              /* STABLE_FRAGMENT */
            )) : vue.createCommentVNode("v-if", true),
            vue.createCommentVNode(" 非页面滚动底部安全区域占位(无论slot=bottom是否存在)"),
            vue.createCommentVNode(" 如果useSafeAreaPlaceholder开启了并且slot=bottom不存在就不显示这个占位view了，因为此时useSafeAreaPlaceholder会是跟随滚动的状态 "),
            vue.createCommentVNode(" 聊天记录模式因为列表倒置，此处不需要显示底部安全区域，另行处理 "),
            _ctx.safeAreaInsetBottom && !_ctx.usePageScroll && !_ctx.finalUseSafeAreaPlaceholder && !_ctx.useChatRecordMode ? (vue.openBlock(), vue.createElementBlock(
              vue.Fragment,
              { key: 1 },
              [
                vue.createCommentVNode(" 如果是App，则使用style中的safeAreaBottom设置高度，非APP使用class，因为class中的env(safe-area-inset-bottom)在部分app中无效 "),
                vue.createElementVNode(
                  "view",
                  {
                    style: vue.normalizeStyle([{ height: _ctx.safeAreaBottom + "px" }])
                  },
                  null,
                  4
                  /* STYLE */
                )
              ],
              64
              /* STABLE_FRAGMENT */
            )) : vue.createCommentVNode("v-if", true),
            vue.createCommentVNode(" 聊天记录模式底部占位 "),
            _ctx.useChatRecordMode && _ctx.autoAdjustPositionWhenChat ? (vue.openBlock(), vue.createElementBlock(
              vue.Fragment,
              { key: 2 },
              [
                vue.createElementVNode(
                  "view",
                  {
                    style: vue.normalizeStyle([{ height: _ctx.chatRecordModeSafeAreaBottom + "px" }])
                  },
                  null,
                  4
                  /* STYLE */
                ),
                vue.createElementVNode(
                  "view",
                  {
                    class: "zp-page-bottom-keyboard-placeholder-animate",
                    style: vue.normalizeStyle([{ height: _ctx.keyboardHeight + "px" }])
                  },
                  null,
                  4
                  /* STYLE */
                )
              ],
              64
              /* STABLE_FRAGMENT */
            )) : vue.createCommentVNode("v-if", true)
          ],
          4
          /* STYLE */
        ),
        vue.createCommentVNode(" 点击返回顶部view "),
        _ctx.showBackToTopClass ? (vue.openBlock(), vue.createElementBlock(
          "view",
          {
            key: 2,
            class: vue.normalizeClass(_ctx.finalBackToTopClass),
            style: vue.normalizeStyle([_ctx.finalBackToTopStyle]),
            onClick: _cache[18] || (_cache[18] = vue.withModifiers((...args) => _ctx._backToTopClick && _ctx._backToTopClick(...args), ["stop"]))
          },
          [
            _ctx.zSlots.backToTop ? vue.renderSlot(_ctx.$slots, "backToTop", { key: 0 }, void 0, true) : (vue.openBlock(), vue.createElementBlock("image", {
              key: 1,
              class: vue.normalizeClass(["zp-back-to-top-img", { "zp-back-to-top-img-inversion": _ctx.useChatRecordMode && !_ctx.backToTopImg.length }]),
              src: _ctx.backToTopImg.length ? _ctx.backToTopImg : _ctx.base64BackToTop
            }, null, 10, ["src"]))
          ],
          6
          /* CLASS, STYLE */
        )) : vue.createCommentVNode("v-if", true),
        vue.createCommentVNode(" 全屏Loading(铺满z-paging并固定) "),
        _ctx.showLoading && _ctx.zSlots.loading && _ctx.loadingFullFixed ? (vue.openBlock(), vue.createElementBlock("view", {
          key: 3,
          class: "zp-loading-fixed"
        }, [
          vue.renderSlot(_ctx.$slots, "loading", {}, void 0, true)
        ])) : vue.createCommentVNode("v-if", true)
      ],
      6
      /* CLASS, STYLE */
    );
  }
  if (typeof block0 === "function")
    block0(_sfc_main$e);
  if (typeof block1 === "function")
    block1(_sfc_main$e);
  const __easycom_0 = /* @__PURE__ */ _export_sfc(_sfc_main$e, [["render", _sfc_render$d], ["__scopeId", "data-v-1aa372d7"], ["__file", "E:/dome/music/uni_modules/z-paging/components/z-paging/z-paging.vue"]]);
  const _imports_0$1 = "/static/video/icons.png";
  const _sfc_main$d = {
    __name: "model1",
    emits: ["playList"],
    setup(__props, { expose: __expose, emit: __emit }) {
      __expose();
      const emit = __emit;
      const paging = vue.ref(null);
      const state = vue.reactive({
        searchValue: "周杰伦",
        dataList: []
      });
      function queryLists() {
        paging.value.reload();
      }
      function queryList(num) {
        musicList({
          key: state.searchValue,
          num: num - 1
        }).then((res) => {
          paging.value.complete(res.abslist);
        });
      }
      function gotoPlay(item) {
        const index = state.dataList.findIndex((e) => e.DC_TARGETID == item.DC_TARGETID);
        emit("playList", {
          index,
          list: state.dataList.map((e) => {
            return {
              ...e,
              web_albumpic_short: "https://img2.kuwo.cn/star/albumcover/" + e.web_albumpic_short
            };
          })
        });
      }
      const __returned__ = { emit, paging, state, queryLists, queryList, gotoPlay, reactive: vue.reactive, ref: vue.ref, get musicList() {
        return musicList;
      } };
      Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
      return __returned__;
    }
  };
  function _sfc_render$c(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_wd_input = resolveEasycom(vue.resolveDynamicComponent("wd-input"), __easycom_0$2);
    const _component_z_paging = resolveEasycom(vue.resolveDynamicComponent("z-paging"), __easycom_0);
    return vue.openBlock(), vue.createElementBlock("view", { class: "model1" }, [
      vue.createElementVNode("view", { class: "search" }, [
        vue.createVNode(_component_wd_input, {
          color: "#333",
          modelValue: $setup.state.searchValue,
          "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $setup.state.searchValue = $event),
          placeholder: "请输入歌曲名~",
          "no-border": ""
        }, {
          prefix: vue.withCtx(() => [
            vue.createElementVNode("image", {
              slot: "prefix",
              src: _imports_0$1,
              class: "icon"
            })
          ]),
          suffix: vue.withCtx(() => [
            vue.createElementVNode("view", {
              slot: "suffix",
              class: "btn",
              onClick: $setup.queryLists
            }, "搜索")
          ]),
          _: 1
          /* STABLE */
        }, 8, ["modelValue"])
      ]),
      vue.createElementVNode("view", { class: "list" }, [
        vue.createVNode(_component_z_paging, {
          ref: "paging",
          modelValue: $setup.state.dataList,
          "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => $setup.state.dataList = $event),
          onQuery: $setup.queryList,
          fixed: false
        }, {
          default: vue.withCtx(() => [
            (vue.openBlock(true), vue.createElementBlock(
              vue.Fragment,
              null,
              vue.renderList($setup.state.dataList, (item, index) => {
                return vue.openBlock(), vue.createElementBlock("view", {
                  class: "item",
                  key: index,
                  onClick: ($event) => $setup.gotoPlay(item)
                }, [
                  vue.createElementVNode("view", null, [
                    vue.createElementVNode(
                      "view",
                      null,
                      vue.toDisplayString(item.SONGNAME),
                      1
                      /* TEXT */
                    ),
                    vue.createElementVNode(
                      "view",
                      { class: "ARTIST" },
                      vue.toDisplayString(item.ARTIST) + " · " + vue.toDisplayString(item.ALBUM),
                      1
                      /* TEXT */
                    )
                  ]),
                  vue.createElementVNode("image", {
                    src: _imports_1$1,
                    class: "play"
                  })
                ], 8, ["onClick"]);
              }),
              128
              /* KEYED_FRAGMENT */
            ))
          ]),
          _: 1
          /* STABLE */
        }, 8, ["modelValue"])
      ])
    ]);
  }
  const Model1$1 = /* @__PURE__ */ _export_sfc(_sfc_main$d, [["render", _sfc_render$c], ["__scopeId", "data-v-a82cee5f"], ["__file", "E:/dome/music/pages/music/model/model1.vue"]]);
  const _sfc_main$c = {
    __name: "model2",
    emits: ["playList"],
    setup(__props, { expose: __expose, emit: __emit }) {
      __expose();
      const emit = __emit;
      const paging = vue.ref(null);
      const state = vue.reactive({
        dataList: []
      });
      function queryList() {
        if (uni.getStorageSync("musicTjListStorage")) {
          paging.value.complete(uni.getStorageSync("musicTjListStorage"));
        }
        musicTjList().then((res) => {
          uni.setStorageSync("musicTjListStorage", res.data.data);
          paging.value.complete(res.data.data);
        });
      }
      function gotoItem(item) {
        musicTjListItem({
          id: item.id
        }).then((res) => {
          emit("playList", {
            index: 0,
            list: res.data.musiclist.map((e) => {
              return {
                NAME: e.name,
                ARTIST: e.artist,
                DC_TARGETID: e.rid,
                web_albumpic_short: e.img
              };
            })
          });
        });
      }
      const __returned__ = { emit, paging, state, queryList, gotoItem, reactive: vue.reactive, ref: vue.ref, get musicTjListItem() {
        return musicTjListItem;
      }, get musicTjList() {
        return musicTjList;
      } };
      Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
      return __returned__;
    }
  };
  function _sfc_render$b(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_z_paging = resolveEasycom(vue.resolveDynamicComponent("z-paging"), __easycom_0);
    return vue.openBlock(), vue.createElementBlock("view", { class: "model2" }, [
      vue.createElementVNode("view", { class: "disname" }, "推荐"),
      vue.createVNode(_component_z_paging, {
        ref: "paging",
        modelValue: $setup.state.dataList,
        "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $setup.state.dataList = $event),
        onQuery: $setup.queryList,
        fixed: false
      }, {
        default: vue.withCtx(() => [
          vue.createElementVNode("view", { class: "box" }, [
            (vue.openBlock(true), vue.createElementBlock(
              vue.Fragment,
              null,
              vue.renderList($setup.state.dataList, (item, index) => {
                return vue.openBlock(), vue.createElementBlock("view", {
                  class: "item",
                  key: index,
                  onClick: ($event) => $setup.gotoItem(item)
                }, [
                  vue.createElementVNode("image", {
                    src: item.img,
                    class: "img"
                  }, null, 8, ["src"]),
                  vue.createElementVNode(
                    "view",
                    { class: "name" },
                    vue.toDisplayString(item.name),
                    1
                    /* TEXT */
                  )
                ], 8, ["onClick"]);
              }),
              128
              /* KEYED_FRAGMENT */
            ))
          ])
        ]),
        _: 1
        /* STABLE */
      }, 8, ["modelValue"])
    ]);
  }
  const Model2$1 = /* @__PURE__ */ _export_sfc(_sfc_main$c, [["render", _sfc_render$b], ["__scopeId", "data-v-575aac03"], ["__file", "E:/dome/music/pages/music/model/model2.vue"]]);
  const _sfc_main$b = {
    __name: "model3",
    emits: ["playList"],
    setup(__props, { expose: __expose, emit: __emit }) {
      __expose();
      const emit = __emit;
      const paging = vue.ref(null);
      const state = vue.reactive({
        dataList: []
      });
      function queryList() {
        if (uni.getStorageSync("musicPhbListAllStorage")) {
          paging.value.complete(uni.getStorageSync("musicPhbListAllStorage"));
        }
        musicPhbListAll().then((res) => {
          uni.setStorageSync("musicPhbListAllStorage", res.child);
          paging.value.complete(res.child);
        });
      }
      function gotoItem(item) {
        musicPhbListItem({
          id: item.sourceid
        }).then((res) => {
          formatAppLog("log", "at pages/music/model/model3.vue:41", res);
          emit("playList", {
            index: 0,
            list: res.musiclist.map((e) => {
              return {
                NAME: e.name,
                ARTIST: e.artist,
                DC_TARGETID: e.id
              };
            })
          });
        });
      }
      const __returned__ = { emit, paging, state, queryList, gotoItem, reactive: vue.reactive, ref: vue.ref, get musicPhbListAll() {
        return musicPhbListAll;
      }, get musicPhbListItem() {
        return musicPhbListItem;
      } };
      Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
      return __returned__;
    }
  };
  function _sfc_render$a(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_z_paging = resolveEasycom(vue.resolveDynamicComponent("z-paging"), __easycom_0);
    return vue.openBlock(), vue.createElementBlock("view", { class: "model3" }, [
      vue.createVNode(_component_z_paging, {
        ref: "paging",
        modelValue: $setup.state.dataList,
        "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $setup.state.dataList = $event),
        onQuery: $setup.queryList,
        fixed: false
      }, {
        default: vue.withCtx(() => [
          (vue.openBlock(true), vue.createElementBlock(
            vue.Fragment,
            null,
            vue.renderList($setup.state.dataList, (item, index) => {
              return vue.openBlock(), vue.createElementBlock("view", {
                class: "item",
                key: index
              }, [
                vue.createElementVNode(
                  "view",
                  { class: "disname" },
                  vue.toDisplayString(item.disname),
                  1
                  /* TEXT */
                ),
                vue.createElementVNode("view", { class: "itemList" }, [
                  (vue.openBlock(true), vue.createElementBlock(
                    vue.Fragment,
                    null,
                    vue.renderList(item.child, (item2, index2) => {
                      return vue.openBlock(), vue.createElementBlock("view", {
                        class: "item2",
                        key: index2,
                        onClick: ($event) => $setup.gotoItem(item2)
                      }, [
                        vue.createElementVNode("image", {
                          src: item2.pic5,
                          class: "pic"
                        }, null, 8, ["src"])
                      ], 8, ["onClick"]);
                    }),
                    128
                    /* KEYED_FRAGMENT */
                  ))
                ])
              ]);
            }),
            128
            /* KEYED_FRAGMENT */
          ))
        ]),
        _: 1
        /* STABLE */
      }, 8, ["modelValue"])
    ]);
  }
  const Model3$1 = /* @__PURE__ */ _export_sfc(_sfc_main$b, [["render", _sfc_render$a], ["__scopeId", "data-v-8d6c5cee"], ["__file", "E:/dome/music/pages/music/model/model3.vue"]]);
  const _sfc_main$a = {
    __name: "model4",
    emits: ["playList"],
    setup(__props, { expose: __expose, emit: __emit }) {
      __expose();
      const emit = __emit;
      const paging = vue.ref(null);
      const state = vue.reactive({
        current: 0,
        navs: [],
        navs1: [],
        from: {
          id: 5,
          ids: 2189
        },
        dataList: []
      });
      vue.onMounted(() => {
        musictagList().then((res) => {
          formatAppLog("log", "at pages/music/model/model4.vue:54", res.data);
          state.navs = res.data.filter((e) => ["主题", "心情", "场景", "年代"].includes(e.name));
          state.navs1 = state.navs[0].data;
        });
      });
      function queryList() {
        musictagListDetail({
          id: state.from.ids
        }).then((res) => {
          formatAppLog("log", "at pages/music/model/model4.vue:64", res.data.data);
          paging.value.complete(res.data.data);
        });
      }
      function gotoItem(item) {
        musictagListItem({
          id: item.id
        }).then((res) => {
          formatAppLog("log", "at pages/music/model/model4.vue:73", res);
          emit("playList", {
            index: 0,
            list: res.data.musiclist.map((e) => {
              return {
                NAME: e.name,
                ARTIST: e.artist,
                DC_TARGETID: e.rid,
                web_albumpic_short: e.img
              };
            })
          });
        });
      }
      function changeType(item) {
        state.from.id = item.id;
        state.from.ids = item.data[0].id;
        state.navs1 = item.data;
        paging.value.reload();
      }
      function changeType1(item) {
        state.from.ids = item.id;
        paging.value.reload();
      }
      const __returned__ = { emit, paging, state, queryList, gotoItem, changeType, changeType1, reactive: vue.reactive, ref: vue.ref, onMounted: vue.onMounted, get musictagListItem() {
        return musictagListItem;
      }, get musictagList() {
        return musictagList;
      }, get musictagListDetail() {
        return musictagListDetail;
      } };
      Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
      return __returned__;
    }
  };
  function _sfc_render$9(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_z_paging = resolveEasycom(vue.resolveDynamicComponent("z-paging"), __easycom_0);
    return vue.openBlock(), vue.createElementBlock("view", { class: "model4" }, [
      vue.createCommentVNode(" 头部分类 "),
      vue.createElementVNode("view", { class: "top" }, [
        vue.createElementVNode("view", { class: "scrollView" }, [
          vue.createElementVNode("scroll-view", {
            "scroll-x": "",
            class: "scroll",
            "show-scrollbar": false
          }, [
            (vue.openBlock(true), vue.createElementBlock(
              vue.Fragment,
              null,
              vue.renderList($setup.state.navs, (item, index) => {
                return vue.openBlock(), vue.createElementBlock("view", {
                  class: vue.normalizeClass(["item", $setup.state.from.id == item.id ? "active" : ""]),
                  key: index,
                  onClick: ($event) => $setup.changeType(item)
                }, vue.toDisplayString(item.name), 11, ["onClick"]);
              }),
              128
              /* KEYED_FRAGMENT */
            ))
          ])
        ]),
        vue.createElementVNode("view", { class: "scrollView" }, [
          vue.createElementVNode("scroll-view", {
            "scroll-x": "",
            class: "scroll",
            "show-scrollbar": false
          }, [
            (vue.openBlock(true), vue.createElementBlock(
              vue.Fragment,
              null,
              vue.renderList($setup.state.navs1, (item, index) => {
                return vue.openBlock(), vue.createElementBlock("view", {
                  class: vue.normalizeClass(["item", $setup.state.from.ids == item.id ? "active" : ""]),
                  key: index,
                  onClick: ($event) => $setup.changeType1(item)
                }, vue.toDisplayString(item.name), 11, ["onClick"]);
              }),
              128
              /* KEYED_FRAGMENT */
            ))
          ])
        ])
      ]),
      vue.createVNode(_component_z_paging, {
        ref: "paging",
        modelValue: $setup.state.dataList,
        "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $setup.state.dataList = $event),
        onQuery: $setup.queryList,
        fixed: false
      }, {
        default: vue.withCtx(() => [
          vue.createElementVNode("view", { class: "mainBox" }, [
            (vue.openBlock(true), vue.createElementBlock(
              vue.Fragment,
              null,
              vue.renderList($setup.state.dataList, (item, index) => {
                return vue.openBlock(), vue.createElementBlock("view", {
                  key: index,
                  class: "item",
                  onClick: ($event) => $setup.gotoItem(item)
                }, [
                  vue.createElementVNode("image", {
                    src: item.img,
                    type: "image/webp",
                    webp: "",
                    class: "image",
                    mode: "aspectFill"
                  }, null, 8, ["src"]),
                  vue.createElementVNode(
                    "view",
                    { class: "title" },
                    vue.toDisplayString(item.name),
                    1
                    /* TEXT */
                  ),
                  vue.createElementVNode(
                    "view",
                    { class: "title" },
                    "热度：" + vue.toDisplayString(item.listencnt),
                    1
                    /* TEXT */
                  )
                ], 8, ["onClick"]);
              }),
              128
              /* KEYED_FRAGMENT */
            ))
          ])
        ]),
        _: 1
        /* STABLE */
      }, 8, ["modelValue"])
    ]);
  }
  const Model4 = /* @__PURE__ */ _export_sfc(_sfc_main$a, [["render", _sfc_render$9], ["__scopeId", "data-v-8d34ee22"], ["__file", "E:/dome/music/pages/music/model/model4.vue"]]);
  const _sfc_main$9 = {
    __name: "music",
    setup(__props, { expose: __expose }) {
      __expose();
      const musicRef = vue.ref(null);
      const state = vue.reactive({
        navIndex: 0
      });
      vue.onMounted(() => {
        const musicPlayList = uni.getStorageSync("musicPlayList");
        if (musicPlayList) {
          playList(musicPlayList, 2);
        }
      });
      function playList2(e) {
        playList(e, 2);
      }
      function playList3(e) {
        playList(e, 3);
      }
      function playList(e, type) {
        if (type == 1) {
          uni.setStorageSync("musicPlayList", e);
          musicRef.value.initPlayList(e, {
            show: false,
            play: false
          });
        }
        if (type == 2) {
          uni.setStorageSync("musicPlayList", e);
          musicRef.value.initPlayList(e, {
            show: false,
            play: true
          });
        }
        if (type == 3) {
          uni.setStorageSync("musicPlayList", e);
          musicRef.value.initPlayList(e, {
            show: true,
            play: true
          });
        }
      }
      onHide(() => {
        musicRef.value.closeFunc();
      });
      const __returned__ = { musicRef, state, playList2, playList3, playList, reactive: vue.reactive, ref: vue.ref, onMounted: vue.onMounted, onUnmounted: vue.onUnmounted, get onHide() {
        return onHide;
      }, Header: Header$1, Music, Model1: Model1$1, Model2: Model2$1, Model3: Model3$1, Model4 };
      Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
      return __returned__;
    }
  };
  function _sfc_render$8(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "music" }, [
      vue.createVNode($setup["Header"], {
        modelValue: $setup.state.navIndex,
        "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $setup.state.navIndex = $event)
      }, null, 8, ["modelValue"]),
      $setup.state.navIndex == 0 ? (vue.openBlock(), vue.createBlock($setup["Model1"], {
        key: 0,
        onPlayList: $setup.playList2
      })) : vue.createCommentVNode("v-if", true),
      $setup.state.navIndex == 1 ? (vue.openBlock(), vue.createBlock($setup["Model2"], {
        key: 1,
        onPlayList: $setup.playList3
      })) : vue.createCommentVNode("v-if", true),
      $setup.state.navIndex == 2 ? (vue.openBlock(), vue.createBlock($setup["Model3"], {
        key: 2,
        onPlayList: $setup.playList3
      })) : vue.createCommentVNode("v-if", true),
      $setup.state.navIndex == 3 ? (vue.openBlock(), vue.createBlock($setup["Model4"], {
        key: 3,
        onPlayList: $setup.playList3
      })) : vue.createCommentVNode("v-if", true),
      vue.createVNode(
        $setup["Music"],
        { ref: "musicRef" },
        null,
        512
        /* NEED_PATCH */
      )
    ]);
  }
  const PagesMusicMusic = /* @__PURE__ */ _export_sfc(_sfc_main$9, [["render", _sfc_render$8], ["__file", "E:/dome/music/pages/music/music.vue"]]);
  const getVideoList = (item, TYPENAME) => {
    const types = item.vod_play_url.split("$$$");
    const vidoes = types.map((val, index) => {
      if (val.includes(".m3u8") || val.includes(".mp4")) {
        const videoList2 = val.split("#");
        return videoList2.map((val2) => {
          const temp = val2.split("$");
          return {
            title: temp[0],
            url: temp[1]
          };
        });
      } else {
        return false;
      }
    }).filter(Boolean);
    return vidoes;
  };
  const searchVideo = (key, num = 1, burl) => {
    const url = `?ac=videolist&wd=${key}&pg=${num}`;
    return axios({
      url: burl + url
    }).then((res) => {
      const arr = [];
      for (let item of res.list) {
        item.vod_play_url_video = getVideoList(item);
        arr.push(item);
      }
      return arr;
    });
  };
  const getTuijianVideo = (params) => {
    const url = "http://cj.lziapi.com/api.php/provide/vod/";
    let type_id = params.type_id;
    return axios({
      url: url + `?t=${type_id}&ac=videolist&pg=${params.pagenum}`
    }).then((res) => {
      const arr = [];
      for (let item of res.list) {
        item.vod_play_url_video = getVideoList(item);
        arr.push(item);
      }
      return arr;
    });
  };
  const videoList = (num = 1) => {
    return axios({
      url: `http://cj.lziapi.com/api.php/provide/vod/?t=46&ac=videolist&pg=${num}`
    }).then((res) => {
      const arr = [];
      for (let item of res.list) {
        item.vod_play_url_video = getVideoList(item);
        item.typeUrl = [{
          "url": "http://cj.lziapi.com/api.php/provide/vod/",
          "type_id": 13,
          "name": "量子"
        }];
        arr.push(item);
      }
      return arr;
    });
  };
  const _sfc_main$8 = {
    __name: "model1",
    emits: ["playList"],
    setup(__props, { expose: __expose, emit: __emit }) {
      __expose();
      const emit = __emit;
      const paging = vue.ref(null);
      const state = vue.reactive({
        searchValue: "花千骨",
        videoList: []
      });
      function searchVideos() {
        paging.value.reload();
      }
      function initVideoList(num) {
        const videoTypeList = [
          { name: "量子", url: "http://cj.lziapi.com/api.php/provide/vod/" },
          { name: "新浪", url: "http://api.xinlangapi.com/xinlangapi.php/provide/vod/" },
          { name: "成人", url: "http://api.11bat.com/api.php/provide/vod/" },
          { name: "成人", url: "https://lbapi9.com/api.php/provide/vod/" },
          { name: "成人", url: "http://fhapi9.com/api.php/provide/vod/" }
        ];
        for (const item of videoTypeList) {
          searchVideo(state.searchValue, num, item.url).then((activeVideos) => {
            if (activeVideos.length > 0) {
              paging.value.complete([...state.videoList, ...activeVideos]);
            } else {
              paging.value.complete(state.videoList);
            }
          });
        }
      }
      function goVideo(item) {
        emit("playList", item);
      }
      const __returned__ = { emit, paging, state, searchVideos, initVideoList, goVideo, reactive: vue.reactive, ref: vue.ref, onMounted: vue.onMounted, get searchVideo() {
        return searchVideo;
      } };
      Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
      return __returned__;
    }
  };
  function _sfc_render$7(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_wd_input = resolveEasycom(vue.resolveDynamicComponent("wd-input"), __easycom_0$2);
    const _component_z_paging = resolveEasycom(vue.resolveDynamicComponent("z-paging"), __easycom_0);
    return vue.openBlock(), vue.createElementBlock("view", { class: "content" }, [
      vue.createElementVNode("view", { class: "search" }, [
        vue.createVNode(_component_wd_input, {
          color: "#333",
          modelValue: $setup.state.searchValue,
          "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $setup.state.searchValue = $event),
          placeholder: "想搜什么就搜吧~",
          "no-border": ""
        }, {
          prefix: vue.withCtx(() => [
            vue.createElementVNode("image", {
              slot: "prefix",
              src: _imports_0$1,
              class: "icon"
            })
          ]),
          suffix: vue.withCtx(() => [
            vue.createElementVNode("view", {
              slot: "suffix",
              class: "btn",
              onClick: $setup.searchVideos
            }, "搜索")
          ]),
          _: 1
          /* STABLE */
        }, 8, ["modelValue"])
      ]),
      vue.createVNode(_component_z_paging, {
        ref: "paging",
        modelValue: $setup.state.videoList,
        "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => $setup.state.videoList = $event),
        onQuery: $setup.initVideoList,
        "auto-show-back-to-top": "",
        fixed: false
      }, {
        default: vue.withCtx(() => [
          vue.createCommentVNode(" 视频详情 "),
          vue.createElementVNode("view", { class: "mainBox" }, [
            (vue.openBlock(true), vue.createElementBlock(
              vue.Fragment,
              null,
              vue.renderList($setup.state.videoList, (item, index) => {
                return vue.openBlock(), vue.createElementBlock("view", {
                  class: "item",
                  onClick: ($event) => $setup.goVideo(item)
                }, [
                  vue.createElementVNode("image", {
                    src: item.vod_pic,
                    type: "image/webp",
                    webp: "",
                    class: "image",
                    mode: "aspectFill"
                  }, null, 8, ["src"]),
                  vue.createElementVNode(
                    "view",
                    { class: "tag" },
                    vue.toDisplayString(item.type_name),
                    1
                    /* TEXT */
                  ),
                  vue.createElementVNode(
                    "view",
                    { class: "title" },
                    vue.toDisplayString(item.vod_name),
                    1
                    /* TEXT */
                  ),
                  vue.createElementVNode(
                    "view",
                    {
                      class: "msg",
                      style: { "margin-top": "8rpx" }
                    },
                    vue.toDisplayString(item.vod_remarks),
                    1
                    /* TEXT */
                  )
                ], 8, ["onClick"]);
              }),
              256
              /* UNKEYED_FRAGMENT */
            ))
          ])
        ]),
        _: 1
        /* STABLE */
      }, 8, ["modelValue"])
    ]);
  }
  const Model1 = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["render", _sfc_render$7], ["__scopeId", "data-v-c064f40f"], ["__file", "E:/dome/music/pages/video/model/model1.vue"]]);
  const navs = [
    {
      "type_id": 2,
      "type_pid": 0,
      "type_name": "电视剧",
      "children": [
        {
          "type_id": 13,
          "type_pid": 2,
          "type_name": "大陆剧"
        },
        {
          "type_id": 14,
          "type_pid": 2,
          "type_name": "港澳剧"
        },
        {
          "type_id": 15,
          "type_pid": 2,
          "type_name": "韩剧"
        },
        {
          "type_id": 16,
          "type_pid": 2,
          "type_name": "日剧"
        },
        {
          "type_id": 21,
          "type_pid": 2,
          "type_name": "台湾剧"
        },
        {
          "type_id": 22,
          "type_pid": 2,
          "type_name": "欧美剧"
        },
        {
          "type_id": 23,
          "type_pid": 2,
          "type_name": "其他剧"
        },
        {
          "type_id": 24,
          "type_pid": 2,
          "type_name": "泰剧"
        }
      ]
    },
    {
      "type_id": 1,
      "type_pid": 0,
      "type_name": "电影",
      "children": [
        {
          "type_id": 6,
          "type_pid": 1,
          "type_name": "动作片"
        },
        {
          "type_id": 7,
          "type_pid": 1,
          "type_name": "喜剧片"
        },
        {
          "type_id": 8,
          "type_pid": 1,
          "type_name": "爱情片"
        },
        {
          "type_id": 9,
          "type_pid": 1,
          "type_name": "科幻片"
        },
        {
          "type_id": 10,
          "type_pid": 1,
          "type_name": "恐怖片"
        },
        {
          "type_id": 11,
          "type_pid": 1,
          "type_name": "剧情片"
        },
        {
          "type_id": 12,
          "type_pid": 1,
          "type_name": "战争片"
        },
        {
          "type_id": 18,
          "type_pid": 1,
          "type_name": "犯罪片"
        },
        {
          "type_id": 20,
          "type_pid": 1,
          "type_name": "动画电影"
        },
        {
          "type_id": 32,
          "type_pid": 1,
          "type_name": "悬疑片"
        },
        {
          "type_id": 33,
          "type_pid": 1,
          "type_name": "邵氏电影"
        }
      ]
    },
    {
      "type_id": 3,
      "type_pid": 0,
      "type_name": "综艺",
      "children": [
        {
          "type_id": 25,
          "type_pid": 3,
          "type_name": "大陆综艺"
        },
        {
          "type_id": 26,
          "type_pid": 3,
          "type_name": "日韩综艺"
        },
        {
          "type_id": 27,
          "type_pid": 3,
          "type_name": "港台综艺"
        },
        {
          "type_id": 28,
          "type_pid": 3,
          "type_name": "欧美综艺"
        }
      ]
    },
    {
      "type_id": 4,
      "type_pid": 0,
      "type_name": "动漫",
      "children": [
        {
          "type_id": 29,
          "type_pid": 4,
          "type_name": "国产动漫"
        },
        {
          "type_id": 30,
          "type_pid": 4,
          "type_name": "日韩动漫"
        },
        {
          "type_id": 31,
          "type_pid": 4,
          "type_name": "欧美动漫"
        }
      ]
    },
    {
      "type_id": 36,
      "type_pid": 0,
      "type_name": "资讯",
      "children": [
        {
          "type_id": 37,
          "type_pid": 36,
          "type_name": "电影资讯"
        },
        {
          "type_id": 38,
          "type_pid": 36,
          "type_name": "明星资讯"
        },
        {
          "type_id": 39,
          "type_pid": 36,
          "type_name": "预告"
        }
      ]
    }
  ];
  const _sfc_main$7 = {
    __name: "model2",
    emits: ["playList"],
    setup(__props, { expose: __expose, emit: __emit }) {
      __expose();
      const emit = __emit;
      const paging = vue.ref(null);
      const state = vue.reactive({
        from: {
          pagenum: 0,
          type: 2,
          type1: 13,
          type_id: 13
        },
        navs1: navs[0].children,
        activeVideos: []
      });
      function changeType(item) {
        state.from.type = item.type_id;
        state.from.type_id = item.children[0].type_id;
        state.from.type1 = item.children[0].type_id;
        state.navs1 = item.children;
        paging.value.reload();
      }
      function changeType1(item) {
        state.from.type1 = item.type_id;
        state.from.type_id = item.type_id;
        paging.value.reload();
      }
      function changepxType(type) {
        state.from.pxType = type;
        paging.value.reload();
      }
      function initVideo(pagenum) {
        state.from.pagenum = pagenum;
        getTuijianVideo(state.from).then((activeVideos) => {
          paging.value.complete(activeVideos);
          setTimeout(() => {
            uni.hideLoading();
          }, 500);
        }).catch((res) => {
          paging.value.complete(false);
        });
      }
      function goVideo(item) {
        emit("playList", item);
      }
      const __returned__ = { emit, paging, state, changeType, changeType1, changepxType, initVideo, goVideo, get navs() {
        return navs;
      }, get getTuijianVideo() {
        return getTuijianVideo;
      }, reactive: vue.reactive, ref: vue.ref };
      Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
      return __returned__;
    }
  };
  function _sfc_render$6(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_z_paging = resolveEasycom(vue.resolveDynamicComponent("z-paging"), __easycom_0);
    return vue.openBlock(), vue.createElementBlock("view", { class: "contentIndex" }, [
      vue.createCommentVNode(" 头部分类 "),
      vue.createElementVNode("view", null, [
        vue.createElementVNode("view", { class: "scrollView" }, [
          vue.createElementVNode("scroll-view", {
            "scroll-x": "",
            class: "scroll",
            "show-scrollbar": false
          }, [
            (vue.openBlock(true), vue.createElementBlock(
              vue.Fragment,
              null,
              vue.renderList($setup.navs, (item, index) => {
                return vue.openBlock(), vue.createElementBlock("view", {
                  class: vue.normalizeClass(["item", $setup.state.from.type == item.type_id ? "active" : ""]),
                  key: index,
                  onClick: ($event) => $setup.changeType(item)
                }, vue.toDisplayString(item.type_name), 11, ["onClick"]);
              }),
              128
              /* KEYED_FRAGMENT */
            ))
          ])
        ]),
        vue.createElementVNode("view", { class: "scrollView" }, [
          vue.createElementVNode("scroll-view", {
            "scroll-x": "",
            class: "scroll",
            "show-scrollbar": false
          }, [
            (vue.openBlock(true), vue.createElementBlock(
              vue.Fragment,
              null,
              vue.renderList($setup.state.navs1, (item, index) => {
                return vue.openBlock(), vue.createElementBlock("view", {
                  class: vue.normalizeClass(["item", $setup.state.from.type1 == item.type_id ? "active" : ""]),
                  key: index,
                  onClick: ($event) => $setup.changeType1(item)
                }, vue.toDisplayString(item.type_name), 11, ["onClick"]);
              }),
              128
              /* KEYED_FRAGMENT */
            ))
          ])
        ])
      ]),
      vue.createVNode(_component_z_paging, {
        ref: "paging",
        modelValue: $setup.state.activeVideos,
        "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $setup.state.activeVideos = $event),
        onQuery: $setup.initVideo,
        "auto-show-back-to-top": "",
        fixed: false
      }, {
        default: vue.withCtx(() => [
          vue.createCommentVNode(" 视频详情 "),
          vue.createElementVNode("view", { class: "mainBox" }, [
            (vue.openBlock(true), vue.createElementBlock(
              vue.Fragment,
              null,
              vue.renderList($setup.state.activeVideos, (item, index) => {
                return vue.openBlock(), vue.createElementBlock("view", {
                  class: "item",
                  onClick: ($event) => $setup.goVideo(item)
                }, [
                  vue.createElementVNode("image", {
                    src: item.vod_pic,
                    type: "image/webp",
                    webp: "",
                    class: "image",
                    mode: "aspectFill"
                  }, null, 8, ["src"]),
                  vue.createElementVNode(
                    "view",
                    { class: "title" },
                    vue.toDisplayString(item.vod_name),
                    1
                    /* TEXT */
                  ),
                  vue.createElementVNode(
                    "view",
                    {
                      class: "msg",
                      style: { "margin-top": "8rpx" }
                    },
                    vue.toDisplayString(item.vod_remarks),
                    1
                    /* TEXT */
                  )
                ], 8, ["onClick"]);
              }),
              256
              /* UNKEYED_FRAGMENT */
            ))
          ])
        ]),
        _: 1
        /* STABLE */
      }, 8, ["modelValue"])
    ]);
  }
  const Model2 = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["render", _sfc_render$6], ["__scopeId", "data-v-29626f3b"], ["__file", "E:/dome/music/pages/video/model/model2.vue"]]);
  const _sfc_main$6 = {
    __name: "model3",
    emits: ["playList"],
    setup(__props, { expose: __expose, emit: __emit }) {
      __expose();
      const emit = __emit;
      const paging = vue.ref(null);
      const state = vue.reactive({
        from: {
          title: "",
          videoTypeId: ""
        },
        list: [],
        activeVideos: []
      });
      function initVideo(pagenum) {
        videoList(pagenum).then((res) => {
          formatAppLog("log", "at pages/video/model/model3.vue:35", res);
          paging.value.complete(res);
        }).catch((res) => {
          paging.value.complete(false);
        });
      }
      function goVideo(item) {
        emit("playList", item);
      }
      const __returned__ = { emit, paging, state, initVideo, goVideo, get videoList() {
        return videoList;
      }, reactive: vue.reactive, ref: vue.ref };
      Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
      return __returned__;
    }
  };
  function _sfc_render$5(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_z_paging = resolveEasycom(vue.resolveDynamicComponent("z-paging"), __easycom_0);
    return vue.openBlock(), vue.createElementBlock("view", { class: "main" }, [
      vue.createVNode(_component_z_paging, {
        ref: "paging",
        modelValue: $setup.state.activeVideos,
        "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $setup.state.activeVideos = $event),
        onQuery: $setup.initVideo,
        "auto-show-back-to-top": "",
        fixed: false
      }, {
        default: vue.withCtx(() => [
          vue.createCommentVNode(" 视频详情 "),
          vue.createElementVNode("view", { class: "mainBox" }, [
            (vue.openBlock(true), vue.createElementBlock(
              vue.Fragment,
              null,
              vue.renderList($setup.state.activeVideos, (item, index) => {
                return vue.openBlock(), vue.createElementBlock("view", {
                  class: "item",
                  onClick: ($event) => $setup.goVideo(item)
                }, [
                  vue.createElementVNode("image", {
                    src: item.vod_pic,
                    type: "image/webp",
                    webp: "",
                    class: "image",
                    mode: "aspectFill"
                  }, null, 8, ["src"]),
                  vue.createElementVNode(
                    "view",
                    { class: "tag" },
                    vue.toDisplayString(item.type_name),
                    1
                    /* TEXT */
                  ),
                  vue.createElementVNode(
                    "view",
                    { class: "title" },
                    vue.toDisplayString(item.vod_name),
                    1
                    /* TEXT */
                  ),
                  vue.createElementVNode(
                    "view",
                    {
                      class: "msg",
                      style: { "margin-top": "8rpx" }
                    },
                    vue.toDisplayString(item.vod_remarks),
                    1
                    /* TEXT */
                  )
                ], 8, ["onClick"]);
              }),
              256
              /* UNKEYED_FRAGMENT */
            ))
          ])
        ]),
        _: 1
        /* STABLE */
      }, 8, ["modelValue"])
    ]);
  }
  const Model3 = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["render", _sfc_render$5], ["__scopeId", "data-v-b55c5819"], ["__file", "E:/dome/music/pages/video/model/model3.vue"]]);
  const _sfc_main$5 = {
    __name: "header",
    props: {
      "modelValue": {},
      "modelModifiers": {}
    },
    emits: ["update:modelValue"],
    setup(__props, { expose: __expose }) {
      __expose();
      const model = vue.useModel(__props, "modelValue");
      const navs2 = [
        { name: "搜索", id: 0 },
        { name: "分类", id: 1 },
        { name: "短剧", id: 2 }
      ];
      const __returned__ = { model, navs: navs2 };
      Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
      return __returned__;
    }
  };
  function _sfc_render$4(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "header" }, [
      vue.createElementVNode("view", { class: "status_bar" }),
      vue.createElementVNode("view", { class: "navs" }, [
        (vue.openBlock(), vue.createElementBlock(
          vue.Fragment,
          null,
          vue.renderList($setup.navs, (item) => {
            return vue.createElementVNode("view", {
              key: item.id,
              class: vue.normalizeClass(["item", { active: $setup.model === item.id }]),
              onClick: ($event) => $setup.model = item.id
            }, vue.toDisplayString(item.name), 11, ["onClick"]);
          }),
          64
          /* STABLE_FRAGMENT */
        ))
      ])
    ]);
  }
  const Header = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["render", _sfc_render$4], ["__scopeId", "data-v-782ce70c"], ["__file", "E:/dome/music/pages/video/model/header.vue"]]);
  const _sfc_main$4 = {
    __name: "videoList",
    props: ["videoItem"],
    setup(__props, { expose: __expose }) {
      __expose();
      const state = vue.reactive({
        show: false,
        videoType: 2,
        current: 0,
        jiIndex: 0
      });
      const props = __props;
      const videoList2 = vue.computed(() => {
        return props.videoItem.vod_play_url_video[state.current];
      });
      vue.watch(() => props.videoItem, (newValue, oldValue) => {
        formatAppLog("log", "at pages/video/model/videoList.vue:44", props.videoItem);
        if (props.videoItem.type_name == "电视剧" || props.videoItem.type_name == "国产剧" || props.videoItem.type_id_1 == 2) {
          state.videoType = 1;
        } else {
          state.videoType = 2;
        }
        state.show = true;
      });
      function getVideoItem(e, i) {
        formatAppLog("log", "at pages/video/model/videoList.vue:58", e);
        state.jiIndex = i;
        const videoList3 = {
          url: e.url,
          title: props.videoItem.vod_name + e.title,
          poster: props.videoItem.vod_pic
        };
        uni.setStorage({
          key: "videoList",
          data: videoList3,
          success() {
            uni.navigateTo({
              url: "/pages/video/videoPlay"
            });
          }
        });
      }
      const __returned__ = { state, props, videoList: videoList2, getVideoItem, watch: vue.watch, reactive: vue.reactive, computed: vue.computed };
      Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
      return __returned__;
    }
  };
  function _sfc_render$3(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_wd_action_sheet = resolveEasycom(vue.resolveDynamicComponent("wd-action-sheet"), __easycom_0$3);
    return vue.openBlock(), vue.createElementBlock("view", null, [
      vue.createVNode(_component_wd_action_sheet, {
        modelValue: $setup.state.show,
        "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $setup.state.show = $event)
      }, {
        default: vue.withCtx(() => [
          vue.createElementVNode("view", { style: { "padding": "24rpx", "line-height": "1.5" } }, "选集"),
          vue.createElementVNode("scroll-view", {
            class: "scrollY",
            "scroll-y": "true"
          }, [
            vue.createCommentVNode(" 电视剧 "),
            $setup.state.videoType == 1 ? (vue.openBlock(), vue.createElementBlock("view", {
              key: 0,
              class: "actives actives2"
            }, [
              (vue.openBlock(true), vue.createElementBlock(
                vue.Fragment,
                null,
                vue.renderList($setup.videoList, (item, index) => {
                  return vue.openBlock(), vue.createElementBlock("view", {
                    class: vue.normalizeClass(["item", $setup.state.jiIndex == index ? "active" : ""]),
                    key: index,
                    onClick: ($event) => $setup.getVideoItem(item, index)
                  }, vue.toDisplayString(index + 1), 11, ["onClick"]);
                }),
                128
                /* KEYED_FRAGMENT */
              ))
            ])) : (vue.openBlock(), vue.createElementBlock(
              vue.Fragment,
              { key: 1 },
              [
                vue.createCommentVNode(" 正常 "),
                vue.createElementVNode("view", { class: "actives" }, [
                  (vue.openBlock(true), vue.createElementBlock(
                    vue.Fragment,
                    null,
                    vue.renderList($setup.videoList, (item, index) => {
                      return vue.openBlock(), vue.createElementBlock("view", {
                        class: vue.normalizeClass(["item", $setup.state.jiIndex == index ? "active" : ""]),
                        key: index,
                        onClick: ($event) => $setup.getVideoItem(item, index)
                      }, vue.toDisplayString(item.title), 11, ["onClick"]);
                    }),
                    128
                    /* KEYED_FRAGMENT */
                  ))
                ])
              ],
              2112
              /* STABLE_FRAGMENT, DEV_ROOT_FRAGMENT */
            ))
          ])
        ]),
        _: 1
        /* STABLE */
      }, 8, ["modelValue"])
    ]);
  }
  const VideoList = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["render", _sfc_render$3], ["__scopeId", "data-v-b5b62ede"], ["__file", "E:/dome/music/pages/video/model/videoList.vue"]]);
  const _sfc_main$3 = {
    __name: "video",
    setup(__props, { expose: __expose }) {
      __expose();
      const state = vue.reactive({
        navIndex: 0,
        videoItem: []
      });
      const playList = (e) => {
        state.videoItem = e;
      };
      const __returned__ = { state, playList, reactive: vue.reactive, Model1, Model2, Model3, Header, VideoList };
      Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
      return __returned__;
    }
  };
  function _sfc_render$2(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "video" }, [
      vue.createVNode($setup["Header"], {
        modelValue: $setup.state.navIndex,
        "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $setup.state.navIndex = $event)
      }, null, 8, ["modelValue"]),
      $setup.state.navIndex == 0 ? (vue.openBlock(), vue.createBlock($setup["Model1"], {
        key: 0,
        onPlayList: $setup.playList
      })) : vue.createCommentVNode("v-if", true),
      $setup.state.navIndex == 1 ? (vue.openBlock(), vue.createBlock($setup["Model2"], {
        key: 1,
        onPlayList: $setup.playList
      })) : vue.createCommentVNode("v-if", true),
      $setup.state.navIndex == 2 ? (vue.openBlock(), vue.createBlock($setup["Model3"], {
        key: 2,
        onPlayList: $setup.playList
      })) : vue.createCommentVNode("v-if", true),
      vue.createVNode($setup["VideoList"], {
        videoItem: $setup.state.videoItem
      }, null, 8, ["videoItem"])
    ]);
  }
  const PagesVideoVideo = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["render", _sfc_render$2], ["__file", "E:/dome/music/pages/video/video.vue"]]);
  const _sfc_main$2 = {
    __name: "videoPlay",
    setup(__props, { expose: __expose }) {
      __expose();
      const src = vue.ref("");
      onUnload(() => {
        plus.screen.lockOrientation("portrait-primary");
      });
      onLoad(() => {
        const videoItem = uni.getStorageSync("videoList");
        src.value = `/hybrid/html/index.html?url=${videoItem.url}&title=${videoItem.title}&poster=${videoItem.poster}`;
        formatAppLog("log", "at pages/video/videoPlay.vue:22", src.value);
        uni.setNavigationBarTitle({
          title: videoItem.title
        });
      });
      function fullscreenchange(e) {
        const fullScreen = e.detail.data[0].isFullscreen;
        if (fullScreen == 1) {
          plus.screen.lockOrientation("landscape-primary");
        } else {
          plus.screen.lockOrientation("portrait-primary");
        }
      }
      const __returned__ = { src, fullscreenchange, ref: vue.ref, get onLoad() {
        return onLoad;
      }, get onUnload() {
        return onUnload;
      } };
      Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
      return __returned__;
    }
  };
  function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "box" }, [
      vue.createElementVNode("web-view", {
        src: $setup.src,
        class: "video",
        onMessage: $setup.fullscreenchange
      }, null, 40, ["src"])
    ]);
  }
  const PagesVideoVideoPlay = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["render", _sfc_render$1], ["__file", "E:/dome/music/pages/video/videoPlay.vue"]]);
  const _imports_0 = "/static/my/wd.png";
  const _imports_1 = "/static/my/people/icon1.png";
  const _imports_2 = "/static/my/people/icon.png";
  const _imports_3 = "/static/my/people/icon2.png";
  const _imports_4 = "/static/my/people/icon3.png";
  const _imports_5 = "/static/my/people/icon4.png";
  const _imports_6 = "/static/my/people/bg.png";
  const _sfc_main$1 = {
    onHide() {
      uni.hideLoading();
    },
    data() {
      return {
        show: false,
        searchValue: "",
        version: 0
      };
    },
    onLoad() {
      const info = uni.getSystemInfoSync();
      this.version = info.appVersion;
    },
    methods: {
      goUrl(index) {
      }
    }
  };
  function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_u__input = vue.resolveComponent("u--input");
    const _component_u_modal = vue.resolveComponent("u-modal");
    return vue.openBlock(), vue.createElementBlock("view", { class: "content" }, [
      vue.createElementVNode("image", {
        src: _imports_0,
        class: "topImg"
      }),
      vue.createElementVNode("view", { class: "box" }, [
        vue.createElementVNode("view", { class: "top" }, [
          vue.createElementVNode("view", { class: "logo" }),
          vue.createElementVNode("view", null, [
            vue.createElementVNode("view", { class: "title" }, "梭影TV"),
            vue.createElementVNode(
              "view",
              { class: "text" },
              "V" + vue.toDisplayString($data.version),
              1
              /* TEXT */
            )
          ])
        ]),
        vue.createElementVNode("view", { class: "text" }, "梭影TV是一个可以观看任何FF视频的软件，你们大家都懂的哦！")
      ]),
      vue.createElementVNode("view", { class: "grid" }, [
        vue.createElementVNode("view", {
          class: "item",
          onClick: _cache[0] || (_cache[0] = ($event) => $options.goUrl(1))
        }, [
          vue.createElementVNode("view", { class: "top" }, [
            vue.createElementVNode("image", {
              src: _imports_1,
              class: "icon"
            }),
            vue.createElementVNode("image", {
              src: _imports_2,
              class: "icon"
            })
          ]),
          vue.createElementVNode("view", { class: "title" }, "我的收藏"),
          vue.createElementVNode("view", { class: "text" }, "你喜欢的都在这里呢")
        ]),
        vue.createElementVNode("view", {
          class: "item",
          onClick: _cache[1] || (_cache[1] = ($event) => $options.goUrl(2))
        }, [
          vue.createElementVNode("view", { class: "top" }, [
            vue.createElementVNode("image", {
              src: _imports_3,
              class: "icon"
            }),
            vue.createElementVNode("image", {
              src: _imports_2,
              class: "icon"
            })
          ]),
          vue.createElementVNode("view", { class: "title" }, "高级搜索"),
          vue.createElementVNode("view", { class: "text" }, "只有正确指令可以使用")
        ]),
        vue.createElementVNode("view", {
          class: "item",
          onClick: _cache[2] || (_cache[2] = ($event) => $options.goUrl(3))
        }, [
          vue.createElementVNode("view", { class: "top" }, [
            vue.createElementVNode("image", {
              src: _imports_4,
              class: "icon"
            }),
            vue.createElementVNode("image", {
              src: _imports_2,
              class: "icon"
            })
          ]),
          vue.createElementVNode("view", { class: "title" }, "用户说"),
          vue.createElementVNode("view", { class: "text" }, "求片/反馈/防丢失")
        ]),
        vue.createElementVNode("view", {
          class: "item",
          onClick: _cache[3] || (_cache[3] = ($event) => $options.goUrl(4))
        }, [
          vue.createElementVNode("view", { class: "top" }, [
            vue.createElementVNode("image", {
              src: _imports_5,
              class: "icon"
            }),
            vue.createElementVNode("image", {
              src: _imports_2,
              class: "icon"
            })
          ]),
          vue.createElementVNode("view", { class: "title" }, "特别鸣谢"),
          vue.createElementVNode("view", { class: "text" }, "请我喝杯茶")
        ])
      ]),
      vue.createElementVNode("view", { class: "bottom" }, [
        vue.createElementVNode("image", {
          src: _imports_6,
          class: "logo"
        })
      ]),
      vue.createVNode(_component_u_modal, {
        show: $data.show,
        title: "请输入口令",
        onConfirm: _ctx.confirm
      }, {
        default: vue.withCtx(() => [
          vue.createVNode(_component_u__input, {
            placeholder: "获取口令请加vx 962398309",
            border: "bottom",
            modelValue: $data.searchValue,
            "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => $data.searchValue = $event),
            style: { "width": "100%" },
            type: "password"
          }, null, 8, ["modelValue"])
        ]),
        _: 1
        /* STABLE */
      }, 8, ["show", "onConfirm"])
    ]);
  }
  const PagesMyMy = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render], ["__scopeId", "data-v-2f1ef635"], ["__file", "E:/dome/music/pages/my/my.vue"]]);
  __definePage("pages/music/music", PagesMusicMusic);
  __definePage("pages/video/video", PagesVideoVideo);
  __definePage("pages/video/videoPlay", PagesVideoVideoPlay);
  __definePage("pages/my/my", PagesMyMy);
  const _sfc_main = {
    onLaunch: function() {
    },
    onShow: function() {
    },
    onHide: function() {
    }
  };
  const App = /* @__PURE__ */ _export_sfc(_sfc_main, [["__file", "E:/dome/music/App.vue"]]);
  function createApp() {
    const app = vue.createVueApp(App);
    return {
      app
    };
  }
  const { app: __app__, Vuex: __Vuex__, Pinia: __Pinia__ } = createApp();
  uni.Vuex = __Vuex__;
  uni.Pinia = __Pinia__;
  __app__.provide("__globalStyles", __uniConfig.styles);
  __app__._component.mpType = "app";
  __app__._component.render = () => {
  };
  __app__.mount("#app");
})(Vue);
