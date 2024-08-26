import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import "./InfoBox.css";

export default function InfoBox({info}) {
  const INIT_URL =
    "https://images.unsplash.com/photo-1680352267694-a7fd4c33d4e1?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  return (
    <>
      <div className="info-box">
        <h3> Weather info </h3>
        <div className="card-container">
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              sx={{ height: 140 }}
              image={INIT_URL}
              title="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {info.city}
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                component={"span"}
              >
                <div> Temperature = {info.temp}&deg;C </div>
                <div> Humidity = {info.humidity} </div>
                <div> Minimum Temp = {info.tempMin}&deg;C </div>
                <div> Maximum Temp = {info.tempMax}&deg;C </div>
                <div> Feels Like = {info.feelsLike}&deg;C </div>
                <div>
                  {" "}
                  Weather = <i> "{info.weather}" </i>{" "}
                </div>
              </Typography>
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  );
}
