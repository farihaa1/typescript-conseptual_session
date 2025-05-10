{
    type NickName = "Fariha" | "johra"
    const friend: NickName = "Fariha"

    type A = { name: string }
    type B = { name2: string }

    type AB = A & B;

    const robot: AB = {
        name: "Fariha",
        name2: ""
    }
    const bool = true
    if (bool) {
        console.log("first");
    }
    else {
        console.log("no");
    }
    let age = 13;
    const status = age >= 18 ? "Voter" : "Shishu"
    console.log(status)

    type Voter = typeof age extends number ? number : string;
}