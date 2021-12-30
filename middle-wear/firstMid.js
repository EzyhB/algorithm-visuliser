export function pureTest(req, res, next) {
    console.log("this is middlewear");
    next();
}