 exports.page = "<!DOCTYPE html><html> <head><link rel='stylesheet' href='grid.css'>     <script type='text/javascript' src='http://code.jquery.com/jquery-1.10.2.min.js'></script>     <script type='text/javascript' src='underscore.js'></script>     <script type='text/javascript' src='grid.js'></script>   </head>   <body>  <div id='buttons'>   <div>     <button id='clear'>clear</button>     <button id='fill'>fill</button>   </div>    <div id='probBox'>     1st prob <input type='text' id='initial' value='.1'></input>          2nd prob <input type='text' id='second' value='.1'></input>          3rd prob <input type='text' id='third' value='.1'></input>   </div>   <div id='colorBox'>     1st color: <input type='text' id='color1'value='blue'></input>     2nd color: <input type='text' id='color2'value='red'></input>     3rd color: <input type='text' id='color3'value='red'></input>     background color: <input type='text' id='colorBack' value='white'></input>     border:<input type='text' id='colorBorder'></input>     size: <input type='text' id='size'> </input>     <button id='rebuild'>rebuild</button><form method='post' action='/save'  ><input id='savename' name='testname' type='text'></input> <button id='save'>save</button> </form> </div> </div>      </body> </html> "




exports.save = function(db){
    return 'hat';
};