const createAbout = (): string[] => {
    const aboutMe = [
        "<br>",
        "<span class='keys'>•</span> I am oksi. I'm a student.",
        "<span class='keys'>•</span> Fond of games, photography, computers, naps, cats.",
        "<span class='keys'>•</span> I use Arch linux w/ DWM as I hate myself.",
        "<span class='keys'>•</span> I have a very bad sleep schedule.",
        "<span class='keys'>•</span> I prefer anime & indie japanese media.",
        "<span class='keys'>•</span> Favorite anime is <a target='_blank' href='https://anilist.co/user/oksiniichan/'>S.E.L</a>.",
        "<span class='keys'>•</span> INTP, although I don't believe in it.",
        "<span class='keys'>•</span> Favorite junk food is Egg Rolls.",
        "<span class='keys'>•</span> Favorite healthy food is Paneer.",
        "<span class='keys'>•</span> Favorite animal is Wolf, Cats.",
        "<span class='keys'>•</span> Favorite bird is Penguin.",
        "<span class='keys'>•</span> Favorite flower is Orchid.",
        "<span class='keys'>•</span> Favorite tree is Wysteria.",
        "<span class='keys'>•</span> Favorite letter is <span class='keys'>R</span>.",
        "<br>"
    ]

    const about: string[] = [];

    aboutMe.forEach((ele) => {
        about.push(ele);
    })

    return about;
}

export const ABOUT = createAbout();