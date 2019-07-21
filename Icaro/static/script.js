function foobar() {
    var fname = '?param1=' + $('#fname').val();
    var lname = '&param2=' + $('#lname').val();
    $('#formName').attr('action', 'function' + fname + lname);
}
