export const handleCount = (count) => {
  return count > 10000 ? (count / 10000).toFixed(1) + '万' : count;
}

export const handleImgUrl = (url) => {
  return url ? url.replace('/600', '/300') : null;
}

export function handlePlaylist(listData, len) {
  if (listData.length <= len) return listData

  let total = listData.length;
  return listData.slice(0, len / 2).concat(listData.slice(total - len / 2, total));
}

const now = Date.now || function () {
  return new Date().getTime();
};

const later = function (fn, ms, context, data) {
  var f = function () {
    fn.apply(context, data);
  };
  var r = setTimeout(f, ms);

  return {
    id: r,
    cancel: function () {
      clearTimeout(r);
    }
  };
}

export const buffer = (fn, ms, context) => {
  var lastStart = 0;
  var lastEnd = 0;
  var timer = null;

  ms = ms || 150;
  const run = function () {
    if (timer) {
      timer.cancel();
      timer = 0;
    }
    lastStart = now();
    fn.apply(context || this, arguments);
    lastEnd = now();
  }
  return function () {
    if (!lastStart
      || lastEnd >= lastStart && now() - lastEnd > ms
      || lastEnd < lastStart && now() - lastStart > ms * 8
    ) {
      run.apply(context, arguments);
    } else {
      if (timer) {
        timer.cancel();
      }
      timer = later(run, ms, context, arguments);
    }
  };
};


const handleUrl = (url) => {
  // 正常的链接，则直接跳转
  if (/(http|ftp|https):\/\/[\w\-_]+(\.[\w\-_]+)+([\w\-\.,@?^=%&:/~\+#]*[\w\-\@?^=%&/~\+#])?/.test(url)) {
    return url;
  }
  // 本项目中的链接，则拼接
  const pos = location.pathname.lastIndexOf('/');
  const pathname = location.pathname.substring(0, pos + 1);
  return `${location.origin}${pathname}${url}`;
};

export const getUrlParams = () => {
  const obj = {};
  let str = location.search.substr(1);
  if (str) {
    const ary = str.split('&');
    ary.forEach((itemData) => {
      let tempAry = itemData.split('=');
      if (tempAry && tempAry.length) {
        obj[tempAry[0]] = tempAry[1];
      }
    });
  }
  return obj;
}
export const urlParams = getUrlParams();

export const obj2Str = (obj) => {
  if (obj && Object.keys(obj).length > 0) {
    const ary = [];
    for (let key in obj) {
      ary.push(`${key}=${obj[key] || ''}`);
    }
    return ary.join('&');
  }
  return;
}

export const handleDuration = d => {
  let seconds = Math.floor(d % 60);
  let minutes = Math.floor((d / 60) % 60);
  let hours = Math.floor((d / (60 * 60)) % 24);
  let days = Math.floor(d / (60 * 60 * 24))
  return `${hours ? hours + ':' : ''}${minutes < 10 ? '0' + minutes : minutes}:${seconds < 10 ? '0' + seconds : seconds}`;
}

export const formatTime = (timestamp, format) => {
  const time = new Date(timestamp);
  const date = {
    'M+': time.getMonth() + 1,
    'd+': time.getDate(),
    'h+': time.getHours(),
    'm+': time.getMinutes(),
    's+': time.getSeconds(),
    'q+': Math.floor((time.getMonth() + 3) / 3),
    'S+': time.getMilliseconds()
  };
  if (/(y+)/i.test(format)) {
    format = format.replace(RegExp.$1, (time.getFullYear() + '').substr(4 - RegExp.$1.length));
  }
  for (var k in date) {
    if (new RegExp('(' + k + ')').test(format)) {
      format = format.replace(RegExp.$1, RegExp.$1.length == 1
        ? date[k]
        : ('00' + date[k]).substr(('' + date[k]).length));
    }
  }
  return format;
}

export const stringifyObj = obj => {
  let str = '';
  if (obj instanceof Object) {
    Object.keys(obj).forEach(key => {
      if (typeof obj[key] === 'string' || typeof obj[key] === 'number') {
        str += `&${key}=${obj[key]}`;
      }
    });
    str = str.substr(1);
  }
  return str;
}
