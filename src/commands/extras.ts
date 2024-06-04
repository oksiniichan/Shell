const extraObj = {
  "commands": [
    [
      "'games'",
      "List of games I have played."
    ],
    [
      "'waifu'",
      "Meet my waifu UwU."
    ]
  ],
}

const createExtras = (): string[] => {
  const extra: string[] = []
  extra.push("<br>")

  extraObj.commands.forEach((ele) => {
    const SPACE = "&nbsp;";
    let string = "";
    string += SPACE.repeat(2);
    string += "<span class='command'>";
    string += ele[0];
    string += "</span>";
    string += SPACE.repeat(17 - ele[0].length);
    string += ele[1];
    extra.push(string);
  })
  extra.push("<br>")
  return extra
}

export const EXTRAS = createExtras();
