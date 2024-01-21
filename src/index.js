import { Character } from "./js/Character.js";
import { Team } from "./js/Team.js";

const character = new Character('U_s_e_r-123', 'Bowerman');
const team = new Team();
team.add(character);
console.log(team.toArray());