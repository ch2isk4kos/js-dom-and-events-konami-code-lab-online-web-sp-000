const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

function init() {

    let counter = 0;

    document.body.addEventListener('keydown', function(element) {

        const propertyKey = parseInt(element.detail);

        if (code[counter] === propertyKey) {
            counter++;

            if (counter === code.length) {
                alert('Hurray!');

                counter = 0;
            }
        } else {
            counter = 0;
        }

    });
}

init()
