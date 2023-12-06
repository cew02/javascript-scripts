function randomJavaScript() {
    var script = "";
    for (var i = 0; i <100; i++) {
        script += Math.random().toString(36).substring(7);
    }
    return script;
}