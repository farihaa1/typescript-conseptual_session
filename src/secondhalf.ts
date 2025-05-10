{
    // narrow
    function fn(input: string | number) {
        if (typeof input === 'number') {
            console.log('narrow number', input + 5)
        }
        else {
            console.log(input.length, " length")
        }
    }
    fn("52")

    type TUser = {
        name: string;
        age: number;
    }
    interface IUser {
        name: string;
        age: number;
    }

    type TLearner = {
        attitude: "learning"
    }

    type combined = TUser & TLearner;

    interface ILearner extends IUser {
        attitude: "learning"
    }
    const learner: combined = {
        name: "Fariha",
        age: 22,
        attitude: "learning"
    }
}