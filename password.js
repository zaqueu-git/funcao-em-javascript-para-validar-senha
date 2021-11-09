function password(value) {
    let res = [];

    res[0] = /^[a-zA-Z0-9@#._-]+$/g.test(value);
    res[1] = /[a-zA-Z]+/g.test(value);
    res[2] = /[0-9]+/g.test(value);
    res[3] = /[A-Z]+/g.test(value);
    res[4] = /[@#._-]+/g.test(value);

    res = res.filter(function (e) {
        return e == false;
    });

    if (res.length == 0) {
        return true;
    }

    return false;
}