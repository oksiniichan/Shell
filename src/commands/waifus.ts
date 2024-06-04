const createWaifu = (): string[] => {
    const waifuMsgArr = [
        "<br>",
        "<img src='https://files.catbox.moe/417zx1.jpg' alt='lmao' width=320px>",
        "<br>",
        "<span class='command'>Kyoko Otonashi</span>",
        "<br>",
        "├─ Long black hair",
        "├─ Looks like Ayukawa but better.",
        "├─ Can cook.",
        "├─ Drives like Initial D.",
        "├─ Cute angry face.",
        "├─ Wonderful hairstyles.",
        "├─ Mature.",
        "├─ Can make me cry.",
        "└─ Straight Forward when needed.",
        "<br>"
    ]

    const waifu: string[] = [];

    waifuMsgArr.forEach((ele) => {
        waifu.push(ele);
    })

    return waifu;
}

export const WAIFUS = createWaifu();