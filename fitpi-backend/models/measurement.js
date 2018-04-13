var fs = require('fs');
//var readline = require('readline');
// Read files without readline+async+promises => this is a local fun project. no large files expected...

exports.all = function(cb) {
    fs.readFile("./fitpi-data/measurement.txt", 'utf8', function(err, data) {
        if (err) throw err;
        //console.log(data)

        var list = [];

        data.toString().replace(/\r\n/g, '\n').split('\n').forEach(function (line) {
            item = {};

            text = line.split(';');

            item.date = text[0];
            item.weight = text[1];

            list.push(item);
        })
        
        cb(null, list);
      });
}
