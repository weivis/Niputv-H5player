# Niputv-H5player

- 播放器基于
- <div data-key='{"key": "2.mp4", "360": true, "480": true, "720": true, "1080": true, "2k": false, "4k": false}' id="videokey"></div>
- 这一句调用播放参数 key = 播放地址 360 480 720 1080 true = 有该清晰度 false = 没有
- 播放器规则 = key.mp4 + 360p / 480p /720P (对应视频清晰度后缀 切换用)

# 使用方法

- 引入jq
<script type="text/javascript" src="jquery.min.js"></script>

- 插入一个playerdiv生成video播放框
<div id="player"></div>

- 载入视频播放器插件
<script type="text/javascript" src="niputv-player.js" charset="utf-8"></script>

- 载入视频参数
<div data-key='{"key": "33eed67c3b8aff050e756e7b4574c32f011206.mp4", "360": true, "480": true, "720": true, "1080": true, "2k": false, "4k": false}' id="videokey"></div>