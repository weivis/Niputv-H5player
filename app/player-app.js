    function getFileName(path) {
        var index = path.lastIndexOf("\/");
        path = path.substring(index + 1, path.length);
        return path
    }
    function insert_video_sharpness(data) {
        if (data['type'] == true) {
            $("#video_sharpness_list").prepend('<div class="niputv-player-sharpness-poup a" data-sharpness="' + data[
                'calss'] + '">' + data['calss'] + '</div>')
        }
    }
    $('#video').on('waiting', function() {
       $(".niputv-player-popu.buffer").fadeIn()
    });
    $('#video').on('canplay', function() {
       $(".niputv-player-popu.buffer").fadeOut()
    });
    var getvideofile = $("#videokey").data("key")
    var videoptype_list = [{
            "calss": "360P",
            "type": getvideofile['360']
        },
        {
            "calss": "480P",
            "type": getvideofile['480']
        },
        {
            "calss": "720P",
            "type": getvideofile['720']
        },
        {
            "calss": "1080P",
            "type": getvideofile['1080']
        },
        {
            "calss": "2K",
            "type": getvideofile['2k']
        },
        {
            "calss": "4K",
            "type": getvideofile['4k']
        },
    ]
