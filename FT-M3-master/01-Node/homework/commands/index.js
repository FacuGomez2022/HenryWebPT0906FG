var fs = require("fs");
const request = require("request");

function directory(args, done) {
  fs.readdir(".", function (err, files) {
    if (err) throw err;
    // files.forEach(function (file) {
    //   process.stdout.write(file.toString() + "\n");
    // });
    //process.stdout.write("prompt > ");
    let strFiles = '';
    files.forEach(function (file) {
    strFiles = strFiles + file + '\n';
    })
    done(strFiles)
  });
}


function pwd(args, done) {
  //process.stdout.write(process.cwd());
  done(process.cwd())
}
function date(args, done) {
  //process.stdout.write(Date());
    done(Date())
}
function echo(args, done) {
    //process.stdout.write(args.join(" "));
    done(args.join(" "))
}
function cat(args, done) {
  fs.readFile(args[0], function (err, data) {
    if (err) throw err;
    // process.stdout.write(data);
    // process.stdout.write("prompt > ");
    done (data)
  });
}
function head(args, done) {
  fs.readFile(args[0], "utf-8", function (err, data) {
    if (err) throw err;
    const prueba = data.split("\n").slice(0, 10).join("\n");
    // process.stdout.write(prueba);
    // process.stdout.write("prompt > ");
    done (prueba)
  });
}
function tail(args, done) {
  fs.readFile(args[0], "utf-8", function (err, data) {
    if (err) throw err;
    const prueba2 = data.split("\n").slice(-10).join("\n");
    // process.stdout.write(prueba2);
    // process.stdout.write("prompt > ");
    done(prueba2)
  });
}
function curl(args, done) {
  request(args[0], function (err, response, body) {
    if (err) throw err;
    // process.stdout.write(body);
    // process.stdout.write("prompt > ");
    done(body)

});
}
module.exports = {
  pwd,
  date,
  directory,
  echo,
  cat,
  head,
  tail,
  curl,
};
