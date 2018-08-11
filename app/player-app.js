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
