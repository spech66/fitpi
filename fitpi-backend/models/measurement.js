var fs = require('fs');
//var readline = require('readline');
// Read files without readline+async+promises => this is a local fun project. no large files expected...

exports.all = function(cb) {
    fs.readFile("../fitpi-data/measurement.txt", 'utf8', function(err, data) {
        if (err) throw err;

        var list = [];

        data.toString().replace(/\r\n/g, '\n').split('\n').forEach(function (line) {
            if(line == '' || line.startsWith('#')) return;

            item = {};

            text = line.split(';');

            item.date = text[0];
            item.height = text[1];
            item.weight = text[2];

            list.push(item);
        })
        
        cb(null, list);
      });
}
