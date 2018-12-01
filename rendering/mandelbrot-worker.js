importScripts( 'perlin/perlin.js');
noise.seed( 501 );

onmessage = function(e) {
    var tileCount = 1 << e.data.zoom;
    var yMin = e.data.row / tileCount;
    var yMax = (e.data.row + 1) / tileCount;
    var xMin = e.data.column / tileCount;
    var xMax = (e.data.column + 1) / tileCount;
    var step = (xMax - xMin) / 256.0;

     var data = e.data.data = [];
      for (var y = 0, i = 0; y < e.data.size.y; y++) {
        for (var x = 0; x < e.data.size.x; x++) {
            var value = doNoise(x,y, xMin, yMin, step, 10);
            value = (value + 1 ) / 2.0;
            // Value is in a range from -1 to 1.

            if ( value < 0.5 ) {
                data[i++] = 64 * value;
                data[i++] = 64 * value;
                data[i++] = 255 * value;
                data[i++] = 255;
            }else if ( value < 0.55) {
                data[i++] = 200 - 1500 * (value - 0.50);
                data[i++] = 200 - 1500 * (value - 0.50);
                data[i++] = 64 - 1500 * (value - 0.50);
                data[i++] = 255;
            }else if ( value < 0.9 ){
                data[i++] = 64 * value;
                data[i++] = 128 * value;
                data[i++] = 64 * value;
                data[i++] = 255;
            }else{
                data[i++] = 255 * value;
                data[i++] = 255 * value;
                data[i++] = 255 * value;
                data[i++] = 255;
            }
        }
      }
    console.log(e);
  postMessage(e.data);
};

function doNoise(x, y, xMin, yMin, step, maxIterations) {
    var value = 0;
    for ( var i = 1; i <= maxIterations; i+=1 ){
        value += noise.simplex2(Math.pow(2, i) *(yMin + y * step), Math.pow(2, i) *(xMin + x * step)) / i;
    }
    return value;
}
