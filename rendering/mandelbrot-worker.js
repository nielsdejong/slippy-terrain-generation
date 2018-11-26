
onmessage = function(e) {
    importScripts( 'perlin/perlin.js');
    noise.seed(2);
    var tileCount = 1 << e.data.zoom;
    var yMin = e.data.row / tileCount;
    var yMax = (e.data.row + 1) / tileCount;
    var xMin = e.data.column / tileCount;
    var xMax = (e.data.column + 1) / tileCount;
    var step = (xMax - xMin) / 256.0;

     var data = e.data.data = [];
      for (var y = 0, i = 0; y < e.data.size.y; y++) {
        for (var x = 0; x < e.data.size.x; x++) {
            var value = doNoise(x,y, xMin, yMin, step, e.data.zoom + 8);
             data[i++] = 256 * (value + 1) / 2.0;
             data[i++] = 256 * (value + 1) / 2.0;
             data[i++] = 256 * (value + 1) / 2.0;
             data[i++] = 255;
            // data[i++] = (yMin + y * step) * 256.0 + Math.random() * 45;
            // data[i++] = (xMin + x * step) * 256.0 + Math.random() * 45;
            // data[i++] = 0;
            // data[i++] = 255;
        }
      }

  postMessage(e.data);
};

function doNoise(x, y, xMin, yMin, step, maxIterations) {
    var value = 0;
    for ( var i = 1; i <= maxIterations; i+=2 ){
        value += noise.simplex2(Math.pow(2, i) *(yMin + y * step), Math.pow(2, i) *(xMin + x * step)) / i;
    }
    return value;
}
