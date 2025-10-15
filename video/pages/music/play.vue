<template class="zp_zgk">
  <view class="zp_bjt">
    <view class="status_bar"></view>

    <view class="cs_znr" :style="{backgroundImage:'url(\''+ Picture+'\')'}">
      <view class="bj_hzz"></view>
    </view>
    <view class="ts_fhf clear" :style="{ 'height': TabBarHeight + 'rpx'}">

    </view>

    <view class="yp_xnr">
      <view class="sb_xyq">
        <text class="qq_dyq"></text>
        <text class="qs_deq"></text>
        <image :src="Picture" alt="" class="zq_xtb"></image>
        <image @click="FanBeiAutoplay()"
               :src="autoplay==true?'/static/ns_img/yp_tzhi.png':'/static/ns_img/yp_ztn.png'" alt=""
               class="yp_ztn"></image>
      </view>
    </view>
    <!-- 音频内容 -->
    <view class="yp_xnr">
      <view class="bf_xgc">
        <text class="fb_dmc">{{ MusicName }}</text>
        <text class="cs_mzs">{{ Name }}</text>
        <view class="gc_ksl">
          <scroll-view class="scrollLyrics" scroll-y="true">
            <view id="MusicLyrics" class="MusicLyrics" ref="MusicLyrics" :style="{'margin-top': top+'rpx'}">
              <text class="gc_xmc" v-for="item in Lyric" :ref="'TimeSlot'+item.TimeSlot"
                    :class="['TimeSlot'+item.TimeSlot,item.TimeSlot === CurrentLocation ? 'Location' : '']"
                    :key="item.TimeSlot">{{ item.Text }}
              </text>
            </view>
          </scroll-view>
        </view>
        <view class="xb_bfz">
          <view class="jg_jdw">
            <slider :value="Progress" @change="sliderChange" block-size="12" step="1"/>
          </view>
        </view>
      </view>
    </view>
    <!-- 音频内容 -->
  </view>
</template>
<script>
import {getlyric, videoItem} from "@/pages/music/server";
import {convertToLRC} from "@/pages/music/convertToLRC";

const audioContext = uni.createInnerAudioContext();
audioContext.autoplay = false;
export default {
  data() {
    return {
      burl: 'https://img2.kuwo.cn/star/albumcover/',
      SlideTop: 0,
      top: 150,
      Progress: 0,
      FirstTimeUpdate: true, //第一次播放
      FirstPlay: true, //第一次播放
      CurrentLocation: 0, //当前行数标志
      LyricHeight: 0, //歌词总高度
      MusicName: "", //名称
      Name: "",
      MP3: '', //音乐链接
      Picture: "", //图片
      autoplay: false,
      LastLine: false, //歌词播放到最后一行
      Lyric: [], //歌词
      detailData: '', //数据源
      BarHeight: 0,
      TabBarHeight: 0
    }
  },
  onLoad(options) {
    this.BarHeight = uni.getSystemInfoSync().statusBarHeight;
    this.TabBarHeight = uni.getSystemInfoSync().statusBarHeight + 144;
    this.GetDataTemple();
  },
  onUnload() {
    audioContext.pause();
    this.autoplay = !this.autoplay;
    this.Progress = 0;
    this.top = 150;
    this.LastLine = false;
    this.CurrentLocation = this.Lyric[0].TimeSlot;
    audioContext.seek(0);

  },
  methods: {
    Back() {
      audioContext.pause();
      this.autoplay = !this.autoplay;
      this.Progress = 0;
      this.top = 150;
      this.LastLine = false;
      this.CurrentLocation = this.Lyric[0].TimeSlot;
      audioContext.seek(0);

      uni.navigateBack({
        delta: 1
      });
    },
    FanBeiAutoplay() {
      if (this.FirstPlay) {
        //只能用户点击之后 才能回去获取高度
        this.allLyricHeight();
        this.FirstPlay = false;
        this.FirstTimeUpdate = false;
      }
      if (!this.autoplay) {
        audioContext.play();
      } else {
        audioContext.pause();
      }
      this.autoplay = !this.autoplay;
    },
    NewAudio() {
      audioContext.autoplay = this.autoplay;
      audioContext.src = this.MP3;
      //音频播放事件
      audioContext.onPlay(() => {
        // console.log(audioContext.duration);
      });
      //音频暂停事件
      audioContext.onPause(() => {
        //console.log(audioContext.currentTime);
      });
      //音频停止事件
      audioContext.onStop(() => {
        //console.log(audioContext.currentTime);
      });

      //音频自然播放结束事件
      audioContext.onEnded(() => {

        //初始化状态
        this.autoplay = !this.autoplay;
        this.Progress = 0;
        this.top = 150;
        this.LastLine = false;
        this.CurrentLocation = this.Lyric[0].TimeSlot;
        audioContext.seek(0);
      });
      audioContext.onTimeUpdate(() => {

        var duration = audioContext.duration; //当前播放时间
        var n = audioContext.currentTime / audioContext.duration; //进度比例
        this.Progress = parseInt(n * 100);
        var id_num = parseInt(audioContext.currentTime); //转int
        var lyric_p = this.Lyric; //获取歌
        var HeiTop = 150;

        //播放到最后一行就不计入循环
        if (!this.LastLine) {
          for (var i = 0; i < lyric_p.length; i++) {
            //正常播放
            if (id_num == lyric_p[i].TimeSlot) {
              this.CurrentLocation = lyric_p[i].TimeSlot;
              if (i != 0) {
                for (var k = 0; k < i; k++) {
                  if (parseInt(lyric_p[k].height) > 0) {
                    HeiTop = HeiTop - (parseInt(lyric_p[k].height) * 2);
                  }
                }
              }
              if (i == lyric_p.length - 1) {
                this.LastLine = true;
              }
              break;
              //没有找到位置的时候 或者拉拽进度的时候
            } else if (id_num < lyric_p[i].TimeSlot) {
              if (i != 0) {
                this.CurrentLocation = lyric_p[i - 1].TimeSlot;
                var tei = i - 1;
                if (tei > 0) {
                  for (var k = 0; k < tei; k++) {
                    if (parseInt(lyric_p[k].height) > 0) {
                      HeiTop = HeiTop - (parseInt(lyric_p[k].height) * 2);
                    }
                  }
                }
                break;
              }
            } else {
              //重后一条歌词保持状态
              if (id_num > lyric_p[lyric_p.length - 1].TimeSlot) {
                HeiTop = 150
                this.CurrentLocation = lyric_p[lyric_p.length - 1].TimeSlot;
                for (var k = 0; k < lyric_p.length - 1; k++) {
                  if (parseInt(lyric_p[k].height) > 0) {
                    HeiTop = HeiTop - (parseInt(lyric_p[k].height) * 2);
                  }
                }
                this.LastLine = true;
              }
            }
          }
          this.top = HeiTop;
        }

      });

      //错误事件
      audioContext.onError((res) => {
        console.log(res);
      });

    },
    //改变播放进度
    sliderChange(e) {
      if (this.FirstPlay) {
        //只能用户点击之后 才能回去获取高度
        this.allLyricHeight();
        this.FirstPlay = false;
      }
      this.LastLine = false;
      audioContext.seek(parseInt(audioContext.duration * e.detail.value / 100));

      //第一次加载缓存
      if (this.FirstTimeUpdate) {
        this.FirstTimeUpdate = false;
        setTimeout(() => {
          this.TimeUpdate();
        }, 500);
      } else {
        this.TimeUpdate();
      }
    },
    TimeUpdate() {
      var duration = audioContext.duration; //当前播放时间
      var n = audioContext.currentTime / audioContext.duration; //进度比例
      this.Progress = parseInt(n * 100);
      var id_num = parseInt(audioContext.currentTime); //转int
      var lyric_p = this.Lyric; //获取歌
      var HeiTop = 150;


      //播放到最后一行就不计入循环
      if (!this.LastLine) {
        for (var i = 0; i < lyric_p.length; i++) {
          //正常播放
          if (id_num == lyric_p[i].TimeSlot) {
            this.CurrentLocation = lyric_p[i].TimeSlot;
            if (i != 0) {
              for (var k = 0; k < i; k++) {
                if (parseInt(lyric_p[k].height) > 0) {
                  HeiTop = HeiTop - (parseInt(lyric_p[k].height) * 2);
                }
              }
            }
            if (i == lyric_p.length - 1) {
              this.LastLine = true;
            }
            break;
            //没有找到位置的时候 或者拉拽进度的时候
          } else if (id_num < lyric_p[i].TimeSlot) {
            if (i != 0) {
              this.CurrentLocation = lyric_p[i - 1].TimeSlot;
              var tei = i - 1;
              if (tei > 0) {
                for (var k = 0; k < tei; k++) {
                  if (parseInt(lyric_p[k].height) > 0) {
                    HeiTop = HeiTop - (parseInt(lyric_p[k].height) * 2);
                  }
                }
              }
              break;
            }
          } else {
            //重后一条歌词保持状态
            if (id_num > lyric_p[lyric_p.length - 1].TimeSlot) {
              HeiTop = 150
              this.CurrentLocation = lyric_p[lyric_p.length - 1].TimeSlot;
              for (var k = 0; k < lyric_p.length - 1; k++) {
                if (parseInt(lyric_p[k].height) > 0) {
                  HeiTop = HeiTop - (parseInt(lyric_p[k].height) * 2);
                }
              }
              this.LastLine = true;
            }
          }
        }
        this.top = HeiTop;
      }
    },
    //加载歌词
    get_lyric() {
      var lyricObj = this.detailData;
      if (lyricObj == "") {
        return;
      }
      var temp = lyricObj.split("[");
      var html = "";
      var dqCurrentLocation = 0
      for (var i = 0; i < temp.length; i++) {
        var arr = temp[i].split("]");
        var text = (arr[1]);
        var time = arr[0].split(",");
        var temp2 = time[0].split(".");
        var ms = temp2[1]; //毫秒
        var temp3 = temp2[0].split(":");
        var s = temp3[1]; //秒
        var m = temp3[0]; //分
        var s_sum = parseInt(m * 60) + parseInt(s);

        if (text) {
          if (dqCurrentLocation == 0) {
            this.CurrentLocation = s_sum;
            dqCurrentLocation = 1;
          }
          let item = {
            height: 0,
            TimeSlot: s_sum,
            Text: text.replace('\r', '').replace('\n', '')
          }
          this.Lyric.push(item);
        }
        //console.log(JSON.stringify(this.Lyric));
      }

      return;
    },
    //加载每一行高度
    allLyricHeight() {
      var _THth = this;
      //获取元素内联样式值
      let info = uni.createSelectorQuery();
      info.select(".MusicLyrics").boundingClientRect(function (data) { //data - 各种参数
        _THth.LyricHeight = data.height;
      }).exec();


      var query = uni.createSelectorQuery().in(this);
      query.selectAll(".gc_xmc").boundingClientRect(function (data) {
        for (var i = 0; i < data.length; i++) {
          _THth.Lyric[i].height = data[i].height;
          // console.log(JSON.stringify(data[i].height));
        }
      }).exec();
    },
    GetDataTemple: async function () {
      const music = uni.getStorageSync('music')
      console.log(music);
      this.Name = music.ARTIST;
      this.MusicName = music.NAME;
      this.Picture = "/static/111.jpg";
      const res = await videoItem({rid: music.DC_TARGETID})
      this.MP3 = res.url;
      const res2 = await getlyric({rid: music.DC_TARGETID})
      this.detailData = convertToLRC(res2.data.lrclist);
      this.get_lyric();
      this.NewAudio();
      return;
    }
  }

}
</script>
<style>
page {
  width: 100%;
  height: 100%;
}

.status_bar {
  top: 0;
  z-index: 10;
  width: 100%;
  /*  #ifdef  APP-PLUS  */
  height: var(--status-bar-height);
  /*  #endif  */
}


.zp_zgk {
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
}

.zp_bjt {
  width: 100%;
  height: 100%;
  overflow: hidden;
  position: absolute;
  top: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
}

.cs_znr {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  background-size: 100% 100%;
  filter: blur(80rpx);
}

.zf_bst {
  display: block;
  width: 43rpx;
  height: 43rpx;
}

.bf_nrg {
  position: absolute;
  right: 40rpx;
  top: 70rpx;
}

/* 音频内容 */
.yp_xnr {
  padding: 60rpx 40rpx;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}

.zq_xtb {
  display: block;
  width: 296rpx;
  height: 296rpx;
  border-radius: 50%;
}

.sb_xyq {
  position: relative;
}

.qq_dyq {
  display: block;
  width: 338rpx;
  height: 338rpx;
  border: 2rpx solid #ffffff;
  position: absolute;
  left: -21rpx;
  top: -21rpx;
  border-radius: 50%;
  opacity: 0.4;
}

.qs_deq {
  display: block;
  width: 380rpx;
  height: 380rpx;
  border: 2rpx solid #ffffff;
  position: absolute;
  left: -42rpx;
  top: -42rpx;
  border-radius: 50%;
  opacity: 0.4;
}

.yp_ztn {
  display: block;
  width: 43rpx;
  height: 45rpx;
  position: absolute;
  left: 50%;
  top: 50%;
  margin-top: -22rpx;
  margin-left: -22rpx;
}

.bf_xgc {
  width: 100%;
  z-index: 99;
}

.fb_dmc {
  display: block;
  font-size: 42rpx;
  line-height: 56rpx;
  color: #ffffff;
  text-align: center;
  font-weight: bold;
  margin-bottom: 20rpx;
}

.cs_mzs {
  display: block;
  font-size: 32rpx;
  color: #ffffff;
  text-align: center;
  margin-bottom: 20rpx;
}

.gc_xmc {
  display: block;
  font-size: 30rpx;
  color: #ffffff;
  text-align: center;
  padding-bottom: 20rpx;
}

.gc_ksl {
  max-height: 400rpx;
  overflow: hidden;
}

#MusicLyrics {
  margin-bottom: 260rpx;

  transition-property: margin;
  transition-duration: 0.4s;
  /* Firefox 4 */
  -moz-transition-property: margin;
  -moz-transition-duration: 0.4s;
  /* Safari and Chrome */
  -webkit-transition-property: margin;
  -webkit-transition-duration: 0.4s;
  /* Opera */
  -o-transition-property: margin;
  -o-transition-duration: 0.4s;
}

.xb_bfz {
  position: fixed;
  bottom: 100rpx;
  width: calc(100% - 80rpx);
}

.st_sxl {
  display: block;
  width: 100%;
  height: 2rpx;
  background: #ffffff;
  opacity: 0.4;
}

.jg_jdw {
  position: relative;
}

.ss_jdx {
  position: absolute;
  left: 0;
  top: 0;
  width: 40%;
  height: 2rpx;
  background: #ffffff;
}

.ss_jdx::after {
  content: '';
  width: 10rpx;
  height: 10rpx;
  background: #ffffff;
  border-radius: 50%;
  position: absolute;
  left: 100%;
  top: -5rpx;
}

/* 音频内容 */
.Location {
  color: #FF6D00;
  font-size: 36rpx;
}
</style>