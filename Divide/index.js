module.exports = async function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');

    const num1 = parseFloat(req.query.num1)
    const num2 = parseFloat(req.query.num2)
    const sum = (num1 / num2);
    const responseMessage = `${num1} / ${num2} = ${sum}`

    context.res = {
        body: responseMessage,
        data: sum
    };
}