var CompileMe;
(function (CompileMe) {
    var i = 5;
    var s = 'hello';
    function init() {
        console.log('do stuff');
    }
    CompileMe.init = init;
})(CompileMe || (CompileMe = {}));
