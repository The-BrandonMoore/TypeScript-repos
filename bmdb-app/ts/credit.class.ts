import { Actor } from "./actor.class";
import { Movie } from "./movie.class";

export class Credit {
  movie: Movie;
  actor: Actor;
  role: string;

  constructor(movie: Movie, actor: Actor, role: string) {
    this.movie = movie;
    this.actor = actor;
    this.role = role;
  }
}
