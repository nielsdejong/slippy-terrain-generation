
noise.seed( 501 );

var po = org.polymaps;

var map = po.map()
    .container(document.getElementById("map").appendChild(po.svg("svg")))
    .zoomRange([0, 20])
    .zoom(1)
    .center({lat: -0.5, lon: 0.5})
    .add(po.interact())
    .add(po.hash()

);


map.add(po.procedural()
    .worker("terrain-worker.js")
);

map.add(po.compass()
    .pan("none")
);

map.add(po.geoJson()
    .on("load", load)
    .clip(false)
);


//var x = document.getElementsByClassName("map")[0];

// var defs = document.createElement("defs");
// var pattern = document.createElement("pattern");
// pattern.setAttribute("id", "pattern");
// pattern.setAttribute("patternUnits", "userSpaceOnUse");
// pattern.setAttribute("width", "10");
// pattern.setAttribute("height", "10");
// defs.appendChild( pattern );
// x.appendChild( defs );
// console.log(x);

function load(e) {
    //console.log(e);
    //var tile = e.tile, g = tile.element;
    // var bigness = Math.pow(2, e.tile.zoom);
    // var smallness = 1.0 / bigness;
    // for (let x = 0; x < 255; x++) {
    //     for (let y = 0; y < 255; y++) {
    //
    //         //var q = doNoise(x * smallness, y * smallness, tile.row, tile.column, 1000000 * smallness, 1);
    //         //if(x==0)
    //         //    console.log(q);
    //         //console.log(q);
    //         if ( Math.random() > 0.9999) {
    //             var point = g.appendChild(po.svg("image"));
    //             point.setAttribute("width", 0.0125 * bigness);
    //             point.setAttribute("x", Math.random() * 255);
    //             point.setAttribute("y", Math.random() * 255);
    //             point.setAttribute("height", 0.012g5 *bigness);
    //             //var url = "https://images.vexels.com/media/users/3/127601/isolated/lists/4874bc2389e71df4c479ad933b12226a-elliptical-tree-icon.png";
    //             //var url = "https://cdn0.iconfinder.com/data/icons/simple-flat-colored-trees/100/Tree_green_circle_branches-512.png";
    //             var url = "https://cdn0.iconfinder.com/data/icons/pixelo/32/tree.png";
    //             //var url = "https://image.flaticon.com/icons/png/128/72/72223.png";
    //             point.setAttribute("href", url);
    //         }
    //     }
    // }

    //point.setAttribute("fill", "url(\"https://d1nhio0ox7pgb.cloudfront.net/_img/g_collection_png/standard/64x64/tree.png\")");
    //point.setAttribute("fill", "red");

}

function doNoise(x, y, xMin, yMin, step, maxIterations) {
    var value = 0;
    for ( var i = 1; i <= maxIterations; i+=1 ){
        value += noise.simplex2(Math.pow(2, i) *(yMin + y * step), Math.pow(2, i) *(xMin + x * step)) / i;
    }
    return value;
}
