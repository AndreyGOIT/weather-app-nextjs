import Navbar from "@/components/Navbar";
import { useQuery } from "@tanstack/react-query";


type WeatherResponse = {
  cod: string;
  message: number;
  cnt: number;
  list: {
    dt: number;
    main: {
      temp: number;
      feels_like: number;
      temp_min: number;
      temp_max: number;
      pressure: number;
      sea_level: number;
      grnd_level: number;
      humidity: number;
      temp_kf: number;
    };
    weather: {
      id: number;
      main: string;
      description: string;
      icon: string;
    }[];
    clouds: {
      all: number;
    };
    wind: {
      speed: number;
      deg: number;
      gust: number;
    };
    visibility: number;
    pop: number;
    snow?: {
      "3h": number;
    };
    sys: {
      pod: string;
    };
    dt_txt: string;
  }[];
  city: {
    id: number;
    name: string;
    coord: {
      lat: number;
      lon: number;
    };
    country: string;
    population: number;
    timezone: number;
    sunrise: number;
    sunset: number;
  };
};

export default function Home() {
  const { isLoading, error, data } = useQuery({
    queryKey: ['repoData'],
    queryFn: async () =>
      fetch('https://api.openweathermap.org/data/2.5/forecast?q=porvoo&units=metric&appid=9bf5dc62e49a8ed17a9243bb75f4b5fb&cnt=2').then((res) =>
        res.json(),
      ),
  })

  if (isLoading) return 'Loading...'

  return (
    <div className="flex flex-col gap-4 bg-gray-100 min-h-screen">
      <Navbar/>
    </div>
  );
}
