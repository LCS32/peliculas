const baseUrl = 'https://api.themoviedb.org/3';

export class ConstantUri {
    public static readonly apiKey = 'e3a382a8ec2d6de693e54ac1508d0d4b';
    public static readonly validateWithLogin = baseUrl + '/authentication/token/validate_with_login';
    public static readonly tokenNew = baseUrl + '/authentication/token/new';
    public static readonly popularMovies = baseUrl + '/movie/popular';
    public static readonly movieDetail = baseUrl + '/movie';
    public static readonly pathImg = 'https://image.tmdb.org/t/p/original';


    
}