import command from '../../config.json' assert {type: 'json'};

const createContacts = (): string[] => {
  const contacts: string[] = [];

  const SPACE = "&nbsp;";

  const EMAIL = "Email";
  const GITHUB = "Github";
  const DISCORD = "Discord";
  const YOUTUBE = "YouTube";

  const email = `<i class='fa-solid fa-envelope'></i> ${EMAIL}`;
  const github = `<i class='fa-brands fa-github'></i> ${GITHUB}`;
  const discord = `<i class='fa-brands fa-discord'></i> ${DISCORD}`;
  const youtube = `<i class="fa-brands fa-youtube"></i> ${YOUTUBE}`
  let string = "";

  contacts.push("<br>");
  contacts.push(command.contactsGreeting);
  contacts.push("<br>");
  string += SPACE.repeat(2);
  string += email;
  string += SPACE.repeat(17 - EMAIL.length);
  string += `<a target='_blank' href='mailto:${command.social.email}'>${command.social.email}</a>`;
  contacts.push(string);

  string = '';
  string += SPACE.repeat(2);
  string += github;
  string += SPACE.repeat(17 - GITHUB.length);
  string += `<a target='_blank' href='https://github.com/${command.social.github}'>github/${command.social.github}</a>`;
  contacts.push(string);

  string = '';
  string += SPACE.repeat(2);
  string += discord;
  string += SPACE.repeat(17 - DISCORD.length);
  string += `<a target='_blank' href='https://discordapp.com/users/802158953978396713'>${command.social.discord}</a>`;
  contacts.push(string);

  string = '';
  string += SPACE.repeat(2);
  string += youtube;
  string += SPACE.repeat(17 - YOUTUBE.length);
  string += `<a target='_blank' href='https://www.youtube.com/@oksiniichan'>${command.social.youtube}</a>`;
  contacts.push(string);

  contacts.push("<br>");
  return contacts
}

export const CONTACTS = createContacts();
