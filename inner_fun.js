function foo(a, b,prs) {
    console.log(a + " + " + b + " = " + (a + b));
    prs(a+b+"callback returned to intercaller")
}

function caller(f, v1, v2,p1) {
    // Call the given function
    f(v1, v2,p1);
}

function indirectCaller(f, v1, v2,p) {
    console.log(p,"ppp")
    // Call `caller`, who will in turn call `f`
    caller(f, v1, v2,p);
}

// Do it
indirectCaller(foo, 1, 2,function(ps){
    console.log(ps,"ps")
}); // alerts "1 + 2 = 3"
