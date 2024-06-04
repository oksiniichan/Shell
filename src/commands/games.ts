const createGames = (): string[] => {
    const gameList = [
        "<br>",
        "<span class='keys'>• All time favorites</span>",
        "├─ Skyrim",
        "├─ Bioshock Infinite",
        "├─ Yakuza Series",
        "└─ Assassin’s Creed IV Black Flag",
        "<br>",
        "<span class='keys'>• The List</span>",
        "├─ Evil Tonight",
        "├─ Paper Lily",
        "├─ The House in Fata Morgana",
        "├─ World Of Horror",
        "├─ Needy Streamer Overload",
        "├─ Sayonara Wild Heart",
        "├─ Therapy with Dr Albert Krueger",
        "├─ Bioshock 1",
        "├─ Bioshock 2",
        "├─ Bioshock Infinite",
        "├─ Assassin’s Creed Brotherhood",
        "├─ Assassin’s Creed II",
        "├─ Assassin’s Creed Revelations",
        "├─ Assassin’s Creed Syndicate",
        "├─ Borderlands",
        "├─ Borderlands 2",
        "├─ Borderlands The Prequel",
        "├─ Prototype 1",
        "├─ Prototype 2",
        "├─ Call of Duty: Mordern Warfare 1",
        "├─ Call of Duty: Mordern Warfare 2",
        "├─ Call of Duty: Mordern Warfare 3",
        "├─ Call of Duty: Black Ops 3",
        "├─ Dota 2",
        "├─ Wild rift",
        "├─ The house in fata morgana",
        "├─ Undertale",
        "├─ Blasphemous 2",
        "├─ Dead Cells",
        "├─ Counter Strike: Global Offensive",
        "├─ Doki Doki Literature Club!",
        "├─ Far Cry 3 (WEEEEEEEEEEEEEEED)",
        "├─ Mafia II",
        "├─ NARUTO SHIPPUDEN (All of them)",
        "├─ Sifu",
        "├─ The Walking Dead",
        "├─ The Walking Dead: A New Frontier",
        "├─ The Walking Dead: Season Two",
        "├─ The Walking Dead: The Final Season",
        "├─ Splinter Cells",
        "├─ God Of War IV",
        "├─ Yakuza 0",
        "├─ Yakuza kiwami 1",
        "├─ Yakuza 3",
        "├─ Brothers: A Tale of Two Sons",
        "├─ Genshin Impact",
        "├─ Osu!",
        "├─ Valorant",
        "├─ Guilds Wars 2",
        "├─ Tekken 3",
        "├─ Road Rash",
        "└─ Motogp (dk which one)",
        "<br>"
    ]

    const games: string[] = [];

    gameList.forEach((ele) => {
        games.push(ele);
    })

    return games;
}

export const GAMES = createGames();