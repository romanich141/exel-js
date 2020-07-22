import './scss/index.scss';


async function getRandomNumber() {
    await new Promise(resolve => {
        return resolve(111);
    })
};

getRandomNumber();

