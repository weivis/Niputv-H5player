    function getFileName(path) {
        var index = path.lastIndexOf("\/");
        path = path.substring(index + 1, path.length);
        return path
    }
