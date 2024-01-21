import { Team } from "../Team";
import { Character } from "../Character";

test("should add a character to the team", () => {
  const bowerman = new Character('Олег', 'Bowerman');
  const team = new Team();
  team.add(bowerman);

  expect(team.members.has(bowerman)).toBeTruthy();
});

test("should not add a character that is already in the team", () => {
  const magician = new Character('Павел', 'Magician');
  const team = new Team();
  team.add(magician);

  expect(() => team.add(magician)).toThrow(
    `Ошибка! ${magician} уже есть в команде.`
  );
});

test("should add all characters to the team", () => {
    const team = new Team();
    const zombie = new Character('Григорий', 'Zombie');
    const undead = new Character('Максим', 'Undead');
    team.addAll(zombie, undead, zombie, undead, zombie);
    expect(team.members.has(zombie)).toBeTruthy();
    expect(team.members.has(undead)).toBeTruthy();
    expect(team.members.size).toBe(2);

  });

test("should return an array of members", () => {
  const team = new Team();
  const bowerman = new Character('Олег', 'Bowerman');
  const magician = new Character('Павел', 'Magician');
  const undead = new Character('Максим', 'Undead');
  const zombie = new Character('Григорий', 'Zombie');

  team.addAll(bowerman, undead, zombie, bowerman, magician, zombie);

  const members = team.toArray();
  expect(members).toEqual([bowerman, undead, zombie, magician]);
});
