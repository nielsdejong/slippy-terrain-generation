importScripts( 'perlin/perlin.js');
noise.seed( Math.random()*10000 );

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
            var value = doNoise(x,y, xMin, yMin, step, 11);
            value = (value + 1 ) / 2.0;
            // Value is in a range from -1 to 1.

            if ( value < 0.5 ) {
                data[i++] = 64 * value;
                data[i++] = 64 * value;
                data[i++] = 255 * value;
                data[i++] = 255;
            }else if ( value < 0.51) {
                data[i++] = 200 - 1500 * (value - 0.50);
                data[i++] = 200 - 1500 * (value - 0.50);
                data[i++] = 64 - 1500 * (value - 0.50);
                data[i++] = 255;
            }else if ( value < 0.8){
                data[i++] = 64 * value;
                data[i++] = 150 * value;
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
    for ( var i = 1; i <= maxIterations; i++ ){

        var simplexZoom = Math.pow(2, i);
        var scaledSimplexZoom = 0.44 * simplexZoom;

        var yValue = (yMin + y * step);
        var xValue = (xMin + x * step);

        var simplexValue = noise.simplex2(
            scaledSimplexZoom * xValue,
            scaledSimplexZoom * yValue
        );

        var layer_weight = 1.0 / (Math.pow(simplexZoom, 0.65));
        value += ( simplexValue * layer_weight);
    }
    return value;
}
