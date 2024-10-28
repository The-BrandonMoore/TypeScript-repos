export class Movie {
  title: string;
  year: number;
  rating: string;
  director: string;

  constructor(title: string, year: number, rating: string, director: string) {
    this.title = title;
    this.year = year;
    this.rating = rating;
    this.director = director;
  }
}
