/**
 * 将歌词数组转换为LRC格式字符串
 * @param {Array} lyricsArray - 歌词数组，包含lineLyric和time属性
 * @param {Object} options - 配置选项
 * @param {boolean} options.padZero - 是否补零，默认true
 * @param {number} options.decimalPlaces - 小数位数，默认2
 * @returns {string} LRC格式的字符串
 */
export function convertToLRC(lyricsArray, options = {}) {
  const {
    padZero = true,
    decimalPlaces = 2
  } = options;

  // 验证输入
  if (!Array.isArray(lyricsArray)) {
    throw new Error('输入必须是一个数组');
  }

  if (lyricsArray.length === 0) {
    return '';
  }

  // 处理每行歌词
  const lrcLines = lyricsArray.map(item => {
    // 验证必需字段
    if (!item.lineLyric || item.time === undefined) {
      console.warn('跳过无效的歌词项:', item);
      return null;
    }

    const time = parseFloat(item.time);
    if (isNaN(time)) {
      console.warn('跳过时间格式错误的歌词项:', item);
      return null;
    }

    // 转换时间为LRC格式 [mm:ss.xx]
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;

    let timeString;
    if (padZero) {
      // 补零格式：分钟至少2位，秒数至少2位
      const minStr = String(minutes).padStart(2, '0');
      const secStr = seconds.toFixed(decimalPlaces).padStart(5, '0');
      timeString = `[${minStr}:${secStr}]`;
    } else {
      // 不补零格式
      const secStr = seconds.toFixed(decimalPlaces);
      timeString = `[${minutes}:${secStr}]`;
    }

    return `${timeString}${item.lineLyric}`;
  }).filter(line => line !== null); // 过滤掉无效项

  return lrcLines.join('\r\n');
}

/**
 * 从LRC格式字符串解析为歌词数组
 * @param {string} lrcString - LRC格式字符串
 * @returns {Array} 歌词数组
 */
export function parseFromLRC(lrcString) {
  if (typeof lrcString !== 'string') {
    throw new Error('输入必须是一个字符串');
  }

  const lines = lrcString.split('\n');
  const result = [];

  // LRC时间戳正则表达式：匹配 [mm:ss.xx] 格式
  const timeRegex = /\[(\d+):(\d+\.?\d*)\]/;

  lines.forEach(line => {
    const match = line.match(timeRegex);

    if (match) {
      const minutes = parseInt(match[1]);
      const seconds = parseFloat(match[2]);
      const totalTime = minutes * 60 + seconds;

      // 获取歌词内容（去掉时间戳部分）
      const lyric = line.replace(timeRegex, '').trim();

      if (lyric) {
        result.push({
          lineLyric: lyric,
          time: totalTime.toFixed(2)
        });
      }
    }
  });

  // 按时间排序
  return result.sort((a, b) => parseFloat(a.time) - parseFloat(b.time));
}
